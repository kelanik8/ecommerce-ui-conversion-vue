<template>
  <vs-navbar
    v-model="activeItem"
    class="navbar"
    color="#2E893A"
    text-color="#FFF"
    active-text-color="#FFF"
  >
    <div slot="title">
      <vs-navbar-title>
        <img src="@/assets/logo.png" alt="Logo" style="height: 45px;" />
      </vs-navbar-title>
    </div>

    <vs-navbar-item index="0">
      <a href="#">Login</a>
    </vs-navbar-item>
    <vs-navbar-item index="1">
      <a href="#">Need help?</a>
    </vs-navbar-item>
  </vs-navbar>
</template>

<script>
export default {
  name: "AppNavbar",
  data: () => ({
    activeItem: 0,
  }),
};
</script>

<style scoped>
.navbar {
  padding: 15px;
}

.vs-navbar-after {
  display: none;
}
</style>
