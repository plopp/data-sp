Template.projectSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var project = {
      name: $(e.target).find('[name=title]').val(),
      number: $(e.target).find('[name=project]').val(),
      status: 'success',
      isFav: false
    }

    project._id = Projects.insert(project);
    Router.go('projectsList', project);
  }
});