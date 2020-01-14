<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="primary" dark>
          <v-toolbar-title>Login form</v-toolbar-title>
          <v-spacer />
        </v-toolbar>
        <br>
        <v-card-title primary-title>
          <v-layout wrap>
            <v-flex xs12 ml-5 mr-5>
              <v-text-field v-model="user" placeholder="joe@example.com" label="Username: " />
            </v-flex>
            <v-flex xs12 ml-5 mr-5>
              <v-text-field
                v-model="pass"
                type="password"
                placeholder="123456789"
                label="Password: "
              />
            </v-flex>
          </v-layout>
        </v-card-title>
        <p v-if="innerError == true" class="red--text text-center">
          ***username หรือ password ไม่ถูกต้อง***
        </p>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="accept" color="orange">
            Accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
/* eslint-disable */
import { mapState, mapMutations } from 'vuex'
import { withResolve} from '../plugins/withResolve'
// import { isEmpty } from 'lodash'

export default {
  data () {
    return {
      innerError: false,
      user: '1234577890123',
      pass: '1',
      error: false
    }
  },
  computed: {
    ...mapState('userLogin', {
      userLogin: state => state.userLogin
    })
  },
  methods: {
     ...mapMutations({
      setUserLogin: 'userLogin/setLogin',
    }),
    async accept () {
      this.innerError = false
      if (this.user === '' || this.pass === '') {
        alert('input username and password')
        return
      }
      const result = await withResolve('get', `http://localhost:8888/${this.user}`)
      if (result.status === 200) this.setUserLogin({pid: this.user, username: this.user, firstName: result.data.firstName, lastName: result.data.lastName, status: true})
      else {
        this.innerError = true
      }
    }
  }
}
</script>

<style>
.error {
  color: red;
}
</style>
