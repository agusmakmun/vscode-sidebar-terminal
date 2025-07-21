import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Sidebar Terminal extension is now active!');
    vscode.window.showInformationMessage('Sidebar Terminal extension activated!');

    // Register the command to open terminal in bottom panel
    let disposable = vscode.commands.registerCommand('sidebar-terminal.open', () => {
        // Create and show terminal in the bottom panel
        const terminal = vscode.window.createTerminal('Sidebar Terminal');
        terminal.show();
        vscode.window.showInformationMessage('Terminal opened in bottom panel!');
    });

    context.subscriptions.push(disposable);

    // Register a simple webview that shows a button to open terminal
    console.log('Registering webview view provider for sidebar-terminal.terminalView');
    vscode.window.showInformationMessage('Registering webview provider...');
    
    const terminalView = vscode.window.registerWebviewViewProvider(
        'sidebar-terminal.terminalView',
        {
            resolveWebviewView(webviewView: vscode.WebviewView) {
                console.log('Sidebar terminal webview view resolved!');
                vscode.window.showInformationMessage('Webview view resolved!');
                
                // Set up the webview
                webviewView.webview.options = {
                    enableScripts: true,
                    localResourceRoots: []
                };

                // Create simple HTML content with a button
                webviewView.webview.html = getWebviewContent(webviewView.webview);

                // Handle messages from the webview
                webviewView.webview.onDidReceiveMessage(
                    message => {
                        if (message.command === 'openTerminal') {
                            vscode.commands.executeCommand('sidebar-terminal.open');
                        }
                    }
                );
            }
        }
    );

    context.subscriptions.push(terminalView);
}

function getWebviewContent(webview: vscode.Webview): string {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sidebar Terminal</title>
        <style>
            body {
                padding: 16px;
                font-family: var(--vscode-font-family);
                color: var(--vscode-foreground);
                background-color: var(--vscode-sideBar-background);
                margin: 0;
            }
            .container {
                text-align: center;
            }
            .terminal-icon {
                font-size: 48px;
                margin-bottom: 16px;
                display: block;
            }
            .title {
                font-size: 16px;
                font-weight: bold;
                margin-bottom: 8px;
            }
            .description {
                font-size: 12px;
                color: var(--vscode-descriptionForeground);
                margin-bottom: 20px;
                line-height: 1.4;
            }
            .open-btn {
                background-color: var(--vscode-button-background);
                color: var(--vscode-button-foreground);
                border: none;
                padding: 8px 16px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 12px;
                font-weight: bold;
                transition: background-color 0.2s;
                width: 100%;
            }
            .open-btn:hover {
                background-color: var(--vscode-button-hoverBackground);
            }
            .shortcut-hint {
                font-size: 10px;
                color: var(--vscode-descriptionForeground);
                margin-top: 12px;
                opacity: 0.8;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <span class="terminal-icon">💻</span>
            <div class="title">Sidebar Terminal</div>
            <div class="description">
                Click the button below to open a terminal in the bottom panel
            </div>
            <button class="open-btn" onclick="openTerminal()">
                📟 Open Terminal
            </button>
            <div class="shortcut-hint">
                Shortcut: ⇧⌘T (Mac) / Ctrl+Shift+T (Windows/Linux)
            </div>
        </div>
        <script>
            const vscode = acquireVsCodeApi();
            
            function openTerminal() {
                vscode.postMessage({
                    command: 'openTerminal'
                });
            }
        </script>
    </body>
    </html>`;
}

export function deactivate() {}
