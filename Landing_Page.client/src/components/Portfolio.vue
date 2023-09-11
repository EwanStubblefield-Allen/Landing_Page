<template>
  <section class="row justify-content-center bg-steel text-nurse py-3">
    <div class="col-10">
      <p class="fs-1">Portfolio</p>
    </div>
    <div class="col-12 p-3">
      <ul class="nav nav-tabs justify-content-around">
        <li :class="{ 'active text-turquoise': editable == 1 }" @click="editable = 1" class="nav-item flex-grow-1 text-center p-3 selectable rounded">
          <p class="fs-3">CodeFitness</p>
        </li>
        <li :class="{ 'active text-turquoise': editable == 2 }" @click="editable = 2" class="nav-item flex-grow-1 text-center p-3 selectable rounded">
          <p class="fs-3">Keepr</p>
        </li>
        <li :class="{ 'active text-turquoise': editable == 3 }" @click="editable = 3" class="nav-item flex-grow-1 text-center p-3 selectable rounded">
          <p class="fs-3">All-Spice</p>
        </li>
        <li :class="{ 'active text-turquoise': editable == 4 }" @click="editable = 4" class="nav-item flex-grow-1 text-center p-3 selectable rounded">
          <p class="fs-3">Tower</p>
        </li>
      </ul>
    </div>
  </section>

  <section v-if="editable == 1" class="row justify-content-center bg-nurse p-3">
    <div class="col-12 col-sm-4">
      <img src="" alt="CodeFitness">
    </div>
    <div class="col-12 col-md-6">
      <p class="fs-3 fw-bold text-decoration-underline">CodeFitness</p>

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
    <div class="col-12 col-sm-4">
      <img src="" alt="Keepr">
    </div>
    <div class="col-12 col-md-6">
      <p class="fs-3 fw-bold text-decoration-underline">Keepr</p>

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
    <div class="col-12 col-sm-4">
      <img src="" alt="All-Spice">
    </div>
    <div class="col-12 col-md-6">
      <p class="fs-3 fw-bold text-decoration-underline">All-Spice</p>

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
    <div class="col-12 col-sm-4">
      <img src="" alt="Tower">
    </div>
    <div class="col-12 col-md-6">
      <p class="fs-3 fw-bold text-decoration-underline">Tower</p>

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
    const editable = ref()

    return {
      editable
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon {
    height: 5em;
    filter: grayscale(1);
  }

  .icon:hover {
    filter: grayscale(0);
  }

  .active {
    background: linear-gradient(145deg, #000000, #23272b);
    box-shadow: 10px 10px 19px #000000, -10px -10px 19px #262a2e;
  }
</style>