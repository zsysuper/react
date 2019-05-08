webpackJsonp([2452804526654],{724:function(e,t){e.exports={data:{markdownRemark:{html:'<p>I’ll start by answering the obvious question:</p>\n<blockquote>\n<p>What happened to 0.6 and 0.7?</p>\n</blockquote>\n<p>It’s become increasingly obvious since our launch in May that people want to use React on the server. With the server-side rendering abilities, that’s a perfect fit. However using the same copy of React on the server and then packaging it up for the client is surprisingly a harder problem. People have been using our <code class="gatsby-code-text">react-tools</code> module which includes React, but when browserifying that ends up packaging all of <code class="gatsby-code-text">esprima</code> and some other dependencies that aren’t needed on the client. So we wanted to make this whole experience better.</p>\n<p>We talked with <a href="https://github.com/jeffbski">Jeff Barczewski</a> who was the owner of the <code class="gatsby-code-text">react</code> module on npm. He was kind enough to transition ownership to us and release his package under a different name: <code class="gatsby-code-text">autoflow</code>. I encourage you to <a href="https://github.com/jeffbski/autoflow">check it out</a> if you’re writing a lot of asynchronous code. In order to not break all of <code class="gatsby-code-text">react</code>’s current users of 0.7.x, we decided to bump our version to 0.8 and skip the issue entirely. We’re also including a warning if you use our <code class="gatsby-code-text">react</code> module like you would use the previous package.</p>\n<p>In order to make the transition to 0.8 for our current users as painless as possible, we decided to make 0.8 primarily a bug fix release on top of 0.5. No public APIs were changed (even if they were already marked as deprecated). We haven’t added any of the new features we have in master, though we did take the opportunity to pull in some improvements to internals.</p>\n<p>We hope that by releasing <code class="gatsby-code-text">react</code> on npm, we will enable a new set of uses that have been otherwise difficult. All feedback is welcome!</p>\n<h2 id="changelog"><a href="#changelog" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changelog</h2>\n<h3 id="react"><a href="#react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React</h3>\n<ul>\n<li>\n<p>Added support for more attributes:</p>\n<ul>\n<li><code class="gatsby-code-text">rows</code> &#x26; <code class="gatsby-code-text">cols</code> for <code class="gatsby-code-text">&lt;textarea&gt;</code></li>\n<li><code class="gatsby-code-text">defer</code> &#x26; <code class="gatsby-code-text">async</code> for <code class="gatsby-code-text">&lt;script&gt;</code></li>\n<li><code class="gatsby-code-text">loop</code> for <code class="gatsby-code-text">&lt;audio&gt;</code> &#x26; <code class="gatsby-code-text">&lt;video&gt;</code></li>\n<li><code class="gatsby-code-text">autoCorrect</code> for form fields (a non-standard attribute only supported by mobile WebKit)</li>\n</ul>\n</li>\n<li>Improved error messages</li>\n<li>Fixed Selection events in IE11</li>\n<li>Added <code class="gatsby-code-text">onContextMenu</code> events</li>\n</ul>\n<h3 id="react-with-addons"><a href="#react-with-addons" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React with Addons</h3>\n<ul>\n<li>Fixed bugs with TransitionGroup when children were undefined</li>\n<li>Added support for <code class="gatsby-code-text">onTransition</code></li>\n</ul>\n<h3 id="react-tools"><a href="#react-tools" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>react-tools</h3>\n<ul>\n<li>Upgraded <code class="gatsby-code-text">jstransform</code> and <code class="gatsby-code-text">esprima-fb</code></li>\n</ul>\n<h3 id="jsxtransformer"><a href="#jsxtransformer" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSXTransformer</h3>\n<ul>\n<li>Added support for use in IE8</li>\n<li>Upgraded browserify, which reduced file size by ~65KB (16KB gzipped)</li>\n</ul>',excerpt:"I’ll start by answering the obvious question: What happened to 0.6 and 0.7? It’s become increasingly obvious since our launch in May that people want to use React on the server. With the server-side rendering abilities, that’s a perfect fit. However using the same copy of React on the server and then packaging it up for the client is surprisingly a harder problem. People have been using our   module which includes React, but when browserifying that ends up packaging all of   and some other…",frontmatter:{title:"React v0.8",next:null,prev:null,author:[{frontmatter:{name:"Paul O’Shannessy",url:"https://twitter.com/zpao"}}]},fields:{date:"December 18, 2013",path:"blog/2013-12-19-react-v0.8.0.md",slug:"/blog/2013/12/19/react-v0.8.0.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.7: No, This Is Not the One With Hooks"},fields:{slug:"/blog/2018/12/19/react-v-16-7.html"}}},{node:{frontmatter:{title:"React 16.x Roadmap"},fields:{slug:"/blog/2018/11/27/react-16-roadmap.html"}}},{node:{frontmatter:{title:"React Conf recap: Hooks, Suspense, and Concurrent Rendering"},fields:{slug:"/blog/2018/11/13/react-conf-recap.html"}}},{node:{frontmatter:{title:"React v16.6.0: lazy, memo and contextType"},fields:{slug:"/blog/2018/10/23/react-v-16-6.html"}}},{node:{frontmatter:{title:"Create React App 2.0: Babel 7, Sass, and More"},fields:{slug:"/blog/2018/10/01/create-react-app-v2.html"}}},{node:{frontmatter:{title:"Introducing the React Profiler"},fields:{slug:"/blog/2018/09/10/introducing-the-react-profiler.html"}}},{node:{frontmatter:{title:"React v16.4.2: Server-side vulnerability fix"},fields:{slug:"/blog/2018/08/01/react-v-16-4-2.html"}}},{node:{frontmatter:{title:"You Probably Don't Need Derived State"},fields:{slug:"/blog/2018/06/07/you-probably-dont-need-derived-state.html"}}},{node:{frontmatter:{title:"React v16.4.0: Pointer Events"},fields:{slug:"/blog/2018/05/23/react-v-16-4.html"}}},{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}}]}},pathContext:{slug:"/blog/2013/12/19/react-v0.8.0.html"}}}});
//# sourceMappingURL=path---blog-2013-12-19-react-v-0-8-0-html-9b86102cda1676239401.js.map