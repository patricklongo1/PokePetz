'use client'
import * as S from './style'
import bgImage from '../../public/images/pokemon-hero.jpg'

export default function Home() {
  return (
    <S.BackgroundImage>
      <S.ImageOverlay>
        <S.StyledImage src={bgImage} alt="Descrição da imagem" layout="fill" />
      </S.ImageOverlay>
      <S.MainText>
        Cuidamos bem do seu pokémon, para ele cuidar bem de você
      </S.MainText>
    </S.BackgroundImage>
  )
}
