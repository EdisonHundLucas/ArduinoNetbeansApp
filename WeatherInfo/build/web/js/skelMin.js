/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/* skel.js vx.x | (c) n33 | n33.co | MIT licensed */
var skel=function(){
    var e="config",t="breakpoints",n="iterate",r="elements",i="getCachedElement",s="stateId",o="getElementsByClassName",u=!1,a="stateElements",f="cacheElement",l="deviceType",c="length",h="getElementsByTagName",p="config_breakpoint",d="parentNode",v=null,m="height",g="match",y="insertBefore",b="vars",w="newInline",E="orientationChange",S="width",x="object",T="cache",N="lockState",C="!important",k="head",L="containers",A="createElement",O="_skel_isReversed",M="location",_="className",D="locations",P="}",H="extend",B=" 0 0 ",j="onorientationchange",F=!0,I="indexOf",q="replace",R="isArray",U="substring",z="devicePixelRatio",W="defaults",X="DOMReady",V="push",$="addEventListener",J="documentElement",K="{display:none!important}",Q="padding-top:0!important",G="parseMeasurement",Y="registerLocation",Z="events",et="^head",tt="hasOwnProperty",nt="android",rt="viewportWidth",it="DOMContentLoaded",st="getDevicePixelRatio",ot="string",ut="getViewportDimensions",at="matchMedia",ft="IEVersion",lt="_skel_attach",ct="states",ht="ios",pt="ignoreOrientation",dt="placeholder",vt="removeEventListener",mt="padding-top:",gt="resize",yt=".row",bt="attached",wt="stateChange",Et="firstChild",St="_skel_placeholder",xt="href",Tt="querySelectorAll",Nt="windows",Ct="previousSibling",kt="prototype",Lt="innerHTML",At="gutters",Ot="attachElements",Mt="text/css",_t="html",Dt="domready",Pt="padding:",Ht="readyState",Bt="onresize",jt="split",Ft=".\\3$1 ",It="collapse",qt="priority",Rt="attachElement",Ut={
        config:{
            containers:960,
            pollOnce:u,
            pollOnLock:u,
            prefix:v,
            preload:u,
            reset:u,
            perpetualLock:F,
            domainLock:F,
            ignoreOrientation:u,
            RTL:u,
            grid:{
                collapse:u,
                gutters:40
            },
            breakpoints:{
                global:{
                    href:u,
                    width:"*",
                    height:"*"
                }
            },
        events:{}
},
isInit:u,
lockState:v,
stateId:"",
me:v,
breakpoints:[],
breakpointList:[],
events:[],
plugins:{},
cache:{
    elements:{},
    states:{},
    stateElements:{}
},
locations:{
    html:v,
    head:v,
    body:v
},
vars:{},
lsc:"_skel_lock",
sd:" ",
css:{
    n:'article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,video{display:inline-block}audio:not([controls]){display:none;height:0}[hidden],template{display:none}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}a{background:transparent}a:focus{outline:thin dotted}a:active,a:hover{outline:0}h1{font-size:2em;margin:.67em 0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}mark{background:#ff0;color:#000}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em}pre{white-space:pre-wrap}q{quotes:"ÂC" "ÂD" "Â8" "Â9"}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:0}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}button,input,select,textarea{font-family:inherit;font-size:100%;margin:0}button,input{line-height:normal}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}',
    r:"html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}body{-webkit-text-size-adjust:none}",
    bm:"*,*:before,*:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}"
},
defaults:{
    breakpoint:{
        config:v,
        elements:v,
        test:{
            width:v,
            height:v
        }
    },
config_breakpoint:{
    containers:"100%",
    grid:{},
    href:"",
    width:"*",
    height:"*",
    viewport:"",
    lockViewport:u,
    viewportWidth:u
}
},
DOMReady:v,
getElementsByClassName:v,
indexOf:v,
isArray:v,
iterate:v,
extend:function(e,t){
    var r;
    Ut[n](t,function(n){
        Ut[R](t[n])?(Ut[R](e[n])||(e[n]=[]),Ut[H](e[n],t[n])):typeof t[n]==x?(typeof e[n]!=x&&(e[n]={}),Ut[H](e[n],t[n])):e[n]=t[n]
        })
    },
parseMeasurement:function(e){
    var t,n;
    if(typeof e!==ot)t=[e,"px"];
    else if(e=="fluid")t=[100,"%"];
    else{
        var n;
        n=e[g](/([0-9\.]+)([^\s]*)/),n[c]<3||!n[2]?t=[parseFloat(e),"px"]:t=[parseFloat(n[1]),n[2]]
        }
        return t
    },
getArray:function(e){
    return Ut[R](e)?e:[e]
    },
getDevicePixelRatio:function(){
    var e=navigator.userAgent;
    if(Ut[b][l]==ht||Ut[b][l]=="mac"||Ut[b][l]==Nt||Ut[b][l]==nt&&e[g](/Safari\/([0-9]+)/)&&parseInt(RegExp.$1)>=537)return 1;
    if(window[z]!==undefined&&!e[g](/(Firefox; Mobile)/))return window[z];
    if(window[at]){
        if(window[at]("(-webkit-min-device-pixel-ratio: 2),(min--moz-device-pixel-ratio: 2),(-o-min-device-pixel-ratio: 2/1),(min-resolution: 2dppx)").matches)return 2;
        if(window[at]("(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-resolution: 1.5dppx)").matches)return 1.5
            }
            return 1
    },
getLevel:function(e){
    return typeof e=="boolean"?e?1:0:parseInt(e)
    },
getViewportDimensions:function(){
    var t,n,r,i;
    return t=window.orientation!==undefined?Math.abs(window.orientation):u,n=Ut[st](),r=document[J].clientWidth,i=document[J].clientHeight,screen[S]<r&&(r=screen[S],i=screen[m]),t!==u&&(Ut[e][pt]?(r=Math.min(screen[S],screen[m]),i=Math.max(screen[S],screen[m])):t===90?(r=Math.max(screen[S],screen[m]),i=Math.min(screen[S],screen[m])):(r=Math.min(screen[S],screen[m]),i=Math.max(screen[S],screen[m]))),r/=n,i/=n,{
        width:r,
        height:i
    }
},
unlock:function(){
    Ut[N]=v,document.cookie=Ut.lsc+"=;expires=Thu, 1 Jan 1970 12:00:00 UTC; path="+(Ut[e].domainLock?"/":window[M].pathname),Ut[e].pollOnLock?Ut.poll():window[M].reload()
    },
lock:function(t){
    Ut[N]=t,document.cookie=Ut.lsc+"="+t+";expires="+(Ut[e].perpetualLock?"Thu, 1 Jan 2077 12:00:00 UTC":0)+"; path="+(Ut[e].domainLock?"/":window[M].pathname),Ut[e].pollOnLock?Ut.poll():window[M].reload()
    },
getLock:function(){
    return Ut[N]
    },
isLocked:function(){
    return!!Ut[N]
    },
hasActive:function(e){
    var t=u;
    return Ut[n](e,function(n){
        t=t||Ut.isActive(e[n])
        }),t
    },
isActive:function(e){
    return Ut[I](Ut[s],Ut.sd+e)!==-1
    },
wasActive:function(e){
    return Ut[I](Ut[b].lastStateId,Ut.sd+e)!==-1
    },
canUse:function(e){
    var n=Ut[ut]();
    return Ut[t][e]&&Ut[t][e].test[S](n[S])&&Ut[t][e].test[m](n[m])
    },
useActive:function(e){
    if(typeof e!==x)return e;
    var t=v;
    return Ut[n](e,function(n){
        if(t!==v)return;
        Ut.isActive(n)&&(t=e[n])
        }),t
    },
unreverseRows:function(){
    var e=Ut[o]("row");
    Ut[n](e,function(t){
        if(t===c)return;
        var n=e[t];
        if(!n[O])return;
        var r=n.children,i;
        for(i=1;i<r[c];i++)n[y](r[i],r[0]);
        n[O]=u
        })
    },
reverseRows:function(e){
    var t=Ut[o]("row");
    Ut[n](t,function(n){
        if(n===c)return;
        var r=t[n];
        if(r[O]||e>0&&r[_][g](/\bno-collapse-([0-9])\b/)&&parseInt(RegExp.$1)>=e)return;
        var i=r.children,s;
        for(s=1;s<i[c];s++)r[y](i[s],i[0]);
        r[O]=F
        })
    },
bind:function(e,t){
    Ut[Z][e]||(Ut[Z][e]=[]),Ut[Z][e][V](t)
    },
trigger:function(e){
    if(!Ut[Z][e]||Ut[Z][e][c]==0)return;
    var t;
    Ut[n](Ut[Z][e],function(t){
        Ut[Z][e][t]()
        })
    },
onStateChange:function(e){
    Ut.bind(wt,e),Ut.isInit&&e()
    },
registerLocation:function(e,t){
    e==k?t[lt]=function(e,t){
        t?this[y](e,this[Et]):this===Ut.me[d]?this[y](e,Ut.me):this.appendChild(e)
        }:t[lt]=function(e,t){
        t?this[y](e,this[Et]):this.appendChild(e)
        },Ut[D][e]=t
    },
addCachedElementToBreakpoint:function(e,n){
    Ut[t][e]&&Ut[t][e][r][V](n)
    },
addCachedElementToState:function(e,t){
    Ut[T][a][e]?Ut[T][a][e][V](t):Ut[T][a][e]=[t]
    },
cacheElement:function(e,t,n,i){
    return t[d]&&t[d].removeChild(t),Ut[T][r][e]={
        id:e,
        object:t,
        location:n,
        priority:i,
        attached:u
    }
},
getCachedElement:function(e){
    return Ut[T][r][e]?Ut[T][r][e]:v
    },
detachElement:function(e){
    var t=Ut[T][r][e],n;
    if(!t[bt])return;
    n=t[x];
    if(!n[d]||n[d]&&!n[d].tagName)return;
    n[d].removeChild(n),t[bt]=u,t.onDetach&&t.onDetach()
    },
detachAllElements:function(e){
    var t,i,s={};

    Ut[n](e,function(t){
        s[e[t].id]=F
        }),Ut[n](Ut[T][r],function(e){
        if(e in s)return;
        Ut.detachElement(e)
        })
    },
attachElement:function(e){
    var t,n=e[M],r=u;
    return e[bt]?F:(n[0]=="^"&&(n=n[U](1),r=F),n in Ut[D]?(t=Ut[D][n],t[lt](e[x],r),e[bt]=F,e.onAttach&&e.onAttach(),F):u)
    },
attachElements:function(e){
    var t=[],r=[],i,s,o;
    Ut[n](e,function(n){
        t[e[n][qt]]||(t[e[n][qt]]=[]),t[e[n][qt]][V](e[n])
        }),Ut[n](t,function(e){
        if(t[e][c]==0)return;
        Ut[n](t[e],function(n){
            Ut[Rt](t[e][n])||r[V](t[e][n])
            })
        }),r[c]>0&&Ut[X](function(){
        Ut[n](r,function(e){
            Ut[Rt](r[e])
            })
        })
    },
poll:function(){
    var e,r,i,o,u="";
    r=Ut[ut](),Ut[N]?i=Ut[N]:i=r[S],o=r[m],Ut[b][rt]=i,Ut[b].viewportHeight=o,Ut[b][z]=Ut[st](),Ut[n](Ut[t],function(e){
        Ut[t][e].test[S](i)&&Ut[t][e].test[m](o)&&(u+=Ut.sd+e)
        }),u===""&&(u=Ut.sd),u!==Ut[s]&&(Ut[D][_t][_]=Ut[D][_t][_][q](Ut[s],""),Ut.changeState(u),Ut[D][_t][_]=Ut[D][_t][_]+Ut[s])
    },
updateState:function(){
    var e,i,o,u,f=[];
    if(Ut[s]==Ut.sd)return;
    e=Ut[s][U](1)[jt](Ut.sd),Ut[n](e,function(o){
        i=Ut[t][e[o]];
        if(i[r][c]==0)return;
        Ut[n](i[r],function(e){
            Ut[T][ct][Ut[s]][r][V](i[r][e]),f[V](i[r][e])
            })
        }),Ut[T][a][Ut[s]]&&(Ut[n](Ut[T][a][Ut[s]],function(e){
        Ut[T][ct][Ut[s]][r][V](Ut[T][a][Ut[s]][e]),f[V](Ut[T][a][Ut[s]][e])
        }),Ut[T][a][Ut[s]]=[]),f[c]>0&&Ut[Ot](f)
    },
changeState:function(l){
    var h,v,m,E,S,x,N,A;
    Ut[b].lastStateId=Ut[s],Ut[s]=l;
    if(!Ut[T][ct][Ut[s]]){
        Ut[T][ct][Ut[s]]={
            config:{},
            elements:[],
            values:{}
    },m=Ut[T][ct][Ut[s]],Ut[s]===Ut.sd?h=[]:h=Ut[s][U](1)[jt](Ut.sd),Ut[H](m[e],Ut[W][p]),Ut[n](h,function(n){
        Ut[H](m[e],Ut[t][h[n]][e])
        });
    switch(Ut[e].reset){
        case"full":
            x="iR",(S=Ut[i](x))||(S=Ut[f](x,Ut[w](Ut.css.r),et,2)),m[r][V](S);
            break;
        case"normalize":
            x="iN",(S=Ut[i](x))||(S=Ut[f](x,Ut[w](Ut.css.n),et,2)),m[r][V](S)
            }
            x="iBM",(S=Ut[i](x))||(S=Ut[f](x,Ut[w](Ut.css.bm),et,1)),m[r][V](S),N=m[e].viewport,m[e][rt]?N+=(N!=""?",":"")+"width="+m[e][rt]:m[e].lockViewport&&(N+=(N!=""?",":"")+"width=device-width"),m[e].lockViewport&&(N+=(N!=""?",":"")+"initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0"),N!=""&&(x="mV"+Ut[s],(S=Ut[i](x))||(S=Ut[f](x,Ut.newMeta("viewport",N),et,4)),m[r][V](S)),Ut[b][ft]>=10&&(x="mVIE"+Ut[s],(S=Ut[i](x))||(S=Ut[f](x,Ut[w]("@-ms-viewport{width: device-width}"),et,3)),m[r][V](S));
    var O,M;
    E=Ut[G](m[e][L]),O=E[0],M=E[1],m.values[L]=O+M,x="iC"+m.values[L];
    if(!(S=Ut[i](x))){
        var D,j,F;
        D=O*.75+M,j=O+M,F=O*1.25+M,S=Ut[f](x,Ut[w]("body{min-width:"+j+P+".container{margin-left:auto;margin-right:auto;width:"+j+P+".container.small{width:"+D+P+".container.big{width:100%;max-width:"+F+";min-width:"+j+P),k,3)
        }
        m[r][V](S),x="iG",(S=Ut[i](x))||(S=Ut[f](x,Ut[w](".\\31 2u{width:100%}.\\31 1u{width:91.6666666667%}.\\31 0u{width:83.3333333333%}.\\39 u{width:75%}.\\38 u{width:66.6666666667%}.\\37 u{width:58.3333333333%}.\\36 u{width:50%}.\\35 u{width:41.6666666667%}.\\34 u{width:33.3333333333%}.\\33 u{width:25%}.\\32 u{width:16.6666666667%}.\\31 u{width:8.3333333333%}.\\-11u{margin-left:91.6666666667%}.\\-10u{margin-left:83.3333333333%}.\\-9u{margin-left:75%}.\\-8u{margin-left:66.6666666667%}.\\-7u{margin-left:58.3333333333%}.\\-6u{margin-left:50%}.\\-5u{margin-left:41.6666666667%}.\\-4u{margin-left:33.3333333333%}.\\-3u{margin-left:25%}.\\-2u{margin-left:16.6666666667%}.\\-1u{margin-left:8.3333333333%}"),k,3)),m[r][V](S),x="iGR",(S=Ut[i](x))||(S=Ut[f](x,Ut[w](".row>*{float:left}.row:after{content:'';display:block;clear:both;height:0}.row:first-child>*{padding-top:0!important}"),k,3)),m[r][V](S),x="iGG"+m[e].grid[At];
    if(!(S=Ut[i](x))){
        var R,z,$,J,Y,Z,nt;
        E=Ut[G](m[e].grid[At]),R=E[0],z=E[1],$=R+z,J=R/2+z,Y=R/4+z,Z=R*1.5+z,nt=R*2+z,S=Ut[f]("iGG"+m[e].grid[At],Ut[w](".row>*{padding-left:"+$+P+".row+.row>*{padding:"+$+B+$+P+".row{margin-left:-"+$+P+".row.flush>*{padding-left:0}"+".row+.row.flush>*{padding:0}"+".row.flush{margin-left:0}"+".row.half>*{padding-left:"+J+P+".row+.row.half>*{padding:"+J+B+J+P+".row.half{margin-left:-"+J+P+".row.quarter>*{padding-left:"+Y+P+".row+.row.quarter>*{padding:"+Y+B+Y+P+".row.quarter{margin-left:-"+Y+P+".row.oneandhalf>*{padding-left:"+Z+P+".row+.row.oneandhalf>*{padding:"+Z+B+Z+P+".row.oneandhalf{margin-left:-"+Z+P+".row.double>*{padding-left:"+nt+P+".row+.row.double>*{padding:"+nt+B+nt+P+".row.double{margin-left:-"+nt+P),k,3)
        }
        m[r][V](S);
    if(m[e].grid[It]){
        var it=Ut.getLevel(m[e].grid[It]);
        x="iGC"+it+"-"+m.values[L];
        if(!(S=Ut[i](x))){
            N=":not(.no-collapse)";
            switch(it){
                case 4:
                    break;
                case 3:
                    N+=":not(.no-collapse-3)";
                    break;
                case 2:
                    N+=":not(.no-collapse-2):not(.no-collapse-3)";
                    break;
                case 1:default:
                    N+=":not(.no-collapse-1):not(.no-collapse-2):not(.no-collapse-3)"
                    }
                    E=Ut[G](m[e].grid[At]),A=E[0]+E[1],S=Ut[f](x,Ut[w](".row>*{padding-left:"+A+C+P+".row>*:first-child{"+Q+P+".row+.row>*{"+Pt+A+B+A+C+P+".row{"+"margin-left:-"+A+C+P+yt+N+">*{"+"float:none!important;"+"width:100%!important;"+"margin-left:0!important"+P+".row:not(.flush)"+N+":first-child>*{"+mt+A+C+P+yt+N+":first-child>:first-child {"+Q+P+yt+N+">*{"+mt+A+P+yt+N+">*:first-child{"+"padding-top:0"+P+".row+.row"+N+">*{"+Pt+A+B+A+P+".row.flush>*{"+"padding:0!important"+P+".row.flush{"+"margin-left:0px!important"+P+".container{"+"max-width:none!important;"+"min-width:0!important;"+"width:"+m[e][L]+C+P),k,3)
            }
            m[r][V](S)
        }
        x="iCd"+Ut[s];
    if(!(S=Ut[i](x))){
        N=[],A=[],Ut[n](Ut[t],function(e){
            Ut[I](h,e)!==-1?N[V](".not-"+e):A[V](".only-"+e)
            });
        var st=(N[c]>0?N.join(",")+K:"")+(A[c]>0?A.join(",")+K:"");
        S=Ut[f](x,Ut[w](st[q](/\.([0-9])/,Ft)),k,3),m[r][V](S)
        }
        Ut[n](h,function(s){
        Ut[t][h[s]][e][xt]&&(x="ss"+h[s],(S=Ut[i](x))||(S=Ut[f](x,Ut.newStyleSheet(Ut[t][h[s]][e][xt]),k,5)),m[r][V](S)),Ut[t][h[s]][r][c]>0&&Ut[n](Ut[t][h[s]][r],function(e){
            m[r][V](Ut[t][h[s]][r][e])
            })
        }),Ut[T][a][Ut[s]]&&(Ut[n](Ut[T][a][Ut[s]],function(e){
        m[r][V](Ut[T][a][Ut[s]][e])
        }),Ut[T][a][Ut[s]]=[])
    }else m=Ut[T][ct][Ut[s]];
Ut.detachAllElements(m[r]),Ut[Ot](m[r]),Ut[X](function(){
    var t,r,i,s=Ut.getLevel(m[e].grid[It]);
    Ut[e].RTL&&(Ut.unreverseRows(),s>0&&Ut.reverseRows(s)),Ut[b][ft]>8&&(r="_skel_cell_important_placeholder",t=Ut[o]("skel-cell-important"),t&&t[c]>0&&Ut[n](t,function(e){
        if(e===c)return;
        var n=t[e],i=n[d],o;
        if(!i)return;
        i[_][g](/no-collapse-([0-9])/)?o=parseInt(RegExp.$1):i[_][g](/no-collapse/)?o=100:o=0;
        if(o<s){
            if(n[tt](r)&&n[r]!==u)return;
            i=n[Ct];
            while(i&&i.nodeName=="#text")i=i[Ct];
            if(!i)return;
            n[d][y](n,n[d][Et]),n[r]=i
            }else n[tt](r)||(n[r]=u),i=n[r],i!==u&&(n[d][y](n,i.nextSibling),n[r]=u)
            }))
    }),Ut[b].state=Ut[T][ct][Ut[s]],Ut[b][s]=Ut[s],Ut.trigger(wt)
},
newMeta:function(e,t){
    var n=document[A]("meta");
    return n.name=e,n.content=t,n
    },
newStyleSheet:function(e){
    var t=document[A]("link");
    return t.rel="stylesheet",t.type=Mt,t[xt]=e,t
    },
newInline:function(e){
    var t;
    return Ut[b][ft]<=8?(t=document[A]("span"),t[Lt]='&nbsp;<style type="text/css">'+e+"</style>"):(t=document[A]("style"),t.type=Mt,t[Lt]=e),t
    },
newDiv:function(e){
    var t=document[A]("div");
    return t[Lt]=e,t
    },
registerPlugin:function(e,t){
    if(!t)return u;
    Ut.plugins[e]=t,t._=this
    },
initPlugin:function(t,n){
    typeof n==x&&Ut[H](t[e],n),t.init()
    },
initConfig:function(i){
    function a(e,t){
        var n;
        return typeof t!=ot&&(n=function(e){
            return u
            }),t=="*"?n=function(e){
            return F
            }:t.charAt(0)=="-"?(s[e]=parseInt(t[U](1)),n=function(t){
            return t<=s[e]
            }):t.charAt(t[c]-1)=="-"?(s[e]=parseInt(t[U](0,t[c]-1)),n=function(t){
            return t>=s[e]
            }):Ut[I](t,"-")!=-1?(t=t[jt]("-"),s[e]=[parseInt(t[0]),parseInt(t[1])],n=function(t){
            return t>=s[e][0]&&t<=s[e][1]
            }):(s[e]=parseInt(t),n=function(t){
            return t==s[e]
            }),n
        }
        var s=[],o=[];
    typeof i==x&&(i[t]&&(Ut[e][t]={}),Ut[H](Ut[e],i)),Ut[H](Ut[W][p].grid,Ut[e].grid),Ut[W][p][L]=Ut[e][L],Ut[n](Ut[e][t],function(n){
        var i,s={};

        Ut[H](s,Ut[e][t][n]),xt in s||(s[xt]=Ut[W][p][xt]),m in s||(s[m]=Ut[W][p][m]),"range"in s?s[S]=s.range:S in s||(s[S]=Ut[W][p][S]),Ut[e][t][n]=s,i={},Ut[H](i,Ut[W].breakpoint),i[e]=Ut[e][t][n],i.test={
            width:a(n+"w",i[e][S]),
            height:a(n+"h",i[e][m])
            },i[r]=[],Ut[e].prefix&&i[e][xt]!==u&&(i[e][xt]=Ut[e].prefix+"-"+n+".css"),i[e][xt]===""&&(i[e][xt]=u),Ut[e].preload&&i[e][xt]&&o[V](i[e][xt]),Ut[t][n]=i,Ut.breakpointList[V](n)
        }),Ut[n](Ut[e][Z],function(t){
        Ut.bind(t,Ut[e][Z][t])
        }),o[c]>0&&window[M].protocol!="file:"&&Ut[X](function(){
        var e,t=document[h](k)[0],r=new XMLHttpRequest;
        Ut[n](o,function(e){
            r.open("GET",o[e],u),r.send("")
            })
        })
    },
initEvents:function(){
    var t;
    Ut[e].pollOnce||(Ut.bind(gt,function(){
        Ut.poll()
        }),Ut[e][pt]||Ut.bind(E,function(){
        Ut.poll()
        })),Ut[b][l]==ht&&Ut[X](function(){
        Ut.bind(E,function(){
            var e=document[h]("input");
            Ut[n](e,function(t){
                e[t][St]=e[t][dt],e[t][dt]=""
                }),window.setTimeout(function(){
                Ut[n](e,function(t){
                    e[t][dt]=e[t][St]
                    })
                },100)
            })
        }),window[Bt]&&Ut.bind(gt,window[Bt]),window[Bt]=function(){
        Ut.trigger(gt)
        },window[j]&&Ut.bind(E,window[j]),window[j]=function(){
        Ut.trigger(E)
        }
    },
initUtilityMethods:function(){
    document[$]?!function(e,t){
        Ut[X]=t()
        }(Dt,function(){
        function e(e){
            s=1;
            while(e=t.shift())e()
                }
                var t=[],n,r=document,i=it,s=/^loaded|^c/.test(r[Ht]);
        return r[$](i,n=function(){
            r[vt](i,n),e()
            }),function(e){
            s?e():t[V](e)
            }
        }):!function(e,t){
    Ut[X]=t()
    }(Dt,function(e){
    function t(e){
        p=1;
        while(e=n.shift())e()
            }
            var n=[],r,i=!1,s=document,o=s[J],u=o.doScroll,a=it,f=$,l="onreadystatechange",c=Ht,h=u?/^loaded|^c/:/^loaded|c/,p=h.test(s[c]);
    return s[f]&&s[f](a,r=function(){
        s[vt](a,r,i),t()
        },i),u&&s.attachEvent(l,r=function(){
        /^c/.test(s[c])&&(s.detachEvent(l,r),t())
        }),e=u?function(t){
        self!=top?p?t():n[V](t):function(){
            try{
                o.doScroll("left")
                }catch(n){
                return setTimeout(function(){
                    e(t)
                    },50)
                }
                t()
            }()
        }:function(e){
        p?e():n[V](e)
        }
    }),document[o]?Ut[o]=function(e){
    return document[o](e)
    }:Ut[o]=function(e){
    var t=document;
    return t[Tt]?t[Tt](("."+e[q](" "," ."))[q](/\.([0-9])/,Ft)):[]
    },Array[kt][I]?Ut[I]=function(e,t){
    return e[I](t)
    }:Ut[I]=function(e,t){
    if(typeof e==ot)return e[I](t);
    var n,r=t?t:0,i;
    if(!this)throw new TypeError;
    i=this[c];
    if(i===0||r>=i)return-1;
    r<0&&(r=i-Math.abs(r));
    for(n=r;n<i;n++)if(this[n]===e)return n;return-1
    },Array[R]?Ut[R]=function(e){
    return Array[R](e)
    }:Ut[R]=function(e){
    return Object[kt].toString.call(e)==="[object Array]"
    },Object.keys?Ut[n]=function(e,t){
    if(!e)return[];
    var n,r=Object.keys(e);
    for(n=0;r[n];n++)t(r[n])
        }:Ut[n]=function(e,t){
    if(!e)return[];
    var n;
    for(n in e)Object[kt][tt].call(e,n)&&t(n)
        }
    },
initAPI:function(){
    var e,t,r=navigator.userAgent;
    Ut[b][ft]=r[g](/MSIE ([0-9]+)\./)?RegExp.$1:99,e="other",r[g](/Firefox/)?e="firefox":r[g](/Chrome/)?e="chrome":r[g](/Safari/)&&!r[g](/Chrome/)?e="safari":r[g](/(OPR|Opera)/)?e="opera":r[g](/MSIE/)&&(e="ie"),Ut[b].browser=e,Ut[b][l]="other",t={
        ios:"(iPad|iPhone|iPod)",
        android:"Android",
        mac:"Macintosh",
        wp:"Windows Phone",
        windows:"Windows NT"
    },Ut[n](t,function(e){
        r[g](new RegExp(t[e],"g"))&&(Ut[b][l]=e)
        });
    switch(Ut[b][l]){
        case ht:
            r[g](/([0-9_]+) like Mac OS X/),e=parseFloat(RegExp.$1[q]("_",".")[q]("_",""));
            break;
        case nt:
            r[g](/Android ([0-9\.]+)/),e=parseFloat(RegExp.$1);
            break;
        case"mac":
            r[g](/Mac OS X ([0-9_]+)/),e=parseFloat(RegExp.$1[q]("_",".")[q]("_",""));
            break;
        case"wp":
            r[g](/IEMobile\/([0-9\.]+)/),e=parseFloat(RegExp.$1);
            break;
        case Nt:
            r[g](/Windows NT ([0-9\.]+)/),e=parseFloat(RegExp.$1);
            break;
        default:
            e=99
            }
            Ut[b].deviceVersion=e,Ut[b].isTouch=Ut[b][l]=="wp"?navigator.msMaxTouchPoints>0:"ontouchstart"in window,Ut[b].isMobile=Ut[b][l]=="wp"||Ut[b][l]==nt||Ut[b][l]==ht,e=document.cookie[jt](";"),e=e.concat(window[M].search[U](1)[jt]("&")),Ut[n](e,function(t){
        var n=e[t][jt]("=");
        if(n[0][q](/^\s+|\s+$/g,"")==Ut.lsc){
            Ut[N]=n[1];
            return
        }
    })
},
init:function(e,t){
    Ut.initUtilityMethods(),Ut.initAPI(),Ut.initConfig(e),Ut[Y](_t,document[h](_t)[0]),Ut[Y](k,document[h](k)[0]),Ut[X](function(){
        Ut[Y]("body",document[h]("body")[0])
        }),Ut.initEvents(),Ut.poll(),Ut[n](Ut.plugins,function(e){
        Ut.initPlugin(Ut.plugins[e],typeof t==x&&e in t?t[e]:v)
        }),Ut.isInit=F
    }
},zt=document[h]("script");
return Ut.me=zt[zt[c]-1],Ut
}();

