<template>
  <section id="portfolio" class="row justify-content-center bg-steel text-nurse py-3">
    <div class="col-10">
      <p class="fs-1">Portfolio</p>
    </div>
  </section>

  <section class="row justify-content-center bg-nurse p-3">
    <div v-for="p in portfolio" :key="p.name" class="col-12 col-md-6 p-3">
      <img @click="setApplication(p)" class="w-100 rounded elevation-5 selectable" :src="p.img" :alt="p.name" data-bs-toggle="modal" data-bs-target="#applicationModal">
    </div>
  </section>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'

export default {
  setup() {
    return {
      portfolio: computed(() => AppState.portfolio),

      setApplication(app) {
        AppState.application = app
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#portfolio {
  scroll-margin-top: 64px;
}

img {
  transition: .25s;
}

img:hover {
  transform: scale(1.05);
}
</style>
