export const MemoedList = {
    template: `
  <ul>
    <li 
    v-for="image in images" 
    :key="image.id" 
    :style=" selected === image.id ? { border: '1px solid blue' } : {}"
    @click="selected = image.id"
    v-memo="[selected === image.id]" <1>
    >
    <img :src="image.url">
    <div>{{image.title}}</h2>
    </li>
  </ul>
  `,
    data() {
      return {
      selected: null,
      images: [{
        id: 1,
        title: 'Cute cat',
        url: 
        'https://res.cloudinary.com/mayashavin/image/upload/w_100,h_100,c_thumb/TheCute%20Cat',
      }, {
        id: 2,
        title: 'Cute cat no 2',
        url: 
        'https://res.cloudinary.com/mayashavin/image/upload/w_100,h_100,c_thumb/cute_cat',
      }, {
        id: 3,
        title: 'Cute cat no 3',
        url: 
        'https://res.cloudinary.com/mayashavin/image/upload/w_100,h_100,c_thumb/cat_me',
      }, {
        id: 4,
        title: 'Just a cat',
        url: 
        'https://res.cloudinary.com/mayashavin/image/upload/w_100,h_100,c_thumb/cat_1',
      }]
    }
  }
}