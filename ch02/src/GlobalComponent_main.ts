import { createApp } from 'vue'
//1. Create the app instance 
const app = createApp({
    template: '<MyComponent />' 
});

//2. Define the component 
const MyComponent = {
    template: 'This is my global component' 
}

//3. Register a component globally 

app.component('MyComponent', MyComponent)
app.mount('#app')