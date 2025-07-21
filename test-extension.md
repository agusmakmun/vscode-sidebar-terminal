# Testing the Sidebar Terminal Extension

## Manual Testing Guide

### Prerequisites
- VS Code installed
- Extension compiled (`npm run compile`)
- All tests passing (`npm test`)

### Test Steps

#### 1. Launch Extension in Debug Mode
1. Open the `e2e/sidebar-terminal` folder in VS Code
2. Press `F5` to launch the extension in a new window
3. Verify the extension activates (check Debug Console for "Sidebar Terminal extension is now active!")

#### 2. Test Sidebar Icon
1. Look for the "Sidebar Terminal" icon in the activity bar (left sidebar)
2. Click the icon to open the sidebar view
3. Verify the sidebar shows terminal controls with buttons

#### 3. Test Terminal Creation
1. Click the "📟 Open Terminal" button in the sidebar
2. Verify a new terminal opens in the terminal panel
3. Check that the terminal is named "Sidebar Terminal"
4. Verify the notification "Terminal opened! Use the sidebar view for quick access." appears

#### 4. Test Additional Terminal Actions
1. Click "➕ New Terminal" to create another terminal
2. Click "🎯 Focus Terminal" to bring focus to the active terminal
3. Verify all actions work as expected

#### 5. Test Keyboard Shortcut
1. Press `Cmd+Shift+T` (Mac) or `Ctrl+Shift+T` (Windows/Linux)
2. Verify a new terminal opens
3. Verify the notification appears

#### 6. Test Command Palette
1. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
2. Type "Open Terminal in Sidebar"
3. Select the command and verify it executes

#### 7. Test Multiple Terminals
1. Create multiple terminals using different methods
2. Verify all terminals are accessible
3. Test switching between terminals

### Expected Behavior

✅ **Extension Activation**
- Extension loads without errors
- Console shows activation message
- Sidebar icon appears in activity bar

✅ **Sidebar View**
- Clean, modern interface
- Three action buttons visible
- Keyboard shortcut hint displayed
- VS Code theme integration

✅ **Terminal Functionality**
- Terminals open in the correct location
- Terminal names are descriptive
- Multiple terminals can be created
- Focus commands work properly

✅ **User Experience**
- Notifications provide feedback
- Buttons are responsive
- Interface is intuitive
- Keyboard shortcuts work consistently

### Debugging

If tests fail:

1. **Check Debug Console** for error messages
2. **Verify Extension Activation** - look for activation message
3. **Check Command Registration** - use command palette to test
4. **Reload Extension** - press `Ctrl+R` or `Cmd+R`
5. **Check Terminal Panel** - ensure terminals are visible

### Common Issues

**Sidebar not visible:**
- Check if extension is activated
- Look for icon in activity bar
- Try reloading the window

**Terminal not opening:**
- Check Debug Console for errors
- Verify command is registered
- Test with command palette

**Keyboard shortcut not working:**
- Check for conflicts with other extensions
- Verify keybinding in package.json
- Test on different platforms

### Performance Testing

1. **Startup Time**: Extension should activate quickly
2. **Memory Usage**: Monitor for memory leaks
3. **Responsiveness**: Buttons should respond immediately
4. **Multiple Terminals**: Should handle multiple terminals efficiently

### Cross-Platform Testing

Test on:
- macOS (Cmd+Shift+T)
- Windows (Ctrl+Shift+T)
- Linux (Ctrl+Shift+T)

Verify consistent behavior across platforms. 