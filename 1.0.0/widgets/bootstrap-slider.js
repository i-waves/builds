(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define("widgets/bootstrap-slider", ["jquery"], factory);
	else if(typeof exports === 'object')
		exports["widgets/bootstrap-slider"] = factory(require("jquery"));
	else
		root["widgets/bootstrap-slider"] = factory(root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var Slider = __webpack_require__(19);

function init(Survey) {
  var widget = {
    name: "bootstrap-slider",
    title: "Bootstrap Slider",
    iconName: "icon-bootstrap-slider",
    widgetIsLoaded: function() {
      return typeof Slider != "undefined";
    },
    isFit: function(question) {
      return question.getType() === "bootstrapslider";
    },
    htmlTemplate: "<div></div>",
    activatedByChanged: function(activatedBy) {
      Survey.JsonObject.metaData.addClass("bootstrapslider", [], null, "empty");
      Survey.JsonObject.metaData.addProperties("bootstrapslider", [
        {
          name: "step:number",
          default: 1
        },
        {
          name: "rangeMin:number",
          default: 0
        },
        {
          name: "rangeMax:number",
          default: 100
        }
      ]);
    },
    afterRender: function(question, el) {
      var inputEl = document.createElement("input");
      inputEl.id = question.id;
      inputEl.type = "text";
      inputEl.setAttribute("data-slider-id", question.name + "_" + question.id);
      inputEl.setAttribute("data-slider-min", question.rangeMin);
      inputEl.setAttribute("data-slider-max", question.rangeMax);
      inputEl.setAttribute("data-slider-step", question.step);
      inputEl.setAttribute("data-slider-value", question.value || question.rangeMin);
      el.appendChild(inputEl);
      var slider = new Slider(inputEl, {
        id: question.name + "_" + question.id,
        min: question.rangeMin,
        max: question.rangeMax,
        step: question.step,
        value: question.value || question.rangeMin
      });

      slider.on("change", function(valueObj) {
        question.value = slider.getValue();
      });
      var updateValueHandler = function() {
        slider.setValue(question.value || question.rangeMin);
      };
      question.bootstrapSlider = slider;
      question.valueChangedCallback = updateValueHandler;
    },
    willUnmount: function(question, el) {
      question.bootstrapSlider.destroy();
      question.bootstrapSlider = null;
    }
  };

  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
}

if (typeof Survey !== "undefined") {
  init(Survey);
}

/* harmony default export */ __webpack_exports__["default"] = (init);


/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! =======================================================
                      VERSION  10.0.0              
========================================================= */


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! =========================================================
 * bootstrap-slider.js
 *
 * Maintainers:
 *		Kyle Kemp
 *			- Twitter: @seiyria
 *			- Github:  seiyria
 *		Rohit Kalkur
 *			- Twitter: @Rovolutionary
 *			- Github:  rovolution
 *
 * =========================================================
 *
 * bootstrap-slider is released under the MIT License
 * Copyright (c) 2017 Kyle Kemp, Rohit Kalkur, and contributors
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * ========================================================= */

/**
 * Bridget makes jQuery widgets
 * v1.0.1
 * MIT license
 */
var windowIsDefined = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object";

(function (factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
		var jQuery;
		try {
			jQuery = require("jquery");
		} catch (err) {
			jQuery = null;
		}
		module.exports = factory(jQuery);
	} else if (window) {
		window.Slider = factory(window.jQuery);
	}
})(function ($) {
	// Constants
	var NAMESPACE_MAIN = 'slider';
	var NAMESPACE_ALTERNATE = 'bootstrapSlider';

	// Polyfill console methods
	if (windowIsDefined && !window.console) {
		window.console = {};
	}
	if (windowIsDefined && !window.console.log) {
		window.console.log = function () {};
	}
	if (windowIsDefined && !window.console.warn) {
		window.console.warn = function () {};
	}

	// Reference to Slider constructor
	var Slider;

	(function ($) {

		'use strict';

		// -------------------------- utils -------------------------- //

		var slice = Array.prototype.slice;

		function noop() {}

		// -------------------------- definition -------------------------- //

		function defineBridget($) {

			// bail if no jQuery
			if (!$) {
				return;
			}

			// -------------------------- addOptionMethod -------------------------- //

			/**
    * adds option method -> $().plugin('option', {...})
    * @param {Function} PluginClass - constructor class
    */
			function addOptionMethod(PluginClass) {
				// don't overwrite original option method
				if (PluginClass.prototype.option) {
					return;
				}

				// option setter
				PluginClass.prototype.option = function (opts) {
					// bail out if not an object
					if (!$.isPlainObject(opts)) {
						return;
					}
					this.options = $.extend(true, this.options, opts);
				};
			}

			// -------------------------- plugin bridge -------------------------- //

			// helper function for logging errors
			// $.error breaks jQuery chaining
			var logError = typeof console === 'undefined' ? noop : function (message) {
				console.error(message);
			};

			/**
    * jQuery plugin bridge, access methods like $elem.plugin('method')
    * @param {String} namespace - plugin name
    * @param {Function} PluginClass - constructor class
    */
			function bridge(namespace, PluginClass) {
				// add to jQuery fn namespace
				$.fn[namespace] = function (options) {
					if (typeof options === 'string') {
						// call plugin method when first argument is a string
						// get arguments for method
						var args = slice.call(arguments, 1);

						for (var i = 0, len = this.length; i < len; i++) {
							var elem = this[i];
							var instance = $.data(elem, namespace);
							if (!instance) {
								logError("cannot call methods on " + namespace + " prior to initialization; " + "attempted to call '" + options + "'");
								continue;
							}
							if (!$.isFunction(instance[options]) || options.charAt(0) === '_') {
								logError("no such method '" + options + "' for " + namespace + " instance");
								continue;
							}

							// trigger method with arguments
							var returnValue = instance[options].apply(instance, args);

							// break look and return first value if provided
							if (returnValue !== undefined && returnValue !== instance) {
								return returnValue;
							}
						}
						// return this if no return value
						return this;
					} else {
						var objects = this.map(function () {
							var instance = $.data(this, namespace);
							if (instance) {
								// apply options & init
								instance.option(options);
								instance._init();
							} else {
								// initialize new instance
								instance = new PluginClass(this, options);
								$.data(this, namespace, instance);
							}
							return $(this);
						});

						if (!objects || objects.length > 1) {
							return objects;
						} else {
							return objects[0];
						}
					}
				};
			}

			// -------------------------- bridget -------------------------- //

			/**
    * converts a Prototypical class into a proper jQuery plugin
    *   the class must have a ._init method
    * @param {String} namespace - plugin name, used in $().pluginName
    * @param {Function} PluginClass - constructor class
    */
			$.bridget = function (namespace, PluginClass) {
				addOptionMethod(PluginClass);
				bridge(namespace, PluginClass);
			};

			return $.bridget;
		}

		// get jquery from browser global
		defineBridget($);
	})($);

	/*************************************************
 			BOOTSTRAP-SLIDER SOURCE CODE
 	**************************************************/

	(function ($) {

		var ErrorMsgs = {
			formatInvalidInputErrorMsg: function formatInvalidInputErrorMsg(input) {
				return "Invalid input value '" + input + "' passed in";
			},
			callingContextNotSliderInstance: "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
		};

		var SliderScale = {
			linear: {
				toValue: function toValue(percentage) {
					var rawValue = percentage / 100 * (this.options.max - this.options.min);
					var shouldAdjustWithBase = true;
					if (this.options.ticks_positions.length > 0) {
						var minv,
						    maxv,
						    minp,
						    maxp = 0;
						for (var i = 1; i < this.options.ticks_positions.length; i++) {
							if (percentage <= this.options.ticks_positions[i]) {
								minv = this.options.ticks[i - 1];
								minp = this.options.ticks_positions[i - 1];
								maxv = this.options.ticks[i];
								maxp = this.options.ticks_positions[i];

								break;
							}
						}
						var partialPercentage = (percentage - minp) / (maxp - minp);
						rawValue = minv + partialPercentage * (maxv - minv);
						shouldAdjustWithBase = false;
					}

					var adjustment = shouldAdjustWithBase ? this.options.min : 0;
					var value = adjustment + Math.round(rawValue / this.options.step) * this.options.step;
					if (value < this.options.min) {
						return this.options.min;
					} else if (value > this.options.max) {
						return this.options.max;
					} else {
						return value;
					}
				},
				toPercentage: function toPercentage(value) {
					if (this.options.max === this.options.min) {
						return 0;
					}

					if (this.options.ticks_positions.length > 0) {
						var minv,
						    maxv,
						    minp,
						    maxp = 0;
						for (var i = 0; i < this.options.ticks.length; i++) {
							if (value <= this.options.ticks[i]) {
								minv = i > 0 ? this.options.ticks[i - 1] : 0;
								minp = i > 0 ? this.options.ticks_positions[i - 1] : 0;
								maxv = this.options.ticks[i];
								maxp = this.options.ticks_positions[i];

								break;
							}
						}
						if (i > 0) {
							var partialPercentage = (value - minv) / (maxv - minv);
							return minp + partialPercentage * (maxp - minp);
						}
					}

					return 100 * (value - this.options.min) / (this.options.max - this.options.min);
				}
			},

			logarithmic: {
				/* Based on http://stackoverflow.com/questions/846221/logarithmic-slider */
				toValue: function toValue(percentage) {
					var min = this.options.min === 0 ? 0 : Math.log(this.options.min);
					var max = Math.log(this.options.max);
					var value = Math.exp(min + (max - min) * percentage / 100);
					if (Math.round(value) === this.options.max) {
						return this.options.max;
					}
					value = this.options.min + Math.round((value - this.options.min) / this.options.step) * this.options.step;
					/* Rounding to the nearest step could exceed the min or
      * max, so clip to those values. */
					if (value < this.options.min) {
						return this.options.min;
					} else if (value > this.options.max) {
						return this.options.max;
					} else {
						return value;
					}
				},
				toPercentage: function toPercentage(value) {
					if (this.options.max === this.options.min) {
						return 0;
					} else {
						var max = Math.log(this.options.max);
						var min = this.options.min === 0 ? 0 : Math.log(this.options.min);
						var v = value === 0 ? 0 : Math.log(value);
						return 100 * (v - min) / (max - min);
					}
				}
			}
		};

		/*************************************************
  						CONSTRUCTOR
  	**************************************************/
		Slider = function Slider(element, options) {
			createNewSlider.call(this, element, options);
			return this;
		};

		function createNewSlider(element, options) {

			/*
   	The internal state object is used to store data about the current 'state' of slider.
   	This includes values such as the `value`, `enabled`, etc...
   */
			this._state = {
				value: null,
				enabled: null,
				offset: null,
				size: null,
				percentage: null,
				inDrag: false,
				over: false
			};

			// The objects used to store the reference to the tick methods if ticks_tooltip is on
			this.ticksCallbackMap = {};
			this.handleCallbackMap = {};

			if (typeof element === "string") {
				this.element = document.querySelector(element);
			} else if (element instanceof HTMLElement) {
				this.element = element;
			}

			/*************************************************
   					Process Options
   	**************************************************/
			options = options ? options : {};
			var optionTypes = Object.keys(this.defaultOptions);

			for (var i = 0; i < optionTypes.length; i++) {
				var optName = optionTypes[i];

				// First check if an option was passed in via the constructor
				var val = options[optName];
				// If no data attrib, then check data atrributes
				val = typeof val !== 'undefined' ? val : getDataAttrib(this.element, optName);
				// Finally, if nothing was specified, use the defaults
				val = val !== null ? val : this.defaultOptions[optName];

				// Set all options on the instance of the Slider
				if (!this.options) {
					this.options = {};
				}
				this.options[optName] = val;
			}

			// Check options.rtl
			if (this.options.rtl === 'auto') {
				this.options.rtl = window.getComputedStyle(this.element).direction === 'rtl';
			}

			/*
   	Validate `tooltip_position` against 'orientation`
   	- if `tooltip_position` is incompatible with orientation, swith it to a default compatible with specified `orientation`
   		-- default for "vertical" -> "right", "left" if rtl
   		-- default for "horizontal" -> "top"
   */
			if (this.options.orientation === "vertical" && (this.options.tooltip_position === "top" || this.options.tooltip_position === "bottom")) {
				if (this.options.rtl) {
					this.options.tooltip_position = "left";
				} else {
					this.options.tooltip_position = "right";
				}
			} else if (this.options.orientation === "horizontal" && (this.options.tooltip_position === "left" || this.options.tooltip_position === "right")) {

				this.options.tooltip_position = "top";
			}

			function getDataAttrib(element, optName) {
				var dataName = "data-slider-" + optName.replace(/_/g, '-');
				var dataValString = element.getAttribute(dataName);

				try {
					return JSON.parse(dataValString);
				} catch (err) {
					return dataValString;
				}
			}

			/*************************************************
   					Create Markup
   	**************************************************/

			var origWidth = this.element.style.width;
			var updateSlider = false;
			var parent = this.element.parentNode;
			var sliderTrackSelection;
			var sliderTrackLow, sliderTrackHigh;
			var sliderMinHandle;
			var sliderMaxHandle;

			if (this.sliderElem) {
				updateSlider = true;
			} else {
				/* Create elements needed for slider */
				this.sliderElem = document.createElement("div");
				this.sliderElem.className = "slider";

				/* Create slider track elements */
				var sliderTrack = document.createElement("div");
				sliderTrack.className = "slider-track";

				sliderTrackLow = document.createElement("div");
				sliderTrackLow.className = "slider-track-low";

				sliderTrackSelection = document.createElement("div");
				sliderTrackSelection.className = "slider-selection";

				sliderTrackHigh = document.createElement("div");
				sliderTrackHigh.className = "slider-track-high";

				sliderMinHandle = document.createElement("div");
				sliderMinHandle.className = "slider-handle min-slider-handle";
				sliderMinHandle.setAttribute('role', 'slider');
				sliderMinHandle.setAttribute('aria-valuemin', this.options.min);
				sliderMinHandle.setAttribute('aria-valuemax', this.options.max);

				sliderMaxHandle = document.createElement("div");
				sliderMaxHandle.className = "slider-handle max-slider-handle";
				sliderMaxHandle.setAttribute('role', 'slider');
				sliderMaxHandle.setAttribute('aria-valuemin', this.options.min);
				sliderMaxHandle.setAttribute('aria-valuemax', this.options.max);

				sliderTrack.appendChild(sliderTrackLow);
				sliderTrack.appendChild(sliderTrackSelection);
				sliderTrack.appendChild(sliderTrackHigh);

				/* Create highlight range elements */
				this.rangeHighlightElements = [];
				var rangeHighlightsOpts = this.options.rangeHighlights;
				if (Array.isArray(rangeHighlightsOpts) && rangeHighlightsOpts.length > 0) {
					for (var j = 0; j < rangeHighlightsOpts.length; j++) {
						var rangeHighlightElement = document.createElement("div");
						var customClassString = rangeHighlightsOpts[j].class || "";
						rangeHighlightElement.className = "slider-rangeHighlight slider-selection " + customClassString;
						this.rangeHighlightElements.push(rangeHighlightElement);
						sliderTrack.appendChild(rangeHighlightElement);
					}
				}

				/* Add aria-labelledby to handle's */
				var isLabelledbyArray = Array.isArray(this.options.labelledby);
				if (isLabelledbyArray && this.options.labelledby[0]) {
					sliderMinHandle.setAttribute('aria-labelledby', this.options.labelledby[0]);
				}
				if (isLabelledbyArray && this.options.labelledby[1]) {
					sliderMaxHandle.setAttribute('aria-labelledby', this.options.labelledby[1]);
				}
				if (!isLabelledbyArray && this.options.labelledby) {
					sliderMinHandle.setAttribute('aria-labelledby', this.options.labelledby);
					sliderMaxHandle.setAttribute('aria-labelledby', this.options.labelledby);
				}

				/* Create ticks */
				this.ticks = [];
				if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
					this.ticksContainer = document.createElement('div');
					this.ticksContainer.className = 'slider-tick-container';

					for (i = 0; i < this.options.ticks.length; i++) {
						var tick = document.createElement('div');
						tick.className = 'slider-tick';
						if (this.options.ticks_tooltip) {
							var tickListenerReference = this._addTickListener();
							var enterCallback = tickListenerReference.addMouseEnter(this, tick, i);
							var leaveCallback = tickListenerReference.addMouseLeave(this, tick);

							this.ticksCallbackMap[i] = {
								mouseEnter: enterCallback,
								mouseLeave: leaveCallback
							};
						}
						this.ticks.push(tick);
						this.ticksContainer.appendChild(tick);
					}

					sliderTrackSelection.className += " tick-slider-selection";
				}

				this.tickLabels = [];
				if (Array.isArray(this.options.ticks_labels) && this.options.ticks_labels.length > 0) {
					this.tickLabelContainer = document.createElement('div');
					this.tickLabelContainer.className = 'slider-tick-label-container';

					for (i = 0; i < this.options.ticks_labels.length; i++) {
						var label = document.createElement('div');
						var noTickPositionsSpecified = this.options.ticks_positions.length === 0;
						var tickLabelsIndex = this.options.reversed && noTickPositionsSpecified ? this.options.ticks_labels.length - (i + 1) : i;
						label.className = 'slider-tick-label';
						label.innerHTML = this.options.ticks_labels[tickLabelsIndex];

						this.tickLabels.push(label);
						this.tickLabelContainer.appendChild(label);
					}
				}

				var createAndAppendTooltipSubElements = function createAndAppendTooltipSubElements(tooltipElem) {
					var arrow = document.createElement("div");
					arrow.className = "tooltip-arrow";

					var inner = document.createElement("div");
					inner.className = "tooltip-inner";

					tooltipElem.appendChild(arrow);
					tooltipElem.appendChild(inner);
				};

				/* Create tooltip elements */
				var sliderTooltip = document.createElement("div");
				sliderTooltip.className = "tooltip tooltip-main";
				sliderTooltip.setAttribute('role', 'presentation');
				createAndAppendTooltipSubElements(sliderTooltip);

				var sliderTooltipMin = document.createElement("div");
				sliderTooltipMin.className = "tooltip tooltip-min";
				sliderTooltipMin.setAttribute('role', 'presentation');
				createAndAppendTooltipSubElements(sliderTooltipMin);

				var sliderTooltipMax = document.createElement("div");
				sliderTooltipMax.className = "tooltip tooltip-max";
				sliderTooltipMax.setAttribute('role', 'presentation');
				createAndAppendTooltipSubElements(sliderTooltipMax);

				/* Append components to sliderElem */
				this.sliderElem.appendChild(sliderTrack);
				this.sliderElem.appendChild(sliderTooltip);
				this.sliderElem.appendChild(sliderTooltipMin);
				this.sliderElem.appendChild(sliderTooltipMax);

				if (this.tickLabelContainer) {
					this.sliderElem.appendChild(this.tickLabelContainer);
				}
				if (this.ticksContainer) {
					this.sliderElem.appendChild(this.ticksContainer);
				}

				this.sliderElem.appendChild(sliderMinHandle);
				this.sliderElem.appendChild(sliderMaxHandle);

				/* Append slider element to parent container, right before the original <input> element */
				parent.insertBefore(this.sliderElem, this.element);

				/* Hide original <input> element */
				this.element.style.display = "none";
			}
			/* If JQuery exists, cache JQ references */
			if ($) {
				this.$element = $(this.element);
				this.$sliderElem = $(this.sliderElem);
			}

			/*************************************************
   						Setup
   	**************************************************/
			this.eventToCallbackMap = {};
			this.sliderElem.id = this.options.id;

			this.touchCapable = 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch;

			this.touchX = 0;
			this.touchY = 0;

			this.tooltip = this.sliderElem.querySelector('.tooltip-main');
			this.tooltipInner = this.tooltip.querySelector('.tooltip-inner');

			this.tooltip_min = this.sliderElem.querySelector('.tooltip-min');
			this.tooltipInner_min = this.tooltip_min.querySelector('.tooltip-inner');

			this.tooltip_max = this.sliderElem.querySelector('.tooltip-max');
			this.tooltipInner_max = this.tooltip_max.querySelector('.tooltip-inner');

			if (SliderScale[this.options.scale]) {
				this.options.scale = SliderScale[this.options.scale];
			}

			if (updateSlider === true) {
				// Reset classes
				this._removeClass(this.sliderElem, 'slider-horizontal');
				this._removeClass(this.sliderElem, 'slider-vertical');
				this._removeClass(this.sliderElem, 'slider-rtl');
				this._removeClass(this.tooltip, 'hide');
				this._removeClass(this.tooltip_min, 'hide');
				this._removeClass(this.tooltip_max, 'hide');

				// Undo existing inline styles for track
				["left", "right", "top", "width", "height"].forEach(function (prop) {
					this._removeProperty(this.trackLow, prop);
					this._removeProperty(this.trackSelection, prop);
					this._removeProperty(this.trackHigh, prop);
				}, this);

				// Undo inline styles on handles
				[this.handle1, this.handle2].forEach(function (handle) {
					this._removeProperty(handle, 'left');
					this._removeProperty(handle, 'right');
					this._removeProperty(handle, 'top');
				}, this);

				// Undo inline styles and classes on tooltips
				[this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function (tooltip) {
					this._removeProperty(tooltip, 'left');
					this._removeProperty(tooltip, 'right');
					this._removeProperty(tooltip, 'top');

					this._removeClass(tooltip, 'right');
					this._removeClass(tooltip, 'left');
					this._removeClass(tooltip, 'top');
				}, this);
			}

			if (this.options.orientation === 'vertical') {
				this._addClass(this.sliderElem, 'slider-vertical');
				this.stylePos = 'top';
				this.mousePos = 'pageY';
				this.sizePos = 'offsetHeight';
			} else {
				this._addClass(this.sliderElem, 'slider-horizontal');
				this.sliderElem.style.width = origWidth;
				this.options.orientation = 'horizontal';
				if (this.options.rtl) {
					this.stylePos = 'right';
				} else {
					this.stylePos = 'left';
				}
				this.mousePos = 'pageX';
				this.sizePos = 'offsetWidth';
			}
			// specific rtl class
			if (this.options.rtl) {
				this._addClass(this.sliderElem, 'slider-rtl');
			}
			this._setTooltipPosition();
			/* In case ticks are specified, overwrite the min and max bounds */
			if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
				this.options.max = Math.max.apply(Math, this.options.ticks);
				this.options.min = Math.min.apply(Math, this.options.ticks);
			}

			if (Array.isArray(this.options.value)) {
				this.options.range = true;
				this._state.value = this.options.value;
			} else if (this.options.range) {
				// User wants a range, but value is not an array
				this._state.value = [this.options.value, this.options.max];
			} else {
				this._state.value = this.options.value;
			}

			this.trackLow = sliderTrackLow || this.trackLow;
			this.trackSelection = sliderTrackSelection || this.trackSelection;
			this.trackHigh = sliderTrackHigh || this.trackHigh;

			if (this.options.selection === 'none') {
				this._addClass(this.trackLow, 'hide');
				this._addClass(this.trackSelection, 'hide');
				this._addClass(this.trackHigh, 'hide');
			} else if (this.options.selection === 'after' || this.options.selection === 'before') {
				this._removeClass(this.trackLow, 'hide');
				this._removeClass(this.trackSelection, 'hide');
				this._removeClass(this.trackHigh, 'hide');
			}

			this.handle1 = sliderMinHandle || this.handle1;
			this.handle2 = sliderMaxHandle || this.handle2;

			if (updateSlider === true) {
				// Reset classes
				this._removeClass(this.handle1, 'round triangle');
				this._removeClass(this.handle2, 'round triangle hide');

				for (i = 0; i < this.ticks.length; i++) {
					this._removeClass(this.ticks[i], 'round triangle hide');
				}
			}

			var availableHandleModifiers = ['round', 'triangle', 'custom'];
			var isValidHandleType = availableHandleModifiers.indexOf(this.options.handle) !== -1;
			if (isValidHandleType) {
				this._addClass(this.handle1, this.options.handle);
				this._addClass(this.handle2, this.options.handle);

				for (i = 0; i < this.ticks.length; i++) {
					this._addClass(this.ticks[i], this.options.handle);
				}
			}

			this._state.offset = this._offset(this.sliderElem);
			this._state.size = this.sliderElem[this.sizePos];
			this.setValue(this._state.value);

			/******************************************
   				Bind Event Listeners
   	******************************************/

			// Bind keyboard handlers
			this.handle1Keydown = this._keydown.bind(this, 0);
			this.handle1.addEventListener("keydown", this.handle1Keydown, false);

			this.handle2Keydown = this._keydown.bind(this, 1);
			this.handle2.addEventListener("keydown", this.handle2Keydown, false);

			this.mousedown = this._mousedown.bind(this);
			this.touchstart = this._touchstart.bind(this);
			this.touchmove = this._touchmove.bind(this);

			if (this.touchCapable) {
				// Test for passive event support
				var supportsPassive = false;
				try {
					var opts = Object.defineProperty({}, 'passive', {
						get: function get() {
							supportsPassive = true;
						}
					});
					window.addEventListener("test", null, opts);
				} catch (e) {}
				// Use our detect's results. passive applied if supported, capture will be false either way.
				var eventOptions = supportsPassive ? { passive: true } : false;
				// Bind touch handlers
				this.sliderElem.addEventListener("touchstart", this.touchstart, eventOptions);
				this.sliderElem.addEventListener("touchmove", this.touchmove, eventOptions);
			}
			this.sliderElem.addEventListener("mousedown", this.mousedown, false);

			// Bind window handlers
			this.resize = this._resize.bind(this);
			window.addEventListener("resize", this.resize, false);

			// Bind tooltip-related handlers
			if (this.options.tooltip === 'hide') {
				this._addClass(this.tooltip, 'hide');
				this._addClass(this.tooltip_min, 'hide');
				this._addClass(this.tooltip_max, 'hide');
			} else if (this.options.tooltip === 'always') {
				this._showTooltip();
				this._alwaysShowTooltip = true;
			} else {
				this.showTooltip = this._showTooltip.bind(this);
				this.hideTooltip = this._hideTooltip.bind(this);

				if (this.options.ticks_tooltip) {
					var callbackHandle = this._addTickListener();
					//create handle1 listeners and store references in map
					var mouseEnter = callbackHandle.addMouseEnter(this, this.handle1);
					var mouseLeave = callbackHandle.addMouseLeave(this, this.handle1);
					this.handleCallbackMap.handle1 = {
						mouseEnter: mouseEnter,
						mouseLeave: mouseLeave
					};
					//create handle2 listeners and store references in map
					mouseEnter = callbackHandle.addMouseEnter(this, this.handle2);
					mouseLeave = callbackHandle.addMouseLeave(this, this.handle2);
					this.handleCallbackMap.handle2 = {
						mouseEnter: mouseEnter,
						mouseLeave: mouseLeave
					};
				} else {
					this.sliderElem.addEventListener("mouseenter", this.showTooltip, false);
					this.sliderElem.addEventListener("mouseleave", this.hideTooltip, false);
				}

				this.handle1.addEventListener("focus", this.showTooltip, false);
				this.handle1.addEventListener("blur", this.hideTooltip, false);

				this.handle2.addEventListener("focus", this.showTooltip, false);
				this.handle2.addEventListener("blur", this.hideTooltip, false);
			}

			if (this.options.enabled) {
				this.enable();
			} else {
				this.disable();
			}
		}

		/*************************************************
  				INSTANCE PROPERTIES/METHODS
  	- Any methods bound to the prototype are considered
  part of the plugin's `public` interface
  	**************************************************/
		Slider.prototype = {
			_init: function _init() {}, // NOTE: Must exist to support bridget

			constructor: Slider,

			defaultOptions: {
				id: "",
				min: 0,
				max: 10,
				step: 1,
				precision: 0,
				orientation: 'horizontal',
				value: 5,
				range: false,
				selection: 'before',
				tooltip: 'show',
				tooltip_split: false,
				handle: 'round',
				reversed: false,
				rtl: 'auto',
				enabled: true,
				formatter: function formatter(val) {
					if (Array.isArray(val)) {
						return val[0] + " : " + val[1];
					} else {
						return val;
					}
				},
				natural_arrow_keys: false,
				ticks: [],
				ticks_positions: [],
				ticks_labels: [],
				ticks_snap_bounds: 0,
				ticks_tooltip: false,
				scale: 'linear',
				focus: false,
				tooltip_position: null,
				labelledby: null,
				rangeHighlights: []
			},

			getElement: function getElement() {
				return this.sliderElem;
			},

			getValue: function getValue() {
				if (this.options.range) {
					return this._state.value;
				} else {
					return this._state.value[0];
				}
			},

			setValue: function setValue(val, triggerSlideEvent, triggerChangeEvent) {
				if (!val) {
					val = 0;
				}
				var oldValue = this.getValue();
				this._state.value = this._validateInputValue(val);
				var applyPrecision = this._applyPrecision.bind(this);

				if (this.options.range) {
					this._state.value[0] = applyPrecision(this._state.value[0]);
					this._state.value[1] = applyPrecision(this._state.value[1]);

					this._state.value[0] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[0]));
					this._state.value[1] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[1]));
				} else {
					this._state.value = applyPrecision(this._state.value);
					this._state.value = [Math.max(this.options.min, Math.min(this.options.max, this._state.value))];
					this._addClass(this.handle2, 'hide');
					if (this.options.selection === 'after') {
						this._state.value[1] = this.options.max;
					} else {
						this._state.value[1] = this.options.min;
					}
				}

				if (this.options.max > this.options.min) {
					this._state.percentage = [this._toPercentage(this._state.value[0]), this._toPercentage(this._state.value[1]), this.options.step * 100 / (this.options.max - this.options.min)];
				} else {
					this._state.percentage = [0, 0, 100];
				}

				this._layout();
				var newValue = this.options.range ? this._state.value : this._state.value[0];

				this._setDataVal(newValue);
				if (triggerSlideEvent === true) {
					this._trigger('slide', newValue);
				}
				if (oldValue !== newValue && triggerChangeEvent === true) {
					this._trigger('change', {
						oldValue: oldValue,
						newValue: newValue
					});
				}

				return this;
			},

			destroy: function destroy() {
				// Remove event handlers on slider elements
				this._removeSliderEventHandlers();

				// Remove the slider from the DOM
				this.sliderElem.parentNode.removeChild(this.sliderElem);
				/* Show original <input> element */
				this.element.style.display = "";

				// Clear out custom event bindings
				this._cleanUpEventCallbacksMap();

				// Remove data values
				this.element.removeAttribute("data");

				// Remove JQuery handlers/data
				if ($) {
					this._unbindJQueryEventHandlers();
					this.$element.removeData('slider');
				}
			},

			disable: function disable() {
				this._state.enabled = false;
				this.handle1.removeAttribute("tabindex");
				this.handle2.removeAttribute("tabindex");
				this._addClass(this.sliderElem, 'slider-disabled');
				this._trigger('slideDisabled');

				return this;
			},

			enable: function enable() {
				this._state.enabled = true;
				this.handle1.setAttribute("tabindex", 0);
				this.handle2.setAttribute("tabindex", 0);
				this._removeClass(this.sliderElem, 'slider-disabled');
				this._trigger('slideEnabled');

				return this;
			},

			toggle: function toggle() {
				if (this._state.enabled) {
					this.disable();
				} else {
					this.enable();
				}
				return this;
			},

			isEnabled: function isEnabled() {
				return this._state.enabled;
			},

			on: function on(evt, callback) {
				this._bindNonQueryEventHandler(evt, callback);
				return this;
			},

			off: function off(evt, callback) {
				if ($) {
					this.$element.off(evt, callback);
					this.$sliderElem.off(evt, callback);
				} else {
					this._unbindNonQueryEventHandler(evt, callback);
				}
			},

			getAttribute: function getAttribute(attribute) {
				if (attribute) {
					return this.options[attribute];
				} else {
					return this.options;
				}
			},

			setAttribute: function setAttribute(attribute, value) {
				this.options[attribute] = value;
				return this;
			},

			refresh: function refresh() {
				this._removeSliderEventHandlers();
				createNewSlider.call(this, this.element, this.options);
				if ($) {
					// Bind new instance of slider to the element
					$.data(this.element, 'slider', this);
				}
				return this;
			},

			relayout: function relayout() {
				this._resize();
				this._layout();
				return this;
			},

			/******************************+
   				HELPERS
   	- Any method that is not part of the public interface.
   - Place it underneath this comment block and write its signature like so:
   		_fnName : function() {...}
   	********************************/
			_removeSliderEventHandlers: function _removeSliderEventHandlers() {
				// Remove keydown event listeners
				this.handle1.removeEventListener("keydown", this.handle1Keydown, false);
				this.handle2.removeEventListener("keydown", this.handle2Keydown, false);

				//remove the listeners from the ticks and handles if they had their own listeners
				if (this.options.ticks_tooltip) {
					var ticks = this.ticksContainer.getElementsByClassName('slider-tick');
					for (var i = 0; i < ticks.length; i++) {
						ticks[i].removeEventListener('mouseenter', this.ticksCallbackMap[i].mouseEnter, false);
						ticks[i].removeEventListener('mouseleave', this.ticksCallbackMap[i].mouseLeave, false);
					}
					this.handle1.removeEventListener('mouseenter', this.handleCallbackMap.handle1.mouseEnter, false);
					this.handle2.removeEventListener('mouseenter', this.handleCallbackMap.handle2.mouseEnter, false);
					this.handle1.removeEventListener('mouseleave', this.handleCallbackMap.handle1.mouseLeave, false);
					this.handle2.removeEventListener('mouseleave', this.handleCallbackMap.handle2.mouseLeave, false);
				}

				this.handleCallbackMap = null;
				this.ticksCallbackMap = null;

				if (this.showTooltip) {
					this.handle1.removeEventListener("focus", this.showTooltip, false);
					this.handle2.removeEventListener("focus", this.showTooltip, false);
				}
				if (this.hideTooltip) {
					this.handle1.removeEventListener("blur", this.hideTooltip, false);
					this.handle2.removeEventListener("blur", this.hideTooltip, false);
				}

				// Remove event listeners from sliderElem
				if (this.showTooltip) {
					this.sliderElem.removeEventListener("mouseenter", this.showTooltip, false);
				}
				if (this.hideTooltip) {
					this.sliderElem.removeEventListener("mouseleave", this.hideTooltip, false);
				}
				this.sliderElem.removeEventListener("touchstart", this.touchstart, false);
				this.sliderElem.removeEventListener("touchmove", this.touchmove, false);
				this.sliderElem.removeEventListener("mousedown", this.mousedown, false);

				// Remove window event listener
				window.removeEventListener("resize", this.resize, false);
			},
			_bindNonQueryEventHandler: function _bindNonQueryEventHandler(evt, callback) {
				if (this.eventToCallbackMap[evt] === undefined) {
					this.eventToCallbackMap[evt] = [];
				}
				this.eventToCallbackMap[evt].push(callback);
			},
			_unbindNonQueryEventHandler: function _unbindNonQueryEventHandler(evt, callback) {
				var callbacks = this.eventToCallbackMap[evt];
				if (callbacks !== undefined) {
					for (var i = 0; i < callbacks.length; i++) {
						if (callbacks[i] === callback) {
							callbacks.splice(i, 1);
							break;
						}
					}
				}
			},
			_cleanUpEventCallbacksMap: function _cleanUpEventCallbacksMap() {
				var eventNames = Object.keys(this.eventToCallbackMap);
				for (var i = 0; i < eventNames.length; i++) {
					var eventName = eventNames[i];
					delete this.eventToCallbackMap[eventName];
				}
			},
			_showTooltip: function _showTooltip() {
				if (this.options.tooltip_split === false) {
					this._addClass(this.tooltip, 'in');
					this.tooltip_min.style.display = 'none';
					this.tooltip_max.style.display = 'none';
				} else {
					this._addClass(this.tooltip_min, 'in');
					this._addClass(this.tooltip_max, 'in');
					this.tooltip.style.display = 'none';
				}
				this._state.over = true;
			},
			_hideTooltip: function _hideTooltip() {
				if (this._state.inDrag === false && this.alwaysShowTooltip !== true) {
					this._removeClass(this.tooltip, 'in');
					this._removeClass(this.tooltip_min, 'in');
					this._removeClass(this.tooltip_max, 'in');
				}
				this._state.over = false;
			},
			_setToolTipOnMouseOver: function _setToolTipOnMouseOver(tempState) {
				var formattedTooltipVal = this.options.formatter(!tempState ? this._state.value[0] : tempState.value[0]);
				var positionPercentages = !tempState ? getPositionPercentages(this._state, this.options.reversed) : getPositionPercentages(tempState, this.options.reversed);
				this._setText(this.tooltipInner, formattedTooltipVal);

				this.tooltip.style[this.stylePos] = positionPercentages[0] + "%";

				function getPositionPercentages(state, reversed) {
					if (reversed) {
						return [100 - state.percentage[0], this.options.range ? 100 - state.percentage[1] : state.percentage[1]];
					}
					return [state.percentage[0], state.percentage[1]];
				}
			},
			_addTickListener: function _addTickListener() {
				return {
					addMouseEnter: function addMouseEnter(reference, tick, index) {
						var enter = function enter() {
							var tempState = reference._state;
							var idString = index >= 0 ? index : this.attributes['aria-valuenow'].value;
							var hoverIndex = parseInt(idString, 10);
							tempState.value[0] = hoverIndex;
							tempState.percentage[0] = reference.options.ticks_positions[hoverIndex];
							reference._setToolTipOnMouseOver(tempState);
							reference._showTooltip();
						};
						tick.addEventListener("mouseenter", enter, false);
						return enter;
					},
					addMouseLeave: function addMouseLeave(reference, tick) {
						var leave = function leave() {
							reference._hideTooltip();
						};
						tick.addEventListener("mouseleave", leave, false);
						return leave;
					}
				};
			},
			_layout: function _layout() {
				var positionPercentages;

				if (this.options.reversed) {
					positionPercentages = [100 - this._state.percentage[0], this.options.range ? 100 - this._state.percentage[1] : this._state.percentage[1]];
				} else {
					positionPercentages = [this._state.percentage[0], this._state.percentage[1]];
				}

				this.handle1.style[this.stylePos] = positionPercentages[0] + "%";
				this.handle1.setAttribute('aria-valuenow', this._state.value[0]);
				if (isNaN(this.options.formatter(this._state.value[0]))) {
					this.handle1.setAttribute('aria-valuetext', this.options.formatter(this._state.value[0]));
				}

				this.handle2.style[this.stylePos] = positionPercentages[1] + "%";
				this.handle2.setAttribute('aria-valuenow', this._state.value[1]);
				if (isNaN(this.options.formatter(this._state.value[1]))) {
					this.handle2.setAttribute('aria-valuetext', this.options.formatter(this._state.value[1]));
				}

				/* Position highlight range elements */
				if (this.rangeHighlightElements.length > 0 && Array.isArray(this.options.rangeHighlights) && this.options.rangeHighlights.length > 0) {
					for (var _i = 0; _i < this.options.rangeHighlights.length; _i++) {
						var startPercent = this._toPercentage(this.options.rangeHighlights[_i].start);
						var endPercent = this._toPercentage(this.options.rangeHighlights[_i].end);

						if (this.options.reversed) {
							var sp = 100 - endPercent;
							endPercent = 100 - startPercent;
							startPercent = sp;
						}

						var currentRange = this._createHighlightRange(startPercent, endPercent);

						if (currentRange) {
							if (this.options.orientation === 'vertical') {
								this.rangeHighlightElements[_i].style.top = currentRange.start + "%";
								this.rangeHighlightElements[_i].style.height = currentRange.size + "%";
							} else {
								if (this.options.rtl) {
									this.rangeHighlightElements[_i].style.right = currentRange.start + "%";
								} else {
									this.rangeHighlightElements[_i].style.left = currentRange.start + "%";
								}
								this.rangeHighlightElements[_i].style.width = currentRange.size + "%";
							}
						} else {
							this.rangeHighlightElements[_i].style.display = "none";
						}
					}
				}

				/* Position ticks and labels */
				if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {

					var styleSize = this.options.orientation === 'vertical' ? 'height' : 'width';
					var styleMargin;
					if (this.options.orientation === 'vertical') {
						styleMargin = 'marginTop';
					} else {
						if (this.options.rtl) {
							styleMargin = 'marginRight';
						} else {
							styleMargin = 'marginLeft';
						}
					}
					var labelSize = this._state.size / (this.options.ticks.length - 1);

					if (this.tickLabelContainer) {
						var extraMargin = 0;
						if (this.options.ticks_positions.length === 0) {
							if (this.options.orientation !== 'vertical') {
								this.tickLabelContainer.style[styleMargin] = -labelSize / 2 + "px";
							}

							extraMargin = this.tickLabelContainer.offsetHeight;
						} else {
							/* Chidren are position absolute, calculate height by finding the max offsetHeight of a child */
							for (i = 0; i < this.tickLabelContainer.childNodes.length; i++) {
								if (this.tickLabelContainer.childNodes[i].offsetHeight > extraMargin) {
									extraMargin = this.tickLabelContainer.childNodes[i].offsetHeight;
								}
							}
						}
						if (this.options.orientation === 'horizontal') {
							this.sliderElem.style.marginBottom = extraMargin + "px";
						}
					}
					for (var i = 0; i < this.options.ticks.length; i++) {

						var percentage = this.options.ticks_positions[i] || this._toPercentage(this.options.ticks[i]);

						if (this.options.reversed) {
							percentage = 100 - percentage;
						}

						this.ticks[i].style[this.stylePos] = percentage + "%";

						/* Set class labels to denote whether ticks are in the selection */
						this._removeClass(this.ticks[i], 'in-selection');
						if (!this.options.range) {
							if (this.options.selection === 'after' && percentage >= positionPercentages[0]) {
								this._addClass(this.ticks[i], 'in-selection');
							} else if (this.options.selection === 'before' && percentage <= positionPercentages[0]) {
								this._addClass(this.ticks[i], 'in-selection');
							}
						} else if (percentage >= positionPercentages[0] && percentage <= positionPercentages[1]) {
							this._addClass(this.ticks[i], 'in-selection');
						}

						if (this.tickLabels[i]) {
							this.tickLabels[i].style[styleSize] = labelSize + "px";

							if (this.options.orientation !== 'vertical' && this.options.ticks_positions[i] !== undefined) {
								this.tickLabels[i].style.position = 'absolute';
								this.tickLabels[i].style[this.stylePos] = percentage + "%";
								this.tickLabels[i].style[styleMargin] = -labelSize / 2 + 'px';
							} else if (this.options.orientation === 'vertical') {
								if (this.options.rtl) {
									this.tickLabels[i].style['marginRight'] = this.sliderElem.offsetWidth + "px";
								} else {
									this.tickLabels[i].style['marginLeft'] = this.sliderElem.offsetWidth + "px";
								}
								this.tickLabelContainer.style[styleMargin] = this.sliderElem.offsetWidth / 2 * -1 + 'px';
							}
						}
					}
				}

				var formattedTooltipVal;

				if (this.options.range) {
					formattedTooltipVal = this.options.formatter(this._state.value);
					this._setText(this.tooltipInner, formattedTooltipVal);
					this.tooltip.style[this.stylePos] = (positionPercentages[1] + positionPercentages[0]) / 2 + "%";

					var innerTooltipMinText = this.options.formatter(this._state.value[0]);
					this._setText(this.tooltipInner_min, innerTooltipMinText);

					var innerTooltipMaxText = this.options.formatter(this._state.value[1]);
					this._setText(this.tooltipInner_max, innerTooltipMaxText);

					this.tooltip_min.style[this.stylePos] = positionPercentages[0] + "%";

					this.tooltip_max.style[this.stylePos] = positionPercentages[1] + "%";
				} else {
					formattedTooltipVal = this.options.formatter(this._state.value[0]);
					this._setText(this.tooltipInner, formattedTooltipVal);

					this.tooltip.style[this.stylePos] = positionPercentages[0] + "%";
				}

				if (this.options.orientation === 'vertical') {
					this.trackLow.style.top = '0';
					this.trackLow.style.height = Math.min(positionPercentages[0], positionPercentages[1]) + '%';

					this.trackSelection.style.top = Math.min(positionPercentages[0], positionPercentages[1]) + '%';
					this.trackSelection.style.height = Math.abs(positionPercentages[0] - positionPercentages[1]) + '%';

					this.trackHigh.style.bottom = '0';
					this.trackHigh.style.height = 100 - Math.min(positionPercentages[0], positionPercentages[1]) - Math.abs(positionPercentages[0] - positionPercentages[1]) + '%';
				} else {
					if (this.stylePos === 'right') {
						this.trackLow.style.right = '0';
					} else {
						this.trackLow.style.left = '0';
					}
					this.trackLow.style.width = Math.min(positionPercentages[0], positionPercentages[1]) + '%';

					if (this.stylePos === 'right') {
						this.trackSelection.style.right = Math.min(positionPercentages[0], positionPercentages[1]) + '%';
					} else {
						this.trackSelection.style.left = Math.min(positionPercentages[0], positionPercentages[1]) + '%';
					}
					this.trackSelection.style.width = Math.abs(positionPercentages[0] - positionPercentages[1]) + '%';

					if (this.stylePos === 'right') {
						this.trackHigh.style.left = '0';
					} else {
						this.trackHigh.style.right = '0';
					}
					this.trackHigh.style.width = 100 - Math.min(positionPercentages[0], positionPercentages[1]) - Math.abs(positionPercentages[0] - positionPercentages[1]) + '%';

					var offset_min = this.tooltip_min.getBoundingClientRect();
					var offset_max = this.tooltip_max.getBoundingClientRect();

					if (this.options.tooltip_position === 'bottom') {
						if (offset_min.right > offset_max.left) {
							this._removeClass(this.tooltip_max, 'bottom');
							this._addClass(this.tooltip_max, 'top');
							this.tooltip_max.style.top = '';
							this.tooltip_max.style.bottom = 22 + 'px';
						} else {
							this._removeClass(this.tooltip_max, 'top');
							this._addClass(this.tooltip_max, 'bottom');
							this.tooltip_max.style.top = this.tooltip_min.style.top;
							this.tooltip_max.style.bottom = '';
						}
					} else {
						if (offset_min.right > offset_max.left) {
							this._removeClass(this.tooltip_max, 'top');
							this._addClass(this.tooltip_max, 'bottom');
							this.tooltip_max.style.top = 18 + 'px';
						} else {
							this._removeClass(this.tooltip_max, 'bottom');
							this._addClass(this.tooltip_max, 'top');
							this.tooltip_max.style.top = this.tooltip_min.style.top;
						}
					}
				}
			},
			_createHighlightRange: function _createHighlightRange(start, end) {
				if (this._isHighlightRange(start, end)) {
					if (start > end) {
						return { 'start': end, 'size': start - end };
					}
					return { 'start': start, 'size': end - start };
				}
				return null;
			},
			_isHighlightRange: function _isHighlightRange(start, end) {
				if (0 <= start && start <= 100 && 0 <= end && end <= 100) {
					return true;
				} else {
					return false;
				}
			},
			_resize: function _resize(ev) {
				/*jshint unused:false*/
				this._state.offset = this._offset(this.sliderElem);
				this._state.size = this.sliderElem[this.sizePos];
				this._layout();
			},
			_removeProperty: function _removeProperty(element, prop) {
				if (element.style.removeProperty) {
					element.style.removeProperty(prop);
				} else {
					element.style.removeAttribute(prop);
				}
			},
			_mousedown: function _mousedown(ev) {
				if (!this._state.enabled) {
					return false;
				}

				this._state.offset = this._offset(this.sliderElem);
				this._state.size = this.sliderElem[this.sizePos];

				var percentage = this._getPercentage(ev);

				if (this.options.range) {
					var diff1 = Math.abs(this._state.percentage[0] - percentage);
					var diff2 = Math.abs(this._state.percentage[1] - percentage);
					this._state.dragged = diff1 < diff2 ? 0 : 1;
					this._adjustPercentageForRangeSliders(percentage);
				} else {
					this._state.dragged = 0;
				}

				this._state.percentage[this._state.dragged] = percentage;
				this._layout();

				if (this.touchCapable) {
					document.removeEventListener("touchmove", this.mousemove, false);
					document.removeEventListener("touchend", this.mouseup, false);
				}

				if (this.mousemove) {
					document.removeEventListener("mousemove", this.mousemove, false);
				}
				if (this.mouseup) {
					document.removeEventListener("mouseup", this.mouseup, false);
				}

				this.mousemove = this._mousemove.bind(this);
				this.mouseup = this._mouseup.bind(this);

				if (this.touchCapable) {
					// Touch: Bind touch events:
					document.addEventListener("touchmove", this.mousemove, false);
					document.addEventListener("touchend", this.mouseup, false);
				}
				// Bind mouse events:
				document.addEventListener("mousemove", this.mousemove, false);
				document.addEventListener("mouseup", this.mouseup, false);

				this._state.inDrag = true;
				var newValue = this._calculateValue();

				this._trigger('slideStart', newValue);

				this._setDataVal(newValue);
				this.setValue(newValue, false, true);

				ev.returnValue = false;

				if (this.options.focus) {
					this._triggerFocusOnHandle(this._state.dragged);
				}

				return true;
			},
			_touchstart: function _touchstart(ev) {
				if (ev.changedTouches === undefined) {
					this._mousedown(ev);
					return;
				}

				var touch = ev.changedTouches[0];
				this.touchX = touch.pageX;
				this.touchY = touch.pageY;
			},
			_triggerFocusOnHandle: function _triggerFocusOnHandle(handleIdx) {
				if (handleIdx === 0) {
					this.handle1.focus();
				}
				if (handleIdx === 1) {
					this.handle2.focus();
				}
			},
			_keydown: function _keydown(handleIdx, ev) {
				if (!this._state.enabled) {
					return false;
				}

				var dir;
				switch (ev.keyCode) {
					case 37: // left
					case 40:
						// down
						dir = -1;
						break;
					case 39: // right
					case 38:
						// up
						dir = 1;
						break;
				}
				if (!dir) {
					return;
				}

				// use natural arrow keys instead of from min to max
				if (this.options.natural_arrow_keys) {
					var ifVerticalAndNotReversed = this.options.orientation === 'vertical' && !this.options.reversed;
					var ifHorizontalAndReversed = this.options.orientation === 'horizontal' && this.options.reversed; // @todo control with rtl

					if (ifVerticalAndNotReversed || ifHorizontalAndReversed) {
						dir = -dir;
					}
				}

				var val = this._state.value[handleIdx] + dir * this.options.step;
				var percentage = val / this.options.max * 100;
				this._state.keyCtrl = handleIdx;
				if (this.options.range) {
					this._adjustPercentageForRangeSliders(percentage);
					var val1 = !this._state.keyCtrl ? val : this._state.value[0];
					var val2 = this._state.keyCtrl ? val : this._state.value[1];
					val = [val1, val2];
				}

				this._trigger('slideStart', val);
				this._setDataVal(val);
				this.setValue(val, true, true);

				this._setDataVal(val);
				this._trigger('slideStop', val);
				this._layout();

				this._pauseEvent(ev);
				delete this._state.keyCtrl;

				return false;
			},
			_pauseEvent: function _pauseEvent(ev) {
				if (ev.stopPropagation) {
					ev.stopPropagation();
				}
				if (ev.preventDefault) {
					ev.preventDefault();
				}
				ev.cancelBubble = true;
				ev.returnValue = false;
			},
			_mousemove: function _mousemove(ev) {
				if (!this._state.enabled) {
					return false;
				}

				var percentage = this._getPercentage(ev);
				this._adjustPercentageForRangeSliders(percentage);
				this._state.percentage[this._state.dragged] = percentage;
				this._layout();

				var val = this._calculateValue(true);
				this.setValue(val, true, true);

				return false;
			},
			_touchmove: function _touchmove(ev) {
				if (ev.changedTouches === undefined) {
					return;
				}

				var touch = ev.changedTouches[0];

				var xDiff = touch.pageX - this.touchX;
				var yDiff = touch.pageY - this.touchY;

				if (!this._state.inDrag) {
					// Vertical Slider
					if (this.options.orientation === 'vertical' && xDiff <= 5 && xDiff >= -5 && (yDiff >= 15 || yDiff <= -15)) {
						this._mousedown(ev);
					}
					// Horizontal slider.
					else if (yDiff <= 5 && yDiff >= -5 && (xDiff >= 15 || xDiff <= -15)) {
							this._mousedown(ev);
						}
				}
			},
			_adjustPercentageForRangeSliders: function _adjustPercentageForRangeSliders(percentage) {
				if (this.options.range) {
					var precision = this._getNumDigitsAfterDecimalPlace(percentage);
					precision = precision ? precision - 1 : 0;
					var percentageWithAdjustedPrecision = this._applyToFixedAndParseFloat(percentage, precision);
					if (this._state.dragged === 0 && this._applyToFixedAndParseFloat(this._state.percentage[1], precision) < percentageWithAdjustedPrecision) {
						this._state.percentage[0] = this._state.percentage[1];
						this._state.dragged = 1;
					} else if (this._state.dragged === 1 && this._applyToFixedAndParseFloat(this._state.percentage[0], precision) > percentageWithAdjustedPrecision) {
						this._state.percentage[1] = this._state.percentage[0];
						this._state.dragged = 0;
					} else if (this._state.keyCtrl === 0 && this._state.value[1] / this.options.max * 100 < percentage) {
						this._state.percentage[0] = this._state.percentage[1];
						this._state.keyCtrl = 1;
						this.handle2.focus();
					} else if (this._state.keyCtrl === 1 && this._state.value[0] / this.options.max * 100 > percentage) {
						this._state.percentage[1] = this._state.percentage[0];
						this._state.keyCtrl = 0;
						this.handle1.focus();
					}
				}
			},
			_mouseup: function _mouseup() {
				if (!this._state.enabled) {
					return false;
				}
				if (this.touchCapable) {
					// Touch: Unbind touch event handlers:
					document.removeEventListener("touchmove", this.mousemove, false);
					document.removeEventListener("touchend", this.mouseup, false);
				}
				// Unbind mouse event handlers:
				document.removeEventListener("mousemove", this.mousemove, false);
				document.removeEventListener("mouseup", this.mouseup, false);

				this._state.inDrag = false;
				if (this._state.over === false) {
					this._hideTooltip();
				}
				var val = this._calculateValue(true);

				this._layout();
				this._setDataVal(val);
				this._trigger('slideStop', val);

				return false;
			},
			_calculateValue: function _calculateValue(snapToClosestTick) {
				var val;
				if (this.options.range) {
					val = [this.options.min, this.options.max];
					if (this._state.percentage[0] !== 0) {
						val[0] = this._toValue(this._state.percentage[0]);
						val[0] = this._applyPrecision(val[0]);
					}
					if (this._state.percentage[1] !== 100) {
						val[1] = this._toValue(this._state.percentage[1]);
						val[1] = this._applyPrecision(val[1]);
					}
				} else {
					val = this._toValue(this._state.percentage[0]);
					val = parseFloat(val);
					val = this._applyPrecision(val);
				}

				if (snapToClosestTick) {
					var min = [val, Infinity];
					for (var i = 0; i < this.options.ticks.length; i++) {
						var diff = Math.abs(this.options.ticks[i] - val);
						if (diff <= min[1]) {
							min = [this.options.ticks[i], diff];
						}
					}
					if (min[1] <= this.options.ticks_snap_bounds) {
						return min[0];
					}
				}

				return val;
			},
			_applyPrecision: function _applyPrecision(val) {
				var precision = this.options.precision || this._getNumDigitsAfterDecimalPlace(this.options.step);
				return this._applyToFixedAndParseFloat(val, precision);
			},
			_getNumDigitsAfterDecimalPlace: function _getNumDigitsAfterDecimalPlace(num) {
				var match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
				if (!match) {
					return 0;
				}
				return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
			},
			_applyToFixedAndParseFloat: function _applyToFixedAndParseFloat(num, toFixedInput) {
				var truncatedNum = num.toFixed(toFixedInput);
				return parseFloat(truncatedNum);
			},
			/*
   	Credits to Mike Samuel for the following method!
   	Source: http://stackoverflow.com/questions/10454518/javascript-how-to-retrieve-the-number-of-decimals-of-a-string-number
   */
			_getPercentage: function _getPercentage(ev) {
				if (this.touchCapable && (ev.type === 'touchstart' || ev.type === 'touchmove')) {
					ev = ev.touches[0];
				}

				var eventPosition = ev[this.mousePos];
				var sliderOffset = this._state.offset[this.stylePos];
				var distanceToSlide = eventPosition - sliderOffset;
				if (this.stylePos === 'right') {
					distanceToSlide = -distanceToSlide;
				}
				// Calculate what percent of the length the slider handle has slid
				var percentage = distanceToSlide / this._state.size * 100;
				percentage = Math.round(percentage / this._state.percentage[2]) * this._state.percentage[2];
				if (this.options.reversed) {
					percentage = 100 - percentage;
				}

				// Make sure the percent is within the bounds of the slider.
				// 0% corresponds to the 'min' value of the slide
				// 100% corresponds to the 'max' value of the slide
				return Math.max(0, Math.min(100, percentage));
			},
			_validateInputValue: function _validateInputValue(val) {
				if (!isNaN(+val)) {
					return +val;
				} else if (Array.isArray(val)) {
					this._validateArray(val);
					return val;
				} else {
					throw new Error(ErrorMsgs.formatInvalidInputErrorMsg(val));
				}
			},
			_validateArray: function _validateArray(val) {
				for (var i = 0; i < val.length; i++) {
					var input = val[i];
					if (typeof input !== 'number') {
						throw new Error(ErrorMsgs.formatInvalidInputErrorMsg(input));
					}
				}
			},
			_setDataVal: function _setDataVal(val) {
				this.element.setAttribute('data-value', val);
				this.element.setAttribute('value', val);
				this.element.value = val;
			},
			_trigger: function _trigger(evt, val) {
				val = val || val === 0 ? val : undefined;

				var callbackFnArray = this.eventToCallbackMap[evt];
				if (callbackFnArray && callbackFnArray.length) {
					for (var i = 0; i < callbackFnArray.length; i++) {
						var callbackFn = callbackFnArray[i];
						callbackFn(val);
					}
				}

				/* If JQuery exists, trigger JQuery events */
				if ($) {
					this._triggerJQueryEvent(evt, val);
				}
			},
			_triggerJQueryEvent: function _triggerJQueryEvent(evt, val) {
				var eventData = {
					type: evt,
					value: val
				};
				this.$element.trigger(eventData);
				this.$sliderElem.trigger(eventData);
			},
			_unbindJQueryEventHandlers: function _unbindJQueryEventHandlers() {
				this.$element.off();
				this.$sliderElem.off();
			},
			_setText: function _setText(element, text) {
				if (typeof element.textContent !== "undefined") {
					element.textContent = text;
				} else if (typeof element.innerText !== "undefined") {
					element.innerText = text;
				}
			},
			_removeClass: function _removeClass(element, classString) {
				var classes = classString.split(" ");
				var newClasses = element.className;

				for (var i = 0; i < classes.length; i++) {
					var classTag = classes[i];
					var regex = new RegExp("(?:\\s|^)" + classTag + "(?:\\s|$)");
					newClasses = newClasses.replace(regex, " ");
				}

				element.className = newClasses.trim();
			},
			_addClass: function _addClass(element, classString) {
				var classes = classString.split(" ");
				var newClasses = element.className;

				for (var i = 0; i < classes.length; i++) {
					var classTag = classes[i];
					var regex = new RegExp("(?:\\s|^)" + classTag + "(?:\\s|$)");
					var ifClassExists = regex.test(newClasses);

					if (!ifClassExists) {
						newClasses += " " + classTag;
					}
				}

				element.className = newClasses.trim();
			},
			_offsetLeft: function _offsetLeft(obj) {
				return obj.getBoundingClientRect().left;
			},
			_offsetRight: function _offsetRight(obj) {
				return obj.getBoundingClientRect().right;
			},
			_offsetTop: function _offsetTop(obj) {
				var offsetTop = obj.offsetTop;
				while ((obj = obj.offsetParent) && !isNaN(obj.offsetTop)) {
					offsetTop += obj.offsetTop;
					if (obj.tagName !== 'BODY') {
						offsetTop -= obj.scrollTop;
					}
				}
				return offsetTop;
			},
			_offset: function _offset(obj) {
				return {
					left: this._offsetLeft(obj),
					right: this._offsetRight(obj),
					top: this._offsetTop(obj)
				};
			},
			_css: function _css(elementRef, styleName, value) {
				if ($) {
					$.style(elementRef, styleName, value);
				} else {
					var style = styleName.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (all, letter) {
						return letter.toUpperCase();
					});
					elementRef.style[style] = value;
				}
			},
			_toValue: function _toValue(percentage) {
				return this.options.scale.toValue.apply(this, [percentage]);
			},
			_toPercentage: function _toPercentage(value) {
				return this.options.scale.toPercentage.apply(this, [value]);
			},
			_setTooltipPosition: function _setTooltipPosition() {
				var tooltips = [this.tooltip, this.tooltip_min, this.tooltip_max];
				if (this.options.orientation === 'vertical') {
					var tooltipPos;
					if (this.options.tooltip_position) {
						tooltipPos = this.options.tooltip_position;
					} else {
						if (this.options.rtl) {
							tooltipPos = 'left';
						} else {
							tooltipPos = 'right';
						}
					}
					var oppositeSide = tooltipPos === 'left' ? 'right' : 'left';
					tooltips.forEach(function (tooltip) {
						this._addClass(tooltip, tooltipPos);
						tooltip.style[oppositeSide] = '100%';
					}.bind(this));
				} else if (this.options.tooltip_position === 'bottom') {
					tooltips.forEach(function (tooltip) {
						this._addClass(tooltip, 'bottom');
						tooltip.style.top = 22 + 'px';
					}.bind(this));
				} else {
					tooltips.forEach(function (tooltip) {
						this._addClass(tooltip, 'top');
						tooltip.style.top = -this.tooltip.outerHeight - 14 + 'px';
					}.bind(this));
				}
			}
		};

		/*********************************
  		Attach to global namespace
  	*********************************/
		if ($ && $.fn) {
			var autoRegisterNamespace = void 0;

			if (!$.fn.slider) {
				$.bridget(NAMESPACE_MAIN, Slider);
				autoRegisterNamespace = NAMESPACE_MAIN;
			} else {
				if (windowIsDefined) {
					window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead.");
				}
				autoRegisterNamespace = NAMESPACE_ALTERNATE;
			}
			$.bridget(NAMESPACE_ALTERNATE, Slider);

			// Auto-Register data-provide="slider" Elements
			$(function () {
				$("input[data-provide=slider]")[autoRegisterNamespace]();
			});
		}
	})($);

	return Slider;
});


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1OWM2YmRmOWRhMGI2N2E0YjM0OCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwialF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jvb3RzdHJhcC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zbGlkZXIvZGlzdC9ib290c3RyYXAtc2xpZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBLCtDOzs7Ozs7OztBQ0FBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLCtCQUErQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixzQ0FBc0M7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsdUJBQXVCO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsdUJBQXVCO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQ0FBMEMsZ0JBQWdCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7O0FBRTdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNB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QUFhO0FBQ2I7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNHQUFzRzs7QUFFdEc7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FB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Q0o7QUFDQSxFQUFFOztBQUVGO0FBQ0EsQ0FBQyIsImZpbGUiOiJ3aWRnZXRzL2Jvb3RzdHJhcC1zbGlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ3aWRnZXRzL2Jvb3RzdHJhcC1zbGlkZXJcIiwgW1wianF1ZXJ5XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIndpZGdldHMvYm9vdHN0cmFwLXNsaWRlclwiXSA9IGZhY3RvcnkocmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wid2lkZ2V0cy9ib290c3RyYXAtc2xpZGVyXCJdID0gZmFjdG9yeShyb290W1wialF1ZXJ5XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1OWM2YmRmOWRhMGI2N2E0YjM0OCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwialF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiYW1kXCI6XCJqcXVlcnlcIn1cbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwidmFyIFNsaWRlciA9IHJlcXVpcmUoXCJib290c3RyYXAtc2xpZGVyXCIpO1xyXG5cclxuZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcclxuICB2YXIgd2lkZ2V0ID0ge1xyXG4gICAgbmFtZTogXCJib290c3RyYXAtc2xpZGVyXCIsXHJcbiAgICB0aXRsZTogXCJCb290c3RyYXAgU2xpZGVyXCIsXHJcbiAgICBpY29uTmFtZTogXCJpY29uLWJvb3RzdHJhcC1zbGlkZXJcIixcclxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiBTbGlkZXIgIT0gXCJ1bmRlZmluZWRcIjtcclxuICAgIH0sXHJcbiAgICBpc0ZpdDogZnVuY3Rpb24ocXVlc3Rpb24pIHtcclxuICAgICAgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gXCJib290c3RyYXBzbGlkZXJcIjtcclxuICAgIH0sXHJcbiAgICBodG1sVGVtcGxhdGU6IFwiPGRpdj48L2Rpdj5cIixcclxuICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcclxuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJib290c3RyYXBzbGlkZXJcIiwgW10sIG51bGwsIFwiZW1wdHlcIik7XHJcbiAgICAgIFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZFByb3BlcnRpZXMoXCJib290c3RyYXBzbGlkZXJcIiwgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwic3RlcDpudW1iZXJcIixcclxuICAgICAgICAgIGRlZmF1bHQ6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwicmFuZ2VNaW46bnVtYmVyXCIsXHJcbiAgICAgICAgICBkZWZhdWx0OiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcInJhbmdlTWF4Om51bWJlclwiLFxyXG4gICAgICAgICAgZGVmYXVsdDogMTAwXHJcbiAgICAgICAgfVxyXG4gICAgICBdKTtcclxuICAgIH0sXHJcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHZhciBpbnB1dEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICBpbnB1dEVsLmlkID0gcXVlc3Rpb24uaWQ7XHJcbiAgICAgIGlucHV0RWwudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICBpbnB1dEVsLnNldEF0dHJpYnV0ZShcImRhdGEtc2xpZGVyLWlkXCIsIHF1ZXN0aW9uLm5hbWUgKyBcIl9cIiArIHF1ZXN0aW9uLmlkKTtcclxuICAgICAgaW5wdXRFbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNsaWRlci1taW5cIiwgcXVlc3Rpb24ucmFuZ2VNaW4pO1xyXG4gICAgICBpbnB1dEVsLnNldEF0dHJpYnV0ZShcImRhdGEtc2xpZGVyLW1heFwiLCBxdWVzdGlvbi5yYW5nZU1heCk7XHJcbiAgICAgIGlucHV0RWwuc2V0QXR0cmlidXRlKFwiZGF0YS1zbGlkZXItc3RlcFwiLCBxdWVzdGlvbi5zdGVwKTtcclxuICAgICAgaW5wdXRFbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNsaWRlci12YWx1ZVwiLCBxdWVzdGlvbi52YWx1ZSB8fCBxdWVzdGlvbi5yYW5nZU1pbik7XHJcbiAgICAgIGVsLmFwcGVuZENoaWxkKGlucHV0RWwpO1xyXG4gICAgICB2YXIgc2xpZGVyID0gbmV3IFNsaWRlcihpbnB1dEVsLCB7XHJcbiAgICAgICAgaWQ6IHF1ZXN0aW9uLm5hbWUgKyBcIl9cIiArIHF1ZXN0aW9uLmlkLFxyXG4gICAgICAgIG1pbjogcXVlc3Rpb24ucmFuZ2VNaW4sXHJcbiAgICAgICAgbWF4OiBxdWVzdGlvbi5yYW5nZU1heCxcclxuICAgICAgICBzdGVwOiBxdWVzdGlvbi5zdGVwLFxyXG4gICAgICAgIHZhbHVlOiBxdWVzdGlvbi52YWx1ZSB8fCBxdWVzdGlvbi5yYW5nZU1pblxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNsaWRlci5vbihcImNoYW5nZVwiLCBmdW5jdGlvbih2YWx1ZU9iaikge1xyXG4gICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gc2xpZGVyLmdldFZhbHVlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB2YXIgdXBkYXRlVmFsdWVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgc2xpZGVyLnNldFZhbHVlKHF1ZXN0aW9uLnZhbHVlIHx8IHF1ZXN0aW9uLnJhbmdlTWluKTtcclxuICAgICAgfTtcclxuICAgICAgcXVlc3Rpb24uYm9vdHN0cmFwU2xpZGVyID0gc2xpZGVyO1xyXG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZVZhbHVlSGFuZGxlcjtcclxuICAgIH0sXHJcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgIHF1ZXN0aW9uLmJvb3RzdHJhcFNsaWRlci5kZXN0cm95KCk7XHJcbiAgICAgIHF1ZXN0aW9uLmJvb3RzdHJhcFNsaWRlciA9IG51bGw7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJjdXN0b210eXBlXCIpO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gIGluaXQoU3VydmV5KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYm9vdHN0cmFwLXNsaWRlci5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKiEgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgICAgICAgICAgICAgIFZFUlNJT04gIDEwLjAuMCAgICAgICAgICAgICAgXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbi8qISA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIGJvb3RzdHJhcC1zbGlkZXIuanNcbiAqXG4gKiBNYWludGFpbmVyczpcbiAqXHRcdEt5bGUgS2VtcFxuICpcdFx0XHQtIFR3aXR0ZXI6IEBzZWl5cmlhXG4gKlx0XHRcdC0gR2l0aHViOiAgc2VpeXJpYVxuICpcdFx0Um9oaXQgS2Fsa3VyXG4gKlx0XHRcdC0gVHdpdHRlcjogQFJvdm9sdXRpb25hcnlcbiAqXHRcdFx0LSBHaXRodWI6ICByb3ZvbHV0aW9uXG4gKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKlxuICogYm9vdHN0cmFwLXNsaWRlciBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBLeWxlIEtlbXAsIFJvaGl0IEthbGt1ciwgYW5kIGNvbnRyaWJ1dG9yc1xuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gKiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0XG4gKiByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSxcbiAqIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAqIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nXG4gKiBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gKiBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTXG4gKiBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICogTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFRcbiAqIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLFxuICogV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SXG4gKiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogQnJpZGdldCBtYWtlcyBqUXVlcnkgd2lkZ2V0c1xuICogdjEuMC4xXG4gKiBNSVQgbGljZW5zZVxuICovXG52YXIgd2luZG93SXNEZWZpbmVkID0gKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih3aW5kb3cpKSA9PT0gXCJvYmplY3RcIjtcblxuKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShbXCJqcXVlcnlcIl0sIGZhY3RvcnkpO1xuXHR9IGVsc2UgaWYgKCh0eXBlb2YgbW9kdWxlID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YobW9kdWxlKSkgPT09IFwib2JqZWN0XCIgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHR2YXIgalF1ZXJ5O1xuXHRcdHRyeSB7XG5cdFx0XHRqUXVlcnkgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0alF1ZXJ5ID0gbnVsbDtcblx0XHR9XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KGpRdWVyeSk7XG5cdH0gZWxzZSBpZiAod2luZG93KSB7XG5cdFx0d2luZG93LlNsaWRlciA9IGZhY3Rvcnkod2luZG93LmpRdWVyeSk7XG5cdH1cbn0pKGZ1bmN0aW9uICgkKSB7XG5cdC8vIENvbnN0YW50c1xuXHR2YXIgTkFNRVNQQUNFX01BSU4gPSAnc2xpZGVyJztcblx0dmFyIE5BTUVTUEFDRV9BTFRFUk5BVEUgPSAnYm9vdHN0cmFwU2xpZGVyJztcblxuXHQvLyBQb2x5ZmlsbCBjb25zb2xlIG1ldGhvZHNcblx0aWYgKHdpbmRvd0lzRGVmaW5lZCAmJiAhd2luZG93LmNvbnNvbGUpIHtcblx0XHR3aW5kb3cuY29uc29sZSA9IHt9O1xuXHR9XG5cdGlmICh3aW5kb3dJc0RlZmluZWQgJiYgIXdpbmRvdy5jb25zb2xlLmxvZykge1xuXHRcdHdpbmRvdy5jb25zb2xlLmxvZyA9IGZ1bmN0aW9uICgpIHt9O1xuXHR9XG5cdGlmICh3aW5kb3dJc0RlZmluZWQgJiYgIXdpbmRvdy5jb25zb2xlLndhcm4pIHtcblx0XHR3aW5kb3cuY29uc29sZS53YXJuID0gZnVuY3Rpb24gKCkge307XG5cdH1cblxuXHQvLyBSZWZlcmVuY2UgdG8gU2xpZGVyIGNvbnN0cnVjdG9yXG5cdHZhciBTbGlkZXI7XG5cblx0KGZ1bmN0aW9uICgkKSB7XG5cblx0XHQndXNlIHN0cmljdCc7XG5cblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB1dGlscyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdFx0dmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG5cdFx0ZnVuY3Rpb24gbm9vcCgpIHt9XG5cblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkZWZpbml0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cblx0XHRmdW5jdGlvbiBkZWZpbmVCcmlkZ2V0KCQpIHtcblxuXHRcdFx0Ly8gYmFpbCBpZiBubyBqUXVlcnlcblx0XHRcdGlmICghJCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGFkZE9wdGlvbk1ldGhvZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdFx0XHQvKipcbiAgICAqIGFkZHMgb3B0aW9uIG1ldGhvZCAtPiAkKCkucGx1Z2luKCdvcHRpb24nLCB7Li4ufSlcbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFBsdWdpbkNsYXNzIC0gY29uc3RydWN0b3IgY2xhc3NcbiAgICAqL1xuXHRcdFx0ZnVuY3Rpb24gYWRkT3B0aW9uTWV0aG9kKFBsdWdpbkNsYXNzKSB7XG5cdFx0XHRcdC8vIGRvbid0IG92ZXJ3cml0ZSBvcmlnaW5hbCBvcHRpb24gbWV0aG9kXG5cdFx0XHRcdGlmIChQbHVnaW5DbGFzcy5wcm90b3R5cGUub3B0aW9uKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gb3B0aW9uIHNldHRlclxuXHRcdFx0XHRQbHVnaW5DbGFzcy5wcm90b3R5cGUub3B0aW9uID0gZnVuY3Rpb24gKG9wdHMpIHtcblx0XHRcdFx0XHQvLyBiYWlsIG91dCBpZiBub3QgYW4gb2JqZWN0XG5cdFx0XHRcdFx0aWYgKCEkLmlzUGxhaW5PYmplY3Qob3B0cykpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQodHJ1ZSwgdGhpcy5vcHRpb25zLCBvcHRzKTtcblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcGx1Z2luIGJyaWRnZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdFx0XHQvLyBoZWxwZXIgZnVuY3Rpb24gZm9yIGxvZ2dpbmcgZXJyb3JzXG5cdFx0XHQvLyAkLmVycm9yIGJyZWFrcyBqUXVlcnkgY2hhaW5pbmdcblx0XHRcdHZhciBsb2dFcnJvciA9IHR5cGVvZiBjb25zb2xlID09PSAndW5kZWZpbmVkJyA/IG5vb3AgOiBmdW5jdGlvbiAobWVzc2FnZSkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuXHRcdFx0fTtcblxuXHRcdFx0LyoqXG4gICAgKiBqUXVlcnkgcGx1Z2luIGJyaWRnZSwgYWNjZXNzIG1ldGhvZHMgbGlrZSAkZWxlbS5wbHVnaW4oJ21ldGhvZCcpXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlIC0gcGx1Z2luIG5hbWVcbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFBsdWdpbkNsYXNzIC0gY29uc3RydWN0b3IgY2xhc3NcbiAgICAqL1xuXHRcdFx0ZnVuY3Rpb24gYnJpZGdlKG5hbWVzcGFjZSwgUGx1Z2luQ2xhc3MpIHtcblx0XHRcdFx0Ly8gYWRkIHRvIGpRdWVyeSBmbiBuYW1lc3BhY2Vcblx0XHRcdFx0JC5mbltuYW1lc3BhY2VdID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHQvLyBjYWxsIHBsdWdpbiBtZXRob2Qgd2hlbiBmaXJzdCBhcmd1bWVudCBpcyBhIHN0cmluZ1xuXHRcdFx0XHRcdFx0Ly8gZ2V0IGFyZ3VtZW50cyBmb3IgbWV0aG9kXG5cdFx0XHRcdFx0XHR2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0dmFyIGVsZW0gPSB0aGlzW2ldO1xuXHRcdFx0XHRcdFx0XHR2YXIgaW5zdGFuY2UgPSAkLmRhdGEoZWxlbSwgbmFtZXNwYWNlKTtcblx0XHRcdFx0XHRcdFx0aWYgKCFpbnN0YW5jZSkge1xuXHRcdFx0XHRcdFx0XHRcdGxvZ0Vycm9yKFwiY2Fubm90IGNhbGwgbWV0aG9kcyBvbiBcIiArIG5hbWVzcGFjZSArIFwiIHByaW9yIHRvIGluaXRpYWxpemF0aW9uOyBcIiArIFwiYXR0ZW1wdGVkIHRvIGNhbGwgJ1wiICsgb3B0aW9ucyArIFwiJ1wiKTtcblx0XHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAoISQuaXNGdW5jdGlvbihpbnN0YW5jZVtvcHRpb25zXSkgfHwgb3B0aW9ucy5jaGFyQXQoMCkgPT09ICdfJykge1xuXHRcdFx0XHRcdFx0XHRcdGxvZ0Vycm9yKFwibm8gc3VjaCBtZXRob2QgJ1wiICsgb3B0aW9ucyArIFwiJyBmb3IgXCIgKyBuYW1lc3BhY2UgKyBcIiBpbnN0YW5jZVwiKTtcblx0XHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC8vIHRyaWdnZXIgbWV0aG9kIHdpdGggYXJndW1lbnRzXG5cdFx0XHRcdFx0XHRcdHZhciByZXR1cm5WYWx1ZSA9IGluc3RhbmNlW29wdGlvbnNdLmFwcGx5KGluc3RhbmNlLCBhcmdzKTtcblxuXHRcdFx0XHRcdFx0XHQvLyBicmVhayBsb29rIGFuZCByZXR1cm4gZmlyc3QgdmFsdWUgaWYgcHJvdmlkZWRcblx0XHRcdFx0XHRcdFx0aWYgKHJldHVyblZhbHVlICE9PSB1bmRlZmluZWQgJiYgcmV0dXJuVmFsdWUgIT09IGluc3RhbmNlKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJldHVyblZhbHVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyByZXR1cm4gdGhpcyBpZiBubyByZXR1cm4gdmFsdWVcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR2YXIgb2JqZWN0cyA9IHRoaXMubWFwKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0dmFyIGluc3RhbmNlID0gJC5kYXRhKHRoaXMsIG5hbWVzcGFjZSk7XG5cdFx0XHRcdFx0XHRcdGlmIChpbnN0YW5jZSkge1xuXHRcdFx0XHRcdFx0XHRcdC8vIGFwcGx5IG9wdGlvbnMgJiBpbml0XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFuY2Uub3B0aW9uKG9wdGlvbnMpO1xuXHRcdFx0XHRcdFx0XHRcdGluc3RhbmNlLl9pbml0KCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gaW5pdGlhbGl6ZSBuZXcgaW5zdGFuY2Vcblx0XHRcdFx0XHRcdFx0XHRpbnN0YW5jZSA9IG5ldyBQbHVnaW5DbGFzcyh0aGlzLCBvcHRpb25zKTtcblx0XHRcdFx0XHRcdFx0XHQkLmRhdGEodGhpcywgbmFtZXNwYWNlLCBpbnN0YW5jZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0cmV0dXJuICQodGhpcyk7XG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0aWYgKCFvYmplY3RzIHx8IG9iamVjdHMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gb2JqZWN0cztcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBvYmplY3RzWzBdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYnJpZGdldCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5cdFx0XHQvKipcbiAgICAqIGNvbnZlcnRzIGEgUHJvdG90eXBpY2FsIGNsYXNzIGludG8gYSBwcm9wZXIgalF1ZXJ5IHBsdWdpblxuICAgICogICB0aGUgY2xhc3MgbXVzdCBoYXZlIGEgLl9pbml0IG1ldGhvZFxuICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZSAtIHBsdWdpbiBuYW1lLCB1c2VkIGluICQoKS5wbHVnaW5OYW1lXG4gICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBQbHVnaW5DbGFzcyAtIGNvbnN0cnVjdG9yIGNsYXNzXG4gICAgKi9cblx0XHRcdCQuYnJpZGdldCA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIFBsdWdpbkNsYXNzKSB7XG5cdFx0XHRcdGFkZE9wdGlvbk1ldGhvZChQbHVnaW5DbGFzcyk7XG5cdFx0XHRcdGJyaWRnZShuYW1lc3BhY2UsIFBsdWdpbkNsYXNzKTtcblx0XHRcdH07XG5cblx0XHRcdHJldHVybiAkLmJyaWRnZXQ7XG5cdFx0fVxuXG5cdFx0Ly8gZ2V0IGpxdWVyeSBmcm9tIGJyb3dzZXIgZ2xvYmFsXG5cdFx0ZGVmaW5lQnJpZGdldCgkKTtcblx0fSkoJCk7XG5cblx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBcdFx0XHRCT09UU1RSQVAtU0xJREVSIFNPVVJDRSBDT0RFXG4gXHQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHQoZnVuY3Rpb24gKCQpIHtcblxuXHRcdHZhciBFcnJvck1zZ3MgPSB7XG5cdFx0XHRmb3JtYXRJbnZhbGlkSW5wdXRFcnJvck1zZzogZnVuY3Rpb24gZm9ybWF0SW52YWxpZElucHV0RXJyb3JNc2coaW5wdXQpIHtcblx0XHRcdFx0cmV0dXJuIFwiSW52YWxpZCBpbnB1dCB2YWx1ZSAnXCIgKyBpbnB1dCArIFwiJyBwYXNzZWQgaW5cIjtcblx0XHRcdH0sXG5cdFx0XHRjYWxsaW5nQ29udGV4dE5vdFNsaWRlckluc3RhbmNlOiBcIkNhbGxpbmcgY29udGV4dCBlbGVtZW50IGRvZXMgbm90IGhhdmUgaW5zdGFuY2Ugb2YgU2xpZGVyIGJvdW5kIHRvIGl0LiBDaGVjayB5b3VyIGNvZGUgdG8gbWFrZSBzdXJlIHRoZSBKUXVlcnkgb2JqZWN0IHJldHVybmVkIGZyb20gdGhlIGNhbGwgdG8gdGhlIHNsaWRlcigpIGluaXRpYWxpemVyIGlzIGNhbGxpbmcgdGhlIG1ldGhvZFwiXG5cdFx0fTtcblxuXHRcdHZhciBTbGlkZXJTY2FsZSA9IHtcblx0XHRcdGxpbmVhcjoge1xuXHRcdFx0XHR0b1ZhbHVlOiBmdW5jdGlvbiB0b1ZhbHVlKHBlcmNlbnRhZ2UpIHtcblx0XHRcdFx0XHR2YXIgcmF3VmFsdWUgPSBwZXJjZW50YWdlIC8gMTAwICogKHRoaXMub3B0aW9ucy5tYXggLSB0aGlzLm9wdGlvbnMubWluKTtcblx0XHRcdFx0XHR2YXIgc2hvdWxkQWRqdXN0V2l0aEJhc2UgPSB0cnVlO1xuXHRcdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMudGlja3NfcG9zaXRpb25zLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdHZhciBtaW52LFxuXHRcdFx0XHRcdFx0ICAgIG1heHYsXG5cdFx0XHRcdFx0XHQgICAgbWlucCxcblx0XHRcdFx0XHRcdCAgICBtYXhwID0gMDtcblx0XHRcdFx0XHRcdGZvciAodmFyIGkgPSAxOyBpIDwgdGhpcy5vcHRpb25zLnRpY2tzX3Bvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0XHRpZiAocGVyY2VudGFnZSA8PSB0aGlzLm9wdGlvbnMudGlja3NfcG9zaXRpb25zW2ldKSB7XG5cdFx0XHRcdFx0XHRcdFx0bWludiA9IHRoaXMub3B0aW9ucy50aWNrc1tpIC0gMV07XG5cdFx0XHRcdFx0XHRcdFx0bWlucCA9IHRoaXMub3B0aW9ucy50aWNrc19wb3NpdGlvbnNbaSAtIDFdO1xuXHRcdFx0XHRcdFx0XHRcdG1heHYgPSB0aGlzLm9wdGlvbnMudGlja3NbaV07XG5cdFx0XHRcdFx0XHRcdFx0bWF4cCA9IHRoaXMub3B0aW9ucy50aWNrc19wb3NpdGlvbnNbaV07XG5cblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dmFyIHBhcnRpYWxQZXJjZW50YWdlID0gKHBlcmNlbnRhZ2UgLSBtaW5wKSAvIChtYXhwIC0gbWlucCk7XG5cdFx0XHRcdFx0XHRyYXdWYWx1ZSA9IG1pbnYgKyBwYXJ0aWFsUGVyY2VudGFnZSAqIChtYXh2IC0gbWludik7XG5cdFx0XHRcdFx0XHRzaG91bGRBZGp1c3RXaXRoQmFzZSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHZhciBhZGp1c3RtZW50ID0gc2hvdWxkQWRqdXN0V2l0aEJhc2UgPyB0aGlzLm9wdGlvbnMubWluIDogMDtcblx0XHRcdFx0XHR2YXIgdmFsdWUgPSBhZGp1c3RtZW50ICsgTWF0aC5yb3VuZChyYXdWYWx1ZSAvIHRoaXMub3B0aW9ucy5zdGVwKSAqIHRoaXMub3B0aW9ucy5zdGVwO1xuXHRcdFx0XHRcdGlmICh2YWx1ZSA8IHRoaXMub3B0aW9ucy5taW4pIHtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLm9wdGlvbnMubWluO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodmFsdWUgPiB0aGlzLm9wdGlvbnMubWF4KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25zLm1heDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0dG9QZXJjZW50YWdlOiBmdW5jdGlvbiB0b1BlcmNlbnRhZ2UodmFsdWUpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLm1heCA9PT0gdGhpcy5vcHRpb25zLm1pbikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy50aWNrc19wb3NpdGlvbnMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0dmFyIG1pbnYsXG5cdFx0XHRcdFx0XHQgICAgbWF4dixcblx0XHRcdFx0XHRcdCAgICBtaW5wLFxuXHRcdFx0XHRcdFx0ICAgIG1heHAgPSAwO1xuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMudGlja3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0aWYgKHZhbHVlIDw9IHRoaXMub3B0aW9ucy50aWNrc1tpXSkge1xuXHRcdFx0XHRcdFx0XHRcdG1pbnYgPSBpID4gMCA/IHRoaXMub3B0aW9ucy50aWNrc1tpIC0gMV0gOiAwO1xuXHRcdFx0XHRcdFx0XHRcdG1pbnAgPSBpID4gMCA/IHRoaXMub3B0aW9ucy50aWNrc19wb3NpdGlvbnNbaSAtIDFdIDogMDtcblx0XHRcdFx0XHRcdFx0XHRtYXh2ID0gdGhpcy5vcHRpb25zLnRpY2tzW2ldO1xuXHRcdFx0XHRcdFx0XHRcdG1heHAgPSB0aGlzLm9wdGlvbnMudGlja3NfcG9zaXRpb25zW2ldO1xuXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChpID4gMCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgcGFydGlhbFBlcmNlbnRhZ2UgPSAodmFsdWUgLSBtaW52KSAvIChtYXh2IC0gbWludik7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBtaW5wICsgcGFydGlhbFBlcmNlbnRhZ2UgKiAobWF4cCAtIG1pbnApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiAxMDAgKiAodmFsdWUgLSB0aGlzLm9wdGlvbnMubWluKSAvICh0aGlzLm9wdGlvbnMubWF4IC0gdGhpcy5vcHRpb25zLm1pbik7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdGxvZ2FyaXRobWljOiB7XG5cdFx0XHRcdC8qIEJhc2VkIG9uIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvODQ2MjIxL2xvZ2FyaXRobWljLXNsaWRlciAqL1xuXHRcdFx0XHR0b1ZhbHVlOiBmdW5jdGlvbiB0b1ZhbHVlKHBlcmNlbnRhZ2UpIHtcblx0XHRcdFx0XHR2YXIgbWluID0gdGhpcy5vcHRpb25zLm1pbiA9PT0gMCA/IDAgOiBNYXRoLmxvZyh0aGlzLm9wdGlvbnMubWluKTtcblx0XHRcdFx0XHR2YXIgbWF4ID0gTWF0aC5sb2codGhpcy5vcHRpb25zLm1heCk7XG5cdFx0XHRcdFx0dmFyIHZhbHVlID0gTWF0aC5leHAobWluICsgKG1heCAtIG1pbikgKiBwZXJjZW50YWdlIC8gMTAwKTtcblx0XHRcdFx0XHRpZiAoTWF0aC5yb3VuZCh2YWx1ZSkgPT09IHRoaXMub3B0aW9ucy5tYXgpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLm9wdGlvbnMubWF4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR2YWx1ZSA9IHRoaXMub3B0aW9ucy5taW4gKyBNYXRoLnJvdW5kKCh2YWx1ZSAtIHRoaXMub3B0aW9ucy5taW4pIC8gdGhpcy5vcHRpb25zLnN0ZXApICogdGhpcy5vcHRpb25zLnN0ZXA7XG5cdFx0XHRcdFx0LyogUm91bmRpbmcgdG8gdGhlIG5lYXJlc3Qgc3RlcCBjb3VsZCBleGNlZWQgdGhlIG1pbiBvclxuICAgICAgKiBtYXgsIHNvIGNsaXAgdG8gdGhvc2UgdmFsdWVzLiAqL1xuXHRcdFx0XHRcdGlmICh2YWx1ZSA8IHRoaXMub3B0aW9ucy5taW4pIHtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLm9wdGlvbnMubWluO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodmFsdWUgPiB0aGlzLm9wdGlvbnMubWF4KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25zLm1heDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0dG9QZXJjZW50YWdlOiBmdW5jdGlvbiB0b1BlcmNlbnRhZ2UodmFsdWUpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLm1heCA9PT0gdGhpcy5vcHRpb25zLm1pbikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZhciBtYXggPSBNYXRoLmxvZyh0aGlzLm9wdGlvbnMubWF4KTtcblx0XHRcdFx0XHRcdHZhciBtaW4gPSB0aGlzLm9wdGlvbnMubWluID09PSAwID8gMCA6IE1hdGgubG9nKHRoaXMub3B0aW9ucy5taW4pO1xuXHRcdFx0XHRcdFx0dmFyIHYgPSB2YWx1ZSA9PT0gMCA/IDAgOiBNYXRoLmxvZyh2YWx1ZSk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gMTAwICogKHYgLSBtaW4pIC8gKG1heCAtIG1pbik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIFx0XHRcdFx0XHRcdENPTlNUUlVDVE9SXG4gIFx0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cdFx0U2xpZGVyID0gZnVuY3Rpb24gU2xpZGVyKGVsZW1lbnQsIG9wdGlvbnMpIHtcblx0XHRcdGNyZWF0ZU5ld1NsaWRlci5jYWxsKHRoaXMsIGVsZW1lbnQsIG9wdGlvbnMpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIGNyZWF0ZU5ld1NsaWRlcihlbGVtZW50LCBvcHRpb25zKSB7XG5cblx0XHRcdC8qXG4gICBcdFRoZSBpbnRlcm5hbCBzdGF0ZSBvYmplY3QgaXMgdXNlZCB0byBzdG9yZSBkYXRhIGFib3V0IHRoZSBjdXJyZW50ICdzdGF0ZScgb2Ygc2xpZGVyLlxuICAgXHRUaGlzIGluY2x1ZGVzIHZhbHVlcyBzdWNoIGFzIHRoZSBgdmFsdWVgLCBgZW5hYmxlZGAsIGV0Yy4uLlxuICAgKi9cblx0XHRcdHRoaXMuX3N0YXRlID0ge1xuXHRcdFx0XHR2YWx1ZTogbnVsbCxcblx0XHRcdFx0ZW5hYmxlZDogbnVsbCxcblx0XHRcdFx0b2Zmc2V0OiBudWxsLFxuXHRcdFx0XHRzaXplOiBudWxsLFxuXHRcdFx0XHRwZXJjZW50YWdlOiBudWxsLFxuXHRcdFx0XHRpbkRyYWc6IGZhbHNlLFxuXHRcdFx0XHRvdmVyOiBmYWxzZVxuXHRcdFx0fTtcblxuXHRcdFx0Ly8gVGhlIG9iamVjdHMgdXNlZCB0byBzdG9yZSB0aGUgcmVmZXJlbmNlIHRvIHRoZSB0aWNrIG1ldGhvZHMgaWYgdGlja3NfdG9vbHRpcCBpcyBvblxuXHRcdFx0dGhpcy50aWNrc0NhbGxiYWNrTWFwID0ge307XG5cdFx0XHR0aGlzLmhhbmRsZUNhbGxiYWNrTWFwID0ge307XG5cblx0XHRcdGlmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xuXHRcdFx0fSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblx0XHRcdH1cblxuXHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgIFx0XHRcdFx0XHRQcm9jZXNzIE9wdGlvbnNcbiAgIFx0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cdFx0XHRvcHRpb25zID0gb3B0aW9ucyA/IG9wdGlvbnMgOiB7fTtcblx0XHRcdHZhciBvcHRpb25UeXBlcyA9IE9iamVjdC5rZXlzKHRoaXMuZGVmYXVsdE9wdGlvbnMpO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvblR5cGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBvcHROYW1lID0gb3B0aW9uVHlwZXNbaV07XG5cblx0XHRcdFx0Ly8gRmlyc3QgY2hlY2sgaWYgYW4gb3B0aW9uIHdhcyBwYXNzZWQgaW4gdmlhIHRoZSBjb25zdHJ1Y3RvclxuXHRcdFx0XHR2YXIgdmFsID0gb3B0aW9uc1tvcHROYW1lXTtcblx0XHRcdFx0Ly8gSWYgbm8gZGF0YSBhdHRyaWIsIHRoZW4gY2hlY2sgZGF0YSBhdHJyaWJ1dGVzXG5cdFx0XHRcdHZhbCA9IHR5cGVvZiB2YWwgIT09ICd1bmRlZmluZWQnID8gdmFsIDogZ2V0RGF0YUF0dHJpYih0aGlzLmVsZW1lbnQsIG9wdE5hbWUpO1xuXHRcdFx0XHQvLyBGaW5hbGx5LCBpZiBub3RoaW5nIHdhcyBzcGVjaWZpZWQsIHVzZSB0aGUgZGVmYXVsdHNcblx0XHRcdFx0dmFsID0gdmFsICE9PSBudWxsID8gdmFsIDogdGhpcy5kZWZhdWx0T3B0aW9uc1tvcHROYW1lXTtcblxuXHRcdFx0XHQvLyBTZXQgYWxsIG9wdGlvbnMgb24gdGhlIGluc3RhbmNlIG9mIHRoZSBTbGlkZXJcblx0XHRcdFx0aWYgKCF0aGlzLm9wdGlvbnMpIHtcblx0XHRcdFx0XHR0aGlzLm9wdGlvbnMgPSB7fTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLm9wdGlvbnNbb3B0TmFtZV0gPSB2YWw7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENoZWNrIG9wdGlvbnMucnRsXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLnJ0bCA9PT0gJ2F1dG8nKSB7XG5cdFx0XHRcdHRoaXMub3B0aW9ucy5ydGwgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpLmRpcmVjdGlvbiA9PT0gJ3J0bCc7XG5cdFx0XHR9XG5cblx0XHRcdC8qXG4gICBcdFZhbGlkYXRlIGB0b29sdGlwX3Bvc2l0aW9uYCBhZ2FpbnN0ICdvcmllbnRhdGlvbmBcbiAgIFx0LSBpZiBgdG9vbHRpcF9wb3NpdGlvbmAgaXMgaW5jb21wYXRpYmxlIHdpdGggb3JpZW50YXRpb24sIHN3aXRoIGl0IHRvIGEgZGVmYXVsdCBjb21wYXRpYmxlIHdpdGggc3BlY2lmaWVkIGBvcmllbnRhdGlvbmBcbiAgIFx0XHQtLSBkZWZhdWx0IGZvciBcInZlcnRpY2FsXCIgLT4gXCJyaWdodFwiLCBcImxlZnRcIiBpZiBydGxcbiAgIFx0XHQtLSBkZWZhdWx0IGZvciBcImhvcml6b250YWxcIiAtPiBcInRvcFwiXG4gICAqL1xuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5vcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiICYmICh0aGlzLm9wdGlvbnMudG9vbHRpcF9wb3NpdGlvbiA9PT0gXCJ0b3BcIiB8fCB0aGlzLm9wdGlvbnMudG9vbHRpcF9wb3NpdGlvbiA9PT0gXCJib3R0b21cIikpIHtcblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5ydGwpIHtcblx0XHRcdFx0XHR0aGlzLm9wdGlvbnMudG9vbHRpcF9wb3NpdGlvbiA9IFwibGVmdFwiO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMub3B0aW9ucy50b29sdGlwX3Bvc2l0aW9uID0gXCJyaWdodFwiO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5vcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgJiYgKHRoaXMub3B0aW9ucy50b29sdGlwX3Bvc2l0aW9uID09PSBcImxlZnRcIiB8fCB0aGlzLm9wdGlvbnMudG9vbHRpcF9wb3NpdGlvbiA9PT0gXCJyaWdodFwiKSkge1xuXG5cdFx0XHRcdHRoaXMub3B0aW9ucy50b29sdGlwX3Bvc2l0aW9uID0gXCJ0b3BcIjtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gZ2V0RGF0YUF0dHJpYihlbGVtZW50LCBvcHROYW1lKSB7XG5cdFx0XHRcdHZhciBkYXRhTmFtZSA9IFwiZGF0YS1zbGlkZXItXCIgKyBvcHROYW1lLnJlcGxhY2UoL18vZywgJy0nKTtcblx0XHRcdFx0dmFyIGRhdGFWYWxTdHJpbmcgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShkYXRhTmFtZSk7XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXR1cm4gSlNPTi5wYXJzZShkYXRhVmFsU3RyaW5nKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGRhdGFWYWxTdHJpbmc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgIFx0XHRcdFx0XHRDcmVhdGUgTWFya3VwXG4gICBcdCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdFx0XHR2YXIgb3JpZ1dpZHRoID0gdGhpcy5lbGVtZW50LnN0eWxlLndpZHRoO1xuXHRcdFx0dmFyIHVwZGF0ZVNsaWRlciA9IGZhbHNlO1xuXHRcdFx0dmFyIHBhcmVudCA9IHRoaXMuZWxlbWVudC5wYXJlbnROb2RlO1xuXHRcdFx0dmFyIHNsaWRlclRyYWNrU2VsZWN0aW9uO1xuXHRcdFx0dmFyIHNsaWRlclRyYWNrTG93LCBzbGlkZXJUcmFja0hpZ2g7XG5cdFx0XHR2YXIgc2xpZGVyTWluSGFuZGxlO1xuXHRcdFx0dmFyIHNsaWRlck1heEhhbmRsZTtcblxuXHRcdFx0aWYgKHRoaXMuc2xpZGVyRWxlbSkge1xuXHRcdFx0XHR1cGRhdGVTbGlkZXIgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0LyogQ3JlYXRlIGVsZW1lbnRzIG5lZWRlZCBmb3Igc2xpZGVyICovXG5cdFx0XHRcdHRoaXMuc2xpZGVyRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdHRoaXMuc2xpZGVyRWxlbS5jbGFzc05hbWUgPSBcInNsaWRlclwiO1xuXG5cdFx0XHRcdC8qIENyZWF0ZSBzbGlkZXIgdHJhY2sgZWxlbWVudHMgKi9cblx0XHRcdFx0dmFyIHNsaWRlclRyYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0c2xpZGVyVHJhY2suY2xhc3NOYW1lID0gXCJzbGlkZXItdHJhY2tcIjtcblxuXHRcdFx0XHRzbGlkZXJUcmFja0xvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdHNsaWRlclRyYWNrTG93LmNsYXNzTmFtZSA9IFwic2xpZGVyLXRyYWNrLWxvd1wiO1xuXG5cdFx0XHRcdHNsaWRlclRyYWNrU2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0c2xpZGVyVHJhY2tTZWxlY3Rpb24uY2xhc3NOYW1lID0gXCJzbGlkZXItc2VsZWN0aW9uXCI7XG5cblx0XHRcdFx0c2xpZGVyVHJhY2tIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0c2xpZGVyVHJhY2tIaWdoLmNsYXNzTmFtZSA9IFwic2xpZGVyLXRyYWNrLWhpZ2hcIjtcblxuXHRcdFx0XHRzbGlkZXJNaW5IYW5kbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHRzbGlkZXJNaW5IYW5kbGUuY2xhc3NOYW1lID0gXCJzbGlkZXItaGFuZGxlIG1pbi1zbGlkZXItaGFuZGxlXCI7XG5cdFx0XHRcdHNsaWRlck1pbkhhbmRsZS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnc2xpZGVyJyk7XG5cdFx0XHRcdHNsaWRlck1pbkhhbmRsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtdmFsdWVtaW4nLCB0aGlzLm9wdGlvbnMubWluKTtcblx0XHRcdFx0c2xpZGVyTWluSGFuZGxlLnNldEF0dHJpYnV0ZSgnYXJpYS12YWx1ZW1heCcsIHRoaXMub3B0aW9ucy5tYXgpO1xuXG5cdFx0XHRcdHNsaWRlck1heEhhbmRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdHNsaWRlck1heEhhbmRsZS5jbGFzc05hbWUgPSBcInNsaWRlci1oYW5kbGUgbWF4LXNsaWRlci1oYW5kbGVcIjtcblx0XHRcdFx0c2xpZGVyTWF4SGFuZGxlLnNldEF0dHJpYnV0ZSgncm9sZScsICdzbGlkZXInKTtcblx0XHRcdFx0c2xpZGVyTWF4SGFuZGxlLnNldEF0dHJpYnV0ZSgnYXJpYS12YWx1ZW1pbicsIHRoaXMub3B0aW9ucy5taW4pO1xuXHRcdFx0XHRzbGlkZXJNYXhIYW5kbGUuc2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbWF4JywgdGhpcy5vcHRpb25zLm1heCk7XG5cblx0XHRcdFx0c2xpZGVyVHJhY2suYXBwZW5kQ2hpbGQoc2xpZGVyVHJhY2tMb3cpO1xuXHRcdFx0XHRzbGlkZXJUcmFjay5hcHBlbmRDaGlsZChzbGlkZXJUcmFja1NlbGVjdGlvbik7XG5cdFx0XHRcdHNsaWRlclRyYWNrLmFwcGVuZENoaWxkKHNsaWRlclRyYWNrSGlnaCk7XG5cblx0XHRcdFx0LyogQ3JlYXRlIGhpZ2hsaWdodCByYW5nZSBlbGVtZW50cyAqL1xuXHRcdFx0XHR0aGlzLnJhbmdlSGlnaGxpZ2h0RWxlbWVudHMgPSBbXTtcblx0XHRcdFx0dmFyIHJhbmdlSGlnaGxpZ2h0c09wdHMgPSB0aGlzLm9wdGlvbnMucmFuZ2VIaWdobGlnaHRzO1xuXHRcdFx0XHRpZiAoQXJyYXkuaXNBcnJheShyYW5nZUhpZ2hsaWdodHNPcHRzKSAmJiByYW5nZUhpZ2hsaWdodHNPcHRzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHJhbmdlSGlnaGxpZ2h0c09wdHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdHZhciByYW5nZUhpZ2hsaWdodEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHRcdFx0dmFyIGN1c3RvbUNsYXNzU3RyaW5nID0gcmFuZ2VIaWdobGlnaHRzT3B0c1tqXS5jbGFzcyB8fCBcIlwiO1xuXHRcdFx0XHRcdFx0cmFuZ2VIaWdobGlnaHRFbGVtZW50LmNsYXNzTmFtZSA9IFwic2xpZGVyLXJhbmdlSGlnaGxpZ2h0IHNsaWRlci1zZWxlY3Rpb24gXCIgKyBjdXN0b21DbGFzc1N0cmluZztcblx0XHRcdFx0XHRcdHRoaXMucmFuZ2VIaWdobGlnaHRFbGVtZW50cy5wdXNoKHJhbmdlSGlnaGxpZ2h0RWxlbWVudCk7XG5cdFx0XHRcdFx0XHRzbGlkZXJUcmFjay5hcHBlbmRDaGlsZChyYW5nZUhpZ2hsaWdodEVsZW1lbnQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8qIEFkZCBhcmlhLWxhYmVsbGVkYnkgdG8gaGFuZGxlJ3MgKi9cblx0XHRcdFx0dmFyIGlzTGFiZWxsZWRieUFycmF5ID0gQXJyYXkuaXNBcnJheSh0aGlzLm9wdGlvbnMubGFiZWxsZWRieSk7XG5cdFx0XHRcdGlmIChpc0xhYmVsbGVkYnlBcnJheSAmJiB0aGlzLm9wdGlvbnMubGFiZWxsZWRieVswXSkge1xuXHRcdFx0XHRcdHNsaWRlck1pbkhhbmRsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIHRoaXMub3B0aW9ucy5sYWJlbGxlZGJ5WzBdKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaXNMYWJlbGxlZGJ5QXJyYXkgJiYgdGhpcy5vcHRpb25zLmxhYmVsbGVkYnlbMV0pIHtcblx0XHRcdFx0XHRzbGlkZXJNYXhIYW5kbGUuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCB0aGlzLm9wdGlvbnMubGFiZWxsZWRieVsxXSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFpc0xhYmVsbGVkYnlBcnJheSAmJiB0aGlzLm9wdGlvbnMubGFiZWxsZWRieSkge1xuXHRcdFx0XHRcdHNsaWRlck1pbkhhbmRsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIHRoaXMub3B0aW9ucy5sYWJlbGxlZGJ5KTtcblx0XHRcdFx0XHRzbGlkZXJNYXhIYW5kbGUuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCB0aGlzLm9wdGlvbnMubGFiZWxsZWRieSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvKiBDcmVhdGUgdGlja3MgKi9cblx0XHRcdFx0dGhpcy50aWNrcyA9IFtdO1xuXHRcdFx0XHRpZiAoQXJyYXkuaXNBcnJheSh0aGlzLm9wdGlvbnMudGlja3MpICYmIHRoaXMub3B0aW9ucy50aWNrcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0dGhpcy50aWNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRcdHRoaXMudGlja3NDb250YWluZXIuY2xhc3NOYW1lID0gJ3NsaWRlci10aWNrLWNvbnRhaW5lcic7XG5cblx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgdGhpcy5vcHRpb25zLnRpY2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHR2YXIgdGljayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRcdFx0dGljay5jbGFzc05hbWUgPSAnc2xpZGVyLXRpY2snO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy50aWNrc190b29sdGlwKSB7XG5cdFx0XHRcdFx0XHRcdHZhciB0aWNrTGlzdGVuZXJSZWZlcmVuY2UgPSB0aGlzLl9hZGRUaWNrTGlzdGVuZXIoKTtcblx0XHRcdFx0XHRcdFx0dmFyIGVudGVyQ2FsbGJhY2sgPSB0aWNrTGlzdGVuZXJSZWZlcmVuY2UuYWRkTW91c2VFbnRlcih0aGlzLCB0aWNrLCBpKTtcblx0XHRcdFx0XHRcdFx0dmFyIGxlYXZlQ2FsbGJhY2sgPSB0aWNrTGlzdGVuZXJSZWZlcmVuY2UuYWRkTW91c2VMZWF2ZSh0aGlzLCB0aWNrKTtcblxuXHRcdFx0XHRcdFx0XHR0aGlzLnRpY2tzQ2FsbGJhY2tNYXBbaV0gPSB7XG5cdFx0XHRcdFx0XHRcdFx0bW91c2VFbnRlcjogZW50ZXJDYWxsYmFjayxcblx0XHRcdFx0XHRcdFx0XHRtb3VzZUxlYXZlOiBsZWF2ZUNhbGxiYWNrXG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0aGlzLnRpY2tzLnB1c2godGljayk7XG5cdFx0XHRcdFx0XHR0aGlzLnRpY2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpY2spO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHNsaWRlclRyYWNrU2VsZWN0aW9uLmNsYXNzTmFtZSArPSBcIiB0aWNrLXNsaWRlci1zZWxlY3Rpb25cIjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMudGlja0xhYmVscyA9IFtdO1xuXHRcdFx0XHRpZiAoQXJyYXkuaXNBcnJheSh0aGlzLm9wdGlvbnMudGlja3NfbGFiZWxzKSAmJiB0aGlzLm9wdGlvbnMudGlja3NfbGFiZWxzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHR0aGlzLnRpY2tMYWJlbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRcdHRoaXMudGlja0xhYmVsQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdzbGlkZXItdGljay1sYWJlbC1jb250YWluZXInO1xuXG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IHRoaXMub3B0aW9ucy50aWNrc19sYWJlbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdHZhciBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRcdFx0dmFyIG5vVGlja1Bvc2l0aW9uc1NwZWNpZmllZCA9IHRoaXMub3B0aW9ucy50aWNrc19wb3NpdGlvbnMubGVuZ3RoID09PSAwO1xuXHRcdFx0XHRcdFx0dmFyIHRpY2tMYWJlbHNJbmRleCA9IHRoaXMub3B0aW9ucy5yZXZlcnNlZCAmJiBub1RpY2tQb3NpdGlvbnNTcGVjaWZpZWQgPyB0aGlzLm9wdGlvbnMudGlja3NfbGFiZWxzLmxlbmd0aCAtIChpICsgMSkgOiBpO1xuXHRcdFx0XHRcdFx0bGFiZWwuY2xhc3NOYW1lID0gJ3NsaWRlci10aWNrLWxhYmVsJztcblx0XHRcdFx0XHRcdGxhYmVsLmlubmVySFRNTCA9IHRoaXMub3B0aW9ucy50aWNrc19sYWJlbHNbdGlja0xhYmVsc0luZGV4XTtcblxuXHRcdFx0XHRcdFx0dGhpcy50aWNrTGFiZWxzLnB1c2gobGFiZWwpO1xuXHRcdFx0XHRcdFx0dGhpcy50aWNrTGFiZWxDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBjcmVhdGVBbmRBcHBlbmRUb29sdGlwU3ViRWxlbWVudHMgPSBmdW5jdGlvbiBjcmVhdGVBbmRBcHBlbmRUb29sdGlwU3ViRWxlbWVudHModG9vbHRpcEVsZW0pIHtcblx0XHRcdFx0XHR2YXIgYXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHRcdGFycm93LmNsYXNzTmFtZSA9IFwidG9vbHRpcC1hcnJvd1wiO1xuXG5cdFx0XHRcdFx0dmFyIGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0XHRpbm5lci5jbGFzc05hbWUgPSBcInRvb2x0aXAtaW5uZXJcIjtcblxuXHRcdFx0XHRcdHRvb2x0aXBFbGVtLmFwcGVuZENoaWxkKGFycm93KTtcblx0XHRcdFx0XHR0b29sdGlwRWxlbS5hcHBlbmRDaGlsZChpbm5lcik7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0LyogQ3JlYXRlIHRvb2x0aXAgZWxlbWVudHMgKi9cblx0XHRcdFx0dmFyIHNsaWRlclRvb2x0aXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHRzbGlkZXJUb29sdGlwLmNsYXNzTmFtZSA9IFwidG9vbHRpcCB0b29sdGlwLW1haW5cIjtcblx0XHRcdFx0c2xpZGVyVG9vbHRpcC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAncHJlc2VudGF0aW9uJyk7XG5cdFx0XHRcdGNyZWF0ZUFuZEFwcGVuZFRvb2x0aXBTdWJFbGVtZW50cyhzbGlkZXJUb29sdGlwKTtcblxuXHRcdFx0XHR2YXIgc2xpZGVyVG9vbHRpcE1pbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdHNsaWRlclRvb2x0aXBNaW4uY2xhc3NOYW1lID0gXCJ0b29sdGlwIHRvb2x0aXAtbWluXCI7XG5cdFx0XHRcdHNsaWRlclRvb2x0aXBNaW4uc2V0QXR0cmlidXRlKCdyb2xlJywgJ3ByZXNlbnRhdGlvbicpO1xuXHRcdFx0XHRjcmVhdGVBbmRBcHBlbmRUb29sdGlwU3ViRWxlbWVudHMoc2xpZGVyVG9vbHRpcE1pbik7XG5cblx0XHRcdFx0dmFyIHNsaWRlclRvb2x0aXBNYXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHRzbGlkZXJUb29sdGlwTWF4LmNsYXNzTmFtZSA9IFwidG9vbHRpcCB0b29sdGlwLW1heFwiO1xuXHRcdFx0XHRzbGlkZXJUb29sdGlwTWF4LnNldEF0dHJpYnV0ZSgncm9sZScsICdwcmVzZW50YXRpb24nKTtcblx0XHRcdFx0Y3JlYXRlQW5kQXBwZW5kVG9vbHRpcFN1YkVsZW1lbnRzKHNsaWRlclRvb2x0aXBNYXgpO1xuXG5cdFx0XHRcdC8qIEFwcGVuZCBjb21wb25lbnRzIHRvIHNsaWRlckVsZW0gKi9cblx0XHRcdFx0dGhpcy5zbGlkZXJFbGVtLmFwcGVuZENoaWxkKHNsaWRlclRyYWNrKTtcblx0XHRcdFx0dGhpcy5zbGlkZXJFbGVtLmFwcGVuZENoaWxkKHNsaWRlclRvb2x0aXApO1xuXHRcdFx0XHR0aGlzLnNsaWRlckVsZW0uYXBwZW5kQ2hpbGQoc2xpZGVyVG9vbHRpcE1pbik7XG5cdFx0XHRcdHRoaXMuc2xpZGVyRWxlbS5hcHBlbmRDaGlsZChzbGlkZXJUb29sdGlwTWF4KTtcblxuXHRcdFx0XHRpZiAodGhpcy50aWNrTGFiZWxDb250YWluZXIpIHtcblx0XHRcdFx0XHR0aGlzLnNsaWRlckVsZW0uYXBwZW5kQ2hpbGQodGhpcy50aWNrTGFiZWxDb250YWluZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLnRpY2tzQ29udGFpbmVyKSB7XG5cdFx0XHRcdFx0dGhpcy5zbGlkZXJFbGVtLmFwcGVuZENoaWxkKHRoaXMudGlja3NDb250YWluZXIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5zbGlkZXJFbGVtLmFwcGVuZENoaWxkKHNsaWRlck1pbkhhbmRsZSk7XG5cdFx0XHRcdHRoaXMuc2xpZGVyRWxlbS5hcHBlbmRDaGlsZChzbGlkZXJNYXhIYW5kbGUpO1xuXG5cdFx0XHRcdC8qIEFwcGVuZCBzbGlkZXIgZWxlbWVudCB0byBwYXJlbnQgY29udGFpbmVyLCByaWdodCBiZWZvcmUgdGhlIG9yaWdpbmFsIDxpbnB1dD4gZWxlbWVudCAqL1xuXHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKHRoaXMuc2xpZGVyRWxlbSwgdGhpcy5lbGVtZW50KTtcblxuXHRcdFx0XHQvKiBIaWRlIG9yaWdpbmFsIDxpbnB1dD4gZWxlbWVudCAqL1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0fVxuXHRcdFx0LyogSWYgSlF1ZXJ5IGV4aXN0cywgY2FjaGUgSlEgcmVmZXJlbmNlcyAqL1xuXHRcdFx0aWYgKCQpIHtcblx0XHRcdFx0dGhpcy4kZWxlbWVudCA9ICQodGhpcy5lbGVtZW50KTtcblx0XHRcdFx0dGhpcy4kc2xpZGVyRWxlbSA9ICQodGhpcy5zbGlkZXJFbGVtKTtcblx0XHRcdH1cblxuXHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgIFx0XHRcdFx0XHRcdFNldHVwXG4gICBcdCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXHRcdFx0dGhpcy5ldmVudFRvQ2FsbGJhY2tNYXAgPSB7fTtcblx0XHRcdHRoaXMuc2xpZGVyRWxlbS5pZCA9IHRoaXMub3B0aW9ucy5pZDtcblxuXHRcdFx0dGhpcy50b3VjaENhcGFibGUgPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgd2luZG93LkRvY3VtZW50VG91Y2ggJiYgZG9jdW1lbnQgaW5zdGFuY2VvZiB3aW5kb3cuRG9jdW1lbnRUb3VjaDtcblxuXHRcdFx0dGhpcy50b3VjaFggPSAwO1xuXHRcdFx0dGhpcy50b3VjaFkgPSAwO1xuXG5cdFx0XHR0aGlzLnRvb2x0aXAgPSB0aGlzLnNsaWRlckVsZW0ucXVlcnlTZWxlY3RvcignLnRvb2x0aXAtbWFpbicpO1xuXHRcdFx0dGhpcy50b29sdGlwSW5uZXIgPSB0aGlzLnRvb2x0aXAucXVlcnlTZWxlY3RvcignLnRvb2x0aXAtaW5uZXInKTtcblxuXHRcdFx0dGhpcy50b29sdGlwX21pbiA9IHRoaXMuc2xpZGVyRWxlbS5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcC1taW4nKTtcblx0XHRcdHRoaXMudG9vbHRpcElubmVyX21pbiA9IHRoaXMudG9vbHRpcF9taW4ucXVlcnlTZWxlY3RvcignLnRvb2x0aXAtaW5uZXInKTtcblxuXHRcdFx0dGhpcy50b29sdGlwX21heCA9IHRoaXMuc2xpZGVyRWxlbS5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcC1tYXgnKTtcblx0XHRcdHRoaXMudG9vbHRpcElubmVyX21heCA9IHRoaXMudG9vbHRpcF9tYXgucXVlcnlTZWxlY3RvcignLnRvb2x0aXAtaW5uZXInKTtcblxuXHRcdFx0aWYgKFNsaWRlclNjYWxlW3RoaXMub3B0aW9ucy5zY2FsZV0pIHtcblx0XHRcdFx0dGhpcy5vcHRpb25zLnNjYWxlID0gU2xpZGVyU2NhbGVbdGhpcy5vcHRpb25zLnNjYWxlXTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHVwZGF0ZVNsaWRlciA9PT0gdHJ1ZSkge1xuXHRcdFx0XHQvLyBSZXNldCBjbGFzc2VzXG5cdFx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKHRoaXMuc2xpZGVyRWxlbSwgJ3NsaWRlci1ob3Jpem9udGFsJyk7XG5cdFx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKHRoaXMuc2xpZGVyRWxlbSwgJ3NsaWRlci12ZXJ0aWNhbCcpO1xuXHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyh0aGlzLnNsaWRlckVsZW0sICdzbGlkZXItcnRsJyk7XG5cdFx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKHRoaXMudG9vbHRpcCwgJ2hpZGUnKTtcblx0XHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3ModGhpcy50b29sdGlwX21pbiwgJ2hpZGUnKTtcblx0XHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3ModGhpcy50b29sdGlwX21heCwgJ2hpZGUnKTtcblxuXHRcdFx0XHQvLyBVbmRvIGV4aXN0aW5nIGlubGluZSBzdHlsZXMgZm9yIHRyYWNrXG5cdFx0XHRcdFtcImxlZnRcIiwgXCJyaWdodFwiLCBcInRvcFwiLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCJdLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcblx0XHRcdFx0XHR0aGlzLl9yZW1vdmVQcm9wZXJ0eSh0aGlzLnRyYWNrTG93LCBwcm9wKTtcblx0XHRcdFx0XHR0aGlzLl9yZW1vdmVQcm9wZXJ0eSh0aGlzLnRyYWNrU2VsZWN0aW9uLCBwcm9wKTtcblx0XHRcdFx0XHR0aGlzLl9yZW1vdmVQcm9wZXJ0eSh0aGlzLnRyYWNrSGlnaCwgcHJvcCk7XG5cdFx0XHRcdH0sIHRoaXMpO1xuXG5cdFx0XHRcdC8vIFVuZG8gaW5saW5lIHN0eWxlcyBvbiBoYW5kbGVzXG5cdFx0XHRcdFt0aGlzLmhhbmRsZTEsIHRoaXMuaGFuZGxlMl0uZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlKSB7XG5cdFx0XHRcdFx0dGhpcy5fcmVtb3ZlUHJvcGVydHkoaGFuZGxlLCAnbGVmdCcpO1xuXHRcdFx0XHRcdHRoaXMuX3JlbW92ZVByb3BlcnR5KGhhbmRsZSwgJ3JpZ2h0Jyk7XG5cdFx0XHRcdFx0dGhpcy5fcmVtb3ZlUHJvcGVydHkoaGFuZGxlLCAndG9wJyk7XG5cdFx0XHRcdH0sIHRoaXMpO1xuXG5cdFx0XHRcdC8vIFVuZG8gaW5saW5lIHN0eWxlcyBhbmQgY2xhc3NlcyBvbiB0b29sdGlwc1xuXHRcdFx0XHRbdGhpcy50b29sdGlwLCB0aGlzLnRvb2x0aXBfbWluLCB0aGlzLnRvb2x0aXBfbWF4XS5mb3JFYWNoKGZ1bmN0aW9uICh0b29sdGlwKSB7XG5cdFx0XHRcdFx0dGhpcy5fcmVtb3ZlUHJvcGVydHkodG9vbHRpcCwgJ2xlZnQnKTtcblx0XHRcdFx0XHR0aGlzLl9yZW1vdmVQcm9wZXJ0eSh0b29sdGlwLCAncmlnaHQnKTtcblx0XHRcdFx0XHR0aGlzLl9yZW1vdmVQcm9wZXJ0eSh0b29sdGlwLCAndG9wJyk7XG5cblx0XHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyh0b29sdGlwLCAncmlnaHQnKTtcblx0XHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyh0b29sdGlwLCAnbGVmdCcpO1xuXHRcdFx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKHRvb2x0aXAsICd0b3AnKTtcblx0XHRcdFx0fSwgdGhpcyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLm9wdGlvbnMub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcblx0XHRcdFx0dGhpcy5fYWRkQ2xhc3ModGhpcy5zbGlkZXJFbGVtLCAnc2xpZGVyLXZlcnRpY2FsJyk7XG5cdFx0XHRcdHRoaXMuc3R5bGVQb3MgPSAndG9wJztcblx0XHRcdFx0dGhpcy5tb3VzZVBvcyA9ICdwYWdlWSc7XG5cdFx0XHRcdHRoaXMuc2l6ZVBvcyA9ICdvZmZzZXRIZWlnaHQnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5fYWRkQ2xhc3ModGhpcy5zbGlkZXJFbGVtLCAnc2xpZGVyLWhvcml6b250YWwnKTtcblx0XHRcdFx0dGhpcy5zbGlkZXJFbGVtLnN0eWxlLndpZHRoID0gb3JpZ1dpZHRoO1xuXHRcdFx0XHR0aGlzLm9wdGlvbnMub3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMucnRsKSB7XG5cdFx0XHRcdFx0dGhpcy5zdHlsZVBvcyA9ICdyaWdodCc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5zdHlsZVBvcyA9ICdsZWZ0Jztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLm1vdXNlUG9zID0gJ3BhZ2VYJztcblx0XHRcdFx0dGhpcy5zaXplUG9zID0gJ29mZnNldFdpZHRoJztcblx0XHRcdH1cblx0XHRcdC8vIHNwZWNpZmljIHJ0bCBjbGFzc1xuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5ydGwpIHtcblx0XHRcdFx0dGhpcy5fYWRkQ2xhc3ModGhpcy5zbGlkZXJFbGVtLCAnc2xpZGVyLXJ0bCcpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fc2V0VG9vbHRpcFBvc2l0aW9uKCk7XG5cdFx0XHQvKiBJbiBjYXNlIHRpY2tzIGFyZSBzcGVjaWZpZWQsIG92ZXJ3cml0ZSB0aGUgbWluIGFuZCBtYXggYm91bmRzICovXG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheSh0aGlzLm9wdGlvbnMudGlja3MpICYmIHRoaXMub3B0aW9ucy50aWNrcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHRoaXMub3B0aW9ucy5tYXggPSBNYXRoLm1heC5hcHBseShNYXRoLCB0aGlzLm9wdGlvbnMudGlja3MpO1xuXHRcdFx0XHR0aGlzLm9wdGlvbnMubWluID0gTWF0aC5taW4uYXBwbHkoTWF0aCwgdGhpcy5vcHRpb25zLnRpY2tzKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkodGhpcy5vcHRpb25zLnZhbHVlKSkge1xuXHRcdFx0XHR0aGlzLm9wdGlvbnMucmFuZ2UgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLl9zdGF0ZS52YWx1ZSA9IHRoaXMub3B0aW9ucy52YWx1ZTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLnJhbmdlKSB7XG5cdFx0XHRcdC8vIFVzZXIgd2FudHMgYSByYW5nZSwgYnV0IHZhbHVlIGlzIG5vdCBhbiBhcnJheVxuXHRcdFx0XHR0aGlzLl9zdGF0ZS52YWx1ZSA9IFt0aGlzLm9wdGlvbnMudmFsdWUsIHRoaXMub3B0aW9ucy5tYXhdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5fc3RhdGUudmFsdWUgPSB0aGlzLm9wdGlvbnMudmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMudHJhY2tMb3cgPSBzbGlkZXJUcmFja0xvdyB8fCB0aGlzLnRyYWNrTG93O1xuXHRcdFx0dGhpcy50cmFja1NlbGVjdGlvbiA9IHNsaWRlclRyYWNrU2VsZWN0aW9uIHx8IHRoaXMudHJhY2tTZWxlY3Rpb247XG5cdFx0XHR0aGlzLnRyYWNrSGlnaCA9IHNsaWRlclRyYWNrSGlnaCB8fCB0aGlzLnRyYWNrSGlnaDtcblxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5zZWxlY3Rpb24gPT09ICdub25lJykge1xuXHRcdFx0XHR0aGlzLl9hZGRDbGFzcyh0aGlzLnRyYWNrTG93LCAnaGlkZScpO1xuXHRcdFx0XHR0aGlzLl9hZGRDbGFzcyh0aGlzLnRyYWNrU2VsZWN0aW9uLCAnaGlkZScpO1xuXHRcdFx0XHR0aGlzLl9hZGRDbGFzcyh0aGlzLnRyYWNrSGlnaCwgJ2hpZGUnKTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLnNlbGVjdGlvbiA9PT0gJ2FmdGVyJyB8fCB0aGlzLm9wdGlvbnMuc2VsZWN0aW9uID09PSAnYmVmb3JlJykge1xuXHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyh0aGlzLnRyYWNrTG93LCAnaGlkZScpO1xuXHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyh0aGlzLnRyYWNrU2VsZWN0aW9uLCAnaGlkZScpO1xuXHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyh0aGlzLnRyYWNrSGlnaCwgJ2hpZGUnKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5oYW5kbGUxID0gc2xpZGVyTWluSGFuZGxlIHx8IHRoaXMuaGFuZGxlMTtcblx0XHRcdHRoaXMuaGFuZGxlMiA9IHNsaWRlck1heEhhbmRsZSB8fCB0aGlzLmhhbmRsZTI7XG5cblx0XHRcdGlmICh1cGRhdGVTbGlkZXIgPT09IHRydWUpIHtcblx0XHRcdFx0Ly8gUmVzZXQgY2xhc3Nlc1xuXHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyh0aGlzLmhhbmRsZTEsICdyb3VuZCB0cmlhbmdsZScpO1xuXHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyh0aGlzLmhhbmRsZTIsICdyb3VuZCB0cmlhbmdsZSBoaWRlJyk7XG5cblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IHRoaXMudGlja3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyh0aGlzLnRpY2tzW2ldLCAncm91bmQgdHJpYW5nbGUgaGlkZScpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHZhciBhdmFpbGFibGVIYW5kbGVNb2RpZmllcnMgPSBbJ3JvdW5kJywgJ3RyaWFuZ2xlJywgJ2N1c3RvbSddO1xuXHRcdFx0dmFyIGlzVmFsaWRIYW5kbGVUeXBlID0gYXZhaWxhYmxlSGFuZGxlTW9kaWZpZXJzLmluZGV4T2YodGhpcy5vcHRpb25zLmhhbmRsZSkgIT09IC0xO1xuXHRcdFx0aWYgKGlzVmFsaWRIYW5kbGVUeXBlKSB7XG5cdFx0XHRcdHRoaXMuX2FkZENsYXNzKHRoaXMuaGFuZGxlMSwgdGhpcy5vcHRpb25zLmhhbmRsZSk7XG5cdFx0XHRcdHRoaXMuX2FkZENsYXNzKHRoaXMuaGFuZGxlMiwgdGhpcy5vcHRpb25zLmhhbmRsZSk7XG5cblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IHRoaXMudGlja3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHR0aGlzLl9hZGRDbGFzcyh0aGlzLnRpY2tzW2ldLCB0aGlzLm9wdGlvbnMuaGFuZGxlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9zdGF0ZS5vZmZzZXQgPSB0aGlzLl9vZmZzZXQodGhpcy5zbGlkZXJFbGVtKTtcblx0XHRcdHRoaXMuX3N0YXRlLnNpemUgPSB0aGlzLnNsaWRlckVsZW1bdGhpcy5zaXplUG9zXTtcblx0XHRcdHRoaXMuc2V0VmFsdWUodGhpcy5fc3RhdGUudmFsdWUpO1xuXG5cdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICBcdFx0XHRcdEJpbmQgRXZlbnQgTGlzdGVuZXJzXG4gICBcdCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHRcdFx0Ly8gQmluZCBrZXlib2FyZCBoYW5kbGVyc1xuXHRcdFx0dGhpcy5oYW5kbGUxS2V5ZG93biA9IHRoaXMuX2tleWRvd24uYmluZCh0aGlzLCAwKTtcblx0XHRcdHRoaXMuaGFuZGxlMS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZTFLZXlkb3duLCBmYWxzZSk7XG5cblx0XHRcdHRoaXMuaGFuZGxlMktleWRvd24gPSB0aGlzLl9rZXlkb3duLmJpbmQodGhpcywgMSk7XG5cdFx0XHR0aGlzLmhhbmRsZTIuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGUyS2V5ZG93biwgZmFsc2UpO1xuXG5cdFx0XHR0aGlzLm1vdXNlZG93biA9IHRoaXMuX21vdXNlZG93bi5iaW5kKHRoaXMpO1xuXHRcdFx0dGhpcy50b3VjaHN0YXJ0ID0gdGhpcy5fdG91Y2hzdGFydC5iaW5kKHRoaXMpO1xuXHRcdFx0dGhpcy50b3VjaG1vdmUgPSB0aGlzLl90b3VjaG1vdmUuYmluZCh0aGlzKTtcblxuXHRcdFx0aWYgKHRoaXMudG91Y2hDYXBhYmxlKSB7XG5cdFx0XHRcdC8vIFRlc3QgZm9yIHBhc3NpdmUgZXZlbnQgc3VwcG9ydFxuXHRcdFx0XHR2YXIgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dmFyIG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuXHRcdFx0XHRcdFx0Z2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdFx0XHRcdFx0XHRcdHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsIG51bGwsIG9wdHMpO1xuXHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0XHQvLyBVc2Ugb3VyIGRldGVjdCdzIHJlc3VsdHMuIHBhc3NpdmUgYXBwbGllZCBpZiBzdXBwb3J0ZWQsIGNhcHR1cmUgd2lsbCBiZSBmYWxzZSBlaXRoZXIgd2F5LlxuXHRcdFx0XHR2YXIgZXZlbnRPcHRpb25zID0gc3VwcG9ydHNQYXNzaXZlID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZTtcblx0XHRcdFx0Ly8gQmluZCB0b3VjaCBoYW5kbGVyc1xuXHRcdFx0XHR0aGlzLnNsaWRlckVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy50b3VjaHN0YXJ0LCBldmVudE9wdGlvbnMpO1xuXHRcdFx0XHR0aGlzLnNsaWRlckVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLnRvdWNobW92ZSwgZXZlbnRPcHRpb25zKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc2xpZGVyRWxlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMubW91c2Vkb3duLCBmYWxzZSk7XG5cblx0XHRcdC8vIEJpbmQgd2luZG93IGhhbmRsZXJzXG5cdFx0XHR0aGlzLnJlc2l6ZSA9IHRoaXMuX3Jlc2l6ZS5iaW5kKHRoaXMpO1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5yZXNpemUsIGZhbHNlKTtcblxuXHRcdFx0Ly8gQmluZCB0b29sdGlwLXJlbGF0ZWQgaGFuZGxlcnNcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcCA9PT0gJ2hpZGUnKSB7XG5cdFx0XHRcdHRoaXMuX2FkZENsYXNzKHRoaXMudG9vbHRpcCwgJ2hpZGUnKTtcblx0XHRcdFx0dGhpcy5fYWRkQ2xhc3ModGhpcy50b29sdGlwX21pbiwgJ2hpZGUnKTtcblx0XHRcdFx0dGhpcy5fYWRkQ2xhc3ModGhpcy50b29sdGlwX21heCwgJ2hpZGUnKTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLnRvb2x0aXAgPT09ICdhbHdheXMnKSB7XG5cdFx0XHRcdHRoaXMuX3Nob3dUb29sdGlwKCk7XG5cdFx0XHRcdHRoaXMuX2Fsd2F5c1Nob3dUb29sdGlwID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2hvd1Rvb2x0aXAgPSB0aGlzLl9zaG93VG9vbHRpcC5iaW5kKHRoaXMpO1xuXHRcdFx0XHR0aGlzLmhpZGVUb29sdGlwID0gdGhpcy5faGlkZVRvb2x0aXAuYmluZCh0aGlzKTtcblxuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnRpY2tzX3Rvb2x0aXApIHtcblx0XHRcdFx0XHR2YXIgY2FsbGJhY2tIYW5kbGUgPSB0aGlzLl9hZGRUaWNrTGlzdGVuZXIoKTtcblx0XHRcdFx0XHQvL2NyZWF0ZSBoYW5kbGUxIGxpc3RlbmVycyBhbmQgc3RvcmUgcmVmZXJlbmNlcyBpbiBtYXBcblx0XHRcdFx0XHR2YXIgbW91c2VFbnRlciA9IGNhbGxiYWNrSGFuZGxlLmFkZE1vdXNlRW50ZXIodGhpcywgdGhpcy5oYW5kbGUxKTtcblx0XHRcdFx0XHR2YXIgbW91c2VMZWF2ZSA9IGNhbGxiYWNrSGFuZGxlLmFkZE1vdXNlTGVhdmUodGhpcywgdGhpcy5oYW5kbGUxKTtcblx0XHRcdFx0XHR0aGlzLmhhbmRsZUNhbGxiYWNrTWFwLmhhbmRsZTEgPSB7XG5cdFx0XHRcdFx0XHRtb3VzZUVudGVyOiBtb3VzZUVudGVyLFxuXHRcdFx0XHRcdFx0bW91c2VMZWF2ZTogbW91c2VMZWF2ZVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0Ly9jcmVhdGUgaGFuZGxlMiBsaXN0ZW5lcnMgYW5kIHN0b3JlIHJlZmVyZW5jZXMgaW4gbWFwXG5cdFx0XHRcdFx0bW91c2VFbnRlciA9IGNhbGxiYWNrSGFuZGxlLmFkZE1vdXNlRW50ZXIodGhpcywgdGhpcy5oYW5kbGUyKTtcblx0XHRcdFx0XHRtb3VzZUxlYXZlID0gY2FsbGJhY2tIYW5kbGUuYWRkTW91c2VMZWF2ZSh0aGlzLCB0aGlzLmhhbmRsZTIpO1xuXHRcdFx0XHRcdHRoaXMuaGFuZGxlQ2FsbGJhY2tNYXAuaGFuZGxlMiA9IHtcblx0XHRcdFx0XHRcdG1vdXNlRW50ZXI6IG1vdXNlRW50ZXIsXG5cdFx0XHRcdFx0XHRtb3VzZUxlYXZlOiBtb3VzZUxlYXZlXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnNsaWRlckVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdGhpcy5zaG93VG9vbHRpcCwgZmFsc2UpO1xuXHRcdFx0XHRcdHRoaXMuc2xpZGVyRWxlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCB0aGlzLmhpZGVUb29sdGlwLCBmYWxzZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmhhbmRsZTEuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHRoaXMuc2hvd1Rvb2x0aXAsIGZhbHNlKTtcblx0XHRcdFx0dGhpcy5oYW5kbGUxLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHRoaXMuaGlkZVRvb2x0aXAsIGZhbHNlKTtcblxuXHRcdFx0XHR0aGlzLmhhbmRsZTIuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHRoaXMuc2hvd1Rvb2x0aXAsIGZhbHNlKTtcblx0XHRcdFx0dGhpcy5oYW5kbGUyLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHRoaXMuaGlkZVRvb2x0aXAsIGZhbHNlKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5lbmFibGVkKSB7XG5cdFx0XHRcdHRoaXMuZW5hYmxlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmRpc2FibGUoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICBcdFx0XHRcdElOU1RBTkNFIFBST1BFUlRJRVMvTUVUSE9EU1xuICBcdC0gQW55IG1ldGhvZHMgYm91bmQgdG8gdGhlIHByb3RvdHlwZSBhcmUgY29uc2lkZXJlZFxuICBwYXJ0IG9mIHRoZSBwbHVnaW4ncyBgcHVibGljYCBpbnRlcmZhY2VcbiAgXHQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblx0XHRTbGlkZXIucHJvdG90eXBlID0ge1xuXHRcdFx0X2luaXQ6IGZ1bmN0aW9uIF9pbml0KCkge30sIC8vIE5PVEU6IE11c3QgZXhpc3QgdG8gc3VwcG9ydCBicmlkZ2V0XG5cblx0XHRcdGNvbnN0cnVjdG9yOiBTbGlkZXIsXG5cblx0XHRcdGRlZmF1bHRPcHRpb25zOiB7XG5cdFx0XHRcdGlkOiBcIlwiLFxuXHRcdFx0XHRtaW46IDAsXG5cdFx0XHRcdG1heDogMTAsXG5cdFx0XHRcdHN0ZXA6IDEsXG5cdFx0XHRcdHByZWNpc2lvbjogMCxcblx0XHRcdFx0b3JpZW50YXRpb246ICdob3Jpem9udGFsJyxcblx0XHRcdFx0dmFsdWU6IDUsXG5cdFx0XHRcdHJhbmdlOiBmYWxzZSxcblx0XHRcdFx0c2VsZWN0aW9uOiAnYmVmb3JlJyxcblx0XHRcdFx0dG9vbHRpcDogJ3Nob3cnLFxuXHRcdFx0XHR0b29sdGlwX3NwbGl0OiBmYWxzZSxcblx0XHRcdFx0aGFuZGxlOiAncm91bmQnLFxuXHRcdFx0XHRyZXZlcnNlZDogZmFsc2UsXG5cdFx0XHRcdHJ0bDogJ2F1dG8nLFxuXHRcdFx0XHRlbmFibGVkOiB0cnVlLFxuXHRcdFx0XHRmb3JtYXR0ZXI6IGZ1bmN0aW9uIGZvcm1hdHRlcih2YWwpIHtcblx0XHRcdFx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsWzBdICsgXCIgOiBcIiArIHZhbFsxXTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG5hdHVyYWxfYXJyb3dfa2V5czogZmFsc2UsXG5cdFx0XHRcdHRpY2tzOiBbXSxcblx0XHRcdFx0dGlja3NfcG9zaXRpb25zOiBbXSxcblx0XHRcdFx0dGlja3NfbGFiZWxzOiBbXSxcblx0XHRcdFx0dGlja3Nfc25hcF9ib3VuZHM6IDAsXG5cdFx0XHRcdHRpY2tzX3Rvb2x0aXA6IGZhbHNlLFxuXHRcdFx0XHRzY2FsZTogJ2xpbmVhcicsXG5cdFx0XHRcdGZvY3VzOiBmYWxzZSxcblx0XHRcdFx0dG9vbHRpcF9wb3NpdGlvbjogbnVsbCxcblx0XHRcdFx0bGFiZWxsZWRieTogbnVsbCxcblx0XHRcdFx0cmFuZ2VIaWdobGlnaHRzOiBbXVxuXHRcdFx0fSxcblxuXHRcdFx0Z2V0RWxlbWVudDogZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2xpZGVyRWxlbTtcblx0XHRcdH0sXG5cblx0XHRcdGdldFZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5yYW5nZSkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLl9zdGF0ZS52YWx1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5fc3RhdGUudmFsdWVbMF07XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdHNldFZhbHVlOiBmdW5jdGlvbiBzZXRWYWx1ZSh2YWwsIHRyaWdnZXJTbGlkZUV2ZW50LCB0cmlnZ2VyQ2hhbmdlRXZlbnQpIHtcblx0XHRcdFx0aWYgKCF2YWwpIHtcblx0XHRcdFx0XHR2YWwgPSAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBvbGRWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblx0XHRcdFx0dGhpcy5fc3RhdGUudmFsdWUgPSB0aGlzLl92YWxpZGF0ZUlucHV0VmFsdWUodmFsKTtcblx0XHRcdFx0dmFyIGFwcGx5UHJlY2lzaW9uID0gdGhpcy5fYXBwbHlQcmVjaXNpb24uYmluZCh0aGlzKTtcblxuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnJhbmdlKSB7XG5cdFx0XHRcdFx0dGhpcy5fc3RhdGUudmFsdWVbMF0gPSBhcHBseVByZWNpc2lvbih0aGlzLl9zdGF0ZS52YWx1ZVswXSk7XG5cdFx0XHRcdFx0dGhpcy5fc3RhdGUudmFsdWVbMV0gPSBhcHBseVByZWNpc2lvbih0aGlzLl9zdGF0ZS52YWx1ZVsxXSk7XG5cblx0XHRcdFx0XHR0aGlzLl9zdGF0ZS52YWx1ZVswXSA9IE1hdGgubWF4KHRoaXMub3B0aW9ucy5taW4sIE1hdGgubWluKHRoaXMub3B0aW9ucy5tYXgsIHRoaXMuX3N0YXRlLnZhbHVlWzBdKSk7XG5cdFx0XHRcdFx0dGhpcy5fc3RhdGUudmFsdWVbMV0gPSBNYXRoLm1heCh0aGlzLm9wdGlvbnMubWluLCBNYXRoLm1pbih0aGlzLm9wdGlvbnMubWF4LCB0aGlzLl9zdGF0ZS52YWx1ZVsxXSkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3N0YXRlLnZhbHVlID0gYXBwbHlQcmVjaXNpb24odGhpcy5fc3RhdGUudmFsdWUpO1xuXHRcdFx0XHRcdHRoaXMuX3N0YXRlLnZhbHVlID0gW01hdGgubWF4KHRoaXMub3B0aW9ucy5taW4sIE1hdGgubWluKHRoaXMub3B0aW9ucy5tYXgsIHRoaXMuX3N0YXRlLnZhbHVlKSldO1xuXHRcdFx0XHRcdHRoaXMuX2FkZENsYXNzKHRoaXMuaGFuZGxlMiwgJ2hpZGUnKTtcblx0XHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnNlbGVjdGlvbiA9PT0gJ2FmdGVyJykge1xuXHRcdFx0XHRcdFx0dGhpcy5fc3RhdGUudmFsdWVbMV0gPSB0aGlzLm9wdGlvbnMubWF4O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9zdGF0ZS52YWx1ZVsxXSA9IHRoaXMub3B0aW9ucy5taW47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5tYXggPiB0aGlzLm9wdGlvbnMubWluKSB7XG5cdFx0XHRcdFx0dGhpcy5fc3RhdGUucGVyY2VudGFnZSA9IFt0aGlzLl90b1BlcmNlbnRhZ2UodGhpcy5fc3RhdGUudmFsdWVbMF0pLCB0aGlzLl90b1BlcmNlbnRhZ2UodGhpcy5fc3RhdGUudmFsdWVbMV0pLCB0aGlzLm9wdGlvbnMuc3RlcCAqIDEwMCAvICh0aGlzLm9wdGlvbnMubWF4IC0gdGhpcy5vcHRpb25zLm1pbildO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3N0YXRlLnBlcmNlbnRhZ2UgPSBbMCwgMCwgMTAwXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuX2xheW91dCgpO1xuXHRcdFx0XHR2YXIgbmV3VmFsdWUgPSB0aGlzLm9wdGlvbnMucmFuZ2UgPyB0aGlzLl9zdGF0ZS52YWx1ZSA6IHRoaXMuX3N0YXRlLnZhbHVlWzBdO1xuXG5cdFx0XHRcdHRoaXMuX3NldERhdGFWYWwobmV3VmFsdWUpO1xuXHRcdFx0XHRpZiAodHJpZ2dlclNsaWRlRXZlbnQgPT09IHRydWUpIHtcblx0XHRcdFx0XHR0aGlzLl90cmlnZ2VyKCdzbGlkZScsIG5ld1ZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlICYmIHRyaWdnZXJDaGFuZ2VFdmVudCA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdHRoaXMuX3RyaWdnZXIoJ2NoYW5nZScsIHtcblx0XHRcdFx0XHRcdG9sZFZhbHVlOiBvbGRWYWx1ZSxcblx0XHRcdFx0XHRcdG5ld1ZhbHVlOiBuZXdWYWx1ZVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXG5cdFx0XHRkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuXHRcdFx0XHQvLyBSZW1vdmUgZXZlbnQgaGFuZGxlcnMgb24gc2xpZGVyIGVsZW1lbnRzXG5cdFx0XHRcdHRoaXMuX3JlbW92ZVNsaWRlckV2ZW50SGFuZGxlcnMoKTtcblxuXHRcdFx0XHQvLyBSZW1vdmUgdGhlIHNsaWRlciBmcm9tIHRoZSBET01cblx0XHRcdFx0dGhpcy5zbGlkZXJFbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5zbGlkZXJFbGVtKTtcblx0XHRcdFx0LyogU2hvdyBvcmlnaW5hbCA8aW5wdXQ+IGVsZW1lbnQgKi9cblx0XHRcdFx0dGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuXG5cdFx0XHRcdC8vIENsZWFyIG91dCBjdXN0b20gZXZlbnQgYmluZGluZ3Ncblx0XHRcdFx0dGhpcy5fY2xlYW5VcEV2ZW50Q2FsbGJhY2tzTWFwKCk7XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIGRhdGEgdmFsdWVzXG5cdFx0XHRcdHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhXCIpO1xuXG5cdFx0XHRcdC8vIFJlbW92ZSBKUXVlcnkgaGFuZGxlcnMvZGF0YVxuXHRcdFx0XHRpZiAoJCkge1xuXHRcdFx0XHRcdHRoaXMuX3VuYmluZEpRdWVyeUV2ZW50SGFuZGxlcnMoKTtcblx0XHRcdFx0XHR0aGlzLiRlbGVtZW50LnJlbW92ZURhdGEoJ3NsaWRlcicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRkaXNhYmxlOiBmdW5jdGlvbiBkaXNhYmxlKCkge1xuXHRcdFx0XHR0aGlzLl9zdGF0ZS5lbmFibGVkID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMuaGFuZGxlMS5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcblx0XHRcdFx0dGhpcy5oYW5kbGUyLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xuXHRcdFx0XHR0aGlzLl9hZGRDbGFzcyh0aGlzLnNsaWRlckVsZW0sICdzbGlkZXItZGlzYWJsZWQnKTtcblx0XHRcdFx0dGhpcy5fdHJpZ2dlcignc2xpZGVEaXNhYmxlZCcpO1xuXG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblxuXHRcdFx0ZW5hYmxlOiBmdW5jdGlvbiBlbmFibGUoKSB7XG5cdFx0XHRcdHRoaXMuX3N0YXRlLmVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLmhhbmRsZTEuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgMCk7XG5cdFx0XHRcdHRoaXMuaGFuZGxlMi5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCAwKTtcblx0XHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3ModGhpcy5zbGlkZXJFbGVtLCAnc2xpZGVyLWRpc2FibGVkJyk7XG5cdFx0XHRcdHRoaXMuX3RyaWdnZXIoJ3NsaWRlRW5hYmxlZCcpO1xuXG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblxuXHRcdFx0dG9nZ2xlOiBmdW5jdGlvbiB0b2dnbGUoKSB7XG5cdFx0XHRcdGlmICh0aGlzLl9zdGF0ZS5lbmFibGVkKSB7XG5cdFx0XHRcdFx0dGhpcy5kaXNhYmxlKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5lbmFibGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cblx0XHRcdGlzRW5hYmxlZDogZnVuY3Rpb24gaXNFbmFibGVkKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fc3RhdGUuZW5hYmxlZDtcblx0XHRcdH0sXG5cblx0XHRcdG9uOiBmdW5jdGlvbiBvbihldnQsIGNhbGxiYWNrKSB7XG5cdFx0XHRcdHRoaXMuX2JpbmROb25RdWVyeUV2ZW50SGFuZGxlcihldnQsIGNhbGxiYWNrKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXG5cdFx0XHRvZmY6IGZ1bmN0aW9uIG9mZihldnQsIGNhbGxiYWNrKSB7XG5cdFx0XHRcdGlmICgkKSB7XG5cdFx0XHRcdFx0dGhpcy4kZWxlbWVudC5vZmYoZXZ0LCBjYWxsYmFjayk7XG5cdFx0XHRcdFx0dGhpcy4kc2xpZGVyRWxlbS5vZmYoZXZ0LCBjYWxsYmFjayk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5fdW5iaW5kTm9uUXVlcnlFdmVudEhhbmRsZXIoZXZ0LCBjYWxsYmFjayk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdGdldEF0dHJpYnV0ZTogZnVuY3Rpb24gZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSkge1xuXHRcdFx0XHRpZiAoYXR0cmlidXRlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uc1thdHRyaWJ1dGVdO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLm9wdGlvbnM7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdHNldEF0dHJpYnV0ZTogZnVuY3Rpb24gc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpIHtcblx0XHRcdFx0dGhpcy5vcHRpb25zW2F0dHJpYnV0ZV0gPSB2YWx1ZTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXG5cdFx0XHRyZWZyZXNoOiBmdW5jdGlvbiByZWZyZXNoKCkge1xuXHRcdFx0XHR0aGlzLl9yZW1vdmVTbGlkZXJFdmVudEhhbmRsZXJzKCk7XG5cdFx0XHRcdGNyZWF0ZU5ld1NsaWRlci5jYWxsKHRoaXMsIHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zKTtcblx0XHRcdFx0aWYgKCQpIHtcblx0XHRcdFx0XHQvLyBCaW5kIG5ldyBpbnN0YW5jZSBvZiBzbGlkZXIgdG8gdGhlIGVsZW1lbnRcblx0XHRcdFx0XHQkLmRhdGEodGhpcy5lbGVtZW50LCAnc2xpZGVyJywgdGhpcyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXG5cdFx0XHRyZWxheW91dDogZnVuY3Rpb24gcmVsYXlvdXQoKSB7XG5cdFx0XHRcdHRoaXMuX3Jlc2l6ZSgpO1xuXHRcdFx0XHR0aGlzLl9sYXlvdXQoKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqK1xuICAgXHRcdFx0XHRIRUxQRVJTXG4gICBcdC0gQW55IG1ldGhvZCB0aGF0IGlzIG5vdCBwYXJ0IG9mIHRoZSBwdWJsaWMgaW50ZXJmYWNlLlxuICAgLSBQbGFjZSBpdCB1bmRlcm5lYXRoIHRoaXMgY29tbWVudCBibG9jayBhbmQgd3JpdGUgaXRzIHNpZ25hdHVyZSBsaWtlIHNvOlxuICAgXHRcdF9mbk5hbWUgOiBmdW5jdGlvbigpIHsuLi59XG4gICBcdCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXHRcdFx0X3JlbW92ZVNsaWRlckV2ZW50SGFuZGxlcnM6IGZ1bmN0aW9uIF9yZW1vdmVTbGlkZXJFdmVudEhhbmRsZXJzKCkge1xuXHRcdFx0XHQvLyBSZW1vdmUga2V5ZG93biBldmVudCBsaXN0ZW5lcnNcblx0XHRcdFx0dGhpcy5oYW5kbGUxLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlMUtleWRvd24sIGZhbHNlKTtcblx0XHRcdFx0dGhpcy5oYW5kbGUyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlMktleWRvd24sIGZhbHNlKTtcblxuXHRcdFx0XHQvL3JlbW92ZSB0aGUgbGlzdGVuZXJzIGZyb20gdGhlIHRpY2tzIGFuZCBoYW5kbGVzIGlmIHRoZXkgaGFkIHRoZWlyIG93biBsaXN0ZW5lcnNcblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy50aWNrc190b29sdGlwKSB7XG5cdFx0XHRcdFx0dmFyIHRpY2tzID0gdGhpcy50aWNrc0NvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzbGlkZXItdGljaycpO1xuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGlja3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdHRpY2tzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLnRpY2tzQ2FsbGJhY2tNYXBbaV0ubW91c2VFbnRlciwgZmFsc2UpO1xuXHRcdFx0XHRcdFx0dGlja3NbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMudGlja3NDYWxsYmFja01hcFtpXS5tb3VzZUxlYXZlLCBmYWxzZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuaGFuZGxlMS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5oYW5kbGVDYWxsYmFja01hcC5oYW5kbGUxLm1vdXNlRW50ZXIsIGZhbHNlKTtcblx0XHRcdFx0XHR0aGlzLmhhbmRsZTIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuaGFuZGxlQ2FsbGJhY2tNYXAuaGFuZGxlMi5tb3VzZUVudGVyLCBmYWxzZSk7XG5cdFx0XHRcdFx0dGhpcy5oYW5kbGUxLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmhhbmRsZUNhbGxiYWNrTWFwLmhhbmRsZTEubW91c2VMZWF2ZSwgZmFsc2UpO1xuXHRcdFx0XHRcdHRoaXMuaGFuZGxlMi5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5oYW5kbGVDYWxsYmFja01hcC5oYW5kbGUyLm1vdXNlTGVhdmUsIGZhbHNlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuaGFuZGxlQ2FsbGJhY2tNYXAgPSBudWxsO1xuXHRcdFx0XHR0aGlzLnRpY2tzQ2FsbGJhY2tNYXAgPSBudWxsO1xuXG5cdFx0XHRcdGlmICh0aGlzLnNob3dUb29sdGlwKSB7XG5cdFx0XHRcdFx0dGhpcy5oYW5kbGUxLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCB0aGlzLnNob3dUb29sdGlwLCBmYWxzZSk7XG5cdFx0XHRcdFx0dGhpcy5oYW5kbGUyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCB0aGlzLnNob3dUb29sdGlwLCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuaGlkZVRvb2x0aXApIHtcblx0XHRcdFx0XHR0aGlzLmhhbmRsZTEucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgdGhpcy5oaWRlVG9vbHRpcCwgZmFsc2UpO1xuXHRcdFx0XHRcdHRoaXMuaGFuZGxlMi5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmx1clwiLCB0aGlzLmhpZGVUb29sdGlwLCBmYWxzZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzIGZyb20gc2xpZGVyRWxlbVxuXHRcdFx0XHRpZiAodGhpcy5zaG93VG9vbHRpcCkge1xuXHRcdFx0XHRcdHRoaXMuc2xpZGVyRWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCB0aGlzLnNob3dUb29sdGlwLCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuaGlkZVRvb2x0aXApIHtcblx0XHRcdFx0XHR0aGlzLnNsaWRlckVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy5oaWRlVG9vbHRpcCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc2xpZGVyRWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLnRvdWNoc3RhcnQsIGZhbHNlKTtcblx0XHRcdFx0dGhpcy5zbGlkZXJFbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy50b3VjaG1vdmUsIGZhbHNlKTtcblx0XHRcdFx0dGhpcy5zbGlkZXJFbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5tb3VzZWRvd24sIGZhbHNlKTtcblxuXHRcdFx0XHQvLyBSZW1vdmUgd2luZG93IGV2ZW50IGxpc3RlbmVyXG5cdFx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMucmVzaXplLCBmYWxzZSk7XG5cdFx0XHR9LFxuXHRcdFx0X2JpbmROb25RdWVyeUV2ZW50SGFuZGxlcjogZnVuY3Rpb24gX2JpbmROb25RdWVyeUV2ZW50SGFuZGxlcihldnQsIGNhbGxiYWNrKSB7XG5cdFx0XHRcdGlmICh0aGlzLmV2ZW50VG9DYWxsYmFja01hcFtldnRdID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHR0aGlzLmV2ZW50VG9DYWxsYmFja01hcFtldnRdID0gW107XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5ldmVudFRvQ2FsbGJhY2tNYXBbZXZ0XS5wdXNoKGNhbGxiYWNrKTtcblx0XHRcdH0sXG5cdFx0XHRfdW5iaW5kTm9uUXVlcnlFdmVudEhhbmRsZXI6IGZ1bmN0aW9uIF91bmJpbmROb25RdWVyeUV2ZW50SGFuZGxlcihldnQsIGNhbGxiYWNrKSB7XG5cdFx0XHRcdHZhciBjYWxsYmFja3MgPSB0aGlzLmV2ZW50VG9DYWxsYmFja01hcFtldnRdO1xuXHRcdFx0XHRpZiAoY2FsbGJhY2tzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrc1tpXSA9PT0gY2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0X2NsZWFuVXBFdmVudENhbGxiYWNrc01hcDogZnVuY3Rpb24gX2NsZWFuVXBFdmVudENhbGxiYWNrc01hcCgpIHtcblx0XHRcdFx0dmFyIGV2ZW50TmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmV2ZW50VG9DYWxsYmFja01hcCk7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnROYW1lcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHZhciBldmVudE5hbWUgPSBldmVudE5hbWVzW2ldO1xuXHRcdFx0XHRcdGRlbGV0ZSB0aGlzLmV2ZW50VG9DYWxsYmFja01hcFtldmVudE5hbWVdO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0X3Nob3dUb29sdGlwOiBmdW5jdGlvbiBfc2hvd1Rvb2x0aXAoKSB7XG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcF9zcGxpdCA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHR0aGlzLl9hZGRDbGFzcyh0aGlzLnRvb2x0aXAsICdpbicpO1xuXHRcdFx0XHRcdHRoaXMudG9vbHRpcF9taW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0XHR0aGlzLnRvb2x0aXBfbWF4LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5fYWRkQ2xhc3ModGhpcy50b29sdGlwX21pbiwgJ2luJyk7XG5cdFx0XHRcdFx0dGhpcy5fYWRkQ2xhc3ModGhpcy50b29sdGlwX21heCwgJ2luJyk7XG5cdFx0XHRcdFx0dGhpcy50b29sdGlwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fc3RhdGUub3ZlciA9IHRydWU7XG5cdFx0XHR9LFxuXHRcdFx0X2hpZGVUb29sdGlwOiBmdW5jdGlvbiBfaGlkZVRvb2x0aXAoKSB7XG5cdFx0XHRcdGlmICh0aGlzLl9zdGF0ZS5pbkRyYWcgPT09IGZhbHNlICYmIHRoaXMuYWx3YXlzU2hvd1Rvb2x0aXAgIT09IHRydWUpIHtcblx0XHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyh0aGlzLnRvb2x0aXAsICdpbicpO1xuXHRcdFx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKHRoaXMudG9vbHRpcF9taW4sICdpbicpO1xuXHRcdFx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKHRoaXMudG9vbHRpcF9tYXgsICdpbicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuX3N0YXRlLm92ZXIgPSBmYWxzZTtcblx0XHRcdH0sXG5cdFx0XHRfc2V0VG9vbFRpcE9uTW91c2VPdmVyOiBmdW5jdGlvbiBfc2V0VG9vbFRpcE9uTW91c2VPdmVyKHRlbXBTdGF0ZSkge1xuXHRcdFx0XHR2YXIgZm9ybWF0dGVkVG9vbHRpcFZhbCA9IHRoaXMub3B0aW9ucy5mb3JtYXR0ZXIoIXRlbXBTdGF0ZSA/IHRoaXMuX3N0YXRlLnZhbHVlWzBdIDogdGVtcFN0YXRlLnZhbHVlWzBdKTtcblx0XHRcdFx0dmFyIHBvc2l0aW9uUGVyY2VudGFnZXMgPSAhdGVtcFN0YXRlID8gZ2V0UG9zaXRpb25QZXJjZW50YWdlcyh0aGlzLl9zdGF0ZSwgdGhpcy5vcHRpb25zLnJldmVyc2VkKSA6IGdldFBvc2l0aW9uUGVyY2VudGFnZXModGVtcFN0YXRlLCB0aGlzLm9wdGlvbnMucmV2ZXJzZWQpO1xuXHRcdFx0XHR0aGlzLl9zZXRUZXh0KHRoaXMudG9vbHRpcElubmVyLCBmb3JtYXR0ZWRUb29sdGlwVmFsKTtcblxuXHRcdFx0XHR0aGlzLnRvb2x0aXAuc3R5bGVbdGhpcy5zdHlsZVBvc10gPSBwb3NpdGlvblBlcmNlbnRhZ2VzWzBdICsgXCIlXCI7XG5cblx0XHRcdFx0ZnVuY3Rpb24gZ2V0UG9zaXRpb25QZXJjZW50YWdlcyhzdGF0ZSwgcmV2ZXJzZWQpIHtcblx0XHRcdFx0XHRpZiAocmV2ZXJzZWQpIHtcblx0XHRcdFx0XHRcdHJldHVybiBbMTAwIC0gc3RhdGUucGVyY2VudGFnZVswXSwgdGhpcy5vcHRpb25zLnJhbmdlID8gMTAwIC0gc3RhdGUucGVyY2VudGFnZVsxXSA6IHN0YXRlLnBlcmNlbnRhZ2VbMV1dO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gW3N0YXRlLnBlcmNlbnRhZ2VbMF0sIHN0YXRlLnBlcmNlbnRhZ2VbMV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0X2FkZFRpY2tMaXN0ZW5lcjogZnVuY3Rpb24gX2FkZFRpY2tMaXN0ZW5lcigpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRhZGRNb3VzZUVudGVyOiBmdW5jdGlvbiBhZGRNb3VzZUVudGVyKHJlZmVyZW5jZSwgdGljaywgaW5kZXgpIHtcblx0XHRcdFx0XHRcdHZhciBlbnRlciA9IGZ1bmN0aW9uIGVudGVyKCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgdGVtcFN0YXRlID0gcmVmZXJlbmNlLl9zdGF0ZTtcblx0XHRcdFx0XHRcdFx0dmFyIGlkU3RyaW5nID0gaW5kZXggPj0gMCA/IGluZGV4IDogdGhpcy5hdHRyaWJ1dGVzWydhcmlhLXZhbHVlbm93J10udmFsdWU7XG5cdFx0XHRcdFx0XHRcdHZhciBob3ZlckluZGV4ID0gcGFyc2VJbnQoaWRTdHJpbmcsIDEwKTtcblx0XHRcdFx0XHRcdFx0dGVtcFN0YXRlLnZhbHVlWzBdID0gaG92ZXJJbmRleDtcblx0XHRcdFx0XHRcdFx0dGVtcFN0YXRlLnBlcmNlbnRhZ2VbMF0gPSByZWZlcmVuY2Uub3B0aW9ucy50aWNrc19wb3NpdGlvbnNbaG92ZXJJbmRleF07XG5cdFx0XHRcdFx0XHRcdHJlZmVyZW5jZS5fc2V0VG9vbFRpcE9uTW91c2VPdmVyKHRlbXBTdGF0ZSk7XG5cdFx0XHRcdFx0XHRcdHJlZmVyZW5jZS5fc2hvd1Rvb2x0aXAoKTtcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHR0aWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGVudGVyLCBmYWxzZSk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZW50ZXI7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRhZGRNb3VzZUxlYXZlOiBmdW5jdGlvbiBhZGRNb3VzZUxlYXZlKHJlZmVyZW5jZSwgdGljaykge1xuXHRcdFx0XHRcdFx0dmFyIGxlYXZlID0gZnVuY3Rpb24gbGVhdmUoKSB7XG5cdFx0XHRcdFx0XHRcdHJlZmVyZW5jZS5faGlkZVRvb2x0aXAoKTtcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHR0aWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGxlYXZlLCBmYWxzZSk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbGVhdmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0fSxcblx0XHRcdF9sYXlvdXQ6IGZ1bmN0aW9uIF9sYXlvdXQoKSB7XG5cdFx0XHRcdHZhciBwb3NpdGlvblBlcmNlbnRhZ2VzO1xuXG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMucmV2ZXJzZWQpIHtcblx0XHRcdFx0XHRwb3NpdGlvblBlcmNlbnRhZ2VzID0gWzEwMCAtIHRoaXMuX3N0YXRlLnBlcmNlbnRhZ2VbMF0sIHRoaXMub3B0aW9ucy5yYW5nZSA/IDEwMCAtIHRoaXMuX3N0YXRlLnBlcmNlbnRhZ2VbMV0gOiB0aGlzLl9zdGF0ZS5wZXJjZW50YWdlWzFdXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwb3NpdGlvblBlcmNlbnRhZ2VzID0gW3RoaXMuX3N0YXRlLnBlcmNlbnRhZ2VbMF0sIHRoaXMuX3N0YXRlLnBlcmNlbnRhZ2VbMV1dO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5oYW5kbGUxLnN0eWxlW3RoaXMuc3R5bGVQb3NdID0gcG9zaXRpb25QZXJjZW50YWdlc1swXSArIFwiJVwiO1xuXHRcdFx0XHR0aGlzLmhhbmRsZTEuc2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbm93JywgdGhpcy5fc3RhdGUudmFsdWVbMF0pO1xuXHRcdFx0XHRpZiAoaXNOYU4odGhpcy5vcHRpb25zLmZvcm1hdHRlcih0aGlzLl9zdGF0ZS52YWx1ZVswXSkpKSB7XG5cdFx0XHRcdFx0dGhpcy5oYW5kbGUxLnNldEF0dHJpYnV0ZSgnYXJpYS12YWx1ZXRleHQnLCB0aGlzLm9wdGlvbnMuZm9ybWF0dGVyKHRoaXMuX3N0YXRlLnZhbHVlWzBdKSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmhhbmRsZTIuc3R5bGVbdGhpcy5zdHlsZVBvc10gPSBwb3NpdGlvblBlcmNlbnRhZ2VzWzFdICsgXCIlXCI7XG5cdFx0XHRcdHRoaXMuaGFuZGxlMi5zZXRBdHRyaWJ1dGUoJ2FyaWEtdmFsdWVub3cnLCB0aGlzLl9zdGF0ZS52YWx1ZVsxXSk7XG5cdFx0XHRcdGlmIChpc05hTih0aGlzLm9wdGlvbnMuZm9ybWF0dGVyKHRoaXMuX3N0YXRlLnZhbHVlWzFdKSkpIHtcblx0XHRcdFx0XHR0aGlzLmhhbmRsZTIuc2V0QXR0cmlidXRlKCdhcmlhLXZhbHVldGV4dCcsIHRoaXMub3B0aW9ucy5mb3JtYXR0ZXIodGhpcy5fc3RhdGUudmFsdWVbMV0pKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8qIFBvc2l0aW9uIGhpZ2hsaWdodCByYW5nZSBlbGVtZW50cyAqL1xuXHRcdFx0XHRpZiAodGhpcy5yYW5nZUhpZ2hsaWdodEVsZW1lbnRzLmxlbmd0aCA+IDAgJiYgQXJyYXkuaXNBcnJheSh0aGlzLm9wdGlvbnMucmFuZ2VIaWdobGlnaHRzKSAmJiB0aGlzLm9wdGlvbnMucmFuZ2VIaWdobGlnaHRzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5vcHRpb25zLnJhbmdlSGlnaGxpZ2h0cy5sZW5ndGg7IF9pKyspIHtcblx0XHRcdFx0XHRcdHZhciBzdGFydFBlcmNlbnQgPSB0aGlzLl90b1BlcmNlbnRhZ2UodGhpcy5vcHRpb25zLnJhbmdlSGlnaGxpZ2h0c1tfaV0uc3RhcnQpO1xuXHRcdFx0XHRcdFx0dmFyIGVuZFBlcmNlbnQgPSB0aGlzLl90b1BlcmNlbnRhZ2UodGhpcy5vcHRpb25zLnJhbmdlSGlnaGxpZ2h0c1tfaV0uZW5kKTtcblxuXHRcdFx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5yZXZlcnNlZCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgc3AgPSAxMDAgLSBlbmRQZXJjZW50O1xuXHRcdFx0XHRcdFx0XHRlbmRQZXJjZW50ID0gMTAwIC0gc3RhcnRQZXJjZW50O1xuXHRcdFx0XHRcdFx0XHRzdGFydFBlcmNlbnQgPSBzcDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dmFyIGN1cnJlbnRSYW5nZSA9IHRoaXMuX2NyZWF0ZUhpZ2hsaWdodFJhbmdlKHN0YXJ0UGVyY2VudCwgZW5kUGVyY2VudCk7XG5cblx0XHRcdFx0XHRcdGlmIChjdXJyZW50UmFuZ2UpIHtcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMucmFuZ2VIaWdobGlnaHRFbGVtZW50c1tfaV0uc3R5bGUudG9wID0gY3VycmVudFJhbmdlLnN0YXJ0ICsgXCIlXCI7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5yYW5nZUhpZ2hsaWdodEVsZW1lbnRzW19pXS5zdHlsZS5oZWlnaHQgPSBjdXJyZW50UmFuZ2Uuc2l6ZSArIFwiJVwiO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMucnRsKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnJhbmdlSGlnaGxpZ2h0RWxlbWVudHNbX2ldLnN0eWxlLnJpZ2h0ID0gY3VycmVudFJhbmdlLnN0YXJ0ICsgXCIlXCI7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucmFuZ2VIaWdobGlnaHRFbGVtZW50c1tfaV0uc3R5bGUubGVmdCA9IGN1cnJlbnRSYW5nZS5zdGFydCArIFwiJVwiO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR0aGlzLnJhbmdlSGlnaGxpZ2h0RWxlbWVudHNbX2ldLnN0eWxlLndpZHRoID0gY3VycmVudFJhbmdlLnNpemUgKyBcIiVcIjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5yYW5nZUhpZ2hsaWdodEVsZW1lbnRzW19pXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LyogUG9zaXRpb24gdGlja3MgYW5kIGxhYmVscyAqL1xuXHRcdFx0XHRpZiAoQXJyYXkuaXNBcnJheSh0aGlzLm9wdGlvbnMudGlja3MpICYmIHRoaXMub3B0aW9ucy50aWNrcy5sZW5ndGggPiAwKSB7XG5cblx0XHRcdFx0XHR2YXIgc3R5bGVTaXplID0gdGhpcy5vcHRpb25zLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXHRcdFx0XHRcdHZhciBzdHlsZU1hcmdpbjtcblx0XHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG5cdFx0XHRcdFx0XHRzdHlsZU1hcmdpbiA9ICdtYXJnaW5Ub3AnO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnJ0bCkge1xuXHRcdFx0XHRcdFx0XHRzdHlsZU1hcmdpbiA9ICdtYXJnaW5SaWdodCc7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRzdHlsZU1hcmdpbiA9ICdtYXJnaW5MZWZ0Jztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmFyIGxhYmVsU2l6ZSA9IHRoaXMuX3N0YXRlLnNpemUgLyAodGhpcy5vcHRpb25zLnRpY2tzLmxlbmd0aCAtIDEpO1xuXG5cdFx0XHRcdFx0aWYgKHRoaXMudGlja0xhYmVsQ29udGFpbmVyKSB7XG5cdFx0XHRcdFx0XHR2YXIgZXh0cmFNYXJnaW4gPSAwO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy50aWNrc19wb3NpdGlvbnMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMub3JpZW50YXRpb24gIT09ICd2ZXJ0aWNhbCcpIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnRpY2tMYWJlbENvbnRhaW5lci5zdHlsZVtzdHlsZU1hcmdpbl0gPSAtbGFiZWxTaXplIC8gMiArIFwicHhcIjtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGV4dHJhTWFyZ2luID0gdGhpcy50aWNrTGFiZWxDb250YWluZXIub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0LyogQ2hpZHJlbiBhcmUgcG9zaXRpb24gYWJzb2x1dGUsIGNhbGN1bGF0ZSBoZWlnaHQgYnkgZmluZGluZyB0aGUgbWF4IG9mZnNldEhlaWdodCBvZiBhIGNoaWxkICovXG5cdFx0XHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCB0aGlzLnRpY2tMYWJlbENvbnRhaW5lci5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMudGlja0xhYmVsQ29udGFpbmVyLmNoaWxkTm9kZXNbaV0ub2Zmc2V0SGVpZ2h0ID4gZXh0cmFNYXJnaW4pIHtcblx0XHRcdFx0XHRcdFx0XHRcdGV4dHJhTWFyZ2luID0gdGhpcy50aWNrTGFiZWxDb250YWluZXIuY2hpbGROb2Rlc1tpXS5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zbGlkZXJFbGVtLnN0eWxlLm1hcmdpbkJvdHRvbSA9IGV4dHJhTWFyZ2luICsgXCJweFwiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3B0aW9ucy50aWNrcy5sZW5ndGg7IGkrKykge1xuXG5cdFx0XHRcdFx0XHR2YXIgcGVyY2VudGFnZSA9IHRoaXMub3B0aW9ucy50aWNrc19wb3NpdGlvbnNbaV0gfHwgdGhpcy5fdG9QZXJjZW50YWdlKHRoaXMub3B0aW9ucy50aWNrc1tpXSk7XG5cblx0XHRcdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMucmV2ZXJzZWQpIHtcblx0XHRcdFx0XHRcdFx0cGVyY2VudGFnZSA9IDEwMCAtIHBlcmNlbnRhZ2U7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHRoaXMudGlja3NbaV0uc3R5bGVbdGhpcy5zdHlsZVBvc10gPSBwZXJjZW50YWdlICsgXCIlXCI7XG5cblx0XHRcdFx0XHRcdC8qIFNldCBjbGFzcyBsYWJlbHMgdG8gZGVub3RlIHdoZXRoZXIgdGlja3MgYXJlIGluIHRoZSBzZWxlY3Rpb24gKi9cblx0XHRcdFx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKHRoaXMudGlja3NbaV0sICdpbi1zZWxlY3Rpb24nKTtcblx0XHRcdFx0XHRcdGlmICghdGhpcy5vcHRpb25zLnJhbmdlKSB7XG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0aW9uID09PSAnYWZ0ZXInICYmIHBlcmNlbnRhZ2UgPj0gcG9zaXRpb25QZXJjZW50YWdlc1swXSkge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX2FkZENsYXNzKHRoaXMudGlja3NbaV0sICdpbi1zZWxlY3Rpb24nKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0aW9uID09PSAnYmVmb3JlJyAmJiBwZXJjZW50YWdlIDw9IHBvc2l0aW9uUGVyY2VudGFnZXNbMF0pIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9hZGRDbGFzcyh0aGlzLnRpY2tzW2ldLCAnaW4tc2VsZWN0aW9uJyk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAocGVyY2VudGFnZSA+PSBwb3NpdGlvblBlcmNlbnRhZ2VzWzBdICYmIHBlcmNlbnRhZ2UgPD0gcG9zaXRpb25QZXJjZW50YWdlc1sxXSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9hZGRDbGFzcyh0aGlzLnRpY2tzW2ldLCAnaW4tc2VsZWN0aW9uJyk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmICh0aGlzLnRpY2tMYWJlbHNbaV0pIHtcblx0XHRcdFx0XHRcdFx0dGhpcy50aWNrTGFiZWxzW2ldLnN0eWxlW3N0eWxlU2l6ZV0gPSBsYWJlbFNpemUgKyBcInB4XCI7XG5cblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5vcmllbnRhdGlvbiAhPT0gJ3ZlcnRpY2FsJyAmJiB0aGlzLm9wdGlvbnMudGlja3NfcG9zaXRpb25zW2ldICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnRpY2tMYWJlbHNbaV0uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMudGlja0xhYmVsc1tpXS5zdHlsZVt0aGlzLnN0eWxlUG9zXSA9IHBlcmNlbnRhZ2UgKyBcIiVcIjtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnRpY2tMYWJlbHNbaV0uc3R5bGVbc3R5bGVNYXJnaW5dID0gLWxhYmVsU2l6ZSAvIDIgKyAncHgnO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuXHRcdFx0XHRcdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMucnRsKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnRpY2tMYWJlbHNbaV0uc3R5bGVbJ21hcmdpblJpZ2h0J10gPSB0aGlzLnNsaWRlckVsZW0ub2Zmc2V0V2lkdGggKyBcInB4XCI7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMudGlja0xhYmVsc1tpXS5zdHlsZVsnbWFyZ2luTGVmdCddID0gdGhpcy5zbGlkZXJFbGVtLm9mZnNldFdpZHRoICsgXCJweFwiO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR0aGlzLnRpY2tMYWJlbENvbnRhaW5lci5zdHlsZVtzdHlsZU1hcmdpbl0gPSB0aGlzLnNsaWRlckVsZW0ub2Zmc2V0V2lkdGggLyAyICogLTEgKyAncHgnO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIGZvcm1hdHRlZFRvb2x0aXBWYWw7XG5cblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5yYW5nZSkge1xuXHRcdFx0XHRcdGZvcm1hdHRlZFRvb2x0aXBWYWwgPSB0aGlzLm9wdGlvbnMuZm9ybWF0dGVyKHRoaXMuX3N0YXRlLnZhbHVlKTtcblx0XHRcdFx0XHR0aGlzLl9zZXRUZXh0KHRoaXMudG9vbHRpcElubmVyLCBmb3JtYXR0ZWRUb29sdGlwVmFsKTtcblx0XHRcdFx0XHR0aGlzLnRvb2x0aXAuc3R5bGVbdGhpcy5zdHlsZVBvc10gPSAocG9zaXRpb25QZXJjZW50YWdlc1sxXSArIHBvc2l0aW9uUGVyY2VudGFnZXNbMF0pIC8gMiArIFwiJVwiO1xuXG5cdFx0XHRcdFx0dmFyIGlubmVyVG9vbHRpcE1pblRleHQgPSB0aGlzLm9wdGlvbnMuZm9ybWF0dGVyKHRoaXMuX3N0YXRlLnZhbHVlWzBdKTtcblx0XHRcdFx0XHR0aGlzLl9zZXRUZXh0KHRoaXMudG9vbHRpcElubmVyX21pbiwgaW5uZXJUb29sdGlwTWluVGV4dCk7XG5cblx0XHRcdFx0XHR2YXIgaW5uZXJUb29sdGlwTWF4VGV4dCA9IHRoaXMub3B0aW9ucy5mb3JtYXR0ZXIodGhpcy5fc3RhdGUudmFsdWVbMV0pO1xuXHRcdFx0XHRcdHRoaXMuX3NldFRleHQodGhpcy50b29sdGlwSW5uZXJfbWF4LCBpbm5lclRvb2x0aXBNYXhUZXh0KTtcblxuXHRcdFx0XHRcdHRoaXMudG9vbHRpcF9taW4uc3R5bGVbdGhpcy5zdHlsZVBvc10gPSBwb3NpdGlvblBlcmNlbnRhZ2VzWzBdICsgXCIlXCI7XG5cblx0XHRcdFx0XHR0aGlzLnRvb2x0aXBfbWF4LnN0eWxlW3RoaXMuc3R5bGVQb3NdID0gcG9zaXRpb25QZXJjZW50YWdlc1sxXSArIFwiJVwiO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZvcm1hdHRlZFRvb2x0aXBWYWwgPSB0aGlzLm9wdGlvbnMuZm9ybWF0dGVyKHRoaXMuX3N0YXRlLnZhbHVlWzBdKTtcblx0XHRcdFx0XHR0aGlzLl9zZXRUZXh0KHRoaXMudG9vbHRpcElubmVyLCBmb3JtYXR0ZWRUb29sdGlwVmFsKTtcblxuXHRcdFx0XHRcdHRoaXMudG9vbHRpcC5zdHlsZVt0aGlzLnN0eWxlUG9zXSA9IHBvc2l0aW9uUGVyY2VudGFnZXNbMF0gKyBcIiVcIjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcblx0XHRcdFx0XHR0aGlzLnRyYWNrTG93LnN0eWxlLnRvcCA9ICcwJztcblx0XHRcdFx0XHR0aGlzLnRyYWNrTG93LnN0eWxlLmhlaWdodCA9IE1hdGgubWluKHBvc2l0aW9uUGVyY2VudGFnZXNbMF0sIHBvc2l0aW9uUGVyY2VudGFnZXNbMV0pICsgJyUnO1xuXG5cdFx0XHRcdFx0dGhpcy50cmFja1NlbGVjdGlvbi5zdHlsZS50b3AgPSBNYXRoLm1pbihwb3NpdGlvblBlcmNlbnRhZ2VzWzBdLCBwb3NpdGlvblBlcmNlbnRhZ2VzWzFdKSArICclJztcblx0XHRcdFx0XHR0aGlzLnRyYWNrU2VsZWN0aW9uLnN0eWxlLmhlaWdodCA9IE1hdGguYWJzKHBvc2l0aW9uUGVyY2VudGFnZXNbMF0gLSBwb3NpdGlvblBlcmNlbnRhZ2VzWzFdKSArICclJztcblxuXHRcdFx0XHRcdHRoaXMudHJhY2tIaWdoLnN0eWxlLmJvdHRvbSA9ICcwJztcblx0XHRcdFx0XHR0aGlzLnRyYWNrSGlnaC5zdHlsZS5oZWlnaHQgPSAxMDAgLSBNYXRoLm1pbihwb3NpdGlvblBlcmNlbnRhZ2VzWzBdLCBwb3NpdGlvblBlcmNlbnRhZ2VzWzFdKSAtIE1hdGguYWJzKHBvc2l0aW9uUGVyY2VudGFnZXNbMF0gLSBwb3NpdGlvblBlcmNlbnRhZ2VzWzFdKSArICclJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAodGhpcy5zdHlsZVBvcyA9PT0gJ3JpZ2h0Jykge1xuXHRcdFx0XHRcdFx0dGhpcy50cmFja0xvdy5zdHlsZS5yaWdodCA9ICcwJztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy50cmFja0xvdy5zdHlsZS5sZWZ0ID0gJzAnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnRyYWNrTG93LnN0eWxlLndpZHRoID0gTWF0aC5taW4ocG9zaXRpb25QZXJjZW50YWdlc1swXSwgcG9zaXRpb25QZXJjZW50YWdlc1sxXSkgKyAnJSc7XG5cblx0XHRcdFx0XHRpZiAodGhpcy5zdHlsZVBvcyA9PT0gJ3JpZ2h0Jykge1xuXHRcdFx0XHRcdFx0dGhpcy50cmFja1NlbGVjdGlvbi5zdHlsZS5yaWdodCA9IE1hdGgubWluKHBvc2l0aW9uUGVyY2VudGFnZXNbMF0sIHBvc2l0aW9uUGVyY2VudGFnZXNbMV0pICsgJyUnO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRyYWNrU2VsZWN0aW9uLnN0eWxlLmxlZnQgPSBNYXRoLm1pbihwb3NpdGlvblBlcmNlbnRhZ2VzWzBdLCBwb3NpdGlvblBlcmNlbnRhZ2VzWzFdKSArICclJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy50cmFja1NlbGVjdGlvbi5zdHlsZS53aWR0aCA9IE1hdGguYWJzKHBvc2l0aW9uUGVyY2VudGFnZXNbMF0gLSBwb3NpdGlvblBlcmNlbnRhZ2VzWzFdKSArICclJztcblxuXHRcdFx0XHRcdGlmICh0aGlzLnN0eWxlUG9zID09PSAncmlnaHQnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRyYWNrSGlnaC5zdHlsZS5sZWZ0ID0gJzAnO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRyYWNrSGlnaC5zdHlsZS5yaWdodCA9ICcwJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy50cmFja0hpZ2guc3R5bGUud2lkdGggPSAxMDAgLSBNYXRoLm1pbihwb3NpdGlvblBlcmNlbnRhZ2VzWzBdLCBwb3NpdGlvblBlcmNlbnRhZ2VzWzFdKSAtIE1hdGguYWJzKHBvc2l0aW9uUGVyY2VudGFnZXNbMF0gLSBwb3NpdGlvblBlcmNlbnRhZ2VzWzFdKSArICclJztcblxuXHRcdFx0XHRcdHZhciBvZmZzZXRfbWluID0gdGhpcy50b29sdGlwX21pbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0XHR2YXIgb2Zmc2V0X21heCA9IHRoaXMudG9vbHRpcF9tYXguZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0XHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnRvb2x0aXBfcG9zaXRpb24gPT09ICdib3R0b20nKSB7XG5cdFx0XHRcdFx0XHRpZiAob2Zmc2V0X21pbi5yaWdodCA+IG9mZnNldF9tYXgubGVmdCkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyh0aGlzLnRvb2x0aXBfbWF4LCAnYm90dG9tJyk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX2FkZENsYXNzKHRoaXMudG9vbHRpcF9tYXgsICd0b3AnKTtcblx0XHRcdFx0XHRcdFx0dGhpcy50b29sdGlwX21heC5zdHlsZS50b3AgPSAnJztcblx0XHRcdFx0XHRcdFx0dGhpcy50b29sdGlwX21heC5zdHlsZS5ib3R0b20gPSAyMiArICdweCc7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyh0aGlzLnRvb2x0aXBfbWF4LCAndG9wJyk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX2FkZENsYXNzKHRoaXMudG9vbHRpcF9tYXgsICdib3R0b20nKTtcblx0XHRcdFx0XHRcdFx0dGhpcy50b29sdGlwX21heC5zdHlsZS50b3AgPSB0aGlzLnRvb2x0aXBfbWluLnN0eWxlLnRvcDtcblx0XHRcdFx0XHRcdFx0dGhpcy50b29sdGlwX21heC5zdHlsZS5ib3R0b20gPSAnJztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKG9mZnNldF9taW4ucmlnaHQgPiBvZmZzZXRfbWF4LmxlZnQpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3ModGhpcy50b29sdGlwX21heCwgJ3RvcCcpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9hZGRDbGFzcyh0aGlzLnRvb2x0aXBfbWF4LCAnYm90dG9tJyk7XG5cdFx0XHRcdFx0XHRcdHRoaXMudG9vbHRpcF9tYXguc3R5bGUudG9wID0gMTggKyAncHgnO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3ModGhpcy50b29sdGlwX21heCwgJ2JvdHRvbScpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9hZGRDbGFzcyh0aGlzLnRvb2x0aXBfbWF4LCAndG9wJyk7XG5cdFx0XHRcdFx0XHRcdHRoaXMudG9vbHRpcF9tYXguc3R5bGUudG9wID0gdGhpcy50b29sdGlwX21pbi5zdHlsZS50b3A7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0X2NyZWF0ZUhpZ2hsaWdodFJhbmdlOiBmdW5jdGlvbiBfY3JlYXRlSGlnaGxpZ2h0UmFuZ2Uoc3RhcnQsIGVuZCkge1xuXHRcdFx0XHRpZiAodGhpcy5faXNIaWdobGlnaHRSYW5nZShzdGFydCwgZW5kKSkge1xuXHRcdFx0XHRcdGlmIChzdGFydCA+IGVuZCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHsgJ3N0YXJ0JzogZW5kLCAnc2l6ZSc6IHN0YXJ0IC0gZW5kIH07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB7ICdzdGFydCc6IHN0YXJ0LCAnc2l6ZSc6IGVuZCAtIHN0YXJ0IH07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdFx0X2lzSGlnaGxpZ2h0UmFuZ2U6IGZ1bmN0aW9uIF9pc0hpZ2hsaWdodFJhbmdlKHN0YXJ0LCBlbmQpIHtcblx0XHRcdFx0aWYgKDAgPD0gc3RhcnQgJiYgc3RhcnQgPD0gMTAwICYmIDAgPD0gZW5kICYmIGVuZCA8PSAxMDApIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRfcmVzaXplOiBmdW5jdGlvbiBfcmVzaXplKGV2KSB7XG5cdFx0XHRcdC8qanNoaW50IHVudXNlZDpmYWxzZSovXG5cdFx0XHRcdHRoaXMuX3N0YXRlLm9mZnNldCA9IHRoaXMuX29mZnNldCh0aGlzLnNsaWRlckVsZW0pO1xuXHRcdFx0XHR0aGlzLl9zdGF0ZS5zaXplID0gdGhpcy5zbGlkZXJFbGVtW3RoaXMuc2l6ZVBvc107XG5cdFx0XHRcdHRoaXMuX2xheW91dCgpO1xuXHRcdFx0fSxcblx0XHRcdF9yZW1vdmVQcm9wZXJ0eTogZnVuY3Rpb24gX3JlbW92ZVByb3BlcnR5KGVsZW1lbnQsIHByb3ApIHtcblx0XHRcdFx0aWYgKGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkpIHtcblx0XHRcdFx0XHRlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KHByb3ApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVsZW1lbnQuc3R5bGUucmVtb3ZlQXR0cmlidXRlKHByb3ApO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0X21vdXNlZG93bjogZnVuY3Rpb24gX21vdXNlZG93bihldikge1xuXHRcdFx0XHRpZiAoIXRoaXMuX3N0YXRlLmVuYWJsZWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLl9zdGF0ZS5vZmZzZXQgPSB0aGlzLl9vZmZzZXQodGhpcy5zbGlkZXJFbGVtKTtcblx0XHRcdFx0dGhpcy5fc3RhdGUuc2l6ZSA9IHRoaXMuc2xpZGVyRWxlbVt0aGlzLnNpemVQb3NdO1xuXG5cdFx0XHRcdHZhciBwZXJjZW50YWdlID0gdGhpcy5fZ2V0UGVyY2VudGFnZShldik7XG5cblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5yYW5nZSkge1xuXHRcdFx0XHRcdHZhciBkaWZmMSA9IE1hdGguYWJzKHRoaXMuX3N0YXRlLnBlcmNlbnRhZ2VbMF0gLSBwZXJjZW50YWdlKTtcblx0XHRcdFx0XHR2YXIgZGlmZjIgPSBNYXRoLmFicyh0aGlzLl9zdGF0ZS5wZXJjZW50YWdlWzFdIC0gcGVyY2VudGFnZSk7XG5cdFx0XHRcdFx0dGhpcy5fc3RhdGUuZHJhZ2dlZCA9IGRpZmYxIDwgZGlmZjIgPyAwIDogMTtcblx0XHRcdFx0XHR0aGlzLl9hZGp1c3RQZXJjZW50YWdlRm9yUmFuZ2VTbGlkZXJzKHBlcmNlbnRhZ2UpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3N0YXRlLmRyYWdnZWQgPSAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5fc3RhdGUucGVyY2VudGFnZVt0aGlzLl9zdGF0ZS5kcmFnZ2VkXSA9IHBlcmNlbnRhZ2U7XG5cdFx0XHRcdHRoaXMuX2xheW91dCgpO1xuXG5cdFx0XHRcdGlmICh0aGlzLnRvdWNoQ2FwYWJsZSkge1xuXHRcdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5tb3VzZW1vdmUsIGZhbHNlKTtcblx0XHRcdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy5tb3VzZXVwLCBmYWxzZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodGhpcy5tb3VzZW1vdmUpIHtcblx0XHRcdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMubW91c2Vtb3ZlLCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMubW91c2V1cCkge1xuXHRcdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMubW91c2V1cCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5tb3VzZW1vdmUgPSB0aGlzLl9tb3VzZW1vdmUuYmluZCh0aGlzKTtcblx0XHRcdFx0dGhpcy5tb3VzZXVwID0gdGhpcy5fbW91c2V1cC5iaW5kKHRoaXMpO1xuXG5cdFx0XHRcdGlmICh0aGlzLnRvdWNoQ2FwYWJsZSkge1xuXHRcdFx0XHRcdC8vIFRvdWNoOiBCaW5kIHRvdWNoIGV2ZW50czpcblx0XHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMubW91c2Vtb3ZlLCBmYWxzZSk7XG5cdFx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMubW91c2V1cCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEJpbmQgbW91c2UgZXZlbnRzOlxuXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMubW91c2Vtb3ZlLCBmYWxzZSk7XG5cdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMubW91c2V1cCwgZmFsc2UpO1xuXG5cdFx0XHRcdHRoaXMuX3N0YXRlLmluRHJhZyA9IHRydWU7XG5cdFx0XHRcdHZhciBuZXdWYWx1ZSA9IHRoaXMuX2NhbGN1bGF0ZVZhbHVlKCk7XG5cblx0XHRcdFx0dGhpcy5fdHJpZ2dlcignc2xpZGVTdGFydCcsIG5ld1ZhbHVlKTtcblxuXHRcdFx0XHR0aGlzLl9zZXREYXRhVmFsKG5ld1ZhbHVlKTtcblx0XHRcdFx0dGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSwgZmFsc2UsIHRydWUpO1xuXG5cdFx0XHRcdGV2LnJldHVyblZhbHVlID0gZmFsc2U7XG5cblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5mb2N1cykge1xuXHRcdFx0XHRcdHRoaXMuX3RyaWdnZXJGb2N1c09uSGFuZGxlKHRoaXMuX3N0YXRlLmRyYWdnZWQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9LFxuXHRcdFx0X3RvdWNoc3RhcnQ6IGZ1bmN0aW9uIF90b3VjaHN0YXJ0KGV2KSB7XG5cdFx0XHRcdGlmIChldi5jaGFuZ2VkVG91Y2hlcyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0dGhpcy5fbW91c2Vkb3duKGV2KTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgdG91Y2ggPSBldi5jaGFuZ2VkVG91Y2hlc1swXTtcblx0XHRcdFx0dGhpcy50b3VjaFggPSB0b3VjaC5wYWdlWDtcblx0XHRcdFx0dGhpcy50b3VjaFkgPSB0b3VjaC5wYWdlWTtcblx0XHRcdH0sXG5cdFx0XHRfdHJpZ2dlckZvY3VzT25IYW5kbGU6IGZ1bmN0aW9uIF90cmlnZ2VyRm9jdXNPbkhhbmRsZShoYW5kbGVJZHgpIHtcblx0XHRcdFx0aWYgKGhhbmRsZUlkeCA9PT0gMCkge1xuXHRcdFx0XHRcdHRoaXMuaGFuZGxlMS5mb2N1cygpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChoYW5kbGVJZHggPT09IDEpIHtcblx0XHRcdFx0XHR0aGlzLmhhbmRsZTIuZm9jdXMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdF9rZXlkb3duOiBmdW5jdGlvbiBfa2V5ZG93bihoYW5kbGVJZHgsIGV2KSB7XG5cdFx0XHRcdGlmICghdGhpcy5fc3RhdGUuZW5hYmxlZCkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBkaXI7XG5cdFx0XHRcdHN3aXRjaCAoZXYua2V5Q29kZSkge1xuXHRcdFx0XHRcdGNhc2UgMzc6IC8vIGxlZnRcblx0XHRcdFx0XHRjYXNlIDQwOlxuXHRcdFx0XHRcdFx0Ly8gZG93blxuXHRcdFx0XHRcdFx0ZGlyID0gLTE7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIDM5OiAvLyByaWdodFxuXHRcdFx0XHRcdGNhc2UgMzg6XG5cdFx0XHRcdFx0XHQvLyB1cFxuXHRcdFx0XHRcdFx0ZGlyID0gMTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghZGlyKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gdXNlIG5hdHVyYWwgYXJyb3cga2V5cyBpbnN0ZWFkIG9mIGZyb20gbWluIHRvIG1heFxuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLm5hdHVyYWxfYXJyb3dfa2V5cykge1xuXHRcdFx0XHRcdHZhciBpZlZlcnRpY2FsQW5kTm90UmV2ZXJzZWQgPSB0aGlzLm9wdGlvbnMub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcgJiYgIXRoaXMub3B0aW9ucy5yZXZlcnNlZDtcblx0XHRcdFx0XHR2YXIgaWZIb3Jpem9udGFsQW5kUmV2ZXJzZWQgPSB0aGlzLm9wdGlvbnMub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyAmJiB0aGlzLm9wdGlvbnMucmV2ZXJzZWQ7IC8vIEB0b2RvIGNvbnRyb2wgd2l0aCBydGxcblxuXHRcdFx0XHRcdGlmIChpZlZlcnRpY2FsQW5kTm90UmV2ZXJzZWQgfHwgaWZIb3Jpem9udGFsQW5kUmV2ZXJzZWQpIHtcblx0XHRcdFx0XHRcdGRpciA9IC1kaXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIHZhbCA9IHRoaXMuX3N0YXRlLnZhbHVlW2hhbmRsZUlkeF0gKyBkaXIgKiB0aGlzLm9wdGlvbnMuc3RlcDtcblx0XHRcdFx0dmFyIHBlcmNlbnRhZ2UgPSB2YWwgLyB0aGlzLm9wdGlvbnMubWF4ICogMTAwO1xuXHRcdFx0XHR0aGlzLl9zdGF0ZS5rZXlDdHJsID0gaGFuZGxlSWR4O1xuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLnJhbmdlKSB7XG5cdFx0XHRcdFx0dGhpcy5fYWRqdXN0UGVyY2VudGFnZUZvclJhbmdlU2xpZGVycyhwZXJjZW50YWdlKTtcblx0XHRcdFx0XHR2YXIgdmFsMSA9ICF0aGlzLl9zdGF0ZS5rZXlDdHJsID8gdmFsIDogdGhpcy5fc3RhdGUudmFsdWVbMF07XG5cdFx0XHRcdFx0dmFyIHZhbDIgPSB0aGlzLl9zdGF0ZS5rZXlDdHJsID8gdmFsIDogdGhpcy5fc3RhdGUudmFsdWVbMV07XG5cdFx0XHRcdFx0dmFsID0gW3ZhbDEsIHZhbDJdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5fdHJpZ2dlcignc2xpZGVTdGFydCcsIHZhbCk7XG5cdFx0XHRcdHRoaXMuX3NldERhdGFWYWwodmFsKTtcblx0XHRcdFx0dGhpcy5zZXRWYWx1ZSh2YWwsIHRydWUsIHRydWUpO1xuXG5cdFx0XHRcdHRoaXMuX3NldERhdGFWYWwodmFsKTtcblx0XHRcdFx0dGhpcy5fdHJpZ2dlcignc2xpZGVTdG9wJywgdmFsKTtcblx0XHRcdFx0dGhpcy5fbGF5b3V0KCk7XG5cblx0XHRcdFx0dGhpcy5fcGF1c2VFdmVudChldik7XG5cdFx0XHRcdGRlbGV0ZSB0aGlzLl9zdGF0ZS5rZXlDdHJsO1xuXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0sXG5cdFx0XHRfcGF1c2VFdmVudDogZnVuY3Rpb24gX3BhdXNlRXZlbnQoZXYpIHtcblx0XHRcdFx0aWYgKGV2LnN0b3BQcm9wYWdhdGlvbikge1xuXHRcdFx0XHRcdGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChldi5wcmV2ZW50RGVmYXVsdCkge1xuXHRcdFx0XHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZXYuY2FuY2VsQnViYmxlID0gdHJ1ZTtcblx0XHRcdFx0ZXYucmV0dXJuVmFsdWUgPSBmYWxzZTtcblx0XHRcdH0sXG5cdFx0XHRfbW91c2Vtb3ZlOiBmdW5jdGlvbiBfbW91c2Vtb3ZlKGV2KSB7XG5cdFx0XHRcdGlmICghdGhpcy5fc3RhdGUuZW5hYmxlZCkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBwZXJjZW50YWdlID0gdGhpcy5fZ2V0UGVyY2VudGFnZShldik7XG5cdFx0XHRcdHRoaXMuX2FkanVzdFBlcmNlbnRhZ2VGb3JSYW5nZVNsaWRlcnMocGVyY2VudGFnZSk7XG5cdFx0XHRcdHRoaXMuX3N0YXRlLnBlcmNlbnRhZ2VbdGhpcy5fc3RhdGUuZHJhZ2dlZF0gPSBwZXJjZW50YWdlO1xuXHRcdFx0XHR0aGlzLl9sYXlvdXQoKTtcblxuXHRcdFx0XHR2YXIgdmFsID0gdGhpcy5fY2FsY3VsYXRlVmFsdWUodHJ1ZSk7XG5cdFx0XHRcdHRoaXMuc2V0VmFsdWUodmFsLCB0cnVlLCB0cnVlKTtcblxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9LFxuXHRcdFx0X3RvdWNobW92ZTogZnVuY3Rpb24gX3RvdWNobW92ZShldikge1xuXHRcdFx0XHRpZiAoZXYuY2hhbmdlZFRvdWNoZXMgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciB0b3VjaCA9IGV2LmNoYW5nZWRUb3VjaGVzWzBdO1xuXG5cdFx0XHRcdHZhciB4RGlmZiA9IHRvdWNoLnBhZ2VYIC0gdGhpcy50b3VjaFg7XG5cdFx0XHRcdHZhciB5RGlmZiA9IHRvdWNoLnBhZ2VZIC0gdGhpcy50b3VjaFk7XG5cblx0XHRcdFx0aWYgKCF0aGlzLl9zdGF0ZS5pbkRyYWcpIHtcblx0XHRcdFx0XHQvLyBWZXJ0aWNhbCBTbGlkZXJcblx0XHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnICYmIHhEaWZmIDw9IDUgJiYgeERpZmYgPj0gLTUgJiYgKHlEaWZmID49IDE1IHx8IHlEaWZmIDw9IC0xNSkpIHtcblx0XHRcdFx0XHRcdHRoaXMuX21vdXNlZG93bihldik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIEhvcml6b250YWwgc2xpZGVyLlxuXHRcdFx0XHRcdGVsc2UgaWYgKHlEaWZmIDw9IDUgJiYgeURpZmYgPj0gLTUgJiYgKHhEaWZmID49IDE1IHx8IHhEaWZmIDw9IC0xNSkpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5fbW91c2Vkb3duKGV2KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdF9hZGp1c3RQZXJjZW50YWdlRm9yUmFuZ2VTbGlkZXJzOiBmdW5jdGlvbiBfYWRqdXN0UGVyY2VudGFnZUZvclJhbmdlU2xpZGVycyhwZXJjZW50YWdlKSB7XG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMucmFuZ2UpIHtcblx0XHRcdFx0XHR2YXIgcHJlY2lzaW9uID0gdGhpcy5fZ2V0TnVtRGlnaXRzQWZ0ZXJEZWNpbWFsUGxhY2UocGVyY2VudGFnZSk7XG5cdFx0XHRcdFx0cHJlY2lzaW9uID0gcHJlY2lzaW9uID8gcHJlY2lzaW9uIC0gMSA6IDA7XG5cdFx0XHRcdFx0dmFyIHBlcmNlbnRhZ2VXaXRoQWRqdXN0ZWRQcmVjaXNpb24gPSB0aGlzLl9hcHBseVRvRml4ZWRBbmRQYXJzZUZsb2F0KHBlcmNlbnRhZ2UsIHByZWNpc2lvbik7XG5cdFx0XHRcdFx0aWYgKHRoaXMuX3N0YXRlLmRyYWdnZWQgPT09IDAgJiYgdGhpcy5fYXBwbHlUb0ZpeGVkQW5kUGFyc2VGbG9hdCh0aGlzLl9zdGF0ZS5wZXJjZW50YWdlWzFdLCBwcmVjaXNpb24pIDwgcGVyY2VudGFnZVdpdGhBZGp1c3RlZFByZWNpc2lvbikge1xuXHRcdFx0XHRcdFx0dGhpcy5fc3RhdGUucGVyY2VudGFnZVswXSA9IHRoaXMuX3N0YXRlLnBlcmNlbnRhZ2VbMV07XG5cdFx0XHRcdFx0XHR0aGlzLl9zdGF0ZS5kcmFnZ2VkID0gMTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuX3N0YXRlLmRyYWdnZWQgPT09IDEgJiYgdGhpcy5fYXBwbHlUb0ZpeGVkQW5kUGFyc2VGbG9hdCh0aGlzLl9zdGF0ZS5wZXJjZW50YWdlWzBdLCBwcmVjaXNpb24pID4gcGVyY2VudGFnZVdpdGhBZGp1c3RlZFByZWNpc2lvbikge1xuXHRcdFx0XHRcdFx0dGhpcy5fc3RhdGUucGVyY2VudGFnZVsxXSA9IHRoaXMuX3N0YXRlLnBlcmNlbnRhZ2VbMF07XG5cdFx0XHRcdFx0XHR0aGlzLl9zdGF0ZS5kcmFnZ2VkID0gMDtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuX3N0YXRlLmtleUN0cmwgPT09IDAgJiYgdGhpcy5fc3RhdGUudmFsdWVbMV0gLyB0aGlzLm9wdGlvbnMubWF4ICogMTAwIDwgcGVyY2VudGFnZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5fc3RhdGUucGVyY2VudGFnZVswXSA9IHRoaXMuX3N0YXRlLnBlcmNlbnRhZ2VbMV07XG5cdFx0XHRcdFx0XHR0aGlzLl9zdGF0ZS5rZXlDdHJsID0gMTtcblx0XHRcdFx0XHRcdHRoaXMuaGFuZGxlMi5mb2N1cygpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5fc3RhdGUua2V5Q3RybCA9PT0gMSAmJiB0aGlzLl9zdGF0ZS52YWx1ZVswXSAvIHRoaXMub3B0aW9ucy5tYXggKiAxMDAgPiBwZXJjZW50YWdlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9zdGF0ZS5wZXJjZW50YWdlWzFdID0gdGhpcy5fc3RhdGUucGVyY2VudGFnZVswXTtcblx0XHRcdFx0XHRcdHRoaXMuX3N0YXRlLmtleUN0cmwgPSAwO1xuXHRcdFx0XHRcdFx0dGhpcy5oYW5kbGUxLmZvY3VzKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0X21vdXNldXA6IGZ1bmN0aW9uIF9tb3VzZXVwKCkge1xuXHRcdFx0XHRpZiAoIXRoaXMuX3N0YXRlLmVuYWJsZWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMudG91Y2hDYXBhYmxlKSB7XG5cdFx0XHRcdFx0Ly8gVG91Y2g6IFVuYmluZCB0b3VjaCBldmVudCBoYW5kbGVyczpcblx0XHRcdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMubW91c2Vtb3ZlLCBmYWxzZSk7XG5cdFx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMubW91c2V1cCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIFVuYmluZCBtb3VzZSBldmVudCBoYW5kbGVyczpcblx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm1vdXNlbW92ZSwgZmFsc2UpO1xuXHRcdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLm1vdXNldXAsIGZhbHNlKTtcblxuXHRcdFx0XHR0aGlzLl9zdGF0ZS5pbkRyYWcgPSBmYWxzZTtcblx0XHRcdFx0aWYgKHRoaXMuX3N0YXRlLm92ZXIgPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0dGhpcy5faGlkZVRvb2x0aXAoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgdmFsID0gdGhpcy5fY2FsY3VsYXRlVmFsdWUodHJ1ZSk7XG5cblx0XHRcdFx0dGhpcy5fbGF5b3V0KCk7XG5cdFx0XHRcdHRoaXMuX3NldERhdGFWYWwodmFsKTtcblx0XHRcdFx0dGhpcy5fdHJpZ2dlcignc2xpZGVTdG9wJywgdmFsKTtcblxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9LFxuXHRcdFx0X2NhbGN1bGF0ZVZhbHVlOiBmdW5jdGlvbiBfY2FsY3VsYXRlVmFsdWUoc25hcFRvQ2xvc2VzdFRpY2spIHtcblx0XHRcdFx0dmFyIHZhbDtcblx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy5yYW5nZSkge1xuXHRcdFx0XHRcdHZhbCA9IFt0aGlzLm9wdGlvbnMubWluLCB0aGlzLm9wdGlvbnMubWF4XTtcblx0XHRcdFx0XHRpZiAodGhpcy5fc3RhdGUucGVyY2VudGFnZVswXSAhPT0gMCkge1xuXHRcdFx0XHRcdFx0dmFsWzBdID0gdGhpcy5fdG9WYWx1ZSh0aGlzLl9zdGF0ZS5wZXJjZW50YWdlWzBdKTtcblx0XHRcdFx0XHRcdHZhbFswXSA9IHRoaXMuX2FwcGx5UHJlY2lzaW9uKHZhbFswXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0aGlzLl9zdGF0ZS5wZXJjZW50YWdlWzFdICE9PSAxMDApIHtcblx0XHRcdFx0XHRcdHZhbFsxXSA9IHRoaXMuX3RvVmFsdWUodGhpcy5fc3RhdGUucGVyY2VudGFnZVsxXSk7XG5cdFx0XHRcdFx0XHR2YWxbMV0gPSB0aGlzLl9hcHBseVByZWNpc2lvbih2YWxbMV0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YWwgPSB0aGlzLl90b1ZhbHVlKHRoaXMuX3N0YXRlLnBlcmNlbnRhZ2VbMF0pO1xuXHRcdFx0XHRcdHZhbCA9IHBhcnNlRmxvYXQodmFsKTtcblx0XHRcdFx0XHR2YWwgPSB0aGlzLl9hcHBseVByZWNpc2lvbih2YWwpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHNuYXBUb0Nsb3Nlc3RUaWNrKSB7XG5cdFx0XHRcdFx0dmFyIG1pbiA9IFt2YWwsIEluZmluaXR5XTtcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3B0aW9ucy50aWNrcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0dmFyIGRpZmYgPSBNYXRoLmFicyh0aGlzLm9wdGlvbnMudGlja3NbaV0gLSB2YWwpO1xuXHRcdFx0XHRcdFx0aWYgKGRpZmYgPD0gbWluWzFdKSB7XG5cdFx0XHRcdFx0XHRcdG1pbiA9IFt0aGlzLm9wdGlvbnMudGlja3NbaV0sIGRpZmZdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAobWluWzFdIDw9IHRoaXMub3B0aW9ucy50aWNrc19zbmFwX2JvdW5kcykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG1pblswXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gdmFsO1xuXHRcdFx0fSxcblx0XHRcdF9hcHBseVByZWNpc2lvbjogZnVuY3Rpb24gX2FwcGx5UHJlY2lzaW9uKHZhbCkge1xuXHRcdFx0XHR2YXIgcHJlY2lzaW9uID0gdGhpcy5vcHRpb25zLnByZWNpc2lvbiB8fCB0aGlzLl9nZXROdW1EaWdpdHNBZnRlckRlY2ltYWxQbGFjZSh0aGlzLm9wdGlvbnMuc3RlcCk7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9hcHBseVRvRml4ZWRBbmRQYXJzZUZsb2F0KHZhbCwgcHJlY2lzaW9uKTtcblx0XHRcdH0sXG5cdFx0XHRfZ2V0TnVtRGlnaXRzQWZ0ZXJEZWNpbWFsUGxhY2U6IGZ1bmN0aW9uIF9nZXROdW1EaWdpdHNBZnRlckRlY2ltYWxQbGFjZShudW0pIHtcblx0XHRcdFx0dmFyIG1hdGNoID0gKCcnICsgbnVtKS5tYXRjaCgvKD86XFwuKFxcZCspKT8oPzpbZUVdKFsrLV0/XFxkKykpPyQvKTtcblx0XHRcdFx0aWYgKCFtYXRjaCkge1xuXHRcdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBNYXRoLm1heCgwLCAobWF0Y2hbMV0gPyBtYXRjaFsxXS5sZW5ndGggOiAwKSAtIChtYXRjaFsyXSA/ICttYXRjaFsyXSA6IDApKTtcblx0XHRcdH0sXG5cdFx0XHRfYXBwbHlUb0ZpeGVkQW5kUGFyc2VGbG9hdDogZnVuY3Rpb24gX2FwcGx5VG9GaXhlZEFuZFBhcnNlRmxvYXQobnVtLCB0b0ZpeGVkSW5wdXQpIHtcblx0XHRcdFx0dmFyIHRydW5jYXRlZE51bSA9IG51bS50b0ZpeGVkKHRvRml4ZWRJbnB1dCk7XG5cdFx0XHRcdHJldHVybiBwYXJzZUZsb2F0KHRydW5jYXRlZE51bSk7XG5cdFx0XHR9LFxuXHRcdFx0LypcbiAgIFx0Q3JlZGl0cyB0byBNaWtlIFNhbXVlbCBmb3IgdGhlIGZvbGxvd2luZyBtZXRob2QhXG4gICBcdFNvdXJjZTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDQ1NDUxOC9qYXZhc2NyaXB0LWhvdy10by1yZXRyaWV2ZS10aGUtbnVtYmVyLW9mLWRlY2ltYWxzLW9mLWEtc3RyaW5nLW51bWJlclxuICAgKi9cblx0XHRcdF9nZXRQZXJjZW50YWdlOiBmdW5jdGlvbiBfZ2V0UGVyY2VudGFnZShldikge1xuXHRcdFx0XHRpZiAodGhpcy50b3VjaENhcGFibGUgJiYgKGV2LnR5cGUgPT09ICd0b3VjaHN0YXJ0JyB8fCBldi50eXBlID09PSAndG91Y2htb3ZlJykpIHtcblx0XHRcdFx0XHRldiA9IGV2LnRvdWNoZXNbMF07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgZXZlbnRQb3NpdGlvbiA9IGV2W3RoaXMubW91c2VQb3NdO1xuXHRcdFx0XHR2YXIgc2xpZGVyT2Zmc2V0ID0gdGhpcy5fc3RhdGUub2Zmc2V0W3RoaXMuc3R5bGVQb3NdO1xuXHRcdFx0XHR2YXIgZGlzdGFuY2VUb1NsaWRlID0gZXZlbnRQb3NpdGlvbiAtIHNsaWRlck9mZnNldDtcblx0XHRcdFx0aWYgKHRoaXMuc3R5bGVQb3MgPT09ICdyaWdodCcpIHtcblx0XHRcdFx0XHRkaXN0YW5jZVRvU2xpZGUgPSAtZGlzdGFuY2VUb1NsaWRlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIENhbGN1bGF0ZSB3aGF0IHBlcmNlbnQgb2YgdGhlIGxlbmd0aCB0aGUgc2xpZGVyIGhhbmRsZSBoYXMgc2xpZFxuXHRcdFx0XHR2YXIgcGVyY2VudGFnZSA9IGRpc3RhbmNlVG9TbGlkZSAvIHRoaXMuX3N0YXRlLnNpemUgKiAxMDA7XG5cdFx0XHRcdHBlcmNlbnRhZ2UgPSBNYXRoLnJvdW5kKHBlcmNlbnRhZ2UgLyB0aGlzLl9zdGF0ZS5wZXJjZW50YWdlWzJdKSAqIHRoaXMuX3N0YXRlLnBlcmNlbnRhZ2VbMl07XG5cdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMucmV2ZXJzZWQpIHtcblx0XHRcdFx0XHRwZXJjZW50YWdlID0gMTAwIC0gcGVyY2VudGFnZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIE1ha2Ugc3VyZSB0aGUgcGVyY2VudCBpcyB3aXRoaW4gdGhlIGJvdW5kcyBvZiB0aGUgc2xpZGVyLlxuXHRcdFx0XHQvLyAwJSBjb3JyZXNwb25kcyB0byB0aGUgJ21pbicgdmFsdWUgb2YgdGhlIHNsaWRlXG5cdFx0XHRcdC8vIDEwMCUgY29ycmVzcG9uZHMgdG8gdGhlICdtYXgnIHZhbHVlIG9mIHRoZSBzbGlkZVxuXHRcdFx0XHRyZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMTAwLCBwZXJjZW50YWdlKSk7XG5cdFx0XHR9LFxuXHRcdFx0X3ZhbGlkYXRlSW5wdXRWYWx1ZTogZnVuY3Rpb24gX3ZhbGlkYXRlSW5wdXRWYWx1ZSh2YWwpIHtcblx0XHRcdFx0aWYgKCFpc05hTigrdmFsKSkge1xuXHRcdFx0XHRcdHJldHVybiArdmFsO1xuXHRcdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuXHRcdFx0XHRcdHRoaXMuX3ZhbGlkYXRlQXJyYXkodmFsKTtcblx0XHRcdFx0XHRyZXR1cm4gdmFsO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihFcnJvck1zZ3MuZm9ybWF0SW52YWxpZElucHV0RXJyb3JNc2codmFsKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRfdmFsaWRhdGVBcnJheTogZnVuY3Rpb24gX3ZhbGlkYXRlQXJyYXkodmFsKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0dmFyIGlucHV0ID0gdmFsW2ldO1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgaW5wdXQgIT09ICdudW1iZXInKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoRXJyb3JNc2dzLmZvcm1hdEludmFsaWRJbnB1dEVycm9yTXNnKGlucHV0KSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0X3NldERhdGFWYWw6IGZ1bmN0aW9uIF9zZXREYXRhVmFsKHZhbCkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJywgdmFsKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWwpO1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQudmFsdWUgPSB2YWw7XG5cdFx0XHR9LFxuXHRcdFx0X3RyaWdnZXI6IGZ1bmN0aW9uIF90cmlnZ2VyKGV2dCwgdmFsKSB7XG5cdFx0XHRcdHZhbCA9IHZhbCB8fCB2YWwgPT09IDAgPyB2YWwgOiB1bmRlZmluZWQ7XG5cblx0XHRcdFx0dmFyIGNhbGxiYWNrRm5BcnJheSA9IHRoaXMuZXZlbnRUb0NhbGxiYWNrTWFwW2V2dF07XG5cdFx0XHRcdGlmIChjYWxsYmFja0ZuQXJyYXkgJiYgY2FsbGJhY2tGbkFycmF5Lmxlbmd0aCkge1xuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tGbkFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tGbiA9IGNhbGxiYWNrRm5BcnJheVtpXTtcblx0XHRcdFx0XHRcdGNhbGxiYWNrRm4odmFsKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvKiBJZiBKUXVlcnkgZXhpc3RzLCB0cmlnZ2VyIEpRdWVyeSBldmVudHMgKi9cblx0XHRcdFx0aWYgKCQpIHtcblx0XHRcdFx0XHR0aGlzLl90cmlnZ2VySlF1ZXJ5RXZlbnQoZXZ0LCB2YWwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0X3RyaWdnZXJKUXVlcnlFdmVudDogZnVuY3Rpb24gX3RyaWdnZXJKUXVlcnlFdmVudChldnQsIHZhbCkge1xuXHRcdFx0XHR2YXIgZXZlbnREYXRhID0ge1xuXHRcdFx0XHRcdHR5cGU6IGV2dCxcblx0XHRcdFx0XHR2YWx1ZTogdmFsXG5cdFx0XHRcdH07XG5cdFx0XHRcdHRoaXMuJGVsZW1lbnQudHJpZ2dlcihldmVudERhdGEpO1xuXHRcdFx0XHR0aGlzLiRzbGlkZXJFbGVtLnRyaWdnZXIoZXZlbnREYXRhKTtcblx0XHRcdH0sXG5cdFx0XHRfdW5iaW5kSlF1ZXJ5RXZlbnRIYW5kbGVyczogZnVuY3Rpb24gX3VuYmluZEpRdWVyeUV2ZW50SGFuZGxlcnMoKSB7XG5cdFx0XHRcdHRoaXMuJGVsZW1lbnQub2ZmKCk7XG5cdFx0XHRcdHRoaXMuJHNsaWRlckVsZW0ub2ZmKCk7XG5cdFx0XHR9LFxuXHRcdFx0X3NldFRleHQ6IGZ1bmN0aW9uIF9zZXRUZXh0KGVsZW1lbnQsIHRleHQpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiBlbGVtZW50LnRleHRDb250ZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdFx0ZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG5cdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQuaW5uZXJUZXh0ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5pbm5lclRleHQgPSB0ZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0X3JlbW92ZUNsYXNzOiBmdW5jdGlvbiBfcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NTdHJpbmcpIHtcblx0XHRcdFx0dmFyIGNsYXNzZXMgPSBjbGFzc1N0cmluZy5zcGxpdChcIiBcIik7XG5cdFx0XHRcdHZhciBuZXdDbGFzc2VzID0gZWxlbWVudC5jbGFzc05hbWU7XG5cblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0dmFyIGNsYXNzVGFnID0gY2xhc3Nlc1tpXTtcblx0XHRcdFx0XHR2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiKD86XFxcXHN8XilcIiArIGNsYXNzVGFnICsgXCIoPzpcXFxcc3wkKVwiKTtcblx0XHRcdFx0XHRuZXdDbGFzc2VzID0gbmV3Q2xhc3Nlcy5yZXBsYWNlKHJlZ2V4LCBcIiBcIik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRlbGVtZW50LmNsYXNzTmFtZSA9IG5ld0NsYXNzZXMudHJpbSgpO1xuXHRcdFx0fSxcblx0XHRcdF9hZGRDbGFzczogZnVuY3Rpb24gX2FkZENsYXNzKGVsZW1lbnQsIGNsYXNzU3RyaW5nKSB7XG5cdFx0XHRcdHZhciBjbGFzc2VzID0gY2xhc3NTdHJpbmcuc3BsaXQoXCIgXCIpO1xuXHRcdFx0XHR2YXIgbmV3Q2xhc3NlcyA9IGVsZW1lbnQuY2xhc3NOYW1lO1xuXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHZhciBjbGFzc1RhZyA9IGNsYXNzZXNbaV07XG5cdFx0XHRcdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIig/OlxcXFxzfF4pXCIgKyBjbGFzc1RhZyArIFwiKD86XFxcXHN8JClcIik7XG5cdFx0XHRcdFx0dmFyIGlmQ2xhc3NFeGlzdHMgPSByZWdleC50ZXN0KG5ld0NsYXNzZXMpO1xuXG5cdFx0XHRcdFx0aWYgKCFpZkNsYXNzRXhpc3RzKSB7XG5cdFx0XHRcdFx0XHRuZXdDbGFzc2VzICs9IFwiIFwiICsgY2xhc3NUYWc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZWxlbWVudC5jbGFzc05hbWUgPSBuZXdDbGFzc2VzLnRyaW0oKTtcblx0XHRcdH0sXG5cdFx0XHRfb2Zmc2V0TGVmdDogZnVuY3Rpb24gX29mZnNldExlZnQob2JqKSB7XG5cdFx0XHRcdHJldHVybiBvYmouZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcblx0XHRcdH0sXG5cdFx0XHRfb2Zmc2V0UmlnaHQ6IGZ1bmN0aW9uIF9vZmZzZXRSaWdodChvYmopIHtcblx0XHRcdFx0cmV0dXJuIG9iai5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5yaWdodDtcblx0XHRcdH0sXG5cdFx0XHRfb2Zmc2V0VG9wOiBmdW5jdGlvbiBfb2Zmc2V0VG9wKG9iaikge1xuXHRcdFx0XHR2YXIgb2Zmc2V0VG9wID0gb2JqLm9mZnNldFRvcDtcblx0XHRcdFx0d2hpbGUgKChvYmogPSBvYmoub2Zmc2V0UGFyZW50KSAmJiAhaXNOYU4ob2JqLm9mZnNldFRvcCkpIHtcblx0XHRcdFx0XHRvZmZzZXRUb3AgKz0gb2JqLm9mZnNldFRvcDtcblx0XHRcdFx0XHRpZiAob2JqLnRhZ05hbWUgIT09ICdCT0RZJykge1xuXHRcdFx0XHRcdFx0b2Zmc2V0VG9wIC09IG9iai5zY3JvbGxUb3A7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBvZmZzZXRUb3A7XG5cdFx0XHR9LFxuXHRcdFx0X29mZnNldDogZnVuY3Rpb24gX29mZnNldChvYmopIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRsZWZ0OiB0aGlzLl9vZmZzZXRMZWZ0KG9iaiksXG5cdFx0XHRcdFx0cmlnaHQ6IHRoaXMuX29mZnNldFJpZ2h0KG9iaiksXG5cdFx0XHRcdFx0dG9wOiB0aGlzLl9vZmZzZXRUb3Aob2JqKVxuXHRcdFx0XHR9O1xuXHRcdFx0fSxcblx0XHRcdF9jc3M6IGZ1bmN0aW9uIF9jc3MoZWxlbWVudFJlZiwgc3R5bGVOYW1lLCB2YWx1ZSkge1xuXHRcdFx0XHRpZiAoJCkge1xuXHRcdFx0XHRcdCQuc3R5bGUoZWxlbWVudFJlZiwgc3R5bGVOYW1lLCB2YWx1ZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIHN0eWxlID0gc3R5bGVOYW1lLnJlcGxhY2UoL14tbXMtLywgXCJtcy1cIikucmVwbGFjZSgvLShbXFxkYS16XSkvZ2ksIGZ1bmN0aW9uIChhbGwsIGxldHRlcikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGxldHRlci50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGVsZW1lbnRSZWYuc3R5bGVbc3R5bGVdID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRfdG9WYWx1ZTogZnVuY3Rpb24gX3RvVmFsdWUocGVyY2VudGFnZSkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25zLnNjYWxlLnRvVmFsdWUuYXBwbHkodGhpcywgW3BlcmNlbnRhZ2VdKTtcblx0XHRcdH0sXG5cdFx0XHRfdG9QZXJjZW50YWdlOiBmdW5jdGlvbiBfdG9QZXJjZW50YWdlKHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9wdGlvbnMuc2NhbGUudG9QZXJjZW50YWdlLmFwcGx5KHRoaXMsIFt2YWx1ZV0pO1xuXHRcdFx0fSxcblx0XHRcdF9zZXRUb29sdGlwUG9zaXRpb246IGZ1bmN0aW9uIF9zZXRUb29sdGlwUG9zaXRpb24oKSB7XG5cdFx0XHRcdHZhciB0b29sdGlwcyA9IFt0aGlzLnRvb2x0aXAsIHRoaXMudG9vbHRpcF9taW4sIHRoaXMudG9vbHRpcF9tYXhdO1xuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG5cdFx0XHRcdFx0dmFyIHRvb2x0aXBQb3M7XG5cdFx0XHRcdFx0aWYgKHRoaXMub3B0aW9ucy50b29sdGlwX3Bvc2l0aW9uKSB7XG5cdFx0XHRcdFx0XHR0b29sdGlwUG9zID0gdGhpcy5vcHRpb25zLnRvb2x0aXBfcG9zaXRpb247XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmICh0aGlzLm9wdGlvbnMucnRsKSB7XG5cdFx0XHRcdFx0XHRcdHRvb2x0aXBQb3MgPSAnbGVmdCc7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0b29sdGlwUG9zID0gJ3JpZ2h0Jztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmFyIG9wcG9zaXRlU2lkZSA9IHRvb2x0aXBQb3MgPT09ICdsZWZ0JyA/ICdyaWdodCcgOiAnbGVmdCc7XG5cdFx0XHRcdFx0dG9vbHRpcHMuZm9yRWFjaChmdW5jdGlvbiAodG9vbHRpcCkge1xuXHRcdFx0XHRcdFx0dGhpcy5fYWRkQ2xhc3ModG9vbHRpcCwgdG9vbHRpcFBvcyk7XG5cdFx0XHRcdFx0XHR0b29sdGlwLnN0eWxlW29wcG9zaXRlU2lkZV0gPSAnMTAwJSc7XG5cdFx0XHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcF9wb3NpdGlvbiA9PT0gJ2JvdHRvbScpIHtcblx0XHRcdFx0XHR0b29sdGlwcy5mb3JFYWNoKGZ1bmN0aW9uICh0b29sdGlwKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9hZGRDbGFzcyh0b29sdGlwLCAnYm90dG9tJyk7XG5cdFx0XHRcdFx0XHR0b29sdGlwLnN0eWxlLnRvcCA9IDIyICsgJ3B4Jztcblx0XHRcdFx0XHR9LmJpbmQodGhpcykpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRvb2x0aXBzLmZvckVhY2goZnVuY3Rpb24gKHRvb2x0aXApIHtcblx0XHRcdFx0XHRcdHRoaXMuX2FkZENsYXNzKHRvb2x0aXAsICd0b3AnKTtcblx0XHRcdFx0XHRcdHRvb2x0aXAuc3R5bGUudG9wID0gLXRoaXMudG9vbHRpcC5vdXRlckhlaWdodCAtIDE0ICsgJ3B4Jztcblx0XHRcdFx0XHR9LmJpbmQodGhpcykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgXHRcdEF0dGFjaCB0byBnbG9iYWwgbmFtZXNwYWNlXG4gIFx0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXHRcdGlmICgkICYmICQuZm4pIHtcblx0XHRcdHZhciBhdXRvUmVnaXN0ZXJOYW1lc3BhY2UgPSB2b2lkIDA7XG5cblx0XHRcdGlmICghJC5mbi5zbGlkZXIpIHtcblx0XHRcdFx0JC5icmlkZ2V0KE5BTUVTUEFDRV9NQUlOLCBTbGlkZXIpO1xuXHRcdFx0XHRhdXRvUmVnaXN0ZXJOYW1lc3BhY2UgPSBOQU1FU1BBQ0VfTUFJTjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh3aW5kb3dJc0RlZmluZWQpIHtcblx0XHRcdFx0XHR3aW5kb3cuY29uc29sZS53YXJuKFwiYm9vdHN0cmFwLXNsaWRlci5qcyAtIFdBUk5JTkc6ICQuZm4uc2xpZGVyIG5hbWVzcGFjZSBpcyBhbHJlYWR5IGJvdW5kLiBVc2UgdGhlICQuZm4uYm9vdHN0cmFwU2xpZGVyIG5hbWVzcGFjZSBpbnN0ZWFkLlwiKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRhdXRvUmVnaXN0ZXJOYW1lc3BhY2UgPSBOQU1FU1BBQ0VfQUxURVJOQVRFO1xuXHRcdFx0fVxuXHRcdFx0JC5icmlkZ2V0KE5BTUVTUEFDRV9BTFRFUk5BVEUsIFNsaWRlcik7XG5cblx0XHRcdC8vIEF1dG8tUmVnaXN0ZXIgZGF0YS1wcm92aWRlPVwic2xpZGVyXCIgRWxlbWVudHNcblx0XHRcdCQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHQkKFwiaW5wdXRbZGF0YS1wcm92aWRlPXNsaWRlcl1cIilbYXV0b1JlZ2lzdGVyTmFtZXNwYWNlXSgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KSgkKTtcblxuXHRyZXR1cm4gU2xpZGVyO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2xpZGVyL2Rpc3QvYm9vdHN0cmFwLXNsaWRlci5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiXSwic291cmNlUm9vdCI6IiJ9