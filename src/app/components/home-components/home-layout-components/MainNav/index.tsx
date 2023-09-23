'use client'
import * as S from './style'

export default function MainNav() {
  return (
    <S.Container>
      <S.SilpleButton href="/aboutUs">Quem Somos</S.SilpleButton>
      <S.FilledButton href="/schedule">Agendar Consulta</S.FilledButton>
    </S.Container>
  )
}
