<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ReversedMessage',
  data() {
    return {
      message: '',
    };
  },
  methods: {
    reverse(message: string):string[] {
      return message.split('').reverse()
    },
    arrToString(arr: string[]):string {
      return arr.join('')
    },
    reverseMessage(message: string):string {
      return this.arrToString(this.reverse(message))
    },
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('')
    },
    reversedMessageLength() {
      return this.reversedMessage.length
    }
  }
});
</script>
<template>
  <h2 class="heading">I am {{reverseMessage(message)}}</h2>
  <h2 class="heading">I am {{reversedMessage}}</h2>
  <input v-model="message" type="text" placeholder="Enter your message" />
</template>