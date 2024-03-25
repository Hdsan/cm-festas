<template>
    <div class="login-container">
      <div class="input-group" id="code">
        <input v-model="codigoSala" type="text" placeholder="Código da sala" />
      </div>
      <div class="input-group">
        <input v-model="nomeUsuario" type="text" placeholder="Usuário" />
      </div>
      <div class="input-group">
        <input v-model="senha" type="password" placeholder="Senha" />
      </div>
      <button @click="login">Login</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        codigoSala: '',
        nomeUsuario: '',
        senha: '',
      };
    },
    methods: {
      login() {
        // Adicione sua lógica de login aqui
        console.log('Código da Sala:', this.codigoSala);
        console.log('Nome do Usuário:', this.nomeUsuario);
        console.log('Senha:', this.senha);
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 300px;
    margin: auto;
    display: flex;
    flex-direction: column;
  }
  #code {
    padding-top: 50px;
    padding-bottom: 70px;
  }
  
  .input-group {
    margin-bottom: 15px;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input {
    height: 50px;
    width: 350px;
    padding: 5px;
    box-sizing: border-box;
  }
  
  button {
  height: 40px; /* Ajuste a altura conforme necessário */
  width: 350px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}
  button:hover {
    background-color: #45a049;
  }
  </style>
  