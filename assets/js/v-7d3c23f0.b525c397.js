"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[677],{7665:function(t,a,n){n.r(a),n.d(a,{data:function(){return e}});const e={key:"v-7d3c23f0",path:"/reference/hooks/useLoading.html",title:"useLoading",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"API",slug:"api",children:[]},{level:2,title:"Params",slug:"params",children:[{level:3,title:"options",slug:"options",children:[]}]},{level:2,title:"Result",slug:"result",children:[]}],filePathRelative:"reference/hooks/useLoading.md",git:{updatedTime:163168321e4,contributors:[{name:"李旭",email:"461229187@qq.com",commits:1}]}}},3811:function(t,a,n){n.r(a),n.d(a,{default:function(){return s}});const e=(0,n(6252).uE)('<h1 id="useloading" tabindex="-1"><a class="header-anchor" href="#useloading" aria-hidden="true">#</a> useLoading</h1><p>基于 element-plus Loading 的 Hook，可以方便控制页面中整体或局部的 loading 效果。</p><div class="custom-container warning"><p class="custom-container-title">警告</p><p>仅支持 element-plus</p></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> useLoading <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/useLoading&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> loading<span class="token punctuation">,</span> loadingTarget<span class="token punctuation">,</span> openLoading<span class="token punctuation">,</span> closeLoading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useLoading</span><span class="token punctuation">(</span>\n  options<span class="token operator">?</span><span class="token operator">:</span> ILoadingOptions<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="params" tabindex="-1"><a class="header-anchor" href="#params" aria-hidden="true">#</a> Params</h2><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> options</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>text</td><td>显示在加载图标下方的加载文案</td><td><code>string</code></td><td>-</td></tr><tr><td>spinner</td><td>自定义加载图标类名</td><td><code>string</code></td><td>-</td></tr><tr><td>background</td><td>遮罩背景色</td><td><code>string</code></td><td>hsla(0,0%,100%,.9)</td></tr><tr><td>customClass</td><td>Loading 的自定义类名</td><td><code>string</code></td><td>-</td></tr></tbody></table><h2 id="result" tabindex="-1"><a class="header-anchor" href="#result" aria-hidden="true">#</a> Result</h2><p><strong>loadingTarget</strong> 是一个 ref 对象，如果不赋值，则全屏显示 loading，请确保使用场景。</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>loading</td><td>加载中的状态</td><td><code>boolean</code></td><td>false</td></tr><tr><td>loadingTarget</td><td>指向需要展示 loading 的 ref 节点</td><td><code>Ref&lt;HTMLElement&gt;</code></td><td>-</td></tr><tr><td>openLoading</td><td>开启 loading</td><td><code>() =&gt; void</code></td><td>-</td></tr><tr><td>closeLoading</td><td>关闭 loading</td><td><code>() =&gt; void</code></td><td>-</td></tr></tbody></table>',11);var s={render:function(t,a){return e}}}}]);