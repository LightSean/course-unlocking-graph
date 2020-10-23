(this["webpackJsonpkdam-tree-graph"]=this["webpackJsonpkdam-tree-graph"]||[]).push([[0],{116:function(e,t,a){e.exports=a(188)},121:function(e,t,a){},126:function(e,t,a){e.exports=a.p+"static/media/seanTheMan2.a1212ef9.png"},127:function(e,t,a){e.exports=a.p+"static/media/seanTheMan.6cc3e2d5.png"},188:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),i=(a(121),a(11)),l=a(250),s=a(233),u=a(235),m=a(93),p=a.n(m),g=a(237),d=a(254),f=a(191),h=Object(s.a)((function(e){return{icon:{marginRight:e.spacing(2)}}}));function b(e){var t=h();return r.a.createElement(u.a,{color:"primary",position:"sticky"},r.a.createElement(g.a,null,r.a.createElement(p.a,{className:t.icon}),r.a.createElement(d.a,{checked:e.dark_mode,onChange:e.toggleTheme,color:"secondary"}),r.a.createElement(f.a,{variant:"h6",color:"inherit",noWrap:!0},"Toggle dark / light mode")))}var v=a(103),k=a(249),y=a(17),E=a(239),w=a(241),x=a(240),j=a(253),O=Object(s.a)((function(e){return{container:{backgroundColor:e.palette.background.paper,padding:e.spacing(4,0,3)},large:{},avatar_container:{marginBottom:e.spacing(1)}}}));function S(e){var t=O(),c=Object(y.a)();return Object(n.useEffect)((function(){document.body.style.overflow=null}),[]),r.a.createElement("div",{className:t.container},r.a.createElement(E.a,{maxWidth:"md"},r.a.createElement(j.a,{smDown:!0},r.a.createElement(x.a,{container:!0,justify:"center",className:t.avatar_container},r.a.createElement(x.a,{item:!0},r.a.createElement("img",{alt:"tree_graph_pic",src:"dark"===c.palette.type?a(126):a(127),className:t.large})))),r.a.createElement(f.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Kdam Tree Graph"),r.a.createElement(f.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"A little experiment using ",r.a.createElement(w.a,{underline:"always",color:"textSecondary",href:"https://reactjs.org/"},"React.js")," with the ",r.a.createElement(w.a,{underline:"always",color:"textSecondary",href:"https://material-ui.com/"},"Mateial-UI")," framework.",r.a.createElement("br",null),' This application answers the question "After i will finish my course, what courses can i take?"')))}var _=a(15),N=a.n(_),C=a(26),I=a(190),W=a(242),z=a(251),T=a(255),B=a(256),P=a(252),q=a(257),A=a(245),J=a(13),L="https://kadmsapi.herokuapp.com",D="https://ug3.technion.ac.il/rishum/course",R=Object(s.a)((function(e){return{container:{backgroundColor:e.palette.background.default,padding:e.spacing(4,0,3)},headlines:{paddingTop:e.spacing(1)},formControl:{marginBottom:e.spacing(1),minWidth:250},button:{marginBottom:e.spacing(1)}}})),M={courseName:"",courseNumber:"000000"},H={courseName:"Please choose faculty",courseNumber:"000000"};function U(e){var t=R(),a=Object(n.useState)(localStorage.getItem("faculty")?localStorage.getItem("faculty"):""),c=Object(i.a)(a,2),o=c[0],l=c[1],s=Object(n.useState)(!!localStorage.getItem("courses_type")&&localStorage.getItem("courses_type")),u=Object(i.a)(s,2),m=u[0],p=u[1],g=Object(n.useState)([H,M]),d=Object(i.a)(g,2),h=d[0],b=d[1],v=Object(n.useState)(localStorage.getItem("course")?JSON.parse(localStorage.getItem("course")):H),k=Object(i.a)(v,2),y=k[0],w=k[1],j=Object(n.useState)(!1),O=Object(i.a)(j,2),S=O[0],_=O[1],D=Object(n.useState)(!1),U=Object(i.a)(D,2),F=U[0],G=U[1],K=Object(n.useState)(!1),X=Object(i.a)(K,2),Y=X[0],$=X[1],Q=Object(J.f)(),V=function(){var e=Object(C.a)(N.a.mark((function e(t){var a,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$(!0);case 2:return e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:return n=e.sent,e.next=10,$(!1);case 10:return e.abrupt("return",n);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){(function(){var e=Object(C.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===o){e.next=5;break}return e.next=3,V("".concat(L,"/all_courses_for_faculty?faculty=").concat(o,"&is_all_courses=").concat(m));case 3:t=e.sent,b(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o,m]);var Z=function(){var e=Object(C.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(t.target.value),localStorage.setItem("courses_type",t.target.value),e.next=4,V("".concat(L,"/course_exists?number=").concat(y.courseNumber,"&is_all_courses=").concat(!m));case 4:e.sent.exists||w(M);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:t.container},r.a.createElement(E.a,{maxWidth:"sm"},r.a.createElement(I.a,{elevation:3},r.a.createElement(f.a,{component:"h1",variant:"h4",align:"center",color:"textPrimary",className:t.headlines,gutterBottom:!0},"Let's get started"),r.a.createElement(x.a,{container:!0,alignItems:"center",direction:"column"},r.a.createElement(x.a,{item:!0},r.a.createElement(W.a,{disabled:Y,error:S,required:S,className:t.formControl},r.a.createElement(T.a,null,"Faculty"),r.a.createElement(z.a,{value:o,onChange:function(e){l(e.target.value),w(M),localStorage.setItem("faculty",e.target.value)}},r.a.createElement(B.a,{value:"cs"},"\u05de\u05d3\u05e2\u05d9 \u05d4\u05de\u05d7\u05e9\u05d1"),r.a.createElement(B.a,{value:"industrial"},"\u05ea\u05e2\u05e9\u05d9\u05d9\u05d4 \u05d5\u05e0\u05d9\u05d4\u05d5\u05dc"),r.a.createElement(B.a,{value:"electric"},"\u05d4\u05e0\u05d3\u05e1\u05ea \u05d7\u05e9\u05de\u05dc"),r.a.createElement(B.a,{value:"math"},"\u05de\u05ea\u05de\u05d8\u05d9\u05e7\u05d4"),r.a.createElement(B.a,{value:"physics"},"\u05e4\u05d9\u05d6\u05d9\u05e7\u05d4"),r.a.createElement(B.a,{value:"civil"},"\u05d4\u05e0\u05d3\u05e1\u05d4 \u05d0\u05d6\u05e8\u05d7\u05d9\u05ea"),r.a.createElement(B.a,{value:"chemical_eng"},"\u05d4\u05e0\u05d3\u05e1\u05d4 \u05db\u05d9\u05de\u05d9\u05ea"),r.a.createElement(B.a,{value:"aviro"},"\u05d0\u05d5\u05d5\u05d9\u05e8\u05d5\u05e0\u05d0\u05d5\u05d8\u05d9\u05e7\u05d4 \u05d5\u05d7\u05dc\u05dc"),r.a.createElement(B.a,{value:"mechanical"},"\u05d4\u05e0\u05d3\u05e1\u05ea \u05de\u05db\u05d5\u05e0\u05d5\u05ea"),r.a.createElement(B.a,{value:"chemistry"},"\u05db\u05d9\u05de\u05d9\u05d4"),r.a.createElement(B.a,{value:"materials"},"\u05d4\u05e0\u05d3\u05e1\u05ea \u05d7\u05d5\u05de\u05e8\u05d9\u05dd"),r.a.createElement(B.a,{value:"bio_and_food_eng"},"\u05d4\u05e0\u05d3\u05e1\u05ea \u05d1\u05d9\u05d5\u05d8\u05db\u05e0\u05d5\u05dc\u05d5\u05d2\u05d9\u05d4 \u05d5\u05de\u05d6\u05d5\u05df"),r.a.createElement(B.a,{value:"bio_med"},"\u05d4\u05e0\u05d3\u05e1\u05d4 \u05d1\u05d9\u05d5-\u05e8\u05e4\u05d5\u05d0\u05d9\u05ea"),r.a.createElement(B.a,{value:"education"},"\u05d7\u05d9\u05e0\u05d5\u05da \u05dc\u05de\u05d3\u05e2 \u05d5\u05d8\u05db\u05e0\u05d5\u05dc\u05d5\u05d2\u05d9\u05d4")))),r.a.createElement(x.a,{item:!0},r.a.createElement(W.a,{disabled:Y,className:t.formControl},r.a.createElement(T.a,null,"Type of courses"),r.a.createElement(z.a,{value:m,onChange:function(e){Z(e)}},r.a.createElement(B.a,{value:!1},"Only active courses"),r.a.createElement(B.a,{value:!0},"All courses")))),r.a.createElement(x.a,{item:!0},r.a.createElement(W.a,{error:F,required:F,className:t.formControl},r.a.createElement(P.a,{disabled:Y,value:y,fullWidth:!0,autoHighlight:!0,options:h,getOptionLabel:function(e){return e.courseName},onChange:function(e,t){t?(localStorage.setItem("course",JSON.stringify(t)),w(t)):o?(localStorage.setItem("course",JSON.stringify(M)),w(M)):(localStorage.setItem("course",JSON.stringify(H)),w(H))},getOptionSelected:function(e,t){return e.courseName===t.courseName},renderInput:function(e){return r.a.createElement(q.a,Object.assign({},e,{label:"Course",margin:"normal"}))}}))),r.a.createElement(x.a,{item:!0,className:t.button},r.a.createElement(A.a,{onClick:function(){var e=!0;""===o&&(_(!0),e=!1),"000000"===y.courseNumber&&(G(!0),alert("Please choose course and then click search!"),e=!1),e&&Q.push("".concat("/course-unlocking-graph","/tree?num=").concat(y.courseNumber,"&allcourses=").concat(m))},variant:"contained",color:"primary"},"Search"))))))}var F=a(96),G=a.n(F),K="undefined"!==typeof InstallTrigger;function X(e){return K?e:e.split("").reverse().join("")}var Y=function e(t,a){var n=t.children?t.children.map((function(t){return e(t,!1)})):[];return{name:X(t.name),number:t.number,_collapsed:!a,nodeSvgShape:{shape:"circle",strokeWidth:0,shapeProps:{cx:0,cy:0,r:11}},children:n}},$=a(238),Q=a(98),V=a.n(Q),Z=a(100),ee=a.n(Z),te=a(247),ae=a(99),ne=a.n(ae),re=a(66),ce=a.n(re),oe=a(97),ie=a.n(oe),le=a(246),se=Object(s.a)((function(e){return{container:{backgroundColor:e.palette.background.paper,padding:e.spacing(4,0,3)},tree:{marginTop:e.spacing(3)},tree_container:{minHeight:500},but:{maxHeight:40},main_container:{},control_panel:{marginBottom:e.spacing(4)},zoom:{paddingTop:7},low_button:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}}}));function ue(e){var t=function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t}(),a=ce.a.isEnabled,c=se(),o=Object(J.f)(),l=Object(y.a)(),s=Object(n.useState)({x:30,y:30}),u=Object(i.a)(s,2),m=u[0],p=u[1],g=Object(n.useState)({}),d=Object(i.a)(g,2),h=d[0],b=d[1],v=Object(n.useState)(""),k=Object(i.a)(v,2),w=k[0],j=k[1],O=Object(n.useState)(""),S=Object(i.a)(O,2),_=S[0],W=S[1],z=Object(n.useState)(.8),T=Object(i.a)(z,2),B=T[0],P=T[1],q=Object(n.useState)(!1),R=Object(i.a)(q,2),M=R[0],H=R[1],U=Object(n.useState)(!1),F=Object(i.a)(U,2),K=F[0],Q=F[1],Z=Object(n.useRef)(null),ae=Object(n.useRef)(null),re=function(){var e=Object(C.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!ae||!ae.current){e.next=4;break}return e.next=4,ce.a.toggle(ae.current);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),oe=function(){var e=Object(C.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Z.current){e.next=6;break}return t=Z.current.getBoundingClientRect(),a=t.width/2,e.next=5,p({x:30,y:30});case 5:p({x:a,y:30});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var ue=function(){var e=Object(C.a)(N.a.mark((function e(t,a){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(L,"/calculate_tree?number=").concat(t,"&is_all_courses=").concat(a));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){(function(){var e=Object(C.a)(N.a.mark((function e(){var t,a,n,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(H(!0),oe(),(t=ie.a.parse(window.location.search))&&t.num){e.next=7;break}return alert("problem with getting course number. please choose course again"),o.push("".concat("/course-unlocking-graph","/")),e.abrupt("return");case 7:return t.allcourses||(alert("problem getting type of courses preferences. looking only at active courses by default"),t.allcourses="false"),e.next=10,ue(t.num,t.allcourses);case 10:if(a=e.sent){e.next=15;break}return alert("problem with connecting to server. please try again later"),o.push("".concat("/course-unlocking-graph","/")),e.abrupt("return");case 15:a.children&&0!==a.children.length||(n="".concat(D,"/").concat(a.number),j(a.name),W(n),Q(!0)),r=Y(a,!0),b(r),window.addEventListener("resize",oe),H(!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]);var me={links:{stroke:"#9489C5",strokeWidth:2,strokeOpacity:1},leafNode:{attributes:{fill:"black"}},nodes:{node:{circle:{fill:"#9489C5",strokeWidth:1.2,stroke:l.palette.background.paper},name:{strokeWidth:.5}},leafNode:{name:{strokeWidth:.5},circle:{fill:l.palette.background.paper,strokeWidth:1.4,stroke:"#9489C5"}}}},pe=function(){return r.a.createElement(x.a,{item:!0,container:!0,justify:"center",xs:12,className:c.tree_container},r.a.createElement(x.a,{item:!0,xs:12,style:{marginTop:l.spacing(1)}},r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",justifyItems:"center"}},r.a.createElement(f.a,{style:{marginBottom:l.spacing(1)},variant:"h5",align:"center",color:"textPrimary"},"Building tree..."),r.a.createElement(le.a,{style:{margin:"auto"},color:"primary"}))))},ge=function(){return r.a.createElement(x.a,{item:!0,container:!0,justify:"center",xs:12,className:c.tree_container},r.a.createElement(x.a,{item:!0,xs:12,style:{marginTop:l.spacing(1)}},r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",justifyItems:"center"}},r.a.createElement(f.a,{style:{marginBottom:l.spacing(1)},variant:"h5",align:"center",color:"textPrimary"},w," is not kdam for anything. try a new search"))))};return r.a.createElement("div",{ref:ae},r.a.createElement(E.a,{maxWidth:"sm",className:c.tree},r.a.createElement(I.a,{elevation:3,className:c.control_panel},r.a.createElement(x.a,{spacing:0,container:!0},r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(f.a,{variant:"h5",align:"center",color:"textPrimary"},"Control Pannel")),r.a.createElement(x.a,{item:!0,container:!0,justify:"center",xs:12,md:12,spacing:0,wrap:"nowrap"},r.a.createElement(te.a,{arrow:!0,title:"zoom in"},r.a.createElement($.a,{onClick:function(){P(B+.3>=1?1:B+.3)}}," ",r.a.createElement(V.a,{fontSize:"large"}))),r.a.createElement(te.a,{arrow:!0,title:"re-center tree"},r.a.createElement($.a,{onClick:oe}," ",r.a.createElement(ne.a,{fontSize:"large"})," ")),r.a.createElement(te.a,{arrow:!0,title:"zoom out"},r.a.createElement($.a,{onClick:function(){P(B-.3<.3?0:B-.3)}}," ",r.a.createElement(ee.a,{fontSize:"large"})," "))),t&&a&&r.a.createElement(x.a,{style:{marginBottom:l.spacing(1)},item:!0,container:!0,justify:"center",xs:12},r.a.createElement(A.a,{onClick:re,variant:"outlined",color:"primary"},"fullScreen")),r.a.createElement(x.a,{item:!0,container:!0,justify:"center",xs:12},r.a.createElement(A.a,{onClick:function(){window.open(_,"_blank")},variant:"text",color:"primary"},""===w?"Clicking on node tree will give you a link":"\u05e2\u05d1\u05d5\u05e8 \u05d0\u05dc ".concat(w))),r.a.createElement(x.a,{className:c.low_button,item:!0,container:!0,justify:"center",xs:12},r.a.createElement(A.a,{style:{justifySelf:"center"},onClick:function(){o.push("".concat("/course-unlocking-graph","/"))},variant:"text",color:"primary"},"new search"))))),r.a.createElement(E.a,{maxWidth:"xl"},r.a.createElement(I.a,{elevation:3,onTouchStart:function(){var e=window.scrollX,t=window.scrollY;window.onscroll=function(){window.scrollTo(e,t)}},onTouchEnd:function(){window.onscroll=function(){}},ref:Z},r.a.createElement(x.a,{container:!0,className:c.main_container},M?r.a.createElement(pe,null):K?r.a.createElement(ge,null):r.a.createElement(x.a,{item:!0,xs:12,className:c.tree_container},r.a.createElement(G.a,{initialDepth:1,styles:"dark"===l.palette.type?{links:{stroke:"#ff8080",strokeWidth:2,strokeOpacity:1},leafNode:{attributes:{fill:"black"}},nodes:{node:{circle:{fill:"#ff8080",strokeWidth:1.4,stroke:"#424242"},name:{fill:"#e0e0eb",strokeWidth:0}},leafNode:{name:{fill:"#e0e0eb",strokeWidth:0},circle:{fill:"#424242",strokeWidth:1.4,stroke:"#ff8080"}}}}:me,translate:m,data:h,orientation:"vertical",transitionDuration:0,separation:{siblings:1.9,nonSiblings:1.5},textLayout:{textAnchor:"start",x:15,y:0,transform:void 0},collapsible:!0,zoom:B,onClick:function(e,t){var a="".concat(D,"/").concat(e.number);j(X(e.name)),W(a)}}))))))}var me=a(47),pe=a(101),ge=a(248),de=Object(s.a)((function(e){return{footer:{padding:e.spacing(3)},divider:{marginBottom:e.spacing(2)}}}));var fe=function(){var e=de();return r.a.createElement(E.a,{className:e.footer},r.a.createElement(ge.a,{className:e.divider}),r.a.createElement(f.a,{variant:"h6",align:"center",gutterBottom:!0},r.a.createElement(w.a,{href:"https://github.com/LightSean",color:"textSecondary"},"Created by Sean Meir")),r.a.createElement(f.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"Up to date with winter 2020-2021"))};var he=function(){var e=Object(n.useState)(!!localStorage.getItem("dark_mode")&&"true"===localStorage.getItem("dark_mode")),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(v.a)({palette:{type:"dark",primary:{main:"#bf4040"},secondary:{main:"#ff8080",light:"#ff8080",dark:"#ff8080"}}}),s=Object(v.a)({palette:{secondary:{main:"#ff8080",light:"#ff8080",dark:"#ff8080"},primary:{main:"#554B8E"}}});return r.a.createElement(me.a,null,r.a.createElement(k.a,{theme:a?o:s},r.a.createElement(l.a,null),r.a.createElement(b,{dark_mode:a,toggleTheme:function(){localStorage.setItem("dark_mode",(!a).toString()),c(!a)}}),r.a.createElement(pe.a,{atEnter:{opacity:0},atLeave:{opacity:0},atActive:{opacity:1}},r.a.createElement(J.a,{path:"".concat("/course-unlocking-graph","/tree")},r.a.createElement(ue,null)),r.a.createElement(J.a,{path:"".concat("/course-unlocking-graph","/")},r.a.createElement(S,null),r.a.createElement(U,null))),r.a.createElement(fe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[116,1,2]]]);
//# sourceMappingURL=main.c0f51a42.chunk.js.map