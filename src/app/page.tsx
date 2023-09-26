'use client'
import * as S from './style'
import bgImage from '../../public/images/pokemon-hero.jpg'

const Home: React.FC = () => {
  return (
    <S.BackgroundImage>
      <S.ImageOverlay>
        <S.StyledImage src={bgImage} alt="Logo" layout="fill" />
      </S.ImageOverlay>
      <S.MainText>
        Cuidamos bem do seu pokémon, para ele cuidar bem de você
      </S.MainText>
    </S.BackgroundImage>
  )
}

export default Home
