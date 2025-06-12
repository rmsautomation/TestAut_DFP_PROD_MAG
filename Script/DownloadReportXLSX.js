function openLastDownloadedFile() {
  // Delay to ensure the file download is complete
  Delay(10000);

  var fso = Sys.OleObject("Scripting.FileSystemObject");

  // Get the user's profile path and construct the Downloads folder path
  var userProfilePath = aqEnvironment.GetEnvironmentVariable("USERPROFILE");
  var downloadFolder = userProfilePath + "\\Downloads";

  // Check if the Downloads folder exists
  if (!fso.FolderExists(downloadFolder)) {
    Log.Error("Downloads folder not found: " + downloadFolder);
    return;
  }

  // Get all files in the Downloads folder
  var folder = fso.GetFolder(downloadFolder);
  var files = new Enumerator(folder.Files);

  var latestFile = null;
  var latestDate = new Date(0); // Initialize with the minimum date

  // Loop through the files to find the most recent one
  for (; !files.atEnd(); files.moveNext()) {
    var file = files.item();
    if (file.DateLastModified > latestDate) {
      latestDate = file.DateLastModified;
      latestFile = file;
    }
  }

  // If a recent file is found, proceed
  if (latestFile) {
    Log.Message("The most recent file is: " + latestFile.Name);

    // Construct full path to the file
    var filePath = downloadFolder + "\\" + latestFile.Name;

    // Check if the latest file is an .xlsx file
    if (fso.GetExtensionName(filePath).toLowerCase() === "xlsx") {
      var excelApp;
      try {
        // Open Excel application
        excelApp = Sys.OleObject("Excel.Application");
        excelApp.Visible = false; // Keep Excel in the background

        // Try to open the workbook
        var workbook = excelApp.Workbooks.Open(filePath);

        if (!workbook) {
          Log.Error("Failed to open the workbook. Ensure the file is not corrupted.");
          return;
        }

        // Access the first sheet using Item(1) instead of Sheets(1)
        var sheet = workbook.Sheets.Item(1); // This should be more reliable than Sheets(1)

        if (!sheet) {
          Log.Error("The workbook does not contain any sheets.");
          return;
        }

        // Get the used range of the sheet
        var usedRange = sheet.UsedRange;

        if (!usedRange) {
          Log.Error("Failed to retrieve the used range of the sheet.");
          return;
        }

        // Count the rows in the sheet
        var rowCount = usedRange.Rows.Count;

        Log.Message("Number of rows in XLSX: " + rowCount);

        // Verify if the number of rows matches the expected value (16)
        if (rowCount === 13) {
          Log.Checkpoint("The number of rows matches the expected value. Test PASSED");
        } else {
          Log.Error("The number of rows does not match the expected value. Test FAILED");
        }

        workbook.Close(false); // Close the workbook without saving
      } catch (e) {
        Log.Error("An error occurred while processing the XLSX file: " + e.message);
      } finally {
        if (excelApp) {
          excelApp.Quit(); // Ensure Excel is closed
        }
      }
    } else {
      Log.Error("The latest file is not an XLSX file.");
    }
  } else {
    Log.Error("No files found in the Downloads folder.");
  }
}
