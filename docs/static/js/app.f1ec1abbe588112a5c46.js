webpackJsonp([1],{"/vbR":function(t,a){},0:function(t,a){},"2Bn9":function(t,a){},DIch:function(t,a){},Ego3:function(t,a){},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("7+uW"),i=s("7t+N"),n=s.n(i),o={name:"MenuNav",data:function(){return{}},methods:{setActive:function(){n()(this).toggleClass("active"),n()("#overlay").toggleClass("open"),n()(".mobilemenu-wrapper").toggleClass("active")}}},c={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("header",{staticClass:"global-nav"},[s("nav",{staticClass:"container",attrs:{role:"navigation"}},[s("ul",{staticClass:"nav-wrapper"},[s("li",{staticClass:"navsection-mobile"},[s("h2",[t._v("Menu")]),t._v(" "),s("a",{staticClass:"mobilemenu-wrapper",attrs:{id:"toggle"},on:{click:t.setActive}},[s("span",{staticClass:"bars"}),t._v(" "),s("span",{staticClass:"bars"}),t._v(" "),s("span",{staticClass:"bars"})]),t._v(" "),s("div",{staticClass:"overlay",attrs:{id:"overlay"}},[s("div",[s("ul",[s("li",{on:{click:t.setActive}},[s("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),s("li",{on:{click:t.setActive}},[s("router-link",{attrs:{to:"/projects"}},[t._v("Projects")])],1),t._v(" "),s("li",{on:{click:t.setActive}},[s("router-link",{attrs:{to:"/about"}},[t._v("About Me")])],1),t._v(" "),s("li",{on:{click:t.setActive}},[s("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])])])])])},staticRenderFns:[]};var r=s("VU/8")(o,c,!1,function(t){s("DIch")},null,null).exports,l={name:"ContentHome",data:function(){return{}},methods:{setActive:function(){n()(this).toggleClass("active"),n()("#overlay").toggleClass("open"),n()(".mobilemenu-wrapper").toggleClass("active")}}},d={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"container_home page"},[this._m(0),this._v(" "),a("img",{attrs:{src:s("aMAb"),alt:"Logo HE"}}),this._v(" "),a("div",{staticClass:"view-proje"},[a("a",{staticClass:"routerLink"},[a("router-link",{attrs:{to:"/projects"}},[this._v("Take a look at my work!"),a("p",{staticClass:"arrow"},[this._v(">")])])],1)])])},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("div",{staticClass:"content__container"},[s("p",{staticClass:"content__container__text"},[t._v("\n      With\n    ")]),t._v(" "),s("ul",{staticClass:"content__container__list"},[s("li",{staticClass:"content__container__list__item"},[t._v("love")]),t._v(" "),s("li",{staticClass:"content__container__list__item"},[t._v("enthusiasm")]),t._v(" "),s("li",{staticClass:"content__container__list__item"},[t._v("energy")]),t._v(" "),s("li",{staticClass:"content__container__list__item"},[t._v("good vibes")])])])])}]};var p=s("VU/8")(l,d,!1,function(t){s("2Bn9")},null,null).exports,m={name:"App",data:function(){return{}},components:{MenuNav:r,ContentHome:p}},v={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("MenuNav"),this._v(" "),a("transition",{attrs:{name:"router-anim","enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutDown"}},[a("router-view")],1)],1)},staticRenderFns:[]};var u=s("VU/8")(m,v,!1,function(t){s("d+ai")},null,null).exports,_=s("/ocq"),g={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container_about page"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"view-proje"},[s("a",{staticClass:"routerLink"},[s("router-link",{attrs:{to:"/abilities"}},[t._v("About my abilities"),s("p",{staticClass:"arrow"},[t._v(">")])])],1)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"msjinteractive"},[a("p",{staticClass:"line-1 anim-typewriter"},[this._v("Welcome! I am an interactive media designer")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"container"}},[a("div",{staticClass:"animated pulse",attrs:{id:"inner"}},[a("img",{attrs:{src:"https://scontent.fclo1-2.fna.fbcdn.net/v/t1.0-9/13465936_1779217955627866_8945928677573353959_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeFVRtwTs1IaClTuMz3k5MbKz2v6L033kjgvXtNs-n8uoyO2CLiSfGzAHEIyO5Lgb5SrJkdwy8hPuTTcoT_T7l1RndLVvEEjDkcr9tcoTVU6ZA&oh=0de68d9c29f42a0d858195bc19510b15&oe=5B5F26E7",alt:""}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"description-about animated pulse"},[a("p",[this._v("Hello! My name is Héndel and I am 22 years old. By now I live in Cali, Colombia. I am good at creating user experiences and interactions using immersive technologies.")])])}]};var h=s("VU/8")({name:"ContentAbout",data:function(){return{}}},g,!1,function(t){s("Ego3")},"data-v-bb7ad900",null).exports,A=s("mtWM"),f=s.n(A),b={name:"ContentProjects",data:function(){return{proyectos:{}}},methods:{showDetailedMatchStatistics:function(){n()("#container-popup").css("display","flex").animate({opacity:1},300,function(){n()("#content-popup").animate({opacity:1},700)})},closeDetailedMatchStatistics:function(){n()("#content-popup").animate({opacity:0},500,function(){n()("#container-popup").animate({opacity:0},300,function(){n()(this).css("display","none")})})},showDetailedMatchStatisticsSlideDos:function(){n()("#container-popup-slide-dos").css("display","flex").animate({opacity:1},300,function(){n()("#content-popup-slide-dos").animate({opacity:1},700)})},closeDetailedMatchStatisticsSlideDos:function(){n()("#content-popup-slide-dos").animate({opacity:0},500,function(){n()("#container-popup-slide-dos").animate({opacity:0},300,function(){n()(this).css("display","none")})})},showDetailedMatchStatisticsSlideTres:function(){n()("#container-popup-slide-tres").css("display","flex").animate({opacity:1},300,function(){n()("#content-popup-slide-tres").animate({opacity:1},700)})},closeDetailedMatchStatisticsSlideTres:function(){n()("#content-popup-slide-tres").animate({opacity:0},500,function(){n()("#container-popup-slide-tres").animate({opacity:0},300,function(){n()(this).css("display","none")})})},showDetailedMatchStatisticsSlideCuatro:function(){n()("#container-popup-slide-cuatro").css("display","flex").animate({opacity:1},300,function(){n()("#content-popup-slide-cuatro").animate({opacity:1},700)})},closeDetailedMatchStatisticsSlideCuatro:function(){n()("#content-popup-slide-cuatro").animate({opacity:0},500,function(){n()("#container-popup-slide-cuatro").animate({opacity:0},300,function(){n()(this).css("display","none")})})}},mounted:function(){var t=this;f.a.get("http://localhost:3000/projects").then(function(a){t.proyectos=a.data.projects,console.log("log "+t.proyectos.projects)}).catch(function(t){console.log(t)}),n()("#content-popup").animate({opacity:0},500,function(){n()("#container-popup").animate({opacity:0},300,function(){n()(this).css("display","none")})}),n()("#content-popup-slide-dos").animate({opacity:0},500,function(){n()("#container-popup-slide-dos").animate({opacity:0},300,function(){n()(this).css("display","none")})}),n()("#content-popup-slide-tres").animate({opacity:0},500,function(){n()("#container-popup-slide-tres").animate({opacity:0},300,function(){n()(this).css("display","none")})}),n()("#content-popup-slide-cuatro").animate({opacity:0},500,function(){n()("#container-popup-slide-cuatro").animate({opacity:0},300,function(){n()(this).css("display","none")})})}},C={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"conteneur"},[s("div",{attrs:{id:"sliderAccueil"}},[s("div",{attrs:{id:"slideshow-wrap"}},[s("input",{attrs:{type:"radio",id:"button-1",name:"controls",checked:"checked"},on:{click:function(a){t.closeDetailedMatchStatisticsSlideCuatro,t.closeDetailedMatchStatisticsSlideTres,t.closeDetailedMatchStatisticsSlideDos,t.closeDetailedMatchStatistics}}}),t._v(" "),s("label",{attrs:{for:"button-1"}}),t._v(" "),s("input",{attrs:{type:"radio",id:"button-2",name:"controls"},on:{click:function(a){t.closeDetailedMatchStatisticsSlideCuatro,t.closeDetailedMatchStatisticsSlideTres,t.closeDetailedMatchStatisticsSlideDos,t.closeDetailedMatchStatistics}}}),t._v(" "),s("label",{attrs:{for:"button-2"}}),t._v(" "),s("input",{attrs:{type:"radio",id:"button-3",name:"controls"},on:{click:function(a){t.closeDetailedMatchStatisticsSlideCuatro,t.closeDetailedMatchStatisticsSlideTres,t.closeDetailedMatchStatisticsSlideDos,t.closeDetailedMatchStatistics}}}),t._v(" "),s("label",{attrs:{for:"button-3"}}),t._v(" "),s("input",{attrs:{type:"radio",id:"button-4",name:"controls"},on:{click:function(a){t.closeDetailedMatchStatisticsSlideCuatro,t.closeDetailedMatchStatisticsSlideTres,t.closeDetailedMatchStatisticsSlideDos,t.closeDetailedMatchStatistics}}}),t._v(" "),s("label",{attrs:{for:"button-4"}}),t._v(" "),s("input",{attrs:{type:"radio",id:"button-5",name:"controls"},on:{click:function(a){t.closeDetailedMatchStatisticsSlideCuatro,t.closeDetailedMatchStatisticsSlideTres,t.closeDetailedMatchStatisticsSlideDos,t.closeDetailedMatchStatistics}}}),t._v(" "),s("label",{attrs:{for:"button-5"}}),t._v(" "),s("label",{staticClass:"arrows",attrs:{for:"button-1",id:"arrow-1"}},[t._v(">")]),t._v(" "),s("label",{staticClass:"arrows",attrs:{for:"button-2",id:"arrow-2"}},[t._v(">")]),t._v(" "),s("label",{staticClass:"arrows",attrs:{for:"button-3",id:"arrow-3"}},[t._v(">")]),t._v(" "),s("label",{staticClass:"arrows",attrs:{for:"button-4",id:"arrow-4"}},[t._v(">")]),t._v(" "),s("label",{staticClass:"arrows",attrs:{for:"button-5",id:"arrow-5"}},[t._v(">")]),t._v(" "),s("div",{attrs:{id:"slideshow-inner"}},[s("ul",[s("li",[s("div",{staticClass:"slides",attrs:{id:"slide1"},on:{click:t.showDetailedMatchStatistics}}),t._v(" "),t._m(0),t._v(" "),s("div",{attrs:{id:"container-popup"}},[s("div",{attrs:{id:"content-popup"}},[s("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/63500163318687.5aac738ab29d2.jpg",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5fbf9e63318687.5aac738ab309a.jpg",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5a07e463318687.5aac738ab262a.jpg",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/dc480363318687.5aac738ab13c6.jpg",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/14860e63318687.5aac738ab35ac.jpg",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/73303263318687.5aac738ab179c.jpg",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/801acc63318687.5aac738ab2150.jpg",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/2542df63318687.5aac738ab2d09.jpg",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/df737f63318687.5aac738ab1c6e.jpg",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/46bbc063318687.5aac738ab3a95.jpg",alt:""}}),t._v(" "),s("div",{attrs:{id:"close-details"},on:{click:t.closeDetailedMatchStatistics}})])])]),t._v(" "),s("li",[s("div",{staticClass:"slides",attrs:{id:"slide2"},on:{click:t.showDetailedMatchStatisticsSlideDos}}),t._v(" "),t._m(1),t._v(" "),s("div",{attrs:{id:"container-popup-slide-dos"}},[s("div",{attrs:{id:"content-popup-slide-dos"}},[s("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/d4441863599535.5ab5a99b2f2f7.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/eeb05b63599535.5ab5a99b2cce2.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/7eb8e463599535.5ab5a99b2dfcf.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/91691c63599535.5ab5a99b2d66b.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/d4f86a63599535.5ab5a99b2e4e5.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/c44fa363599535.5ab5a99b2fb44.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5aa30563599535.5ab5a99b2eefb.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5fe2b363599535.5ab5a99b2ea0d.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/c1c41a63599535.5ab5a99b2dbff.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/da08b763599535.5ab5a99b2f85a.png",alt:""}}),t._v(" "),s("div",{attrs:{id:"close-details-slide-dos"},on:{click:t.closeDetailedMatchStatisticsSlideDos}})])])]),t._v(" "),s("li",[s("div",{staticClass:"slides",attrs:{id:"slide3"},on:{click:t.showDetailedMatchStatisticsSlideTres}}),t._v(" "),t._m(2),t._v(" "),s("div",{attrs:{id:"container-popup-slide-tres"}},[s("div",{attrs:{id:"content-popup-slide-tres"}},[s("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/6478f057270341.59cee89f52077.jpg",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/b37b9157270341.59cee89f52576.jpg",alt:""}}),t._v(" "),s("div",{attrs:{id:"close-details-slide-tres"},on:{click:t.closeDetailedMatchStatisticsSlideTres}})])])]),t._v(" "),s("li",[s("div",{staticClass:"slides",attrs:{id:"slide4"},on:{click:t.showDetailedMatchStatisticsSlideCuatro}}),t._v(" "),t._m(3),t._v(" "),s("div",{attrs:{id:"container-popup-slide-cuatro"}},[s("div",{attrs:{id:"content-popup-slide-cuatro"}},[s("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/2d2a7931047991.5ad41e681b4ed.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/ce2bc231047991.5ad41e681c18e.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/0ca3fa31047991.5ad41e681bca8.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/993cbc31047991.5ad41e681a9ac.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/79889631047991.5ad41e6819912.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/c4bf5331047991.5ad41e681a4b4.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/24b69b31047991.5ad41e681aeb6.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/64c8ec31047991.5ad41e681c73b.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/2b887331047991.5ad41e6819e72.png",alt:""}}),t._v(" "),s("div",{attrs:{id:"close-details-slide-cuatro"},on:{click:t.closeDetailedMatchStatisticsSlideCuatro}})])])]),t._v(" "),t._m(4),t._v(" "),t._m(5)])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"description"},[a("div",{staticClass:"description-text"},[a("h1",[this._v("HE Brand")]),this._v(" "),a("p",[this._v("This is my personal branding and identity project.\r\n                                              Made it using Adobe Illustrator and Photoshop.\r\n                                              You can take a look of the process and results.\r\n                                            ")]),this._v(" "),a("div",{staticClass:"task"},[a("div",{staticClass:"abstract"},[a("h4",[this._v("What I used")]),this._v(" "),a("img",{attrs:{src:"https://i1.wp.com/brogramador.com/wp-content/uploads/2017/10/illustrator.png",alt:""}}),this._v(" "),a("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/2/20/Photoshop_CC_icon.png",alt:""}})])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"description"},[s("div",{staticClass:"description-text"},[s("h1",[t._v("CIURA App")]),t._v(" "),s("p",[t._v("CIURA is a mobile application designed for people living in cities\r\n                                              with security problems. It's mission is connecting local people\r\n                                              in order to identify the places in the city that had delincuency\r\n                                              incidents. This way, CIURA seeks to prevent and inform people from\r\n                                              dangerous situations around the city.\r\n                                            ")]),t._v(" "),s("div",{staticClass:"task"},[s("div",{staticClass:"abstract"},[s("h4",[t._v("What I used")]),t._v(" "),s("img",{attrs:{src:"https://i1.wp.com/brogramador.com/wp-content/uploads/2017/10/illustrator.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/2/20/Photoshop_CC_icon.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/2/29/Adobe_After_Effects_CC_icon.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"http://cdn.embed.ly/providers/logos/marvelapp.png",alt:""}})])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"description"},[s("div",{staticClass:"description-text"},[s("h1",[t._v("Incevo")]),t._v(" "),s("p",[t._v("This is an interactive installation that was born to rescue\r\n                                              the relationships and physical communications between human beings through\r\n                                              a couple of interactions that use the participant's bodies as the control.\r\n                                            ")]),t._v(" "),s("div",{staticClass:"task"},[s("div",{staticClass:"abstract"},[s("h4",[t._v("What we used")]),t._v(" "),s("img",{attrs:{src:"https://hackpuntes.com/wp-content/uploads/2015/03/java-logo.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Processing_Logo_Clipped.svg/2000px-Processing_Logo_Clipped.svg.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"http://maplab.hku.nl/content/uploads/ngg_featured/E_Rv.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://dl2.macupdate.com/images/icons256/11662.png?d=1477939570",alt:""}})])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"description"},[s("div",{staticClass:"description-text"},[s("h1",[t._v("LolCo App")]),t._v(" "),s("p",[t._v("Is an application for League of Legends players who want\r\n                                              to know more about their roles. You can find information about\r\n                                              the five lanes in the Summoner's Rift. Everyone can share information\r\n                                              and experiences.\r\n                                            ")]),t._v(" "),s("div",{staticClass:"task"},[s("div",{staticClass:"abstract"},[s("h4",[t._v("What I used")]),t._v(" "),s("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Android_Studio_icon.svg/2000px-Android_Studio_icon.svg.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://i1.wp.com/brogramador.com/wp-content/uploads/2017/10/illustrator.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/2/20/Photoshop_CC_icon.png",alt:""}})])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[s("div",{staticClass:"slides",attrs:{id:"slide5"}}),t._v(" "),s("div",{staticClass:"description"},[s("div",{staticClass:"description-text"},[s("h1",[t._v("HDV Documental")]),t._v(" "),s("p",[t._v("Huellas de Vida is an interactive documental of the Afro traditional midwifery in the colombian Pacific.\r\n                                              It is also a tool that allows the midwives to be creators of their own multimedia content.\r\n                                              This project seeks to conserve and transmit the culture and knowledge of the Afro traditional\r\n                                              midwifery.\r\n                                            ")]),t._v(" "),s("div",{staticClass:"task"},[s("div",{staticClass:"abstract"},[s("h4",[t._v("What I used")]),t._v(" "),s("img",{attrs:{src:"https://i1.wp.com/brogramador.com/wp-content/uploads/2017/10/illustrator.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/2/20/Photoshop_CC_icon.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/266px-HTML5_logo_and_wordmark.svg.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/2000px-CSS3_logo_and_wordmark.svg.png",alt:""}})])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[s("div",{staticClass:"slides",attrs:{id:"slide6"}}),t._v(" "),s("div",{staticClass:"description"},[s("div",{staticClass:"description-text"},[s("h1",[t._v("Portfolio")]),t._v(" "),s("p",[t._v("This is my personal branding and identity project.\r\n                                              Made it using Adobe Illustrator and Photoshop.\r\n                                              You can take a look of the process and results.\r\n                                            ")]),t._v(" "),s("div",{staticClass:"task"},[s("div",{staticClass:"abstract"},[s("h4",[t._v("What I used")]),t._v(" "),s("img",{attrs:{src:"https://i1.wp.com/brogramador.com/wp-content/uploads/2017/10/illustrator.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/2/20/Photoshop_CC_icon.png",alt:""}})])])])])])}]};var w=s("VU/8")(b,C,!1,function(t){s("rTvR")},"data-v-0b53d50c",null).exports,k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container_contact page"},[s("iframe",{staticStyle:{border:"0"},attrs:{frameborder:"0",src:"https://www.google.com/maps/embed/v1/place?key=AIzaSyBBV6vtQYpzN_1r9dM0Zqbplj73ucSgXaU\n    &q=carrera+25a+25+120+Agua+Blanca,+Cali,+Valle+del+Cauca",allowfullscreen:""}}),t._v(" "),s("div",{staticClass:"contactinfo"},[s("h1",[t._v("MEET ME")]),t._v(" "),s("h3",[t._v("Carrera 25A # 25 - 120")]),t._v(" "),s("h1",[t._v("CALL ME")]),t._v(" "),s("h3",[t._v("+57 2 315 623 92 81")]),t._v(" "),s("h1",[t._v("WRITE ME")]),t._v(" "),s("h3",[t._v("hendel_10@hotmail.com")]),t._v(" "),s("h1",[t._v("DID YOU LIKE MY WORK?")]),t._v(" "),s("h3",[t._v("Contact me, I'll be glad to hear you")])])])}]};var S=s("VU/8")({name:"ContentContact",data:function(){return{}}},k,!1,function(t){s("Z3mE")},null,null).exports,y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container_abilities page",staticStyle:{left:"0"}},[s("h1",{staticStyle:{color:"white"}},[t._v("My skills")]),t._v(" "),s("div",{staticClass:"skills"},[s("div",{staticClass:"paneluno panel"},[s("h2",[t._v("CODING")]),t._v(" "),s("img",{attrs:{src:"https://i.blogs.es/8d2420/650_1000_java/450_1000.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Processing_Logo_Clipped.svg/2000px-Processing_Logo_Clipped.svg.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"http://maplab.hku.nl/content/uploads/ngg_featured/E_Rv.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://dl2.macupdate.com/images/icons256/11662.png?d=1477939570",alt:""}}),t._v(" "),s("img",{attrs:{src:"http://www.stickpng.com/assets/images/5847f40ecef1014c0b5e488a.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/266px-HTML5_logo_and_wordmark.svg.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/2000px-CSS3_logo_and_wordmark.svg.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"http://geoffreyfraser.com/assets/images/art/Unity_Logo.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://nodeschool.io/pereira/img/logo/nodejs.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://seeklogo.com/images/A/arduino-logo-BC7CBC1DAA-seeklogo.com.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"http://www.stickpng.com/assets/images/584830fecef1014c0b5e4aa2.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://pbs.twimg.com/profile_images/502135348663578624/-oslcYof_400x400.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://www.acuitytraining.co.uk/wp-content/uploads/2015/05/SQL-logo-transparent.png",alt:""}})]),t._v(" "),s("div",{staticClass:"paneldos panel"},[s("h2",[t._v("UX/UI")]),t._v(" "),s("img",{attrs:{src:"https://i1.wp.com/brogramador.com/wp-content/uploads/2017/10/illustrator.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/2/20/Photoshop_CC_icon.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/2/29/Adobe_After_Effects_CC_icon.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"http://cdn.embed.ly/providers/logos/marvelapp.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://seeklogo.com/images/I/invision-logo-803E547E2A-seeklogo.com.png",alt:""}})]),t._v(" "),s("div",{staticClass:"paneltres panel"},[s("h2",[t._v("PERSONAL")]),t._v(" "),s("div",{staticClass:"contabilpers contuno"},[s("img",{attrs:{src:"https://www.ejprescott.com/media/icons/water-pressure-testing.png",alt:""}}),t._v(" "),s("p",[t._v("Working under pressure")])]),t._v(" "),s("div",{staticClass:"contabilpers contdos"},[s("img",{attrs:{src:"https://d30y9cdsu7xlg0.cloudfront.net/png/210074-200.png",alt:""}}),t._v(" "),s("p",[t._v("Responsable")])]),t._v(" "),s("div",{staticClass:"contabilpers conttres"},[s("img",{attrs:{src:"https://cdn4.iconfinder.com/data/icons/business-vol-2-5/100/Artboard_2-512.png",alt:""}}),t._v(" "),s("p",[t._v("Team work")])]),t._v(" "),s("div",{staticClass:"contabilpers contcuatro"},[s("img",{attrs:{src:"https://cdn0.iconfinder.com/data/icons/education-6/502/Education_1-512.png",alt:""}}),t._v(" "),s("p",[t._v("Autonomous learning")])])])])])}]};var j=s("VU/8")({name:"ContentAbilities",data:function(){return{}}},y,!1,function(t){s("/vbR")},null,null).exports;e.a.use(_.a);var M=new _.a({routes:[{path:"/",name:"ContentHome",component:p},{path:"/about",name:"ContentAbout",component:h},{path:"/projects",name:"ContentProjects",component:w},{path:"/contact",name:"ContentContact",component:S},{path:"/abilities",name:"ContentAbilities",component:j}]}),D=s("8+8L");e.a.use(D.a),e.a.config.productionTip=!1,new e.a({el:"#app",router:M,components:{App:u},template:"<App/>"})},Z3mE:function(t,a){},aMAb:function(t,a){t.exports="data:image/png;base64,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"},"d+ai":function(t,a){},rTvR:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.f1ec1abbe588112a5c46.js.map