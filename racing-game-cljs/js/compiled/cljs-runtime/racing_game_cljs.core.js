goog.provide('racing_game_cljs.core');
racing_game_cljs.core.dev_setup = (function racing_game_cljs$core$dev_setup(){
if(racing_game_cljs.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
racing_game_cljs.core.mount_root = (function racing_game_cljs$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [racing_game_cljs.views.main_panel], null),root_el);
});
racing_game_cljs.core.init = (function racing_game_cljs$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("racing-game-cljs.events","initialize-db","racing-game-cljs.events/initialize-db",-413767177)], null));

racing_game_cljs.core.dev_setup();

return racing_game_cljs.core.mount_root();
});

//# sourceMappingURL=racing_game_cljs.core.js.map
