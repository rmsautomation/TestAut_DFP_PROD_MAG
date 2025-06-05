function verifyListViewForMultipleTexts() {
  var listView = Aliases.ExpExpl.dlg.page327702.ListView;
  var targetTexts = [
    "RoundPriceUpdated",
    "TestingAttachments",
    "Test1",
    "Test2",
    "Test"
  ];

  var foundTexts = [];
  var missingTexts = [];

  try {
    if (listView.Exists) {
      Log.Message("Checking for required list items...");

      for (var i = 0; i < targetTexts.length; i++) {
        var itemAlias = "Aliases.ExpExpl.dlg.page327702.ListView.listitem" + targetTexts[i];
        
        if (eval(itemAlias) && eval(itemAlias).Exists) {
          foundTexts.push(targetTexts[i]);
          Log.Checkpoint("Text found: '" + targetTexts[i] + "'");
        } else {
          missingTexts.push(targetTexts[i]);
        }
      }

      if (missingTexts.length === 0) {
        Log.Message("All required texts were found: " + foundTexts.join(", "));
      } else {
        Log.Error("The following texts were not found: " + missingTexts.join(", "));
      }
    } else {
      Log.Error("The ListView object was not found.");
    }
  } catch (e) {
    Log.Error("An error occurred while processing the ListView: " + e.message);
  }
}
