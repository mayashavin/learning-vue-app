import { createApp, type ComponentOptions } from 'vue'
import NameInput from './components/NameInput';
import CourseChecklist from './components/CourseChecklist';
import type { Data } from './types/Data.type';
import './assets/main.css'
// import App from './App.vue'
// import truncate from "./plugins/truncate";

const Description = {
    template: "This is the app's entrance",
}

// const App = {
    // template: "This is the app's entrance",
    // template: "<div>This is the app's entrance</div>",
    // template: `
    // <h1>This is the app's entrance</h1>
    // <h2>We are exploring template syntax</h2>
    // `,
    // render() {
    //     return "This is the app's entrance"
    // },
//     components: { Description },
//     template: "<Description />"
// }

const App = {
    template: `
    <div>Title: {{ title }}</div>`,
    data() {
        return {
            title: "My first Vue component"
        }
    },
    created() {
        console.log((this as ComponentOptions<Data>).title);
    }
}

/**How reactivity works */
// const App = {
//     template: `
//      <div>Counter: {{ counter }}</div> 
//    `,
//     data() {
//      return {
//       counter: 0
//      }
//     },
//     created() {
//      const interval = setInterval(() => {
//       this.counter++
//      }, 1000);
     
//      setTimeout(() => {
//       clearInterval(interval)
//      }, 5000)
//     }
// };

/**Two way binding */
// const App = {
//     components: { NameInput },
//     template: "<NameInput />"
// }

// const App = {
//     components: { CourseChecklist },
//     template: "<CourseChecklist />"
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



const app = createApp(App)

// app.use(truncate, { limit: 10 })
app.mount('#app')
