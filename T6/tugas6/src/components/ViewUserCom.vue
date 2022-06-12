<template>
<div class="container mt-5" style="max-width: 35rem;">
            <h4>Lihat Pengguna</h4>
   <b-card class="container mt-4" style="max-width: 35rem;">
        <div class="container">
            <b-row>
                <b-col cols="3">Name :</b-col>
                <b-col>{{form.name}}</b-col>
            </b-row>

            <b-row >
                <b-col cols="3">Email</b-col>
                <b-col>{{form.email}}</b-col>
            </b-row>

            <b-row>
                <b-col cols="3">Gender</b-col>
                <b-col >{{form.gender}}</b-col>
            </b-row>

            <b-row >
                <b-col cols="3">Status</b-col>
                <b-col>{{form.status}}</b-col>
            </b-row>
        </div>
    </b-card>
    <CreatePostCom/>
</div>
</template>

<script>
import CreatePostCom from './CreatePostCom.vue'
import axios from 'axios'
    export default {
        components:{
            CreatePostCom
        },
        data() {
            return {
                form: {
                email: '',
                name: '',
                gender: null,
                status: null,
                },
                genders: [{ text: 'Select One', value: null }, 'male', 'female'],
                show: true,
                statuss: [{ text: 'Select One', value: null }, 'active', 'inactive'],
                show: true,
            }
        },
        mounted(){
            this.onLoad()
        },
        methods: {
            async onLoad(){
                const data = await axios.get('https://gorest.co.in/public/v2/users/'+ this.$route.params.id)
                console.log(data);
                const result = await(await data).data;
                this.form = result;
                // this.form.name = result.name
                // this.form.gender = result.gender
                // this.form.status = result.status
            },
        }
    }
    </script>