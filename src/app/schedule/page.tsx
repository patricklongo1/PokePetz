'use client'
import { useEffect, ChangeEvent, useState } from 'react'
import InfoBar from '../components/pages-components/InfoBar'
import Resume from '../components/form-components/Resume'
import * as S from './style'

import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import axios from 'axios'
import api from '../services/api'
import pokeApi from '../services/pokeApi'

const createScheduleSchema = z.object({
  name: z
    .string()
    .nonempty('O nome é obrigatório')
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        })
        .join(' ')
    }),
  lastname: z
    .string()
    .nonempty('O sobrenome é obrigatório')
    .transform((lastname) => {
      return lastname
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        })
        .join(' ')
    }),
  region: z
    .string()
    .nonempty('A região é obrigatória')
    .transform((region) => {
      return region
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        })
        .join(' ')
    }),
  city: z
    .string()
    .nonempty('A cidade é obrigatória')
    .transform((city) => {
      return city
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        })
        .join(' ')
    }),
  date: z
    .string()
    .nonempty('A data é obrigatória')
    .transform((date) => {
      return date
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        })
        .join(' ')
    }),
  time: z
    .string()
    .nonempty('O horário é obrigatório')
    .transform((time) => {
      return time
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        })
        .join(' ')
    }),
  pokemons: z
    .array(
      z.object({
        name: z.string().nonempty('Selecione um Pokémon'),
      }),
    )
    .max(6, 'Insira no máximo 06 Pokémons')
    .min(1, 'Insira no mínimo 01 Pokémon'),
})

type createScheduleFormData = z.infer<typeof createScheduleSchema>

interface PokemonOption {
  name: string
}

interface RegionOption {
  name: string
}

interface CityOption {
  name: string
  url: string
}

