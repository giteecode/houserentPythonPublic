<template>
<div>
	<div :style='{"width":"1200px","padding":"20px","margin":"10px auto","borderRadius":"0","background":"url(http://codegen.caihongy.cn/20220915/d11872980daa4bf28febfc2062bf4a46.png) center center/cover no-repeat"}' class="breadcrumb-preview">
		<el-breadcrumb :separator="'Ξ'" :style='{"fontSize":"14px","lineHeight":"1"}'>
			<el-breadcrumb-item>首页</el-breadcrumb-item>
			<el-breadcrumb-item v-for="(item, index) in breadcrumbItem" :key="index">{{item.name}}</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	
	<div class="detail-preview" :style='{"width":"1200px","margin":"10px auto","position":"relative"}'>
		<div class="attr" :style='{"padding":"20px","position":"relative","background":"#fff","flexDirection":"row-reverse","display":"flex"}'>
			<el-carousel :style='{"width":"540px","margin":"0 0 0 10px","height":"400px"}' trigger="click" indicator-position="inside" arrow="always" type="default" direction="horizontal" height="400px" autoplay="false" interval="3000" loop="true">
				<el-carousel-item :style='{"borderRadius":"10px","width":"100%","height":"100%"}' v-for="item in detailBanner" :key="item.id">
					<el-image :style='{"objectFit":"cover","width":"100%","height":"100%"}' v-if="item.substr(0,4)=='http'" :src="item" fit="cover" class="image"></el-image>
					<el-image :style='{"objectFit":"cover","width":"100%","height":"100%"}' v-else :src="baseUrl + item" fit="cover" class="image"></el-image>
				</el-carousel-item>
			</el-carousel>
	
			
			<div class="info" :style='{"width":"640px","padding":"10px","margin":"0 10px 0 0","background":"#f5f5f5"}'>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","alignItems":"center","background":"#f5f5f5","display":"flex","width":"100%","justifyContent":"space-between"}'>
					<div :style='{"color":"#333","fontSize":"16px"}'>
                    {{detail.biaoti}}
                    </div>
					<div @click="storeup(1)" v-show="!isStoreup" :style='{"padding":"10px","background":"#fff"}'><i v-if="true" :style='{"color":"#999","fontSize":"14px"}' class="el-icon-star-off"></i><span :style='{"color":"#999","fontSize":"14px"}'>点我收藏</span></div>
					<div @click="storeup(-1)" v-show="isStoreup" :style='{"padding":"10px","background":"#fff"}'><i v-if="true" :style='{"color":"#999","fontSize":"14px"}' class="el-icon-star-on"></i><span :style='{"color":"#999","fontSize":"14px"}'>取消收藏</span></div>
				</div>

				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","background":"transparent","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#999","textAlign":"right","width":"100px","fontSize":"14px","lineHeight":"40px","height":"40px"}'>月租</div>
					<div  :style='{"border":"3px solid #CD9571","padding":"0 10px","color":"#666","width":"calc(100% - 100px)","fontSize":"14px","lineHeight":"40px","height":"auto"}'>{{detail.yuezu}}</div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","background":"transparent","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#999","textAlign":"right","width":"100px","fontSize":"14px","lineHeight":"40px","height":"40px"}'>户型</div>
					<div  :style='{"border":"3px solid #CD9571","padding":"0 10px","color":"#666","width":"calc(100% - 100px)","fontSize":"14px","lineHeight":"40px","height":"auto"}'>{{detail.huxing}}</div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","background":"transparent","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#999","textAlign":"right","width":"100px","fontSize":"14px","lineHeight":"40px","height":"40px"}'>楼层</div>
					<div  :style='{"border":"3px solid #CD9571","padding":"0 10px","color":"#666","width":"calc(100% - 100px)","fontSize":"14px","lineHeight":"40px","height":"auto"}'>{{detail.louceng}}</div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","background":"transparent","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#999","textAlign":"right","width":"100px","fontSize":"14px","lineHeight":"40px","height":"40px"}'>面积</div>
					<div  :style='{"border":"3px solid #CD9571","padding":"0 10px","color":"#666","width":"calc(100% - 100px)","fontSize":"14px","lineHeight":"40px","height":"auto"}'>{{detail.mianji}}</div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","background":"transparent","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#999","textAlign":"right","width":"100px","fontSize":"14px","lineHeight":"40px","height":"40px"}'>装修</div>
					<div  :style='{"border":"3px solid #CD9571","padding":"0 10px","color":"#666","width":"calc(100% - 100px)","fontSize":"14px","lineHeight":"40px","height":"auto"}'>{{detail.zhuangxiu}}</div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","background":"transparent","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#999","textAlign":"right","width":"100px","fontSize":"14px","lineHeight":"40px","height":"40px"}'>朝向</div>
					<div  :style='{"border":"3px solid #CD9571","padding":"0 10px","color":"#666","width":"calc(100% - 100px)","fontSize":"14px","lineHeight":"40px","height":"auto"}'>{{detail.chaoxiang}}</div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","background":"transparent","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#999","textAlign":"right","width":"100px","fontSize":"14px","lineHeight":"40px","height":"40px"}'>竣工</div>
					<div  :style='{"border":"3px solid #CD9571","padding":"0 10px","color":"#666","width":"calc(100% - 100px)","fontSize":"14px","lineHeight":"40px","height":"auto"}'>{{detail.jungong}}</div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","background":"transparent","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#999","textAlign":"right","width":"100px","fontSize":"14px","lineHeight":"40px","height":"40px"}'>小区</div>
					<div  :style='{"border":"3px solid #CD9571","padding":"0 10px","color":"#666","width":"calc(100% - 100px)","fontSize":"14px","lineHeight":"40px","height":"auto"}'>{{detail.xiaoqu}}</div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","background":"transparent","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#999","textAlign":"right","width":"100px","fontSize":"14px","lineHeight":"40px","height":"40px"}'>区域</div>
					<div  :style='{"border":"3px solid #CD9571","padding":"0 10px","color":"#666","width":"calc(100% - 100px)","fontSize":"14px","lineHeight":"40px","height":"auto"}'>{{detail.quyu}}</div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","background":"transparent","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#999","textAlign":"right","width":"100px","fontSize":"14px","lineHeight":"40px","height":"40px"}'>房东账号</div>
					<div  :style='{"border":"3px solid #CD9571","padding":"0 10px","color":"#666","width":"calc(100% - 100px)","fontSize":"14px","lineHeight":"40px","height":"auto"}'>{{detail.fangdongzhanghao}}</div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","background":"transparent","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#999","textAlign":"right","width":"100px","fontSize":"14px","lineHeight":"40px","height":"40px"}'>房东姓名</div>
					<div  :style='{"border":"3px solid #CD9571","padding":"0 10px","color":"#666","width":"calc(100% - 100px)","fontSize":"14px","lineHeight":"40px","height":"auto"}'>{{detail.fangdongxingming}}</div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","background":"transparent","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#999","textAlign":"right","width":"100px","fontSize":"14px","lineHeight":"40px","height":"40px"}'>房东手机</div>
					<div  :style='{"border":"3px solid #CD9571","padding":"0 10px","color":"#666","width":"calc(100% - 100px)","fontSize":"14px","lineHeight":"40px","height":"auto"}'>{{detail.fangdongshouji}}</div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","background":"transparent","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#999","textAlign":"right","width":"100px","fontSize":"14px","lineHeight":"40px","height":"40px"}'>房屋地址</div>
					<div  :style='{"border":"3px solid #CD9571","padding":"0 10px","color":"#666","width":"calc(100% - 100px)","fontSize":"14px","lineHeight":"40px","height":"auto"}'>{{detail.fangwudizhi}}</div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","background":"transparent","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#999","textAlign":"right","width":"100px","fontSize":"14px","lineHeight":"40px","height":"40px"}'>点击次数</div>
					<div  :style='{"border":"3px solid #CD9571","padding":"0 10px","color":"#666","width":"calc(100% - 100px)","fontSize":"14px","lineHeight":"40px","height":"auto"}'>{{detail.clicknum}}</div>
				</div>
				<div class="btn" :style='{"padding":"10px 0","flexWrap":"wrap","display":"flex"}'>
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0 20px","margin":"0 5px 0 0","outline":"none","color":"#fff","borderRadius":"28px","background":"#CD9571","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="isAuth('zufangfangyuan','预约')" @click="onAcross('zufangyuyue','','','')" type="warning">预约</el-button>
				</div>
			</div>
			
		</div>
		
		
		<el-tabs class="detail" :style='{"border":"1px solid #DCDFE6","boxShadow":"0 1px 6px 0 rgba(0, 0, 0, .1)","background":"#FFF"}' v-model="activeName" type="border-card">
			<el-tab-pane label="详情" name="first">
				<div v-html="detail.xiangqing"></div>
			</el-tab-pane>
		</el-tabs>
	</div>
