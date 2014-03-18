Template.projectSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var project = {
      name: $(e.target).find('[name=title]').val(),
      number: $(e.target).find('[name=project]').val(),
      details: $(e.target).find('[name=details]').val()
    }

    post._id = Posts.insert(project);
    Router.go('projectPage', project);
  }
});