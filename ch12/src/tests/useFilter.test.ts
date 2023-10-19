import { useFilter } from '@/composables/useFilter'
import { ref, type Ref } from 'vue'

const books = ref([
  {
    id: 1,
    title: 'Gone with the wind',
    author: 'Margaret Mitchell',
    description: 'A novel set in the American South during the Civil War and Reconstruction',
  },
  {
    id: 2,
    title: 'The Great Gatsby',
    description: 'The story primarily concerns the young and mysterious millionaire Jay Gatsby',
    author: 'F. Scott Fitzgerald',
  },
  {
    id: 3,
    title: 'Little women',
    description: 'The March sisters live and grow in post-Civil War America',
    author: 'Louisa May Alcott',
  },
]);

const result = [ books.value[0] ]

describe('useFilter', () => {
    it('should reactively return the filtered array when filterTerm is changed', () => {
        const { filteredArray, filterTerm } = useFilter(books, 'title', '');
      
        filterTerm.value = books.value[0].title;
        expect(filteredArray.value).toEqual(result);
      })
})