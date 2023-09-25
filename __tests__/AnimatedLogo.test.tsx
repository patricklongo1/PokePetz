import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import AnimatedLogo from '../src/app/components/home-components/home-layout-components/AnimatedLogo'

describe('AnimatedLogo', () => {
  it('should render correctly with the logo', () => {
    render(<AnimatedLogo />)

    const logotipo = screen.getByAltText('logotipo')
    expect(logotipo).toBeInTheDocument()

    const name = screen.getByText('Centro Pokémon')
    expect(name).toBeInTheDocument()
  })

  it('should expand on mouse hover', async () => {
    render(<AnimatedLogo />)
    const container = screen.getByTestId('animated-div-container')

    fireEvent.mouseEnter(container)

    await waitFor(() => {
      expect(container).toHaveStyle('width: 230')
    })
  })

  it('should contract on mouse leave', async () => {
    render(<AnimatedLogo />)
    const container = screen.getByTestId('animated-div-container')

    fireEvent.mouseEnter(container)

    fireEvent.mouseLeave(container)

    await waitFor(() => {
      expect(container).toHaveStyle('width: 37')
    })
  })
})
