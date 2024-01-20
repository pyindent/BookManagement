<template>
  <v-container>
    <div v-if="book">
      <div class="w-full d-flex">
        <div class="book-image mx-4">
          <v-img :src="`${book.image}`" height="auto" width="auto" cover></v-img>
        </div>
        <div class="mx-4">
          <div class="text-h4">
            {{ book.title }}
          </div>
          <div class="text-p mt-2">
            {{ book.desc }}
          </div>
        </div>
      </div>
      <div class="mt-2 mx-8 text-end">
        <v-btn class="mx-2" @click="editItem(book.slug)" color="indigo">Edit</v-btn>
        <v-btn class="mx-2" @click="deleteItem(book.slug)" color="red">Delete</v-btn>
      </div>
    </div>
    <div v-else>
      <div class="text-h4 mt-12 text-center">
        No Book Available
      </div>
    </div>
  </v-container>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: mapState({
    book: state => state.books.item
  }),
  methods: {
    ...mapActions('books', ['deleteBook', 'editBook']),
    deleteItem(slug) {
      this.deleteBook(slug).then(
        () => {
          this.$router.push('/books')
        }
      )
    },
    editItem(slug) {
      this.$router.push(`/books/${slug}/edit`)
    }
  },
  mounted() {
    const slug = this.$route.params.slug;
    this.$store.dispatch('books/getBook', slug);
  }
}
</script>
<style>
.book-image {
  max-width: 400px;
}
</style>