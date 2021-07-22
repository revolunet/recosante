import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  padding-right: 13.25rem;
  font-weight: 500;
  line-height: 1.5;
  text-align: right;

  &:last-child {
    margin-bottom: 0;
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 12.5rem;
    height: 1.125rem;
    background-color: ${(props) => props.theme.colors.main};
    border-radius: 0.5rem;
    opacity: 0.15;
  }
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    right: ${(props) => 12.5 - (props.value / 5) * 12.5}rem;
    transform: translateY(-50%) scaleX(${(props) => (props.open ? 1 : 0)});
    transform-origin: left;
    width: ${(props) => (props.value / 5) * 12.5}rem;
    height: 1.125rem;
    background-color: ${(props) => props.theme.colors.raep[props.value]};
    border-radius: ${(props) =>
      props.value < 5 ? '0.5rem 0 0 0.5rem' : '0.5rem'};
    transition: transform ${(props) => (props.open ? 150 * props.value : 0)}ms
      ${(props) => (props.open ? props.index * 100 : 0)}ms ease-out;
  }
`
export default function Element(props) {
  const labels = {
    cypres: 'Cyprès',
    noisetier: 'Noisetier',
    aulne: 'Aulne',
    peuplier: 'Peuplier',
    saule: 'Saule',
    frene: 'Frêne',
    charme: 'Charme',
    bouleau: 'Bouleau',
    platane: 'Platane',
    chene: 'Chêne',
    olivier: 'Olivier',
    tilleul: 'Tilleul',
    chataignier: 'Châtaignier',
    rumex: 'Rumex',
    graminees: 'Graminées',
    plantain: 'Plantain',
    urticacees: 'Urticacées',
    armoises: 'Armoises',
  }
  return (
    <Wrapper
      index={props.index}
      open={props.open}
      visible={props.visible}
      value={props.value}
    >
      {labels[props.label]}
    </Wrapper>
  )
}
