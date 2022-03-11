<template>
  <div class="row">
    <div v-for="(record) of records" :key="record.id" class="col s12 m4">
      <div class="card blue-grey darken-3 lighten-1">
        <div class="card-content white-text">
          <span class="card-title">{{ record.categoryName }}</span>
          <p>{{ record.body }}</p>
          <span
            class="white-text grey badge"
          >{{ record.completed }}</span>
        </div>
        <div class="card-action">
          <router-link to="/">This is a link</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-home',
  props: {
    records: {
      required: true,
      type: Array
    }
  }
}
</script>
