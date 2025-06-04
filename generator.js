const stakes = document.querySelectorAll(".stake");
const returns = document.querySelectorAll(".return-amount");


const teamOneScores = document.querySelectorAll(".team-one-score");

const teamOneDateTimes = document.querySelectorAll(".event-one-date-time");
const eventOneOdds = document.querySelectorAll(".event-one-odd");

const teamTwoScores = document.querySelectorAll(".team-two-score");
const teamTwoDateTimes = document.querySelectorAll(".event-two-date-time");
const eventTwoOdds = document.querySelectorAll(".event-two-odd");

let newEventOneOdd =  document.getElementById('event-one-odd-gen')

let newStake = document.getElementById('new-stake')


let newEventTwoOdd =  document.getElementById('event-two-odd-gen')

let balance = document.getElementById('Account-balance');
let footerBallance = document.getElementById('footer-ballance');
let footerBallance2 = document.getElementById('footer-ballance2');

let balanceValue = parseFloat(balance.innerText)
let settledEventName1s = document.getElementById('settled1')
let settledEventName2s = document.getElementById('settled2')

let whatsappText = document.getElementById('whatsapp-text')



/*function lowerCaseV(){
  let number = document.getElementById('v').innerHTML

  const regex = / v /gi
  const words = number.split(" ")
  let capitaliseWords = words.map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1))
  capitaliseWords = capitaliseWords.join(" ")
  const newNumber = capitaliseWords.replace(regex, ' v ')
  teamOneDateTimes.innerHTML = newNumber
  number = newNumber

}
  */

function formatNumber(number){
  return number.toLocaleString('en-US', {
    minimumFractionDigits:2,
    maximumFractionDigits:2
  })

}


function trackBalance(){

  let acountBalance = localStorage.getItem('balance')? JSON.parse(localStorage.getItem('balance')): 500;
console.log(acountBalance)
acountBalance -= newStake.value
let balanceForHomePage = localStorage.setItem('homeBallance', JSON.stringify(acountBalance) )
console.log(acountBalance)
let calculation = parseFloat(newEventOneOdd.value * newEventTwoOdd.value * newStake.value)


acountBalance = acountBalance + calculation

localStorage.setItem('balance', JSON.stringify(acountBalance) )
 }

  let event1 = document.getElementById('event1')
  let event2 = document.getElementById('event2')
  const regex1 = /:/
  const regex2 = / - /

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

  function CapitaliseTime(time){
    return time.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); 
  }
  newEventOneDateTimes = CapitaliseTime(document.getElementById('givenTime').value) ||  `${fullDate} ${event1Time}`
  newEventTwoDateTimes = CapitaliseTime(document.getElementById('givenTime').value) ||  `${fullDate} ${event1Time}`
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
    teamOneDateTime.innerHTML = `${event1Name.replace(regex2, " v ")} ${newEventOneDateTimes} ${event1Time}`
  }
   
    for (const teamTwoScore of teamTwoScores) {
    teamTwoScore.textContent = `${event2.value.slice(5, index2)} ${event2Score.replace(regex1, "-")}`
  }
  
  for (const teamTwoDateTime of teamTwoDateTimes) {
    teamTwoDateTime.innerHTML = `${event2Name.replace(regex2, " v ")} ${newEventTwoDateTimes} ${event2Time}`
  }
   
  



  
for (const ret of returns) {
  let calcReturns = parseFloat(newEventOneOdd.value * newEventTwoOdd.value * newStake.value)
  console.log(calcReturns)
  

  ret.innerHTML = `$${formatNumber(calcReturns)}`;
}
for (const stake of stakes) {
  stake.textContent = newStake.value;  // Change text content
  // OR
  stake.innerHTML = `$${newStake.value}.00 `;
}


