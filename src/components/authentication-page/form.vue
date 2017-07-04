<template>
  <form action='/' method='post'>
    <template v-if='signUp'>
      <div class="form-group" :class='{"has-error": errors.has("firstname")}'>
        <label for="firstname">First name</label>
        <input v-validate.initial="'required'" type="text" name="firstname" v-model="user.firstname">
      </div>
      <p v-show="errors.has('firstname')" class="form-group__help">{{ errors.first('firstname') }}</p>

      <div class="form-group" :class='{"has-error": errors.has("lastname")}'>
        <label for="lastname">Last Name</label>
        <input v-validate.initial="'required'" type="text" name="lastname" v-model="user.lastname">
      </div>
      <p v-show="errors.has('lastname')" class="form-group__help">{{ errors.first('lastname') }}</p>
    </template>

    <div class="form-group" :class='{"has-error": errors.has("email")}'>
      <label for="email">Email</label>
      <input v-validate.initial="'required|email'" type="email" name="email" v-model="user.email">
    </div>
    <p v-show="errors.has('email')" class="form-group__help">{{ errors.first('email') }}</p>

    <div class="form-group" :class='{"has-error": errors.has("password")}'>
      <label for="password">Password</label>
      <input v-validate.initial="'required|min:8'" type="password" name="password" id="password" v-model="user.password"/>
    </div>
    <p v-show="errors.has('password')" class="form-group__help">{{ errors.first('password') }}</p>

    <button type="submit" @click.prevent="submitForm" :disabled='errors.any()'>Validate</button>
  </form>
</template>

<script>
  import Vuex from 'vuex'

  export default {
    name: 'formAuthentication',
    data () {
      return {
        user: {
          firstname: '',
          lastname: '',
          email: '',
          password: ''
        },
        signUp: false
      }
    },
    methods: {
      ...Vuex.mapActions({
        'signUpStore': 'signUp',
        'signInStore': 'signIn'
      }),
      login () {
        let userInfos = {
          email: this.user.email.trim(),
          password: this.user.password.trim()
        }

        this.signInStore(userInfos).then(response => {
          this.$router.push({name: 'Home', params: {flashMessage: response}})
        }).catch(response => {
          this.$router.push({name: 'Home'})
        })
      },
      registration () {
        let userInfos = {
          firstname: this.user.firstname.trim(),
          lastname: this.user.lastname.trim(),
          email: this.user.email.trim(),
          password: this.user.password.trim()
        }

        this.signUpStore(userInfos).then(response => {
          this.$router.push({name: 'Dashboard', params: {flashMessage: response}})
        }).catch(response => {
          this.$router.push({name: 'Dashboard'})
        })
      },
      submitForm () {
        this.$validator.validateAll().then(() => {
          if (this.signUp) {
            this.registration()
          } else {
            this.login()
          }
        }).catch(() => {
          console.log('errors in form')
        })
      }
    }
  }
</script>

<style lang='scss' scoped>
</style>
