<template>
  <div class="add-contact">
    <h2>Add New Contact</h2>
    <div class="add-contact-input">
      <input type="text" class="input name" v-model="newContact" @keyup.enter="addContact" placeholder="Name">
      <input type="text" class="input number" v-model="newNumber" @keyup.enter="addNumber" placeholder="Number">
      <button @click="addContact" class="btn">Add Contact</button>
    </div>
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

.add-contact .btn {
  margin: 0.5rem;
}

.add-contact-input {
  display: flex;
  flex-direction: row;
  margin: 2rem;
}

.input {
  height: 2rem;
  margin: 0.5rem;
  padding: 0.5rem;
  text-align: center;
}

</style>
