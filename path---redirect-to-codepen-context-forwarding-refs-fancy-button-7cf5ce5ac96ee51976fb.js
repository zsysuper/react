webpackJsonp([0xc3fdfc4bc6ff],{960:function(e,n){e.exports={pathContext:{action:"https://codepen.io/pen/define",payload:'{"editors":"0010","html":"<div id=\\"root\\"></div>","js":"class FancyButton extends React.Component {\\n  focus() {\\n    // ...\\n  }\\n\\n  // ...\\n}\\n\\n// 使用 context 传递当前的 \\"theme\\" 给 FancyButton.\\n// 使用 forwardRef 传递 refs 给 FancyButton 也是可以的.\\n// highlight-range{1,3}\\nexport default React.forwardRef((props, ref) => (\\n  <ThemeContext.Consumer>\\n    {theme => (\\n      <FancyButton {...props} theme={theme} ref={ref} />\\n    )}\\n  </ThemeContext.Consumer>\\n));\\n","js_external":"//unpkg.com/react/umd/react.development.js;//unpkg.com/react-dom/umd/react-dom.development.js","js_pre_processor":"babel","layout":"left"}'}}}});
//# sourceMappingURL=path---redirect-to-codepen-context-forwarding-refs-fancy-button-7cf5ce5ac96ee51976fb.js.map