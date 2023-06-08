import * as path from 'path';
import { ExtensionContext, commands, workspace } from "vscode";
import { pruebaHandler, runFileHandler } from "./commands";

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: ExtensionContext) {
	context.subscriptions.push(commands.registerCommand('chelang.runFile', runFileHandler),
							   commands.registerCommand('chelang.printTest', pruebaHandler));

	// The server is implemented in node
	const serverModule = context.asAbsolutePath(
		path.join('server', 'out', 'server.js')
	);

	// If the extension is launched in debug mode then the debug server options are used
	// Otherwise the run options are used
	const serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: {
			module: serverModule,
			transport: TransportKind.ipc,
		}
	};

	// Options to control the language client
	const clientOptions: LanguageClientOptions = {
		// Register the server for plain text documents
		documentSelector: [{ scheme: 'file', language: 'chelang' }],
		synchronize: {
			// Notify the server about file changes to '.che files contained in the workspace
			fileEvents: workspace.createFileSystemWatcher('**/.che')
		}
	};

	// Create the language client and start the client.
	client = new LanguageClient(
		'CheLangLanguageServer',
		'Language Server de CheLang',
		serverOptions,
		clientOptions
	);

	// Start the client. This will also launch the server
	client.start();
}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
