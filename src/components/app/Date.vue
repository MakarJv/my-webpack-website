<template>
  <div class="date">
    <span>{{date | date('datetime')}}</span>
  </div>
</template>

<script>
export default {
  data: () => ({
    date: new Date()
  }),
  mounted() {
    setInterval(() => {
      this.date = new Date()
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy()
    }
  }
}
</script>
