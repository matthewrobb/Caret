chrome.app.runtime.onLaunched.addListener(function(launchData) {
    //launchData.items will contain files from file manager
    chrome.storage.local.get("bounds", function(data) {
      var bounds = data.bounds || {
              width: 800,
              height: 600,
              left: 10,
              top: 10
          };
      chrome.app.window.create("main.html", {
          bounds: bounds 
      }, function(mainWindow) {
        mainWindow.contentWindow.launchData = launchData;
      });
        
    });
    
});