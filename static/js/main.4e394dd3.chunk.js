(this.webpackJsonprecipes=this.webpackJsonprecipes||[]).push([[0],{36:function(e,t,a){e.exports=a(66)},41:function(e,t,a){},42:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(29),o=a.n(r),l=(a(41),a(30)),c=a(35),i=a(2),p=a(3),h=a(5),u=a(4),d=a(6),m=(a(42),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).handleSearchChange=function(e){console.log(e),a.setState({searchBox:e.target.value})},a.getResults=function(e,t){e.preventDefault(),a.props.getResults(t)},a.state={searchBox:a.props.searchBox},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("form",null,n.a.createElement("input",{type:"text",name:"searchText",onChange:this.handleSearchChange,value:this.state.searchBox}),n.a.createElement("button",{onClick:function(t){return e.getResults(t,e.state.searchBox)}},"Search"))}}]),t}(s.Component)),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){console.log("handleChange"),console.log(e.target.value),a.setState({noteBox:e.target.value})},a.resetText=function(e){a.props.getText(e,a.props.label,a.state.noteBox),a.setState({noteBox:""})},a.state={noteBox:a.props.noteBox},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return n.a.createElement("form",null,n.a.createElement("input",{type:"text",onChange:this.handleChange,value:this.state.noteBox}),n.a.createElement("button",{onClick:this.resetText},"Submit"))}}]),t}(s.Component),b=function(e){return n.a.createElement("p",null,e.noteObject[e.label]?e.noteObject[e.label]:"no notes available",n.a.createElement("button",{onClick:function(){return e.deleteIt(e.label)}},"Delete"))},f=function(e){function t(e){return Object(i.a)(this,t),Object(h.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return console.log("this is label",this.props.label),n.a.createElement(n.a.Fragment,null,n.a.createElement(g,{noteObject:this.props.noteObject,label:this.props.label,getText:this.props.getText,handleChange:this.props.handleChange,noteBox:this.props.noteBox}),n.a.createElement(b,{noteObject:this.props.noteObject,label:this.props.label,noteValue:this.props.noteValue,deleteIt:this.props.deleteIt}))}}]),t}(s.Component),v=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{onClick:function(){return e.addStars(e.index,e.label)},className:e.startStatus}))},O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={stars:5,starred:a.props.starsObject[a.props.label]?a.props.starsObject[a.props.label]:0,allStars:[]},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("button",{className:"pointer",onClick:function(){return e.props.toggleMark(e.props.recipe.label)}},"Status"),n.a.createElement("p",null,this.props.oldOnes.includes(this.props.recipe.label)?"Old":"New"))}}]),t}(s.Component),S=function(e){return n.a.createElement("p",{onClick:e.faveToggle},n.a.createElement("i",{className:"material-icons pointer"},e.favorites.includes(e.item)?"remove":"add"))},j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).switchNote=function(){a.setState({noteSide:!0,ingSide:!1})},a.switchIng=function(){console.log("ingside"),a.setState({noteSide:!1,ingSide:!0})},a.showMore=function(){a.setState({showMore:!a.state.showMore,showWord:"...more"==a.state.showWord?"Less.":"...more"})},a.state={noteSide:!1,ingSide:!0,showMore:!1,showWord:"...more",noteValue:"",noteBox:""},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.recipe.ingredientLines.map((function(e,t){return n.a.createElement("li",{key:t},e)}));this.setState({ingredients:e,subIng:e.slice(0,3)})}},{key:"render",value:function(){return console.log("this is recipeCard"),n.a.createElement("div",{className:"card col-md-3 col-sm-6 col-12",style:{width:"18rem"}},n.a.createElement("h5",{className:"card-header bg-dark",style:{color:"white"}},this.props.recipe.label),n.a.createElement("img",{className:"card-img-top",src:this.props.recipe.image,alt:this.props.recipe.lable}),n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"card-header"},n.a.createElement("ul",{className:"nav nav-tabs card-header-tabs"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",onClick:this.switchIng},"Ingredients")),this.props.inFave?n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",onClick:this.switchNote},"Notes")):null)),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},this.state.ingSide?n.a.createElement("div",null,n.a.createElement("ul",null,n.a.createElement("p",{className:"card-text"},this.state.showMore?this.state.ingredients:this.state.subIng,n.a.createElement("span",{className:"showMore pointer",onClick:this.showMore},this.state.showWord))),n.a.createElement("a",{className:"btn btn-primary",href:this.props.recipe.url},"More info on ","".concat(this.props.recipe.source))):n.a.createElement("div",null,this.props.inFave?n.a.createElement(f,{noteObject:this.props.noteObject,label:this.props.recipe.label,getText:this.props.getText,deleteIt:this.props.deleteIt,handleChange:this.props.handleChange,noteValue:this.props.noteValue,noteBox:this.props.noteBox}):null)),n.a.createElement("div",{className:"row"},n.a.createElement(S,{faveToggle:this.props.faveToggle,favorites:this.props.favorites,item:this.props.item}),this.props.inFave?n.a.createElement(O,{style:{display:"inline"},resetThis:this.props.resetThis,makeStars:this.props.makeStars,allStars:this.props.allStars,setStars:this.props.setStars,starsObject:this.props.starsObject,label:this.props.recipe.label,recipe:this.props.recipe,toggleMark:this.props.toggleMark,oldOnes:this.props.oldOnes,addStars:this.props.addStars}):null))))}}]),t}(s.Component),E=function(e){console.log("this is searchResult");var t=e.recipes.map((function(t,a){return n.a.createElement(j,{resetThis:e.resetThis,makeStars:e.makeStars,allStars:e.allStars,setStars:e.setStars,starsObject:e.starsObject,noteObject:e.noteObject,recipe:t.recipe,key:a,faveToggle:function(){return e.faveToggle(t)},inFave:e.inFave,toggleMark:e.toggleMark,oldOnes:e.oldOnes,favorites:e.favorites,item:t,getText:e.getText,deleteIt:e.deleteIt,handleChange:e.handleChange,noteValue:e.noteValue,noteBox:e.noteBox,addStars:e.addStars})}));return n.a.createElement("div",{className:"row"}," ",t)},k=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(m,{getResults:this.props.getResults,handleSearchChange:this.props.handleSearchChange,searchBox:this.props.searchBox}),n.a.createElement(E,{recipes:this.props.recipes,faveToggle:this.props.faveToggle,inFave:!1,favorites:this.props.favorites}))}}]),t}(s.Component),x=a(31),y=a.n(x),C=a(32),w=a.n(C),T=a(14),N=a(11),B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).toggleMark=function(e){var t=a.state.oldOnes;console.log("recipe is ",e," oldOnes ",t),t.includes(e)?(console.log("it is in status"),t.splice(t.indexOf(e),1)):(console.log("in else"),t.push(e)),a.setState({oldOnes:t})},a.resetNew=function(){a.setState({oldOnes:[]})},a.state={oldOnes:[]},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return console.log("this is render"),n.a.createElement("div",null,n.a.createElement("h1",null,"Here is favorite page"),n.a.createElement("button",{onClick:this.props.deleteAll},"Delete All"),n.a.createElement("button",{onClick:this.props.resetNew},"Reset All"),n.a.createElement("button",{onClick:this.props.resetNotes},"Remove Notes"),n.a.createElement(E,{noteObject:this.props.noteObject,recipes:this.props.favorites,faveToggle:this.props.faveToggle,inFave:!0,oldOnes:this.props.oldOnes,toggleMark:this.props.toggleMark,favorites:this.props.favorites,getText:this.props.getText,deleteIt:this.props.deleteIt,handleChange:this.props.handleChange,noteValue:this.props.noteValue,noteBox:this.props.noteBox,starsObject:this.props.starsObject,setStars:this.props.setStars,allStars:this.props.allStars,resetThis:this.props.resetThis,makeStars:this.props.makeStars,addStars:this.props.addStars}))}}]),t}(s.Component);function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}y.a.config();var V=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).getResults=function(e){var t="https://api.edamam.com/search?q=".concat(e,"&app_id=").concat("a5f56719","&app_key=").concat("92aac9caca1da91b590d700241d26a90","&from=0&to=20");w()({method:"get",url:t}).then((function(e){a.setState({recipes:e.data.hits,searchBox:""})})).catch(console.error())},a.faveToggle=function(e){var t=Object(c.a)(a.state.favorites);t.includes(e)?(t.splice(t.indexOf(e),1),console.log("".concat(e.recipe.label," has been removed from your favorite"))):(t.push(e),console.log("".concat(e.recipe.label," has been added to your favorite"))),a.setState({favorites:t})},a.deleteAll=function(){a.setState({favorites:[]})},a.getText=function(e,t,s){e.preventDefault();var n=a.state.noteObject;n[t]=s,a.setState({noteValue:s,noteBox:"",noteObject:n})},a.deleteIt=function(e){console.log("deleteIt");var t=I({},a.state.noteObject);delete t[e],a.setState({noteValue:"",noteObject:t})},a.handleSearchChange=function(e){a.setState({searchBox:e.target.value})},a.handleChange=function(e){console.log("handleChange")},a.resetNew=function(){a.setState({starsObject:{}})},a.setStars=function(e,t){var s=I({},a.state.starsObject);s[t]=e,a.setState({starsObject:s})},a.makeStars=function(){console.log(a.props.starsObject);for(var e=[],t=0;t<5;t++)t<=a.state.starred?e.push(n.a.createElement(v,{key:t,index:t,label:a.props.label,addStars:a.addStars,startStatus:"fa fa-star checked"})):e.push(n.a.createElement(v,{key:t,index:t,label:a.props.label,addStars:a.addStars,startStatus:"fa fa-star"}));e.push(n.a.createElement("button",{onClick:function(){return a.resetThis(0,a.props.label)}},"Reset")),a.setState({allStars:e})},a.resetThis=function(e,t){console.log("this is this"),a.setStars(e,t),a.setState({starred:0}),a.makeStars()},a.addStars=function(e,t){for(var s=[],r=0;r<5;r++)s.push(n.a.createElement(v,{label:t,key:r,index:r,addStars:a.addStars,startStatus:"fa fa-star"}));for(var o=0;o<=e;o++)console.log("allaslsjflaksdjf",o),s[o]=n.a.createElement(v,{label:t,key:o,index:o,addStars:a.addStars,startStatus:"fa fa-star checked"});s.push(n.a.createElement("button",{onClick:function(){return a.props.resetThis(0,a.props.label)}},"Reset")),a.setState({allStars:s}),a.props.setStars(e,t)},a.toggleMark=function(e){var t=a.state.oldOnes;console.log("recipe is ",e," oldOnes ",t),t.includes(e)?(console.log("it is in status"),t.splice(t.indexOf(e),1)):(console.log("in else"),t.push(e)),a.setState({oldOnes:t})},a.resetNew=function(){console.log("in resetnew"),a.setState({status:"New",oldOnes:[]})},a.resetNotes=function(){a.setState({noteObject:{}})},a.state={recipes:[],favorites:[],noteObject:{},noteValue:"",noteBox:"",oldOnes:[],searchBox:"",starsObject:{}},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(T.a,null,n.a.createElement("nav",{className:"navbar navbar-dark bg-dark sticky-top",style:{fontSize:"2rem",justifyContent:"space-around"}},n.a.createElement(T.b,{className:"nav-item nav-link",to:"/"},"Search"),n.a.createElement(T.b,{className:"nav-item nav-link",to:"/mylist"},"My List"," | ",this.state.favorites.length)),n.a.createElement(N.c,null,n.a.createElement(N.a,{exact:!0,path:"/",render:function(){return n.a.createElement(k,{getResults:e.getResults,recipes:e.state.recipes,faveToggle:e.faveToggle,favorites:e.state.favorites,searchBox:e.state.searchBox})}}),n.a.createElement(N.a,{path:"/mylist",render:function(){return n.a.createElement(B,{resetNotes:e.resetNotes,noteObject:e.state.noteObject,favorites:e.state.favorites,faveToggle:e.faveToggle,deleteAll:e.deleteAll,toggleMark:e.toggleMark,resetNew:e.resetNew,oldOnes:e.state.oldOnes,getText:e.getText,deleteIt:e.deleteIt,handleChange:e.handleChange,noteValue:e.state.noteValue,noteBox:e.state.noteBox,setStars:e.setStars,starsObject:e.state.starsObject,allStars:e.state.allStars,resetThis:e.resetThis,makeStars:e.makeStars,addStars:e.addStars})}})))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.4e394dd3.chunk.js.map