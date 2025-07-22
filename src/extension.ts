import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Sidebar Terminal extension is now active!');

    // Register the command to open terminal in bottom panel
    let disposable = vscode.commands.registerCommand('sidebar-terminal.open', () => {
        // Check if there's already a terminal
        const existingTerminals = vscode.window.terminals;

        if (existingTerminals.length === 0) {
            // No terminal exists, create a new one
            const terminal = vscode.window.createTerminal('Terminal');
            terminal.show();
        } else {
            // Terminal already exists, just show it
            const activeTerminal = vscode.window.activeTerminal || existingTerminals[0];
            activeTerminal.show();
        }
    });

    context.subscriptions.push(disposable);

    // Register a simple webview that shows a button to open terminal
    console.log('Registering webview view provider for sidebar-terminal.terminalView');
    
    const terminalView = vscode.window.registerWebviewViewProvider(
        'sidebar-terminal.terminalView',
        {
            resolveWebviewView(webviewView: vscode.WebviewView) {
                console.log('Sidebar terminal webview view resolved!');

                // Set up the webview
                webviewView.webview.options = {
                    enableScripts: true,
                    localResourceRoots: []
                };

                // Automatically open terminal when sidebar is clicked
                vscode.commands.executeCommand('sidebar-terminal.open');
                
                // Close the sidebar view after opening terminal
                setTimeout(() => {
                    vscode.commands.executeCommand('workbench.action.closeSidebar');
                }, 200);

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
        <title>Terminal</title>
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
                background-color: rgb(120, 97, 236);
                color: white;
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
                background-color: rgb(100, 77, 216);
            }
        </style>
    </head>
    <body>
        <div class="container">
            <span class="terminal-icon">💻</span>
            <div class="title">Terminal</div>
            <div class="description">
                Click the button below to open a terminal in the bottom panel
            </div>
            <button class="open-btn" onclick="openTerminal()">
                Open Terminal
            </button>
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
