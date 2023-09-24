import styled from 'styled-components'
import arrowDown from '../../../public/images/arrowDown.jpg'

export const Content = styled.main`
  margin: 0px auto;
  max-width: 652px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  font-weight: 600;
  font-size: 24px;
  color: #444;
`

export const Form = styled.form`
  width: 550px;
  display: flex;
  flex-direction: column;
`

export const DoubleInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`

export const InputContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const PokemonListContainer = styled.div`
  margin-top: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PokemonListContent = styled.div`
  margin-left: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  /*   align-items: center;
  justify-content: space-between; */
`

export const PokemonSelect = styled.select`
  width: 100%;
  align-self: flex-end;
  border: 1px solid #d5d5d5;
  border-radius: 8px;
  padding: 10px;
  height: 45px;

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http://www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20fill%3D%22%23888888%22%20d%3D%22M16%2025.656l-8.828-8.828-2.829%202.828%2011%2011%2011-11-2.829-2.828z%22%2F%3E%3C%2Fsvg%3E');
  background-repeat: no-repeat, repeat;
  background-position:
    right 0.7em top 20%,
    0 0;
  background-size:
    2em auto,
    100%;

  &:focus {
    background-position:
      right 0.7em bottom 20%,
      0 0;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20fill%3D%22%23888888%22%20d%3D%22M16%206.344l8.828%208.828%202.829-2.828-11-11-11%2011%202.829%202.828z%22%2F%3E%3C%2Fsvg%3E');
  }
`

export const PokemonAddButton = styled.button`
  border: 1px solid #1d1d1d;
  width: 280px;
  height: 42px;
  font-weight: 700;
  font-size: 14px;
  color: #444;
  border-radius: 30px;
  margin: 16px 0px;

  transition: background-color 0.3s ease;
  &:hover {
    background-color: #eee;
  }
`

export const InputLabel = styled.label`
  font-weight: 700;
  font-size: 12px;
  color: #444;
  margin-bottom: 8px;
`

export const SimpleInput = styled.input`
  width: 85%;
  border: 1px solid #d5d5d5;
  border-radius: 8px;
  padding: 10px;
  height: 25px;
`

export const SimpleSelect = styled.select`
  width: 94%;
  border: 1px solid #d5d5d5;
  border-radius: 8px;
  padding: 10px;
  height: 45px;

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http://www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20fill%3D%22%23888888%22%20d%3D%22M16%2025.656l-8.828-8.828-2.829%202.828%2011%2011%2011-11-2.829-2.828z%22%2F%3E%3C%2Fsvg%3E');
  background-repeat: no-repeat, repeat;
  background-position:
    right 0.7em top 20%,
    0 0;
  background-size:
    2em auto,
    100%;

  &:focus {
    background-position:
      right 0.7em bottom 20%,
      0 0;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20fill%3D%22%23888888%22%20d%3D%22M16%206.344l8.828%208.828%202.829-2.828-11-11-11%2011%202.829%202.828z%22%2F%3E%3C%2Fsvg%3E');
  }
`

export const Option = styled.option`
  padding: 10px;
  height: 45px;
`

export const SimpleSpan = styled.span`
  min-width: 70px;
  font-weight: 700;
  font-size: 12px;
  color: #444;
  margin-bottom: 4px;
`

export const SimpleSmall = styled.small`
  font-weight: 500;
  font-size: 12px;
  color: #747474;
`

export const SubmitButton = styled.button`
  width: 183px;
  height: 42px;
  font-weight: 700;
  font-size: 14px;
  color: #fff;
  background-color: #e40f0f;
  border-radius: 30px;
  align-self: flex-end;
  margin: 16px 0px;

  transition: background-color 0.3s ease;
  &:hover {
    background-color: #c20808;
  }
`

export const ErrorMessage = styled.span`
  margin-top: 2px;
  font-weight: 400;
  font-size: 12px;
  color: #e40f0f;
`

export const Divider = styled.div`
  width: 550px;
  height: 1px;
  background-color: #d5d5d5;
`
