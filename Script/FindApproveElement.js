function clickApproveInvoiceInRange() {
  var page = Aliases.chrome2.pageMagayaLivetrack4027;
  var found = false; 

  for (var i = 1; i <= 15; i++) {
    try {
    
      var xpath = "(//span[contains(normalize-space(), 'Approve Invoice')])[" + i + "]";
      Log.Message("Buscando el elemento en la posición: " + i);

      var element = page.FindElement(xpath);
      if (element.VisibleOnScreen) {
        element.Click();
        Log.Message("Se hizo clic en el elemento 'Approve Invoice' en la posición: " + i);
        found = true;
        break; 
      }
    } catch (e) {
      Log.Message("No se encontró un elemento en la posición: " + i);
    }
  }
  if (!found) {
    Log.Error("No se encontró ningún elemento 'Approve Invoice' visible entre las posiciones 1 y 15.");
  }
}
