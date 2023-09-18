const Collection = {
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
     <li v-for="(value, name) in collection" :key="name"> <2>
      {{name}}: {{value}}
     </li>
    </ul>
    `,
   }