//this will initialize all the different classes
//need 2 instances of same class one for sub buttons one for parent buttons
//eventually add to this subbutton class and sub button sibling
function DropdownApp(buttonClass,siblingClass){
	this.buttonClass = buttonClass;
	this.siblingClass = siblingClass;
	this.initDropdowns();
}

DropdownApp.prototype.initDropdowns = function() {
	let parentDropdown = new Dropdown(this.buttonClass,this.siblingClass);
};

let dropdownApp = new DropdownApp("jsParentButton","subButtonContainer");