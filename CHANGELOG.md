# Change Log

All notable changes to the "Sidebar Terminal" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [0.0.1] - 2024-12-19

### Added
- Initial release of Sidebar Terminal extension
- Sidebar terminal interface with clean, modern design
- Smart terminal logic: reuses existing terminals or creates new ones as needed
- One-click terminal opening in bottom panel
- WebviewView-based sidebar implementation
- Custom purple button styling (rgb(120, 97, 236)) with hover effects
- Command palette integration
- Activity bar icon and sidebar container
- Auto-close sidebar functionality after opening terminal
- Comprehensive error handling and debugging
- TypeScript compilation and ESLint configuration
- VSIX packaging support
- Comprehensive test suite with 5 passing tests

### Features
- **Sidebar Interface**: Clean terminal access directly from the sidebar
- **Smart Terminal Logic**: Intelligently reuses existing terminals or creates new ones as needed
- **One-Click Terminal**: Open terminal in bottom panel with a single click
- **Custom Styling**: Beautiful purple button (rgb(120, 97, 236)) with hover effects
- **VS Code Integration**: Seamless integration with VS Code's native terminal system
- **No Conflicts**: Works alongside VS Code's built-in terminal shortcuts
- **Auto-Close**: Sidebar automatically closes after opening terminal
- **Lightweight**: Minimal overhead and fast performance
- **Comprehensive Testing**: Full test suite with 5 passing tests

### Technical Details
- Built with TypeScript and VS Code Extension API
- Uses WebviewView API for sidebar implementation
- Implements smart terminal checking logic using `vscode.window.terminals`
- Integrates with VS Code's native terminal system
- Supports VS Code 1.99.0 and above
- Comprehensive test suite using Mocha and @vscode/test-electron
- MIT License

## [Unreleased]

### Planned Features
- Terminal output display in sidebar
- Multiple terminal management
- Custom terminal profiles
- Terminal history and favorites