<template>
	<div class="main-content">
		<!-- 列表页 -->
		<template v-if="showFlag">
			<el-form class="center-form-pv" :style='{"width":"92%","margin":"30px 2% 20px 6%"}' :inline="true" :model="searchForm">
				<el-row :style='{"width":"100%"}' >
					<div :style='{"margin":"0 50px 0 0","display":"inline-block"}'>
						<label :style='{"margin":"0 10px 0 0","color":"#000","display":"inline-block","lineHeight":"40px","fontSize":"14px","fontWeight":"600","height":"40px"}' class="item-label">面积</label>
						<el-input v-model="searchForm.mianji" placeholder="面积" clearable></el-input>
					</div>
					<div :style='{"margin":"0 50px 0 0","display":"inline-block"}'>
						<label :style='{"margin":"0 10px 0 0","color":"#000","display":"inline-block","lineHeight":"40px","fontSize":"14px","fontWeight":"600","height":"40px"}' class="item-label">装修</label>
						<el-input v-model="searchForm.zhuangxiu" placeholder="装修" clearable></el-input>
					</div>
					<div :style='{"margin":"0 50px 0 0","display":"inline-block"}'>
						<label :style='{"margin":"0 10px 0 0","color":"#000","display":"inline-block","lineHeight":"40px","fontSize":"14px","fontWeight":"600","height":"40px"}' class="item-label">小区</label>
						<el-input v-model="searchForm.xiaoqu" placeholder="小区" clearable></el-input>
					</div>
					<el-button :style='{"border":"2px solid rgba(252, 239, 227, 1)","cursor":"pointer","padding":"0 24px","boxShadow":"4px 4px 0px 0px #B96D62","outline":"none","color":"#000","borderRadius":"4px","background":"#fff","width":"100px","fontSize":"14px","height":"40px"}' type="success" @click="search()">查询</el-button>
				</el-row>

				<el-row :style='{"margin":"30px 0","justifyContent":"flex-end","display":"flex"}'>
					<el-button :style='{"border":"3px solid rgba(252, 239, 227, 1)","cursor":"pointer","padding":"0 24px","boxShadow":"4px 4px 0px 0px #B96D62","margin":"0 10px 0 0","outline":"none","color":"#000","borderRadius":"4px","background":"#fff","width":"auto","fontSize":"14px","height":"40px"}' v-if="isAuth('fangyuan','新增')" type="success" @click="addOrUpdateHandler()">新增</el-button>
					<el-button :style='{"border":"3px solid rgba(252, 239, 227, 1)","cursor":"pointer","padding":"0 24px","boxShadow":"4px 4px 0px 0px #B96D62","margin":"0 10px 0 0","outline":"none","color":"#000","borderRadius":"4px","background":"#fff","width":"auto","fontSize":"14px","height":"40px"}' v-if="isAuth('fangyuan','删除')" :disabled="dataListSelections.length <= 0" type="danger" @click="deleteHandler()">删除</el-button>


					<el-button :style='{"border":"3px solid rgba(252, 239, 227, 1)","cursor":"pointer","padding":"0 24px","boxShadow":"4px 4px 0px 0px #B96D62","margin":"0 10px 0 0","outline":"none","color":"#000","borderRadius":"4px","background":"#fff","width":"auto","fontSize":"14px","height":"40px"}' v-if="isAuth('fangyuan','爬取数据')" type="success" @click="spider()">爬取数据</el-button>


					<el-button :style='{"border":"3px solid rgba(252, 239, 227, 1)","cursor":"pointer","padding":"0 24px","boxShadow":"4px 4px 0px 0px #B96D62","margin":"0 10px 0 0","outline":"none","color":"#000","borderRadius":"4px","background":"#fff","width":"auto","fontSize":"14px","height":"40px"}' v-if="isAuth('fangyuan','装修风格')" type="warning" @click="chartDialog1()">装修风格</el-button>
					<el-button :style='{"border":"3px solid rgba(252, 239, 227, 1)","cursor":"pointer","padding":"0 24px","boxShadow":"4px 4px 0px 0px #B96D62","margin":"0 10px 0 0","outline":"none","color":"#000","borderRadius":"4px","background":"#fff","width":"auto","fontSize":"14px","height":"40px"}' v-if="isAuth('fangyuan','户型统计')" type="warning" @click="chartDialog2()">户型统计</el-button>
					<el-button :style='{"border":"3px solid rgba(252, 239, 227, 1)","cursor":"pointer","padding":"0 24px","boxShadow":"4px 4px 0px 0px #B96D62","margin":"0 10px 0 0","outline":"none","color":"#000","borderRadius":"4px","background":"#fff","width":"auto","fontSize":"14px","height":"40px"}' v-if="isAuth('fangyuan','小区名称')" type="warning" @click="chartDialog3()">小区名称</el-button>
					<el-button :style='{"border":"3px solid rgba(252, 239, 227, 1)","cursor":"pointer","padding":"0 24px","boxShadow":"4px 4px 0px 0px #B96D62","margin":"0 10px 0 0","outline":"none","color":"#000","borderRadius":"4px","background":"#fff","width":"auto","fontSize":"14px","height":"40px"}' v-if="isAuth('fangyuan','区域统计')" type="warning" @click="chartDialog4()">区域统计</el-button>
					<el-button :style='{"border":"3px solid rgba(252, 239, 227, 1)","cursor":"pointer","padding":"0 24px","boxShadow":"4px 4px 0px 0px #B96D62","margin":"0 10px 0 0","outline":"none","color":"#000","borderRadius":"4px","background":"#fff","width":"auto","fontSize":"14px","height":"40px"}' v-if="isAuth('fangyuan','朝向统计')" type="warning" @click="chartDialog5()">朝向统计</el-button>
				</el-row>
			</el-form>
			
			<!-- <div> -->
				<el-table class="tables"
					:stripe='false'
					:style='{"padding":"0","borderColor":"rgba(237, 219, 201, 1)","margin":"30px 2% 20px 6%","borderWidth":"1px","background":"#fff","width":"92%","borderStyle":"solid"}' 
					v-if="isAuth('fangyuan','查看')"
					:data="dataList"
					v-loading="dataListLoading"
				@selection-change="selectionChangeHandler">
					<el-table-column :resizable='true' type="selection" align="center" width="50"></el-table-column>
					<el-table-column :resizable='true' :sortable='false' label="索引" type="index" width="50" />
					<el-table-column :resizable='true' :sortable='false' prop="fengmian" width="200" label="封面">
						<template slot-scope="scope">
							<div v-if="scope.row.fengmian">
								<img v-if="scope.row.fengmian.substring(0,4)=='http'" :src="scope.row.fengmian.split(',')[0]" width="100" height="100">
								<img v-else :src="$base.url+scope.row.fengmian.split(',')[0]" width="100" height="100">
							</div>
							<div v-else>无图片</div>
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='false'  
						prop="biaoti"
					label="标题">
						<template slot-scope="scope">
							{{scope.row.biaoti}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='false'  
						prop="zongjiage"
					label="总价格">
						<template slot-scope="scope">
							{{scope.row.zongjiage}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='false'  
						prop="pingjunjiage"
					label="平均价格">
						<template slot-scope="scope">
							{{scope.row.pingjunjiage}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='false'  
						prop="huxing"
					label="户型">
						<template slot-scope="scope">
							{{scope.row.huxing}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='false'  
						prop="louceng"
					label="楼层">
						<template slot-scope="scope">
							{{scope.row.louceng}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='false'  
						prop="mianji"
					label="面积">
						<template slot-scope="scope">
							{{scope.row.mianji}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='false'  
						prop="zhuangxiu"
					label="装修">
						<template slot-scope="scope">
							{{scope.row.zhuangxiu}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='false'  
						prop="chaoxiang"
					label="朝向">
						<template slot-scope="scope">
							{{scope.row.chaoxiang}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='false'  
						prop="jungong"
					label="竣工">
						<template slot-scope="scope">
							{{scope.row.jungong}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='false'  
						prop="xiaoqu"
					label="小区">
						<template slot-scope="scope">
							{{scope.row.xiaoqu}}
						</template>
					</el-table-column>
					<el-table-column :resizable='true' :sortable='false'  
						prop="quyu"
					label="区域">
						<template slot-scope="scope">
							{{scope.row.quyu}}
						</template>
					</el-table-column>
					<el-table-column width="300" label="操作">
						<template slot-scope="scope">
							<el-button :style='{"border":"2px solid rgba(252, 239, 227, 1)","cursor":"pointer","padding":"0 24px","boxShadow":"4px 2px 0px 0px #B96D62","margin":"0 10px 5px 0","color":"#000","borderRadius":"4px","background":"#fff","width":"auto","fontSize":"14px","height":"32px"}' v-if=" isAuth('fangyuan','查看')" type="success" size="mini" @click="addOrUpdateHandler(scope.row.id,'info')">详情</el-button>
							<el-button :style='{"border":"2px solid rgba(252, 239, 227, 1)","cursor":"pointer","padding":"0 24px","boxShadow":"4px 2px 0px 0px #B96D62","margin":"0 10px 5px 0","outline":"none","color":"#000","borderRadius":"4px","background":"#fff","width":"auto","fontSize":"14px","height":"32px"}' v-if=" isAuth('fangyuan','修改')" type="primary" size="mini" @click="addOrUpdateHandler(scope.row.id)">修改</el-button>





							<el-button :style='{"border":"2px solid rgba(252, 239, 227, 1)","cursor":"pointer","padding":"0 24px","boxShadow":"4px 2px 0px 0px #B96D62","margin":"0 10px 5px 0","outline":"none","color":"#000","borderRadius":"4px","background":"#fff","width":"auto","fontSize":"14px","height":"32px"}' v-if="isAuth('fangyuan','删除') " type="danger" size="mini" @click="deleteHandler(scope.row.id)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
				<el-pagination
					@size-change="sizeChangeHandle"
					@current-change="currentChangeHandle"
					:current-page="pageIndex"
					background
					:page-sizes="[10, 20, 30, 50]"
					:page-size="pageSize"
					:layout="layouts.join()"
					:total="totalPage"
					prev-text="<"
					next-text=">"
					:hide-on-single-page="false"
					:style='{"padding":"0","margin":"30px 2% 20px 6%","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"92%","fontWeight":"500"}'
				></el-pagination>
			<!-- </div> -->
		</template>
		
		<!-- 添加/修改页面  将父组件的search方法传递给子组件-->
		<add-or-update v-if="addOrUpdateFlag" :parent="this" ref="addOrUpdate"></add-or-update>





		<el-dialog
		  title="装修风格"
		  :visible.sync="chartVisiable1"
		  width="800">
			<div id="zhuangxiuChart1" style="width:100%;height:600px;"></div>
		  <span slot="footer" class="dialog-footer">
			<el-button @click="chartDialog1">返回</el-button>
		  </span>
		</el-dialog>
		<el-dialog
		  title="户型统计"
		  :visible.sync="chartVisiable2"
		  width="800">
			<div id="huxingChart2" style="width:100%;height:600px;"></div>
		  <span slot="footer" class="dialog-footer">
			<el-button @click="chartDialog2">返回</el-button>
		  </span>
		</el-dialog>
		<el-dialog
		  title="小区名称"
		  :visible.sync="chartVisiable3"
		  width="800">
			<div id="xiaoquChart3" style="width:100%;height:600px;"></div>
		  <span slot="footer" class="dialog-footer">
			<el-button @click="chartDialog3">返回</el-button>
		  </span>
		</el-dialog>
		<el-dialog
		  title="区域统计"
		  :visible.sync="chartVisiable4"
		  width="800">
			<div id="quyuChart4" style="width:100%;height:600px;"></div>
		  <span slot="footer" class="dialog-footer">
			<el-button @click="chartDialog4">返回</el-button>
		  </span>
		</el-dialog>
		<el-dialog
		  title="朝向统计"
		  :visible.sync="chartVisiable5"
		  width="800">
			<div id="chaoxiangChart5" style="width:100%;height:600px;"></div>
		  <span slot="footer" class="dialog-footer">
			<el-button @click="chartDialog5">返回</el-button>
		  </span>
		</el-dialog>
	</div>
</template>

<script>
import * as echarts from 'echarts'
import axios from 'axios'
import AddOrUpdate from "./add-or-update";
export default {
  data() {
    return {
      searchForm: {
        key: ""
      },
      form:{},
      dataList: [],
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
      dataListLoading: false,
      dataListSelections: [],
      showFlag: true,
      sfshVisiable: false,
      shForm: {},
      chartVisiable: false,
      chartVisiable1: false,
      chartVisiable2: false,
      chartVisiable3: false,
      chartVisiable4: false,
      chartVisiable5: false,
      addOrUpdateFlag:false,
      layouts: ["total","prev","pager","next","sizes","jumper"],


    };
  },
  created() {
    this.init();
    this.getDataList();
    this.contentStyleChange()
  },
  mounted() {
  },
  filters: {
    htmlfilter: function (val) {
      return val.replace(/<[^>]*>/g).replace(/undefined/g,'');
    }
  },
  components: {
    AddOrUpdate,
  },
  methods: {

    contentStyleChange() {
      this.contentPageStyleChange()
    },
    // 分页
    contentPageStyleChange(){
      let arr = []

      // if(this.contents.pageTotal) arr.push('total')
      // if(this.contents.pageSizes) arr.push('sizes')
      // if(this.contents.pagePrevNext){
      //   arr.push('prev')
      //   if(this.contents.pagePager) arr.push('pager')
      //   arr.push('next')
      // }
      // if(this.contents.pageJumper) arr.push('jumper')
      // this.layouts = arr.join()
      // this.contents.pageEachNum = 10
    },



//统计接口
    chartDialog1() {
      this.chartVisiable1 = !this.chartVisiable1;
      this.$nextTick(()=>{

        var zhuangxiuChart1 = echarts.init(document.getElementById("zhuangxiuChart1"),'macarons');
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
                        legend: {
                          orient: 'vertical',
                          left: 'left'
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
                zhuangxiuChart1.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    zhuangxiuChart1.resize();
                };
            }
        });
      })
    },

//统计接口
    chartDialog2() {
      this.chartVisiable2 = !this.chartVisiable2;
      this.$nextTick(()=>{

        var huxingChart2 = echarts.init(document.getElementById("huxingChart2"),'macarons');
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
                        legend: {
                          orient: 'vertical',
                          left: 'left'
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
                huxingChart2.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    huxingChart2.resize();
                };
            }
        });
      })
    },

//统计接口
    chartDialog3() {
      this.chartVisiable3 = !this.chartVisiable3;
      this.$nextTick(()=>{

        var xiaoquChart3 = echarts.init(document.getElementById("xiaoquChart3"),'macarons');
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
                xiaoquChart3.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    xiaoquChart3.resize();
                };
            }
        });
      })
    },

//统计接口
    chartDialog4() {
      this.chartVisiable4 = !this.chartVisiable4;
      this.$nextTick(()=>{

        var quyuChart4 = echarts.init(document.getElementById("quyuChart4"),'macarons');
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
                quyuChart4.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    quyuChart4.resize();
                };
            }
        });
      })
    },

