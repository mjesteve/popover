/*!
 * Popover v1.0.12
 * https://sa-si-dev.github.io/popover
 * Licensed under MIT (https://github.com/sa-si-dev/popover/blob/master/LICENSE)
 */
/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!
 * Popper v1.0.4
 * https://sa-si-dev.github.io/popper
 * Licensed under MIT (https://github.com/sa-si-dev/popper/blob/master/LICENSE)
 */!function(){"use strict";function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,o){if(!t)return;if("string"==typeof t)return e(t,o);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return e(t,o)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,i=new Array(e);o<e;o++)i[o]=t[o];return i}function o(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var i=function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e)}var i,r,n;return i=e,n=[{key:"addClass",value:function(o,i){o&&(i=i.split(" "),e.getElements(o).forEach((function(e){var o;(o=e.classList).add.apply(o,t(i))})))}},{key:"removeClass",value:function(o,i){o&&(i=i.split(" "),e.getElements(o).forEach((function(e){var o;(o=e.classList).remove.apply(o,t(i))})))}},{key:"getElements",value:function(t){if(t)return void 0===t.forEach&&(t=[t]),t}},{key:"getMoreVisibleSides",value:function(t){if(!t)return{};var e=t.getBoundingClientRect(),o=window.innerWidth,i=window.innerHeight,r=e.left,n=e.top;return{horizontal:r>o-r-e.width?"left":"right",vertical:n>i-n-e.height?"top":"bottom"}}},{key:"getAbsoluteCoords",value:function(t){if(t){var e=t.getBoundingClientRect(),o=window.pageXOffset,i=window.pageYOffset;return{width:e.width,height:e.height,top:e.top+i,right:e.right+o,bottom:e.bottom+i,left:e.left+o}}}},{key:"getCoords",value:function(t){return t?t.getBoundingClientRect():{}}},{key:"getData",value:function(t,e,o){if(t){var i=t?t.dataset[e]:"";return"number"===o?i=parseFloat(i)||0:"true"===i?i=!0:"false"===i&&(i=!1),i}}},{key:"setData",value:function(t,e,o){t&&(t.dataset[e]=o)}},{key:"setStyle",value:function(t,e,o){t&&(t.style[e]=o)}},{key:"show",value:function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"block";e.setStyle(t,"display",o)}},{key:"hide",value:function(t){e.setStyle(t,"display","none")}},{key:"getHideableParent",value:function(t){for(var e,o=t.parentElement;o;){var i=getComputedStyle(o).overflow;if(-1!==i.indexOf("scroll")||-1!==i.indexOf("auto")){e=o;break}o=o.parentElement}return e}}],(r=null)&&o(i.prototype,r),n&&o(i,n),e}();function r(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var n=["top","bottom","left","right"].map((function(t){return"position-".concat(t)})),a={top:"rotate(180deg)",left:"rotate(90deg)",right:"rotate(-90deg)"},s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);try{this.setProps(e),this.init()}catch(t){console.warn("Couldn't initiate popper"),console.error(t)}}var e,o,s;return e=t,(o=[{key:"init",value:function(){var t=this.$popperEle;t&&this.$triggerEle&&(i.setStyle(t,"zIndex",this.zIndex),this.setPosition())}},{key:"setProps",value:function(t){var e=(t=this.setDefaultProps(t)).position?t.position.toLowerCase():"auto";if(this.$popperEle=t.$popperEle,this.$triggerEle=t.$triggerEle,this.$arrowEle=t.$arrowEle,this.margin=parseFloat(t.margin),this.offset=parseFloat(t.offset),this.enterDelay=parseFloat(t.enterDelay),this.exitDelay=parseFloat(t.exitDelay),this.showDuration=parseFloat(t.showDuration),this.hideDuration=parseFloat(t.hideDuration),this.transitionDistance=parseFloat(t.transitionDistance),this.zIndex=parseFloat(t.zIndex),this.afterShowCallback=t.afterShow,this.afterHideCallback=t.afterHide,this.hasArrow=!!this.$arrowEle,-1!==e.indexOf(" ")){var o=e.split(" ");this.position=o[0],this.secondaryPosition=o[1]}else this.position=e}},{key:"setDefaultProps",value:function(t){return Object.assign({position:"auto",margin:8,offset:5,enterDelay:0,exitDelay:0,showDuration:300,hideDuration:200,transitionDistance:10,zIndex:1},t)}},{key:"setPosition",value:function(){i.show(this.$popperEle,"inline-flex");var t,e,o,r=window.innerWidth,s=window.innerHeight,l=i.getAbsoluteCoords(this.$popperEle),p=i.getAbsoluteCoords(this.$triggerEle),f=l.width,u=l.height,h=l.top,c=l.right,d=l.bottom,y=l.left,g=p.width,m=p.height,v=p.top,w=p.right,E=p.bottom,b=p.left,D=v-h,$=b-y,k=$,x=D,S=this.position,C=this.secondaryPosition,T=g/2-f/2,P=m/2-u/2,A=this.margin,O=this.transitionDistance,F=window.scrollY-h,I=s+F,j=window.scrollX-y,H=r+j,z=this.offset;z&&(F+=z,I-=z,j+=z,H-=z),"auto"===S&&(S=i.getMoreVisibleSides(this.$triggerEle).vertical);var L={top:{top:x-u-A,left:k+T},bottom:{top:x+m+A,left:k+T},right:{top:x+P,left:k+g+A},left:{top:x+P,left:k-f-A}},B=L[S];if(x=B.top,k=B.left,C&&("top"===C?x=D:"bottom"===C?x=D+m-u:"left"===C?k=$:"right"===C&&(k=$+g-f)),k<j?"left"===S?o="right":k=j+y>w?w-y:j:k+f>H&&("right"===S?o="left":k=H+y<b?b-c:H-f),x<F?"top"===S?o="bottom":x=F+h>E?E-h:F:x+u>I&&("bottom"===S?o="top":x=I+h<v?v-d:I-u),o){var M=L[o];"top"===(S=o)||"bottom"===S?x=M.top:"left"!==S&&"right"!==S||(k=M.left)}"top"===S?(t=x+O,e=k):"right"===S?(t=x,e=k-O):"left"===S?(t=x,e=k+O):(t=x-O,e=k);var R="translate3d(".concat(e,"px, ").concat(t,"px, 0)");if(i.setStyle(this.$popperEle,"transform",R),i.setData(this.$popperEle,"fromLeft",e),i.setData(this.$popperEle,"fromTop",t),i.setData(this.$popperEle,"top",x),i.setData(this.$popperEle,"left",k),i.removeClass(this.$popperEle,n.join(" ")),i.addClass(this.$popperEle,"position-".concat(S)),this.hasArrow){var W=0,V=0,X=k+y,Y=x+h,U=this.$arrowEle.offsetWidth/2,q=a[S]||"";"top"===S||"bottom"===S?(W=g/2+b-X)<U?W=U:W>f-U&&(W=f-U):"left"!==S&&"right"!==S||((V=m/2+v-Y)<U?V=U:V>u-U&&(V=u-U)),i.setStyle(this.$arrowEle,"transform","translate3d(".concat(W,"px, ").concat(V,"px, 0) ").concat(q))}i.hide(this.$popperEle)}},{key:"resetPosition",value:function(){i.setStyle(this.$popperEle,"transform","none"),this.setPosition()}},{key:"show",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.resetPosition,r=e.data;clearTimeout(this.exitDelayTimeout),clearTimeout(this.hideDurationTimeout),o&&this.resetPosition(),this.enterDelayTimeout=setTimeout((function(){var e=i.getData(t.$popperEle,"left"),o=i.getData(t.$popperEle,"top"),n="translate3d(".concat(e,"px, ").concat(o,"px, 0)"),a=t.showDuration;i.show(t.$popperEle,"inline-flex"),i.getCoords(t.$popperEle),i.setStyle(t.$popperEle,"transitionDuration",a+"ms"),i.setStyle(t.$popperEle,"transform",n),i.setStyle(t.$popperEle,"opacity",1),t.showDurationTimeout=setTimeout((function(){"function"==typeof t.afterShowCallback&&t.afterShowCallback(r)}),a)}),this.enterDelay)}},{key:"hide",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.data;clearTimeout(this.enterDelayTimeout),clearTimeout(this.showDurationTimeout),this.exitDelayTimeout=setTimeout((function(){if(t.$popperEle){var e=i.getData(t.$popperEle,"fromLeft"),r=i.getData(t.$popperEle,"fromTop"),n="translate3d(".concat(e,"px, ").concat(r,"px, 0)"),a=t.hideDuration;i.setStyle(t.$popperEle,"transitionDuration",a+"ms"),i.setStyle(t.$popperEle,"transform",n),i.setStyle(t.$popperEle,"opacity",0),t.hideDurationTimeout=setTimeout((function(){i.hide(t.$popperEle),"function"==typeof t.afterHideCallback&&t.afterHideCallback(o)}),a)}}),this.exitDelay)}},{key:"updatePosition",value:function(){i.setStyle(this.$popperEle,"transitionDuration","0ms"),this.resetPosition();var t=i.getData(this.$popperEle,"left"),e=i.getData(this.$popperEle,"top");i.show(this.$popperEle,"inline-flex"),i.setStyle(this.$popperEle,"transform","translate3d(".concat(t,"px, ").concat(e,"px, 0)"))}}])&&r(e.prototype,o),s&&r(e,s),t}();window.PopperComponent=s}();
}();
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// UNUSED EXPORTS: PopoverComponent

