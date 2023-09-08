import { createApp, defineComponent, h } from 'vue'

const name = 'JSX'
const id = 'jsx-comp'
const JSXComp = <div id={id}>This is a {name} component</div>

const App = {
 render() {
  return JSXComp
 }
}
const app = createApp(App);

// app.use(truncate, { limit: 10 })
app.mount('#app')