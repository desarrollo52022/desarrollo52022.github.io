"use strict";(globalThis["webpackChunkposweb"]=globalThis["webpackChunkposweb"]||[]).push([[638],{50638:(e,o,r)=>{r.r(o),r.d(o,{default:()=>V});var a=r(59835),l=r(86970),t=r(61957);const i={class:"row q-ma-md"},d={class:"col col-xs-12 col-sm-4"},n={class:"col col-xs-12 col-sm-4"},c=(0,a._)("tr",null,[(0,a._)("td",{style:{padding:"2px",border:"1px solid",height:"auto"}},"Producto"),(0,a._)("td",{style:{padding:"2px",border:"1px solid",height:"auto"}},"Código Barra"),(0,a._)("td",{style:{padding:"2px",border:"1px solid",height:"auto"}},"Eliminar")],-1),s={style:{padding:"2px",border:"1px solid",height:"auto"}},p={style:{padding:"2px",border:"1px solid",height:"auto"}},u={style:{padding:"2px",border:"1px solid",height:"auto"}};function g(e,o,r,g,m,w){const h=(0,a.up)("q-icon"),b=(0,a.up)("q-input"),f=(0,a.up)("q-inner-loading"),_=(0,a.up)("q-th"),P=(0,a.up)("q-tr"),v=(0,a.up)("q-btn"),y=(0,a.up)("q-td"),x=(0,a.up)("q-table"),k=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(k,{padding:""},{default:(0,a.w5)((()=>[(0,a._)("div",i,[(0,a._)("div",d,[(0,a.Wm)(b,{filled:"",dense:"",debounce:"500",clearable:"",modelValue:e.prod,"onUpdate:modelValue":o[0]||(o[0]=o=>e.prod=o),label:"Buscar código de producto"},{append:(0,a.w5)((()=>[(0,a.Wm)(h,{name:"search"})])),_:1},8,["modelValue"])]),(0,a._)("div",n,[(0,a.Wm)(b,{ref:"buscarDescRef",dense:"",debounce:"500",clearable:"",modelValue:e.descripcion,"onUpdate:modelValue":o[1]||(o[1]=o=>e.descripcion=o),label:"Buscar descripción del producto",autofocus:""},{append:(0,a.w5)((()=>[(0,a.Wm)(h,{name:"search"})])),_:1},8,["modelValue"])])]),(0,a.Wm)(x,{ref:"bcRef",rows:e.productos,columns:e.columns,"row-key":"Producto",loading:e.loading,filter:e.filter,pagination:{rowsPerPage:0},style:{height:"570px"}},{loading:(0,a.w5)((()=>[(0,a.Wm)(f,{showing:"",color:"primary"})])),"top-left":(0,a.w5)((()=>[(0,a.Wm)(b,{borderless:"",debounce:"500",clearable:"",modelValue:e.filter,"onUpdate:modelValue":o[2]||(o[2]=o=>e.filter=o),placeholder:"Buscar"},{append:(0,a.w5)((()=>[(0,a.Wm)(h,{name:"search"})])),_:1},8,["modelValue"])])),header:(0,a.w5)((e=>[(0,a.Wm)(P,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{"auto-width":""}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.cols,(o=>((0,a.wg)(),(0,a.j4)(_,{key:o.name,props:e},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(o.label),1)])),_:2},1032,["props"])))),128))])),_:2},1032,["props"])])),body:(0,a.w5)((o=>[(0,a.Wm)(P,{props:o,onDblclick:r=>e.asignarBarras(o.row)},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{"auto-width":""},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{size:"sm",color:"primary",round:"",dense:"",onClick:e=>o.expand=!o.expand,icon:o.expand?"arrow_drop_up":"arrow_drop_down"},null,8,["onClick","icon"])])),_:2},1024),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.cols,(e=>((0,a.wg)(),(0,a.j4)(y,{key:e.name,props:o},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.value),1)])),_:2},1032,["props"])))),128))])),_:2},1032,["props","onDblclick"]),(0,a.wy)((0,a.Wm)(P,{props:o},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{colspan:"100%",style:{border:"1px solid"}},{default:(0,a.w5)((()=>[(0,a._)("table",null,[c,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.row.Barras,(r=>((0,a.wg)(),(0,a.iD)("tr",{key:r},[(0,a._)("td",s,(0,l.zw)(o.row.Codigo),1),(0,a._)("td",p,(0,l.zw)(r),1),(0,a._)("td",u,[(0,a.Wm)(v,{outline:"",color:"red",icon:"delete_forever",class:"",onClick:a=>e.eliminarBarra(o.row.Producto,o.row.Lote,r)},null,8,["onClick"])])])))),128))])])),_:2},1024)])),_:2},1032,["props"]),[[t.F8,o.expand]])])),_:1},8,["rows","columns","loading","filter"])])),_:1})}var m=r(34136),w=r(68651),h=r(60499),b=r(17779),f=function(e,o,r,a){function l(e){return e instanceof r?e:new r((function(o){o(e)}))}return new(r||(r=Promise))((function(r,t){function i(e){try{n(a.next(e))}catch(o){t(o)}}function d(e){try{n(a["throw"](e))}catch(o){t(o)}}function n(e){e.done?r(e.value):l(e.value).then(i,d)}n((a=a.apply(e,o||[])).next())}))};const _=[{required:!0,name:"Producto",label:"Producto",field:"Producto",align:"center",sortable:!0},{name:"Descripcion",label:"Descripción",field:"Descripcion",align:"center",sortable:!0,format:e=>`${e.normalize("NFD").replace(/[\u0300-\u036f]/g,"")}`},{name:"Lote",label:"Lote",field:"Lote",align:"center",sortable:!0},{name:"DescripcionLote",label:"Descripcion Lote",field:"DescripcionLote",align:"center",sortable:!0}],P=(0,a.aZ)({setup(){const e=(0,h.iH)([]),o=(0,h.iH)(""),r=(0,h.iH)(!1),a=(0,h.iH)(""),l=(0,h.iH)(""),t=()=>f(this,void 0,void 0,(function*(){r.value=!0,yield m.api.get(m.servicesUrlProd+m.endPoints.PRODUCTOS,(0,m.configApi)({queryParams:{producto:a.value,descripcion:l.value,tipo:null}})).then((o=>{let r=[]=o.data.Productos;e.value=r})).catch((e=>{b.log(e)})),r.value=!1})),i=e=>f(this,void 0,void 0,(function*(){let o=yield(0,w.UA)("Código de barra","");if(o){let r={Producto:e.Producto,Lote:e.Lote,Alterno:o.toUpperCase()};yield m.api.post(m.servicesUrlProd+m.endPoints.BARRAS,r).then((e=>{(0,w.dF)("Código de barra asigando correctamente"),t()})).catch((e=>{(0,w.L1)(e)}))}})),d=(e,o)=>{},n=(e,o,r)=>f(this,void 0,void 0,(function*(){let a={Producto:e,Lote:o,Alterno:r.toUpperCase()};yield m.api.delete(m.servicesUrlProd+m.endPoints.BARRAS,(0,m.configApi)({datos:a})).then((e=>{(0,w.dF)("Código de barra eliminado correctamente"),t()})).catch((e=>{(0,w.L1)(e)}))}));return{productos:e,columns:_,filter:o,loading:r,prod:a,descripcion:l,getProductos:t,asignarBarras:i,editarBarra:d,eliminarBarra:n}},watch:{descripcion(e){this.getProductos()},prod(e){this.getProductos()}}});var v=r(11639),y=r(69885),x=r(13119),k=r(22857),W=r(11221),C=r(84277),D=r(60854),B=r(31233),L=r(21682),q=r(67220),U=r(68879),Z=r(69984),Q=r.n(Z);const A=(0,v.Z)(P,[["render",g]]),V=A;Q()(P,"components",{QPage:y.Z,QInput:x.Z,QIcon:k.Z,QCheckbox:W.Z,QTable:C.Z,QInnerLoading:D.Z,QTr:B.Z,QTh:L.Z,QTd:q.Z,QBtn:U.Z})}}]);