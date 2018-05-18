<template>
  <div class="hello">
    <div ref="sco">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="建设项目址意见书核发情况分析" name="first">
          <div class="block">
            <el-date-picker v-model="select" type="year" placeholder="选择月" value-format='yyyy'>
            </el-date-picker>
            <el-button type="primary" @click="serch">查询</el-button>
          </div>
          <div ref="echarts"></div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import echart from 'echarts'
export default {
  name: 'HelloWorld',
  data () {
    return {
      activeName: 'first',
      select: '',
      option: {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          // 对应年月展示
          data: []
        },
        toolbox: {
          show: true,
          feature: {
            dataView: {
              show: true,
              readOnly: false
            },
            magicType: {
              show: true,
              type: ['line', 'bar']
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            }
          }
        },
        calculable: true,
        xAxis: [{
          type: 'category',
          // 对应的类型展示
          data: []
        }],
        yAxis: [{
          type: 'value'
        }],
        series: []
      }
    }
  },
  created () {
    this.draw()
    let a = []
    for (let i = 0; i < 10; i++) {
      a[i] = function () {
        console.log(i)
      }
    }
    a[6]() // 10
    a[7]() // 10
    a[8]() // 10
    a[9]() // 10
    // 解构赋值  使用扩展运算符（...）
    const arr = [1, 2, 3, 4]
    const [first, second] = arr
    console.log(first, second)
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    draw () {
      this.$axios.get('http://192.168.1.102/ghydbg/mos/zhfx.aspx', {
        params: {
          'ident': 5,
          'year': this.select,
          'month': ''
        }
      }).then((data) => {
        alert('请求成功')
        this.option.xAxis[0].data = data.data.dw
        this.option.legend.data = data.data.year
        var series = []
        for (var i = 0; i < data.data.list.length; i++) {
          series.push({
            name: data.data.year[i],
            type: 'bar',
            data: data.data.list[i]
          })
        }
        this.option.series = series
        this.initEchart()
      }).catch((error) => {
        console.log(error)
      })
    },
    initEchart () {
      this.$refs.echarts.style.height = '600px'
      this.$refs.echarts.style.width = '700px'
      let sendChart = echart.init(this.$refs.echarts)
      sendChart.setOption(this.option)
    },
    serch () {
      this.draw()
    }
  }
}
</script>
<style scoped>
.hello {
  padding: 0px 50px 50px 50px;
}
.block {
  margin-bottom: 20px;
  text-align: left;
}
</style>
