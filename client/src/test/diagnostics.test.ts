import * as vscode from 'vscode';
import * as assert from 'assert';
import { getDocUri, activate } from './helper';

suite('Should get diagnostics', () => {
	test('blob check 1', async () => {
		await testDiagnostics(getDocUri('blob1.ion'), [
			{ message: 'Invalid blob', range: toRange(0, 1, 0, 2), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('blob check 2', async () => {
		await testDiagnostics(getDocUri('blob2.ion'), [
			{ message: 'Invalid blob', range: toRange(0, 1, 0, 2), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('blob check 3', async () => {
		await testDiagnostics(getDocUri('blob3.ion'), [
			{ message: 'Unmatched curly braces', range: toRange(0, 1, 0, 2), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('blob check 4', async () => {
		await testDiagnostics(getDocUri('blob4.ion'), [
			{ message: 'Unmatched curly braces', range: toRange(0, 1, 0, 2), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('clob check 1', async () => {
		await testDiagnostics(getDocUri('clob1.ion'), [
			{ message: 'Invalid clob', range: toRange(0, 1, 0, 2), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('clob check 2', async () => {
		await testDiagnostics(getDocUri('clob2.ion'), [
			{ message: 'Invalid clob', range: toRange(0, 1, 0, 2), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('clob check 3', async () => {
		await testDiagnostics(getDocUri('clob3.ion'), [
			{ message: 'Invalid clob', range: toRange(0, 1, 0, 2), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('clob check 4', async () => {
		await testDiagnostics(getDocUri('clob4.ion'), [
			{ message: 'Invalid clob', range: toRange(0, 1, 0, 2), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
});

function toRange(sLine: number, sChar: number, eLine: number, eChar: number) {
	const start = new vscode.Position(sLine, sChar);
	const end = new vscode.Position(eLine, eChar);
	return new vscode.Range(start, end);
}

async function testDiagnostics(docUri: vscode.Uri, expectedDiagnostics: vscode.Diagnostic[]) {
	await activate(docUri);

	const actualDiagnostics = vscode.languages.getDiagnostics(docUri);

	assert.equal(actualDiagnostics.length, expectedDiagnostics.length);

	expectedDiagnostics.forEach((expectedDiagnostic, i) => {
		const actualDiagnostic = actualDiagnostics[i];
		assert.equal(actualDiagnostic.message, expectedDiagnostic.message);
		assert.deepEqual(actualDiagnostic.range, expectedDiagnostic.range);
		assert.equal(actualDiagnostic.severity, expectedDiagnostic.severity);
	});
}