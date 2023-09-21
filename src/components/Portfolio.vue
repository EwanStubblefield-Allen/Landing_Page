<template>
  <section id="portfolio" class="row justify-content-center bg-steel text-nurse py-3">
    <div class="col-10">
      <p class="fs-1">Portfolio</p>
    </div>
    <div class="col-12 p-3">
      <ul class="nav nav-tabs justify-content-around">
        <li :class="{ 'active': editable == 1 }" @click="editable = 1" class="nav-item flex-grow-1 text-center p-3 selectable rounded">
          <p class="fs-3">CodeFitness</p>
        </li>
        <li :class="{ 'active': editable == 2 }" @click="editable = 2" class="nav-item flex-grow-1 text-center p-3 selectable rounded">
          <p class="fs-3">Keepr</p>
        </li>
        <li :class="{ 'active': editable == 3 }" @click="editable = 3" class="nav-item flex-grow-1 text-center p-3 selectable rounded">
          <p class="fs-3">All-Spice</p>
        </li>
        <li :class="{ 'active': editable == 4 }" @click="editable = 4" class="nav-item flex-grow-1 text-center p-3 selectable rounded">
          <p class="fs-3">Tower</p>
        </li>
      </ul>
    </div>
  </section>

  <section v-if="editable == 1" class="row justify-content-center bg-nurse p-3">
    <div class="col-12 col-md-8 col-lg-6 m-3 p-0 position-relative elevation-5">
      <img class="w-100 rounded" src="../assets/img/CodeFitness.png" alt="CodeFitness">
      <div class="d-flex justify-content-around icon-position">
        <a href="https://codefitness-16iw.onrender.com/#/" target="_blank" class="mdi mdi-play-box text-turquoise rounded selectable" title="Live Page"></a>
        <a href="https://github.com/EwanStubblefield-Allen/CodeFitness" target="_blank" class="mdi mdi-github text-turquoise rounded selectable" title="GitHub Repo"></a>
      </div>
    </div>

    <div class="col-12 col-md-10 col-lg-4">
      <p class="fs-3 fw-bold text-decoration-underline">CodeFitness</p>
      <p>CodeFitness is gamified fitness application that focuses on making working out enjoyable, especially for those who are inexperienced. Collaborated with <a href="https://www.linkedin.com/in/faith-morgan-94686b289" target="_blank">Faith Morgan</a>, <a href="https://linkedin.com/in/jasper-delight-a00771122" target="_blank">Jasper Delight</a>, <a href="https://www.linkedin.com/in/jwalk99star/" target="_blank">Joshua Walker</a>, and <a href="http://linkedin.com/in/kyle-peppersack-a39025285" target="_blank">Kyle Peppersack</a>. CodeFitness was deployed live using Render.</p>

      <p class="fs-5 fw-bold text-decoration-underline pt-3">Technologies</p>
      <section class="row justify-content-around">
        <div class="col-6 col-sm-4 col-lg-3 py-3 text-center">
          <img class="img-fluid icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="HTML" title="HTML">
        </div>
        <div class="col-6 col-sm-4 col-lg-3 py-3 text-center">
          <img class="img-fluid icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" alt="CSS" title="CSS">
        </div>
        <div class="col-6 col-sm-4 col-lg-3 py-3 text-center">
          <img class="img-fluid icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="JavaScript" title="JavaScript">
        </div>
        <div class="col-6 col-sm-4 col-lg-3 py-3 text-center">
          <img class="img-fluid icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-plain-wordmark.svg" alt="VueJS" title="VueJS">
        </div>
        <div class="col-6 col-sm-4 col-lg-3 py-3 text-center">
          <img class="img-fluid icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt="NodeJS" title="NodeJS">
        </div>
        <div class="col-6 col-sm-4 col-lg-3 py-3 text-center">
          <img class="img-fluid icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" alt="html symbol" title="MongoDB">
        </div>
      </section>
    </div>
  </section>

  <section v-else-if="editable == 2" class="row justify-content-center bg-nurse p-3">
    <div class="col-12 col-md-8 col-lg-6 m-3 p-0 position-relative elevation-5">
      <img class="w-100 rounded" src="../assets/img/Keepr.png" alt="Keepr">
      <div class="d-flex justify-content-around icon-position">
        <a href="https://keepr.ewanstubblefield-allen.dev" target="_blank" class="mdi mdi-play-box text-turquoise rounded selectable" title="Live Page"></a>
        <a href="https://github.com/EwanStubblefield-Allen/Final_Checkpoint" target="_blank" class="mdi mdi-github text-turquoise rounded selectable" title="GitHub Repo"></a>
      </div>
    </div>

    <div class="col-12 col-md-10 col-lg-4">
      <p class="fs-3 fw-bold text-decoration-underline">Keepr</p>
      <p>Keepr is a Pinterest clone that allows users to post images with descriptions known as keeps and allows them to save keeps in a collection called vaults. This application was deployed live using docker and an AWS EC2 instance.</p>

      <p class="fs-5 fw-bold text-decoration-underline pt-3">Technologies</p>
      <section class="row justify-content-around">
        <div class="col-6 col-sm-4 col-lg-3 py-3 text-center">
          <img class="img-fluid icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="HTML" title="HTML">
        </div>
        <div class="col-6 col-sm-4 col-lg-3 py-3 text-center">
          <img class="img-fluid icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" alt="CSS" title="CSS">
        </div>
        <div class="col-6 col-sm-4 col-lg-3 py-3 text-center">
          <img class="img-fluid icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="JavaScript" title="JavaScript">
        </div>
        <div class="col-6 col-sm-4 col-lg-3 py-3 text-center">
          <img class="img-fluid icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-plain-wordmark.svg" alt="VueJS" title="VueJS">
        </div>
        <div class="col-6 col-sm-4 col-lg-3 py-3 text-center">
          <img class="img-fluid icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg" alt="html symbol" title="C#">
        </div>
        <div class="col-6 col-sm-4 col-lg-3 py-3 text-center">
          <img class="img-fluid icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" alt="html symbol" title="MySQL">
        </div>
      </section>
    </div>
  </section>

  <section v-else-if="editable == 3" class="row justify-content-center bg-nurse p-3">
    <div class="col-12 col-md-8 col-lg-6 m-3 p-0 position-relative elevation-5">
      <img class="w-100 rounded" src="../assets/img/AllSpice.png" alt="AllSpice">
      <div class="d-flex justify-content-around icon-position">
        <a href="https://all-spice.ewanstubblefield-allen.dev" target="_blank" class="mdi mdi-play-box text-turquoise rounded" title="Live Page"></a>
        <a href="https://github.com/EwanStubblefield-Allen/All_Spice" target="_blank" class="mdi mdi-github text-turquoise rounded selectable" title="GitHub Repo"></a>
      </div>
    </div>

    <div class="col-12 col-md-10 col-lg-4">
      <p class="fs-3 fw-bold text-decoration-underline">All-Spice</p>
      <p>All-Spice is recipe sharing application where users can post and favorite recipes. All-Spice was deployed live using AWS EC2 instance and docker.</p>

      <p class="fs-5 fw-bold text-decoration-underline pt-3">Technologies</p>
      <section class="row justify-content-around">
        <div class="col-6 col-sm-4 col-lg-3 py-3 text-center">
          <img class="img-fluid icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="HTML" title="HTML">
        </div>
        <div class="col-6 col-sm-4 col-lg-3 py-3 text-center">
          <img class="img-fluid icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" alt="CSS" title="CSS">
        </div>
        <div class="col-6 col-sm-4 col-lg-3 py-3 text-center">
          <img class="img-fluid icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="JavaScript" title="JavaScript">
        </div>
        <div class="col-6 col-sm-4 col-lg-3 py-3 text-center">
          <img class="img-fluid icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-plain-wordmark.svg" alt="VueJS" title="VueJS">
        </div>
        <div class="col-6 col-sm-4 col-lg-3 py-3 text-center">
          <img class="img-fluid icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg" alt="html symbol" title="C#">
        </div>
        <div class="col-6 col-sm-4 col-lg-3 py-3 text-center">
          <img class="img-fluid icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" alt="html symbol" title="MySQL">
        </div>
      </section>
    </div>
  </section>

  <section v-else-if="editable == 4" class="row justify-content-center bg-nurse p-3">
    <div class="col-12 col-md-8 col-lg-6 m-3 p-0 position-relative elevation-5">
      <img class="w-100 rounded" src="../assets/img/Tower.png" alt="Tower">
      <div class="d-flex justify-content-around icon-position">
        <a href="https://tower.ewanstubblefield-allen.dev" target="_blank" class="mdi mdi-play-box text-turquoise rounded selectable" title="Live Page"></a>
        <a href="https://github.com/EwanStubblefield-Allen/Checkpoint6" target="_blank" class="mdi mdi-github text-turquoise rounded selectable" title="GitHub Repo"></a>
      </div>
    </div>

    <div class="col-12 col-md-10 col-lg-4">
      <p class="fs-3 fw-bold text-decoration-underline">Tower</p>
      <p>Tower is and application where users can post upcoming events that allow them to attend events and comment. This was deployed live using AWS EC2 instance.</p>

      <p class="fs-5 fw-bold text-decoration-underline pt-3">Technologies</p>
      <section class="row justify-content-around">
        <div class="col-6 col-sm-4 col-lg-3 py-3 text-center">
          <img class="img-fluid icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="HTML" title="HTML">
        </div>
        <div class="col-6 col-sm-4 col-lg-3 py-3 text-center">
          <img class="img-fluid icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" alt="CSS" title="CSS">
        </div>
        <div class="col-6 col-sm-4 col-lg-3 py-3 text-center">
          <img class="img-fluid icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="JavaScript" title="JavaScript">
        </div>
        <div class="col-6 col-sm-4 col-lg-3 py-3 text-center">
          <img class="img-fluid icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-plain-wordmark.svg" alt="VueJS" title="VueJS">
        </div>
        <div class="col-6 col-sm-4 col-lg-3 py-3 text-center">
          <img class="img-fluid icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt="NodeJS" title="NodeJS">
        </div>
        <div class="col-6 col-sm-4 col-lg-3 py-3 text-center">
          <img class="img-fluid icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" alt="html symbol" title="MongoDB">
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const editable = ref(1)

    return {
      editable
    }
  }
}
</script>

