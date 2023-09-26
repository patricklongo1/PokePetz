/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/no-render-in-lifecycle */
import React from 'react'
import {
  render,
  screen,
  fireEvent,
  waitFor,
  findByTestId,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Schedule from '../src/app/schedule/page'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import dates from './mocks/dates.json'
import pokemons from './mocks/pokemons.json'
import regions from './mocks/regions.json'
import cities from './mocks/cities.json'
import city from './mocks/city.json'

describe('Schedule', () => {
  const worker = setupServer(
    rest.get(
      'http://localhost:3000/api/scheduling/date',
      async (req, res, ctx) => {
        return res(ctx.json(dates))
      },
    ),

    rest.get('https://pokeapi.co/api/v2/pokemon', async (req, res, ctx) => {
      return res(ctx.json(pokemons))
    }),

    rest.get('https://pokeapi.co/api/v2/region', async (req, res, ctx) => {
      return res(ctx.json(regions))
    }),

    rest.get('https://pokeapi.co/api/v2/location', async (req, res, ctx) => {
      return res(ctx.json(cities))
    }),

    rest.get('https://pokeapi.co/api/v2/location/1/', async (req, res, ctx) => {
      return res(ctx.json(city))
    }),
  )

  beforeAll(() => {
    worker.listen()
    render(<Schedule />)
  })

  test('should render select with options', async () => {
    const selectElement = (await screen.findByTestId(
      'region',
    )) as HTMLSelectElement
    await userEvent.selectOptions(selectElement, 'kanto')
    expect(selectElement.value).toBe('kanto')
  })

  it('should submit the form with valid data', async () => {
    fireEvent.input(screen.getByLabelText('Nome'), {
      target: { value: 'John' },
    })
    fireEvent.input(screen.getByLabelText('Sobrenome'), {
      target: { value: 'Doe' },
    })

    const selectRegionElement = (await screen.findByTestId(
      'region',
    )) as HTMLSelectElement
    await userEvent.selectOptions(selectRegionElement, 'kanto')
    const selectCityElement = (await screen.findByTestId(
      'city',
    )) as HTMLSelectElement
    await userEvent.selectOptions(selectCityElement, 'Canalave City')

    fireEvent.click(screen.getByText('Adicionar novo pokémon ao time... +'))
    fireEvent.change(screen.getByPlaceholderText('Selecione seu Pokémon'), {
      target: { value: 'bulbasaur' },
    })

    // Trigger the date change
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
})
