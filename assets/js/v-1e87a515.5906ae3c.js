(self.webpackChunk=self.webpackChunk||[]).push([[5316],{281:function(e,a,l){"use strict";l.r(a),l.d(a,{data:function(){return n}});const n={key:"v-1e87a515",path:"/guide/overview/build.html",title:"构建部署",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"构建",slug:"构建",children:[]},{level:2,title:"配置打包路径",slug:"配置打包路径",children:[]},{level:2,title:"环境变量",slug:"环境变量",children:[]},{level:2,title:"分析包体积",slug:"分析包体积",children:[]},{level:2,title:"Router Mode",slug:"router-mode",children:[]},{level:2,title:"部署",slug:"部署",children:[]}],filePathRelative:"guide/overview/build.md",git:{updatedTime:162452418e4,contributors:[]}}},6652:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return f}});var n=l(6252);const r=(0,n.Wm)("h1",{id:"构建部署"},[(0,n.Wm)("a",{class:"header-anchor",href:"#构建部署"},"#"),(0,n.Uk)(" 构建部署")],-1),t=(0,n.Wm)("h2",{id:"构建"},[(0,n.Wm)("a",{class:"header-anchor",href:"#构建"},"#"),(0,n.Uk)(" 构建")],-1),s=(0,n.Wm)("p",null,"当项目等待测试或开发完毕准备上线时，与 @vue/cli 一样，只需要运行一行命令就可以打包你的应用：",-1),c=(0,n.Wm)("div",{class:"language-bash ext-sh"},[(0,n.Wm)("pre",{class:"language-bash"},[(0,n.Wm)("code",null,[(0,n.Wm)("span",{class:"token function"},"npm"),(0,n.Uk)(" run build\n")])])],-1),u=(0,n.Wm)("div",{class:"language-bash ext-sh"},[(0,n.Wm)("pre",{class:"language-bash"},[(0,n.Wm)("code",null,[(0,n.Wm)("span",{class:"token function"},"npm"),(0,n.Uk)(" run build:test\n")])])],-1),d=(0,n.uE)('<h2 id="配置打包路径"><a class="header-anchor" href="#配置打包路径">#</a> 配置打包路径</h2><p>通常情况下，测试环境都会放在本地服务器下，所以打包路径显得尤为重要。大多数项目在没有正式上线前，我们访问的地址可能都是 <code>IP</code> + <code>项目名</code> 的形式访问，所以默认打包路径会附带项目的名称，当然你可以通过 vue.config.js 中的 publicPath 改变此规则。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>打包的项目取自 <code>package.json</code> 的 <code>name</code> 属性。</p></div><h2 id="环境变量"><a class="header-anchor" href="#环境变量">#</a> 环境变量</h2><p>不论是开发、测试还是生产，都配备了对应的文件来处理不同环境下需要打包的内容，这与你执行的命令息息相关，它将直接影响你的打包结果。</p>',5),o=(0,n.Uk)("想了解更多关于环境变量的内容，请查看"),i={href:"/core/env.md",target:"_blank",rel:"noopener noreferrer"},h=(0,n.Uk)("环境变量"),p=(0,n.Uk)("章节。"),m=(0,n.uE)('<h2 id="分析包体积"><a class="header-anchor" href="#分析包体积">#</a> 分析包体积</h2><p>如果你的构建文件很大，超出了你的预料，运行下面的命令构建并分析依赖模块的体积分布，针对性的优化你的代码：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> run analyzer\n</code></pre></div><h2 id="router-mode"><a class="header-anchor" href="#router-mode">#</a> Router Mode</h2><p>默认情况下使用 hash 路由，如果想使用 history 路由可以在 <code>router/index.ts</code> 中配置，并与后端人员做好协调。</p><h2 id="部署"><a class="header-anchor" href="#部署">#</a> 部署</h2><p>上面提到的构建方式都是在我们自己的电脑上进行打包，这样效率很低，推荐配置 CI/CD 实现全自动化的上线流程。</p>',7);var f={render:function(e,a){const l=(0,n.up)("CodeGroupItem"),f=(0,n.up)("CodeGroup"),g=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.j4)(n.HY,null,[r,t,s,(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[(0,n.Wm)(l,{title:"正式环境"},{default:(0,n.w5)((()=>[c])),_:1}),(0,n.Wm)(l,{title:"测试环境"},{default:(0,n.w5)((()=>[u])),_:1})])),_:1}),d,(0,n.Wm)("p",null,[o,(0,n.Wm)("a",i,[h,(0,n.Wm)(g)]),p]),m],64)}}}}]);