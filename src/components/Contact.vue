<template>
  <div class="card-container">
    <div v-for="contact in contacts" v-bind:key="contact.id" class="card">
      <h3>{{contact.name}}</h3>
      <p>{{contact.number}}</p>
      <button class="btn" @click="removeContact(index)">Remove Contact</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  props: ['contacts'],
  data() {
    return {
      newContact: '',
      newNumber: ''
    };
  },
  methods: {
    removeContact(index) {
      this.contacts.splice(index, 1);
    },
    clearAll() {
      this.contacts = [];
    },
  }
}
</script>

<style>

.card {
  margin: 1rem;
  overflow-wrap: break-word;
}

.card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5rem;
  max-width: 75rem;
}

</style>
