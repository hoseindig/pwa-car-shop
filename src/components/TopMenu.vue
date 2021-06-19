<template>
  <v-app-bar color="deep-purple" dark class="fixed-bar">
    <v-app-bar-nav-icon @click="drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Cars shop</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-icon @click="$router.push('/')">home</v-icon>

    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn dark icon v-bind="attrs" v-on="on">
          <v-icon>perm_identity</v-icon>
        </v-btn>
      </template>

      <v-list disabled>
        <v-subheader>{{ userData.userFullName }}</v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in items2" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>

    <v-tooltip left>
      <template v-slot:activator="{ on, attrs }">
        <v-badge color="green" :content="shopData.totalShopItem" class="mr-5">
          <v-icon @click="$router.push('CardList')" v-bind="attrs" v-on="on"
            >shopping_cart</v-icon
          >
        </v-badge>
      </template>
      <span>totalPrice : {{ shopData.totalShopPrice | toCurrency }}</span>
    </v-tooltip>

    <v-icon @click="$router.push('Shop')" class="mr-2">list</v-icon>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";
// shopData.shopList
export default {
  computed: {
    ...mapGetters(["shopData", "userData"]),
  },
  data() {
    return {
      selectedItem: 1,
      selectedStep: 2,

      items2: [
        { text: "Card", icon: "shopping_basket" },
        { text: "Profile", icon: "mdi-account" },
        { text: "Exit", icon: "logout" },
      ],
      drawerItems: null,
    };
  },

  methods: {
    drawer() {
      this.$emit("drawer", true);
    },
  },
};
</script>
