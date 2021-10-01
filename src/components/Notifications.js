import React, { useState } from 'react'
import { useQueryParam } from 'use-query-params'

import { useUser, useUserMutation } from 'hooks/useUser'
import useNotificationsPrompt from 'src/hooks/useNotificationsPrompt'

import Section from 'src/components/base/Section'
import Button from 'src/components/base/Button'
import Alert from 'src/components/base/Alert'

export default function Notifications() {
  const [user] = useQueryParam('user')
  const { data } = useUser()
  const mutation = useUserMutation()
  const [success, setSuccess] = useState(false)
  const notifications = useNotificationsPrompt(
    '/sw.js',
    'BEl62iUYgUivxIkv69yViEuiBIa-Ib9-SkvMeAtA3LFgDzkrxZJjSgSnfckjBJuBkr3qBUYIHBQFLXYp5Nksh8U'
  )

  return (
    <Section first small>
      <h1>
        Activer les <strong>notifications</strong>
        <br />
        sur cet appareil
      </h1>
      {data && (
        <>
          {data.indicateurs_media[0] === 'mail' ? (
            <p>
              Vous recevez pour l'instant les{' '}
              <strong>indicateurs par mail</strong>.
              <br />
              Si vous souhaitez changer pour activer les notifications sur cet
              appareil, cliquez ci-dessous (vous ne recevrez plus de mail).
            </p>
          ) : success ? (
            <p>
              Vous recevrez maintenant les{' '}
              <strong>indicateurs par notifications</strong> sur cet appareil !
            </p>
          ) : (
            <p>
              Vous recevez pour l'instant les{' '}
              <strong>indicateurs par notifications.</strong>
              <br />
              Si vous souhaitez les recevoir sur cet appareil en particulier,
              cliquez ci-dessous (vous continuerez de les recevoir sur vos
              autres appareils)
            </p>
          )}
          <Button.Wrapper vertical>
            {!success && (
              <Button
                fetching={notifications.prompting}
                onClick={() => {
                  notifications.subscribe().then((pushSubscription) => {
                    if (pushSubscription) {
                      setSuccess(true)
                      mutation.mutate({
                        indicateurs_media: ['notifications_web'],
                        webpush_subscriptions_info:
                          JSON.stringify(pushSubscription),
                      })
                    }
                  })
                }}
              >
                Activer les notifications sur cet appareil
              </Button>
            )}
            <Button to={`/profil/?user=${user}`} hollow>
              Voir mon profil
            </Button>
          </Button.Wrapper>
        </>
      )}
      {notifications.error && (
        <Alert error>
          Une erreur est survenue. Vos préférences n'ont pas été mises à jour
        </Alert>
      )}
    </Section>
  )
}
