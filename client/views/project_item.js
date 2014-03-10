Template.projectItem.helpers({
	
});

var rendered = false;
Template.projectItem.rendered = function(){
	if(!rendered){
		$("span").not("span:last").append("<hr>");
		rendered = true;
	}
}