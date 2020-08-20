import {
	createConnection,
	Diagnostic,
	DiagnosticSeverity,
	InitializeParams,
	ProposedFeatures,
	Range,
	TextDocuments, 
	TextDocumentSyncKind, 
	DocumentFormattingParams, 
	TextEdit
} from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';
import * as ion from 'ion-js';

let connection = createConnection(ProposedFeatures.all);

let documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

connection.onInitialize((params: InitializeParams) => {
	return {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental,
			completionProvider: {
				resolveProvider: true
			},
			documentFormattingProvider: true
		}
	};
});

connection.onInitialized(() => {});

connection.onDidChangeConfiguration(change => {
	documents.all().forEach(validateTextDocument);
});

documents.onDidChangeContent(change => {
	validateTextDocument(change.document);
});

documents.onDidClose (e => {
	let diagnostics: Diagnostic[] = []; 
	connection.sendDiagnostics ({ uri: e.document.uri, diagnostics }); 
}); 

// custom implementation of ANTLR's ErrorListener
class CustomErrorListener {
	private diagnostics: Diagnostic[] = [];

	public syntaxError(recognizer: any, offendingSymbol: any /*Token*/, line: number, column: number, msg: string, e: any): void { 
		let lineInEditor = line - 1; 
		let diagnostic: Diagnostic = {
			severity: DiagnosticSeverity.Warning, 
			range: Range.create(lineInEditor, column, lineInEditor, column + offendingSymbol.stop - offendingSymbol.start + 1),
			message: msg, 
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
}

const antlr4 = require('antlr4');
const IonTextLexer = require('../ion-js/IonTextLexer.js');
const IonTextParser = require('../ion-js/IonTextParser.js');
const IonTextListener = require('../ion-js/IonTextListener.js');

let document: TextDocument; 

async function validateTextDocument(textDocument: TextDocument): Promise<void> {
	document = textDocument; 
	let documentText: string = textDocument.getText(); 
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

connection.onDocumentFormatting(
	(params: DocumentFormattingParams): TextEdit[] => {
		let documentText: string = document.getText (); 
		let reader = ion.makeReader(documentText);
		let writer = ion.makePrettyWriter();
		writer.writeValues(reader);
		writer.getBytes();
		writer.close();

		documentText = String.fromCharCode.apply(null, Array.from(writer.getBytes()));

		let textEdits: TextEdit[] = [];
		textEdits.push(TextEdit.replace(Range.create(0, 0, document.lineCount + 1, 0), documentText));

		return textEdits;
	}
);

documents.listen(connection);

connection.listen();
