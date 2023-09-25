/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/no-render-in-lifecycle */
import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Schedule from '../src/app/schedule/page'

describe('Schedule Component', () => {
  beforeEach(() => {
    render(<Schedule />)
  })

  it('should render the form with all required fields', () => {
    // Assertions to verify the presence of form elements, labels, inputs, etc.
    expect(screen.getByLabelText('Nome')).toBeInTheDocument()
    expect(screen.getByLabelText('Sobrenome')).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('Selecione sua região'),
    ).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('Selecione sua cidade'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Adicionar novo pokémon ao time... +'),
    ).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('Selecione uma data'),
    ).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('Selecione um horário'),
    ).toBeInTheDocument()
    expect(screen.getByText('Concluir Agendamento')).toBeInTheDocument()
  })

  it('should submit the form with valid data', async () => {
    fireEvent.input(screen.getByLabelText('Nome'), {
      target: { value: 'John' },
    })
    fireEvent.input(screen.getByLabelText('Sobrenome'), {
      target: { value: 'Doe' },
    })
    fireEvent.change(screen.getByPlaceholderText('Selecione sua região'), {
      target: { value: 'kanto' },
    })
    fireEvent.change(screen.getByPlaceholderText('Selecione sua cidade'), {
      target: { value: 'Pallet Town' },
    })
    fireEvent.click(screen.getByText('Adicionar novo pokémon ao time... +'))
    fireEvent.change(screen.getByPlaceholderText('Selecione seu Pokémon'), {
      target: { value: 'bulbasaur' },
    })

    // Trigger the date changeion
    fireEvent.change(screen.getByPlaceholderText('Selecione uma data'), {
      target: { value: '30/09/2023' },
    })

    // Wait for 1 second before proceeding (not recommended)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Now, you can change the time after the delay
    fireEvent.change(screen.getByPlaceholderText('Selecione um horário'), {
      target: { value: '10:00:00' },
    })

    fireEvent.click(screen.getByText('Concluir Agendamento'))

    await waitFor(() => {
      expect(screen.getByText('Consulta Agendada')).toBeInTheDocument()
    })
  })

  it('should display validation errors for invalid data', async () => {
    fireEvent.click(screen.getByText('Concluir Agendamento'))

    await waitFor(() => {
      expect(screen.getByText('O nome é obrigatório')).toBeInTheDocument()
      expect(screen.getByText('O sobrenome é obrigatório')).toBeInTheDocument()
    })
  })
})
