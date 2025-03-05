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
        date: '2025-03-24 1:25:37',
        type: 'resume',
        value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus corrupti minus commodi tempora quo ab. Non dignissimos corporis facilis tempora.',
    },
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
        date: '2025-02-24 14:25:37',
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

export const messages = [
    // 🔴 Message général (1)
    {
      id: 1,
      target: 'all',
      severity: 'danger',
      object: 'Épidémie de grippe',
      message: 'Bonjour à tous,\nUne épidémie de grippe touche actuellement plusieurs enfants de la crèche. Merci de surveiller les symptômes.\nCordialement,\nL’équipe de la crèche',
      created_at: '2025-03-05 09:00:00'
    },
  
    // 🏫 Messages pour la crèche entière (3)
    {
      id: 2,
      target: 'creche',
      severity: 'info',
      object: 'Photo de groupe',
      message: 'Chers parents,\nUne photo de groupe sera prise vendredi matin. Merci d’habiller vos enfants avec des vêtements colorés !',
      created_at: '2025-03-02 10:15:00'
    },
    {
      id: 3,
      target: 'creche',
      severity: 'warning',
      object: 'Fermeture exceptionnelle',
      message: 'La crèche sera exceptionnellement fermée lundi prochain en raison d’une intervention technique.',
      created_at: '2025-03-08 08:30:00'
    },
    {
      id: 4,
      target: 'creche',
      severity: 'info',
      object: 'Carnaval de la crèche',
      message: 'Nous organisons un carnaval jeudi prochain ! Déguisements bienvenus pour les enfants !',
      created_at: '2025-03-10 14:00:00'
    },
  
    // 👦 Messages destinés uniquement à Oscar (11)
    {
      id: 5,
      target: 'child',
      severity: 'info',
      object: 'Bonne journée',
      message: 'Oscar a passé une excellente journée aujourd’hui ! Il a bien joué avec ses camarades.',
      created_at: '2025-03-01 16:00:00'
    },
    {
      id: 6,
      target: 'child',
      severity: 'warning',
      object: 'Sieste écourtée',
      message: 'Oscar a eu une sieste plus courte que d’habitude aujourd’hui. Il semblait un peu agité.',
      created_at: '2025-03-07 14:15:00'
    },
    {
      id: 7,
      target: 'child',
      severity: 'info',
      object: 'Activité peinture',
      message: 'Oscar a adoré l’activité peinture ce matin ! Il a fait un très beau dessin.',
      created_at: '2025-03-03 11:45:00'
    },
    {
      id: 8,
      target: 'child',
      severity: 'danger',
      object: 'Petite chute',
      message: 'Oscar a fait une petite chute en jouant dehors, mais rien de grave ! Il a un petit bleu sur le genou.',
      created_at: '2025-03-09 15:20:00'
    },
    {
      id: 9,
      target: 'child',
      severity: 'info',
      object: 'Goûter',
      message: 'Oscar a bien mangé son goûter aujourd’hui, il a particulièrement aimé les fruits !',
      created_at: '2025-03-06 16:10:00'
    },
    {
      id: 10,
      target: 'child',
      severity: 'warning',
      object: 'Difficulté à s’endormir',
      message: 'Oscar a eu un peu de mal à s’endormir pour la sieste, il était très excité après l’activité du matin.',
      created_at: '2025-03-04 13:30:00'
    },
    {
      id: 11,
      target: 'child',
      severity: 'info',
      object: 'Partage avec les autres',
      message: 'Oscar a bien partagé ses jouets aujourd’hui avec ses amis ! Un super progrès.',
      created_at: '2025-03-11 15:50:00'
    },
    {
      id: 12,
      target: 'child',
      severity: 'danger',
      object: 'Fièvre en fin de journée',
      message: 'Oscar avait un peu de fièvre en fin de journée. Nous vous recommandons de surveiller son état ce soir.',
      created_at: '2025-03-05 17:00:00'
    },
    {
      id: 13,
      target: 'child',
      severity: 'info',
      object: 'Nouvelle comptine',
      message: 'Oscar a appris une nouvelle comptine aujourd’hui, il l’a chantée plusieurs fois avec enthousiasme !',
      created_at: '2025-03-08 10:00:00'
    },
    {
      id: 14,
      target: 'child',
      severity: 'info',
      object: 'Motricité fine',
      message: 'Oscar a bien progressé sur la motricité fine aujourd’hui avec les perles et les puzzles !',
      created_at: '2025-03-02 14:40:00'
    },
    {
      id: 15,
      target: 'child',
      severity: 'warning',
      object: 'Fatigue en fin de journée',
      message: 'Oscar semblait un peu fatigué aujourd’hui en fin de journée. Peut-être une bonne nuit de sommeil l’aidera !',
      created_at: '2025-03-10 16:20:00'
    }
]

export const child = {
  "id": 1,
  "name": "Oscar Dupont",
  "first_name": "Oscar",
  "last_name": "Dupont",
  "birth_date": "2023-08-15",
  "sexe": "male",
  "avatar": "https://placekitten.com/200/200",
  "parents": [
    {
      "id": 1,
      "first_name": "Alice",
      "last_name": "Dupont",
      "relationship": "mère",
      "phone": "+1234567890",
      "email": "alice.dupont@example.com"
    },
    {
      "id": 2,
      "first_name": "Marc",
      "last_name": "Dupont",
      "relationship": "père",
      "phone": "+0987654321",
      "email": "marc.dupont@example.com"
    }
  ],
  "health": {
    "id": 1,
    "child_id": 1,
    "allergies": [
      {
        "id": 1,
        "name": "Pollen",
        "severity": "moyenne",
        "description": "Réactions légères pendant la saison des allergies"
      },
      {
        "id": 2,
        "name": "Arachides",
        "severity": "forte",
        "description": "Risque de choc anaphylactique en cas de contact"
      }
    ],
    "illnesses": [
      {
        "id": 1,
        "name": "Asthme",
        "description": "Présence d'asthme léger, suivi médical régulier"
      }
    ],
    "medications": [
      {
        "id": 1,
        "name": "Ventoline",
        "dosage": "2 inhalations si nécessaire",
        "note": "À utiliser en cas de crise d'asthme"
      }
    ]
  },
  "created_at": "2023-08-16T08:00:00",
  "updated_at": "2023-08-16T08:00:00"
}
  


export function transmissionByDate(transmissions) {
    return Object.entries(
        transmissions.reduce((acc, transmission) => {
            const dateKey = transmission.date.split(' ')[0];
            acc[dateKey] = acc[dateKey] || [];
            acc[dateKey].push(transmission);
            return acc;
        }, {})
    ).sort().reverse();
    // wait for browsers to accept groupBy
    //return Object.entries(Object.groupBy(transmissions, ({date}) => date.split(' ')[0])).sort().reverse()
}

export function getResumeOfTheDay(transmission) {
    return transmission.filter((activity) => {
        return activity.type == 'resume'
    })[0]?.value
}

export function sqlToJsDate(date) {
    return new Date(date)
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

    return hours == 0 ? mins + ' minutes' : `${hours}h${mins.toString().padStart(2, '0')}`;
}