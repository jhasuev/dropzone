(function(e){function t(t){for(var r,c,o=t[0],s=t[1],l=t[2],f=0,d=[];f<o.length;f++)c=o[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"4f87":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=Object(r["l"])("data-v-1ea1e4ee");Object(r["g"])("data-v-1ea1e4ee");var i={class:"app"},c=Object(r["d"])("h1",{class:"header"},"File uploader",-1);Object(r["f"])();var o=a((function(e,t,n,a,o,s){var l=Object(r["i"])("dropzone"),u=Object(r["i"])("miniatures");return Object(r["e"])(),Object(r["c"])("div",i,[c,Object(r["d"])(l,{files:o.files,file:o.file,onSelectFile:s.selectFile},null,8,["files","file","onSelectFile"]),Object(r["d"])("button",{class:"btn",onClick:t[1]||(t[1]=function(){return s.send&&s.send.apply(s,arguments)})},"Отправить"),Object(r["d"])(u,{files:o.files},null,8,["files"])])})),s=(n("b0c0"),n("ac1f"),n("1276"),Object(r["l"])("data-v-60746a46"));Object(r["g"])("data-v-60746a46");var l={class:"miniatures"},u={key:0,class:"miniatures__list"},f={class:"miniatures__list-title"},d={key:1,class:"miniatures__text"};Object(r["f"])();var p=s((function(e,t,n,a,i,c){return Object(r["e"])(),Object(r["c"])("div",l,[n.files.length?(Object(r["e"])(),Object(r["c"])("div",u,[(Object(r["e"])(!0),Object(r["c"])(r["a"],null,Object(r["h"])(n.files,(function(t,n){return Object(r["e"])(),Object(r["c"])("div",{key:n,class:"miniatures__list-item"},[Object(r["d"])("div",{class:"miniatures__list-preview",style:{"background-image":e.getImageURL(t)}},null,4),Object(r["d"])("div",f,Object(r["j"])(t.name),1)])})),128))])):(Object(r["e"])(),Object(r["c"])("div",d,"Здесь будут отображаться ваши загруженные файлы."))])})),b={methods:{getImageURL:function(e){return"url(".concat(e.isImage?e.base64:"https://bit.ly/3e725Hj",")")}}},v={name:"Miniatures",mixins:[b],props:{files:{type:Array,default:function(){return[]}}}};n("e858");v.render=p,v.__scopeId="data-v-60746a46";var O=v,j=Object(r["l"])("data-v-2d25026f");Object(r["g"])("data-v-2d25026f");var g={key:1};Object(r["f"])();var h=j((function(e,t,n,a,i,c){return Object(r["e"])(),Object(r["c"])("div",{class:"dropzone",onDrop:t[1]||(t[1]=Object(r["k"])((function(){return c.drop&&c.drop.apply(c,arguments)}),["prevent"])),onDragenter:t[2]||(t[2]=Object(r["k"])((function(){return c.dragEnter&&c.dragEnter.apply(c,arguments)}),["prevent"])),onDragleave:t[3]||(t[3]=Object(r["k"])((function(){return c.dragLeave&&c.dragLeave.apply(c,arguments)}),["prevent"])),onDragover:t[4]||(t[4]=Object(r["k"])((function(){return c.dragOver&&c.dragOver.apply(c,arguments)}),["prevent"]))},[n.file?(Object(r["e"])(),Object(r["c"])("div",{key:0,style:{"background-image":e.getImageURL(n.file)},class:"dropzone__preview"},null,4)):(Object(r["e"])(),Object(r["c"])("span",g,Object(r["j"])(c.getDropzoneText),1))],32)})),m={name:"Dropzone",mixins:[b],props:{files:{type:Array,default:function(){return[]}},file:{type:Object,default:function(){return{}}}},data:function(){return{states:{drop:"Перенесите файл сюда!",dragenter:"Отпускайте сюда эти файлы.",dragleave:"Перенесите файл сюда!",dragover:"Отпускайте сюда эти файлы."},state:"drop"}},computed:{getDropzoneText:function(){return this.states[this.state]}},methods:{drop:function(e){this.state="drop",this.$emit("selectFile",e)},dragEnter:function(){this.state="dragenter"},dragLeave:function(){this.state="dragleave"},dragOver:function(){this.state="dragover"}}};n("e787");m.render=h,m.__scopeId="data-v-2d25026f";var y=m,_={name:"App",components:{Miniatures:O,Dropzone:y},data:function(){return{files:[],file:null}},methods:{selectFile:function(e){var t=this,n=e.dataTransfer.files[0];if(n&&!this.fileAlreadyUploaded(n.name)){var r=new FileReader;r.onload=function(e){t.file={name:n.name,isImage:"image"==n.type.split("/").shift(),base64:e.target.result}},r.readAsDataURL(n)}},fileAlreadyUploaded:function(e){return this.files.some((function(t){return t.name===e}))},send:function(){this.file&&(this.file.isImage&&console.log(this.file.base64),this.files.push(this.file),this.file=null)}}};n("70ce");_.render=o,_.__scopeId="data-v-1ea1e4ee";var k=_;n("4f87");Object(r["b"])(k).mount("#app")},"70ce":function(e,t,n){"use strict";n("c9e9")},bc29:function(e,t,n){},c9e9:function(e,t,n){},e47f:function(e,t,n){},e787:function(e,t,n){"use strict";n("bc29")},e858:function(e,t,n){"use strict";n("e47f")}});
//# sourceMappingURL=app.f498cfa2.js.map