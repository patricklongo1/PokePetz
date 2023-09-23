import styled from 'styled-components'
import Image from 'next/image'

export const BackgroundImage = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  overflow: hidden;

  display: flex;
`

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`

export const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

export const MainText = styled.p`
  width: 500px;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  color: #fff;

  align-self: center;
  margin: 0px auto;
`