"use strict";(globalThis["webpackChunkposweb"]=globalThis["webpackChunkposweb"]||[]).push([[8354],{8354:(e,a,l)=>{l.r(a),l.d(a,{default:()=>T});var i=l(59835),t=l(86970);const r={class:"row"},n={class:"col col-xs-12 col-sm-7"},o={class:"row"},c=(0,i._)("div",{class:"col"},[(0,i._)("div",{class:"text-subtitle1"},"Facturas sin certificar"),(0,i._)("div",{class:"text-subtitle1"},"Pendientes de anular")],-1),s={class:"col"},u={class:"col col-xs-12 col-sm-5"},d={style:{height:"75vh"}},p={class:"row full-height"},v={class:"col col-xs-12 col-sm-7"},m={class:"col col-xs-12 col-sm-5"};function f(e,a,l,f,g,h){const b=(0,i.up)("KeyPageDetect"),w=(0,i.up)("q-btn"),E=(0,i.up)("q-icon"),C=(0,i.up)("q-input"),F=(0,i.up)("q-table"),P=(0,i.up)("q-page");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(b),(0,i.Wm)(P,{class:"q-pa-sm"},{default:(0,i.w5)((()=>[(0,i._)("div",null,[(0,i._)("div",r,[(0,i._)("div",n,[(0,i._)("div",o,[c,(0,i._)("div",s,[(0,i.Wm)(w,{color:"primary",icon:"cached",label:"Recargar",onClick:e.loadData,loading:e.recargarLoad},null,8,["onClick","loading"])])]),(0,i.Uk)(" "+(0,t.zw)(e.factura)+" - "+(0,t.zw)(e.serie),1)]),(0,i._)("div",u,[(0,i.Wm)(w,{disable:0===e.factura,class:"q-ma-xs",color:"primary",icon:"outbox",label:"Certificar factura: "+e.factura+" - "+e.serie,onClick:e.certificar,loading:e.certificando},null,8,["disable","label","onClick","loading"]),(0,i.Wm)(w,{disable:0===e.factura,class:"q-ma-xs",color:"primary",icon:"print",label:"Reimprimir Contingecia: "+e.factura+" - "+e.serie,onClick:e.reimprimir},null,8,["disable","label","onClick"])])])]),(0,i._)("div",d,[(0,i._)("div",p,[(0,i._)("div",v,[(0,i.Wm)(F,{title:"Pendientes certificar",class:"full-height q-pa-xs","visible-columns":["Fecha","Serie","Factura","Contingencia","Vendedor"],filter:e.filter,rows:e.data,columns:e.columns,onRowClick:e.selectFact,"rows-per-page-options":[0],pagination:{rowsPerPage:0},loading:e.recargarLoad},{"top-right":(0,i.w5)((()=>[(0,i.Wm)(C,{borderless:"",dense:"",modelValue:e.filter,"onUpdate:modelValue":a[0]||(a[0]=a=>e.filter=a),placeholder:"Buscar factura"},{append:(0,i.w5)((()=>[(0,i.Wm)(E,{name:"search"})])),_:1},8,["modelValue"])])),_:1},8,["filter","rows","columns","onRowClick","loading"])]),(0,i._)("div",m,[(0,i.Wm)(F,{title:"Errores factura: "+e.factura+" - "+e.serie,class:"full-height q-pa-xs",rows:e.dataErrores,columns:[{name:"Error",label:"Error",field:"Error",align:"center"}],"rows-per-page-options":[0],pagination:{rowsPerPage:0},loading:e.loadError,"wrap-cells":""},null,8,["title","rows","loading"])])])])])),_:1})],64)}var g=l(34136),h=l(68651),b=l(60499),w=l(30336),E=l(67825),C=l(37655),F=l(17779),P=function(e,a,l,i){function t(e){return e instanceof l?e:new l((function(a){a(e)}))}return new(l||(l=Promise))((function(l,r){function n(e){try{c(i.next(e))}catch(a){r(a)}}function o(e){try{c(i["throw"](e))}catch(a){r(a)}}function c(e){e.done?l(e.value):t(e.value).then(n,o)}c((i=i.apply(e,a||[])).next())}))};const _=[{name:"Fecha",label:"Fecha",field:"Fecha",align:"center"},{name:"Serie",label:"Serie",field:"Serie",align:"center"},{name:"Factura",label:"Factura",field:"Factura",align:"center"},{name:"Contingencia",label:"Contingencia",field:"Contingencia",align:"center"},{name:"Vendedor",label:"Vendedor",field:"Vendedor",align:"center"},{name:"Impresion",label:"Impresion",field:"Impresion",align:"center"}],y=(0,i.aZ)({components:{KeyPageDetect:w.Z},setup(e,{emit:a}){const l=(0,b.iH)([]),i=(0,b.iH)([]),t=(0,b.iH)(""),r=(0,b.iH)(0),n=(0,b.iH)(""),o=(0,b.iH)(!1),c=(0,b.iH)(!1),s=(0,b.iH)(""),u=(0,b.iH)(""),d=(0,b.iH)(!1),p=(0,b.iH)(!1),v=()=>{r.value=0,n.value="",i.value=[],o.value=!0,g.api.get(g.endPoints.FELPENDIENTES).then((e=>{l.value=e.data})).catch((e=>{(0,h.L1)(e)})).finally((()=>{o.value=!1}))},m=()=>{c.value=!0,g.api.get(g.endPoints.FELPENDIENTES+r.value.toString(),(0,g.configApi)({serie:n.value})).then((e=>{i.value=e.data})).catch((e=>{(0,h.L1)(e)})).finally((()=>{c.value=!1}))},f=(e,a,l)=>{r.value=a.Factura,n.value=a.Serie,u.value=a.Impresion,F.log(u.value),m()},w=()=>P(this,void 0,void 0,(function*(){let e=!1;p.value=!0,yield g.api.post(g.endPoints.FELPENDIENTES,r.value,(0,g.configApi)({serie:n.value})).then((a=>{s.value=a.data.Uuid,(0,h.dF)("Factura "+r.value.toString()+" generada correctamente con UUID "+s.value,{position:"top"}),e=!0})).catch((e=>{(0,h.L1)(e,{timeout:0})})).finally((()=>{p.value=!1})),e&&"TKT"===u.value?I():e&&"DOC"===u.value&&y(),v()})),y=()=>{if((0,E.Qe)()||(0,E.tq)()){window.open(E.qC+s.value);return void a("facturado",!0)}let e={printer:(0,E.LX)(),url:E.qC+s.value,filename:"factura.pdf"};(0,C.Q)("Imprimiendo..."),g.api.post("http://localhost:8001",e).then((e=>{F.log(e.data),(0,h.dF)(e.data)})).catch((e=>{(0,h.L1)(e)})).finally((()=>{a("facturado",!0),(0,C.E)()}))},I=()=>{let e=5,l=5;screen.width,screen.height;let i="#/Reportes/FACTURA/"+n.value+"/"+r.value.toString();F.log(i),(0,C.Q)("Imprimiendo...",void 0,void 0,"QSpinnerRadio");try{var t=window.open(i,"Factura","addressbar=no,directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0,scrollbars=no,width="+e+", height="+l+", top=0, left=0");const r=setInterval((()=>{(null===t||void 0===t?void 0:t.closed)&&(clearInterval(r),(0,C.E)(),a("facturado",!0))}),500)}catch(o){F.log(o)}},k=()=>{I(),r.value=0,n.value="",i.value=[]};return{loadData:v,selectFact:f,certificar:w,reimprimir:k,factura:r,serie:n,data:l,dataErrores:i,loadError:c,recargarLoad:o,columns:_,filter:t,showImprimir:d,certificando:p}},created(){this.loadData()}});var I=l(11639),k=l(69885),q=l(68879),x=l(84277),H=l(13119),S=l(22857),D=l(69984),L=l.n(D);const Q=(0,I.Z)(y,[["render",f]]),T=Q;L()(y,"components",{QPage:k.Z,QBtn:q.Z,QTable:x.Z,QInput:H.Z,QIcon:S.Z})}}]);