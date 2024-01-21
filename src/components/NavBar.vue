<template>
  <v-app-bar absolute color="#43a047" dark shrink-on-scroll prominent scroll-target="#scrolling-techniques-5"
    scroll-threshold="500">
    <router-link to="/" class="mx-4" :style="{ textDecoration: 'none' }">
      <v-app-bar-title class="text-h5 text-white">
        Book Management App
      </v-app-bar-title>
    </router-link>

    <v-spacer></v-spacer>

    <router-link v-if="!isAuth" to="/signin">
      <v-btn class="text-white">
        Sign In
      </v-btn>
    </router-link>

    <router-link v-if="!isAuth" to="/signup">
      <v-btn class="text-white">
        Sign Up
      </v-btn>
    </router-link>
    
    <router-link v-if="isAuth" to="/books">
      <v-btn class="text-white">
        My Books
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