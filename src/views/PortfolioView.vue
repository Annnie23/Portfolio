<template>
    <main>
      <h1 class="text-3xl font-bold underline">
      </h1>
  
      <button @click="selectedCategory = 'infographic'">Infographic</button>
      <button @click="selectedCategory = 'web'">Website</button>
      <button @click="selectedCategory = 'visitkort'">Visitkort</button>
      <button @click="selectedCategory = ''">Alle</button>
  
      <div v-for="portfolioItem in filteredPortfolioItems" :key="portfolioItem" class="card">
        <h2>{{ portfolioItem.title }}</h2>
        <p>Beskrivelse: {{ portfolioItem.description }}</p>
        <p>Tech: {{ portfolioItem.tech }}</p>
        <!-- <p :class="portfolioItem.category"> Kategori: {{ portfolioItem.category }}</p> -->
  
        <div v-if="portfolioItem.link">
          <a :href="portfolioItem.link">Link</a>
        </div>
        <div v-else>
  
        </div>
        <img :src="portfolioItem.image" alt="">
        
      </div>
    
    </main>
  </template>
  
  <script setup>
  
  import { computed, ref } from 'vue';
  import getPortfolio from '@/modules/getPortfolio'
  const { portfolioItems } = getPortfolio()
  
  let selectedCategory = ref('')
  
  const filteredPortfolioItems = computed(() =>{
    if (selectedCategory.value == '') {
      return portfolioItems.value
    } 
    else {
      return portfolioItems.value.filter(item => item.category == selectedCategory.value)
    
    }
  })
  
  </script>
  
  <style lang="scss">
  .card {
    color: #fff;
    background-color: #004F4d;
    padding: 1rem;
    margin: 1rem;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .web {
    background-color: #004F4D;
  }
  .photo {
    background-color: #004F4D;
  }
 
  </style>