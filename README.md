
:warning: **This repo is considered an early release, under active early development, and the APIs/features are subject to change.** :warning:

# VSCode extension for Ion 

VSCode extension (plugin) that supports the Ion data format.  

## Functionality 

* Syntax highlighting. 

## Development 

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

- Run `npm test` 
