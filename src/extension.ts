'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { ConfigurationChangeEvent } from 'vscode';

const configScope = "backAndForwardButtons";
const backSetting = "backText";
const forwardSetting = "forwardText";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    let extSettings = vscode.workspace.getConfiguration(configScope);

    const button1 = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 99999);
    button1.text = extSettings.get(backSetting);
    button1.command = "workbench.action.navigateBack";
    button1.show();

    const button2 = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 99998);
    button2.text = extSettings.get(forwardSetting);
    button2.command = "workbench.action.navigateForward";
    button2.show();

    vscode.workspace.onDidChangeConfiguration((e: ConfigurationChangeEvent) => {
        if (e.affectsConfiguration(configScope)) {
            extSettings = vscode.workspace.getConfiguration(configScope);
            button1.text = extSettings.get(backSetting);
            button2.text = extSettings.get(forwardSetting);
        }
    });

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "vscode-back-forward-button" is now active!');

}

// this method is called when your extension is deactivated
export function deactivate() {
}