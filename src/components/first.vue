<template>
  <div id="app" class="bottom">
    <lottie :options="defaultOptions" :height="500" :width="500" :animCreated="handleAnimation" />
    <!-- <div>
      <p>Speed: x{{animationSpeed}}</p>
      <input type="range" value="1" min="0" max="3" step="0.5" v-on:change="onSpeedChange" v-model="animationSpeed">
    </div> -->
    <!-- <button v-on:click="stop">stop</button>
    <button v-on:click="pause">pause</button>
    <button v-on:click="play">play</button> -->
  </div>
</template>

<script>
import Lottie from '../assets/lott'
import * as animationData from '../assets/intelia_logo_animation.json'
// import * as animationData from '../assets/frog.json'
export default {
  name: 'app',
  components: {
    'lottie': Lottie
  },
  data () {
    return {
      defaultOptions: { animationData: animationData },
      animationSpeed: 1
    }
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim
    },
    stop: function () {
      this.anim.stop()
    },
    play: function () {
      this.anim.play()
    },
    pause: function () {
      this.anim.pause()
    },
    onSpeedChange: function () {
      this.anim.setSpeed(this.animationSpeed)
    }
  }
}
</script>
<style>
.bottom{
  background:green

}
</style>
