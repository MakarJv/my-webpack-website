<template>
  <div class="home">
    <h1>HelloWorld</h1>
    <hr>

    <Loader v-if="loading"/>

    <CardHome v-else :records="items"/>

    <Paginate
      class="center"
      v-model="page"
      :page-count="pageCount"
      :click-handler="pageChangeHandler"
      :prev-text="'<'"
      :next-text="'>'"
      :container-class="'pagination'"
      :page-class="'waves-effect'"
    />

  </div>
</template>

<script>
import CardHome from '../components/CardHome'
import paginationMixin from "../mixins/pagination.mixin";

export default {
  name: 'home',
  mixins: [paginationMixin],
  data: () => ({
    records: [],
    loading: true
  }),
  async mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json)
      .then(data => this.records = data)
    this.records = await this.$store.dispatch('fetchCard')
    const categories = await this.$store.dispatch('fetchCard')

    this.setup(categories)

    this.loading = false
  },
  methods: {
    setup(categories) {
      this.setupPagination(this.records.map(record => {
        return {
          ...record,
          categoryName: categories.find(c => c.id === record.id).title
        }
      }))
    }
  },
  components: {
    CardHome
  }
}
</script>
