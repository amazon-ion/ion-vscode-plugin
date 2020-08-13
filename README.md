
:warning: **This repo is considered an early release, under active early development, and the APIs/features are subject to change.** :warning:

# VSCode extension for Ion 

[VSCode extension (plugin)](https://marketplace.visualstudio.com/items?itemName=TheIonTeam.ion-extension) that supports the Ion data format.

## Functionality 

- **Syntax highlighting** 
    Colorize the Ion values in your document. 
-  **Error reporting** 
    Reports errors in the editor and the "Problems" tab. Currently supports whole document validation. 
- **Formatting** 
    Formats the whole document. Currently support whole error-free document formatting. 
Usage: Press `Shift + Option + F`, then select `Format Document`. 
    
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

