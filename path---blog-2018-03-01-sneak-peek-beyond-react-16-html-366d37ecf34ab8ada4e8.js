webpackJsonp([0x89cb97878829],{821:function(e,t){e.exports={data:{markdownRemark:{html:'<p>我们团队成员 <a href="https://twitter.com/dan_abramov">Dan Abramov</a> 刚刚在 <a href="https://2018.jsconf.is/">JSConf Iceland 2018</a>，就我们正在着手做的一些 React 新的功能特性发表了演讲。这次演讲以一个问题开场：“在计算能力和网速存在巨大差异的背景下，我们怎样才能给每个人带来最好的用户体验？”</p>\n<p>这是 JSConf Iceland 提供的<a href="https://www.youtube.com/watch?v=v6iR3Zk4oDY">视频</a>。若果你现在停下本文的阅读去看视频，我觉得你一定会更加喜欢这个演讲视频。但是如果你没有时间观看，下面是对这次演讲的一个（非常）简要的总结。</p>\n<h2 id="关于两个演示"><a href="#%E5%85%B3%E4%BA%8E%E4%B8%A4%E4%B8%AA%E6%BC%94%E7%A4%BA" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>关于两个演示</h2>\n<p>第一个演示中，Dan 说道： “我们已经构建了一种通用的方法来确保高优先级的更新不会被低优先级更新所阻塞，这种技术叫时间分片。如果我的设备足够快，感觉就像是同步的；如果我的设备很慢，我们仍然能感觉到应用在积极响应我们的操作。这多亏了 <a href="https://developers.google.com/web/updates/2015/08/using-requestidlecallback">requestIdleCallback API</a> 使得应用可以适应不同配置的设备。需要注意的是只有最终状态被渲染出来了，屏幕的渲染始终保持一致，并没有让我们感觉到渲染速度很慢，从而导致用户体验不佳。”</p>\n<p>在第二个演示中，Dan解释说：“我们已经构建了一种通用的方法，让组件在加载异步数据时暂停渲染，这就是我们所说的 <strong>suspense</strong>。你可以暂停任何状态更新，直到数据准备就绪，并且可以将异步加载添加到组件树中的任何组件，而无需通过应用管理所有属性和状态，避免增加逻辑复杂度。在网速很快的情况下，更新显示非常流畅且瞬时，不会让我们看着一堆恼人的加载图标转来转去最后消失。当网速慢的时候，你可以专门设计一下用户应该看到哪些加载状态，以及它们应该呈现的粒度，而不是根据你写的代码的来决定显示什么 spinner。让程序始终保持响应。”</p>\n<p>“重要的是，这仍然是你了解的那个 React。这仍然是那个声明式的组件化的你喜欢的 React。”</p>\n<p>我们已经迫不及待地想在在今年晚些时候发布这些新的异步渲染功能。请在 Twitter 上关注 <a href="https://twitter.com/reactjs">@reactjs</a> 以获取更新。</p>',excerpt:"我们团队成员  Dan Abramov  刚刚在  JSConf Iceland 2018 ，就我们正在着手做的一些 React 新的功能特性发表了演讲。这次演讲以一个问题开场：“在计算能力和网速存在巨大差异的背景下，我们怎样才能给每个人带来最好的用户体验？” 这是 JSConf Iceland 提供的 视频 。若果你现在停下本文的阅读去看视频，我觉得你一定会更加喜欢这个演讲视频。但是如果你没有时间观看，下面是对这次演讲的一个（非常）简要的总结。 关于两个演示 第一个演示中，Dan 说道： “我们已经构建了一种通用的方法来确保高优先级的更新不会被低优先级更新所阻塞，这种技术叫时间分片。如果我的设备足够快，感觉就像是同步的；如果我的设备很慢，我们仍然能感觉到应用在积极响应我们的操作。这多亏了  requestIdleCallback API  使得应用可以适应不同配置的设备。需要注意的是只有最终状态被渲染出来了，屏幕的渲染始终保持一致，并没有让我们感觉到渲染速度很慢，从而导致用户体验不佳。” 在第二个演示中，Dan…",frontmatter:{title:"Sneak Peek: Beyond React 16",next:null,prev:null,author:[{frontmatter:{name:"Sophie Alpert",url:"https://sophiebits.com/"}}]},fields:{date:"February 28, 2018",path:"blog/2018-03-01-sneak-peek-beyond-react-16.md",slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.7: No, This Is Not the One With Hooks"},fields:{slug:"/blog/2018/12/19/react-v-16-7.html"}}},{node:{frontmatter:{title:"React 16.x Roadmap"},fields:{slug:"/blog/2018/11/27/react-16-roadmap.html"}}},{node:{frontmatter:{title:"React Conf recap: Hooks, Suspense, and Concurrent Rendering"},fields:{slug:"/blog/2018/11/13/react-conf-recap.html"}}},{node:{frontmatter:{title:"React v16.6.0: lazy, memo and contextType"},fields:{slug:"/blog/2018/10/23/react-v-16-6.html"}}},{node:{frontmatter:{title:"Create React App 2.0: Babel 7, Sass, and More"},fields:{slug:"/blog/2018/10/01/create-react-app-v2.html"}}},{node:{frontmatter:{title:"Introducing the React Profiler"},fields:{slug:"/blog/2018/09/10/introducing-the-react-profiler.html"}}},{node:{frontmatter:{title:"React v16.4.2: Server-side vulnerability fix"},fields:{slug:"/blog/2018/08/01/react-v-16-4-2.html"}}},{node:{frontmatter:{title:"You Probably Don't Need Derived State"},fields:{slug:"/blog/2018/06/07/you-probably-dont-need-derived-state.html"}}},{node:{frontmatter:{title:"React v16.4.0: Pointer Events"},fields:{slug:"/blog/2018/05/23/react-v-16-4.html"}}},{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}}]}},pathContext:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}}});
//# sourceMappingURL=path---blog-2018-03-01-sneak-peek-beyond-react-16-html-366d37ecf34ab8ada4e8.js.map