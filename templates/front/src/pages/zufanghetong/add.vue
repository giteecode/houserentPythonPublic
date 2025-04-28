<template>
<div :style='{"width":"1200px","padding":"20px","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.302)","margin":"10px auto","position":"relative","background":"#fff"}'>
    <el-form
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
    >
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="合同编号" prop="hetongbianhao">
              <el-input v-model="ruleForm.hetongbianhao" placeholder="合同编号" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="小区" prop="xiaoqu">
            <el-input v-model="ruleForm.xiaoqu" 
                placeholder="小区" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="户型" prop="huxing">
            <el-input v-model="ruleForm.huxing" 
                placeholder="户型" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="封面" prop="fengmian">
            <file-upload
            tip="点击上传封面"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.fengmian?ruleForm.fengmian:''"
            @change="fengmianUploadChange"
            ></file-upload>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="面积" prop="mianji">
            <el-input v-model="ruleForm.mianji" 
                placeholder="面积" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="月租（元）" prop="yuezu">
            <el-input v-model="ruleForm.yuezu" 
                placeholder="月租（元）" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="房屋地址" prop="fangwudizhi">
            <el-input v-model="ruleForm.fangwudizhi" 
                placeholder="房屋地址" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="租赁时长" prop="zulinshizhang">
            <el-input v-model="ruleForm.zulinshizhang" 
                placeholder="租赁时长" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="押金" prop="yajin">
            <el-input v-model="ruleForm.yajin" 
                placeholder="押金" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="总金额" prop="zongjine">
              <el-input v-model="zongjine" placeholder="总金额" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="用户账号" prop="yonghuzhanghao">
            <el-input v-model="ruleForm.yonghuzhanghao" 
                placeholder="用户账号" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="用户姓名" prop="yonghuxingming">
            <el-input v-model="ruleForm.yonghuxingming" 
                placeholder="用户姓名" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="联系电话" prop="lianxidianhua">
            <el-input v-model="ruleForm.lianxidianhua" 
                placeholder="联系电话" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="房东账号" prop="fangdongzhanghao">
            <el-input v-model="ruleForm.fangdongzhanghao" 
                placeholder="房东账号" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="房东姓名" prop="fangdongxingming">
            <el-input v-model="ruleForm.fangdongxingming" 
                placeholder="房东姓名" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="房东手机" prop="fangdongshouji">
            <el-input v-model="ruleForm.fangdongshouji" 
                placeholder="房东手机" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="合同" prop="hetong">
            <file-upload
            tip="点击上传合同"
            action="file/upload"
            :limit="1"
            :multiple="true"
            :fileUrls="ruleForm.hetong?ruleForm.hetong:''"
            @change="hetongUploadChange"
            ></file-upload>
          </el-form-item>  
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="签订时间" prop="qiandingshijian" >
              <el-date-picker
                  value-format="yyyy-MM-dd HH:mm:ss"
                  v-model="ruleForm.qiandingshijian" 
                  type="datetime"
                  placeholder="签订时间">
              </el-date-picker>
          </el-form-item>

      <el-form-item :style='{"padding":"0","margin":"0"}'>
        <el-button :style='{"border":"1px dashed","cursor":"pointer","padding":"0","margin":"0 20px 0 0","color":"#CD9571","outline":"none","borderRadius":"0","background":"transparent","borderWidth":"0 2px","width":"128px","lineHeight":"60px","fontSize":"14px","height":"60px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"1px dashed #000","cursor":"pointer","padding":"0","margin":"0","color":"#000","outline":"none","borderRadius":"0","background":"transparent","borderWidth":"0 2px","width":"128px","lineHeight":"60px","fontSize":"14px","height":"60px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        id: '',
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
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
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          fangwudizhi: [
          ],
          zulinshizhang: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          yajin: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          zongjine: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
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
        },
      };
    },
    computed: {



        zongjine:{

            get: function () {
                return 1*this.ruleForm.yuezu*this.ruleForm.zulinshizhang+parseFloat(this.ruleForm.yajin==""?0:this.ruleForm.yajin)
            }
        },
    },
    created() {
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.ruleForm.qiandingshijian = this.getCurDateTime()
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='hetongbianhao'){
              this.ruleForm.hetongbianhao = obj[o];
              continue;
            }
            if(o=='xiaoqu'){
              this.ruleForm.xiaoqu = obj[o];
              continue;
            }
            if(o=='huxing'){
              this.ruleForm.huxing = obj[o];
              continue;
            }
            if(o=='fengmian'){
              this.ruleForm.fengmian = obj[o].split(",")[0];
              continue;
            }
            if(o=='mianji'){
              this.ruleForm.mianji = obj[o];
              continue;
            }
            if(o=='yuezu'){
              this.ruleForm.yuezu = obj[o];
              continue;
            }
            if(o=='fangwudizhi'){
              this.ruleForm.fangwudizhi = obj[o];
              continue;
            }
            if(o=='zulinshizhang'){
              this.ruleForm.zulinshizhang = obj[o];
              continue;
            }
            if(o=='yajin'){
              this.ruleForm.yajin = obj[o];
              continue;
            }
            if(o=='zongjine'){
              this.ruleForm.zongjine = obj[o];
              continue;
            }
            if(o=='yonghuzhanghao'){
              this.ruleForm.yonghuzhanghao = obj[o];
              continue;
            }
            if(o=='yonghuxingming'){
              this.ruleForm.yonghuxingming = obj[o];
              continue;
            }
            if(o=='lianxidianhua'){
              this.ruleForm.lianxidianhua = obj[o];
              continue;
            }
            if(o=='fangdongzhanghao'){
              this.ruleForm.fangdongzhanghao = obj[o];
              continue;
            }
            if(o=='fangdongxingming'){
              this.ruleForm.fangdongxingming = obj[o];
              continue;
            }
            if(o=='fangdongshouji'){
              this.ruleForm.fangdongshouji = obj[o];
              continue;
            }
            if(o=='hetong'){
              this.ruleForm.hetong = obj[o];
              continue;
            }
            if(o=='qiandingshijian'){
              this.ruleForm.qiandingshijian = obj[o];
              continue;
            }
          }
        }
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
            if(json.fangdongzhanghao!=''&&json.fangdongzhanghao){
                this.ruleForm.fangdongzhanghao = json.fangdongzhanghao
            }
            if(json.fangdongxingming!=''&&json.fangdongxingming){
                this.ruleForm.fangdongxingming = json.fangdongxingming
            }
          }
        });
      },

    // 多级联动参数
      // 多级联动参数
      info(id) {
        this.$http.get('zufanghetong/detail/${id}', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

          this.ruleForm.zongjine = this.zongjine
        //更新跨表属性
        var crossuserid;
        var crossrefid;
        var crossoptnum;
        this.$refs["ruleForm"].validate(valid => {
          if(valid) {
            if(this.type=='cross'){
                 var statusColumnName = localStorage.getItem('statusColumnName');
                 var statusColumnValue = localStorage.getItem('statusColumnValue');
                 if(statusColumnName && statusColumnName!='') {
                     var obj = JSON.parse(localStorage.getItem('crossObj'));
                     if(!statusColumnName.startsWith("[")) {
                         for (var o in obj){
                             if(o==statusColumnName){
                                 obj[o] = statusColumnValue;
                             }
                         }
                         var table = localStorage.getItem('crossTable');
                         this.$http.post(table+'/update', obj).then(res => {});
                     } else {
                            crossuserid=Number(localStorage.getItem('userid'));
                            crossrefid=obj['id'];
                            crossoptnum=localStorage.getItem('statusColumnName');
                            crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                     }
                 }
            }
            if(crossrefid && crossuserid) {
                 this.ruleForm.crossuserid=crossuserid;
                 this.ruleForm.crossrefid=crossrefid;
                 var params = {
                     page: 1,
                     limit: 10,
                     crossuserid:crossuserid,
                     crossrefid:crossrefid,
                 }
                 this.$http.get('zufanghetong/list', {
                  params: params
                 }).then(res => {
                     if(res.data.data.total>=crossoptnum) {
                         this.$message({
                          message: localStorage.getItem('tips'),
                          type: 'success',
                          duration: 1500,
                         });
                          return false;
                     } else {
                         // 跨表计算


                          this.$http.post('zufanghetong/add', this.ruleForm).then(res => {
                              if (res.data.code == 0) {
                                  this.$message({
                                      message: '操作成功',
                                      type: 'success',
                                      duration: 1500,
                                      onClose: () => {
                                          this.$router.go(-1);
                                      }
                                  });
                              } else {
                                  this.$message({
                                      message: res.data.msg,
                                      type: 'error',
                                      duration: 1500
                                  });
                              }
                          });
                     }
                 });
             } else {


                  this.$http.post('zufanghetong/add', this.ruleForm).then(res => {
                     if (res.data.code == 0) {
                          this.$message({
                              message: '操作成功',
                              type: 'success',
                              duration: 1500,
                              onClose: () => {
                                  this.$router.go(-1);
                              }
                          });
                      } else {
                          this.$message({
                              message: res.data.msg,
                              type: 'error',
                              duration: 1500
                          });
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
        this.$router.go(-1);
      },
      fengmianUploadChange(fileUrls) {
          this.ruleForm.fengmian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
      hetongUploadChange(fileUrls) {
          this.ruleForm.hetong = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #000;
	  font-weight: 500;
	  width: 80px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 80px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 1px solid #CD9571;
	  border-radius: 0;
	  padding: 0 12px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  color: #000;
	  background: #ebebeb;
	  width: 400px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border: 1px solid #CD9571;
	  border-radius: 0;
	  padding: 0 10px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  color: #000;
	  background: #ebebeb;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border: 1px solid #CD9571;
	  border-radius: 0;
	  padding: 0 10px 0 30px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  color: #000;
	  background: #ebebeb;
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
	  border: 1px dashed #CD9571;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #CD9571;
	  background: #ebebeb;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  border: 1px dashed #CD9571;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #CD9571;
	  background: #ebebeb;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  border: 1px dashed #CD9571;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #CD9571;
	  background: #ebebeb;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 1px solid #CD9571;
	  border-radius: 0;
	  padding: 12px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  color: #000;
	  background: #ebebeb;
	  width: 400px;
	  font-size: 14px;
	  height: 120px;
	}
</style>
