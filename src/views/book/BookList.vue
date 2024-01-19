<template>
  <v-container>
    <v-card flat>
      <v-card-title class="d-flex align-center pe-2">
        <v-icon icon="mdi-file"></v-icon> &nbsp;
        Find a Book

        <v-spacer></v-spacer>

        <v-text-field v-model="search" prepend-inner-icon="mdi-magnify" density="compact" label="Search" single-line flat
          hide-details variant="solo-filled"></v-text-field>
        <v-btn class="mx-2" rounded="lg">New Book</v-btn>
      </v-card-title>

      <v-divider></v-divider>
      <v-data-table v-model:search="search" :headers="headers" :items="books">
        <template v-slot:[`header.actions`]>
          <div class="text-end">Actions</div>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <div class="text-end min-200">
            <v-btn size="small" class="ma-1" color="green" @click="viewItem(item)" icon="mdi-eye"></v-btn>
            <v-btn size="small" class="ma-1" color="indigo" @click="editItem(item)" icon="mdi-pencil"></v-btn>
            <v-btn size="small" class="ma-1" color="red" @click="deleteItem(item)" icon="mdi-delete"></v-btn>
          </div>
        </template>

        <template v-slot:[`item.image`]="{ item }">
          <v-card class="my-2 min-100" elevation="2" rounded>
            <v-img :src="`${item.image}`" height="64" cover></v-img>
          </v-card>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>
<script>
import router from '@/router'
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      search: '',
      headers: [
        {
          title: 'Title',
          align: 'start',
          sortable: false,
          key: 'title',
        },
        { title: 'Image', sortable: false, key: 'image' },
        { title: 'Description', sortable: false, key: 'desc' },
        { title: 'Action', value: "actions", sortable: false },
      ],
      items: [
        {
          title: 'Nebula GTX 3080',
          image: '1.png',
          desc: 'This is a book my book, your book.',
        },
        {
          title: 'Nebula GTX 3080',
          image: '1.png',
          desc: 'This is a book my book, your book.',
        },
        {
          title: 'Nebula GTX 3080',
          image: '1.png',
          desc: 'This is a book my book, your book.',
        },
        {
          title: 'Nebula GTX 3080',
          image: '1.png',
          desc: 'This is a book my book, your book.',
        },
        {
          title: 'Nebula GTX 3080',
          image: '1.png',
          desc: 'This is a book my book, your book.',
        },
        {
          title: 'Nebula GTX 3080',
          image: '1.png',
          desc: 'This is a book my book, your book.ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
        },
      ],
    }
  },
  computed: mapState({
        books: state => state.books.items,
  }),
  methods: {
    ...mapActions('books', ['addBook', 'deleteBook', 'updateBook', 'getBook']),
    viewItem(item) {
      // Implement view item functionality here
      router.push(`/books/${item.slug}`)
    },
    editItem(item) {
      // Implement edit item functionality here
      console.log(item)
    },
    deleteItem(item) {
      // Implement delete item functionality here
      this.deleteBook(item.slug)
    },
  },
  created() {
    this.$store.dispatch('books/getBooks')
  }
}
</script>
<style>
.v-slot--item-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.min-100 {
  min-width: 100px;
}

.min-200 {
  min-width: 200px;
}
</style>
