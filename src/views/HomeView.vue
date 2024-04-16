<template>
  
<!--   <div class="hero-image">
    <img src="../assets/plante.jpeg" class="my-hero-img img-fluid" alt="...">

      <div class="me-card card" style="width: 18rem;">
      <img src="../assets/mig.png" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title"><img src="../assets/navn.png" class="img-fluid" alt="..."></h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      </div>
  </div>
 -->
  <hero class="hero">

<div class="container py-10 ">
    <h2 class="text-2xl font-bold py-5 text-center">Welcome to my portfolio site</h2>
    <div class="d-grid gap-2 col-6 mx-auto">
      <button class="btn btn-primary" type="button">CV</button>
      <!-- <button class="btn btn-primary" type="button">projects</button> -->
    </div>
</div>

</hero>

  <section class="bg-green">
      <div class="container py-6 flexbox ">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="card-home
              e">
                  <img class="size-52 rounded" src="../assets/github.png" alt="">
                  <div class="card-body">
                      <h3 class="text-2xl font-bold">Github</h3>
                      <p>Have a look at my Github, this is where i store all of my development projects.</p>
                  </div>
              </div>
              <div class="card-home">
                  <img class="size-52 rounded" src="../assets/linkedin.png" alt="">
                  <div class="card-body">
                      <h3 class="text-2xl font-bold">LinkedIn</h3>
                      <p>Follow me on LinkedIn to see much more about my skills, education and work. </p>
                  </div>
              </div>
              <div class="card-home">
                  <img class="size-52 rounded" src="../assets/youtube.png" alt="">
                  <div class="card-body">
                      <h3 class="text-2xl font-bold">Video CV</h3>
                      <p>Press play, and let me introduce myself right here in my video cv.</p>  
                  </div>
              </div>
          </div>
      </div> 
  </section>
</template>
<script setup>
 
</script>
<style>

  .hero {
    background-image: url('../assets/plante.jpeg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #888;
    text-align: center;
  }

  .hero-image {
   position: relative;
  }

  .my-hero-img {
    width: auto;
    height: auto;
    border-radius: 0%;
    filter: grayscale(100%);
    position: relative;
    z-index: 1;
    margin-top: -200px;
  }

 

  .me-card {
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
  }

  .card-home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  text-align: center; 
  align-content: center;
  color: #004F4D;
    
    padding: 1rem;
    margin: 1rem;
    border-radius: 0px;
    box-shadow: 0 0 10px #004F4D;
  }

  @media (max-width: 750px) {
    .my-hero-img {
      margin-top: 0;
        width: 100%;
      height: auto;
    }

    .me-card {
      position: static;
      transform: none;
      margin-top: 20px; /* Adjust as needed */
    }
}

</style>
