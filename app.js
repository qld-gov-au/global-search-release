!function(){var e;let t=window,s=t.trustedTypes,l=s?s.createPolicy("lit-html",{createHTML:e=>e}):void 0,r="$lit$",i=`lit$${(Math.random()+"").slice(9)}$`,a="?"+i,n=`<${a}>`,o=document,c=()=>o.createComment(""),u=e=>null===e||"object"!=typeof e&&"function"!=typeof e,h=Array.isArray,d="[ 	\n\f\r]",g=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,p=/-->/g,m=/>/g,_=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),v=/'/g,$=/"/g,f=/^(?:script|style|textarea|title)$/i,y=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),q=y(1),A=(y(2),Symbol.for("lit-noChange")),b=Symbol.for("lit-nothing"),w=new WeakMap,k=o.createTreeWalker(o,129,null,!1);function S(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==l?l.createHTML(t):t}class x{static createElement(e,t){let s=o.createElement("template");return s.innerHTML=e,s}constructor({strings:e,_$litType$:t},l){let o;this.parts=[];let u=0,h=0;const d=e.length-1,y=this.parts,[q,A]=((e,t)=>{let s=e.length-1,l=[],a,o=2===t?"<svg>":"",c=g;for(let t=0;t<s;t++){let s=e[t],u,h,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,null!==(h=c.exec(s)));)y=c.lastIndex,c===g?"!--"===h[1]?c=p:void 0!==h[1]?c=m:void 0!==h[2]?(f.test(h[2])&&(a=RegExp("</"+h[2],"g")),c=_):void 0!==h[3]&&(c=_):c===_?">"===h[0]?(c=null!=a?a:g,d=-1):void 0===h[1]?d=-2:(d=c.lastIndex-h[2].length,u=h[1],c=void 0===h[3]?_:'"'===h[3]?$:v):c===$||c===v?c=_:c===p||c===m?c=g:(c=_,a=void 0);let q=c===_&&e[t+1].startsWith("/>")?" ":"";o+=c===g?s+n:d>=0?(l.push(u),s.slice(0,d)+r+s.slice(d)+i+q):s+i+(-2===d?(l.push(void 0),t):q)}return[S(e,o+(e[s]||"<?>")+(2===t?"</svg>":"")),l]})(e,t);if(this.el=x.createElement(q,l),k.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(o=k.nextNode())&&y.length<d;){if(1===o.nodeType){if(o.hasAttributes()){const e=[];for(const t of o.getAttributeNames())if(t.endsWith(r)||t.startsWith(i)){const s=A[h++];if(e.push(t),void 0!==s){const e=o.getAttribute(s.toLowerCase()+r).split(i),t=/([.?@])?(.*)/.exec(s);y.push({type:1,index:u,name:t[2],strings:e,ctor:"."===t[1]?B:"?"===t[1]?N:"@"===t[1]?M:C})}else y.push({type:6,index:u})}for(const t of e)o.removeAttribute(t)}if(f.test(o.tagName)){const e=o.textContent.split(i),t=e.length-1;if(t>0){o.textContent=s?s.emptyScript:"";for(let s=0;s<t;s++)o.append(e[s],c()),k.nextNode(),y.push({type:2,index:++u});o.append(e[t],c())}}}else if(8===o.nodeType)if(o.data===a)y.push({type:2,index:u});else{let e=-1;for(;-1!==(e=o.data.indexOf(i,e+1));)y.push({type:7,index:u}),e+=i.length-1}u++}}}function I(e,t,s=e,l){var r,i,a;if(t===A)return t;let n=void 0!==l?null==(r=s._$Co)?void 0:r[l]:s._$Cl,o=u(t)?void 0:t._$litDirective$;return(null==n?void 0:n.constructor)!==o&&(null==(i=null==n?void 0:n._$AO)||i.call(n,!1),void 0===o?n=void 0:(n=new o(e))._$AT(e,s,l),void 0!==l?(null!=(a=s._$Co)?a:s._$Co=[])[l]=n:s._$Cl=n),void 0!==n&&(t=I(e,n._$AS(e,t.values),n,l)),t}class P{get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:s},parts:l}=this._$AD,r=(null!=(t=null==e?void 0:e.creationScope)?t:o).importNode(s,!0);k.currentNode=r;let i=k.nextNode(),a=0,n=0,c=l[0];for(;void 0!==c;){if(a===c.index){let t;2===c.type?t=new E(i,i.nextSibling,this,e):1===c.type?t=new c.ctor(i,c.name,c.strings,this,e):6===c.type&&(t=new R(i,this,e)),this._$AV.push(t),c=l[++n]}a!==(null==c?void 0:c.index)&&(i=k.nextNode(),a++)}return k.currentNode=o,r}v(e){let t=0;for(let s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}}class E{get _$AU(){var e,t;return null!=(t=null==(e=this._$AM)?void 0:e._$AU)?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){let s;u(e=I(this,e,t))?e===b||null==e||""===e?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==A&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):h(s=e)||"function"==typeof(null==s?void 0:s[Symbol.iterator])?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==b&&u(this._$AH)?this._$AA.nextSibling.data=e:this.$(o.createTextNode(e)),this._$AH=e}g(e){var t;let{values:s,_$litType$:l}=e,r="number"==typeof l?this._$AC(e):(void 0===l.el&&(l.el=x.createElement(S(l.h,l.h[0]),this.options)),l);if((null==(t=this._$AH)?void 0:t._$AD)===r)this._$AH.v(s);else{let e=new P(r,this),t=e.u(this.options);e.v(s),this.$(t),this._$AH=e}}_$AC(e){let t=w.get(e.strings);return void 0===t&&w.set(e.strings,t=new x(e)),t}T(e){h(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,l=0;for(let r of e)l===t.length?t.push(s=new E(this.k(c()),this.k(c()),this,this.options)):s=t[l],s._$AI(r),l++;l<t.length&&(this._$AR(s&&s._$AB.nextSibling,l),t.length=l)}_$AR(e=this._$AA.nextSibling,t){var s;for(null==(s=this._$AP)||s.call(this,!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null==(t=this._$AP)||t.call(this,e))}constructor(e,t,s,l){var r;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=l,this._$Cp=null==(r=null==l?void 0:l.isConnected)||r}}class C{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,s,l){let r=this.strings,i=!1;if(void 0===r)(i=!u(e=I(this,e,t,0))||e!==this._$AH&&e!==A)&&(this._$AH=e);else{let l,a,n=e;for(e=r[0],l=0;l<r.length-1;l++)(a=I(this,n[s+l],t,l))===A&&(a=this._$AH[l]),i||(i=!u(a)||a!==this._$AH[l]),a===b?e=b:e!==b&&(e+=(null!=a?a:"")+r[l+1]),this._$AH[l]=a}i&&!l&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}constructor(e,t,s,l,r){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=l,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=b}}class B extends C{j(e){this.element[this.name]=e===b?void 0:e}constructor(){super(...arguments),this.type=3}}let H=s?s.emptyScript:"";class N extends C{j(e){e&&e!==b?this.element.setAttribute(this.name,H):this.element.removeAttribute(this.name)}constructor(){super(...arguments),this.type=4}}class M extends C{_$AI(e,t=this){var s;if((e=null!=(s=I(this,e,t,0))?s:b)===A)return;let l=this._$AH,r=e===b&&l!==b||e.capture!==l.capture||e.once!==l.once||e.passive!==l.passive,i=e!==b&&(l===b||r);r&&this.element.removeEventListener(this.name,this,l),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;"function"==typeof this._$AH?this._$AH.call(null!=(s=null==(t=this.options)?void 0:t.host)?s:this.element,e):this._$AH.handleEvent(e)}constructor(e,t,s,l,r){super(e,t,s,l,r),this.type=5}}class R{get _$AU(){return this._$AM._$AU}_$AI(e){I(this,e)}constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}}let T=t.litHtmlPolyfillSupport;null==T||T(x,E),(null!=(e=t.litHtmlVersions)?e:t.litHtmlVersions=[]).push("2.8.0");let L=(e,t,s)=>{var l,r;let i=null!=(l=null==s?void 0:s.renderBefore)?l:t,a=i._$litPart$;if(void 0===a){let e=null!=(r=null==s?void 0:s.renderBefore)?r:null;i._$litPart$=a=new E(t.insertBefore(c(),e),e,void 0,null!=s?s:{})}return a._$AI(e),a},U="https://discover.search.qld.gov.au/s/search.json",D="https://discover.search.qld.gov.au",j="qgov~sp-search",W=e=>e,F,V,z=()=>{let e=new URLSearchParams(new URL(window.location.href).search),t=e=>null==e?void 0:e.replace(/[\\#+()$~%*?<>{}]/g,"");return{query:t((e.get("query")||"").replace(/\%2F/g,"/")),profile:t(e.get("profile")||""),label:t(e.get("label")||""),filter:t(e.get("filter")||""),startRank:parseInt(e.get("start_rank"))||1,collection:(e.get("collection")||"").replace(/\%7E/g,"~"),scope:t(e.get("scope")||""),activePage:parseInt(e.get("page"))||1}},O=async e=>{let t=await fetch(`${U+"?"+e}`);return await t.json()},Z=e=>e,Q,G,Y,J,K=e=>e,X,ee,et,es,el=e=>e,er;function ei(e,t){let{resultPacket:s,curator:l}=e,{exhibits:r}=l;return q(er||(er=el`
        ${0}
        ${0}
        ${0}
    `),r.length>0?q(V||(V=W`<h2 class="search-results-summary">Featured results</h2>
    ${0}
  `),r.map((e,t)=>q(F||(F=W`
                    <article class="qg-card qg-card__light-theme qg-card__clickable">
                        <div class="content">
                            <div class="details">
                                <h2 class="qg-card__title">
                                    <a href="${0}${0}" class="stretched-link">${0}</a>
                                </h2>
                                <div class="qg-search-results__results-list">
                                    <p class="description">${0}</p>
                                    <p class="qg-search-results__url">${0}</p>
                                </div>
                            </div>
                        </div>
                    </article>`),D,e.linkUrl,e.titleHtml,e.descriptionHtml,e.displayUrl))):"",function(e){let t,s,l,{currStart:r,currEnd:i,totalMatching:a}=null==e?void 0:e.resultsSummary,n=null==e?void 0:e.query;return q(es||(es=K`<div id="qg-search-results">
        <h2 class="qg-search-results__summary">Search results for '${0}'</h2>
        <span class="qg-search-results__results-count">Showing results ${0} - ${0} of <span class="qg-search-results__results-total">${0}</span></span>
        <ul class="qg-search-results__results-list">
            ${0}
        </ul>
    </div>
  `),n,r,i,(s=(t=a.toString().split("."))[0],l=t[1],s.replace(/\B(?=(\d{3})+(?!\d))/g,",")+(l?"."+l:"")),e.results.map(e=>{let t,s,l;return q(et||(et=K`
                <li class="qg-search-results__results-list-item">
                    <h3>
                        <a href="${0}${0}">${0}</a>
                    </h3>
                    <ul class="qg-search-results__results-list">
                        <li class="description">${0}</li>
                        <li class="meta">
                            <span class="qg-search-results__url">${0}</span>
                            ${0}
                            ${0}
                        </li>
                    </ul>
                </li>`),D,e.clickTrackingUrl,e.title.replace("| Queensland Government",""),Array.isArray(e.listMetadata.c)?e.listMetadata.c[0]:"",e.indexUrl,e.fileSize?q(X||(X=K`<span>&nbsp;-&nbsp;${0}</span>`),Math.floor(e.fileSize/1024)+"k"):"",e.date?q(ee||(ee=K`<span>&nbsp;-&nbsp;${0}</span>`),(s=(t=new Date(e.date)).toLocaleString("en-AU",{month:"long"}),l=t.getFullYear(),t.getDate()+" "+s+" "+l)):"")}))}(s),function(e){let t,{resultPacket:s}=e,{totalMatching:l}=s.resultsSummary,r=z(),i=Math.ceil(l/10),a=Math.floor(parseInt(String(r.startRank/10))/10),n=`?query=${r.query}&collection=${r.collection}&profile=${r.profile}&second_profile=&scope=${r.scope}&label=`,o=e=>{var s,l;e.preventDefault(),clearTimeout(t),null==(s=document.querySelector(".qg-site-search__component"))||s.scrollIntoView({behavior:"smooth"}),(null==(l=e.target)?void 0:l.href)&&(t=setTimeout(()=>{var t,s;history.pushState({},"",e.target.href),O(null==(s=e.target)||null==(t=s.href)?void 0:t.split("?")[1]).then(e=>{L(ei(null==e?void 0:e.response,r),document.getElementById("qg-search-results__container"))})}))};if(i>1){var c;let e;return q(J||(J=Z`
  <div class="pagination-container">
        <ul class="pagination">
            <li class="page-item">
                ${0}
            </li>
            ${0}
            <li class="page-item">
                ${0}
            </li>
            
        </ul>
    </div>
  `),r.startRank>1?q(Q||(Q=Z`<a class="page-link"  @click="${0}" href="${0}&page=${0}&start_rank=${0}"><span aria-hidden="true">«</span> Previous</a>`),o,n,r.activePage-1,r.startRank-10):"",(c=10*a+1,Array((i>(e=10*a+10)?e:Math.ceil(i))-c+1).fill(c).map((e,t)=>c+t)).map(e=>{let t=n+`&page=${e}&start_rank=${10*(e-1)+1}`,s=r.activePage===e?"active":"";return q(G||(G=Z`<li class="page-item ${0}"><a class="page-link" @click="${0}"  href=${0}>${0}</a></li>`),s,o,t,e)}),i>r.activePage?q(Y||(Y=Z`<a class="page-link" @click="${0}" href="${0}&page=${0}&start_rank=${0}">Next<span aria-hidden="true">&nbsp;»</span></a>`),o,n,r.activePage+1,r.startRank+10):"")}}(e))}let ea=e=>e,en,eo;class ec{setSessionStorage(){let e=this.urlParameter.profile,t=this.urlParameter.scope,s=this.urlParameter.label;e&&("qld"!==e||t)&&(sessionStorage.setItem("fcProfile",e),sessionStorage.setItem("fcScope",t)),s&&sessionStorage.setItem("fcLabel",s)}filterResultsTemplate(){let e,t,s,l,r,i,a,n=this.urlParameter.profile;(this.urlParameter.filter||n&&"qld"!==n||this.urlParameter.scope)&&L((e="",t=z(),s=sessionStorage.getItem("fcLabel"),l=sessionStorage.getItem("fcProfile"),r=sessionStorage.getItem("fcScope"),i=e=>e.charAt(0).toUpperCase()+e.slice(1),a=e=>{let t=e.target.value;switch(t){case"qld":case"custom":sessionStorage.setItem("rcSelectedRadiobutton",t)}},s?e=i(s):r?e=q(en||(en=ea`Results from<strong>&nbsp;${0}</strong>`),r):l&&(e=i(l)),window.addEventListener("load",e=>{let t=document.querySelector(".qg-btn__filter");null==t||t.addEventListener("click",e=>{}),null==t||t.dispatchEvent(new Event("click"))}),q(eo||(eo=ea`<div class="qg-filter-by-results">
              <p class="qg-filter-by-results__title">Filter results by</p>
              <form class="form qg-forms-v2 qg-filter-by-results__form">
              <ol class="questions pt-2">
                <li>
                  <fieldset>
                    <legend>
                      <span class="label">Content type</span>
                    </legend>
                    <ol class="choices qg-forms-v2__radio">
                      <li>
                        <input checked name="filterBy" id="customOption" type="radio" value="custom"
                               data-scope="${0}" 
                               data-profile="${0}"
                               data-label="${0}" @click="${0}" />
                        <label for="customOption">${0}</label>
                      </li>
                      <li>
                        <input name="filterBy" id="qld" type="radio" value="qld" data-profile='qld' data-scope='' @click="${0}" ?checked=${0}/>
                        <label for="qld">all Queensland Government</label>
                      </li>
                    </ol>
                  </fieldset>
                </li>
              </ol>
            </form>
            <button type="button" class="qg-btn qg-btn__filter btn-primary mb-2" @click="${0}">Apply filters</button>
           </div>`),r,l,s,a,e,a,"qld"===sessionStorage.getItem("rcSelectedRadiobutton"),e=>{e.preventDefault();let s=new URLSearchParams(location.search),l=document.querySelector('input[name="filterBy"]:checked');s.set("scope",(null==l?void 0:l.getAttribute("data-scope"))||""),s.set("profile",(null==l?void 0:l.getAttribute("data-profile"))||""),s.set("page","1"),s.set("start_rank","1"),history.pushState({},"",`?${s.toString()}`),O(s.toString()).then(e=>{L(ei(null==e?void 0:e.response,t),document.getElementById("qg-search-results__container"))})})),document.getElementById("qg-filter-by-results"))}constructor(){this.urlParameter=z(),this.setSessionStorage(),this.filterResultsTemplate()}}let eu=e=>e,eh;function ed(e){return q(eh||(eh=eu`
        <div class="alert alert-warning" role="alert">
            <h2><i class="fa fa-exclamation-triangle"></i>${0}</h2>
        </div>`),e)}let eg=e=>e,ep,em;function e_(e){let t=e=>{e.preventDefault();let t=e.target.href,s=e.target.textContent,l=z();document.querySelector(".qg-site-search__component .qg-search-site__input").value=s,history.pushState({},"",`${t}`),O(t).then(e=>{var t,s,r,i,a;let n=null==e||null==(s=e.response)||null==(t=s.resultPacket)?void 0:t.contextualNavigation;(null==e||null==(a=e.response)||null==(i=a.resultPacket)||null==(r=i.resultsSummary)?void 0:r.totalMatching)>0?(L(ei(null==e?void 0:e.response,l),document.getElementById("qg-search-results__container")),L(e_(n),document.getElementById("related-search__tags"))):(L(ed("No results found"),document.getElementById("qg-search-results__container")),L("",document.getElementById("related-search__tags")))})};if(e){let{categories:r}=e;for(let e=0;e<r.length;e++){var s,l;if((null==(s=r[e])?void 0:s.name)==="topic")return q(em||(em=eg` <section class="related-search__tags">
            ${0}
        </section>`),null==(l=r[e])?void 0:l.clusters.map(e=>q(ep||(ep=eg`<a @click="${0}" href="${0}&start_rank=1" class="qg-btn btn-outline-dark m-1">${0}</a>`),e=>t(e),e.href,e.query)))}}}let ev=e=>e,e$;class ef{async fetchData(){var e;null==(e=this.spinnerEl)||e.removeAttribute("hidden");let t=await fetch(`${U}?query=${this.urlParameter.query}&collection=${this.urlParameter.collection}&profile=${this.urlParameter.profile}&scope=${this.urlParameter.scope}&start_rank=${this.urlParameter.startRank}`);return await t.json()}renderSearchForm(){let e,t,s,l;L((e=z(),t=e=>{if(e.preventDefault(),document.querySelector(".qg-site-search__component .qg-search-site__input").value){let e=new URLSearchParams(location.search),t=z();e.set("scope",t.scope),e.set("profile",t.profile),e.set("page","1"),e.set("start_rank","1"),e.set("collection",`${j}`),setTimeout(function(){let s=document.querySelector(".qg-site-search__component .qg-search-site__input").value;e.set("query",s),history.pushState({},"",`?${e.toString()}`),O(e.toString()).then(e=>{var s,l,r,i,a;let n=null==e||null==(l=e.response)||null==(s=l.resultPacket)?void 0:s.contextualNavigation;(null==e||null==(a=e.response)||null==(i=a.resultPacket)||null==(r=i.resultsSummary)?void 0:r.totalMatching)>0?(L(ei(null==e?void 0:e.response,t),document.getElementById("qg-search-results__container")),L(e_(n),document.getElementById("related-search__tags"))):(L(ed("No results found"),document.getElementById("qg-search-results__container")),L("",document.getElementById("related-search__tags")))})})}else L("",document.getElementById("qg-search-results__container")),L("",document.getElementById("related-search__tags"))},s=e=>{let t=document.querySelector(".qg-site-search__component .qg-search-concierge-help");null!=t&&(t.hidden=e)},l=e=>{"keydown"===e.type&&("Enter"===e.key?s(!0):s(!1))},q(e$||(e$=ev`
        <form action="#" role="search" class="qg-site-search__form qg-site-search__component qg-search-form qg-site-search__multiple-forms" data-suggestions="${0}/s/suggest.json?collection=${0}&fmt=json%2B%2B&alpha=0.5&profile=qld" data-results-url="${0}/s/search.json?collection=${0}&profile=qld&smeta_sfinder_sand=yes">
                    <div class="input-group">
                        <label for="qg-search-query-sm" class="qg-visually-hidden">Search Queensland Government</label>
                        <input type="text" name="query" id="qg-search-query-sm"  class="form-control qg-search-site__input" autocomplete="off" placeholder="Search website" tabindex="0" aria-required="true" aria-expanded="false" value="${0}" @keydown="${0}" @click="${0}"/>
                        <svg class="qg-search__icon d-none d-md-block d-lg-block" width="512px" height="512px" viewBox="0 0 512 512">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g transform="translate(67.298684, 71.201316)">
                                    <path d="M108.7791,227.405285 L11.3079182,324.876467 C5.45005384,330.734332 5.45005384,340.231806 11.3079182,346.089671 L27.4103294,362.192082 C33.2681938,368.049946 42.7656685,368.049946 48.6235328,362.192082 L146.094715,264.7209 C151.952579,258.863035 151.952579,249.365561 146.094715,243.507696 L129.992304,227.405285 C124.134439,221.547421 114.636965,221.547421 108.7791,227.405285 Z"></path>
                                    <path d="M221.701316,0.798683501 C305.096314,0.798683501 372.701316,68.6275439 372.701316,152.298684 C372.701316,235.969823 305.096314,303.798684 221.701316,303.798684 C138.306319,303.798684 70.7013165,235.969823 70.7013165,152.298684 C70.7013165,68.6275439 138.306319,0.798683501 221.701316,0.798683501 Z M221.310125,54.0389936 C167.081772,54.0389936 123.121006,98.2066236 123.121006,152.690156 C123.121006,207.173689 167.081772,251.341319 221.310125,251.341319 C275.538478,251.341319 319.499244,207.173689 319.499244,152.690156 C319.499244,98.2066236 275.538478,54.0389936 221.310125,54.0389936 Z" fill-rule="nonzero" transform="translate(221.701316, 152.298684) scale(-1, 1) translate(-221.701316, -152.298684) "></path>
                                </g>
                            </g>
                        </svg>
                        <button class="qg-search-close-concierge hide" type="button" aria-label="Close Search Concierge">
                            <svg width="512px" height="512px" viewBox="0 0 512 512">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect transform="translate(256.500000, 256.000000) scale(1, -1) rotate(45.000000) translate(-256.500000, -256.000000) " x="32" y="220" width="449" height="72" rx="15"></rect>
                                    <rect transform="translate(256.500000, 256.000000) rotate(45.000000) translate(-256.500000, -256.000000) " x="32" y="220" width="449" height="72" rx="15"></rect>
                                </g>
                            </svg>
                        </button>
                        <button type="submit" id="qg-site-search__submit" @click="${0}" class="asif btn btn-global-primary" title="Search site" data-analytics-link-group="qg-search-page-submit">
                            <span class="d-none d-md-block d-lg-block">Search</span>
                            <i class="fa fa-search fa-rotate-90 d-md-none d-lg-none"></i>
                        </button>
                        <div class="qg-search-concierge qg-search-concierge-initial">
                            <div class="qg-search-concierge-group helper">
                                <div class="qg-search-concierge-content">
                                    <h4>Popular services</h4>
                                    <ul class="list-group">
                                        <li class="list-group-item"><a href="https://www.service.transport.qld.gov.au/renewregistration/public/Welcome.xhtml" tabindex="-1" data-analytics-link-group="qg-global-search-popular-services">Renew vehicle or boat rego</a></li>
                                        <li class="list-group-item"><a href="https://www.service.transport.qld.gov.au/checkmydemeritpoints/public/Welcome.xhtml" tabindex="-1" data-analytics-link-group="qg-global-search-popular-services">Check my licence demerit points</a></li>
                                        <li class="list-group-item"><a href="https://www.qld.gov.au/transport/licensing/driver-licensing/renew-replace/renew/online" tabindex="-1" data-analytics-link-group="qg-global-search-popular-services">Renew my driving licence</a></li>
                                        <li class="list-group-item"><a href="https://www.change-of-address.services.qld.gov.au/" tabindex="-1" data-analytics-link-group="qg-global-search-popular-services">Change my address</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="qg-search-concierge-group helper">
                                <div class="qg-search-concierge-content">
                                    <h4>Browse by category</h4>
                                    <ul class="list-group">
                                        <li class="list-group-item"><a href="https://www.qld.gov.au/transport" tabindex="-1">Transport and motoring</a></li>
                                        <li class="list-group-item"><a href="https://www.qld.gov.au/jobs" tabindex="-1">Employment and jobs</a></li>
                                        <li class="list-group-item"><a href="https://www.qld.gov.au/education" tabindex="-1">Education and training</a></li>
                                        <li class="list-group-item"><a href="https://www.qld.gov.au/about" tabindex="-1">Queensland and its government</a></li>
                                    </ul>
                                    <a href="https://www.qld.gov.au/queenslanders" tabindex="-1" class="all" data-analytics-link-group="qg-global-search-category">Browse all categories</a>
                                </div>
                            </div>
                        </div>


                        <div class="qg-search-concierge qg-search-concierge-help">
                            <div class="qg-search-concierge-group suggestions" @click="${0}"></div>
                            <div class="qg-search-concierge-group highlight"></div>
                            <div class="qg-search-concierge-group helper"></div>
                        </div>
                    </div>
                    <!--parameters to display results on search page-->
                </form>
        <p class="mt-3">Enter your query in the box above to search.</p>`),D,j,D,j,e.query,l,l,t,t)),document.getElementById("qg-search-form"))}processData(){this.fetchData().then(e=>{var t,s,l,r,i,a;let n=null==e||null==(s=e.response)||null==(t=s.resultPacket)?void 0:t.contextualNavigation;(null==e||null==(i=e.response)||null==(r=i.resultPacket)||null==(l=r.resultsSummary)?void 0:l.totalMatching)>0?(null==(a=this.spinnerEl)||a.setAttribute("hidden",""),L(ei(null==e?void 0:e.response,this.urlParameter),document.getElementById("qg-search-results__container")),n&&L(e_(n),document.getElementById("related-search__tags"))):(document.querySelector(".qg-search-results__spinner").remove(),L(ed("No results found"),document.getElementById("qg-search-results__container")))})}constructor(){this.urlParameter=z(),this.spinnerEl=document.querySelector(".qg-search-results__spinner"),this.siteInput=document.querySelector(".qg-site-search__component .qg-search-site__input"),this.renderSearchForm();const e=this.urlParameter.query;e&&(this.processData(),this.siteInput&&(this.siteInput.value=e))}}class ey{static init(){new ec,new ef}}window.onpopstate=function(e){ey.init()},ey.init()}();
//# sourceMappingURL=app.js.map
