module.exports = HomeController;

HomeController.$inject = ['interviews'];
function HomeController(interviews) {
  this.interviews = interviews;
}
