<template>
  <section id="portfolio" class="row justify-content-center bg-steel text-nurse py-3">
    <div class="col-10">
      <p class="fs-1">Portfolio</p>
    </div>
    <div class="col-12 p-3">
      <ul class="nav nav-tabs justify-content-around">
        <li v-for="p in portfolio" :key="p.name" :class="{ 'active': editable == p.name }" @click="editable = p.name" class="nav-item flex-grow-1 text-center p-3 selectable rounded">
          <p class="fs-3">{{ p.name }}</p>
        </li>
      </ul>
    </div>
  </section>

  <div v-for="p in portfolio" :key="p.name">
    <section v-if="editable == p.name" class="row justify-content-center bg-nurse p-3">
      <div class="col-12 col-md-8 col-lg-6 m-3 p-0 position-relative elevation-5">
        <img class="w-100 rounded" :src="p.img" :alt="p.name">
        <div class="d-flex justify-content-around icon-position">
          <a :href="p.url" target="_blank" class="mdi mdi-play-box text-turquoise rounded selectable" title="Live Page"></a>
          <a :href="`https://github.com/EwanStubblefield-Allen/${p.git}`" target="_blank" class="mdi mdi-github text-turquoise rounded selectable" title="GitHub Repo"></a>
        </div>
      </div>

      <div class="col-12 col-md-10 col-lg-4">
        <p class="fs-3 fw-bold text-decoration-underline">{{ p.name }}</p>
        <p>{{ p.description }}</p>

        <p class="fs-5 fw-bold text-decoration-underline pt-3">Technologies</p>
        <section class="row justify-content-around">
          <div v-for="t in p.technologies" :key="t" class="col-6 col-sm-4 col-lg-3 py-3 text-center">
            <img class="img-fluid icon" :src="`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${t[0]}/${t[0]}-plain${t[1]}.svg`" :alt="t" :title="t">
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { AppState } from '../AppState'

export default {
  setup() {
    const editable = ref(AppState.portfolio[0].name)

    return {
      editable,
      portfolio: computed(() => AppState.portfolio)
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
