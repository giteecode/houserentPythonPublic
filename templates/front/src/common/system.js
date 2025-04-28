export function isAuth(tableName, key) {
  let role = localStorage.getItem("UserTableName");
  let menus = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-present","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["新增","查看","修改","删除"],"menu":"房东","menuJump":"列表","tableName":"fangdong"}],"menu":"房东管理"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看","修改","删除","装修风格:饼","爬取数据","装修风格","户型","小区名称","区域","户型统计","区域统计","朝向统计","首页总数","首页统计"],"menu":"房源信息","menuJump":"列表","tableName":"fangyuan"}],"menu":"房源信息管理"},{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["新增","查看","修改","删除"],"menu":"户型","menuJump":"列表","tableName":"huxing"}],"menu":"户型管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["新增","查看","修改","删除"],"menu":"装修","menuJump":"列表","tableName":"zhuangxiu"}],"menu":"装修管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看","修改","删除","户型统计","装修统计"],"menu":"租房房源","menuJump":"列表","tableName":"zufangfangyuan"}],"menu":"租房房源管理"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","修改","删除"],"menu":"租房预约","menuJump":"列表","tableName":"zufangyuyue"}],"menu":"租房预约管理"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["查看","修改","删除"],"menu":"租房合同","menuJump":"列表","tableName":"zufanghetong"}],"menu":"租房合同管理"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"行业新闻","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看","预约"],"menu":"房源信息","menuJump":"列表","tableName":"fangyuan"}],"menu":"房源信息模块"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看","预约"],"menu":"租房房源列表","menuJump":"列表","tableName":"zufangfangyuan"}],"menu":"租房房源模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","删除"],"menu":"租房预约","menuJump":"列表","tableName":"zufangyuyue"}],"menu":"租房预约管理"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["查看","删除","审核","支付"],"menu":"租房合同","menuJump":"列表","tableName":"zufanghetong"}],"menu":"租房合同管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看","预约"],"menu":"房源信息","menuJump":"列表","tableName":"fangyuan"}],"menu":"房源信息模块"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看","预约"],"menu":"租房房源列表","menuJump":"列表","tableName":"zufangfangyuan"}],"menu":"租房房源模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["新增","查看","修改","删除","户型统计","装修统计"],"menu":"租房房源","menuJump":"列表","tableName":"zufangfangyuan"}],"menu":"租房房源管理"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","删除","审核","合同"],"menu":"租房预约","menuJump":"列表","tableName":"zufangyuyue"}],"menu":"租房预约管理"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["查看","删除"],"menu":"租房合同","menuJump":"列表","tableName":"zufanghetong"}],"menu":"租房合同管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看","预约"],"menu":"房源信息","menuJump":"列表","tableName":"fangyuan"}],"menu":"房源信息模块"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看","预约"],"menu":"租房房源列表","menuJump":"列表","tableName":"zufangfangyuan"}],"menu":"租房房源模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"房东","tableName":"fangdong"}];
  for(let i=0;i<menus.length;i++){
    if(menus[i].tableName==role){
      for(let j=0;j<menus[i].frontMenu.length;j++){
          for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
            if(tableName==menus[i].frontMenu[j].child[k].tableName){
              let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
              return buttons.indexOf(key) !== -1 || false
            }
          }
      }
    }
  }
  return false;
}

/**
 *  * 获取当前时间（yyyy-MM-dd hh:mm:ss）
 *   */
export function getCurDateTime() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate(),
    hour = currentTime.getHours(),
    minute = currentTime.getMinutes(),
    second = currentTime.getSeconds();
    return year + "-" + month + "-" + day + " " +hour +":" +minute+":"+second;
}

/**
 *  * 获取当前日期（yyyy-MM-dd）
 *   */
export function getCurDate() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
    return year + "-" + month + "-" + day;
}
