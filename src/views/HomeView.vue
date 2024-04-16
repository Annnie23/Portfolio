<template>
  <hero class="hero">
  

      <div class="container py-10 ">
        <img class="my-navn-class md:max-h-20 h-auto" src="../assets/navn.png" alt="">
          <h2 class="text-2xl font-bold py-5 text-center">Welcome to my portfolio site!</h2>
          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-primary" type="button">CV</button>
            <button class="btn btn-primary" type="button">VIDEO CV</button>
          </div>
      </div>
  </hero>

  <img src="../assets/blomster.jpg" class="img-fluid" alt="...">

  <section class="bg-green">
      <div class="container py-6 flexbox ">
          <h2 class="text-4xl font-bold text-center py-8">Mine kompetencer</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="card">
                  <img class="size-52 rounded" src="../assets/img/coding.svg" alt="">
                  <div class="card-body">
                      <h3 class="text-2xl font-bold">Design og udvilking</h3>
                      <p>Design og udvikling af websites, der er brugervenlige og responsive.</p>
                  </div>
              </div>
              <div class="card">
                  <img class="size-52 rounded" src="../assets/img/content-creation.svg" alt="">
                  <div class="card-body">
                      <h3 class="text-2xl font-bold">Content creation - grafiske elementer</h3>
                      <p>Design og producering af gafiske elementer til visuel præsentation </p>
                  </div>
              </div>
              <div class="card">
                  <img class="size-52 rounded" src="../assets/img/content-creator.svg" alt="">
                  <div class="card-body">
                      <h3 class="text-2xl font-bold">Content creation - video og foto</h3>
                      <p>Billeder og videoer som er redigeret</p>  
                  </div>
              </div>
          </div>
      </div> 
  </section>
</template>
<script setup>
 
</script>
<style>


  .card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  text-align: center; 
  align-content: center;
  }
 
  .my-navn-class {
    position: center;
    
  }
  hero {
    background-color: #004F4D;
  }

  .my-hero-img {
    width: auto;
    height: 100%;
    border-radius: 0%;
  }

</style>
