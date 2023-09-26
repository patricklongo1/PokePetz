'use client'
import * as S from './style'
import { ReactNode } from 'react'

interface HeaderProps {
  children: ReactNode
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <S.Container data-testid="header-container">{children}</S.Container>
}

export default Header
