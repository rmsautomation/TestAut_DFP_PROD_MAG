function clickShipment(shipmentName) { 
  var shipmentNameClean = aqString.Replace(shipmentName, " ", "");
 
  var items = Aliases.ExpExpl.mainWindow.completePanel.panel.outline
    .FindAllChildren("ObjectType", "OutlineItem", 10);
 
  for (var i = 0; i < items.length; i++) {
    // Limpiamos \n, espacios y OutlineItem("...")
    var nameClean = items[i].Name;
    nameClean = aqString.Replace(nameClean, "\n", "");
    nameClean = aqString.Replace(nameClean, "OutlineItem(\"", "");
    nameClean = aqString.Replace(nameClean, "\")", "");
    nameClean = aqString.Trim(nameClean);
 
    if (aqString.Find(nameClean, shipmentNameClean) > -1) {
      items[i].Click();
      Log.Message("Clicked on: " + items[i].Name);
      return;
    }
  }
 
  Log.Warning("No OutlineItem found containing: " + shipmentNameClean);
}