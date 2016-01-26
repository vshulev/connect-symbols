module.exports = InterviewController;

InterviewController.$inject = ['interview'];
function InterviewController(interview) {
  this.interview = interview;
}
