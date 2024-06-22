<template>
  <section id="hero" class="row justify-content-center">
    <div class="col-10 d-flex flex-column justify-content-between hero py-5">
      <div></div>
      <div>
        <p class="fs-2">Hi, I'm <span class="text-turquoise">Ewan</span></p>
        <p class="fs-1">Full Stack Developer</p>
      </div>
      <div>
        <p class="fs-4">Find Me:</p>
        <div class="d-flex">
          <a href="https://github.com/EwanStubblefield-Allen" class="banner bg-steel m-2 elevation-5" target="_blank" title="My Github Page">
            <i class="mdi mdi-github fs-3 text-turquoise"></i>
          </a>
          <a href="https://www.linkedin.com/in/ewan-stubblefield-allen/" target="_blank" class="banner bg-steel m-2 elevation-5" title="My LinkedIn Page">
            <i class="mdi mdi-linkedin fs-3 text-turquoise"></i>
          </a>
        </div>
      </div>
    </div>
  </section>

  <Portfolio />

  <Contact />
</template>

<script>
import Portfolio from '../components/Portfolio.vue'
import Contact from '../components/Contact.vue'

export default {
  setup() {
    return {}
  },
  components: { Portfolio, Contact }
}
</script>

<style lang="scss" scoped>
.hero {
  height: var(--main-height);
  font-weight: bold;
  text-shadow: 0px 3px 5px white;
}
</style>