'use client'
import * as S from './style'

const MainNav: React.FC = () => {
  return (
    <S.Container>
      <S.SilpleButton href="/aboutUs">Quem Somos</S.SilpleButton>
      <S.FilledButton href="/schedule">Agendar Consulta</S.FilledButton>
    </S.Container>
  )
}

export default MainNav
