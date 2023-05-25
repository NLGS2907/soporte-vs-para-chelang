"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTerminal = void 0;
const vscode_1 = require("vscode");
function getTerminal(name) {
    for (let terminal of vscode_1.window.terminals) {
        if (terminal.name === name) {
            return terminal;
        }
    }
    return vscode_1.window.createTerminal(name);
}
exports.getTerminal = getTerminal;
//# sourceMappingURL=utils.js.map