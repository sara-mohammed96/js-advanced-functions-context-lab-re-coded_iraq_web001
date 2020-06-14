/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
function createEmployeeRecord(array){
   let recored={
     firstName : array[0],
    familyName : array[1],
    title : array[2],
    payPerHour : array[3],
    timeInEvents : [],
    timeOutEvents : [],
   }
   return recored;
}
function createEmployeeRecords(array){
  let records = array.map(element=> createEmployeeRecord(element))
return records;
}

function createTimeInEvent(dateStamp ){
  let [date, hour] = dateStamp.split(' ');

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return this;
}

function createTimeOutEvent(dateStamp ){
  let [date, hour] = dateStamp.split(' ');

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return this;
}

function hoursWorkedOnDate(date){
  let timeIn = this.timeInEvents.find(el => el.date === date).hour
  let timeOut = this.timeOutEvents.find(el => el.date === date).hour
  let time= (timeOut - timeIn) / 100
return time;
  
}

function wagesEarnedOnDate(date){
  return hoursWorkedOnDate.call(this,date)*this.payPerHour;
}
function allWagesFor(){
  let arrayDates = this.timeInEvents.map(element => element.date)
  return arrayDates.reduce((accumulator, currentValue) => {
    accumulator += wagesEarnedOnDate(this, currentValue)
    return accumulator
  }, 0);}
  
  function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(el => el.firstName === firstName)
}

function calculatePayroll(employeeRecordsArray) {
  return employeeRecordsArray.reduce((accumulator, currentValue) => {
   return  accumulator+ allWagesFor.call(currentValue)
    
  }, 0)
}


