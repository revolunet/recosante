import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'

import { useSearch } from 'src/utils/api'
import useDebounce from 'src/hooks/useDebounce'
import TextInput from './searchBar/TextInput'
import Suggestions from './searchBar/Suggestions'

const Wrapper = styled.form`
  position: absolute;
  z-index: 100;
  top: 0;
  width: 21em;
  font-size: 2rem;
  background-color: rgba(${(props) => props.theme.colors.backgroundAlpha}, 0.6);
  backdrop-filter: blur(1rem);
  border: solid 1px
    rgba(
      ${(props) => props.theme.colors.mainAlpha},
      ${(props) => (props.focus ? 0.15 : 0.05)}
    );
  border-bottom: none;
  box-shadow: inset 0 -0.125rem 0 0 ${(props) => props.theme.colors.main};
  overflow: hidden;
`
export default function SearchBar(props) {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search)

  const { data, isFetching } = useSearch(debouncedSearch)

  const [focus, setFocus] = useState(false)
  const input = useRef(null)
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    if (!focus) {
      setCurrent(0)
      input.current && input.current.blur()
    }
  }, [focus])

  const navigateToPlace = (place) => {
    console.log(place)
    navigate(
      `/place/${place.code}/${place.nom
        .toLowerCase()
        .replace(' ', '-')
        .replace(`'`, '-')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')}/`
    )
    setFocus(false)
  }

  return (
    <Wrapper
      focus={focus}
      onSubmit={(e) => {
        e.preventDefault()
        if (current > -1) {
          navigateToPlace(data[current])
        }
      }}
      className={props.className}
    >
      <TextInput
        ref={input}
        search={search}
        suggestion={data && data[current]}
        suggestionVisible={data && focus}
        isFetching={isFetching}
        setSearch={setSearch}
        setFocus={setFocus}
        placeholder={props.placeholder}
      />
      {data && focus && (
        <Suggestions
          search={debouncedSearch}
          results={data}
          focus={focus}
          current={current}
          isFetching={isFetching}
          setCurrent={setCurrent}
          handleSuggestionClick={navigateToPlace}
        />
      )}
    </Wrapper>
  )
}
