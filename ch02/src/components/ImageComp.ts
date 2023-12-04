const isVisible = true;

export const ImageComp = {
    template: `
     <img v-bind="image" />
    `,
    data() {
     return {
      image: {
       src: "https://res.cloudinary.com/mayashavin/image/upload/TheCute%20Cat",
       alt: "A random cute cate image",
    //    class: ["cat", "image"],
    class: {
        cat: isVisible,
        image: !isVisible,
    },
       style: [{
        marginBlock: "10px",
        marginInline: "15px"
       }, {
        padding: "10px"
       }]
      }
     }
    }
   }