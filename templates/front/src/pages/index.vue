<template>
    <div class="main-containers">


        <div class="body-containers"
            :style='"horizontal" == "vertical" ? {"minHeight":"100vh","padding":"64px 0 0","margin":"0 0 0 210px","position":"relative","background":"rgba(64, 158, 255, .3)","display":"block"} : {"padding":"0","margin":"0","position":"relative","background":"url() fixed repeat-y,#fff"}'>

            <div class="menu-preview"
                :style='{"width":"100%","background":"white","opacity":".85","height":"80px","position":"fixed","top":"0","z-index":"999","overflow":"hidden"}'>
                <div class="logo" v-if="true"
                    :style='{"fontSize":"18px","color":"#1f7ae1","height":"100%","width":"20%","lineHeight":"80px","textAlign":"center","background":"none"}'>
                    Python房屋租赁系统</div>
                <div class="r-nav" style="width: 100%;">
                    <el-menu class="el-menu-horizontal-demo"
                        :style='{"border":0,"padding":"0","listStyle":"none","margin":"0","background":"#1f7ae1","opacity":".85","display":"flex","position":"relative","justifyContent":"center"}'
                        :default-active="activeIndex" :unique-opened="true" mode="horizontal" :router="true"
                        @select="handleSelect">
                        <el-image v-if="false"
                            :style='{"width":"44px","margin":"8px 10px 8px 0","objectFit":"cover","borderRadius":"100%","float":"left","height":"44px"}'
                            src="http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg" fit="cover">
                        </el-image>
                        <el-menu-item v-for="(menu, index) in menuList" :index="index + ''" :key="index"
                            :route="menu.url">
                            <i v-if="true"
                                :style='{"padding":"0 10px","margin":"0","color":"inherit","width":"14px","lineHeight":"60px","fontSize":"20px","height":"60px"}'
                                :class="iconArr[index]"></i>
                            <span
                                :style='{"padding":"0 10px","lineHeight":"60px","fontSize":"16px","color":"inherit","height":"60px"}'>{{menu.name}}</span>
                        </el-menu-item>
