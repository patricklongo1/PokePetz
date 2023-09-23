'use client'
import * as S from './style'
import Image from 'next/image'
import logotipo from '../../../../../../public/images/white-pokeball.svg'

export default function Logo() {
  return (
    <S.Logo>
      <Image src={logotipo} alt="logotipo" width={37} height={34} />
      <S.Name>Centro Pokémon</S.Name>
    </S.Logo>
  )
}
