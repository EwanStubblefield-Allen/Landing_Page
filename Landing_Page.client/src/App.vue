<template>
  <div class="z-1">
    <header class="sticky-top">
      <Navbar />
    </header>
    <main class="container-fluid">
      <router-view />
    </main>
    <footer class="container-fluid p-5 bg-steel">
      <section class="row justify-content-center fs-5">
        <div class="col-12 col-md-8 col-lg-6 d-flex justify-content-around text-center">
          <p class="py-2 w-100 selectable rounded">Home</p>
          <p class="py-2 w-100 selectable rounded">Portfolio</p>
          <p class="py-2 w-100 selectable rounded">Contact Me</p>
        </div>
        <hr class="text-nurse my-3">
        <div class="col-12 text-center pt-4">
          <p>© All rights reserved by Ewan Stubblefield-Allen</p>
        </div>
      </section>
    </footer>
  </div>
  <Animation />
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import Animation from './components/Animation.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar, Animation }
}
</script>
<style lang="scss">
  @import "./assets/scss/main.scss";

  :root {
    --main-height: calc(100vh - 64px);
    --nurse: #f1f2f1;
    --boston: #3997ae;
    --turquoise: #14c6e7;
    --corduroy: #596d6b;
    --steel: #1e1c28;
  }

  body {
    color: var(--steel);
  }

  main {
    margin: 0;
    overflow-x: hidden;
    background-repeat: no-repeat;
  }

  footer {
    font-weight: bold;
    text-shadow: 0px 3px 5px white;
  }

  p {
    margin: 0;
  }

  .bg-nurse {
    background-color: var(--nurse);
  }

  .bg-steel {
    background-color: var(--steel);
  }

  .text-nurse {
    color: var(--nurse)
  }

  .text-boston {
    color: var(--boston);
  }

  .text-turquoise {
    color: var(--turquoise)
  }

  .banner {
    height: 4em;
    width: 4em;
    border-radius: 10px;
    text-shadow: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .banner:hover {
    transition: .25s;
    transform: scale(1.05) translateY(-2.5px);

    i {
      color: var(--boston);
    }
  }
</style>