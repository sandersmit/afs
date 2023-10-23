<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/transfers">Transfers</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .transfers, .home{
    background-color: #535A74;
    padding: 2rem;
    margin: 0px 2rem;
    color: white;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
  }
  .message{
    max-width: 320px;
     opacity: 0;
      &.complete{
        opacity: 1;
        color: #42b983;
    }
  }
  #nav {
    padding: 30px;
    text-align: left;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  h1,h3{
    text-align: right;
    color:#42b983;
    font-weight: 800;
    margin-bottom: 1rem;
  }
  .transfers{
    background-color: #535A74;
    padding: 2rem;
    margin: 0px 2rem;
    color: white;
    font-size: 1.2rem;
  }

  .results{
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-content: flex-start;
  }
  form{
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      flex-direction: column;
      align-items: flex-start;
      margin-right: auto;
      width: 100%;
      margin-bottom: 2rem;
      div{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-start;
        width: 100%;
        max-width: 500px;
      }
      input{
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
    }
}
a{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  &:hover{
    color: #ffffff;
  }
}
  .cta, button{
    border: none;
    margin-top: 1rem;
    margin-left: auto;
    display: inline-block;
    font-size: 0.8em;
    padding: 0.4em 1em;
    width: auto;
    color: #ffffff;
    cursor: pointer;
    background-color: #42b983;
    font-weight: 400;
    line-height: 1.5;
    &:hover {
      background-color: #0bc873;
    }
  }
}
</style>
