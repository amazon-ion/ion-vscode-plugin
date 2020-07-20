# VSCode extension for ion 

This is a VSCode LSP extension for ion. 

## Functionality 

This one is for highlighting comment. The test file is under client/testFixture folder. 

## Running the Sample

- Run `npm install` in this folder. This installs all necessary npm modules in both the client and server folder
- Open VS Code on this folder.
- Press Ctrl+Shift+B to compile the client and server.
- Switch to the Debug viewlet.
- Select `Launch Client` from the drop down.
- Run the launch config.
- If you want to debug the server as well use the launch configuration `Attach to Server`
- In the [Extension Development Host] instance of VSCode, open a document in 'plain text' language mode.
  - Type `j` or `t` to see `Javascript` and `TypeScript` completion.
  - Enter text content such as `AAA aaa BBB`. The extension will emit diagnostics for all words in all-uppercase.

## Running the Test

- Run `npm i -g vscode-tmgrammar-test` in this folder. This installs the command line tool vscode-tmgrammar-test. 
- Run `vscode-tmgrammar-test -s source.ion -g syntaxes/ion.tmLanguage.json -t 'client/testFixture/highlight_comment.ion'` to do the test. 
- More about vscode-tmgrammar-test can be found here: https://github.com/PanAeon/vscode-tmgrammar-tes
