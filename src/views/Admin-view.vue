<template>
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username">
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password">
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
       
        if (this.username === 'user' && this.password === 'password') {
          alert('Login successful!');
          
        } else {
          alert('Invalid username or password');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .login h2 {
    margin-bottom: 20px;
  }
  
  .login form div {
    margin-bottom: 10px;
  }
  
  .login form label {
    display: block;
    margin-bottom: 5px;
  }
  
  .login form input {
    width: 100%;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  .login form button {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  
  .login form button:hover {
    background-color: #0056b3;
  }
  </style>
  