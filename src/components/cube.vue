<template>
  <div>
    <mu-linear-progress />
    <div class="wrap">
     <router-link :to="{name:'a'}"> <mu-raised-button @click="home" label="Primary" class="demo-raised-button" primary/></router-link>
     <router-link :to="{name:'first'}"><p>测试rem字体</p></router-link>
      <div>
        <mu-auto-complete hintText="请随便输入点啥" @input="handleInput" :dataSource="dataSource" @change="handlechange" />
        <mu-auto-complete hintText="请随便输入点啥" labelFloat label="full width" fullWidth @input="handleInput" :dataSource="dataSource" />
      </div>
      <h1>下拉框</h1>
      <div>
        <mu-select-field v-model="game1" :labelFocusClass="['label-foucs']" label="选择你喜欢的游戏">
          <mu-menu-item v-for="(text,index) in list" :key="index" :value="index" :title="text" />
        </mu-select-field>
      </div>
      <mu-paper>
        <mu-bottom-nav :value="bottomNav" @change="handleChange_1">
          <mu-bottom-nav-item value="recents" title="Recents" icon="restore" />
          <mu-bottom-nav-item value="favorites" title="Favorites" icon="favorite" />
          <mu-bottom-nav-item value="nearby" title="Nearby" icon="location_on" />
        </mu-bottom-nav>
      </mu-paper>
      <mu-time-picker hintText="24小时制" format="24hr" /><br/>
      <h1>时间选择</h1>
      <div>
        <mu-date-picker v-model="selectDate" hintText="选择时间 v-model同步value" /><br/> 选择的时间为： {{selectDate}} <br/>
      </div>
      <h1>弹框部分</h1>
      <div>
        <mu-raised-button label="dialog" @click="open" />
        <mu-dialog :open="dialog" title="Dialog" @close="close">
          这是一个简单的弹出框
          <mu-flat-button slot="actions" @click="close" primary label="取消" />
          <mu-flat-button slot="actions" primary @click="close" label="确定" />
        </mu-dialog>
      </div>
      <h1>单选按钮</h1>
      <div>
        <mu-switch label="开关" class="demo-switch" /><br/>
        <mu-checkbox label="最简单的" class="demo-checkbox" /> <br/>
        <mu-checkbox label="自定义icon" class="demo-checkbox" uncheckIcon="favorite_border" checkedIcon="favorite" /> <br/>
        <mu-checkbox label="不同的图形的icon" class="demo-checkbox" uncheckIcon="visibility_off" checkedIcon="visibility" /><br/>
        <mu-checkbox label="不可用" class="demo-checkbox" disabled/> <br/>
        <mu-checkbox label="不可用" class="demo-checkbox" disabled :value="true" /><br/>
        <mu-checkbox label="文字在左边的" class="demo-checkbox" labelLeft/><br/>
      </div>
      <div>
        <mu-table>
          <mu-thead slot="header">
            <mu-tr>
              <mu-th tooltip="ID">ID</mu-th>
              <mu-th tooltip="名称">Name</mu-th>
              <mu-th tooltip="状态">Status</mu-th>
            </mu-tr>
          </mu-thead>
          <mu-tbody>
            <mu-tr v-for="(item,index) in tableData" :key="index" :selected="item.selected">
              <mu-td>{{index + 1}}</mu-td>
              <mu-td>{{item.name}}</mu-td>
              <mu-td>{{item.status}}</mu-td>
            </mu-tr>
          </mu-tbody>
        </mu-table>
      </div>
      <div>
        <mu-flexbox>
          <mu-flexbox-item class="flex-demo">
            <p>内容1</p>
          </mu-flexbox-item>
          <mu-flexbox-item class="flex-demo">
            <p>内容1</p>
          </mu-flexbox-item>
          <mu-flexbox-item class="flex-demo">
            <p>内容1</p>
          </mu-flexbox-item>
        </mu-flexbox>
      </div>
      <div>
        <mu-raised-button label="上面弹出" @click="opens('top')" />
        <mu-popup position="top" :overlay="false" popupClass="demo-popup-bottom" :open="topPopup">
          更新成功
        </mu-popup>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'cube',
  data () {
    return {
      topPopup: false,
      dataSource: [],
      bottomNav: 'recents',
      selectDate: '',
      dialog: false,
      game1: 0,
      list: ['阴阳师', '影之刃', '天下HD', '穿越火线', '英雄联盟', '王者荣耀'],
      tableData: [
        {
          name: 'John ',
          status: 'Emplod',
          selected: true
        },
        {
          name: 'Randal ',
          status: 'Unempd'
        },
        {
          name: 'Stephanie',
          status: 'Emplod',
          selected: true
        },
        {
          name: 'Steve ',
          status: 'Empled'
        },
        {
          name: 'Joyce',
          status: 'Empld'
        },
        {
          name: 'Samuel',
          status: 'Emped'
        },
        {
          name: 'Adam',
          status: 'Emped'
        }
      ]
    }
  },
  watch: {
    topPopup (val) {
      if (val) {
        setTimeout(() => {
          this.topPopup = false
        }, 2000)
      }
    }
  },
  methods: {
    home () {
      this.$router.push({ name: 'HelloWorld' })
    },
    opens (position) {
      this[position + 'Popup'] = true
    },
    open () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    },
    handlechange (val) {
      console.log(`you choose ${val}`)
    },
    handleChange_1 (val) {
      this.bottomNav = val
    },
    handleInput (val) {
      this.dataSource = [
        val,
        val + val,
        val + val + val
      ]
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.wrap
  width 100%
  padding 2rem
  p
    font-size 1.5rem
    margin-left 2rem
    margin-top 2rem
  h1
    margin-top 5rem
    font-size 2rem
</style>
