/* eslint-disable testing-library/no-render-in-lifecycle */
import React from 'react'
import { render, screen } from '@testing-library/react'
import AboutUs from './page'

describe('AboutUs', () => {
  beforeEach(() => {
    render(<AboutUs />)
  })

  test('renders the correct title', () => {
    const titleElement = screen.getByText('O Centro Pokémon')
    expect(titleElement).toBeInTheDocument()
  })

  test('renders multiple subtitles', () => {
    const subtitles = screen.getAllByRole('heading', { level: 2 })
    expect(subtitles).toHaveLength(4)
  })
})
