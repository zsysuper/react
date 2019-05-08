webpackJsonp([3473841433078],{826:function(a,e){a.exports={data:{markdownRemark:{html:'<p>We discovered a minor vulnerability that might affect some apps using ReactDOMServer. We are releasing a patch version for every affected React minor release so that you can upgrade with no friction. Read on for more details.</p>\n<h2 id="概述"><a href="#%E6%A6%82%E8%BF%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>概述</h2>\n<p>Today, we are releasing a fix for a vulnerability we discovered in the <code class="gatsby-code-text">react-dom/server</code> implementation. It was introduced with the version 16.0.0 and has existed in all subsequent releases until today.</p>\n<p>This vulnerability <strong>can only affect some server-rendered React apps.</strong> Purely client-rendered apps are <strong>not</strong> affected. Additionally, we expect that most server-rendered apps don’t contain the vulnerable pattern described below. Nevertheless, we recommend to follow the mitigation instructions at the earliest opportunity.</p>\n<p>While we were investigating this vulnerability, we found similar vulnerabilities in a few other popular front-end libraries. We have coordinated this release together with <a href="https://github.com/vuejs/vue/releases/tag/v2.5.17">Vue</a> and <a href="https://github.com/developit/preact-render-to-string/releases/tag/3.7.1">Preact</a> releases fixing the same issue. The tracking number for this vulnerability is <code class="gatsby-code-text">CVE-2018-6341</code>.</p>\n<h2 id="mitigation"><a href="#mitigation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Mitigation</h2>\n<p><strong>We have prepared a patch release with a fix for every affected minor version.</strong></p>\n<h3 id="160x"><a href="#160x" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>16.0.x</h3>\n<p>如果你在这个版本中使用 <code class="gatsby-code-text">react-dom/server</code> ：</p>\n<ul>\n<li><code class="gatsby-code-text">react-dom@16.0.0</code></li>\n</ul>\n<p>升级到下面的版本来替换之前的版本。</p>\n<ul>\n<li><code class="gatsby-code-text">react-dom@16.0.1</code> <strong>(contains the mitigation)</strong></li>\n</ul>\n<h3 id="161x"><a href="#161x" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>16.1.x</h3>\n<p>如果你在下面的任何一个版本中使用 <code class="gatsby-code-text">react-dom/server</code></p>\n<ul>\n<li><code class="gatsby-code-text">react-dom@16.1.0</code></li>\n<li><code class="gatsby-code-text">react-dom@16.1.1</code></li>\n</ul>\n<p>升级到下面的版本来替换之前的版本。</p>\n<ul>\n<li><code class="gatsby-code-text">react-dom@16.1.2</code> <strong>(contains the mitigation)</strong></li>\n</ul>\n<h3 id="162x"><a href="#162x" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>16.2.x</h3>\n<p>如果你在下面的版本中使用 <code class="gatsby-code-text">react-dom/server</code>：</p>\n<ul>\n<li><code class="gatsby-code-text">react-dom@16.2.0</code></li>\n</ul>\n<p>升级到下面的版本来替换之前的版本。</p>\n<ul>\n<li><code class="gatsby-code-text">react-dom@16.2.1</code> <strong>(contains the mitigation)</strong></li>\n</ul>\n<h3 id="163x"><a href="#163x" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>16.3.x</h3>\n<p>如果你在下面的任何一个版本中使用 <code class="gatsby-code-text">react-dom/server</code>：</p>\n<ul>\n<li><code class="gatsby-code-text">react-dom@16.3.0</code></li>\n<li><code class="gatsby-code-text">react-dom@16.3.1</code></li>\n<li><code class="gatsby-code-text">react-dom@16.3.2</code></li>\n</ul>\n<p>升级到下面的版本来替换之前的版本。</p>\n<ul>\n<li><code class="gatsby-code-text">react-dom@16.3.3</code> <strong>(contains the mitigation)</strong></li>\n</ul>\n<h3 id="164x"><a href="#164x" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>16.4.x</h3>\n<p>如果你在下面的任何一个版本中使用 <code class="gatsby-code-text">react-dom/server</code>：</p>\n<ul>\n<li><code class="gatsby-code-text">react-dom@16.4.0</code></li>\n<li><code class="gatsby-code-text">react-dom@16.4.1</code></li>\n</ul>\n<p>升级到下面的版本来替换之前的版本。</p>\n<ul>\n<li><code class="gatsby-code-text">react-dom@16.4.2</code> <strong>(contains the mitigation)</strong></li>\n</ul>\n<p>If you’re using a newer version of <code class="gatsby-code-text">react-dom</code>, no action is required.</p>\n<p>Note that only the <code class="gatsby-code-text">react-dom</code> package needs to be updated.</p>\n<h2 id="细节描述"><a href="#%E7%BB%86%E8%8A%82%E6%8F%8F%E8%BF%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>细节描述</h2>\n<p>只有当这两个条件都为真时，您的应用程序才会受到这个漏洞的影响：</p>\n<ul>\n<li>您的应用程序正在使用HTML呈现 <a href="/docs/react-dom-server.html">ReactDOMServer API</a>, 并且</li>\n<li>您的应用程序在<strong>HTML标记中包含用户提供的属性名</strong>。</li>\n</ul>\n<p>具体说，脆弱模式就像下面的代码：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">let</span> props <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="gatsby-highlight-code-line">props<span class="token punctuation">[</span>userProvidedData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span>\n</span><span class="token keyword">let</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">props</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> html <span class="token operator">=</span> ReactDOMServer<span class="token punctuation">.</span><span class="token function">renderToString</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>为了利用这个脆弱模式，攻击者需要创建一个触发 XSS 漏洞的特殊属性名。例如：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">let</span> userProvidedData <span class="token operator">=</span> <span class="token string">\'>&lt;/div>&lt;script>alert("hi")&lt;/script>\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>In the vulnerable versions of <code class="gatsby-code-text">react-dom/server</code>, the output would let the attacker inject arbitrary markup:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script language-javascript"><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"hi"</span><span class="token punctuation">)</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>In the versions after the vulnerability was <a href="https://github.com/facebook/react/pull/13302">fixed</a> (and before it was introduced), attributes with invalid names are skipped:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>You would also see a warning about an invalid attribute name.</p>\n<p>Note that <strong>we expect attribute names based on user input to be very rare in practice.</strong> It doesn’t serve any common practical use case, and has other potential security implications that React can’t guard against.</p>\n<h2 id="安装"><a href="#%E5%AE%89%E8%A3%85" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>安装</h2>\n<p>React 16.4.2 版本可以在 npm 上获取。</p>\n<p>使用 Yarn 安装 React 16 版本，运行下面的命令：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code class="gatsby-code-bash">yarn add react@^16.4.2 react-dom@^16.4.2\n</code></pre>\n      </div>\n<p>使用 npm 安装 React 16 版本，运行下面的命令：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code class="gatsby-code-bash"><span class="token function">npm</span> <span class="token function">install</span> --save react@^16.4.2 react-dom@^16.4.2\n</code></pre>\n      </div>\n<p>我们也提供了通过 CDN 的方式 UMD 建立React的方法：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">crossorigin</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://unpkg.com/react@16/umd/react.production.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">crossorigin</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://unpkg.com/react-dom@16/umd/react-dom.production.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>点击链接获取 <a href="/docs/installation.html">更详细的安装教程</a>.</p>\n<h2 id="更新日志"><a href="#%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>更新日志</h2>\n<h3 id="react-dom-服务器"><a href="#react-dom-%E6%9C%8D%E5%8A%A1%E5%99%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React DOM 服务器</h3>\n<ul>\n<li>\n<p>Fix a potential XSS vulnerability when the attacker controls an attribute name (<code class="gatsby-code-text">CVE-2018-6341</code>). This fix is available in the latest <code class="gatsby-code-text">react-dom@16.4.2</code>, as well as in previous affected minor versions: <code class="gatsby-code-text">react-dom@16.0.1</code>, <code class="gatsby-code-text">react-dom@16.1.2</code>, <code class="gatsby-code-text">react-dom@16.2.1</code>, and <code class="gatsby-code-text">react-dom@16.3.3</code>. (<a href="https://github.com/gaearon">@gaearon</a> in <a href="https://github.com/facebook/react/pull/13302">#13302</a>)</p>\n</li>\n<li>\n<p>Fix a crash in the server renderer when an attribute is called <code class="gatsby-code-text">hasOwnProperty</code>. This fix is only available in <code class="gatsby-code-text">react-dom@16.4.2</code>. (<a href="https://github.com/gaearon">@gaearon</a> in <a href="https://github.com/facebook/react/pull/13303">#13303</a>)</p>\n</li>\n</ul>',excerpt:"We discovered a minor vulnerability that might affect some apps using ReactDOMServer. We are releasing a patch version for every affected React minor release so that you can upgrade with no friction. Read on for more details. 概述 Today, we are releasing a fix for a vulnerability we discovered in the   implementation. It was introduced with the version 16.0.0 and has existed in all subsequent releases until today. This vulnerability  can only affect some server-rendered React apps.  Purely client…",frontmatter:{title:"React v16.4.2: Server-side vulnerability fix",next:null,prev:null,author:[{frontmatter:{name:"Dan Abramov",url:"https://twitter.com/dan_abramov"}}]},fields:{date:"July 31, 2018",path:"blog/2018-08-01-react-v-16-4-2.md",slug:"/blog/2018/08/01/react-v-16-4-2.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.7: No, This Is Not the One With Hooks"},fields:{slug:"/blog/2018/12/19/react-v-16-7.html"}}},{node:{frontmatter:{title:"React 16.x Roadmap"},fields:{slug:"/blog/2018/11/27/react-16-roadmap.html"}}},{node:{frontmatter:{title:"React Conf recap: Hooks, Suspense, and Concurrent Rendering"},fields:{slug:"/blog/2018/11/13/react-conf-recap.html"}}},{node:{frontmatter:{title:"React v16.6.0: lazy, memo and contextType"},fields:{slug:"/blog/2018/10/23/react-v-16-6.html"}}},{node:{frontmatter:{title:"Create React App 2.0: Babel 7, Sass, and More"},fields:{slug:"/blog/2018/10/01/create-react-app-v2.html"}}},{node:{frontmatter:{title:"Introducing the React Profiler"},fields:{slug:"/blog/2018/09/10/introducing-the-react-profiler.html"}}},{node:{frontmatter:{title:"React v16.4.2: Server-side vulnerability fix"},fields:{slug:"/blog/2018/08/01/react-v-16-4-2.html"}}},{node:{frontmatter:{title:"You Probably Don't Need Derived State"},fields:{slug:"/blog/2018/06/07/you-probably-dont-need-derived-state.html"}}},{node:{frontmatter:{title:"React v16.4.0: Pointer Events"},fields:{slug:"/blog/2018/05/23/react-v-16-4.html"}}},{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}}]}},pathContext:{slug:"/blog/2018/08/01/react-v-16-4-2.html"}}}});
//# sourceMappingURL=path---blog-2018-08-01-react-v-16-4-2-html-e2183a5cc7a5a095147e.js.map