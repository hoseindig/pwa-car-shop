<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item, i) in carouselitems"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      carouselitems: [
        {
          src: "https://c.ndtvimg.com/2020-09/j3tpm3a_volkswagen-id4_625x300_23_September_20.jpg",
        },
        {
          src: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/98_-_fastest_accelerating_road_cars_-_ferrari_f8_tributo.jpg?itok=cK2YYgq2",
        },
        {
          src: "https://cars.usnews.com/images/article/202002/128389/1_title_2020_kia_optima.jpg",
        },
        {
          src: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        },
        {
          src: "https://images.unsplash.com/photo-1597404294360-feeeda04612e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        },
        {
          src: "https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg",
        },
        {
          src: "https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500g",
        },
        {
          src: "https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/lamborghini_660_140220101539.jpg",
        },
      ],
    };
  },
};
</script>