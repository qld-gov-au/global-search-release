(()=>{
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var e;const t=globalThis.trustedTypes,s=t?t.createPolicy("lit-html",{createHTML:e=>e}):void 0,r=`lit$${(Math.random()+"").slice(9)}$`,i="?"+r,l=`<${i}>`,n=document,a=(e="")=>n.createComment(e),o=e=>null===e||"object"!=typeof e&&"function"!=typeof e,c=Array.isArray,u=e=>{var t;return c(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])},h=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,d=/-->/g,g=/>/g,p=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,m=/'/g,v=/"/g,_=/^(?:script|style|textarea|title)$/i,f=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),$=f(1),y=(f(2),Symbol.for("lit-noChange")),q=Symbol.for("lit-nothing"),A=new WeakMap,b=(e,t,s)=>{var r,i;const l=null!==(r=null==s?void 0:s.renderBefore)&&void 0!==r?r:t;let n=l._$litPart$;if(void 0===n){const e=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:null;l._$litPart$=n=new C(t.insertBefore(a(),e),e,void 0,null!=s?s:{})}return n._$AI(e),n},w=n.createTreeWalker(n,129,null,!1),k=(e,t)=>{const i=e.length-1,n=[];let a,o=2===t?"<svg>":"",c=h;for(let t=0;t<i;t++){const s=e[t];let i,u,f=-1,$=0;for(;$<s.length&&(c.lastIndex=$,u=c.exec(s),null!==u);)$=c.lastIndex,c===h?"!--"===u[1]?c=d:void 0!==u[1]?c=g:void 0!==u[2]?(_.test(u[2])&&(a=RegExp("</"+u[2],"g")),c=p):void 0!==u[3]&&(c=p):c===p?">"===u[0]?(c=null!=a?a:h,f=-1):void 0===u[1]?f=-2:(f=c.lastIndex-u[2].length,i=u[1],c=void 0===u[3]?p:'"'===u[3]?v:m):c===v||c===m?c=p:c===d||c===g?c=h:(c=p,a=void 0);const y=c===p&&e[t+1].startsWith("/>")?" ":"";o+=c===h?s+l:f>=0?(n.push(i),s.slice(0,f)+"$lit$"+s.slice(f)+r+y):s+r+(-2===f?(n.push(void 0),t):y)}const u=o+(e[i]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==s?s.createHTML(u):u,n]};class S{static createElement(e,t){const s=n.createElement("template");return s.innerHTML=e,s}constructor({strings:e,_$litType$:s},l){let n;this.parts=[];let o=0,c=0;const u=e.length-1,h=this.parts,[d,g]=k(e,s);if(this.el=S.createElement(d,l),w.currentNode=this.el.content,2===s){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=w.nextNode())&&h.length<u;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(r)){const s=g[c++];if(e.push(t),void 0!==s){const e=n.getAttribute(s.toLowerCase()+"$lit$").split(r),t=/([.?@])?(.*)/.exec(s);h.push({type:1,index:o,name:t[2],strings:e,ctor:"."===t[1]?E:"?"===t[1]?H:"@"===t[1]?N:P})}else h.push({type:6,index:o})}for(const t of e)n.removeAttribute(t)}if(_.test(n.tagName)){const e=n.textContent.split(r),s=e.length-1;if(s>0){n.textContent=t?t.emptyScript:"";for(let t=0;t<s;t++)n.append(e[t],a()),w.nextNode(),h.push({type:2,index:++o});n.append(e[s],a())}}}else if(8===n.nodeType)if(n.data===i)h.push({type:2,index:o});else{let e=-1;for(;-1!==(e=n.data.indexOf(r,e+1));)h.push({type:7,index:o}),e+=r.length-1}o++}}}function x(e,t,s=e,r){var i,l,n,a;if(t===y)return t;let c=void 0!==r?null===(i=s._$Cl)||void 0===i?void 0:i[r]:s._$Cu;const u=o(t)?void 0:t._$litDirective$;return(null==c?void 0:c.constructor)!==u&&(null===(l=null==c?void 0:c._$AO)||void 0===l||l.call(c,!1),void 0===u?c=void 0:(c=new u(e),c._$AT(e,s,r)),void 0!==r?(null!==(n=(a=s)._$Cl)&&void 0!==n?n:a._$Cl=[])[r]=c:s._$Cu=c),void 0!==c&&(t=x(e,c._$AS(e,t.values),c,r)),t}class I{get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:s},parts:r}=this._$AD,i=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:n).importNode(s,!0);w.currentNode=i;let l=w.nextNode(),a=0,o=0,c=r[0];for(;void 0!==c;){if(a===c.index){let t;2===c.type?t=new C(l,l.nextSibling,this,e):1===c.type?t=new c.ctor(l,c.name,c.strings,this,e):6===c.type&&(t=new M(l,this,e)),this.v.push(t),c=r[++o]}a!==(null==c?void 0:c.index)&&(l=w.nextNode(),a++)}return i}m(e){let t=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}}class C{get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=x(this,e,t),o(e)?e===q||null==e||""===e?(this._$AH!==q&&this._$AR(),this._$AH=q):e!==this._$AH&&e!==y&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.k(e):u(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==q&&o(this._$AH)?this._$AA.nextSibling.data=e:this.k(n.createTextNode(e)),this._$AH=e}T(e){var t;const{values:s,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=S.createElement(r.h,this.options)),r);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===i)this._$AH.m(s);else{const e=new I(i,this),t=e.p(this.options);e.m(s),this.k(t),this._$AH=e}}_$AC(e){let t=A.get(e.strings);return void 0===t&&A.set(e.strings,t=new S(e)),t}S(e){c(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,r=0;for(const i of e)r===t.length?t.push(s=new C(this.M(a()),this.M(a()),this,this.options)):s=t[r],s._$AI(i),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}constructor(e,t,s,r){var i;this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cg=null===(i=null==r?void 0:r.isConnected)||void 0===i||i}}class P{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,s,r){const i=this.strings;let l=!1;if(void 0===i)e=x(this,e,t,0),l=!o(e)||e!==this._$AH&&e!==y,l&&(this._$AH=e);else{const r=e;let n,a;for(e=i[0],n=0;n<i.length-1;n++)a=x(this,r[s+n],t,n),a===y&&(a=this._$AH[n]),l||(l=!o(a)||a!==this._$AH[n]),a===q?e=q:e!==q&&(e+=(null!=a?a:"")+i[n+1]),this._$AH[n]=a}l&&!r&&this.C(e)}C(e){e===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}constructor(e,t,s,r,i){this.type=1,this._$AH=q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=q}}class E extends P{C(e){this.element[this.name]=e===q?void 0:e}constructor(){super(...arguments),this.type=3}}const B=t?t.emptyScript:"";class H extends P{C(e){e&&e!==q?this.element.setAttribute(this.name,B):this.element.removeAttribute(this.name)}constructor(){super(...arguments),this.type=4}}class N extends P{_$AI(e,t=this){var s;if((e=null!==(s=x(this,e,t,0))&&void 0!==s?s:q)===y)return;const r=this._$AH,i=e===q&&r!==q||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,l=e!==q&&(r===q||i);i&&this.element.removeEventListener(this.name,this,r),l&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==s?s:this.element,e):this._$AH.handleEvent(e)}constructor(e,t,s,r,i){super(e,t,s,r,i),this.type=5}}class M{get _$AU(){return this._$AM._$AU}_$AI(e){x(this,e)}constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}}const R=window.litHtmlPolyfillSupport;null==R||R(S,C),(null!==(e=globalThis.litHtmlVersions)&&void 0!==e?e:globalThis.litHtmlVersions=[]).push("2.2.6");let T,L,U=e=>e;function D(e){return $(L||(L=U`<h2 class="search-results-summary">Featured results</h2>
    ${0}
  `),e.map(((e,t)=>$(T||(T=U`
                    <article class="qg-card qg-card__light-theme qg-card__clickable">
                        <div class="content">
                            <div class="details">
                                <h2 class="qg-card__title"><a href="https://find.search.qld.gov.au${0}" class="stretched-link">${0}</a></h2>
                                <p>${0}</p>
                            </div>
                        </div>
                    </article>`),e.linkUrl,e.titleHtml,e.descriptionHtml))))}const j=()=>{const e=new URL(window.location.href),t=new URLSearchParams(e.search),s=e=>null==e?void 0:e.replace(/[/\\#+()$~%*?<>{}]/g,"");return{query:s(t.get("query"))||"",profile:s(t.get("profile"))||"",label:s(t.get("label"))||"",filter:s(t.get("filter"))||"",numRanks:parseInt(t.get("num_ranks"))||0,startRank:parseInt(t.get("start_rank"))||1,collection:s(t.get("collection"))||"",scope:s(t.get("scope"))||"",activePage:parseInt(t.get("page"))||1}},W="https://find.search.qld.gov.au/s/search.json",z=async e=>{const t=await fetch(""+(W+"?"+e));return await t.json()};let F,O,Z,Q,G=e=>e;function V(e,t){let s;const{resultPacket:r}=e,{totalMatching:i}=r.resultsSummary,l=j(),n=Math.ceil(i/10),a=Math.floor(parseInt(String(l.startRank/10))/10),o=`?query=${l.query}&num_ranks=${l.numRanks||10}&tiers=10&collection=${l.collection}&profile=${l.profile}&second_profile=&scope=${l.scope}&label=`,c=e=>{var t,r;e.preventDefault(),clearTimeout(s),null===(t=document.querySelector(".qg-site-search__component"))||void 0===t||t.scrollIntoView({behavior:"smooth"}),(null===(r=e.target)||void 0===r?void 0:r.href)&&(s=setTimeout((()=>{var t,s;history.pushState({},"",e.target.href),z(null===(t=e.target)||void 0===t||null===(s=t.href)||void 0===s?void 0:s.split("?")[1]).then((e=>{b(ie(null==e?void 0:e.response,l),document.getElementById("qg-search-results__container"))}))})))};if(n>1)return $(Q||(Q=G`
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
  `),l.startRank>1?$(F||(F=G`<a class="page-link"  @click="${0}" href="${0}&page=${0}&start_rank=${0}"><span aria-hidden="true">«</span> Previous</a>`),c,o,l.activePage-1,l.startRank-10):"",(u=10*a+1,h=function(){const e=10*a+10;return n>e?e:Math.ceil(n)}(),Array(h-u+1).fill(u).map(((e,t)=>u+t))).map((e=>{const t=o+`&page=${e}&start_rank=${(l.numRanks||10)*(e-1)+1}`,s=l.activePage===e?"active":"";return $(O||(O=G`<li class="page-item ${0}"><a class="page-link" @click="${0}"  href=${0}>${0}</a></li>`),s,c,t,e)})),n>l.activePage?$(Z||(Z=G`<a class="page-link" @click="${0}" href="${0}&page=${0}&start_rank=${0}">Next<span aria-hidden="true">&nbsp;»</span></a>`),c,o,l.activePage+1,l.startRank+10):"");var u,h}const Y=e=>{const t=e.toString().split("."),s=t[0],r=t[1];return s.replace(/\B(?=(\d{3})+(?!\d))/g,",")+(r?"."+r:"")},J=e=>{const t=new Date(e),s=t.toLocaleString("en-AU",{month:"long"}),r=t.getFullYear();return t.getDate()+" "+s+" "+r};let K,X,ee=e=>e;function te(e){const{currStart:t,currEnd:s,totalMatching:r}=null==e?void 0:e.resultsSummary,i=null==e?void 0:e.query;return $(X||(X=ee`<div id="qg-search-results">
        <h2 class="qg-search-results__summary">Search results for '${0}'</h2>
        <span class="qg-search-results__results-count">Showing results ${0} - ${0} of <span class="qg-search-results__results-total">${0}</span></span>
        <ul class="qg-search-results__results-list">
            ${0}
        </ul>
    </div>
  `),i,t,s,Y(r),e.results.map((e=>{return $(K||(K=ee`
                <li class="qg-search-results__results-list-item">
                    <h3>
                        <a href="https://find.search.qld.gov.au${0}">${0}</a>
                    </h3>
                    <ul class="qg-search-results__results-list">
                        <li class="description"> ${0}</li>
                        <li class="meta"><span class="qg-search-results__url">${0}</span> - <span
                                class="file-size">${0}</span> - <span
                                class="date-updated">${0}</span></li>
                    </ul>
                </li>`),e.clickTrackingUrl,e.title.replace("| Queensland Government",""),e.metaData.C,e.indexUrl,(t=e.fileSize,Math.floor(t/1024)+"k"),J(e.date));var t})))}let se,re=e=>e;function ie(e,t){const{resultPacket:s,curator:r}=e,{exhibits:i}=r;return $(se||(se=re`
        ${0}
        ${0}
        ${0}
    `),i.length>0?D(i):"",te(s),V(e))}let le,ne,ae=e=>e;function oe(){let e="";j();const t=sessionStorage.getItem("fcLabel"),s=sessionStorage.getItem("fcProfile"),r=sessionStorage.getItem("fcScope"),i=e=>e.charAt(0).toUpperCase()+e.slice(1),l=e=>{const t=e.target.value;switch(t){case"qld":case"custom":sessionStorage.setItem("rcSelectedRadiobutton",t)}};return t?e=i(t):r?e=$(le||(le=ae`Results from <strong>${0}</strong>`),r):s&&(e=i(s)),window.addEventListener("load",(e=>{const t=document.querySelector(".qg-btn__filter");null==t||t.addEventListener("click",(e=>{})),null==t||t.dispatchEvent(new Event("click"))})),$(ne||(ne=ae`<div class="qg-filter-by-results">
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
           </div>`),r,s,t,l,e,l,"qld"===sessionStorage.getItem("rcSelectedRadiobutton"),(e=>{e.preventDefault();const t=new URLSearchParams(location.search),s=document.querySelector('input[name="filterBy"]:checked');t.set("scope",(null==s?void 0:s.getAttribute("data-scope"))||""),t.set("profile",(null==s?void 0:s.getAttribute("data-profile"))||""),t.set("page","1"),t.set("start_rank","1"),history.pushState({},"",`?${t.toString()}`),z(t.toString()).then((e=>{b(ie(null==e?void 0:e.response),document.getElementById("qg-search-results__container"))}))}))}class ce{setSessionStorage(){const e=this.urlParameter.profile,t=this.urlParameter.scope,s=this.urlParameter.label;e&&("qld"!==e||t)&&(sessionStorage.setItem("fcProfile",e),sessionStorage.setItem("fcScope",t)),s&&sessionStorage.setItem("fcLabel",s)}filterResultsTemplate(){const e=this.urlParameter.profile;(this.urlParameter.filter||e&&"qld"!==e||this.urlParameter.scope)&&b(oe(),document.getElementById("qg-filter-by-results"))}constructor(){this.urlParameter=j(),this.setSessionStorage(),this.filterResultsTemplate()}}let ue,he=e=>e;function de(e){return $(ue||(ue=he`
        <div class="alert alert-warning" role="alert">
            <h2><i class="fa fa-exclamation-triangle"></i>${0}</h2>
        </div>`),e)}let ge,pe,me=e=>e;function ve(e){if(e){var t,s;const{categories:r}=e;if("topic"===(null===(t=r[0])||void 0===t?void 0:t.name))return $(pe||(pe=me` <p class="related-search__title">Related search</p>
        <section class="related-search__tags test">
            ${0}
        </section>`),null===(s=r[0])||void 0===s?void 0:s.clusters.map((e=>$(ge||(ge=me`<a @click="${0}" href="${0}&start_rank=1" class="qg-btn btn-outline-dark m-1">${0}</a>`),(e=>(e=>{e.preventDefault();const t=e.target.href,s=e.target.textContent;j(),document.querySelector(".qg-site-search__component .qg-search-site__input").value=s,history.pushState({},"",`${t}`),z(t).then((e=>{var t;const{contextualNavigation:s,results:r}=null==e||null===(t=e.response)||void 0===t?void 0:t.resultPacket;(null==r?void 0:r.length)?(b(ie(null==e?void 0:e.response),document.getElementById("qg-search-results__container")),b(ve(s),document.getElementById("related-search__tags"))):(b(de("No results found"),document.getElementById("qg-search-results__container")),b("",document.getElementById("related-search__tags")))}))})(e)),e.href,e.query))))}}let _e,fe=e=>e;function $e(){const e=j(),t=e=>{e.preventDefault();if(document.querySelector(".qg-site-search__component .qg-search-site__input").value){const e=new URLSearchParams(location.search),t=j();e.set("scope",t.scope),e.set("profile",t.profile),e.set("page","1"),e.set("start_rank","1"),e.set("num_ranks","10"),e.set("tiers","off"),e.set("collection","qld-gov"),setTimeout((function(){const t=document.querySelector(".qg-site-search__component .qg-search-site__input").value;e.set("query",t),history.pushState({},"",`?${e.toString()}`),z(e.toString()).then((e=>{var t;const{contextualNavigation:s,results:r}=null==e||null===(t=e.response)||void 0===t?void 0:t.resultPacket;(null==r?void 0:r.length)?(b(ie(null==e?void 0:e.response),document.getElementById("qg-search-results__container")),b(ve(s),document.getElementById("related-search__tags"))):(b(de("No results found"),document.getElementById("qg-search-results__container")),b("",document.getElementById("related-search__tags")))}))}))}else b("",document.getElementById("qg-search-results__container")),b("",document.getElementById("related-search__tags"))},s=e=>{const t=document.querySelector(".qg-site-search__component .qg-search-concierge-help");null!=t&&(t.hidden=e)},r=e=>{"keydown"===e.type&&("Enter"===e.key?s(!0):s(!1))};return $(_e||(_e=fe`
        <form action="#" role="search" class="qg-site-search__form qg-site-search__component qg-search-form" data-suggestions="https://find.search.qld.gov.au/s/suggest.json?collection=qld-gov&fmt=json%2B%2B&alpha=0.5&profile=qld" data-results-url="https://find.search.qld.gov.au/s/search.json?collection=qld-gov&profile=qld&meta_sfinder_sand=yes">
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
        <p class="mt-3">Enter your query in the box above to search.</p>`),e.query,r,r,t,t)}class ye{async fetchData(){var e;null===(e=this.spinnerEl)||void 0===e||e.removeAttribute("hidden");const t=await fetch(`https://find.search.qld.gov.au/s/search.json?query=${this.urlParameter.query}&num_ranks=${this.urlParameter.numRanks}&tiers=off&collection=${this.urlParameter.collection}&profile=${this.urlParameter.profile}&scope=${this.urlParameter.scope}&start_rank=${this.urlParameter.startRank}`);return await t.json()}renderSearchForm(){b($e(),document.getElementById("qg-search-form"))}processData(){this.fetchData().then((e=>{var t;const{contextualNavigation:s,results:r}=null==e||null===(t=e.response)||void 0===t?void 0:t.resultPacket;var i;r.length>0?(null===(i=this.spinnerEl)||void 0===i||i.setAttribute("hidden",""),b(ie(null==e?void 0:e.response,this.urlParameter),document.getElementById("qg-search-results__container")),s&&b(ve(s),document.getElementById("related-search__tags"))):(document.querySelector(".qg-search-results__spinner").remove(),b(de("No results found"),document.getElementById("qg-search-results__container")))}))}constructor(){this.urlParameter=j(),this.spinnerEl=document.querySelector(".qg-search-results__spinner"),this.siteInput=document.querySelector(".qg-site-search__component .qg-search-site__input"),this.renderSearchForm();const e=this.urlParameter.query;e&&(this.processData(),this.siteInput&&(this.siteInput.value=e))}}class qe{static init(){new ce,new ye}}window.onpopstate=function(e){qe.init()},qe.init()})();
//# sourceMappingURL=app.js.map
