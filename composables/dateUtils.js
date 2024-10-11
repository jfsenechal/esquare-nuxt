import {eachDayOfInterval, eachWeekOfInterval, endOfWeek, format, parseISO, setMonth, startOfMonth} from 'date-fns'
import {fr} from 'date-fns/locale'

export function getFullWeeksIncludingOverflow(year, month) {
    const startDays = eachWeekOfInterval({
            start: new Date(year, month - 1, 1),
            end: new Date(year, month - 1, 31)
        },
        {
            weekStartsOn: 1
        })
    let allDays = []
    startDays.forEach((firstMonday) => {
        const lastSunday = endOfWeek(firstMonday, {weekStartsOn: 1})
        const days = eachDayOfInterval({start: firstMonday, end: lastSunday})
        allDays = allDays.concat(days)
    })
    return allDays.map(day => format(day, 'yyyy-MM-dd'))
}

export function formatDateString(dateString, formatString = 'dd') {
    const date = parseISO(dateString)
    return format(date, formatString)
}

export function formatDate(date, formatString = 'dd') {
    return format(date, formatString)
}

export function getMonthNameInFrench(monthNumber) {
    const date = setMonth(new Date(0), monthNumber - 1)
    return format(startOfMonth(date), 'MMMM', {locale: fr})
}

export function getDayInFrench(dayString) {
    const date = parseISO(dayString)
    return format(date, 'EEEE d MMMM yyyy', {locale: fr})
}

export function getDayInFrenchWithoutYear(dayString) {
    const date = parseISO(dayString)
    return format(date, 'EEEE d MMMM', {locale: fr})
}

export function isInCurrentMonth(dateString, currentMonth) {
    const date = parseISO(dateString)
    return format(date, 'MM') == currentMonth
}

export function getToday() {
    return new Date()
}

export function eventDate(startDate, endDate, addLe = false) {
    if (endDate && formatDate(startDate,'d MMMM yyyy') !== format(endDate,'d MMMM yyyy')) {
        return `Du ${startDate.getDate()}-${startDate.getMonth() + 1} au ${endDate.getDate()}-${endDate.getMonth() + 1} ${endDate.getFullYear()}`;
    } else {
        return `${addLe? 'Le ': ''}${startDate.getDate()}-${startDate.getMonth() + 1}-${startDate.getFullYear()}`
    }
}