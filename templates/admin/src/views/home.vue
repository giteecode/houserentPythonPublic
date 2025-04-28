<template>
<div class="content">
	<div class="text" :style='{"margin":"50px auto","fontSize":"24px","color":"rgb(51, 51, 51)","textAlign":"center","fontWeight":"bold"}'>欢迎使用 {{this.$project.projectName}}</div>
    <div class="cardView">
        <div class="cards" :style='{"margin":"0 0 20px 0","alignItems":"center","justifyContent":"center","display":"flex"}'>
			<div :style='{"boxShadow":"0 1px 6px rgba(0,0,0,.3)","margin":"0 10px","borderRadius":"4px","display":"flex"}' v-if="isAuth('fangyuan','首页总数')">
				<div :style='{"width":"20px","background":"#b96d62","height":"80px"}'></div>
				<div :style='{"width":"160px","alignItems":"center","flexDirection":"column","justifyContent":"center","display":"flex"}'>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"20px","color":"#333","fontWeight":"bold","height":"24px"}'>{{fangyuanCount}}</div>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"16px","color":"#666","height":"24px"}'>房源信息总数</div>
				</div>
			</div>
        </div>
        <div style="display: flex;align-items: center;width: 100%;margin-bottom: 10px;">
            <el-card style="width: 20%;margin: 0 10px;" v-if="isAuth('fangyuan','首页统计')">
                <div id="fangyuanChart1" style="width:100%;height:400px;"></div>
            </el-card>
            <el-card style="width: 20%;margin: 0 10px;" v-if="isAuth('fangyuan','首页统计')">
                <div id="fangyuanChart2" style="width:100%;height:400px;"></div>
            </el-card>
            <el-card style="width: 20%;margin: 0 10px;" v-if="isAuth('fangyuan','首页统计')">
                <div id="fangyuanChart3" style="width:100%;height:400px;"></div>
            </el-card>
            <el-card style="width: 20%;margin: 0 10px;" v-if="isAuth('fangyuan','首页统计')">
                <div id="fangyuanChart4" style="width:100%;height:400px;"></div>
            </el-card>
            <el-card style="width: 20%;margin: 0 10px;" v-if="isAuth('fangyuan','首页统计')">
                <div id="fangyuanChart5" style="width:100%;height:400px;"></div>
            </el-card>
        </div>
    </div>
</div>
</template>
<script>
//5
import router from '@/router/router-static'
import * as echarts from 'echarts'
export default {
	data() {
		return {
            fangyuanCount: 0,
		};
	},
  mounted(){
    this.init();
    this.getfangyuanCount();
    this.fangyuanChat1();
    this.fangyuanChat2();
    this.fangyuanChat3();
    this.fangyuanChat4();
    this.fangyuanChat5();
  },
  methods:{
    init(){
        if(this.$storage.get('Token')){
        this.$http({
            url: `${this.$storage.get('sessionTable')}/session`,
            method: "get"
        }).then(({ data }) => {
            if (data && data.code != 0) {
            router.push({ name: 'login' })
            }
        });
        }else{
            router.push({ name: 'login' })
        }
    },
    getfangyuanCount() {
        this.$http({
            url: `fangyuan/count`,
            method: "get"
        }).then(({
            data
        }) => {
            if (data && data.code == 0) {
                this.fangyuanCount = data.data
            }
        })
    },

    fangyuanChat1() {
      this.$nextTick(()=>{

        var fangyuanChart1 = echarts.init(document.getElementById("fangyuanChart1"),'macarons');
        this.$http({
            url: "fangyuan/group/zhuangxiu",
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].zhuangxiu);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].zhuangxiu
                    })
                }
                var option = {};
                option = {
                        title: {
                            text: '装修风格',
                            left: 'center'
                        },
                        tooltip: {
                          trigger: 'item',
                          formatter: '{b} : {c} ({d}%)'
                        },
                        series: [
                            {
                                type: 'pie',
                                radius: ['25%', '55%'],
                                center: ['50%', '60%'],
                                data: pArray,
                                emphasis: {
                                    itemStyle: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                };
                // 使用刚指定的配置项和数据显示图表。
                fangyuanChart1.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    fangyuanChart1.resize();
                };
            }
        });
      })
    },

    fangyuanChat2() {
      this.$nextTick(()=>{

        var fangyuanChart2 = echarts.init(document.getElementById("fangyuanChart2"),'macarons');
        this.$http({
            url: "fangyuan/group/huxing",
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].huxing);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].huxing
                    })
                }
                var option = {};
                option = {
                        title: {
                            text: '户型统计',
                            left: 'center'
                        },
                        tooltip: {
                          trigger: 'item',
                          formatter: '{b} : {c} ({d}%)'
                        },
                        series: [
                            {
                                type: 'pie',
                                radius: ['25%', '55%'],
                                roseType: 'area',
                                center: ['50%', '60%'],
                                data: pArray,
                                emphasis: {
                                    itemStyle: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                };
                // 使用刚指定的配置项和数据显示图表。
                fangyuanChart2.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    fangyuanChart2.resize();
                };
            }
        });
      })
    },

    fangyuanChat3() {
      this.$nextTick(()=>{

        var fangyuanChart3 = echarts.init(document.getElementById("fangyuanChart3"),'macarons');
        this.$http({
            url: "fangyuan/group/xiaoqu",
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].xiaoqu);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].xiaoqu
                    })
                }
                var option = {};
                option = {
                    title: {
                        text: '小区名称',
                        left: 'center'
                    },
                    tooltip: {
                      trigger: 'item',
                      formatter: '{b} : {c}'
                    },
                    xAxis: {
                        type: 'category',
                        data: xAxis
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: yAxis,
                        type: 'bar'
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                fangyuanChart3.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    fangyuanChart3.resize();
                };
            }
        });
      })
    },


    fangyuanChat4() {
      this.$nextTick(()=>{

        var fangyuanChart4 = echarts.init(document.getElementById("fangyuanChart4"),'macarons');
        this.$http({
            url: "fangyuan/group/quyu",
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].quyu);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].quyu
                    })
                }
                var option = {};
                option = {
                    title: {
                        text: '区域统计',
                        left: 'center'
                    },
                    tooltip: {
                      trigger: 'item',
                      formatter: '{b} : {c}'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: xAxis
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: yAxis,
                        type: 'line',
                        areaStyle: {},
                        smooth: true
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                fangyuanChart4.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    fangyuanChart4.resize();
                };
            }
        });
      })
    },

    fangyuanChat5() {
      this.$nextTick(()=>{

        var fangyuanChart5 = echarts.init(document.getElementById("fangyuanChart5"),'macarons');
        this.$http({
            url: "fangyuan/group/chaoxiang",
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].chaoxiang);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].chaoxiang
                    })
                }
                var option = {};
                option = {
                    title: {
                        text: '朝向统计',
                        left: 'center'
                    },
                    tooltip: {
                      trigger: 'item',
                      formatter: '{b} : {c}'
                    },
                    xAxis: {
                        type: 'value'
                    },
                    yAxis: {
                        type: 'category',
                        data: xAxis
                    },
                    series: [{
                        data: yAxis,
                        type: 'bar'
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                fangyuanChart5.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    fangyuanChart5.resize();
                };
            }
        });
      })
    },

  }
};
</script>
<style lang="scss" scoped>
    .cardView {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .cards {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 10px;
            justify-content: center;
            .card {
                width: calc(25% - 20px);
                margin: 0 10px;
                /deep/.el-card__body{
                    padding: 0;
                }
            }
        }
    }
</style>
