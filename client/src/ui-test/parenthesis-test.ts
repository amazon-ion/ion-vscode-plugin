import * as assert from 'assert'; 
import { TextEditor, EditorView, StatusBar, InputBox, Workbench } from "vscode-extension-tester";

describe('auto-closing', () => {
    let editor: TextEditor;
    let view: EditorView;
    let DEFAULT_TIMEOUT : number = 5000; 

    before(async function() {
        this.timeout (DEFAULT_TIMEOUT);
        await new Workbench().executeCommand('File: New File');
        await sleep (1000); 
        view = new EditorView();
        editor = new TextEditor(view);

        await new StatusBar().openLanguageSelection();
        const input = await InputBox.create();
        await input.setText('ion');
        await input.confirm();

        await editor.setText ('\n\n\n\n\n\n\n\n\n\n\n\n\n\n'); 
    });

    after(async () => {
        await editor.clearText();
        await view.closeAllEditors();
    });

    it('rounded brackets', async function() {
        this.timeout(DEFAULT_TIMEOUT);
        await editor.typeTextAt (1, 1, '(');

        const line = await editor.getTextAtLine(1);
        assert.equal (line, '()');
    });

    it('square brackets', async function() {
        this.timeout(DEFAULT_TIMEOUT);
        await editor.typeTextAt (2, 1, '[');

        const line = await editor.getTextAtLine(2);
        assert.equal (line, '[]');
    });

    it('curly brackets', async function() {
        this.timeout(DEFAULT_TIMEOUT);
        await editor.typeTextAt (3, 1, '{');

        const line = await editor.getTextAtLine(3);
        assert.equal (line, '{}');
    });

    it('brackets combination', async function() {
        this.timeout(DEFAULT_TIMEOUT);
        await editor.typeTextAt (4, 1, '{');
        await editor.typeTextAt (4, 2, '[');
        await editor.typeTextAt (4, 3, '(');

        const line = await editor.getTextAtLine(4);
        assert.equal (line, '{[()]}');
    });

    it('single quote', async function() {
        this.timeout(DEFAULT_TIMEOUT);
        await editor.typeTextAt (5, 1, '\'');

        const line = await editor.getTextAtLine(5);
        assert.equal (line, '\'\'');
    });

    it('double quotes', async function() {
        this.timeout(DEFAULT_TIMEOUT);
        await editor.typeTextAt (6, 1, '\"');

        const line = await editor.getTextAtLine(6);
        assert.equal (line, '\"\"');
    });

    it('triple quotes', async function() {
        this.timeout(DEFAULT_TIMEOUT);
        await editor.typeTextAt (7, 1, '\'\'\'');

        const line = await editor.getTextAtLine(7);
        assert.equal (line, '\'\'\'\'\'\'');
    });

    it('single quote in double quotes', async function() {
        // Auto-closing should not work in string. 
        this.timeout(DEFAULT_TIMEOUT);
        await editor.typeTextAt (8, 1, '\"\'');

        const line = await editor.getTextAtLine(8);
        assert.equal (line, '\"\'\"');
    });

    it('single quote in triple quotes', async function() {
        // Auto-closing should not work in string. 
        this.timeout(DEFAULT_TIMEOUT);
        await editor.typeTextAt (9, 1, '\'\'\'');
        await editor.typeTextAt (9, 4, '  ');
        await editor.typeTextAt (9, 5, '\'');

        const line = await editor.getTextAtLine(9);
        assert.equal (line, '\'\'\' \' \'\'\'');
    });

    it('double quotes in triple quotes', async function() {
        // Auto-closing should not work in string. 
        this.timeout(DEFAULT_TIMEOUT);
        await editor.typeTextAt (10, 1, '\'\'\'\"');

        const line = await editor.getTextAtLine(10);
        assert.equal (line, '\'\'\'\"\'\'\'');
    });

    it('triple quotes in double quotes', async function() {
        // Auto-closing should not work in string. 
        this.timeout(DEFAULT_TIMEOUT);
        await editor.typeTextAt (11, 1, '\"\'\'\'');

        const line = await editor.getTextAtLine(11);
        assert.equal (line, '\"\'\'\'\"');
    });

    it('block comment', async function() {
        this.timeout(DEFAULT_TIMEOUT);
        await editor.typeTextAt (12, 1, '/*');

        const line = await editor.getTextAtLine(12);
        assert.equal (line, '/* */');
    });

    it('quotes in line comment', async function() {
        // Auto-closing should not work in comment. 
        this.timeout(DEFAULT_TIMEOUT);
        await editor.typeTextAt (13, 1, '//\'\"\'\'\'');

        const line = await editor.getTextAtLine(13);
        assert.equal (line, '//\'\"\'\'\'');
    });

    it('quotes in block comment', async function() {
        // Auto-closing should not work in comment. 
        this.timeout(DEFAULT_TIMEOUT);
        await editor.typeTextAt (14, 1, '/*\'\"\'\'\'');

        const line = await editor.getTextAtLine(14);
        assert.equal (line, '/*\'\"\'\'\' */');
    });

    it('blobs and clobs', async function() {
        this.timeout(DEFAULT_TIMEOUT);
        await editor.typeTextAt (15, 1, '{{');
        await editor.typeTextAt (15, 3, ' 1111 ');

        const line = await editor.getTextAtLine(15);
        assert.equal (line, '{{ 1111 }}');
    });
});

async function sleep(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
