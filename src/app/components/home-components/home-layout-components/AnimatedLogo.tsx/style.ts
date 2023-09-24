import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled(Link)<{ isExpanded: boolean }>`
  text-decoration: none;
  width: ${(props) => (props.isExpanded ? '230px' : '37px')};
  overflow: hidden;
  transition: width 0.3s ease;
  cursor: pointer;

  height: 61px;
  border-radius: 50px;
  background-color: #e40f0f;
  padding-left: 16px;
  padding-right: 16px;

  display: flex;
  align-items: center;
`

export const NameContainer = styled.div`
  margin-left: 4px;
  min-width: 190px;
  overflow: hidden;
`

export const Name = styled.h1`
  min-width: 100%;
  color: white;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`
