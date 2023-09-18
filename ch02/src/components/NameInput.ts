export const NameInput = {
  template: `
  <label for="name">
    Write your name:
    <input 
    v-model.lazy="name"
    placeholder="Enter your name" 
    id="name"
    >
  </label>`,
  data() {
    return {
    name: '',
    }
  }
}

export default NameInput;