;// CONCATENATED MODULE: ./src/utils/utils.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Utils = /*#__PURE__*/function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }
  _createClass(Utils, null, [{
    key: "convertToBoolean",
    value: function convertToBoolean(value) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (value === true || value === 'true') {
        value = true;
      } else if (value === false || value === 'false') {
        value = false;
      } else {
        value = defaultValue;
      }
      return value;
    }
  }, {
    key: "removeArrayEmpty",
    value: function removeArrayEmpty(array) {
      if (!Array.isArray(array) || !array.length) {
        return [];
      }
      return array.filter(function (d) {
        return !!d;
      });
    }
  }, {
    key: "throttle",
    value: function throttle(method, delay) {
      var prev = 0;
      var timeout;
      return function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        var now = new Date().getTime();
        var remaining = delay - (now - prev);
        clearTimeout(timeout);
        if (remaining <= 0) {
          prev = now;
          method.apply(void 0, args);
        } else {
          timeout = setTimeout(function () {
            method.apply(void 0, args);
          }, remaining);
        }
      };
    }
  }]);
  return Utils;
}();
;// CONCATENATED MODULE: ./src/utils/dom-utils.js
function dom_utils_typeof(o) { "@babel/helpers - typeof"; return dom_utils_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, dom_utils_typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function dom_utils_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function dom_utils_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, dom_utils_toPropertyKey(descriptor.key), descriptor); } }
function dom_utils_createClass(Constructor, protoProps, staticProps) { if (protoProps) dom_utils_defineProperties(Constructor.prototype, protoProps); if (staticProps) dom_utils_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function dom_utils_toPropertyKey(arg) { var key = dom_utils_toPrimitive(arg, "string"); return dom_utils_typeof(key) === "symbol" ? key : String(key); }
function dom_utils_toPrimitive(input, hint) { if (dom_utils_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (dom_utils_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var DomUtils = /*#__PURE__*/function () {
  function DomUtils() {
    dom_utils_classCallCheck(this, DomUtils);
  }
  dom_utils_createClass(DomUtils, null, [{
    key: "addClass",
    value: function addClass($ele, className) {
      if (!$ele) {
        return;
      }
      className = className.split(' ');
      DomUtils.getElements($ele).forEach(function ($this) {
        var _$this$classList;
        (_$this$classList = $this.classList).add.apply(_$this$classList, _toConsumableArray(className));
      });
    }
  }, {
    key: "removeClass",
    value: function removeClass($ele, className) {
      if (!$ele) {
        return;
      }
      className = className.split(' ');
      DomUtils.getElements($ele).forEach(function ($this) {
        var _$this$classList2;
        (_$this$classList2 = $this.classList).remove.apply(_$this$classList2, _toConsumableArray(className));
      });
    }
  }, {
    key: "hasClass",
    value: function hasClass($ele, className) {
      if (!$ele) {
        return false;
      }
      return $ele.classList.contains(className);
    }
  }, {
    key: "getElement",
    value: function getElement($ele) {
      if ($ele) {
        if (typeof $ele === 'string') {
          $ele = document.querySelector($ele);
        } else if ($ele.length !== undefined) {
          $ele = $ele[0];
        }
      }
      return $ele || null;
    }
  }, {
    key: "getElements",
    value: function getElements($ele) {
      if (!$ele) {
        return;
      }
      if ($ele.forEach === undefined) {
        $ele = [$ele];
      }
      return $ele;
    }
  }, {
    key: "addEvent",
    value: function addEvent($ele, events, callback) {
      DomUtils.addOrRemoveEvent($ele, events, callback, 'add');
    }
  }, {
    key: "removeEvent",
    value: function removeEvent($ele, events, callback) {
      DomUtils.addOrRemoveEvent($ele, events, callback, 'remove');
    }
  }, {
    key: "addOrRemoveEvent",
    value: function addOrRemoveEvent($ele, events, callback, action) {
      if (!$ele) {
        return;
      }
      events = Utils.removeArrayEmpty(events.split(' '));
      events.forEach(function (event) {
        $ele = DomUtils.getElements($ele);
        $ele.forEach(function ($this) {
          if (action === 'add') {
            $this.addEventListener(event, callback);
          } else {
            $this.removeEventListener(event, callback);
          }
        });
      });
    }
  }, {
    key: "getScrollableParents",
    value: function getScrollableParents($ele) {
      if (!$ele) {
        return [];
      }
      var $scrollableElems = [window];
      var $parent = $ele.parentElement;
      while ($parent) {
        var overflowValue = getComputedStyle($parent).overflow;
        if (overflowValue.indexOf('scroll') !== -1 || overflowValue.indexOf('auto') !== -1) {
          $scrollableElems.push($parent);
        }
        $parent = $parent.parentElement;
      }
      return $scrollableElems;
    }

    /**
     * convert "maxValue" to "data-max-value"
     * @param {string} prop
     */
  }, {
    key: "convertPropToDataAttr",
    value: function convertPropToDataAttr(prop) {
      return prop ? "data-popover-".concat(prop).replace(/([A-Z])/g, '-$1').toLowerCase() : '';
    }
  }]);
  return DomUtils;
}();
;// CONCATENATED MODULE: ./src/popover.js
function popover_typeof(o) { "@babel/helpers - typeof"; return popover_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, popover_typeof(o); }
function popover_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function popover_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, popover_toPropertyKey(descriptor.key), descriptor); } }
function popover_createClass(Constructor, protoProps, staticProps) { if (protoProps) popover_defineProperties(Constructor.prototype, protoProps); if (staticProps) popover_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function popover_toPropertyKey(arg) { var key = popover_toPrimitive(arg, "string"); return popover_typeof(key) === "symbol" ? key : String(key); }
function popover_toPrimitive(input, hint) { if (popover_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (popover_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var keyDownMethodMapping = {
  27: 'onEscPress'
};
var dataProps = ['target', 'position', 'margin', 'offset', 'enterDelay', 'exitDelay', 'showDuration', 'hideDuration', 'transitionDistance', 'updatePositionThrottle', 'zIndex', 'hideOnOuterClick', 'showOnHover', 'hideArrowIcon', 'disableManualAction', 'disableUpdatePosition'];
var attrPropsMapping;
var PopoverComponent = /*#__PURE__*/function () {
  /**
   * @property {(element|string)} ele - Trigger element to toggle popover element
   * @property {string} target - CSS selector to get popover element
   * @property {string} [position=auto] - Position of popover element (auto, top, bottom, left, right, top left, top right, bottom left, bottom right, left top, left bottom, right top, right bottom)
   * @property {number} [margin=8] - Space between popover element and its Trigger element (in pixel)
   * @property {number} [offset=5] - Space between popover element and window edge (in pixel)
   * @property {number} [enterDelay=0] - Delay time before showing popover element (in milliseconds)
   * @property {number} [exitDelay=0] - Delay time before hiding popover element (in milliseconds)
   * @property {number} [showDuration=300] - Transition duration for show animation (in milliseconds)
   * @property {number} [hideDuration=200] - Transition duration for hide animation (in milliseconds)
   * @property {number} [transitionDistance=10] - Distance to translate on show/hide animation (in pixel)
   * @property {number} [updatePositionThrottle=100] - Throttle time for updating popover position on scroll event (in milliseconds)
   * @property {number} [zIndex=1] - CSS z-index value for popover element
   * @property {boolean} [hideOnOuterClick=true] - Hide on clicking outside of popover element
   * @property {boolean} [showOnHover=false] - Show popover element on hovering trigger element
   * @property {boolean} [hideArrowIcon=false] - Hide arrow icon in the popover
   * @property {boolean} [disableManualAction=false] - By default popover would be showed on click/hover trigger element.
   * Set true to disable it and handle show/hide programmatically.
   * @property {boolean} [disableUpdatePosition=false] - By default popover position would be updated on scrolling the parent element.
   * Set true to disable it.
   * @property {function} [beforeShow] - Callback function for before showing popover
   * @property {function} [afterShow] - Callback function for after showing popover
   * @property {function} [beforeHide] - Callback function for before hiding popover
   * @property {function} [afterHide] - Callback function for after hiding popover
   */
  function PopoverComponent(options) {
    popover_classCallCheck(this, PopoverComponent);
    try {
      this.setProps(options);
      this.init();
    } catch (e) {
      console.warn("Couldn't initiate Popover component");
      console.error(e);
    }
  }
  popover_createClass(PopoverComponent, [{
    key: "init",
    value: function init() {
      if (!this.$popover) {
        return;
      }
      this.setElementProps();
      this.renderArrow();
      this.initPopper();
      this.addEvents();
    }

    /** dom event methods - start */
  }, {
    key: "getEvents",
    value: function getEvents() {
      var events = [{
        $ele: document,
        event: 'click',
        method: 'onDocumentClick'
      }, {
        $ele: document,
        event: 'keydown',
        method: 'onDocumentKeyDown'
      }];
      if (!this.disableManualAction) {
        events.push({
          $ele: this.$ele,
          event: 'click',
          method: 'onTriggerEleClick'
        });
        if (this.showOnHover) {
          events.push({
            $ele: this.$ele,
            event: 'mouseenter',
            method: 'onTriggerEleMouseEnter'
          });
          events.push({
            $ele: this.$ele,
            event: 'mouseleave',
            method: 'onTriggerEleMouseLeave'
          });
        }
      }
      return events;
    }
  }, {
    key: "addOrRemoveEvents",
    value: function addOrRemoveEvents(action) {
      var _this = this;
      var events = this.getEvents();
      events.forEach(function (d) {
        _this.addOrRemoveEvent({
          action: action,
          $ele: d.$ele,
          events: d.event,
          method: d.method
        });
      });
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      this.addOrRemoveEvents('add');
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      this.addOrRemoveEvents('remove');
      this.removeScrollEventListeners();
      this.removeResizeEventListeners();
    }
  }, {
    key: "addOrRemoveEvent",
    value: function addOrRemoveEvent(_ref) {
      var _this2 = this;
      var action = _ref.action,
        $ele = _ref.$ele,
        events = _ref.events,
        method = _ref.method,
        throttle = _ref.throttle;
      if (!$ele) {
        return;
      }
      events = Utils.removeArrayEmpty(events.split(' '));
      events.forEach(function (event) {
        var eventsKey = "".concat(method, "-").concat(event);
        var callback = _this2.events[eventsKey];
        if (!callback) {
          callback = _this2[method].bind(_this2);
          if (throttle) {
            callback = Utils.throttle(callback, throttle);
          }
          _this2.events[eventsKey] = callback;
        }
        if (action === 'add') {
          DomUtils.addEvent($ele, event, callback);
        } else {
          DomUtils.removeEvent($ele, event, callback);
        }
      });
    }
  }, {
    key: "addScrollEventListeners",
    value: function addScrollEventListeners() {
      this.$scrollableElems = DomUtils.getScrollableParents(this.$ele);
      this.addOrRemoveEvent({
        action: 'add',
        $ele: this.$scrollableElems,
        events: 'scroll',
        method: 'onAnyParentScroll',
        throttle: this.updatePositionThrottle
      });
    }
  }, {
    key: "removeScrollEventListeners",
    value: function removeScrollEventListeners() {
      if (!this.$scrollableElems) {
        return;
      }
      this.addOrRemoveEvent({
        action: 'remove',
        $ele: this.$scrollableElems,
        events: 'scroll',
        method: 'onAnyParentScroll'
      });
      this.$scrollableElems = null;
    }
  }, {
    key: "addResizeEventListeners",
    value: function addResizeEventListeners() {
      this.addOrRemoveEvent({
        action: 'add',
        $ele: window,
        events: 'resize',
        method: 'onResize',
        throttle: this.updatePositionThrottle
      });
    }
  }, {
    key: "removeResizeEventListeners",
    value: function removeResizeEventListeners() {
      this.addOrRemoveEvent({
        action: 'remove',
        $ele: window,
        events: 'resize',
        method: 'onResize'
      });
    }
  }, {
    key: "onAnyParentScroll",
    value: function onAnyParentScroll() {
      this.popper.updatePosition();
    }
  }, {
    key: "onResize",
    value: function onResize() {
      this.popper.updatePosition();
    }
  }, {
    key: "onDocumentClick",
    value: function onDocumentClick(e) {
      var $target = e.target;
      var $triggerEle = $target.closest('.pop-comp-ele');
      var $popoverEle = $target.closest('.pop-comp-wrapper');
      if (this.hideOnOuterClick && $triggerEle !== this.$ele && $popoverEle !== this.$popover) {
        this.hide();
      }
    }
  }, {
    key: "onDocumentKeyDown",
    value: function onDocumentKeyDown(e) {
      var key = e.which || e.keyCode;
      var method = keyDownMethodMapping[key];
      if (method) {
        this[method](e);
      }
    }
  }, {
    key: "onEscPress",
    value: function onEscPress() {
      if (this.hideOnOuterClick) {
        this.hide();
      }
    }
  }, {
    key: "onTriggerEleClick",
    value: function onTriggerEleClick() {
      this.toggle();
    }
  }, {
    key: "onTriggerEleMouseEnter",
    value: function onTriggerEleMouseEnter() {
      this.show();
    }
  }, {
    key: "onTriggerEleMouseLeave",
    value: function onTriggerEleMouseLeave() {
      this.hide();
    }
    /** dom event methods - end */

    /** set methods - start */
  }, {
    key: "setProps",
    value: function setProps(options) {
      options = this.setDefaultProps(options);
      this.setPropsFromElementAttr(options);
      var convertToBoolean = Utils.convertToBoolean;
      this.$ele = options.ele;
      this.target = options.target;
      this.position = options.position;
      this.margin = parseFloat(options.margin);
      this.offset = parseFloat(options.offset);
      this.enterDelay = parseFloat(options.enterDelay);
      this.exitDelay = parseFloat(options.exitDelay);
      this.showDuration = parseFloat(options.showDuration);
      this.hideDuration = parseFloat(options.hideDuration);
      this.transitionDistance = parseFloat(options.transitionDistance);
      this.updatePositionThrottle = parseFloat(options.updatePositionThrottle);
      this.zIndex = parseFloat(options.zIndex);
      this.hideOnOuterClick = convertToBoolean(options.hideOnOuterClick);
      this.showOnHover = convertToBoolean(options.showOnHover);
      this.hideArrowIcon = convertToBoolean(options.hideArrowIcon);
      this.disableManualAction = convertToBoolean(options.disableManualAction);
      this.disableUpdatePosition = convertToBoolean(options.disableUpdatePosition);
      this.beforeShowCallback = options.beforeShow;
      this.afterShowCallback = options.afterShow;
      this.beforeHideCallback = options.beforeHide;
      this.afterHideCallback = options.afterHide;
      this.events = {};
      this.$popover = DomUtils.getElement(this.target);
    }
  }, {
    key: "setDefaultProps",
    value: function setDefaultProps(options) {
      var defaultOptions = {
        position: 'auto',
        margin: 8,
        offset: 5,
        enterDelay: 0,
        exitDelay: 0,
        showDuration: 300,
        hideDuration: 200,
        transitionDistance: 10,
        updatePositionThrottle: 100,
        zIndex: 1,
        hideOnOuterClick: true,
        showOnHover: false,
        hideArrowIcon: false,
        disableManualAction: false,
        disableUpdatePosition: false
      };
      return Object.assign(defaultOptions, options);
    }
  }, {
    key: "setPropsFromElementAttr",
    value: function setPropsFromElementAttr(options) {
      var $ele = options.ele;
      for (var k in attrPropsMapping) {
        var value = $ele.getAttribute(k);
        if (value) {
          options[attrPropsMapping[k]] = value;
        }
      }
    }
  }, {
    key: "setElementProps",
    value: function setElementProps() {
      var $ele = this.$ele;
      $ele.popComp = this;
      $ele.show = PopoverComponent.showMethod;
      $ele.hide = PopoverComponent.hideMethod;
      $ele.updatePosition = PopoverComponent.updatePositionMethod;
      DomUtils.addClass(this.$ele, 'pop-comp-ele');
      DomUtils.addClass(this.$popover, 'pop-comp-wrapper');
    }
    /** set methods - end */

    /** get methods - start */
  }, {
    key: "getOtherTriggerPopComp",
    value: function getOtherTriggerPopComp() {
      var popComp = this.$popover.popComp;
      var otherPopComp;
      if (popComp && popComp.$ele !== this.$ele) {
        otherPopComp = popComp;
      }
      return otherPopComp;
    }
    /** get methods - end */
  }, {
    key: "initPopper",
    value: function initPopper() {
      var options = {
        $popperEle: this.$popover,
        $triggerEle: this.$ele,
        $arrowEle: this.$arrowEle,
        position: this.position,
        margin: this.margin,
        offset: this.offset,
        enterDelay: this.enterDelay,
        exitDelay: this.exitDelay,
        showDuration: this.showDuration,
        hideDuration: this.hideDuration,
        transitionDistance: this.transitionDistance,
        zIndex: this.zIndex,
        afterShow: this.afterShow.bind(this),
        afterHide: this.afterHide.bind(this)
      };
      this.popper = new PopperComponent(options);
    }
  }, {
    key: "beforeShow",
    value: function beforeShow() {
      if (typeof this.beforeShowCallback === 'function') {
        this.beforeShowCallback(this);
      }
    }
  }, {
    key: "beforeHide",
    value: function beforeHide() {
      if (typeof this.beforeHideCallback === 'function') {
        this.beforeHideCallback(this);
      }
    }
  }, {
    key: "show",
    value: function show() {
      if (this.isShown()) {
        return;
      }
      if (this.isShownForOtherTrigger()) {
        this.showAfterOtherHide();
        return;
      }
      DomUtils.addClass(this.$popover, 'pop-comp-disable-events');
      this.$popover.popComp = this;
      this.beforeShow();
      this.popper.show({
        resetPosition: true
      });
      DomUtils.addClass(this.$ele, 'pop-comp-active');
    }
  }, {
    key: "hide",
    value: function hide() {
      if (!this.isShown()) {
        return;
      }
      this.beforeHide();
      this.popper.hide();
      this.removeScrollEventListeners();
      this.removeResizeEventListeners();
    }
  }, {
    key: "toggle",
    value: function toggle(show) {
      if (show === undefined) {
        show = !this.isShown();
      }
      if (show) {
        this.show();
      } else {
        this.hide();
      }
    }
  }, {
    key: "isShown",
    value: function isShown() {
      return DomUtils.hasClass(this.$ele, 'pop-comp-active');
    }
  }, {
    key: "isShownForOtherTrigger",
    value: function isShownForOtherTrigger() {
      var otherPopComp = this.getOtherTriggerPopComp();
      return otherPopComp ? otherPopComp.isShown() : false;
    }

    /** showing popover after same popover with different trigger element hide */
  }, {
    key: "showAfterOtherHide",
    value: function showAfterOtherHide() {
      var _this3 = this;
      var otherPopComp = this.getOtherTriggerPopComp();
      if (!otherPopComp) {
        return;
      }
      var otherHideTime = otherPopComp.exitDelay + otherPopComp.hideDuration + 100;
      setTimeout(function () {
        _this3.show();
      }, otherHideTime);
    }
  }, {
    key: "afterShow",
    value: function afterShow() {
      var _this4 = this;
      if (this.showOnHover) {
        /** using setTimeout to avoid an issue in firefox. show/hide event is calling continuously when showOnHover is enabled */
        setTimeout(function () {
          DomUtils.removeClass(_this4.$popover, 'pop-comp-disable-events');
        }, 2000);
      } else {
        DomUtils.removeClass(this.$popover, 'pop-comp-disable-events');
      }
      if (!this.disableUpdatePosition) {
        this.addScrollEventListeners();
        this.addResizeEventListeners();
      }
      if (typeof this.afterShowCallback === 'function') {
        this.afterShowCallback(this);
      }
    }
  }, {
    key: "afterHide",
    value: function afterHide() {
      DomUtils.removeClass(this.$ele, 'pop-comp-active');
      if (typeof this.afterHideCallback === 'function') {
        this.afterHideCallback(this);
      }
    }
  }, {
    key: "renderArrow",
    value: function renderArrow() {
      if (this.hideArrowIcon) {
        return;
      }
      var $arrowEle = this.$popover.querySelector('.pop-comp-arrow');
      if (!$arrowEle) {
        this.$popover.insertAdjacentHTML('afterbegin', '<i class="pop-comp-arrow"></i>');
        $arrowEle = this.$popover.querySelector('.pop-comp-arrow');
      }
      this.$arrowEle = $arrowEle;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.removeEvents();
    }

    /** static methods - start */
  }], [{
    key: "init",
    value: function init(options) {
      var $eleArray = options.ele;
      if (!$eleArray) {
        return;
      }
      var singleEle = false;
      if (typeof $eleArray === 'string') {
        $eleArray = document.querySelectorAll($eleArray);
        if (!$eleArray) {
          return;
        }
        if ($eleArray.length === 1) {
          singleEle = true;
        }
      }
      if ($eleArray.length === undefined) {
        $eleArray = [$eleArray];
        singleEle = true;
      }
      var instances = [];
      $eleArray.forEach(function ($ele) {
        options.ele = $ele;
        PopoverComponent.destroy($ele);
        instances.push(new PopoverComponent(options));
      });
      return singleEle ? instances[0] : instances;
    }
  }, {
    key: "destroy",
    value: function destroy($ele) {
      if (!$ele) {
        return;
      }
      var popComp = $ele.popComp;
      if (popComp) {
        popComp.destroy();
      }
    }
  }, {
    key: "showMethod",
    value: function showMethod() {
      this.popComp.show();
    }
  }, {
    key: "hideMethod",
    value: function hideMethod() {
      this.popComp.hide();
    }
  }, {
    key: "updatePositionMethod",
    value: function updatePositionMethod() {
      this.popComp.popper.updatePosition();
    }
  }, {
    key: "getAttrProps",
    value: function getAttrProps() {
      var convertPropToDataAttr = DomUtils.convertPropToDataAttr;
      var result = {};
      dataProps.forEach(function (d) {
        result[convertPropToDataAttr(d)] = d;
      });
      return result;
    }
    /** static methods - end */
  }]);
  return PopoverComponent;
}();
attrPropsMapping = PopoverComponent.getAttrProps();
window.PopoverComponent = PopoverComponent;
}();
/******/ })()
;