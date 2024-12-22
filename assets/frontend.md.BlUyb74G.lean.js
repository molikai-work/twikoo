import{_ as a,c as t,a3 as i,o as s}from"./chunks/framework.BLoLNadO.js";const d=JSON.parse('{"title":"前端部署","description":"","frontmatter":{},"headers":[],"relativePath":"frontend.md","filePath":"frontend.md","lastUpdated":null}'),h={name:"frontend.md"};function n(r,e,o,l,p,k){return s(),t("div",null,e[0]||(e[0]=[i(`<h1 id="前端部署" tabindex="-1">前端部署 <a class="header-anchor" href="#前端部署" aria-label="Permalink to &quot;前端部署&quot;">​</a></h1><h2 id="在-hexo-中使用" tabindex="-1">在 Hexo 中使用 <a class="header-anchor" href="#在-hexo-中使用" aria-label="Permalink to &quot;在 Hexo 中使用&quot;">​</a></h2><h3 id="在-hexo-butterfly-主题使用" tabindex="-1">在 <a href="https://github.com/jerryc127/hexo-theme-butterfly" target="_blank" rel="noreferrer">Hexo Butterfly</a> 主题使用 <a class="header-anchor" href="#在-hexo-butterfly-主题使用" aria-label="Permalink to &quot;在 [Hexo Butterfly](https://github.com/jerryc127/hexo-theme-butterfly) 主题使用&quot;">​</a></h3><p>请参考 <a href="https://butterfly.js.org/posts/ceeb73f/#%E8%A9%95%E8%AB%96" target="_blank" rel="noreferrer">Butterfly 安裝文檔(四) 主題配置-2</a> 进行配置</p><h3 id="在-hexo-keep-主题使用" tabindex="-1">在 <a href="https://github.com/XPoet/hexo-theme-keep" target="_blank" rel="noreferrer">Hexo Keep</a> 主题使用 <a class="header-anchor" href="#在-hexo-keep-主题使用" aria-label="Permalink to &quot;在 [Hexo Keep](https://github.com/XPoet/hexo-theme-keep) 主题使用&quot;">​</a></h3><p>请参考 <a href="https://github.com/XPoet/hexo-theme-keep/blob/master/_config.yml" target="_blank" rel="noreferrer">hexo-theme-keep/_config.yml</a> 进行配置</p><h3 id="在-hexo-volantis-主题使用" tabindex="-1">在 <a href="https://github.com/volantis-x/hexo-theme-volantis" target="_blank" rel="noreferrer">Hexo Volantis</a> 主题使用 <a class="header-anchor" href="#在-hexo-volantis-主题使用" aria-label="Permalink to &quot;在 [Hexo Volantis](https://github.com/volantis-x/hexo-theme-volantis) 主题使用&quot;">​</a></h3><p>请参考 <a href="https://github.com/volantis-x/hexo-theme-volantis/blob/master/_config.yml" target="_blank" rel="noreferrer">hexo-theme-volantis/_config.yml</a> 进行配置</p><h3 id="在-hexo-ayer-主题使用" tabindex="-1">在 <a href="https://github.com/Shen-Yu/hexo-theme-ayer" target="_blank" rel="noreferrer">Hexo Ayer</a> 主题使用 <a class="header-anchor" href="#在-hexo-ayer-主题使用" aria-label="Permalink to &quot;在 [Hexo Ayer](https://github.com/Shen-Yu/hexo-theme-ayer) 主题使用&quot;">​</a></h3><p>请参考 <a href="https://github.com/Shen-Yu/hexo-theme-ayer/blob/master/_config.yml" target="_blank" rel="noreferrer">hexo-theme-ayer/_config.yml</a> 进行配置</p><h3 id="在-hexo-next-主题使用" tabindex="-1">在 <a href="https://github.com/next-theme/hexo-theme-next" target="_blank" rel="noreferrer">Hexo NexT</a> 主题使用 <a class="header-anchor" href="#在-hexo-next-主题使用" aria-label="Permalink to &quot;在 [Hexo NexT](https://github.com/next-theme/hexo-theme-next) 主题使用&quot;">​</a></h3><p><strong>暂不支持 NexT 8 以下的版本</strong>，请先升级到 NexT 8。然后在 Hexo 项目根目录执行</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># For NexT version &gt;= 8.0.0 &amp;&amp; &lt; 8.4.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hexo-next-twikoo@1.0.0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># For NexT version &gt;= 8.4.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hexo-next-twikoo@1.0.3</span></span></code></pre></div><p>然后在配置中添加</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">twikoo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  visitor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  envId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">xxxxxxxxxxxxxxx</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 腾讯云环境填 envId；Vercel 环境填地址（https://xxx.vercel.app）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # region: ap-guangzhou # 环境地域，默认为 ap-shanghai，腾讯云环境填 ap-shanghai 或 ap-guangzhou；Vercel 环境不填</span></span></code></pre></div><h3 id="在-hexo-matery-主题使用" tabindex="-1">在 <a href="https://github.com/blinkfox/hexo-theme-matery" target="_blank" rel="noreferrer">Hexo Matery</a> 主题使用 <a class="header-anchor" href="#在-hexo-matery-主题使用" aria-label="Permalink to &quot;在 [Hexo Matery](https://github.com/blinkfox/hexo-theme-matery) 主题使用&quot;">​</a></h3><p>请参考 <a href="https://github.com/blinkfox/hexo-theme-matery/blob/develop/_config.yml" target="_blank" rel="noreferrer">hexo-theme-matery/_config.yml</a> 进行配置</p><h3 id="在-hexo-icarus-主题使用" tabindex="-1">在 <a href="https://github.com/ppoffice/hexo-theme-icarus" target="_blank" rel="noreferrer">Hexo Icarus</a> 主题使用 <a class="header-anchor" href="#在-hexo-icarus-主题使用" aria-label="Permalink to &quot;在 [Hexo Icarus](https://github.com/ppoffice/hexo-theme-icarus) 主题使用&quot;">​</a></h3><p>请参考 <a href="https://www.anzifan.com/post/icarus_to_candy_2/" target="_blank" rel="noreferrer">基于腾讯云，给你的 Icarus 博客配上 Twikoo 评论系统</a> by 异次元de机智君💯</p><h3 id="在-hexo-mengd-萌典-主题使用" tabindex="-1">在 <a href="https://github.com/lete114/hexo-theme-MengD" target="_blank" rel="noreferrer">Hexo MengD(萌典)</a> 主题使用 <a class="header-anchor" href="#在-hexo-mengd-萌典-主题使用" aria-label="Permalink to &quot;在 [Hexo MengD(萌典)](https://github.com/lete114/hexo-theme-MengD) 主题使用&quot;">​</a></h3><p>请参考 <a href="https://github.com/lete114/hexo-theme-MengD/blob/master/_config.yml" target="_blank" rel="noreferrer">hexo-theme-MengD/_config.yml</a> 进行配置</p><h3 id="在-hexo-theme-fluid-主题使用" tabindex="-1">在 <a href="https://github.com/fluid-dev/hexo-theme-fluid" target="_blank" rel="noreferrer">hexo-theme-fluid</a> 主题使用 <a class="header-anchor" href="#在-hexo-theme-fluid-主题使用" aria-label="Permalink to &quot;在 [hexo-theme-fluid](https://github.com/fluid-dev/hexo-theme-fluid) 主题使用&quot;">​</a></h3><p>请参考 <a href="https://hexo.fluid-dev.com/docs/guide/#%E8%AF%84%E8%AE%BA" target="_blank" rel="noreferrer">配置指南-评论</a> 进行配置</p><h3 id="在-hexo-theme-cards-主题使用" tabindex="-1">在 <a href="https://github.com/ChrAlpha/hexo-theme-cards" target="_blank" rel="noreferrer">hexo-theme-cards</a> 主题使用 <a class="header-anchor" href="#在-hexo-theme-cards-主题使用" aria-label="Permalink to &quot;在 [hexo-theme-cards](https://github.com/ChrAlpha/hexo-theme-cards) 主题使用&quot;">​</a></h3><p>请参考 <a href="https://github.com/ChrAlpha/hexo-theme-cards/blob/master/_config.yml" target="_blank" rel="noreferrer">hexo-theme-cards/_config.yml</a> 进行配置</p><h3 id="在-maupassant-hexo-主题使用" tabindex="-1">在 <a href="https://github.com/tufu9441/maupassant-hexo" target="_blank" rel="noreferrer">maupassant-hexo</a> 主题使用 <a class="header-anchor" href="#在-maupassant-hexo-主题使用" aria-label="Permalink to &quot;在 [maupassant-hexo](https://github.com/tufu9441/maupassant-hexo) 主题使用&quot;">​</a></h3><p>请参考 <a href="https://github.com/tufu9441/maupassant-hexo/blob/master/_config.yml" target="_blank" rel="noreferrer">maupassant-hexo/_config.yml</a> 进行配置</p><h3 id="在-hexo-theme-redefine-主题使用" tabindex="-1">在 <a href="https://github.com/EvanNotFound/hexo-theme-redefine" target="_blank" rel="noreferrer">hexo-theme-redefine</a> 主题使用 <a class="header-anchor" href="#在-hexo-theme-redefine-主题使用" aria-label="Permalink to &quot;在 [hexo-theme-redefine](https://github.com/EvanNotFound/hexo-theme-redefine) 主题使用&quot;">​</a></h3><p>请参考 <a href="https://redefine-docs.ohevan.com/docs/configuration-guide/comment#twikoo" target="_blank" rel="noreferrer">Redefine 官方文档 #comment</a> 进行配置</p><h3 id="在-hexo-theme-solitude-主题使用" tabindex="-1">在 <a href="https://github.com/valor-x/hexo-theme-solitude" target="_blank" rel="noreferrer">Hexo-Theme-Solitude</a> 主题使用 <a class="header-anchor" href="#在-hexo-theme-solitude-主题使用" aria-label="Permalink to &quot;在 [Hexo-Theme-Solitude](https://github.com/valor-x/hexo-theme-solitude) 主题使用&quot;">​</a></h3><p>请参考 <a href="https://solitude-docs.efu.me/comments/twikoo" target="_blank" rel="noreferrer">Solitude 文档</a> 进行配置</p><h2 id="在-hugo-中使用" tabindex="-1">在 Hugo 中使用 <a class="header-anchor" href="#在-hugo-中使用" aria-label="Permalink to &quot;在 Hugo 中使用&quot;">​</a></h2><h3 id="在-hugo-theme-stack-主题使用" tabindex="-1">在 <a href="https://github.com/CaiJimmy/hugo-theme-stack" target="_blank" rel="noreferrer">hugo-theme-stack</a> 主题使用 <a class="header-anchor" href="#在-hugo-theme-stack-主题使用" aria-label="Permalink to &quot;在 [hugo-theme-stack](https://github.com/CaiJimmy/hugo-theme-stack) 主题使用&quot;">​</a></h3><p>请参考 <a href="https://stack.jimmycai.com/config/comments" target="_blank" rel="noreferrer">Comments | Stack</a> 和 <a href="https://github.com/CaiJimmy/hugo-theme-stack/blob/master/config.yaml#L83" target="_blank" rel="noreferrer">hugo-theme-stack/config.yaml#L83</a> 进行配置</p><h3 id="在-fixit-主题使用" tabindex="-1">在 <a href="https://github.com/hugo-fixit/FixIt" target="_blank" rel="noreferrer">FixIt</a> 主题使用 <a class="header-anchor" href="#在-fixit-主题使用" aria-label="Permalink to &quot;在 [FixIt](https://github.com/hugo-fixit/FixIt) 主题使用&quot;">​</a></h3><p>请参考 <a href="https://fixit.lruihao.cn/zh-cn/documentation/basics/#theme-configuration" target="_blank" rel="noreferrer">入门篇 - FixIt #主题配置</a> 和 <a href="https://github.com/hugo-fixit/FixIt/blob/8bb2a35dcc4c54fc3e0fb968df063d6be1daabf3/config.toml#L613-L624" target="_blank" rel="noreferrer">hugo-fixit/FixIt/config.toml#L613-L624</a> 进行配置</p><h2 id="在-vitepress-中使用" tabindex="-1">在 VitePress 中使用 <a class="header-anchor" href="#在-vitepress-中使用" aria-label="Permalink to &quot;在 VitePress 中使用&quot;">​</a></h2><p>请参考 <a href="https://github.com/twikoojs/twikoo/issues/715" target="_blank" rel="noreferrer">VitePress 集成 twikoo 参考解决方案</a> 进行配置。</p><h2 id="通过-cdn-引入" tabindex="-1">通过 CDN 引入 <a class="header-anchor" href="#通过-cdn-引入" aria-label="Permalink to &quot;通过 CDN 引入&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>如果您使用的博客主题不支持 Twikoo，并且您不知道如何引入 Twikoo，您可以向博客主题开发者提交适配请求</p></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tcomment&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://cdn.jsdelivr.net/npm/twikoo@1.6.40/dist/twikoo.all.min.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">twikoo.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  envId: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;您的环境id&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 腾讯云环境填 envId；Vercel 环境填地址（https://xxx.vercel.app）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  el: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#tcomment&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 容器元素</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // region: &#39;ap-guangzhou&#39;, // 环境地域，默认为 ap-shanghai，腾讯云环境填 ap-shanghai 或 ap-guangzhou；Vercel 环境不填</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // path: location.pathname, // 用于区分不同文章的自定义 js 路径，如果您的文章路径不是 location.pathname，需传此参数</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // lang: &#39;zh-CN&#39;, // 用于手动设定评论区语言，支持的语言列表 https://github.com/twikoojs/twikoo/blob/main/src/client/utils/i18n/index.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="不同版本之间的区别" tabindex="-1">不同版本之间的区别 <a class="header-anchor" href="#不同版本之间的区别" aria-label="Permalink to &quot;不同版本之间的区别&quot;">​</a></h3><ul><li><code>twikoo.all.min.js</code>: 包含腾讯云云开发（tcb）的完整版本，如果您使用腾讯云云开发部署，请选择此版本</li><li><code>twikoo.min.js</code>: 去除了腾讯云云开发（tcb）的精简版本，体积更小，适合所有非腾讯云云开发部署的用户</li><li><code>twikoo.nocss.js</code>: 在完整版本的基础上剥离了样式，需要同时引入 <code>twikoo.css</code> 才能正常显示，适合想要魔改评论区样式的用户</li></ul><h3 id="更换-cdn-镜像" tabindex="-1">更换 CDN 镜像 <a class="header-anchor" href="#更换-cdn-镜像" aria-label="Permalink to &quot;更换 CDN 镜像&quot;">​</a></h3><p>如果遇到默认 CDN 加载速度缓慢，可更换其他 CDN 镜像。以下为可供选择的公共 CDN，其中一些 CDN 可能需要数天时间同步最新版本：</p><ul><li><code>https://s4.zstatic.net/ajax/libs/twikoo/1.6.40/twikoo.all.min.js</code></li><li><code>https://registry.npmmirror.com/twikoo/1.6.40/files/dist/twikoo.all.min.js</code></li><li><code>https://lib.baomitu.com/twikoo/1.6.40/twikoo.all.min.js</code></li><li><code>https://cdn.jsdelivr.net/npm/twikoo@1.6.40/dist/twikoo.all.min.js</code></li></ul><div class="warning custom-block"><p class="custom-block-title">注意</p><p>建议使用 CDN 引入 Twikoo 的用户在链接地址上锁定版本，以免将来 Twikoo 升级时受到非兼容性更新的影响。</p></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>建议使用 CDN 引入 Twikoo 的用户在代码中加入 <a href="https://developer.mozilla.org/zh-CN/docs/Web/Security/Subresource_Integrity" target="_blank" rel="noreferrer">SRI</a> 以确保完整性，例：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://cdn.jsdelivr.net/npm/twikoo@1.6.36/dist/twikoo.all.min.js&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  integrity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sha384-4KfOjEinLSkv1i1J8TzlkC/RTnuiLoR1OLerVgjEKoH5djYtbf7mzEFsz9p3nfuA&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  crossorigin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;anonymous&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>其中 <code>integrity</code> 的值可以在 <a href="https://www.srihash.org/" target="_blank" rel="noreferrer">SRI Hash Generator</a> 查询。</p></div><h2 id="开启管理面板-腾讯云环境" tabindex="-1">开启管理面板（腾讯云环境） <a class="header-anchor" href="#开启管理面板-腾讯云环境" aria-label="Permalink to &quot;开启管理面板（腾讯云环境）&quot;">​</a></h2><ol><li>进入<a href="https://console.cloud.tencent.com/tcb/env/login" target="_blank" rel="noreferrer">环境-登录授权</a>，点击“自定义登录”右边的“私钥下载”，下载私钥文件</li><li>用文本编辑器打开私钥文件，复制全部内容</li><li>点击评论窗口的“小齿轮”图标，粘贴私钥文件内容，并设置管理员密码</li></ol><p>配置好登录私钥之后无需留存私钥文件，请勿再次下载登录私钥，否则会导致之前配置的登录私钥失效。</p><h2 id="开启管理面板-非腾讯云环境" tabindex="-1">开启管理面板（非腾讯云环境） <a class="header-anchor" href="#开启管理面板-非腾讯云环境" aria-label="Permalink to &quot;开启管理面板（非腾讯云环境）&quot;">​</a></h2><p>点击评论窗口的“小齿轮”图标，设置管理员密码</p>`,53)]))}const g=a(h,[["render",n]]);export{d as __pageData,g as default};
