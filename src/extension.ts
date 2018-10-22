'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    const button1 =  vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 99999);
    button1.text = "<";  
    button1.command = "workbench.action.navigateBack";        
    button1.show();

    const button2 =  vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 99998);
    button2.text = ">";  
    button2.command = "workbench.action.navigateForward";  
    button2.show();

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "vscode-back-forward-button" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.sayHello', () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World!');
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}