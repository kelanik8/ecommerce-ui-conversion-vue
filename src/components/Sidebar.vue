<template>
  <vs-col vs-lg="3" vs-sm="3" vs-xs="12">
    <vs-collapse class="products-categories-list" type="border">
      <vs-collapse-item open>
        <div color="primary" slot="header">
          Product Type
        </div>
        <vs-input
          icon-after="true"
          label-placeholder="icon-after"
          icon="search"
          placeholder="Search"
          class="searchbar"
        />

        <vs-list class="categories-list">
          <vs-list-header
            v-for="(category, i) in categories"
            :key="i"
            color="dark"
            :title="category"
          ></vs-list-header>
        </vs-list>
      </vs-collapse-item>
      <vs-collapse-item open>
        <div slot="header">
          Brands
        </div>
        <vs-input
          icon-after="true"
          label-placeholder="icon-after"
          icon="search"
          placeholder="Search"
          class="searchbar"
        />
        <div
          v-for="(b, i) in brands"
          :key="i"
          style="margin-bottom: 10px;margin-top: 10px;"
        >
          <vs-row vs-type="flex" vs-justify="space-between">
            <vs-col vs-w="10" style="width: auto">
              <vs-checkbox v-model="selectedBrands" :vs-value="b.name">{{
                b.name
              }}</vs-checkbox>
            </vs-col>
            <vs-col vs-w="2">
              <vs-chip>
                {{ b.size }}
              </vs-chip>
            </vs-col>
          </vs-row>
        </div>
      </vs-collapse-item>
      <vs-collapse-item open>
        <div slot="header">
          Price Range
        </div>
        <div style="margin-top: 30px;">
          <vs-slider step="10" v-model="priceRange" color="primary" />
          <div class="center">
            <vs-input-number
              v-model="minPrice"
              :min="0"
              :max="100"
              label="min price:"
            />
            <vs-input-number
              v-model="maxPrice"
              :min="0"
              :max="100"
              label="max price:"
            />
          </div>
        </div>
      </vs-collapse-item>
      <vs-collapse-item open>
        <div slot="header">
          More Options
        </div>
        <div style="margin-top: 30px;">
          <div class="center">
            <ul>
              <li>
                <vs-radio
                  color="primary"
                  v-model="product_category"
                  vs-value="Service merchants"
                  style="margin-bottom: 10px;"
                  >Service merchants</vs-radio
                >
              </li>
              <li>
                <vs-radio
                  color="primary"
                  v-model="product_category"
                  vs-value="Product merchants"
                  >Product merchants</vs-radio
                >
              </li>
            </ul>
          </div>
        </div>
      </vs-collapse-item>
    </vs-collapse>
    <div style="width: 100%; text-align: center;">
      <vs-button
        color="primary"
        type="filled"
        style="margin-top: 20px;width: 100%;padding: 15px;"
        >Apply</vs-button
      >
    </div>
  </vs-col>
</template>

<script>
export default {
  name: "AppSidebar",
  data: () => ({
    priceRange: 50,
    selectedBrands: [],
    minPrice: 0,
    maxPrice: 100,
    product_category: "Service merchants",
    categories: [
      "Health & Beauty",
      "Home & Office",
      "Phones & Tablets",
      "Computing",
      "Electornics",
      "Fashion"
    ],
    brands: [
      {
        id: 1,
        name: "Garmspot",
        size: "120",
        value: true
      },
      {
        id: 2,
        name: "Apple",
        size: "85",
        value: true
      },
      {
        id: 3,
        name: "Camera",
        size: "50",
        value: true
      },
      {
        id: 4,
        name: "Beats Electronics",
        size: "43",
        value: true
      },
      {
        id: 5,
        name: "Cool Bags",
        size: "30",
        value: true
      }
    ]
  })
};
</script>
