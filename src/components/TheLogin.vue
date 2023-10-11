<template>
  <form>
    <h2>Login Page</h2>
    <div class="imgcontainer">
      <img
        src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png"
        alt="Avatar"
        class="avatar"
      />
    </div>

    <div class="container">
      <label for="email">Email</label>
      <input
        type="email"
        v-model="userData.email"
        placeholder="abc@gmail.com"
        required
      />

      <label for="passcode">Password</label>
      <input
        type="password"
        v-model="userData.passcode"
        placeholder="please enter your password"
        required
      />

      <button type="submit" @click.prevent="userLogin()">Login</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userData: { passcode: "", email: "" },
    };
  },
  methods: {
    userLogin() {
      axios
        .post("http://localhost:8000/api/login", this.userData) //you can use alternate API for the authentication purpose
        .then((res) => {
          this.$store.commit("SET_AUTH", true);
          this.$store.commit("SET_TOKEN", res.data.token);
          this.$store.commit("SET_USER", res.data.employee);
          this.$router.push("/dashboard");
        });
    },
  },
};
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
}
form {
  border: 3px solid #fff;
}

h2 {
  text-align: center;
}
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 2px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #1d71be;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.imgcontainer {
  text-align: center;
}

img.avatar {
  width: 10%;
  border-radius: 50%;
}

.container {
  padding: 50px;
}

@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>
