import { ref } from 'vue'

import image1 from '@/assets/internationalday.png'
import image2 from '@/assets/trapholt.png'
import image3 from '@/assets/trapholtweb.png'
import image4 from '@/assets/hestekraftenweb.png'
import image5 from '@/assets/OK.png'

const getPortfolioItems = () => {
    const portfolioItems = ref([
        
        {
          id: 1,
          title: 'Hestekraften hjemmeside',
          description: 'Denne hjemmeside er lavet i forbindelse med en obligatorisk opgave på 1. semester.',
          image: image4,
          tech: 'HTML, CSS, Bootstrap, JavaScript',
          link: 'https://annnie23.github.io/index.html',
          category: 'web'
        },
        {
          id: 2,
          title: 'Trapholt hjemmeside',
          description: 'Denne hjemmeside er lavet i forbindelse med et eksamensprojekt på 1. semester.',
          image: image3,
          tech: 'HTML, CSS, Bootstrap, JavaScript',
          link: 'https://museum-trapholt.dk/',
          category: 'web'
        },
        {
          id: 3,
          title: 'International Day',
          description: 'Denne poster er lavet i forbindelse med International Day på EASV.',
          tech: 'Illustrator, InDesign',
          image: image1,
          category: 'infographic'
      
        },
        {
          id: 4,
          title: 'Trapholt',
          description: 'Denne poster er lavet i forbindelse med et eksamensprojekt på 1. semester.',
          image: image2,
          tech: 'Illustrator, InDesign',
          category: 'infographic'
        },  
        {
          id: 5,
          title: 'OK Rens',
          description: 'Dette visitkort er lavet til virksomheden OK Rens.',
          image: image5,
          tech: 'Illustrator, InDesign',
          category: 'visitkort'
        }  
      ])

    return { portfolioItems }
}

export default getPortfolioItems

