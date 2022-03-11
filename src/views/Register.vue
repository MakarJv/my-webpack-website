<template>
  <div>
    <div class="container">
      <form @submit.prevent="submitHandler">
        <h2>Регистрация</h2>
        <div class="inputBox">
          <span>Email</span>
          <div class="box">
            <div class="icon"><i class="material-icons">email</i></div>
            <small
              class="helper-text invalid"
              v-if="$v.email.$dirty && !$v.email.required"
            >Поле Email не должно быть пустым</small>
            <small
              class="helper-text invalid"
              v-else-if="$v.email.$dirty && !$v.email.email"
            >Введите корретный Email</small>
            <input
              type="text"
              placeholder="Email"
              v-model.trim="email"
              :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
            >
          </div>
        </div>
        <div class="inputBox">
          <span>Name</span>
          <div class="box">
            <div class="icon"><i class="material-icons">account_circle</i></div>
            <small
              class="helper-text invalid"
              v-if="$v.name.$dirty && !$v.name.required"
            >
              Введите ваше имя
            </small>
            <small
              class="helper-text invalid"
              v-if="$v.name.$dirty && !$v.name.minLength"
            >
              Имя должено быть {{ $v.name.$params.minLength.min }} символа.
            </small>
            <input
              type="text"
              placeholder="Имя"
              v-model.trim="name"
              :class="{invalid: $v.name.$dirty && !$v.name.required}"
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
              type="password"
              placeholder="Пароль"
              v-model.trim="password"
              :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
            >
          </div>
        </div>
        <label>
          <input type="checkbox" v-model="agree">
          <span>С правилами согласен</span>
        </label>
        <div class="inputBox">
          <div class="box">
            <input type="submit" value="Зарегистрироваться">
          </div>
        </div>
        <p>Уже есть аккаунт?
          <router-link to="/login">Войти</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import {email, minLength, required} from "vuelidate/lib/validators";

export default {
  name: 'register',
  data: () => ({
    email: '',
    password: '',
    name: '',
    agree: false
  }),
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(6)},
    name: {required, minLength: minLength(3)},
    agree: {checked: v => v}
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name
      }
      try {
        await this.$store.dispatch('register', formData)
        this.$router.push('/')
      } catch (e) {
        console.log(formData)
      }
    }
  }
}
</script>
