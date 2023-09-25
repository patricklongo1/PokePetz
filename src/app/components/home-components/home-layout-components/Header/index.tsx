'use client'
import * as S from './style'
import { ReactNode } from 'react'

export default function Header({ children }: { children: ReactNode }) {
  return <S.Container data-testid="header-container">{children}</S.Container>
}
