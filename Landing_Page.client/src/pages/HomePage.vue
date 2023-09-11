<template>
  <section class="row justify-content-center">
    <div class="col-10 d-flex flex-column justify-content-between hero py-5">
      <div></div>
      <div>
        <p class="fs-2">Hi, I'm <span class="text-turquoise">Ewan</span></p>
        <p class="fs-1">Full Stack Developer</p>
      </div>
      <div>
        <p class="fs-4">Find Me:</p>
        <div class="d-flex">
          <a href="https://github.com/EwanStubblefield-Allen" class="banner m-2 elevation-5" target="_blank">
            <i class="mdi mdi-github fs-3 text-turquoise"></i>
          </a>
          <a href="https://www.linkedin.com/in/ewan-stubblefield-allen/" target="_blank" class="banner m-2 elevation-5">
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

  .banner {
    height: 4em;
    width: 4em;
    background-color: var(--steel);
    border-radius: 10px;
    text-shadow: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .banner:hover {
    transform: scale(1.05);

    i {
      color: var(--boston);
    }
  }
</style>