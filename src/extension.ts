import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Sidebar Terminal extension is now active!');

    // Register the command to open terminal in bottom panel
    let disposable = vscode.commands.registerCommand('sidebar-terminal.open', () => {
        // Create and show terminal in the bottom panel
        const terminal = vscode.window.createTerminal('Sidebar Terminal');
        terminal.show();
        vscode.window.showInformationMessage('Terminal opened in bottom panel!');
    });

    context.subscriptions.push(disposable);

    const terminalView = vscode.window.registerWebviewViewProvider(
        'sidebar-terminal.terminalView',
        {
            resolveWebviewView(webviewView: vscode.WebviewView) {
                console.log('Sidebar terminal webview view resolved!');
                
                // Automatically open terminal when sidebar is clicked
                vscode.commands.executeCommand('sidebar-terminal.open');
                
                // Close the sidebar view after opening terminal
                setTimeout(() => {
                    vscode.commands.executeCommand('workbench.action.closeSidebar');
                }, 100);
                
                // Set up the webview (minimal content since we auto-open)
                webviewView.webview.options = {
                    enableScripts: true,
                    localResourceRoots: []
                };

                // Create minimal HTML content
                webviewView.webview.html = getWebviewContent(webviewView.webview);
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
                text-align: center;
            }
            .container {
                padding: 20px 0;
            }
            .terminal-icon {
                font-size: 32px;
                margin-bottom: 12px;
                display: block;
            }
            .title {
                font-size: 14px;
                font-weight: bold;
                margin-bottom: 8px;
            }
            .description {
                font-size: 11px;
                color: var(--vscode-descriptionForeground);
                line-height: 1.4;
            }
            .shortcut-hint {
                font-size: 10px;
                color: var(--vscode-descriptionForeground);
                margin-top: 16px;
                opacity: 0.7;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <span class="terminal-icon">💻</span>
            <div class="title">Terminal Opened</div>
            <div class="description">
                Terminal is now open in the bottom panel
            </div>
            <div class="shortcut-hint">
                Shortcut: ⇧⌘T (Mac) / Ctrl+Shift+T (Windows/Linux)
            </div>
        </div>
    </body>
    </html>`;
}

export function deactivate() {}
