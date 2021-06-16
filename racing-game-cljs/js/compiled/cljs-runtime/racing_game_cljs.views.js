goog.provide('racing_game_cljs.views');
racing_game_cljs.views.canvas = reagent.core.adapt_react_class(shadow.js.shim.module$$react_three$fiber.Canvas);
racing_game_cljs.views.sky = reagent.core.adapt_react_class(shadow.js.shim.module$$react_three$drei.Sky);
racing_game_cljs.views.environment = reagent.core.adapt_react_class(shadow.js.shim.module$$react_three$drei.Environment);
racing_game_cljs.views.physics = reagent.core.adapt_react_class(shadow.js.shim.module$$react_three$cannon.Physics);
racing_game_cljs.views.suspense = reagent.core.adapt_react_class(shadow.js.shim.module$react.Suspense);
racing_game_cljs.views.perspective_camera = reagent.core.adapt_react_class(shadow.js.shim.module$$react_three$drei.PerspectiveCamera);
racing_game_cljs.views.plane = (function racing_game_cljs$views$plane(props){
shadow.js.shim.module$$react_three$cannon.usePlane((function (){
return cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Static",new cljs.core.Keyword(null,"material","material",460118677),"ground"], null)], 0)));
}));

return null;
});
racing_game_cljs.views.get_wheel_infos = (function racing_game_cljs$views$get_wheel_infos(p__42272){
var map__42273 = p__42272;
var map__42273__$1 = cljs.core.__destructure_map(map__42273);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42273__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258),0.7);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42273__$1,new cljs.core.Keyword(null,"width","width",-384071477),1.2);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42273__$1,new cljs.core.Keyword(null,"height","height",1025178622),-0.04);
var front = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42273__$1,new cljs.core.Keyword(null,"front","front",-1523508988),1.3);
var back = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42273__$1,new cljs.core.Keyword(null,"back","back",-417520012),-1.15);
var wheel_info = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"suspensionStiffness","suspensionStiffness",-304958430),new cljs.core.Keyword(null,"useCustomSlidingRotationalSpeed","useCustomSlidingRotationalSpeed",1565202694),new cljs.core.Keyword(null,"axleLocal","axleLocal",1486748395),new cljs.core.Keyword(null,"chassisConnectionPointLocal","chassisConnectionPointLocal",451579661),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"customSlidingRotationalSpeed","customSlidingRotationalSpeed",-1411084594),new cljs.core.Keyword(null,"frictionSlip","frictionSlip",1956207729),new cljs.core.Keyword(null,"suspensionRestLength","suspensionRestLength",17361943),new cljs.core.Keyword(null,"directionLocal","directionLocal",-1659132199)],[(30),true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null),radius,-0.1,1.5,0.3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1),(0)], null)]);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(wheel_info,new cljs.core.Keyword(null,"isFrontWheel","isFrontWheel",1956294918),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chassisConnectionPointLocal","chassisConnectionPointLocal",451579661),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- width) / (2)),height,front], null)], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(wheel_info,new cljs.core.Keyword(null,"isFrontWheel","isFrontWheel",1956294918),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chassisConnectionPointLocal","chassisConnectionPointLocal",451579661),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(width / (2)),height,front], null)], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(wheel_info,new cljs.core.Keyword(null,"isFrontWheel","isFrontWheel",1956294918),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chassisConnectionPointLocal","chassisConnectionPointLocal",451579661),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- width) / (2)),height,back], null)], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(wheel_info,new cljs.core.Keyword(null,"isFrontWheel","isFrontWheel",1956294918),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chassisConnectionPointLocal","chassisConnectionPointLocal",451579661),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(width / (2)),height,back], null)], 0))], null);
});
racing_game_cljs.views.chassis = (function racing_game_cljs$views$chassis(p__42274){
var map__42275 = p__42274;
var map__42275__$1 = cljs.core.__destructure_map(map__42275);
var props = map__42275__$1;
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42275__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42275__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var light = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42275__$1,new cljs.core.Keyword(null,"light","light",1918998747));
var _ = shadow.js.shim.module$$react_three$drei.useGLTF.preload("chassis-draco.glb");
var map__42276 = applied_science.js_interop.lookup(shadow.js.shim.module$$react_three$drei.useGLTF("chassis-draco.glb"));
var map__42276__$1 = cljs.core.__destructure_map(map__42276);
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42276__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var materials = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42276__$1,new cljs.core.Keyword(null,"materials","materials",2036902582));
var vec__42277 = shadow.js.shim.module$$react_three$cannon.useBox((function (){
return cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(props,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"angularVelocity","angularVelocity",347220951)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mass","mass",-2138950046),(500),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.7,(1),(4)], null),new cljs.core.Keyword(null,"allowSleep","allowSleep",238323338),false], null)], 0)));
}),ref);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42277,(0),null);
var api = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42277,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref,new cljs.core.Keyword(null,"api","api",-899839580),api,new cljs.core.Keyword(null,"dispose","dispose",365585368),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [racing_game_cljs.views.perspective_camera,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),camera,new cljs.core.Keyword(null,"makeDefault","makeDefault",1926743295),true,new cljs.core.Keyword(null,"fov","fov",-12463282),(75),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,Math.PI,(0)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-100),(80),(-100)], null)], null)], null),(cljs.core.truth_(cljs.core.deref(light))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"primitive","primitive",1884541424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object","object",1474613949),cljs.core.deref(light).target], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.35,0.35,2.2], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- Math.PI) / (2)),(0),(0)], null)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(Math.PI / (2)),(0),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"castShadow","castShadow",1475003551),true,new cljs.core.Keyword(null,"receiveShadow","receiveShadow",773566383),true,new cljs.core.Keyword(null,"geometry","geometry",-405034994),(function (){var obj42282 = (function (){var obj42280 = nodes;
var k42281 = "Mesh_0";
if((function (){var obj42284 = obj42280;
return (((!((obj42284 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42281,obj42284)));
})()){
return (obj42280[k42281]);
} else {
return undefined;
}
})();
var k42283 = "geometry";
if((function (){var obj42285 = obj42282;
return (((!((obj42285 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42283,obj42285)));
})()){
return (obj42282[k42283]);
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"material","material",460118677),(function (){var obj42286 = (function (){var obj42287 = materials;
var k42288 = "Material.001";
if((function (){var obj42289 = obj42287;
return (((!((obj42289 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42288,obj42289)));
})()){
return (obj42287[k42288]);
} else {
return undefined;
}
})();
var obj42290 = (((!((obj42286 == null))))?obj42286:({}));
(obj42290["color"] = ({"r": 0.7454042095350284, "g": 0.43415363616478553, "b": 0.02955683443236377}));

return obj42290;
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),(function (){var obj42295 = (function (){var obj42293 = nodes;
var k42294 = "Mesh_1";
if((function (){var obj42297 = obj42293;
return (((!((obj42297 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42294,obj42297)));
})()){
return (obj42293[k42294]);
} else {
return undefined;
}
})();
var k42296 = "geometry";
if((function (){var obj42298 = obj42295;
return (((!((obj42298 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42296,obj42298)));
})()){
return (obj42295[k42296]);
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"material","material",460118677),(function (){var obj42301 = (function (){var obj42299 = nodes;
var k42300 = "Mesh_1";
if((function (){var obj42303 = obj42299;
return (((!((obj42303 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42300,obj42303)));
})()){
return (obj42299[k42300]);
} else {
return undefined;
}
})();
var k42302 = "material";
if((function (){var obj42304 = obj42301;
return (((!((obj42304 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42302,obj42304)));
})()){
return (obj42301[k42302]);
} else {
return undefined;
}
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"castShadow","castShadow",1475003551),true,new cljs.core.Keyword(null,"geometry","geometry",-405034994),(function (){var obj42307 = (function (){var obj42305 = nodes;
var k42306 = "Mesh_2";
if((function (){var obj42309 = obj42305;
return (((!((obj42309 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42306,obj42309)));
})()){
return (obj42305[k42306]);
} else {
return undefined;
}
})();
var k42308 = "geometry";
if((function (){var obj42310 = obj42307;
return (((!((obj42310 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42308,obj42310)));
})()){
return (obj42307[k42308]);
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"material","material",460118677),(function (){var obj42311 = (function (){var obj42312 = materials;
var k42313 = "Material.003";
if((function (){var obj42314 = obj42312;
return (((!((obj42314 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42313,obj42314)));
})()){
return (obj42312[k42313]);
} else {
return undefined;
}
})();
var obj42315 = (((!((obj42311 == null))))?obj42311:({}));
(obj42315["color"] = ({"r": (0), "g": (0), "b": (0)}));

return obj42315;
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),(function (){var obj42320 = (function (){var obj42318 = nodes;
var k42319 = "Mesh_3";
if((function (){var obj42322 = obj42318;
return (((!((obj42322 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42319,obj42322)));
})()){
return (obj42318[k42319]);
} else {
return undefined;
}
})();
var k42321 = "geometry";
if((function (){var obj42323 = obj42320;
return (((!((obj42323 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42321,obj42323)));
})()){
return (obj42320[k42321]);
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"material","material",460118677),(function (){var obj42324 = (function (){var obj42325 = materials;
var k42326 = "Material.004";
if((function (){var obj42327 = obj42325;
return (((!((obj42327 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42326,obj42327)));
})()){
return (obj42325[k42326]);
} else {
return undefined;
}
})();
var obj42328 = (((!((obj42324 == null))))?obj42324:({}));
(obj42328["color"] = ({"r": (1), "g": (1), "b": (1)}));

return obj42328;
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),(function (){var obj42333 = (function (){var obj42331 = nodes;
var k42332 = "Mesh_4";
if((function (){var obj42335 = obj42331;
return (((!((obj42335 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42332,obj42335)));
})()){
return (obj42331[k42332]);
} else {
return undefined;
}
})();
var k42334 = "geometry";
if((function (){var obj42336 = obj42333;
return (((!((obj42336 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42334,obj42336)));
})()){
return (obj42333[k42334]);
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"material","material",460118677),(function (){var obj42337 = materials;
var k42338 = "Material.005";
if((function (){var obj42339 = obj42337;
return (((!((obj42339 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42338,obj42339)));
})()){
return (obj42337[k42338]);
} else {
return undefined;
}
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),(function (){var obj42342 = (function (){var obj42340 = nodes;
var k42341 = "Mesh_5";
if((function (){var obj42344 = obj42340;
return (((!((obj42344 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42341,obj42344)));
})()){
return (obj42340[k42341]);
} else {
return undefined;
}
})();
var k42343 = "geometry";
if((function (){var obj42345 = obj42342;
return (((!((obj42345 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42343,obj42345)));
})()){
return (obj42342[k42343]);
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"material","material",460118677),(function (){var obj42346 = materials;
var k42347 = "Material.006";
if((function (){var obj42348 = obj42346;
return (((!((obj42348 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42347,obj42348)));
})()){
return (obj42346[k42347]);
} else {
return undefined;
}
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),(function (){var obj42351 = (function (){var obj42349 = nodes;
var k42350 = "Mesh_6";
if((function (){var obj42353 = obj42349;
return (((!((obj42353 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42350,obj42353)));
})()){
return (obj42349[k42350]);
} else {
return undefined;
}
})();
var k42352 = "geometry";
if((function (){var obj42354 = obj42351;
return (((!((obj42354 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42352,obj42354)));
})()){
return (obj42351[k42352]);
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"material","material",460118677),(function (){var obj42357 = (function (){var obj42355 = nodes;
var k42356 = "Mesh_6";
if((function (){var obj42359 = obj42355;
return (((!((obj42359 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42356,obj42359)));
})()){
return (obj42355[k42356]);
} else {
return undefined;
}
})();
var k42358 = "material";
if((function (){var obj42360 = obj42357;
return (((!((obj42360 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42358,obj42360)));
})()){
return (obj42357[k42358]);
} else {
return undefined;
}
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),(function (){var obj42363 = (function (){var obj42361 = nodes;
var k42362 = "Mesh_7";
if((function (){var obj42365 = obj42361;
return (((!((obj42365 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42362,obj42365)));
})()){
return (obj42361[k42362]);
} else {
return undefined;
}
})();
var k42364 = "geometry";
if((function (){var obj42366 = obj42363;
return (((!((obj42366 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42364,obj42366)));
})()){
return (obj42363[k42364]);
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"material","material",460118677),(function (){var obj42367 = materials;
var k42368 = "Material.008";
if((function (){var obj42369 = obj42367;
return (((!((obj42369 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42368,obj42369)));
})()){
return (obj42367[k42368]);
} else {
return undefined;
}
})()], null)], null)], null)], null)], null)], null);
});
racing_game_cljs.views.wheel = (function racing_game_cljs$views$wheel(props){
var wheel_STAR_ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
var _ = shadow.js.shim.module$$react_three$drei.useGLTF.preload("wheel-draco.glb");
var map__42370 = applied_science.js_interop.lookup(shadow.js.shim.module$$react_three$drei.useGLTF("wheel-draco.glb"));
var map__42370__$1 = cljs.core.__destructure_map(map__42370);
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42370__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var materials = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42370__$1,new cljs.core.Keyword(null,"materials","materials",2036902582));
var ___$1 = shadow.js.shim.module$$react_three$cannon.useCylinder((function (){
return cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"ref","ref",1289896967)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mass","mass",-2138950046),(1),new cljs.core.Keyword(null,"type","type",1174270348),"Kinematic",new cljs.core.Keyword(null,"material","material",460118677),"wheel",new cljs.core.Keyword(null,"collisionFilterGroup","collisionFilterGroup",1441524748),(0),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(props),0.5,(16)], null)], null)], 0)));
}),wheel_STAR_);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),wheel_STAR_,new cljs.core.Keyword(null,"dispose","dispose",365585368),null], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword(null,"leftSide","leftSide",579146979).cljs$core$IFn$_invoke$arity$1(props))?-0.4:0.4),0.4,0.4], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword(null,"leftSide","leftSide",579146979).cljs$core$IFn$_invoke$arity$1(props))?-0.2:0.2),(0),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),(function (){var obj42373 = (function (){var obj42371 = nodes;
var k42372 = "Mesh_14";
if((function (){var obj42375 = obj42371;
return (((!((obj42375 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42372,obj42375)));
})()){
return (obj42371[k42372]);
} else {
return undefined;
}
})();
var k42374 = "geometry";
if((function (){var obj42376 = obj42373;
return (((!((obj42376 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42374,obj42376)));
})()){
return (obj42373[k42374]);
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"material","material",460118677),(function (){var obj42377 = materials;
var k42378 = "Material.002";
if((function (){var obj42379 = obj42377;
return (((!((obj42379 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42378,obj42379)));
})()){
return (obj42377[k42378]);
} else {
return undefined;
}
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),(function (){var obj42382 = (function (){var obj42380 = nodes;
var k42381 = "Mesh_15";
if((function (){var obj42384 = obj42380;
return (((!((obj42384 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42381,obj42384)));
})()){
return (obj42380[k42381]);
} else {
return undefined;
}
})();
var k42383 = "geometry";
if((function (){var obj42385 = obj42382;
return (((!((obj42385 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42383,obj42385)));
})()){
return (obj42382[k42383]);
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"material","material",460118677),(function (){var obj42386 = materials;
var k42387 = "Material.009";
if((function (){var obj42388 = obj42386;
return (((!((obj42388 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42387,obj42388)));
})()){
return (obj42386[k42387]);
} else {
return undefined;
}
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"geometry","geometry",-405034994),(function (){var obj42391 = (function (){var obj42389 = nodes;
var k42390 = "Mesh_16";
if((function (){var obj42393 = obj42389;
return (((!((obj42393 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42390,obj42393)));
})()){
return (obj42389[k42390]);
} else {
return undefined;
}
})();
var k42392 = "geometry";
if((function (){var obj42394 = obj42391;
return (((!((obj42394 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42392,obj42394)));
})()){
return (obj42391[k42392]);
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"material","material",460118677),(function (){var obj42395 = materials;
var k42396 = "Material.007";
if((function (){var obj42397 = obj42395;
return (((!((obj42397 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42396,obj42397)));
})()){
return (obj42395[k42396]);
} else {
return undefined;
}
})()], null)], null)], null)], null);
});
racing_game_cljs.views.render_loop = (function racing_game_cljs$views$render_loop(p__42398){
var map__42399 = p__42398;
var map__42399__$1 = cljs.core.__destructure_map(map__42399);
var api = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42399__$1,new cljs.core.Keyword(null,"api","api",-899839580));
var chassis_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42399__$1,new cljs.core.Keyword(null,"chassis*","chassis*",-1497600960));
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42399__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var force = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42399__$1,new cljs.core.Keyword(null,"force","force",781957286),(1500));
var steer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42399__$1,new cljs.core.Keyword(null,"steer","steer",1705380684),0.5);
var max_brake = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42399__$1,new cljs.core.Keyword(null,"max-brake","max-brake",1638214571),(50));
var velocity = (0);
var map__42400 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("racing-game-cljs.subs","controls","racing-game-cljs.subs/controls",450014079)], null)));
var map__42400__$1 = cljs.core.__destructure_map(map__42400);
var forward = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42400__$1,new cljs.core.Keyword(null,"forward","forward",-557345303));
var backward = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42400__$1,new cljs.core.Keyword(null,"backward","backward",554036364));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42400__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42400__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var brake = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42400__$1,new cljs.core.Keyword(null,"brake","brake",-1659975914));
var reset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42400__$1,new cljs.core.Keyword(null,"reset","reset",-800929946));
var engine_value = (cljs.core.truth_((function (){var or__4223__auto__ = forward;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return backward;
}
})())?(force * (cljs.core.truth_((function (){var and__4221__auto__ = forward;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(backward);
} else {
return and__4221__auto__;
}
})())?(-1):(1))):(0));
var _ = (function (){var n__4706__auto__ = (2);
var _ = (0);
while(true){
if((_ < n__4706__auto__)){
api.applyEngineForce(engine_value,(2));

var G__42623 = (_ + (1));
_ = G__42623;
continue;
} else {
return null;
}
break;
}
})();
var steering_value = (cljs.core.truth_((function (){var or__4223__auto__ = left;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return right;
}
})())?(steer * (cljs.core.truth_((function (){var and__4221__auto__ = left;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(right);
} else {
return and__4221__auto__;
}
})())?(1):(-1))):(0));
var n__4706__auto___42624 = (2);
var s_42625 = (0);
while(true){
if((s_42625 < n__4706__auto___42624)){
api.setSteeringValue(steering_value,s_42625);

var G__42626 = (s_42625 + (1));
s_42625 = G__42626;
continue;
} else {
}
break;
}

var n__4706__auto___42627 = (4);
var b_42628 = (0);
while(true){
if((b_42628 < n__4706__auto___42627)){
api.setBrake((cljs.core.truth_(brake)?max_brake:(0)),b_42628);

var G__42629 = (b_42628 + (1));
b_42628 = G__42629;
continue;
} else {
}
break;
}

if(cljs.core.truth_(reset)){
var parent__41961__auto___42630 = (((chassis_STAR_["current"])["api"])["position"]);
var f__41962__auto___42631 = (parent__41961__auto___42630["set"]);
f__41962__auto___42631.call(parent__41961__auto___42630,(0),0.5,(0));

var parent__41961__auto___42632 = (((chassis_STAR_["current"])["api"])["velocity"]);
var f__41962__auto___42633 = (parent__41961__auto___42632["set"]);
f__41962__auto___42633.call(parent__41961__auto___42632,(0),(0),(0));

var parent__41961__auto___42634 = (((chassis_STAR_["current"])["api"])["angularVelocity"]);
var f__41962__auto___42635 = (parent__41961__auto___42634["set"]);
f__41962__auto___42635.call(parent__41961__auto___42634,(0),0.5,(0));

var parent__41961__auto___42636 = (((chassis_STAR_["current"])["api"])["rotation"]);
var f__41962__auto___42637 = (parent__41961__auto___42636["set"]);
f__41962__auto___42637.call(parent__41961__auto___42636,(0),(Math.PI / 1.7),(0));
} else {
}

var obj42401_42638 = camera;
var obj42401_42639__$1 = (((!((obj42401_42638 == null))))?obj42401_42638:({}));
var obj42406_42640 = (function (){var child42403 = ((function (){var child42402 = (obj42401_42639__$1["current"]);
if((!((child42402 == null)))){
return child42402;
} else {
var new_child__41887__auto__ = ({});
var obj42409_42641 = obj42401_42639__$1;
(obj42409_42641["current"] = new_child__41887__auto__);


return new_child__41887__auto__;
}
})()["position"]);
if((!((child42403 == null)))){
return child42403;
} else {
var new_child__41887__auto__ = ({});
var obj42412_42642 = (function (){var child42402 = (obj42401_42639__$1["current"]);
if((!((child42402 == null)))){
return child42402;
} else {
var new_child__41887__auto____$1 = ({});
var obj42415_42643 = obj42401_42639__$1;
(obj42415_42643["current"] = new_child__41887__auto____$1);


return new_child__41887__auto____$1;
}
})();
(obj42412_42642["position"] = new_child__41887__auto__);


return new_child__41887__auto__;
}
})();
(obj42406_42640["x"] = shadow.js.shim.module$three.MathUtils.lerp((function (){var obj42420 = (function (){var obj42418 = (function (){var obj42416 = camera;
var k42417 = "current";
if((function (){var obj42422 = obj42416;
return (((!((obj42422 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42417,obj42422)));
})()){
return (obj42416[k42417]);
} else {
return undefined;
}
})();
var k42419 = "position";
if((function (){var obj42423 = obj42418;
return (((!((obj42423 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42419,obj42423)));
})()){
return (obj42418[k42419]);
} else {
return undefined;
}
})();
var k42421 = "x";
if((function (){var obj42424 = obj42420;
return (((!((obj42424 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42421,obj42424)));
})()){
return (obj42420[k42421]);
} else {
return undefined;
}
})(),((Math.sin(steering_value) * velocity) / (2)),0.025));



var obj42425_42644 = camera;
var obj42425_42645__$1 = (((!((obj42425_42644 == null))))?obj42425_42644:({}));
var obj42430_42646 = (function (){var child42427 = ((function (){var child42426 = (obj42425_42645__$1["current"]);
if((!((child42426 == null)))){
return child42426;
} else {
var new_child__41887__auto__ = ({});
var obj42433_42647 = obj42425_42645__$1;
(obj42433_42647["current"] = new_child__41887__auto__);


return new_child__41887__auto__;
}
})()["position"]);
if((!((child42427 == null)))){
return child42427;
} else {
var new_child__41887__auto__ = ({});
var obj42436_42648 = (function (){var child42426 = (obj42425_42645__$1["current"]);
if((!((child42426 == null)))){
return child42426;
} else {
var new_child__41887__auto____$1 = ({});
var obj42439_42649 = obj42425_42645__$1;
(obj42439_42649["current"] = new_child__41887__auto____$1);


return new_child__41887__auto____$1;
}
})();
(obj42436_42648["position"] = new_child__41887__auto__);


return new_child__41887__auto__;
}
})();
(obj42430_42646["z"] = shadow.js.shim.module$three.MathUtils.lerp((function (){var obj42444 = (function (){var obj42442 = (function (){var obj42440 = camera;
var k42441 = "current";
if((function (){var obj42446 = obj42440;
return (((!((obj42446 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42441,obj42446)));
})()){
return (obj42440[k42441]);
} else {
return undefined;
}
})();
var k42443 = "position";
if((function (){var obj42447 = obj42442;
return (((!((obj42447 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42443,obj42447)));
})()){
return (obj42442[k42443]);
} else {
return undefined;
}
})();
var k42445 = "z";
if((function (){var obj42448 = obj42444;
return (((!((obj42448 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42445,obj42448)));
})()){
return (obj42444[k42445]);
} else {
return undefined;
}
})(),((Math.cos(steering_value) - (velocity / (20))) + -5.5),0.025));



var obj42449_42650 = camera;
var obj42449_42651__$1 = (((!((obj42449_42650 == null))))?obj42449_42650:({}));
var obj42454_42652 = (function (){var child42451 = ((function (){var child42450 = (obj42449_42651__$1["current"]);
if((!((child42450 == null)))){
return child42450;
} else {
var new_child__41887__auto__ = ({});
var obj42457_42653 = obj42449_42651__$1;
(obj42457_42653["current"] = new_child__41887__auto__);


return new_child__41887__auto__;
}
})()["position"]);
if((!((child42451 == null)))){
return child42451;
} else {
var new_child__41887__auto__ = ({});
var obj42460_42654 = (function (){var child42450 = (obj42449_42651__$1["current"]);
if((!((child42450 == null)))){
return child42450;
} else {
var new_child__41887__auto____$1 = ({});
var obj42463_42655 = obj42449_42651__$1;
(obj42463_42655["current"] = new_child__41887__auto____$1);


return new_child__41887__auto____$1;
}
})();
(obj42460_42654["position"] = new_child__41887__auto__);


return new_child__41887__auto__;
}
})();
(obj42454_42652["y"] = shadow.js.shim.module$three.MathUtils.lerp((function (){var obj42468 = (function (){var obj42466 = (function (){var obj42464 = camera;
var k42465 = "current";
if((function (){var obj42470 = obj42464;
return (((!((obj42470 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42465,obj42470)));
})()){
return (obj42464[k42465]);
} else {
return undefined;
}
})();
var k42467 = "position";
if((function (){var obj42471 = obj42466;
return (((!((obj42471 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42467,obj42471)));
})()){
return (obj42466[k42467]);
} else {
return undefined;
}
})();
var k42469 = "y";
if((function (){var obj42472 = obj42468;
return (((!((obj42472 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42469,obj42472)));
})()){
return (obj42468[k42469]);
} else {
return undefined;
}
})(),(1.25 + ((engine_value / (1000)) * -0.5)),0.01));



var parent__41961__auto__ = (camera["current"]);
var f__41962__auto__ = (parent__41961__auto__["lookAt"]);
return f__41962__auto__.call(parent__41961__auto__,(function (){var obj42475 = (function (){var obj42473 = chassis_STAR_;
var k42474 = "current";
if((function (){var obj42477 = obj42473;
return (((!((obj42477 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42474,obj42477)));
})()){
return (obj42473[k42474]);
} else {
return undefined;
}
})();
var k42476 = "position";
if((function (){var obj42478 = obj42475;
return (((!((obj42478 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42476,obj42478)));
})()){
return (obj42475[k42476]);
} else {
return undefined;
}
})());
});
racing_game_cljs.views.vehicle = (function racing_game_cljs$views$vehicle(props){
var chassis_STAR_ = shadow.js.shim.module$react.useRef();
var camera = shadow.js.shim.module$react.useRef();
var wheel1 = shadow.js.shim.module$react.useRef();
var wheel2 = shadow.js.shim.module$react.useRef();
var wheel3 = shadow.js.shim.module$react.useRef();
var wheel4 = shadow.js.shim.module$react.useRef();
var light = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (p__42480){
var map__42481 = p__42480;
var map__42481__$1 = cljs.core.__destructure_map(map__42481);
var props__$1 = map__42481__$1;
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42481__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258),0.7);
var wheel_infos = racing_game_cljs.views.get_wheel_infos(props__$1);
var vec__42482 = shadow.js.shim.module$$react_three$cannon.useRaycastVehicle((function (){
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"chassisBody","chassisBody",316685406),chassis_STAR_,new cljs.core.Keyword(null,"wheels","wheels",756478381),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [wheel1,wheel2,wheel3,wheel4], null),new cljs.core.Keyword(null,"wheelInfos","wheelInfos",1063277433),wheel_infos,new cljs.core.Keyword(null,"indexForwardAxis","indexForwardAxis",553418571),(2),new cljs.core.Keyword(null,"indexRightAxis","indexRightAxis",-64983462),(0),new cljs.core.Keyword(null,"indexUpAxis","indexUpAxis",1214046042),(1)], null));
}));
var vehicle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42482,(0),null);
var api = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42482,(1),null);
var _ = shadow.js.shim.module$$react_three$fiber.useFrame((function (){
return racing_game_cljs.views.render_loop(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"api","api",-899839580),api,new cljs.core.Keyword(null,"chassis*","chassis*",-1497600960),chassis_STAR_,new cljs.core.Keyword(null,"camera","camera",-1190348585),camera], null));
}));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"directionalLight","directionalLight",1856345040),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"shadowCameraBottom","shadowCameraBottom",1718501601),new cljs.core.Keyword(null,"shadowMapHeight","shadowMapHeight",-1080468058),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"shadowBias","shadowBias",-460598837),new cljs.core.Keyword(null,"shadowCameraRight","shadowCameraRight",2128420718),new cljs.core.Keyword(null,"intensity","intensity",1142770863),new cljs.core.Keyword(null,"shadowCameraTop","shadowCameraTop",-706201772),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"shadowMapWidth","shadowMapWidth",-110387909),new cljs.core.Keyword(null,"shadowCameraLeft","shadowCameraLeft",-1262812451),new cljs.core.Keyword(null,"castShadow","castShadow",1475003551)],[(-80),(2048),(function (p1__42479_SHARP_){
return cljs.core.reset_BANG_(light,p1__42479_SHARP_);
}),-0.001,(80),(1),(80),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100),(50)], null),(2048),(-80),true])], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),vehicle,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),-0.4,(0)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),racing_game_cljs.views.chassis,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props__$1,new cljs.core.Keyword(null,"ref","ref",1289896967),chassis_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"camera","camera",-1190348585),camera,new cljs.core.Keyword(null,"light","light",1918998747),light], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),racing_game_cljs.views.wheel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),wheel1,new cljs.core.Keyword(null,"radius","radius",-2073122258),radius,new cljs.core.Keyword(null,"leftSide","leftSide",579146979),true], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),racing_game_cljs.views.wheel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),wheel2,new cljs.core.Keyword(null,"radius","radius",-2073122258),radius], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),racing_game_cljs.views.wheel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),wheel3,new cljs.core.Keyword(null,"radius","radius",-2073122258),radius,new cljs.core.Keyword(null,"leftSide","leftSide",579146979),true], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),racing_game_cljs.views.wheel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),wheel4,new cljs.core.Keyword(null,"radius","radius",-2073122258),radius], null)], null)], null)], null);
});
});
racing_game_cljs.views.track = (function racing_game_cljs$views$track(props){
var birds = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (props__$1){
var _ = shadow.js.shim.module$$react_three$drei.useGLTF.preload("track-draco.glb");
var map__42489 = applied_science.js_interop.lookup(shadow.js.shim.module$$react_three$drei.useGLTF("track-draco.glb"));
var map__42489__$1 = cljs.core.__destructure_map(map__42489);
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42489__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var materials = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42489__$1,new cljs.core.Keyword(null,"materials","materials",2036902582));
var config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"receiveShadow","receiveShadow",773566383),true,new cljs.core.Keyword(null,"castShadow","castShadow",1475003551),true], null);
var ___$1 = shadow.js.shim.module$$react_three$fiber.useFrame((function (___$1,delta){
var obj42490_42656 = new cljs.core.Keyword(null,"bird1","bird1",-1931250456).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(birds));
var obj42490_42657__$1 = (((!((obj42490_42656 == null))))?obj42490_42656:({}));
var inner_obj__41938__auto___42658 = (function (){var child42491 = (obj42490_42657__$1["rotation"]);
if((!((child42491 == null)))){
return child42491;
} else {
var new_child__41887__auto__ = ({});
var obj42496_42659 = obj42490_42657__$1;
(obj42496_42659["rotation"] = new_child__41887__auto__);


return new_child__41887__auto__;
}
})();
var o__41932__auto___42660 = inner_obj__41938__auto___42658;
var o__41926__auto___42661 = (((!((o__41932__auto___42660 == null))))?o__41932__auto___42660:({}));
var obj42499_42662 = o__41926__auto___42661;
(obj42499_42662["y"] = ((o__41926__auto___42661["y"]) + (delta / 3.5)));



var obj42500_42663 = new cljs.core.Keyword(null,"bird2","bird2",-1383730297).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(birds));
var obj42500_42664__$1 = (((!((obj42500_42663 == null))))?obj42500_42663:({}));
var inner_obj__41938__auto___42665 = (function (){var child42501 = (obj42500_42664__$1["rotation"]);
if((!((child42501 == null)))){
return child42501;
} else {
var new_child__41887__auto__ = ({});
var obj42506_42666 = obj42500_42664__$1;
(obj42506_42666["rotation"] = new_child__41887__auto__);


return new_child__41887__auto__;
}
})();
var o__41932__auto___42667 = inner_obj__41938__auto___42665;
var o__41926__auto___42668 = (((!((o__41932__auto___42667 == null))))?o__41932__auto___42667:({}));
var obj42509_42669 = o__41926__auto___42668;
(obj42509_42669["y"] = ((o__41926__auto___42668["y"]) + (delta / (4))));



var obj42510_42670 = new cljs.core.Keyword(null,"bird3","bird3",-688941104).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(birds));
var obj42510_42671__$1 = (((!((obj42510_42670 == null))))?obj42510_42670:({}));
var inner_obj__41938__auto___42672 = (function (){var child42511 = (obj42510_42671__$1["rotation"]);
if((!((child42511 == null)))){
return child42511;
} else {
var new_child__41887__auto__ = ({});
var obj42516_42673 = obj42510_42671__$1;
(obj42516_42673["rotation"] = new_child__41887__auto__);


return new_child__41887__auto__;
}
})();
var o__41932__auto___42674 = inner_obj__41938__auto___42672;
var o__41926__auto___42675 = (((!((o__41932__auto___42674 == null))))?o__41932__auto___42674:({}));
var obj42519_42676 = o__41926__auto___42675;
(obj42519_42676["y"] = ((o__41926__auto___42675["y"]) + (delta / 2.5)));



var obj42520 = new cljs.core.Keyword(null,"bird4","bird4",-530895817).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(birds));
var obj42520__$1 = (((!((obj42520 == null))))?obj42520:({}));
var inner_obj__41938__auto__ = (function (){var child42521 = (obj42520__$1["rotation"]);
if((!((child42521 == null)))){
return child42521;
} else {
var new_child__41887__auto__ = ({});
var obj42526_42677 = obj42520__$1;
(obj42526_42677["rotation"] = new_child__41887__auto__);


return new_child__41887__auto__;
}
})();
var o__41932__auto___42678 = inner_obj__41938__auto__;
var o__41926__auto___42679 = (((!((o__41932__auto___42678 == null))))?o__41932__auto___42678:({}));
var obj42529_42680 = o__41926__auto___42679;
(obj42529_42680["y"] = ((o__41926__auto___42679["y"]) + (delta / 4.5)));


return obj42520__$1;
}));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispose","dispose",365585368),null], null)], 0)),(function (){var iter__4622__auto__ = (function racing_game_cljs$views$track_$_iter__42530(s__42531){
return (new cljs.core.LazySeq(null,(function (){
var s__42531__$1 = s__42531;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__42531__$1);
if(temp__5753__auto__){
var s__42531__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42531__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__42531__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__42533 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__42532 = (0);
while(true){
if((i__42532 < size__4621__auto__)){
var palette = cljs.core._nth(c__4620__auto__,i__42532);
if(clojure.string.includes_QMARK_(cljs.core.name(palette),"ColorPalette")){
var ___$2 = (function (){var obj42534 = nodes;
var obj42534__$1 = (((!((obj42534 == null))))?obj42534:({}));
var obj42539_42681 = (function (){var child42536 = ((function (){var child42535 = (obj42534__$1[applied_science.js_interop.impl.wrap_key(palette)]);
if((!((child42535 == null)))){
return child42535;
} else {
var new_child__41887__auto__ = ({});
var obj42542_42682 = obj42534__$1;
(obj42542_42682[applied_science.js_interop.impl.wrap_key(palette)] = new_child__41887__auto__);


return new_child__41887__auto__;
}
})()["material"]);
if((!((child42536 == null)))){
return child42536;
} else {
var new_child__41887__auto__ = ({});
var obj42545_42683 = (function (){var child42535 = (obj42534__$1[applied_science.js_interop.impl.wrap_key(palette)]);
if((!((child42535 == null)))){
return child42535;
} else {
var new_child__41887__auto____$1 = ({});
var obj42548_42684 = obj42534__$1;
(obj42548_42684[applied_science.js_interop.impl.wrap_key(palette)] = new_child__41887__auto____$1);


return new_child__41887__auto____$1;
}
})();
(obj42545_42683["material"] = new_child__41887__auto__);


return new_child__41887__auto__;
}
})();
(obj42539_42681["roughness"] = (1));


return obj42534__$1;
})();
var mesh = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(palette),new cljs.core.Keyword(null,"geometry","geometry",-405034994),(function (){var obj42551 = (function (){var obj42549 = nodes;
var k42550 = applied_science.js_interop.impl.wrap_key(palette);
if((function (){var obj42553 = obj42549;
return (((!((obj42553 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42550,obj42553)));
})()){
return (obj42549[k42550]);
} else {
return undefined;
}
})();
var k42552 = "geometry";
if((function (){var obj42554 = obj42551;
return (((!((obj42554 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42552,obj42554)));
})()){
return (obj42551[k42552]);
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"material","material",460118677),(function (){var obj42557 = (function (){var obj42555 = nodes;
var k42556 = applied_science.js_interop.impl.wrap_key(palette);
if((function (){var obj42559 = obj42555;
return (((!((obj42559 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42556,obj42559)));
})()){
return (obj42555[k42556]);
} else {
return undefined;
}
})();
var k42558 = "material";
if((function (){var obj42560 = obj42557;
return (((!((obj42560 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42558,obj42560)));
})()){
return (obj42557[k42558]);
} else {
return undefined;
}
})()], null),(cljs.core.truth_((function (){var fexpr__42561 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Cube075_ColorPalette_0","Cube075_ColorPalette_0",-499746589),null,new cljs.core.Keyword(null,"Cube076_ColorPalette_0","Cube076_ColorPalette_0",464246615),null], null), null);
return (fexpr__42561.cljs$core$IFn$_invoke$arity$1 ? fexpr__42561.cljs$core$IFn$_invoke$arity$1(palette) : fexpr__42561.call(null,palette));
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.52,(0),0.06], null)], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"Plane089_ColorPaletteWater_0","Plane089_ColorPaletteWater_0",-1869208691),palette))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"material","material",460118677),(function (){var obj42562 = (function (){var obj42563 = materials;
var k42564 = "ColorPaletteWater";
if((function (){var obj42565 = obj42563;
return (((!((obj42565 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42564,obj42565)));
})()){
return (obj42563[k42564]);
} else {
return undefined;
}
})();
var obj42566 = (((!((obj42562 == null))))?obj42562:({}));
(obj42566["roughness"] = (1));

return obj42566;
})()], null):null),(function (){var G__42569 = palette;
var G__42569__$1 = (((G__42569 instanceof cljs.core.Keyword))?G__42569.fqn:null);
switch (G__42569__$1) {
case "Plane049_ColorPalette_0":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (i__42532,s__42531__$1,G__42569,G__42569__$1,___$2,palette,c__4620__auto__,size__4621__auto__,b__42533,s__42531__$2,temp__5753__auto__,_,map__42489,map__42489__$1,nodes,materials,config,___$1,birds){
return (function (p1__42485_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(birds,cljs.core.assoc,new cljs.core.Keyword(null,"bird1","bird1",-1931250456),p1__42485_SHARP_);
});})(i__42532,s__42531__$1,G__42569,G__42569__$1,___$2,palette,c__4620__auto__,size__4621__auto__,b__42533,s__42531__$2,temp__5753__auto__,_,map__42489,map__42489__$1,nodes,materials,config,___$1,birds))
], null);

break;
case "Plane050_ColorPalette_0":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (i__42532,s__42531__$1,G__42569,G__42569__$1,___$2,palette,c__4620__auto__,size__4621__auto__,b__42533,s__42531__$2,temp__5753__auto__,_,map__42489,map__42489__$1,nodes,materials,config,___$1,birds){
return (function (p1__42486_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(birds,cljs.core.assoc,new cljs.core.Keyword(null,"bird2","bird2",-1383730297),p1__42486_SHARP_);
});})(i__42532,s__42531__$1,G__42569,G__42569__$1,___$2,palette,c__4620__auto__,size__4621__auto__,b__42533,s__42531__$2,temp__5753__auto__,_,map__42489,map__42489__$1,nodes,materials,config,___$1,birds))
], null);

break;
case "Plane051_ColorPalette_0":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (i__42532,s__42531__$1,G__42569,G__42569__$1,___$2,palette,c__4620__auto__,size__4621__auto__,b__42533,s__42531__$2,temp__5753__auto__,_,map__42489,map__42489__$1,nodes,materials,config,___$1,birds){
return (function (p1__42487_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(birds,cljs.core.assoc,new cljs.core.Keyword(null,"bird3","bird3",-688941104),p1__42487_SHARP_);
});})(i__42532,s__42531__$1,G__42569,G__42569__$1,___$2,palette,c__4620__auto__,size__4621__auto__,b__42533,s__42531__$2,temp__5753__auto__,_,map__42489,map__42489__$1,nodes,materials,config,___$1,birds))
], null);

break;
case "Plane059_ColorPalette_0":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (i__42532,s__42531__$1,G__42569,G__42569__$1,___$2,palette,c__4620__auto__,size__4621__auto__,b__42533,s__42531__$2,temp__5753__auto__,_,map__42489,map__42489__$1,nodes,materials,config,___$1,birds){
return (function (p1__42488_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(birds,cljs.core.assoc,new cljs.core.Keyword(null,"bird4","bird4",-530895817),p1__42488_SHARP_);
});})(i__42532,s__42531__$1,G__42569,G__42569__$1,___$2,palette,c__4620__auto__,size__4621__auto__,b__42533,s__42531__$2,temp__5753__auto__,_,map__42489,map__42489__$1,nodes,materials,config,___$1,birds))
], null);

break;
default:
return null;

}
})()], 0))], null);
cljs.core.chunk_append(b__42533,mesh);

var G__42686 = (i__42532 + (1));
i__42532 = G__42686;
continue;
} else {
var G__42687 = (i__42532 + (1));
i__42532 = G__42687;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42533),racing_game_cljs$views$track_$_iter__42530(cljs.core.chunk_rest(s__42531__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42533),null);
}
} else {
var palette = cljs.core.first(s__42531__$2);
if(clojure.string.includes_QMARK_(cljs.core.name(palette),"ColorPalette")){
var ___$2 = (function (){var obj42570 = nodes;
var obj42570__$1 = (((!((obj42570 == null))))?obj42570:({}));
var obj42575_42688 = (function (){var child42572 = ((function (){var child42571 = (obj42570__$1[applied_science.js_interop.impl.wrap_key(palette)]);
if((!((child42571 == null)))){
return child42571;
} else {
var new_child__41887__auto__ = ({});
var obj42578_42689 = obj42570__$1;
(obj42578_42689[applied_science.js_interop.impl.wrap_key(palette)] = new_child__41887__auto__);


return new_child__41887__auto__;
}
})()["material"]);
if((!((child42572 == null)))){
return child42572;
} else {
var new_child__41887__auto__ = ({});
var obj42581_42690 = (function (){var child42571 = (obj42570__$1[applied_science.js_interop.impl.wrap_key(palette)]);
if((!((child42571 == null)))){
return child42571;
} else {
var new_child__41887__auto____$1 = ({});
var obj42584_42691 = obj42570__$1;
(obj42584_42691[applied_science.js_interop.impl.wrap_key(palette)] = new_child__41887__auto____$1);


return new_child__41887__auto____$1;
}
})();
(obj42581_42690["material"] = new_child__41887__auto__);


return new_child__41887__auto__;
}
})();
(obj42575_42688["roughness"] = (1));


return obj42570__$1;
})();
var mesh = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(palette),new cljs.core.Keyword(null,"geometry","geometry",-405034994),(function (){var obj42587 = (function (){var obj42585 = nodes;
var k42586 = applied_science.js_interop.impl.wrap_key(palette);
if((function (){var obj42589 = obj42585;
return (((!((obj42589 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42586,obj42589)));
})()){
return (obj42585[k42586]);
} else {
return undefined;
}
})();
var k42588 = "geometry";
if((function (){var obj42590 = obj42587;
return (((!((obj42590 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42588,obj42590)));
})()){
return (obj42587[k42588]);
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"material","material",460118677),(function (){var obj42593 = (function (){var obj42591 = nodes;
var k42592 = applied_science.js_interop.impl.wrap_key(palette);
if((function (){var obj42595 = obj42591;
return (((!((obj42595 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42592,obj42595)));
})()){
return (obj42591[k42592]);
} else {
return undefined;
}
})();
var k42594 = "material";
if((function (){var obj42596 = obj42593;
return (((!((obj42596 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42594,obj42596)));
})()){
return (obj42593[k42594]);
} else {
return undefined;
}
})()], null),(cljs.core.truth_((function (){var fexpr__42597 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Cube075_ColorPalette_0","Cube075_ColorPalette_0",-499746589),null,new cljs.core.Keyword(null,"Cube076_ColorPalette_0","Cube076_ColorPalette_0",464246615),null], null), null);
return (fexpr__42597.cljs$core$IFn$_invoke$arity$1 ? fexpr__42597.cljs$core$IFn$_invoke$arity$1(palette) : fexpr__42597.call(null,palette));
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.52,(0),0.06], null)], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"Plane089_ColorPaletteWater_0","Plane089_ColorPaletteWater_0",-1869208691),palette))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"material","material",460118677),(function (){var obj42598 = (function (){var obj42599 = materials;
var k42600 = "ColorPaletteWater";
if((function (){var obj42601 = obj42599;
return (((!((obj42601 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k42600,obj42601)));
})()){
return (obj42599[k42600]);
} else {
return undefined;
}
})();
var obj42602 = (((!((obj42598 == null))))?obj42598:({}));
(obj42602["roughness"] = (1));

return obj42602;
})()], null):null),(function (){var G__42605 = palette;
var G__42605__$1 = (((G__42605 instanceof cljs.core.Keyword))?G__42605.fqn:null);
switch (G__42605__$1) {
case "Plane049_ColorPalette_0":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (s__42531__$1,G__42605,G__42605__$1,___$2,palette,s__42531__$2,temp__5753__auto__,_,map__42489,map__42489__$1,nodes,materials,config,___$1,birds){
return (function (p1__42485_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(birds,cljs.core.assoc,new cljs.core.Keyword(null,"bird1","bird1",-1931250456),p1__42485_SHARP_);
});})(s__42531__$1,G__42605,G__42605__$1,___$2,palette,s__42531__$2,temp__5753__auto__,_,map__42489,map__42489__$1,nodes,materials,config,___$1,birds))
], null);

break;
case "Plane050_ColorPalette_0":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (s__42531__$1,G__42605,G__42605__$1,___$2,palette,s__42531__$2,temp__5753__auto__,_,map__42489,map__42489__$1,nodes,materials,config,___$1,birds){
return (function (p1__42486_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(birds,cljs.core.assoc,new cljs.core.Keyword(null,"bird2","bird2",-1383730297),p1__42486_SHARP_);
});})(s__42531__$1,G__42605,G__42605__$1,___$2,palette,s__42531__$2,temp__5753__auto__,_,map__42489,map__42489__$1,nodes,materials,config,___$1,birds))
], null);

break;
case "Plane051_ColorPalette_0":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (s__42531__$1,G__42605,G__42605__$1,___$2,palette,s__42531__$2,temp__5753__auto__,_,map__42489,map__42489__$1,nodes,materials,config,___$1,birds){
return (function (p1__42487_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(birds,cljs.core.assoc,new cljs.core.Keyword(null,"bird3","bird3",-688941104),p1__42487_SHARP_);
});})(s__42531__$1,G__42605,G__42605__$1,___$2,palette,s__42531__$2,temp__5753__auto__,_,map__42489,map__42489__$1,nodes,materials,config,___$1,birds))
], null);

break;
case "Plane059_ColorPalette_0":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (s__42531__$1,G__42605,G__42605__$1,___$2,palette,s__42531__$2,temp__5753__auto__,_,map__42489,map__42489__$1,nodes,materials,config,___$1,birds){
return (function (p1__42488_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(birds,cljs.core.assoc,new cljs.core.Keyword(null,"bird4","bird4",-530895817),p1__42488_SHARP_);
});})(s__42531__$1,G__42605,G__42605__$1,___$2,palette,s__42531__$2,temp__5753__auto__,_,map__42489,map__42489__$1,nodes,materials,config,___$1,birds))
], null);

