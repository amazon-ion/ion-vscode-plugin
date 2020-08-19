import * as assert from 'assert'; 
import { TextEditor, EditorView, StatusBar, InputBox, ContentAssist, Workbench } from "vscode-extension-tester";

describe('auto-closing', () => {
    let editor: TextEditor;
    let view: EditorView;

    before(async function() {
        this.timeout(8000);
        await new Workbench().executeCommand('File: New File');
        await new Promise((res) => { setTimeout(res, 1000); });
        view = new EditorView();
        editor = new TextEditor(view);

        await new StatusBar().openLanguageSelection();
        const input = await InputBox.create();
        await input.setText('ion');
        await input.confirm();

        await editor.setText ('\n\n\n\n\n\n\n\n\n\n'); 
    });

    after(async () => {
        await editor.clearText();
        await view.closeAllEditors();
    });

    it('rounded brackets', async function() {
        this.timeout(5000);
        await editor.typeText (1, 1, '(');

        const line = await editor.getTextAtLine(1);
        assert.equal (line, '()');
    });

    it('square brackets', async function() {
        this.timeout(5000);
        await editor.typeText (2, 1, '[');

        const line = await editor.getTextAtLine(2);
        assert.equal (line, '[]');
    });

    it('curly brackets', async function() {
        this.timeout(5000);
        await editor.typeText (3, 1, '{}');

        const line = await editor.getTextAtLine(3);
        assert.equal (line, '{}');
    });

    it('brackets combination', async function() {
        this.timeout(5000);
        await editor.typeText (4, 1, '{');
        await editor.typeText (4, 2, '[');
        await editor.typeText (4, 3, '(');

        const line = await editor.getTextAtLine(4);
        assert.equal (line, '{[()]}');
    });

    it('single quote', async function() {
        this.timeout(5000);
        await editor.typeText (5, 1, '\'');

        const line = await editor.getTextAtLine(5);
        assert.equal (line, '\'\'');
    });

    it('double quote', async function() {
        this.timeout(5000);
        await editor.typeText (6, 1, '\"');

        const line = await editor.getTextAtLine(6);
        assert.equal (line, '\"\"');
    });

    it('single quote in double quote', async function() {
        // The auto-closing should not work in this case. 
        this.timeout(5000);
        await editor.typeText (7, 1, '\"\'');

        const line = await editor.getTextAtLine(7);
        assert.equal (line, '\"\'\"');
    });

    it('block comment', async function() {
        // The auto-closing should not work in this case. 
        this.timeout(5000);
        await editor.typeText (8, 1, '/*');

        const line = await editor.getTextAtLine(8);
        assert.equal (line, '/* */');
    });

    it('quotes in line comment', async function() {
        // The auto-closing should not work in this case. 
        this.timeout(5000);
        await editor.typeText (9, 1, '//\'\"');

        const line = await editor.getTextAtLine(9);
        assert.equal (line, '//\'\"');
    });

    it('quotes in block comment', async function() {
        // The auto-closing should not work in this case. 
        this.timeout(5000);
        await editor.typeText (10, 1, '/*\'\"');

        const line = await editor.getTextAtLine(10);
        assert.equal (line, '/*\'\" */');
    });
});