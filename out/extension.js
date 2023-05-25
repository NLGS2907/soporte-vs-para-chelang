"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function getTerminal(name) {
    for (let terminal of vscode.window.terminals) {
        if (terminal.name === name) {
            return terminal;
        }
    }
    return vscode.window.createTerminal(name);
}
function activate(context) {
    const runHandler = () => {
        const terminal = getTerminal("Consola CheLang");
        const conf = vscode.workspace.getConfiguration("chelang");
        let milicosFlag = (conf.get("runArgs.milicos") ? " --milicos" : "");
        const editor = vscode.window.activeTextEditor;
        if (editor === undefined) {
            vscode.window.showErrorMessage("Che pa, no hay editor activo.");
            return;
        }
        if (editor?.document.languageId !== "chelang") {
            vscode.window.showErrorMessage("A ver, crack: este no es un archivo '.che'.");
            return;
        }
        if (editor.document.isDirty) {
            editor.document.save();
        }
        terminal.show();
        terminal.sendText(`chelang "${editor.document.fileName}"${milicosFlag}`);
    };
    let disposable = vscode.commands.registerCommand('chelang.runFile', runHandler);
    context.subscriptions.push(disposable);
    context.subscriptions.push(vscode.commands.registerCommand('chelang.printTest', () => {
        var conf = vscode.workspace.getConfiguration("chelang");
        console.log(`${conf.get("runArgs.milicos")}`);
    }));
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map