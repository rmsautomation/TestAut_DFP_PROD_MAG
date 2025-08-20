function CheckShipmentView() {
  var timeoutSeconds = 10;
  var startTime = (new Date()).getTime(); // ms
  var cargoTree = null;

  while (true) {
    try {
      cargoTree = Aliases.ExpExpl.mainWindow.mainFrame.AfxMDIFrame140u.ShipmentPane.ShipmentView.propertypage;

      if (cargoTree.Exists && cargoTree.Enabled) {
        Log.Message("Cargo tree found.");
        break;
      }
    } catch (e) {
      Log.Error(e.message);
    }

    var now = (new Date()).getTime();
    var elapsedSeconds = (now - startTime) / 1000;
    if (elapsedSeconds >= timeoutSeconds) {
      Log.Warning("Timeout waiting for cargoTree (" + timeoutSeconds + " seg).");
      break;
    }

    aqUtils.Delay(1000);
  }

  if (cargoTree && cargoTree.Exists) {
    var width = cargoTree.Width;
    Log.Message("*** SIZE CARGO TREE: " + width);

    if (width < 422 || width > 500) {
      if (width === 0){
      Aliases.ExpExpl.mainWindow.mainFrame.AfxMDIFrame140u.ShipmentPane.ShipmentView.Drag(1712, 341, -627, 2);
  aqUtils.Delay(300);
    cargoTree =Aliases.ExpExpl.mainWindow.mainFrame.AfxMDIFrame140u.ShipmentPane.ShipmentView.propertypage;
      Log.Message("*** SIZE CARGO TREE: " + cargoTree.Width);
      Log.Message("Resize DONE.");
      CheckShipmentView();
      }
      else{ResizeView();
      }
    }
  } else {
    Log.Error("cargoTree not found");
  }
}

function ResizeView() {
  try {
    var cargoTree =Aliases.ExpExpl.mainWindow.mainFrame.AfxMDIFrame140u.ShipmentPane.ShipmentView.propertypage;
    var startY = Math.floor(cargoTree.Height / 2);

    cargoTree.Drag(-0.1, startY, -5, 0);
    aqUtils.Delay(200);

    var mouseX = Sys.Desktop.MouseX;
    var mouseY = Sys.Desktop.MouseY;

    Log.Message("Mouse at: X=" + mouseX + " Y=" + mouseY);

    desktopDoubleClick(mouseX, mouseY);

    aqUtils.Delay(300);
    cargoTree = Aliases.ExpExpl.mainWindow.mainFrame.AfxMDIFrame140u.ShipmentPane.ShipmentView.propertypage;
      Log.Message("*** SIZE CARGO TREE: " + cargoTree.Width);
    if(cargoTree.Width > 0){   
       Log.Message("Resize DONE.");
    }

   else{
     CheckShipmentView();
   }

  } catch (e) {
    Log.Error("Error: " + e.message);
  }
}

function desktopDoubleClick(x, y) {
  var VK_LBUTTON = 1;

  Sys.Desktop.MouseDown(VK_LBUTTON, x, y);
  Sys.Desktop.MouseUp(VK_LBUTTON, x, y);

  aqUtils.Delay(100);

  Sys.Desktop.MouseDown(VK_LBUTTON, x, y);
  Sys.Desktop.MouseUp(VK_LBUTTON, x, y);
}