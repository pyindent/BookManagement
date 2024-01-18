<template>
  <v-container>
    <div class="w-full d-flex py-2">
      <img alt="Vue logo" width="100" class="mx-auto" src="../assets/logo.png">
    </div>
    <div class="w-full d-flex py-2">
      <!-- <img alt="Vue logo" width="100" class="mx-auto" src="../assets/logo.png">
       -->
       <div class="text-h3 mx-auto pb-4">Sign In</div>
    </div>
    <v-card class="mx-auto px-6 py-8" max-width="400">
      <v-form v-model="form" @submit.prevent="onSubmit">
        <v-text-field v-model="name" :readonly="loading" :rules="[required]" class="mb-2" clearable
          label="Username"></v-text-field>

        <v-text-field v-model="password" :readonly="loading" :rules="[required]" clearable label="Password"
          placeholder="Enter your password"></v-text-field>

        <br>
        <v-btn :disabled="!form" :loading="loading" block color="success" size="large" type="submit" variant="elevated">
          Sign In
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>
  
<script>
export default {
  data: () => ({
    form: false,
    email: null,
    password: null,
    loading: false,
  }),

  methods: {
    onSubmit() {
      if (!this.form) return

      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
    required(v) {
      return !!v || 'Field is required'
    },
  },
}
</script>