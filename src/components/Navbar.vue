<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-steel px-3">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav ms-auto">
        <li>
          <div @click="goTo('home')" class="btn text-turquoise lighten-30 selectable text-uppercase">
            Home
          </div>
          <div @click="goTo('portfolio')" class="btn text-turquoise lighten-30 selectable text-uppercase">
            Portfolio
          </div>
          <div @click="goTo('contact')" class="btn text-turquoise lighten-30 selectable text-uppercase">
            Contact
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    return {
      goTo(location) {
        if (location == 'home') {
          document.documentElement.scrollTop = 0
          return
        }
        document.getElementById(location).scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
  // components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--turquoise);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.text-turquoise:hover {
  color: var(--turquoise);
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}
</style>