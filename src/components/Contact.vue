<template>
  <section id="contact" class="row px-5 py-4 justify-content-around align-items-center">
    <div class="col-12 col-md-6 bg-steel rounded elevation-5 p-3">
      <p class="fs-3 text-nurse">Email Me</p>
      <form @submit.prevent="sendEmail()">
        <div class="form-floating my-3">
          <input v-model="editable.user_name" id="floatingName" class="form-control" type="text" placeholder="Name..." required>
          <label for="floatingName">Name</label>
        </div>
        <div class="form-floating my-3">
          <input v-model="editable.user_email" id="floatingEmail" class="form-control" type="email" placeholder="Email..." required>
          <label for="floatingEmail">Email</label>
        </div>
        <div class="form-floating my-3">
          <textarea v-model="editable.message" id="floatingMessage" class="form-control" type="text" placeholder="Message..." style="height: 15em"> required></textarea>
          <label for="floatingMessage">Message</label>
        </div>
        <button class="btn btn-light fw-bold w-100" type="submit">Send Message</button>
      </form>
    </div>

    <div class="col-12 col-md-5 col-lg-4 bg-steel text-nurse rounded elevation-5 my-3 p-3">
      <p>Phone: +1 (208) 949-0677</p>
      <p>Email: stubblefieldallenewan@gmail.com</p>

      <p>Find Me:</p>
      <div class="d-flex justify-content-around">
        <a href="https://github.com/EwanStubblefield-Allen" class="banner bg-nurse m-2 elevation-5" target="_blank">
          <i class="mdi mdi-github fs-3 text-turquoise"></i>
        </a>
        <a href="https://www.linkedin.com/in/ewan-stubblefield-allen/" target="_blank" class="banner bg-nurse m-2 elevation-5">
          <i class="mdi mdi-linkedin fs-3 text-turquoise"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import emailJS from '@emailjs/browser'
import Pop from '../utils/Pop.js'

export default {
  setup() {
    const editable = ref({})

    return {
      editable,

      sendEmail() {
        emailJS.send('service_zr4j517', 'template_fedigze', editable.value, 'tUTZA6v53e0QSaO0p')
          .then((result) => {
            Pop.success(result.text, '[EMAIL SENT!!]')
          }, (error) => {
            Pop.error(error.text, '[EMAIL FAILED TO SEND!!]')
          })
        editable.value = {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  button {
    box-shadow: 0px 3px 5px white;
  }

  button:hover {
    transform: scale(1.01);
  }

  #contact {
    scroll-margin-top: 64px;
  }
</style>