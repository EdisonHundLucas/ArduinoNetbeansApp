/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/* skel-layers.js vx.x | (c) n33 | n33.co | MIT licensed */
skel.registerPlugin("layers",function(e){
    function an(e,r,i){
        var o,u;
        this.id=e,this.index=i,this[n]={
            breakpoints:A,
            states:A,
            position:A,
            side:A,
            animation:mt,
            orientation:mt,
            width:0,
            height:0,
            zIndex:this.index,
            html:"",
            hidden:P,
            exclusive:kt,
            resetScroll:kt,
            resetForms:kt,
            swipeToClose:kt,
            clickToClose:P
        },t._.extend(this[n],r),this[z]=t._.newDiv(this[n].html),this[z].id=e,this[z]._layer=this,this[s]=A,this[rt]=A,this[nt]=A,this[Xt]=P,u=t._.cacheElement(this.id,this[z],Y,1),u.onAttach=function(){
            var e=this.object._layer;
            e[et]()||e.init(),e.resume()
            },u.onDetach=function(){
            var e=this.object._layer;
            e.suspend()
            },this[n].states?(o=t._[sn](this[n].states),t._[qt](o,function(e){
            t._.addCachedElementToState(t._.sd+o[e],u)
            })):(this[n].breakpoints?o=t._[sn](this[n].breakpoints):o=t._.breakpointList,t._[qt](o,function(e){
            t._.addCachedElementToBreakpoint(o[e],u)
            }))
        }
        var t,n="config",r="_skel_layers_translateOrigin",i="cache",s="$element",o="_skel_layers_translate",u="_skel_layers_resetForms",f="_skel_layers_resume",l="_skel_layers_promote",c="activeWrapper",h="exclusiveLayer",p="moveToInactiveWrapper",d="_skel_layers_demote",v="moveToActiveWrapper",m="setTimeout",g="right",y="bottom",b="useActive",w="scrollTop",E="deactivate",S="width",x="css",T="center",N="_skel_layers_suspend",C="position",k="prototype",L="left",A=null,O="wrapper",M="skel-layers-layer-z-index",_="children",D="_skel_layers_init",P=!1,H="inactiveWrapper",B="length",j="top",F="deviceType",I="height",q="touchstart.lock click.lock scroll.lock",R="window",U="transform",z="element",W="stopPropagation",X="resetForms",V="overflow-x",$="preventDefault",J="recalcW",K="-webkit-",Q="padding-bottom",G="skel-layers-exclusiveActive",Y="skel_layers_inactiveWrapper",Z="originalEvent",et="isInitialized",tt="animation",nt="touchPosY",rt="touchPosX",it="-webkit-tap-highlight-color",st="skel-layers-layer-index",ot="z-index",ut="skel-layers-layer-position",at="animations",ft="unlockView",lt='<div id="skel-layers-tmp-',ct="_skel_layers_initializeCell",ht="hidden",pt="registerLocation",dt="resize.lock scroll.lock",vt="activate",mt="none",gt="orientationchange.lock",yt="positions",bt="speed",wt="find",Et="-moz-",St="_skel_layers_expandCell",xt="attr",Tt="_skel_layers_hasParent",Nt="append",Ct="layers",kt=!0,Lt="isTouch",At="lockView",Ot="-ms-",Mt="DOMReady",_t="#skel-layers-tmp-",Dt="_skel_layers_scrollPos",Pt="auto",Ht="_skel_layers_xcss",Bt="-o-",jt="transformBreakpoints",Ft="visible",It="rgba(0,0,0,0)",qt="iterate",Rt="cell-size",Ut="appendTo",zt="vars",Wt="body",Xt="active",Vt="px",$t="click",Jt="-",Kt="touches",Qt="recalcH",Gt="overflow-",Yt="side",Zt="isVisible",en="relative",tn="transformTest",nn="addClass",rn="android",sn="getArray",on="#",un="*";
    return typeof e=="undefined"?P:(e.fn[Tt]=function(){
        return e(this).parents()[B]>0
        },e.fn[l]=function(r){
        var i,s,o;
        if(this[B]>1){
            for(i=0;i<this[B];i++)e(this[i])[l](r);
            return e(this)
            }
            return s=e(this),isNaN(o=parseInt(s.data(st)))&&(o=0),s.data(M,s[x](ot))[x](ot,t[n].baseZIndex+o+(r?r:1)),s
        },e.fn[d]=function(){
        var t,n;
        if(this[B]>1){
            for(t=0;t<this[B];t++)e(this[t])[d]();
            return e(this)
            }
            return n=e(this),n[x](ot,n.data(M)).data(M,""),n
        },e.fn._skel_layers_xcssValue=function(t,n){
        return e(this)[x](t,n)[x](t,Et+n)[x](t,K+n)[x](t,Bt+n)[x](t,Ot+n)
        },e.fn._skel_layers_xcssProperty=function(t,n){
        return e(this)[x](t,n)[x](Et+t,n)[x](K+t,n)[x](Bt+t,n)[x](Ot+t,n)
        },e.fn[Ht]=function(t,n){
        return e(this)[x](t,n)[x](Et+t,Et+n)[x](K+t,K+n)[x](Bt+t,Bt+n)[x](Ot+t,Ot+n)
        },e.fn[u]=function(){
        var t=e(this);
        return e(this)[wt]("form").each(function(){
            this.reset()
            }),t
        },e.fn[ct]=function(){
        var t=e(this);
        t[xt]("class").match(/(\s+|^)([0-9]+)u(\s+|$)/)&&t.data(Rt,parseInt(RegExp.$2))
        },e.fn[St]=function(){
        var t=e(this),n=t.parent(),r=12;
        n[_]().each(function(){
            var t=e(this),n=t[xt]("class");
            n&&n.match(/(\s+|^)([0-9]+)u(\s+|$)/)&&(r-=parseInt(RegExp.$2))
            }),r>0&&(t[ct](),t[x](S,(t.data(Rt)+r)/12*100+"%"))
        },an[k][yt]={
        "top-left":{
            v:j,
            h:L,
            side:L
        },
        "top-right":{
            v:j,
            h:g,
            side:g
        },
        top:{
            v:j,
            h:T,
            side:j
        },
        "top-center":{
            v:j,
            h:T,
            side:j
        },
        "bottom-left":{
            v:y,
            h:L,
            side:L
        },
        "bottom-right":{
            v:y,
            h:g,
            side:g
        },
        bottom:{
            v:y,
            h:T,
            side:y
        },
        "bottom-center":{
            v:y,
            h:T,
            side:y
        },
        left:{
            v:T,
            h:L,
            side:L
        },
        "center-left":{
            v:T,
            h:L,
            side:L
        },
        right:{
            v:T,
            h:g,
            side:g
        },
        "center-right":{
            v:T,
            h:g,
            side:g
        }
    },an[k][at]={
        none:{
            activate:function(e){
                var t=e[n],r=e[s];
                r[w](0)[l](t.zIndex).show(),t[X]&&r[u](),e[v]()
                },
            deactivate:function(e){
                var t=e[n],r=e[s];
                r.hide()[d](),e[p]()
                }
            },
    overlayX:{
        activate:function(e){
            var r=e[n],i=e[s];
            i[w](0)[l](r.zIndex)[x](r[Yt],Jt+t[J](t._[b](r[S]))+Vt).show(),r[X]&&i[u](),t[At]("x"),e[v](),window[m](function(){
                i[o]((r[Yt]==g?Jt:"")+t[J](t._[b](r[S])),0)
                },50)
            },
        deactivate:function(e){
            var i=e[n],o=e[s];
            o[wt](un).blur(),o[r](),window[m](function(){
                t[ft]("x"),e[p](),o[d]().hide()
                },t[n][bt]+50)
            }
        },
overlayY:{
    activate:function(e){
        var r=e[n],i=e[s];
        i[w](0)[l](r.zIndex)[x](r[Yt],Jt+t[J](t._[b](r[I]))+Vt).show(),r[X]&&i[u](),t[At]("y"),e[v](),window[m](function(){
            i[o](0,(r[Yt]==y?Jt:"")+t[J](t._[b](r[I])))
            },50)
        },
    deactivate:function(e){
        var i=e[n],o=e[s];
        o[wt](un).blur(),o[r](),window[m](function(){
            t[ft]("y"),e[p](),o[d]().hide()
            },t[n][bt]+50)
        }
    },
pushX:{
    activate:function(e){
        var r=e[n],a=e[s],f=t[i][O].add(t[i][c][_]());
        a[w](0)[x](r[Yt],Jt+t[J](t._[b](r[S]))+Vt).show(),r[X]&&a[u](),f[l](),t[At]("x"),e[v](),window[m](function(){
            a.add(f)[o]((r[Yt]==g?Jt:"")+t[J](t._[b](r[S])),0)
            },50)
        },
    deactivate:function(e){
        var o=e[n],u=e[s],a=t[i][O].add(t[i][c][_]());
        u[wt](un).blur(),u.add(a)[r](),window[m](function(){
            t[ft]("x"),u.hide(),e[p](),a[d]()
            },t[n][bt]+50)
        }
    },
pushY:{
    activate:function(e){
        var r=e[n],a=e[s],f=t[i][O].add(t[i][c][_]());
        a[w](0)[x](r[Yt],Jt+t[Qt](t._[b](r[I]))+Vt).show(),r[X]&&a[u](),t[At]("y"),e[v](),window[m](function(){
            a.add(f)[o](0,(r[Yt]==y?Jt:"")+t[Qt](t._[b](r[I])))
            },50)
        },
    deactivate:function(e){
        var o=e[n],u=e[s],a=t[i][O].add(t[i][c][_]());
        u[wt](un).blur(),u.add(a)[r](),window[m](function(){
            t[ft]("y"),u.hide(),e[p]()
            },t[n][bt]+50)
        }
    },
revealX:{
    activate:function(e){
        var r=e[n],a=e[s],f=t[i][O].add(t[i][c][_]());
        a[w](0).show(),r[X]&&a[u](),f[l](),t[At]("x"),e[v](),window[m](function(){
            f[o]((r[Yt]==g?Jt:"")+t[J](t._[b](r[S])),0)
            },50)
        },
    deactivate:function(e){
        var o=e[n],u=e[s],a=t[i][O].add(t[i][c][_]());
        u[wt](un).blur(),a[r](),window[m](function(){
            t[ft]("x"),u.hide(),a[d](),e[p]()
            },t[n][bt]+50)
        }
    }
},an[k][v]=function(){
    t[i][c][Nt](this[s])
    },an[k][p]=function(){
    if(!this[s][Tt]())return;
    t[i][H][Nt](this[s])
    },an[k][E]=function(){
    var e,r;
    if(!this[Xt]){
        t[i][H][Nt](this[z]);
        return
    }
    e=this[n],r=t._[b](e[tt]),r in this[at]||(r=mt),this[at][r][E](this),e[ht]&&e.exclusive&&t[i][h]===this&&(t[i][Wt].removeClass(G),t[i][h]=A),this[Xt]=P
    },an[k][vt]=function(){
    var e,r,o,u;
    if(this[Xt]){
        t[i][c][Nt](this[z]);
        return
    }
    e=this[n],r=t._[b](e[tt]),o=this[s],o[x](S,t._[b](e[S]))[x](I,t._[b](e[I])),t._[zt][F]=="ios"&&e[I]=="100%"&&!e[ht]&&o[x](I,"-webkit-calc("+t._[b](e[I])+" + 70px)"),u=this[yt][e[C]],o[nn]("skel-layer-"+e[C]).data(ut,e[C]);
    switch(u.v){
        case j:
            o[x](j,0);
            break;
        case y:
            o[x](y,0);
            break;
        case T:
            o[x](j,"50%")[x]("margin-top",Jt+t.getHalf(e[I]))
            }
            switch(u.h){
        case L:
            o[x](L,0);
            break;
        case g:
            o[x](g,0);
            break;
        case T:
            o[x](L,"50%")[x]("margin-left",Jt+t.getHalf(e[S]))
            }
            this[at][r][vt](this),e[ht]&&e.exclusive&&(t[i][Wt][nn](G),t[i][h]=this),this[Xt]=kt
    },an[k][et]=function(){
    return this[s]!==A
    },an[k][Zt]=function(){
    return this[s].is(":visible")
    },an[k].resume=function(r){
    if(!this[et]())return;
    this[s][wt](un).each(function(){
        t.parseResume(e(this))
        }),this[n][ht]||this[vt](r)
    },an[k].suspend=function(){
    if(!this[et]())return;
    this[s][r](),this[s][wt](un).each(function(){
        t.parseSuspend(e(this))
        }),this[Xt]&&this[E]()
    },an[k].init=function(){
    var r=this[n],o=e(this[z]),u=this;
    o[D](),o[wt](un).each(function(){
        t.parseInit(e(this))
        }),o[nn]("skel-layer").data(st,this.index)[x](ot,t[n].baseZIndex)[x](C,"fixed")[x]("-ms-overflow-style","-ms-autohiding-scrollbar")[x]("-webkit-overflow-scrolling","touch").hide();
    switch(r.orientation){
        case"vertical":
            o[x]("overflow-y",Pt);
            break;
        case"horizontal":
            o[x](V,Pt);
            break;
        case mt:default:
    }
    if(!r[C]||!(r[C]in this[yt]))r[C]="top-left";
    r[Yt]||(r[Yt]=this[yt][r[C]][Yt]);
    if(!r[tt]||typeof r[tt]!="object"&&!(r[tt]in this[at]))r[tt]=mt;
    r.clickToClose&&o[wt]("a")[x](it,It).on("click.skel-layers",function(r){
        var i,s,o=e(this);
        if(o.hasClass("skel-layers-ignore"))return;
        r[$](),r[W](),u[E]();
        if(o.hasClass("skel-layers-ignoreHref"))return;
        i=o[xt]("href"),s=o[xt]("target"),window[m](function(){
            s=="_blank"&&t._[zt][F]!="wp"?window.open(i):window.location.href=i
            },t[n][bt]+10)
        }),t._[zt][F]=="ios"&&o[wt]("input,select,textarea").on("focus",function(n){
        var r=e(this);
        n[$](),n[W](),window[m](function(){
            var e=t[i][R][Dt],n=t[i][R][w]()-e;
            t[i][R][w](e),o[w](o[w]()+n),r.hide(),window[m](function(){
                r.show()
                },0)
            },100)
        }),t._[zt][Lt]&&o.on("touchstart",function(e){
        u[rt]=e[Z][Kt][0].pageX,u[nt]=e[Z][Kt][0].pageY
        }).on("touchmove",function(e){
        var t,n,i,s,a,f,l;
        if(u[rt]===A||u[nt]===A)return;
        t=u[rt]-e[Z][Kt][0].pageX,n=u[nt]-e[Z][Kt][0].pageY,i=o.outerHeight(),s=o.get(0).scrollHeight-o[w]();
        if(r.swipeToClose){
            a=P,f=20,l=50;
            switch(r[Yt]){
                case L:
                    a=n<f&&n>-1*f&&t>l;
                    break;
                case g:
                    a=n<f&&n>-1*f&&t<-1*l;
                    break;
                case j:
                    a=t<f&&t>-1*f&&n>l;
                    break;
                case y:
                    a=t<f&&t>-1*f&&n<-1*l
                    }
                    if(a)return u[rt]=A,u[nt]=A,u[E](),P
                }
                if(o[w]()==0&&n<0||s>i-2&&s<i+2&&n>0)return P
            }),this[s]=o
    },t={
    config:{
        baseZIndex:1e4,
        transform:kt,
        transformBreakpoints:A,
        transformTest:A,
        speed:250,
        layers:{}
},
cache:{
    layers:{},
    body:A,
    window:A,
    wrapper:A,
    inactiveWrapper:A,
    activeWrapper:A,
    exclusiveLayer:A
},
eventType:$t,
getBaseFontSize:function(){
    return t._[zt].IEVersion<9?16.5:parseFloat(getComputedStyle(t[i][Wt].get(0)).fontSize)
    },
recalc:function(e,n){
    var r=t._.parseMeasurement(e),i;
    switch(r[1]){
        case"%":
            i=Math.floor(n*(r[0]/100));
            break;
        case"em":
            i=t.getBaseFontSize()*r[0];
            break;default:case Vt:
            i=r[0]
            }
            return i
    },
recalcW:function(n){
    return t.recalc(n,e(window)[S]())
    },
recalcH:function(n){
    return t.recalc(n,e(window)[I]())
    },
getHalf:function(e){
    var t=parseInt(e);
    return typeof e=="string"&&e.charAt(e[B]-1)=="%"?Math.floor(t/2)+"%":Math.floor(t/2)+Vt
    },
parseSuspend:function(e){
    var t=e.get(0);
    t[N]&&t[N]()
    },
parseResume:function(e){
    var t=e.get(0);
    t[f]&&t[f]()
    },
parseInit:function(n){
    var r,s,o=n.get(0),u=n[xt]("data-action"),a=n[xt]("data-args"),l,c;
    u&&a&&(a=a.split(","));
    switch(u){
        case"toggleLayer":case"layerToggle":
            n[x](it,It)[x]("cursor","pointer"),r=function(n){
            n[$](),n[W]();
            if(t[i][h])return t[i][h][E](),P;
            var r=e(this),s=t[i][Ct][a[0]];
            s[Zt]()?s[E]():s[vt]()
            },t._[zt][F]==rn||t._[zt][F]=="wp"?n.on($t,r):n.on(t.eventType,r);
            break;
        case"navList":
            l=e(on+a[0]),r=l[wt]("a"),s=[],r.each(function(){
            var t=e(this),n;
            n=Math.max(0,t.parents("li")[B]-1),s.push('<a class="link depth-'+n+'" href="'+t[xt]("href")+'"><span class="indent-'+n+'"></span>'+t.text()+"</a>")
            }),s[B]>0&&n.html("<nav>"+s.join("")+"</nav>");
            break;
        case"copyText":
            l=e(on+a[0]),n.html(l.text());
            break;
        case"copyHTML":
            l=e(on+a[0]),n.html(l.html());
            break;
        case"moveElementContents":
            l=e(on+a[0]),o[f]=function(){
            l[_]().each(function(){
                n[Nt](e(this))
                })
            },o[N]=function(){
            n[_]().each(function(){
                l[Nt](e(this))
                })
            },o[f]();
            break;
        case"moveElement":
            l=e(on+a[0]),o[f]=function(){
            e(lt+l[xt]("id")+'" />').insertBefore(l),n[Nt](l)
            },o[N]=function(){
            e(_t+l[xt]("id")).replaceWith(l)
            },o[f]();
            break;
        case"moveCell":
            l=e(on+a[0]),c=e(on+a[1]),o[f]=function(){
            e(lt+l[xt]("id")+'" />').insertBefore(l),n[Nt](l),l[x](S,Pt),c&&c[St]()
            },o[N]=function(){
            e(_t+l[xt]("id")).replaceWith(l),l[x](S,""),c&&c[x](S,"")
            },o[f]();
            break;default:
    }
},
lockView:function(e){
    t[i][R][Dt]=t[i][R][w](),t._[zt][Lt]&&t[i][Wt][x](Gt+e,ht),t[i][O].on(q,function(e){
        e[$](),e[W](),t[i][h]&&t[i][h][E]()
        }),t[i][R].on(gt,function(e){
        t[i][h]&&t[i][h][E]()
        }),t._[zt][Lt]||t[i][R].on(dt,function(e){
        t[i][h]&&t[i][h][E]()
        })
    },
unlockView:function(e){
    t._[zt][Lt]&&t[i][Wt][x](Gt+e,Ft),t[i][O].off(q),t[i][R].off(gt),t._[zt][Lt]||t[i][R].off(dt)
    },
initLayers:function(){
    var r,s,o,u=1;
    t._[qt](t[n][Ct],function(r){
        var s;
        if(!t[n][Ct][r].html&&(s=e(on+r))[B]==0)return;
        o=new an(r,t[n][Ct][r],u++),t[i][Ct][r]=o,s&&(s[_]()[Ut](o[z]),s.remove())
        })
    },
initTransforms:function(){
    if(t[n][U])e.fn[r]=function(){
        return e(this)[o](0,0)
        },e.fn[o]=function(t,n){
        return e(this)[x](U,"translate("+t+"px, "+n+"px)")
        },e.fn[D]=function(){
        return e(this)[x]("backface-visibility",ht)[x]("perspective","500")[Ht]("transition","transform "+t[n][bt]/1e3+"s ease-in-out")
        };
    else{
        var s,u=[];
        t[i][R].resize(function(){
            if(t[n][bt]!=0){
                var e=t[n][bt];
                t[n][bt]=0,window[m](function(){
                    t[n][bt]=e,u=[]
                    },e)
                }
            }),e.fn[r]=function(){
        for(var r=0;r<this[B];r++){
            var s=this[r],o=e(s);
            u[s.id]&&o.animate(u[s.id],t[n][bt],"swing",function(){
                t._[qt](u[s.id],function(e){
                    o[x](e,u[s.id][e])
                    }),t[i][Wt][x](V,Ft),t[i][O][x](S,Pt)[x](Q,0)
                })
            }
            return e(this)
        },e.fn[o]=function(r,s){
        var o,f,l,c;
        r=parseInt(r),s=parseInt(s),r!=0?(t[i][Wt][x](V,ht),t[i][O][x](S,t[i][R][S]())):l=function(){
            t[i][Wt][x](V,Ft),t[i][O][x](S,Pt)
            },s<0?t[i][O][x](Q,Math.abs(s)):c=function(){
            t[i][O][x](Q,0)
            };

        for(o=0;o<this[B];o++){
            var h=this[o],p=e(h),d;
            if(!u[h.id])if(d=an[k][yt][p.data(ut)]){
                u[h.id]={};

                switch(d.v){
                    case T:case j:
                        u[h.id][j]=parseInt(p[x](j));
                        break;
                    case y:
                        u[h.id][y]=parseInt(p[x](y))
                        }
                        switch(d.h){
                    case T:case L:
                        u[h.id][L]=parseInt(p[x](L));
                        break;
                    case g:
                        u[h.id][g]=parseInt(p[x](g))
                        }
                    }else d=p[C](),u[h.id]={
                top:d[j],
                left:d[L]
                };

        a={},t._[qt](u[h.id],function(e){
            var n;
            switch(e){
                case j:
                    n=t[Qt](u[h.id][e])+s;
                    break;
                case y:
                    n=t[Qt](u[h.id][e])-s;
                    break;
                case L:
                    n=t[J](u[h.id][e])+r;
                    break;
                case g:
                    n=t[J](u[h.id][e])-r
                    }
                    a[e]=n
            }),p.animate(a,t[n][bt],"swing",function(){
            l&&l(),c&&c()
            })
        }
        return e(this)
    },e.fn[D]=function(){
    return e(this)[x](C,"absolute")
    }
}
},
initObjects:function(){
    t[i][R]=e(window),t[i][R].load(function(){
        t[i][R][w]()==0&&window.scrollTo(0,1)
        }),t._[Mt](function(){
        t[i][Wt]=e(Wt),t[i][Wt].wrapInner('<div id="skel-layers-wrapper" />'),t[i][O]=e("#skel-layers-wrapper"),t[i][O][x](C,en)[x](L,"0")[x](g,"0")[x](j,"0")[D](),t[i][H]=e('<div id="skel-layers-inactiveWrapper" />')[Ut](t[i][Wt]),t[i][H][x](I,"100%"),t[i][c]=e('<div id="skel-layers-activeWrapper" />')[Ut](t[i][Wt]),t[i][c][x](C,en),t._[pt](Y,t[i][H][0]),t._[pt]("skel_layers_activeWrapper",t[i][c][0]),t._[pt]("skel_layers_wrapper",t[i][O][0]),e("[autofocus]").focus()
        })
    },
initIncludes:function(){
    e(".skel-layers-include").each(function(){
        t.parseInit(e(this))
        })
    },
init:function(){
    t[n][tn]&&(t[n][U]=t[n][tn]());
    if(t[n][U]){
        if(t._[zt][F]==rn&&t._[zt].deviceVersion<4||t._[zt][F]=="wp")t[n][U]=P;
        t._[zt].IEVersion<10&&(t[n][U]=P),t[n][jt]&&!t._.hasActive(t._[sn](t[n][jt]))&&(t[n][U]=P)
        }
        t.eventType=t._[zt][Lt]?"touchend":$t,t.initObjects(),t.initTransforms(),t._[Mt](function(){
        t.initLayers(),t.initIncludes(),t._.updateState(),t.refresh()
        })
    },
refresh:function(){
    e(".skel-layers-fixed")[D]()[Ut](t[i][c])
    },
activate:function(e){
    t._[Mt](function(){
        t[i][Ct][e][vt]()
        })
    },
deactivate:function(e){
    t._[Mt](function(){
        t[i][Ct][e][E]()
        })
    },
toggle:function(e){
    t._[Mt](function(){
        var n=t[i][Ct][e];
        n[Zt]()?n[E]():n[vt]()
        })
    }
},t)
}(jQuery));

