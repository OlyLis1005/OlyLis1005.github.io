webpackJsonp([1],{"+0r1":function(t,e){},"+tmu":function(t,e){},"2bWg":function(t,e){},CnkK:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),o={name:"app-header",data:function(){return{activeIndex:this.$route.name}},created:function(){console.log(this.activeIndex)}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar-main"},[a("div",{staticClass:"navbar-logo"},[t._v("杜欣忠的博客")]),t._v(" "),a("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal","border-bottom":""}},[a("el-submenu",{attrs:{index:"1"}},[a("template",{slot:"title"},[t._v("博客")]),t._v(" "),a("el-menu-item",{attrs:{index:"home"}},[a("router-link",{attrs:{tag:"span",to:"/home"}},[t._v("主页")])],1),t._v(" "),a("el-menu-item",{attrs:{index:"blog-list"}},[a("router-link",{attrs:{tag:"span",to:"/bloglist"}},[t._v("文章列表")])],1)],2),t._v(" "),a("el-menu-item",{attrs:{index:"add-blog"}},[a("router-link",{attrs:{tag:"span",to:"/addblog"}},[t._v("写博客")])],1)],1)],1)},staticRenderFns:[]};var s={name:"App",components:{"app-header":a("VU/8")(o,i,!1,function(t){a("+0r1")},"data-v-1432cb59",null).exports},mounted:function(){var t=localStorage.getItem("first_come");t&&"false"!==t&&(setTimeout(function(){alert("欢迎新人")},0),localStorage.setItem("first_come","false"))}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("el-container",{staticClass:"container"},[e("el-header",{staticClass:"header"},[e("app-header")],1),this._v(" "),e("el-main",{staticClass:"content"},[e("router-view")],1),this._v(" "),e("el-footer",{staticClass:"footer"},[e("div",[this._v("\n        页脚还没有东西\n      ")])])],1)],1)},staticRenderFns:[]};var r=a("VU/8")(s,l,!1,function(t){a("2bWg")},null,null).exports,c=a("/ocq"),u=a("XLwt"),d=a.n(u),p={props:{echartsClassName:{type:String,default:"echarts-class-name"},echartsId:{type:String,default:"my_echarts"},width:{type:String,default:"500px"},height:{type:String,default:"500px"},option:{type:Object,default:function(){return{title:{text:"ECharts 入门示例"},tooltip:{},legend:{data:["销量"]},xAxis:{data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]},yAxis:{},series:[{name:"销量",type:"bar",data:[5,20,36,10,10,20]}]}}}},name:"echarts-test",mounted:function(){this.initChart()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},data:function(){return{chart:null}},methods:{initChart:function(){this.chart=d.a.init(this.$refs.myEchart),this.chart.setOption(this.option),this.chart.on("click",function(t){console.log(t)})}}},m={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"myEchart",staticClass:"echartsClassName",style:{height:this.height,width:this.width},attrs:{id:"echartsId"}})},staticRenderFns:[]};var h={name:"Home",data:function(){return{msg:"Welcome to Your Vue.js App",pieDate:{title:{text:"传入饼图option"},series:[{name:"访问来源",type:"pie",radius:"55%",data:[{value:235,name:"视频广告"},{value:274,name:"联盟广告"},{value:310,name:"邮件营销"},{value:335,name:"直接访问"},{value:400,name:"搜索引擎"}]}]},barData:{title:{text:"大一点的柱状图"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["邮件营销","联盟广告","视频广告","直接访问","搜索引擎"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["周一","周二","周三","周四","周五","周六","周日"]}],yAxis:[{type:"value"}],series:[{name:"邮件营销",type:"bar",areaStyle:{},data:[120,132,101,134,90,230,210],markLine:{lineStyle:{normal:{type:"dashed"}},data:[[{type:"min"},{type:"max"}]]}},{name:"联盟广告",type:"bar",areaStyle:{},data:[220,182,191,234,290,330,310],markLine:{lineStyle:{normal:{type:"dashed"}},data:[[{type:"min"},{type:"max"}]]}},{name:"视频广告",type:"bar",areaStyle:{},data:[150,232,201,154,190,330,410],markLine:{lineStyle:{normal:{type:"dashed"}},data:[[{type:"min"},{type:"max"}]]}},{name:"直接访问",type:"bar",areaStyle:{normal:{}},data:[320,332,301,334,390,330,320],markLine:{lineStyle:{normal:{type:"dashed"}},data:[[{type:"min"},{type:"max"}]]}},{name:"搜索引擎",type:"bar",label:{normal:{show:!0,position:"top"}},areaStyle:{normal:{}},data:[820,932,901,934,1290,1330,1320],markLine:{lineStyle:{normal:{type:"dashed"}},data:[[{type:"min"},{type:"max"}]]}}]},lineData:{title:{text:"堆叠区域图"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["邮件营销","联盟广告","视频广告","直接访问","搜索引擎"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]}],yAxis:[{type:"value"}],series:[{name:"邮件营销",type:"line",stack:"总量",areaStyle:{},data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"line",stack:"总量",areaStyle:{},data:[220,182,191,234,290,330,310]},{name:"视频广告",type:"line",stack:"总量",areaStyle:{},data:[150,232,201,154,190,330,410]},{name:"直接访问",type:"line",stack:"总量",areaStyle:{normal:{}},data:[320,332,301,334,390,330,320]},{name:"搜索引擎",type:"line",stack:"总量",label:{normal:{show:!0,position:"top"}},areaStyle:{normal:{}},data:[820,932,901,934,1290,1330,1320]}]}}},components:{"echarts-test":a("VU/8")(p,m,!1,function(t){a("guBZ")},"data-v-69bbb11b",null).exports}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("h1",[t._v("欢迎访问我的博客")]),t._v(" "),t._m(0),t._v(" "),a("h1",[t._v("Vue中使用echarts")]),a("br"),t._v(" "),a("echarts-test"),t._v(" "),a("echarts-test",{attrs:{option:t.pieDate}}),t._v(" "),a("echarts-test",{attrs:{width:"1000px",height:"700px",option:t.barData}}),t._v(" "),a("echarts-test",{attrs:{width:"1000px",height:"700px",option:t.lineData}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("项目源码："),e("a",{attrs:{href:"https://github.com/OlyLis1005/my-blog",target:"_blank"}},[this._v("https://github.com/OlyLis1005/my-blog")])])}]};var b=a("VU/8")(h,v,!1,function(t){a("qLLy")},"data-v-03b7b60c",null).exports,g=a("zL8q"),f=a.n(g),y=a("NYxO"),_={name:"add-blog",props:{editArticle:Object},data:function(){return{options_1:[{value:"原创",label:"原创"},{value:"转载",label:"转载"},{value:"翻译",label:"翻译"}],options_2:[{value:"vue",label:"vue"},{value:"angular",label:"angular"},{value:"react",label:"React"},{value:"javascript",label:"javascript"},{value:"css",label:"css"}],hasSubmit:!1}},methods:{post:function(){var t=this;console.log(this.blog);var e=g.Loading.service({fullscreen:!0});this.blog.id?this.$axios.put("https://vuedemo-4728d.firebaseio.com/posts/"+this.blog.id+".json",this.blog).then(function(a){setTimeout(function(){t.hasSubmit=!0,e.close(),t.$store.commit("resetArticle")},500)}):this.$axios.post("https://vuedemo-4728d.firebaseio.com/posts.json",this.blog).then(function(a){setTimeout(function(){t.hasSubmit=!0,e.close(),t.$store.commit("resetArticle")},500)})},continuePost:function(){this.hasSubmit=!1}},computed:{blog:function(){return this.$store.state.currentArticle}}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.hasSubmit?a("div",[a("h1",[t._v("发布成功")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.continuePost}},[t._v("继续写博客")])],1):a("div",[a("h1",{staticClass:"add-blog-header"},[t._v("写博客")]),t._v(" "),a("div",{staticClass:"add-blog-body"},[a("el-form",[a("el-form-item",[a("el-input",{attrs:{placeholder:"输入文章标题"},model:{value:t.blog.title,callback:function(e){t.$set(t.blog,"title",e)},expression:"blog.title"}})],1),t._v(" "),a("el-form-item",[a("el-input",{staticClass:"article-content-editor",attrs:{type:"textarea",rows:10,resize:"none",placeholder:"输入文章内容"},model:{value:t.blog.content,callback:function(e){t.$set(t.blog,"content",e)},expression:"blog.content"}})],1),t._v(" "),a("el-form-item",[a("div",{staticClass:"blog-type-category"},[a("label",[t._v("文章类型：\n            "),a("el-select",{staticClass:"blog-type-select",attrs:{placeholder:"请选择"},model:{value:t.blog.type,callback:function(e){t.$set(t.blog,"type",e)},expression:"blog.type"}},t._l(t.options_1,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),a("label",{staticClass:"blog-type-select-2"},[t._v("博客分类:\n            "),a("el-select",{staticClass:"blog-type-select",attrs:{placeholder:"请选择"},model:{value:t.blog.category,callback:function(e){t.$set(t.blog,"category",e)},expression:"blog.category"}},t._l(t.options_2,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)])]),t._v(" "),a("el-form-item",[a("el-button",{staticClass:"submit-blog",attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:t.post}},[t._v("发布博客")])],1)],1)],1)])},staticRenderFns:[]};var $=a("VU/8")(_,x,!1,function(t){a("UMcn")},"data-v-6f3dc020",null).exports,k={name:"single-blog",data:function(){return{id:this.$route.params.id,blog:{}}},created:function(){var t=this;this.$axios.get("https://vuedemo-4728d.firebaseio.com/posts/"+this.id+".json").then(function(e){console.log(e),t.blog=e.data,t.blog.id=t.id})},methods:{editBlog:function(){this.$store.commit("editArticle",this.blog),this.$router.push("/addblog")},deleteBlog:function(){var t=this;this.$confirm("此操作将永久删除该博客, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$axios.delete("https://vuedemo-4728d.firebaseio.com/posts/"+t.id+".json").then(function(){t.$message({type:"success",message:"删除成功!"}),t.$router.push("/bloglist")},function(){t.$message({type:"error",message:"删除失败!"})})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})}}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v(t._s(t.blog.title))]),t._v(" "),a("p",[t._v(t._s(t.blog.type)+" 分类： "+t._s(t.blog.category))]),t._v(" "),a("article",[t._v(t._s(t.blog.content))]),t._v(" "),a("el-button",{attrs:{icon:"el-icon-edit",type:"primary"},on:{click:t.editBlog}},[t._v("编辑博客")]),t._v(" "),a("el-button",{attrs:{icon:"el-icon-delete",type:"danger"},on:{click:t.deleteBlog}},[t._v("删除博客")])],1)},staticRenderFns:[]};var S=a("VU/8")(k,C,!1,function(t){a("CnkK")},"data-v-3918e136",null).exports,A={name:"blog-list",data:function(){return{articles:[]}},created:function(){var t=this;this.$axios.get("https://vuedemo-4728d.firebaseio.com/posts.json").then(function(e){var a=e.data||[],n=[];for(var o in a)a[o].id=o,n.push(a[o]);console.log(n),t.articles=n})},methods:{editArticle:function(t){this.$router.push("/addblog"),this.$store.commit("editArticle",t)}}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blog-list"},t._l(t.articles,function(e,n){return a("router-link",{key:n,staticClass:"blogItem",attrs:{tag:"div",to:"/blog/"+e.id}},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.content))])])}),1)},staticRenderFns:[]};var L=a("VU/8")(A,w,!1,function(t){a("+tmu")},"data-v-2066bf65",null).exports;n.default.use(c.a);var j=new c.a({routes:[{path:"/home",name:"home",component:b},{path:"/addblog",name:"add-blog",component:$},{path:"/blog/:id",name:"single-blog",component:S},{path:"/bloglist",name:"blog-list",component:L},{path:"*",redirect:"home"}]}),E=a("mtWM"),I=a.n(E);n.default.use(y.a);var R=new y.a.Store({state:{currentArticle:{title:"",content:"",type:"",category:""}},getters:{},mutations:{editArticle:function(t,e){t.currentArticle=e},resetArticle:function(t){t.currentArticle={title:"",content:"",type:"",category:""}}},actions:{}});a("tvR6");n.default.prototype.$axios=I.a,n.default.config.productionTip=!1,n.default.use(f.a),n.default.directive("rainbow",{bind:function(t,e,a){t.style.color="#"+Math.random().toString(16).slice(2,8)}}),new n.default({store:R,el:"#app",router:j,components:{App:r},template:"<App/>"})},UMcn:function(t,e){},guBZ:function(t,e){},qLLy:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.79778c08263aff2e6c0c.js.map