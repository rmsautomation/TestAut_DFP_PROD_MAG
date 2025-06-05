function FindAndDoubleClickApprovedTransaction() {
  var listView = Aliases.ExpExpl.dlg.page327702.ListView;

  if (listView.Exists) {
    Log.Message("ListView found.");
    var found = false;
    for (var i = 0; i < listView.wItemCount; i++) {
      var subItemText = listView.FindChild (i, 1);
      
      if (subItemText && subItemText.includes("Approved")) {
        Log.Message("'Transaction Approved by Customer' found at index: " + i);
        listView.DblClickItem(i);
        Log.Message("Double-clicked on the item.");
        found = true;
        break;
      }
    }

    if (!found) {
      Log.Warning("'Transaction Approved by Customer' not found in ListView.");
    }
  } else {
    Log.Warning("ListView does not exist.");
  }
}
