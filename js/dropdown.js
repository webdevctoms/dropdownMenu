function Dropdown(buttonClass,siblingClass){
	//the parent buttons represent the parent button and sub menu buttons
	this.parentButtons = document.getElementsByClassName(buttonClass);
	this.buttonSiblings = document.getElementsByClassName(siblingClass);
	this.siblingHeights = this.getHeights();
	this.initButtons(this.parentButtons);
	this.initWindowListener();
	console.log(this.siblingHeights);
}

Dropdown.prototype.getHeights = function(isOpen){
	if(isOpen === undefined){
		isOpen = false;
	}
	var heights = [];
	for(var i = 0;i < this.buttonSiblings.length;i++){
		heights.push(this.buttonSiblings[i].scrollHeight);
		if(!isOpen){
			this.buttonSiblings[i].style.height = "0px";
		}			
	}

	return heights;
};

Dropdown.prototype.initButtons = function(buttons){
	for(var i = 0;i < buttons.length;i++){
		buttons[i].addEventListener("click",function(e){
			this.buttonClicked(e);
		}.bind(this),false);
	}
};

Dropdown.prototype.initWindowListener = function(){
	window.addEventListener('resize',function(e){
		this.windowResized(e);
	}.bind(this),false);
};

Dropdown.prototype.windowResized = function(event){

	//set heights to auto that are open
	for(var i =0; i < this.buttonSiblings.length;i++){
		
		if(this.buttonSiblings[i].style.height !== "0px"){
			//console.log("first loop ",this.buttonSiblings[i].style.height);
			this.buttonSiblings[i].style.height = "auto";
		}
	}
	this.siblingHeights = this.getHeights(true);
	//then reassign these heights to keep animation effect
	for(var i =0; i < this.buttonSiblings.length;i++){
		
		if(this.buttonSiblings[i].style.height !== "0px"){
			//console.log(this.buttonSiblings[i].scrollHeight);
			this.buttonSiblings[i].style.height = this.buttonSiblings[i].scrollHeight + "px";
		}
	}
	
};

Dropdown.prototype.buttonClicked = function(event){
	//event.stopPropagation();
	event.preventDefault();
	var optionContent = event.currentTarget.nextElementSibling;
	console.log("button ", optionContent);
	var arrowIcon = event.currentTarget.children[1];

	if(optionContent.style.height === "0px"){
		arrowIcon.style.transform = "rotate(180deg)";
		var bundleId = event.currentTarget.dataset.bundleid;
		console.log(this.siblingHeights, bundleId);
		optionContent.style.height = this.siblingHeights[bundleId] + "px";
		//optionContent.style.borderBottom = "1px solid #ddd";
	}
	else{
		arrowIcon.style.transform = "rotate(0deg)";
		optionContent.style.height = "0px";
		setTimeout(function(){
			optionContent.style.borderBottom = "none";
		},450);
	}	
	
};