function compareTime(timeString1,timeString2)
{
    const dateTime1=new Date(timeString1);  //arrival
    const dateTime2=new Date(timeString2);  //departure
    return dateTime1.getTime() > dateTime2.getTime();
}
function compareDate(dateString1,dateString2)
{
    const dateTime1=new Date(dateString1);  //arrival
    const dateTime2=new Date(dateString2);  //departure
    return dateTime1.getDate() >= dateTime2.getDate();
}

module.exports={
    compareTime,compareDate
}