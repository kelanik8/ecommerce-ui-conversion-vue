<template>
  <vs-col vs-lg="8" vs-sm="8" vs-xs="12">
    <vs-row>
      <vs-col vs-lg="12" vs-sm="12" vs-xs="12">
        <vs-row vs-justify="space-between">
          <vs-col vs-lg="2" vs-sm="2" vs-xs="2">
            <span class="mr-md-auto">{{ products.length }} Items found </span>
          </vs-col>
          <vs-col vs-lg="3" vs-sm="3" vs-xs="3">
            <vs-select class="select" label="Sort by" v-model="sortByValue">
              <vs-select-item
                :key="index"
                :value="item"
                :text="item"
                v-for="(item, index) in sortData"
              />
            </vs-select>
          </vs-col>
        </vs-row>
        <vs-divider />
      </vs-col>
      <vs-col
        vs-lg="4"
        vs-sm="4"
        vs-xs="12"
        v-for="(i, index) in products"
        :key="index"
        style="padding: 10px;"
      >
        <vs-card class="card-d product-card-view">
          <div slot="media">
            <img :src="i.image" alt="Product Image" />
          </div>
          <div style="margin-bottom: 0;">
            <h3 class="text-center">
              {{ i.title }}
            </h3>
          </div>
          <div slot="footer">
            <vs-button
              @click="openSuccessfulDialog(i.title)"
              class="add-to-cart-btn"
              color="primary"
              type="filled"
              ><vs-icon
                color="white"
                icon="shopping_cart"
                size="small"
              ></vs-icon
            ></vs-button>
          </div>
        </vs-card>
      </vs-col>
      <vs-col vs-lg="12" vs-sm="12" vs-xs="12" style="padding: 10px;">
        <div>
          <vs-pagination
            :total="20"
            v-model="currentPagination"
            prev-icon="arrow_back"
            next-icon="arrow_forward"
          ></vs-pagination>
          <br />
        </div>
      </vs-col>
    </vs-row>
  </vs-col>
</template>

<script>
export default {
  name: "AppMainView",
  data: () => ({
    activeItem: 0,
    currentPagination: 10,
    select2: [],
    value1: 60,
    categories: [
      "Health & Beauty",
      "Home & Office",
      "Phones & Tablets",
      "Computing",
      "Electornics",
      "Fashion"
    ],
    sortData: ["Latest items", "Trending", "Most Popular", "Cheapest"],
    sortByValue: "Latest items",
    products: [
      {
        id: 1,
        image: "./images/commerce-images/1.jpg",
        title: "Polo shirt"
      },
      {
        id: 2,
        image: "./images/commerce-images/2.jpg",
        title: "Trapper Parka Jacket"
      },
      {
        id: 3,
        image: "./images/commerce-images/3.jpg",
        title: "Bermuda shorts"
      },
      {
        id: 4,
        image: "./images/commerce-images/4.jpg",
        title: "Classic Backpack"
      },
      {
        id: 5,
        image: "./images/commerce-images/5.jpg",
        title: 'Apple Leather Sleeve for 16"'
      },
      {
        id: 6,
        image: "./images/commerce-images/6.jpg",
        title: "Arm Chair"
      },
      {
        id: 7,
        image: "./images/commerce-images/7.jpg",
        title: "Apple Watch Series 4"
      },
      {
        id: 8,
        image: "./images/commerce-images/8.jpg",
        title: "Action Camera"
      },
      {
        id: 9,
        image: "./images/commerce-images/9.jpg",
        title: "Headphones"
      }
    ]
  }),
  methods: {
    openSuccessfulDialog(title) {
      this.$vs.dialog({
        color: "primary",
        title: `Product - ${title}`,
        text: `${title} has been added to cart`,
        accept: this.acceptAlert
      });
    }
  }
};
</script>
