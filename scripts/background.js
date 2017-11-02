//OPEN A POPUP WINDOW WHEN THE INITIAL BUTTON IS CLICKED.
chrome.browserAction.onClicked.addListener(function() {
   chrome.windows.create({
   	'url': 'interface/htm/index.html',
   	'type': 'popup'
   },

   	function(window) {

   	});
});