<template>
  <div class="card">
  <div class="card-body">
  <div class="about">
    <h1>About Me</h1>
    <div class="profile">
      <img src="../assets/mig2.png" alt="Your Name">
      <div class="bio">
        <p>I am an energetic and ambitious person with a passion for digital design and media development. Dedicated to creating engaging and user-friendly digital platforms that are a delight to the eye.
          I combine my attention to detail and positivity to create meaningful and productive results that can be applied in the real world. Certified coach, and currently a student in multimedia design, with a keen interest in web development.</p>
        <p>I specialize in customer service and communication, web development and multimedia design, administration and personnel management, teaching, and coaching.</p>
      </div>
    </div>
    
    <h2>Skills</h2>
    <ul class="skills">
      <li v-for="(skill, index) in skills" :key="index">{{ skill }}</li>
    </ul>
    
    <h2>Projects</h2>
    <ul class="projects">
      <li v-for="(project, index) in projects" :key="index">{{ project }}</li>
    </ul>
    
    <h2>Experience</h2>
    <div class="experience">
      <div class="experience-item">
        <h3>Ung til ung - Tronsø Skolen</h3>
        <h4>2022 - today</h4>
        <p>I engage in planning and facilitating various activities while being available to students when they need a conversation or support. My role is to be a supportive and attentive adult figure contributing to a positive and enriching school environment for all students.</p>
      </div>
      <div class="experience-item">
        <h3>Restaurant Manager - Hjerting Badehotel</h3>
        <h4>2022</h4>
        <p>Being a restaurant manager involved being responsible for the daily operation of the restaurant and ensuring that guests had an outstanding dining experience. As a restaurant manager, I led a dedicated team, planned menus, managed operating budgets, and ensured compliance with food standards and regulations. My role also included training and motivating staff, handling customer complaints, and ensuring the smooth operation of the restaurant.</p>
      </div>
      <div class="experience-item">
        <h3>Hostess - Billund Gastropub</h3>
        <h4>2021</h4>
        <p>As a bartender, hostess, and server, I played a central role in creating a pleasant atmosphere and ensuring a first-class service experience for our guests. In addition to my primary role, I also had responsibility for social media, where I was responsible for updating and engaging our followers on platforms such as Facebook and Instagram.</p>
      </div>
      <div class="experience-item">
        <h3>Front Office & Retail Manager - Landal GreenParks Seawest</h3>
        <h4>2018 - 2021</h4>
        <p>In my role as Front Office and Retail Manager, I was responsible for ensuring smooth operations and a high standard of guest service. I led a dedicated team that welcomed guests at the reception, handled check-in and check-out, and addressed any questions or issues. Additionally, I was responsible for the retail operations, ensuring that the store was well-stocked, organized, and provided a positive shopping experience for our guests.</p>
      </div>
    </div>
    
    <h2>Education</h2>
    <div class="education">
      <div class="education-item">
        <h3>Multimedia Designer - Erhvervsakademi SydVest (Business Academy South West)</h3>
        <h4>2023 - 2025</h4>
        <p>Focusing on web development and combining creative skills with a passion for technology and digital innovation.</p>
      </div>
      <div class="education-item">
        <h3>Certified Coach - Sofia Manning</h3>
        <h4>2022</h4>
        <p>Certified coach with skills in personal development and growth.</p>
      </div>
      <div class="education-item">
        <h3>International Certified Equine Masseur - Center for Animal Therapy</h3>
        <h4>2018-2019</h4>
        <p>Trained in therapeutic massage techniques for horses.</p>
      </div>
      <div class="education-item">
        <h3>Equine Mirror Mentor - Hestekraften</h3>
        <h4>2018</h4>
        <p>Horse-assisted therapy and coaching</p>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      skills: ["Communication", "Coaching", "Attention to detail", "Positivity"],
      projects: ["Websites", "Inforgraphics", "Business cards"]

    };
  }
};

</script>

<style scoped>


.bg-white {
    background-color: #1f2024;
  }

  .card {
    display: flex;
    flex-direction: column;
    color: #f4f4f4;  
    padding: 1rem; 
    border-radius: 0%;
  }

  .about {
    width: 100%;
    padding: 1rem;
    margin: 1rem auto;
    box-shadow: 0 0 5px #99a5a5;
  }

  .about h1 {
    font-size: 2.5em; 
    margin-bottom: 20px; 
    color: #004f4d; 
  }

  .about h2 {
    font-size: 2em; 
    margin-top: 30px;
    margin-bottom: 20px; 
    color: #f4f4f4;
  }

  .about p, .about ul {
    font-size: 1.2em; 
    line-height: 1.5; 
    color: #f4f4f4;
  }

.profile {
  display: flex;
  align-items: center;
}

.profile img {
  width: 200px;
  height: 200px;
  border-radius: 15%;
  margin-right: 20px;
}

.bio {
  flex: 1;
}

.skills {
  list-style-type: none;
  padding: 0;
}

.skills li {
  background-color: #004f4d;
  padding: 5px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  color: #fbfcfc;
  box-shadow: 0 0 5px #bac0c0;
  display: inline-block;
  
}

.projects {
  list-style-type: none;
  padding: 0;
}

.projects li {
  background-color: #004f4d;
  padding: 5px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  color: #fbfcfc;
  box-shadow: 0 0 5px #bac0c0;
  display: inline-block;
  
}

.experience-item {
  margin-bottom: 20px;

}

.experience-item h3 {
  margin-bottom: 10px;
}

.experience-item p {
  margin-bottom: 5px;
}

.education-item {
  margin-bottom: 20px;
  
}


</style>