break;
default:
return null;

}
})()], 0))], null);
return cljs.core.cons(mesh,racing_game_cljs$views$track_$_iter__42530(cljs.core.rest(s__42531__$2)));
} else {
var G__42693 = cljs.core.rest(s__42531__$2);
s__42531__$1 = G__42693;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(nodes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)))));
})()], null);
});
});
racing_game_cljs.views.handle_key = (function racing_game_cljs$views$handle_key(e,pressed_QMARK_){
var pred__42606 = cljs.core.some;
var expr__42607 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.key], null);
if(cljs.core.truth_((function (){var G__42609 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["w",null,"ArrowUp",null], null), null);
var G__42610 = expr__42607;
return (pred__42606.cljs$core$IFn$_invoke$arity$2 ? pred__42606.cljs$core$IFn$_invoke$arity$2(G__42609,G__42610) : pred__42606.call(null,G__42609,G__42610));
})())){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("racing-game-cljs.events","set-control","racing-game-cljs.events/set-control",-117955488),new cljs.core.Keyword(null,"forward","forward",-557345303),pressed_QMARK_], null));
} else {
if(cljs.core.truth_((function (){var G__42611 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["s",null,"ArrowDown",null], null), null);
var G__42612 = expr__42607;
return (pred__42606.cljs$core$IFn$_invoke$arity$2 ? pred__42606.cljs$core$IFn$_invoke$arity$2(G__42611,G__42612) : pred__42606.call(null,G__42611,G__42612));
})())){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("racing-game-cljs.events","set-control","racing-game-cljs.events/set-control",-117955488),new cljs.core.Keyword(null,"backward","backward",554036364),pressed_QMARK_], null));
} else {
if(cljs.core.truth_((function (){var G__42613 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ArrowLeft",null,"a",null], null), null);
var G__42614 = expr__42607;
return (pred__42606.cljs$core$IFn$_invoke$arity$2 ? pred__42606.cljs$core$IFn$_invoke$arity$2(G__42613,G__42614) : pred__42606.call(null,G__42613,G__42614));
})())){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("racing-game-cljs.events","set-control","racing-game-cljs.events/set-control",-117955488),new cljs.core.Keyword(null,"left","left",-399115937),pressed_QMARK_], null));
} else {
if(cljs.core.truth_((function (){var G__42615 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["d",null,"ArrowRight",null], null), null);
var G__42616 = expr__42607;
return (pred__42606.cljs$core$IFn$_invoke$arity$2 ? pred__42606.cljs$core$IFn$_invoke$arity$2(G__42615,G__42616) : pred__42606.call(null,G__42615,G__42616));
})())){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("racing-game-cljs.events","set-control","racing-game-cljs.events/set-control",-117955488),new cljs.core.Keyword(null,"right","right",-452581833),pressed_QMARK_], null));
} else {
if(cljs.core.truth_((function (){var G__42617 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [" ",null], null), null);
var G__42618 = expr__42607;
return (pred__42606.cljs$core$IFn$_invoke$arity$2 ? pred__42606.cljs$core$IFn$_invoke$arity$2(G__42617,G__42618) : pred__42606.call(null,G__42617,G__42618));
})())){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("racing-game-cljs.events","set-control","racing-game-cljs.events/set-control",-117955488),new cljs.core.Keyword(null,"brake","brake",-1659975914),pressed_QMARK_], null));
} else {
if(cljs.core.truth_((function (){var G__42619 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["r",null], null), null);
var G__42620 = expr__42607;
return (pred__42606.cljs$core$IFn$_invoke$arity$2 ? pred__42606.cljs$core$IFn$_invoke$arity$2(G__42619,G__42620) : pred__42606.call(null,G__42619,G__42620));
})())){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("racing-game-cljs.events","set-control","racing-game-cljs.events/set-control",-117955488),new cljs.core.Keyword(null,"reset","reset",-800929946),pressed_QMARK_], null));
} else {
return null;
}
}
}
}
}
}
});
racing_game_cljs.views.main_panel = (function racing_game_cljs$views$main_panel(){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
window.addEventListener("keyup",(function (p1__42621_SHARP_){
return racing_game_cljs.views.handle_key(p1__42621_SHARP_,false);
}));

return window.addEventListener("keydown",(function (p1__42622_SHARP_){
return racing_game_cljs.views.handle_key(p1__42622_SHARP_,true);
}));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [racing_game_cljs.views.canvas,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dpr","dpr",342115744),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),1.5], null),new cljs.core.Keyword(null,"shadows","shadows",-1489088471),true,new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5),(15)], null),new cljs.core.Keyword(null,"near","near",-1077668328),(1),new cljs.core.Keyword(null,"far","far",85807546),(200),new cljs.core.Keyword(null,"fov","fov",-12463282),(50)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fog","fog",1515389980),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attach","attach",-182514596),"fog",new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["white",(0),(350)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [racing_game_cljs.views.sky,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sun-position","sun-position",1059601198),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(10),(100)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),(1000)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ambientLight","ambientLight",1634320339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"intensity","intensity",1142770863),0.1], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [racing_game_cljs.views.physics,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"broadphase","broadphase",508931334),"SAP",new cljs.core.Keyword(null,"contactEquationRelaxation","contactEquationRelaxation",451940808),(4),new cljs.core.Keyword(null,"friction","friction",-1603603910),0.001,new cljs.core.Keyword(null,"allowSleep","allowSleep",238323338),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),racing_game_cljs.views.plane,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- Math.PI) / (2)),(0),(0)], null),new cljs.core.Keyword(null,"userData","userData",-973934685),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"floor"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),racing_game_cljs.views.vehicle,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(Math.PI / (2)),(0)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(0)], null),new cljs.core.Keyword(null,"angularVelocity","angularVelocity",347220951),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.5,(0)], null),new cljs.core.Keyword(null,"wheelRadius","wheelRadius",2062584115),0.3], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [racing_game_cljs.views.suspense,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fallback","fallback",761637929),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),racing_game_cljs.views.track,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80),(0),(-170)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [racing_game_cljs.views.environment,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preset","preset",777387345),"night"], null)], null)], null)], null);
})], null));
});

//# sourceMappingURL=racing_game_cljs.views.js.map
