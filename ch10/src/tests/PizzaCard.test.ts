import { shallowMount } from '@vue/test-utils';
import PizzaCard from '@/components/PizzaCard.vue';

describe('PizzaCard', () => {
  it('should render the pizza details', () => {
    const pizza = {
      id: 1,
      title: 'Test Pizza',
      description: 'Test Pizza Description',
      image: 'test-pizza.jpg',
      price: 10,
      quantity: 10,
    };

    const wrapper = shallowMount(PizzaCard, {
      props: {
        pizza,
      },
    });

    expect(wrapper.find('.pizza--details-wrapper')).toBeTruthy();
    expect(wrapper.find('.pizza--inventory-stock').text()).toBe(`Stock: ${pizza.quantity}`);
    expect(wrapper.find('.pizza--inventory-price').text()).toBe(`$ ${pizza.price}`)

    const img = wrapper.find('img')

    expect(img.attributes().alt).toEqual(pizza.title)
  });

  it('should trigger add to cart', async () => {
    const pizza = {
        id: 1,
        title: 'Test Pizza',
        description: 'Test Pizza Description',
        image: 'test-pizza.jpg',
        price: 10,
        quantity: 10,
      };
  
      const wrapper = shallowMount(PizzaCard, {
        props: {
          pizza,
        },
      });

      const btn = wrapper.find('button');

      btn.trigger('click');

      expect(wrapper.emitted()['add-to-cart']).toBeTruthy();
      expect(wrapper.emitted()['add-to-cart'][0]).toEqual([{ id: pizza.id, quantity: 1}])
  });
});