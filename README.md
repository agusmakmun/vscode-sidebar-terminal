# Sidebar Terminal Extension

A VS Code extension that provides quick terminal access from the sidebar with a clean, simple interface.

## Features

- **🖥️ Sidebar Terminal Interface**: Clean terminal access directly from the sidebar
- **⌨️ One-Click Terminal**: Open terminal in bottom panel with a single click
- **🎨 Custom Styling**: Beautiful purple button with hover effects
- **🚀 Simple & Fast**: Lightweight extension with minimal overhead
- **🎯 No Conflicts**: Works alongside VS Code's built-in terminal shortcuts

<img width="869" height="591" alt="image" src="https://github.com/user-attachments/assets/62962a42-f0ec-4c33-a276-652e8411a576" />

## Installation

### From VSIX Package

#### Method 1: Using VS Code UI
1. Download the latest `.vsix` file from [releases](https://github.com/agusmakmun/vscode-sidebar-terminal/releases)
2. In VS Code, go to Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Click the "..." menu (three dots) in the Extensions panel
4. Select "Install from VSIX..."
5. Choose the downloaded `.vsix` file
6. Click "Install"
7. Restart VS Code when prompted

#### Method 2: Using Command Line
```bash
# Download the VSIX file
wget https://github.com/agusmakmun/vscode-sidebar-terminal/raw/v0.0.1/sidebar-terminal-0.0.1.vsix

# Install using VS Code CLI
code --install-extension sidebar-terminal-0.0.1.vsix
```

#### Method 3: Drag and Drop
1. Download the `.vsix` file to your computer
2. Open VS Code
3. Drag the `.vsix` file directly into the VS Code window
4. Click "Install" when prompted
5. Restart VS Code

### For Code-Server

If you're using code-server, you can install the extension directly:

```bash
wget https://github.com/agusmakmun/vscode-sidebar-terminal/raw/v0.0.1/sidebar-terminal-0.0.1.vsix
code-server --install-extension sidebar-terminal-0.0.1.vsix
```

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

### Publishing

#### Publishing to VS Code Marketplace

1. **Install vsce globally** (if not already installed):
```bash
npm install -g @vscode/vsce
```

2. **Login to your publisher account**:
```bash
vsce login <publisher-name>
```

3. **Publish the extension**:
```bash
vsce publish
```

#### Publishing to Open VSX Registry

1. **Install ovsx**:
```bash
npm install -g ovsx
```

2. **Publish to Open VSX**:
```bash
ovsx publish
```

#### Manual Installation

For manual installation without publishing:

1. **Build the extension**:
```bash
npm run compile
vsce package
```

2. **Install in VS Code**:
   - Open VS Code
   - Go to Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`)
   - Click the "..." menu → "Install from VSIX..."
   - Select the `sidebar-terminal-0.0.1.vsix` file

#### Publishing Checklist

Before publishing, ensure:
- ✅ All tests pass (`npm run test`)
- ✅ Extension compiles without errors (`npm run compile`)
- ✅ Package.json has correct metadata (version, publisher, etc.)
- ✅ README.md is up to date
- ✅ CHANGELOG.md reflects current version
- ✅ License file is present

## Usage

### Quick Start

1. **Look for the Sidebar Terminal icon** in the activity bar (left sidebar)
2. **Click the icon** to open the terminal sidebar view
3. **Click "Open New Terminal"** to open a terminal in the bottom panel
4. **Use the terminal** as you normally would

**Note**: The sidebar automatically closes after opening the terminal for a clean experience.

### What You'll See

When you click the Sidebar Terminal icon, you'll see:
- 💻 Terminal icon (💻)
- "Terminal" title
- "Click the button below to open a new terminal in the bottom panel"
- 🟣 "Open New Terminal" button (purple color: rgb(120, 97, 236))
- **Auto-close behavior**: Sidebar closes automatically after opening terminal

### Keyboard Shortcuts

The extension works alongside VS Code's built-in terminal shortcuts:
- **`Cmd+Shift+T`** (Mac) / **`Ctrl+Shift+T`** (Windows/Linux): VS Code's built-in terminal
- **`Ctrl+`` (backtick): Toggle terminal panel
- **`Ctrl+Shift+P`** / **`Cmd+Shift+P`**: Command palette → "Open Terminal"

## Development

### Project Structure

```
vscode-sidebar-terminal/
├── src/
│   ├── extension.ts          # Main extension logic
│   └── test/                 # Test files
│       ├── extension.test.ts # Extension tests
│       ├── runTest.ts        # Test runner
│       └── suite/
│           └── index.ts      # Test suite configuration
├── images/
│   └── terminal-icon.svg     # Sidebar icon
├── out/                      # Compiled JavaScript files
├── package.json              # Extension manifest
├── tsconfig.json            # TypeScript configuration
├── eslint.config.mjs        # ESLint configuration
├── .vscodeignore            # Files excluded from package
├── .gitignore               # Git ignore rules
├── CHANGELOG.md             # Release notes
├── test-extension.md        # Manual testing guide
├── LICENSE                  # MIT License
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
2. **Creates a simple HTML interface** with a purple "Open New Terminal" button
3. **Handles button clicks** to open terminals in the bottom panel
4. **Auto-closes the sidebar** after opening terminal for clean UX
5. **Integrates with VS Code's native terminal system**

## Configuration

The extension requires no configuration and works out of the box. It integrates with:

- VS Code's built-in terminal system
- Your existing terminal profiles and settings
- VS Code's theme and appearance settings

## Troubleshooting

### Extension Not Working

1. **Check activation**: Look for "Sidebar Terminal extension is now active!" in Debug Console
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
- Sidebar terminal interface with clean design
- One-click terminal opening in bottom panel
- Custom purple button styling (rgb(120, 97, 236)) with hover effects
- Auto-close sidebar after opening terminal for clean UX
- No keyboard shortcut conflicts with VS Code built-ins
- Comprehensive test suite with 5 passing tests
