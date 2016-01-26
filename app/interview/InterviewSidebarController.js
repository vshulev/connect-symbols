module.exports = InterviewSidebarController;

InterviewSidebarController.$inject = ['interview'];
function InterviewSidebarController(interview) {
  this.image = {};
  this.image.name = interview.meta.photo;
  this.image.src = `images/people/${this.image.name}.png`;

  this.person = {};
  this.person.name = interview.meta.name;
  this.person.description = interview.meta.description;
}
