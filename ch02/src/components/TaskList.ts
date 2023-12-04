export const TaskList = {
    // template: `
    // <ul>
    //  <li v-for="task in tasks" :key="task.id">
    //   {{title}}: {{task.description}}
    //  </li>
    // </ul>
    // `,
   template: `
   <ul>
   <li v-for="(task, index) in tasks" :key="task.id">
      {{title}} {{index}}: {{task.description}}
   </li>
   </ul>
   `, 
   data() {
      return {
         tasks: [{
            id: 'task01',
            description: 'Buy groceries',
         }, {
            id: 'task02',
            description: 'Do laundry',
         }, {
            id: 'task03',
            description: 'Watch Moonknight',
         }],
         title: 'Task'
      }
   }
}