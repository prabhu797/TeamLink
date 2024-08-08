var A=Math.pow;import{r as o,R as X,_ as Y,d as se,j as N,H as ae,b as Te}from"./index-CuFQcrkm.js";import{c as x,a as xe,s as ue,b as Xe,d as Ye}from"./Box-PtdsSPqS.js";const We=typeof window!="undefined"?o.useLayoutEffect:o.useEffect;function He(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function G(e){const t=o.useRef(e);return We(()=>{t.current=e}),o.useRef((...n)=>(0,t.current)(...n)).current}function me(...e){return o.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{He(n,t)})},e)}const be={};function Ge(e,t){const n=o.useRef(be);return n.current===be&&(n.current=e(t)),n}const qe=[];function Ze(e){o.useEffect(e,qe)}class q{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new q}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function Je(){const e=Ge(q.create).current;return Ze(e.disposeEffect),e}let Z=!0,re=!1;const Qe=new q,et={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function tt(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&et[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function nt(e){e.metaKey||e.altKey||e.ctrlKey||(Z=!0)}function ne(){Z=!1}function rt(){this.visibilityState==="hidden"&&re&&(Z=!0)}function it(e){e.addEventListener("keydown",nt,!0),e.addEventListener("mousedown",ne,!0),e.addEventListener("pointerdown",ne,!0),e.addEventListener("touchstart",ne,!0),e.addEventListener("visibilitychange",rt,!0)}function ot(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(n){}return Z||tt(t)}function st(){const e=o.useCallback(r=>{r!=null&&it(r.ownerDocument)},[]),t=o.useRef(!1);function n(){return t.current?(re=!0,Qe.start(100,()=>{re=!1}),t.current=!1,!0):!1}function u(r){return ot(r)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:u,onBlur:n,ref:e}}function ie(e,t){return ie=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,u){return n.__proto__=u,n},ie(e,t)}function at(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ie(e,t)}const ge=X.createContext(null);function ut(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function le(e,t){var n=function(i){return t&&o.isValidElement(i)?t(i):i},u=Object.create(null);return e&&o.Children.map(e,function(r){return r}).forEach(function(r){u[r.key]=n(r)}),u}function lt(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var u=Object.create(null),r=[];for(var i in e)i in t?r.length&&(u[i]=r,r=[]):r.push(i);var s,c={};for(var l in t){if(u[l])for(s=0;s<u[l].length;s++){var p=u[l][s];c[u[l][s]]=n(p)}c[l]=n(l)}for(s=0;s<r.length;s++)c[r[s]]=n(r[s]);return c}function k(e,t,n){return n[t]!=null?n[t]:e.props[t]}function ct(e,t){return le(e.children,function(n){return o.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:k(n,"appear",e),enter:k(n,"enter",e),exit:k(n,"exit",e)})})}function pt(e,t,n){var u=le(e.children),r=lt(t,u);return Object.keys(r).forEach(function(i){var s=r[i];if(o.isValidElement(s)){var c=i in t,l=i in u,p=t[i],d=o.isValidElement(p)&&!p.props.in;l&&(!c||d)?r[i]=o.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:k(s,"exit",e),enter:k(s,"enter",e)}):!l&&c&&!d?r[i]=o.cloneElement(s,{in:!1}):l&&c&&o.isValidElement(p)&&(r[i]=o.cloneElement(s,{onExited:n.bind(null,s),in:p.props.in,exit:k(s,"exit",e),enter:k(s,"enter",e)}))}}),r}var ft=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},dt={component:"div",childFactory:function(t){return t}},ce=function(e){at(t,e);function t(u,r){var i;i=e.call(this,u,r)||this;var s=i.handleExited.bind(ut(i));return i.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},i}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(r,i){var s=i.children,c=i.handleExited,l=i.firstRender;return{children:l?ct(r,c):pt(r,s,c),firstRender:!1}},n.handleExited=function(r,i){var s=le(this.props.children);r.key in s||(r.props.onExited&&r.props.onExited(i),this.mounted&&this.setState(function(c){var l=Y({},c.children);return delete l[r.key],{children:l}}))},n.render=function(){var r=this.props,i=r.component,s=r.childFactory,c=se(r,["component","childFactory"]),l=this.state.contextValue,p=ft(this.state.children).map(s);return delete c.appear,delete c.enter,delete c.exit,i===null?X.createElement(ge.Provider,{value:l},p):X.createElement(ge.Provider,{value:l},X.createElement(i,c,p))},t}(X.Component);ce.propTypes={};ce.defaultProps=dt;function ht(e){const{className:t,classes:n,pulsate:u=!1,rippleX:r,rippleY:i,rippleSize:s,in:c,onExited:l,timeout:p}=e,[d,g]=o.useState(!1),b=x(t,n.ripple,n.rippleVisible,u&&n.ripplePulsate),C={width:s,height:s,top:-(s/2)+i,left:-(s/2)+r},h=x(n.child,d&&n.childLeaving,u&&n.childPulsate);return!c&&!d&&g(!0),o.useEffect(()=>{if(!c&&l!=null){const y=setTimeout(l,p);return()=>{clearTimeout(y)}}},[l,c,p]),N.jsx("span",{className:b,style:C,children:N.jsx("span",{className:h})})}const m=xe("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),mt=["center","classes","className"];let J=e=>e,ye,Re,Ee,Me;const oe=550,bt=80,gt=ae(ye||(ye=J`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),yt=ae(Re||(Re=J`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),Rt=ae(Ee||(Ee=J`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),Et=ue("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Mt=ue(ht,{name:"MuiTouchRipple",slot:"Ripple"})(Me||(Me=J`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,gt,oe,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,yt,oe,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,Rt,({theme:e})=>e.transitions.easing.easeInOut),Tt=o.forwardRef(function(t,n){const u=Te({props:t,name:"MuiTouchRipple"}),{center:r=!1,classes:i={},className:s}=u,c=se(u,mt),[l,p]=o.useState([]),d=o.useRef(0),g=o.useRef(null);o.useEffect(()=>{g.current&&(g.current(),g.current=null)},[l]);const b=o.useRef(!1),C=Je(),h=o.useRef(null),y=o.useRef(null),_=o.useCallback(f=>{const{pulsate:R,rippleX:E,rippleY:D,rippleSize:O,cb:$}=f;p(M=>[...M,N.jsx(Mt,{classes:{ripple:x(i.ripple,m.ripple),rippleVisible:x(i.rippleVisible,m.rippleVisible),ripplePulsate:x(i.ripplePulsate,m.ripplePulsate),child:x(i.child,m.child),childLeaving:x(i.childLeaving,m.childLeaving),childPulsate:x(i.childPulsate,m.childPulsate)},timeout:oe,pulsate:R,rippleX:E,rippleY:D,rippleSize:O},d.current)]),d.current+=1,g.current=$},[i]),S=o.useCallback((f={},R={},E=()=>{})=>{const{pulsate:D=!1,center:O=r||R.pulsate,fakeElement:$=!1}=R;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const M=$?null:y.current,P=M?M.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,L,B;if(O||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)v=Math.round(P.width/2),L=Math.round(P.height/2);else{const{clientX:I,clientY:V}=f.touches&&f.touches.length>0?f.touches[0]:f;v=Math.round(I-P.left),L=Math.round(V-P.top)}if(O)B=Math.sqrt((2*A(P.width,2)+A(P.height,2))/3),B%2===0&&(B+=1);else{const I=Math.max(Math.abs((M?M.clientWidth:0)-v),v)*2+2,V=Math.max(Math.abs((M?M.clientHeight:0)-L),L)*2+2;B=Math.sqrt(A(I,2)+A(V,2))}f!=null&&f.touches?h.current===null&&(h.current=()=>{_({pulsate:D,rippleX:v,rippleY:L,rippleSize:B,cb:E})},C.start(bt,()=>{h.current&&(h.current(),h.current=null)})):_({pulsate:D,rippleX:v,rippleY:L,rippleSize:B,cb:E})},[r,_,C]),U=o.useCallback(()=>{S({},{pulsate:!0})},[S]),j=o.useCallback((f,R)=>{if(C.clear(),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,C.start(0,()=>{j(f,R)});return}h.current=null,p(E=>E.length>0?E.slice(1):E),g.current=R},[C]);return o.useImperativeHandle(n,()=>({pulsate:U,start:S,stop:j}),[U,S,j]),N.jsx(Et,Y({className:x(m.root,i.root,s),ref:y},c,{children:N.jsx(ce,{component:null,exit:!0,children:l})}))});function xt(e){return Xe("MuiButtonBase",e)}const Ct=xe("MuiButtonBase",["root","disabled","focusVisible"]),vt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Vt=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:u,classes:r}=e,s=Ye({root:["root",t&&"disabled",n&&"focusVisible"]},xt,r);return n&&u&&(s.root+=` ${u}`),s},wt=ue("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Ct.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),It=o.forwardRef(function(t,n){const u=Te({props:t,name:"MuiButtonBase"}),{action:r,centerRipple:i=!1,children:s,className:c,component:l="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:C="a",onBlur:h,onClick:y,onContextMenu:_,onDragLeave:S,onFocus:U,onFocusVisible:j,onKeyDown:f,onKeyUp:R,onMouseDown:E,onMouseLeave:D,onMouseUp:O,onTouchEnd:$,onTouchMove:M,onTouchStart:P,tabIndex:v=0,TouchRippleProps:L,touchRippleRef:B,type:I}=u,V=se(u,vt),K=o.useRef(null),T=o.useRef(null),Ce=me(T,B),{isFocusVisibleRef:pe,onFocus:ve,onBlur:Ve,ref:we}=st(),[F,W]=o.useState(!1);p&&F&&W(!1),o.useImperativeHandle(r,()=>({focusVisible:()=>{W(!0),K.current.focus()}}),[]);const[Q,Pe]=o.useState(!1);o.useEffect(()=>{Pe(!0)},[]);const Le=Q&&!d&&!p;o.useEffect(()=>{F&&b&&!d&&Q&&T.current.pulsate()},[d,b,F,Q]);function w(a,de,Ae=g){return G(he=>(de&&de(he),!Ae&&T.current&&T.current[a](he),!0))}const Be=w("start",E),De=w("stop",_),Ie=w("stop",S),Fe=w("stop",O),ke=w("stop",a=>{F&&a.preventDefault(),D&&D(a)}),Ne=w("start",P),Se=w("stop",$),je=w("stop",M),Oe=w("stop",a=>{Ve(a),pe.current===!1&&W(!1),h&&h(a)},!1),_e=G(a=>{K.current||(K.current=a.currentTarget),ve(a),pe.current===!0&&(W(!0),j&&j(a)),U&&U(a)}),ee=()=>{const a=K.current;return l&&l!=="button"&&!(a.tagName==="A"&&a.href)},te=o.useRef(!1),Ue=G(a=>{b&&!te.current&&F&&T.current&&a.key===" "&&(te.current=!0,T.current.stop(a,()=>{T.current.start(a)})),a.target===a.currentTarget&&ee()&&a.key===" "&&a.preventDefault(),f&&f(a),a.target===a.currentTarget&&ee()&&a.key==="Enter"&&!p&&(a.preventDefault(),y&&y(a))}),$e=G(a=>{b&&a.key===" "&&T.current&&F&&!a.defaultPrevented&&(te.current=!1,T.current.stop(a,()=>{T.current.pulsate(a)})),R&&R(a),y&&a.target===a.currentTarget&&ee()&&a.key===" "&&!a.defaultPrevented&&y(a)});let H=l;H==="button"&&(V.href||V.to)&&(H=C);const z={};H==="button"?(z.type=I===void 0?"button":I,z.disabled=p):(!V.href&&!V.to&&(z.role="button"),p&&(z["aria-disabled"]=p));const Ke=me(n,we,K),fe=Y({},u,{centerRipple:i,component:l,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:v,focusVisible:F}),ze=Vt(fe);return N.jsxs(wt,Y({as:H,className:x(ze.root,c),ownerState:fe,onBlur:Oe,onClick:y,onContextMenu:De,onFocus:_e,onKeyDown:Ue,onKeyUp:$e,onMouseDown:Be,onMouseLeave:ke,onMouseUp:Fe,onDragLeave:Ie,onTouchEnd:Se,onTouchMove:je,onTouchStart:Ne,ref:Ke,tabIndex:p?-1:v,type:I},z,V,{children:[s,Le?N.jsx(Tt,Y({ref:Ce,center:i},L)):null]}))});export{It as B,q as T,at as _,me as a,st as b,Je as c,G as d,ge as e,He as s,We as u};
