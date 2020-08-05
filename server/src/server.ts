import {
	createConnection,
	Diagnostic,
	DiagnosticSeverity,
	InitializeParams,
	ProposedFeatures,
	Range,
	TextDocument,
	TextDocuments
} from 'vscode-languageserver';
import * as ion from 'ion-js';

// Create a connection for the server. The connection uses Node's IPC as a transport.
// Also include all preview / proposed LSP features.
let connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager. The text document manager
// supports full document sync only
let documents: TextDocuments = new TextDocuments();

connection.onInitialize((params: InitializeParams) => {
	return {
		capabilities: {
			textDocumentSync: documents.syncKind,
			// Tell the client that the server supports code completion
			completionProvider: {
				resolveProvider: true
			},
			documentFormattingProvider: true
		}
	};
});

connection.onInitialized(() => {});

connection.onDidChangeConfiguration(change => {
	// Revalidate all open text documents
	documents.all().forEach(validateTextDocument);
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
	validateTextDocument(change.document);
});

// custom implementation of ANTLR's ErrorListener
class CustomErrorListener {
	private diagnostics: Diagnostic[] = [];

	public syntaxError(recognizer: any, offendingSymbol: any /*Token*/, line: number, column: number, msg: string, e: any): void { 
		console.log (offendingSymbol); 
		
		let lineInEditor = line - 1; 
		
		let diagnostic: Diagnostic = {
			severity: DiagnosticSeverity.Warning, 
			range: Range.create(lineInEditor, column, lineInEditor, column + offendingSymbol.stop - offendingSymbol.start + 1),
			message: this._getErrorMessage (msg, offendingSymbol), 
			source: 'ex', 
		};
		this.diagnostics.push(diagnostic);
	}

	public reportAmbiguity(recognizer: any, dfa: any, startIndex: number, stopIndex: number, exact: any, ambigAlts: any, configs: any) {
		// TBD
	}

	public reportAttemptingFullContext(recognizer: any, dfa: any, startIndex: number, stopIndex: number,
			conflictingAlts: any, configs: any): void {
		// TBD
	}

	public reportContextSensitivityn(recognizer: any, dfa: any, startIndex: number, stopIndex: number, prediction: any, configs: any) {
		// TBD
	}

	public getDiagnostics(): Diagnostic[] {
		return this.diagnostics;
	}

	private _getErrorMessage (msg: string, offendingSymbol: any) : string {
		let text: string = offendingSymbol.source[1].strdata; 
		let errorPiece: string = text.substring (32, text.length - 1); 
		let start: number = offendingSymbol.start; 
		console.log (offendingSymbol); 
		console.log (text); 
		console.log (errorPiece); 

		let space = ['\t', '\v', '\n', '\r', '\b', '\f', ' ']; 

		if (text[start] === '{' && start >= 1 && text[start - 1] === '{'){	// blob or clob 
			let i : number = start + 1; 
			while (i < text.length && space.includes (text[i]) ){
				i ++; 
			}
			let j: number = i; 
			while (j < text.length && text[j] != '}'){  // Find the close curly brace. 
				j ++; 
			}
			if (j === text.length || j === text.length - 1 || text[j + 1] != '}'){  
				msg = 'Unmatched curly braces'; 
			} else if (text[i] === '\"' || (i + 3 < text.length && text[i] === '\'' && text[i + 1] === '\'' && text[i + 2] === '\'')){  // clob
				msg = 'Invalid clob'; 
			} else {  // blob 
				msg = 'Invalid blob'; 
			}
		}

		return msg; 
	}
}

const antlr4 = require('antlr4');
const IonTextLexer = require('./IonTextLexer.js');
const IonTextParser = require('./IonTextParser.js');
const IonTextListener = require('./IonTextListener.js');

let documentText = "";

async function validateTextDocument(textDocument: TextDocument): Promise<void> {
	documentText = textDocument.getText(); 
	const chars = new antlr4.InputStream(documentText); 
	const lexer = new IonTextLexer.IonTextLexer(chars); 
	lexer.strictMode = false; 

	const tokens = new antlr4.CommonTokenStream(lexer); 
	const parser = new IonTextParser.IonTextParser(tokens); 

	const errorListener = new CustomErrorListener(); 
	parser.addErrorListener(errorListener); 

	const listener = new IonTextListener.IonTextListener(); 
	const tree = parser.top_level(); 
	antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree); 

	// codeCompletions = Object.keys(listener.symbols); 
	// console.log('codeCompletions: ' + codeCompletions); 

	let diagnostics = errorListener.getDiagnostics(); 
	connection.sendDiagnostics({ uri: textDocument.uri, diagnostics }); 
}

documents.listen(connection);

connection.listen();
