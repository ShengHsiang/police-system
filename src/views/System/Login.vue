<template>
  <div class="login-container">
    <main class="login-wrapper">
      <div class="login-logo-wrapper">
        <img src="@/assets/logo.svg" alt="">
      </div>
      <h1>Central City Police Department</h1>
      <form>
        <div class="input-wrapper mb-2">
          <label for="username">Agent ID</label>
          <input type="text" name="username" v-model="username">
        </div>
        <div class="input-wrapper">
          <label for="password">Password</label>
          <input type="password" name="password" v-model="password">
        </div>
        <div class="button-wrapper">
          <button type="submit" @click.prevent="handleLogin">LOGIN</button>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  name: 'SystemLogin',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleLogin () {
      this.$router.push({ name: 'SystemSearch' })
    }
  }
}
</script>

<style lang="scss" scoped>
.mb-2 {
  margin-bottom: 16px;
}

.login-container {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #142035 0%, rgba(20, 32, 53, 0.9) 130.42%);

  display: flex;
  justify-content: center;
  align-items: center;
}

.login-wrapper {
  min-width: 300px;
  min-height: 300px;
  border-radius: 8px;

  h1 {
    font-family: 'Prosto One', cursive;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    margin-bottom: 36px;
  }
}

.login-logo-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
}

.input-wrapper {
  color: #fff;
  font-family: 'Prosto One', cursive;
  display: flex;
  align-items: center;

  label {
    display: block;
    width: 100px;
  }

  input {
    width: 211px;
    height: 36px;
    background: #FFFFFF;
    border-radius: 2px;
    padding: 0 8px;
    font-size: 16px;
  }
}

.button-wrapper {
  display: flex;
  justify-content: center;

  button {
    font-family: 'Prosto One', cursive;
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
    height: 40px;
    width: 176px;
    margin-top: 45px;
    cursor: pointer;
  }
}
</style>
