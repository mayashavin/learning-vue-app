import { createApp } from "vue";

export const Collection = {
  data() {
    return {
      collection: {
        title: 'Watch Moonknight', 
        description: 'Log in to Disney+ and watch all the chapters',
        priority: '5'
      }
    }
  },
  template: `
  <ul>
    <li v-for="(value, name) in collection" :key="name">
    {{name}}: {{value}}
    </li>
  </ul>
  `,
};

const app = createApp({
  components: { Collection },
  template: `<Collection />`
});


export default app;