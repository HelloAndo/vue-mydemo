<template>
	<div id="NextToHome">
		<ul class="list-group">
		  <li v-link=" '/NextToHome/Progress' " class="list-group-item">progress</li>
		  <li class="list-group-item">Dapibus ac facilisis in</li>
		  <li class="list-group-item">Morbi leo risus</li>
		  <li class="list-group-item">Porta ac consectetur ac</li>
		  <li class="list-group-item">Vestibulum at eros</li>
		</ul>
	</div>
    <router-view></router-view>
</template>

<script>

// import Progress from './components/progress.vue'
	export default{
		data(){
			return{}
		}
		// components: { Progress } 
	}
</script>