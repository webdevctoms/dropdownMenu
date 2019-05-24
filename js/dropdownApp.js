//this will initialize all the different classes
//need 2 instances of same class one for sub buttons one for parent buttons
//eventually add to this subbutton class and sub button sibling
function DropdownApp(buttonClass,siblingClass,subButtonClass,subButtonSiblingClass){
	this.buttonClass = buttonClass;
	this.siblingClass = siblingClass;
	this.subButtonClass = subButtonClass;
	this.subButtonSiblingClass = subButtonSiblingClass;
	this.initDropdowns();
}

DropdownApp.prototype.initDropdowns = function() {
	var parentDropdown = new Dropdown(this.buttonClass,this.siblingClass);
	var childDropdown = new Dropdown(this.subButtonClass,this.subButtonSiblingClass,parentDropdown);
};

var dropdownApp = new DropdownApp("jsParentButton","subButtonContainer","jsSubMenuButton","rowContainer");