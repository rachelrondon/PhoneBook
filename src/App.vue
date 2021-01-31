<template>
  <div id="app">
    <PhoneBook v-bind:contacts="contacts" />
  </div>
</template>

<script>
import PhoneBook from './components/PhoneBook.vue'

export default {
  name: 'App',
  components: {
    PhoneBook
  },

  data() {
    return {
      contacts: []
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3.75rem;
}
</style>
