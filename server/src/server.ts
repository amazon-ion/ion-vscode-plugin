import {
	createConnection,
	TextDocuments,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	TextDocumentSyncKind,
	InitializeResult
} from 'vscode-languageserver';

import {
	TextDocument
} from 'vscode-languageserver-textdocument';

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
let connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager. 
let documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

connection.onInitialize((params: InitializeParams) => {
	return {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental,
			// Tell the client that this server supports code completion. 
			completionProvider: {
				resolveProvider: false
			}
		}
	}
});

connection.onInitialized(() => {});

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();
