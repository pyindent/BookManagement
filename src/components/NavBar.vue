<template>
  <v-app-bar absolute color="#43a047" dark shrink-on-scroll prominent scroll-target="#scrolling-techniques-5"
    scroll-threshold="500">
    <v-app-bar-title class="text-h5">
      Book Management App
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <router-link v-if="!isAuth" to="/signin">
      <v-btn>
        Sign In
      </v-btn>
    </router-link>

    <router-link v-if="!isAuth" to="/signup">
      <v-btn>
        Sign Up
      </v-btn>
    </router-link>
    <v-btn v-if="isAuth" @click="handleLogout">
      Logout
    </v-btn>
  </v-app-bar>
</template>


<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('user', ['isAuth']),
  },
  methods: {
    ...mapActions('user', ['logout']),
    handleLogout() {
      this.logout()
    },
  },
}
</script>