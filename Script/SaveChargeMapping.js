function checkAndClickSaveButton() {
    // Reconoce el texto en el elemento utilizando OCR
    let ocrResult = OCR.Recognize(Aliases.ExpExpl.wndCefBrowserWindow.Chrome_WidgetWin_0.Chrome_RenderWidgetHostHWND);
    
    // Verifica si el texto "Save" existe
    if (ocrResult.BlockByText("Save").Exists) {
        // Si existe, realiza clic
        Log.Message("'Save' button found. Clicking it.");
        ocrResult.BlockByText("Save").Click();
    } else {
        // Si no existe, simplemente registra un mensaje informativo
        Log.Message("'Save' button not found. No action performed.");
    }
}
