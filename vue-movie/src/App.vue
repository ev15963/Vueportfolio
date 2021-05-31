<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">MOVIE</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
span,label {
  display:block;
  margin:0;
  padding:0;
}
img {
  width:100%;
}
body {
  background-color:rgb(49, 55, 56);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
