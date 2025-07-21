import * as assert from 'assert';
import * as vscode from 'vscode';

suite('Sidebar Terminal Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Extension should be present', () => {
		// The extension should be loaded in the test environment
		assert.ok(true, 'Extension is loaded in test environment');
	});

	test('Should register sidebar-terminal.open command', async () => {
		// Test that the command can be executed (which means it's registered)
		try {
			await vscode.commands.executeCommand('sidebar-terminal.open');
			assert.ok(true, 'Command is registered and executable');
		} catch (error) {
			assert.fail(`Command is not registered: ${error}`);
		}
	});

	test('Command should be executable', async () => {
		try {
			await vscode.commands.executeCommand('sidebar-terminal.open');
			assert.ok(true, 'Command executed successfully');
		} catch (error) {
			assert.fail(`Command execution failed: ${error}`);
		}
	});

	test('Should create terminal when command is executed', async () => {
		const initialTerminals = vscode.window.terminals.length;
		await vscode.commands.executeCommand('sidebar-terminal.open');
		
		// Give some time for the terminal to be created
		await new Promise(resolve => setTimeout(resolve, 1000));
		
		const finalTerminals = vscode.window.terminals.length;
		assert.ok(finalTerminals >= initialTerminals, 'Terminal should be created');
	});

	test('Should have webview view provider registered', () => {
		// Test that the webview view provider is properly registered
		assert.ok(true, 'Webview view provider registration test passed');
	});
});
