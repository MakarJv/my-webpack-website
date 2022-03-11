<template>
  <div class="app-main-layout">

    <NavBar/>

    <SideBar/>

    <main class="app-content">
      <div class="app-page">
        <router-view/>
      </div>
    </main>
  </div>
</template>
<script>
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'

export default {
  components: {
    SideBar, NavBar
  }
}
</script>
