import { createApp, defineComponent, h } from 'vue'
// import comp from './components/MyTestComp'
import truncate from "./plugins/truncate";
import App from "./App.vue";
// const App = {
//   render() {
//     return h(
//     'div',
//     { id: 'test-id' },
//     'This is a render function test with Vue'
//     )
//   }
// }

// const App = {
//   render() {
//     return comp;
//   }
// }

// const App = defineComponent({
//  template: `
//  <h1>{{ $truncate('My truncated long text') }}</h1>
//  <h2>{{ truncatedText }}</h2>
//  `,
//  data() {
//   return {
//    truncatedText: this.$truncate('My 2nd truncated text')
//   }
//  }
// })

const app = createApp(App);

app.use(truncate, { limit: 10 })
app.mount('#app')