var web_weather = function(views){
	this.interface = {
		"tabs" : new context_tabs(document.getElementsByTagName("weather-app")[0],views)
	}
}