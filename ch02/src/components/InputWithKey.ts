// export const InputWithKey = {
//     template: `<input @keydown="onEnter" >`, 
//     methods: {
//         onEnter(e: KeyboardEvent) { 
                //if (e.keyCode === 13) {
//                  console.log('User pressed Enter!') 
                // }
//         }
//     }
// }

export const InputWithKeyEnter = {
    template: `<input @keydown.enter="onEnter" >`, 
    methods: {
        onEnter() { 
            console.log('User pressed Enter!')
        }
    }
}