goog.provide('racing_game_cljs.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("racing-game-cljs.events","initialize-db","racing-game-cljs.events/initialize-db",-413767177),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null)));

var result__41456__auto__ = racing_game_cljs.db.default_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__41456__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__41456__auto__;
}catch (e42050){var e = e42050;
throw e;
}}):(function (_,___$1){
return racing_game_cljs.db.default_db;
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("racing-game-cljs.events","set-control","racing-game-cljs.events/set-control",-117955488),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__42051){
var vec__42052 = p__42051;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42052,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42052,(1),null);
var pressed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42052,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"pressed?","pressed?",1167448023,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Symbol(null,"type","type",-1480165421,null)], null),new cljs.core.Symbol(null,"pressed?","pressed?",1167448023,null))));

var result__41456__auto__ = cljs.core.assoc_in((function (){var result__41456__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__41456__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__41456__auto__;
})(),(function (){var result__41456__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),(function (){var result__41456__auto__ = type;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__41456__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__41456__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__41456__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Symbol(null,"type","type",-1480165421,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__41456__auto__;
})(),(function (){var result__41456__auto__ = pressed_QMARK_;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__41456__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"pressed?","pressed?",1167448023,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__41456__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__41456__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Symbol(null,"type","type",-1480165421,null)], null),new cljs.core.Symbol(null,"pressed?","pressed?",1167448023,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__41456__auto__;
}catch (e42057){var e = e42057;
throw e;
}}):(function (db,p__42058){
var vec__42059 = p__42058;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42059,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42059,(1),null);
var pressed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42059,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),type], null),pressed_QMARK_);
})));

//# sourceMappingURL=racing_game_cljs.events.js.map
