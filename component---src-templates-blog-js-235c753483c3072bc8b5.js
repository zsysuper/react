webpackJsonp([36733297554888],{201:function(e,t,a){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var n=a(5),o=r(n),i=a(2),l=(r(i),a(46)),d=r(l),u=a(33),c=function(e){return[{title:"近期文章",items:e.edges.map(function(e){var t=e.node;return{id:t.fields.slug,title:t.frontmatter.title}}).concat({id:"/blog/all.html",title:"所有文章 ..."})}]},m=function(t){var a=t.data,r=t.location;return e.createElement(d.default,{authors:a.markdownRemark.frontmatter.author,createLink:u.createLinkBlog,date:a.markdownRemark.fields.date,location:r,ogDescription:a.markdownRemark.excerpt,markdownRemark:a.markdownRemark,sectionList:c(a.allMarkdownRemark),titlePostfix:" - React Blog"})};m.propTypes={data:o.default.object.isRequired};t.pageQuery="** extracted graphql fragment **";t.default=m}).call(t,a(3))}});
//# sourceMappingURL=component---src-templates-blog-js-235c753483c3072bc8b5.js.map