(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Content"],{"1a1a":function(t,e,n){"use strict";var i=n("5d5c"),a=n.n(i);a.a},"58a7":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"content"}},[n("div",{staticClass:"content_title"},[t._v(t._s(t.title))]),n("el-divider"),n("div",{attrs:{id:"title"}},[n("div",{attrs:{id:"title_status"}},[n("div",{attrs:{id:"title_time"}},[t._v("日期："+t._s(t.year)+"-"+t._s(t.month)+"-"+t._s(t.day))])]),n("div",{attrs:{id:"title_body"}},[t._l(t.title_body,function(e,i){return["标题"==e.type?n("h1",{key:i},[t._v(t._s(e.content))]):"内容"==e.type?n("p",{key:i},[t._v(t._s(e.content))]):"重点内容"==e.type?n("blockquote",{key:i},[n("p",[t._v(t._s(e.content))])]):"图片"==e.type?n("p",{key:i},[n("img",{attrs:{src:e.content,alt:"图片"}})]):t._e()]})],2),t._m(0)])],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"title_bottom"}},[n("p",[t._v("（正文完）")])])}],s={props:["title","year","month","day"],data:function(){return{title_body:[]}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this,e="/blogjson/"+this.year+"/"+this.month+"/"+this.day+"/"+this.title+".json";this.$http.get(e).then(function(e){t.title_body=e.data.title_body}).catch(function(t){console.log(t)})}}},o=s,c=(n("1a1a"),n("2877")),r=Object(c["a"])(o,i,a,!1,null,"53552654",null);e["default"]=r.exports},"5d5c":function(t,e,n){}}]);
//# sourceMappingURL=Content.a50b3e86.js.map