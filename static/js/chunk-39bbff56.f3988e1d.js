(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39bbff56"],{"1c39":function(e,t,a){"use strict";var l=a("f1ed"),n=a.n(l);n.a},"1cde":function(e,t,a){},"87b0":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"chart"},[a("div",{staticClass:"temperature-chart"}),a("div",{staticClass:"arrow arrow-backward",on:{click:e.handleBackward}},[a("i",{staticClass:"el-icon-back"})]),a("div",{staticClass:"arrow arrow-forward",on:{click:e.handleForward}},[a("i",{staticClass:"el-icon-right"})])])},n=[],r=a("313e"),s=a.n(r),o={name:"Chart",data:function(){return{chart:null}},mounted:function(){this.drawChart(),window.addEventListener("resize",this.resize)},methods:{drawChart:function(){this.chart=s.a.init(document.querySelector(".temperature-chart"));var e={tooltip:{trigger:"axis"},legend:{top:"10",data:["DCS温度(摄氏度)","平均温度(摄氏度)","流量(立方米)","烟尘(毫克/立方米)【折算】","二氧化硫(毫克/立方米)【折算】","氮氧化物(毫克/立方米)【折算】","一氧化碳(毫克/立方米)【折算】","氯化氢(毫克/立方米)【折算】","含氧量(百分比)"]},grid:{left:"80",right:"80",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:["2020-08-18 00","2020-08-18 02","2020-08-18 04","2020-08-18 06","2020-08-18 08","2020-08-18 10","2020-08-18 12"]},yAxis:{type:"value"},series:[{name:"DCS温度(摄氏度)",type:"line",stack:"总量",data:[120,132,101,134,90,230,210]},{name:"平均温度(摄氏度)",type:"line",stack:"总量",data:[220,182,191,234,290,330,310]},{name:"流量(立方米)",type:"line",stack:"总量",data:[150,232,201,154,190,330,410]},{name:"烟尘(毫克/立方米)【折算】",type:"line",stack:"总量",data:[320,332,301,334,390,330,320]},{name:"二氧化硫(毫克/立方米)【折算】",type:"line",stack:"总量",data:[820,932,901,934,1290,1330,1320]},{name:"氮氧化物(毫克/立方米)【折算】",type:"line",stack:"总量",data:[820,932,901,934,1290,1330,1320]},{name:"一氧化碳(毫克/立方米)【折算】",type:"line",stack:"总量",data:[820,932,901,934,1290,1330,1320]},{name:"氯化氢(毫克/立方米)【折算】",type:"line",stack:"总量",data:[820,932,901,934,1290,1330,1320]},{name:"含氧量(百分比)",type:"line",stack:"总量",data:[820,932,901,934,1290,1330,1320]}]};this.chart.setOption(e)},resize:function(){console.log("sss"),this.chart.resize()},handleBackward:function(){this.$message({message:"不能选择过去时间(-1天)",type:"warning"})},handleForward:function(){this.$message({message:"不能选择将来时间(+1天)",type:"warning"})}},destroyed:function(){window.removeEventListener("resize",this.resize)}},c=o,i=(a("94f1"),a("2877")),u=Object(i["a"])(c,l,n,!1,null,"dcc7645e",null);t["a"]=u.exports},"94f1":function(e,t,a){"use strict";var l=a("1cde"),n=a.n(l);n.a},"95b6":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{staticClass:"smoke"},[a("el-header",{staticClass:"header",attrs:{height:"auto"}},[a("div",{staticClass:"left"},[a("div",{staticClass:"tabs"},e._l(e.tabs,(function(t){return a("span",{key:t,class:["tab-button",{active:e.currentTab===t}],on:{click:function(a){return e.switchTabs(t)}}},[e._v(e._s(t))])})),0),a("el-checkbox-group",{staticClass:"checkbox-group",on:{change:e.handleCheckedStatusChange},model:{value:e.checkedStatus,callback:function(t){e.checkedStatus=t},expression:"checkedStatus"}},e._l(e.statusOptions,(function(t){return a("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])})),1),a("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),a("el-button",{staticClass:"query-btn",attrs:{type:"primary",size:"medium"}},[e._v("筛选")])],1),a("div",{staticClass:"right"},[a("div",{staticClass:"list-chart"},[a("span",{class:["toggle-button",{active:"图表"===e.currentToggle}],on:{click:function(t){return e.switchToggle("图表")}}},[a("i",{staticClass:"el-icon-picture-outline"})]),a("span",{class:["toggle-button",{active:"列表"===e.currentToggle}],on:{click:function(t){return e.switchToggle("列表")}}},[a("i",{staticClass:"el-icon-tickets"})])]),a("div",{staticClass:"export"},[a("el-button",{staticClass:"export-btn",attrs:{icon:"el-icon-download",size:"medium"}},[e._v("导出")])],1),a("div",{staticClass:"working"},[a("el-button",{staticClass:"working-btn",attrs:{size:"medium"},on:{click:e.openWorking}},[e._v("工况")])],1)])]),a("el-main",{staticClass:"main"},[a("el-table",{directives:[{name:"show",rawName:"v-show",value:"列表"===e.currentToggle,expression:"currentToggle === '列表'"}],staticClass:"table",attrs:{width:"100%",height:"100%",data:e.tableData}},[a("el-table-column",{attrs:{width:"120px",label:"监控时间",fixed:"left",align:"center",prop:"dataTime"}}),a("el-table-column",{attrs:{label:"工况标记",fixed:"left",align:"center",prop:"workcordFlag","class-name":"mark"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{style:{color:e.statusColor[t.row.workcordFlag]}},[e._v(e._s(t.row.workcordFlag))])]}}])}),a("el-table-column",{attrs:{label:"DCS温度(℃)",fixed:"left",align:"center",prop:"AvgValue902"}}),a("el-table-column",{attrs:{label:"平均温度(℃)",fixed:"left",align:"center",prop:"AvgRevised001"}}),a("el-table-column",{attrs:{label:"流量(立方米)",align:"center"}},[a("el-table-column",{attrs:{label:"监测值",align:"center",prop:"couValueB02"}}),a("el-table-column",{attrs:{label:"数采仪上报标记",align:"center",prop:"flagB02","class-name":"mark"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{style:{color:e.statusColor[t.row.flagB02]}},[e._v(e._s(t.row.flagB02))])]}}])}),a("el-table-column",{attrs:{label:"CEMS数据标记",align:"center",prop:"cemsB02","class-name":"mark"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{style:{color:e.statusColor[t.row.cemsB02]}},[e._v(e._s(t.row.cemsB02))])]}}])})],1),a("el-table-column",{attrs:{label:"烟尘(毫克/立方米)",align:"center"}},[a("el-table-column",{attrs:{label:"浓度",align:"center",prop:"AvgValue001"}}),a("el-table-column",{attrs:{label:"折算浓度",align:"center",prop:"ZsValue001"}}),a("el-table-column",{attrs:{label:"标准值",align:"center",prop:"StandardValue001"}}),a("el-table-column",{attrs:{label:"排放量(千克)",align:"center",prop:"cou001"}}),a("el-table-column",{attrs:{label:"数采仪上报标记",align:"center",prop:"flag001","class-name":"mark"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{style:{color:e.statusColor[t.row.flag001]}},[e._v(e._s(t.row.flag001))])]}}])}),a("el-table-column",{attrs:{label:"CEMS数据标记",align:"center",prop:"cems001","class-name":"mark"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{style:{color:e.statusColor[t.row.cems001]}},[e._v(e._s(t.row.cems001))])]}}])})],1),a("el-table-column",{attrs:{label:"二氧化硫(毫克/立方米)",align:"center"}},[a("el-table-column",{attrs:{label:"浓度",align:"center",prop:"AvgValue002"}}),a("el-table-column",{attrs:{label:"折算浓度",align:"center",prop:"ZsValue002"}}),a("el-table-column",{attrs:{label:"标准值",align:"center",prop:"StandardValue002"}}),a("el-table-column",{attrs:{label:"排放量(千克)",align:"center",prop:"cou002"}}),a("el-table-column",{attrs:{label:"数采仪上报标记",align:"center",prop:"flag002","class-name":"mark"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{style:{color:e.statusColor[t.row.flag002]}},[e._v(e._s(t.row.flag002))])]}}])}),a("el-table-column",{attrs:{label:"CEMS数据标记",align:"center",prop:"cems002","class-name":"mark"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{style:{color:e.statusColor[t.row.cems002]}},[e._v(e._s(t.row.cems002))])]}}])})],1),a("el-table-column",{attrs:{label:"氮氧化物(毫克/立方米)",align:"center"}},[a("el-table-column",{attrs:{label:"浓度",align:"center",prop:"AvgValue003"}}),a("el-table-column",{attrs:{label:"折算浓度",align:"center",prop:"ZsValue003"}}),a("el-table-column",{attrs:{label:"标准值",align:"center",prop:"StandardValue003"}}),a("el-table-column",{attrs:{label:"排放量(千克)",align:"center",prop:"cou003"}}),a("el-table-column",{attrs:{label:"数采仪上报标记",align:"center",prop:"flag003","class-name":"mark"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{style:{color:e.statusColor[t.row.flag003]}},[e._v(e._s(t.row.flag003))])]}}])}),a("el-table-column",{attrs:{label:"CEMS数据标记",align:"center",prop:"cems003","class-name":"mark"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{style:{color:e.statusColor[t.row.cems003]}},[e._v(e._s(t.row.cems003))])]}}])})],1),a("el-table-column",{attrs:{label:"一氧化碳(毫克/立方米)",align:"center"}},[a("el-table-column",{attrs:{label:"浓度",align:"center",prop:"AvgValue004"}}),a("el-table-column",{attrs:{label:"折算浓度",align:"center",prop:"ZsValue004"}}),a("el-table-column",{attrs:{label:"标准值",align:"center",prop:"StandardValue004"}}),a("el-table-column",{attrs:{label:"排放量(千克)",align:"center",prop:"cou004"}}),a("el-table-column",{attrs:{label:"数采仪上报标记",align:"center",prop:"flag004","class-name":"mark"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{style:{color:e.statusColor[t.row.flag004]}},[e._v(e._s(t.row.flag004))])]}}])}),a("el-table-column",{attrs:{label:"CEMS数据标记",align:"center",prop:"cems004","class-name":"mark"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{style:{color:e.statusColor[t.row.cems004]}},[e._v(e._s(t.row.cems004))])]}}])})],1),a("el-table-column",{attrs:{label:"氯化氢(毫克/立方米)",align:"center"}},[a("el-table-column",{attrs:{label:"浓度",align:"center",prop:"AvgValue008"}}),a("el-table-column",{attrs:{label:"折算浓度",align:"center",prop:"ZsValue008"}}),a("el-table-column",{attrs:{label:"标准值",align:"center",prop:"StandardValue008"}}),a("el-table-column",{attrs:{label:"排放量(千克)",align:"center",prop:"cou008"}}),a("el-table-column",{attrs:{label:"数采仪上报标记",align:"center",prop:"flag008","class-name":"mark"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{style:{color:e.statusColor[t.row.flag008]}},[e._v(e._s(t.row.flag008))])]}}])}),a("el-table-column",{attrs:{label:"CEMS数据标记",align:"center",prop:"cems008","class-name":"mark"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{style:{color:e.statusColor[t.row.cems008]}},[e._v(e._s(t.row.cems008))])]}}])})],1),a("el-table-column",{attrs:{label:"含氧量(百分比)",align:"center"}},[a("el-table-column",{attrs:{label:"监测值",align:"center",prop:"AvgValueS01"}}),a("el-table-column",{attrs:{label:"数采仪上报标记",align:"center",prop:"flagS01","class-name":"mark"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{style:{color:e.statusColor[t.row.flagS01]}},[e._v(e._s(t.row.flagS01))])]}}])}),a("el-table-column",{attrs:{label:"CEMS数据标记",align:"center",prop:"cemsS01","class-name":"mark"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{style:{color:e.statusColor[t.row.cemsS01]}},[e._v(e._s(t.row.cemsS01))])]}}])})],1),a("el-table-column",{attrs:{label:"烟气流速(米/秒)",align:"center"}},[a("el-table-column",{attrs:{label:"监测值",align:"center",prop:"AvgValueS02"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{style:{color:e.statusColor[t.row.AvgValueS02]}},[e._v(e._s(t.row.AvgValueS02))])]}}])}),a("el-table-column",{attrs:{label:"数采仪上报标记",align:"center",prop:"flagS02","class-name":"mark"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{style:{color:e.statusColor[t.row.flagS02]}},[e._v(e._s(t.row.flagS02))])]}}])})],1),a("el-table-column",{attrs:{label:"烟气温度(℃)",align:"center"}},[a("el-table-column",{attrs:{label:"监测值",align:"center",prop:"AvgValueS03"}}),a("el-table-column",{attrs:{label:"数采仪上报标记",align:"center",prop:"flagS03","class-name":"mark"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{style:{color:e.statusColor[t.row.flagS02]}},[e._v(e._s(t.row.flagS02))])]}}])})],1),a("el-table-column",{attrs:{label:"烟气湿度(百分比)",align:"center"}},[a("el-table-column",{attrs:{label:"监测值",align:"center",prop:"AvgValueS05"}}),a("el-table-column",{attrs:{label:"数采仪上报标记",align:"center",prop:"flagS05","class-name":"mark"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{style:{color:e.statusColor[t.row.flagS05]}},[e._v(e._s(t.row.flagS05))])]}}])})],1),a("el-table-column",{attrs:{label:"烟气压力(千帕)",align:"center"}},[a("el-table-column",{attrs:{label:"监测值",align:"center",prop:"AvgValueS08"}}),a("el-table-column",{attrs:{label:"数采仪上报标记",align:"center",prop:"flagS08","class-name":"mark"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{style:{color:e.statusColor[t.row.flagS08]}},[e._v(e._s(t.row.flagS08))])]}}])})],1)],1),a("Chart",{directives:[{name:"show",rawName:"v-show",value:"图表"===e.currentToggle,expression:"currentToggle === '图表'"}]})],1),a("el-footer",{directives:[{name:"show",rawName:"v-show",value:"列表"===e.currentToggle,expression:"currentToggle === '列表'"}],staticClass:"footer",attrs:{height:"auto"}},[a("el-pagination",{attrs:{"current-page":e.pagination.page,"page-size":e.pagination.pageSize,total:e.pagination.total,background:"",layout:"prev, pager, next, jumper, ->, total"},on:{"update:currentPage":function(t){return e.$set(e.pagination,"page",t)},"update:current-page":function(t){return e.$set(e.pagination,"page",t)},"current-change":e.handleCurrentChange}})],1)],1)},n=[],r=a("87b0"),s={name:"Smoke",components:{Chart:r["a"]},props:{smokeData:{type:Array,default:function(){return[]}},smokePagination:{type:Object,default:function(){return{page:1,pageSize:20,total:0}}}},computed:{tableData:function(){return this.smokeData},pagination:function(){return this.smokePagination}},data:function(){return{statusColor:{"正常":"#00ff00","故障":"#ff0000"},msg:"烟气",tabs:["小时","分钟","实时","日"],toggle:["图表","列表"],currentTab:"小时",currentToggle:"图表",statusOptions:["超标","异常","工况标记","CEMS数据标记"],checkedStatus:[],checkAll:!1,isIndeterminate:!0}},methods:{handleCheckAllChange:function(e){this.checkedStatus=e?this.statusOptions:[],this.isIndeterminate=!1},handleCheckedStatusChange:function(e){var t=e.length;this.checkAll=t===this.statusOptions.length,this.isIndeterminate=t>0&&t<this.statusOptions.length},handleCurrentChange:function(e){this.$emit("getSmokeList",e)},switchTabs:function(e){this.currentTab=e},switchToggle:function(e){this.currentToggle=e},openWorking:function(){this.$message({message:"这段时间内没有工况信息！",type:"warning"})}}},o=s,c=(a("1c39"),a("2877")),i=Object(c["a"])(o,l,n,!1,null,"37ab34ae",null);t["default"]=i.exports},f1ed:function(e,t,a){}}]);