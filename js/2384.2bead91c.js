"use strict";(globalThis["webpackChunkposweb"]=globalThis["webpackChunkposweb"]||[]).push([[2384],{2384:(e,n,l)=>{l.r(n),l.d(n,{default:()=>q});var o=l(59835);const a={class:"row"},t={class:"col-4"},s=(0,o._)("div",null,"Scan QR",-1),i=(0,o._)("canvas",{id:"canvasQR"},null,-1);function c(e,n,l,c,r,g){const d=(0,o.up)("q-btn"),u=(0,o.up)("q-separator"),p=(0,o.up)("q-table"),m=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(m,{padding:""},{default:(0,o.w5)((()=>[(0,o._)("div",a,[(0,o._)("div",t,[(0,o.Wm)(d,{color:"primary",icon:"login",label:"Login",onClick:e.login},null,8,["onClick"]),(0,o.Wm)(d,{color:"primary",icon:"send",label:"Enviar mensajes",onClick:e.sendMsg},null,8,["onClick"])]),s,i]),(0,o.Wm)(u,{spaced:"",inset:"",vertical:"",dark:""}),(0,o.Wm)(p,{title:"Clientes",rows:e.clientes,columns:e.columnasClientes,"row-key":"name",dense:"","rows-per-page-options":[0],style:{height:"500px"}},null,8,["rows","columns"])])),_:1})}var r=l(39981),g=l.n(r),d=l(68651),u=l(60499),p=l(32316),m=l(34136),h=l(17779);const b=[{name:"Codigo",label:"Codigo",field:"Codigo",align:"center"},{name:"Nombre",label:"Nombre",field:"Nombre",align:"center"},{name:"Fecha",label:"Fecha Vence",field:"Fecha",align:"center"},{name:"Telefono",label:"Telefono",field:"Telefono",align:"center"}],C=(0,o.aZ)({setup(){const e=(0,u.iH)(!0),n=(0,u.iH)([]),l=()=>{m.api.get(m.endPoints.GYMCLIENTES+"ClientesPendientes").then((e=>{n.value=e.data})).catch((e=>{(0,d.L1)(e)}))},o=()=>{n.value.forEach((e=>{h.log(e.Msg);let n={msg:e.Msg,telefono:e.Telefono};g().post("http://186.189.218.179:3002/msg",n).then((n=>{(0,d.dF)("Mensaje enviado a "+e.Telefono)})).catch((e=>{(0,d.L1)(e)}))}))},a=()=>{g().get("http://186.189.218.179:3002/Login").then((e=>{h.log(e.data.qr),p.toCanvas(document.getElementById("canvasQR"),e.data.qr,{toSJISFunc:p.toSJIS,width:250},(function(e){e&&h.error(e),h.log("success!")}))})).catch((e=>{(0,d.L1)(e)}))};return{getClientes:l,login:a,sendMsg:o,columnasClientes:b,isLogin:e,clientes:n}},created(){this.getClientes()}});var f=l(11639),v=l(69885),w=l(68879),k=l(50926),T=l(84277),L=l(69984),Q=l.n(L);const S=(0,f.Z)(C,[["render",c]]),q=S;Q()(C,"components",{QPage:v.Z,QBtn:w.Z,QSeparator:k.Z,QTable:T.Z})}}]);