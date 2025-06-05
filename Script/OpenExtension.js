function OpenExtension() {
  try {
    // Wait for the main application window
    var mainWindow = Aliases.ExpExpl.wndAfx2;
    if (!mainWindow.WaitProperty("Exists", true, 10000)) {
      Log.Error("Main application window is not available.");
      return;
    }

    // Verify and interact with the MainMenu
    if (!mainWindow.MainMenu) {
      Log.Error("Main menu object is not available.");
      return;
    }

    // Click the specified menu path
    mainWindow.MainMenu.Click("Options|Extensions|Freight Portal|API Configuration");

    // Wait for the API Configuration window to appear
    var cefBrowserWindow = Aliases.ExpExpl.wndCefBrowserWindow;
    if (!cefBrowserWindow.WaitProperty("Exists", true, 100000)) {
      Log.Error("The API Configuration window did not open.");
      return;
    }

    // Maximize the window
   // cefBrowserWindow.Maximize();
    Log.Message("The API Configuration window was successfully opened and maximized.");
  } catch (error) {
    Log.Error("An error occurred in the OpenExtension function: " + error.message);
  }
}
