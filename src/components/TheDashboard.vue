<template>
  <div class="user-details">
    <h2>User Details</h2>
    <ul>
      <li><strong>First Name:</strong> {{ user.first_name }}</li>
      <li><strong>Email:</strong> {{ user.email }}</li>
      <li><strong>Phone:</strong> {{ user.phone }}</li>
      <li><strong>Role:</strong> {{ user.role }}</li>
    </ul>
    <button v-if="user.role === 'Admin'" class="admin-button">
      Go to Admin Panel
    </button>
    <button class="logout-button" @click.prevent="logoutUser()">Logout</button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    logoutUser() {
      this.$store.dispatch("resetUser");
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.user-details {
  background-color: #f4f4f4;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
}
h2 {
  font-size: 24px;
  margin-bottom: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  font-size: 18px;
  margin-bottom: 5px;
}
button.admin-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  margin: 10px;
}
button.admin-button:hover {
  background-color: #0056b3;
}
button.logout-button {
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
}
button.logout-button:hover {
  background-color: #a52a2a;
}
</style>
