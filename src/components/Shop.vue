<template>
  <v-container>
    <v-layout row>
      <v-flex md3 v-for="car in carsList" :key="car.id">
        <v-card :loading="loading" class="mx-auto my-12 box-car-item">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img height="250" :src="car.imgUrl"></v-img>

          <v-card-title>{{ car.title }}</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="car.rate"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">{{ car.rate }} (413)</div>
            </v-row>

            <div class="my-4 text-subtitle-1">$ • {{ car.carPrice | toCurrency }}</div>

            <div>
              {{ car.carDescribe }}
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>{{ car.timeOrder }}</v-card-title>

          <v-card-text>
            <v-chip-group
              v-model="selection"
              active-class="deep-purple accent-4 white--text"
              column
            >
              <v-chip v-for="color in car.colors" :key="color">{{
                color
              }}</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="reserve(car)">
              Reserve
            </v-btn>
          </v-card-actions>
        </v-card></v-flex
      >
    </v-layout>
  </v-container>
</template>


<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    loading: false,
    selection: "blue",
    carsList: [
      {
        id: "0",
        title: "McLaren Sports Series Cadence ",
        carDescribe:
          " Small plates, salads & sandwiches - an intimate setting with 12              indoor seats plus patio seating.",
        carClass: "Soper Sport",
        carPrice: 123000,
        timeOrder: "3 week",
        rate: 1.5,

        colors: ["yellow", "blue", "red"],
        imgUrl:
          "https://i.pinimg.com/originals/c9/eb/1c/c9eb1cebc2bb9d37d1e1d499bf2c9478.jpg",
      },
      {
        id: "1",
        title: "Lamborghini Egoista on Behance",
        carDescribe:
          " Small plates, salads & sandwiches - an intimate setting with 12              indoor seats plus patio seating.",
        carClass: "Soper Sport",
        carPrice: 222000,
        timeOrder: "3 week",
        rate: 4.5,

        colors: ["yellow", "blue", "red"],
        imgUrl:
          "https://i.pinimg.com/originals/9b/d1/20/9bd120b1021a13fbd8f5bb2ac1ba9d66.jpg",
      },
      {
        id: "2",
        title: "Pagani Huayra",
        carDescribe:
          " Small plates, salads & sandwiches - an intimate setting with 12              indoor seats plus patio seating.",
        carClass: "Soper Sport",
        carPrice: 323000,
        timeOrder: "3 week",
        rate: 2.5,

        colors: ["yellow", "blue", "red"],
        imgUrl:
          "https://img.izismile.com/img/img7/20140515/640/the_slickest_superfast_cars_you_can_buy_640_03.jpg",
      },
      {
        id: "3",
        title: "Hennessey Venom GT",
        carDescribe:
          " Small plates, salads & sandwiches - an intimate setting with 12              indoor seats plus patio seating.",
        carClass: "Soper Sport",
        carPrice: 200000,
        timeOrder: "3 week",
        rate: 2.5,

        colors: ["yellow", "blue", "red"],
        imgUrl:
          "https://img.izismile.com/img/img7/20140515/640/the_slickest_superfast_cars_you_can_buy_640_12.jpg",
      },
    ],
  }),

  methods: {
    ...mapActions(["addItemToCart"]),
    reserve(car) {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.addItemToCart(car);
      }, 1000);
    },
  },
};
</script>

<style scoped>
.box-car-item {
  transform: scale(0.95);
  transition: 0.2s;
  cursor: pointer;
}
.box-car-item:hover {
  transform: scale(0.98);
}
</style>
