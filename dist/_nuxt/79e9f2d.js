(window.webpackJsonp=window.webpackJsonp||[]).push([[4,9,14],{207:function(t,e,n){var content=n(223);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(71).default)("65b43f3d",content,!0,{sourceMap:!1})},208:function(t,e,n){t.exports=n.p+"img/LOGO1.2318fbd.png"},210:function(t,e,n){"use strict";n.r(e);var r={methods:{select:function(t){1==t?this.$refs.drop1.nextElementSibling.style.display="block"==this.$refs.drop1.nextElementSibling.style.display?"none":"block":this.$refs.drop2.nextElementSibling.style.display="block"==this.$refs.drop2.nextElementSibling.style.display?"none":"block"}}},o=(n(220),n(222),n(33)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-start-1 col-end-2 bg-white mt-20 mb-10 px-5 rounded-tr-lg rounded-br-lg shadow-md sticky"},[r("img",{staticClass:"absolute -mt-12",attrs:{src:n(208),alt:""}}),t._v(" "),r("div",{staticClass:"mt-20"},[r("button",{ref:"drop1",staticClass:"accordion",on:{click:function(e){return t.select(1)}}},[r("div",{staticClass:"flex justify-between"},[r("p",[t._v("TokenRelated")]),t._v(" "),r("svg",{staticClass:"h-6 w-6 mt-1",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"}})])])]),t._v(" "),t._m(0)]),t._v(" "),r("div",{staticClass:"mt-5 text-gray-500 font-semibold text-sm"},[t._v("\n      OTHER FUNCTIONS\n    ")]),t._v(" "),r("div",{staticClass:"mt-5"},[r("button",{ref:"drop2",staticClass:"accordion",on:{click:function(e){return t.select(2)}}},[r("div",{staticClass:"flex justify-between"},[r("p",[t._v("Stake and Lend")]),t._v(" "),r("svg",{staticClass:"h-6 w-6 mt-1",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"}})])])]),t._v(" "),t._m(1)]),t._v(" "),r("div",{staticClass:"mt-5 font-bold text-gray-700"},[t._v("NFT Marketplace")]),t._v(" "),t._m(2)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel"},[n("div",{staticClass:"mt-3 hover:text-blue-600"},[n("a",{attrs:{href:"/"}},[t._v("Listings")])]),t._v(" "),n("div",{staticClass:"mt-3 hover:text-blue-600"},[n("a",{attrs:{href:"#"}},[t._v("Audit")])]),t._v(" "),n("div",{staticClass:"mt-3 hover:text-blue-600"},[n("a",{attrs:{href:"#"}},[t._v("KYC")])]),t._v(" "),n("div",{staticClass:"mt-3 hover:text-blue-600"},[n("a",{attrs:{href:"https://pancakeswap.finance/swap?outputCurrency=0x52941a733F7bAb6E52d5c8f2045c9D9D9eA246Ff",target:"_blank"}},[t._v("\n            ShibaWatch SWAP\n          ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel"},[n("div",{staticClass:"mt-3 hover:text-blue-600"},[n("a",{attrs:{href:"#"}},[t._v("Stake")])]),t._v(" "),n("div",{staticClass:"mt-3 hover:text-blue-600"},[n("a",{attrs:{href:"#"}},[t._v("Audit")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-5 font-bold text-gray-700"},[n("a",{attrs:{href:"/rewards"}},[t._v("Rewards")])])}],!1,null,"7267b128",null);e.default=component.exports},219:function(t,e,n){"use strict";n.r(e);var r=n(3),o=(n(41),n(254)),c=n.n(o),l=n(274),d=n.n(l),v=n(280),f=n(277),h=n.n(f),m=n(278),x=n(279),_={name:"Topside",computed:{web3Injected:function(){return"undefined"!=typeof web3}},data:function(){return{account:null,web3Obj:new c.a(c.a.givenProvider||"https://bsc-dataseed.binance.org"),busdBalance:0,shibaBalance:0,shibaContractAddress:"0x52941a733F7bAb6E52d5c8f2045c9D9D9eA246Ff",busdContractAddress:"0xe9e7cea3dedca5984780bafc599bd69add087d56",shibaContract:null,busdContract:null,shibaAbi:m.abi,busdAbi:x.abi,networkId:"1",web3Modal:null}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.web3Modal=new d.a({cacheProvider:!1,providerOptions:{walletconnect:{package:v.a,options:{infuraId:"8043bb2cf99347b1bfadfb233c5325c0"}},fortmatic:{package:h.a,options:{key:"pk_test_391E26A3B43A3350"}}}});case 1:case"end":return e.stop()}}),e)})))()},methods:{networkChanged:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.networkId=t,56!=t){n.next=22;break}if(null!=e.account){n.next=4;break}return n.abrupt("return");case 4:return e.web3Obj=new c.a("https://bsc-dataseed.binance.org"),e.shibaContract=new e.web3Obj.eth.Contract(e.shibaAbi,c.a.utils.toChecksumAddress(e.shibaContractAddress)),n.next=8,e.shibaContract.methods.balanceOf(e.account).call();case 8:return r=n.sent,console.log(r),e.shibaBalance=Math.round(100*c.a.utils.fromWei(r,"ether"))/100,e.busdContract=new e.web3Obj.eth.Contract(e.busdAbi,c.a.utils.toChecksumAddress(e.busdContractAddress)),n.next=14,e.busdContract.methods.balanceOf(e.account).call();case 14:return o=n.sent,e.busdBalance=Math.round(100*c.a.utils.fromWei(o,"ether"))/100,n.next=18,e.storeItem("shibaBalance",e.shibaBalance);case 18:return n.next=20,e.storeItem("busdBalance",e.busdBalance);case 20:n.next=24;break;case 22:return n.next=24,e.switchNetwork();case 24:case"end":return n.stop()}}),n)})))()},storeItem:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:localStorage.setItem(t,e);case 1:case"end":return n.stop()}}),n)})))()},removeItem:function(t){localStorage.removeItem(t)},getAccountData:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=new c.a(t),n.next=3,r.eth.getAccounts();case 3:if(!((o=n.sent).length>0)){n.next=8;break}return e.account=o[0],n.next=8,e.networkChanged(56);case 8:case"end":return n.stop()}}),n)})))()},connectWallet:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.web3Modal.connect();case 3:return n=e.sent,e.next=6,t.getAccountData(n);case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),console.log("Could not get a wallet connection",e.t0),e.abrupt("return");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},switchNetwork:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}}},w=n(33),component=Object(w.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full bg-white -mx-2 flex justify-between border-2 border-gray-300"},[n("div"),t._v(" "),n("div",{staticClass:"flex"},[t.web3Injected?t.account?n("div",{staticClass:"bg-purple-800 mt-6 mb-6 mx-5 text-white px-5 py-2 rounded-lg cursor-pointer"},[t._v(t._s(this.account.substring(0,6)+"..."+this.account.substring(this.account.length-4,this.account.length)))]):n("div",{staticClass:"bg-purple-800 mt-6 mb-6 mx-5 text-white px-5 py-2 rounded-lg cursor-pointer",on:{click:t.connectWallet}},[t._v("Connect Wallet")]):n("a",{staticClass:"bg-purple-800 mt-6 mb-6 mx-5 text-white px-5 py-2 rounded-lg cursor-pointer",attrs:{target:"_blank",href:"https://metamask.io/"}},[t._v("Install Metamask")])])])}),[],!1,null,null,null);e.default=component.exports},220:function(t,e,n){"use strict";n(221)},221:function(t,e,n){var content=n(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(71).default)("c8055270",content,!0,{sourceMap:!1})},222:function(t,e,n){"use strict";n(207)},223:function(t,e,n){var r=n(70)(!1);r.push([t.i,".fade-enter-active[data-v-7267b128],.fade-leave-active[data-v-7267b128]{transition:opacity .5s ease}.fade-enter-from[data-v-7267b128],.fade-leave-to[data-v-7267b128]{opacity:0}button[disabled=disabled][data-v-7267b128]{cursor:not-allowed;opacity:.8}button.vsa-item__trigger[data-v-7267b128]{width:100%}div.leftbox[data-v-7267b128]{box-shadow:0 2.8px 2.2px rgba(0,0,0,.034),0 6.7px 5.3px rgba(0,0,0,.048),0 12.5px 10px rgba(0,0,0,.06)}.accordion[data-v-7267b128]{background-color:#eee;color:#444;cursor:pointer;padding:5px;width:100%;border:none;text-align:left;outline:none;font-size:20px;font:700;transition:.4s}.accordion[data-v-7267b128]:hover,.active[data-v-7267b128]{background-color:#ccc;color:#00f;outline:none}.panel[data-v-7267b128]{color:#a0aec0;padding:0 18px;display:none;background-color:#fff;overflow:hidden}",""]),t.exports=r},235:function(t,e,n){var r=n(70)(!1);r.push([t.i,"@-webkit-keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}@keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}",""]),t.exports=r},324:function(t,e,n){"use strict";n.r(e);var r=n(3),o=(n(41),n(234)),c=n(210),l=n(219),d=n(52),v=n.n(d),f={components:{SvgIcon:o.default,Leftside:c.default,Topside:l.default},computed:{pageCount:function(){return Math.round(this.coins.length/5)},startCount:function(){return 0==this.coins.length?0:5*this.curPage+1},endCount:function(){return 0==this.coins.length?0:5*(this.curPage+1)>this.coins.length?this.coins.length:5*(this.curPage+1)}},data:function(){return{value:[],options:["Listings","Audit","KYC","ShibaWatch Swap"],coins:[],searchkey:"",curPage:0}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.getData();case 1:case"end":return e.stop()}}),e)})))()},methods:{getData:function(){var t=this;v()({method:"post",url:"http://localhost:3030/api/list",data:{key:this.searchkey}}).then((function(e){var data=e.data;t.curPage=0,t.coins=data.result}))},nextPage:function(){5*(this.curPage+1)>=this.coins.length||this.curPage++},prevPage:function(){0!=this.curPage&&this.curPage--}}},h=n(33),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid grid-cols-4 bg-gray-200 w-screen h-screen relative"},[n("Leftside"),t._v(" "),n("div",{staticClass:"col-start-2 col-end-5 border-2 border-gray-200"},[n("Topside"),t._v(" "),n("div",{staticClass:"flex justify-between"},[t._m(0),t._v(" "),n("div",{staticClass:"flex mt-10 h-10 bg-purple-800 mt-6 mb-6 mx-5 text-white px-5 py-2 rounded-lg cursor-pointer"},[n("SvgIcon",{attrs:{text:"plus"}}),t._v(" "),t._m(1)],1)]),t._v(" "),n("div",{staticClass:"bg-white ml-3 mr-10 mt-1 rounded-md"},[n("div",{staticClass:"flex"},[n("div",{staticClass:"flex mt-3 ml-5"},[n("div",{staticClass:"flex border-2 rounded h-8"},[n("button",{staticClass:"flex items-center justify-center pl-2 bg-white"},[n("SvgIcon",{attrs:{text:"search"}})],1),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchkey,expression:"searchkey"}],staticClass:"px-2 py-2 w-80 focus:outline-none",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.searchkey},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getData.apply(null,arguments)},input:function(e){e.target.composing||(t.searchkey=e.target.value)}}})])]),t._v(" "),t._m(2)]),t._v(" "),n("table",{staticClass:"table-auto mt-5 w-full p-10"},[t._m(3),t._v(" "),n("tbody",{staticClass:"border-b-2 bg-white border-gray-300 border-t-2"},[0==t.coins.length?n("tr",{staticClass:"border-b-2 bg-white border-gray-300 border-t-2"},[n("td",{staticClass:"text-center text-sm",attrs:{colspan:"7"}},[t._v("\n                No coins find.\n              ")])]):t._l(5,(function(e){return n("tr",{key:e,staticClass:"border-b-2 bg-white border-gray-300 border-t-2"},[void 0!==t.coins[5*t.curPage+e-1]?n("td",{staticClass:"flex justify-center py-1"},[n("img",{staticClass:"w-8",attrs:{src:"http://localhost:3030/api/image_view/"+t.coins[5*t.curPage+e-1].image}})]):t._e(),t._v(" "),void 0!==t.coins[5*t.curPage+e-1]?n("td",{staticClass:"text-center text-sm"},[t._v(t._s(t.coins[5*t.curPage+e-1].name))]):t._e(),t._v(" "),void 0!==t.coins[5*t.curPage+e-1]?n("td",[""==t.coins[5*t.curPage+e-1].audit_link&&""==t.coins[5*t.curPage+e-1].doxxed_link&&""==t.coins[5*t.curPage+e-1].kyc_link?n("div",{staticClass:"text-center"},[t._v("N.A.")]):t._e(),t._v(" "),n("div",{staticClass:"flex justify-center"},[""!=t.coins[5*t.curPage+e-1].audit_link?n("div",{staticClass:"w-3 h-3 bg-green-500 rounded-full"}):t._e(),t._v(" "),""!=t.coins[5*t.curPage+e-1].kyc_link?n("div",{staticClass:"w-3 h-3 bg-purple-700 rounded-full mx-2"}):t._e(),t._v(" "),""!=t.coins[5*t.curPage+e-1].doxxed_link?n("div",{staticClass:"w-3 h-3 bg-pink-500 rounded-full mx-1"}):t._e()])]):t._e(),t._v(" "),void 0!==t.coins[5*t.curPage+e-1]?n("td",{staticClass:"text-green-500 text-center text-sm"},[t._v("8.0/10")]):t._e(),t._v(" "),void 0!==t.coins[5*t.curPage+e-1]?n("td",{staticClass:"text-center text-sm"},[t._v(t._s(new Date(t.coins[5*t.curPage+e-1].uploaded_date).toLocaleDateString()))]):t._e(),t._v(" "),void 0!==t.coins[5*t.curPage+e-1]?n("td",[n("div",{staticClass:"bg-green-600 rounded-sm flex justify-center text-white"},[t._v("Presale")])]):t._e(),t._v(" "),void 0!==t.coins[5*t.curPage+e-1]?n("td",{staticClass:"text-green-500 text-center text-sm"},[t._v("8.6/10")]):t._e()])}))],2)]),t._v(" "),n("div",{staticClass:"flex justify-between mt-5 mx-5 pb-5"},[n("div",{staticClass:"flex"},[n("div",{staticClass:"w-7 h-6 bg-gray-300 text-center text-blue-500 cursor-pointer",on:{click:t.prevPage}},[n("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"}})])]),t._v(" "),n("p",{staticClass:"mx-2 text-sm text-gray-500"},[t._v(t._s(t.startCount)+"-"+t._s(t.endCount)+" of "+t._s(t.coins.length))]),t._v(" "),n("div",{staticClass:"w-7 h-6 bg-gray-300 text-blue-500 cursor-pointer",on:{click:t.nextPage}},[n("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"}})])])]),t._v(" "),t._m(4)])])],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"font-bold mt-3 mx-5 text-3xl"},[t._v("Listings")]),t._v(" "),n("p",{staticClass:"mx-5 mt-2 font-semibold text-gray-700"},[t._v("We collate and streamline all existing and upcoming coins all in one  listing")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"/create"}},[n("p",[t._v("Create Listing")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-between"},[n("div",{staticClass:"flex"},[n("div",{staticClass:"w-3 h-3 rounded-full bg-green-500 mt-6 mx-3"}),t._v(" "),n("p",{staticClass:"mt-5 -mx-2 text-xs"},[t._v("Audited")]),t._v(" "),n("div",{staticClass:"w-3 h-3 rounded-full bg-purple-700 mt-6 mx-3"}),t._v(" "),n("p",{staticClass:"mt-5 -mx-2 text-xs"},[t._v("KYC")]),t._v(" "),n("div",{staticClass:"w-3 h-3 rounded-full bg-pink-500 mt-6 mx-3"}),t._v(" "),n("p",{staticClass:"mt-5 -mx-2 text-xs"},[t._v("Doxxed")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",{staticClass:"border-b-2 bg-gray-200 border-gray-300 border-t-2 border-gray-300"},[n("tr",[n("th",{staticClass:"invisible bg-gray-300"},[t._v("avatar")]),t._v(" "),n("th",{staticClass:"text-center text-gray-800 font-semibold text-sm"},[t._v("NAME")]),t._v(" "),n("th",{staticClass:"text-center text-gray-800 font-semibold text-sm"},[t._v("METRICS")]),t._v(" "),n("th",{staticClass:"text-center text-gray-800 font-semibold text-sm"},[t._v("SOCIAL MEDIA STRENGTH")]),t._v(" "),n("th",{staticClass:"text-center text-gray-800 font-semibold text-sm"},[t._v("UPLOADED DATE")]),t._v(" "),n("th",{staticClass:"text-center text-gray-800 font-semibold text-sm"},[t._v("STATUS")]),t._v(" "),n("th",{staticClass:"text-center text-gray-800 font-semibold text-sm"},[t._v("SHIBA RATING")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex"},[n("p",{staticClass:"mx-10 text-sm text-gray-500"},[t._v("Rows per page: "),n("span",{staticClass:"text-black"},[t._v("5")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Leftside:n(210).default,Topside:n(219).default,SvgIcon:n(234).default})}}]);