(self.webpackChunk=self.webpackChunk||[]).push([[2580],{2580:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var o=n(6252);const l=(0,o.HX)("data-v-3d9f646e");(0,o.dD)("data-v-3d9f646e");const c={style:{"padding-top":"16px"}},d=(0,o.Uk)("复制");(0,o.Cn)();const u=l(((e,t,n,u,a,r)=>{const p=(0,o.up)("el-input"),i=(0,o.up)("el-button");return(0,o.wg)(),(0,o.j4)("div",c,[(0,o.Wm)(p,{modelValue:e.input,"onUpdate:modelValue":t[1]||(t[1]=t=>e.input=t),placeholder:"请输入内容",style:{width:"200px"}},null,8,["modelValue"]),(0,o.Wm)(i,{onClick:e.onClick,style:{"margin-left":"10px"}},{default:l((()=>[d])),_:1},8,["onClick"])])}));var a=n(2262),r=n(127),p=(0,o.aZ)({components:{ElButton:r.mi,ElInput:r.EZ},setup(){let e=(0,a.iH)("复制的文本");const{copyText:t}=(()=>{const e=(()=>{const e=document.createElement("div");return e.style.whiteSpace="pre",e})();return{copyText:t=>{if(!t)return;const n=window.getSelection();if(!n)return;const o=document.createRange();e.textContent=t,document.body.appendChild(e),o.selectNode(e),n.removeAllRanges(),n.addRange(o);try{document.execCommand("Copy")}catch(e){console.error("copy failed!")}n.removeAllRanges(),e.textContent="",document.body.removeChild(e)}}})();return{input:e,onClick:()=>{t(e.value)}}}});p.render=u,p.__scopeId="data-v-3d9f646e";var i=p}}]);