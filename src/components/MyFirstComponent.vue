<template>
  <h2 class="heading">Reversed message: {{reversedMessage}}</h2>
  <input v-model="message" type="text" placeholder="Enter your name" />
</template>
<script>
import axios from 'axios'

export default {
  name: 'MyFistComponent',
  data() {
    return {
      message: 'Hello Vue!', 
      reversedMessage: ''
    }
  },
  // computed: {
  //   reversedMessage() {
  //     return this.message.split('').reverse().join('')
  //   }
  // },
  watch: {
    message(newValue, oldValue) {
      console.log(`new value: ${newValue}, old value: ${oldValue}`)
      this.reversedMessage = newValue.split('').reverse().join('')
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  async created() {
    console.log('created')
    const res = await axios.get('https://swapi.dev/api/films')
    console.log(res)
  },
  beforeMount() {
    console.log('beforeMount')
  }  
};
</script>
<style>
.heading {
  font-size: 16px;
}
</style>
