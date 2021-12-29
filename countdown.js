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
        secLeft

]
process.stdout.write('\033c')
console.log('\n\n')
console.log('Hitung Mundur Tahun Baru')
console.log(timeLeft[0] + ' Hari')
console.log(timeLeft[1] + ' Jam')
console.log(timeLeft[2] + ' Menit')
console.log(timeLeft[3] + ' Detik')
}

newYear()
setInterval(newYear, 1000)