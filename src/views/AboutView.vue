<template>
  <section class="bg-white">
    <div class="container">
        <h2 class="text-4xl font-bold text-center py-8">Portfolio</h2>
        <p class="text-center">Min erfaring spænder over mange digitale medieområder. Under mine studier har jeg haft privilegiet at arbejde på en række forskellige projekter. 
            Gennem disse har jeg opnået ekspertise i at arbejde effektivt både individuelt og i et team, med fokus på detaljer og overholdelse af stramme tidsplaner.</p>
        <div class="flex justify-center flex-wrap">
            <div class="max-w-3xl py-6">
                <ul class="mb-0 flex list-none flex-row flex-wrap rounded-full border border-green bg-white px-1.5 py-1.5 shadow-xl">
                    <li class="-mb-px mr-2 flex-auto text-center last:mr-0">
                        <button @click="selectedCategory ='web'" class="block rounded-full px-2 py-1 text-xs font-bold uppercase leading-normal hover:cursor-pointer text-blue bg-white"> Design og webudvikling </button>
                    </li>
                    <li class="-mb-px mr-2 flex-auto text-center last:mr-0">
                        <button @click="selectedCategory ='ccge'" class="block rounded-full px-2 py-1 text-xs font-bold uppercase leading-normal hover:cursor-pointer text-blue bg-white"> CC - grafiske elementer </button>
                    </li>
                    <li class="-mb-px mr-2 flex-auto text-center last:mr-0">
                        <button @click="selectedCategory ='ccvf'" class="block rounded-full px-2 py-1 text-xs font-bold uppercase leading-normal hover:cursor-pointer text-blue bg-white"> CC - video og foto </button>
                    </li>
                    <li class="-mb-px mr-2 flex-auto text-center last:mr-0">
                        <button @click="selectedCategory ='project'" class="block rounded-full px-2 py-1 text-xs font-bold uppercase leading-normal hover:cursor-pointer text-blue bg-white"> Projekter </button>
                    </li>
                    <li class="-mb-px mr-2 flex-auto text-center last:mr-0">
                        <button @click="selectedCategory =''" class="block rounded-full px-2 py-1 text-xs font-bold uppercase leading-normal hover:cursor-pointer text-blue bg-white"> Alle </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
  <main>
      <!-- Portfolio card -->
    <div v-for="portfolioItem in filteredPortfolioItems" :key="String(portfolioItem.id)" class="card">
      <router-link :to="`/portfoliodetail/${portfolioItem.id}`"> <!-- : gør at den vil ændre sig afhængigt af hvilket produkt -->
          Go to portfolio item
      </router-link>

      <h2>{{ portfolioItem.title }}</h2>
      <p>{{ portfolioItem.description }}</p>
      <p>{{ portfolioItem.id }}</p>

      <img :src="portfolioItem.image" alt="">
      <div v-if="portfolioItem.link">
        <a :href="String(portfolioItem.link)">Link</a>
      </div>
      <div v-else>

      </div>
    </div>
  
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
  import getPortfolio from '@/modules/getPortfolio'

  const { portfolioItems } = getPortfolio() /* Giver adgang til at bruge data */

  let selectedCategory = ref ('')
/* Value skal bruges hvis string er en ref */

  const filteredPortfolioItems = computed(()=>{
    if(selectedCategory.value == ''){
      return portfolioItems.value
    }
    else{
      return portfolioItems.value.filter(item => item.category == selectedCategory.value)
      /* Item.category filtrer kun på category, dette kunne også være .title eller andet der er på de forskellige id'er */
    }
  })

</script>
  
<style lang="scss">
.card {
  color:#333;
  background-color: #f4f4f4;
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.web {
  background-color: #af7012;
}
.photo {
  background-color: #f256e2;
}

/* img{
    width: auto;
    max-height: 200px;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
    transition: .5s;
    filter: grayscale(100%);
   } */
</style>