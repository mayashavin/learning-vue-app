import { createApp, type ComponentOptions } from 'vue/dist/vue.esm-bundler.js'
// import NameInput from './components/NameInput';
// import CourseChecklist from './components/CourseChecklist';
import type { Data } from './types/Data.type';
import './assets/main.css'
// import App from './App.vue'

// const Description = {
//     template: "This is the app's entrance",
// }

// const App = {
//     template: "This is the app's entrance",
//     template: "<div>This is the app's entrance</div>",
//     template: `
//     <h1>This is the app's entrance</h1>
//     <h2>We are exploring template syntax</h2>
//     `,
//     render() {
//         return "This is the app's entrance"
//     },
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


const app = createApp(App)
app.mount('#app')
