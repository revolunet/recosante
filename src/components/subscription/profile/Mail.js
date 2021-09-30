import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { useUser, useUserMutation } from 'hooks/useUser'
import TextInput from 'src/components/base/TextInput'
import Button from 'src/components/base/Button'

const Wrapper = styled.div`
  height: 3.5rem;
  margin-bottom: 5rem;
`
const Email = styled.h1`
  position: relative;
  font-size: 3rem;
  color: ${(props) => props.theme.colors.main};
  text-align: center;
  cursor: pointer;
  word-break: break-all;

  &:before {
    content: 'Éditer';
    position: absolute;
    top: calc(100% + 0.25rem);
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.875rem;
    font-weight: 300;
    text-decoration: underline;
  }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 22.25rem;
  margin: 0 auto;
`
const StyledTextInput = styled(TextInput)`
  font-size: 1.25rem;
`
export default function Mail() {
  const { data } = useUser()
  const mutation = useUserMutation()

  const [active, setActive] = useState(false)

  const [answer, setAnswer] = useState('')
  useEffect(() => {
    setAnswer(data && (data.mail ? data.mail : ''))
  }, [data])

  return data ? (
    <Wrapper>
      {active ? (
        <Form
          onSubmit={(e) => {
            e.preventDefault()
            mutation.mutate({ mail: answer })
            setActive(false)
          }}
        >
          <StyledTextInput
            name={'email'}
            value={answer}
            onChange={(e) => setAnswer(e.value)}
          />
          <Button fetching={mutation.isLoading}>Valider</Button>
        </Form>
      ) : (
        <Email onClick={() => setActive(true)}>{data.mail}</Email>
      )}
    </Wrapper>
  ) : null
}
