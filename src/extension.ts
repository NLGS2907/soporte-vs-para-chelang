import * as vscode from "vscode";
import {runFileHandler, pruebaHandler} from "./commands";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('chelang.runFile', runFileHandler));
	context.subscriptions.push(vscode.commands.registerCommand('chelang.printTest', pruebaHandler));
}

// This method is called when your extension is deactivated
export function deactivate() {}
