import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.div`
  width: full;
  max-height: 187px;
  padding: 60px;
  background-color: #e40f0f;

  display: flex;
  flex-direction: column;
`
export const BreadcrumbsContainer = styled.nav`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #fff;
`

export const Separator = styled.span`
  margin: 0 8px;
`

export const CrumbLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  transition: color 0.2s;
  font-size: 12px;
  font-weight: 700;

  &:hover {
    color: #0070f3;
  }
`

export const LastCrumb = styled.span`
  text-decoration: none;
  color: #eee;
  font-size: 12px;
  font-weight: 700;
`
export const Title = styled.h1`
  font-weight: 700;
  font-size: 32px;
  color: #fff;
`

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #eee;
`
