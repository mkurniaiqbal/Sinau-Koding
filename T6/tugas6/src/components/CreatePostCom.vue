<template>
  <div class="d-flex justify-content-between mt-3 " style="max-width: 35rem;">
    <h4 class="my-auto">Daftar Pengguna</h4>
    <router-link to="/dashboard/create-user" class="navbar-brand">
      <button class="btn btn-primary btn-sm" type="submit">
        Buat Pengguna
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
    name: 'CreatePostCom',
}
</script>

<style>

</style>