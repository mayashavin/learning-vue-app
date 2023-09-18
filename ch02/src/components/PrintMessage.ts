export const PrintMessage = {
    template: `
     <button @click="printMessage">Click me</button>
    `,
    methods: {
     printMessage(e: Event) {
      if (e) {
       e.stopPropagation()
      }
      
      console.log("Button is clicked!")
     }
    },
   }