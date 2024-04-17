<template>
  <main>
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
        Select Category
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><button class="dropdown-item" @click="selectedCategory = 'infographic'">Infographic</button></li>
        <li><button class="dropdown-item" @click="selectedCategory = 'web'">Website</button></li>
        <li><button class="dropdown-item" @click="selectedCategory = 'businesscard'">Businesscard</button></li>
        <li><button class="dropdown-item" @click="selectedCategory = ''">All</button></li>
      </ul>
    </div>

    <div class="portfolio-items">
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
  .portfolio-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .card-pot {
    flex: 1 0 calc(50% - 2rem);
    color: #f1f1f1;
    padding: 1rem;
    margin: 1rem;
    box-shadow: 0 0 5px #99a5a5;
  }

  h2{
    color: #c1d3d2;
    font-size: larger;
    margin-bottom: 10px;
  }
  h3{
    color: #c0d1d1;
    font-size: large;
    margin-bottom: 10px;
  }
  
   
  
  

  button {
    color: #fbfcfc;
    padding: 1rem;
    margin: 1rem;
    box-shadow: 0 0 5px #bac0c0;
    display: inline-block;
  }
 
  </style>