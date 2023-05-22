import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const runHandler = () => {
		const terminal = vscode.window.createTerminal("CheLang");
		terminal.show();
		terminal.sendText("chelang ejemplo.che");
	};

	let disposable = vscode.commands.registerCommand('chelang.runFile', runHandler);
	context.subscriptions.push(disposable);

	context.subscriptions.push(vscode.commands.registerCommand('chelang.printTest', () => {
		var conf = vscode.workspace.getConfiguration("chelang");
		console.log(`${conf.get("configurations")}`);
	}));
}

// This method is called when your extension is deactivated
export function deactivate() {}
