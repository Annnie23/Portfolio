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
          title: 'Hestekraften website',
          description: 'This website was created as part of a mandatory assignment in the 1st semester.',
          image: image4,
          tech: 'HTML, CSS, Bootstrap, JavaScript',
          link: 'https://annnie23.github.io/index.html',
          category: 'web'
        },
        {
          id: 2,
          title: 'Trapholt website',
          description: 'This website was created as part of an exam project in the 1st semester.',
          image: image3,
          tech: 'HTML, CSS, Bootstrap, JavaScript',
          link: 'https://museum-trapholt.dk/',
          category: 'web'
        },
        {
          id: 3,
          title: 'International Day',
          description: 'This infographic was created in connection with International Day at EASV.',
          tech: 'Illustrator, InDesign',
          image: image1,
          category: 'infographic'
      
        },
        {
          id: 4,
          title: 'Trapholt',
          description: 'This infographic was created as part of an exam project in the 1st semester.',
          image: image2,
          tech: 'Illustrator, InDesign',
          category: 'infographic'
        },  
        {
          id: 5,
          title: 'OK Rens',
          description: 'This businesscard is made for the company OK Rens. OBS. only the frontpage is displayed here',
          image: image5,
          tech: 'Illustrator, InDesign',
          category: 'businesscard'
        }
      ])

    return { portfolioItems }
}

export default getPortfolioItems

