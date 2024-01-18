<template>
    <v-app-bar
      absolute
      color="#43a047"
      dark
      shrink-on-scroll
      prominent
      scroll-target="#scrolling-techniques-5"
      scroll-threshold="500"
    >
      <v-app-bar-title>
        <router-link to="/">Book Management App</router-link> 
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn>
        Sign In
      </v-btn>

      <v-btn>
        Sign Up
      </v-btn>

    </v-app-bar>
</template>