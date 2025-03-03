import React from 'react'
import styled from 'styled-components'

import Element from './details/Element'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
`
const Elements = styled.ul`
  margin: 0;
  padding: 0;
  font-size: inherit;

  li {
    list-style: none;

    &:last-child > * {
      margin-bottom: 0;
    }
  }
`
export default function Details(props) {
  return props.data ? (
    <Wrapper>
      <Elements>
        {props.data.raep.indice.details
          .filter((allergen) => allergen.indice.value)
          .sort((a, b) => (a.indice.value > b.indice.value ? 1 : -1))
          .map((allergen, index) => (
            <li key={allergen.label}>
              <Element
                index={index}
                label={allergen.label}
                value={allergen.indice.value}
              />
            </li>
          ))}
      </Elements>
    </Wrapper>
  ) : null
}
