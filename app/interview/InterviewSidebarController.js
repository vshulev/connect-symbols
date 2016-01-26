module.exports = InterviewSidebarController;

InterviewSidebarController.$inject = ['interview'];
function InterviewSidebarController(interview) {
  this.image = {};
  this.image.name = interview.meta.photo;
  this.image.src = `images/people/${this.image.name}.png`;
}
