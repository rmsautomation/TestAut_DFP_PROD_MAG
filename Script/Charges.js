
function ClickOnCharges(){
 var app = Sys.Process("ExpExpl");

for (var i = 0; i < app.ChildCount; i++) {
    var wnd = app.Child(i);
    Log.Message("Ventana encontrada: " + wnd.WndCaption + " | Class: " + wnd.WndClass);
}


  var chargesElement = Aliases.ExpExpl.Window("Charges");
if (chargesElement.WaitProperty("Exists", true, 5000)) {
    chargesElement.Click();
} else {
    Log.Error("No se encontró el elemento Charges");
}

}

function Charges(){
var app = Sys.Process("ExpExpl");
var mainWindow = app.FindChild("WndCaption", "Magaya Digital Freight Portal Configuration", 10);

if (mainWindow.Exists) {
    var chargesTab = mainWindow.FindChild("ObjectType", "Page", 10); // Busca la pestaña

    if (chargesTab.Exists) {
        Log.Message("Pestaña encontrada. Buscando el botón 'Charges'...");

        // Buscar todos los botones dentro de la pestaña
        var allButtons = chargesTab.FindAllChildren("ObjectType", "Button", 10);

        if (allButtons.length > 0) {
            var foundButton = false;
            for (var i = 0; i < allButtons.length; i++) {
                var btnText = allButtons[i].WndCaption; // O intenta usar allButtons[i].innerText

                // Comprobamos si el texto del botón contiene "Charges"
                if (btnText && btnText.includes("Charges")) {
                    Log.Message("Botón 'Charges' encontrado. Haciendo clic...");
                    allButtons[i].Click();
                    foundButton = true;
                    break;
                }
            }

            // Si no se encontró el botón, registramos un error
            if (!foundButton) {
                Log.Error("No se encontró un botón con el texto 'Charges'.");
            }
        } else {
            Log.Error("No se encontraron botones dentro de la pestaña.");
        }
    } else {
        Log.Error("No se encontró la pestaña.");
    }
} else {
    Log.Error("No se encontró la ventana principal.");
}



}

function MappingCharge()
{
  // Define las posiciones
const spTopLeft = 0; // Parte superior izquierda
const spCenter = 1; // Centro
const spBottomRight = 2; // Parte inferior derecha
  OCR.Recognize(Aliases.ExpExpl.wndCefBrowserWindow.Chrome_WidgetWin_0.Chrome_RenderWidgetHostHWND)
    .BlockByText("Charges")
    .Click(spTopLeft);


  OCR.Recognize(Aliases.ExpExpl.wndCefBrowserWindow.Chrome_WidgetWin_0.Chrome_RenderWidgetHostHWND).BlockByText("Charges", spLeftMost).Click();
  //Clicks the 'Chrome_RenderWidgetHostHWND' object.
  Aliases.ExpExpl.wndCefBrowserWindow.Chrome_WidgetWin_0.Chrome_RenderWidgetHostHWND.Click(1169, 241);
  OCR.Recognize(Aliases.ExpExpl.wndCefBrowserWindow.Chrome_WidgetWin_0.Chrome_RenderWidgetHostHWND).BlockByText("✓Cartage").Click();
  //Clicks the 'Chrome_RenderWidgetHostHWND' object.
  Aliases.ExpExpl.wndCefBrowserWindow.Chrome_WidgetWin_0.Chrome_RenderWidgetHostHWND.Click(783, 520);
  OCR.Recognize(Aliases.ExpExpl.wndCefBrowserWindow.Chrome_WidgetWin_0.Chrome_RenderWidgetHostHWND).BlockByText("Automation", spNearestToCenter).Click();
  //Clicks the 'Chrome_RenderWidgetHostHWND' object.
  Aliases.ExpExpl.wndCefBrowserWindow.Chrome_WidgetWin_0.Chrome_RenderWidgetHostHWND.Click(1202, 517);
  //Clicks the 'Chrome_RenderWidgetHostHWND' object.
  Aliases.ExpExpl.wndCefBrowserWindow.Chrome_WidgetWin_0.Chrome_RenderWidgetHostHWND.Click(928, 340);
  //Delays the test execution for the specified time period.
  Delay(5000);
  //Runs a script routine.
  checkSaveButtonExists();
  
}