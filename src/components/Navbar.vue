<script setup>
import router from "../Router"
</script>

<template>
    <nav class="navbar">
        <div class="navbar__brand">
            <h1>Auth</h1>
        </div>
        <div class="navbar__items">
            <a @click="router.push('/login')" class="navbar__item">Login</a>
            <a @click="router.push('/sign-up')" class="navbar__item navbar__sign-up">Sign Up</a>
        </div>
    </nav>
</template>

<style scoped>
  .navbar {
    width: 100%;
    height: 80px;
    background-color: #202124;
    padding: 0px 80px;
    display: flex;
    align-items: center;
  }
  .navbar__brand {
    flex: 1;
  }
  .navbar__items {
    flex: 4;
    justify-content: right;
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .navbar__item {
    cursor: pointer;
    transition: .3s all;
    padding: 5px 20px;
    font-size: large;
  }
  .navbar__item:hover {
   text-shadow: 1px 1px 3px white;
  }
  .navbar__sign-up {
    background-color: #50c878;
    color: #202124;
    border-radius: 2px;
    font-weight: bolder;
  }
  @media screen and (max-width: 426px) {
    .navbar {
      padding: 0px 40px;
    }
  }
</style>