</div>
</template>

<script>
  import CountDown from '@/components/CountDown';
  export default {
    //数据集合
    data() {
      return {
        tablename: 'zufangfangyuan',
        baseUrl: '',
        breadcrumbItem: [
          {
            name: '详情信息'
          }
        ],
        title: '',
        detailBanner: [],
        endTime: 0,
        detail: {},
        activeName: 'first',
        total: 1,
        pageSize: 5,
		pageSizes: [10,20,30,50],
        totalPage: 1,
        rules: {
          content: [
            { required: true, message: '请输入内容', trigger: 'blur' }
          ]
        },
        storeupParams: {
          name: '',
          picture: '',
          refid: 0,
          tablename: 'zufangfangyuan',
          userid: localStorage.getItem('userid')
        },
        isStoreup: false,
        storeupInfo: {},
        buynumber: 1,
      }
    },
    created() {
        this.init();
    },
    //方法集合
    methods: {
        init() {
          this.baseUrl = this.$config.baseUrl;
          if(this.$route.query.detailObj) {
            this.detail = JSON.parse(this.$route.query.detailObj);
          }
          if(this.$route.query.storeupObj) {
            this.detail.id = JSON.parse(this.$route.query.storeupObj).refid;
          }
          this.$http.get(this.tablename + '/detail/'  + this.detail.id, {}).then(res => {
            if (res.data.code == 0) {
              this.detail = res.data.data;
              this.title = this.detail.biaoti;
              this.detailBanner = this.detail.fengmian ? this.detail.fengmian.split(",") : [];
              this.$forceUpdate();
            }
          });

          this.getStoreupStatus();

        },
      onAcross(acrossTable,crossOptAudit,statusColumnName,tips,statusColumnValue){
        localStorage.setItem('crossTable',`zufangfangyuan`);
        localStorage.setItem('crossObj', JSON.stringify(this.detail));
        localStorage.setItem('statusColumnName',statusColumnName);
        localStorage.setItem('statusColumnValue',statusColumnValue);
        localStorage.setItem('tips',tips);
        if(statusColumnName!=''&&!statusColumnName.startsWith("[")) {
            var obj = JSON.parse(localStorage.getItem('crossObj'));
            for (var o in obj){
                if(o==statusColumnName && obj[o]==statusColumnValue){
                    this.$message({
                        type: 'success',
                        message: tips,
                        duration: 1500
                    });
                    return
                }
            }
        }
        this.$router.push({path: '/index/' + acrossTable + 'Add', query: {type: 'cross'}});
      },
      storeup(type) {
        if (type == 1 && !this.isStoreup) {
          this.storeupParams.name = this.title;
          this.storeupParams.picture = this.detailBanner[0];
          this.storeupParams.inteltype = this.detail.huxing;
          this.storeupParams.refid = this.detail.id;
          this.storeupParams.type = type;
          this.$http.post('storeup/add', this.storeupParams).then(res => {
            if (res.data.code == 0) {
              this.isStoreup = true;
              this.$message({
                type: 'success',
                message: '收藏成功!',
                duration: 1500,
              });
            }
          });
        }
        if (type == -1 && this.isStoreup) {
          let delIds = new Array();
          delIds.push(this.storeupInfo.id);
          this.$http.post('storeup/delete', delIds).then(res => {
            if (res.data.code == 0) {
              this.isStoreup = false;
              this.$message({
                type: 'success',
                message: '取消成功!',
                duration: 1500,
              });
            }
          });
        }
      },
      getStoreupStatus(){
        if(localStorage.getItem("Token")) {
            this.$http.get('storeup/list', {params: {page: 1, limit: 1, type: 1, refid: this.detail.id, tablename: 'zufangfangyuan', userid: localStorage.getItem('userid')}}).then(res => {
              if (res.data.code == 0 && res.data.data.list.length > 0) {
                this.isStoreup = true;
                this.storeupInfo = res.data.data.list[0];
              }
            });
        }
      },
      curChange(page) {
        this.getInfo(page);
      },
      prevClick(page) {
        this.getInfo(page);
      },
      nextClick(page) {
        this.getInfo(page);
      },
      // 下载
      download(file){
        if(!file) {
            this.$message({
              type: 'error',
              message: '文件不存在',
              duration: 1500,
            });
            return;
        }
        window.open(this.baseUrl+file)
      },


    },
    components: {
      CountDown
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.detail-preview {
	
	  .attr {
	    .el-carousel /deep/ .el-carousel__indicator button {
	      width: 0;
	      height: 0;
	      display: none;
	    }
	
	    .el-input-number__decrease:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled), .el-input-number__increase:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled) {
	      border-color: none;
	    }
	  }
	
	  .detail {
	    & /deep/ .el-tabs__header .el-tabs__nav-wrap {
	      margin-bottom: 0;
	    }
	
	    & .add .el-textarea {
	      width: auto;
	    }
	  }
	}
	
	.attr .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--left {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.attr .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--left:hover {
		background: red;
	}
	
	.attr .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--right {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.attr .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--right:hover {
		background: red;
	}

	.attr .el-carousel /deep/ .el-carousel__indicators {
		padding: 0;
		margin: 0;
		z-index: 2;
		position: absolute;
		list-style: none;
	}
	
	.attr .el-carousel /deep/ .el-carousel__indicators li {
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 12px;
		opacity: 0.4;
		transition: 0.3s;
		height: 12px;
	}
	
	.attr .el-carousel /deep/ .el-carousel__indicators li:hover {
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 24px;
		opacity: 0.7;
		height: 12px;
	}
	
	.attr .el-carousel /deep/ .el-carousel__indicators li.is-active {
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 24px;
		opacity: 1;
		height: 12px;
	}
	
	.attr .el-input-number /deep/ .el-input-number__decrease {
		cursor: pointer;
		z-index: 1;
		display: flex;
		border-color: #DCDFE6;
		border-radius: 4px 0 0 4px;
		top: 1px;
		left: 1px;
		background: #f5f5f5;
		width: 40px;
		justify-content: center;
		border-width: 0 1px 0 0;
		align-items: center;
		position: absolute;
		border-style: solid;
		text-align: center;
		height: 38px;
	}
	
	.attr .el-input-number /deep/ .el-input-number__decrease i {
		color: #666;
		font-size: 14px;
	}

	.attr .el-input-number /deep/ .el-input-number__increase {
		cursor: pointer;
		z-index: 1;
		display: flex;
		border-color: #DCDFE6;
		right: 1px;
		border-radius: 0 4px 4px 0;
		top: 1px;
		background: #f5f5f5;
		width: 40px;
		justify-content: center;
		border-width: 0 0 0 1px;
		align-items: center;
		position: absolute;
		border-style: solid;
		text-align: center;
		height: 38px;
	}
	
	.attr .el-input-number /deep/ .el-input-number__increase i {
		color: #666;
		font-size: 14px;
	}
	
	.attr .el-input-number /deep/ .el-input .el-input__inner {
		border: 1px solid #DCDFE6;
		border-radius: 4px;
		padding: 0 40px;
		outline: none;
		color: #666;
		background: #FFF;
		display: inline-block;
		width: 100%;
		font-size: 14px;
		line-height: 40px;
		text-align: center;
		height: 40px;
	}
	
	.detail-preview .detail.el-tabs /deep/ .el-tabs__header {
		margin: 0;
		background: #F3EBE5;
		border-color: #E4E7ED;
		border-width: 0 0 1px 0;
		border-style: solid;
	}
	
	.detail-preview .detail.el-tabs /deep/ .el-tabs__header .el-tabs__item {
		border: 1px dashed #000;
		padding: 0 20px;
		margin: 0 10px;
		color: #999;
		font-weight: 500;
		display: inline-block;
		font-size: 14px;
		line-height: 40px;
		background: transparent;
		border-width: 0 2px;
		position: relative;
		list-style: none;
		height: 40px;
	}
	
	.detail-preview .detail.el-tabs /deep/ .el-tabs__header .el-tabs__item:hover {
		border: 1px dashed #CD9571;
		margin: 0 10px;
		color: #CD9571;
		background: transparent;
		border-width: 0 2px;
	}
	
	.detail-preview .detail.el-tabs /deep/ .el-tabs__header .el-tabs__item.is-active {
		border: 1px dashed #CD9571;
		margin: 0 10px;
		color: #CD9571;
		background: transparent;
		border-width: 0 2px;
	}
	
	.detail-preview .detail.el-tabs /deep/ .el-tabs__content {
		padding: 15px;
	}
	
	.detail-preview .detail.el-tabs .add /deep/ .el-form-item__label {
		padding: 0 10px 0 0;
		color: #666;
		width: 80px;
		font-size: 14px;
		line-height: 40px;
		text-align: right;
	}
	
	.detail-preview .detail.el-tabs .add /deep/ .el-textarea__inner {
		border: 2px solid #CD9571;
		border-radius: 0;
		padding: 0 12px;
		box-shadow: 0 0 0px rgba(64, 158, 255, .5);
		outline: none;
		color: #000;
		background: #F3EBE5;
		width: 1058px;
		font-size: 14px;
		line-height: 32px;
		height: 120px;
	}
	
	.breadcrumb-preview .el-breadcrumb /deep/ .el-breadcrumb__separator {
		margin: 0 9px;
		color: #000;
		font-weight: 500;
	}
	
	.breadcrumb-preview .el-breadcrumb /deep/ .el-breadcrumb__inner a {
		color: #000;
		display: inline-block;
	}

	.breadcrumb-preview .el-breadcrumb /deep/ .el-breadcrumb__inner {
		color: #000;
		display: inline-block;
	}
	
	.el-pagination /deep/ .el-pagination__total {
		margin: 0 10px 0 0;
		color: #666;
		font-weight: 400;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	.el-pagination /deep/ .btn-prev {
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
	
	.el-pagination /deep/ .btn-next {
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
	
	.el-pagination /deep/ .btn-prev:disabled {
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
	
	.el-pagination /deep/ .btn-next:disabled {
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
	
	.el-pagination /deep/ .el-pager {
		padding: 0;
		margin: 0;
		display: inline-block;
		vertical-align: top;
	}
	
	.el-pagination /deep/ .el-pager .number {
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
	
	.el-pagination /deep/ .el-pager .number:hover {
		cursor: pointer;
		padding: 0 4px;
		margin: 0 5px;
		color: #409EFF;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 2px;
		background: #CD9571;
		text-align: center;
		min-width: 30px;
		height: 28px;
}

.el-pagination /deep/ .el-pager .number.active {
		cursor: default;
		padding: 0 4px;
		margin: 0 5px;
		color: #FFF;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 2px;
		background: #CD9571;
		text-align: center;
		min-width: 30px;
		height: 28px;
	}
	
	.el-pagination /deep/ .el-pagination__sizes {
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	.el-pagination /deep/ .el-pagination__sizes .el-input {
		margin: 0 5px;
		width: 100px;
		position: relative;
	}
	
	.el-pagination /deep/ .el-pagination__sizes .el-input .el-input__inner {
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
	
	.el-pagination /deep/ .el-pagination__sizes .el-input span.el-input__suffix {
		top: 0;
		position: absolute;
		right: 0;
		height: 100%;
	}
	
	.el-pagination /deep/ .el-pagination__sizes .el-input .el-input__suffix .el-select__caret {
		cursor: pointer;
		color: #C0C4CC;
		width: 25px;
		font-size: 14px;
		line-height: 28px;
		text-align: center;
	}

	.el-pagination /deep/ .el-pagination__jump {
		margin: 0 0 0 24px;
		color: #606266;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	.el-pagination /deep/ .el-pagination__jump .el-input {
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
	
	.el-pagination /deep/ .el-pagination__jump .el-input .el-input__inner {
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
