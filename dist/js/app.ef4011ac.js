(function(t){function e(e){for(var s,i,o=e[0],r=e[1],l=e[2],u=0,f=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);A&&A(e);while(f.length)f.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],s=!0,o=1;o<a.length;o++){var r=a[o];0!==n[r]&&(s=!1)}s&&(c.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},c=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/idle-clicker/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var A=r;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),n=a.n(s);n.a},3459:function(t,e){t.exports="data:image/png;base64,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"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"main container-fluid"},[t._m(0),a("div",{staticClass:"row justify-content-center"},[a("h5",[t._v("Total Cash: $"+t._s(t.money))])]),a("CashRegister"),a("div",{staticClass:"row justify-content-center"},[a("Coffee"),a("Bagels"),a("Pancakes")],1),a("div",{staticClass:"row mt-4 justify-content-center"},[a("button",{staticClass:"btn btn-sm btn-danger",on:{click:function(e){return t.restartGame()}}},[t._v("Restart Game")])])],1),t._m(1)])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center"},[a("h2",[t._v("Bob's Bagels")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[t._v(" Icons made by "),a("a",{attrs:{href:"http://www.freepik.com/",title:"Freepik"}},[t._v("Freepik")]),t._v(" from "),a("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[t._v("www.flaticon.com")])])}],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"coffee card col-md-3 p-1 mr-1"},[s("img",{staticClass:"card-img-top img-fluid",attrs:{src:a("3459"),alt:""}}),s("div",{staticClass:"card-body"},[s("h6",{staticClass:"card-title"},[t._v("Price: $"+t._s(t.coffees.price))]),s("h5",{staticClass:"card-title"},[t._v("Coffee in Stock: "+t._s(t.coffees.qty))]),t.coffees.automated?s("h6",{staticClass:"card-title mb-0"},[t._v("Manager Automating")]):t._e(),t.coffees.automated?t._e():s("div",{staticClass:"mt-0 mb-2 small"},[t._v("Manager Cost: $"+t._s(t.coffees.salary))]),s("button",{staticClass:"btn btn-sm btn-secondary mr-1",on:{click:function(e){return t.pourCoffee()}}},[t._v("Pour Coffee")]),t.coffees.automated?t._e():s("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(e){return t.hireCoffeeManager()}}},[t._v("Hire Manager")])])])},o=[],r={name:"coffee",data:function(){return{}},computed:{coffees:function(){return this.$store.state.coffee},money:function(){return this.$store.state.money}},methods:{pourCoffee:function(){this.$store.commit("addCoffee")},hireCoffeeManager:function(){var t=this;if(this.money>=this.coffees.salary){this.$store.state.money-=this.coffees.salary,this.$store.state.coffee.automated=!0;setInterval((function(){t.$store.commit("addCoffee")}),this.coffees.autoInterval)}this.$store.state.coffee.automated||clearInterval(cInterval)}},components:{}},l=r,A=(a("adaf"),a("2877")),u=Object(A["a"])(l,i,o,!1,null,"8fc8feb8",null),f=u.exports,d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bagel card col-md-3 p-1 mr-1"},[s("img",{staticClass:"card-img-top img-fluid",attrs:{src:a("ac24"),alt:"Bagels"}}),s("div",{staticClass:"card-body"},[s("h6",{staticClass:"card-title"},[t._v("Price: $"+t._s(t.bagels.price))]),s("h5",{staticClass:"card-title"},[t._v("Bagels in Stock: "+t._s(t.bagels.qty))]),t.bagels.unlocked?t._e():s("div",[s("div",{staticClass:"mb-2"},[t._v(" Unlock Price: "),s("span",{staticClass:"text-success"},[t._v("$"+t._s(t.bagels.unlockPrice))])]),s("button",{staticClass:"btn btn-sm btn-success",on:{click:function(e){return t.unlockBagels()}}},[t._v("Unlock")])]),t.bagels.unlocked?s("div",[t.bagels.automated?s("h6",{staticClass:"card-title mb-0"},[t._v("Manager Automating")]):t._e(),t.bagels.automated?t._e():s("div",{staticClass:"mt-0 mb-2 small"},[t._v("Manager Cost: $"+t._s(t.bagels.salary))]),s("button",{staticClass:"btn btn-sm btn-secondary mr-1",on:{click:function(e){return t.makeBagel()}}},[t._v("Make Bagel")]),t.bagels.automated?t._e():s("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(e){return t.hireBagelManager()}}},[t._v("Hire Manager")])]):t._e()])])},m=[],g={name:"bagel",data:function(){return{}},computed:{bagels:function(){return this.$store.state.bagels},money:function(){return this.$store.state.money}},methods:{makeBagel:function(){this.$store.commit("addBagel")},unlockBagels:function(){this.money>=this.bagels.unlockPrice&&(this.$store.state.money-=this.bagels.unlockPrice,this.bagels.unlocked=!0)},hireBagelManager:function(){var t=this;if(this.money>=this.bagels.salary){this.$store.state.money-=this.bagels.salary,this.$store.state.bagels.automated=!0;setInterval((function(){t.$store.commit("addBagel")}),this.bagels.autoInterval)}this.$store.state.coffee.automated||clearInterval(bInterval)}},components:{}},C=g,b=(a("9172"),Object(A["a"])(C,d,m,!1,null,"cc81cfa4",null)),h=b.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pancake card col-md-3 p-1"},[s("img",{staticClass:"card-img-top img-fluid",attrs:{src:a("ca3c"),alt:""}}),s("div",{staticClass:"card-body"},[s("h6",{staticClass:"card-title"},[t._v("Price: $"+t._s(t.pancakes.price))]),s("h5",{staticClass:"card-title"},[t._v("Pancakes in Stock: "+t._s(t.pancakes.qty))]),t.pancakes.unlocked?t._e():s("div",[s("div",{staticClass:"mb-2"},[t._v(" Unlock Price: "),s("span",{staticClass:"text-success"},[t._v("$"+t._s(t.pancakes.unlockPrice))])]),s("button",{staticClass:"btn btn-sm btn-success",on:{click:function(e){return t.unlockPancakes()}}},[t._v("Unlock")])]),t.pancakes.unlocked?s("div",[t.pancakes.automated?s("h6",{staticClass:"card-title mb-0"},[t._v("Manager Automating")]):t._e(),t.pancakes.automated?t._e():s("div",{staticClass:"mt-0 mb-2 small"},[t._v("Manager Cost: $"+t._s(t.pancakes.salary))]),s("button",{staticClass:"btn btn-sm btn-secondary mr-1",on:{click:function(e){return t.makePancake()}}},[t._v("Make Pancake")]),t.pancakes.automated?t._e():s("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(e){return t.hirePancakeManager()}}},[t._v("Hire Manager")])]):t._e()])])},p=[],v={name:"pancake",data:function(){return{}},computed:{pancakes:function(){return this.$store.state.pancakes},money:function(){return this.$store.state.money}},methods:{makePancake:function(){this.$store.commit("addPancake")},unlockPancakes:function(){this.money>=this.pancakes.unlockPrice&&(this.$store.state.money-=this.pancakes.unlockPrice,this.pancakes.unlocked=!0)},hirePancakeManager:function(){var t=this;if(this.money>=this.pancakes.salary){this.$store.state.money-=this.pancakes.salary,this.$store.state.pancakes.automated=!0;setInterval((function(){t.$store.commit("addPancake")}),this.pancakes.autoInterval)}this.$store.state.coffee.automated||clearInterval(pInterval)}},components:{}},y=v,B=(a("e916"),Object(A["a"])(y,k,p,!1,null,"beb07ee2",null)),E=B.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cashRegister"},[s("div",{staticClass:"row justify-content-center align-items-center mt-4"},[s("h3",[t._v("Cash Register")]),s("div",{staticClass:"ml-2 mb-1"},[s("button",{staticClass:"btn btn-sm btn-secondary",on:{click:function(e){return t.sellAll()}}},[t._v("Sell All")])])]),s("div",{staticClass:"row justify-content-center my-3"},[s("div",{staticClass:"col-md-2 d-flex flex-column align-items-center justify-content-center"},[s("div",[s("img",{staticClass:"img-fluid",attrs:{src:a("b7ae")}}),s("span",{staticClass:"ml-2"},[t._v(t._s(t.coffees.qty))])]),s("button",{staticClass:"btn btn-sm btn-secondary d-block mt-2",on:{click:function(e){return t.sellCoffee()}}},[t._v("Sell Coffee")])]),s("div",{staticClass:"col-md-2 d-flex flex-column align-items-center justify-content-center"},[s("div",[s("img",{staticClass:"img-fluid",attrs:{src:a("a896")}}),s("span",{staticClass:"ml-2"},[t._v(t._s(t.bagels.qty))])]),s("button",{staticClass:"btn btn-sm btn-secondary d-block mt-2",on:{click:function(e){return t.sellBagels()}}},[t._v("Sell Bagels")])]),s("div",{staticClass:"col-md-2 d-flex flex-column align-items-center justify-content-center"},[s("div",[s("img",{staticClass:"img-fluid",attrs:{src:a("65c2")}}),s("span",{staticClass:"ml-2"},[t._v(t._s(t.pancakes.qty))])]),s("button",{staticClass:"btn btn-sm btn-secondary d-block mt-2",on:{click:function(e){return t.sellPancakes()}}},[t._v("Sell Pancakes")])])])])},I=[],Q={name:"cashRegister",data:function(){return{}},computed:{coffees:function(){return this.$store.state.coffee},bagels:function(){return this.$store.state.bagels},pancakes:function(){return this.$store.state.pancakes}},methods:{sellCoffee:function(){if(this.coffees.qty>0){var t=this.coffees.qty*this.coffees.price;this.$store.commit("addMoney",t),this.$store.state.coffee.qty=0}},sellBagels:function(){if(this.bagels.qty>0){var t=this.bagels.qty*this.bagels.price;this.$store.commit("addMoney",t),this.$store.state.bagels.qty=0}},sellPancakes:function(){if(this.pancakes.qty>0){var t=this.pancakes.qty*this.pancakes.price;this.$store.commit("addMoney",t),this.$store.state.pancakes.qty=0}},sellAll:function(){this.sellCoffee(),this.sellBagels(),this.sellPancakes()}},components:{}},H=Q,O=Object(A["a"])(H,w,I,!1,null,"6e3edcae",null),P=O.exports,M={name:"App",computed:{money:function(){return this.$store.state.money}},methods:{restartGame:function(){this.$store.commit("resetGame")}},components:{Coffee:f,Bagels:h,Pancakes:E,CashRegister:P}},S=M,R=(a("034f"),Object(A["a"])(S,n,c,!1,null,null,null)),j=R.exports,x=a("2f62"),F=a("bfa9"),D=new F["a"]({key:"idle-clicker",storage:window.localStorage});s["a"].use(x["a"]);var z=new x["a"].Store({state:{money:0,coffee:{price:1,qty:0,perClick:1,automated:!1,unlocked:!0,unlockPrice:0,salary:50,autoInterval:1e3},bagels:{price:3,qty:0,perClick:1,automated:!1,unlocked:!1,unlockPrice:150,salary:150,autoInterval:3e3},pancakes:{price:5,qty:0,perClick:1,automated:!1,unlocked:!1,unlockPrice:500,salary:250,autoInterval:5e3}},mutations:{addMoney:function(t,e){t.money+=e},addCoffee:function(t){t.coffee.qty+=t.coffee.perClick},addBagel:function(t){t.bagels.qty+=t.bagels.perClick},addPancake:function(t){t.pancakes.qty+=t.pancakes.perClick},resetGame:function(t){t.money=0,t.coffee.qty=0,t.coffee.perClick=1,t.coffee.automated=!1,t.coffee.salary=50,t.bagels.qty=0,t.bagels.perClick=1,t.bagels.automated=!1,t.bagels.unlocked=!1,t.bagels.salary=150,t.pancakes.qty=0,t.pancakes.perClick=1,t.pancakes.automated=!1,t.pancakes.unlocked=!1,t.pancakes.salary=250}},actions:{},modules:{},plugins:[D.plugin]});s["a"].config.productionTip=!1,new s["a"]({store:z,render:function(t){return t(j)}}).$mount("#app")},"65c2":function(t,e){t.exports="data:image/png;base64,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"},"85ec":function(t,e,a){},9172:function(t,e,a){"use strict";var s=a("e1ae"),n=a.n(s);n.a},a896:function(t,e){t.exports="data:image/png;base64,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"},ac24:function(t,e,a){t.exports=a.p+"img/bagel-xl.6ef9dc89.png"},adaf:function(t,e,a){"use strict";var s=a("afe5"),n=a.n(s);n.a},afe5:function(t,e,a){},b7ae:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA3gAAAN4B3eqDagAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAObSURBVFiFrZZLbxtVFIC/e+dhJ07sKKgFiVRARYMEoooAKV22GyokBEX8AljwF5DYeNUFqsQW8RdY8QsIVEWkVauSClAKKSyi0qa1G9vx+JGZuYeFG3s8D2cS5+zu3DP3fPe87lEiQpq8/+GVr5RSV1M3DxERofa0Nly7BXdj/fqPK2m6duYhyKdi0uEOE9/3x9ZhELyVpaviHrh06bNip7NdClS/lvHPsaSgi+90C3P//vbTDy0RMakAlz/65DuEL07SMEBjtzH0iuM4D2/eWFs62NNjmsKVkzYuIgRBMFwHQfBydH8sBxqNZqVQcFFKnYhxYwz9Xp+sRE8AWJb9jd/f/3xhofziSQCICKViYbj2Or3d0JjvozqJJARo72zWgcVpAbz2HmHE/UVLVxZfX21FdXTiL0DB39Mah0EIhoa0DuLGMwEEtqY1LiJIBEApnTAOKSG48/V7lVk998D43Remhej1QzrdQQi01mJbamX16p17UZ1EJ5zv4ezr1tTGAYJAOLheaIxyLX0qrpMIwXL1dk0p3T4JgHgn99zKL4cCAKDU1DkAEEYItNbhxepaLxeAmHAzjwF/1qa+XKa+XKY/7yT2IzmIVtJIOyP1NRTYmtQLja3ZvnCK2huVgX4o9Bpdlv7xePXeLgChGf9HKx6mnZXqAS2SGQLRir8+WBoZF8Gre1hFm+b5RYw9ONLEE0DJg9wAYmU3okcri3ini8N1v9XHLti4JZegYOHPDpwa9wCojdwAJjCZHji4OUDQDwj3Q4rlEZD2w8EZMQCl5dfcAOerG09QuhP/7s+MbmgCQ6/RY2ZhBp4nzNxOF6c7AAhjEbBt+0ZuAAClku3Y7huUESQUurtd3DkX7QyOUEY4s/50qBsvwXertxMXmgiQVorKCOX7Tby6h1tycUsuAJZveO3nx8zWRmU+VoJamll2ModS0FuQfKrP3qpReHsBb8lGOiHzj7qc/rOB2x4NovEEVPDfkQFE2EobjHRgOHP3Gdx9lokeL0GtSC1BmBACy1LHngmSTSi9BCcCEOhjvwfxHmSM3DwywJvVW4/TSjGPxD3QLfjXjwwAoLW1dhyAaA44tuVdrP6e+bxPqAL449wrH1++8OUTULkH1E57j0rPg+eT1n5t++wk/dSpOCrezua6wGpegL1WczgLaq2Dl86tJt/piEwMAYAR7uc1Hh9EUSqzAeUGECXfQvpbntCNTsFaG8d2rh32z/+t7JbDUHvpdAAAAABJRU5ErkJggg=="},ca3c:function(t,e,a){t.exports=a.p+"img/pancakes-xl.6c3f58ce.png"},cfb4:function(t,e,a){},e1ae:function(t,e,a){},e916:function(t,e,a){"use strict";var s=a("cfb4"),n=a.n(s);n.a}});
//# sourceMappingURL=app.ef4011ac.js.map