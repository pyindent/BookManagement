<template>
  <v-container>
    <div class="text-h3">
      {{ book?.title }}
    </div>
    <v-btn @click="editItem(book.slug)" color="indigo">Edit</v-btn>
    <v-btn @click="deleteItem(book.slug)" color="red">Delete</v-btn>
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