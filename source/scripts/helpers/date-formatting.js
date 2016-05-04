import moment from 'moment';

export default function dateFormatting(date) {
    moment.locale('ru');
    
    const now = moment();
    const currentHour = now.clone().add(-1, 'hour');
    const today = now.clone().startOf('day');
    const yesterday = now.clone().add(-1, 'days').startOf('day');
    const currentYear = now.clone().startOf('year');

    if (moment(date).isAfter(currentHour)) {
        return moment(date).from(now);
    } else if (moment(date).isAfter(today)) {
        return `${moment(date).from(moment())} в ${moment(date).format('HH:mm')}`;
    } else if (moment(date).isAfter(yesterday)) {
        return `вчера в ${moment(date).format('HH:mm')}`;
    } else if (moment(date).isAfter(currentYear)) {
        return moment(date).format('D MMMM [в] HH:mm');
    } else {
        return moment(date).format('D MMMM YYYY[г., в] HH:mm');
    }
}