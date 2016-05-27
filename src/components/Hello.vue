<template>
  <div class="hello">
  <img class="logo" src="../assets/logo.png" v-on:click="toggle"><br>
  <input type="text" v-model="msg" v-if="flag">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>

export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      flag: false,
      msg: 'Hello World!'
    }
  },
  methods: {
    toggle(flag){
      this.flag = !this.flag ;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