//统计接口
    chartDialog5() {
      this.chartVisiable5 = !this.chartVisiable5;
      this.$nextTick(()=>{

        var chaoxiangChart5 = echarts.init(document.getElementById("chaoxiangChart5"),'macarons');
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
                chaoxiangChart5.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    chaoxiangChart5.resize();
                };
            }
        });
      })
    },

    init () {
    },
    search() {
      this.pageIndex = 1;
      this.getDataList();
    },

    // 获取数据列表
    getDataList() {
      this.dataListLoading = true;
      let params = {
        page: this.pageIndex,
        limit: this.pageSize,
        sort: 'id',
        order: 'desc',
      }
          if(this.searchForm.mianji!='' && this.searchForm.mianji!=undefined){
            params['mianji'] = '%' + this.searchForm.mianji + '%'
          }
          if(this.searchForm.zhuangxiu!='' && this.searchForm.zhuangxiu!=undefined){
            params['zhuangxiu'] = '%' + this.searchForm.zhuangxiu + '%'
          }
          if(this.searchForm.xiaoqu!='' && this.searchForm.xiaoqu!=undefined){
            params['xiaoqu'] = '%' + this.searchForm.xiaoqu + '%'
          }
      this.$http({
        url: "fangyuan/page",
        method: "get",
        params: params
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.dataList = data.data.list;
          this.totalPage = data.data.total;
        } else {
          this.dataList = [];
          this.totalPage = 0;
        }
        this.dataListLoading = false;
      });
    },
    // 每页数
    sizeChangeHandle(val) {
      this.pageSize = val;
      this.pageIndex = 1;
      this.getDataList();
    },
    // 当前页
    currentChangeHandle(val) {
      this.pageIndex = val;
      this.getDataList();
    },
    // 多选
    selectionChangeHandler(val) {
      this.dataListSelections = val;
    },
    // 添加/修改
    addOrUpdateHandler(id,type) {
      this.showFlag = false;
      this.addOrUpdateFlag = true;
      this.crossAddOrUpdateFlag = false;
      if(type!='info'){
        type = 'else';
      }
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init(id,type);
      });
    },
    // 下载
    download(file){
      window.open(`${file}`)
    },
    // 删除
    deleteHandler(id) {
      var ids = id
        ? [Number(id)]
        : this.dataListSelections.map(item => {
            return Number(item.id);
          });
      this.$confirm(`确定进行[${id ? "删除" : "批量删除"}]操作?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$http({
          url: "fangyuan/delete",
          method: "post",
          data: ids
        }).then(({ data }) => {
          if (data && data.code === 0) {
            this.$message({
              message: "操作成功",
              type: "success",
              duration: 1500,
              onClose: () => {
                this.search();
              }
            });
          } else {
            this.$message.error(data.msg);
          }
        });
      });
    },

    spider() {
        this.$message({
              message: "数据爬取中...",
              type: "success",
              duration: 3000,
              onClose: () => {
                this.search();
              }
            });
        this.$http({
          url: "spider/fangyuan",
          method: "get",
        }).then(({ data }) => {
          if (data && data.code === 0) {
            this.$message({
                message: "爬取完成",
                type: "success",
                duration: 1500,
                onClose: () => {
                    this.getDataList(this.roleName);
                }
            });
          } else {
            this.$alert(data.msg)
          }
        });
    },

  }

};
</script>
<style lang="scss" scoped>
	
	.center-form-pv {
	  .el-date-editor.el-input {
	    width: auto;
	  }
	}
	
	.el-input {
	  width: auto;
	}
	
	// form
	.center-form-pv .el-input /deep/ .el-input__inner {
				border: 2px solid rgba(252, 239, 227, 1);
				border-radius: 4px;
				padding: 0 12px;
				box-shadow: 0px 4px 0px 0px #B96D62;
				outline: none;
				color: #000;
				width: 200px;
				font-size: 14px;
				height: 40px;
			}
	
	.center-form-pv .el-select /deep/ .el-input__inner {
				border: 2px solid rgba(252, 239, 227, 1);
				border-radius: 4px;
				padding: 0 10px;
				box-shadow: 0px 4px 0px 0px #B96D62;
				outline: none;
				color: #000;
				width: 170px;
				font-size: 14px;
				height: 40px;
			}
	
	.center-form-pv .el-date-editor /deep/ .el-input__inner {
				border: 2px solid rgba(252, 239, 227, 1);
				border-radius: 4px;
				padding: 0 10px 0 30px;
				box-shadow: 0px 4px 0px 0px #B96D62;
				outline: none;
				color: #000;
				width: 170px;
				font-size: 14px;
				height: 40px;
			}
	
	// table
	.el-table /deep/ .el-table__header-wrapper thead {
				color: #999;
				font-weight: 500;
				width: 100%;
			}
	
	.el-table /deep/ .el-table__header-wrapper thead tr {
				background: #fff;
			}
	
	.el-table /deep/ .el-table__header-wrapper thead tr th {
				padding: 12px 0;
				border-color: rgba(237, 219, 201, 1);
				border-width: 0 1px 1px 0;
				border-style: solid;
				text-align: center;
			}

	.el-table /deep/ .el-table__header-wrapper thead tr th .cell {
				padding: 0 10px;
				word-wrap: normal;
				word-break: break-all;
				white-space: normal;
				font-weight: bold;
				display: inline-block;
				vertical-align: middle;
				width: 100%;
				line-height: 24px;
				position: relative;
				text-overflow: ellipsis;
			}

	
	.el-table /deep/ .el-table__body-wrapper tbody {
				width: 100%;
			}

	.el-table /deep/ .el-table__body-wrapper tbody tr {
				background: #fff;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td {
				padding: 12px 0;
				color: #999;
				background: #fff;
				border-color: rgba(237, 219, 201, 1);
				border-width: 0 1px 1px 0;
				border-style: solid;
				text-align: center;
			}
	
		
	.el-table /deep/ .el-table__body-wrapper tbody tr:hover td {
				padding: 12px 0;
				color: #000;
				background: rgba(255, 253, 247, 1);
				border-color: rgba(237, 219, 201, 1);
				border-width: 0 1px 1px 0;
				border-style: solid;
				text-align: center;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td {
				padding: 12px 0;
				color: #999;
				background: #fff;
				border-color: rgba(237, 219, 201, 1);
				border-width: 0 1px 1px 0;
				border-style: solid;
				text-align: center;
			}

	.el-table /deep/ .el-table__body-wrapper tbody tr td .cell {
				padding: 0 10px;
				overflow: hidden;
				word-break: break-all;
				white-space: normal;
				line-height: 24px;
				text-overflow: ellipsis;
			}
	
	// pagination
	.main-content .el-pagination /deep/ .el-pagination__total {
				margin: 0 10px 0 0;
				color: #666;
				font-weight: 400;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-prev {
				border: none;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #666;
				background: #f4f4f5;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				min-width: 35px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-next {
				border: none;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #666;
				background: #f4f4f5;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				min-width: 35px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-prev:disabled {
				border: none;
				cursor: not-allowed;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #C0C4CC;
				background: #f4f4f5;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-next:disabled {
				border: none;
				cursor: not-allowed;
				border-radius: 2px;
				padding: 0;
				margin: 0 5px;
				color: #C0C4CC;
				background: #f4f4f5;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}

	.main-content .el-pagination /deep/ .el-pager {
				padding: 0;
				margin: 0;
				display: inline-block;
				vertical-align: top;
			}

	.main-content .el-pagination /deep/ .el-pager .number {
				cursor: pointer;
				padding: 0 4px;
				margin: 0 5px;
				color: #666;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				border-radius: 2px;
				background: #f4f4f5;
				text-align: center;
				min-width: 30px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pager .number:hover {
				cursor: pointer;
				padding: 0 4px;
				margin: 0 5px;
				color: #eddac9;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				border-radius: 2px;
				background: #f4f4f5;
				text-align: center;
				min-width: 30px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pager .number.active {
				cursor: default;
				padding: 0 4px;
				margin: 0 5px;
				color: #000;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				border-radius: 2px;
				background: #eddac9;
				text-align: center;
				min-width: 30px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes {
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input {
				margin: 0 5px;
				width: 100px;
				position: relative;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input .el-input__inner {
				border: 1px solid #DCDFE6;
				cursor: pointer;
				padding: 0 25px 0 8px;
				color: #606266;
				display: inline-block;
				font-size: 13px;
				line-height: 28px;
				border-radius: 3px;
				outline: 0;
				background: #FFF;
				width: 100%;
				text-align: center;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input span.el-input__suffix {
				top: 0;
				position: absolute;
				right: 0;
				height: 100%;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input .el-input__suffix .el-select__caret {
				cursor: pointer;
				color: #C0C4CC;
				width: 25px;
				font-size: 14px;
				line-height: 28px;
				text-align: center;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump {
				margin: 0 0 0 24px;
				color: #606266;
				display: inline-block;
				vertical-align: top;
				font-size: 13px;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump .el-input {
				border-radius: 3px;
				padding: 0 2px;
				margin: 0 2px;
				display: inline-block;
				width: 50px;
				font-size: 14px;
				line-height: 18px;
				position: relative;
				text-align: center;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump .el-input .el-input__inner {
				border: 1px solid #DCDFE6;
				cursor: pointer;
				padding: 0 3px;
				color: #606266;
				display: inline-block;
				font-size: 14px;
				line-height: 28px;
				border-radius: 3px;
				outline: 0;
				background: #FFF;
				width: 100%;
				text-align: center;
				height: 28px;
			}
</style>
