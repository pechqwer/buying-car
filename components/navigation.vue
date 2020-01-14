<template>
  <v-navigation-drawer
    v-model="drawer"
    :color="color"
    :mini-variant="miniVariant"
    :src="bg"
    @click="!miniVariant"
    expand-on-hover
    left
    absolute
    dark
  >
    <v-list dense nav class="py-0">
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/men/81.jpg">
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Application</v-list-item-title>
          <v-list-item-subtitle>Subtext</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      brandCar: {
        name: "",
        year: "",
        brand: ""
      },
      drawer: true,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" }
      ],
      color: "primary",
      colors: ["primary", "blue", "success", "red", "teal"],
      right: false,
      miniVariant: false,
      expandOnHover: false,
      background: false
    };
  },
  computed: {
    bg() {
      return (this.background =
        "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg");
    }
  },
  methods: {
    accept() {
      //
    }
  }
};
</script>
