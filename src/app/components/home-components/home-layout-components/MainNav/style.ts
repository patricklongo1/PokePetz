import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.div`
  width: 300px;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SilpleButton = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  font-family: var(--font-inter);
  color: #444;
`

export const FilledButton = styled(Link)`
  text-decoration: none;
  width: 172px;
  height: 42px;
  background-color: #e40f0f;
  border-radius: 30px;

  font-size: 14px;
  font-weight: 700;
  font-family: var(--font-inter);
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.3s ease;
  &:hover {
    background-color: #c20808; /* Altere a cor desejada no hover */
  }
`
