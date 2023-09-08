import { h } from 'vue';

export const inputElem = h(
  'input', 
  { 
    placeholder: 'Enter some text', 
    type: 'text', 
    id: 'text-input' 
  })
  
export const comp = h(
  'div', 
  { 
    id: 'my-test-comp', 
    style: { border: '1px solid blue' }
  }, 
  inputElem
);

export default comp;