"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProviderDisposable = void 0;
const vscode = require("vscode");
function getSelector() {
    return {
        language: "chelang",
        scheme: "file"
    };
}
function getProvider() {
    return new DocumentSemanticTokensProvider();
}
function getLegend() {
    const tokenTypesLegend = [
        "parameter", "variable", "function", "comment", "string", "keyword", "number",
        "regexp", "operator"
    ];
    const tokenModifiersLegend = [
        "declaration", "definition", "readonly", "modification", "documentation",
        "defaultLibrary"
    ];
    return new vscode.SemanticTokensLegend(tokenTypesLegend, tokenModifiersLegend);
}
class DocumentSemanticTokensProvider {
    async provideDocumentSemanticTokens(document, token) {
    }
}
function getProviderDisposable() {
    return vscode.languages.registerDocumentSemanticTokensProvider(getSelector(), getProvider(), getLegend());
}
exports.getProviderDisposable = getProviderDisposable;
//# sourceMappingURL=semantic.js.map