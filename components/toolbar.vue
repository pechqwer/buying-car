
<template>
  <v-card color="grey lighten-4" flat tile>
    <v-toolbar dense height="100">
      <v-icon dark>
        mdi-gavel
      </v-icon>
      <v-toolbar-title>&nbsp;&nbsp;Buying Car&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</v-toolbar-title>
      <v-btn @click="clearData" text>
        หน้าแรก
      </v-btn>

      <v-btn to="/new-card" text>
        รถมาใหม่
      </v-btn>

      <v-btn to="/promotion" text>
        จัดโปรโมชั่น
      </v-btn>

      <v-btn to="/sell-car" text>
        ลงขายรถ
      </v-btn>
      <v-spacer />

      <v-col cols="12" sm="2">
        <v-text-field v-model="message1" label="" clearable />
      </v-col>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn v-if="!userLogin.status" to="/register" text>
        ลงทะเบียน
      </v-btn>

      <v-btn v-if="!userLogin.status" to="/login" text>
        เข้าสู่ระบบ
      </v-btn>

      <v-col v-if="userLogin.status" cols="3" sm="2">
        <p class="text-center">
          {{ userLogin.firstName }} {{ userLogin.pid }}
        </p>
      </v-col>

      <v-btn v-if="userLogin.status" to="/login" text>
        ออกจากระบบ
      </v-btn>
    </v-toolbar>
    <v-footer fixed app class="layout justify-center">
      <span>&copy; 2020</span>
    </v-footer>
  </v-card>
</template>

<script>
/* eslint-disable */
import { mapState, mapMutations } from 'vuex'

export default {
  data: () => ({
    login: false,
    message1: '',
    bars: [
      { class: "" },
      { class: "", dark: true },
      { class: "primary", dark: true },
      { class: "elevation-0" }
    ],
    elementSize: {
      header: {},
      navigation: {},
      tabs: {},
      content: {}
    },
    navigationWidth: 200,
    clipped: false,
    fixed: false,
    items: [
      {
        icon: "home",
        title: "Welcome",
        to: "/admin"
      },
      {
        icon: "rate_review",
        title: "Review",
        to: "/reviews"
      },
      {
        icon: "bubble_chart",
        title: "Contents",
        to: "/contents"
      },
      {
        icon: "bar_chart",
        title: "Graph",
        to: "/graph"
      },
      {
        icon: "close",
        title: "Logout",
        to: "/"
      }
    ],
    miniVariant: false,
    title: "Skyl2eport"
  }),
  computed: {
    ...mapState('userLogin', {
      userLogin: state => state.userLogin
    })
  },
  updated() {
    this.verifyUserTime()
  },
  methods: {
     ...mapMutations({
      setUserLogin: 'userLogin/setLogin',
    }),
    verifyUserTime() {
      // if (this.userLogin.username === '') this.$router.push('/login')
      // else {
      //   this.login = true
      // }
    },
    register() {
      console.log(this.$router)
    },
    clearData () {
      console.log(this.userLogin)
      this.setUserLogin({pid: '', username: '', firstName: '', lastName: '', status: false})
    }
  }
};
</script>
