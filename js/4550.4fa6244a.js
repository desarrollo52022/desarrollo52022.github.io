"use strict";(globalThis["webpackChunkposweb"]=globalThis["webpackChunkposweb"]||[]).push([[4550],{34550:(e,l,o)=>{o.r(l),o.d(l,{default:()=>f});var a=o(59835);function t(e,l,o,t,n,u){const i=(0,a.up)("q-input"),r=(0,a.up)("q-btn"),m=(0,a.up)("q-form"),d=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(d,{padding:""},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{onSubmit:e.onSubmit,onReset:e.onReset,class:"q-gutter-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{modelValue:e.nombre,"onUpdate:modelValue":l[0]||(l[0]=l=>e.nombre=l),type:"text",label:"Nombre",rules:[e=>!!e||"Debe ingresar el nombre"]},null,8,["modelValue","rules"]),(0,a.Wm)(i,{modelValue:e.nit,"onUpdate:modelValue":l[1]||(l[1]=l=>e.nit=l),type:"text",label:"Nit"},null,8,["modelValue"]),(0,a.Wm)(i,{modelValue:e.dpi,"onUpdate:modelValue":l[2]||(l[2]=l=>e.dpi=l),type:"number",label:"Dpi",rules:[e=>!!e||"Debe ingresar el DPI"]},null,8,["modelValue","rules"]),(0,a.Wm)(i,{modelValue:e.direccion,"onUpdate:modelValue":l[3]||(l[3]=l=>e.direccion=l),type:"text",label:"Direccion"},null,8,["modelValue"]),(0,a.Wm)(i,{modelValue:e.telefono,"onUpdate:modelValue":l[4]||(l[4]=l=>e.telefono=l),type:"text",label:"Telefono"},null,8,["modelValue"]),(0,a._)("div",null,[(0,a.Wm)(r,{label:"Guardar",type:"submit",color:"primary"}),(0,a.Wm)(r,{label:"Limpiar",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])])),_:1},8,["onSubmit","onReset"])])),_:1})}var n=o(34136),u=o(68651),i=o(60499);const r=(0,a.aZ)({setup(){const e=(0,i.iH)(""),l=(0,i.iH)(""),o=(0,i.iH)(""),a=(0,i.iH)(""),t=(0,i.iH)(""),r=()=>{let i={Nombre:e.value,Nit:l.value,Dpi:o.value,Direccion:a.value,Telefono:t.value};n.api.post(n.endPoints.CLIENTE+"AltaClienteDia",i).then((e=>{(0,u.dF)("Guardado correctamente"),m()})).catch((e=>{(0,u.L1)(e)}))},m=()=>{e.value="",l.value="",o.value="",a.value="",t.value=""};return{onSubmit:r,onReset:m,nombre:e,nit:l,dpi:o,direccion:a,telefono:t}}});var m=o(11639),d=o(69885),p=o(8326),s=o(13119),b=o(68879),c=o(69984),V=o.n(c);const v=(0,m.Z)(r,[["render",t]]),f=v;V()(r,"components",{QPage:d.Z,QForm:p.Z,QInput:s.Z,QBtn:b.Z})}}]);