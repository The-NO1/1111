<template>
  <div id="app">
    <Header />
    <!-- <Player /> -->
    <SongsList />
  </div>
</template>

<script>

import Header from './components/Header/index'
// import Player from './components/player/Player'
import SongsList from './components/songsList/songsList'
import './css/home.css'
export default {

  name: 'app',
  components: {
    Header,
    // Player
    SongsList
  }
}
</script>

<style>
body {
  background-color: #f5f5f5;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
