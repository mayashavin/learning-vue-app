export const WithVOnce = {
    template: `
    <div>
    <input v-model="name" placeholder="Enter your name" >
    </div>
    <div v-once>{{name}}</div> `,
    data() { 
        return {
            name: 'Maya' 
        }
    }
}