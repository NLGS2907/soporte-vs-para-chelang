import { window } from "vscode";

export function getTerminal(name: string) {
	for (let terminal of window.terminals) {
		if (terminal.name === name) {
			return terminal;
		}
	}
	return window.createTerminal(name);
}