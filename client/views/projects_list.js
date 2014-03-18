Template.projectsList.helpers({
	favorites : function(){
		return Projects.find({isFav: true},{sort: {title: 1}});
	},
	projects : function(){
		return Projects.find({isFav: false},{sort: {title: 1}});
	},
	success : function(){
		return Projects.findOne(this._id).status == 'success';
	},
	warning : function(){
		return Projects.findOne(this._id).status == 'warning';
	},
	isFav : function(){
		return Projects.findOne(this._id).isFav;
	}
});

Template.projectsList.events = {
	'click .glyphicon-star-empty' : function(e){
		var id = $(e.target).attr("id");
		Projects.update(id, {$set: {isFav: true}});
	},
	'click .glyphicon-star' : function(e){
		var id = $(e.target).attr("id");
		Projects.update(id, {$set: {isFav: false}});
		
	},
	'click tr' : function(e){
		console.log(e.target);
		var id = $(e.target).attr("href");
		console.log(id);
		//Route.to('www.google.se');
		
	}
}