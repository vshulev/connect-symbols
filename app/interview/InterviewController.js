module.exports = InterviewController;

InterviewController.$inject = ['interview'];
function InterviewController(interview) {
  this.interview = interview;
  this.image = {};
  this.image.id = interview.meta.combined;
  this.image.src = `images/combos/${this.image.id}.png`;
}
