webpackJsonp([20],{Zrgv:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var l=function(){var t=this.$createElement;this._self._c;return this._m(0)};l._withStripped=!0;var e={render:l,staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h2",[t._v("actionsheet")]),t._v(" "),a("h3",[t._v("代码示例")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("m-cell-group")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("m-cell")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"学校"')]),t._v("\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":value")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"school.name"')]),t._v("\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("is-link")]),t._v("\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"fnClick"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("m-cell")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("m-cell")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"学历"')]),t._v("\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":value")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"education.name"')]),t._v("\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("is-link")]),t._v("\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"fnClick1"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("m-cell")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("m-cell-group")]),t._v(">")]),t._v("\n")])]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'demo-actionsheet'")]),t._v(",\n    data() {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("school")]),t._v(": {\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'请选择'")]),t._v(",\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("code")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("''")]),t._v("\n            },\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("education")]),t._v(": {\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'请选择'")]),t._v(",\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("code")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("''")]),t._v("\n            },\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("schoolData")]),t._v(": ["),a("span",{attrs:{class:"hljs-string"}},[t._v("'北京大学'")]),t._v(", "),a("span",{attrs:{class:"hljs-string"}},[t._v("'浙江大学'")]),t._v(", "),a("span",{attrs:{class:"hljs-string"}},[t._v("'财经大学'")]),t._v("],\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("schoolSelectItem")]),t._v(": {\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("isSelect")]),t._v(": "),a("span",{attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(",\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("index")]),t._v(": "),a("span",{attrs:{class:"hljs-number"}},[t._v("1")]),t._v("\n            },\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("decucationData")]),t._v(": ["),a("span",{attrs:{class:"hljs-string"}},[t._v("'本科'")]),t._v(", "),a("span",{attrs:{class:"hljs-string"}},[t._v("'专科'")]),t._v(", "),a("span",{attrs:{class:"hljs-string"}},[t._v("'研究生'")]),t._v(", "),a("span",{attrs:{class:"hljs-string"}},[t._v("'博士'")]),t._v("],\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("decucationSelectItem")]),t._v(": {\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("isSelect")]),t._v(": "),a("span",{attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(",\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("index")]),t._v(": "),a("span",{attrs:{class:"hljs-number"}},[t._v("0")]),t._v("\n            }\n        }\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n        fnClick() {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".actionsheet = "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$createActionSheet({\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".schoolData, \n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("selectItem")]),t._v(": "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".schoolSelectItem,\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("onSelect")]),t._v(": "),a("span",{attrs:{class:"hljs-function"}},[t._v("("),a("span",{attrs:{class:"hljs-params"}},[t._v("item, index")]),t._v(") =>")]),t._v(" {\n                    "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".schoolSelectItem.index = index\n                    "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".school.name = item\n                }\n            }).show()\n        },\n        fnClick1() {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".actionsheet = "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$createActionSheet({\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".decucationData,\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("isBottomBtn")]),t._v(": "),a("span",{attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(",\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("selectItem")]),t._v(": "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".decucationSelectItem,\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("onSelect")]),t._v(": "),a("span",{attrs:{class:"hljs-function"}},[t._v("("),a("span",{attrs:{class:"hljs-params"}},[t._v("item, index")]),t._v(") =>")]),t._v(" {\n                    "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".decucationSelectItem.index = index\n                    "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".education.name = item\n                }\n            }).show()\n        }\n    }\n}\n")])]),t._v(" "),a("h3",[t._v("props 说明")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("title")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("标题, 默认为空")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("data")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("项列表数据, 默认空数组")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("isBottomBtn")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示底部按钮")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("selectItem")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("{isSelect: false,index: 0}")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("选中项配置, isSelect是否高亮选中项,index选中项索引")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("onSelect")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("function")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("选中回调")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("onCancel")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("function")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("取消回调")])])])])])}]},n=e;var v=a("VU/8")(null,n,!1,null,null,null);v.options.__file="document/components/docs/actionsheet.md";s.default=v.exports},ceHU:function(t,s,a){t.exports=a("Zrgv")}});