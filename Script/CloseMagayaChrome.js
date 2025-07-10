function closeExpExpl() {
  try {
    var appName = "ExpExpl";
    //var process = Sys.Process(appName);
    
    if ( Sys.Process(appName).Exists) {
      process.Terminate(); 
      Log.Message("Process '" + appName + "' was closed.");
    } else {
      Log.Message("Process '" + appName + "' is not executed");
    }
  } catch (e) {
    Log.Error("The proccess was not closed'ExpExpl.exe': " + e.message);
  }
}


function closeExpExplNew() {
  try {
    var appName = "ExpExpl";
    
    // Check if the process exists before trying to access it
    if (Sys.WaitProcess(appName, 1000).Exists) {
      var process = Sys.Process(appName); // Now it's safe to access the process
      process.Terminate();
      //process.Close();
      Log.Message("Process '" + appName + "' was closed.");
    } else {
      Log.Message("Process '" + appName + "' is not running. Continuing test execution.");
    }
  } catch (e) {
    Log.Warning("Could not close process '" + appName + "': " + e.message);
  }
}


function Hooks_OnLogError(Sender, LogParams)
{
  try {
    var apps = ["chrome", "ExpExpl"]; // List of processes

    for (var i = 0; i < apps.length; i++) {
      var appName = apps[i];

      // Try to find the process
      var process = Sys.WaitProcess(appName, 1000);
      if (process.Exists) {
        if (appName === "chrome") {
          process.Close();
          Log.Message("Process '" + appName + "' was closed.");
        } else if (appName === "ExpExpl") {
          process.Terminate();
          Log.Message("Process '" + appName + "' was terminated.");
        }
      } else {
        Log.Message("Process '" + appName + "' is not running.");
      }
    }
  } catch (e) {
    Log.Warning("Error handling processes: " + e.message);
  }
}
