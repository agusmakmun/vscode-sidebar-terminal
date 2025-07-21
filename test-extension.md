# Testing the Sidebar Terminal Extension

This guide helps you test the Sidebar Terminal extension to ensure it's working correctly.

## Prerequisites

- VS Code or Cursor editor
- The extension installed (either via VSIX or development mode)

## Manual Testing Steps

### 1. Extension Activation

**Test**: Verify the extension activates properly

**Steps**:
1. Open VS Code/Cursor
2. Open the Debug Console (`View` → `Debug Console`)
3. Look for the message: "Sidebar Terminal extension activated!"
4. Look for the message: "Registering webview provider..."

**Expected Result**: Both messages should appear in the Debug Console

### 2. Sidebar Icon Visibility

**Test**: Check if the sidebar icon appears

**Steps**:
1. Look at the activity bar (left sidebar)
2. Find the terminal icon (should be between other sidebar icons)

**Expected Result**: Terminal icon should be visible in the activity bar

### 3. Sidebar View Opening

**Test**: Verify the sidebar view opens correctly

**Steps**:
1. Click the terminal icon in the activity bar
2. Look for the sidebar content

**Expected Result**: Should see:
- 💻 Terminal icon
- "Sidebar Terminal" title
- "Click the button below to open a terminal in the bottom panel"
- "📟 Open Terminal" button
- Keyboard shortcut hint

### 4. Terminal Opening

**Test**: Verify terminal opens in bottom panel

**Steps**:
1. Click the "📟 Open Terminal" button in the sidebar
2. Look for a terminal appearing in the bottom panel
3. Check for the success message: "Terminal opened in bottom panel!"

**Expected Result**: 
- Terminal should open in the bottom panel
- Success message should appear
- Terminal should be named "Sidebar Terminal"

### 5. Keyboard Shortcut

**Test**: Verify keyboard shortcut works

**Steps**:
1. Press `Cmd+Shift+T` (Mac) or `Ctrl+Shift+T` (Windows/Linux)
2. Check if terminal opens

**Expected Result**: Terminal should open in bottom panel

### 6. Command Palette

**Test**: Verify command palette integration

**Steps**:
1. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
2. Type "Open Terminal in Sidebar"
3. Select the command

**Expected Result**: Terminal should open in bottom panel

### 7. Theme Integration

**Test**: Verify theme integration

**Steps**:
1. Change VS Code theme (`Cmd+K Cmd+T` / `Ctrl+K Ctrl+T`)
2. Check if sidebar styling adapts to new theme

**Expected Result**: Sidebar should match the new theme colors

## Debugging

### Common Issues

1. **"No data provider registered" error**
   - Solution: Complete uninstall and reinstall
   - Restart VS Code between uninstall and install

2. **Sidebar icon not visible**
   - Check if extension is enabled in Extensions panel
   - Try reloading VS Code window (`Cmd+R` / `Ctrl+R`)

3. **Terminal not opening**
   - Check Debug Console for error messages
   - Verify extension activation messages

### Debug Console Messages

Look for these messages in the Debug Console:
- ✅ "Sidebar Terminal extension activated!"
- ✅ "Registering webview provider..."
- ✅ "Webview view resolved!"
- ✅ "Terminal opened in bottom panel!"

## Performance Testing

### Load Time
- Extension should activate quickly
- Sidebar should open immediately when clicked
- Terminal should open within 1-2 seconds

### Memory Usage
- Extension should have minimal memory footprint
- No memory leaks during repeated terminal opening

## Browser Testing (if applicable)

If testing in VS Code for Web:
- Verify webview content loads properly
- Check if terminal functionality works in web environment

## Reporting Issues

When reporting issues, include:
1. VS Code version
2. Extension version
3. Operating system
4. Steps to reproduce
5. Debug Console output
6. Screenshots if applicable
