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
  mounted () {
    document.title = '警政署'
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = './system-icon.png';
    document.getElementsByTagName('head')[0].appendChild(link);
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
  background: radial-gradient(82.92% 82.92% at 50% 47.5%, rgba(34, 49, 74, 0.9) 0%, #142035 100%), radial-gradient(52.5% 52.5% at 50% 47.5%, rgba(34, 49, 74, 0) 0%, #000000 89.06%);

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
