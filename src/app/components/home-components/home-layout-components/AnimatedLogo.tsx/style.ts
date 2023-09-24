import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled(Link)<{ isExpanded: boolean }>`
  text-decoration: none;
  width: ${(props) => (props.isExpanded ? '14.375rem' : '2.3125rem')};
  overflow: hidden;
  transition: width 0.3s ease;
  cursor: pointer;

  height: 3.8125rem;
  border-radius: 3.125rem;
  background-color: #e40f0f;
  padding-left: 1rem;
  padding-right: 1rem;

  display: flex;
  align-items: center;
`

export const NameContainer = styled.div`
  margin-left: 0.25rem;
  min-width: 11.875rem;
  overflow: hidden;
`

export const Name = styled.h1`
  min-width: 100%;
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
`
