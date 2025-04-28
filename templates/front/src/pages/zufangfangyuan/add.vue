<template>
<div :style='{"width":"1200px","padding":"20px","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.302)","margin":"10px auto","position":"relative","background":"#fff"}'>
    <el-form
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
    >
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="标题" prop="biaoti">
            <el-input v-model="ruleForm.biaoti" 
                placeholder="标题" clearable ></el-input>
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
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="月租" prop="yuezu">
            <el-input v-model="ruleForm.yuezu" 
                placeholder="月租" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}'  label="户型" prop="huxing">
            <el-select v-model="ruleForm.huxing" placeholder="请选择户型" >
              <el-option
                  v-for="(item,index) in huxingOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="楼层" prop="louceng">
            <el-input v-model="ruleForm.louceng" 
                placeholder="楼层" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="面积" prop="mianji">
            <el-input v-model="ruleForm.mianji" 
                placeholder="面积" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}'  label="装修" prop="zhuangxiu">
            <el-select v-model="ruleForm.zhuangxiu" placeholder="请选择装修" >
              <el-option
                  v-for="(item,index) in zhuangxiuOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="朝向" prop="chaoxiang">
            <el-input v-model="ruleForm.chaoxiang" 
                placeholder="朝向" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="竣工" prop="jungong">
            <el-input v-model="ruleForm.jungong" 
                placeholder="竣工" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="小区" prop="xiaoqu">
            <el-input v-model="ruleForm.xiaoqu" 
                placeholder="小区" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="区域" prop="quyu">
            <el-input v-model="ruleForm.quyu" 
                placeholder="区域" clearable ></el-input>
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
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="房屋地址" prop="fangwudizhi">
            <el-input v-model="ruleForm.fangwudizhi" 
                placeholder="房屋地址" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="详情" prop="xiangqing">
            <editor 
                :style='{"padding":"0","boxShadow":"0 0 0px rgba(75,223,201,.5)","margin":"0","borderColor":"#CD9571","backgroundColor":"#fff","borderRadius":"0","borderWidth":"1px","width":"100%","borderStyle":"solid","height":"auto"}'
                v-model="ruleForm.xiangqing" 
                class="editor" 
                action="file/upload">
            </editor>
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
          biaoti: '',
          fengmian: '',
          yuezu: '',
          huxing: '',
          louceng: '',
          mianji: '',
          zhuangxiu: '',
          chaoxiang: '',
          jungong: '',
          xiaoqu: '',
          quyu: '',
          fangdongzhanghao: '',
          fangdongxingming: '',
          fangdongshouji: '',
          fangwudizhi: '',
          xiangqing: '',
        },
        huxingOptions: [],
        zhuangxiuOptions: [],
        rules: {
          biaoti: [
          ],
          fengmian: [
          ],
          yuezu: [
          ],
          huxing: [
          ],
          louceng: [
          ],
          mianji: [
          ],
          zhuangxiu: [
          ],
          chaoxiang: [
          ],
          jungong: [
          ],
          xiaoqu: [
          ],
          quyu: [
          ],
          fangdongzhanghao: [
          ],
          fangdongxingming: [
          ],
          fangdongshouji: [
          ],
          fangwudizhi: [
          ],
          xiangqing: [
          ],
          clicktime: [
          ],
          clicknum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
        },
      };
    },
    computed: {



    },
    created() {
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
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
            if(o=='biaoti'){
              this.ruleForm.biaoti = obj[o];
              continue;
            }
            if(o=='fengmian'){
              this.ruleForm.fengmian = obj[o].split(",")[0];
              continue;
            }
            if(o=='yuezu'){
              this.ruleForm.yuezu = obj[o];
              continue;
            }
            if(o=='huxing'){
              this.ruleForm.huxing = obj[o];
              continue;
            }
            if(o=='louceng'){
              this.ruleForm.louceng = obj[o];
              continue;
            }
            if(o=='mianji'){
              this.ruleForm.mianji = obj[o];
              continue;
            }
            if(o=='zhuangxiu'){
              this.ruleForm.zhuangxiu = obj[o];
              continue;
            }
            if(o=='chaoxiang'){
              this.ruleForm.chaoxiang = obj[o];
              continue;
            }
            if(o=='jungong'){
              this.ruleForm.jungong = obj[o];
              continue;
            }
            if(o=='xiaoqu'){
              this.ruleForm.xiaoqu = obj[o];
              continue;
            }
            if(o=='quyu'){
              this.ruleForm.quyu = obj[o];
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
            if(o=='fangwudizhi'){
              this.ruleForm.fangwudizhi = obj[o];
              continue;
            }
            if(o=='xiangqing'){
              this.ruleForm.xiangqing = obj[o];
              continue;
            }
            if(o=='clicktime'){
              this.ruleForm.clicktime = obj[o];
              continue;
            }
            if(o=='clicknum'){
              this.ruleForm.clicknum = obj[o];
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
            if(json.fangdongshouji!=''&&json.fangdongshouji){
                this.ruleForm.fangdongshouji = json.fangdongshouji
            }
          }
        });
        this.$http.get('option/huxing/huxing', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.huxingOptions = res.data.data;
          }
        });
        this.$http.get('option/zhuangxiu/zhuangxiu', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.zhuangxiuOptions = res.data.data;
          }
        });
      },

    // 多级联动参数
      // 多级联动参数
      info(id) {
        this.$http.get('zufangfangyuan/detail/${id}', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

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
                 this.$http.get('zufangfangyuan/list', {
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


                          this.$http.post('zufangfangyuan/add', this.ruleForm).then(res => {
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


                  this.$http.post('zufangfangyuan/add', this.ruleForm).then(res => {
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
