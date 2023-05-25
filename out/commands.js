"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pruebaHandler = exports.runFileHandler = void 0;
const vscode = require("vscode");
const utils_1 = require("./utils");
function runFileHandler() {
    const terminal = (0, utils_1.getTerminal)("Consola CheLang");
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
}
exports.runFileHandler = runFileHandler;
;
function pruebaHandler() {
    var conf = vscode.workspace.getConfiguration("chelang");
    console.log(`${conf.get("runArgs.milicos")}`);
}
exports.pruebaHandler = pruebaHandler;
//# sourceMappingURL=commands.js.map