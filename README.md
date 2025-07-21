# Sidebar Terminal Extension

A VS Code extension that provides quick terminal access from the sidebar with a clean, simple interface.

## Features

- **🖥️ Sidebar Terminal Interface**: Clean terminal access directly from the sidebar
- **⌨️ One-Click Terminal**: Open terminal in bottom panel with a single click
- **🎨 VS Code Styling**: Native VS Code theme integration
- **⌨️ Keyboard Shortcut**: Quick access with `Cmd+Shift+T` (Mac) or `Ctrl+Shift+T` (Windows/Linux)
- **🚀 Simple & Fast**: Lightweight extension with minimal overhead

## Installation

### From VSIX Package

1. Download the latest `.vsix` file from releases
2. In VS Code, go to Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Click the "..." menu → "Install from VSIX..."
4. Select the downloaded `.vsix` file
5. Restart VS Code

### Development Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/agusmakmun/vscode-sidebar-terminal.git
   cd vscode-sidebar-terminal
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Compile the extension:
   ```bash
   npm run compile
   ```

4. Press `F5` in VS Code to launch the extension in a new window

### Building for Distribution

```bash
npm run compile    # Compile TypeScript
vsce package       # Create .vsix package
```

## Usage

### Quick Start

1. **Look for the Sidebar Terminal icon** in the activity bar (left sidebar)
2. **Click the icon** to open the terminal sidebar view
3. **Click "📟 Open Terminal"** to open a terminal in the bottom panel
4. **Use the terminal** as you normally would

### What You'll See

When you click the Sidebar Terminal icon, you'll see:
- 💻 Terminal icon
- "Sidebar Terminal" title
- "Click the button below to open a terminal in the bottom panel"
- 📟 "Open Terminal" button
- Keyboard shortcut hint

### Keyboard Shortcuts

- **`Cmd+Shift+T`** (Mac) / **`Ctrl+Shift+T`** (Windows/Linux): Open terminal
- **`Ctrl+Shift+P`** / **`Cmd+Shift+P`**: Command palette → "Open Terminal in Sidebar"

## Development

### Project Structure

```
vscode-sidebar-terminal/
├── src/
│   └── extension.ts          # Main extension logic
├── images/
│   └── terminal-icon.svg     # Sidebar icon
├── package.json              # Extension manifest
├── tsconfig.json            # TypeScript configuration
├── .vscodeignore            # Files excluded from package
├── .gitignore               # Git ignore rules
└── README.md               # This file
```

### Available Scripts

```bash
npm run compile    # Compile TypeScript to JavaScript
npm run watch      # Watch for changes and recompile
npm run lint       # Run ESLint
npm run test       # Run tests
vsce package       # Create VSIX package
```

### Debugging

1. Set breakpoints in `src/extension.ts`
2. Press `F5` to launch extension in debug mode
3. Check the Debug Console for extension output
4. Reload the extension window (`Ctrl+R` / `Cmd+R`) to test changes

## How It Works

The extension uses VS Code's **WebviewView API** to create a custom sidebar view that:

1. **Registers a WebviewView provider** for the sidebar
2. **Creates a simple HTML interface** with a terminal button
3. **Handles button clicks** to open terminals in the bottom panel
4. **Integrates with VS Code's native terminal system**

## Configuration

The extension requires no configuration and works out of the box. It integrates with:

- VS Code's built-in terminal system
- Your existing terminal profiles and settings
- VS Code's theme and appearance settings

## Troubleshooting

### Extension Not Working

1. **Check activation**: Look for "Sidebar Terminal extension activated!" in Debug Console
2. **Verify installation**: Ensure the extension appears in Extensions list
3. **Restart VS Code**: Sometimes a restart is needed after installation

### Sidebar Icon Not Visible

1. **Check activity bar**: Look for the terminal icon in the left sidebar
2. **Reload window**: Press `Ctrl+R` / `Cmd+R` to reload
3. **Check extensions**: Ensure the extension is enabled

### "No Data Provider" Error

1. **Complete uninstall**: Remove the extension completely
2. **Restart VS Code**: Close and reopen VS Code
3. **Reinstall**: Install the latest `.vsix` file
4. **Restart again**: Restart VS Code after installation

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests (`npm test`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

### v0.0.1
- Initial release
- Sidebar terminal interface
- One-click terminal opening
- VS Code theme integration
- Keyboard shortcut support
