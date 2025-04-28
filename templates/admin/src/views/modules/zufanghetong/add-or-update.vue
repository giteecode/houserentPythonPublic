<template>
	<div class="addEdit-block" style="width: 100%;">
		<el-form
			:style='{"borderRadius":"6px","padding":"50px 100px"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="140px"
		>
			<template >
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-if="type!='info'" label="合同编号" prop="hetongbianhao">
					<el-input v-model="ruleForm.hetongbianhao" placeholder="合同编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-else-if="ruleForm.hetongbianhao" label="合同编号" prop="hetongbianhao">
					<el-input v-model="ruleForm.hetongbianhao" placeholder="合同编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="小区" prop="xiaoqu">
					<el-input v-model="ruleForm.xiaoqu" placeholder="小区" clearable  :readonly="ro.xiaoqu"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' v-else class="input" label="小区" prop="xiaoqu">
					<el-input v-model="ruleForm.xiaoqu" placeholder="小区" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="户型" prop="huxing">
					<el-input v-model="ruleForm.huxing" placeholder="户型" clearable  :readonly="ro.huxing"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' v-else class="input" label="户型" prop="huxing">
					<el-input v-model="ruleForm.huxing" placeholder="户型" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="upload" v-if="type!='info' && !ro.fengmian" label="封面" prop="fengmian">
					<file-upload
						tip="点击上传封面"
						action="file/upload"
						:limit="3"
						:multiple="true"
						:fileUrls="ruleForm.fengmian?ruleForm.fengmian:''"
						@change="fengmianUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="upload" v-else-if="ruleForm.fengmian" label="封面" prop="fengmian">
					<img class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.fengmian.split(',')" :src="$base.url+item" width="100" height="100">
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="面积" prop="mianji">
					<el-input v-model="ruleForm.mianji" placeholder="面积" clearable  :readonly="ro.mianji"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' v-else class="input" label="面积" prop="mianji">
					<el-input v-model="ruleForm.mianji" placeholder="面积" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="月租（元）" prop="yuezu">
					<el-input v-model="ruleForm.yuezu" placeholder="月租（元）" clearable  :readonly="ro.yuezu"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' v-else class="input" label="月租（元）" prop="yuezu">
					<el-input v-model="ruleForm.yuezu" placeholder="月租（元）" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="房屋地址" prop="fangwudizhi">
					<el-input v-model="ruleForm.fangwudizhi" placeholder="房屋地址" clearable  :readonly="ro.fangwudizhi"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' v-else class="input" label="房屋地址" prop="fangwudizhi">
					<el-input v-model="ruleForm.fangwudizhi" placeholder="房屋地址" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="租赁时长" prop="zulinshizhang">
					<el-input v-model="ruleForm.zulinshizhang" placeholder="租赁时长" clearable  :readonly="ro.zulinshizhang"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' v-else class="input" label="租赁时长" prop="zulinshizhang">
					<el-input v-model="ruleForm.zulinshizhang" placeholder="租赁时长" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="押金" prop="yajin">
					<el-input v-model="ruleForm.yajin" placeholder="押金" clearable  :readonly="ro.yajin"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' v-else class="input" label="押金" prop="yajin">
					<el-input v-model="ruleForm.yajin" placeholder="押金" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="总金额" prop="zongjine">
					<el-input v-model="zongjine" placeholder="总金额" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-else-if="ruleForm.zongjine" label="总金额" prop="zongjine">
					<el-input v-model="ruleForm.zongjine" placeholder="总金额" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="用户账号" prop="yonghuzhanghao">
					<el-input v-model="ruleForm.yonghuzhanghao" placeholder="用户账号" clearable  :readonly="ro.yonghuzhanghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' v-else class="input" label="用户账号" prop="yonghuzhanghao">
					<el-input v-model="ruleForm.yonghuzhanghao" placeholder="用户账号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="用户姓名" prop="yonghuxingming">
					<el-input v-model="ruleForm.yonghuxingming" placeholder="用户姓名" clearable  :readonly="ro.yonghuxingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' v-else class="input" label="用户姓名" prop="yonghuxingming">
					<el-input v-model="ruleForm.yonghuxingming" placeholder="用户姓名" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="联系电话" prop="lianxidianhua">
					<el-input v-model="ruleForm.lianxidianhua" placeholder="联系电话" clearable  :readonly="ro.lianxidianhua"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' v-else class="input" label="联系电话" prop="lianxidianhua">
					<el-input v-model="ruleForm.lianxidianhua" placeholder="联系电话" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="房东账号" prop="fangdongzhanghao">
					<el-input v-model="ruleForm.fangdongzhanghao" placeholder="房东账号" clearable  :readonly="ro.fangdongzhanghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' v-else class="input" label="房东账号" prop="fangdongzhanghao">
					<el-input v-model="ruleForm.fangdongzhanghao" placeholder="房东账号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="房东姓名" prop="fangdongxingming">
					<el-input v-model="ruleForm.fangdongxingming" placeholder="房东姓名" clearable  :readonly="ro.fangdongxingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' v-else class="input" label="房东姓名" prop="fangdongxingming">
					<el-input v-model="ruleForm.fangdongxingming" placeholder="房东姓名" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="房东手机" prop="fangdongshouji">
					<el-input v-model="ruleForm.fangdongshouji" placeholder="房东手机" clearable  :readonly="ro.fangdongshouji"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' v-else class="input" label="房东手机" prop="fangdongshouji">
					<el-input v-model="ruleForm.fangdongshouji" placeholder="房东手机" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="upload" v-if="type!='info'&& !ro.hetong" label="合同" prop="hetong">
					<file-upload
						tip="点击上传合同"
						action="file/upload"
						:limit="1"
						:multiple="true"
						:fileUrls="ruleForm.hetong?ruleForm.hetong:''"
						@change="hetongUploadChange"
					></file-upload>
				</el-form-item>  
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' v-else-if="ruleForm.hetong" label="合同" prop="hetong">
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0 15px","margin":"0 20px 0 0","outline":"none","color":"#000","borderRadius":"4px","background":"rgba(232, 213, 194, 1)","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' type="text" size="small" @click="download($base.url+ruleForm.hetong)">下载</el-button>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' v-else-if="!ruleForm.hetong" label="合同" prop="hetong">
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0 15px","margin":"0 20px 0 0","outline":"none","color":"#000","borderRadius":"4px","background":"rgba(232, 213, 194, 1)","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' type="text" size="small">无</el-button>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="date" v-if="type!='info'" label="签订时间" prop="qiandingshijian">
					<el-date-picker
						value-format="yyyy-MM-dd HH:mm:ss"
						v-model="ruleForm.qiandingshijian" 
						type="datetime"
						:readonly="ro.qiandingshijian"
						placeholder="签订时间"
					></el-date-picker>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 20px 0","display":"inline-block"}' class="input" v-else-if="ruleForm.qiandingshijian" label="签订时间" prop="qiandingshijian">
					<el-input v-model="ruleForm.qiandingshijian" placeholder="签订时间" readonly></el-input>
				</el-form-item>
			</template>
			<el-form-item :style='{"padding":"0","margin":"0"}' class="btn">
				<el-button :style='{"border":"2px solid rgba(252, 239, 227, 1)","cursor":"pointer","padding":"0","boxShadow":"4px 2px 0px 0px #B96D62","margin":"0 20px 0 0","color":"#000","outline":"none","borderRadius":"4px","background":"#fff","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
				<el-button :style='{"border":"2px solid rgba(252, 239, 227, 1)","cursor":"pointer","padding":"0","boxShadow":"4px 0px 0px 0px #B96D62","margin":"0","color":"#000","outline":"none","borderRadius":"4px","background":"rgba(255, 255, 255, 1)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
				<el-button :style='{"border":"2px solid rgba(252, 239, 227, 1)","cursor":"pointer","padding":"0","boxShadow":"4px 0px 0px 0px #B96D62","margin":"0","color":"#000","outline":"none","borderRadius":"4px","background":"rgba(255, 255, 255, 1)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
	data() {
		let self = this
		var validateIdCard = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!checkIdCard(value)) {
				callback(new Error("请输入正确的身份证号码"));
			} else {
				callback();
			}
		};
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isPhone(value)) {
				callback(new Error("请输入正确的电话号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
			ro:{
				hetongbianhao : false,
				xiaoqu : false,
				huxing : false,
				fengmian : false,
				mianji : false,
				yuezu : false,
				fangwudizhi : false,
				zulinshizhang : false,
				yajin : false,
				zongjine : false,
				yonghuzhanghao : false,
				yonghuxingming : false,
				lianxidianhua : false,
				fangdongzhanghao : false,
				fangdongxingming : false,
				fangdongshouji : false,
				hetong : false,
				qiandingshijian : false,
				sfsh : false,
				shhf : false,
				ispay : false,
			},
			
			
			ruleForm: {
				hetongbianhao: this.getUUID(),
				xiaoqu: '',
				huxing: '',
				fengmian: '',
				mianji: '',
				yuezu: '',
				fangwudizhi: '',
				zulinshizhang: '',
				yajin: '',
				zongjine: '',
				yonghuzhanghao: '',
				yonghuxingming: '',
				lianxidianhua: '',
				fangdongzhanghao: '',
				fangdongxingming: '',
				fangdongshouji: '',
				hetong: '',
				qiandingshijian: '',
				shhf: '',
			},
		
			
			rules: {
				hetongbianhao: [
				],
				xiaoqu: [
				],
				huxing: [
				],
				fengmian: [
				],
				mianji: [
				],
				yuezu: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				fangwudizhi: [
				],
				zulinshizhang: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				yajin: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				zongjine: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				yonghuzhanghao: [
				],
				yonghuxingming: [
				],
				lianxidianhua: [
				],
				fangdongzhanghao: [
				],
				fangdongxingming: [
				],
				fangdongshouji: [
				],
				hetong: [
				],
				qiandingshijian: [
				],
				sfsh: [
				],
				shhf: [
				],
				ispay: [
				],
			}
		};
	},
	props: ["parent"],
	computed: {



		zongjine:{
			
			get: function () {
				return 1*this.ruleForm.yuezu*this.ruleForm.zulinshizhang+parseFloat(this.ruleForm.yajin==""?0:this.ruleForm.yajin)
			}
		},
	},
	created() {
		this.ruleForm.qiandingshijian = this.getCurDateTime()
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
				for (var o in obj){
						if(o=='hetongbianhao'){
							this.ruleForm.hetongbianhao = obj[o];
							this.ro.hetongbianhao = true;
							continue;
						}
						if(o=='xiaoqu'){
							this.ruleForm.xiaoqu = obj[o];
							this.ro.xiaoqu = true;
							continue;
						}
						if(o=='huxing'){
							this.ruleForm.huxing = obj[o];
							this.ro.huxing = true;
							continue;
						}
						if(o=='fengmian'){
							this.ruleForm.fengmian = obj[o];
							this.ro.fengmian = true;
							continue;
						}
						if(o=='mianji'){
							this.ruleForm.mianji = obj[o];
							this.ro.mianji = true;
							continue;
						}
						if(o=='yuezu'){
							this.ruleForm.yuezu = obj[o];
							this.ro.yuezu = true;
							continue;
						}
						if(o=='fangwudizhi'){
							this.ruleForm.fangwudizhi = obj[o];
							this.ro.fangwudizhi = true;
							continue;
						}
						if(o=='zulinshizhang'){
							this.ruleForm.zulinshizhang = obj[o];
							this.ro.zulinshizhang = true;
							continue;
						}
						if(o=='yajin'){
							this.ruleForm.yajin = obj[o];
							this.ro.yajin = true;
							continue;
						}
						if(o=='zongjine'){
							this.ruleForm.zongjine = obj[o];
							this.ro.zongjine = true;
							continue;
						}
						if(o=='yonghuzhanghao'){
							this.ruleForm.yonghuzhanghao = obj[o];
							this.ro.yonghuzhanghao = true;
							continue;
						}
						if(o=='yonghuxingming'){
							this.ruleForm.yonghuxingming = obj[o];
							this.ro.yonghuxingming = true;
							continue;
						}
						if(o=='lianxidianhua'){
							this.ruleForm.lianxidianhua = obj[o];
							this.ro.lianxidianhua = true;
							continue;
						}
						if(o=='fangdongzhanghao'){
							this.ruleForm.fangdongzhanghao = obj[o];
							this.ro.fangdongzhanghao = true;
							continue;
						}
						if(o=='fangdongxingming'){
							this.ruleForm.fangdongxingming = obj[o];
							this.ro.fangdongxingming = true;
							continue;
						}
						if(o=='fangdongshouji'){
							this.ruleForm.fangdongshouji = obj[o];
							this.ro.fangdongshouji = true;
							continue;
						}
						if(o=='hetong'){
							this.ruleForm.hetong = obj[o];
							this.ro.hetong = true;
							continue;
						}
						if(o=='qiandingshijian'){
							this.ruleForm.qiandingshijian = obj[o];
							this.ro.qiandingshijian = true;
							continue;
						}
				}
				





















			}
			
			
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					
					var json = data.data;
					if(json.fangdongzhanghao!=''&&json.fangdongzhanghao && this.$storage.get("role")!="管理员"){
						this.ruleForm.fangdongzhanghao = json.fangdongzhanghao
						this.ro.fangdongzhanghao = true;
					}
					if(json.fangdongxingming!=''&&json.fangdongxingming && this.$storage.get("role")!="管理员"){
						this.ruleForm.fangdongxingming = json.fangdongxingming
						this.ro.fangdongxingming = true;
					}
				} else {
					this.$message.error(data.msg);
				}
			});
			
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `zufanghetong/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
	//解决前台上传图片后台不显示的问题
	let reg=new RegExp('../../../upload','g')//g代表全部
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {
        this.ruleForm.zongjine = this.zongjine








	if(this.ruleForm.fengmian!=null) {
		this.ruleForm.fengmian = this.ruleForm.fengmian.replace(new RegExp(this.$base.url,"g"),"");
	}


























	if(this.ruleForm.hetong!=null) {
		this.ruleForm.hetong = this.ruleForm.hetong.replace(new RegExp(this.$base.url,"g"),"");
	}









var objcross = this.$storage.getObj('crossObj');

      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
       this.$refs["ruleForm"].validate(valid => {
         if (valid) {
		 if(crossrefid && crossuserid) {
			 this.ruleForm.crossuserid = crossuserid;
			 this.ruleForm.crossrefid = crossrefid;
			let params = { 
				page: 1, 
				limit: 10, 
				crossuserid:this.ruleForm.crossuserid,
				crossrefid:this.ruleForm.crossrefid,
			} 
			this.$http({ 
				url: "zufanghetong/page", 
				method: "get", 
				params: params 
			}).then(({ 
				data 
			}) => { 
				if (data && data.code === 0) { 
				       if(data.data.total>=crossoptnum) {
					     this.$message.error(this.$storage.get('tips'));
					       return false;
				       } else {
					 this.$http({
					   url: `zufanghetong/${!this.ruleForm.id ? "save" : "update"}`,
					   method: "post",
					   data: this.ruleForm
					 }).then(({ data }) => {
					   if (data && data.code === 0) {
					     this.$message({
					       message: "操作成功",
					       type: "success",
					       duration: 1500,
					       onClose: () => {
						 this.parent.showFlag = true;
						 this.parent.addOrUpdateFlag = false;
						 this.parent.zufanghetongCrossAddOrUpdateFlag = false;
						 this.parent.search();
						 this.parent.contentStyleChange();
					       }
					     });
					   } else {
					     this.$message.error(data.msg);
					   }
					 });

				       }
				} else { 
				} 
			});
		 } else {
			 this.$http({
			   url: `zufanghetong/${!this.ruleForm.id ? "save" : "update"}`,
			   method: "post",
			   data: this.ruleForm
			 }).then(({ data }) => {
			   if (data && data.code === 0) {
			     this.$message({
			       message: "操作成功",
			       type: "success",
			       duration: 1500,
			       onClose: () => {
				 this.parent.showFlag = true;
				 this.parent.addOrUpdateFlag = false;
				 this.parent.zufanghetongCrossAddOrUpdateFlag = false;
				 this.parent.search();
				 this.parent.contentStyleChange();
			       }
			     });
			   } else {
			     this.$message.error(data.msg);
			   }
			 });
		 }
         }
       });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.zufanghetongCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    fengmianUploadChange(fileUrls) {
	this.ruleForm.fengmian = fileUrls;
    },
    hetongUploadChange(fileUrls) {
	this.ruleForm.hetong = fileUrls;
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: #000;
	  	  font-weight: 600;
	  	  width: 140px;
	  	  font-size: 16px;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 140px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  border: 2px solid #BEBEBE;
	  	  border-radius: 4px;
	  	  padding: 0 12px;
	  	  outline: none;
	  	  color: #000;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border: 2px solid #BEBEBE;
	  	  border-radius: 4px;
	  	  padding: 0 10px;
	  	  outline: none;
	  	  color: #000;
	  	  width: 200px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border: 2px solid #BEBEBE;
	  	  border-radius: 4px;
	  	  padding: 0 10px 0 30px;
	  	  outline: none;
	  	  color: #000;
	  	  width: 200px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  	  border: 2px dashed #BEBEBE;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #000;
	  	  width: 150px;
	  	  font-size: 32px;
	  	  line-height: 150px;
	  	  text-align: center;
	  	  height: 150px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  border: 2px dashed #BEBEBE;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #000;
	  	  width: 150px;
	  	  font-size: 32px;
	  	  line-height: 150px;
	  	  text-align: center;
	  	  height: 150px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  border: 2px dashed #BEBEBE;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #000;
	  	  width: 150px;
	  	  font-size: 32px;
	  	  line-height: 150px;
	  	  text-align: center;
	  	  height: 150px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  border: 2px solid #BEBEBE;
	  	  border-radius: 4px;
	  	  padding: 12px;
	  	  outline: none;
	  	  color: #000;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 120px;
	  	}
</style>
