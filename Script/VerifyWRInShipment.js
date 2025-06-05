function findAndInteractWithWarehouseReceipt() {
    // Get the value from the project variable
    let wrId = Project.Variables.wr_id;
    
    // Build the dynamic XPath
    let xpath = `//a[contains(text(), 'Warehouse receipt: ${wrId}')]`;
    
    // Reference to the page
    let page = Aliases.browser.pageMagaya;
    
    // Wait for and find the element with an adjusted timeout
    let link = page.WaitElement(xpath, 10000); // Wait up to 5 seconds
    
    // Check if the element was found and is ready
    if (link && link.Exists) {
        // Ensure the element is visible and in view
        if (!link.VisibleOnScreen) {
            link.ScrollIntoView();
            Delay(500); // Small pause after scrolling
        }
        
        // Verify that the element is enabled
        if (link.Enabled) {
            Log.Message(`Element found: '${link.innerText}'`);
            
            // Attempt a robust click
            try {
                link.Click();
                Log.Message(`Click successful on 'Warehouse receipt: ${wrId}'`);
            } catch (e) {
                Log.Error("Click failed: " + e.message);
                // Fallback method: click with coordinates
                let x = link.Left + link.Width / 2;
                let y = link.Top + link.Height / 2;
                page.Click(x, y);
                Log.Message(`Click with coordinates successful on 'Warehouse receipt: ${wrId}'`);
            }
        } else {
            Log.Error(`The element 'Warehouse receipt: ${wrId}' is not enabled`);
        }
    } else {
        Log.Error(`Element not found with XPath: ${xpath} after 10 seconds`);
    }
}