<style lang="scss" scoped>
  #portfolio {
    scroll-margin-top: 64px;
  }

  .icon {
    height: 5em;
    filter: grayscale(1);
  }

  .icon:hover {
    filter: grayscale(0);
  }

  .active,
  .nav-item:hover {
    color: var(--turquoise);
    background: linear-gradient(145deg, #000000, #23272b);
    box-shadow: 10px 10px 19px #000000, -10px -10px 19px #262a2e;
  }

  .icon-position {
    height: 120px;
    width: 100%;
    position: absolute;
    top: calc(50% - (120px / 2));
    left: 0;

    a {
      text-shadow: 0px 3px 5px white;
      font-size: 5em;
      opacity: 0;
      transition: .25s;
    }

    a:hover {
      color: var(--slate);
      scale: 1.1;
    }
  }

  .position-relative {
    height: fit-content;
    border: 2px dashed black;
    border-radius: 10px;
    transition: .25s;
  }

  .position-relative:hover {
    transform: scale(1.05);

    .mdi-play-box {
      animation: slideIn .5s ease-in-out forwards;
    }

    .mdi-github {
      animation: slideIn2 .5s ease-in-out forwards;
    }
  }

  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateX(-150%);
    }

    100% {
      opacity: 100%;
      transform: translateX(0);
    }
  }

  @keyframes slideIn2 {
    0% {
      opacity: 0;
      transform: translateX(150%);
    }

    100% {
      opacity: 100%;
      transform: translateX(0);
    }
  }
</style>