<!--                        <el-menu-item @click="goChat">-->
<!--                            <i v-if="true" :style='{"padding":"0 10px","margin":"0","color":"inherit","width":"14px","lineHeight":"60px","fontSize":"16px","height":"60px"}' class="el-icon-service"></i>-->
<!--                            <span :style='{"padding":"0 10px","lineHeight":"60px","fontSize":"16px","color":"inherit","height":"60px"}'>客服</span>-->
<!--                        </el-menu-item>-->
<!--                        <el-menu-item :index="menuList.length + 1 + ''" @click="goMenu('/index/cart')">-->
<!--                            <i v-if="true" :style='{"padding":"0 10px","margin":"0","color":"inherit","width":"14px","lineHeight":"60px","fontSize":"16px","height":"60px"}' class="el-icon-shopping-cart-2"></i>-->
<!--                            <span :style='{"padding":"0 10px","lineHeight":"60px","fontSize":"16px","color":"inherit","height":"60px"}'>购物车</span>-->
<!--                        </el-menu-item>-->
                        <el-menu-item :index="menuList.length + 2 + ''" v-if="Token" @click="goMenu('/index/center')">
                            <i v-if="true"
                                :style='{"padding":"0 10px","margin":"0","color":"inherit","width":"14px","lineHeight":"60px","fontSize":"20px","height":"60px"}'
                                class="el-icon-user"></i>
                            <span
                                :style='{"padding":"0 10px","lineHeight":"60px","fontSize":"16px","color":"inherit","height":"60px"}'>个人中心</span>
                        </el-menu-item>


                    </el-menu>
                    <div style="line-height: 80px;">

                        <el-button v-if="!Token" @click="toLogin()"
                            :style='{"padding":"0 12px","margin":"0 0 0 10px","color":"#fff","borderRadius":"2px","background":"#999999","display":"inline-block","fontSize":"14px","lineHeight":"32px","height":"32px"}'>
                            登录/注册</el-button>
                        <el-button v-if="Token" @click="logout"
                            :style='{"padding":"0 12px","margin":"0 0 0 10px","color":"#666","borderRadius":"2px","background":"#f4f4f5","display":"inline-block","fontSize":"14px","lineHeight":"32px","height":"32px"}'>
                            退出</el-button>
                    </div>

                </div>
            </div>


            <div class="banner-preview" :style='{"width":"100%","margin":"0 0 20px","height":"100%"}'>
                <el-carousel :style='{"width":"100%","margin":"0 auto","height":"100%"}' trigger="click"
                    indicator-position="inside" arrow="always" type="default" direction="horizontal" height="600px"
                    :autoplay="true" :interval="3000" :loop="true">
                    <el-carousel-item :style='{"width":"100%","height":"100%"}' v-for="item in carouselList"
                        :key="item.id">
                        <el-image :style='{"objectFit":"cover","width":"100%","height":"100%"}'
                            :src="baseUrl + item.value" fit="cover"></el-image>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <router-view></router-view>

            <div class="bottom-preview"
                :style='{"padding":"20px 0","alignItems":"center","background":"#000","flexDirection":"column","display":"flex","width":"100%","justifyContent":"center","height":"100px"}'>
                <img :style='{"width":"0","objectFit":"cover","borderRadius":"100%","display":"block","height":"0"}'
                    src="http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg">
                <div :style='{"margin":"10px 0 0","fontSize":"14px","lineHeight":"28px","color":"#333"}'></div>
                <div :style='{"margin":"10px 0 0","fontSize":"14px","lineHeight":"28px","color":"#333"}'></div>
                <div :style='{"margin":"10px 0 0","fontSize":"14px","lineHeight":"28px","color":"#333"}'></div>
            </div>
        </div>
        <el-dialog title="客服" :visible.sync="chatFormVisible" width="600px" :before-close="chatClose">
            <div class="chat-content"
                style="background: #f5f5f5;padding: 10px;box-sizing: border-box;overflow-y: scroll;max-height: 40vh;min-height: 40vh;">
                <div :class="{'right-content': item.reply == '' || item.reply == null, 'left-content': item.ask == '' || item.ask == null}"
                    v-for="item in chatList" :key="item.id">
                    <el-tag :type="(item.ask == '' || item.ask == null) ? 'warning' : 'success'" style="margin: 10px;">
                        {{(item.ask == '' || item.ask == null) ? item.reply : item.ask}}
                    </el-tag>
                </div>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-input v-model="form.ask" placeholder="请输入内容" style="width: calc(100% - 80px);float: left;">
                </el-input>
                <el-button type="primary" @click="addChat">发送</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        data() {
            return {
                activeIndex: '0',
                roleMenus: [{ "backMenu": [{ "child": [{ "appFrontIcon": "cuIcon-present", "buttons": ["新增", "查看", "修改", "删除"], "menu": "用户", "menuJump": "列表", "tableName": "yonghu" }], "menu": "用户管理" }, { "child": [{ "appFrontIcon": "cuIcon-copy", "buttons": ["新增", "查看", "修改", "删除"], "menu": "房东", "menuJump": "列表", "tableName": "fangdong" }], "menu": "房东管理" }, { "child": [{ "appFrontIcon": "cuIcon-newshot", "buttons": ["查看", "修改", "删除", "装修风格:饼", "爬取数据", "装修风格", "户型", "小区名称", "区域", "户型统计", "区域统计", "朝向统计", "首页总数", "首页统计"], "menu": "房源信息", "menuJump": "列表", "tableName": "fangyuan" }], "menu": "房源信息管理" }, { "child": [{ "appFrontIcon": "cuIcon-addressbook", "buttons": ["新增", "查看", "修改", "删除"], "menu": "户型", "menuJump": "列表", "tableName": "huxing" }], "menu": "户型管理" }, { "child": [{ "appFrontIcon": "cuIcon-time", "buttons": ["新增", "查看", "修改", "删除"], "menu": "装修", "menuJump": "列表", "tableName": "zhuangxiu" }], "menu": "装修管理" }, { "child": [{ "appFrontIcon": "cuIcon-flashlightopen", "buttons": ["查看", "修改", "删除", "户型统计", "装修统计"], "menu": "租房房源", "menuJump": "列表", "tableName": "zufangfangyuan" }], "menu": "租房房源管理" }, { "child": [{ "appFrontIcon": "cuIcon-attentionfavor", "buttons": ["查看", "修改", "删除"], "menu": "租房预约", "menuJump": "列表", "tableName": "zufangyuyue" }], "menu": "租房预约管理" }, { "child": [{ "appFrontIcon": "cuIcon-shop", "buttons": ["查看", "修改", "删除"], "menu": "租房合同", "menuJump": "列表", "tableName": "zufanghetong" }], "menu": "租房合同管理" }, { "child": [{ "appFrontIcon": "cuIcon-rank", "buttons": ["查看", "修改"], "menu": "轮播图管理", "tableName": "config" }, { "appFrontIcon": "cuIcon-news", "buttons": ["新增", "查看", "修改", "删除"], "menu": "行业新闻", "tableName": "news" }], "menu": "系统管理" }], "frontMenu": [{ "child": [{ "appFrontIcon": "cuIcon-copy", "buttons": ["查看", "预约"], "menu": "房源信息", "menuJump": "列表", "tableName": "fangyuan" }], "menu": "房源信息模块" }, { "child": [{ "appFrontIcon": "cuIcon-taxi", "buttons": ["查看", "预约"], "menu": "租房房源列表", "menuJump": "列表", "tableName": "zufangfangyuan" }], "menu": "租房房源模块" }], "hasBackLogin": "是", "hasBackRegister": "否", "hasFrontLogin": "否", "hasFrontRegister": "否", "roleName": "管理员", "tableName": "users" }, { "backMenu": [{ "child": [{ "appFrontIcon": "cuIcon-attentionfavor", "buttons": ["查看", "删除"], "menu": "租房预约", "menuJump": "列表", "tableName": "zufangyuyue" }], "menu": "租房预约管理" }, { "child": [{ "appFrontIcon": "cuIcon-shop", "buttons": ["查看", "删除", "审核", "支付"], "menu": "租房合同", "menuJump": "列表", "tableName": "zufanghetong" }], "menu": "租房合同管理" }], "frontMenu": [{ "child": [{ "appFrontIcon": "cuIcon-copy", "buttons": ["查看", "预约"], "menu": "房源信息", "menuJump": "列表", "tableName": "fangyuan" }], "menu": "房源信息模块" }, { "child": [{ "appFrontIcon": "cuIcon-taxi", "buttons": ["查看", "预约"], "menu": "租房房源列表", "menuJump": "列表", "tableName": "zufangfangyuan" }], "menu": "租房房源模块" }], "hasBackLogin": "否", "hasBackRegister": "否", "hasFrontLogin": "是", "hasFrontRegister": "是", "roleName": "用户", "tableName": "yonghu" }, { "backMenu": [{ "child": [{ "appFrontIcon": "cuIcon-flashlightopen", "buttons": ["新增", "查看", "修改", "删除", "户型统计", "装修统计"], "menu": "租房房源", "menuJump": "列表", "tableName": "zufangfangyuan" }], "menu": "租房房源管理" }, { "child": [{ "appFrontIcon": "cuIcon-attentionfavor", "buttons": ["查看", "删除", "审核", "合同"], "menu": "租房预约", "menuJump": "列表", "tableName": "zufangyuyue" }], "menu": "租房预约管理" }, { "child": [{ "appFrontIcon": "cuIcon-shop", "buttons": ["查看", "删除"], "menu": "租房合同", "menuJump": "列表", "tableName": "zufanghetong" }], "menu": "租房合同管理" }], "frontMenu": [{ "child": [{ "appFrontIcon": "cuIcon-copy", "buttons": ["查看", "预约"], "menu": "房源信息", "menuJump": "列表", "tableName": "fangyuan" }], "menu": "房源信息模块" }, { "child": [{ "appFrontIcon": "cuIcon-taxi", "buttons": ["查看", "预约"], "menu": "租房房源列表", "menuJump": "列表", "tableName": "zufangfangyuan" }], "menu": "租房房源模块" }], "hasBackLogin": "是", "hasBackRegister": "是", "hasFrontLogin": "否", "hasFrontRegister": "否", "roleName": "房东", "tableName": "fangdong" }],
                baseUrl: '',
                carouselList: [],
                menuList: [],
                form: {
                    ask: '',
                    userid: localStorage.getItem('userid')
                },
                Token: localStorage.getItem('Token'),
                timer: '',
                iconArr: [
                    'el-icon-star-off',
                    'el-icon-goods',
                    'el-icon-warning',
                    'el-icon-question',
                    'el-icon-info',
                    'el-icon-help',
                    'el-icon-picture-outline-round',
                    'el-icon-camera-solid',
                    'el-icon-video-camera-solid',
                    'el-icon-video-camera',
                    'el-icon-bell',
                    'el-icon-s-cooperation',
                    'el-icon-s-order',
                    'el-icon-s-platform',
                    'el-icon-s-operation',
                    'el-icon-s-promotion',
                    'el-icon-s-release',
                    'el-icon-s-ticket',
                    'el-icon-s-management',
                    'el-icon-s-open',
                    'el-icon-s-shop',
                    'el-icon-s-marketing',
                    'el-icon-s-flag',
                    'el-icon-s-comment',
                    'el-icon-s-finance',
                    'el-icon-s-claim',
                    'el-icon-s-opportunity',
                    'el-icon-s-data',
                    'el-icon-s-check'
                ],
            }
        },
        created() {
            this.baseUrl = this.$config.baseUrl;
            this.menuList = this.$config.indexNav;
            this.getCarousel();
        },
        mounted() {
            this.activeIndex = localStorage.getItem('keyPath') || '0';
        },
        watch: {
            $route(newValue) {
                let that = this
                let url = window.location.href
                let arr = url.split('#')
                for (let x in this.menuList) {
                    if (newValue.path == this.menuList[x].url) {
                        this.activeIndex = x
                    }
                }
                this.Token = localStorage.getItem('Token')
            },
        },
        methods: {
            handleSelect(keyPath) {
                if (keyPath) {
                    localStorage.setItem('keyPath', keyPath)
                }
            },
            toLogin() {
                this.$router.push('/login');
            },
            logout() {
                localStorage.clear();
                Vue.http.headers.common['Token'] = "";
                this.$router.push('/index/home');
                this.activeIndex = '0'
                localStorage.setItem('keyPath', this.activeIndex)
                this.Token = ''
                this.$forceUpdate()
                this.$message({
                    message: '登出成功',
                    type: 'success',
                    duration: 1000,
                });
            },
            getCarousel() {
                this.$http.get('config/list', { params: { page: 1, limit: 3 } }).then(res => {
                    if (res.data.code == 0) {
                        this.carouselList = res.data.data.list;
                    }
                });
            },
            goBackend() {
                window.open(`${this.$config.baseUrl}admin/dist/index.html`, "_blank");
            },
            goMenu(path) {
                if (!localStorage.getItem('Token')) {
                    this.toLogin();
                } else {
                    this.$router.push(path);
                }
            },
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .r-nav {
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgb(31, 122, 225);
    }

    :root {
        --color: #46166B;
        --color1: #46166Bb9;
    }

    .logo_con {
        position: relative;
    }

    .logo_con {
        background-color: #46166b !important;
    }

    .logo_con::after {
        content: "";
        position: absolute;
        left: 100%;
        top: 0;
        width: 0;
        height: 0;
        border-width: 38px 76px 81.5px 0;
        border-style: solid;
        border-color: transparent transparent #46166B;
        transform: rotateX(180deg);
        transition: all 0.1s linear;
        z-index: 999;
    }

    .logo_img {
        /* background-image: url(./logo.png); */
        background-position: center center;
        background-size: 100% 100%;
        border-radius: 50%;
    }

    .menu-preview {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    .menu-preview {
        .el-scrollbar {
            height: 100%;

            & /deep/ .scrollbar-wrapper {
                overflow-x: hidden;
            }
        }
    }


    .menu-preview .el-menu-horizontal-demo .el-menu-item {
        cursor: pointer;
        border: 0;
        padding: 0 20px;
        color: #fff;
        white-space: nowrap;
        display: flex;
        font-size: 14px;
        line-height: 80px;
        background: none;
        align-items: center;
        position: relative;
        list-style: none;
        height: 80px;
        font-weight: bold;
    }

    .menu-preview .el-menu-horizontal-demo .el-menu-item:hover {
        cursor: pointer;
        border: 0;
        padding: 0 20px;
        color: darkcyan;
        white-space: nowrap;
        font-size: 18px;
        line-height: 80px;
        position: relative;
        height: 80px;
        border-bottom: 3px solid darkcyan !important;
        font-weight: bold;

    }

    .menu-preview .el-menu-horizontal-demo .el-menu-item.is-active {
        cursor: pointer;
        border: 0;
        padding: 0 20px;
        color: darkcyan;
        white-space: nowrap;
        /* background: url(http://codegen.caihongy.cn/20230111/2184b24053404f55a468cfd5a24ba3f1.png) no-repeat center 60px; */
        font-size: 18px;
        line-height: 80px;
        position: relative;
        list-style: none;
        height: 80px;
        border-bottom: 3px solid darkcyan !important;
        font-weight: bold;

    }

    .banner-preview {
        .el-carousel /deep/ .el-carousel__indicator button {
            width: 0;
            height: 0;
            display: none;
        }
    }

    .banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--left {
        width: 36px;
        font-size: 12px;
        height: 36px;
    }

    .banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--left:hover {
        background: red;
    }

    .banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--right {
        width: 36px;
        font-size: 12px;
        height: 36px;
    }

    .banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--right:hover {
        background: red;
    }

    .banner-preview .el-carousel /deep/ .el-carousel__indicators {
        padding: 0;
        margin: 0 0 10px;
        z-index: 2;
        position: absolute;
        list-style: none;
    }

    .banner-preview .el-carousel /deep/ .el-carousel__indicators li {
        border-radius: 10px;
        padding: 0;
        margin: 0 4px;
        background: #fff;
        display: inline-block;
        width: 12px;
        opacity: 0.4;
        transition: 0.3s;
        height: 12px;
    }

    .banner-preview .el-carousel /deep/ .el-carousel__indicators li:hover {
        padding: 0;
        margin: 0 4px;
        background: #fff;
        display: inline-block;
        width: 24px;
        opacity: 0.7;
        height: 12px;
    }

    .banner-preview .el-carousel /deep/ .el-carousel__indicators li.is-active {
        padding: 0;
        margin: 0 4px;
        background: #fff;
        display: inline-block;
        width: 24px;
        opacity: 1;
        height: 12px;
    }

    .chat-content {
        .left-content {
            width: 100%;
            text-align: left;
        }

        .right-content {
            width: 100%;
            text-align: right;
        }
    }
</style>
