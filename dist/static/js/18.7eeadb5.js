(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{uUY8:function(t,s,e){"use strict";e.r(s);var a=e("KHd+"),l=Object(a.a)({},function(){var t=this;t.$createElement;t._self._c;return t._m(0)},[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h2",[t._v("popup")]),t._v(" "),e("h3",[t._v("介绍")]),t._v(" "),e("p",[t._v("Popup是所有弹层类组件的基础组件,如"),e("code",{pre:!0},[t._v("toast")]),t._v("、"),e("code",{pre:!0},[t._v("dialog")]),t._v("...")]),t._v(" "),e("h3",[t._v("代码示例")]),t._v(" "),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-popup")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"myPopup"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@maskClick")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("\"closePopup('myPopup')\"")]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"text"')]),t._v(">")]),t._v("\n        Popup是所有弹层类组件的基础组件\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("m-popup")]),t._v(">")]),t._v("\n")])]),t._v(" "),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'demo-popup'")]),t._v(",\n    data() {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {}\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n        showPopup(refId) {\n            "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" component = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs[refId]\n            component.show()\n        },\n        closePopup(refId) {\n            "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" component = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs[refId]\n            component.hide()\n        }\n    }\n}\n")])]),t._v(" "),e("h3",[t._v("props 说明")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("不同类型")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("mask")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示遮罩")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("transparent")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("mask背景透明")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("content")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("内容")])])])])])}],!1,null,null,null);l.options.__file="popup.md";s.default=l.exports}}]);