import axios from 'axios'
import Wrapper from '../assets/wrappers/CocktailPage'
import { useLoaderData, Link, Navigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const singleCocktailQuery = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const data = await axios.get(`${singleCocktailUrl}${id}`)
      return data
    },
  }
}

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params

    // console.log(data.data)
    return { id }
  }

const Cocktail = () => {
  const { id } = useLoaderData()
  const { data } = useQuery(singleCocktailQuery(id))
  if (!data) return <Navigate to='/' />
  const singleDrink = data.data.drinks[0]
  console.log(singleDrink)
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcohololic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink

  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith('strIngredient') && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key])

  return (
    <Wrapper>
      <header>
        <Link to='/' className='btn'>
          back to home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className='drink'>
        <img src={image} alt={name} className='img' />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name: </span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category: </span>
            {category}
          </p>
          <p>
            <span className='drink-data'>info: </span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass: </span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>instructions: </span>
            {instructions}
          </p>
          <p>
            <span className='drink-data'>ingredients: </span>
            {validIngredients.map((ingredient, index) => (
              <span className='ing' key={index}>
                {ingredient}
                {index < validIngredients.length - 1 ? ',' : ''}
              </span>
            ))}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Cocktail
