if (self.CavalryLogger) { CavalryLogger.start_js(["5rM5O"]); }

__d('AbstractDialog.react',['DialogX','LayerHideOnBlur','LayerHideOnEscape','React','ReactDOM'],(function a(b,c,d,e,f,g){var h=c('React').PropTypes,i={createSpec:function j(k){return {displayName:k.displayName,propTypes:{behaviors:h.object,className:h.string,modal:h.bool,autohide:h.number,width:h.number,titleID:h.string,causalElement:h.object,causalElementRef:h.func,shown:h.bool,layerHideOnBlur:h.bool,hideOnEscape:h.bool,onToggle:h.func,fixedTopPosition:h.number},createLayer:function l(m){var n=this.props.className,o=babelHelpers['extends']({width:this.props.width,xui:true,autohide:this.props.autohide,classNames:n?n.split(' '):null,titleID:this.props.titleID,causalElement:this._getCausalElement(),fixedTopPosition:this.props.fixedTopPosition},k||{}),p=babelHelpers['extends']({},k.addedBehaviors,this.props.behaviors);if(this.props.layerHideOnBlur!==false)p.LayerHideOnBlur=c('LayerHideOnBlur');if(this.props.hideOnEscape===true)p.LayerHideOnEscape=c('LayerHideOnEscape');o.addedBehaviors=this.enumerateBehaviors(p);var q=new (c('DialogX'))(o,m);q.conditionShow(this.props.shown);return q;},receiveProps:function l(m,n){this.updateBehaviors(n.behaviors,m.behaviors);if(this.layer){this.layer.setCausalElement(this._getCausalElement());this.layer.conditionShow(m.shown);this.layer.setWidth(m.width);m.shown&&this.layer.updatePosition();}},_getCausalElement:function l(){var m;if(this.props.causalElementRef){m=c('ReactDOM').findDOMNode(this.props.causalElementRef());}else m=this.props.causalElement;return m;}};}};f.exports=i;}),null);
__d('InlineBlock.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes,l={baseline:null,bottom:"_6d",middle:"_6b",top:"_6e"};i=babelHelpers.inherits(m,c('React').Component);j=i&&i.prototype;m.prototype.render=function(){'use strict';var n=this.props,o=n.alignv,p=n.height,q=n.fullWidth,r=babelHelpers.objectWithoutProperties(n,['alignv','height','fullWidth']),s=l[o],t="_6a";if(q)t=c('joinClasses')(t,"_5u5j");var u=c('joinClasses')(t,s);if(this.props.height!=null){var v=c('React').createElement('div',{className:c('joinClasses')("_6a",s),style:{height:p+'px'}});return (c('React').createElement('div',babelHelpers['extends']({},r,{className:c('joinClasses')(this.props.className,t),height:null}),v,c('React').createElement('div',{className:u},this.props.children)));}else return (c('React').createElement('div',babelHelpers['extends']({},r,{className:c('joinClasses')(this.props.className,u)}),this.props.children));};function m(){'use strict';i.apply(this,arguments);}m.propTypes={alignv:k.oneOf(['baseline','bottom','middle','top']),height:k.number,fullWidth:k.bool};m.defaultProps={alignv:'baseline',fullWidth:false};f.exports=m;}),null);
__d('ContextualLayerHideOnScroll',['Event'],(function a(b,c,d,e,f,g){function h(i){'use strict';this._layer=i;}h.prototype.enable=function(){'use strict';this._subscriptions=[this._layer.subscribe('contextchange',this._handleContextChange.bind(this)),this._layer.subscribe('show',this.attach.bind(this)),this._layer.subscribe('hide',this.detach.bind(this))];};h.prototype.disable=function(){'use strict';while(this._subscriptions.length)this._subscriptions.pop().unsubscribe();this.detach();};h.prototype.attach=function(){'use strict';if(this._listener)return;var i=this._layer.getContextScrollParent();if(i===window)return;this._listener=c('Event').listen(i,'scroll',this._layer.hide.bind(this._layer));};h.prototype.detach=function(){'use strict';this._listener&&this._listener.remove();this._listener=null;};h.prototype._handleContextChange=function(){'use strict';this.detach();if(this._layer.isShown())this.attach();};Object.assign(h.prototype,{_subscriptions:[]});f.exports=h;}),null);
__d('ParameterizedPopover',['Arbiter','ArbiterMixin','CSS','DataStore','Event','Focus','Keys','KeyStatus','LayerHideOnEscape','SubscriptionsHandler','Toggler','curry','mixin'],(function a(b,c,d,e,f,g){var h,i;c('Toggler').subscribe(['show','hide'],function(k,l){var m=c('DataStore').get(l.getActive(),'Popover');if(m)if(k==='show'){m.showLayer();}else m.hideLayer();});h=babelHelpers.inherits(j,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;function j(k,l,m,n){'use strict';i.constructor.call(this);this._root=k;this._triggerElem=l;this._behaviors=m;this._config=n||{};this._disabled=!!this._config.disabled;this._listeners=new (c('SubscriptionsHandler'))();if(!this._disabled&&(l.nodeName!=='A'||l.rel!=='toggle'))this._setupClickListener();this._setupKeyListener();this._setupFocusListener();this._setupBlurListener();l.setAttribute('role','button');c('DataStore').set(k,'Popover',this);if(c('Toggler').getActive()===k)this.showLayer();}j.prototype.ensureInit=function(){'use strict';if(!this._layer)this._init();};j.prototype.showLayer=function(){'use strict';this.ensureInit();this._layer.show();c('Toggler').show(this._root);c('CSS').addClass(this._root,'selected');this.inform('show');};j.prototype.getContentRoot=function(){'use strict';return this._root;};j.prototype.getLayer=function(){'use strict';return this._layer;};j.prototype.hideLayer=function(){'use strict';this.ensureInit();this._layer.hide();};j.prototype.isShown=function(){'use strict';return this._layer&&this._layer.isShown();};j.prototype.setLayerContent=function(k){'use strict';this.ensureInit();if(this._layer.setContent)this._layer.setContent(k);};j.prototype._init=function(){'use strict';var k=this._config.layer;k.enableBehaviors([c('LayerHideOnEscape')]);c('Toggler').createInstance(k.getRoot()).setSticky(false);k.subscribe('hide',this._onLayerHide.bind(this));this._behaviors&&k.enableBehaviors(this._behaviors);this._layer=k;this.inform('init',null,c('Arbiter').BEHAVIOR_PERSISTENT);};j.prototype._onLayerHide=function(){'use strict';c('Toggler').hide(this._root);c('CSS').removeClass(this._root,'selected');this.inform('hide');if(c('KeyStatus').getKeyDownCode()===c('Keys').ESC)c('Focus').set(this._triggerElem);};j.prototype.enable=function(){'use strict';if(!this._disabled)return;this._listeners.engage();this._setupClickListener();this._setupKeyListener();this._setupFocusListener();this._setupBlurListener();this._disabled=false;};j.prototype.disable=function(){'use strict';if(this._disabled)return;if(this.isShown())this.hideLayer();this._listeners.release();if(this._triggerElem.getAttribute('rel')==='toggle')this._triggerElem.removeAttribute('rel');this._disabled=true;};j.prototype._setupClickListener=function(){'use strict';this._listeners.addSubscriptions(c('Event').listen(this._triggerElem,'click',c('curry')(c('Toggler').bootstrap,this._triggerElem)));};j.prototype._setupKeyListener=function(){'use strict';this._listeners.addSubscriptions(c('Event').listen(this._triggerElem,'keydown',this._handleKeyEvent.bind(this)));};j.prototype._setupFocusListener=function(){'use strict';this._listeners.addSubscriptions(c('Event').listen(this._triggerElem,'focus',this._handleFocusEvent.bind(this)));};j.prototype._setupBlurListener=function(){'use strict';this._listeners.addSubscriptions(c('Event').listen(this._triggerElem,'blur',this._handleBlurEvent.bind(this)));};j.prototype._handleKeyEvent=function(event){'use strict';if(event.getModifiers().any)return;var k=c('Event').getKeyCode(event);switch(k){case c('Keys').DOWN:case c('Keys').UP:if(this._config.disableArrowKeyActivation)return;if(!this.isShown())c('Toggler').bootstrap(this._triggerElem);break;case c('Keys').RETURN:if(!this._config.enableActivationOnEnter)return;if(!this.isShown())c('Toggler').bootstrap(this._triggerElem);break;case c('Keys').SPACE:c('Toggler').bootstrap(this._triggerElem);break;default:return;}event.prevent();};j.prototype._handleFocusEvent=function(event){'use strict';c('CSS').addClass(this._root,'focused');};j.prototype._handleBlurEvent=function(event){'use strict';c('CSS').removeClass(this._root,'focused');};j.prototype.destroy=function(){'use strict';this.disable();c('DataStore').remove(this._root,'Popover');};Object.assign(j.prototype,{_layer:null});f.exports=j;}),null);
__d('Popover',['ContextualLayer','ContextualLayerHideOnScroll','DOM','ParameterizedPopover'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('ParameterizedPopover'));i=h&&h.prototype;j.prototype._init=function(){'use strict';var k=new (c('ContextualLayer'))({context:this._triggerElem,position:'below',arrowDimensions:{offset:12,length:16}},c('DOM').create('div'));k.enableBehaviors([c('ContextualLayerHideOnScroll')]);this._config.layer=k;if(this._config.alignh)k.setAlignment(this._config.alignh);if(this._config.layer_content)k.setContent(this._config.layer_content);if(this._config.position)k.setPosition(this._config.position);if(this._config.arrowDimensions)k.setArrowDimensions(this._config.arrowDimensions);i._init.call(this);};function j(){'use strict';h.apply(this,arguments);}f.exports=j;}),null);
__d('PopoverMenu',['Arbiter','ArbiterMixin','ARIA','BehaviorsMixin','Event','Focus','Keys','KeyStatus','SubscriptionsHandler','VirtualCursorStatus','mixin'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('mixin')(c('ArbiterMixin'),c('BehaviorsMixin')));i=h&&h.prototype;function j(k,l,m,n){'use strict';i.constructor.call(this);this._popover=k;this._triggerElem=l;this._getInitialMenu=typeof m!=='function'?function(){return m;}:m;this._subscriptions=new (c('SubscriptionsHandler'))();this._subscriptions.addSubscriptions(k.subscribe('init',this._onLayerInit.bind(this)),k.subscribe('show',this._onPopoverShow.bind(this)),k.subscribe('hide',this._onPopoverHide.bind(this)),c('Event').listen(this._triggerElem,'keydown',this._handleKeyEventOnTrigger.bind(this)),c('VirtualCursorStatus').add(this._triggerElem,this._checkInitialFocus.bind(this)));n&&this.enableBehaviors(n);}j.prototype.getContentRoot=function(){'use strict';return this._popover.getContentRoot();};j.prototype.setMenu=function(k){'use strict';if(this._menu&&this._menu!==k)this._menu.destroy();this._menu=k;var l=k.getRoot();this._popover.setLayerContent(l);k.subscribe('done',this._onMenuDone.bind(this));if(this._popoverShown)this._menu.onShow();c('ARIA').controls(this._triggerElem,l);this.inform('setMenu',null,c('Arbiter').BEHAVIOR_PERSISTENT);};j.prototype.setInitialFocus=function(k,l){'use strict';if(l)k.focusAnItem();};j.prototype.getPopover=function(){'use strict';return this._popover;};j.prototype.getTriggerElem=function(){'use strict';return this._triggerElem;};j.prototype.getInitialMenu=function(){'use strict';return this._getInitialMenu();};j.prototype.getMenu=function(){'use strict';return this._menu;};j.prototype._onLayerInit=function(){'use strict';if(!this._menu)this.setMenu(this._getInitialMenu());this._popover.getLayer().subscribe('key',this._handleKeyEvent.bind(this));};j.prototype._onPopoverShow=function(){'use strict';if(this._menu)this._menu.onShow();this._checkInitialFocus();this._popoverShown=true;};j.prototype._checkInitialFocus=function(){'use strict';var k=c('KeyStatus').isKeyDown()||c('VirtualCursorStatus').isVirtualCursorTriggered();if(this._menu)this.setInitialFocus(this._menu,k);};j.prototype._onPopoverHide=function(){'use strict';if(this._menu)this._menu.onHide();this._popoverShown=false;};j.prototype._handleKeyEvent=function(k,l){'use strict';if(l.target===this._triggerElem)return;var m=c('Event').getKeyCode(l);if(m===c('Keys').TAB){this._popover.hideLayer();c('Focus').set(this._triggerElem);return;}if(l.getModifiers().any)return;switch(m){case c('Keys').RETURN:if(!this.getMenu().getFocusedItem())this.inform('returnWithoutFocusedItem');return;default:if(m===c('Keys').SPACE&&l.target.type==='file')return;if(this._menu.handleKeydown(m,l)===false){this._menu.blur();this._menu.handleKeydown(m,l);}break;}l.prevent();};j.prototype._handleKeyEventOnTrigger=function(k){'use strict';var l=c('Event').getKeyCode(k),m=String.fromCharCode(l).toLowerCase();if(/^\w$/.test(m)){this._popover.showLayer();this._menu.blur();if(this._menu.handleKeydown(l,k)===false){this._popover.hideLayer();c('Focus').set(this._triggerElem);}}};j.prototype._onMenuDone=function(k){'use strict';setTimeout(function(){this._popover.hideLayer();c('Focus').set(this._triggerElem);}.bind(this),0);};j.prototype.enable=function(){'use strict';this._popover.enable();};j.prototype.disable=function(){'use strict';this._popover.disable();};j.prototype.destroy=function(){'use strict';this._subscriptions.release();this._popover.destroy();this._getInitialMenu().destroy();this._menu&&this._menu.destroy();};Object.assign(j.prototype,{_popoverShown:false});f.exports=j;}),null);
__d('PopoverMenu.react',['cx','CSS','InlineBlock.react','Popover','PopoverMenu','React','ReactDOM','SubscriptionsHandler','joinClasses','areEqual','setImmediate'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.$ReactPopoverMenu1=null,this.$ReactPopoverMenu6=function(){if(this.$ReactPopoverMenu1){this.$ReactPopoverMenu1.release();this.$ReactPopoverMenu1=null;}this.$ReactPopoverMenu7();this.$ReactPopoverMenu3.setMenu(this.$ReactPopoverMenu4(this.props.menu));this.$ReactPopoverMenu5();}.bind(this),this.$ReactPopoverMenu4=function(r){var s=r.props,t=new r.type(s);this.$ReactPopoverMenu1=new (c('SubscriptionsHandler'))();if(s.onItemClick)this.$ReactPopoverMenu1.addSubscriptions(t.subscribe('itemclick',s.onItemClick));if(s.onItemFocus)this.$ReactPopoverMenu1.addSubscriptions(t.subscribe('focus',s.onItemFocus));if(s.onItemBlur)this.$ReactPopoverMenu1.addSubscriptions(t.subscribe('blur',s.onItemBlur));if(s.onChange)this.$ReactPopoverMenu1.addSubscriptions(t.subscribe('change',s.onChange));if(this.props.onShow)this.$ReactPopoverMenu1.addSubscriptions(this.$ReactPopoverMenu2.subscribe('show',this.props.onShow));if(this.props.onHide)this.$ReactPopoverMenu1.addSubscriptions(this.$ReactPopoverMenu2.subscribe('hide',this.props.onHide));return t;}.bind(this),this.getMenu=function(){return this.$ReactPopoverMenu3.getMenu();}.bind(this),this.isShown=function(){return !!(this.$ReactPopoverMenu2&&this.$ReactPopoverMenu2.isShown());}.bind(this),this.showPopover=function(r){this.$ReactPopoverMenu2.showLayer();if(r){var s=this.$ReactPopoverMenu3.getMenu();s.blur();s.focusAnItem(r);}}.bind(this),this.hidePopover=function(){var r=this.$ReactPopoverMenu2;if(r&&r.isShown())r.hideLayer();}.bind(this),this.getFocusedItem=function(){var r=this.$ReactPopoverMenu3.getMenu();return r.getFocusedItem();}.bind(this),this.$ReactPopoverMenu7=function(){var r=this.getMenu();r&&r.forEachItem(function(s){var t=s.getRoot().firstElementChild;t&&c('ReactDOM').unmountComponentAtNode(t);});}.bind(this),n;}l.getFirstChild=function(m){'use strict';var n=m.children;return Array.isArray(n)?n[0]:n;};l.getButtonSize=function(m){'use strict';var n=l.getFirstChild(m);return n&&n.type.getButtonSize(n.props);};l.prototype.componentDidMount=function(){'use strict';var m=c('ReactDOM').findDOMNode(this.refs.root),n=m.firstChild;c('CSS').addClass(n,"_p");this.$ReactPopoverMenu2=new (c('Popover'))(m,n,this.props.layerBehaviors,{alignh:this.props.alignh,position:this.props.position,disabled:this.props.disabled,arrowDimensions:{offset:0,length:0},disableArrowKeyActivation:this.props.disableArrowKeyActivation,enableActivationOnEnter:this.props.enableActivationOnEnter});this.$ReactPopoverMenu3=new (c('PopoverMenu'))(this.$ReactPopoverMenu2,n,this.$ReactPopoverMenu4(this.props.menu),this.props.behaviors);this.$ReactPopoverMenu5();};l.prototype.componentDidUpdate=function(m){'use strict';if(!c('areEqual')(m.menu,this.props.menu))c('setImmediate')(this.$ReactPopoverMenu6);if(this.props.alignh!==m.alignh)this.$ReactPopoverMenu3.getPopover().getLayer().setAlignment(this.props.alignh);if(this.props.disabled!==m.disabled)if(this.props.disabled){this.$ReactPopoverMenu3.disable();}else this.$ReactPopoverMenu3.enable();};l.prototype.$ReactPopoverMenu5=function(){'use strict';if(this.props.onReturnWithoutFocusedItem)this.$ReactPopoverMenu1.addSubscriptions(this.$ReactPopoverMenu3.subscribe('returnWithoutFocusedItem',this.props.onReturnWithoutFocusedItem));};l.prototype.render=function(){'use strict';var m=c('React').Children.map(this.props.children,function(o,p){if(p===0){return c('React').cloneElement(o,{className:c('joinClasses')(o.props.className,"_p")});}else return o;}),n=Object.assign({},this.props);delete n.onShow;delete n.onHide;delete n.alignh;delete n.position;delete n.layerBehaviors;delete n.behaviors;delete n.menu;delete n.disabled;delete n.disableArrowKeyActivation;delete n.enableActivationOnEnter;return c('React').createElement(c('InlineBlock.react'),babelHelpers['extends']({},n,{className:c('joinClasses')(this.props.className,"uiPopover"),ref:'root',disabled:null}),m);};l.prototype.componentWillUnmount=function(){'use strict';this.hidePopover();if(this.$ReactPopoverMenu1){this.$ReactPopoverMenu1.release();this.$ReactPopoverMenu1=null;}this.$ReactPopoverMenu3&&this.$ReactPopoverMenu3.destroy();};l.propTypes={alignh:k.oneOf(['left','center','right']),alignv:k.oneOf(['baseline','bottom','middle','top']),position:k.oneOf(['above','below','left','right']),layerBehaviors:k.array,menu:k.object.isRequired,disabled:k.bool,disableArrowKeyActivation:k.bool,enableActivationOnEnter:k.bool,onReturnWithoutFocusedItem:k.func};l.defaultProps={alignv:'middle'};f.exports=l;}),null);
__d('MenuItemNoAction',['MenuItem'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('MenuItem'));i=h&&h.prototype;j.prototype.hasAction=function(){'use strict';return false;};function j(){'use strict';h.apply(this,arguments);}f.exports=j;}),null);
__d('MenuSelectableItem',['cx','CSS','DOM','MenuItem'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('MenuItem'));j=i&&i.prototype;function k(l){'use strict';j.constructor.call(this,l);this._ARIARole='menuitemcheckbox';this._selected=!!this._data.selected;}k.prototype.getIcon=function(){'use strict';return this._data.icon;};k.prototype.setIcon=function(l){'use strict';c('DOM').replace(this._data.icon,l);this._data.icon=l;};k.prototype.isSelected=function(){'use strict';return this._selected;};k.prototype.select=function(){'use strict';if(this.isDisabled())return false;c('CSS').addClass(this._root,"_54nd");this._anchor.setAttribute('aria-checked','true');this._selected=true;};k.prototype.deselect=function(){'use strict';c('CSS').removeClass(this._root,"_54nd");this._anchor.setAttribute('aria-checked','false');this._selected=false;};k.prototype.render=function(){'use strict';var l=j.render.call(this);if(this._data.selected){c('CSS').addClass(l,"_54nd");this._anchor.setAttribute('aria-checked','true');}return l;};Object.assign(k.prototype,{_selected:false});f.exports=k;}),null);
__d('MenuTheme',['cx'],(function a(b,c,d,e,f,g,h){f.exports={className:"_569t"};}),null);
__d("SelectableMenuUtils",[],(function a(b,c,d,e,f,g){var h={doesItemSupportSelect:function j(k){return i(k);},isSelected:function j(k){return i(k)&&k.isSelected();}};function i(j){return j.select&&j.deselect&&j.isSelected;}f.exports=h;}),null);
__d('SelectableMenu',['Menu','arrayContains','createArrayFromMixed','SelectableMenuUtils'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('Menu'));i=h&&h.prototype;j.prototype.focusAnItem=function(){'use strict';for(var k=0;k<this._items.length;k++)if(c('SelectableMenuUtils').isSelected(this._items[k]))if(this._focusItem(this._items[k])!==false)return true;return i.focusAnItem.call(this);};j.prototype.setValue=function(k){'use strict';if(!this._root)this._render();var l=c('createArrayFromMixed')(k);this._items.forEach(function(m){if(c('SelectableMenuUtils').doesItemSupportSelect(m))if(c('arrayContains')(l,m.getValue())){m.select();}else if(c('SelectableMenuUtils').isSelected(m))m.deselect();});this.inform('change',this.getSelection());};j.prototype._handleItemClick=function(k,l){'use strict';if(!c('SelectableMenuUtils').doesItemSupportSelect(k))return i._handleItemClick.call(this,k,l);var m=this.inform('itemclick',{item:k,event:l});if(m)return;if(this._config.multiple){var n=c('SelectableMenuUtils').isSelected(k)?k.deselect():k.select();if(n!==false)this.inform('change',this.getSelection());}else{if(!c('SelectableMenuUtils').isSelected(k))if(k.select()!==false){this._items.forEach(function(o){if(c('SelectableMenuUtils').isSelected(o)&&o!==k)o.deselect();});this.inform('change',this.getSelection());}this.done();}return k.handleClick(l);};j.prototype.getSelection=function(){'use strict';var k=[];this._items.forEach(function(l){if(c('SelectableMenuUtils').isSelected(l))k.push({label:l.getLabel(),value:l.getValue(),item:l});});if(!this._config.multiple)k=k[0];return k;};function j(){'use strict';h.apply(this,arguments);}f.exports=j;}),null);
__d('ReactMenu',['cx','Menu','MenuItem','MenuItemNoAction','MenuSelectableItem','MenuTheme','React','SelectableMenu','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,k,l;function m(q){var r=[];c('React').Children.forEach(q,function(s){if(s)r.push(s);});return r;}function n(q){q.isReactLegacyFactory={};q.type=q;}i=babelHelpers.inherits(o,c('Menu'));j=i&&i.prototype;function o(q,r){'use strict';var s=babelHelpers['extends']({theme:c('MenuTheme'),maxheight:q?q.maxheight:null,className:q?q.className:null},r);j.constructor.call(this,m(q.children),s);}n(o);k=babelHelpers.inherits(p,c('SelectableMenu'));l=k&&k.prototype;function p(q,r){'use strict';var s=babelHelpers['extends']({className:c('joinClasses')("_57di",q?q.className:null),theme:c('MenuTheme'),multiple:q&&q.multiple,maxheight:q?q.maxheight:null},r);l.constructor.call(this,m(q.children),s);}n(p);o.SelectableMenu=p;n(c('MenuItem'));o.Item=c('MenuItem');o.ItemNoAction=c('MenuItemNoAction');n(c('MenuSelectableItem'));o.SelectableItem=c('MenuSelectableItem');f.exports=o;}),null);
__d('XUIDialogButton.react',['cx','React','XUIButton.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){'use strict';var m=this.props.action,n=(m=='confirm'?"layerConfirm":'')+(m=='cancel'?' '+"layerCancel":'')+(m=='button'?' '+"layerButton":''),o=this.props.href;if(m=='cancel'){o='#';}else if(m=='button')o=o||'#';return (c('React').createElement(c('XUIButton.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,n),href:o})));};function l(){'use strict';i.apply(this,arguments);}l.propTypes={action:k.oneOf(['cancel','confirm','button'])};f.exports=l;}),null);
__d('XUIDialogCancelButton.react',['fbt','React','XUIDialogButton.react'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return (c('React').createElement(c('XUIDialogButton.react'),babelHelpers['extends']({},this.props,{action:'cancel',label:h._("\u53d6\u6d88")})));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('XUIDialogOkayButton.react',['cx','fbt','React','XUIDialogButton.react','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;m.prototype.render=function(){'use strict';return (c('React').createElement(c('XUIDialogButton.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_2z1w"),action:this.props.action,label:i._("\u78ba\u5b9a")})));};function m(){'use strict';j.apply(this,arguments);}m.propTypes={action:l.oneOf(['confirm','cancel','button']).isRequired};f.exports=m;}),null);
__d('XUIDialog.react',['AbstractDialog.react','LayerFadeOnShow','ReactLayer'],(function a(b,c,d,e,f,g){var h=c('ReactLayer').createClass(c('AbstractDialog.react').createSpec({displayName:'XUIDialog',addedBehaviors:{LayerFadeOnShow:c('LayerFadeOnShow')}}));f.exports=h;}),null);
__d('XUIDialogBody.react',['cx','React','joinClasses','XUIText.react'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){'use strict';var m="_4-i2"+(!this.props.useCustomPadding?' '+"_pig":'');return (c('React').createElement(c('XUIText.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,m),display:'block',size:this.props.fontSize}),this.props.children));};function l(){'use strict';i.apply(this,arguments);}l.propTypes={fontSize:k.oneOf(['medium','inherit']),useCustomPadding:k.bool};l.defaultProps={fontSize:'medium'};f.exports=l;}),null);
__d('XUIDialogFooter.react',['cx','LeftRight.react','React','XUIOverlayFooter.react','XUIText.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){'use strict';var m="_5a8u"+(this.props.fullBleedBorder?' '+"_27qq":'');return (c('React').createElement(c('XUIOverlayFooter.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,m)}),c('React').createElement(c('XUIText.react'),{display:'block',fontSize:this.props.fontSize},c('React').createElement(c('LeftRight.react'),null,c('React').createElement('div',null,this.props.leftContent),c('React').createElement('div',null,this.props.children)))));};function l(){'use strict';i.apply(this,arguments);}l.propTypes={fontSize:k.oneOf(['medium','inherit']),fullBleedBorder:k.bool,leftContent:k.object};l.defaultProps={fontSize:'medium'};f.exports=l;}),null);
__d('ReactXUIMenu',['ReactMenu','XUIMenuTheme','XUIMenuWithSquareCorner'],(function a(b,c,d,e,f,g){var h,i,j,k;function l(o){o.isReactLegacyFactory={};o.type=o;}h=babelHelpers.inherits(m,c('ReactMenu'));i=h&&h.prototype;function m(o){'use strict';var p={theme:c('XUIMenuTheme')};if(!o||o.withsquarecorner!==false)p.behaviors=[c('XUIMenuWithSquareCorner')];i.constructor.call(this,o,p);}l(m);j=babelHelpers.inherits(n,c('ReactMenu').SelectableMenu);k=j&&j.prototype;function n(o){'use strict';var p={theme:c('XUIMenuTheme')};if(!o||o.withsquarecorner!==false)p.behaviors=[c('XUIMenuWithSquareCorner')];k.constructor.call(this,o,p);}l(n);m.SelectableMenu=n;m.Item=c('ReactMenu').Item;m.SelectableItem=c('ReactMenu').SelectableItem;f.exports=m;}),null);
__d("PhotosUploadID",[],(function a(b,c,d,e,f,g){var h=1024,i={getNewID:function j(){return (h++).toString();}};f.exports=i;}),null);
__d('PopoverMenuOverlappingBorder',['cx','CSS','DOM','Style','shield'],(function a(b,c,d,e,f,g,h){function i(j){'use strict';this._popoverMenu=j;this._popover=j.getPopover();this._triggerElem=j.getTriggerElem();}i.prototype.enable=function(){'use strict';this._setMenuSubscription=this._popoverMenu.subscribe('setMenu',c('shield')(this._onSetMenu,this));};i.prototype.disable=function(){'use strict';this._popoverMenu.unsubscribe(this._setMenuSubscription);this._setMenuSubscription=null;this._removeBorderSubscriptions();this._removeShortBorder();};i.prototype._onSetMenu=function(){'use strict';this._removeBorderSubscriptions();this._menu=this._popoverMenu.getMenu();this._renderShortBorder(this._menu.getRoot());this._showSubscription=this._popover.subscribe('show',c('shield')(this._updateBorder,this));var j=this._updateBorder.bind(this);this._menuSubscription=this._menu.subscribe(['change','resize'],function(){setTimeout(j,0);});this._updateBorder();};i.prototype._updateBorder=function(){'use strict';var j=this._menu.getRoot(),k=this._triggerElem.offsetWidth,l=Math.max(j.offsetWidth-k,0);c('Style').set(this._shortBorder,'width',l+'px');};i.prototype._renderShortBorder=function(j){'use strict';this._shortBorder=c('DOM').create('div',{className:"_54hx"});c('DOM').appendContent(j,this._shortBorder);c('CSS').addClass(j,"_54hy");};i.prototype._removeShortBorder=function(){'use strict';if(this._shortBorder){c('DOM').remove(this._shortBorder);this._shortBorder=null;c('CSS').removeClass(this._popoverMenu.getMenu().getRoot(),"_54hy");}};i.prototype._removeBorderSubscriptions=function(){'use strict';if(this._showSubscription){this._popover.unsubscribe(this._showSubscription);this._showSubscription=null;}if(this._menuSubscription){this._menu.unsubscribe(this._menuSubscription);this._menuSubscription=null;}};Object.assign(i.prototype,{_shortBorder:null,_setMenuSubscription:null,_showSubscription:null,_menuSubscription:null});f.exports=i;}),null);
__d('ContextualLayerAutoFlip',['ContextualLayerDimensions','DOMDimensions','Vector','Rect','arrayContains','getDocumentScrollElement'],(function a(b,c,d,e,f,g){function h(j,k){k=new (c('Rect'))(k).convertTo(j.domain);var l=Math.max(j.l,k.l),m=Math.min(j.r,k.r);return Math.max(m-l,0);}function i(j){'use strict';this._layer=j;}i.prototype.enable=function(){'use strict';this._subscription=this._layer.subscribe('adjust',this._adjustOrientation.bind(this));if(this._layer.isShown())this._layer.updatePosition();};i.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;if(this._layer.isShown())this._layer.updatePosition();};i.prototype._adjustOrientation=function(j,k){'use strict';var l=this.getValidPositions(k);if(!l.length){k.invalidate();return;}var m=c('ContextualLayerDimensions').getViewportRect(this._layer),n=this._getValidAlignments(k),o,p,q;for(o=0;o<n.length;o++){k.setAlignment(n[o]);for(p=0;p<l.length;p++){k.setPosition(l[p]);q=c('ContextualLayerDimensions').getLayerRect(this._layer,k);if(m.contains(q))return;}}var r=-1;if(k.getPreferMoreContentShownRect()){var s=c('DOMDimensions').getDocumentDimensions(),t=new (c('Rect'))(m).convertTo('document'),u=99999;for(p=0;p<l.length;p++){k.setPosition(l[p]);q=c('ContextualLayerDimensions').getLayerRect(this._layer,k);var v=new (c('Rect'))(q).convertTo('document');if(v.l>=0&&v.r<=s.width&&v.t>=43&&v.b<=s.height){var w=t.l-v.l,x=v.r-t.r,y=t.t-v.t,z=v.b-t.b,aa=(w>0?w:0)+(x>0?x:0)+(y>0?y:0)+(z>0?z:0);if(aa<u){r=p;u=aa;}}}}if(r>=0){k.setPosition(l[r]);}else k.setPosition(c('arrayContains')(l,'below')?'below':l[0]);var ba,ca=0,da=0;for(o=0;o<n.length;o++){k.setAlignment(n[o]);q=c('ContextualLayerDimensions').getLayerRect(this._layer,k);ba=h(m,q);if(ba>da){da=ba;ca=o;}}k.setAlignment(n[ca]);};i.prototype.getValidPositions=function(j){'use strict';var k=[j.getPosition(),j.getOppositePosition()],l=this._layer.getContextScrollParent();if(l===window||l===c('getDocumentScrollElement')())return k;var m=this._layer.getContext(),n=c('Vector').getElementPosition(l,'viewport').y,o=c('Vector').getElementPosition(m,'viewport').y;if(j.isVertical()){return k.filter(function(q){if(q==='above'){return o>=n;}else{var r=n+l.offsetHeight,s=o+m.offsetHeight;return s<=r;}});}else{var p=n+l.offsetHeight;if(o>=n&&o+m.offsetHeight<=p){return k;}else return [];}};i.prototype._getValidAlignments=function(j){'use strict';var k=['left','right','center'],l=j.getAlignment(),m=k.indexOf(l);if(m>0){k.splice(m,1);k.unshift(l);}return k;};Object.assign(i.prototype,{_subscription:null});f.exports=i;}),null);
__d('getInlineBoundingRect',['Rect'],(function a(b,c,d,e,f,g){function h(i,j){var k=i.getClientRects();if(!j||k.length===0)return c('Rect').getElementBounds(i);var l,m=false;for(var n=0;n<k.length;n++){var o=new (c('Rect'))(Math.round(k[n].top),Math.round(k[n].right),Math.round(k[n].bottom),Math.round(k[n].left),'viewport').convertTo('document'),p=o.getPositionVector(),q=p.add(o.getDimensionVector());if(!l||p.x<=l.l&&p.y>l.t){if(m)break;l=new (c('Rect'))(p.y,q.x,q.y,p.x,'document');}else{l.t=Math.min(l.t,p.y);l.b=Math.max(l.b,q.y);l.r=q.x;}if(o.contains(j))m=true;}if(!l)l=c('Rect').getElementBounds(i);return l;}f.exports=h;}),null);
__d('Tooltip',['fbt','AsyncRequest','ContextualLayer','ContextualLayerAutoFlip','CSS','DOM','Event','Style','TooltipData','Vector','emptyFunction','getElementText','getInlineBoundingRect','getOrCreateDOMID','nl2br','setImmediate'],(function a(b,c,d,e,f,g,h){var i=null,j=null,k=null,l=null,m=null,n=null,o=[],p=[];function q(){if(!l){m=c('DOM').create('div',{className:'tooltipContent','data-testid':'tooltip_testid'});n=c('getOrCreateDOMID')(m);var u=c('DOM').create('i',{className:'arrow'}),v=c('DOM').create('div',{className:'uiTooltipX'},[m,u]);l=new (c('ContextualLayer'))({},v);l.shouldSetARIAProperties(false);l.enableBehavior(c('ContextualLayerAutoFlip'));}}function r(u,v){t._show(u,h._("\u8f09\u5165\u4e2d\u22ef\u22ef"));new (c('AsyncRequest'))(v).setHandler(function(w){t._show(u,w.getPayload());}).setErrorHandler(c('emptyFunction')).send();}var s;c('Event').listen(document.documentElement,'mouseover',function(event){s=event;c('setImmediate')(function(){s=null;});});var t=babelHelpers['extends']({},c('TooltipData'),{isActive:function u(v){return v===i;},process:function u(v,w){if(!c('DOM').contains(v,w))return;if(v!==i){t.fetchIfNecessary(v);var x=t._get(v);if(x.suppress)return;if(x.delay){t._showWithDelay(v,x.delay);}else t.show(v);}},fetchIfNecessary:function u(v){var w=v.getAttribute('data-tooltip-uri');if(w){v.removeAttribute('data-tooltip-uri');r(v,w);}},hide:function u(){if(i){l.hide();i=null;while(o.length)o.pop().remove();}},_show:function u(v,w){t._store({context:v,content:w});t.isActive(v)&&t.show(v);},show:function u(v){var w=function ha(){v.setAttribute('aria-describedby',n);l.show();},x=function ha(){v.removeAttribute('aria-describedby');t.hide();},y=function ha(ia){if(!c('DOM').contains(i,ia.getTarget()))x();};q();x();var z=t._get(v);if(z.suppress||t.allSuppressed)return;var aa=z.content;if(z.overflowDisplay){if(v.offsetWidth>=v.scrollWidth)return;if(!aa)aa=c('getElementText')(v);}if(!aa)return;var ba=0,ca=0;if(z.position==='left'||z.position==='right'){ca=(v.offsetHeight-28)/2;}else if(z.alignH!=='center'){var da=v.offsetWidth;if(da<32)ba=(da-32)/2*(z.alignH==='right'?-1:1);}l.setContextWithBounds(v,c('getInlineBoundingRect')(v,s&&c('Vector').getEventPosition(s))).setOffsetX(ba).setOffsetY(ca).setPosition(z.position).setAlignment(z.alignH);if(typeof aa==='string'){c('CSS').addClass(l.getRoot(),'invisible_elem');var ea=c('DOM').create('span',{},c('nl2br')(aa)),fa=c('DOM').create('div',{className:'tooltipText'},ea);c('DOM').setContent(m,fa);w();c('CSS').removeClass(l.getRoot(),'invisible_elem');}else{c('DOM').setContent(m,aa);w();}o.push(c('Event').listen(document.documentElement,'mouseover',y),c('Event').listen(document.documentElement,'focusin',y));var ga=c('Style').getScrollParent(v);if(ga!==window)o.push(c('Event').listen(ga,'scroll',x));if(!z.persistOnClick)o.push(c('Event').listen(v,'click',x));i=v;},_showWithDelay:function u(v,w){if(v!==j)t._clearDelay();if(!k){var x=function y(z){if(!c('DOM').contains(j,z.getTarget()))t._clearDelay();};p.push(c('Event').listen(document.documentElement,'mouseover',x),c('Event').listen(document.documentElement,'focusin',x));j=v;k=setTimeout(function(){t._clearDelay();t.show(v);},w);}},_clearDelay:function u(){clearTimeout(k);j=null;k=null;while(p.length)p.pop().remove();}});c('Event').listen(window,'scroll',t.hide);f.exports=t;}),null);
__d('ContextualLayerPositionClassOnContext',['cx','CSS'],(function a(b,c,d,e,f,g,h){function i(k){'use strict';this._layer=k;}i.prototype.enable=function(){'use strict';this._subscription=this._layer.subscribe('reposition',this._updateClassName.bind(this));if(this._layer.isShown())this._updateClassName();};i.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;if(this._prevClassName){c('CSS').removeClass(this._layer.getContext(),this._prevClassName);this._prevClassName=null;}};i.prototype._updateClassName=function(k,l){'use strict';var m=this._layer.getContext(),n=j(l);if(this._prevClassName){if(this._prevClassName===n)return;c('CSS').removeClass(m,this._prevClassName);}c('CSS').addClass(m,n);this._prevClassName=n;};function j(k){var l=k.getAlignment(),m=k.getPosition();if(m==='below'){if(l==='left'){return "_nk";}else if(l==='right'){return "_nl";}else return "_nm";}else if(m==='above'){if(l==='left'){return "_nn";}else if(l==='right'){return "_no";}else return "_np";}else if(m==='left'){return "_nq";}else return "_nr";}Object.assign(i.prototype,{_subscription:null,_prevClassName:null});f.exports=i;}),null);
__d('LayerAutoFocusReact',['focusWithinLayer'],(function a(b,c,d,e,f,g){'use strict';function h(i){this._layer=i;this._subscription=null;}h.prototype.enable=function(){if(this._layer.containsReactComponent)this._subscription=this._layer.subscribe('reactshow',this._focus.bind(this));};h.prototype.disable=function(){if(this._subscription){this._subscription.unsubscribe();this._subscription=null;}};h.prototype._focus=function(){var i=this._layer.getRoot();i&&c('focusWithinLayer')(i);};f.exports=h;}),null);
__d('LayerDestroyOnHide',[],(function a(b,c,d,e,f,g){function h(i){'use strict';this._layer=i;}h.prototype.enable=function(){'use strict';var i=this._layer.destroy.bind(this._layer);this._subscription=this._layer.subscribe('hide',function(){setTimeout(i,0);});};h.prototype.disable=function(){'use strict';if(this._subscription){this._subscription.unsubscribe();this._subscription=null;}};Object.assign(h.prototype,{_subscription:null});f.exports=h;}),null);