const { species, hours } = require('../data/zoo_data');

const weekdays = [
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
  'Monday',
];

function getAnimalScheduleByName(animalName) {
  const animal = species.find(({ name }) => name === animalName);

  return animal ? animal.availability : undefined;
}

function getAnimalByWeekDay(day) {
  if (day === 'Monday') return 'The zoo will be closed!';

  const result = [];

  species.forEach(({ availability, name }) => {
    if (availability.includes(day)) {
      result.push(name);
    }
  });

  return result;
}

function hoursAlert(day) {
  let result = `Open from ${hours[day].open}am until ${hours[day].close}pm`;

  if (day === 'Monday') {
    result = 'CLOSED';
  }

  return result;
}

function getExibitionDays() {
  const result = {};

  weekdays.forEach((day) => {
    result[day] = {
      officeHour: hoursAlert(day),
      exhibition: getAnimalByWeekDay(day),
    };
  });

  return result;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  const animalSchedule = getAnimalScheduleByName(scheduleTarget);

  if (animalSchedule) return animalSchedule;

  const exhibitionDays = getExibitionDays();

  const weekday = exhibitionDays[scheduleTarget];

  if (weekday === undefined) return exhibitionDays;

  const result = {
    [scheduleTarget]: exhibitionDays[scheduleTarget],
  };

  return result;
}

module.exports = getSchedule;
