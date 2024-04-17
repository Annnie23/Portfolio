<template>
    <div class="footer-card text-center">
  <div class="card-header">
    Thanks for visiting my portfolio site!
  </div>
  <div class="card-body">
   
<div class="card-foot" style="width: 18rem;">
  <div class="card-header">
   
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"> 
        <a href="https://www.youtube.com/watch?v=WFMQ-o4lTuY">Video CV</a> </li>
    <li class="list-group-item">
        <a href="https://www.linkedin.com/in/anne-sophie-nielsen/">LinkedIn</a> </li>
    <li class="list-group-item">
        <a href="https://github.com/Annnie23">Github</a>
    </li>
  </ul>
</div>
<div class="card-foot" style="width: 18rem;">
  <div class="card-header">
    
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><router-link to="/infographic">Infographic</router-link></li>
        
    <li class="list-group-item"><router-link to="/web">Website</router-link></li>
        
    <li class="list-group-item"><router-link to="/businesscard">Businesscard</router-link></li>
        
    <li class="list-group-item"><router-link to="/">All</router-link></li>
  </ul>

</div>
<div class="card-foot" style="width: 18rem;">
  <div class="card-header">
    
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
        <i class="fas fa-map-marker-alt"></i> Southern Denmark
    </li>
    <li class="list-group-item">
        <i class="fas fa-envelope"></i> anne.sophiehgn@gmail.com
    </li>
    <li class="list-group-item">
        <i class="fas fa-phone"></i> +45 31 48 47 05
    </li>
  </ul>
</div>

  </div>
  <div class="card-footer text-body-secondary">
    2024 Copyright: www.asn-portfolio.dk
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
    // box-shadow: 0 0 10px #004F4D;
}

.list-group-item {
    background-color: #1f2024;
    color: white;
    font-size: medium;
    border: none;
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 0px;
    // box-shadow: 0 0 5px #cdd4d4;
}

.footer-card {
    background-color: #1f2024;
    color: #004f4d;
    font-size: x-large;
    padding: 1rem;
    border-radius: 0px;
    box-shadow: 0 0 5px #cdd4d4;
}

.card-footer{
    color: #c0d6d5 !important;
    font-size: small;
}



@media (max-width: 768px) {
  .card-body {
    flex-direction: column;
    align-items: center;
  }
}


</style>