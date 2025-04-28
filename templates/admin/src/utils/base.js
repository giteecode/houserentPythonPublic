const base = {
    get() {
        return {
            url : "http://localhost:8080/houserentPython/",
            name: "houserentPython",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "租房推荐系统"
        } 
    }
}
export default base
