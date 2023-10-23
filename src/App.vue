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
@import "./assets/scss/variables.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $dark;

  .transfers, .home{
    background-color: $gray-dark-4;
    padding: 2rem;
    margin: 0px 2rem;
    color: $gray-light-5;
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
        color: $green;
    }
  }
  #nav {
    padding: 30px;
    text-align: left;
    a {
      font-weight: bold;
      color: $gray-dark-3;
      &.router-link-exact-active {
        color: $green;
      }
    }
  }
  h1,h3{
    text-align: right;
    color:$green;
    font-weight: 800;
    margin-bottom: 1rem;
  }
  .transfers{
    background-color: $gray-dark-4;
    padding: 2rem;
    margin: 0px 2rem;
    color: $gray-light-5;
    font-size: 1.2rem;
  }

  .results{
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-content: flex-start;
  }
  .b-table {
    margin-bottom: 2rem;
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
        border-radius: 5px;
    }
}
a{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  &:hover{
    color: $gray-light-5;
  }
}
  .cta, button{
    border: solid 1px $green-lighter;
    border-radius: 5px;
    margin-top: 1rem;
    margin-left: auto;
    display: inline-block;
    font-size: 0.8em;
    padding: 0.4em 1em;
    width: auto;
    color: $gray-light-5;
    cursor: pointer;
    background-color: $green-dark;
    font-weight: 400;
    line-height: 1.5;
    &:hover {
      background-color: $green;
    }
  }
}
</style>
