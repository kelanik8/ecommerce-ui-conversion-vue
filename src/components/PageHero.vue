<template>
  <vs-row vs-type="flex" vs-justify="center">
    <vs-col
      vs-type="flex"
      vs-justify="center"
      vs-align="center"
      vs-lg="12"
      vs-sm="12"
      vs-xs="12"
    >
      <hooper>
        <slide
          v-for="(i, index) in slides"
          :key="index"
          :style="'background: url(' + i + ')'"
        >
        </slide>

        <hooper-navigation slot="hooper-addons"></hooper-navigation>
      </hooper>
    </vs-col>
  </vs-row>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "AppPageHero",
  components: {
    Hooper,
    Slide,
    HooperNavigation
  },
  data: () => ({
    categories: [
      "Health & Beauty",
      "Home & Office",
      "Phones & Tablets",
      "Computing",
      "Electornics",
      "Fashion"
    ],
    slides: [
      "./images/slides/slide1.jpg",
      "./images/slides/slide2.jpg",
      "./images/slides/slide3.jpg"
    ]
  })
};
</script>
<style scoped>
.hooper {
  height: 100% !important;
  min-height: 400px !important;
}
.hooper-slide {
  background-color: #62caaa;
  padding: 20px;
  color: #fff;
  /* border: 2px solid #62caaa; */
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
}
</style>
