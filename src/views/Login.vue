<template>
  <div>
    <div class="container">
      <form @submit.prevent="submitHandler">
        <h2>Вход</h2>
        <div class="inputBox">
          <span>Email</span>
          <div class="box">
            <div class="icon"><i class="material-icons">email</i></div>
            <small
              class="helper-text invalid"
              v-if="$v.email.$dirty && !$v.email.required"
            >Введите Email</small>
            <small
              class="helper-text invalid"
              v-else-if="$v.email.$dirty && !$v.email.email"
            >Введите корретный Email</small>
            <input
              id="email"
              type="text"
              placeholder="Email"
              v-model.trim="email"
              :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
            >
          </div>
        </div>
        <div class="inputBox">
          <span>Пароль</span>
          <div class="box">
            <div class="icon"><i class="material-icons">lock</i></div>
            <small
              class="helper-text invalid"
              v-if="$v.password.$dirty && !$v.password.required"
            >
              Введите пароль
            </small>
            <small
              class="helper-text invalid"
              v-else-if="$v.password.$dirty && !$v.password.minLength"
            >
              Пароль должен быть {{ $v.password.$params.minLength.min }} символов. Сейчас он {{ password.length }}
            </small>
            <input
              id="password"
              type="password"
              placeholder="Пароль"
              v-model.trim="password"
              :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
            >
          </div>
        </div>
        <div class="inputBox">
          <div class="box">
            <input type="submit" value="Войти">
          </div>
        </div>
        <p>Еще нет аккаунта?
          <router-link to="/register">Зарегестрироваться!</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import {email, minLength, required} from 'vuelidate/lib/validators'

export default {
  name: 'login',
  data: () => ({
    email: '',
    password: ''
  }),
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(6)}
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password
      }

      try {
        await this.$store.dispatch('login', formData)
        this.$router.push('/')
      } catch (e) {
        console.log()
      }
    }
  }
}
</script>

