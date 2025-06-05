function checkAndClickSaveButton() {

    let ocrResult = OCR.Recognize(Aliases.ExpExpl.wndCefBrowserWindow.Chrome_WidgetWin_0.Chrome_RenderWidgetHostHWND);
 
    if (ocrResult.BlockByText("Save").Exists) {
        Log.Message("'Save' button found. Clicking it.");
        ocrResult.BlockByText("Save").Click();
    } else {
        Log.Message("'Save' button not found. No action performed.");
    }
}
