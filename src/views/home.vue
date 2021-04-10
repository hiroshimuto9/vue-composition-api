<template>
  <h1>Home</h1>
  <div id="nav">
    <router-link to="/todos">Todoアプリ</router-link>
  </div>
</template>
<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
