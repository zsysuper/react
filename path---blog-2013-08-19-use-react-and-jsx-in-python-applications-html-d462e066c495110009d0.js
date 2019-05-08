webpackJsonp([0x76de65797b29],{715:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Today we’re happy to announce the initial release of <a href="https://github.com/facebook/react-python">PyReact</a>, which makes it easier to use React and JSX in your Python applications. It’s designed to provide an API to transform your JSX files into JavaScript, as well as provide access to the latest React source files.</p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>Transform your JSX files via the provided <code class="gatsby-code-text">jsx</code> module:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-python"><code class="gatsby-code-python"><span class="token keyword">from</span> react <span class="token keyword">import</span> jsx\n\n<span class="token comment"># For multiple paths, use the JSXTransformer class.</span>\ntransformer <span class="token operator">=</span> jsx<span class="token punctuation">.</span>JSXTransformer<span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">for</span> jsx_path<span class="token punctuation">,</span> js_path <span class="token keyword">in</span> my_paths<span class="token punctuation">:</span>\n    transformer<span class="token punctuation">.</span>transform<span class="token punctuation">(</span>jsx_path<span class="token punctuation">,</span> js_path<span class="token punctuation">)</span>\n\n<span class="token comment"># For a single file, you can use a shortcut method.</span>\njsx<span class="token punctuation">.</span>transform<span class="token punctuation">(</span><span class="token string">\'path/to/input/file.jsx\'</span><span class="token punctuation">,</span> <span class="token string">\'path/to/output/file.js\'</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>For full paths to React files, use the <code class="gatsby-code-text">source</code> module:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-python"><code class="gatsby-code-python"><span class="token keyword">from</span> react <span class="token keyword">import</span> source\n\n<span class="token comment"># path_for raises IOError if the file doesn\'t exist.</span>\nreact_js <span class="token operator">=</span> source<span class="token punctuation">.</span>path_for<span class="token punctuation">(</span><span class="token string">\'react.min.js\'</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h2 id="django"><a href="#django" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Django</h2>\n<p>PyReact includes a JSX compiler for <a href="https://github.com/cyberdelia/django-pipeline">django-pipeline</a>. Add it to your project’s pipeline settings like this:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-python"><code class="gatsby-code-python">PIPELINE_COMPILERS <span class="token operator">=</span> <span class="token punctuation">(</span>\n  <span class="token string">\'react.utils.pipeline.JSXCompiler\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>PyReact is hosted on PyPI, and can be installed with <code class="gatsby-code-text">pip</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-text"><code class="gatsby-code-text">$ pip install PyReact</code></pre>\n      </div>\n<p>Alternatively, add it into your <code class="gatsby-code-text">requirements</code> file:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-text"><code class="gatsby-code-text">PyReact==0.1.1</code></pre>\n      </div>\n<p><strong>Dependencies</strong>: PyReact uses <a href="https://github.com/doloopwhile/PyExecJS">PyExecJS</a> to execute the bundled React code, which requires that a JS runtime environment is installed on your machine. We don’t explicitly set a dependency on a runtime environment; Mac OS X comes bundled with one. If you’re on a different platform, we recommend <a href="https://code.google.com/p/pyv8/">PyV8</a>.</p>\n<p>For the initial release, we’ve only tested on Python 2.7. Look out for support for Python 3 in the future, and if you see anything that can be improved, we welcome your <a href="https://github.com/facebook/react-python/blob/master/CONTRIBUTING.md">contributions</a>!</p>',excerpt:"Today we’re happy to announce the initial release of  PyReact , which makes it easier to use React and JSX in your Python applications. It’s designed to provide an API to transform your JSX files into JavaScript, as well as provide access to the latest React source files. Usage Transform your JSX files via the provided   module: For full paths to React files, use the   module: Django PyReact includes a JSX compiler for  django-pipeline . Add it to your project’s pipeline settings like this…",frontmatter:{title:"Use React and JSX in Python Applications",next:null,prev:null,author:[{frontmatter:{name:"Kunal Mehta",url:"https://github.com/kmeht"}}]},fields:{date:"August 18, 2013",path:"blog/2013-08-19-use-react-and-jsx-in-python-applications.md",slug:"/blog/2013/08/19/use-react-and-jsx-in-python-applications.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.7: No, This Is Not the One With Hooks"},fields:{slug:"/blog/2018/12/19/react-v-16-7.html"}}},{node:{frontmatter:{title:"React 16.x Roadmap"},fields:{slug:"/blog/2018/11/27/react-16-roadmap.html"}}},{node:{frontmatter:{title:"React Conf recap: Hooks, Suspense, and Concurrent Rendering"},fields:{slug:"/blog/2018/11/13/react-conf-recap.html"}}},{node:{frontmatter:{title:"React v16.6.0: lazy, memo and contextType"},fields:{slug:"/blog/2018/10/23/react-v-16-6.html"}}},{node:{frontmatter:{title:"Create React App 2.0: Babel 7, Sass, and More"},fields:{slug:"/blog/2018/10/01/create-react-app-v2.html"}}},{node:{frontmatter:{title:"Introducing the React Profiler"},fields:{slug:"/blog/2018/09/10/introducing-the-react-profiler.html"}}},{node:{frontmatter:{title:"React v16.4.2: Server-side vulnerability fix"},fields:{slug:"/blog/2018/08/01/react-v-16-4-2.html"}}},{node:{frontmatter:{title:"You Probably Don't Need Derived State"},fields:{slug:"/blog/2018/06/07/you-probably-dont-need-derived-state.html"}}},{node:{frontmatter:{title:"React v16.4.0: Pointer Events"},fields:{slug:"/blog/2018/05/23/react-v-16-4.html"}}},{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}}]}},pathContext:{slug:"/blog/2013/08/19/use-react-and-jsx-in-python-applications.html"}}}});
//# sourceMappingURL=path---blog-2013-08-19-use-react-and-jsx-in-python-applications-html-d462e066c495110009d0.js.map