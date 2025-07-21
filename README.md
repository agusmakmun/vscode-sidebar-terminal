# Sidebar Terminal Extension

A VS Code extension that provides quick terminal access in the sidebar, similar to the Explorer view.

## Features

- **Sidebar Terminal View**: Access terminal controls directly from the sidebar
- **Keyboard Shortcut**: Quick terminal access with `Cmd+Shift+T` (Mac) or `Ctrl+Shift+T` (Windows/Linux)
- **Multiple Terminal Actions**: Open, create new, and focus terminals from the sidebar
- **VS Code Integration**: Seamlessly integrates with VS Code's native terminal system

## Installation

### Development Installation

1. Clone or navigate to the extension directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Compile the extension:
   ```bash
   npm run compile
   ```
4. Press `F5` in VS Code to launch the extension in a new window

### Production Installation

1. Package the extension:
   ```bash
   vsce package
   ```
2. Install the `.vsix` file in VS Code

## Usage

### Sidebar Access

1. Look for the **Sidebar Terminal** icon in the activity bar (left sidebar)
2. Click the icon to open the terminal sidebar view
3. Use the buttons in the sidebar to:
   - **📟 Open Terminal**: Create and show a new terminal
   - **➕ New Terminal**: Create an additional terminal
   - **🎯 Focus Terminal**: Bring focus to the active terminal

### Keyboard Shortcuts

- **`Cmd+Shift+T`** (Mac) / **`Ctrl+Shift+T`** (Windows/Linux): Open terminal in sidebar
- **`Ctrl+Shift+P`** / **`Cmd+Shift+P`**: Command palette → "Open Terminal in Sidebar"

### Command Palette

You can also access the terminal functionality through the command palette:
1. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
2. Type "Open Terminal in Sidebar"
3. Select the command to execute

## Development

### Project Structure

```
sidebar-terminal/
├── src/
│   ├── extension.ts          # Main extension logic
│   └── test/
│       └── extension.test.ts # Unit tests
├── package.json              # Extension manifest
├── tsconfig.json            # TypeScript configuration
└── README.md               # This file
```

### Building

```bash
npm run compile    # Compile TypeScript
npm run watch      # Watch for changes
npm run lint       # Run ESLint
npm test           # Run tests
```

### Testing

The extension includes comprehensive tests:

```bash
npm test
```

Tests cover:
- Extension activation
- Command registration
- Terminal creation
- Webview provider functionality

### Debugging

1. Set breakpoints in `src/extension.ts`
2. Press `F5` to launch extension in debug mode
3. Use the Debug Console to see extension output
4. Reload the extension window to test changes

## Configuration

The extension uses VS Code's native terminal system and doesn't require additional configuration. It integrates with:

- VS Code's built-in terminal
- Terminal profiles and settings
- Terminal appearance and behavior settings

## Troubleshooting

### Terminal Not Opening

1. Check if the extension is activated (look for "Sidebar Terminal extension is now active!" in Debug Console)
2. Verify the command is registered by checking the command palette
3. Check the Debug Console for error messages

### Sidebar Not Visible

1. Ensure the extension is properly installed and activated
2. Look for the "Sidebar Terminal" icon in the activity bar
3. Try reloading the VS Code window (`Ctrl+R` or `Cmd+R`)

### Keyboard Shortcut Not Working

1. Check if the shortcut conflicts with other extensions
2. Verify the keybinding in VS Code settings
3. Try using the command palette as an alternative

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run the test suite
6. Submit a pull request

## License

This extension is part of the cloud-labs project.
