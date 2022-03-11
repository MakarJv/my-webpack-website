<template>
  <div class="footer">
    <div class="footer-navigations">
      <ul class="right">
        <li><a href="#" class="text-lighten-4"><i class="material-icons">help</i></a></li>
        <li><a href="#" class="text-lighten-4"><i class="material-icons">mail</i></a></li>
        <li><a href="/" class="text-lighten-4" @click.prevent="logout"><i class="material-icons">exit_to_app</i></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push('/?message=logout')
    }
  }
}
</script>
