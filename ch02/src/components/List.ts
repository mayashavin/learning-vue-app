export const List={
  template: `
  <ul>
    <li v-for="number in numbers" :key="number">{{number}}</li>
  </ul>
  `,
  data() {
    return{
      numbers: [1, 2, 3, 4, 5]
    };
  }
 };