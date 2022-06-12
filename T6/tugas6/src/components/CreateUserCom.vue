<template>
  <div class="container">
    <div class="my-4">
      <h4>Tambah Pengguna</h4>
    </div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="border p-4">

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required class="mb-3"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required class="mb-3"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Gender:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.gender"
          :options="genders"
          required
          class="form-control mb-3"
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" label="Status:" label-for="input-4">
        <b-form-select
          id="input-4"
          v-model="form.status"
          :options="statuss"
          required
          class="form-control mb-3"
        ></b-form-select>
      </b-form-group >

      <div class="text-center">
        <b-button b-col type="submit" variant="primary" class="mx-3">Submit</b-button>
        <b-button b-col type="reset" variant="danger" class="mx-3">Reset</b-button>
        <router-link to="/dashboard" class="navbar-brand">
          <b-button variant="success" class="mx-3">Kembali</b-button>
        </router-link>
      </div>
    
    </b-form>
  </div>
</template>

<script>
import axios from 'axios'
  export default {

    data() {
      return {
        form: {
          email: '',
          name: '',
          gender: null,
          status: null,
        },
        // genders: [{ text: 'Select One', value: null }, 
        // {text : 'male', value:'male'}, 
        // {text : 'female', value:'female'}],
        // show: true,

        // statuss: [{ text: 'Select One', value: null }, 
        // {text : 'active', value:'active'}, 
        // {text : 'inactive', value:'inactive'}],
        // show: true,
        genders: [{ text: 'Select One', value: null }, 'male', 'female'],
        show: true,
        statuss: [{ text: 'Select One', value: null }, 'active', 'inactive'],
        show: true,
      }
    },
    methods: {
    async onSubmit(event) {
      event.preventDefault()
        try {
          const data = await axios.post('https://gorest.co.in/public/v2/users', this.form, {
          headers: {
            'Authorization': 'Bearer ' + '9690fb8196780608aa119e9cadbf3901b8d6679995f2667a259a1f07fb7617cd'
          }
          })
          alert("data berhasil di buat");
          this.onReset(event)
        } catch (error) {
          alert("data gagal di buat");
        }
      },
      
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.gender = null
        this.form.status = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
}
</script>