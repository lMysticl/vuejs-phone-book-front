webpackJsonp([1],{0:function(t,e){},"2TAd":function(t,e){},"7zck":function(t,e){},HiIo:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),i={props:{modal:Boolean},data:function(){return{credentials:{username:"",password:""},error:!1,errorMessage:null,loading:!1}},computed:{info:function(){return this.$store.getters.infoShowed}},methods:{close:function(){this.$emit("close"),this.clearError(),this.clean()},clearError:function(){this.errorMessage=null},clearInfo:function(){this.$store.commit("setInfo",!1)},clean:function(){this.credentials.username="",this.credentials.password=""},login:function(){var t=this,e=new FormData;e.append("grant_type","password"),e.append("username",this.credentials.username),e.append("password",this.credentials.password),this.loading=!0,this.$store.dispatch("login",{credentials:this.credentials,formData:e,redirect:"contacts"}).then(function(){t.loading=!1,t.close(),t.clean()}).catch(function(e){t.error=!0,t.loading=!1,t.errorMessage=e.body.error_description})}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Login")])]),t._v(" "),a("v-divider"),t._v(" "),a("v-card-text",[a("v-alert",{attrs:{type:"info",dismissible:"",value:t.info,transition:"scale-transition",outline:""},on:{input:t.clearInfo}},[t._v("\n        In the first request to the Heroku server, there can be delays. Which disappear in next request.\n      ")]),t._v(" "),a("v-alert",{attrs:{type:"error",dismissible:"",transition:"scale-transition"},on:{input:t.clearError},model:{value:t.error,callback:function(e){t.error=e},expression:"error"}},[t._v("\n        "+t._s(t.errorMessage)+"\n      ")]),t._v(" "),a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{disabled:t.loading,id:"username",label:"Username",required:"","prepend-icon":"perm_identity"},model:{value:t.credentials.username,callback:function(e){t.$set(t.credentials,"username",e)},expression:"credentials.username"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{disabled:t.loading,id:"password",label:"Password",required:"",type:"password","prepend-icon":"lock_open"},model:{value:t.credentials.password,callback:function(e){t.$set(t.credentials,"password",e)},expression:"credentials.password"}})],1)],1)],1),t._v(" "),a("small",[t._v("*indicates required field")])],1),t._v(" "),a("v-divider"),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:"",disabled:t.loading},on:{click:t.close}},[t._v("close")]),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:"",loading:t.loading},on:{click:t.login}},[t._v("login")])],1)],1)],1)},staticRenderFns:[]},r=a("VU/8")(i,s,!1,null,null,null).exports,o=/^[a-zA-Z\\s]*$/,l=/^[a-zA-Z0-9]*$/,c={props:{modal:Boolean},data:function(){return{register:{},error:!1,errorMessage:"",e3:!0,loading:!1,password:"Password",usernameRules:[function(t){return!!t||"This field is required"},function(t){return t&&t.length>2&&l.test(t)||"This field must be more then two characters "}],passwordRules:[function(t){return!!t||"This field is required"},function(t){return t&&t.length>4||"This field must be more then 4 characters"}]}},methods:{close:function(){this.$emit("close"),this.clearError(),this.clean()},clearError:function(){this.errorMessage=null},clean:function(){this.$refs.form.reset(),this.register.username="",this.register.password="",this.register.firstname=""},clearInfo:function(){this.$store.commit("setInfo",!1)},registration:function(){var t=this;this.$refs.form.validate()&&(this.loading=!0,this.$store.dispatch("registration",{data:this.register}).then(function(){t.loading=!1,t.close()}).catch(function(e){t.error=!0,t.errorMessage=e.body.message,t.loading=!1}))}},computed:{info:function(){return this.$store.getters.infoShowed},firstnameRules:function(){if(this.register.firstname)return[function(t){return t&&t.length>2&&o.test(t)||"This field must be more then two characters and only letters"}]},valid:{get:function(){return!!this.register.username&&!!this.register.password},set:function(t){}}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Registration")])]),t._v(" "),a("v-divider"),t._v(" "),a("v-card-text",[a("v-alert",{attrs:{type:"info",dismissible:"",value:t.info,transition:"scale-transition",outline:""},on:{input:t.clearInfo}},[t._v("\n        In the first request to the Heroku server, there can be delays which disappear in next request.\n      ")]),t._v(" "),a("v-alert",{attrs:{type:"error",dismissible:"",transition:"scale-transition"},on:{input:t.clearError},model:{value:t.error,callback:function(e){t.error=e},expression:"error"}},[t._v("\n        "+t._s(t.errorMessage)+"\n      ")]),t._v(" "),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{id:"reg_username",label:"Username","prepend-icon":"perm_identity",rules:t.usernameRules,disabled:t.loading,required:""},model:{value:t.register.username,callback:function(e){t.$set(t.register,"username",e)},expression:"register.username"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{id:"firstname",label:"First name","prepend-icon":"face",rules:t.firstnameRules,disabled:t.loading},model:{value:t.register.firstname,callback:function(e){t.$set(t.register,"firstname",e)},expression:"register.firstname"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{staticClass:"input-group--focused",attrs:{id:"reg_password",type:"password","prepend-icon":"lock_open",name:"input-10-2",label:"Enter your password",hint:"At least 5 characters",required:"",min:"4","append-icon":t.e3?"visibility":"visibility_off","append-icon-cb":function(){return t.e3=!t.e3},type:t.e3?"password":"text",rules:t.passwordRules,disabled:t.loading},model:{value:t.register.password,callback:function(e){t.$set(t.register,"password",e)},expression:"register.password"}})],1)],1)],1),t._v(" "),a("small",[t._v("*indicates required field")])],1)],1),t._v(" "),a("v-divider"),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:"",disabled:t.loading},on:{click:t.close}},[t._v("close")]),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:"",disabled:!t.valid,loading:t.loading},on:{click:t.registration}},[t._v("Registration")])],1)],1)],1)},staticRenderFns:[]},u={components:{appLogin:r,appRegistration:a("VU/8")(c,d,!1,null,null,null).exports},data:function(){return{drawer:!1,login:!1,register:!1}},methods:{openLoginModal:function(){this.login=!0},closeRegisterModal:function(){this.register=!1},openRegisterModal:function(){this.register=!0},closeLoginModal:function(){this.login=!1},logOut:function(){this.$store.dispatch("logOut")},toTestPage:function(){this.isAuth?this.$router.push("/contacts"):this.openLoginModal()}},computed:{todayYear:function(){return(new Date).getFullYear()},isAuth:function(){return this.$store.getters.isAuth}},name:"App"},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{dark:""}},[a("v-navigation-drawer",{attrs:{fixed:"",temporary:"",app:"","disable-resize-watcher":""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",[t.isAuth?t._e():a("v-list-tile",{attrs:{avatar:""},on:{click:t.openRegisterModal}},[a("v-list-tile-avatar",[a("v-icon",[t._v("fa-user-plus")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v("Registration")])],1)],1),t._v(" "),t.isAuth?t._e():a("v-list-tile",{attrs:{avatar:""},on:{click:t.openLoginModal}},[a("v-list-tile-avatar",[a("v-icon",[t._v("fa-sign-in")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v("Login")])],1)],1),t._v(" "),t.isAuth?a("v-list-tile",{attrs:{avatar:""},on:{click:t.logOut}},[a("v-list-tile-avatar",[a("v-icon",[t._v("fa-sign-out")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v("LogOut")])],1)],1):t._e(),t._v(" "),a("v-divider"),t._v(" "),a("v-list-tile",{attrs:{avatar:""},on:{click:t.toTestPage}},[a("v-list-tile-avatar",[a("v-icon",[t._v("fa-sign-out")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v("Contacts page")])],1)],1),t._v(" "),a("v-list-tile",{attrs:{avatar:"",to:"/"}},[a("v-list-tile-avatar",[a("v-icon",[t._v("fa-sign-out")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v("Phone Book")])],1)],1)],1)],1),t._v(" "),a("v-toolbar",{attrs:{app:""}},[a("v-toolbar-side-icon",{staticClass:"hidden-sm-and-up",on:{click:function(e){t.drawer=!t.drawer}}}),t._v(" "),a("v-toolbar-title",{staticClass:"hidden-sm-and-up"},[t._v("Phone Book")]),t._v(" "),a("v-toolbar-items",{staticClass:"hidden-xs-only"},[a("v-btn",{attrs:{exact:"",flat:"",to:"/"}},[t._v("\n        Phone Book\n      ")]),t._v(" "),a("v-btn",{attrs:{exact:"",flat:""},on:{click:t.toTestPage}},[t._v("\n        Contacts Page\n      ")])],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-toolbar-items",{staticClass:"hidden-xs-only"},[t.isAuth?t._e():a("v-btn",{attrs:{flat:""},on:{click:t.openRegisterModal}},[a("v-icon",{attrs:{left:""}},[t._v("fa-user-plus")]),t._v("\n        Registration\n      ")],1),t._v(" "),t.isAuth?t._e():a("v-btn",{attrs:{flat:""},on:{click:t.openLoginModal}},[a("v-icon",{attrs:{left:""}},[t._v("fa-sign-in")]),t._v("\n        Login\n      ")],1),t._v(" "),t.isAuth?a("v-btn",{attrs:{flat:""},on:{click:t.logOut}},[a("v-icon",{attrs:{left:""}},[t._v("fa-sign-out")]),t._v("\n        LogOut\n      ")],1):t._e()],1)],1),t._v(" "),a("v-content",[a("router-view")],1),t._v(" "),a("app-login",{attrs:{modal:t.login},on:{close:t.closeLoginModal}}),t._v(" "),a("app-registration",{attrs:{modal:t.register},on:{close:t.closeRegisterModal}}),t._v(" "),a("v-footer",{attrs:{app:""}},[a("span",{staticClass:"pl-4"},[t._v("© dantedimon and mystic | "+t._s(t.todayYear)+" | © ")])])],1)},staticRenderFns:[]};var h=a("VU/8")(u,v,!1,function(t){a("2TAd")},null,null).exports,m=a("/ocq");function f(t){return function(t){var e=t.split(".")[1].replace("-","+").replace("_","/");return JSON.parse(window.atob(e))}(t).exp}function p(){return localStorage.getItem("access_token")}var g={getToken:p,saveToken:function(t){localStorage.setItem("access_token",t)},deleteToken:function(){localStorage.removeItem("access_token")},getAuthHeader:function(){return"Bearer "+p()},isTokenExpired:function(){var t=p();return!t||Date.now()/1e3>f(t)}},_=a("fZjL"),b=a.n(_),x={Ascension:"+247-####",Andorra:"+376-###-###","United Arab Emirates":"+971-###-###-####",Afghanistan:"+93-###-###-####","Antigua & Barbuda":"+1-268-###-####",Anguilla:"+1-264-###-####",Albania:"+355-###-###-###",Armenia:"+374-###-###-###","Caribbean Netherlands":"+599-###-####","Netherlands Antilles":"+599-###-####",Angola:"+244-###-###-###","Australian bases in Antarctica":"+672-1##-###",Argentina:"+54-###-###-####","American Samoa":"+1-684-###-####",Austria:"+43-###-###-####",Australia:"+61-###-####-####",Aruba:"+297-###-####",Azerbaijan:"+994-###-###-###-##","Bosnia and Herzegovina":"+387-###-#####",Barbados:"+1-246-###-####",Bangladesh:"+880-###-###-###",Belgium:"+32-###-###-###","Burkina Faso":"+226-###-##-####",Bulgaria:"+359-###-###-###",Bahrain:"+973-####-####",Burundi:"+257-###-##-####",Benin:"+229-###-##-####",Bermuda:"+1-441-###-####","Brunei Darussalam":"+673-###-####",Bolivia:"+591-###-###-####",Brazil:"+55-###-###-####",Bahamas:"+1-242-###-####",Bhutan:"+975-###-###-###",Botswana:"+267-###-###-###",Belarus:"+375-###-###-###-##",Belize:"+501-###-####","Dem. Rep. Congo":"+243-###-###-###","Central African Republic":"+236-###-##-####","Congo -Brazzaville-":"+242-###-###-####",Switzerland:"+41-###-###-####","Cote Ivoire":"+225-###-###-###","Cook Islands":"+682-###-###",Chile:"+56-###-####-####",Cameroon:"+237-####-####",China:"+86-###-###-####",Colombia:"+57-###-###-####","Costa Rica":"+506-####-####",Cuba:"+53-###-###-####","Cape Verde":"+238-###-###-##",Curacao:"+599-###-####",Cyprus:"+357-###-###-###","Czech Republic":"+420-###-###-###",Germany:"+49-####-###-####",Djibouti:"+253-###-##-###-##",Denmark:"+45-###-##-###-##",Dominica:"+1-767-###-####","Dominican Republic":"+1-8##-###-####",Algeria:"+213-###-###-####",Ecuador:"+593-###-###-####",Estonia:"+372-####-####",Egypt:"+20-###-###-####",Eritrea:"+291-###-###-###",Spain:"+34-###-###-###",Ethiopia:"+251-###-###-####",Finland:"+358-###-###-###-##",Fiji:"+679-###-#####","Falkland Islands":"+500-#####","F.S. Micronesia":"+691-###-####","Faroe Islands":"+298-###-###",Mayotte:"+262-#####-####",France:"+33-###-###-###","St Pierre & Miquelon":"+508-###-####",Guadeloupe:"+590-###-###-###",Gabon:"+241-###-###-##-##",Grenada:"+1-473-###-####","Rep. of Georgia":"+995-###-###-###","Guiana -French-":"+594-#####-####",Ghana:"+233-###-###-###",Gibraltar:"+350-###-#####",Greenland:"+299-###-##-##",Gambia:"+220-###-###-##",Guinea:"+224-###-###-###","Equatorial Guinea":"+240-###-###-####",Greece:"+30-###-###-####",Guatemala:"+502-###-###-####",Guam:"+1-671-###-####","Guinea-Bissau":"+245-###-######",Guyana:"+592-###-####","Hong Kong":"+852-####-####",Honduras:"+504-####-####",Croatia:"+385-###-###-###",Haiti:"+509-###-##-####",Hungary:"+36-###-###-###",Indonesia:"+62-###-###-#####",Ireland:"+353-###-###-###",Israel:"+972-###-###-####",India:"+91-####-###-###","Diego Garcia":"+246-###-####",Iraq:"+964-###-###-####",Iran:"+98-###-###-####",Iceland:"+354-###-####",Italy:"+39-###-####-###",Jamaica:"+1-876-###-####",Jordan:"+962-###-####-####",Japan:"+81-###-####-####",Kenya:"+254-###-######",Kyrgyzstan:"+996-###-###-###",Cambodia:"+855-###-###-###",Kiribati:"+686-###-###",Comoros:"+269-###-#####","Saint Kitts & Nevis":"+1-869-###-####","DPR Korea -North-":"+850-####-#############","Korea -South-":"+82-###-###-####",Kuwait:"+965-####-####","Cayman Islands":"+1-345-###-####",Kazakhstan:"+7-###-###-###-##",Laos:"+856-###-###-###",Lebanon:"+961-###-###-###","Saint Lucia":"+1-758-###-####",Liechtenstein:"+423-###-###-####","Sri Lanka":"+94-###-###-####",Liberia:"+231-###-###-###",Lesotho:"+266-###-###-####",Lithuania:"+370-###-###-###",Luxembourg:"+352-###-###-###",Latvia:"+371-###-###-###",Libya:"+218-###-###-###",Morocco:"+212-###-####-###",Monaco:"+377-###-###-###",Moldova:"+373-####-####",Montenegro:"+382-###-###-###",Madagascar:"+261-###-##-#####","Marshall Islands":"+692-###-####","Republic of Macedonia":"+389-###-###-###",Mali:"+223-###-##-####","Burma -Myanmar-":"+95-###-###-###",Mongolia:"+976-###-##-####",Macau:"+853-####-####","Northern Mariana Islands":"+1-670-###-####",Martinique:"+596-###-###-##-##",Mauritania:"+222-###-##-####",Montserrat:"+1-664-###-####",Malta:"+356-####-####",Mauritius:"+230-###-####",Maldives:"+960-###-####",Malawi:"+265-###-####-####",Mexico:"+52-###-###-####",Malaysia:"+60-###-###-###",Mozambique:"+258-###-###-###",Namibia:"+264-###-###-####","New Caledonia":"+687-###-####",Niger:"+227-###-##-####","Norfolk Island":"+672-3##-###",Nigeria:"+234-###-###-####",Nicaragua:"+505-####-####",Netherlands:"+31-###-###-####",Norway:"+47-###-###-####",Nepal:"+977-###-###-###",Nauru:"+674-###-####",Niue:"+683-####","New Zealand":"+64-###-###-####",Oman:"+968-###-###-###",Panama:"+507-###-####",Peru:"+51-###-###-###","French Polynesia":"+689-###-##-##","Papua New Guinea":"+675-###-###-###",Philippines:"+63-###-###-####",Pakistan:"+92-###-###-####",Poland:"+48-###-###-###",Palestine:"+970-###-###-####",Portugal:"+351-###-###-####",Palau:"+680-###-####",Paraguay:"+595-###-###-###",Qatar:"+974-####-####",Reunion:"+262-#####-####",Romania:"+40-###-###-####",Serbia:"+381-###-###-####",Russia:"+7-###-###-###-##",Rwanda:"+250-###-###-###","Saudi Arabia":"+966-###-###-####","Solomon Islands":"+677-###-####",Seychelles:"+248-###-###-###",Sudan:"+249-###-###-####",Sweden:"+46-###-###-####",Singapore:"+65-####-####","Saint Helena":"+290-####","Tristan da Cunha":"+290-####",Slovenia:"+386-###-###-###",Slovakia:"+421-###-###-###","Sierra Leone":"+232-###-######","San Marino":"+378-####-######",Senegal:"+221-###-###-####",Somalia:"+252-###-###-###",Suriname:"+597-###-####","South Sudan":"+211-###-###-####","Sao Tome and Principe":"+239-###-#####","El Salvador":"+503-###-##-####","Sint Maarten":"+1-721-###-####","Syrian Arab Republic":"+963-###-####-###",Swaziland:"+268-###-##-####","Turks & Caicos":"+1-649-###-####",Chad:"+235-###-##-###-##",Togo:"+228-###-###-###",Thailand:"+66-###-###-####",Tajikistan:"+992-###-###-####",Tokelau:"+690-####","East Timor":"+670-###-####",Turkmenistan:"+993-###-###-####",Tunisia:"+216-###-###-###",Tonga:"+676-#####",Turkey:"+90-###-###-####","Trinidad & Tobago":"+1-868-###-####",Tuvalu:"+688-######",Taiwan:"+886-###-####-####",Tanzania:"+255-###-###-####",Ukraine:"+380-###-###-###-##",Uganda:"+256-###-###-###","United Kingdom":"+44-###-####-####",Uruguay:"+598-###-###-###-##",Uzbekistan:"+998-###-###-####","Vatican City":"+39-6-698-#####","Saint Vincent & the Grenadines":"+1-784-###-####",Venezuela:"+58-###-###-####","British Virgin Islands":"+1-284-###-####","US Virgin Islands":"+1-340-###-####",Vietnam:"+84-###-####-###",Vanuatu:"+678-###-#####","Wallis and Futuna":"+681-###-####",Samoa:"+685-###-####",Yemen:"+967-###-###-###","South Africa":"+27-###-###-####",Zambia:"+260-###-###-####",Zimbabwe:"+263-###-######","USA and Canada":"+1-###-###-####",Perren:"+55-###-###-####"},k=/^[a-zA-Z\\s]*$/,y=/[а-яА-ЯёЁA-Za-z0-9'\.\-\s\,]/,w=/^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/,C=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/,A={props:["contact"],data:function(){return{modal:!1,country:"",phoneMasks:x,loading:!1,contactId:"",firstname:"",lastname:"",address:"",email:"",error:!1,errorMessage:"",mobilePhone:"",firstnameRules:[function(t){return!!t||"This field is required"},function(t){return t&&t.length>2&&k.test(t)||"This field must be more then two characters and only letters"}],mobilePhoneRules:[function(t){return!!t||"This field is required"},function(t){return t&&t.length>8&&w.test(t)||"This field must be more eight two numbers and only numbers"}]}},computed:{countries:function(){var t=[];for(var e in this.phoneMasks)t.push(e);return t},lastnameRules:function(){if(this.lastname)return[function(t){return t&&t.length>2&&k.test(t)||"This field must be more then two characters and only letters"}]},addressRules:function(){if(this.address)return[function(t){return t&&t.length>2&&y.test(t)||"This field must be more then two characters"}]},emailRules:function(){if(this.email)return[function(t){return C.test(t)||"E-mail must be valid"}]},update:function(){return this.contact.firstname!==this.firstname||this.contact.lastname!==this.lastname||this.contact.address!==this.address||this.contact.email!==this.email||this.contact.mobilePhone!==this.mobilePhone},valid:{get:function(){return!!this.firstname&&!!this.mobilePhone},set:function(t){}}},methods:{updateMask:function(){var t=this;this.country&&setTimeout(function(){t.mobilePhone=t.phoneMasks[t.country].replace(/#/g,"")},50)},clearError:function(){this.errorMessage=null},setValues:function(){this.contactId=this.contact.contactId,this.firstname=this.contact.firstname,this.lastname=this.contact.lastname,this.country=this.contact.country,this.address=this.contact.address,this.email=this.contact.email,this.mobilePhone=this.contact.mobilePhone,this.$refs.mobilePhone.focus(),this.$refs.mobilePhone.blur()},close:function(){this.modal=!1,this.clean(),this.clearError(),this.$emit("close")},clean:function(){this.$refs.form.reset(),this.firstname="",this.lastname="",this.country="",this.address="",this.email="",this.mobilePhone=""},open:function(){this.modal=!0},save:function(){var t=this;if(this.$refs.form.validate()){var e=new FormData;e.append("contactId",this.contactId),e.append("firstname",this.firstname),e.append("lastname",this.lastname),e.append("country",this.country),e.append("address",this.address),e.append("email",this.email),e.append("mobilePhone",this.mobilePhone),this.loading=!0,this.$http.post("https://vuejs-phone-book.herokuapp.com/contacts/update",e,{headers:{Authorization:g.getAuthHeader()}}).then(function(){t.loading=!1,t.close(),t.$emit("update"),t.clean()}).catch(function(e){t.loading=!1,t.errorMessage=e.body.message})}}},watch:{contact:function(t){b()(t).length&&(this.open(),this.setValues())}}},M={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"",scrollable:"","max-width":"450px"},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Contact data")])]),t._v(" "),a("v-divider"),t._v(" "),a("v-card-text",[a("v-alert",{attrs:{type:"error",dismissible:"",transition:"scale-transition"},on:{input:t.clearError},model:{value:t.error,callback:function(e){t.error=e},expression:"error"}},[t._v("\n        "+t._s(t.errorMessage)+"\n      ")]),t._v(" "),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"First name",rules:t.firstnameRules,disabled:t.loading},model:{value:t.firstname,callback:function(e){t.firstname=e},expression:"firstname"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Last name",rules:t.lastnameRules,disabled:t.loading},model:{value:t.lastname,callback:function(e){t.lastname=e},expression:"lastname"}})],1),t._v(" "),a("v-select",{attrs:{label:"Country",items:t.countries},on:{input:t.updateMask},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}}),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{ref:"mobilePhone",attrs:{label:"Mobile phone",rules:t.mobilePhoneRules,disabled:t.loading,"return-masked-value":"",mask:t.phoneMasks[t.country],hint:t.phoneMasks[t.country],type:"tel"},model:{value:t.mobilePhone,callback:function(e){t.mobilePhone=e},expression:"mobilePhone"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Address",disabled:t.loading,rules:t.addressRules},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Email",disabled:t.loading,rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1)],1)],1)],1),t._v(" "),a("v-divider"),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:"",disabled:t.loading},nativeOn:{click:function(e){t.close(e)}}},[t._v("Close")]),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:"",disabled:!t.valid||!t.update,loading:t.loading},nativeOn:{click:function(e){t.save(e)}}},[t._v("Save\n      ")])],1)],1)],1)},staticRenderFns:[]};var P=/^[а-яА-ЯёЁa-zA-Z\\s]{3,40}$/,R=/[а-яА-ЯёЁA-Za-z0-9'\.\-\s\,]/,I=/^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/,S=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/,T={data:function(){return{modal:!1,firstname:"",lastname:"",address:"",phoneMasks:x,email:"",country:"Australia",mobilePhone:"",loading:!1,firstnameRules:[function(t){return!!t||"This field is required"},function(t){return t&&t.length>2&&P.test(t)||"This field must be more then two characters and only letters"}],mobilePhoneRules:[function(t){return!!t||"This field is required"},function(t){return t&&t.length>8&&I.test(t)||"This field must be more then eight numbers"}]}},computed:{countries:function(){var t=[];for(var e in this.phoneMasks)t.push(e);return t},lastnameRules:function(){if(this.lastname)return[function(t){return t&&t.length>2&&P.test(t)||"This field must be more then two characters and only letters"}]},addressRules:function(){if(this.address)return[function(t){return t&&t.length>2&&R.test(t)||"This field must be more then two characters"}]},emailRules:function(){if(this.email)return[function(t){return S.test(t)||"E-mail must be valid"}]},valid:{get:function(){return!!this.firstname&&!!this.mobilePhone},set:function(t){}}},methods:{updateMask:function(){var t=this;this.country&&setTimeout(function(){t.mobilePhone=t.phoneMasks[t.country].replace(/#/g,"")},50)},close:function(){this.modal=!1,this.clean()},clean:function(){this.$refs.form.reset(),this.firstname="",this.lastname="",this.address="",this.country="",this.email="",this.mobilePhone=""},open:function(){this.modal=!0},save:function(){var t=this;if(this.$refs.form.validate()){var e=new FormData;e.append("firstname",this.firstname),e.append("lastname",this.lastname),e.append("country",this.country),e.append("address",this.address),e.append("email",this.email),e.append("mobilePhone",this.mobilePhone),this.loading=!0,this.$http.post("https://vuejs-phone-book.herokuapp.com/contacts/add",e,{headers:{Authorization:g.getAuthHeader()}}).then(function(){t.loading=!1,t.close(),t.$emit("update"),t.clean()}).catch(function(e){t.loading=!1})}}}},$={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"",scrollable:"","max-width":"450px"},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("v-btn",{attrs:{slot:"activator",color:"blue",dark:""},slot:"activator"},[t._v("new contact")]),t._v(" "),a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Contact data")])]),t._v(" "),a("div",{staticClass:"pl-4 pb-2"},[a("small",[t._v("* - required fields")])]),t._v(" "),a("v-divider"),t._v(" "),a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"First name",rules:t.firstnameRules,disabled:t.loading,required:""},model:{value:t.firstname,callback:function(e){t.firstname=e},expression:"firstname"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Last name",rules:t.lastnameRules,disabled:t.loading},model:{value:t.lastname,callback:function(e){t.lastname=e},expression:"lastname"}})],1),t._v(" "),a("v-select",{attrs:{label:"Country",items:t.countries},on:{change:t.updateMask},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}}),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Mobile phone",rules:t.mobilePhoneRules,type:"tel",disabled:t.loading,required:"","return-masked-value":"",mask:t.phoneMasks[t.country],hint:t.phoneMasks[t.country]},model:{value:t.mobilePhone,callback:function(e){t.mobilePhone=e},expression:"mobilePhone"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Address",rules:t.addressRules,disabled:t.loading},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Email",rules:t.emailRules,disabled:t.loading},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1)],1)],1)],1),t._v(" "),a("v-divider"),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:"",disabled:t.loading},nativeOn:{click:function(e){t.close(e)}}},[t._v("Close")]),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:"",disabled:!t.valid,loading:t.loading},nativeOn:{click:function(e){t.save(e)}}},[t._v("Save")])],1)],1)],1)},staticRenderFns:[]};var z={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.show?t._t("default"):t._e(),t._v(" "),a("div",[a("v-btn",{attrs:{block:"",color:"grey darken-2"},on:{click:function(e){t.show=!t.show}}},[t._v(t._s(t.show?"hide":"show"))])],1)],2)},staticRenderFns:[]};var E="https://vuejs-phone-book.herokuapp.com/",L={components:{contactEdit:a("VU/8")(A,M,!1,function(t){a("sW+U")},"data-v-57d855f6",null).exports,contactAdd:a("VU/8")(T,$,!1,function(t){a("HiIo")},"data-v-0051ef5a",null).exports,expantionPanel:a("VU/8")({data:function(){return{show:!1}}},z,!1,function(t){a("gJPP")},"data-v-5ce14244",null).exports},data:function(){return{contact:{},loading:!1,deleting:!1,selected:[],search:null,rowsPerPageItems:[4,8,12],checkboxes:{},pagination:{rowsPerPage:10},headers:[{text:"ID",align:"right",value:"contactId"},{text:"First Name",align:"right",value:"firstname"},{text:"Last Name",align:"right",value:"lastname"},{text:"Country",align:"right",value:"country"},{text:"Mobile Phone",align:"right",value:"mobilePhone"},{text:"Address",align:"right",value:"address"},{text:"Email",align:"right",value:"email"},{text:"Actions",align:"right",value:"name",sortable:!1}],contacts:[]}},created:function(){this.loadContactList()},methods:{clearContact:function(){this.contact={}},updateSelection:function(){var t=this;this.selected=[];var e=function(e){if(t.checkboxes[e]){var a=t.contacts.find(function(t){return t.contactId==e});t.selected.push(a)}};for(var a in this.checkboxes)e(a)},loadContactList:function(){var t=this;this.loading=!0,this.$http.get(E+"contacts/get-all",{headers:{Authorization:g.getAuthHeader()}}).then(function(e){t.contacts=e.body,t.loading=!1})},selectContact:function(t){this.contact=this.contacts.find(function(e){return e.contactId===t})},deleteContact:function(t){var e=this,a=new FormData;a.append("contactId",t),this.$http.post(E+"contacts/delete",a,{headers:{Authorization:g.getAuthHeader()}}).then(function(){e.selected=[],e.loadContactList()})},deleteSelectedContacts:function(){var t=this,e=new FormData;this.deleting=!0;var a=this.selected.map(function(t){return t.contactId});console.log(a),e.append("contactId",a),this.$http.post(E+"contacts/deleteList",e,{headers:{Authorization:g.getAuthHeader()}}).then(function(){t.selected=[],t.checkboxes={},t.loadContactList(),t.deleting=!1}).catch(function(e){t.deleting=!1})}},computed:{isMobile:function(){return this.$vuetify.breakpoint.mdAndDown},pages:function(){return null==this.pagination.rowsPerPage||null==this.pagination.totalItems?0:Math.ceil(this.contacts.length/this.pagination.rowsPerPage)}},watch:{isMobile:function(t){this.selected=[],this.checkboxes={}}}},B={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{"justify-center":""}},[a("v-flex",{staticClass:"pt-5",staticStyle:{"max-width":"1250px"}},[a("v-card",[a("v-container",{attrs:{fluid:"","grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-text-field",{attrs:{box:"",label:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md6:""}},[a("contact-add",{on:{update:t.loadContactList}}),t._v(" "),t.selected.length?a("v-btn",{attrs:{loading:t.deleting,color:"red",dark:""},on:{click:t.deleteSelectedContacts}},[t._v("\n                Delete selected ("+t._s(t.selected.length)+")\n              ")]):t._e()],1)],1)],1),t._v(" "),a("v-divider"),t._v(" "),t.isMobile?t._e():a("v-data-table",{attrs:{loading:t.loading,headers:t.headers,items:t.contacts,search:t.search,"select-all":"","item-key":"contactId",pagination:t.pagination},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[a("tr",[a("td",[a("v-checkbox",{attrs:{primary:"","hide-details":""},model:{value:e.selected,callback:function(a){t.$set(e,"selected",a)},expression:"props.selected"}})],1),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.contactId||"-"))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.firstname||"-"))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.lastname||"-"))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.country||"-"))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.mobilePhone||"-"))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.address||"-"))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.email||"-"))]),t._v(" "),a("td",{staticClass:"justify-center layout px-0"},[a("v-btn",{staticClass:"mx-0",attrs:{icon:""},on:{click:function(a){t.selectContact(e.item.contactId)}}},[a("v-icon",{attrs:{color:"teal"}},[t._v("edit")])],1),t._v(" "),a("v-btn",{staticClass:"mx-0",attrs:{icon:""},on:{click:function(a){t.deleteContact(e.item.contactId)}}},[a("v-icon",{attrs:{color:"pink"}},[t._v("delete")])],1)],1)])]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t._v(" "),t.isMobile?a("v-container",{attrs:{fluid:"","grid-list-lg":""}},[t.loading?t._e():a("v-data-iterator",{attrs:{"content-tag":"v-layout",row:"",wrap:"",search:t.search,items:t.contacts,"rows-per-page-items":t.rowsPerPageItems,pagination:t.pagination},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"item",fn:function(e){return a("v-flex",{attrs:{xs12:"",sm6:"",md3:"",lg3:""}},[a("v-card",{attrs:{hover:""}},[a("v-list",{attrs:{dense:""}},[a("v-list-tile",[a("v-list-tile-content",[t._v("First name:")]),t._v(" "),a("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(e.item.firstname||"-"))])],1),t._v(" "),a("v-list-tile",[a("v-list-tile-content",[t._v("Mobile phone:")]),t._v(" "),a("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(e.item.mobilePhone||"-"))])],1),t._v(" "),a("expantion-panel",[a("v-list-tile",[a("v-list-tile-content",[t._v("Last name:")]),t._v(" "),a("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(e.item.lastname||"-"))])],1),t._v(" "),a("v-list-tile",[a("v-list-tile-content",[t._v("Country:")]),t._v(" "),a("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(e.item.country||"-"))])],1),t._v(" "),a("v-list-tile",[a("v-list-tile-content",[t._v("Address:")]),t._v(" "),a("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(e.item.address||"-"))])],1),t._v(" "),a("v-list-tile",[a("v-list-tile-content",[t._v("Email:")]),t._v(" "),a("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(e.item.email||"-"))])],1),t._v(" "),a("v-list-tile",[a("v-list-tile-content",[t._v("Contact ID:")]),t._v(" "),a("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(e.item.contactId||"-"))])],1)],1)],1),t._v(" "),a("v-divider"),t._v(" "),a("v-card-actions",{attrs:{"align-center":""}},[a("v-checkbox",{attrs:{"hide-details":""},on:{change:t.updateSelection},model:{value:t.checkboxes[e.item.contactId],callback:function(a){t.$set(t.checkboxes,e.item.contactId,a)},expression:"checkboxes[props.item.contactId]"}}),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{staticClass:"mx-0",attrs:{disabled:t.deleting,icon:""},on:{click:function(a){t.selectContact(e.item.contactId)}}},[a("v-icon",{attrs:{color:"teal"}},[t._v("edit")])],1),t._v(" "),a("v-btn",{staticClass:"mx-0",attrs:{disabled:t.deleting,icon:""},on:{click:function(a){t.deleteContact(e.item.contactId)}}},[a("v-icon",{attrs:{color:"pink"}},[t._v("delete")])],1)],1)],1)],1)}}])}),t._v(" "),t.loading?a("v-layout",{staticClass:"pa-2",attrs:{"align-center":"","justify-center":""}},[a("v-progress-circular",{attrs:{size:50,indeterminate:"",color:"primary"}})],1):t._e()],1):t._e()],1),t._v(" "),a("contact-edit",{attrs:{contact:t.contact},on:{close:t.clearContact,update:t.loadContactList}})],1)],1)],1)},staticRenderFns:[]};var F=a("VU/8")(L,B,!1,function(t){a("c+rW")},null,null).exports,q={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":""}},[a("v-layout",{attrs:{"justify-center":"","align-center":""}},[a("v-flex",{staticStyle:{"max-width":"1150px"}},[a("v-card",[a("v-card-title",[a("h1",{staticClass:"display-2",attrs:{dark:""}},[t._v("Welcome to the Phone Book app")])]),t._v(" "),a("v-card-text",{staticStyle:{"font-size":"16px"}},[a("div",{staticClass:"mb-2"},[a("b",[t._v("Opportunities and functions:")])]),t._v(" "),a("ul",{staticClass:"pl-4"},[a("li",[t._v("Mobile view")]),t._v(" "),a("li",[t._v("Authorization")]),t._v(" "),a("li",[t._v("Registration")]),t._v(" "),a("li",[t._v("Save update sort search contacts")]),t._v(" "),a("li",[t._v("This page is fully adaptable, for different screen sizes")])]),t._v(" "),a("div",{staticClass:"my-2"},[a("b",[t._v("For check real data you can use test user:")])]),t._v(" "),a("ul",{staticClass:"pl-4"},[a("li",[a("b",[t._v("Login: test")])]),t._v(" "),a("li",[a("b",[t._v("Password: 12345")])])])]),t._v(" "),a("v-divider"),t._v(" "),a("v-card-text",[a("div",{staticClass:"title mb-3"},[t._v("Check more on Github!")]),t._v(" "),a("v-btn",{staticClass:"mx-0",attrs:{large:"",color:"primary",href:"https://github.com/lMysticl",target:"_blank"}},[t._v("See more")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var N=a("VU/8")({name:"welcome"},q,!1,function(t){a("R+uY")},"data-v-4fd5eac0",null).exports,U=a("woOf"),D=a.n(U),G=a("NYxO");n.a.use(G.a);var V=new G.a.Store({state:{user:{},info:!0,redirect:null,isAuth:!1},getters:{user:function(t){return t.user},infoShowed:function(t){return t.info},isAuth:function(t){return t.isAuth},redirect:function(t){return t.redirect}},mutations:{setUser:function(t,e){return t.user=D()({},e)},setRedirect:function(t,e){t.redirect=e},setAuth:function(t,e){t.isAuth=e},setInfo:function(t,e){t.info=e}},actions:{login:function(t,e){var a,i=t.commit,s=(e.credentials,e.formData),r=e.redirect;return n.a.http.post("https://vuejs-phone-book.herokuapp.com/oauth/token",s,{headers:{authorization:"Basic "+(a="testjwtclientid:XY7kmzoNzl100",btoa(encodeURIComponent(a).replace(/%([0-9A-F]{2})/g,function(t,e){return String.fromCharCode("0x"+e)})))}}).then(function(t){var e=t.body.access_token;return g.saveToken(e),i("setAuth",!0),r&&O.push(r),!0})},registration:function(t,e){t.commit,e.credentials;var a=e.data,i=e.redirect;return n.a.http.post("https://vuejs-phone-book.herokuapp.com/api/register",a).then(function(t){return i&&O.push(i),!0})},logOut:function(t){var e=t.commit;g.deleteToken(),e("setAuth",!1),O.push("/")}}});n.a.use(m.a);var H=new m.a({mode:"history",routes:[{path:"/",component:N},{path:"*",redirect:"/"},{path:"/contacts",component:F,meta:{requireAuth:!0}}]});H.beforeEach(function(t,e,a){var n=t.matched.some(function(t){return t.meta.requireAuth});V.getters.isAuth;g.isTokenExpired()?(g.deleteToken(),V.commit("setAuth",!1)):(V.commit("setAuth",!0),a()),!V.getters.isAuth&&n?a("/"):a()});var O=H,j=a("3EgV"),K=a.n(j),Z=a("8+8L");a("7zck");n.a.use(K.a),n.a.use(Z.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:O,store:V,components:{App:h},template:"<App/>"})},"R+uY":function(t,e){},"c+rW":function(t,e){},gJPP:function(t,e){},"sW+U":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1234482aaf5e05e33f9e.js.map