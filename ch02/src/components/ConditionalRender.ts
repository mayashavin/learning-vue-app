export const ConditionalRender = {
    template: `
    <div>
        <div>Visibility: {{isVisible}}</div> 
        <div v-show="isVisible">I'm the text in toggle</div>
        <div v-if="isVisible">I'm the visible text</div>
        <div v-else-if="showSubtitle">I'm the subtitle text</div>
        <div v-else>I'm the replacement text</div>
    </div>
    `, 
    data() {
        return { 
            isVisible: false,
            showSubtitle: false,
        } 
    }
}