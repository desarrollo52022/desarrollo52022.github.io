"use strict";(globalThis["webpackChunkposweb"]=globalThis["webpackChunkposweb"]||[]).push([[7148],{67148:(e,l,o)=>{o.r(l),o.d(l,{default:()=>f});var a=o(59835);function t(e,l,o,t,u,n){const d=(0,a.up)("q-input"),i=(0,a.up)("q-btn"),m=(0,a.up)("q-form"),r=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(r,{padding:""},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{onSubmit:e.onSubmit,onReset:e.onReset,class:"q-gutter-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{modelValue:e.nombre,"onUpdate:modelValue":l[0]||(l[0]=l=>e.nombre=l),type:"text",label:"Nombres"},null,8,["modelValue"]),(0,a.Wm)(d,{modelValue:e.apellido,"onUpdate:modelValue":l[1]||(l[1]=l=>e.apellido=l),type:"text",label:"Apellidos"},null,8,["modelValue"]),(0,a.Wm)(d,{modelValue:e.nit,"onUpdate:modelValue":l[2]||(l[2]=l=>e.nit=l),type:"text",label:"Nit"},null,8,["modelValue"]),(0,a.Wm)(d,{modelValue:e.dpi,"onUpdate:modelValue":l[3]||(l[3]=l=>e.dpi=l),type:"text",label:"Dpi"},null,8,["modelValue"]),(0,a.Wm)(d,{modelValue:e.direccion,"onUpdate:modelValue":l[4]||(l[4]=l=>e.direccion=l),type:"text",label:"Direccion"},null,8,["modelValue"]),(0,a.Wm)(d,{modelValue:e.telefono,"onUpdate:modelValue":l[5]||(l[5]=l=>e.telefono=l),type:"text",label:"Telefono"},null,8,["modelValue"]),(0,a.Wm)(d,{modelValue:e.correo,"onUpdate:modelValue":l[6]||(l[6]=l=>e.correo=l),type:"text",label:"Correo"},null,8,["modelValue"]),(0,a._)("div",null,[(0,a.Wm)(i,{label:"Guardar",type:"submit",color:"primary"}),(0,a.Wm)(i,{label:"Limpiar",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])])),_:1},8,["onSubmit","onReset"])])),_:1})}var u=o(34136),n=o(68651),d=o(60499);const i=(0,a.aZ)({setup(){const e=(0,d.iH)(""),l=(0,d.iH)(""),o=(0,d.iH)(""),a=(0,d.iH)(""),t=(0,d.iH)(""),i=(0,d.iH)(""),m=(0,d.iH)(""),r=()=>{let d={Nombre:e.value,Apellido:l.value,Nit:o.value,Dpi:a.value,Direccion:t.value,Telefono:i.value,Correo:m.value};u.api.post(u.endPoints.CLIENTE+"AltaCliente",d).then((e=>{(0,n.dF)("Guardado correctamente"),p()})).catch((e=>{(0,n.L1)(e)}))},p=()=>{e.value="",l.value="",o.value="",a.value="",t.value="",i.value="",m.value=""};return{onSubmit:r,onReset:p,nombre:e,apellido:l,nit:o,dpi:a,direccion:t,telefono:i,correo:m}}});var m=o(11639),r=o(69885),p=o(8326),c=o(13119),s=o(68879),b=o(69984),V=o.n(b);const v=(0,m.Z)(i,[["render",t]]),f=v;V()(i,"components",{QPage:r.Z,QForm:p.Z,QInput:c.Z,QBtn:s.Z})}}]);