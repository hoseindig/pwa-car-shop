
<template>
  <v-app>
    <v-container>
      <div>
        <!-- <v-card class="mb-4">
          <v-card-text>
            <v-select
              v-model="steps"
              :items="[2, 3, 4, 5, 6]"
              label="# of steps"
            ></v-select>
          </v-card-text>
        </v-card> -->
        <v-stepper v-model="e1" v-if="items.length > 0">
          <v-stepper-header>
            <template v-for="n in allSteps">
              <v-stepper-step
                :key="`${n.id}-step`"
                :complete="e1 > n.id"
                :step="n.id"
                editable
              >
                {{ n.title }}
              </v-stepper-step>

              <v-divider v-if="n !== steps" :key="n.id"></v-divider>
            </template>
          </v-stepper-header>

          <!-- <v-stepper-items>
            <v-stepper-content
              v-for="n in steps"
              :key="`${n}-content`"
              :step="n"
            >
              <v-card
                class="mb-12"
                color="grey lighten-1"
                height="200px"
              ></v-card>

              <v-btn color="primary" @click="nextStep(n)"> Continue </v-btn>

              <v-btn text> Cancel </v-btn>
            </v-stepper-content>
          </v-stepper-items> -->
        </v-stepper>
      </div>
      <!-- list shop -->
      <v-card class="mx-auto">
        <v-list two-line v-if="items.length > 0">
          <v-list-item-group
            v-model="selected"
            active-class="pink--text"
            multiple
          >
            <template v-for="(item, index) in items">
              <v-list-item :key="item.title">
                <template>
                  <v-list-item-avatar>
                    <v-img :src="item.avatar"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>

                    <v-list-item-subtitle
                      class="text--primary"
                      v-text="item.headline"
                    ></v-list-item-subtitle>

                    <v-list-item-subtitle
                      v-text="item.subtitle"
                    ></v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-list-item-action-text
                      ><b>{{ item.action | toCurrency }}</b>
                    </v-list-item-action-text>

                    <!-- {{ item.id }} -->
                    <v-icon color="grey lighten-1" @click="deleteOrder(item)">
                      delete
                    </v-icon>

                    <!-- <v-icon v-else color="yellow darken-3"> delete </v-icon> -->
                  </v-list-item-action>
                </template>
              </v-list-item>

              <v-divider
                v-if="index < items.length - 1"
                :key="index"
              ></v-divider>
            </template>
          </v-list-item-group>
        </v-list>
        <v-alert v-else color="purple" type="success"
          >shop card is empty</v-alert
        >
        <v-alert
          v-if="items.length > 0"
          color="purple"
          type="success"
          style="text-align: right"
        >
          total Card Price : {{ totalCardPrice | toCurrency }}
          <v-btn color="primary" @click="nextStep()"> Continue </v-btn>
        </v-alert>
      </v-card>

      <!-- dialog -->
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="290">
          <v-card>
            <v-card-title class="text-h5">
              Delete item in Order ?
            </v-card-title>
            <v-card-text>Are you sure to delete Item.</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="dialog = false">
                No
              </v-btn>
              <v-btn
                color="green darken-1"
                text
                @click="
                  dialog = false;
                  deleteItemfn();
                "
              >
                Yes
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
  </v-app>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    selected: null,
    selectedStep: 2,
    dialog: false,
    e1: 2,
    steps: 4,
    allSteps: [
      { id: 1, title: "select car" },
      { id: 2, title: "check info" },
      { id: 3, title: "pay price" },
      { id: 4, title: "get your car" },
    ],
    items: [],
    deleteItemSelected: null,
  }),
  computed: {
    ...mapGetters(["shopData", "userData"]),
    totalCardPrice: function () {
      let total = 0;
      this.shopData.shopList.forEach((element) => {
        total += element.carPrice;
      });
      return total;
    },
  },
  mounted() {
    this.shopData.shopList.map((ele) => {
      ele.avatar = ele.imgUrl;
      ele.subtitle = ele.carDescribe;
      ele.action = ele.carPrice;
    });

    this.items = this.shopData.shopList;
  },
  watch: {
    steps(val) {
      if (this.e1 > val) {
        this.e1 = val;
      }
    },
  },
  methods: {
    ...mapActions(["deleteItemFromCart"]),
    nextStep() {
        this.e1 ++
    //   if (n === this.steps) {
    //     this.e1 = 1;
    //   } else {
    //     this.e1 = n + 1;
    //   }
    },
    deleteOrder(car) {
      this.dialog = true;
      this.deleteItemSelected = car;
    },
    deleteItemfn() {
      debugger;
      if (this.deleteItemSelected.orderId) {
        this.deleteItemFromCart(this.deleteItemSelected);
        this.deleteItemSelected = null;
      }
    },
  },
};
</script>