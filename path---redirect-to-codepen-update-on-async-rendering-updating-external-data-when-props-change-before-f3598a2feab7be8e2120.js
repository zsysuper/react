webpackJsonp([0x8d4a4016a2ca],{1009:function(n,e){n.exports={pathContext:{action:"https://codepen.io/pen/define",payload:'{"editors":"0010","html":"<div id=\\"root\\"></div>","js":"// Before\\nclass ExampleComponent extends React.Component {\\n  state = {\\n    externalData: null,\\n  };\\n\\n  componentDidMount() {\\n    this._loadAsyncData(this.props.id);\\n  }\\n\\n  // highlight-range{1-6}\\n  componentWillReceiveProps(nextProps) {\\n    if (nextProps.id !== this.props.id) {\\n      this.setState({externalData: null});\\n      this._loadAsyncData(nextProps.id);\\n    }\\n  }\\n\\n  componentWillUnmount() {\\n    if (this._asyncRequest) {\\n      this._asyncRequest.cancel();\\n    }\\n  }\\n\\n  render() {\\n    if (this.state.externalData === null) {\\n      // Render loading state ...\\n    } else {\\n      // Render real UI ...\\n    }\\n  }\\n\\n  _loadAsyncData(id) {\\n    this._asyncRequest = asyncLoadData(id).then(\\n      externalData => {\\n        this._asyncRequest = null;\\n        this.setState({externalData});\\n      }\\n    );\\n  }\\n}\\n","js_external":"//unpkg.com/react/umd/react.development.js;//unpkg.com/react-dom/umd/react-dom.development.js","js_pre_processor":"babel","layout":"left"}'}}}});
//# sourceMappingURL=path---redirect-to-codepen-update-on-async-rendering-updating-external-data-when-props-change-before-f3598a2feab7be8e2120.js.map