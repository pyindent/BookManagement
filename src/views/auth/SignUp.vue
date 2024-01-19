<template>
  <v-container>
    <div class="w-full d-flex py-2">
       <div class="text-h3 mx-auto pb-4">Sign Up</div>
    </div>
    <v-card class="mx-auto px-6 py-8" max-width="400">
      <v-form v-model="form" @submit.prevent="onSubmit">
        <v-text-field v-model="name" :readonly="loading" :rules="[required]" class="mb-2" 
          label="Username"></v-text-field>

        <v-text-field v-model="first_name" :readonly="loading" :rules="[required]" class="mb-2" 
          label="First Name"></v-text-field>

        <v-text-field v-model="last_name" :readonly="loading" :rules="[required]" class="mb-2" 
          label="Last Name"></v-text-field>

        <v-text-field v-model="email" :readonly="loading" :rules="[required]" class="mb-2" 
          label="Email"></v-text-field>
        
        <v-text-field v-model="password" :readonly="loading" :rules="[required]" type="password" class="mb-2" 
          label="Password"></v-text-field>

        <v-text-field v-model="password2" :readonly="loading" :rules="[required]" type="password" label="Re Password"
          placeholder="Enter your password again!"></v-text-field>

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