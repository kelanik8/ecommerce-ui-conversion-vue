<template>
  <div>
    <app-navbar />
    <div class="main">
      <div class="bg-overlay my-8"></div>
      <app-page-hero />
      <div class="bg-overlay my-8"></div>
      <vs-row vs-type="flex" vs-justify="space-between">
        <app-sidebar />
        <app-main-view />
      </vs-row>
    </div>
  </div>
</template>

<script>
import AppNavbar from "./components/Navbar";
import AppPageHero from "./components/PageHero";
import AppSidebar from "./components/Sidebar";
import AppMainView from "./components/Main";

export default {
  name: "App",
  components: {
    AppNavbar,
    AppPageHero,
    AppSidebar,
    AppMainView
  },
  data: () => ({}),
  methods: {}
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap");

*,
body,
html {
  font-family: "Raleway", sans-serif;
}
.my-8 {
  margin: 2em 0 2em;
}
ul {
  list-style-type: none;
}
.text-muted {
  color: gainsboro;
}
.category .vs-card--header {
  padding: 20px;
  color: #bfbfbf;
  box-shadow: none;
}
.category .vs-list--header {
  box-shadow: none;
  /* padding: 10px; */
}
.category .vs-list--item {
  border: none;
  padding: 10px;
}
.main {
  margin: 0 5% 0 5%;
}
.products-categories-list .vs-collapse-item--header,
.products-categories-list .con-content--item {
  padding-left: 20px;
  padding-right: 20px;
}
.searchbar.vs-con-input-label {
  width: 100%;
}
.vs-input--icon {
  top: 4px !important;
}
.categories-list .vs-list--header {
  box-shadow: none;
}
.con-vs-chip {
  min-height: 15px !important;
}
.vs-chip--text {
  margin-left: 5px !important;
  margin-right: 5px !important;
}
.vs-checkbox--check {
  height: auto !important;
}
.product-card-view {
  cursor: pointer;
}
.vs-card--footer {
  /* display: none !important; */
  padding: 0 !important;
}
.product-card-view:hover {
  transform: scale(1.05);
  transition: transform 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
}
.product-card-view:hover .vs-card--footer {
  display: block !important;
  width: 100%;
}
.add-to-cart-btn {
  width: 100%;
  border-radius: 0;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
}
</style>
