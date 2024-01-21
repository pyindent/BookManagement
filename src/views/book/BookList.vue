<template>
  <v-container>
    <v-card flat class="mx-auto" max-width="1200">
      <v-card-title class="d-flex align-center pe-2">
        <v-icon icon="mdi-file"></v-icon> &nbsp;
        Find a Book

        <v-spacer></v-spacer>

        <v-text-field v-model="search" prepend-inner-icon="mdi-magnify" density="compact" label="Search" single-line flat
          hide-details variant="solo-filled"></v-text-field>

        <router-link to="/books/new">
          <v-btn class="mx-2" rounded="lg" color="green">
            <v-icon class="mr-1" size="18">mdi-plus</v-icon>
            New Book
          </v-btn>
        </router-link>

      </v-card-title>

      <v-divider></v-divider>
      <v-data-table-server v-model:items-per-page="itemsPerPage" :headers="headers" :items-length="total" :items="books"
        :loading="loading" :search="search" item-value="name" @update:options="onPageChange">
        <template v-slot:[`header.actions`]>
          <div class="text-end">Actions</div>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <div class="text-end min-200">
            <IconBtn color="green" tooltip="View Book" icon="mdi-eye" :action="() => viewItem(item)"></IconBtn>
            <IconBtn color="indigo" tooltip="Edit Book" icon="mdi-pencil" :action="() => editItem(item)"></IconBtn>
            <IconBtn color="red" tooltip="Delete Book" icon="mdi-delete" :action="() => deleteItem(item)"></IconBtn>
          </div>
        </template>

        <template v-slot:[`item.image`]="{ item }">
          <v-card class="my-2 min-100" elevation="2" rounded>
            <v-img :src="`${item.image}`" height="64" cover></v-img>
          </v-card>
        </template>
      </v-data-table-server>
    </v-card>
  </v-container>
</template>
<script>
import router from '@/router'
import { mapState, mapActions } from 'vuex'
import IconBtn from '@/components/Buttons/IconBtn'

export default {
  components: {
    IconBtn
  },
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
      itemsPerPage: 10,
      loading: true,
    }
  },
  computed: mapState({
    books: state => state.books.data.items,
    total: state => state.books.data.total
  }),
  methods: {
    ...mapActions('books', ['addBook', 'deleteBook', 'updateBook', 'getBooks']),
    viewItem(item) {
      router.push(`/books/${item.slug}`)
    },
    editItem(item) {
      router.push(`/books/${item.slug}/edit`)
    },
    deleteItem(item) {
      this.deleteBook(item.slug)
    },
    onPageChange({ search, page, itemsPerPage }) {
      this.getBooks({ search: search, page: page, page_size: itemsPerPage }).then(() => {
        this.loading = false
      });
    },
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
