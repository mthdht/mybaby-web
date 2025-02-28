export const children = [
    {
        name: "Henry",
        creche: "creche 1",
        age: "6 mois",
        sexe: 'male'
    },
    {
        name: "Stephanie",
        creche: "creche 1",
        age: "6 mois",
        sexe: 'female'
    },
    {
        name: "Lucie",
        creche: "creche 2",
        age: "6 mois",
        sexe: 'female'
    },
    {
        name: "Stephanie",
        creche: "creche 2",
        age: "6 mois",
        sexe: 'female'
    },
    {
        name: "Oscar",
        creche: "creche 1",
        age: "6 mois",
        sexe: 'male'
    },
    {
        name: "Arthur",
        creche: "creche 2",
        age: "6 mois",
        sexe: 'male'
    },
    {
        name: "Quentin",
        creche: "creche 2",
        age: "6 mois",
        sexe: 'male'
    },
    {
        name: "Anne",
        creche: "creche 2",
        age: "6 mois",
        sexe: 'female'
    },

]

export const transmissions = [
    {
        date: '2025-02-24 1:25:37',
        type: 'sieste',
        value: 56,
    },
    {
        date: '2025-01-24 1:25:37',
        type: 'sieste',
        value: 72,
    },
    {
        date: '2025-01-24 14:25:37',
        type: 'repas',
        value: 'Salade de pomme de terre, poisson',
    },
    {
        date: '2025-01-24 13:25:37',
        type: 'hygiene',
        value: 'selle',
    },

    {
        date: '2025-02-24 1:25:37',
        type: 'sieste',
        value: 186,
    },
    {
        date: '2025-02-25 14:25:37',
        type: 'repas',
        value: 'Salade de pomme de terre, poisson',
    },
    {
        date: '2025-02-24 13:25:37',
        type: 'hygiene',
        value: 'selle',
    },
    {
        date: '2025-03-24 14:25:37',
        type: 'repas',
        value: 'Salade de pomme de terre, poisson',
    },
    {
        date: '2025-03-24 13:25:37',
        type: 'hygiene',
        value: 'selle',
    },

]

export function transmissionByDate(transmissions) {
    return Object.entries(Object.groupBy(transmissions, ({date}) => date.split(' ')[0])).sort().reverse()
}

export function sqlToJsDate(date) {
    const time = date.split(/[- :]/)
    return new Date(...time)
}

export function readableDay(date) {
    return sqlToJsDate(date).toLocaleDateString('fr-FR', {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    })
}

export function readableTime(date) {
    const time = date.split(' ')[1].split(':')

    return time[0] + 'H' + time[1]
}

export function timeFromValue(minutes) {
    if (typeof minutes !== 'number' || minutes < 0) return 'Invalid input';
    
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    console.log(minutes, hours, mins)

    return hours == 0 ? mins + ' minutes' : `${hours}h${mins.toString().padStart(2, '0')}`;
}