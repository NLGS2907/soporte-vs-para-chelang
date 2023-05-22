"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
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
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map