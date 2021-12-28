function newYear() {
const currentYear = new Date().getFullYear()
const newYear = currentYear + 1
const newYearDate = "1 Jan " + newYear
const dateNow = new Date()
const newYearTime = new Date(newYearDate)
const msLeft = newYearTime - dateNow
const dateLeft = msLeft / 1000

const daysLeft = Math.floor(dateLeft / 3600 / 24)
const hoursLeft = Math.floor(dateLeft / 3600) %24
const minLeft = Math.floor(dateLeft / 60 ) % 60
const secLeft = Math.floor(dateLeft % 60 )

const timeLeft = [
        daysLeft,
        hoursLeft,
        minLeft,
        secLeft,
        currentYear

]
return timeLeft
}

const daysElement = document.getElementById('days')
const hoursElement = document.getElementById('hours')
const minutesElement = document.getElementById('minutes')
const secondsElement = document.getElementById('seconds')
const yearElmnt = document.getElementById('year')

function count() {
  const data = newYear();
  daysElement.innerHTML = data[0]
  hoursElement.innerHTML = data[1]
  minutesElement.innerHTML = data[2]
  secondsElement.innerHTML = data[3]
  yearElmnt.innerHTML = data[4]
}

count()
setInterval(count, 1000)



// ♥
