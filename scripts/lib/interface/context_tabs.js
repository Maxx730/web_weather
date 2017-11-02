var context_tabs = function(tar,tabs){
	this.app = {
		"container" : tar,
		"tabs" : tabs || new Array()
	}

	this.init();
}

context_tabs.prototype.init = function(){
	var tab_hold = document.createElement("weather-nav");
	var tab_contents = document.createElement("weather-content");

	tab_hold.innerHTML = "";
	tab_contents.innerHTML = "";

	for(var i = 0;i < this.app.tabs.length;i++){
		tab_hold.innerHTML += "<weather-tab>Tab "+i+"</weather-tab>";
		tab_contents.innerHTML += "<weather-tab-content>Content for Tab "+i+"</weather-tab-content>";
	}

	this.app.container.appendChild(tab_hold);
	this.app.container.appendChild(tab_contents);
}