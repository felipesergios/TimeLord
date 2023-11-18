interface dateValidator{
    validity:Date
}


export default function dateValidator({validity}:dateValidator){
    var date1 = new Date(validity);
    var date2 = new Date();
    var Difference_In_Time = date1.getTime() - date2.getTime();
    var Difference_In_Days = parseInt(`${Difference_In_Time / (1000 * 3600 * 24)}`);
    return Difference_In_Days
}

 