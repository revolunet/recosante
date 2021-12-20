import React from 'react'

import useIndicators from 'hooks/useIndicators'
import MagicLink from 'components/base/MagicLink'
import Card from 'components/misc/Card'
import Chart from './vigilanceMeteo/Chart'
import Details from './vigilanceMeteo/Details'

export default function Raep(props) {
  const { data, isError, isLoading } = useIndicators(props.place.code)

  return (
    <Card columns={6}>
      <Card.Content>
        <Card.Header>
          <Card.Info>
            <Card.Title isLoading={isLoading} indicateur='vigilancemeteo'>
              Vigilance météo
            </Card.Title>
            <Card.Value isError={isError}>
              {isError
                ? 'Zut 🦙'
                : data &&
                  (data.vigilance_meteo.indice?.color
                    ? data.vigilance_meteo.indice?.label
                    : 'Pas de données')}
            </Card.Value>
          </Card.Info>
          <Chart data={data && !data.vigilance_meteo.error && data} />
        </Card.Header>
        <Card.Mobile indicateur='vigilancemeteo' place={props.place}>
          <Card.Details>
            <Details data={data && !data.vigilance_meteo.error && data} />
          </Card.Details>
          <Card.Recommandation
            dangerouslySetInnerHTML={{
              __html: isError
                ? `Nous ne sommes malheureusement pas en mesure d'afficher la vigilance météo pour l'instant. Veuillez réessayer dans quelques instants.`
                : data &&
                  (data.vigilance_meteo.error
                    ? `Les données ne sont pas disponibles pour cette commune`
                    : data.vigilance_meteo.advice &&
                      data.vigilance_meteo.advice.main),
            }}
          />
        </Card.Mobile>
        <Card.SubscribeWrapper>
          <Card.Subscribe indicateur='vigilancemeteo' place={props.place} />
        </Card.SubscribeWrapper>
      </Card.Content>
      {data &&
        data.vigilance_meteo &&
        data.vigilance_meteo.validity &&
        data.vigilance_meteo.sources && (
          <Card.Source>
            Prévision du{' '}
            {new Date(data.indice_atmo.validity.start).toLocaleDateString(
              'fr',
              {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }
            )}{' '}
            au{' '}
            {new Date(data.indice_atmo.validity.end).toLocaleDateString('fr', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}{' '}
            à {data.vigilance_meteo.validity.area}
            <br />
            Données fournies par{' '}
            <MagicLink to={data.vigilance_meteo.sources[0].url}>
              {data.vigilance_meteo.sources[0].label}
            </MagicLink>
          </Card.Source>
        )}
    </Card>
  )
}
