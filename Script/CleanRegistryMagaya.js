function runBatchAsAdmin() {
  var batPath = Project.Variables.project_path+"Stores\\Files\\cleanRegistryMagaya.bat";

 
  // Ejecutar el archivo .bat como administrador usando PowerShell
  var command = 'powershell.exe';
  var args = '-Command "Start-Process \'' + batPath + '\' -Verb RunAs"';

  var process = Sys.OleObject("WScript.Shell").Exec(command + ' ' + args);

  // Esperar a que termine (opcional)
  while (process.Status === 0) {
    aqUtils.Delay(100);
  }

  Log.Message("Batch file executed with elevated privileges.");
}
