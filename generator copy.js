let event1 = document.getElementById('event1')
let event2 = document.getElementById('event2')
const regex1 = /:/
const regex2 = / - /

const currentDate = new Date();
const currentDay = currentDate.getDay();
const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ]
const dayName = day[currentDay]

const date = currentDate.getDate()
const currentmonth = currentDate.getMonth();
const month = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","Dec"]
const monthName = month[currentmonth]

const fullDate = `${dayName} ${date} ${monthName}`

function getEvent1(){
  const index = event1.value.indexOf("-")
  const event1Time = event1.value.slice(0,5)
  const event1Name = event1.value.slice(5,-3)
  const event1Score = event1.value.slice(-3)
  const index2 = event2.value.indexOf("-")
  const event2Time = event2.value.slice(0,5)
  const event2Name = event2.value.slice(5,-3)
  const event2Score = event2.value.slice(-3)

newEventOneDateTimes =   `${fullDate} ${event1Time}`
newEventTwoDateTimes =   `${fullDate} ${event2Time}`
let newTeamOneScore =  `${event1.value.slice(5, index)} ${event1Score.replace(regex1, '-')}`
let newTeamTwoScore =  `${event2.value.slice(5, index2)} ${event2Score.replace(regex1, '-')}`


  console.log(event1.value)
  console.log(index)
  console.log(event1Time)
  console.log(event1Name)
  console.log(event1Score)
 
  console.log(index2)
  console.log(event2Time)
  console.log(event2Name)
  console.log(event2Score)

  console.log(newEventOneDateTimes)
  console.log(newTeamOneScore)
  console.log(newTeamTwoScore)
}






const teamOneScores = document.querySelectorAll(".team-one-score");

const teamOneDateTimes = document.querySelectorAll(".event-one-date-time");
const eventOneOdds = document.querySelectorAll(".event-one-odd");

const teamTwoScores = document.querySelectorAll(".team-two-score");
const teamTwoDateTimes = document.querySelectorAll(".event-two-date-time");
const eventTwoOdds = document.querySelectorAll(".event-two-odd");


function changeContent(){
 
let event1 = document.getElementById('event1')
let event2 = document.getElementById('event2')
const regex1 = /:/
const regex2 = / - /

const currentDate = new Date();
const currentDay = currentDate.getDay();
const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ]
const dayName = day[currentDay]

const date = currentDate.getDate()
const currentmonth = currentDate.getMonth();
const month = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","Dec"]
const monthName = month[currentmonth]

const fullDate = `${dayName} ${date} ${monthName}`


  const index = event1.value.indexOf("-")
  const event1Time = event1.value.slice(0,5)
  const event1Name = event1.value.slice(5,-3)
  const event1Score = event1.value.slice(-3)
  const index2 = event2.value.indexOf("-")
  const event2Time = event2.value.slice(0,5)
  const event2Name = event2.value.slice(5,-3)
  const event2Score = event2.value.slice(-3)

newEventOneDateTimes =   `${fullDate} ${event1Time}`
newEventTwoDateTimes =   `${fullDate} ${event2Time}`
let newTeamTwoScore =  `${event2.value.slice(5, index2)} ${event2Score.replace(regex1, '-')}`


  console.log(event1.value)
  console.log(index)
  console.log(event1Time)
  console.log(event1Name)
  console.log(event1Score)
 
  console.log(index2)
  console.log(event2Time)
  console.log(event2Name)
  console.log(event2Score)

  console.log(newEventOneDateTimes)
  console.log(newTeamTwoScore)

  for (const teamOneScore of teamOneScores) {
  teamOneScore.textContent = `${event1.value.slice(5, index)} ${event1Score.replace(regex1, '-')}` 
console.log(teamOneScore.textContent)
}

for (const teamOneDateTime of teamOneDateTimes) {
  teamOneDateTime.innerHTML = `${event1Name.replace(regex2, " v ")} ${fullDate} ${event1Time}`
}
 
  for (const teamTwoScore of teamTwoScores) {
  teamTwoScore.textContent = `${event2.value.slice(5, index2)} ${event2Score.replace(regex1, "-")}`
}

for (const teamTwoDateTime of teamTwoDateTimes) {
  teamTwoDateTime.innerHTML = `${event2Name.replace(regex2, " v ")} ${fullDate} ${event2Time}`
}
 
document.getElementById('settled1').innerHTML = event1Name.replace(regex2, " v ")
document.getElementById('settled2').innerHTML = event2Name.replace(regex2, " v ")
}
   
   function threeFunctions() {
    changeContent()
   }
  