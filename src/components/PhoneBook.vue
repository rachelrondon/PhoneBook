<template>
  <div class="phone-book">
    <h1>Phone Book</h1>
    <AddContact v-bind:contacts="contacts" />
    <Contact v-bind:contacts="contacts" />
  </div>
</template>

<script>
import Contact from './Contact.vue'
import AddContact from './AddContact.vue'

export default {
  name: 'ContactList',
  props: ['contacts'],
  components: {
    Contact,
    AddContact
  },
  data() {
    return {
      newContact: '',
      newNumber: ''
    };
  },
}
</script>

<style>

.btn {
  background-color: #0071E3;
  border: none;
  color: #ffffff;
  font-size: 1rem;
  height: auto;
  margin: 0.5rem 0;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
}

.phone-book {
  align-items: center;
  background-color: #e7e7e7;
  color: #1d1d1f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem;
  padding: 2rem; 
}

</style>
