<template>
  <div class="modal modal-xl fade" id="applicationModal" tabindex="-1" aria-labelledby="applicationModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <p class="modal-title fs-3 fw-bold text-decoration-underline">{{ application?.name }}</p>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body row">
          <div class="col-12 col-lg-8 mb-2 p-0 position-relative">
            <img class="w-100 rounded" :src="application?.img" :alt="application?.name">
            <div class="d-flex justify-content-around icon-position">
              <a :href="application?.url" v-if="application?.url" target="_blank" class="mdi mdi-play-box text-turquoise rounded selectable" title="Live Page"></a>
              <a :href="`https://github.com/EwanStubblefield-Allen/${application?.git}`" target="_blank" class="mdi mdi-github text-turquoise rounded selectable" title="GitHub Repo"></a>
            </div>
          </div>

          <div class="col-12 col-lg-4">
            <p class="fs-5 fw-bold text-decoration-underline pt-3">Technologies</p>
            <section class="row justify-content-around">
              <div v-for="t in application?.technologies" :key="t" class="col-6 col-sm-4 col-lg-3 py-3 text-center">
                <img class="img-fluid icon" :src="`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${t[0]}/${t[0]}-plain${t[1]}.svg`" :alt="t" :title="t">
              </div>
            </section>
            <div class="d-flex flex-wrap justify-content-around w-100">
              <p v-for="o in application?.other" :key="o" class="bg-corduroy text-nurse mx-1 my-2 px-2 rounded">{{ o }}</p>
            </div>
          </div>

          <p :innerHTML="application?.description"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState.js'

export default {
  setup() {
    return {
      application: computed(() => AppState.application)
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