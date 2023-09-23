'use client'
import React, { useState, useEffect } from 'react'
import * as S from './style'
import Image from 'next/image'

import logotipo from '../../../../../../public/images/white-pokeball.svg'

const AnimatedDiv: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true)

  const toggleExpansionTrue = () => {
    setIsExpanded(true)
  }

  const toggleExpansionFalse = () => {
    setIsExpanded(false)
  }

  useEffect(() => {
    setTimeout(() => {
      toggleExpansionFalse()
    }, 5000)
  }, [])

  return (
    <S.Container
      href="/"
      isExpanded={isExpanded}
      onMouseEnter={toggleExpansionTrue}
      onMouseLeave={toggleExpansionFalse}
    >
      <Image src={logotipo} alt="logotipo" width={37} height={34} />
      <S.NameContainer>
        <S.Name>Centro Pokémon</S.Name>
      </S.NameContainer>
    </S.Container>
  )
}

export default AnimatedDiv
