import{d as m,i as f,k as s,r as h,o as r,c as d,a as t,F as z,f as C,e as x,g as k,t as n}from"./index.bb801fe3.js";import{a as F}from"./api.a0d27d23.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";const A={class:"top-list"},L={class:"list"},P={class:"title"},S={class:"sort"},B={class:"msg"},N={class:"pagi"},R=m({setup(V){f();const c=s([]);s([]);const l=s(10),i=s(1),p=s(0),_=a=>{u()},g=a=>{u()},u=()=>{F.getRankList({size:l.value,page:i.value}).then(a=>{a&&a.data&&(c.value=a.data.data.list,p.value=a.data.data.count),console.log(a)})};return u(),(a,o)=>{const v=h("el-pagination");return r(),d("div",A,[t("div",L,[(r(!0),d(z,null,C(c.value,e=>(r(),d("div",{class:"item",key:e.id},[t("div",P,[k(n(e.id)+". "+n(e.name)+" ",1),t("div",S,[t("span",null,n(e.mail),1)])]),t("div",B,[t("span",null,"\u63D0\u4EA4\u6570\uFF1A"+n(e.submit_num),1),t("span",null,"\u901A\u8FC7\u6570\uFF1A"+n(e.pass_num),1)])]))),128))]),t("div",N,[x(v,{currentPage:i.value,"onUpdate:currentPage":o[0]||(o[0]=e=>i.value=e),"page-size":l.value,"onUpdate:page-size":o[1]||(o[1]=e=>l.value=e),"page-sizes":[10,20,50,100],layout:"total,sizes, prev, pager, next",total:p.value,onSizeChange:_,onCurrentChange:g},null,8,["currentPage","page-size","total"])])])}}});var U=y(R,[["__scopeId","data-v-388b4611"]]);export{U as default};
