import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../src/app/components/home-components/home-layout-components/Header'

describe('Header', () => {
  it('should render without errors', () => {
    render(<Header>Test Content</Header>)
    const headerElement = screen.getByTestId('header-container')
    expect(headerElement).toBeInTheDocument()
  })

  it('should display the children content', () => {
    render(<Header>Test Content</Header>)
    const headerElement = screen.getByTestId('header-container')
    expect(headerElement).toHaveTextContent('Test Content')
  })
})
