const _ = require('lodash');

module.exports = PeopleController;

PeopleController.$inject = ['people', 'interviews'];
function PeopleController(people, interviews) {
  this.people = people
    .map(person => getByName(person))
    .map(interview => getPerson(interview));

  function getByName(person) {
    let result = _.filter(interviews, interview => interview.filename === person)[0];
    return result;
  }

  function getPerson(interview) {
    var person = {};
    person.name = interview.meta.name;
    person.description = interview.meta.description;
    person.image = {};
    person.image.name = interview.meta.photo;
    person.image.src = `images/people/${person.image.name}.png`;
    return person;
  }
}
