(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(69)},37:function(e,t,a){},42:function(e,t,a){},60:function(e,t,a){},62:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);a(37);var c=a(0),n=a.n(c),r=a(32),l=a.n(r),i=a(7),o=a(8),s=a(10),m=a(9),u=a(11),d=a(14),p=a(12),h=(a(42),a(13)),E=a.n(h),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={productAllInformations:[],categoryProductName:"",productDescription:"",imageProduct:""},a.productInformations=a.productInformations.bind(Object(p.a)(a)),a.productDescription=a.productDescription.bind(Object(p.a)(a)),a.productCategory=a.productCategory.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"productInformations",value:function(){var e=this,t=this.props.match.params.id;E.a.get("".concat("https://mercado-livre-challenge.herokuapp.com","/items/").concat(t)).then(function(t){e.setState({imageProduct:t.data.pictures[0].url,productAllInformations:t.data}),e.productCategory(),e.productDescription()}).catch(function(e){throw new Error(e)})}},{key:"productDescription",value:function(){var e=this,t=this.props.match.params.id;E.a.get("".concat("https://mercado-livre-challenge.herokuapp.com","/items/").concat(t,"/description")).then(function(t){e.setState({productDescription:t.data})}).catch(function(e){throw new Error(e)})}},{key:"productCategory",value:function(){var e=this,t=this.state.productAllInformations.category_id;E.a.get("".concat("https://mercado-livre-challenge.herokuapp.com","/category/").concat(t)).then(function(t){e.setState({categoryProductName:t.data})}).catch(function(e){throw new Error(e)})}},{key:"componentDidMount",value:function(){this.productInformations()}},{key:"render",value:function(){var e={imageProduct:n.a.createElement("img",{className:"image-product",src:this.state.imageProduct,alt:this.state.productAllInformations.title}),descriptionParagraph:n.a.createElement("p",{className:"description-paragraph"},this.state.productDescription.plain_text),titleProduct:n.a.createElement("h2",{className:"title-product"},this.state.productAllInformations.title),paidMarket:n.a.createElement("div",null,this.state.productAllInformations.accepts_mercadopago),descriptionTitle:n.a.createElement("h1",{className:"description-title"},"Descri\xe7\xe3o do produto"),solds:n.a.createElement("h3",{id:"solds"},this.state.productAllInformations.sold_quantity),condition:n.a.createElement("h3",null,this.state.productAllInformations.condition),categoryProductName:n.a.createElement("h2",null,this.state.categoryProductName),price:n.a.createElement("h2",null,this.state.productAllInformations.price),buttom:n.a.createElement("button",{className:"buy-button"},"Comprar")};return n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{className:"first-section-product-detail product-category"},n.a.createElement("span",null,e.categoryProductName)),n.a.createElement("section",{className:"second-section-product-detail"},n.a.createElement("div",{className:"row-product-detail"},n.a.createElement("div",{className:"column-image-product-detail"},n.a.createElement("figure",{className:"image-product"},e.imageProduct)),n.a.createElement("div",{className:"column-aux-product-detail"},n.a.createElement("span",{className:"codition-and-solds"},n.a.createElement("div",null,e.condition),n.a.createElement("h3",null,"-"),e.solds,n.a.createElement("h3",null,"Vendidos")),n.a.createElement("span",null,e.titleProduct),n.a.createElement("div",{className:"price-product"}," ",n.a.createElement("h2",null,"$")," ",n.a.createElement("div",null,e.price)),n.a.createElement("div",null,e.buttom),n.a.createElement("h2",{className:"paid-market"},"Mercado pago: ",e.paidMarket?n.a.createElement("span",{className:"paid-market-true"},"Sim"):n.a.createElement("span",{className:"paid-market-false"},"N\xe3o"))))),n.a.createElement("section",{className:"third-section-product-detail"},n.a.createElement("span",null,e.descriptionTitle),n.a.createElement("span",null,e.descriptionParagraph)))}}]),t}(c.Component),f=(a(60),a(4)),b=a(19),v=a.n(b),N=(a(62),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={products:[]},e.callApiMeli=e.callApiMeli.bind(Object(p.a)(e)),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"callApiMeli",value:function(){var e=this;E.a.get("".concat("https://mercado-livre-challenge.herokuapp.com","/items")).then(function(t){e.setState({products:t.data.searchResult})}).catch(function(e){throw new Error(e)})}},{key:"componentDidMount",value:function(){this.callApiMeli()}},{key:"render",value:function(){var e=v.a.shuffle(this.state.products).slice(0,4),t=v.a.shuffle(this.state.products).slice(0,4),a=n.a.Fragment;return n.a.createElement(a,null,n.a.createElement("section",{className:"first-section"},n.a.createElement("h1",null,"Ofertas da semana")),n.a.createElement("section",{className:"second-section row"},e.map(function(e,t){return n.a.createElement(a,{key:t},n.a.createElement("div",{className:"column-aux"}),n.a.createElement("div",{className:"column-middle"},n.a.createElement(f.b,{to:"/items/".concat(e.id)},n.a.createElement("figure",null,n.a.createElement("img",{className:"img-thumbnail",src:e.thumbnail,alt:e.title})),n.a.createElement("hr",null),n.a.createElement("h3",{className:"h5-price"},"Pre\xe7o: $ ",e.price,",00"),n.a.createElement("h5",{className:"h5-sold"}," Vendidos: ",e.sold_quantity)),n.a.createElement("h5",{className:"product-title"},e.title)),n.a.createElement("div",{className:"column-aux"}))})),n.a.createElement("section",{className:"third-section"},t.map(function(e,t){return n.a.createElement(a,{key:t},n.a.createElement("div",{className:"column-aux"}),n.a.createElement("div",{className:"column-middle"},n.a.createElement(f.b,{to:"/items/".concat(e.id)},n.a.createElement("figure",null,n.a.createElement("img",{className:"img-thumbnail",src:e.thumbnail,alt:e.title})),n.a.createElement("hr",null),n.a.createElement("h3",{className:"h5-price"},"Pre\xe7o: $ ",e.price),n.a.createElement("h5",{className:"h5-sold"}," Vendidos: ",e.sold_quantity)),n.a.createElement("h5",{className:"product-title"},e.title)),n.a.createElement("div",{className:"column-aux"}))})))}}]),t}(c.Component)),y=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(N,null))}}]),t}(c.Component),O=a(35),j=(a(67),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={titleProduct:[],product:""},e.handleChange=e.handleChange.bind(Object(p.a)(e)),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){e.preventDefault();var t=e.target,a=t.name,c=t.value;this.setState(Object(O.a)({},a,c))}},{key:"render",value:function(){var e=this,t={input:n.a.createElement("input",{type:"search",name:"product",value:this.state.product,placeholder:"Buscar produtos, marcas e muito mais...",onChange:function(t){return e.handleChange(t)}}),freeShipping:n.a.createElement("img",{src:"../images/free-shipping.png",alt:"Imagem de um caminh\xe3o informando o frete gr\xe1tis."}),logo:n.a.createElement("img",{src:"../images/logo.png",title:"Home Page",alt:"Imagem do logotipo do mercado livre."}),url:"http://localhost:3000/items",urlObject:window.location.href},a=n.a.Fragment;if(0!==this.state.product.length){var c=this.state.product;E.a.get("".concat("https://mercado-livre-challenge.herokuapp.com","/items?search=").concat(c)).then(function(t){e.setState({categoryProducty:t.data.categoryName,titleProduct:t.data.searchResult})}).catch(function(e){throw new Error(e)})}return 0!==this.state.product.length&&t.urlObject===t.url?n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{className:"search-box"},n.a.createElement(f.b,{to:"/"},n.a.createElement("figure",null,t.logo)),n.a.createElement("div",{className:"search-input-container"},n.a.createElement(f.b,{to:"/items"},n.a.createElement("div",{className:"input-field"},t.input,n.a.createElement("i",{className:"fas fa-search"}))))),n.a.createElement("section",{className:"second-section-search-box"},n.a.createElement("div",{className:"product-category"},n.a.createElement("div",null,n.a.createElement("h2",null,this.state.categoryProducty)))),n.a.createElement("section",{className:"third-section-search-box"},this.state.titleProduct.map(function(e,c){return n.a.createElement(a,{key:c},n.a.createElement(f.b,{to:"/items/".concat(e.id)},n.a.createElement("div",{className:"card row"},n.a.createElement("div",{className:"column-aux"},n.a.createElement("img",{className:"images",src:e.thumbnail,alt:e.title})),n.a.createElement("div",{className:"column-middle-search-box"},n.a.createElement("div",null,n.a.createElement("h2",null,"$ ",e.price),e.shipping.free_shipping?n.a.createElement("figure",null,t.freeShipping):""),n.a.createElement("h4",null,e.title)),n.a.createElement("div",{className:"column-aux",id:"column-aux"},n.a.createElement("h4",null,e.address.city_name.toUpperCase())))))}).slice(0,4))):n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{className:"search-box"},n.a.createElement(f.b,{to:"/"},n.a.createElement("figure",null,t.logo)),n.a.createElement("div",{className:"search-input-container"},n.a.createElement(f.b,{to:"/items"},n.a.createElement("div",{className:"input-field"},t.input,n.a.createElement("i",{className:"fas fa-search"}))))))}}]),t}(c.Component)),k=(a(68),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement(j,null)),n.a.createElement("section",null,n.a.createElement(d.c,null,n.a.createElement(d.a,{exact:!0,path:"/",component:N}),n.a.createElement(d.a,{exact:!0,path:"/items",component:y}),n.a.createElement(d.a,{exact:!0,path:"/items/:id",component:g}))))}}]),t}(c.Component));l.a.render(n.a.createElement(f.a,null," ",n.a.createElement(k,null)," "),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.57cd432d.chunk.js.map