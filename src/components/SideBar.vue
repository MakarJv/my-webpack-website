<template>
  <div>
    <input type="checkbox" id="nav-toggle">
    <nav class="nav blue-grey darken-3 lighten-1">
      <label for="nav-toggle" class="nav-toggle"></label>

      <Date/>

      <a class="profile-icons">
        <i class="icons material-icons">account_circle</i>
      </a>
      <ul>
        <li>
          <router-link to="/" class="waves-effect waves-grey pointer">Home</router-link>
        </li>
        <li>
          <router-link to="/profile" class="waves-effect waves-grey pointer">Profile</router-link>
        </li>
        <li>
          <router-link to="/messages" class="waves-effect waves-grey pointer">Messages</router-link>
        </li>
        <li><a href="#" class="waves-effect waves-grey pointer">Setting</a></li>
      </ul>

      <FooterMenu/>

    </nav>
    <label for="nav-toggle" class="mask-content" onclick></label>
  </div>
</template>

<script>
import FooterMenu from './FooterMenu'
export default {
  components: {
    FooterMenu
  }
}
</script>
