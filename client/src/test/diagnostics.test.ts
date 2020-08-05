import * as vscode from 'vscode';
import * as assert from 'assert';
import { getDocUri, activate } from './helper';

suite('Should get diagnostics', () => {
	test('timestamp check 1', async () => {
		await testDiagnostics(getDocUri('timestamp_1.ion'), [
			{ message: 'no viable alternative at input \'2011-0\'', range: toRange(0, 4, 0, 6), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('timestamp check 2', async () => {
		await testDiagnostics(getDocUri('timestamp_2.ion'), [
			{ message: 'no viable alternative at input \'1997-2\'', range: toRange(0, 4, 0, 6), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('timestamp check 3', async () => {
		await testDiagnostics(getDocUri('timestamp_3.ion'), [
			{ message: 'no viable alternative at input \'2000-13\'', range: toRange(0, 4, 0, 7), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('timestamp check 4', async () => {
		await testDiagnostics(getDocUri('timestamp_4.ion'), [
			{ message: 'no viable alternative at input \'97-0\'', range: toRange(0, 2, 0, 4), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('timestamp check 5', async () => {
		await testDiagnostics(getDocUri('timestamp_5.ion'), [
			{ message: 'no viable alternative at input \'2007/\'', range: toRange(0, 4, 0, 5), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('timestamp check 6', async () => {
		await testDiagnostics(getDocUri('timestamp_6.ion'), [
			{ message: 'no viable alternative at input \'2007:\'', range: toRange(0, 4, 0, 5), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('timestamp check 7', async () => {
		await testDiagnostics(getDocUri('timestamp_7.ion'), [
			{ message: 'no viable alternative at input \'2004-12-11T12\'', range: toRange(0, 11, 0, 13), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('timestamp check 8', async () => {
		await testDiagnostics(getDocUri('timestamp_8.ion'), [
			{ message: 'no viable alternative at input \'2004-12-11T12\'', range: toRange(0, 11, 0, 13), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('timestamp check 9', async () => {
		await testDiagnostics(getDocUri('timestamp_9.ion'), [
			{ message: 'no viable alternative at input \'2004-12-11T12\'', range: toRange(0, 11, 0, 13), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('timestamp check 10', async () => {
		await testDiagnostics(getDocUri('timestamp_10.ion'), [
			{ message: 'no viable alternative at input \'2004-12-11T12\'', range: toRange(0, 11, 0, 13), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
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