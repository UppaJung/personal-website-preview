"use strict";(()=>{var G=Object.freeze,W=Object.defineProperty;var J=(n,t,e)=>t in n?W(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var i=(n,t,e)=>(J(n,typeof t!="symbol"?t+"":t,e),e),D=(n,t,e)=>{if(!t.has(n))throw TypeError("Cannot "+e)};var l=(n,t,e)=>(D(n,t,"read from private field"),e?e.call(n):t.get(n)),d=(n,t,e)=>{if(t.has(n))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(n):t.set(n,e)},p=(n,t,e,s)=>(D(n,t,"write to private field"),s?s.call(n,e):t.set(n,e),e);var C=(n,t)=>G(W(n,"raw",{value:G(t||n.slice())}));var K=n=>({prefix:t="",suffix:e=""}={})=>n.reduce((s,m)=>(s[m]=t+m+e,s),{}),Q=n=>({prefix:t="",suffix:e=""}={})=>n.reduce((s,m)=>(Object.assign(s,{[m]:document.getElementById("".concat(t).concat(m).concat(e))}),s),{}),X=(n,t)=>{let e=K(n),s=Q(n);return{getElementIds:e,getElements:s}},Y=(n,t)=>{let e=document.createElement("div");for(e.innerHTML=t;e.children.length>0;){let s=e.firstChild;e.removeChild(s),n.appendChild(s)}},E=class{constructor(t,e,s,m){i(this,"elementIds");i(this,"elements");let{getElementIds:a,getElements:r}=X(s);this.elementIds=a(m),Y(t,e(this.elementIds)),this.elements=r(m)}};var k=[],A=new Set,M=!1,Z=()=>{if(!M)try{for(M=!0;A.size>0;){let[n]=[...A];n==null||n.compute()}}finally{M=!1}},w,O,F,R,S=class{constructor(){d(this,w,new Set);d(this,O,new Set);d(this,F,(...t)=>{for(let e of t)l(this,O).add(e)});i(this,"callBeforeGetValue",()=>{let[t]=k;t!=null&&l(this,F).call(this,t)});i(this,"callAfterSetChangesValue",(t,e)=>{for(let s of l(this,O))s.invalidate();l(this,R).call(this,t,e),Z()});d(this,R,(t,e)=>{for(let s of l(this,w))try{s(t,e)}catch(m){}});i(this,"onChange",t=>l(this,w).add(t));i(this,"listen",t=>{this.onChange(t),t(this.value,this.value)})}};w=new WeakMap,O=new WeakMap,F=new WeakMap,R=new WeakMap;var h,y,$,I,g=class extends S{constructor({initialValue:e,element:s},m){super();d(this,h,void 0);d(this,y,void 0);d(this,$,()=>{let e=l(this,y);p(this,y,l(this,h).value),this.callAfterSetChangesValue(l(this,h).value,e)});d(this,I,void 0);p(this,I,m),p(this,h,s),e!=null&&(l(this,h).value=e),l(this,h).addEventListener("input",()=>l(this,$).call(this)),l(this,h).addEventListener("change",()=>l(this,$).call(this))}get element(){return l(this,h)}get value(){return this.callBeforeGetValue(),l(this,h).value}set value(e){let s=l(this,h).value;l(this,I)!=null&&console.log("Update ".concat(l(this,I)),e,s),e!==s&&(l(this,h).value=p(this,y,e),this.callAfterSetChangesValue(e,s))}};h=new WeakMap,y=new WeakMap,$=new WeakMap,I=new WeakMap;var x,v=class extends S{constructor(e){super();d(this,x,void 0);p(this,x,e)}get value(){return this.callBeforeGetValue(),l(this,x)}set value(e){let s=l(this,x);s!==e&&(p(this,x,e),this.callAfterSetChangesValue(e,s))}};x=new WeakMap;var P,f,V,u=class extends S{constructor(e,s){super();this.logAs=s;d(this,P,void 0);d(this,f,!1);i(this,"compute",()=>{let e=l(this,P);k.unshift(this);let s;try{return p(this,P,s=l(this,V).call(this)),p(this,f,!0),s}finally{this.logAs!=null&&console.log("Computed ".concat(this.logAs),s),k.shift(),A.delete(this),l(this,f)&&s!==e&&this.callAfterSetChangesValue(s,e)}});d(this,V,void 0);p(this,V,e)}get valid(){return!l(this,f)}invalidate(){p(this,f,!1),A.add(this)}get value(){return this.callBeforeGetValue(),l(this,f)?l(this,P):this.compute()}};P=new WeakMap,f=new WeakMap,V=new WeakMap;var L={welcome:"welcome",prefer:"prefer",decline:"decline"},_=["affiliateTextInputElement","nameTextInputElement","nameTagLine1TextInputElement","nameTagLine2TextInputElement","nameTagLine3TextInputElement","nameTagLine4TextInputElement","preferredThirdPersonPronounTextInputElement","opennessToTheyPronounsWelcome","opennessToTheyPronounsDecline","opennessToTheyPronounsWelcomeLabel","opennessToTheyPronounsPreferLabel","opennessToTheyPronounsDeclineLabel","opennessToTheyPronounsRadioButtonContainer"],ee=[..._],ne=String.raw,j,te=n=>ne(j||(j=C(['\n<div class="registration-form">\n  <div class="form-input-container">\n    <label for="','">name</label>\n    <input type="text" size="30" id="','" placeholder="" />\n  </div>\n  <div class="form-input-container">\n    <label for="','">affiliations(s)</label>\n    <input type="text" size="30" id="','" />\n  </div>\n  <div class="form-input-container">\n    <label for="','">preferred pronouns</label>\n    <input type="text" id="','" placeholder="they/them" />\n  </div>\n	<div id="','" class="radio-group-container">\n		<div class="radio-element-and-label-container">\n			<input type="radio" name="opennessToTheyPronouns" value="welcome" id="','" />\n			<label id="','" for="','">I welcome gender-neutral (<i>they</i>) pronouns.<br/>(this promotes inclusivity)</label>\n		</div>'])),n.nameTextInputElement,n.nameTextInputElement,n.affiliateTextInputElement,n.affiliateTextInputElement,n.preferredThirdPersonPronounTextInputElement,n.preferredThirdPersonPronounTextInputElement,n.opennessToTheyPronounsRadioButtonContainer,n.opennessToTheyPronounsWelcome,n.opennessToTheyPronounsWelcomeLabel,n.opennessToTheyPronounsWelcome)+'\n		<div class="radio-element-and-label-container">\n			<input type="radio" name="opennessToTheyPronouns" value="decline" id="'.concat(n.opennessToTheyPronounsDecline,'" />\n			<label id="').concat(n.opennessToTheyPronounsDeclineLabel,'" for="').concat(n.opennessToTheyPronounsDecline,'">I prefer my pronouns only.</label>\n		</div>\n	</div>\n  <div class="form-input-container">\n    <label for="').concat(n.nameTagLine1TextInputElement,'">name tag contents</label>\n    <input type="text" size="30" id="').concat(n.nameTagLine1TextInputElement,'"/>\n    <input type="text" size="30" id="').concat(n.nameTagLine2TextInputElement,'"/>\n    <input type="text" size="30" id="').concat(n.nameTagLine3TextInputElement,'"/>\n    <input type="text" size="30" id="').concat(n.nameTagLine4TextInputElement,'"/>\n  </div>\n</div>\n'),z=class extends E{constructor(e,s){super(e,te,ee,s);i(this,"nameTextInputElement");i(this,"affiliateTextInputElement");i(this,"preferredThirdPersonPronounTextInputElement");i(this,"opennessToTheyPronouns",new v(L.welcome));i(this,"nameTagLine1ObservableTextInputElement");i(this,"nameTagLine2ObservableTextInputElement");i(this,"nameTagLine3ObservableTextInputElement");i(this,"nameTagLine4ObservableTextInputElement");i(this,"nameTagLine1TextInputElementOverride",new v(!1));i(this,"nameTagLine2TextInputElementOverride",new v(!1));i(this,"nameTagLine3TextInputElementOverride",new v(!1));i(this,"nameTagLine4TextInputElementOverride",new v(!1));i(this,"preferredThirdPersonPronounsFromInputText",new u(()=>{let e=/[\s\/,]+/;return this.preferredThirdPersonPronounTextInputElement.value.split(e).map(s=>s.trim()).filter(s=>s.length>0)}));i(this,"preferredThirdPersonPronounsFromInputTextSeparatedBySlash",new u(()=>this.preferredThirdPersonPronounsFromInputText.value.join("/")));i(this,"preferredThirdPersonPronounsFromInputTextContainsThey",new u(()=>this.preferredThirdPersonPronounsFromInputText.value.find(e=>e.toLocaleLowerCase()==="they")!=null));i(this,"preferredThirdPersonPronouns",new u(()=>this.preferredThirdPersonPronounsFromInputText.value.length===0?["they","them"]:[...this.preferredThirdPersonPronounsFromInputText.value,...this.opennessToTheyPronouns.value===L.prefer&&this.preferredThirdPersonPronounsFromInputTextContainsThey.value===!1?["they"]:[]]));i(this,"myOwnThirdPartyPronouns",new u(()=>this.preferredThirdPersonPronounsFromInputText.value.length>0?this.preferredThirdPersonPronounsFromInputText.value.join("/"):"my own pronouns"));i(this,"theyIsAmongPreferredThirdPersonPronouns",new u(()=>this.preferredThirdPersonPronouns.value.find(e=>e.toLocaleLowerCase()==="they")!=null));i(this,"firstName",new u(()=>{var e;return(e=this.nameTextInputElement.value.trim().split(" ").filter(s=>!s.endsWith("."))[0])!=null?e:""}));i(this,"nameTagLine1TextInputElementPlaceholder",new u(()=>this.firstName.value));i(this,"nameTagLine1",new u(()=>this.nameTagLine1ObservableTextInputElement.value.length>0?this.nameTagLine1ObservableTextInputElement.value:this.nameTagLine1TextInputElementPlaceholder.value));i(this,"nameTagLine2TextInputElementPlaceholder",new u(()=>{let e=this.nameTextInputElement.value,s=this.nameTagLine1.value;return e.startsWith(s)?e.slice(s.length).trim():e}));i(this,"nameTagLine2",new u(()=>this.nameTagLine2ObservableTextInputElement.value.length>0?this.nameTagLine2ObservableTextInputElement.value:this.nameTagLine2TextInputElementPlaceholder.value));i(this,"nameTagLine3TextInputElementPlaceholder",new u(()=>this.affiliateTextInputElement.value));i(this,"nameTagLine3",new u(()=>this.nameTagLine3ObservableTextInputElement.value.length>0?this.nameTagLine3ObservableTextInputElement.value:this.nameTagLine3TextInputElementPlaceholder.value));i(this,"nameTagLine4TextInputElementPlaceholder",new u(()=>{let e=this.opennessToTheyPronouns.value===L.welcome&&!this.theyIsAmongPreferredThirdPersonPronouns.value,s=this.opennessToTheyPronouns.value===L.decline&&!this.theyIsAmongPreferredThirdPersonPronouns.value;return"".concat(this.preferredThirdPersonPronouns.value.join("/")).concat(e?" <i>or they</i>":"").concat(s?" <b>only</b>":"")}));i(this,"nameTagLine4",new u(()=>this.nameTagLine4ObservableTextInputElement.value.length>0?this.nameTagLine4ObservableTextInputElement.value:this.nameTagLine4TextInputElementPlaceholder.value));i(this,"showOpennessToThey",new u(()=>this.preferredThirdPersonPronounsFromInputText.value.length>0&&this.preferredThirdPersonPronounsFromInputTextContainsThey.value===!1));this.nameTextInputElement=new g({initialValue:"",element:this.elements.nameTextInputElement}),this.affiliateTextInputElement=new g({initialValue:"",element:this.elements.affiliateTextInputElement}),this.preferredThirdPersonPronounTextInputElement=new g({initialValue:"",element:this.elements.preferredThirdPersonPronounTextInputElement}),this.myOwnThirdPartyPronouns.listen(a=>{this.elements.opennessToTheyPronounsDeclineLabel.textContent="I prefer ".concat(a," only.")});let m=[[this.elements.opennessToTheyPronounsDecline,this.elements.opennessToTheyPronounsDeclineLabel,L.decline],[this.elements.opennessToTheyPronounsWelcome,this.elements.opennessToTheyPronounsWelcomeLabel,L.welcome]];this.showOpennessToThey.listen(a=>{m.forEach(([r,o])=>{a?(r.removeAttribute("disabled"),o.style.removeProperty("color")):(r.setAttribute("disabled",""),o.style.setProperty("color","rgba(128,128,128,0.5)"))}),a?this.elements.opennessToTheyPronounsRadioButtonContainer.removeAttribute("disabled"):this.elements.opennessToTheyPronounsRadioButtonContainer.setAttribute("disabled","")}),m.forEach(([a,r,o])=>{a.addEventListener("change",()=>{this.opennessToTheyPronouns.value=o}),r.addEventListener("click",()=>{this.opennessToTheyPronouns.value=o}),this.opennessToTheyPronouns.listen(T=>{o===T?a.setAttribute("checked",""):a.removeAttribute("checked")})}),this.nameTagLine1ObservableTextInputElement=new g({initialValue:"",element:this.elements.nameTagLine1TextInputElement}),this.nameTagLine2ObservableTextInputElement=new g({initialValue:"",element:this.elements.nameTagLine2TextInputElement}),this.nameTagLine3ObservableTextInputElement=new g({initialValue:"",element:this.elements.nameTagLine3TextInputElement}),this.nameTagLine4ObservableTextInputElement=new g({initialValue:"",element:this.elements.nameTagLine4TextInputElement});for(let[a,r,o]of[[this.nameTagLine1TextInputElementPlaceholder,this.nameTagLine1ObservableTextInputElement,this.nameTagLine1TextInputElementOverride],[this.nameTagLine2TextInputElementPlaceholder,this.nameTagLine2ObservableTextInputElement,this.nameTagLine2TextInputElementOverride],[this.nameTagLine3TextInputElementPlaceholder,this.nameTagLine3ObservableTextInputElement,this.nameTagLine3TextInputElementOverride],[this.nameTagLine4TextInputElementPlaceholder,this.nameTagLine4ObservableTextInputElement,this.nameTagLine4TextInputElementOverride]])a.listen(T=>{r.element.setAttribute("placeholder",T!=null?T:""),o.value||(r.value=T)}),r.element.addEventListener("blur",()=>{o.value=r.value.length>0&&r.value!==a.value})}get name(){return this.nameTextInputElement.value.trim()}};var se=n=>{let t=n.trim(),e=parseFloat(t.slice(0,-2)),s=t.slice(-2);return{magnitude:e,units:s}},ie=(n,t)=>{let e=se(n.getAttribute("font-size")),s=e.magnitude;return()=>{let a=n.getComputedTextLength(),r=Math.min(e.magnitude,s*t/a);r!=s&&(s=r,n.setAttribute("font-size","".concat(s).concat(e.units)))}},le=n=>{let t=n,e=0,s={bold:!1,italics:!1,underline:!1},m={b:o=>{s.bold=!o},i:o=>{s.italics=!o},u:o=>{s.underline=!o}},a=[],r=o=>{let T=document.createElementNS("http://www.w3.org/2000/svg","tspan");T.textContent=o,s.underline&&(T.style.textDecoration="underline"),s.bold&&(T.style.fontWeight="bold"),s.italics&&(T.style.fontStyle="italic"),a.push(T)};for(;;){let o=t.indexOf("<",e);if(o<0)return r(t),a;let T=t.substring(o+1,o+2)==="/",H=t.indexOf(">",o+1);if(H<0)return r(t),a;let U=t.substring(o+(T?2:1),H).toLocaleLowerCase(),B=m[U];B!=null?(o>0&&r(t.substring(0,o)),B(T),t=t.substring(H+1),e=0):e=o+1}},oe=["nameTagSvg"],ae=["nameTagLine1SvgText","nameTagLine2SvgText","nameTagLine3SvgText","nameTagLine4SvgText"],re=[...oe,...ae],c=9,b=9,me=String.raw,q,ue=n=>me(q||(q=C(['\n<label class="name-tag-preview-label">your name tag will look like this</label>\n<svg id="','" viewBox="0 0 '," ",'" style="width: ',"cm; height: ",'cm; font-family: sans-serif;">\n	<rect x="0" y="0" height="','" width="','" style="fill: rgba(64, 0, 0, 1);"></rect>\n	<rect x=".1" y=".1" height="','" width="','" style="fill: white;"></rect>\n	<text id="','" dominant-baseline="middle" text-anchor="middle" x="','" y="1.7" font-size="1.75pt" style="font-weight: bold;"></text>\n	<text id="','" dominant-baseline="middle" text-anchor="middle" x="','" y="3" font-size="0.8pt"></text>\n	<text id="','" dominant-baseline="middle" text-anchor="middle" x="','" y="4.35" font-size="0.6pt"></text>\n	<text id="','" dominant-baseline="middle" text-anchor="middle" x="','" y="5.35" font-size="0.45pt"></text>\n	<rect x="0.1" y="','" height="2.8" width="','" style="fill: rgba(64, 0, 0, 1);"></rect>\n	<text id="logoPlaceholder" dominant-baseline="middle" text-anchor="middle" x="','" y="','" font-size="0.85pt" style="font-weight: bold; fill: white;">\n		<tspan>Event Branding</tspan>\n	</text>\n	<text id="logoPlaceholder" dominant-baseline="middle" text-anchor="middle" x="','" y="','" font-size="0.85pt" style="font-weight: bold; fill: white;">\n		<tspan>Belongs Here</tspan>\n	</text>\n</svg>\n'])),n.nameTagSvg,c,b,c,b,b,c,b-.2,c-.2,n.nameTagLine1SvgText,c/2,n.nameTagLine2SvgText,c/2,n.nameTagLine3SvgText,c/2,n.nameTagLine4SvgText,c/2,b-2.9,c-.2,c/2,b-2,c/2,b-.8),Te=8,N=class extends E{constructor(e,s,m){super(e,ue,re,m);this.observes=s;for(let[a,r]of[[this.elements.nameTagLine1SvgText,this.observes.nameTagLine1],[this.elements.nameTagLine2SvgText,this.observes.nameTagLine2],[this.elements.nameTagLine3SvgText,this.observes.nameTagLine3],[this.elements.nameTagLine4SvgText,this.observes.nameTagLine4]]){let o=ie(a,Te);r.listen(T=>{a.replaceChildren(...le(T)),o()})}}};document.addEventListener("DOMContentLoaded",()=>{let n=document.querySelector("[data-registration-form-here]");if(n==null)return;let t=new z(n);new N(n,t)});})();
//# sourceMappingURL=registration-pronouns.js.map