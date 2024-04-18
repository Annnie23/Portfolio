<template>

  <div class="parent">
    <header :class="{'sticky': scrolled, 'top-0': scrolled}" class="my-header-class transition-all duration-300 ease-in-out">
      <nav class="my-nav-class container flex flex-col sm:flex-row items-center gap-4 py-6">
        <router-link to="/" class="flex items-center gap-3 flex-1">
          <img class="my-logo-class md:max-h-20 h-auto" src="../assets/logo.png" alt="">
        </router-link>
          <div class="nav-flex flex flex flex-row gap-4">
            <router-link to="/" class="text-m font-semibold leading-6 text-black">Home</router-link>
            <router-link to="/about" class="text-m font-semibold leading-6 text-black">About</router-link>
            <router-link to="/portfolio" class="text-m font-semibold leading-6 text-black">Projects</router-link>
          </div>
      </nav>
    </header>
  </div>

</template>
  
  <script setup>

import { ref } from 'vue';

const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 0;
  console.log('Scrolling detected');
}

window.addEventListener('scroll', handleScroll);

handleScroll();

</script>
  
  <style scoped>

@keyframes pulse {
    0% {
        filter: drop-shadow(0 0 0 #838383);
    }
    50% {
        filter: drop-shadow(0 0 0.75rem #004f4d);
    }
    100% {
        filter: drop-shadow(0 0 0 #004f4d);
    }
}

.parent {
  min-height: auto;
  position: relative;
  overflow: visible;
  box-shadow: 0 0 10px #004F4D;
}

.sticky {
  position: sticky;
  z-index: 1000;
}
.top-0 {
  top: 0;
}

.my-header-class {
  width: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
  
.my-logo-class {
    filter: none;
    border-radius: 0%;
    margin-left: 2%;
    animation: pulse 3s infinite;
}
  
.my-nav-class a{
    color: #004f4d !important;
    font-size: 1.6em;
}

.text-m{
  transition: transform 0.3s ease-in-out;
}

.text-m:hover{
  transform: scale(1.08);
}

  </style>
  