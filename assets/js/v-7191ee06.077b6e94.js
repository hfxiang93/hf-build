(self.webpackChunk=self.webpackChunk||[]).push([[1670],{3901:function(n,e,s){"use strict";s.r(e),s.d(e,{data:function(){return a}});const a={key:"v-7191ee06",path:"/guide/standard/es-lint.html",title:"ESLint",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Airbnb 规范",slug:"airbnb-规范",children:[]},{level:2,title:"取消 ESLint 校验",slug:"取消-eslint-校验",children:[]}],filePathRelative:"guide/standard/es-lint.md",git:{updatedTime:162452418e4,contributors:[]}}},6886:function(n,e,s){"use strict";s.r(e),s.d(e,{default:function(){return h}});var a=s(6252);const l=(0,a.Wm)("h1",{id:"eslint"},[(0,a.Wm)("a",{class:"header-anchor",href:"#eslint"},"#"),(0,a.Uk)(" ESLint")],-1),t=(0,a.Wm)("p",null,"不管是多人合作还是个人项目，代码规范都是很重要的。这样做不仅可以很大程度地避免基本语法错误，也保证了代码的可读性。",-1),r=(0,a.Wm)("h2",{id:"airbnb-规范"},[(0,a.Wm)("a",{class:"header-anchor",href:"#airbnb-规范"},"#"),(0,a.Uk)(" Airbnb 规范")],-1),i=(0,a.Uk)("了解 "),c={href:"https://github.com/airbnb/javascript",target:"_blank",rel:"noopener noreferrer"},p=(0,a.Uk)("Airbnb JavaScript Style Guide"),o=(0,a.Uk)("，"),u={href:"https://github.com/lin-123/javascript",target:"_blank",rel:"noopener noreferrer"},d=(0,a.Uk)("中文参考"),b=(0,a.Uk)("。"),m=(0,a.uE)('<div class="custom-container tip"><p class="custom-container-title">为什么选择 Airbnb 规范</p><ul><li>最严谨的 ESlint 配置</li><li>Github 超过 100k star</li></ul></div><h2 id="取消-eslint-校验"><a class="header-anchor" href="#取消-eslint-校验">#</a> 取消 ESLint 校验</h2><p>一般情况下，可以通过<strong>注释</strong>的方式取消校验。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* eslint-disable */</span>\n<span class="token operator">...</span>\n<span class="token comment">/* eslint-enable */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>指定的规则启用或禁用警告:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* eslint-disable no-alert, no-console */</span>\n<span class="token operator">...</span>\n<span class="token comment">/* eslint-enable no-alert, no-console */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>单行跳过验证：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// eslint-disable-next-line</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',8);var h={render:function(n,e){const s=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.j4)(a.HY,null,[l,t,r,(0,a.Wm)("p",null,[i,(0,a.Wm)("a",c,[p,(0,a.Wm)(s)]),o,(0,a.Wm)("a",u,[d,(0,a.Wm)(s)]),b]),m],64)}}}}]);