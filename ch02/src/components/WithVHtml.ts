export const WithVHtml = {
    template: `
    <div v-html="innerContent" />
    `,
    data() {
        return {
            innerContent: `
            <div>Hello</div>
            `
        }
    }
}