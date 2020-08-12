
:warning: **This repo is considered an early release, under active early development, and the APIs/features are subject to change.** :warning:

# VSCode extension for Ion 

VSCode extension (plugin) that supports the Ion data format. You can download this extension from VSCode marketplace. 
GitHub repository: https://github.com/amzn/ion-vscode-plugin 

## Functionality 

- **Syntax highlighting** 
    Colorize the text document. 
-  **Error reporting** 
    Give a Squiggly line for the error part. For now, it only finds the first error in the editor. 
- **Formatting** 
    Press `Shift + Option + F`, then type `Format Document`. 
    
## Development 

- Run `npm install` in this folder. This installs all necessary npm modules in both the client and server folder
- Open VS Code on this folder.
- Press Ctrl+Shift+B to compile the client and server.
- Switch to the Debug viewlet.
- Select `Launch Client` from the drop down.
- Run the launch config.
- If you want to debug the server as well use the launch configuration `Attach to Server`

## Running the Test

- Run `npm test` 

