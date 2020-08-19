import * as vscode from 'vscode';
import * as assert from 'assert';
import { getDocUri, activate} from './helper';

import {TextEditor, EditorView} from 'vscode-extension-tester'; 

suite('parenthesis', () => {
	test('parenthesis highlighting', async () => {
		await testParenthesisAutoClosing(getDocUri('parenthesis/parenthesis.ion'));
	});
});

async function testParenthesisAutoClosing(docUri: vscode.Uri) {
	await activate(docUri);
	const textDocument: vscode.TextDocument = vscode.window.activeTextEditor.document; 

	let textDocument_AF: vscode.TextDocument;
	await vscode.workspace.openTextDocument(docUri).then(doc => {
		textDocument_AF = doc;
	});

	const editor = new TextEditor();

	assert.equal(textDocument.getText (), "()"); 
}
