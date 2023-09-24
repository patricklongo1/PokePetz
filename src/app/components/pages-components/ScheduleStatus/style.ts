import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.main`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* Garante que o modal esteja acima de outros elementos */
  background-color: rgba(0, 0, 0, 0.5); /* Sobreposição semi-transparente */
`
export const Content = styled.div`
  width: 408px;
  height: 285px;
  border-radius: 8px;
  border: 1px solid #df8686;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`
export const Title = styled.h1`
  font-weight: 700;
  font-size: 20px;
  color: #444;
`

export const Icon = styled(Image)``

export const Message = styled.p`
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #444;
`

export const Button = styled.button`
  width: 255px;
  height: 42px;
  background-color: #e40f0f;
  border-radius: 30px;

  font-size: 14px;
  font-weight: 700;
  font-family: var(--font-inter);
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.3s ease;
  &:hover {
    background-color: #c20808; /* Altere a cor desejada no hover */
  }
`
