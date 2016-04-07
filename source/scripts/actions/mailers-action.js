import { SELECT_MAILER } from '../constants/action-types';

export function selectMailer(mailer) {
    return {
        type: SELECT_MAILER,
        receivedMailer: mailer
    }
}