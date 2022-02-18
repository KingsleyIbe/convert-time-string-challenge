/* Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. */



function timeConversion(s) {
    // Write your code here
    let militaryHour = 0;
    let militaryTime = 0;
    let pmTimeFormat = {
      '01':13, '02':14, '03':15, '04':16, '05':17, '06':18, '07':19, '08':20, '09':21, '10':22, '11': 23, '12':12
    };
    let amTimeFormat = {
      '12': '00'
    };
    
    if('PM' === s.substring(s.length - 2, s.length )){
      militaryHour = pmTimeFormat[s.substring(0, 2)];
    }
    else if ('AM' === s.substring(s.length -2, s.length) && '12' === s.substring(0, 2)){
      militaryHour = amTimeFormat[s.substring(0, 2)];
    }else{
      militaryHour = (s.substring(0, 2));
    }
    militaryTime = (militaryHour + s.substring(2, s.length - 2));
    return militaryTime;
}
