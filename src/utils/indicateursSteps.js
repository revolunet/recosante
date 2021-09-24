import React from 'react'

import IndiceAtmo from './icons/IndiceAtmo'
import Raep from './icons/Raep'
import IndiceUv from './icons/IndiceUv'
import VigilanceMeteorologique from './icons/VigilanceMeteorologique'
import Daily from './icons/Daily'
import Alert from './icons/Alert'
import Email from './icons/Email'
import Notification from './icons/Notification'

const steps = [
  {
    name: 'indicateurs',
    title: 'Indicateurs',
    label: 'Je choisis les indicateurs que je souhaite recevoir.',
    options: [
      {
        value: 'indice_atmo',
        label: `Indice de qualité de l'air`,
        icon: <IndiceAtmo />,
      },
      {
        value: 'raep',
        label: `Risque d'allergie aux pollens`,
        icon: <Raep />,
      },
      {
        value: 'indice_uv',
        label: `Indice UV`,
        icon: <IndiceUv />,
        disabled: true,
      },
      {
        value: 'vigilance_meteorologique',
        label: `Vigilance météorologique`,
        icon: <VigilanceMeteorologique />,
        disabled: true,
      },
    ],
    mandatory: true,
  },
  {
    name: 'indicateurs_frequence',
    title: 'Fréquence',
    label:
      'Je choisis à quelle fréquence je souhaite recevoir ces indicateurs.',
    options: [
      {
        value: 'alerte',
        label: `En cas d'alerte`,
        icon: <Alert />,
      },
      {
        value: 'quotidien',
        label: `Tous les jours`,
        icon: <Daily />,
      },
    ],
    exclusive: true,
    mandatory: true,
  },
  {
    name: 'indicateurs_media',
    title: 'Média',
    label: 'Je choisis de quelle façon je souhaite recevoir ces indicateurs.',
    options: [
      {
        value: 'email',
        label: `Email`,
        icon: <Email />,
      },
      {
        value: 'notifications',
        label: `Notification`,
        icon: <Notification />,
      },
    ],
    exclusive: true,
    mandatory: true,
  },
  {
    name: 'recommandations',
    title: 'Recommandations',
    label:
      'Je choisis si je souhaite aussi recevoir des conseils pour m’aider à agir pour ma santé.',
    options: [
      {
        value: 'oui',
        label: `M’abonner aux recommandations`,
        icon: <Email />,
      },
      {
        value: 'non',
        label: `Peut être plus tard`,
        icon: <Notification />,
      },
    ],
    exclusive: true,
    mandatory: true,
  },
]

export default steps
