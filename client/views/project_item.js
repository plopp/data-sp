Template.projectItem.helpers({
	project : function(_id){
		return this;
	},
	sensors : function(){
		//return Sensors.find({project: this._id});
		return Sensors.find();
	},
	success : function(){
		return Sensors.findOne(this._id).status == 'success';
	},
	warning : function(){
		return Sensors.findOne(this._id).status == 'warning';
	},
	lastActivity : function(){
		return new Date();
	},
	IP : function(){
		return Math.round(Math.random()*255)+"."+Math.round(Math.random()*255)+"."+Math.round(Math.random()*255)+"."+Math.round(Math.random()*255);
	}
});

Deps.autorun(function(){
	
});

Template.projectItem.rendered = function(){
	
}

Template.projectItem.created = function(){

}

Template.projectItem.events({
	'click .butt' : function(){
		$("#myModal").modal('show');
		  // var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
		  // var mapOptions = {
		  //   zoom: 4,
		  //   center: myLatlng,
		  //   mapTypeId: google.maps.MapTypeId.ROADMAP
		  // }
		  // var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

		  // var marker = new google.maps.Marker({
		  //     position: myLatlng,
		  //     map: map,
		  //     title: 'Hello World!'
		  // });
		
	}
});