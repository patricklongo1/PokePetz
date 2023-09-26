import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.nav`
  width: 18.75rem;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 16.5rem;
  }
`

export const SilpleButton = styled(Link)`
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 400;
  font-family: var(--font-inter);
  color: #444;
`

export const FilledButton = styled(Link)`
  text-decoration: none;
  width: 10.75rem;
  height: 2.625rem;
  background-color: #e40f0f;
  border-radius: 1.875rem;

  font-size: 0.875rem;
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
