<template>
  <section class="row px-5 py-4">
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
          <textarea v-model="editable.message" id="floatingMessage" class="form-control" type="text" placeholder="Message..." style="height: 10em"> required></textarea>
          <label for="floatingMessage">Message</label>
        </div>
        <button class="btn btn-light" type="submit">Send</button>
      </form>
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
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>