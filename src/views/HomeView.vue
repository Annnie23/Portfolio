<template>

  <hero class="hero">
    <div class="container py-10 ">
      <div class="d-grid gap-2 col-6 mx-auto">
        <img src="../assets/navn.png" class="img-fluid" alt="...">
        <h2 class="text-2xl font-bold py-5 text-center">Welcome to my portfolio</h2>
        <a href="CV.pdf" download="CV.pdf" class="btn btn-primary">Download CV</a>


      </div>
    </div>
  </hero>

  <section class="bg-green">
      <div class="link-container container py-6 flexbox ">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="card-home">
                  <a href="https://github.com/Annnie23">
                  <img class="size-52 rounded" src="../assets/github.png" alt="">
                  </a>
                  <div class="card-body">
                      <h3 class="text-2xl font-bold">Github</h3>
                      <p>Have a look at my Github, this is where i store all of my development projects.</p>
                  </div>
              </div>
              <div class="card-home">
                  <a href="https://www.linkedin.com/in/anne-sophie-nielsen/">
                  <img class="size-52 rounded" src="../assets/linkedin.png" alt="">
                  </a>
                  <div class="card-body">
                      <h3 class="text-2xl font-bold">LinkedIn</h3>
                      <p>Follow me on LinkedIn to see much more about my skills, education and work. </p>
                  </div>
              </div>
              <div class="card-home">
                  <a href="https://www.youtube.com/watch?v=WFMQ-o4lTuY">
                  <img class="size-52 rounded" src="../assets/youtube.png" alt="">
                  </a>
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
<style scoped>

  .btn {
    box-shadow: 0 0 5px #fff;
  }

  .hero {
    background-image: url('../assets/plante.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  h2 {
    color: #ffffff;
  }

 
  .bg-green{
    background-color: #1f2024;
    box-shadow: 0 0 10px #004F4D;
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
    color: #ffffff;
    padding: 1rem;
    margin: 1rem;
    border-radius: 0px;
    box-shadow: 0 0 5px #ffffff;
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
      margin-top: 20px;
    }
  }

</style>
