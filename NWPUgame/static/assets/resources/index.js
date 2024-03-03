System.register("chunks:///_virtual/light_body.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,r,i,n,a,c,l,p;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,r=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){n=t.cclegacy,a=t._decorator,c=t.Material,l=t.Sprite,p=t.Component}],execute:function(){var u,s,y,h,d;n._RF.push({},"e2ae4No0X9JRJ2Y2ac99ypq","light_body",void 0);var f=a.ccclass,g=a.property,_=a.executeInEditMode;t("LightBody",(u=f("LightBody"),s=g(c),u(y=_((d=e((h=function(t){function e(){for(var e,o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return e=t.call.apply(t,[this].concat(n))||this,r(e,"mat_copy",d,i(e)),e}return o(e,t),e.prototype.onLoad=function(){var t=new c;t.copy(this.mat_copy),this.getComponent(l).customMaterial=t},e}(p)).prototype,"mat_copy",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=h))||y)||y));n._RF.pop()}}}));

System.register("chunks:///_virtual/light.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,r,i,n,o,a,l,u,s,c,p,f;return{setters:[function(t){e=t.applyDecoratedDescriptor,r=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){o=t.cclegacy,a=t._decorator,l=t.Node,u=t.Camera,s=t.Material,c=t.Sprite,p=t.Vec4,f=t.Component}],execute:function(){var d,h,y,b,g,m,v,w,_,z,L,M,B;o._RF.push({},"9be95hwT2pMUJKpQ1doJQ+r","light",void 0);var P=a.ccclass,x=a.property,C=a.executeInEditMode;t("Light",(d=P("Light"),h=x([l]),y=x([l]),b=x(u),g=x(s),m=x(s),d(v=C((_=e((w=function(t){function e(){for(var e,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o))||this,i(e,"bodys_normal",_,n(e)),i(e,"bodys",z,n(e)),i(e,"cam",L,n(e)),i(e,"eff",M,n(e)),i(e,"eff_normal",B,n(e)),e}r(e,t);var o=e.prototype;return o.onLoad=function(){},o.start=function(){this.updateLight()},o.update=function(){this.updateLight()},o.getwpos=function(t){return t.worldPosition},o.updateBody=function(t,e){t.getComponent(c).getSharedMaterial(0).setProperty("light_worldpos",new p(e.x,e.y,e.z,1))},o.updateLight=function(){var t=this.getwpos(this.node);for(var e in this.bodys_normal){var r=this.bodys_normal[e];if(null==r)return;this.updateBody(r,t)}for(var e in this.bodys){var i=this.bodys[e];if(null==i)return;this.updateBody(i,t)}},e}(f)).prototype,"bodys_normal",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),z=e(w.prototype,"bodys",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),L=e(w.prototype,"cam",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=e(w.prototype,"eff",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=e(w.prototype,"eff_normal",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=w))||v)||v));o._RF.pop()}}}));

System.register("chunks:///_virtual/resources",["./light.ts","./light_body.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});