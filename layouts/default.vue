<template>
  <v-app dark>
    <toolbar />
    <v-content>
      <v-container>
        <navigation />
        <nuxt app />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex'
import toolbar from '@/components/toolbar'
import navigation from '@/components/navigation'

export default {
  components: {
    toolbar,
    navigation
    // login
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  computed: {
    ...mapState('userLogin', {
      userLogin: state => state.userLogin
    })
  },
  methods: {
    
  }
}
</script>
