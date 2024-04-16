<template>
    <main>
      
  
      <button @click="selectedCategory = 'infographic'">Infographic</button>
      <button @click="selectedCategory = 'web'">Website</button>
      <button @click="selectedCategory = 'businesscard'">Businesscard</button>
      <button @click="selectedCategory = ''">All</button>
  
      <div v-for="portfolioItem in filteredPortfolioItems" :key="portfolioItem" class="card-pot">
        <h2>{{ portfolioItem.title }}</h2>
        <h3>Description: {{ portfolioItem.description }}</h3>
        <h3>Tech: {{ portfolioItem.tech }}</h3>
        <!-- <p :class="portfolioItem.category"> Kategori: {{ portfolioItem.category }}</p> -->
  
        <div v-if="portfolioItem.link">
          <a :href="portfolioItem.link">See it live here!</a>
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
  .card-pot {
    color: #004F4D;
    
    padding: 1rem;
    margin: 1rem;
    box-shadow: 0 0 10px #004F4D;
  }

  h2{
    color: #004F4D;
    font-size: larger;
    margin-bottom: 10px;
  }
  h3{
    color: #004F4D;
    font-size: large;
    margin-bottom: 10px;
  }
  
   
  
  .web {
    background-color: #004F4D;
  }
  .photo {
    background-color: #004F4D;
  }

  button {
    
    color: #004F4D;
    padding: 1rem;
    margin: 1rem;
    box-shadow: 0 0 10px #004F4D;
  }
 
  </style>