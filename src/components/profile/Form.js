import React, { useState, useLayoutEffect, useContext, useRef } from 'react'
import styled from 'styled-components'

import ProfileContext from 'src/utils/ProfileContext'
import Title from './form/Title'
import Address from './form/Address'
import Step from './form/Step'
import Conclusion from './form/Conclusion'

const Wrapper = styled.div`
  min-height: ${(props) => props.minHeight}px;
`
const Start = styled.div`
  opacity: ${(props) => (props.complete ? 0 : 1)};
  transition: opacity 500ms ${(props) => (props.complete ? '1200ms' : '0ms')};
`
const End = styled.div`
  position: absolute;
  top: 0;
  opacity: ${(props) => (props.complete ? 1 : 0)};
  transition: opacity 500ms 1600ms;
`
export default function Form(props) {
  const {
    address,
    vulnerabilities,
    setVulnerabilities,
    hobbies,
    setHobbies,
    heating,
    setHeating,
    transportations,
    setTransportations,
    pets,
    setPets,
    creation,
    complete,
    setComplete,
    found,
    setFound,
  } = useContext(ProfileContext)

  const ref = useRef()
  const [minHeight, setMinHeight] = useState(0)
  useLayoutEffect(() => {
    setMinHeight(ref.current.clientHeight)
  }, [complete, found])

  return (
    <Wrapper minHeight={minHeight}>
      <Start complete={complete}>
        <Title creation={creation} />
        <Address />
        {address.code ? (
          <Step
            options={[
              {
                value: 'vulnerable',
                label: `Vulnérable ou sensible<br/>à la qualité de l’air`,
                answer: `vulnérable ou sensible à la qualité de l’air`,
                detail: {
                  label: `Qu'est ce qu'une personne sensible<br/>à la qualité de l'air ?`,
                  onClick: () => console.log('modal'),
                },
              },
              {
                value: 'allergic',
                label: `Allergique aux pollens`,
              },
              {
                value: 'none',
                label: `Aucun des deux`,
                answer: `vulnérable, allergique ou sensible`,
              },
            ]}
            answers={vulnerabilities}
            setAnswers={setVulnerabilities}
            label={['Je suis ', 'Je ne suis pas ']}
          />
        ) : null}
        {address.code && vulnerabilities.length ? (
          <Step
            options={[
              {
                value: 'gardening',
                label: `Jardinage`,
              },
              {
                value: 'diy',
                label: `Bricolage`,
              },
              {
                value: 'cleaning',
                label: `Ménage`,
              },
              {
                value: 'sport',
                label: `Sport`,
                detail: {
                  label: `(et activité physique adaptée)`,
                },
              },
              {
                value: 'none',
                label: `Aucun`,
                answer: 'ni jardinage, ni bricolage, ni ménage, ni sport',
              },
            ]}
            answers={hobbies}
            setAnswers={setHobbies}
            label={['Je fais du ', 'Je ne fait ']}
          />
        ) : null}
        {address.code && vulnerabilities.length && hobbies.length ? (
          <Step
            options={[
              {
                value: 'wood',
                label: `Une cheminée ou poêle à bois`,
              },
              {
                value: 'gaz',
                label: `Une chaudière au gaz ou au fioul`,
              },
              {
                value: 'mobile',
                label: `Un chauffage mobile d'appoint`,
              },
              {
                value: 'none',
                label: `Autrement / Je ne sais pas`,
                answer: `Autrement`,
              },
            ]}
            answers={heating}
            setAnswers={setHeating}
            label={['Je me chauffe avec ', 'Je me chauffe ']}
          />
        ) : null}
        {address.code &&
        vulnerabilities.length &&
        hobbies.length &&
        heating.length ? (
          <Step
            options={[
              {
                value: 'bicycle',
                label: `À vélo`,
              },
              {
                value: 'public',
                label: 'En transport en commun',
              },
              {
                value: 'car',
                label: `En voiture`,
              },
              {
                value: 'none',
                label: `Autrement`,
                answer: `ni à vélo, ni en transport en commun, ni en voiture`,
              },
            ]}
            answers={transportations}
            setAnswers={setTransportations}
            label={['Je me déplace ', 'Je ne me déplace ']}
          />
        ) : null}
        {address.code &&
        vulnerabilities.length &&
        hobbies.length &&
        heating.length &&
        transportations.length ? (
          <Step
            options={[
              {
                value: 'cat',
                label: `Un chat`,
                detail: {
                  label: `(ou plusieurs)`,
                },
              },
              {
                value: 'dog',
                label: 'Un chien',
                detail: {
                  label: `(ou plusieurs)`,
                },
              },
              {
                value: 'none',
                label: `Aucun des deux`,
                answer: 'de chien ou de chat',
              },
            ]}
            answers={pets}
            setAnswers={setPets}
            label={[`J'ai `, `Je n'ai pas `]}
            setComplete={setComplete}
          />
        ) : null}
      </Start>
      <End complete={complete} ref={ref}>
        <div>
          {complete && <Conclusion setComplete={setComplete} />}
          {complete && (
            <Step
              options={[
                {
                  value: 'doctor',
                  label: `Par le biais de mon médecin`,
                },
                {
                  value: 'association',
                  label: 'Par une association',
                },
                {
                  value: 'social',
                  label: `Via les réseaux sociaux`,
                },
                {
                  value: 'ads',
                  label: 'Par la publicité',
                },
                {
                  value: 'friends',
                  label: 'Grâce à un·e ami·e',
                },
                {
                  value: 'none',
                  label: `Autrement`,
                },
              ]}
              answers={found}
              setAnswers={setFound}
              label={[`J’ai connu Recosanté `, `J’ai connu Recosanté `]}
            />
          )}
        </div>
      </End>
    </Wrapper>
  )
}
