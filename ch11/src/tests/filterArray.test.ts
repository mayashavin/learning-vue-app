
import { filterArray } from '../utils/filterArray'

const pizzas = [
    {
      id: "1",
      title: "Pina Colada Pizza",
      price: "10.00",
      description:
        "A delicious combination of pineapple, coconut, and coconut milk.",
      quantity: 1,
    },
    {
      id: "4",
      title: "Hawaiian Pizza",
      price: "11.00",
      description:
        "A delicious combination of ham, pineapple, and pineapple.",
      quantity: 5,
    },
    {
      id: "5",
      title: "Meat Lovers Pizza",
      price: "13.00",
      description:
        "A delicious combination of pepperoni, sausage, and bacon.",
      quantity: 3,
    },
  ]
  
  const result = [
    {
      id: "4",
      title: "Hawaiian Pizza",
      price: "11.00",
      description:
        "A delicious combination of ham, pineapple, and pineapple.",
      quantity: 5,
    },
  ]

describe('filterArray', () => {
it('should return a filtered array', () => {
    expect(filterArray(pizzas, 'title', 'Hawaiian')).toEqual(result)
  })

  it(`should return a empty array when key doesn't exist`, () => {
    expect(filterArray(pizzas, 'name', 'Hawaiian')).toEqual([])
  })
  
  it('should return matching array when term is upper-cased', () => {
    expect(filterArray(pizzas, 'title', 'HAWAIIAN')).toEqual(result)
  })})