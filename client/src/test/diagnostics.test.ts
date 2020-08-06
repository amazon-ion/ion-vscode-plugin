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
	test('blob check 1', async () => {
		await testDiagnostics(getDocUri('blob_1.ion'), [
			{ message: 'no viable alternative at input \'{{\'', range: toRange(0, 1, 0, 2), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('blob check 2', async () => {
		await testDiagnostics(getDocUri('blob_2.ion'), [
			{ message: 'no viable alternative at input \'{{\'', range: toRange(0, 1, 0, 2), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('clob check 1', async () => {
		await testDiagnostics(getDocUri('clob_1.ion'), [
			{ message: 'no viable alternative at input \'{{\'', range: toRange(0, 1, 0, 2), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('clob check 2', async () => {
		await testDiagnostics(getDocUri('clob_2.ion'), [
			{ message: 'no viable alternative at input \'{{\'', range: toRange(0, 1, 0, 2), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('clob check 3', async () => {
		await testDiagnostics(getDocUri('clob_3.ion'), [
			{ message: 'no viable alternative at input \'{{\'', range: toRange(0, 1, 0, 2), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('number check 1', async () => {
		await testDiagnostics(getDocUri('number_1.ion'), [
			{ message: 'no viable alternative at input \'0d0-3\'', range: toRange(0, 3, 0, 5), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('number check 2', async () => {
		await testDiagnostics(getDocUri('number_2.ion'), [
			{ message: 'no viable alternative at input \'12__34\'', range: toRange(0, 2, 0, 6), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('number check 3', async () => {
		await testDiagnostics(getDocUri('number_3.ion'), [
			{ message: 'no viable alternative at input \'00d0\'', range: toRange(0, 1, 0, 4), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('number check 4', async () => {
		await testDiagnostics(getDocUri('number_4.ion'), [
			{ message: 'no viable alternative at input \'3.4+\'', range: toRange(0, 3, 0, 4), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('number check 5', async () => {
		await testDiagnostics(getDocUri('number_5.ion'), [
			{ message: 'no viable alternative at input \'[ +\'', range: toRange(0, 2, 0, 3), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('number check 6', async () => {
		await testDiagnostics(getDocUri('number_6.ion'), [
			{ message: 'no viable alternative at input \'123.456_\'', range: toRange(0, 7, 0, 8), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('number check 7', async () => {
		await testDiagnostics(getDocUri('number_7.ion'), [
			{ message: 'no viable alternative at input \'123._456\'', range: toRange(0, 4, 0, 8), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('number check 8', async () => {
		await testDiagnostics(getDocUri('number_8.ion'), [
			{ message: 'no viable alternative at input \'123_\'', range: toRange(0, 3, 0, 4), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('number check 9', async () => {
		await testDiagnostics(getDocUri('number_9.ion'), [
			{ message: 'no viable alternative at input \'0e\'', range: toRange(0, 1, 0, 2), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('number check 10', async () => {
		await testDiagnostics(getDocUri('number_10.ion'), [
			{ message: 'no viable alternative at input \'0_xabcd\'', range: toRange(0, 1, 0, 7), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('number check 11', async () => {
		await testDiagnostics(getDocUri('number_11.ion'), [
			{ message: 'no viable alternative at input \'0xfg\'', range: toRange(0, 3, 0, 4), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('number check 12', async () => {
		await testDiagnostics(getDocUri('number_12.ion'), [
			{ message: 'no viable alternative at input \'( 1247/\'', range: toRange(0, 6, 0, 7), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('list check 1', async () => {
		await testDiagnostics(getDocUri('list_1.ion'), [
			{ message: 'no viable alternative at input \'[aaa bbb\'', range: toRange(0, 5, 0, 8), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('list check 2', async () => {
		await testDiagnostics(getDocUri('list_2.ion'), [
			{ message: 'no viable alternative at input \'[)\'', range: toRange(0, 1, 0, 2), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('list check 3', async () => {
		await testDiagnostics(getDocUri('list_3.ion'), [
			{ message: 'no viable alternative at input \'[\\n\'', range: toRange(1, 0, 1, 0), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('null check 1', async () => {
		await testDiagnostics(getDocUri('null_1.ion'), [
			{ message: 'no viable alternative at input \'null.\'', range: toRange(0, 5, 0, 5), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('null check 2', async () => {
		await testDiagnostics(getDocUri('null_2.ion'), [
			{ message: 'no viable alternative at input \'null.timestamps\'', range: toRange(0, 5, 0, 15), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('sexp check 1', async () => {
		await testDiagnostics(getDocUri('sexp_1.ion'), [
			{ message: 'no viable alternative at input \'(1,\'', range: toRange(0, 2, 0, 3), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('sexp check 2', async () => {
		await testDiagnostics(getDocUri('sexp_2.ion'), [
			{ message: 'no viable alternative at input \'(]\'', range: toRange(0, 1, 0, 2), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('struct check 1', async () => {
		await testDiagnostics(getDocUri('struct_1.ion'), [
			{ message: 'no viable alternative at input \'{e::\'', range: toRange(0, 3, 0, 4), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('struct check 2', async () => {
		await testDiagnostics(getDocUri('struct_2.ion'), [
			{ message: 'no viable alternative at input \'{]\'', range: toRange(0, 1, 0, 2), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('struct check 3', async () => {
		await testDiagnostics(getDocUri('struct_3.ion'), [
			{ message: 'no viable alternative at input \'{a:b,c:d,,\'', range: toRange(0, 9, 0, 10), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('struct check 4', async () => {
		await testDiagnostics(getDocUri('struct_4.ion'), [
			{ message: 'no viable alternative at input \'{a:b\\n\'', range: toRange(1, 0, 1, 0), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('struct check 5', async () => {
		await testDiagnostics(getDocUri('struct_5.ion'), [
			{ message: 'no viable alternative at input \'{a b\'', range: toRange(0, 3, 0, 4), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('struct check 6', async () => {
		await testDiagnostics(getDocUri('struct_6.ion'), [
			{ message: 'no viable alternative at input \'{a:}\'', range: toRange(0, 3, 0, 4), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('symbol check 1', async () => {
		await testDiagnostics(getDocUri('symbol_1.ion'), [
			{ message: 'no viable alternative at input \'1symbol\'', range: toRange(0, 1, 0, 7), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('annotation check 1', async () => {
		await testDiagnostics(getDocUri('annotation_1.ion'), [
			{ message: 'no viable alternative at input \'"annotation":\'', range: toRange(0, 12, 0, 13), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('annotation check 2', async () => {
		await testDiagnostics(getDocUri('annotation_2.ion'), [
			{ message: 'no viable alternative at input \'[ annotation::one, annotation:: ,\'', range: toRange(0, 32, 0, 33), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
		]);
	});
	test('annotation check 3', async () => {
		await testDiagnostics(getDocUri('annotation_3.ion'), [
			{ message: 'no viable alternative at input \'false:\'', range: toRange(0, 5, 0, 6), severity: vscode.DiagnosticSeverity.Warning, source: 'ex' }
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