<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="primary" dark>
          <v-toolbar-title>Register form</v-toolbar-title>
          <v-spacer />
        </v-toolbar>
        <br>
        <v-card-title primary-title>
          <v-layout wrap>
            <v-flex xs5 ml-5 mr-5>
              <v-text-field v-model="username" label="Username: " />
            </v-flex>
            <v-flex xs5 ml-5 mr-5>
              <v-text-field v-model="codeReset" label="Code-Reset" />
            </v-flex>
            <v-flex xs12 ml-5 mr-5>
              <v-text-field
                v-model="password"
                type="password"
                placeholder=""
                label="Password"
              />
            </v-flex>
            <v-flex xs12 ml-5 mr-5>
              <v-text-field
                v-model="confirmPassword"
                type="password"
                placeholder=""
                label="Confirm Password"
              />
            </v-flex>
            <v-flex xs12 ml-5 mr-5>
              <v-text-field
                v-model="email"
                label="E-mail"
              />
            </v-flex>
            <v-flex xs12 ml-5 mr-5>
              <v-text-field
                v-model="firstName"
                label="FirstName"
              />
            </v-flex>
            <v-flex xs12 ml-5 mr-5>
              <v-text-field
                v-model="lastName"
                label="LastName"
              />
            </v-flex>
          </v-layout>
        </v-card-title>
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
import login from "@/components/login";

export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      firstName: '',
      lastName: '',
      codeReset: ''
    }
  },
  components: {
    login
  },
  methods: {
    accept() {

    }
  }
};
</script>