<template>
  <div class="add-contact">
    <h2>Add New Contact</h2>
    <input type="text" class="input" v-model="newContact" @keyup.enter="addContact" placeholder="New Contact">
    <input type="text" class="input" v-model="newNumber" @keyup.enter="addNumber" placeholder="Number">
    <button @click="addContact" class="btn">Add Contact</button>
  </div>
</template>

<script>
export default {
  name: 'ContactList',
  props: ['contacts'],
  data() {
    return {
      newContact: '',
      newNumber: ''
    };
  },
  methods: {
    addContact() {
      if (!this.newContact) {
        alert("Please enter a contact name")
      }

      if (!this.newNumber) {
        alert("Please enter a contact phone number")
      }

      if (this.newContact && this.newNumber) {
        this.contacts.push({
          name: this.newContact,
          number: this.newNumber,
        });
        this.newContact = '';
        this.newNumber = '';
      }
    },
  }
}
</script>

<style>
.add-contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.input {
  height: 2rem;
  margin: 0.5rem 0;
  padding: 0.5rem;
  text-align: center;
}

</style>
