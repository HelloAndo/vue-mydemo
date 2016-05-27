<template>
  <div id="app">
    <ul class="nav nav-tabs">
      <li v-bind:class= " { 'active': i===$index } "  v-on:click="choose($index)"   v-for="nav in navs" >
        <a v-link=" nav.link " >{{nav.txt}}</a>
      </li>
    </ul>
    <hello></hello>
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <ul class="list-group">
            <li class="list-group-item" v-on:mouseover="over($index)"  v-on:mouseout="out($index)" v-for=" list in lists "> {{list.ctx}} <button v-if="list.isHover"  @click="delTodo" class="btn btn-danger btn-xs pull-right ">删除</button></li>
          </ul>
        </div>
        <div class="col-sm-4">
          <div class="input-group">
            <input v-model="newTodo"  type="text" class="form-control" placeholder="add a Todo ...">
            <span class="input-group-btn">
              <button v-on:click=" addNewTodo " class="btn btn-default" type="button">Add</button>
            </span>
          </div><!-- /input-group -->
        </div>        
      </div>
<!--       <div class="row">
        <router-view></router-view>
      </div> -->
    </div>
  </div>
</template>

<script>
import todo from './components/todo.vue'
import Hello from './components/Hello.vue'
// import VueRouter from 'vue-router'

export default {
  data(){
    return{
      i: '0',
      newTodo: undefined,
      navs : [
        { 'link': '/Home', 'txt': 'Home' },
        { 'link': '/NextToHome', 'txt': 'NextToHome' }
      ],
      lists: [
        {'ctx': 'the first todo', 'isHover': false}
      ]
    }
    
  },
  methods: {
    choose: function(index){
    console.log(index);
      this.i = index;
    },
    addNewTodo: function(){
      if( this.newTodo  ){
        this.lists.push(  { 'ctx': this.newTodo  , 'isHover': false } );    
      }
    },
    over: function(index){
      for( var i = 0; i < this.lists.length; i++ ){
        this.lists[i]['isHover'] = false;      
      }
      this.lists[index]['isHover'] = true;
      console.log(this.lists[0])
      console.log(this.lists[0].ctx)
      console.log(this.lists[0].isHover)
    },
    out: function(index){
      this.lists[index]['isHover'] = false;
    },
    delTodo: function(index){
      this.
    }
  },
  components: {
    Hello, todo
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  /*align-items: center;*/
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  /*margin-top: -100px;*/
  /*max-width: 600px;*/
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}

li{ text-align: left;  }
</style>
