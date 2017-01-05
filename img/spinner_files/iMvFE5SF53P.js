if (self.CavalryLogger) { CavalryLogger.start_js(["M56bS"]); }

__d('Alignment',['invariant','DOMVector','Style','containsNode'],(function a(b,c,d,e,f,g,h){function i(k,l,m){'use strict';this.$Anchor1=l;this.$Anchor2=m;this.$Anchor3=k;}i.prototype.getElement=function(){'use strict';return this.$Anchor3;};i.prototype.getX=function(){'use strict';return this.$Anchor1;};i.prototype.getY=function(){'use strict';return this.$Anchor2;};i.prototype.isCorner=function(){'use strict';return ((this.$Anchor1===i.LEFT||this.$Anchor1===i.RIGHT)&&(this.$Anchor2===i.TOP||this.$Anchor2===i.BOTTOM));};i.prototype.getPosition=function(k){'use strict';return c('DOMVector').getElementPosition(this.$Anchor3,k).add(this.getX()*this.$Anchor3.offsetWidth,this.getY()*this.$Anchor3.offsetHeight);};Object.assign(i,{LEFT:0,CENTER:.5,RIGHT:1,TOP:0,MIDDLE:.5,BOTTOM:1});function j(k,l,m){'use strict';this.$Alignment1=k;this.$Alignment2=l;this.$Alignment3=m;c('containsNode')(k.getElement(),l.getElement())||h(0);k.isCorner()||h(0);}j.prototype.align=function(){'use strict';j.$Alignment4(this.$Alignment1,function(){return j.measure(this.$Alignment2,this.$Alignment3);}.bind(this));};j.$Alignment4=function(k,l){'use strict';var m=k.getElement();c('Style').apply(m,{left:k.getX()===i.LEFT?'0':'',right:k.getX()===i.RIGHT?'0':'',top:k.getY()===i.TOP?'0':'',bottom:k.getY()===i.BOTTOM?'0':''});var n=l();if(k.getX()===i.LEFT){c('Style').set(m,'left',n.x+'px');}else if(k.getX()===i.RIGHT)c('Style').set(m,'right',-n.x+'px');if(k.getY()===i.TOP){c('Style').set(m,'top',n.y+'px');}else if(k.getY()===i.BOTTOM)c('Style').set(m,'bottom',-n.y+'px');};j.position=function(k,l){'use strict';j.$Alignment4(k,function(){var m=c('DOMVector').getElementPosition(k.getElement());return l.convertTo('document').sub(m);});};j.measure=function(k,l){'use strict';var m=k.getPosition('document'),n=l.getPosition('document');return n.sub(m);};j.Anchor=i;f.exports=j;}),null);
__d('SingleSelectorBase',['csx','cx','invariant','ArbiterMixin','Alignment','BehaviorsMixin','Button','CSS','DOM','DOMQuery','Event','Layer','LayerBounds','Locale','Rect','ParameterizedPopover','PopoverMenu','Scroll','SelectableMenuUtils','Style','getOverlayZIndex','mixin','throttle'],(function a(b,c,d,e,f,g,h,i,j){var k,l,m=c('Alignment').Anchor,n=c('Locale').isRTL()?m.RIGHT:m.LEFT,o={},p=16;k=babelHelpers.inherits(q,c('mixin')(c('ArbiterMixin'),c('BehaviorsMixin')));l=k&&k.prototype;function q(s,t,u,v){'use strict';l.constructor.call(this);this.$SingleSelectorBase1=s;this.$SingleSelectorBase2=null;this.$SingleSelectorBase3=o;this.$SingleSelectorBase4=c('DOM').create('div',{});this.$SingleSelectorBase5=new (c('Layer'))({classNames:["_5xew"]},this.$SingleSelectorBase4);this.$SingleSelectorBase6=new (c('ParameterizedPopover'))(s.parentNode,s,[],babelHelpers['extends']({},u,{layer:this.$SingleSelectorBase5}));this.$SingleSelectorBase6.subscribe('show',this.$SingleSelectorBase7.bind(this));this.$SingleSelectorBase6.subscribe('hide',this.$SingleSelectorBase8.bind(this));this.$SingleSelectorBase9=new (c('PopoverMenu'))(this.$SingleSelectorBase6,s,t,[]);this.setMenu(t);if(v&&v.behaviors)this.enableBehaviors(v.behaviors);}q.prototype.$SingleSelectorBase7=function(){'use strict';this.$SingleSelectorBase10();this.$SingleSelectorBase11();c('CSS').conditionClass(this.$SingleSelectorBase5.getRoot(),"_5xex",this.$SingleSelectorBase12());c('Style').set(this.$SingleSelectorBase5.getRoot(),'min-width',this.$SingleSelectorBase1.offsetWidth+p+'px');var s=c('DOM').scry(this.$SingleSelectorBase4,'div.uiScrollableAreaWrap')[0];if(s){var t=c('Alignment').measure(new m(this.$SingleSelectorBase13(),n,m.MIDDLE),new m(this.$SingleSelectorBase2.getRoot(),n,m.MIDDLE));c('Scroll').setTop(s,c('Scroll').getTop(s)-t.y);}this.align();this.getMenu().focusAnItem();if(!this.$SingleSelectorBase14)this.$SingleSelectorBase14=c('Event').listen(window,'resize',c('throttle')(this.align.bind(this)));this.inform('show');};q.prototype.$SingleSelectorBase8=function(){'use strict';if(this.$SingleSelectorBase14){this.$SingleSelectorBase14.remove();this.$SingleSelectorBase14=null;}this.inform('hide');};q.prototype.$SingleSelectorBase15=function(s,t){'use strict';this.$SingleSelectorBase16=null;if(!this.$SingleSelectorBase17)this.inform('change',t);};q.prototype.isShown=function(){'use strict';return this.$SingleSelectorBase6.isShown();};q.prototype.setValue=function(s){'use strict';if(this.isShown()){this.$SingleSelectorBase18(s,false);}else{this.$SingleSelectorBase3=s;this.$SingleSelectorBase19=false;}};q.prototype.setValueWithoutChange=function(s){'use strict';if(this.isShown()){this.$SingleSelectorBase18(s,true);}else{this.$SingleSelectorBase3=s;this.$SingleSelectorBase19=true;}};q.prototype.$SingleSelectorBase11=function(){'use strict';if(this.$SingleSelectorBase3!==o){this.$SingleSelectorBase18(this.$SingleSelectorBase3,this.$SingleSelectorBase19);this.$SingleSelectorBase3=o;}};q.prototype.$SingleSelectorBase18=function(s,t){'use strict';this.$SingleSelectorBase17=t;this.$SingleSelectorBase2.setValue(s);this.$SingleSelectorBase17=null;};q.prototype.getValue=function(){'use strict';return this.getSelectedItem().getValue();};q.prototype.getLayer=function(){'use strict';return this.$SingleSelectorBase5;};q.prototype.getButton=function(){'use strict';return this.$SingleSelectorBase1;};q.prototype.setMenu=function(s){'use strict';if(this.isShown()){this.$SingleSelectorBase20(s);}else this.$SingleSelectorBase21=s;};q.prototype.$SingleSelectorBase10=function(){'use strict';if(this.$SingleSelectorBase21){this.$SingleSelectorBase20(this.$SingleSelectorBase21);this.$SingleSelectorBase21=null;}};q.prototype.$SingleSelectorBase20=function(s){'use strict';if(s!==this.$SingleSelectorBase2){this.$SingleSelectorBase2=s;if(this.$SingleSelectorBase22)this.$SingleSelectorBase22.unsubscribe();this.$SingleSelectorBase22=this.$SingleSelectorBase2.subscribe('change',this.$SingleSelectorBase15.bind(this));c('DOM').setContent(this.$SingleSelectorBase4,s.getRoot());this.$SingleSelectorBase9.setMenu(s);this.$SingleSelectorBase16=null;}};q.prototype.getMenu=function(){'use strict';return this.$SingleSelectorBase21||this.$SingleSelectorBase2;};q.prototype.enable=function(){'use strict';c('Button').setEnabled(this.$SingleSelectorBase1,true);this.$SingleSelectorBase6.enable();};q.prototype.disable=function(){'use strict';c('Button').setEnabled(this.$SingleSelectorBase1,false);this.$SingleSelectorBase6.disable();};q.prototype.$SingleSelectorBase12=function(){'use strict';return (c('Style').isFixed(this.$SingleSelectorBase1)&&!c('Style').isFixed(this.$SingleSelectorBase5.getRoot().parentNode));};q.prototype.align=function(){'use strict';if(!this.$SingleSelectorBase16)this.$SingleSelectorBase16=this.getAlignment();this.$SingleSelectorBase16.align();var s=c('Rect').getElementBounds(this.$SingleSelectorBase2.getRoot()),t=c('LayerBounds').getViewportRectForContext(this.$SingleSelectorBase1),u=s.t-t.t,v=t.b-s.b,w=s.l-t.l,x=t.r-s.r,y=this.$SingleSelectorBase5.getRoot();if(u<10){r(y,'top',-u+10);}else if(v<10)r(y,'top',v-10);if(w<10){r(y,'left',-w+10);}else if(x<10)r(y,'left',x-10);var z=c('getOverlayZIndex')(this.$SingleSelectorBase1,this.$SingleSelectorBase5.getInsertParent());c('Style').set(this.$SingleSelectorBase5.getRoot(),'z-index',z>200?z:'');};q.prototype.getAlignment=function(){'use strict';return new (c('Alignment'))(new m(this.$SingleSelectorBase5.getRoot(),m.TOP,m.LEFT),new m(this.$SingleSelectorBase13(),n,m.MIDDLE),new m(this.$SingleSelectorBase23(),n,m.MIDDLE));};q.prototype.$SingleSelectorBase23=function(){'use strict';return c('DOMQuery').find(this.$SingleSelectorBase1,"._55pe");};q.prototype.getSelectedItem=function(){'use strict';var s=null;if(this.$SingleSelectorBase3!==o){this.getMenu().forEachItem(function(t){if(t.getValue()===this.$SingleSelectorBase3){s===null||j(0);s=t;}}.bind(this));}else this.getMenu().forEachItem(function(t){if(c('SelectableMenuUtils').isSelected(t)){s===null||j(0);s=t;}});s!==null||j(0);return s;};q.prototype.$SingleSelectorBase13=function(){'use strict';return c('DOMQuery').find(this.getSelectedItem().getRoot(),"._54nh");};q.prototype.destroy=function(){'use strict';this.$SingleSelectorBase2&&this.$SingleSelectorBase2.destroy();this.$SingleSelectorBase6.destroy();this.$SingleSelectorBase5.destroy();};function r(s,t,u){c('Style').set(s,t,c('Style').getFloat(s,t)+u+'px');}f.exports=q;}),null);
__d('XUISingleSelectorButton.react',['ix','Image.react','React','XUIPopoverButton.react'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return (c('React').createElement(c('XUIPopoverButton.react'),babelHelpers['extends']({},this.props,{chevron:c('React').createElement(c('Image.react'),{src:h('/images/ui/x/selector/chevron.png')})})));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('XUISingleSelector.react',['InlineBlock.react','React','ReactDOM','ReactSelectorUtils','ReactXUIMenu','SingleSelectorBase','SubscriptionsHandler','XUISingleSelectorButton.react','areEqual','cloneWithProps_DEPRECATED'],(function a(b,c,d,e,f,g){var h,i,j=c('React').PropTypes,k=c('ReactXUIMenu').SelectableMenu,l=c('ReactXUIMenu').SelectableItem;h=babelHelpers.inherits(m,c('React').Component);i=h&&h.prototype;function m(){var n,o;'use strict';for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=i.constructor).call.apply(n,[this].concat(q)),this.$XUISingleSelector1=null,this.$XUISingleSelector2=null,this.$XUISingleSelector3=null,this.flattenMenuItems=function(){return c('React').Children.toArray(this.props.children).filter(function(s){return s;});}.bind(this),this.processMenuItems=function(){return c('ReactSelectorUtils').processMenuItems(this.flattenMenuItems(),this.getValue());}.bind(this),this.setMenuValue=function(s){this.$XUISingleSelector2.setValueWithoutChange(s);}.bind(this),this.getValue=function(){return this.props.value!==undefined?this.props.value:this.state.value;}.bind(this),this.onChange=function(s,t){if(this.props.value===undefined){this.setState({value:t.value});}else this.setMenuValue(this.props.value);if(this.props.onChange)this.props.onChange(t);}.bind(this),this.$XUISingleSelector4=function(){var s=c('React').createElement(k,{className:this.props.menuClassName,maxheight:this.props.maxheight},this.processMenuItems().items);return new s.type(s.props);}.bind(this),this.state={value:this.props.value!==undefined?this.props.value:this.props.defaultValue!==undefined?this.props.defaultValue:this.flattenMenuItems()[0].props.value},o;}m.prototype.componentWillReceiveProps=function(){'use strict';if(this.props.value!==undefined)this.setState({value:this.props.value});};m.prototype.componentDidMount=function(){'use strict';var n=c('ReactDOM').findDOMNode(this.refs.button);this.$XUISingleSelector2=new (c('SingleSelectorBase'))(n,this.$XUISingleSelector4(),{disabled:this.props.disabled},{behaviors:this.props.behaviors});this.$XUISingleSelector3=new (c('SubscriptionsHandler'))();this.$XUISingleSelector3.addSubscriptions(this.$XUISingleSelector2.subscribe('change',this.onChange));if(this.props.onShow)this.$XUISingleSelector3.addSubscriptions(this.$XUISingleSelector2.subscribe('show',this.props.onShow));if(this.props.onHide)this.$XUISingleSelector3.addSubscriptions(this.$XUISingleSelector2.subscribe('hide',this.props.onHide));};m.prototype.componentDidUpdate=function(n){'use strict';if(!c('areEqual')(n.children,this.props.children))this.$XUISingleSelector2.setMenu(this.$XUISingleSelector4());if(n.disabled!==this.props.disabled)if(!this.props.disabled){this.$XUISingleSelector2.enable();}else this.$XUISingleSelector2.disable();this.setMenuValue(this.getValue());};m.prototype.componentWillUnmount=function(){'use strict';this.$XUISingleSelector2.destroy();if(this.$XUISingleSelector3){this.$XUISingleSelector3.release();this.$XUISingleSelector3=null;}};m.prototype.render=function(){'use strict';var n=this.processMenuItems().selectedItem,o;if(n.props.icon)o=c('cloneWithProps_DEPRECATED')(n.props.icon,{});var p={ref:'button',label:n.props.label||n.props.children,image:o},q=void 0;if(this.props.customButton){q=c('React').cloneElement(this.props.customButton,p);}else q=c('React').createElement(c('XUISingleSelectorButton.react'),babelHelpers['extends']({},p,{disabled:this.props.disabled,size:this.props.size,suppressed:this.props.suppressed,maxwidth:this.props.maxwidth}));return (c('React').createElement(c('InlineBlock.react'),babelHelpers['extends']({},this.props,{alignv:'middle'}),c('React').createElement('input',{type:'hidden',autoComplete:'off',name:this.props.name,value:n.props.value}),q));};m.propTypes={name:j.string,maxheight:j.number,maxwidth:j.number,menuClassName:j.string,defaultValue:j.any,disabled:j.bool,size:j.oneOf(['small','medium','large','xlarge','xxlarge']),suppressed:j.bool,value:j.any,onChange:j.func,onShow:j.func,onHide:j.func,behaviors:j.array,customButton:j.element};m.defaultProps={disabled:false,size:'medium'};m.Option=l;f.exports=m;}),null);
__d('sanitizeDraftText',[],(function a(b,c,d,e,f,g){'use strict';var h=new RegExp('\r','g');function i(j){return j.replace(h,'');}f.exports=i;}),null);
__d('BlockMapBuilder',['immutable'],(function a(b,c,d,e,f,g){'use strict';var h=c('immutable').OrderedMap,i={createFromArray:function j(k){return h(k.map(function(l){return [l.getKey(),l];}));}};f.exports=i;}),null);
__d('BlockTree',['immutable','emptyFunction','findRangesImmutable'],(function a(b,c,d,e,f,g){'use strict';var h=c('immutable').List,i=c('immutable').Repeat,j=c('immutable').Record,k=c('emptyFunction').thatReturnsTrue,l='-',m={start:null,end:null},n=j(m),o={start:null,end:null,decoratorKey:null,leaves:null},p=j(o),q={generate:function t(u,v){var w=u.getLength();if(!w)return h.of(new p({start:0,end:0,decoratorKey:null,leaves:h.of(new n({start:0,end:0}))}));var x=[],y=v?v.getDecorations(u):h(i(null,w)),z=u.getCharacterList();c('findRangesImmutable')(y,s,k,function(aa,ba){x.push(new p({start:aa,end:ba,decoratorKey:y.get(aa),leaves:r(z.slice(aa,ba).toList(),aa)}));});return h(x);},getFingerprint:function t(u){return u.map(function(v){var w=v.get('decoratorKey'),x=w!==null?w+'.'+(v.get('end')-v.get('start')):'';return ''+x+'.'+v.get('leaves').size;}).join(l);}};function r(t,u){var v=[],w=t.map(function(x){return x.getStyle();}).toList();c('findRangesImmutable')(w,s,k,function(x,y){v.push(new n({start:x+u,end:y+u}));});return h(v);}function s(t,u){return t===u;}f.exports=q;}),null);
__d('CharacterMetadata',['immutable'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('immutable').Map,k=c('immutable').OrderedSet,l=c('immutable').Record,m=k(),n={style:m,entity:null},o=l(n);h=babelHelpers.inherits(p,o);i=h&&h.prototype;p.prototype.getStyle=function(){return this.get('style');};p.prototype.getEntity=function(){return this.get('entity');};p.prototype.hasStyle=function(s){return this.getStyle().has(s);};p.applyStyle=function(s,t){var u=s.set('style',s.getStyle().add(t));return p.create(u);};p.removeStyle=function(s,t){var u=s.set('style',s.getStyle().remove(t));return p.create(u);};p.applyEntity=function(s,t){var u=s.getEntity()===t?s:s.set('entity',t);return p.create(u);};p.create=function(s){if(!s)return q;var t=j({style:m,entity:null}).merge(s),u=r.get(t);if(u)return u;var v=new p(t);r=r.set(t,v);return v;};function p(){h.apply(this,arguments);}var q=new p(),r=j([[j(n),q]]);p.EMPTY=q;f.exports=p;}),null);
__d('ContentBlock',['immutable','findRangesImmutable'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('immutable').List,k=c('immutable').Map,l=c('immutable').OrderedSet,m=c('immutable').Record,n=l(),o={key:'',type:'unstyled',text:'',characterList:j(),depth:0,data:k()},p=m(o);h=babelHelpers.inherits(q,p);i=h&&h.prototype;q.prototype.getKey=function(){return this.get('key');};q.prototype.getType=function(){return this.get('type');};q.prototype.getText=function(){return this.get('text');};q.prototype.getCharacterList=function(){return this.get('characterList');};q.prototype.getLength=function(){return this.getText().length;};q.prototype.getDepth=function(){return this.get('depth');};q.prototype.getData=function(){return this.get('data');};q.prototype.getInlineStyleAt=function(t){var u=this.getCharacterList().get(t);return u?u.getStyle():n;};q.prototype.getEntityAt=function(t){var u=this.getCharacterList().get(t);return u?u.getEntity():null;};q.prototype.findStyleRanges=function(t,u){c('findRangesImmutable')(this.getCharacterList(),r,t,u);};q.prototype.findEntityRanges=function(t,u){c('findRangesImmutable')(this.getCharacterList(),s,t,u);};function q(){h.apply(this,arguments);}function r(t,u){return t.getStyle()===u.getStyle();}function s(t,u){return t.getEntity()===u.getEntity();}f.exports=q;}),null);
__d('SelectionState',['immutable'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('immutable').Record,k={anchorKey:'',anchorOffset:0,focusKey:'',focusOffset:0,isBackward:false,hasFocus:false},l=j(k);h=babelHelpers.inherits(m,l);i=h&&h.prototype;m.prototype.serialize=function(){return ('Anchor: '+this.getAnchorKey()+':'+this.getAnchorOffset()+', '+'Focus: '+this.getFocusKey()+':'+this.getFocusOffset()+', '+'Is Backward: '+String(this.getIsBackward())+', '+'Has Focus: '+String(this.getHasFocus()));};m.prototype.getAnchorKey=function(){return this.get('anchorKey');};m.prototype.getAnchorOffset=function(){return this.get('anchorOffset');};m.prototype.getFocusKey=function(){return this.get('focusKey');};m.prototype.getFocusOffset=function(){return this.get('focusOffset');};m.prototype.getIsBackward=function(){return this.get('isBackward');};m.prototype.getHasFocus=function(){return this.get('hasFocus');};m.prototype.hasEdgeWithin=function(n,o,p){var q=this.getAnchorKey(),r=this.getFocusKey();if(q===r&&q===n){var s=this.getStartOffset(),t=this.getEndOffset();return o<=t&&s<=p;}if(n!==q&&n!==r)return false;var u=n===q?this.getAnchorOffset():this.getFocusOffset();return o<=u&&p>=u;};m.prototype.isCollapsed=function(){return (this.getAnchorKey()===this.getFocusKey()&&this.getAnchorOffset()===this.getFocusOffset());};m.prototype.getStartKey=function(){return this.getIsBackward()?this.getFocusKey():this.getAnchorKey();};m.prototype.getStartOffset=function(){return this.getIsBackward()?this.getFocusOffset():this.getAnchorOffset();};m.prototype.getEndKey=function(){return this.getIsBackward()?this.getAnchorKey():this.getFocusKey();};m.prototype.getEndOffset=function(){return this.getIsBackward()?this.getAnchorOffset():this.getFocusOffset();};m.createEmpty=function(n){return new m({anchorKey:n,anchorOffset:0,focusKey:n,focusOffset:0,isBackward:false,hasFocus:false});};function m(){h.apply(this,arguments);}f.exports=m;}),null);
__d('generateRandomKey',[],(function a(b,c,d,e,f,g){'use strict';var h={},i=Math.pow(2,24);function j(){var k=void 0;while(k===undefined||h.hasOwnProperty(k)||!isNaN(+k))k=Math.floor(Math.random()*i).toString(32);h[k]=true;return k;}f.exports=j;}),null);
__d('ContentState',['BlockMapBuilder','CharacterMetadata','ContentBlock','immutable','SelectionState','generateRandomKey','sanitizeDraftText'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('immutable').List,k=c('immutable').Record,l=c('immutable').Repeat,m={blockMap:null,selectionBefore:null,selectionAfter:null},n=k(m);h=babelHelpers.inherits(o,n);i=h&&h.prototype;o.prototype.getBlockMap=function(){return this.get('blockMap');};o.prototype.getSelectionBefore=function(){return this.get('selectionBefore');};o.prototype.getSelectionAfter=function(){return this.get('selectionAfter');};o.prototype.getBlockForKey=function(p){var q=this.getBlockMap().get(p);return q;};o.prototype.getKeyBefore=function(p){return this.getBlockMap().reverse().keySeq().skipUntil(function(q){return q===p;}).skip(1).first();};o.prototype.getKeyAfter=function(p){return this.getBlockMap().keySeq().skipUntil(function(q){return q===p;}).skip(1).first();};o.prototype.getBlockAfter=function(p){return this.getBlockMap().skipUntil(function(q,r){return r===p;}).skip(1).first();};o.prototype.getBlockBefore=function(p){return this.getBlockMap().reverse().skipUntil(function(q,r){return r===p;}).skip(1).first();};o.prototype.getBlocksAsArray=function(){return this.getBlockMap().toArray();};o.prototype.getFirstBlock=function(){return this.getBlockMap().first();};o.prototype.getLastBlock=function(){return this.getBlockMap().last();};o.prototype.getPlainText=function(p){return this.getBlockMap().map(function(q){return q?q.getText():'';}).join(p||'\n');};o.prototype.hasText=function(){var p=this.getBlockMap();return (p.size>1||p.first().getLength()>0);};o.createFromBlockArray=function(p){var q=c('BlockMapBuilder').createFromArray(p),r=c('SelectionState').createEmpty(q.first().getKey());return new o({blockMap:q,selectionBefore:r,selectionAfter:r});};o.createFromText=function(p){var q=arguments.length<=1||arguments[1]===undefined?/\r\n?|\n/g:arguments[1],r=p.split(q),s=r.map(function(t){t=c('sanitizeDraftText')(t);return new (c('ContentBlock'))({key:c('generateRandomKey')(),text:t,type:'unstyled',characterList:j(l(c('CharacterMetadata').EMPTY,t.length))});});return o.createFromBlockArray(s);};function o(){h.apply(this,arguments);}f.exports=o;}),null);
__d('UnicodeBidiService',['invariant','UnicodeBidi','UnicodeBidiDirection','UnicodeBidiGlobalDirection'],(function a(b,c,d,e,f,g,h){'use strict';function i(j){if(!j){j=c('UnicodeBidiGlobalDirection').getDir();}else c('UnicodeBidiDirection').isStrong(j)||h(0);this.$UnicodeBidiService1=j;this.reset();}i.prototype.reset=function(){this.$UnicodeBidiService2=this.$UnicodeBidiService1;};i.prototype.getDirection=function(j){this.$UnicodeBidiService2=c('UnicodeBidi').getDirection(j,this.$UnicodeBidiService2);return this.$UnicodeBidiService2;};f.exports=i;}),null);
__d('EditorBidiService',['immutable','UnicodeBidiService','nullthrows'],(function a(b,c,d,e,f,g){'use strict';var h=c('immutable').OrderedMap,i,j={getDirectionMap:function k(l,m){if(!i){i=new (c('UnicodeBidiService'))();}else i.reset();var n=l.getBlockMap(),o=n.valueSeq().map(function(q){return c('nullthrows')(i).getDirection(q.getText());}),p=h(n.keySeq().zip(o));if(m!=null&&c('immutable').is(m,p))return m;return p;}};f.exports=j;}),null);
__d('EditorState',['BlockTree','ContentState','EditorBidiService','immutable','SelectionState'],(function a(b,c,d,e,f,g){'use strict';var h=c('immutable').OrderedSet,i=c('immutable').Record,j=c('immutable').Stack,k={allowUndo:true,currentContent:null,decorator:null,directionMap:null,forceSelection:false,inCompositionMode:false,inlineStyleOverride:null,lastChangeType:null,nativelyRenderedContent:null,redoStack:j(),selection:null,treeMap:null,undoStack:j()},l=i(k);m.createEmpty=function(v){return m.createWithContent(c('ContentState').createFromText(''),v);};m.createWithContent=function(v,w){var x=v.getBlockMap().first().getKey();return m.create({currentContent:v,undoStack:j(),redoStack:j(),decorator:w||null,selection:c('SelectionState').createEmpty(x)});};m.create=function(v){var w=v.currentContent,x=v.decorator,y=babelHelpers['extends']({},v,{treeMap:o(w,x),directionMap:c('EditorBidiService').getDirectionMap(w)});return new m(new l(y));};m.set=function(v,w){var x=v.getImmutable().withMutations(function(y){var z=y.get('decorator'),aa=z;if(w.decorator===null){aa=null;}else if(w.decorator)aa=w.decorator;var ba=w.currentContent||v.getCurrentContent();if(aa!==z){var ca=y.get('treeMap'),da;if(aa&&z){da=q(ba.getBlockMap(),ca,aa,z);}else da=o(ba,aa);y.merge({decorator:aa,treeMap:da,nativelyRenderedContent:null});return;}var ea=v.getCurrentContent();if(ba!==ea)y.set('treeMap',p(v,ba.getBlockMap(),aa));y.merge(w);});return new m(x);};m.prototype.toJS=function(){return this.getImmutable().toJS();};m.prototype.getAllowUndo=function(){return this.getImmutable().get('allowUndo');};m.prototype.getCurrentContent=function(){return this.getImmutable().get('currentContent');};m.prototype.getUndoStack=function(){return this.getImmutable().get('undoStack');};m.prototype.getRedoStack=function(){return this.getImmutable().get('redoStack');};m.prototype.getSelection=function(){return this.getImmutable().get('selection');};m.prototype.getDecorator=function(){return this.getImmutable().get('decorator');};m.prototype.isInCompositionMode=function(){return this.getImmutable().get('inCompositionMode');};m.prototype.mustForceSelection=function(){return this.getImmutable().get('forceSelection');};m.prototype.getNativelyRenderedContent=function(){return this.getImmutable().get('nativelyRenderedContent');};m.prototype.getLastChangeType=function(){return this.getImmutable().get('lastChangeType');};m.prototype.getInlineStyleOverride=function(){return this.getImmutable().get('inlineStyleOverride');};m.setInlineStyleOverride=function(v,w){return m.set(v,{inlineStyleOverride:w});};m.prototype.getCurrentInlineStyle=function(){var v=this.getInlineStyleOverride();if(v!=null)return v;var w=this.getCurrentContent(),x=this.getSelection();if(x.isCollapsed())return s(w,x);return t(w,x);};m.prototype.getBlockTree=function(v){return this.getImmutable().getIn(['treeMap',v]);};m.prototype.isSelectionAtStartOfContent=function(){var v=this.getCurrentContent().getBlockMap().first().getKey();return this.getSelection().hasEdgeWithin(v,0,0);};m.prototype.isSelectionAtEndOfContent=function(){var v=this.getCurrentContent(),w=v.getBlockMap(),x=w.last(),y=x.getLength();return this.getSelection().hasEdgeWithin(x.getKey(),y,y);};m.prototype.getDirectionMap=function(){return this.getImmutable().get('directionMap');};m.acceptSelection=function(v,w){return n(v,w,false);};m.forceSelection=function(v,w){if(!w.getHasFocus())w=w.set('hasFocus',true);return n(v,w,true);};m.moveSelectionToEnd=function(v){var w=v.getCurrentContent(),x=w.getLastBlock(),y=x.getKey(),z=x.getLength();return m.acceptSelection(v,new (c('SelectionState'))({anchorKey:y,anchorOffset:z,focusKey:y,focusOffset:z,isBackward:false}));};m.moveFocusToEnd=function(v){var w=m.moveSelectionToEnd(v);return m.forceSelection(w,w.getSelection());};m.push=function(v,w,x){if(v.getCurrentContent()===w)return v;var y=x!=='insert-characters',z=c('EditorBidiService').getDirectionMap(w,v.getDirectionMap());if(!v.getAllowUndo())return m.set(v,{currentContent:w,directionMap:z,lastChangeType:x,selection:w.getSelectionAfter(),forceSelection:y,inlineStyleOverride:null});var aa=v.getSelection(),ba=v.getCurrentContent(),ca=v.getUndoStack(),da=w;if(aa!==ba.getSelectionAfter()||r(v,x)){ca=ca.push(ba);da=da.set('selectionBefore',aa);}else if(x==='insert-characters'||x==='backspace-character'||x==='delete-character')da=da.set('selectionBefore',ba.getSelectionBefore());var ea=v.getInlineStyleOverride();if(x!=='adjust-depth'&&x!=='change-block-type')ea=null;var fa={currentContent:da,directionMap:z,undoStack:ca,redoStack:j(),lastChangeType:x,selection:w.getSelectionAfter(),forceSelection:y,inlineStyleOverride:ea};return m.set(v,fa);};m.undo=function(v){if(!v.getAllowUndo())return v;var w=v.getUndoStack(),x=w.peek();if(!x)return v;var y=v.getCurrentContent(),z=c('EditorBidiService').getDirectionMap(x,v.getDirectionMap());return m.set(v,{currentContent:x,directionMap:z,undoStack:w.shift(),redoStack:v.getRedoStack().push(y),forceSelection:true,inlineStyleOverride:null,lastChangeType:'undo',nativelyRenderedContent:null,selection:y.getSelectionBefore()});};m.redo=function(v){if(!v.getAllowUndo())return v;var w=v.getRedoStack(),x=w.peek();if(!x)return v;var y=v.getCurrentContent(),z=c('EditorBidiService').getDirectionMap(x,v.getDirectionMap());return m.set(v,{currentContent:x,directionMap:z,undoStack:v.getUndoStack().push(y),redoStack:w.shift(),forceSelection:true,inlineStyleOverride:null,lastChangeType:'redo',nativelyRenderedContent:null,selection:x.getSelectionAfter()});};function m(v){this.$EditorState1=v;}m.prototype.getImmutable=function(){return this.$EditorState1;};function n(v,w,x){return m.set(v,{selection:w,forceSelection:x,nativelyRenderedContent:null,inlineStyleOverride:null});}function o(v,w){return v.getBlockMap().map(function(x){return c('BlockTree').generate(x,w);}).toOrderedMap();}function p(v,w,x){var y=v.getCurrentContent().getBlockMap(),z=v.getImmutable().get('treeMap');return z.merge(w.toSeq().filter(function(aa,ba){return aa!==y.get(ba);}).map(function(aa){return c('BlockTree').generate(aa,x);}));}function q(v,w,x,y){return w.merge(v.toSeq().filter(function(z){return (x.getDecorations(z)!==y.getDecorations(z));}).map(function(z){return c('BlockTree').generate(z,x);}));}function r(v,w){var x=v.getLastChangeType();return (w!==x||w!=='insert-characters'&&w!=='backspace-character'&&w!=='delete-character');}function s(v,w){var x=w.getStartKey(),y=w.getStartOffset(),z=v.getBlockForKey(x);if(y>0)return z.getInlineStyleAt(y-1);if(z.getLength())return z.getInlineStyleAt(0);return u(v,x);}function t(v,w){var x=w.getStartKey(),y=w.getStartOffset(),z=v.getBlockForKey(x);if(y<z.getLength())return z.getInlineStyleAt(y);if(y>0)return z.getInlineStyleAt(y-1);return u(v,x);}function u(v,w){var x=v.getBlockBefore(w),y;while(x){y=x.getLength();if(y)return x.getInlineStyleAt(y-1);x=v.getBlockBefore(x.getKey());}return h();}f.exports=m;}),null);