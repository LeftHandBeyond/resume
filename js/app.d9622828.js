(function(e){function t(t){for(var n,o,c=t[0],f=t[1],i=t[2],l=0,d=[];l<c.length;l++)o=c[l],a[o]&&d.push(a[o][0]),a[o]=0;for(n in f)Object.prototype.hasOwnProperty.call(f,n)&&(e[n]=f[n]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,i||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,c=1;c<s.length;c++){var f=s[c];0!==a[f]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},a={app:0},r=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],f=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var u=f;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"05af":function(e,t,s){},"079e":function(e,t,s){},"168b":function(e,t,s){},"21b3":function(e,t,s){"use strict";var n=s("05af"),a=s.n(n);a.a},"287e":function(e,t,s){"use strict";var n=s("079e"),a=s.n(n);a.a},"437b":function(e,t,s){"use strict";var n=s("168b"),a=s.n(n);a.a},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e4","./ja.js":"079e4","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return s(t)}function r(e){var t=n[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="4678"},"4f38":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}},[s("router-link",{attrs:{to:"/"}},[e._v("首页")]),s("router-link",{attrs:{to:"/about"}},[e._v("自我介绍")]),s("router-link",{attrs:{to:"/resume"}},[e._v("简历")]),s("router-link",{attrs:{to:"/skill"}},[e._v("功能项目")]),s("div",{staticClass:"time"},[e._v("\n    "+e._s(e._f("timeformat")(e.date))+"\n     ")])],1),s("div",{staticClass:"body"},[s("router-view")],1)])},r=[],o=s("c1df"),c=s.n(o),f={data:function(){return{date:(new Date).getTime()}},methods:{tick:function(){this.date+=1e3}},filters:{timeformat:function(e){return c()(e).format("YYYY-MM-DD HH:mm:ss")}},mounted:function(){var e=this;this.interval=setInterval(function(){return e.tick()},1e3)},beforeDestroy:function(){clearInterval(this.interval)}},i=f,u=(s("c5b0"),s("2877")),l=Object(u["a"])(i,a,r,!1,null,"1be413d4",null),d=l.exports,b=s("2f62");n["a"].use(b["a"]);var j=new b["a"].Store({state:{},mutations:{},actions:{}}),m=s("8c4f"),p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("HelloWorld",{attrs:{msg:"Welcome to My Website"}})],1)},v=[],h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hello"},[s("h1",[e._v(e._s(e.msg))])])},_=[],k={name:"HelloWorld",props:{msg:String}},g=k,y=(s("437b"),Object(u["a"])(g,h,_,!1,null,"17cfabe8",null)),w=y.exports,z={name:"home",components:{HelloWorld:w}},O=z,x=Object(u["a"])(O,p,v,!1,null,null,null),C=x.exports,D=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"about"},[s("div",{staticClass:"resume"},[s("span",[e._v("姓名："+e._s(e.name))]),s("br"),s("span",[e._v("出生日期："+e._s(e.bornDate))]),s("br"),s("span",[e._v("籍贯："+e._s(e.from))]),s("br"),s("span",[e._v("院校："+e._s(e.school))]),s("br"),s("span",[e._v("专业："+e._s(e.pro))]),s("br"),s("span",[e._v("毕业时间："+e._s(e.graduation))]),s("br")])])},M=[],E={name:"about",data:function(){return{graduation:"2018-7",school:"浙江财经大学信息管理与工程学院",pro:"信息管理与信息系统",name:"王辉煌",bornDate:"1995-12-22",from:"福建",date:(new Date).getTime()}}},S=E,Y=(s("6683"),Object(u["a"])(S,D,M,!1,null,"7af9318b",null)),$=Y.exports,P=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"about"},[s("h1",[e._v(e._s(e.name))]),s("h2")])},T=[],H={name:"about",data:function(){return{name:"待制作",date:c()().format("YYYY-MM-DD")}}},W=H,q=Object(u["a"])(W,P,T,!1,null,null,null),G=q.exports,I=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"left"},[s("router-link",{attrs:{to:{path:"/food/1"}}},[e._v("闽南咸饭")]),s("router-link",{attrs:{to:"/food/2"}},[e._v("老鸭冬瓜汤")]),s("router-link",{attrs:{to:"/food/3"}},[e._v("炒粉")])],1),s("div",{staticClass:"right"},[s("router-view")],1)])},J=[],N={name:"food",data:function(){return{msg:"测试"}}},U=N,F=(s("287e"),Object(u["a"])(U,I,J,!1,null,"4c766a97",null)),L=F.exports,A=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"left"},[s("router-link",{attrs:{to:{path:"/skill/1"}}},[e._v("简单画图工具")])],1),s("div",{staticClass:"right"},[s("router-view")],1)])},B=[],K={name:"food",data:function(){return{msg:"测试"}}},Q=K,R=(s("21b3"),Object(u["a"])(Q,A,B,!1,null,"1615ffbc",null)),V=R.exports;n["a"].use(m["a"]);var X=new m["a"]({mode:"history",base:"/",routes:[{path:"/",name:"首页",component:C},{path:"/food",name:"菜单",component:L,children:[{path:"1",name:"菜1",component:$},{path:"2",name:"菜2",component:$},{path:"3",name:"菜3",component:$}]},{path:"/about",name:"自我介绍",component:$},{path:"/resume",name:"简单经历",component:G},{path:"/skill",name:"功能项目",component:V,children:[{path:"1",name:"简单画图工具",component:G}]},{path:"*",redirect:"/"}]});n["a"].config.productionTip=!0,new n["a"]({store:j,router:X,render:function(e){return e(d)}}).$mount("#app")},6683:function(e,t,s){"use strict";var n=s("4f38"),a=s.n(n);a.a},c5b0:function(e,t,s){"use strict";var n=s("f213"),a=s.n(n);a.a},f213:function(e,t,s){}});
//# sourceMappingURL=app.d9622828.js.map