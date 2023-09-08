import { h } from 'vue';

export function MyHeading(props, context) {
 const heading = `h${props.level}`
 
 return h(heading, context.$attrs, context.$slots);
}