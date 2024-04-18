<template>
  
  <div class="footer-card text-center">

    <div class="card-header">
      Thanks for visiting my portfolio
    </div>

  <div class="card-body">
  <div class="card-foot" style="width: 18rem;">
    <div class="card-header"></div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"> 
          <a href="https://www.youtube.com/watch?v=WFMQ-o4lTuY">Video CV</a> </li>
        <li class="list-group-item">
          <a href="https://www.linkedin.com/in/anne-sophie-nielsen/">LinkedIn</a> </li>
        <li class="list-group-item">
          <a href="https://github.com/Annnie23">Github</a>
        </li>
        <li class="list-group-item">
          <a href="https://linktr.ee/anne.sophiehgn">Linktree</a>
        </li>
      </ul>
  </div>
  
  <div class="card-foot" style="width: 18rem;">
    <div class="card-header"></div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><router-link to="/portfolio">Infographic</router-link></li>
        <li class="list-group-item"><router-link to="/portfolio">Website</router-link></li>
        <li class="list-group-item"><router-link to="/portfolio">Businesscard</router-link></li>
        <li class="list-group-item"><router-link to="/portfolio">All</router-link></li>
      </ul>
  </div>

    <div class="card-foot" style="width: 18rem;">
    <div class="card-header"></div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <i class="fas fa-map-marker-alt"></i> 
          <br>
          <a href="https://maps.app.goo.gl/Qvs4exbYwFfwuRbv7">Southern Denmark</a>
        </li>
        <li class="list-group-item">
          <i class="fas fa-envelope"></i>
          <br>
          <a href="mailto:anne.sophiehgn@gmail.com">anne.sophiehgn@gmail.com</a>
        </li>
        <li class="list-group-item">
          <i class="fas fa-phone"></i>
          <br>
          <a href="tel:+4531484705">+45 31 48 47 05</a>
        </li>
      </ul>
    </div>
  </div>

    <div class="card-footer text-body-secondary">
      2024 Copyright: https://asn-portfolio.web.app/
    </div>

  </div>

</template>

<script setup>

</script>

<style lang="scss" scoped>

.card-body {
    display: flex;
    justify-content: space-evenly;
    padding: 1rem;
    margin: 1rem;
    border-radius: 0px;
}

.list-group-item {
    background-color: #1f2024;
    color: white;
    font-size: medium;
    border: none;
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 0px;
    transition: transform 0.3s ease-in-out;
}

.list-group-item:hover {
    transform: scale(1.08);
}

.footer-card {
    background-color: #1f2024;
    color: #004f4d;
    font-size: x-large;
    padding: 1rem;
    border-radius: 0px;
    box-shadow: 0 0 10px #004F4D;
}

.card-header {
    font-size: 1.2em;
}

.card-footer{
    color: #c7c7c7 !important;
    font-size: small;
}

@media (max-width: 768px) {
  .card-body {
    flex-direction: column;
    align-items: center;
  }
}

</style>