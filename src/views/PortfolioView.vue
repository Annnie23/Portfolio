<template>
  <main>
    <div class="dropdown">
      <button class="drop-btn btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
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
          <p>
          <a :href="portfolioItem.link">See it live here!</a>
          </p>
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
  
  <style lang="scss" scoped>


  .dropdown-item{
  // padding: 0.8em 1.75em;
  background-color: #004f4d;
  border-radius: 0px;
  border: .3px solid #004f4d;
  transition: .5s;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  z-index: 1;
  font-weight: 300;
  font-size: 17px;
  color: #f1f1f1;

  &:hover{
    background-color: #1f2024;
    color: #f1f1f1;
    
  }
  }

  .dropdown-menu{
  background-color: transparent;
  border: none;
  }

  .portfolio-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .card-pot {
    flex: 1 0 calc(50% - 3rem);
    color: #f1f1f1;
    padding: 1rem;
    margin: 1rem;
    box-shadow: 0 0 5px #99a5a5;
  }

  h2{
    color: #ffffff;
    font-size: larger;
    margin-bottom: 10px;
  }
  h3{
    color: #888888;
    font-size: large;
    margin-bottom: 10px;
  }

  p{
    color: #004f4d;
    padding-bottom: 4px;
    
  }
  
  button {
    color: #ffffff;
    padding: 1rem;
    margin: 1rem;
    box-shadow: 0 0 5px #ffffff;
    display: inline-block;
  }
 
  </style>