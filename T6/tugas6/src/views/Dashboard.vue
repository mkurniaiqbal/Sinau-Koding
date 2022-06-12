<template>
<div class="container mt-2">
  <div class="d-flex justify-content-between mb-3">
    <h2>Daftar Pengguna</h2>
    <router-link to="/dashboard/create-user" class="navbar-brand">
      <button class="btn btn-primary btn-sm" type="submit">
        Buat Pengguna
      </button>
    </router-link>
  </div>
<table class="table border text-center">
  <thead class="table-primary">
    <tr>
      <th scope="col">No</th>
      <th scope="col">Nama</th>
      <th scope="col">Email</th>
      <th scope="col">Gender</th>
      <th scope="col">Status</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in items" v-bind:key="item.id">
      <th scope="row">{{index+1}}</th>
      <td>{{item.name}}</td>
      <td>{{item.email}}</td>
      <td>{{item.gender}}</td>
      <td>{{item.status}}</td>
      <td>
        <button type="button" class="btn btn-info btn-sm mx-3">View</button>
        <router-link :to="{name:'updateUserCom', params: {id:item.id}}" class="navbar-brand">
        <button type="button" class="btn btn-warning btn-sm">Update</button>
        </router-link>
        <button type="button" class="btn btn-danger btn-sm" @click="onDelete(item.id, item.name)">Delete</button>
      </td>
    </tr>
  </tbody>
</table>

<!-- <CreateUserCom/> -->
</div>
</template>

<script>
import axios from 'axios'
import NavbarCom from '../components/NavbarCom.vue'
import CreateUserCom from '../components/CreateUserCom.vue'
export default {
  components:{
    NavbarCom,
    CreateUserCom
  },

  data( ) {
    return {
      items: []
    }
    
  },
  mounted(){
    this.getData();
  },
  methods:{
    async getData() {
        const data = axios.get('https://gorest.co.in/public/v2/users')
        console.log(data);
        this.items = await(await data).data;
        console.log(this.items);
      },

    async onDelete(id, name) {
        try {
          const konfirmasi = confirm(`Are you sure delete user ${name}?`);
          if(konfirmasi){
            const data = await axios.delete(`https://gorest.co.in/public/v2/users/${id}`, {
              headers : {
                'Authorization': 'Bearer ' + '9690fb8196780608aa119e9cadbf3901b8d6679995f2667a259a1f07fb7617cd'
              }
            })
            console.log(data);
            alert("data hapus berhasil")
            this.getData();
          }
        } catch (error) {
          alert("data gagal di hapus")
        }
    }
}}
</script>