for (const eventOneOdd of eventOneOdds) {
  eventOneOdd.innerHTML = newEventOneOdd.value
}
for (const eventTwoOdd of eventTwoOdds) {
  eventTwoOdd.innerHTML = newEventTwoOdd.value
}
 
  document.getElementById('settled1').innerHTML = event1Name.replace(regex2, " v ")
  document.getElementById('settled2').innerHTML = event2Name.replace(regex2, " v ")

  let text =
  `Hello guys, our ticket for tomorow involves:

  ${event1Name}, odds ${newEventOneOdd.value} 
  Time ${event1Time} UTC.
  Final result ${event1Score},

  ${event2Name}, odds ${newEventTwoOdd.value} 
  Time ${event2Time} UTC.
  Final result ${event2Score}.

  Total odds ${(newEventOneOdd.value * newEventTwoOdd.value).toFixed(2)}, 

  We are expecting a return of over $${Math.floor((newEventOneOdd.value * newEventTwoOdd.value * newStake.value ) / 1000)}k 
  on a maximum recomended stake of $${newStake.value}.`
  
  whatsappText.innerHTML = text.replace(regex2, ' - ')

}



let cashOut = document.querySelector('.cash-out')
let settled = document.querySelector('.settled')
let unsettled = document.querySelector('.unsettled')

function addBackgroundColor(variable){
  const links = document.querySelectorAll('a')
  links.forEach(link => link.classList.remove("green-background"))
  variable.classList.toggle("green-background")
}

let whiteFooter = document.querySelector('.white-theme')
let whiteFooter2 = document.querySelector('.white-theme2')

function darkTheme(variable){
  variable.classList.toggle("dark-theme")
}
   

   function setHomeBallance(){
    let balance = JSON.parse(localStorage.getItem('homeBallance'))
    balance = parseFloat(balance.toFixed(2)).toLocaleString('en-US')
    let home = document.getElementById('Account-balance')
    home.innerHTML = ` $${balance}`
    footerBallance.innerHTML = ` $${balance}`
    footerBallance2.innerHTML =  ` $${balance}`
   }

   function settledBallance(){
    let balance = JSON.parse(localStorage.getItem('balance'))
    balance = parseFloat(balance.toFixed(2)).toLocaleString('en-US')
    let home = document.getElementById('Account-balance')
    home.innerHTML = ` $${balance}`
    footerBallance.innerHTML = ` $${balance}`
    footerBallance2.innerHTML =  ` $${balance}`


   }
 
  
   

  

   
   function threeFunctions() {
    changeContent()
    trackBalance()
    setHomeBallance()
   }
   function widthdrawHundredK(){
   let acountBalance =    JSON.parse(localStorage.getItem('balance'))

      acountBalance -= 100000

      let home = document.getElementById('Account-balance')
    let newBalance = parseFloat(acountBalance.toFixed(2)).toLocaleString('en-US')
    home.innerHTML = ` $${newBalance}`


    localStorage.setItem('balance', JSON.stringify(acountBalance) )

   }
   function widthdrawAll(){
   let acountBalance =    JSON.parse(localStorage.getItem('balance'))

      acountBalance = 500

      let home = document.getElementById('Account-balance')
    let newBalance = parseFloat(acountBalance.toFixed(2)).toLocaleString('en-US')
    home.innerHTML = ` $${newBalance}`


    localStorage.setItem('balance', JSON.stringify(acountBalance) )

   }

   function startTime(){
    const today = new Date();
let h = today.getHours();
let m = today.getMinutes();
let s = today.getSeconds();
m = checkTime(m);
s = checkTime(s);
document.getElementById('time').innerHTML =  h + ":" + m ;
setTimeout(startTime, 1000);
}

function checkTime(i) {
if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
return i;
}
function launchHomePage(){
  startTime()
  setHomeBallance()
}
setHomeBallance();

   /*function settledEventName(){
    let variable= newEventOneName.value
    let variable2= newEventTwoName.value

  const regex = / v /gi
  const words = variable.split(" ")
  const words2 = variable2.split(" ")
  let capitaliseWords = words.map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1))
  let capitaliseWords2 = words2.map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1))
  capitaliseWords = capitaliseWords.join(" ")
  capitaliseWords2 = capitaliseWords2.join(" ")
  const newNumber = capitaliseWords.replace(regex, ' v ')
  const newNumber2 = capitaliseWords2.replace(regex, ' v ')

  settledEventName1s.innerText = newNumber
  settledEventName2s.innerText = newNumber2
   }*/
   trackBalance()
   setHomeBallance()