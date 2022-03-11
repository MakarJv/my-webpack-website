<template>
  <div class="profile">
    <h2>Profile</h2>
    <hr>
    <div class="profile-info">
      <div class="profile-card">
        <i class="material-icons">account_circle</i>
        <a>{{ name }}</a>
      </div>
      <div class="profile-about">
        <ul>
          <li>
            <a>Name:</a>
            <p>{{ name }}</p>
            <i class="material-icons">create</i>
          </li>
          <li>
            <a>Birthday:</a>
            <p>15.15.2015</p>
            <i class="material-icons">create</i>
          </li>
          <li>
            <a>Email:</a>
            <p>{{ email }}</p>
            <i class="material-icons">create</i>
          </li>
          <li>
            <a>About me:</a>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur at cum distinctio dolore dolorum eaque exercitationem, fugiat iste iure iusto laudantium nihil nostrum perferendis porro saepe sit veritatis voluptas.</p>
            <i class="material-icons">create</i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    name() {
      return this.$store.getters.info.name
    },
    email() {
      return this.$store.getters.info.email
    }
  }
}
</script>
