import{d as $,k as _,h as L,q as b,i as M,r as m,o as v,c as P,e as a,w as o,u as l,a as z,b as E,g as f,t as h,E as i}from"./index.bb801fe3.js";import{a as B}from"./api.a0d27d23.js";import{_ as j}from"./plugin-vue_export-helper.21dcd24c.js";const G={class:"login-page"},H={style:{"text-align":"center"}},J=f("\u767B\u5F55 "),K=f("\u53D1\u9001\u9A8C\u8BC1\u7801"),O={style:{"text-align":"center"}},Q=f("\u6CE8\u518C "),W=$({emits:["loginSucc"],setup(X,{emit:C}){const F=_("first"),D=(r,e)=>{console.log(r,e)},V=_("default"),p=L(),w=_(),k=_(),c=_(60),d=b({username:"",password:""}),s=b({name:"",password:"",mail:"",code:""}),y=b({username:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:"blur"}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:"blur"}],code:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",trigger:"blur"}],mail:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1",trigger:"blur"}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur"}]}),I=M();console.log(I);const R=async r=>{!r||await r.validate((e,n)=>{e?B.login(d).then(t=>{t.data.code==200?(i.success("\u767B\u5F55\u6210\u529F"),localStorage.setItem("token",t.data.data.token),p.commit("loginSucc",t.data.data.token),p.commit("setUser",{username:d.username,is_admin:t.data.data.is_admin}),localStorage.setItem("is_admin",t.data.data.is_admin),localStorage.setItem("username",d.username),C("loginSucc")):i.error(t.data.msg)}):console.log("error submit!",n)})},q=async r=>{!r||await r.validate((e,n)=>{e?B.register(s).then(t=>{t.data.code==200?(i.success("\u6CE8\u518C\u6210\u529F"),localStorage.setItem("token",t.data.data.token),p.commit("loginSucc",t.data.data.token),p.commit("setUser",{username:s.name,is_admin:t.data.data.is_admin}),localStorage.setItem("username",s.name),localStorage.setItem("is_admin",t.data.data.is_admin),C("loginSucc")):i.error(t.data.msg)}):console.log("error submit!",n)})},S=()=>{c.value>0?(c.value--,setTimeout(S,1e3)):c.value=60},N=()=>{/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(s.mail)?(S(),B.sendCode({email:s.mail}).then(e=>{e.data.code==200?i.success(e.data.msg):i.error(e.data.msg)})):i("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1")};return(r,e)=>{const n=m("el-input"),t=m("el-form-item"),g=m("el-button"),x=m("el-form"),A=m("el-tab-pane"),U=m("el-col"),T=m("el-row"),Z=m("el-tabs");return v(),P("div",G,[a(Z,{modelValue:F.value,"onUpdate:modelValue":e[8]||(e[8]=u=>F.value=u),type:"card",class:"demo-tabs",onTabClick:D},{default:o(()=>[a(A,{label:"\u767B\u5F55",name:"first"},{default:o(()=>[a(x,{ref_key:"ruleFormRef",ref:w,model:l(d),rules:l(y),"label-width":"80px",class:"login-form",size:V.value},{default:o(()=>[a(t,{label:"\u8D26\u6237",prop:"username"},{default:o(()=>[a(n,{modelValue:l(d).username,"onUpdate:modelValue":e[0]||(e[0]=u=>l(d).username=u)},null,8,["modelValue"])]),_:1}),a(t,{label:"\u5BC6\u7801",prop:"password"},{default:o(()=>[a(n,{modelValue:l(d).password,"onUpdate:modelValue":e[1]||(e[1]=u=>l(d).password=u),"show-password":""},null,8,["modelValue"])]),_:1}),z("div",H,[a(g,{type:"primary",onClick:e[2]||(e[2]=u=>R(w.value))},{default:o(()=>[J]),_:1})])]),_:1},8,["model","rules","size"])]),_:1}),a(A,{label:"\u6CE8\u518C",name:"second"},{default:o(()=>[a(x,{ref_key:"registFormRef",ref:k,model:l(s),rules:l(y),"label-width":"80px",class:"login-form",size:V.value},{default:o(()=>[a(t,{label:"\u8D26\u6237",prop:"name"},{default:o(()=>[a(n,{modelValue:l(s).name,"onUpdate:modelValue":e[3]||(e[3]=u=>l(s).name=u)},null,8,["modelValue"])]),_:1}),a(t,{label:"\u5BC6\u7801",prop:"password"},{default:o(()=>[a(n,{modelValue:l(s).password,"onUpdate:modelValue":e[4]||(e[4]=u=>l(s).password=u),"show-password":""},null,8,["modelValue"])]),_:1}),a(t,{label:"\u90AE\u7BB1",prop:"mail"},{default:o(()=>[a(n,{modelValue:l(s).mail,"onUpdate:modelValue":e[5]||(e[5]=u=>l(s).mail=u)},null,8,["modelValue"])]),_:1}),a(t,{label:"\u9A8C\u8BC1\u7801",prop:"code"},{default:o(()=>[a(T,{gutter:20},{default:o(()=>[a(U,{span:12},{default:o(()=>[a(n,{modelValue:l(s).code,"onUpdate:modelValue":e[6]||(e[6]=u=>l(s).code=u)},null,8,["modelValue"])]),_:1}),a(U,{span:12,style:{"text-align":"right"}},{default:o(()=>[c.value>0&&c.value<60?(v(),E(g,{key:0,disabled:""},{default:o(()=>[f(h(c.value)+"\u79D2",1)]),_:1})):(v(),E(g,{key:1,onClick:N,type:"primary"},{default:o(()=>[K]),_:1}))]),_:1})]),_:1})]),_:1}),z("div",O,[a(g,{type:"primary",onClick:e[7]||(e[7]=u=>q(k.value))},{default:o(()=>[Q]),_:1})])]),_:1},8,["model","rules","size"])]),_:1})]),_:1},8,["modelValue"])])}}});var te=j(W,[["__scopeId","data-v-d1130378"]]);export{te as default};
