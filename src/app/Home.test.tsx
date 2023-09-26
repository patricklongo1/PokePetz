import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Home', () => {
  it('should have main text', () => {
    render(<Home />)

    const myElem = screen.getByText(
      'Cuidamos bem do seu pokémon, para ele cuidar bem de você',
    )

    expect(myElem).toBeInTheDocument()
  })

  it('should have main image', () => {
    render(<Home />)

    const myElem = screen.getByAltText('Logo')

    expect(myElem).toBeInTheDocument()
  })
})
