function RunBatCloseExplorer() {
  Project.Variables.project_path = Project.Path;
  Project.Variables.upload_path = Project.Variables.project_path + "Stores\\Files\\closeExpExpl.bat";
  Log.Message("Project Path is: " + Project.Variables.project_path);
  Log.Message("Bat path is: " + Project.Variables.upload_path);
  var shell = Sys.OleObject("WScript.Shell");
  shell.Run('"' + Project.Variables.upload_path + '"', 0, true); 
}

function Hooks_OnStartTestCase(Sender, StartTestCaseParams)
{
  Project.Variables.project_path = Project.Path;

  Project.Variables.upload_path = Project.Variables.project_path + "Stores\\Files\\closeExpExpl.bat";

  Log.Message("Project Path is: " + Project.Variables.project_path);
  Log.Message("Bat Folder is: " + Project.Variables.upload_path);

  var shell = Sys.OleObject("WScript.Shell");
  shell.Run('"' + Project.Variables.upload_path + '"', 0, true); 
  
 var browser = Browsers.Item(btChrome);
  if (browser.Exists) {
    Aliases.browser.BrowserWindow.Close();
    Log.Message("Closed any existing Chrome instances.");
  }
 
  var options = "--disable-cache --clear-token-service --disable-application-cache --disable-session-crashed-bubble";
 
  browser.RunOptions = options;
  browser.Run();
  Log.Message("Chrome launched with cache and cookies cleared.");
 
  browser.Navigate("about:blank");
  Log.Message("Navigated to 'about:blank' to complete the cache and cookies cleaning.");
 
  Aliases.browser.BrowserWindow.Close();
  Log.Message("Browser closed after cleaning cache and cookies.");
  
  
}