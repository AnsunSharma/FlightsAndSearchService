function compareTime(timeString1, timeString2) {
    let dateTime1 = new Date(timeString1);
    let dateTime2 = new Date(timeString2);
    console.log("dateTime1",dateTime1);
    console.log("dateTime2",dateTime2);
    return dateTime1.getTime() > dateTime2.getTime();

}

module.exports = {
    compareTime
}