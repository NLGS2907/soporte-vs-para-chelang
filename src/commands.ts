import * as vscode from "vscode";
import {getTerminal} from "./utils";

export function runFileHandler() {
    const terminal = getTerminal("Consola CheLang");
    const conf = vscode.workspace.getConfiguration("chelang");
    let milicosFlag = (conf.get("runArgs.milicos")? " --milicos": "");
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

export function pruebaHandler() {
    var conf = vscode.workspace.getConfiguration("chelang");
	console.log(`${conf.get("runArgs.milicos")}`);
}