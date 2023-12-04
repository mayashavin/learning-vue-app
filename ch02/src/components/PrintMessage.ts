// import type { ComponentOptions } from 'vue';
type Data = { 
    printMsg: string;
}

export const PrintMessage = {
    template: `
    <button @click.stop="printMessage">Click me</button>
    `,
    methods: {
        printMessage(/*e: Event*/) {
            // (this as ComponentOptions<Data>).printMsg = "Button is clicked!"
            // if (e) {
            //     e.stopPropagation();
            // }

            console.log("Button is clicked!");
        },
    },
    data(): Data {
        return {
            printMsg: "Nothing to print yet!",
        }
    }
}