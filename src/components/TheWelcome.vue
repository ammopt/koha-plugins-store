<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <h1>Example: Shopping List</h1>
  <div>
      <form v-on:submit.prevent="addItem">
        <p>
          What do you need?
          <input type="text" required placeholder="item name.." v-model="itemName">
        </p>
        <p>
          How many?
          <input type="number" placeholder="number of items.." v-model="itemNumber">
        </p>
        <button type="submit">Add item</button>
      </form>

      <div>
        <p>Shopping list:</p>
        <ul>
          <li v-for="item in shoppingList">{{ item.name }}, {{ item.number }}</li>
        </ul>
      </div>
    </div>
 
</template>
<!--

<template>
  <h1>Example: Shopping List</h1>
  <div id="app">
    <form v-on:submit.prevent="addItem">
      <p>
        What do you need?
        <input type="text" required placeholder="item name.." v-model="itemName">
      </p>
      <p>
        How many?
        <input type="number" placeholder="number of items.." v-model="itemNumber">
      </p>
      <button type="submit">Add item</button>
    </form>

    <div>
      <p>Shopping list:</p>
      <ul>
        <li v-for="item in shoppingList">{{ item.name }}, {{ item.number }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
const app = Vue.createApp({
  data() {
    return {
      itemName: null,
      itemNumber: null,
      shoppingList: [
        { name: 'Tomatoes', number: 5 }
      ]
    }
  },
  methods: {
    addItem() {
      let item = {
        name: this.itemName,
        number: this.itemNumber
      }
      this.shoppingList.push(item)
      this.itemName = null
      this.itemNumber = null
    }
  }
})
</script>
-->