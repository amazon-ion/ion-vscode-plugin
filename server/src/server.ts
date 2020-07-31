import {
	createConnection,
	Diagnostic,
	DiagnosticSeverity,
	DidChangeConfigurationNotification,
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

let hasConfigurationCapability: boolean = false;
let hasWorkspaceFolderCapability: boolean = false;
let hasDiagnosticRelatedInformationCapability: boolean = false;

connection.onInitialize((params: InitializeParams) => {
	let capabilities = params.capabilities;

	// Does the client support the `workspace/configuration` request?
	// If not, we will fall back using global settings
	hasConfigurationCapability = !!(
		capabilities.workspace && !!capabilities.workspace.configuration
	);
	hasWorkspaceFolderCapability = !!(
		capabilities.workspace && !!capabilities.workspace.workspaceFolders
	);
	hasDiagnosticRelatedInformationCapability = !!(
		capabilities.textDocument &&
		capabilities.textDocument.publishDiagnostics &&
		capabilities.textDocument.publishDiagnostics.relatedInformation
	);

	return {
		capabilities: {
			textDocumentSync: documents.syncKind,
			// Tell the client that the server supports code completion
			completionProvider: {
				resolveProvider: true
			},
			documentFormattingProvider: true,
			documentHighlightProvider: true,
		}
	};
});

connection.onInitialized(() => {
	if (hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(DidChangeConfigurationNotification.type, undefined);
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			connection.console.log('Workspace folder change event received.');
		});
	}
});

// The example settings
interface ExampleSettings {
	maxNumberOfProblems: number;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: ExampleSettings = { maxNumberOfProblems: 1000 };
let globalSettings: ExampleSettings = defaultSettings;

// Cache the settings of all open documents
let documentSettings: Map<string, Thenable<ExampleSettings>> = new Map();

connection.onDidChangeConfiguration(change => {
	if (hasConfigurationCapability) {
		// Reset all cached document settings
		documentSettings.clear();
	} else {
		globalSettings = <ExampleSettings>(
			(change.settings.languageServerExample || defaultSettings)
		);
	}

	// Revalidate all open text documents
	documents.all().forEach(validateTextDocument);
});

function getDocumentSettings(resource: string): Thenable<ExampleSettings> {
	if (!hasConfigurationCapability) {
		return Promise.resolve(globalSettings);
	}
	let result = documentSettings.get(resource);
	if (!result) {
		result = connection.workspace.getConfiguration({
			scopeUri: resource,
			section: 'languageServer'
		});
		documentSettings.set(resource, result);
	}
	return result;
}

// Only keep settings for open documents
documents.onDidClose(e => {
	documentSettings.delete(e.document.uri);
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
		console.log('recognizer -> ', recognizer); 
		console.log ('offendingSymbol -> ', offendingSymbol); 
		console.log ('line -> ', line); 
		console.log ('column -> ', column); 
		console.log ('msg -> ', msg); 
		console.log ('e -> ', e); 
		
		let diagnostic: Diagnostic = {
			severity: DiagnosticSeverity.Warning,
			range: Range.create(offendingSymbol.line - 1, column,
								offendingSymbol.line - 1, column + offendingSymbol.stop - offendingSymbol.start + 1),
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
const IonTextLexer = require('./IonTextLexer.js');
const IonTextParser = require('./IonTextParser.js');
const IonTextListener = require('./IonTextListener.js');

let documentText = "";

async function validateTextDocument(textDocument: TextDocument): Promise<void> {
	// In this simple example we get the settings for every validate run.
	let settings = await getDocumentSettings(textDocument.uri);

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
