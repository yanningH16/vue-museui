<template>
  <div>
    <div>
      <div id="example-1" :class="classObj">
        <button @click="show">
          <p>测试一下</p>
        </button>
        <transition name="slide-fade">
          <p v-if="show">hello</p>
        </transition>
      </div>
      <div class="sty" :style="styObj">测试style</div>
      <p v-for="(item,index,a) of obj" :key="index">
        {{item}}:{{index}}:{{a}}
      </p>
      <li v-for="(n,index) in evenNumbers" :key="index">{{ n }}</li>
      <button v-on:click="warn('Form cannot be submitted yet.', $event)">
        Submit
      </button>
      <div v-on:click.once="doThis">点击一次的事件</div>
      <input @keyup.enter="submit">
      <input v-model.trim="msg">
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'first',
  data () {
    return {
      active: true,
      font: false,
      msg: '',
      numbers: [1, 2, 3, 4, 5],
      styObj: {
        color: 'red',
        fontSize: '30px'
      },
      obj: {
        a: 1,
        b: 2,
        c: 3
      }
    }
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    },
    classObj: function () {
      return {
        active: false,
        // this.classObj.active = !this.classObj.active
        // this.classObj.font = !this.classObj.font
        font: true

      }
    }
  },
  methods: {
    show () {
      this.styObj.color = 'green'
      this.styObj.fontSize = '10px'
    },
    warn: function (message, event) {
      // 现在我们可以访问原生事件对象
      if (event) event.preventDefault()
      alert(message)
    },
    doThis () {
      alert('之谈一次')
    },
    submit () {
      console.log('按键')
      console.log(this.msg)
    }
  }
}
</script>
<style lang="css" rel="stylesheet/css" scoped>
.active {
  background: red;
}
.font {
  font-size: 50px;
}
</style>
