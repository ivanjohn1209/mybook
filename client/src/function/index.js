export function GetYear() {
    var currentYear = new Date().getFullYear()
    var years = [];
    var startYear = 1905;
    while (startYear <= currentYear) {
        years.push(startYear++);
    }
    return years;
}
export function GetDay() {
    var countOfdays = 31
    var days = [];
    var startDay = 1;
    while (startDay <= countOfdays) {
        days.push(startDay++);
    }
    return days;
}