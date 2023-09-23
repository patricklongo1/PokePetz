'use client'
import * as S from './style'
import { ReactNode } from 'react'

export default function Header({ children }: { children: ReactNode }) {
  return <S.Container>{children}</S.Container>
}