export default function Schedule() {
  const crumbs = [{ label: 'Home', path: '/' }, { label: 'Agendar Consulta' }]
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<createScheduleFormData>({
    resolver: zodResolver(createScheduleSchema),
  })
  const { fields, append } = useFieldArray({
    control,
    name: 'pokemons',
  })
  const [datesOptions, setDatesOptions] = useState([])
  const [selectedDate, setSelectedDate] = useState('')
  const [timesOptions, setTimesOptions] = useState([])
  const [pokemonsOptions, setPokemonsOptions] = useState<PokemonOption[]>([])
  const [regionsOptions, setRegionsOptions] = useState<RegionOption[]>([])
  const [citiesOptions, setCitiesOptions] = useState<CityOption[]>([])

  async function fetchDataFromUrls(locations: CityOption[]) {
    const results = []

    for (const location of locations) {
      try {
        const response = await axios.get(location.url)
        results.push(response.data.names[1])
      } catch (error) {
        console.error(`Erro na requisição para ${location.url}: ${error}`)
      }
    }

    return results
  }

  useEffect(() => {
    async function loadData() {
      try {
        const [dateArray, pokemonArray, regionArray, cityArray] =
          await Promise.all([
            api.get('/scheduling/date'),
            pokeApi.get('/pokemon?limit=100000&offset=0'),
            pokeApi.get('/region'),
            pokeApi.get('/location'),
          ])

        const cityNamesArray = await fetchDataFromUrls(cityArray.data.results)

        setDatesOptions(dateArray.data)
        setPokemonsOptions(pokemonArray.data.results)
        setRegionsOptions(regionArray.data.results)
        setCitiesOptions(cityNamesArray)
      } catch (error) {
        console.error(error)
      }
    }

    loadData()
  }, [])

  useEffect(() => {
    async function loadTimesOptions() {
      try {
        const timeArray = await api.post('/scheduling/time', {
          date: selectedDate,
        })

        setTimesOptions(timeArray.data)
      } catch (error) {
        console.log(error)
      }
    }
    if (selectedDate !== '') {
      loadTimesOptions()
    }
  }, [selectedDate])

  async function handleSchedule(data: createScheduleFormData) {
    const response = await api.post('/scheduling/create', { data })

    console.log(response.data)
  }

  function addNewPokemon() {
    append({ name: '' })
  }

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    event.target.blur()
  }

  return (
    <>
      <InfoBar
        crumbs={crumbs}
        title="Agendar Consulta"
        description="Recupere seus pokémons em 5 segundos"
      />
      <S.Content>
        <S.Title>
          Preencha o formulário abaixo para agendar sua consulta
        </S.Title>

        <S.Form onSubmit={handleSubmit(handleSchedule)}>
          <S.DoubleInputContainer>
            <S.InputContainer>
              <S.InputLabel htmlFor="name">Nome</S.InputLabel>
              <S.SimpleInput
                id="name"
                placeholder="Digite seu nome"
                {...register('name')}
              />
              {errors.name && (
                <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>
              )}
            </S.InputContainer>
            <S.InputContainer>
              <S.InputLabel htmlFor="lastname">Sobrenome</S.InputLabel>
              <S.SimpleInput
                id="lastname"
                placeholder="Digite seu sobrenome"
                {...register('lastname')}
              />
              {errors.lastname && (
                <S.ErrorMessage>{errors.lastname.message}</S.ErrorMessage>
              )}
            </S.InputContainer>
          </S.DoubleInputContainer>

          <S.DoubleInputContainer>
            <S.InputContainer>
              <S.InputLabel htmlFor="region">Região</S.InputLabel>
              <S.SimpleSelect
                defaultValue={''}
                id="region"
                placeholder="Selecione sua região"
                {...register('region')}
                onChange={handleSelectChange}
              >
                <S.Option value="" disabled hidden>
                  Selecione sua região
                </S.Option>
                {regionsOptions.length &&
                  regionsOptions.map((option) => (
                    <S.Option value={option.name}>{option.name}</S.Option>
                  ))}
              </S.SimpleSelect>
              {errors.region && (
                <S.ErrorMessage>{errors.region.message}</S.ErrorMessage>
              )}
            </S.InputContainer>

            <S.InputContainer>
              <S.InputLabel htmlFor="city">Cidade</S.InputLabel>
              <S.SimpleSelect
                defaultValue={''}
                id="city"
                placeholder="Selecione sua cidade"
                {...register('city')}
                onChange={handleSelectChange}
              >
                <S.Option value="" disabled hidden>
                  Selecione sua cidade
                </S.Option>
                {citiesOptions.length &&
                  citiesOptions.map((option) => (
                    <S.Option value={option.name}>{option.name}</S.Option>
                  ))}
              </S.SimpleSelect>

              {errors.city && (
                <S.ErrorMessage>{errors.city.message}</S.ErrorMessage>
              )}
            </S.InputContainer>
          </S.DoubleInputContainer>

          <S.SimpleSpan>Cadastre seu time</S.SimpleSpan>
          <S.SimpleSmall>Atendemos até 06 pokémons por vez</S.SimpleSmall>
          {errors.pokemons && (
            <S.ErrorMessage>{errors.pokemons.message}</S.ErrorMessage>
          )}
          {fields.map((field, index) => {
            return (
              <S.DoubleInputContainer key={field.id}>
                <S.PokemonListContainer>
                  <S.SimpleSpan>{`Pokémon 0${index + 1}`}</S.SimpleSpan>
                  <S.PokemonListContent>
                    <S.PokemonSelect
                      id="pokemons"
                      placeholder="Selecione seu Pokémon"
                      {...register(`pokemons.${index}.name`)}
                      onChange={handleSelectChange}
                    >
                      {pokemonsOptions.length &&
                        pokemonsOptions.map((option) => (
                          <>
                            <S.Option value="" disabled hidden>
                              Selecione seu Pokémon
                            </S.Option>
                            <S.Option value={option.name}>
                              {option.name}
                            </S.Option>
                          </>
                        ))}
                    </S.PokemonSelect>

                    {errors.pokemons?.[index]?.name && (
                      <S.ErrorMessage>
                        {errors.pokemons?.[index]?.name?.message}
                      </S.ErrorMessage>
                    )}
                  </S.PokemonListContent>
                </S.PokemonListContainer>
              </S.DoubleInputContainer>
            )
          })}

          <S.PokemonAddButton type="button" onClick={addNewPokemon}>
            Adicionar novo pokémon ao time... +
          </S.PokemonAddButton>

          <S.DoubleInputContainer>
            <S.InputContainer>
              <S.InputLabel htmlFor="date">Data para Atendimento</S.InputLabel>
              <S.SimpleSelect
                defaultValue={''}
                id="date"
                placeholder="Selecione uma data"
                {...register('date')}
                onChange={(e) => {
                  handleSelectChange(e)
                  setSelectedDate(e.target.value)
                }}
              >
                <S.Option value="" disabled hidden>
                  Selecione uma data
                </S.Option>
                {datesOptions.map((option) => (
                  <S.Option key={option} value={option}>
                    {option}
                  </S.Option>
                ))}
              </S.SimpleSelect>
              {errors.date && (
                <S.ErrorMessage>{errors.date.message}</S.ErrorMessage>
              )}
            </S.InputContainer>

            <S.InputContainer>
              <S.InputLabel htmlFor="time">Horário de Atendimento</S.InputLabel>
              <S.SimpleSelect
                defaultValue={''}
                id="time"
                placeholder="Selecione um horário"
                {...register('time')}
                onChange={handleSelectChange}
              >
                <S.Option value="" disabled hidden>
                  Selecione um horário
                </S.Option>
                {timesOptions.map((option) => (
                  <S.Option key={option} value={option}>
                    {option}
                  </S.Option>
                ))}
              </S.SimpleSelect>

              {errors.time && (
                <S.ErrorMessage>{errors.time.message}</S.ErrorMessage>
              )}
            </S.InputContainer>
          </S.DoubleInputContainer>

          <S.Divider />

          <Resume teamTotal={fields.length} tax={2.1} />

          <S.SubmitButton type="submit">Concluir Agendamento</S.SubmitButton>
        </S.Form>
      </S.Content>
    </>
  )
}
