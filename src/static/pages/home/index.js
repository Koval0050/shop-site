/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../api/api.js":
/*!*********************!*\
  !*** ../api/api.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMenu": () => (/* binding */ getMenu)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../../node_modules/axios/lib/axios.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var baseURL = "https://659d33da633f9aee7908e266.mockapi.io/products";
var getMenu = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(baseURL);
        case 3:
          response = _context.sent;
          return _context.abrupt("return", response.data);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error("Error fetching", _context.t0);
          throw _context.t0;
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function getMenu() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "../components/cards-list/index.js":
/*!*****************************************!*\
  !*** ../components/cards-list/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/cards-list/index.scss");


/***/ }),

/***/ "../components/footer/index.js":
/*!*************************************!*\
  !*** ../components/footer/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/footer/index.scss");


/***/ }),

/***/ "../components/header/index.js":
/*!*************************************!*\
  !*** ../components/header/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/header/index.scss");


/***/ }),

/***/ "../components/main/index.js":
/*!***********************************!*\
  !*** ../components/main/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/main/index.scss");
/* harmony import */ var notiflix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! notiflix */ "../../node_modules/notiflix/dist/notiflix-aio-3.2.7.min.js");
/* harmony import */ var notiflix__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(notiflix__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/api */ "../api/api.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function getDataAndSaveToLocalStorage() {
  return _getDataAndSaveToLocalStorage.apply(this, arguments);
}
function _getDataAndSaveToLocalStorage() {
  _getDataAndSaveToLocalStorage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0,_api_api__WEBPACK_IMPORTED_MODULE_2__.getMenu)();
        case 3:
          data = _context.sent;
          localStorage.setItem("menuData", JSON.stringify(data));
          return _context.abrupt("return", data);
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error("Error fetching data:", _context.t0);
          notiflix__WEBPACK_IMPORTED_MODULE_1___default().Notify.failure("Error fetching data");
          return _context.abrupt("return", null);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _getDataAndSaveToLocalStorage.apply(this, arguments);
}
function renderMenu() {
  return _renderMenu.apply(this, arguments);
}
function _renderMenu() {
  _renderMenu = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var listContainer, menuData, menuList, addToCartButtons;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          listContainer = document.querySelector(".cards-list");
          _context2.next = 3;
          return getDataAndSaveToLocalStorage();
        case 3:
          menuData = _context2.sent;
          //Встановлення дефолтних значень за відсутності данних
          menuList = menuData.map(function (item) {
            var img = item.imageUrl ? item.imageUrl : "/src/assets/images/burger.png";
            var description = item.description ? item.description : "default description";
            var discount = item.discount !== undefined && item.discount !== null ? "-".concat(item.discount, "$") : "";

            //Створюємо прапорець для перевірки наявності знижки
            var hasDiscountPrice = item.discountPrice !== undefined && item.discountPrice !== null;

            // Округлення значень price та discountPrice до 1 символу після коми
            var formattedPrice = Number(item.price).toFixed(1);
            var formattedDiscountPrice = hasDiscountPrice ? Number(item.discountPrice).toFixed(1) : "";
            return "<li id=\"".concat(item.id, "\" class=\"cards-list__item\">\n      <div class=\"list-item__img-container\">\n        <img class=\"list-item__card-img\" src=\"").concat(img, "\" alt=\"\" />\n      </div>\n      <div class=\"list-item__card-description\">\n        <p class=\"list-item__card-name\">").concat(item.title, "</p>\n        <p class=\"list-item__card-weight\">").concat(item.weight, "g</p>\n        <div class=\"list-item__card-price-wrapper\">\n          <p class=\"list-item__card-price ").concat(hasDiscountPrice ? "is-discount" : "", "\">$ ").concat(formattedPrice, "</p>\n          <p class=\"list-item__card-discountPrice ").concat(hasDiscountPrice ? "" : "is-visible-discount", "\">$").concat(formattedDiscountPrice, "</p>\n        </div>\n        <p class=\"list-item__card-description\">").concat(description, "</p>\n      </div>\n      <button class=\"list-item__card-btn\">add to cart</button>\n      <p class=\"list-item__discount\">").concat(discount, "</p>\n    </li>");
          });
          listContainer.insertAdjacentHTML("beforeend", menuList.join(""));

          // Додаємо слухача подій для кожної кнопки "add to cart"
          addToCartButtons = document.querySelectorAll(".list-item__card-btn");
          addToCartButtons.forEach(function (button) {
            button.addEventListener("click", function () {
              var itemId = button.closest(".cards-list__item").id;
              addToCart(itemId);
            });
          });
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _renderMenu.apply(this, arguments);
}
function addToCart(itemId) {
  var cartMenu = JSON.parse(localStorage.getItem("cartMenu")) || [];
  cartMenu.push(itemId);
  localStorage.setItem("cartMenu", JSON.stringify(cartMenu));
  notiflix__WEBPACK_IMPORTED_MODULE_1___default().Notify.info("Item added to cart:");
  console.log("Item added to cart:", itemId);
}
renderMenu();

/***/ }),

/***/ "../page-components/home/index.js":
/*!****************************************!*\
  !*** ../page-components/home/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../page-components/home/index.scss");
// js

// scss


/***/ }),

/***/ "../scss/index.js":
/*!************************!*\
  !*** ../scss/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../scss/index.scss");
/* harmony import */ var _variables_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables.scss */ "../scss/variables.scss");
/* harmony import */ var _normalize_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalize.scss */ "../scss/normalize.scss");
/* harmony import */ var _reset_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset.scss */ "../scss/reset.scss");





/***/ }),

/***/ "../components/cards-list/index.scss":
/*!*******************************************!*\
  !*** ../components/cards-list/index.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../components/footer/index.scss":
/*!***************************************!*\
  !*** ../components/footer/index.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../components/header/index.scss":
/*!***************************************!*\
  !*** ../components/header/index.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../components/main/index.scss":
/*!*************************************!*\
  !*** ../components/main/index.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../page-components/home/index.scss":
/*!******************************************!*\
  !*** ../page-components/home/index.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../scss/index.scss":
/*!**************************!*\
  !*** ../scss/index.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../scss/normalize.scss":
/*!******************************!*\
  !*** ../scss/normalize.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../scss/reset.scss":
/*!**************************!*\
  !*** ../scss/reset.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../scss/variables.scss":
/*!******************************!*\
  !*** ../scss/variables.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../node_modules/notiflix/dist/notiflix-aio-3.2.7.min.js":
/*!******************************************************************!*\
  !*** ../../node_modules/notiflix/dist/notiflix-aio-3.2.7.min.js ***!
  \******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* Notiflix AIO (https://notiflix.github.io) - Version: 3.2.7 - Author: Furkan (https://github.com/furcan) - Copyright 2019 - 2024 Notiflix, MIT License (https://opensource.org/licenses/MIT) */

(function(t,e){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return e(t)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0})("undefined"==typeof __webpack_require__.g?"undefined"==typeof window?this:window:__webpack_require__.g,function(t){'use strict';if("undefined"==typeof t&&"undefined"==typeof t.document)return!1;var e,i,a,n,o,r="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",s="-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif",l={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},m={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},c={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},p={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},f={Show:"Show",Ask:"Ask",Prompt:"Prompt"},d={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},x={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse",Custom:"Custom",Notiflix:"Notiflix"},g={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},b={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse"},u={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},y=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+r)},k=function(t){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+t+r)},w=function(e){return e||(e="head"),null!==t.document[e]||(y("\nNotiflix needs to be appended to the \"<"+e+">\" element, but you called it before the \"<"+e+">\" element has been created."),!1)},h=function(e,i){if(!w("head"))return!1;if(null!==e()&&!t.document.getElementById(i)){var a=t.document.createElement("style");a.id=i,a.innerHTML=e(),t.document.head.appendChild(a)}},v=function(){var t={},e=!1,a=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],a++);for(var n=function(i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=e&&"[object Object]"===Object.prototype.toString.call(i[a])?v(t[a],i[a]):i[a])};a<arguments.length;a++)n(arguments[a]);return t},N=function(e){var i=t.document.createElement("div");return i.innerHTML=e,i.textContent||i.innerText||""},C=function(t,e){t||(t="110px"),e||(e="#32c682");var i="<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"NXReportSuccess\" width=\""+t+"\" height=\""+t+"\" fill=\""+e+"\" viewBox=\"0 0 120 120\"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style=\"-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)\"><path d=\"M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z\" style=\"-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)\" fill=\"inherit\" data-animator-group=\"true\" data-animator-type=\"2\"/></g><g style=\"-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)\"><path d=\"M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z\" style=\"-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)\" fill=\"inherit\" data-animator-group=\"true\" data-animator-type=\"2\"/></g></svg>";return i},z=function(t,e){t||(t="110px"),e||(e="#ff5549");var i="<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"NXReportFailure\" width=\""+t+"\" height=\""+t+"\" fill=\""+e+"\" viewBox=\"0 0 120 120\"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style=\"-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)\"><path d=\"M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z\" style=\"-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)\" fill=\"inherit\" data-animator-group=\"true\" data-animator-type=\"2\"/></g><g style=\"-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)\"><path d=\"M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z\" style=\"-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)\" fill=\"inherit\" data-animator-group=\"true\" data-animator-type=\"2\"/></g></svg>";return i},S=function(t,e){t||(t="110px"),e||(e="#eebf31");var i="<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"NXReportWarning\" width=\""+t+"\" height=\""+t+"\" fill=\""+e+"\" viewBox=\"0 0 120 120\"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style=\"-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)\"><path d=\"M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z\" style=\"-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)\" fill=\"inherit\" data-animator-group=\"true\" data-animator-type=\"2\"/></g><g style=\"-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)\"><path d=\"M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z\" style=\"-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)\" fill=\"inherit\" data-animator-group=\"true\" data-animator-type=\"2\"/></g></svg>";return i},L=function(t,e){t||(t="110px"),e||(e="#26c0d3");var i="<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"NXReportInfo\" width=\""+t+"\" height=\""+t+"\" fill=\""+e+"\" viewBox=\"0 0 120 120\"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style=\"-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)\"><path d=\"M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z\" style=\"-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)\" fill=\"inherit\" data-animator-group=\"true\" data-animator-type=\"2\"/></g><g style=\"-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)\"><path d=\"M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z\" style=\"-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)\" fill=\"inherit\" data-animator-group=\"true\" data-animator-type=\"2\"/></g></svg>";return i},W=function(t,e){t||(t="60px"),e||(e="#32c682");var i="<svg xmlns=\"http://www.w3.org/2000/svg\" stroke=\""+e+"\" width=\""+t+"\" height=\""+t+"\" transform=\"scale(.8)\" viewBox=\"0 0 38 38\"><g fill=\"none\" fill-rule=\"evenodd\" stroke-width=\"2\" transform=\"translate(1 1)\"><circle cx=\"18\" cy=\"18\" r=\"18\" stroke-opacity=\".25\"/><path d=\"M36 18c0-9.94-8.06-18-18-18\"><animateTransform attributeName=\"transform\" dur=\"1s\" from=\"0 18 18\" repeatCount=\"indefinite\" to=\"360 18 18\" type=\"rotate\"/></path></g></svg>";return i},I=function(t,e){t||(t="60px"),e||(e="#32c682");var i="<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"NXLoadingHourglass\" fill=\""+e+"\" width=\""+t+"\" height=\""+t+"\" viewBox=\"0 0 200 200\"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group=\"true\" data-animator-type=\"1\" style=\"-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box\"><g id=\"NXhourglass2\" fill=\"inherit\"><g data-animator-group=\"true\" data-animator-type=\"2\" style=\"-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box\" opacity=\".4\"><path id=\"NXhourglass4\" d=\"M100 100l-34.38 32.08v31.14h68.76v-31.14z\"/></g><g data-animator-group=\"true\" data-animator-type=\"2\" style=\"-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box\" opacity=\".4\"><path id=\"NXhourglass6\" d=\"M100 100L65.62 67.92V36.78h68.76v31.14z\"/></g><path d=\"M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z\"/></g></g></svg>";return i},R=function(t,e){t||(t="60px"),e||(e="#32c682");var i="<svg xmlns=\"http://www.w3.org/2000/svg\" width=\""+t+"\" height=\""+t+"\" viewBox=\"25 25 50 50\" style=\"-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:"+t+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+t+";position:absolute;top:0;left:0;margin:auto\"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke=\""+e+"\" stroke-width=\"2\" style=\"-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite\" stroke-dasharray=\"150 200\" stroke-dashoffset=\"-10\" stroke-linecap=\"round\"/></svg>";return i},A=function(t,e){t||(t="60px"),e||(e="#32c682");var i="<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\""+e+"\" width=\""+t+"\" height=\""+t+"\" viewBox=\"0 0 128 128\"><g><path fill=\"inherit\" d=\"M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z\"/><animateTransform attributeName=\"transform\" dur=\"1.5s\" from=\"0 64 64\" repeatCount=\"indefinite\" to=\"360 64 64\" type=\"rotate\"/></g></svg>";return i},M=function(t,e){t||(t="60px"),e||(e="#32c682");var i="<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\""+e+"\" width=\""+t+"\" height=\""+t+"\" viewBox=\"0 0 100 100\"><g transform=\"translate(25 50)\"><circle r=\"9\" fill=\"inherit\" transform=\"scale(.239)\"><animateTransform attributeName=\"transform\" begin=\"-0.266s\" calcMode=\"spline\" dur=\"0.8s\" keySplines=\"0.3 0 0.7 1;0.3 0 0.7 1\" keyTimes=\"0;0.5;1\" repeatCount=\"indefinite\" type=\"scale\" values=\"0;1;0\"/></circle></g><g transform=\"translate(50 50)\"><circle r=\"9\" fill=\"inherit\" transform=\"scale(.00152)\"><animateTransform attributeName=\"transform\" begin=\"-0.133s\" calcMode=\"spline\" dur=\"0.8s\" keySplines=\"0.3 0 0.7 1;0.3 0 0.7 1\" keyTimes=\"0;0.5;1\" repeatCount=\"indefinite\" type=\"scale\" values=\"0;1;0\"/></circle></g><g transform=\"translate(75 50)\"><circle r=\"9\" fill=\"inherit\" transform=\"scale(.299)\"><animateTransform attributeName=\"transform\" begin=\"0s\" calcMode=\"spline\" dur=\"0.8s\" keySplines=\"0.3 0 0.7 1;0.3 0 0.7 1\" keyTimes=\"0;0.5;1\" repeatCount=\"indefinite\" type=\"scale\" values=\"0;1;0\"/></circle></g></svg>";return i},B=function(t,e){t||(t="60px"),e||(e="#32c682");var i="<svg xmlns=\"http://www.w3.org/2000/svg\" stroke=\""+e+"\" width=\""+t+"\" height=\""+t+"\" viewBox=\"0 0 44 44\"><g fill=\"none\" fill-rule=\"evenodd\" stroke-width=\"2\"><circle cx=\"22\" cy=\"22\" r=\"1\"><animate attributeName=\"r\" begin=\"0s\" calcMode=\"spline\" dur=\"1.8s\" keySplines=\"0.165, 0.84, 0.44, 1\" keyTimes=\"0; 1\" repeatCount=\"indefinite\" values=\"1; 20\"/><animate attributeName=\"stroke-opacity\" begin=\"0s\" calcMode=\"spline\" dur=\"1.8s\" keySplines=\"0.3, 0.61, 0.355, 1\" keyTimes=\"0; 1\" repeatCount=\"indefinite\" values=\"1; 0\"/></circle><circle cx=\"22\" cy=\"22\" r=\"1\"><animate attributeName=\"r\" begin=\"-0.9s\" calcMode=\"spline\" dur=\"1.8s\" keySplines=\"0.165, 0.84, 0.44, 1\" keyTimes=\"0; 1\" repeatCount=\"indefinite\" values=\"1; 20\"/><animate attributeName=\"stroke-opacity\" begin=\"-0.9s\" calcMode=\"spline\" dur=\"1.8s\" keySplines=\"0.3, 0.61, 0.355, 1\" keyTimes=\"0; 1\" repeatCount=\"indefinite\" values=\"1; 0\"/></circle></g></svg>";return i},X=function(t,e,i){t||(t="60px"),e||(e="#f8f8f8"),i||(i="#32c682");var a="<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"NXLoadingNotiflixLib\" width=\""+t+"\" height=\""+t+"\" viewBox=\"0 0 200 200\"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:"+e+";stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d=\"M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z\" style=\"animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal\" fill=\""+i+"\" stroke=\""+i+"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"22\" stroke-width=\"12\"/><path class=\"nx-icon-line\" d=\"M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21\" style=\"animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal\" stroke-dasharray=\"500\"/><path class=\"nx-icon-line\" d=\"M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75\" style=\"animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal\" stroke-dasharray=\"500\"/></svg>";return a},D=function(){return"[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:\"Quicksand\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}"},T=0,F=function(a,n,o,r){if(!w("body"))return!1;e||G.Notify.init({});var c=v(!0,e,{});if("object"==typeof o&&!Array.isArray(o)||"object"==typeof r&&!Array.isArray(r)){var p={};"object"==typeof o?p=o:"object"==typeof r&&(p=r),e=v(!0,e,p)}var f=e[a.toLocaleLowerCase("en")];T++,"string"!=typeof n&&(n="Notiflix "+a),e.plainText&&(n=N(n)),!e.plainText&&n.length>e.messageMaxLength&&(e=v(!0,e,{closeButton:!0,messageMaxLength:150}),n="Possible HTML Tags Error: The \"plainText\" option is \"false\" and the notification content length is more than the \"messageMaxLength\" option."),n.length>e.messageMaxLength&&(n=n.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(f.fontAwesomeIconColor=f.background),e.cssAnimation||(e.cssAnimationDuration=0);var d=t.document.getElementById(m.wrapID)||t.document.createElement("div");if(d.id=m.wrapID,d.style.width=e.width,d.style.zIndex=e.zindex,d.style.opacity=e.opacity,"center-center"===e.position?(d.style.left=e.distance,d.style.top=e.distance,d.style.right=e.distance,d.style.bottom=e.distance,d.style.margin="auto",d.classList.add("nx-flex-center-center"),d.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",d.style.display="flex",d.style.flexWrap="wrap",d.style.flexDirection="column",d.style.justifyContent="center",d.style.alignItems="center",d.style.pointerEvents="none"):"center-top"===e.position?(d.style.left=e.distance,d.style.right=e.distance,d.style.top=e.distance,d.style.bottom="auto",d.style.margin="auto"):"center-bottom"===e.position?(d.style.left=e.distance,d.style.right=e.distance,d.style.bottom=e.distance,d.style.top="auto",d.style.margin="auto"):"right-bottom"===e.position?(d.style.right=e.distance,d.style.bottom=e.distance,d.style.top="auto",d.style.left="auto"):"left-top"===e.position?(d.style.left=e.distance,d.style.top=e.distance,d.style.right="auto",d.style.bottom="auto"):"left-bottom"===e.position?(d.style.left=e.distance,d.style.bottom=e.distance,d.style.top="auto",d.style.right="auto"):(d.style.right=e.distance,d.style.top=e.distance,d.style.left="auto",d.style.bottom="auto"),e.backOverlay){var x=t.document.getElementById(m.overlayID)||t.document.createElement("div");x.id=m.overlayID,x.style.width="100%",x.style.height="100%",x.style.position="fixed",x.style.zIndex=e.zindex-1,x.style.left=0,x.style.top=0,x.style.right=0,x.style.bottom=0,x.style.background=f.backOverlayColor||e.backOverlayColor,x.className=e.cssAnimation?"nx-with-animation":"",x.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(m.overlayID)||t.document.body.appendChild(x)}t.document.getElementById(m.wrapID)||t.document.body.appendChild(d);var g=t.document.createElement("div");g.id=e.ID+"-"+T,g.className=e.className+" "+f.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof o?"nx-with-close-button":"")+" "+("function"==typeof o?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),g.style.fontSize=e.fontSize,g.style.color=f.textColor,g.style.background=f.background,g.style.borderRadius=e.borderRadius,g.style.pointerEvents="all",e.rtl&&(g.setAttribute("dir","rtl"),g.classList.add("nx-rtl-on")),g.style.fontFamily="\""+e.fontFamily+"\", "+s,e.cssAnimation&&(g.style.animationDuration=e.cssAnimationDuration+"ms");var b="";if(e.closeButton&&"function"!=typeof o&&(b="<span class=\"nx-close-button\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><g><path fill=\""+f.notiflixIconColor+"\" d=\"M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z\"/></g></svg></span>"),!e.useIcon)g.innerHTML="<span class=\"nx-message\">"+n+"</span>"+(e.closeButton?b:"");else if(e.useFontAwesome)g.innerHTML="<i style=\"color:"+f.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+";\" class=\"nx-message-icon nx-message-icon-fa "+f.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+"\"></i><span class=\"nx-message nx-with-icon\">"+n+"</span>"+(e.closeButton?b:"");else{var u="";a===l.Success?u="<svg class=\"nx-message-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\"><g><path fill=\""+f.notiflixIconColor+"\" d=\"M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z\"/></g></svg>":a===l.Failure?u="<svg class=\"nx-message-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\"><g><path fill=\""+f.notiflixIconColor+"\" d=\"M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z\"/></g></svg>":a===l.Warning?u="<svg class=\"nx-message-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\"><g><path fill=\""+f.notiflixIconColor+"\" d=\"M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z\"/></g></svg>":a===l.Info&&(u="<svg class=\"nx-message-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\"><g><path fill=\""+f.notiflixIconColor+"\" d=\"M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z\"/></g></svg>"),g.innerHTML=u+"<span class=\"nx-message nx-with-icon\">"+n+"</span>"+(e.closeButton?b:"")}if("left-bottom"===e.position||"right-bottom"===e.position){var y=t.document.getElementById(m.wrapID);y.insertBefore(g,y.firstChild)}else t.document.getElementById(m.wrapID).appendChild(g);var k=t.document.getElementById(g.id);if(k){var h,C,z=function(){k.classList.add("nx-remove");var e=t.document.getElementById(m.overlayID);e&&0>=d.childElementCount&&e.classList.add("nx-remove"),clearTimeout(h)},S=function(){if(k&&null!==k.parentNode&&k.parentNode.removeChild(k),0>=d.childElementCount&&null!==d.parentNode){d.parentNode.removeChild(d);var e=t.document.getElementById(m.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(C)};if(e.closeButton&&"function"!=typeof o){var L=t.document.getElementById(g.id).querySelector("span.nx-close-button");L.addEventListener("click",function(){z();var t=setTimeout(function(){S(),clearTimeout(t)},e.cssAnimationDuration)})}if(("function"==typeof o||e.clickToClose)&&k.addEventListener("click",function(){"function"==typeof o&&o(),z();var t=setTimeout(function(){S(),clearTimeout(t)},e.cssAnimationDuration)}),!e.closeButton&&"function"!=typeof o){var W=function(){h=setTimeout(function(){z()},e.timeout),C=setTimeout(function(){S()},e.timeout+e.cssAnimationDuration)};W(),e.pauseOnHover&&(k.addEventListener("mouseenter",function(){k.classList.add("nx-paused"),clearTimeout(h),clearTimeout(C)}),k.addEventListener("mouseleave",function(){k.classList.remove("nx-paused"),W()}))}}if(e.showOnlyTheLastOne&&0<T)for(var I,R=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+T+"])"),A=0;A<R.length;A++)I=R[A],null!==I.parentNode&&I.parentNode.removeChild(I);e=v(!0,e,c)},E=function(){return"[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Quicksand\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*=\"-overlay\"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*=\"-content\"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*=\"-content\"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*=\"-content\"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*=\"-content\"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*=\"-content\"]>div[class$=\"-icon\"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*=\"-content\"]>div[class$=\"-icon\"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*=\"-overlay\"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*=\"-content\"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*=\"-content\"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*=\"-overlay\"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*=\"-content\"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*=\"-content\"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}"},j=function(e,a,n,o,r,l){if(!w("body"))return!1;i||G.Report.init({});var m={};if("object"==typeof r&&!Array.isArray(r)||"object"==typeof l&&!Array.isArray(l)){var f={};"object"==typeof r?f=r:"object"==typeof l&&(f=l),m=v(!0,i,{}),i=v(!0,i,f)}var d=i[e.toLocaleLowerCase("en")];"string"!=typeof a&&(a="Notiflix "+e),"string"!=typeof n&&(e===c.Success?n="\"Do not try to become a person of success but try to become a person of value.\" <br><br>- Albert Einstein":e===c.Failure?n="\"Failure is simply the opportunity to begin again, this time more intelligently.\" <br><br>- Henry Ford":e===c.Warning?n="\"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny.\" <br><br>- Mustafa Kemal Ataturk":e===c.Info&&(n="\"Knowledge rests not upon truth alone, but upon error also.\" <br><br>- Carl Gustav Jung")),"string"!=typeof o&&(o="Okay"),i.plainText&&(a=N(a),n=N(n),o=N(o)),i.plainText||(a.length>i.titleMaxLength&&(a="Possible HTML Tags Error",n="The \"plainText\" option is \"false\" and the title content length is more than the \"titleMaxLength\" option.",o="Okay"),n.length>i.messageMaxLength&&(a="Possible HTML Tags Error",n="The \"plainText\" option is \"false\" and the message content length is more than the \"messageMaxLength\" option.",o="Okay"),o.length>i.buttonMaxLength&&(a="Possible HTML Tags Error",n="The \"plainText\" option is \"false\" and the button content length is more than the \"buttonMaxLength\" option.",o="Okay")),a.length>i.titleMaxLength&&(a=a.substring(0,i.titleMaxLength)+"..."),n.length>i.messageMaxLength&&(n=n.substring(0,i.messageMaxLength)+"..."),o.length>i.buttonMaxLength&&(o=o.substring(0,i.buttonMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var x=t.document.createElement("div");x.id=p.ID,x.className=i.className,x.style.zIndex=i.zindex,x.style.borderRadius=i.borderRadius,x.style.fontFamily="\""+i.fontFamily+"\", "+s,i.rtl&&(x.setAttribute("dir","rtl"),x.classList.add("nx-rtl-on")),x.style.display="flex",x.style.flexWrap="wrap",x.style.flexDirection="column",x.style.alignItems="center",x.style.justifyContent="center";var g="",b=!0===i.backOverlayClickToClose;i.backOverlay&&(g="<div class=\""+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+(b?" nx-report-click-to-close":"")+"\" style=\"background:"+(d.backOverlayColor||i.backOverlayColor)+";animation-duration:"+i.cssAnimationDuration+"ms;\"></div>");var u="";if(e===c.Success?u=C(i.svgSize,d.svgColor):e===c.Failure?u=z(i.svgSize,d.svgColor):e===c.Warning?u=S(i.svgSize,d.svgColor):e===c.Info&&(u=L(i.svgSize,d.svgColor)),x.innerHTML=g+"<div class=\""+i.className+"-content"+(i.cssAnimation?" nx-with-animation ":"")+" nx-"+i.cssAnimationStyle+"\" style=\"width:"+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+"ms;\"><div style=\"width:"+i.svgSize+"; height:"+i.svgSize+";\" class=\""+i.className+"-icon\">"+u+"</div><h5 class=\""+i.className+"-title\" style=\"font-weight:500; font-size:"+i.titleFontSize+"; color:"+d.titleColor+";\">"+a+"</h5><p class=\""+i.className+"-message\" style=\"font-size:"+i.messageFontSize+"; color:"+d.messageColor+";\">"+n+"</p><a id=\"NXReportButton\" class=\""+i.className+"-button\" style=\"font-weight:500; font-size:"+i.buttonFontSize+"; background:"+d.buttonBackground+"; color:"+d.buttonColor+";\">"+o+"</a></div>",!t.document.getElementById(x.id)){t.document.body.appendChild(x);var y=function(){var e=t.document.getElementById(x.id);e.classList.add("nx-remove");var a=setTimeout(function(){null!==e.parentNode&&e.parentNode.removeChild(e),clearTimeout(a)},i.cssAnimationDuration)},k=t.document.getElementById("NXReportButton");if(k.addEventListener("click",function(){"function"==typeof r&&r(),y()}),g&&b){var h=t.document.querySelector(".nx-report-click-to-close");h.addEventListener("click",function(){y()})}}i=v(!0,i,m)},O=function(){return"[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:\"Quicksand\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*=\"-overlay\"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*=\"-overlay\"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*=\"-overlay\"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*=\"-content\"]>div[class*=\"-head\"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-head\"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-buttons\"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-buttons\"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-buttons\"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-buttons\"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-buttons\"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*=\"-content\"]>div[class*=\"-buttons\"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*=\"-content\"]>div[class*=\"-buttons\"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*=\"-content\"]>div[class*=\"-buttons\"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*=\"-content\"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*=\"-content\"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*=\"-content\"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*=\"-content\"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}"},H=function(e,i,n,o,r,l,m,c,p){if(!w("body"))return!1;a||G.Confirm.init({});var x=v(!0,a,{});"object"!=typeof p||Array.isArray(p)||(a=v(!0,a,p)),"string"!=typeof i&&(i="Notiflix Confirm"),"string"!=typeof n&&(n="Do you agree with me?"),"string"!=typeof r&&(r="Yes"),"string"!=typeof l&&(l="No"),"function"!=typeof m&&(m=void 0),"function"!=typeof c&&(c=void 0),a.plainText&&(i=N(i),n=N(n),r=N(r),l=N(l)),a.plainText||(i.length>a.titleMaxLength&&(i="Possible HTML Tags Error",n="The \"plainText\" option is \"false\" and the title content length is more than \"titleMaxLength\" option.",r="Okay",l="..."),n.length>a.messageMaxLength&&(i="Possible HTML Tags Error",n="The \"plainText\" option is \"false\" and the message content length is more than \"messageMaxLength\" option.",r="Okay",l="..."),(r.length||l.length)>a.buttonsMaxLength&&(i="Possible HTML Tags Error",n="The \"plainText\" option is \"false\" and the buttons content length is more than \"buttonsMaxLength\" option.",r="Okay",l="...")),i.length>a.titleMaxLength&&(i=i.substring(0,a.titleMaxLength)+"..."),n.length>a.messageMaxLength&&(n=n.substring(0,a.messageMaxLength)+"..."),r.length>a.buttonsMaxLength&&(r=r.substring(0,a.buttonsMaxLength)+"..."),l.length>a.buttonsMaxLength&&(l=l.substring(0,a.buttonsMaxLength)+"..."),a.cssAnimation||(a.cssAnimationDuration=0);var g=t.document.createElement("div");g.id=d.ID,g.className=a.className+(a.cssAnimation?" nx-with-animation nx-"+a.cssAnimationStyle:""),g.style.zIndex=a.zindex,g.style.padding=a.distance,a.rtl&&(g.setAttribute("dir","rtl"),g.classList.add("nx-rtl-on"));var b="string"==typeof a.position?a.position.trim():"center";g.classList.add("nx-position-"+b),g.style.fontFamily="\""+a.fontFamily+"\", "+s;var u="";a.backOverlay&&(u="<div class=\""+a.className+"-overlay"+(a.cssAnimation?" nx-with-animation":"")+"\" style=\"background:"+a.backOverlayColor+";animation-duration:"+a.cssAnimationDuration+"ms;\"></div>");var y="";"function"==typeof m&&(y="<a id=\"NXConfirmButtonCancel\" class=\"nx-confirm-button-cancel\" style=\"color:"+a.cancelButtonColor+";background:"+a.cancelButtonBackground+";font-size:"+a.buttonsFontSize+";\">"+l+"</a>");var k="",h=null,C=void 0;if(e===f.Ask||e===f.Prompt){h=o||"";var z=e===f.Ask?Math.ceil(1.5*h.length):200<h.length?Math.ceil(1.5*h.length):250,S=e===f.Prompt?"value=\""+h+"\"":"";k="<div><input id=\"NXConfirmValidationInput\" type=\"text\" "+S+" maxlength=\""+z+"\" style=\"font-size:"+a.messageFontSize+";border-radius: "+a.borderRadius+";\" autocomplete=\"off\" spellcheck=\"false\" autocapitalize=\"none\" /></div>"}if(g.innerHTML=u+"<div class=\""+a.className+"-content\" style=\"width:"+a.width+"; background:"+a.backgroundColor+"; animation-duration:"+a.cssAnimationDuration+"ms; border-radius: "+a.borderRadius+";\"><div class=\""+a.className+"-head\"><h5 style=\"color:"+a.titleColor+";font-size:"+a.titleFontSize+";\">"+i+"</h5><div style=\"color:"+a.messageColor+";font-size:"+a.messageFontSize+";\">"+n+k+"</div></div><div class=\""+a.className+"-buttons\"><a id=\"NXConfirmButtonOk\" class=\"nx-confirm-button-ok"+("function"==typeof m?"":" nx-full")+"\" style=\"color:"+a.okButtonColor+";background:"+a.okButtonBackground+";font-size:"+a.buttonsFontSize+";\">"+r+"</a>"+y+"</div></div>",!t.document.getElementById(g.id)){t.document.body.appendChild(g);var L=t.document.getElementById(g.id),W=t.document.getElementById("NXConfirmButtonOk"),I=t.document.getElementById("NXConfirmValidationInput");if(I&&(I.focus(),I.setSelectionRange(0,(I.value||"").length),I.addEventListener("keyup",function(t){var i=t.target.value;if(e===f.Ask&&i!==h)t.preventDefault(),I.classList.add("nx-validation-failure"),I.classList.remove("nx-validation-success");else{e===f.Ask&&(I.classList.remove("nx-validation-failure"),I.classList.add("nx-validation-success"));var a="enter"===(t.key||"").toLocaleLowerCase("en")||13===t.keyCode;a&&W.dispatchEvent(new Event("click"))}})),W.addEventListener("click",function(t){if(e===f.Ask&&h&&I){var i=(I.value||"").toString();if(i!==h)return I.focus(),I.classList.add("nx-validation-failure"),t.stopPropagation(),t.preventDefault(),t.returnValue=!1,t.cancelBubble=!0,!1;I.classList.remove("nx-validation-failure")}"function"==typeof m&&(e===f.Prompt&&I&&(C=I.value||""),m(C)),L.classList.add("nx-remove");var n=setTimeout(function(){null!==L.parentNode&&(L.parentNode.removeChild(L),clearTimeout(n))},a.cssAnimationDuration)}),"function"==typeof m){var R=t.document.getElementById("NXConfirmButtonCancel");R.addEventListener("click",function(){"function"==typeof c&&(e===f.Prompt&&I&&(C=I.value||""),c(C)),L.classList.add("nx-remove");var t=setTimeout(function(){null!==L.parentNode&&(L.parentNode.removeChild(L),clearTimeout(t))},a.cssAnimationDuration)})}}a=v(!0,a,x)},P=function(){return"[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:\"Quicksand\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*=\"-icon\"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*=\"-icon\"] img,[id^=NotiflixLoadingWrap]>div[class*=\"-icon\"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}"},U=function(e,i,a,o,r){if(!w("body"))return!1;n||G.Loading.init({});var l=v(!0,n,{});if("object"==typeof i&&!Array.isArray(i)||"object"==typeof a&&!Array.isArray(a)){var m={};"object"==typeof i?m=i:"object"==typeof a&&(m=a),n=v(!0,n,m)}var c="";if("string"==typeof i&&0<i.length&&(c=i),o){c=c.length>n.messageMaxLength?N(c).toString().substring(0,n.messageMaxLength)+"...":N(c).toString();var p="";0<c.length&&(p="<p id=\""+n.messageID+"\" class=\"nx-loading-message\" style=\"color:"+n.messageColor+";font-size:"+n.messageFontSize+";\">"+c+"</p>"),n.cssAnimation||(n.cssAnimationDuration=0);var f="";if(e===x.Standard)f=W(n.svgSize,n.svgColor);else if(e===x.Hourglass)f=I(n.svgSize,n.svgColor);else if(e===x.Circle)f=R(n.svgSize,n.svgColor);else if(e===x.Arrows)f=A(n.svgSize,n.svgColor);else if(e===x.Dots)f=M(n.svgSize,n.svgColor);else if(e===x.Pulse)f=B(n.svgSize,n.svgColor);else if(e===x.Custom&&null!==n.customSvgCode&&null===n.customSvgUrl)f=n.customSvgCode||"";else if(e===x.Custom&&null!==n.customSvgUrl&&null===n.customSvgCode)f="<img class=\"nx-custom-loading-icon\" width=\""+n.svgSize+"\" height=\""+n.svgSize+"\" src=\""+n.customSvgUrl+"\" alt=\"Notiflix\">";else{if(e===x.Custom&&(null===n.customSvgUrl||null===n.customSvgCode))return y("You have to set a static SVG url to \"customSvgUrl\" option to use Loading Custom."),!1;f=X(n.svgSize,"#f8f8f8","#32c682")}var d=parseInt((n.svgSize||"").replace(/[^0-9]/g,"")),b=t.innerWidth,u=d>=b?b-40+"px":d+"px",k="<div style=\"width:"+u+"; height:"+u+";\" class=\""+n.className+"-icon"+(0<c.length?" nx-with-message":"")+"\">"+f+"</div>",h=t.document.createElement("div");if(h.id=g.ID,h.className=n.className+(n.cssAnimation?" nx-with-animation":"")+(n.clickToClose?" nx-loading-click-to-close":""),h.style.zIndex=n.zindex,h.style.background=n.backgroundColor,h.style.animationDuration=n.cssAnimationDuration+"ms",h.style.fontFamily="\""+n.fontFamily+"\", "+s,h.style.display="flex",h.style.flexWrap="wrap",h.style.flexDirection="column",h.style.alignItems="center",h.style.justifyContent="center",n.rtl&&(h.setAttribute("dir","rtl"),h.classList.add("nx-rtl-on")),h.innerHTML=k+p,!t.document.getElementById(h.id)&&(t.document.body.appendChild(h),n.clickToClose)){var C=t.document.getElementById(h.id);C.addEventListener("click",function(){h.classList.add("nx-remove");var t=setTimeout(function(){null!==h.parentNode&&(h.parentNode.removeChild(h),clearTimeout(t))},n.cssAnimationDuration)})}}else if(t.document.getElementById(g.ID))var z=t.document.getElementById(g.ID),S=setTimeout(function(){z.classList.add("nx-remove");var t=setTimeout(function(){null!==z.parentNode&&(z.parentNode.removeChild(z),clearTimeout(t))},n.cssAnimationDuration);clearTimeout(S)},r);n=v(!0,n,l)},V=function(e){"string"!=typeof e&&(e="");var i=t.document.getElementById(g.ID);if(i)if(0<e.length){e=e.length>n.messageMaxLength?N(e).substring(0,n.messageMaxLength)+"...":N(e);var a=i.getElementsByTagName("p")[0];if(a)a.innerHTML=e;else{var o=t.document.createElement("p");o.id=n.messageID,o.className="nx-loading-message nx-loading-message-new",o.style.color=n.messageColor,o.style.fontSize=n.messageFontSize,o.innerHTML=e,i.appendChild(o)}}else y("Where is the new message?")},q=function(){return"[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:\"Quicksand\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*=\"-icon\"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*=\"-icon\"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*=\"-message\"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}"},Q=0,Y=function(e,i,a,n,r,l){var m;if(Array.isArray(a)){if(1>a.length)return y("Array of HTMLElements should contains at least one HTMLElement."),!1;m=a}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,a)){if(1>a.length)return y("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;m=Array.prototype.slice.call(a)}else{var c="string"!=typeof a||1>(a||"").length||1===(a||"").length&&("#"===(a||"")[0]||"."===(a||"")[0]);if(c)return y("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var p=t.document.querySelectorAll(a);if(1>p.length)return y("You called the \"Notiflix.Block...\" function with \""+a+"\" selector, but there is no such element(s) in the document."),!1;m=p}o||G.Block.init({});var f=v(!0,o,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof r&&!Array.isArray(r)){var d={};"object"==typeof n?d=n:"object"==typeof r&&(d=r),o=v(!0,o,d)}var x="";"string"==typeof n&&0<n.length&&(x=n),o.cssAnimation||(o.cssAnimationDuration=0);var g=u.className;"string"==typeof o.className&&(g=o.className.trim());var h="number"==typeof o.querySelectorLimit?o.querySelectorLimit:200,C=(m||[]).length>=h?h:m.length,z="nx-block-temporary-position";if(e){for(var S,L=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],X=0;X<C;X++)if(S=m[X],S){if(-1<L.indexOf(S.tagName.toLocaleLowerCase("en")))break;var D=S.querySelectorAll("[id^="+u.ID+"]");if(1>D.length){var T="";i&&(i===b.Hourglass?T=I(o.svgSize,o.svgColor):i===b.Circle?T=R(o.svgSize,o.svgColor):i===b.Arrows?T=A(o.svgSize,o.svgColor):i===b.Dots?T=M(o.svgSize,o.svgColor):i===b.Pulse?T=B(o.svgSize,o.svgColor):T=W(o.svgSize,o.svgColor));var F="<span class=\""+g+"-icon\" style=\"width:"+o.svgSize+";height:"+o.svgSize+";\">"+T+"</span>",E="";0<x.length&&(x=x.length>o.messageMaxLength?N(x).substring(0,o.messageMaxLength)+"...":N(x),E="<span style=\"font-size:"+o.messageFontSize+";color:"+o.messageColor+";\" class=\""+g+"-message\">"+x+"</span>"),Q++;var j=t.document.createElement("div");j.id=u.ID+"-"+Q,j.className=g+(o.cssAnimation?" nx-with-animation":""),j.style.position=o.position,j.style.zIndex=o.zindex,j.style.background=o.backgroundColor,j.style.animationDuration=o.cssAnimationDuration+"ms",j.style.fontFamily="\""+o.fontFamily+"\", "+s,j.style.display="flex",j.style.flexWrap="wrap",j.style.flexDirection="column",j.style.alignItems="center",j.style.justifyContent="center",o.rtl&&(j.setAttribute("dir","rtl"),j.classList.add("nx-rtl-on")),j.innerHTML=F+E;var O=t.getComputedStyle(S).getPropertyValue("position"),H="string"==typeof O?O.toLocaleLowerCase("en"):"relative",P=Math.round(1.25*parseInt(o.svgSize))+40,U=S.offsetHeight||0,V="";P>U&&(V="min-height:"+P+"px;");var q="";q=S.getAttribute("id")?"#"+S.getAttribute("id"):S.classList[0]?"."+S.classList[0]:(S.tagName||"").toLocaleLowerCase("en");var Y="",K=-1>=["absolute","relative","fixed","sticky"].indexOf(H);if(K||0<V.length){if(!w("head"))return!1;K&&(Y="position:relative!important;");var $="<style id=\"Style-"+u.ID+"-"+Q+"\">"+q+"."+z+"{"+Y+V+"}</style>",J=t.document.createRange();J.selectNode(t.document.head);var Z=J.createContextualFragment($);t.document.head.appendChild(Z),S.classList.add(z)}S.appendChild(j)}}}else var _=function(e){var i=setTimeout(function(){null!==e.parentNode&&e.parentNode.removeChild(e);var a=e.getAttribute("id"),n=t.document.getElementById("Style-"+a);n&&null!==n.parentNode&&n.parentNode.removeChild(n),clearTimeout(i)},o.cssAnimationDuration)},tt=function(t){if(t&&0<t.length)for(var e,n=0;n<t.length;n++)e=t[n],e&&(e.classList.add("nx-remove"),_(e));else"string"==typeof a?k("\"Notiflix.Block.remove();\" function called with \""+a+"\" selector, but this selector does not have a \"Block\" element to remove."):k("\"Notiflix.Block.remove();\" function called with \""+a+"\", but this \"Array<HTMLElement>\" or \"NodeListOf<HTMLElement>\" does not have a \"Block\" element to remove.")},et=function(t){var e=setTimeout(function(){t.classList.remove(z),clearTimeout(e)},o.cssAnimationDuration+300)},it=setTimeout(function(){for(var t,e=0;e<C;e++)t=m[e],t&&(et(t),D=t.querySelectorAll("[id^="+u.ID+"]"),tt(D));clearTimeout(it)},l);o=v(!0,o,f)},G={Notify:{init:function(t){e=v(!0,m,t),h(D,"NotiflixNotifyInternalCSS")},merge:function(t){return e?void(e=v(!0,e,t)):(y("You have to initialize the Notify module before call Merge function."),!1)},success:function(t,e,i){F(l.Success,t,e,i)},failure:function(t,e,i){F(l.Failure,t,e,i)},warning:function(t,e,i){F(l.Warning,t,e,i)},info:function(t,e,i){F(l.Info,t,e,i)}},Report:{init:function(t){i=v(!0,p,t),h(E,"NotiflixReportInternalCSS")},merge:function(t){return i?void(i=v(!0,i,t)):(y("You have to initialize the Report module before call Merge function."),!1)},success:function(t,e,i,a,n){j(c.Success,t,e,i,a,n)},failure:function(t,e,i,a,n){j(c.Failure,t,e,i,a,n)},warning:function(t,e,i,a,n){j(c.Warning,t,e,i,a,n)},info:function(t,e,i,a,n){j(c.Info,t,e,i,a,n)}},Confirm:{init:function(t){a=v(!0,d,t),h(O,"NotiflixConfirmInternalCSS")},merge:function(t){return a?void(a=v(!0,a,t)):(y("You have to initialize the Confirm module before call Merge function."),!1)},show:function(t,e,i,a,n,o,r){H(f.Show,t,e,null,i,a,n,o,r)},ask:function(t,e,i,a,n,o,r,s){H(f.Ask,t,e,i,a,n,o,r,s)},prompt:function(t,e,i,a,n,o,r,s){H(f.Prompt,t,e,i,a,n,o,r,s)}},Loading:{init:function(t){n=v(!0,g,t),h(P,"NotiflixLoadingInternalCSS")},merge:function(t){return n?void(n=v(!0,n,t)):(y("You have to initialize the Loading module before call Merge function."),!1)},standard:function(t,e){U(x.Standard,t,e,!0,0)},hourglass:function(t,e){U(x.Hourglass,t,e,!0,0)},circle:function(t,e){U(x.Circle,t,e,!0,0)},arrows:function(t,e){U(x.Arrows,t,e,!0,0)},dots:function(t,e){U(x.Dots,t,e,!0,0)},pulse:function(t,e){U(x.Pulse,t,e,!0,0)},custom:function(t,e){U(x.Custom,t,e,!0,0)},notiflix:function(t,e){U(x.Notiflix,t,e,!0,0)},remove:function(t){"number"!=typeof t&&(t=0),U(null,null,null,!1,t)},change:function(t){V(t)}},Block:{init:function(t){o=v(!0,u,t),h(q,"NotiflixBlockInternalCSS")},merge:function(t){return o?void(o=v(!0,o,t)):(y("You have to initialize the \"Notiflix.Block\" module before call Merge function."),!1)},standard:function(t,e,i){Y(!0,b.Standard,t,e,i)},hourglass:function(t,e,i){Y(!0,b.Hourglass,t,e,i)},circle:function(t,e,i){Y(!0,b.Circle,t,e,i)},arrows:function(t,e,i){Y(!0,b.Arrows,t,e,i)},dots:function(t,e,i){Y(!0,b.Dots,t,e,i)},pulse:function(t,e,i){Y(!0,b.Pulse,t,e,i)},remove:function(t,e){"number"!=typeof e&&(e=0),Y(!1,null,t,null,null,e)}}};return"object"==typeof t.Notiflix?v(!0,t.Notiflix,{Notify:G.Notify,Report:G.Report,Confirm:G.Confirm,Loading:G.Loading,Block:G.Block}):{Notify:G.Notify,Report:G.Report,Confirm:G.Confirm,Loading:G.Loading,Block:G.Block}});

/***/ }),

/***/ "../../node_modules/axios/lib/adapters/adapters.js":
/*!*********************************************************!*\
  !*** ../../node_modules/axios/lib/adapters/adapters.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "../../node_modules/axios/lib/utils.js");
/* harmony import */ var _http_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.js */ "../../node_modules/axios/lib/helpers/null.js");
/* harmony import */ var _xhr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xhr.js */ "../../node_modules/axios/lib/adapters/xhr.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/AxiosError.js */ "../../node_modules/axios/lib/core/AxiosError.js");





const knownAdapters = {
  http: _http_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  xhr: _xhr_js__WEBPACK_IMPORTED_MODULE_1__["default"]
}

_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

const renderReason = (reason) => `- ${reason}`;

const isResolvedHandle = (adapter) => _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFunction(adapter) || adapter === null || adapter === false;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getAdapter: (adapters) => {
    adapters = _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    const rejectedReasons = {};

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;

      adapter = nameOrAdapter;

      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];

        if (adapter === undefined) {
          throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"](`Unknown adapter '${id}'`);
        }
      }

      if (adapter) {
        break;
      }

      rejectedReasons[id || '#' + i] = adapter;
    }

    if (!adapter) {

      const reasons = Object.entries(rejectedReasons)
        .map(([id, state]) => `adapter ${id} ` +
          (state === false ? 'is not supported by the environment' : 'is not available in the build')
        );

      let s = length ?
        (reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0])) :
        'as no adapter specified';

      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"](
        `There is no suitable adapter to dispatch the request ` + s,
        'ERR_NOT_SUPPORT'
      );
    }

    return adapter;
  },
  adapters: knownAdapters
});


/***/ }),

/***/ "../../node_modules/axios/lib/adapters/xhr.js":
/*!****************************************************!*\
  !*** ../../node_modules/axios/lib/adapters/xhr.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils.js */ "../../node_modules/axios/lib/utils.js");
/* harmony import */ var _core_settle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../core/settle.js */ "../../node_modules/axios/lib/core/settle.js");
/* harmony import */ var _helpers_cookies_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../helpers/cookies.js */ "../../node_modules/axios/lib/helpers/cookies.js");
/* harmony import */ var _helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../helpers/buildURL.js */ "../../node_modules/axios/lib/helpers/buildURL.js");
/* harmony import */ var _core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/buildFullPath.js */ "../../node_modules/axios/lib/core/buildFullPath.js");
/* harmony import */ var _helpers_isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../helpers/isURLSameOrigin.js */ "../../node_modules/axios/lib/helpers/isURLSameOrigin.js");
/* harmony import */ var _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../defaults/transitional.js */ "../../node_modules/axios/lib/defaults/transitional.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/AxiosError.js */ "../../node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "../../node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/parseProtocol.js */ "../../node_modules/axios/lib/helpers/parseProtocol.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../platform/index.js */ "../../node_modules/axios/lib/platform/index.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "../../node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _helpers_speedometer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/speedometer.js */ "../../node_modules/axios/lib/helpers/speedometer.js");
















function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = (0,_helpers_speedometer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(50, 250);

  return e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };

    data[isDownloadStream ? 'download' : 'upload'] = true;

    listener(data);
  };
}

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(config.headers).normalize();
    let {responseType, withXSRFToken} = config;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    let contentType;

    if (_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFormData(requestData)) {
      if (_platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].hasStandardBrowserEnv || _platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].hasStandardBrowserWebWorkerEnv) {
        requestHeaders.setContentType(false); // Let the browser set it
      } else if ((contentType = requestHeaders.getContentType()) !== false) {
        // fix semicolon duplication issue for ReactNative FormData implementation
        const [type, ...tokens] = contentType ? contentType.split(';').map(token => token.trim()).filter(Boolean) : [];
        requestHeaders.setContentType([type || 'multipart/form-data', ...tokens].join('; '));
      }
    }

    let request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }

    const fullPath = (0,_core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_4__["default"])(config.baseURL, config.url);

    request.open(config.method.toUpperCase(), (0,_helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_5__["default"])(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      (0,_core_settle_js__WEBPACK_IMPORTED_MODULE_6__["default"])(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Request aborted', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Network Error', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = config.transitional || _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_8__["default"];
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"](
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ETIMEDOUT : _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if(_platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].hasStandardBrowserEnv) {
      withXSRFToken && _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(config));

      if (withXSRFToken || (withXSRFToken !== false && (0,_helpers_isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_9__["default"])(fullPath))) {
        // Add xsrf header
        const xsrfValue = config.xsrfHeaderName && config.xsrfCookieName && _helpers_cookies_js__WEBPACK_IMPORTED_MODULE_10__["default"].read(config.xsrfCookieName);

        if (xsrfValue) {
          requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
      }
    }

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_11__["default"](null, config, request) : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = (0,_helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_12__["default"])(fullPath);

    if (protocol && _platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].protocols.indexOf(protocol) === -1) {
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Unsupported protocol ' + protocol + ':', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
});


/***/ }),

/***/ "../../node_modules/axios/lib/axios.js":
/*!*********************************************!*\
  !*** ../../node_modules/axios/lib/axios.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "../../node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/bind.js */ "../../node_modules/axios/lib/helpers/bind.js");
/* harmony import */ var _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Axios.js */ "../../node_modules/axios/lib/core/Axios.js");
/* harmony import */ var _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/mergeConfig.js */ "../../node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaults/index.js */ "../../node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers/formDataToJSON.js */ "../../node_modules/axios/lib/helpers/formDataToJSON.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cancel/CanceledError.js */ "../../node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancel/CancelToken.js */ "../../node_modules/axios/lib/cancel/CancelToken.js");
/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cancel/isCancel.js */ "../../node_modules/axios/lib/cancel/isCancel.js");
/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./env/data.js */ "../../node_modules/axios/lib/env/data.js");
/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/toFormData.js */ "../../node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/AxiosError.js */ "../../node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/spread.js */ "../../node_modules/axios/lib/helpers/spread.js");
/* harmony import */ var _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/isAxiosError.js */ "../../node_modules/axios/lib/helpers/isAxiosError.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/AxiosHeaders.js */ "../../node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./adapters/adapters.js */ "../../node_modules/axios/lib/adapters/adapters.js");
/* harmony import */ var _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers/HttpStatusCode.js */ "../../node_modules/axios/lib/helpers/HttpStatusCode.js");




















/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"](defaultConfig);
  const instance = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.request, context);

  // Copy axios.prototype to instance
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype, context, {allOwnKeys: true});

  // Copy context to instance
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance((0,_core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"])(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(_defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"]);

// Expose Axios class to allow class inheritance
axios.Axios = _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"];

// Expose Cancel & CancelToken
axios.CanceledError = _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__["default"];
axios.CancelToken = _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__["default"];
axios.isCancel = _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__["default"];
axios.VERSION = _env_data_js__WEBPACK_IMPORTED_MODULE_8__.VERSION;
axios.toFormData = _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__["default"];

// Expose AxiosError class
axios.AxiosError = _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__["default"];

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__["default"];

// Expose isAxiosError
axios.isAxiosError = _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__["default"];

// Expose mergeConfig
axios.mergeConfig = _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"];

axios.AxiosHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__["default"];

axios.formToJSON = thing => (0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isHTMLForm(thing) ? new FormData(thing) : thing);

axios.getAdapter = _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_15__["default"].getAdapter;

axios.HttpStatusCode = _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_16__["default"];

axios.default = axios;

// this module should only have a default export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios);


/***/ }),

/***/ "../../node_modules/axios/lib/cancel/CancelToken.js":
/*!**********************************************************!*\
  !*** ../../node_modules/axios/lib/cancel/CancelToken.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanceledError.js */ "../../node_modules/axios/lib/cancel/CanceledError.js");




/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CancelToken);


/***/ }),

/***/ "../../node_modules/axios/lib/cancel/CanceledError.js":
/*!************************************************************!*\
  !*** ../../node_modules/axios/lib/cancel/CanceledError.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/AxiosError.js */ "../../node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "../../node_modules/axios/lib/utils.js");





/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, message == null ? 'canceled' : message, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].inherits(CanceledError, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
  __CANCEL__: true
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanceledError);


/***/ }),

/***/ "../../node_modules/axios/lib/cancel/isCancel.js":
/*!*******************************************************!*\
  !*** ../../node_modules/axios/lib/cancel/isCancel.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isCancel)
/* harmony export */ });


function isCancel(value) {
  return !!(value && value.__CANCEL__);
}


/***/ }),

/***/ "../../node_modules/axios/lib/core/Axios.js":
/*!**************************************************!*\
  !*** ../../node_modules/axios/lib/core/Axios.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils.js */ "../../node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/buildURL.js */ "../../node_modules/axios/lib/helpers/buildURL.js");
/* harmony import */ var _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InterceptorManager.js */ "../../node_modules/axios/lib/core/InterceptorManager.js");
/* harmony import */ var _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dispatchRequest.js */ "../../node_modules/axios/lib/core/dispatchRequest.js");
/* harmony import */ var _mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mergeConfig.js */ "../../node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buildFullPath.js */ "../../node_modules/axios/lib/core/buildFullPath.js");
/* harmony import */ var _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/validator.js */ "../../node_modules/axios/lib/helpers/validator.js");
/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AxiosHeaders.js */ "../../node_modules/axios/lib/core/AxiosHeaders.js");











const validators = _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"](),
      response: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"]()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        }
      } else {
        _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].merge(
      headers.common,
      headers[config.method]
    );

    headers && _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__["default"].concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [_dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);
    const fullPath = (0,_buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__["default"])(config.baseURL, config.url);
    return (0,_helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__["default"])(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Axios);


/***/ }),

/***/ "../../node_modules/axios/lib/core/AxiosError.js":
/*!*******************************************************!*\
  !*** ../../node_modules/axios/lib/core/AxiosError.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "../../node_modules/axios/lib/utils.js");




/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

const prototype = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype);

  _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosError);


/***/ }),

/***/ "../../node_modules/axios/lib/core/AxiosHeaders.js":
/*!*********************************************************!*\
  !*** ../../node_modules/axios/lib/core/AxiosHeaders.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "../../node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/parseHeaders.js */ "../../node_modules/axios/lib/helpers/parseHeaders.js");





const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(value)) return;

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite)
    } else if(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders((0,_helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"])(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, (value, header) => {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

// reserved names hotfix
_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].reduceDescriptors(AxiosHeaders.prototype, ({value}, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  }
});

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].freezeMethods(AxiosHeaders);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosHeaders);


/***/ }),

/***/ "../../node_modules/axios/lib/core/InterceptorManager.js":
/*!***************************************************************!*\
  !*** ../../node_modules/axios/lib/core/InterceptorManager.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "../../node_modules/axios/lib/utils.js");




class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterceptorManager);


/***/ }),

/***/ "../../node_modules/axios/lib/core/buildFullPath.js":
/*!**********************************************************!*\
  !*** ../../node_modules/axios/lib/core/buildFullPath.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFullPath)
/* harmony export */ });
/* harmony import */ var _helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/isAbsoluteURL.js */ "../../node_modules/axios/lib/helpers/isAbsoluteURL.js");
/* harmony import */ var _helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/combineURLs.js */ "../../node_modules/axios/lib/helpers/combineURLs.js");





/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !(0,_helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__["default"])(requestedURL)) {
    return (0,_helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__["default"])(baseURL, requestedURL);
  }
  return requestedURL;
}


/***/ }),

/***/ "../../node_modules/axios/lib/core/dispatchRequest.js":
/*!************************************************************!*\
  !*** ../../node_modules/axios/lib/core/dispatchRequest.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dispatchRequest)
/* harmony export */ });
/* harmony import */ var _transformData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transformData.js */ "../../node_modules/axios/lib/core/transformData.js");
/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cancel/isCancel.js */ "../../node_modules/axios/lib/cancel/isCancel.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../defaults/index.js */ "../../node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "../../node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "../../node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adapters/adapters.js */ "../../node_modules/axios/lib/adapters/adapters.js");









/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(config.headers);

  // Transform request data
  config.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_3__["default"].getAdapter(config.adapter || _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"].adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(
      config,
      config.transformResponse,
      response
    );

    response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!(0,_cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__["default"])(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}


/***/ }),

/***/ "../../node_modules/axios/lib/core/mergeConfig.js":
/*!********************************************************!*\
  !*** ../../node_modules/axios/lib/core/mergeConfig.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergeConfig)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "../../node_modules/axios/lib/utils.js");
/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosHeaders.js */ "../../node_modules/axios/lib/core/AxiosHeaders.js");





const headersToObject = (thing) => thing instanceof _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? thing.toJSON() : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, caseless) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(target) && _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(source)) {
      return _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].merge.call({caseless}, target, source);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(source)) {
      return _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].merge({}, source);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };

  _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}


/***/ }),

/***/ "../../node_modules/axios/lib/core/settle.js":
/*!***************************************************!*\
  !*** ../../node_modules/axios/lib/core/settle.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ settle)
/* harmony export */ });
/* harmony import */ var _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosError.js */ "../../node_modules/axios/lib/core/AxiosError.js");




/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"](
      'Request failed with status code ' + response.status,
      [_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_REQUEST, _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}


/***/ }),

/***/ "../../node_modules/axios/lib/core/transformData.js":
/*!**********************************************************!*\
  !*** ../../node_modules/axios/lib/core/transformData.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transformData)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils.js */ "../../node_modules/axios/lib/utils.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaults/index.js */ "../../node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "../../node_modules/axios/lib/core/AxiosHeaders.js");






/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || _defaults_index_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  const context = response || config;
  const headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(context.headers);
  let data = context.data;

  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}


/***/ }),

/***/ "../../node_modules/axios/lib/defaults/index.js":
/*!******************************************************!*\
  !*** ../../node_modules/axios/lib/defaults/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "../../node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/AxiosError.js */ "../../node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _transitional_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitional.js */ "../../node_modules/axios/lib/defaults/transitional.js");
/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/toFormData.js */ "../../node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/toURLEncodedForm.js */ "../../node_modules/axios/lib/helpers/toURLEncodedForm.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../platform/index.js */ "../../node_modules/axios/lib/platform/index.js");
/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/formDataToJSON.js */ "../../node_modules/axios/lib/helpers/formDataToJSON.js");










/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: _transitional_js__WEBPACK_IMPORTED_MODULE_1__["default"],

  adapter: ['xhr', 'http'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(data);

    if (isObjectPayload && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(data);

    if (isFormData) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify((0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data)) : data;
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBuffer(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStream(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFile(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(data)
    ) {
      return data;
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBufferView(data)) {
      return data.buffer;
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return (0,_helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data, this.formSerializer).toString();
      }

      if ((isFileList = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return (0,_helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (data && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__["default"].from(e, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__["default"].ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: _platform_index_js__WEBPACK_IMPORTED_MODULE_6__["default"].classes.FormData,
    Blob: _platform_index_js__WEBPACK_IMPORTED_MODULE_6__["default"].classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
  defaults.headers[method] = {};
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaults);


/***/ }),

/***/ "../../node_modules/axios/lib/defaults/transitional.js":
/*!*************************************************************!*\
  !*** ../../node_modules/axios/lib/defaults/transitional.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
});


/***/ }),

/***/ "../../node_modules/axios/lib/env/data.js":
/*!************************************************!*\
  !*** ../../node_modules/axios/lib/env/data.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VERSION": () => (/* binding */ VERSION)
/* harmony export */ });
const VERSION = "1.6.5";

/***/ }),

/***/ "../../node_modules/axios/lib/helpers/AxiosURLSearchParams.js":
/*!********************************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/AxiosURLSearchParams.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ "../../node_modules/axios/lib/helpers/toFormData.js");




/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, this, options);
}

const prototype = AxiosURLSearchParams.prototype;

prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosURLSearchParams);


/***/ }),

/***/ "../../node_modules/axios/lib/helpers/HttpStatusCode.js":
/*!**************************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/HttpStatusCode.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HttpStatusCode);


/***/ }),

/***/ "../../node_modules/axios/lib/helpers/bind.js":
/*!****************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/bind.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bind)
/* harmony export */ });


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}


/***/ }),

/***/ "../../node_modules/axios/lib/helpers/buildURL.js":
/*!********************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/buildURL.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildURL)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "../../node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/AxiosURLSearchParams.js */ "../../node_modules/axios/lib/helpers/AxiosURLSearchParams.js");





/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || encode;

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(params) ?
      params.toString() :
      new _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__["default"](params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}


/***/ }),

/***/ "../../node_modules/axios/lib/helpers/combineURLs.js":
/*!***********************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/combineURLs.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ combineURLs)
/* harmony export */ });


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}


/***/ }),

/***/ "../../node_modules/axios/lib/helpers/cookies.js":
/*!*******************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/cookies.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils.js */ "../../node_modules/axios/lib/utils.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "../../node_modules/axios/lib/platform/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasStandardBrowserEnv ?

  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure) {
      const cookie = [name + '=' + encodeURIComponent(value)];

      _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());

      _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(path) && cookie.push('path=' + path);

      _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(domain) && cookie.push('domain=' + domain);

      secure === true && cookie.push('secure');

      document.cookie = cookie.join('; ');
    },

    read(name) {
      const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return (match ? decodeURIComponent(match[3]) : null);
    },

    remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  }

  :

  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {},
    read() {
      return null;
    },
    remove() {}
  });



/***/ }),

/***/ "../../node_modules/axios/lib/helpers/formDataToJSON.js":
/*!**************************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/formDataToJSON.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "../../node_modules/axios/lib/utils.js");




/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];

    if (name === '__proto__') return true;

    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target) ? target.length : name;

    if (isLast) {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(formData) && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(formData.entries)) {
    const obj = {};

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formDataToJSON);


/***/ }),

/***/ "../../node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*************************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAbsoluteURL)
/* harmony export */ });


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}


/***/ }),

/***/ "../../node_modules/axios/lib/helpers/isAxiosError.js":
/*!************************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/isAxiosError.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAxiosError)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "../../node_modules/axios/lib/utils.js");




/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(payload) && (payload.isAxiosError === true);
}


/***/ }),

/***/ "../../node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***************************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils.js */ "../../node_modules/axios/lib/utils.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "../../node_modules/axios/lib/platform/index.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasStandardBrowserEnv ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement('a');
    let originURL;

    /**
    * Parse a URL to discover its components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      let href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
          urlParsingNode.pathname :
          '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      const parsed = (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
          parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })());


/***/ }),

/***/ "../../node_modules/axios/lib/helpers/null.js":
/*!****************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/null.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// eslint-disable-next-line strict
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);


/***/ }),

/***/ "../../node_modules/axios/lib/helpers/parseHeaders.js":
/*!************************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/parseHeaders.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "../../node_modules/axios/lib/utils.js");




// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
});


/***/ }),

/***/ "../../node_modules/axios/lib/helpers/parseProtocol.js":
/*!*************************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/parseProtocol.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseProtocol)
/* harmony export */ });


function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}


/***/ }),

/***/ "../../node_modules/axios/lib/helpers/speedometer.js":
/*!***********************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/speedometer.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (speedometer);


/***/ }),

/***/ "../../node_modules/axios/lib/helpers/spread.js":
/*!******************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/spread.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ spread)
/* harmony export */ });


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}


/***/ }),

/***/ "../../node_modules/axios/lib/helpers/toFormData.js":
/*!**********************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/toFormData.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "../../node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/AxiosError.js */ "../../node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/node/classes/FormData.js */ "../../node_modules/axios/lib/helpers/null.js");




// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored


/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(thing) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(arr) && !arr.some(isVisitable);
}

const predicates = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"], {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (_platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"] || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isSpecCompliantForm(formData);

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(value)) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"]('Blob is not supported. Use a Buffer instead.');
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) && isFlatArray(value)) ||
        ((_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '[]')) && (arr = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(value, function each(el, key) {
      const result = !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) && visitor.call(
        formData, el, _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toFormData);


/***/ }),

/***/ "../../node_modules/axios/lib/helpers/toURLEncodedForm.js":
/*!****************************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/toURLEncodedForm.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toURLEncodedForm)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "../../node_modules/axios/lib/utils.js");
/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ "../../node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/index.js */ "../../node_modules/axios/lib/platform/index.js");






function toURLEncodedForm(data, options) {
  return (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, new _platform_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (_platform_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNode && _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}


/***/ }),

/***/ "../../node_modules/axios/lib/helpers/validator.js":
/*!*********************************************************!*\
  !*** ../../node_modules/axios/lib/helpers/validator.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env/data.js */ "../../node_modules/axios/lib/env/data.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosError.js */ "../../node_modules/axios/lib/core/AxiosError.js");





const validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + _env_data_js__WEBPACK_IMPORTED_MODULE_0__.VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"](
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('options must be an object', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('option ' + opt + ' must be ' + result, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Unknown option ' + opt, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  assertOptions,
  validators
});


/***/ }),

/***/ "../../node_modules/axios/lib/platform/browser/classes/Blob.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/axios/lib/platform/browser/classes/Blob.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof Blob !== 'undefined' ? Blob : null);


/***/ }),

/***/ "../../node_modules/axios/lib/platform/browser/classes/FormData.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/axios/lib/platform/browser/classes/FormData.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof FormData !== 'undefined' ? FormData : null);


/***/ }),

/***/ "../../node_modules/axios/lib/platform/browser/classes/URLSearchParams.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/axios/lib/platform/browser/classes/URLSearchParams.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/AxiosURLSearchParams.js */ "../../node_modules/axios/lib/helpers/AxiosURLSearchParams.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof URLSearchParams !== 'undefined' ? URLSearchParams : _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "../../node_modules/axios/lib/platform/browser/index.js":
/*!**************************************************************!*\
  !*** ../../node_modules/axios/lib/platform/browser/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/URLSearchParams.js */ "../../node_modules/axios/lib/platform/browser/classes/URLSearchParams.js");
/* harmony import */ var _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/FormData.js */ "../../node_modules/axios/lib/platform/browser/classes/FormData.js");
/* harmony import */ var _classes_Blob_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Blob.js */ "../../node_modules/axios/lib/platform/browser/classes/Blob.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isBrowser: true,
  classes: {
    URLSearchParams: _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    FormData: _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    Blob: _classes_Blob_js__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
});


/***/ }),

/***/ "../../node_modules/axios/lib/platform/common/utils.js":
/*!*************************************************************!*\
  !*** ../../node_modules/axios/lib/platform/common/utils.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasBrowserEnv": () => (/* binding */ hasBrowserEnv),
/* harmony export */   "hasStandardBrowserEnv": () => (/* binding */ hasStandardBrowserEnv),
/* harmony export */   "hasStandardBrowserWebWorkerEnv": () => (/* binding */ hasStandardBrowserWebWorkerEnv)
/* harmony export */ });
const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const hasStandardBrowserEnv = (
  (product) => {
    return hasBrowserEnv && ['ReactNative', 'NativeScript', 'NS'].indexOf(product) < 0
  })(typeof navigator !== 'undefined' && navigator.product);

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
const hasStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();




/***/ }),

/***/ "../../node_modules/axios/lib/platform/index.js":
/*!******************************************************!*\
  !*** ../../node_modules/axios/lib/platform/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node/index.js */ "../../node_modules/axios/lib/platform/browser/index.js");
/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/utils.js */ "../../node_modules/axios/lib/platform/common/utils.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ..._common_utils_js__WEBPACK_IMPORTED_MODULE_0__,
  ..._node_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});


/***/ }),

/***/ "../../node_modules/axios/lib/utils.js":
/*!*********************************************!*\
  !*** ../../node_modules/axios/lib/utils.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/bind.js */ "../../node_modules/axios/lib/helpers/bind.js");




// utils is a library of generic helper functions non-specific to axios

const {toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
}

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
}

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  let kind;
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) || (
      isFunction(thing.append) && (
        (kind = kindOf(thing)) === 'formdata' ||
        // detect form-data instance
        (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  )
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  }

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__["default"])(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
}

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
}

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
}

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
}

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  }

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
}

const noop = () => {}

const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
}

const ALPHA = 'abcdefghijklmnopqrstuvwxyz'

const DIGIT = '0123456789';

const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
}

const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {length} = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length|0]
  }

  return str;
}

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  }

  return visit(obj, 0);
}

const isAsyncFn = kindOfTest('AsyncFunction');

const isThenable = (thing) =>
  thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./home/index.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scss/index */ "../scss/index.js");
/* harmony import */ var _components_header_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/header/index */ "../components/header/index.js");
/* harmony import */ var _components_main_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/main/index */ "../components/main/index.js");
/* harmony import */ var _components_cards_list_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cards-list/index */ "../components/cards-list/index.js");
/* harmony import */ var _components_footer_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/footer/index */ "../components/footer/index.js");
/* harmony import */ var _page_components_home_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../page-components/home/index */ "../page-components/home/index.js");
// base styles


// components





// page-components

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0EsT0FBTyxTQUFTOztBQUVoQjtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FB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OztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsUUFBUTtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7VUNsdEJGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUMwQjs7QUFFMUI7QUFDdUM7QUFDSDtBQUNNO0FBQ0g7O0FBRXZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL2FwaS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbXBvbmVudHMvbWFpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vcGFnZS1jb21wb25lbnRzL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3Njc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbXBvbmVudHMvY2FyZHMtbGlzdC9pbmRleC5zY3NzIiwid2VicGFjazovLy8uLi9jb21wb25lbnRzL2Zvb3Rlci9pbmRleC5zY3NzIiwid2VicGFjazovLy8uLi9jb21wb25lbnRzL2hlYWRlci9pbmRleC5zY3NzIiwid2VicGFjazovLy8uLi9jb21wb25lbnRzL21haW4vaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi4vcGFnZS1jb21wb25lbnRzL2hvbWUvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi4vc2Nzcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uLi9zY3NzL25vcm1hbGl6ZS5zY3NzIiwid2VicGFjazovLy8uLi9zY3NzL3Jlc2V0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4uL3Njc3MvdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9ub3RpZmxpeC9kaXN0L25vdGlmbGl4LWFpby0zLjIuNy5taW4uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMvYWRhcHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsZWRFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvc0hlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9idWlsZEZ1bGxQYXRoLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzL3RyYW5zaXRpb25hbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9lbnYvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL0F4aW9zVVJMU2VhcmNoUGFyYW1zLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvSHR0cFN0YXR1c0NvZGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9mb3JtRGF0YVRvSlNPTi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0F4aW9zRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9udWxsLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VQcm90b2NvbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwZWVkb21ldGVyLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvdG9Gb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3RvVVJMRW5jb2RlZEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy92YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvcGxhdGZvcm0vYnJvd3Nlci9jbGFzc2VzL0Jsb2IuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvcGxhdGZvcm0vYnJvd3Nlci9jbGFzc2VzL0Zvcm1EYXRhLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3BsYXRmb3JtL2Jyb3dzZXIvY2xhc3Nlcy9VUkxTZWFyY2hQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvcGxhdGZvcm0vYnJvd3Nlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9jb21tb24vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvcGxhdGZvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2hvbWUvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgYmFzZVVSTCA9IFwiaHR0cHM6Ly82NTlkMzNkYTYzM2Y5YWVlNzkwOGUyNjYubW9ja2FwaS5pby9wcm9kdWN0c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE1lbnUgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGJhc2VVUkwpO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nXCIsIGVycm9yKTtcclxuICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XHJcbmltcG9ydCBOb3RpZmxpeCBmcm9tIFwibm90aWZsaXhcIjtcclxuaW1wb3J0IHsgZ2V0TWVudSB9IGZyb20gXCIuLi8uLi9hcGkvYXBpXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhQW5kU2F2ZVRvTG9jYWxTdG9yYWdlKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0TWVudSgpO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibWVudURhdGFcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgTm90aWZsaXguTm90aWZ5LmZhaWx1cmUoXCJFcnJvciBmZXRjaGluZyBkYXRhXCIpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiByZW5kZXJNZW51KCkge1xyXG4gIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzLWxpc3RcIik7XHJcbiAgY29uc3QgbWVudURhdGEgPSBhd2FpdCBnZXREYXRhQW5kU2F2ZVRvTG9jYWxTdG9yYWdlKCk7XHJcblxyXG4gIC8v0JLRgdGC0LDQvdC+0LLQu9C10L3QvdGPINC00LXRhNC+0LvRgtC90LjRhSDQt9C90LDRh9C10L3RjCDQt9CwINCy0ZbQtNGB0YPRgtC90L7RgdGC0ZYg0LTQsNC90L3QuNGFXHJcbiAgY29uc3QgbWVudUxpc3QgPSBtZW51RGF0YS5tYXAoKGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IGltZyA9IGl0ZW0uaW1hZ2VVcmwgPyBpdGVtLmltYWdlVXJsIDogXCIvc3JjL2Fzc2V0cy9pbWFnZXMvYnVyZ2VyLnBuZ1wiO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBpdGVtLmRlc2NyaXB0aW9uXHJcbiAgICAgID8gaXRlbS5kZXNjcmlwdGlvblxyXG4gICAgICA6IFwiZGVmYXVsdCBkZXNjcmlwdGlvblwiO1xyXG4gICAgY29uc3QgZGlzY291bnQgPVxyXG4gICAgICBpdGVtLmRpc2NvdW50ICE9PSB1bmRlZmluZWQgJiYgaXRlbS5kaXNjb3VudCAhPT0gbnVsbFxyXG4gICAgICAgID8gYC0ke2l0ZW0uZGlzY291bnR9JGBcclxuICAgICAgICA6IFwiXCI7XHJcblxyXG4gICAgLy/QodGC0LLQvtGA0Y7RlNC80L4g0L/RgNCw0L/QvtGA0LXRhtGMINC00LvRjyDQv9C10YDQtdCy0ZbRgNC60Lgg0L3QsNGP0LLQvdC+0YHRgtGWINC30L3QuNC20LrQuFxyXG4gICAgY29uc3QgaGFzRGlzY291bnRQcmljZSA9XHJcbiAgICAgIGl0ZW0uZGlzY291bnRQcmljZSAhPT0gdW5kZWZpbmVkICYmIGl0ZW0uZGlzY291bnRQcmljZSAhPT0gbnVsbDtcclxuXHJcbiAgICAvLyDQntC60YDRg9Cz0LvQtdC90L3RjyDQt9C90LDRh9C10L3RjCBwcmljZSDRgtCwIGRpc2NvdW50UHJpY2Ug0LTQviAxINGB0LjQvNCy0L7Qu9GDINC/0ZbRgdC70Y8g0LrQvtC80LhcclxuICAgIGNvbnN0IGZvcm1hdHRlZFByaWNlID0gTnVtYmVyKGl0ZW0ucHJpY2UpLnRvRml4ZWQoMSk7XHJcbiAgICBjb25zdCBmb3JtYXR0ZWREaXNjb3VudFByaWNlID0gaGFzRGlzY291bnRQcmljZVxyXG4gICAgICA/IE51bWJlcihpdGVtLmRpc2NvdW50UHJpY2UpLnRvRml4ZWQoMSlcclxuICAgICAgOiBcIlwiO1xyXG5cclxuICAgIHJldHVybiBgPGxpIGlkPVwiJHtpdGVtLmlkfVwiIGNsYXNzPVwiY2FyZHMtbGlzdF9faXRlbVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibGlzdC1pdGVtX19pbWctY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGltZyBjbGFzcz1cImxpc3QtaXRlbV9fY2FyZC1pbWdcIiBzcmM9XCIke2ltZ31cIiBhbHQ9XCJcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImxpc3QtaXRlbV9fY2FyZC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwibGlzdC1pdGVtX19jYXJkLW5hbWVcIj4ke2l0ZW0udGl0bGV9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwibGlzdC1pdGVtX19jYXJkLXdlaWdodFwiPiR7aXRlbS53ZWlnaHR9ZzwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1pdGVtX19jYXJkLXByaWNlLXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwibGlzdC1pdGVtX19jYXJkLXByaWNlICR7XHJcbiAgICAgICAgICAgIGhhc0Rpc2NvdW50UHJpY2UgPyBcImlzLWRpc2NvdW50XCIgOiBcIlwiXHJcbiAgICAgICAgICB9XCI+JCAke2Zvcm1hdHRlZFByaWNlfTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwibGlzdC1pdGVtX19jYXJkLWRpc2NvdW50UHJpY2UgJHtcclxuICAgICAgICAgICAgaGFzRGlzY291bnRQcmljZSA/IFwiXCIgOiBcImlzLXZpc2libGUtZGlzY291bnRcIlxyXG4gICAgICAgICAgfVwiPiQke2Zvcm1hdHRlZERpc2NvdW50UHJpY2V9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzPVwibGlzdC1pdGVtX19jYXJkLWRlc2NyaXB0aW9uXCI+JHtkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwibGlzdC1pdGVtX19jYXJkLWJ0blwiPmFkZCB0byBjYXJ0PC9idXR0b24+XHJcbiAgICAgIDxwIGNsYXNzPVwibGlzdC1pdGVtX19kaXNjb3VudFwiPiR7ZGlzY291bnR9PC9wPlxyXG4gICAgPC9saT5gO1xyXG4gIH0pO1xyXG5cclxuICBsaXN0Q29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBtZW51TGlzdC5qb2luKFwiXCIpKTtcclxuXHJcbiAgLy8g0JTQvtC00LDRlNC80L4g0YHQu9GD0YXQsNGH0LAg0L/QvtC00ZbQuSDQtNC70Y8g0LrQvtC20L3QvtGXINC60L3QvtC/0LrQuCBcImFkZCB0byBjYXJ0XCJcclxuICBjb25zdCBhZGRUb0NhcnRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0LWl0ZW1fX2NhcmQtYnRuXCIpO1xyXG4gIGFkZFRvQ2FydEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc3QgaXRlbUlkID0gYnV0dG9uLmNsb3Nlc3QoXCIuY2FyZHMtbGlzdF9faXRlbVwiKS5pZDtcclxuICAgICAgYWRkVG9DYXJ0KGl0ZW1JZCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVG9DYXJ0KGl0ZW1JZCkge1xyXG4gIGNvbnN0IGNhcnRNZW51ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRNZW51XCIpKSB8fCBbXTtcclxuXHJcbiAgY2FydE1lbnUucHVzaChpdGVtSWQpO1xyXG5cclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRNZW51XCIsIEpTT04uc3RyaW5naWZ5KGNhcnRNZW51KSk7XHJcblxyXG4gIE5vdGlmbGl4Lk5vdGlmeS5pbmZvKFwiSXRlbSBhZGRlZCB0byBjYXJ0OlwiKTtcclxuICBjb25zb2xlLmxvZyhcIkl0ZW0gYWRkZWQgdG8gY2FydDpcIiwgaXRlbUlkKTtcclxufVxyXG5cclxucmVuZGVyTWVudSgpO1xyXG4iLCIvLyBqc1xyXG5cclxuLy8gc2Nzc1xyXG5pbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XHJcbmltcG9ydCBcIi4vdmFyaWFibGVzLnNjc3NcIjtcclxuaW1wb3J0IFwiLi9ub3JtYWxpemUuc2Nzc1wiO1xyXG5pbXBvcnQgXCIuL3Jlc2V0LnNjc3NcIjtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLyogTm90aWZsaXggQUlPIChodHRwczovL25vdGlmbGl4LmdpdGh1Yi5pbykgLSBWZXJzaW9uOiAzLjIuNyAtIEF1dGhvcjogRnVya2FuIChodHRwczovL2dpdGh1Yi5jb20vZnVyY2FuKSAtIENvcHlyaWdodCAyMDE5IC0gMjAyNCBOb3RpZmxpeCwgTUlUIExpY2Vuc2UgKGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUKSAqL1xuXG4oZnVuY3Rpb24odCxlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGZ1bmN0aW9uKCl7cmV0dXJuIGUodCl9KTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZSh0KTp0Lk5vdGlmbGl4PWUodCl9KShcInVuZGVmaW5lZFwiPT10eXBlb2YgZ2xvYmFsP1widW5kZWZpbmVkXCI9PXR5cGVvZiB3aW5kb3c/dGhpczp3aW5kb3c6Z2xvYmFsLGZ1bmN0aW9uKHQpeyd1c2Ugc3RyaWN0JztpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgdCYmXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQuZG9jdW1lbnQpcmV0dXJuITE7dmFyIGUsaSxhLG4sbyxyPVwiXFxuXFxuVmlzaXQgZG9jdW1lbnRhdGlvbiBwYWdlIHRvIGxlYXJuIG1vcmU6IGh0dHBzOi8vbm90aWZsaXguZ2l0aHViLmlvL2RvY3VtZW50YXRpb25cIixzPVwiLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZlwiLGw9e1N1Y2Nlc3M6XCJTdWNjZXNzXCIsRmFpbHVyZTpcIkZhaWx1cmVcIixXYXJuaW5nOlwiV2FybmluZ1wiLEluZm86XCJJbmZvXCJ9LG09e3dyYXBJRDpcIk5vdGlmbGl4Tm90aWZ5V3JhcFwiLG92ZXJsYXlJRDpcIk5vdGlmbGl4Tm90aWZ5T3ZlcmxheVwiLHdpZHRoOlwiMjgwcHhcIixwb3NpdGlvbjpcInJpZ2h0LXRvcFwiLGRpc3RhbmNlOlwiMTBweFwiLG9wYWNpdHk6MSxib3JkZXJSYWRpdXM6XCI1cHhcIixydGw6ITEsdGltZW91dDozZTMsbWVzc2FnZU1heExlbmd0aDoxMTAsYmFja092ZXJsYXk6ITEsYmFja092ZXJsYXlDb2xvcjpcInJnYmEoMCwwLDAsMC41KVwiLHBsYWluVGV4dDohMCxzaG93T25seVRoZUxhc3RPbmU6ITEsY2xpY2tUb0Nsb3NlOiExLHBhdXNlT25Ib3ZlcjohMCxJRDpcIk5vdGlmbGl4Tm90aWZ5XCIsY2xhc3NOYW1lOlwibm90aWZsaXgtbm90aWZ5XCIsemluZGV4OjQwMDEsZm9udEZhbWlseTpcIlF1aWNrc2FuZFwiLGZvbnRTaXplOlwiMTNweFwiLGNzc0FuaW1hdGlvbjohMCxjc3NBbmltYXRpb25EdXJhdGlvbjo0MDAsY3NzQW5pbWF0aW9uU3R5bGU6XCJmYWRlXCIsY2xvc2VCdXR0b246ITEsdXNlSWNvbjohMCx1c2VGb250QXdlc29tZTohMSxmb250QXdlc29tZUljb25TdHlsZTpcImJhc2ljXCIsZm9udEF3ZXNvbWVJY29uU2l6ZTpcIjM0cHhcIixzdWNjZXNzOntiYWNrZ3JvdW5kOlwiIzMyYzY4MlwiLHRleHRDb2xvcjpcIiNmZmZcIixjaGlsZENsYXNzTmFtZTpcIm5vdGlmbGl4LW5vdGlmeS1zdWNjZXNzXCIsbm90aWZsaXhJY29uQ29sb3I6XCJyZ2JhKDAsMCwwLDAuMilcIixmb250QXdlc29tZUNsYXNzTmFtZTpcImZhcyBmYS1jaGVjay1jaXJjbGVcIixmb250QXdlc29tZUljb25Db2xvcjpcInJnYmEoMCwwLDAsMC4yKVwiLGJhY2tPdmVybGF5Q29sb3I6XCJyZ2JhKDUwLDE5OCwxMzAsMC4yKVwifSxmYWlsdXJlOntiYWNrZ3JvdW5kOlwiI2ZmNTU0OVwiLHRleHRDb2xvcjpcIiNmZmZcIixjaGlsZENsYXNzTmFtZTpcIm5vdGlmbGl4LW5vdGlmeS1mYWlsdXJlXCIsbm90aWZsaXhJY29uQ29sb3I6XCJyZ2JhKDAsMCwwLDAuMilcIixmb250QXdlc29tZUNsYXNzTmFtZTpcImZhcyBmYS10aW1lcy1jaXJjbGVcIixmb250QXdlc29tZUljb25Db2xvcjpcInJnYmEoMCwwLDAsMC4yKVwiLGJhY2tPdmVybGF5Q29sb3I6XCJyZ2JhKDI1NSw4NSw3MywwLjIpXCJ9LHdhcm5pbmc6e2JhY2tncm91bmQ6XCIjZWViZjMxXCIsdGV4dENvbG9yOlwiI2ZmZlwiLGNoaWxkQ2xhc3NOYW1lOlwibm90aWZsaXgtbm90aWZ5LXdhcm5pbmdcIixub3RpZmxpeEljb25Db2xvcjpcInJnYmEoMCwwLDAsMC4yKVwiLGZvbnRBd2Vzb21lQ2xhc3NOYW1lOlwiZmFzIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZVwiLGZvbnRBd2Vzb21lSWNvbkNvbG9yOlwicmdiYSgwLDAsMCwwLjIpXCIsYmFja092ZXJsYXlDb2xvcjpcInJnYmEoMjM4LDE5MSw0OSwwLjIpXCJ9LGluZm86e2JhY2tncm91bmQ6XCIjMjZjMGQzXCIsdGV4dENvbG9yOlwiI2ZmZlwiLGNoaWxkQ2xhc3NOYW1lOlwibm90aWZsaXgtbm90aWZ5LWluZm9cIixub3RpZmxpeEljb25Db2xvcjpcInJnYmEoMCwwLDAsMC4yKVwiLGZvbnRBd2Vzb21lQ2xhc3NOYW1lOlwiZmFzIGZhLWluZm8tY2lyY2xlXCIsZm9udEF3ZXNvbWVJY29uQ29sb3I6XCJyZ2JhKDAsMCwwLDAuMilcIixiYWNrT3ZlcmxheUNvbG9yOlwicmdiYSgzOCwxOTIsMjExLDAuMilcIn19LGM9e1N1Y2Nlc3M6XCJTdWNjZXNzXCIsRmFpbHVyZTpcIkZhaWx1cmVcIixXYXJuaW5nOlwiV2FybmluZ1wiLEluZm86XCJJbmZvXCJ9LHA9e0lEOlwiTm90aWZsaXhSZXBvcnRXcmFwXCIsY2xhc3NOYW1lOlwibm90aWZsaXgtcmVwb3J0XCIsd2lkdGg6XCIzMjBweFwiLGJhY2tncm91bmRDb2xvcjpcIiNmOGY4ZjhcIixib3JkZXJSYWRpdXM6XCIyNXB4XCIscnRsOiExLHppbmRleDo0MDAyLGJhY2tPdmVybGF5OiEwLGJhY2tPdmVybGF5Q29sb3I6XCJyZ2JhKDAsMCwwLDAuNSlcIixiYWNrT3ZlcmxheUNsaWNrVG9DbG9zZTohMSxmb250RmFtaWx5OlwiUXVpY2tzYW5kXCIsc3ZnU2l6ZTpcIjExMHB4XCIscGxhaW5UZXh0OiEwLHRpdGxlRm9udFNpemU6XCIxNnB4XCIsdGl0bGVNYXhMZW5ndGg6MzQsbWVzc2FnZUZvbnRTaXplOlwiMTNweFwiLG1lc3NhZ2VNYXhMZW5ndGg6NDAwLGJ1dHRvbkZvbnRTaXplOlwiMTRweFwiLGJ1dHRvbk1heExlbmd0aDozNCxjc3NBbmltYXRpb246ITAsY3NzQW5pbWF0aW9uRHVyYXRpb246MzYwLGNzc0FuaW1hdGlvblN0eWxlOlwiZmFkZVwiLHN1Y2Nlc3M6e3N2Z0NvbG9yOlwiIzMyYzY4MlwiLHRpdGxlQ29sb3I6XCIjMWUxZTFlXCIsbWVzc2FnZUNvbG9yOlwiIzI0MjQyNFwiLGJ1dHRvbkJhY2tncm91bmQ6XCIjMzJjNjgyXCIsYnV0dG9uQ29sb3I6XCIjZmZmXCIsYmFja092ZXJsYXlDb2xvcjpcInJnYmEoNTAsMTk4LDEzMCwwLjIpXCJ9LGZhaWx1cmU6e3N2Z0NvbG9yOlwiI2ZmNTU0OVwiLHRpdGxlQ29sb3I6XCIjMWUxZTFlXCIsbWVzc2FnZUNvbG9yOlwiIzI0MjQyNFwiLGJ1dHRvbkJhY2tncm91bmQ6XCIjZmY1NTQ5XCIsYnV0dG9uQ29sb3I6XCIjZmZmXCIsYmFja092ZXJsYXlDb2xvcjpcInJnYmEoMjU1LDg1LDczLDAuMilcIn0sd2FybmluZzp7c3ZnQ29sb3I6XCIjZWViZjMxXCIsdGl0bGVDb2xvcjpcIiMxZTFlMWVcIixtZXNzYWdlQ29sb3I6XCIjMjQyNDI0XCIsYnV0dG9uQmFja2dyb3VuZDpcIiNlZWJmMzFcIixidXR0b25Db2xvcjpcIiNmZmZcIixiYWNrT3ZlcmxheUNvbG9yOlwicmdiYSgyMzgsMTkxLDQ5LDAuMilcIn0saW5mbzp7c3ZnQ29sb3I6XCIjMjZjMGQzXCIsdGl0bGVDb2xvcjpcIiMxZTFlMWVcIixtZXNzYWdlQ29sb3I6XCIjMjQyNDI0XCIsYnV0dG9uQmFja2dyb3VuZDpcIiMyNmMwZDNcIixidXR0b25Db2xvcjpcIiNmZmZcIixiYWNrT3ZlcmxheUNvbG9yOlwicmdiYSgzOCwxOTIsMjExLDAuMilcIn19LGY9e1Nob3c6XCJTaG93XCIsQXNrOlwiQXNrXCIsUHJvbXB0OlwiUHJvbXB0XCJ9LGQ9e0lEOlwiTm90aWZsaXhDb25maXJtV3JhcFwiLGNsYXNzTmFtZTpcIm5vdGlmbGl4LWNvbmZpcm1cIix3aWR0aDpcIjMwMHB4XCIsemluZGV4OjQwMDMscG9zaXRpb246XCJjZW50ZXJcIixkaXN0YW5jZTpcIjEwcHhcIixiYWNrZ3JvdW5kQ29sb3I6XCIjZjhmOGY4XCIsYm9yZGVyUmFkaXVzOlwiMjVweFwiLGJhY2tPdmVybGF5OiEwLGJhY2tPdmVybGF5Q29sb3I6XCJyZ2JhKDAsMCwwLDAuNSlcIixydGw6ITEsZm9udEZhbWlseTpcIlF1aWNrc2FuZFwiLGNzc0FuaW1hdGlvbjohMCxjc3NBbmltYXRpb25EdXJhdGlvbjozMDAsY3NzQW5pbWF0aW9uU3R5bGU6XCJmYWRlXCIscGxhaW5UZXh0OiEwLHRpdGxlQ29sb3I6XCIjMzJjNjgyXCIsdGl0bGVGb250U2l6ZTpcIjE2cHhcIix0aXRsZU1heExlbmd0aDozNCxtZXNzYWdlQ29sb3I6XCIjMWUxZTFlXCIsbWVzc2FnZUZvbnRTaXplOlwiMTRweFwiLG1lc3NhZ2VNYXhMZW5ndGg6MTEwLGJ1dHRvbnNGb250U2l6ZTpcIjE1cHhcIixidXR0b25zTWF4TGVuZ3RoOjM0LG9rQnV0dG9uQ29sb3I6XCIjZjhmOGY4XCIsb2tCdXR0b25CYWNrZ3JvdW5kOlwiIzMyYzY4MlwiLGNhbmNlbEJ1dHRvbkNvbG9yOlwiI2Y4ZjhmOFwiLGNhbmNlbEJ1dHRvbkJhY2tncm91bmQ6XCIjYTlhOWE5XCJ9LHg9e1N0YW5kYXJkOlwiU3RhbmRhcmRcIixIb3VyZ2xhc3M6XCJIb3VyZ2xhc3NcIixDaXJjbGU6XCJDaXJjbGVcIixBcnJvd3M6XCJBcnJvd3NcIixEb3RzOlwiRG90c1wiLFB1bHNlOlwiUHVsc2VcIixDdXN0b206XCJDdXN0b21cIixOb3RpZmxpeDpcIk5vdGlmbGl4XCJ9LGc9e0lEOlwiTm90aWZsaXhMb2FkaW5nV3JhcFwiLGNsYXNzTmFtZTpcIm5vdGlmbGl4LWxvYWRpbmdcIix6aW5kZXg6NGUzLGJhY2tncm91bmRDb2xvcjpcInJnYmEoMCwwLDAsMC44KVwiLHJ0bDohMSxmb250RmFtaWx5OlwiUXVpY2tzYW5kXCIsY3NzQW5pbWF0aW9uOiEwLGNzc0FuaW1hdGlvbkR1cmF0aW9uOjQwMCxjbGlja1RvQ2xvc2U6ITEsY3VzdG9tU3ZnVXJsOm51bGwsY3VzdG9tU3ZnQ29kZTpudWxsLHN2Z1NpemU6XCI4MHB4XCIsc3ZnQ29sb3I6XCIjMzJjNjgyXCIsbWVzc2FnZUlEOlwiTm90aWZsaXhMb2FkaW5nTWVzc2FnZVwiLG1lc3NhZ2VGb250U2l6ZTpcIjE1cHhcIixtZXNzYWdlTWF4TGVuZ3RoOjM0LG1lc3NhZ2VDb2xvcjpcIiNkY2RjZGNcIn0sYj17U3RhbmRhcmQ6XCJTdGFuZGFyZFwiLEhvdXJnbGFzczpcIkhvdXJnbGFzc1wiLENpcmNsZTpcIkNpcmNsZVwiLEFycm93czpcIkFycm93c1wiLERvdHM6XCJEb3RzXCIsUHVsc2U6XCJQdWxzZVwifSx1PXtJRDpcIk5vdGlmbGl4QmxvY2tXcmFwXCIscXVlcnlTZWxlY3RvckxpbWl0OjIwMCxjbGFzc05hbWU6XCJub3RpZmxpeC1ibG9ja1wiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIix6aW5kZXg6MWUzLGJhY2tncm91bmRDb2xvcjpcInJnYmEoMjU1LDI1NSwyNTUsMC45KVwiLHJ0bDohMSxmb250RmFtaWx5OlwiUXVpY2tzYW5kXCIsY3NzQW5pbWF0aW9uOiEwLGNzc0FuaW1hdGlvbkR1cmF0aW9uOjMwMCxzdmdTaXplOlwiNDVweFwiLHN2Z0NvbG9yOlwiIzM4MzgzOFwiLG1lc3NhZ2VGb250U2l6ZTpcIjE0cHhcIixtZXNzYWdlTWF4TGVuZ3RoOjM0LG1lc3NhZ2VDb2xvcjpcIiMzODM4MzhcIn0seT1mdW5jdGlvbih0KXtyZXR1cm4gY29uc29sZS5lcnJvcihcIiVjIE5vdGlmbGl4IEVycm9yIFwiLFwicGFkZGluZzoycHg7Ym9yZGVyLXJhZGl1czoyMHB4O2NvbG9yOiNmZmY7YmFja2dyb3VuZDojZmY1NTQ5XCIsXCJcXG5cIit0K3IpfSxrPWZ1bmN0aW9uKHQpe3JldHVybiBjb25zb2xlLmxvZyhcIiVjIE5vdGlmbGl4IEluZm8gXCIsXCJwYWRkaW5nOjJweDtib3JkZXItcmFkaXVzOjIwcHg7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiMyNmMwZDNcIixcIlxcblwiK3Qrcil9LHc9ZnVuY3Rpb24oZSl7cmV0dXJuIGV8fChlPVwiaGVhZFwiKSxudWxsIT09dC5kb2N1bWVudFtlXXx8KHkoXCJcXG5Ob3RpZmxpeCBuZWVkcyB0byBiZSBhcHBlbmRlZCB0byB0aGUgXFxcIjxcIitlK1wiPlxcXCIgZWxlbWVudCwgYnV0IHlvdSBjYWxsZWQgaXQgYmVmb3JlIHRoZSBcXFwiPFwiK2UrXCI+XFxcIiBlbGVtZW50IGhhcyBiZWVuIGNyZWF0ZWQuXCIpLCExKX0saD1mdW5jdGlvbihlLGkpe2lmKCF3KFwiaGVhZFwiKSlyZXR1cm4hMTtpZihudWxsIT09ZSgpJiYhdC5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpKSl7dmFyIGE9dC5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7YS5pZD1pLGEuaW5uZXJIVE1MPWUoKSx0LmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoYSl9fSx2PWZ1bmN0aW9uKCl7dmFyIHQ9e30sZT0hMSxhPTA7XCJbb2JqZWN0IEJvb2xlYW5dXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnRzWzBdKSYmKGU9YXJndW1lbnRzWzBdLGErKyk7Zm9yKHZhciBuPWZ1bmN0aW9uKGkpe2Zvcih2YXIgYSBpbiBpKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpLGEpJiYodFthXT1lJiZcIltvYmplY3QgT2JqZWN0XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGlbYV0pP3YodFthXSxpW2FdKTppW2FdKX07YTxhcmd1bWVudHMubGVuZ3RoO2ErKyluKGFyZ3VtZW50c1thXSk7cmV0dXJuIHR9LE49ZnVuY3Rpb24oZSl7dmFyIGk9dC5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBpLmlubmVySFRNTD1lLGkudGV4dENvbnRlbnR8fGkuaW5uZXJUZXh0fHxcIlwifSxDPWZ1bmN0aW9uKHQsZSl7dHx8KHQ9XCIxMTBweFwiKSxlfHwoZT1cIiMzMmM2ODJcIik7dmFyIGk9XCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgaWQ9XFxcIk5YUmVwb3J0U3VjY2Vzc1xcXCIgd2lkdGg9XFxcIlwiK3QrXCJcXFwiIGhlaWdodD1cXFwiXCIrdCtcIlxcXCIgZmlsbD1cXFwiXCIrZStcIlxcXCIgdmlld0JveD1cXFwiMCAwIDEyMCAxMjBcXFwiPjxzdHlsZT5ALXdlYmtpdC1rZXlmcmFtZXMgTlhSZXBvcnRTdWNjZXNzMS1hbmltYXRpb257MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNTcuN3B4KSBzY2FsZSguNSwuNSkgdHJhbnNsYXRlKC02MHB4LC01Ny43cHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw1Ny43cHgpIHNjYWxlKC41LC41KSB0cmFuc2xhdGUoLTYwcHgsLTU3LjdweCl9NTAlLHRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDU3LjdweCkgc2NhbGUoMSwxKSB0cmFuc2xhdGUoLTYwcHgsLTU3LjdweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDU3LjdweCkgc2NhbGUoMSwxKSB0cmFuc2xhdGUoLTYwcHgsLTU3LjdweCl9NjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDU3LjdweCkgc2NhbGUoLjk1LC45NSkgdHJhbnNsYXRlKC02MHB4LC01Ny43cHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw1Ny43cHgpIHNjYWxlKC45NSwuOTUpIHRyYW5zbGF0ZSgtNjBweCwtNTcuN3B4KX19QGtleWZyYW1lcyBOWFJlcG9ydFN1Y2Nlc3MxLWFuaW1hdGlvbnswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw1Ny43cHgpIHNjYWxlKC41LC41KSB0cmFuc2xhdGUoLTYwcHgsLTU3LjdweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDU3LjdweCkgc2NhbGUoLjUsLjUpIHRyYW5zbGF0ZSgtNjBweCwtNTcuN3B4KX01MCUsdG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNTcuN3B4KSBzY2FsZSgxLDEpIHRyYW5zbGF0ZSgtNjBweCwtNTcuN3B4KTt0cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNTcuN3B4KSBzY2FsZSgxLDEpIHRyYW5zbGF0ZSgtNjBweCwtNTcuN3B4KX02MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNTcuN3B4KSBzY2FsZSguOTUsLjk1KSB0cmFuc2xhdGUoLTYwcHgsLTU3LjdweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDU3LjdweCkgc2NhbGUoLjk1LC45NSkgdHJhbnNsYXRlKC02MHB4LC01Ny43cHgpfX1ALXdlYmtpdC1rZXlmcmFtZXMgTlhSZXBvcnRTdWNjZXNzNC1hbmltYXRpb257MCV7b3BhY2l0eTowfTUwJSx0b3tvcGFjaXR5OjF9fUBrZXlmcmFtZXMgTlhSZXBvcnRTdWNjZXNzNC1hbmltYXRpb257MCV7b3BhY2l0eTowfTUwJSx0b3tvcGFjaXR5OjF9fUAtd2Via2l0LWtleWZyYW1lcyBOWFJlcG9ydFN1Y2Nlc3MzLWFuaW1hdGlvbnswJXtvcGFjaXR5OjB9NDAlLHRve29wYWNpdHk6MX19QGtleWZyYW1lcyBOWFJlcG9ydFN1Y2Nlc3MzLWFuaW1hdGlvbnswJXtvcGFjaXR5OjB9NDAlLHRve29wYWNpdHk6MX19QC13ZWJraXQta2V5ZnJhbWVzIE5YUmVwb3J0U3VjY2VzczItYW5pbWF0aW9uezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC41LC41KSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSguNSwuNSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KX00MCUsdG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoMSwxKSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSgxLDEpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCl9NjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC45NSwuOTUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC45NSwuOTUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCl9fUBrZXlmcmFtZXMgTlhSZXBvcnRTdWNjZXNzMi1hbmltYXRpb257MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjUsLjUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC41LC41KSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpfTQwJSx0b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSgxLDEpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKDEsMSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KX02MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjk1LC45NSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjk1LC45NSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KX19I05YUmVwb3J0U3VjY2VzcyAqey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjEuMnM7YW5pbWF0aW9uLWR1cmF0aW9uOjEuMnM7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLDAsMSwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLDAsMSwxKX08L3N0eWxlPjxnIHN0eWxlPVxcXCItd2Via2l0LWFuaW1hdGlvbi1uYW1lOk5YUmVwb3J0U3VjY2VzczItYW5pbWF0aW9uO2FuaW1hdGlvbi1uYW1lOk5YUmVwb3J0U3VjY2VzczItYW5pbWF0aW9uOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKDEsMSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40MiwwLC41OCwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNDIsMCwuNTgsMSlcXFwiPjxwYXRoIGQ9XFxcIk02MCAxMTUuMzhDMjkuNDYgMTE1LjM4IDQuNjIgOTAuNTQgNC42MiA2MCA0LjYyIDI5LjQ2IDI5LjQ2IDQuNjIgNjAgNC42MmMzMC41NCAwIDU1LjM4IDI0Ljg0IDU1LjM4IDU1LjM4IDAgMzAuNTQtMjQuODQgNTUuMzgtNTUuMzggNTUuMzh6TTYwIDBDMjYuOTIgMCAwIDI2LjkyIDAgNjBzMjYuOTIgNjAgNjAgNjAgNjAtMjYuOTIgNjAtNjBTOTMuMDggMCA2MCAwelxcXCIgc3R5bGU9XFxcIi13ZWJraXQtYW5pbWF0aW9uLW5hbWU6TlhSZXBvcnRTdWNjZXNzMy1hbmltYXRpb247YW5pbWF0aW9uLW5hbWU6TlhSZXBvcnRTdWNjZXNzMy1hbmltYXRpb247LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNDIsMCwuNTgsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjQyLDAsLjU4LDEpXFxcIiBmaWxsPVxcXCJpbmhlcml0XFxcIiBkYXRhLWFuaW1hdG9yLWdyb3VwPVxcXCJ0cnVlXFxcIiBkYXRhLWFuaW1hdG9yLXR5cGU9XFxcIjJcXFwiLz48L2c+PGcgc3R5bGU9XFxcIi13ZWJraXQtYW5pbWF0aW9uLW5hbWU6TlhSZXBvcnRTdWNjZXNzMS1hbmltYXRpb247YW5pbWF0aW9uLW5hbWU6TlhSZXBvcnRTdWNjZXNzMS1hbmltYXRpb247LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNTcuN3B4KSBzY2FsZSgxLDEpIHRyYW5zbGF0ZSgtNjBweCwtNTcuN3B4KTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40MiwwLC41OCwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNDIsMCwuNTgsMSlcXFwiPjxwYXRoIGQ9XFxcIk04OC4yNyAzNS4zOUw1Mi44IDc1LjI5IDMxLjQzIDU4LjJjLS45OC0uODEtMi40NC0uNjMtMy4yNC4zNi0uNzkuOTktLjYzIDIuNDQuMzYgMy4yNGwyMy4wOCAxOC40NmMuNDMuMzQuOTMuNTEgMS40NC41MS42NCAwIDEuMjctLjI2IDEuNzQtLjc4bDM2LjkxLTQxLjUzYTIuMyAyLjMgMCAwIDAtLjE5LTMuMjZjLS45NS0uODYtMi40MS0uNzctMy4yNi4xOXpcXFwiIHN0eWxlPVxcXCItd2Via2l0LWFuaW1hdGlvbi1uYW1lOk5YUmVwb3J0U3VjY2VzczQtYW5pbWF0aW9uO2FuaW1hdGlvbi1uYW1lOk5YUmVwb3J0U3VjY2VzczQtYW5pbWF0aW9uOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjQyLDAsLjU4LDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40MiwwLC41OCwxKVxcXCIgZmlsbD1cXFwiaW5oZXJpdFxcXCIgZGF0YS1hbmltYXRvci1ncm91cD1cXFwidHJ1ZVxcXCIgZGF0YS1hbmltYXRvci10eXBlPVxcXCIyXFxcIi8+PC9nPjwvc3ZnPlwiO3JldHVybiBpfSx6PWZ1bmN0aW9uKHQsZSl7dHx8KHQ9XCIxMTBweFwiKSxlfHwoZT1cIiNmZjU1NDlcIik7dmFyIGk9XCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgaWQ9XFxcIk5YUmVwb3J0RmFpbHVyZVxcXCIgd2lkdGg9XFxcIlwiK3QrXCJcXFwiIGhlaWdodD1cXFwiXCIrdCtcIlxcXCIgZmlsbD1cXFwiXCIrZStcIlxcXCIgdmlld0JveD1cXFwiMCAwIDEyMCAxMjBcXFwiPjxzdHlsZT5ALXdlYmtpdC1rZXlmcmFtZXMgTlhSZXBvcnRGYWlsdXJlMi1hbmltYXRpb257MCV7b3BhY2l0eTowfTQwJSx0b3tvcGFjaXR5OjF9fUBrZXlmcmFtZXMgTlhSZXBvcnRGYWlsdXJlMi1hbmltYXRpb257MCV7b3BhY2l0eTowfTQwJSx0b3tvcGFjaXR5OjF9fUAtd2Via2l0LWtleWZyYW1lcyBOWFJlcG9ydEZhaWx1cmUxLWFuaW1hdGlvbnswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSguNSwuNSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjUsLjUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCl9NDAlLHRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKDEsMSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoMSwxKSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpfTYwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSguOTUsLjk1KSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSguOTUsLjk1KSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpfX1Aa2V5ZnJhbWVzIE5YUmVwb3J0RmFpbHVyZTEtYW5pbWF0aW9uezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC41LC41KSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSguNSwuNSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KX00MCUsdG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoMSwxKSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSgxLDEpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCl9NjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC45NSwuOTUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC45NSwuOTUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCl9fUAtd2Via2l0LWtleWZyYW1lcyBOWFJlcG9ydEZhaWx1cmUzLWFuaW1hdGlvbnswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSguNSwuNSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjUsLjUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCl9NTAlLHRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKDEsMSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoMSwxKSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpfTYwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSguOTUsLjk1KSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSguOTUsLjk1KSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpfX1Aa2V5ZnJhbWVzIE5YUmVwb3J0RmFpbHVyZTMtYW5pbWF0aW9uezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC41LC41KSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSguNSwuNSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KX01MCUsdG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoMSwxKSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSgxLDEpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCl9NjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC45NSwuOTUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC45NSwuOTUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCl9fUAtd2Via2l0LWtleWZyYW1lcyBOWFJlcG9ydEZhaWx1cmU0LWFuaW1hdGlvbnswJXtvcGFjaXR5OjB9NTAlLHRve29wYWNpdHk6MX19QGtleWZyYW1lcyBOWFJlcG9ydEZhaWx1cmU0LWFuaW1hdGlvbnswJXtvcGFjaXR5OjB9NTAlLHRve29wYWNpdHk6MX19I05YUmVwb3J0RmFpbHVyZSAqey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjEuMnM7YW5pbWF0aW9uLWR1cmF0aW9uOjEuMnM7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLDAsMSwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLDAsMSwxKX08L3N0eWxlPjxnIHN0eWxlPVxcXCItd2Via2l0LWFuaW1hdGlvbi1uYW1lOk5YUmVwb3J0RmFpbHVyZTEtYW5pbWF0aW9uO2FuaW1hdGlvbi1uYW1lOk5YUmVwb3J0RmFpbHVyZTEtYW5pbWF0aW9uOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjQyLDAsLjU4LDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40MiwwLC41OCwxKTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSgxLDEpIHRyYW5zbGF0ZSgtNjBweCwtNjBweClcXFwiPjxwYXRoIGQ9XFxcIk00LjM1IDM0Ljk1YzAtMTYuODIgMTMuNzgtMzAuNiAzMC42LTMwLjZoNTAuMWMxNi44MiAwIDMwLjYgMTMuNzggMzAuNiAzMC42djUwLjFjMCAxNi44Mi0xMy43OCAzMC42LTMwLjYgMzAuNmgtNTAuMWMtMTYuODIgMC0zMC42LTEzLjc4LTMwLjYtMzAuNnYtNTAuMXpNMzQuOTUgMTIwaDUwLjFjMTkuMjIgMCAzNC45NS0xNS43MyAzNC45NS0zNC45NXYtNTAuMUMxMjAgMTUuNzMgMTA0LjI3IDAgODUuMDUgMGgtNTAuMUMxNS43MyAwIDAgMTUuNzMgMCAzNC45NXY1MC4xQzAgMTA0LjI3IDE1LjczIDEyMCAzNC45NSAxMjB6XFxcIiBzdHlsZT1cXFwiLXdlYmtpdC1hbmltYXRpb24tbmFtZTpOWFJlcG9ydEZhaWx1cmUyLWFuaW1hdGlvbjthbmltYXRpb24tbmFtZTpOWFJlcG9ydEZhaWx1cmUyLWFuaW1hdGlvbjstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40MiwwLC41OCwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNDIsMCwuNTgsMSlcXFwiIGZpbGw9XFxcImluaGVyaXRcXFwiIGRhdGEtYW5pbWF0b3ItZ3JvdXA9XFxcInRydWVcXFwiIGRhdGEtYW5pbWF0b3ItdHlwZT1cXFwiMlxcXCIvPjwvZz48ZyBzdHlsZT1cXFwiLXdlYmtpdC1hbmltYXRpb24tbmFtZTpOWFJlcG9ydEZhaWx1cmUzLWFuaW1hdGlvbjthbmltYXRpb24tbmFtZTpOWFJlcG9ydEZhaWx1cmUzLWFuaW1hdGlvbjstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40MiwwLC41OCwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNDIsMCwuNTgsMSk7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoMSwxKSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpXFxcIj48cGF0aCBkPVxcXCJNODIuNCAzNy42Yy0uOS0uOS0yLjM3LS45LTMuMjcgMEw2MCA1Ni43MyA0MC44NiAzNy42YTIuMzA2IDIuMzA2IDAgMCAwLTMuMjYgMy4yNkw1Ni43MyA2MCAzNy42IDc5LjEzYy0uOS45LS45IDIuMzcgMCAzLjI3LjQ1LjQ1IDEuMDQuNjggMS42My42OC41OSAwIDEuMTgtLjIzIDEuNjMtLjY4TDYwIDYzLjI2IDc5LjEzIDgyLjRjLjQ1LjQ1IDEuMDUuNjggMS42NC42OC41OCAwIDEuMTgtLjIzIDEuNjMtLjY4LjktLjkuOS0yLjM3IDAtMy4yN0w2My4yNiA2MCA4Mi40IDQwLjg2Yy45LS45MS45LTIuMzYgMC0zLjI2elxcXCIgc3R5bGU9XFxcIi13ZWJraXQtYW5pbWF0aW9uLW5hbWU6TlhSZXBvcnRGYWlsdXJlNC1hbmltYXRpb247YW5pbWF0aW9uLW5hbWU6TlhSZXBvcnRGYWlsdXJlNC1hbmltYXRpb247LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNDIsMCwuNTgsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjQyLDAsLjU4LDEpXFxcIiBmaWxsPVxcXCJpbmhlcml0XFxcIiBkYXRhLWFuaW1hdG9yLWdyb3VwPVxcXCJ0cnVlXFxcIiBkYXRhLWFuaW1hdG9yLXR5cGU9XFxcIjJcXFwiLz48L2c+PC9zdmc+XCI7cmV0dXJuIGl9LFM9ZnVuY3Rpb24odCxlKXt0fHwodD1cIjExMHB4XCIpLGV8fChlPVwiI2VlYmYzMVwiKTt2YXIgaT1cIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBpZD1cXFwiTlhSZXBvcnRXYXJuaW5nXFxcIiB3aWR0aD1cXFwiXCIrdCtcIlxcXCIgaGVpZ2h0PVxcXCJcIit0K1wiXFxcIiBmaWxsPVxcXCJcIitlK1wiXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTIwIDEyMFxcXCI+PHN0eWxlPkAtd2Via2l0LWtleWZyYW1lcyBOWFJlcG9ydFdhcm5pbmcyLWFuaW1hdGlvbnswJXtvcGFjaXR5OjB9NDAlLHRve29wYWNpdHk6MX19QGtleWZyYW1lcyBOWFJlcG9ydFdhcm5pbmcyLWFuaW1hdGlvbnswJXtvcGFjaXR5OjB9NDAlLHRve29wYWNpdHk6MX19QC13ZWJraXQta2V5ZnJhbWVzIE5YUmVwb3J0V2FybmluZzEtYW5pbWF0aW9uezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC41LC41KSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSguNSwuNSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KX00MCUsdG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoMSwxKSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSgxLDEpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCl9NjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC45NSwuOTUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC45NSwuOTUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCl9fUBrZXlmcmFtZXMgTlhSZXBvcnRXYXJuaW5nMS1hbmltYXRpb257MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjUsLjUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC41LC41KSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpfTQwJSx0b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSgxLDEpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKDEsMSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KX02MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjk1LC45NSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjk1LC45NSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KX19QC13ZWJraXQta2V5ZnJhbWVzIE5YUmVwb3J0V2FybmluZzMtYW5pbWF0aW9uezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDY2LjZweCkgc2NhbGUoLjUsLjUpIHRyYW5zbGF0ZSgtNjBweCwtNjYuNnB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjYuNnB4KSBzY2FsZSguNSwuNSkgdHJhbnNsYXRlKC02MHB4LC02Ni42cHgpfTUwJSx0b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2Ni42cHgpIHNjYWxlKDEsMSkgdHJhbnNsYXRlKC02MHB4LC02Ni42cHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2Ni42cHgpIHNjYWxlKDEsMSkgdHJhbnNsYXRlKC02MHB4LC02Ni42cHgpfTYwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2Ni42cHgpIHNjYWxlKC45NSwuOTUpIHRyYW5zbGF0ZSgtNjBweCwtNjYuNnB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjYuNnB4KSBzY2FsZSguOTUsLjk1KSB0cmFuc2xhdGUoLTYwcHgsLTY2LjZweCl9fUBrZXlmcmFtZXMgTlhSZXBvcnRXYXJuaW5nMy1hbmltYXRpb257MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjYuNnB4KSBzY2FsZSguNSwuNSkgdHJhbnNsYXRlKC02MHB4LC02Ni42cHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2Ni42cHgpIHNjYWxlKC41LC41KSB0cmFuc2xhdGUoLTYwcHgsLTY2LjZweCl9NTAlLHRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDY2LjZweCkgc2NhbGUoMSwxKSB0cmFuc2xhdGUoLTYwcHgsLTY2LjZweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDY2LjZweCkgc2NhbGUoMSwxKSB0cmFuc2xhdGUoLTYwcHgsLTY2LjZweCl9NjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDY2LjZweCkgc2NhbGUoLjk1LC45NSkgdHJhbnNsYXRlKC02MHB4LC02Ni42cHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2Ni42cHgpIHNjYWxlKC45NSwuOTUpIHRyYW5zbGF0ZSgtNjBweCwtNjYuNnB4KX19QC13ZWJraXQta2V5ZnJhbWVzIE5YUmVwb3J0V2FybmluZzQtYW5pbWF0aW9uezAle29wYWNpdHk6MH01MCUsdG97b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIE5YUmVwb3J0V2FybmluZzQtYW5pbWF0aW9uezAle29wYWNpdHk6MH01MCUsdG97b3BhY2l0eToxfX0jTlhSZXBvcnRXYXJuaW5nICp7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MS4yczthbmltYXRpb24tZHVyYXRpb246MS4yczstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAsMCwxLDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAsMCwxLDEpfTwvc3R5bGU+PGcgc3R5bGU9XFxcIi13ZWJraXQtYW5pbWF0aW9uLW5hbWU6TlhSZXBvcnRXYXJuaW5nMS1hbmltYXRpb247YW5pbWF0aW9uLW5hbWU6TlhSZXBvcnRXYXJuaW5nMS1hbmltYXRpb247LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNDIsMCwuNTgsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjQyLDAsLjU4LDEpOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKDEsMSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KVxcXCI+PHBhdGggZD1cXFwiTTExNS40NiAxMDYuMTVsLTU0LjA0LTkzLjhjLS42MS0xLjA2LTIuMjMtMS4wNi0yLjg0IDBsLTU0LjA0IDkzLjhjLS42MiAxLjA3LjIxIDIuMjkgMS40MiAyLjI5aDEwOC4wOGMxLjIxIDAgMi4wNC0xLjIyIDEuNDItMi4yOXpNNjUuMTcgMTAuMmw1NC4wNCA5My44YzIuMjggMy45Ni0uNjUgOC43OC01LjE3IDguNzhINS45NmMtNC41MiAwLTcuNDUtNC44Mi01LjE3LTguNzhsNTQuMDQtOTMuOGMyLjI4LTMuOTUgOC4wMy00IDEwLjM0IDB6XFxcIiBzdHlsZT1cXFwiLXdlYmtpdC1hbmltYXRpb24tbmFtZTpOWFJlcG9ydFdhcm5pbmcyLWFuaW1hdGlvbjthbmltYXRpb24tbmFtZTpOWFJlcG9ydFdhcm5pbmcyLWFuaW1hdGlvbjstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40MiwwLC41OCwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNDIsMCwuNTgsMSlcXFwiIGZpbGw9XFxcImluaGVyaXRcXFwiIGRhdGEtYW5pbWF0b3ItZ3JvdXA9XFxcInRydWVcXFwiIGRhdGEtYW5pbWF0b3ItdHlwZT1cXFwiMlxcXCIvPjwvZz48ZyBzdHlsZT1cXFwiLXdlYmtpdC1hbmltYXRpb24tbmFtZTpOWFJlcG9ydFdhcm5pbmczLWFuaW1hdGlvbjthbmltYXRpb24tbmFtZTpOWFJlcG9ydFdhcm5pbmczLWFuaW1hdGlvbjstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40MiwwLC41OCwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNDIsMCwuNTgsMSk7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjYuNnB4KSBzY2FsZSgxLDEpIHRyYW5zbGF0ZSgtNjBweCwtNjYuNnB4KVxcXCI+PHBhdGggZD1cXFwiTTU3LjgzIDk0LjAxYzAgMS4yLjk3IDIuMTcgMi4xNyAyLjE3czIuMTctLjk3IDIuMTctMi4xN3YtMy4yYzAtMS4yLS45Ny0yLjE3LTIuMTctMi4xN3MtMi4xNy45Ny0yLjE3IDIuMTd2My4yem0wLTE0LjE1YzAgMS4yLjk3IDIuMTcgMi4xNyAyLjE3czIuMTctLjk3IDIuMTctMi4xN1YzOS4yMWMwLTEuMi0uOTctMi4xNy0yLjE3LTIuMTdzLTIuMTcuOTctMi4xNyAyLjE3djQwLjY1elxcXCIgc3R5bGU9XFxcIi13ZWJraXQtYW5pbWF0aW9uLW5hbWU6TlhSZXBvcnRXYXJuaW5nNC1hbmltYXRpb247YW5pbWF0aW9uLW5hbWU6TlhSZXBvcnRXYXJuaW5nNC1hbmltYXRpb247LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNDIsMCwuNTgsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjQyLDAsLjU4LDEpXFxcIiBmaWxsPVxcXCJpbmhlcml0XFxcIiBkYXRhLWFuaW1hdG9yLWdyb3VwPVxcXCJ0cnVlXFxcIiBkYXRhLWFuaW1hdG9yLXR5cGU9XFxcIjJcXFwiLz48L2c+PC9zdmc+XCI7cmV0dXJuIGl9LEw9ZnVuY3Rpb24odCxlKXt0fHwodD1cIjExMHB4XCIpLGV8fChlPVwiIzI2YzBkM1wiKTt2YXIgaT1cIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBpZD1cXFwiTlhSZXBvcnRJbmZvXFxcIiB3aWR0aD1cXFwiXCIrdCtcIlxcXCIgaGVpZ2h0PVxcXCJcIit0K1wiXFxcIiBmaWxsPVxcXCJcIitlK1wiXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTIwIDEyMFxcXCI+PHN0eWxlPkAtd2Via2l0LWtleWZyYW1lcyBOWFJlcG9ydEluZm80LWFuaW1hdGlvbnswJXtvcGFjaXR5OjB9NTAlLHRve29wYWNpdHk6MX19QGtleWZyYW1lcyBOWFJlcG9ydEluZm80LWFuaW1hdGlvbnswJXtvcGFjaXR5OjB9NTAlLHRve29wYWNpdHk6MX19QC13ZWJraXQta2V5ZnJhbWVzIE5YUmVwb3J0SW5mbzMtYW5pbWF0aW9uezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC41LC41KSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSguNSwuNSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KX01MCUsdG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoMSwxKSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSgxLDEpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCl9NjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC45NSwuOTUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC45NSwuOTUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCl9fUBrZXlmcmFtZXMgTlhSZXBvcnRJbmZvMy1hbmltYXRpb257MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjUsLjUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC41LC41KSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpfTUwJSx0b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSgxLDEpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKDEsMSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KX02MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjk1LC45NSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjk1LC45NSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KX19QC13ZWJraXQta2V5ZnJhbWVzIE5YUmVwb3J0SW5mbzItYW5pbWF0aW9uezAle29wYWNpdHk6MH00MCUsdG97b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIE5YUmVwb3J0SW5mbzItYW5pbWF0aW9uezAle29wYWNpdHk6MH00MCUsdG97b3BhY2l0eToxfX1ALXdlYmtpdC1rZXlmcmFtZXMgTlhSZXBvcnRJbmZvMS1hbmltYXRpb257MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjUsLjUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC41LC41KSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpfTQwJSx0b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSgxLDEpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKDEsMSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KX02MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjk1LC45NSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjk1LC45NSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KX19QGtleWZyYW1lcyBOWFJlcG9ydEluZm8xLWFuaW1hdGlvbnswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSguNSwuNSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjUsLjUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCl9NDAlLHRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKDEsMSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoMSwxKSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpfTYwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSguOTUsLjk1KSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSguOTUsLjk1KSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpfX0jTlhSZXBvcnRJbmZvICp7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MS4yczthbmltYXRpb24tZHVyYXRpb246MS4yczstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAsMCwxLDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAsMCwxLDEpfTwvc3R5bGU+PGcgc3R5bGU9XFxcIi13ZWJraXQtYW5pbWF0aW9uLW5hbWU6TlhSZXBvcnRJbmZvMS1hbmltYXRpb247YW5pbWF0aW9uLW5hbWU6TlhSZXBvcnRJbmZvMS1hbmltYXRpb247LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNDIsMCwuNTgsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjQyLDAsLjU4LDEpOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKDEsMSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KVxcXCI+PHBhdGggZD1cXFwiTTYwIDExNS4zOEMyOS40NiAxMTUuMzggNC42MiA5MC41NCA0LjYyIDYwIDQuNjIgMjkuNDYgMjkuNDYgNC42MiA2MCA0LjYyYzMwLjU0IDAgNTUuMzggMjQuODQgNTUuMzggNTUuMzggMCAzMC41NC0yNC44NCA1NS4zOC01NS4zOCA1NS4zOHpNNjAgMEMyNi45MiAwIDAgMjYuOTIgMCA2MHMyNi45MiA2MCA2MCA2MCA2MC0yNi45MiA2MC02MFM5My4wOCAwIDYwIDB6XFxcIiBzdHlsZT1cXFwiLXdlYmtpdC1hbmltYXRpb24tbmFtZTpOWFJlcG9ydEluZm8yLWFuaW1hdGlvbjthbmltYXRpb24tbmFtZTpOWFJlcG9ydEluZm8yLWFuaW1hdGlvbjstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40MiwwLC41OCwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNDIsMCwuNTgsMSlcXFwiIGZpbGw9XFxcImluaGVyaXRcXFwiIGRhdGEtYW5pbWF0b3ItZ3JvdXA9XFxcInRydWVcXFwiIGRhdGEtYW5pbWF0b3ItdHlwZT1cXFwiMlxcXCIvPjwvZz48ZyBzdHlsZT1cXFwiLXdlYmtpdC1hbmltYXRpb24tbmFtZTpOWFJlcG9ydEluZm8zLWFuaW1hdGlvbjthbmltYXRpb24tbmFtZTpOWFJlcG9ydEluZm8zLWFuaW1hdGlvbjstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40MiwwLC41OCwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNDIsMCwuNTgsMSk7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoMSwxKSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpXFxcIj48cGF0aCBkPVxcXCJNNTcuNzUgNDMuODVjMC0xLjI0IDEuMDEtMi4yNSAyLjI1LTIuMjVzMi4yNSAxLjAxIDIuMjUgMi4yNXY0OC4xOGMwIDEuMjQtMS4wMSAyLjI1LTIuMjUgMi4yNXMtMi4yNS0xLjAxLTIuMjUtMi4yNVY0My44NXptMC0xNS44OGMwLTEuMjQgMS4wMS0yLjI1IDIuMjUtMi4yNXMyLjI1IDEuMDEgMi4yNSAyLjI1djMuMzJjMCAxLjI1LTEuMDEgMi4yNS0yLjI1IDIuMjVzLTIuMjUtMS0yLjI1LTIuMjV2LTMuMzJ6XFxcIiBzdHlsZT1cXFwiLXdlYmtpdC1hbmltYXRpb24tbmFtZTpOWFJlcG9ydEluZm80LWFuaW1hdGlvbjthbmltYXRpb24tbmFtZTpOWFJlcG9ydEluZm80LWFuaW1hdGlvbjstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40MiwwLC41OCwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNDIsMCwuNTgsMSlcXFwiIGZpbGw9XFxcImluaGVyaXRcXFwiIGRhdGEtYW5pbWF0b3ItZ3JvdXA9XFxcInRydWVcXFwiIGRhdGEtYW5pbWF0b3ItdHlwZT1cXFwiMlxcXCIvPjwvZz48L3N2Zz5cIjtyZXR1cm4gaX0sVz1mdW5jdGlvbih0LGUpe3R8fCh0PVwiNjBweFwiKSxlfHwoZT1cIiMzMmM2ODJcIik7dmFyIGk9XCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgc3Ryb2tlPVxcXCJcIitlK1wiXFxcIiB3aWR0aD1cXFwiXCIrdCtcIlxcXCIgaGVpZ2h0PVxcXCJcIit0K1wiXFxcIiB0cmFuc2Zvcm09XFxcInNjYWxlKC44KVxcXCIgdmlld0JveD1cXFwiMCAwIDM4IDM4XFxcIj48ZyBmaWxsPVxcXCJub25lXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoMSAxKVxcXCI+PGNpcmNsZSBjeD1cXFwiMThcXFwiIGN5PVxcXCIxOFxcXCIgcj1cXFwiMThcXFwiIHN0cm9rZS1vcGFjaXR5PVxcXCIuMjVcXFwiLz48cGF0aCBkPVxcXCJNMzYgMThjMC05Ljk0LTguMDYtMTgtMTgtMThcXFwiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XFxcInRyYW5zZm9ybVxcXCIgZHVyPVxcXCIxc1xcXCIgZnJvbT1cXFwiMCAxOCAxOFxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIHRvPVxcXCIzNjAgMTggMThcXFwiIHR5cGU9XFxcInJvdGF0ZVxcXCIvPjwvcGF0aD48L2c+PC9zdmc+XCI7cmV0dXJuIGl9LEk9ZnVuY3Rpb24odCxlKXt0fHwodD1cIjYwcHhcIiksZXx8KGU9XCIjMzJjNjgyXCIpO3ZhciBpPVwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGlkPVxcXCJOWExvYWRpbmdIb3VyZ2xhc3NcXFwiIGZpbGw9XFxcIlwiK2UrXCJcXFwiIHdpZHRoPVxcXCJcIit0K1wiXFxcIiBoZWlnaHQ9XFxcIlwiK3QrXCJcXFwiIHZpZXdCb3g9XFxcIjAgMCAyMDAgMjAwXFxcIj48c3R5bGU+QC13ZWJraXQta2V5ZnJhbWVzIE5YaG91cmdsYXNzNS1hbmltYXRpb257MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSwxKTt0cmFuc2Zvcm06c2NhbGUoMSwxKX0xNi42NyV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSwuOCk7dHJhbnNmb3JtOnNjYWxlKDEsLjgpfTMzLjMzJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguODgsLjYpO3RyYW5zZm9ybTpzY2FsZSguODgsLjYpfTM3LjUley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC44NSwuNTUpO3RyYW5zZm9ybTpzY2FsZSguODUsLjU1KX00MS42NyV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjgsLjUpO3RyYW5zZm9ybTpzY2FsZSguOCwuNSl9NDUuODMley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC43NSwuNDUpO3RyYW5zZm9ybTpzY2FsZSguNzUsLjQ1KX01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjcsLjQpO3RyYW5zZm9ybTpzY2FsZSguNywuNCl9NTQuMTcley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC42LC4zNSk7dHJhbnNmb3JtOnNjYWxlKC42LC4zNSl9NTguMzMley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC41LC4zKTt0cmFuc2Zvcm06c2NhbGUoLjUsLjMpfTgzLjMzJSx0b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMiwwKTt0cmFuc2Zvcm06c2NhbGUoLjIsMCl9fUBrZXlmcmFtZXMgTlhob3VyZ2xhc3M1LWFuaW1hdGlvbnswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLDEpO3RyYW5zZm9ybTpzY2FsZSgxLDEpfTE2LjY3JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLC44KTt0cmFuc2Zvcm06c2NhbGUoMSwuOCl9MzMuMzMley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC44OCwuNik7dHJhbnNmb3JtOnNjYWxlKC44OCwuNil9MzcuNSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjg1LC41NSk7dHJhbnNmb3JtOnNjYWxlKC44NSwuNTUpfTQxLjY3JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOCwuNSk7dHJhbnNmb3JtOnNjYWxlKC44LC41KX00NS44MyV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjc1LC40NSk7dHJhbnNmb3JtOnNjYWxlKC43NSwuNDUpfTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNywuNCk7dHJhbnNmb3JtOnNjYWxlKC43LC40KX01NC4xNyV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjYsLjM1KTt0cmFuc2Zvcm06c2NhbGUoLjYsLjM1KX01OC4zMyV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUsLjMpO3RyYW5zZm9ybTpzY2FsZSguNSwuMyl9ODMuMzMlLHRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC4yLDApO3RyYW5zZm9ybTpzY2FsZSguMiwwKX19QC13ZWJraXQta2V5ZnJhbWVzIE5YaG91cmdsYXNzMy1hbmltYXRpb257MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSwuMDIpO3RyYW5zZm9ybTpzY2FsZSgxLC4wMil9NzkuMTclLHRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEsMSk7dHJhbnNmb3JtOnNjYWxlKDEsMSl9fUBrZXlmcmFtZXMgTlhob3VyZ2xhc3MzLWFuaW1hdGlvbnswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLC4wMik7dHJhbnNmb3JtOnNjYWxlKDEsLjAyKX03OS4xNyUsdG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSwxKTt0cmFuc2Zvcm06c2NhbGUoMSwxKX19QC13ZWJraXQta2V5ZnJhbWVzIE5YaG91cmdsYXNzMS1hbmltYXRpb257MCUsODMuMzMley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKX19QGtleWZyYW1lcyBOWGhvdXJnbGFzczEtYW5pbWF0aW9uezAlLDgzLjMzJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDE4MGRlZyl9fSNOWExvYWRpbmdIb3VyZ2xhc3MgKnstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxLjJzO2FuaW1hdGlvbi1kdXJhdGlvbjoxLjJzOy13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMCwwLDEsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMCwwLDEsMSl9PC9zdHlsZT48ZyBkYXRhLWFuaW1hdG9yLWdyb3VwPVxcXCJ0cnVlXFxcIiBkYXRhLWFuaW1hdG9yLXR5cGU9XFxcIjFcXFwiIHN0eWxlPVxcXCItd2Via2l0LWFuaW1hdGlvbi1uYW1lOk5YaG91cmdsYXNzMS1hbmltYXRpb247YW5pbWF0aW9uLW5hbWU6Tlhob3VyZ2xhc3MxLWFuaW1hdGlvbjstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTt0cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCU7dHJhbnNmb3JtLWJveDpmaWxsLWJveFxcXCI+PGcgaWQ9XFxcIk5YaG91cmdsYXNzMlxcXCIgZmlsbD1cXFwiaW5oZXJpdFxcXCI+PGcgZGF0YS1hbmltYXRvci1ncm91cD1cXFwidHJ1ZVxcXCIgZGF0YS1hbmltYXRvci10eXBlPVxcXCIyXFxcIiBzdHlsZT1cXFwiLXdlYmtpdC1hbmltYXRpb24tbmFtZTpOWGhvdXJnbGFzczMtYW5pbWF0aW9uO2FuaW1hdGlvbi1uYW1lOk5YaG91cmdsYXNzMy1hbmltYXRpb247LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNDIsMCwuNTgsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjQyLDAsLjU4LDEpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCUgMTAwJTt0cmFuc2Zvcm0tb3JpZ2luOjUwJSAxMDAlO3RyYW5zZm9ybS1ib3g6ZmlsbC1ib3hcXFwiIG9wYWNpdHk9XFxcIi40XFxcIj48cGF0aCBpZD1cXFwiTlhob3VyZ2xhc3M0XFxcIiBkPVxcXCJNMTAwIDEwMGwtMzQuMzggMzIuMDh2MzEuMTRoNjguNzZ2LTMxLjE0elxcXCIvPjwvZz48ZyBkYXRhLWFuaW1hdG9yLWdyb3VwPVxcXCJ0cnVlXFxcIiBkYXRhLWFuaW1hdG9yLXR5cGU9XFxcIjJcXFwiIHN0eWxlPVxcXCItd2Via2l0LWFuaW1hdGlvbi1uYW1lOk5YaG91cmdsYXNzNS1hbmltYXRpb247YW5pbWF0aW9uLW5hbWU6Tlhob3VyZ2xhc3M1LWFuaW1hdGlvbjstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlIDEwMCU7dHJhbnNmb3JtLW9yaWdpbjo1MCUgMTAwJTt0cmFuc2Zvcm0tYm94OmZpbGwtYm94XFxcIiBvcGFjaXR5PVxcXCIuNFxcXCI+PHBhdGggaWQ9XFxcIk5YaG91cmdsYXNzNlxcXCIgZD1cXFwiTTEwMCAxMDBMNjUuNjIgNjcuOTJWMzYuNzhoNjguNzZ2MzEuMTR6XFxcIi8+PC9nPjxwYXRoIGQ9XFxcIk01MS4xNCAzOC44OWg4LjMzdjE0LjkzYzAgMTUuMSA4LjI5IDI4Ljk5IDIzLjM0IDM5LjEgMS44OCAxLjI1IDMuMDQgMy45NyAzLjA0IDcuMDhzLTEuMTYgNS44My0zLjA0IDcuMDljLTE1LjA1IDEwLjEtMjMuMzQgMjMuOTktMjMuMzQgMzkuMDl2MTQuOTNoLTguMzNhNC44NTkgNC44NTkgMCAxIDAgMCA5LjcyaDk3LjcyYTQuODU5IDQuODU5IDAgMSAwIDAtOS43MmgtOC4zM3YtMTQuOTNjMC0xNS4xLTguMjktMjguOTktMjMuMzQtMzkuMDktMS44OC0xLjI2LTMuMDQtMy45OC0zLjA0LTcuMDlzMS4xNi01LjgzIDMuMDQtNy4wOGMxNS4wNS0xMC4xMSAyMy4zNC0yNCAyMy4zNC0zOS4xVjM4Ljg5aDguMzNhNC44NTkgNC44NTkgMCAxIDAgMC05LjcySDUxLjE0YTQuODU5IDQuODU5IDAgMSAwIDAgOS43MnptNzkuNjcgMTQuOTNjMCAxNS44Ny0xMS45MyAyNi4yNS0xOS4wNCAzMS4wMy00LjYgMy4wOC03LjM0IDguNzUtNy4zNCAxNS4xNSAwIDYuNDEgMi43NCAxMi4wNyA3LjM0IDE1LjE1IDcuMTEgNC43OCAxOS4wNCAxNS4xNiAxOS4wNCAzMS4wM3YxNC45M0g2OS4xOXYtMTQuOTNjMC0xNS44NyAxMS45My0yNi4yNSAxOS4wNC0zMS4wMiA0LjYtMy4wOSA3LjM0LTguNzUgNy4zNC0xNS4xNiAwLTYuNC0yLjc0LTEyLjA3LTcuMzQtMTUuMTUtNy4xMS00Ljc4LTE5LjA0LTE1LjE2LTE5LjA0LTMxLjAzVjM4Ljg5aDYxLjYydjE0LjkzelxcXCIvPjwvZz48L2c+PC9zdmc+XCI7cmV0dXJuIGl9LFI9ZnVuY3Rpb24odCxlKXt0fHwodD1cIjYwcHhcIiksZXx8KGU9XCIjMzJjNjgyXCIpO3ZhciBpPVwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCJcIit0K1wiXFxcIiBoZWlnaHQ9XFxcIlwiK3QrXCJcXFwiIHZpZXdCb3g9XFxcIjI1IDI1IDUwIDUwXFxcIiBzdHlsZT1cXFwiLXdlYmtpdC1hbmltYXRpb246cm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTthbmltYXRpb246cm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTtoZWlnaHQ6XCIrdCtcIjstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcjstbXMtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcjt3aWR0aDpcIit0K1wiO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDttYXJnaW46YXV0b1xcXCI+PHN0eWxlPkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGV7dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIHJvdGF0ZXt0b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUAtd2Via2l0LWtleWZyYW1lcyBkYXNoezAle3N0cm9rZS1kYXNoYXJyYXk6MSwyMDA7c3Ryb2tlLWRhc2hvZmZzZXQ6MH01MCV7c3Ryb2tlLWRhc2hhcnJheTo4OSwyMDA7c3Ryb2tlLWRhc2hvZmZzZXQ6LTM1fXRve3N0cm9rZS1kYXNoYXJyYXk6ODksMjAwO3N0cm9rZS1kYXNob2Zmc2V0Oi0xMjR9fUBrZXlmcmFtZXMgZGFzaHswJXtzdHJva2UtZGFzaGFycmF5OjEsMjAwO3N0cm9rZS1kYXNob2Zmc2V0OjB9NTAle3N0cm9rZS1kYXNoYXJyYXk6ODksMjAwO3N0cm9rZS1kYXNob2Zmc2V0Oi0zNX10b3tzdHJva2UtZGFzaGFycmF5Ojg5LDIwMDtzdHJva2UtZGFzaG9mZnNldDotMTI0fX08L3N0eWxlPjxjaXJjbGUgY3g9XFxcIjUwXFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjIwXFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIlwiK2UrXCJcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCIgc3R5bGU9XFxcIi13ZWJraXQtYW5pbWF0aW9uOmRhc2ggMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSxjb2xvciAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO2FuaW1hdGlvbjpkYXNoIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUsY29sb3IgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZVxcXCIgc3Ryb2tlLWRhc2hhcnJheT1cXFwiMTUwIDIwMFxcXCIgc3Ryb2tlLWRhc2hvZmZzZXQ9XFxcIi0xMFxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIi8+PC9zdmc+XCI7cmV0dXJuIGl9LEE9ZnVuY3Rpb24odCxlKXt0fHwodD1cIjYwcHhcIiksZXx8KGU9XCIjMzJjNjgyXCIpO3ZhciBpPVwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIlwiK2UrXCJcXFwiIHdpZHRoPVxcXCJcIit0K1wiXFxcIiBoZWlnaHQ9XFxcIlwiK3QrXCJcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMjggMTI4XFxcIj48Zz48cGF0aCBmaWxsPVxcXCJpbmhlcml0XFxcIiBkPVxcXCJNMTA5LjI1IDU1LjVoLTM2bDEyLTEyYTI5LjU0IDI5LjU0IDAgMCAwLTQ5LjUzIDEySDE4Ljc1QTQ2LjA0IDQ2LjA0IDAgMCAxIDk2LjkgMzEuODRsMTIuMzUtMTIuMzR2MzZ6bS05MC41IDE3aDM2bC0xMiAxMmEyOS41NCAyOS41NCAwIDAgMCA0OS41My0xMmgxNi45N0E0Ni4wNCA0Ni4wNCAwIDAgMSAzMS4xIDk2LjE2TDE4Ljc0IDEwOC41di0zNnpcXFwiLz48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPVxcXCJ0cmFuc2Zvcm1cXFwiIGR1cj1cXFwiMS41c1xcXCIgZnJvbT1cXFwiMCA2NCA2NFxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIHRvPVxcXCIzNjAgNjQgNjRcXFwiIHR5cGU9XFxcInJvdGF0ZVxcXCIvPjwvZz48L3N2Zz5cIjtyZXR1cm4gaX0sTT1mdW5jdGlvbih0LGUpe3R8fCh0PVwiNjBweFwiKSxlfHwoZT1cIiMzMmM2ODJcIik7dmFyIGk9XCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwiXCIrZStcIlxcXCIgd2lkdGg9XFxcIlwiK3QrXCJcXFwiIGhlaWdodD1cXFwiXCIrdCtcIlxcXCIgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiPjxnIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKDI1IDUwKVxcXCI+PGNpcmNsZSByPVxcXCI5XFxcIiBmaWxsPVxcXCJpbmhlcml0XFxcIiB0cmFuc2Zvcm09XFxcInNjYWxlKC4yMzkpXFxcIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPVxcXCJ0cmFuc2Zvcm1cXFwiIGJlZ2luPVxcXCItMC4yNjZzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBkdXI9XFxcIjAuOHNcXFwiIGtleVNwbGluZXM9XFxcIjAuMyAwIDAuNyAxOzAuMyAwIDAuNyAxXFxcIiBrZXlUaW1lcz1cXFwiMDswLjU7MVxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIHR5cGU9XFxcInNjYWxlXFxcIiB2YWx1ZXM9XFxcIjA7MTswXFxcIi8+PC9jaXJjbGU+PC9nPjxnIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKDUwIDUwKVxcXCI+PGNpcmNsZSByPVxcXCI5XFxcIiBmaWxsPVxcXCJpbmhlcml0XFxcIiB0cmFuc2Zvcm09XFxcInNjYWxlKC4wMDE1MilcXFwiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XFxcInRyYW5zZm9ybVxcXCIgYmVnaW49XFxcIi0wLjEzM3NcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGR1cj1cXFwiMC44c1xcXCIga2V5U3BsaW5lcz1cXFwiMC4zIDAgMC43IDE7MC4zIDAgMC43IDFcXFwiIGtleVRpbWVzPVxcXCIwOzAuNTsxXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgdHlwZT1cXFwic2NhbGVcXFwiIHZhbHVlcz1cXFwiMDsxOzBcXFwiLz48L2NpcmNsZT48L2c+PGcgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoNzUgNTApXFxcIj48Y2lyY2xlIHI9XFxcIjlcXFwiIGZpbGw9XFxcImluaGVyaXRcXFwiIHRyYW5zZm9ybT1cXFwic2NhbGUoLjI5OSlcXFwiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XFxcInRyYW5zZm9ybVxcXCIgYmVnaW49XFxcIjBzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBkdXI9XFxcIjAuOHNcXFwiIGtleVNwbGluZXM9XFxcIjAuMyAwIDAuNyAxOzAuMyAwIDAuNyAxXFxcIiBrZXlUaW1lcz1cXFwiMDswLjU7MVxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIHR5cGU9XFxcInNjYWxlXFxcIiB2YWx1ZXM9XFxcIjA7MTswXFxcIi8+PC9jaXJjbGU+PC9nPjwvc3ZnPlwiO3JldHVybiBpfSxCPWZ1bmN0aW9uKHQsZSl7dHx8KHQ9XCI2MHB4XCIpLGV8fChlPVwiIzMyYzY4MlwiKTt2YXIgaT1cIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBzdHJva2U9XFxcIlwiK2UrXCJcXFwiIHdpZHRoPVxcXCJcIit0K1wiXFxcIiBoZWlnaHQ9XFxcIlwiK3QrXCJcXFwiIHZpZXdCb3g9XFxcIjAgMCA0NCA0NFxcXCI+PGcgZmlsbD1cXFwibm9uZVxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBzdHJva2Utd2lkdGg9XFxcIjJcXFwiPjxjaXJjbGUgY3g9XFxcIjIyXFxcIiBjeT1cXFwiMjJcXFwiIHI9XFxcIjFcXFwiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcInJcXFwiIGJlZ2luPVxcXCIwc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIgZHVyPVxcXCIxLjhzXFxcIiBrZXlTcGxpbmVzPVxcXCIwLjE2NSwgMC44NCwgMC40NCwgMVxcXCIga2V5VGltZXM9XFxcIjA7IDFcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiB2YWx1ZXM9XFxcIjE7IDIwXFxcIi8+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwic3Ryb2tlLW9wYWNpdHlcXFwiIGJlZ2luPVxcXCIwc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIgZHVyPVxcXCIxLjhzXFxcIiBrZXlTcGxpbmVzPVxcXCIwLjMsIDAuNjEsIDAuMzU1LCAxXFxcIiBrZXlUaW1lcz1cXFwiMDsgMVxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIHZhbHVlcz1cXFwiMTsgMFxcXCIvPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjIyXFxcIiBjeT1cXFwiMjJcXFwiIHI9XFxcIjFcXFwiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcInJcXFwiIGJlZ2luPVxcXCItMC45c1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIgZHVyPVxcXCIxLjhzXFxcIiBrZXlTcGxpbmVzPVxcXCIwLjE2NSwgMC44NCwgMC40NCwgMVxcXCIga2V5VGltZXM9XFxcIjA7IDFcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiB2YWx1ZXM9XFxcIjE7IDIwXFxcIi8+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwic3Ryb2tlLW9wYWNpdHlcXFwiIGJlZ2luPVxcXCItMC45c1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIgZHVyPVxcXCIxLjhzXFxcIiBrZXlTcGxpbmVzPVxcXCIwLjMsIDAuNjEsIDAuMzU1LCAxXFxcIiBrZXlUaW1lcz1cXFwiMDsgMVxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIHZhbHVlcz1cXFwiMTsgMFxcXCIvPjwvY2lyY2xlPjwvZz48L3N2Zz5cIjtyZXR1cm4gaX0sWD1mdW5jdGlvbih0LGUsaSl7dHx8KHQ9XCI2MHB4XCIpLGV8fChlPVwiI2Y4ZjhmOFwiKSxpfHwoaT1cIiMzMmM2ODJcIik7dmFyIGE9XCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgaWQ9XFxcIk5YTG9hZGluZ05vdGlmbGl4TGliXFxcIiB3aWR0aD1cXFwiXCIrdCtcIlxcXCIgaGVpZ2h0PVxcXCJcIit0K1wiXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjAwIDIwMFxcXCI+PGRlZnM+PHN0eWxlPkBrZXlmcmFtZXMgbm90aWZsaXgtbnswJXtzdHJva2UtZGFzaG9mZnNldDoxMDAwfXRve3N0cm9rZS1kYXNob2Zmc2V0OjB9fUBrZXlmcmFtZXMgbm90aWZsaXgteHswJXtzdHJva2UtZGFzaG9mZnNldDoxMDAwfXRve3N0cm9rZS1kYXNob2Zmc2V0OjB9fUBrZXlmcmFtZXMgbm90aWZsaXgtZG90ezAlLHRve3N0cm9rZS13aWR0aDowfTUwJXtzdHJva2Utd2lkdGg6MTJ9fS5ueC1pY29uLWxpbmV7c3Ryb2tlOlwiK2UrXCI7c3Ryb2tlLXdpZHRoOjEyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyMjtmaWxsOm5vbmV9PC9zdHlsZT48L2RlZnM+PHBhdGggZD1cXFwiTTQ3Ljk3IDEzNS4wNWE2LjUgNi41IDAgMSAxIDAgMTMgNi41IDYuNSAwIDAgMSAwLTEzelxcXCIgc3R5bGU9XFxcImFuaW1hdGlvbi1uYW1lOm5vdGlmbGl4LWRvdDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0O2FuaW1hdGlvbi1kdXJhdGlvbjoxLjI1czthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlO2FuaW1hdGlvbi1kaXJlY3Rpb246bm9ybWFsXFxcIiBmaWxsPVxcXCJcIitpK1wiXFxcIiBzdHJva2U9XFxcIlwiK2krXCJcXFwiIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjIyXFxcIiBzdHJva2Utd2lkdGg9XFxcIjEyXFxcIi8+PHBhdGggY2xhc3M9XFxcIm54LWljb24tbGluZVxcXCIgZD1cXFwiTTEwLjE0IDE0NC43NlY4Ny41NWMwLTUuNjgtNC41NC00MS4zNiAzNy44My00MS4zNiA0Mi4zNiAwIDM3LjgyIDM1LjY4IDM3LjgyIDQxLjM2djU3LjIxXFxcIiBzdHlsZT1cXFwiYW5pbWF0aW9uLW5hbWU6bm90aWZsaXgtbjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjthbmltYXRpb24tZHVyYXRpb246Mi41czthbmltYXRpb24tZGVsYXk6MHM7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTthbmltYXRpb24tZGlyZWN0aW9uOm5vcm1hbFxcXCIgc3Ryb2tlLWRhc2hhcnJheT1cXFwiNTAwXFxcIi8+PHBhdGggY2xhc3M9XFxcIm54LWljb24tbGluZVxcXCIgZD1cXFwiTTExNS4wNiAxNDQuNDljMjQuOTgtMzIuNjggNDkuOTYtNjUuMzUgNzQuOTQtOTguMDNNMTE0Ljg5IDQ2LjZjMjUuMDkgMzIuNTggNTAuMTkgNjUuMTcgNzUuMjkgOTcuNzVcXFwiIHN0eWxlPVxcXCJhbmltYXRpb24tbmFtZTpub3RpZmxpeC14O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO2FuaW1hdGlvbi1kdXJhdGlvbjoyLjVzO2FuaW1hdGlvbi1kZWxheTouMnM7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTthbmltYXRpb24tZGlyZWN0aW9uOm5vcm1hbFxcXCIgc3Ryb2tlLWRhc2hhcnJheT1cXFwiNTAwXFxcIi8+PC9zdmc+XCI7cmV0dXJuIGF9LEQ9ZnVuY3Rpb24oKXtyZXR1cm5cIltpZF49Tm90aWZsaXhOb3RpZnlXcmFwXXtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6NDAwMTtvcGFjaXR5OjE7cmlnaHQ6MTBweDt0b3A6MTBweDt3aWR0aDoyODBweDttYXgtd2lkdGg6OTYlOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50fVtpZF49Tm90aWZsaXhOb3RpZnlXcmFwXS5ueC1mbGV4LWNlbnRlci1jZW50ZXJ7bWF4LWhlaWdodDpjYWxjKDEwMHZoIC0gMjBweCk7b3ZlcmZsb3cteDpoaWRkZW47b3ZlcmZsb3cteTphdXRvO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1mbGV4LXdyYXA6d3JhcDstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXA7LXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsOy13ZWJraXQtYm94LWRpcmVjdGlvbjpub3JtYWw7LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy13ZWJraXQtYWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luOmF1dG99W2lkXj1Ob3RpZmxpeE5vdGlmeVdyYXBdOjotd2Via2l0LXNjcm9sbGJhcnt3aWR0aDowO2hlaWdodDowfVtpZF49Tm90aWZsaXhOb3RpZnlXcmFwXTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7YmFja2dyb3VuZDp0cmFuc3BhcmVudH1baWRePU5vdGlmbGl4Tm90aWZ5V3JhcF06Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNre2JhY2tncm91bmQ6dHJhbnNwYXJlbnR9W2lkXj1Ob3RpZmxpeE5vdGlmeVdyYXBdICp7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fVtpZF49Tm90aWZsaXhOb3RpZnlPdmVybGF5XXstd2Via2l0LXRyYW5zaXRpb246YmFja2dyb3VuZCAuM3MgZWFzZS1pbi1vdXQ7LW8tdHJhbnNpdGlvbjpiYWNrZ3JvdW5kIC4zcyBlYXNlLWluLW91dDt0cmFuc2l0aW9uOmJhY2tncm91bmQgLjNzIGVhc2UtaW4tb3V0fVtpZF49Tm90aWZsaXhOb3RpZnlXcmFwXT5kaXZ7cG9pbnRlci1ldmVudHM6YWxsOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtmb250LWZhbWlseTpcXFwiUXVpY2tzYW5kXFxcIiwtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcXFwiU2Vnb2UgVUlcXFwiLFJvYm90byxcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLEFyaWFsLHNhbnMtc2VyaWY7d2lkdGg6MTAwJTtkaXNwbGF5Oi13ZWJraXQtaW5saW5lLWJveDtkaXNwbGF5Oi13ZWJraXQtaW5saW5lLWZsZXg7ZGlzcGxheTotbXMtaW5saW5lLWZsZXhib3g7ZGlzcGxheTppbmxpbmUtZmxleDstd2Via2l0LWZsZXgtd3JhcDp3cmFwOy1tcy1mbGV4LXdyYXA6d3JhcDtmbGV4LXdyYXA6d3JhcDstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LXdlYmtpdC1hbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW46MCAwIDEwcHg7Ym9yZGVyLXJhZGl1czo1cHg7YmFja2dyb3VuZDojMWUxZTFlO2NvbG9yOiNmZmY7cGFkZGluZzoxMHB4IDEycHg7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MS40fVtpZF49Tm90aWZsaXhOb3RpZnlXcmFwXT5kaXY6bGFzdC1jaGlsZHttYXJnaW46MH1baWRePU5vdGlmbGl4Tm90aWZ5V3JhcF0+ZGl2Lm54LXdpdGgtY2FsbGJhY2t7Y3Vyc29yOnBvaW50ZXJ9W2lkXj1Ob3RpZmxpeE5vdGlmeVdyYXBdPmRpdi5ueC13aXRoLWljb257cGFkZGluZzo4cHg7bWluLWhlaWdodDo1NnB4fVtpZF49Tm90aWZsaXhOb3RpZnlXcmFwXT5kaXYubngtcGF1c2Vke2N1cnNvcjphdXRvfVtpZF49Tm90aWZsaXhOb3RpZnlXcmFwXT5kaXYubngtbm90aWZ5LWNsaWNrLXRvLWNsb3Nle2N1cnNvcjpwb2ludGVyfVtpZF49Tm90aWZsaXhOb3RpZnlXcmFwXT5kaXYubngtd2l0aC1jbG9zZS1idXR0b257cGFkZGluZzoxMHB4IDM2cHggMTBweCAxMnB4fVtpZF49Tm90aWZsaXhOb3RpZnlXcmFwXT5kaXYubngtd2l0aC1pY29uLm54LXdpdGgtY2xvc2UtYnV0dG9ue3BhZGRpbmc6NnB4IDM2cHggNnB4IDZweH1baWRePU5vdGlmbGl4Tm90aWZ5V3JhcF0+ZGl2PnNwYW4ubngtbWVzc2FnZXtjdXJzb3I6aW5oZXJpdDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1mYW1pbHk6aW5oZXJpdCFpbXBvcnRhbnQ7d29yZC1icmVhazpicmVhay1hbGw7d29yZC1icmVhazpicmVhay13b3JkfVtpZF49Tm90aWZsaXhOb3RpZnlXcmFwXT5kaXY+c3Bhbi5ueC1jbG9zZS1idXR0b257Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuMnMgZWFzZS1pbi1vdXQ7LW8tdHJhbnNpdGlvbjphbGwgLjJzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246YWxsIC4ycyBlYXNlLWluLW91dDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDo4cHg7dG9wOjA7Ym90dG9tOjA7bWFyZ2luOmF1dG87Y29sb3I6aW5oZXJpdDt3aWR0aDoyMHB4O2hlaWdodDoyMHB4fVtpZF49Tm90aWZsaXhOb3RpZnlXcmFwXT5kaXY+c3Bhbi5ueC1jbG9zZS1idXR0b246aG92ZXJ7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDkwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDkwZGVnKX1baWRePU5vdGlmbGl4Tm90aWZ5V3JhcF0+ZGl2PnNwYW4ubngtY2xvc2UtYnV0dG9uPnN2Z3twb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O3JpZ2h0OjJweDt0b3A6MnB4fVtpZF49Tm90aWZsaXhOb3RpZnlXcmFwXT5kaXY+Lm54LW1lc3NhZ2UtaWNvbntwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDo0MHB4O2hlaWdodDo0MHB4O2ZvbnQtc2l6ZTozMHB4O2xpbmUtaGVpZ2h0OjQwcHg7dGV4dC1hbGlnbjpjZW50ZXI7bGVmdDo4cHg7dG9wOjA7Ym90dG9tOjA7bWFyZ2luOmF1dG87Ym9yZGVyLXJhZGl1czppbmhlcml0fVtpZF49Tm90aWZsaXhOb3RpZnlXcmFwXT5kaXY+Lm54LW1lc3NhZ2UtaWNvbi1mYS5ueC1tZXNzYWdlLWljb24tZmEtc2hhZG93e2NvbG9yOmluaGVyaXQ7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4xNSk7LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMCAzNHB4IHJnYmEoMCwwLDAsLjIpO2JveC1zaGFkb3c6aW5zZXQgMCAwIDM0cHggcmdiYSgwLDAsMCwuMik7dGV4dC1zaGFkb3c6MCAwIDEwcHggcmdiYSgwLDAsMCwuMyl9W2lkXj1Ob3RpZmxpeE5vdGlmeVdyYXBdPmRpdj5zcGFuLm54LXdpdGgtaWNvbntwb3NpdGlvbjpyZWxhdGl2ZTtmbG9hdDpsZWZ0O3dpZHRoOmNhbGMoMTAwJSAtIDQwcHgpO21hcmdpbjowIDAgMCA0MHB4O3BhZGRpbmc6MCAwIDAgMTBweDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9W2lkXj1Ob3RpZmxpeE5vdGlmeVdyYXBdPmRpdi5ueC1ydGwtb24+Lm54LW1lc3NhZ2UtaWNvbntsZWZ0OmF1dG87cmlnaHQ6OHB4fVtpZF49Tm90aWZsaXhOb3RpZnlXcmFwXT5kaXYubngtcnRsLW9uPnNwYW4ubngtd2l0aC1pY29ue3BhZGRpbmc6MCAxMHB4IDAgMDttYXJnaW46MCA0MHB4IDAgMH1baWRePU5vdGlmbGl4Tm90aWZ5V3JhcF0+ZGl2Lm54LXJ0bC1vbj5zcGFuLm54LWNsb3NlLWJ1dHRvbntyaWdodDphdXRvO2xlZnQ6OHB4fVtpZF49Tm90aWZsaXhOb3RpZnlXcmFwXT5kaXYubngtd2l0aC1pY29uLm54LXdpdGgtY2xvc2UtYnV0dG9uLm54LXJ0bC1vbntwYWRkaW5nOjZweCA2cHggNnB4IDM2cHh9W2lkXj1Ob3RpZmxpeE5vdGlmeVdyYXBdPmRpdi5ueC13aXRoLWNsb3NlLWJ1dHRvbi5ueC1ydGwtb257cGFkZGluZzoxMHB4IDEycHggMTBweCAzNnB4fVtpZF49Tm90aWZsaXhOb3RpZnlPdmVybGF5XS5ueC13aXRoLWFuaW1hdGlvbixbaWRePU5vdGlmbGl4Tm90aWZ5V3JhcF0+ZGl2Lm54LXdpdGgtYW5pbWF0aW9uLm54LWZhZGV7LXdlYmtpdC1hbmltYXRpb246bm90aWZ5LWFuaW1hdGlvbi1mYWRlIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWw7YW5pbWF0aW9uOm5vdGlmeS1hbmltYXRpb24tZmFkZSAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsfUAtd2Via2l0LWtleWZyYW1lcyBub3RpZnktYW5pbWF0aW9uLWZhZGV7MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIG5vdGlmeS1hbmltYXRpb24tZmFkZXswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fVtpZF49Tm90aWZsaXhOb3RpZnlXcmFwXT5kaXYubngtd2l0aC1hbmltYXRpb24ubngtem9vbXstd2Via2l0LWFuaW1hdGlvbjpub3RpZnktYW5pbWF0aW9uLXpvb20gLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbDthbmltYXRpb246bm90aWZ5LWFuaW1hdGlvbi16b29tIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWx9QC13ZWJraXQta2V5ZnJhbWVzIG5vdGlmeS1hbmltYXRpb24tem9vbXswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMDUpO3RyYW5zZm9ybTpzY2FsZSgxLjA1KX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBub3RpZnktYW5pbWF0aW9uLXpvb217MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjA1KTt0cmFuc2Zvcm06c2NhbGUoMS4wNSl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fVtpZF49Tm90aWZsaXhOb3RpZnlXcmFwXT5kaXYubngtd2l0aC1hbmltYXRpb24ubngtZnJvbS1yaWdodHstd2Via2l0LWFuaW1hdGlvbjpub3RpZnktYW5pbWF0aW9uLWZyb20tcmlnaHQgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbDthbmltYXRpb246bm90aWZ5LWFuaW1hdGlvbi1mcm9tLXJpZ2h0IC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWx9QC13ZWJraXQta2V5ZnJhbWVzIG5vdGlmeS1hbmltYXRpb24tZnJvbS1yaWdodHswJXtyaWdodDotMzAwcHg7b3BhY2l0eTowfTUwJXtyaWdodDo4cHg7b3BhY2l0eToxfTEwMCV7cmlnaHQ6MDtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgbm90aWZ5LWFuaW1hdGlvbi1mcm9tLXJpZ2h0ezAle3JpZ2h0Oi0zMDBweDtvcGFjaXR5OjB9NTAle3JpZ2h0OjhweDtvcGFjaXR5OjF9MTAwJXtyaWdodDowO29wYWNpdHk6MX19W2lkXj1Ob3RpZmxpeE5vdGlmeVdyYXBdPmRpdi5ueC13aXRoLWFuaW1hdGlvbi5ueC1mcm9tLWxlZnR7LXdlYmtpdC1hbmltYXRpb246bm90aWZ5LWFuaW1hdGlvbi1mcm9tLWxlZnQgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbDthbmltYXRpb246bm90aWZ5LWFuaW1hdGlvbi1mcm9tLWxlZnQgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbH1ALXdlYmtpdC1rZXlmcmFtZXMgbm90aWZ5LWFuaW1hdGlvbi1mcm9tLWxlZnR7MCV7bGVmdDotMzAwcHg7b3BhY2l0eTowfTUwJXtsZWZ0OjhweDtvcGFjaXR5OjF9MTAwJXtsZWZ0OjA7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIG5vdGlmeS1hbmltYXRpb24tZnJvbS1sZWZ0ezAle2xlZnQ6LTMwMHB4O29wYWNpdHk6MH01MCV7bGVmdDo4cHg7b3BhY2l0eToxfTEwMCV7bGVmdDowO29wYWNpdHk6MX19W2lkXj1Ob3RpZmxpeE5vdGlmeVdyYXBdPmRpdi5ueC13aXRoLWFuaW1hdGlvbi5ueC1mcm9tLXRvcHstd2Via2l0LWFuaW1hdGlvbjpub3RpZnktYW5pbWF0aW9uLWZyb20tdG9wIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWw7YW5pbWF0aW9uOm5vdGlmeS1hbmltYXRpb24tZnJvbS10b3AgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbH1ALXdlYmtpdC1rZXlmcmFtZXMgbm90aWZ5LWFuaW1hdGlvbi1mcm9tLXRvcHswJXt0b3A6LTUwcHg7b3BhY2l0eTowfTUwJXt0b3A6OHB4O29wYWNpdHk6MX0xMDAle3RvcDowO29wYWNpdHk6MX19QGtleWZyYW1lcyBub3RpZnktYW5pbWF0aW9uLWZyb20tdG9wezAle3RvcDotNTBweDtvcGFjaXR5OjB9NTAle3RvcDo4cHg7b3BhY2l0eToxfTEwMCV7dG9wOjA7b3BhY2l0eToxfX1baWRePU5vdGlmbGl4Tm90aWZ5V3JhcF0+ZGl2Lm54LXdpdGgtYW5pbWF0aW9uLm54LWZyb20tYm90dG9tey13ZWJraXQtYW5pbWF0aW9uOm5vdGlmeS1hbmltYXRpb24tZnJvbS1ib3R0b20gLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbDthbmltYXRpb246bm90aWZ5LWFuaW1hdGlvbi1mcm9tLWJvdHRvbSAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsfUAtd2Via2l0LWtleWZyYW1lcyBub3RpZnktYW5pbWF0aW9uLWZyb20tYm90dG9tezAle2JvdHRvbTotNTBweDtvcGFjaXR5OjB9NTAle2JvdHRvbTo4cHg7b3BhY2l0eToxfTEwMCV7Ym90dG9tOjA7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIG5vdGlmeS1hbmltYXRpb24tZnJvbS1ib3R0b217MCV7Ym90dG9tOi01MHB4O29wYWNpdHk6MH01MCV7Ym90dG9tOjhweDtvcGFjaXR5OjF9MTAwJXtib3R0b206MDtvcGFjaXR5OjF9fVtpZF49Tm90aWZsaXhOb3RpZnlPdmVybGF5XS5ueC13aXRoLWFuaW1hdGlvbi5ueC1yZW1vdmUsW2lkXj1Ob3RpZmxpeE5vdGlmeVdyYXBdPmRpdi5ueC13aXRoLWFuaW1hdGlvbi5ueC1mYWRlLm54LXJlbW92ZXtvcGFjaXR5OjA7LXdlYmtpdC1hbmltYXRpb246bm90aWZ5LXJlbW92ZS1mYWRlIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWw7YW5pbWF0aW9uOm5vdGlmeS1yZW1vdmUtZmFkZSAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsfUAtd2Via2l0LWtleWZyYW1lcyBub3RpZnktcmVtb3ZlLWZhZGV7MCV7b3BhY2l0eToxfTEwMCV7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIG5vdGlmeS1yZW1vdmUtZmFkZXswJXtvcGFjaXR5OjF9MTAwJXtvcGFjaXR5OjB9fVtpZF49Tm90aWZsaXhOb3RpZnlXcmFwXT5kaXYubngtd2l0aC1hbmltYXRpb24ubngtem9vbS5ueC1yZW1vdmV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApOy13ZWJraXQtYW5pbWF0aW9uOm5vdGlmeS1yZW1vdmUtem9vbSAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsO2FuaW1hdGlvbjpub3RpZnktcmVtb3ZlLXpvb20gLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbH1ALXdlYmtpdC1rZXlmcmFtZXMgbm90aWZ5LXJlbW92ZS16b29tezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4wNSk7dHJhbnNmb3JtOnNjYWxlKDEuMDUpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfX1Aa2V5ZnJhbWVzIG5vdGlmeS1yZW1vdmUtem9vbXswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMDUpO3RyYW5zZm9ybTpzY2FsZSgxLjA1KX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKX19W2lkXj1Ob3RpZmxpeE5vdGlmeVdyYXBdPmRpdi5ueC13aXRoLWFuaW1hdGlvbi5ueC1mcm9tLXRvcC5ueC1yZW1vdmV7b3BhY2l0eTowOy13ZWJraXQtYW5pbWF0aW9uOm5vdGlmeS1yZW1vdmUtdG8tdG9wIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWw7YW5pbWF0aW9uOm5vdGlmeS1yZW1vdmUtdG8tdG9wIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWx9QC13ZWJraXQta2V5ZnJhbWVzIG5vdGlmeS1yZW1vdmUtdG8tdG9wezAle3RvcDowO29wYWNpdHk6MX01MCV7dG9wOjhweDtvcGFjaXR5OjF9MTAwJXt0b3A6LTUwcHg7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIG5vdGlmeS1yZW1vdmUtdG8tdG9wezAle3RvcDowO29wYWNpdHk6MX01MCV7dG9wOjhweDtvcGFjaXR5OjF9MTAwJXt0b3A6LTUwcHg7b3BhY2l0eTowfX1baWRePU5vdGlmbGl4Tm90aWZ5V3JhcF0+ZGl2Lm54LXdpdGgtYW5pbWF0aW9uLm54LWZyb20tcmlnaHQubngtcmVtb3Zle29wYWNpdHk6MDstd2Via2l0LWFuaW1hdGlvbjpub3RpZnktcmVtb3ZlLXRvLXJpZ2h0IC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWw7YW5pbWF0aW9uOm5vdGlmeS1yZW1vdmUtdG8tcmlnaHQgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbH1ALXdlYmtpdC1rZXlmcmFtZXMgbm90aWZ5LXJlbW92ZS10by1yaWdodHswJXtyaWdodDowO29wYWNpdHk6MX01MCV7cmlnaHQ6OHB4O29wYWNpdHk6MX0xMDAle3JpZ2h0Oi0zMDBweDtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgbm90aWZ5LXJlbW92ZS10by1yaWdodHswJXtyaWdodDowO29wYWNpdHk6MX01MCV7cmlnaHQ6OHB4O29wYWNpdHk6MX0xMDAle3JpZ2h0Oi0zMDBweDtvcGFjaXR5OjB9fVtpZF49Tm90aWZsaXhOb3RpZnlXcmFwXT5kaXYubngtd2l0aC1hbmltYXRpb24ubngtZnJvbS1ib3R0b20ubngtcmVtb3Zle29wYWNpdHk6MDstd2Via2l0LWFuaW1hdGlvbjpub3RpZnktcmVtb3ZlLXRvLWJvdHRvbSAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsO2FuaW1hdGlvbjpub3RpZnktcmVtb3ZlLXRvLWJvdHRvbSAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsfUAtd2Via2l0LWtleWZyYW1lcyBub3RpZnktcmVtb3ZlLXRvLWJvdHRvbXswJXtib3R0b206MDtvcGFjaXR5OjF9NTAle2JvdHRvbTo4cHg7b3BhY2l0eToxfTEwMCV7Ym90dG9tOi01MHB4O29wYWNpdHk6MH19QGtleWZyYW1lcyBub3RpZnktcmVtb3ZlLXRvLWJvdHRvbXswJXtib3R0b206MDtvcGFjaXR5OjF9NTAle2JvdHRvbTo4cHg7b3BhY2l0eToxfTEwMCV7Ym90dG9tOi01MHB4O29wYWNpdHk6MH19W2lkXj1Ob3RpZmxpeE5vdGlmeVdyYXBdPmRpdi5ueC13aXRoLWFuaW1hdGlvbi5ueC1mcm9tLWxlZnQubngtcmVtb3Zle29wYWNpdHk6MDstd2Via2l0LWFuaW1hdGlvbjpub3RpZnktcmVtb3ZlLXRvLWxlZnQgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbDthbmltYXRpb246bm90aWZ5LXJlbW92ZS10by1sZWZ0IC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWx9QC13ZWJraXQta2V5ZnJhbWVzIG5vdGlmeS1yZW1vdmUtdG8tbGVmdHswJXtsZWZ0OjA7b3BhY2l0eToxfTUwJXtsZWZ0OjhweDtvcGFjaXR5OjF9MTAwJXtsZWZ0Oi0zMDBweDtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgbm90aWZ5LXJlbW92ZS10by1sZWZ0ezAle2xlZnQ6MDtvcGFjaXR5OjF9NTAle2xlZnQ6OHB4O29wYWNpdHk6MX0xMDAle2xlZnQ6LTMwMHB4O29wYWNpdHk6MH19XCJ9LFQ9MCxGPWZ1bmN0aW9uKGEsbixvLHIpe2lmKCF3KFwiYm9keVwiKSlyZXR1cm4hMTtlfHxHLk5vdGlmeS5pbml0KHt9KTt2YXIgYz12KCEwLGUse30pO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBvJiYhQXJyYXkuaXNBcnJheShvKXx8XCJvYmplY3RcIj09dHlwZW9mIHImJiFBcnJheS5pc0FycmF5KHIpKXt2YXIgcD17fTtcIm9iamVjdFwiPT10eXBlb2Ygbz9wPW86XCJvYmplY3RcIj09dHlwZW9mIHImJihwPXIpLGU9dighMCxlLHApfXZhciBmPWVbYS50b0xvY2FsZUxvd2VyQ2FzZShcImVuXCIpXTtUKyssXCJzdHJpbmdcIiE9dHlwZW9mIG4mJihuPVwiTm90aWZsaXggXCIrYSksZS5wbGFpblRleHQmJihuPU4obikpLCFlLnBsYWluVGV4dCYmbi5sZW5ndGg+ZS5tZXNzYWdlTWF4TGVuZ3RoJiYoZT12KCEwLGUse2Nsb3NlQnV0dG9uOiEwLG1lc3NhZ2VNYXhMZW5ndGg6MTUwfSksbj1cIlBvc3NpYmxlIEhUTUwgVGFncyBFcnJvcjogVGhlIFxcXCJwbGFpblRleHRcXFwiIG9wdGlvbiBpcyBcXFwiZmFsc2VcXFwiIGFuZCB0aGUgbm90aWZpY2F0aW9uIGNvbnRlbnQgbGVuZ3RoIGlzIG1vcmUgdGhhbiB0aGUgXFxcIm1lc3NhZ2VNYXhMZW5ndGhcXFwiIG9wdGlvbi5cIiksbi5sZW5ndGg+ZS5tZXNzYWdlTWF4TGVuZ3RoJiYobj1uLnN1YnN0cmluZygwLGUubWVzc2FnZU1heExlbmd0aCkrXCIuLi5cIiksXCJzaGFkb3dcIj09PWUuZm9udEF3ZXNvbWVJY29uU3R5bGUmJihmLmZvbnRBd2Vzb21lSWNvbkNvbG9yPWYuYmFja2dyb3VuZCksZS5jc3NBbmltYXRpb258fChlLmNzc0FuaW1hdGlvbkR1cmF0aW9uPTApO3ZhciBkPXQuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobS53cmFwSUQpfHx0LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aWYoZC5pZD1tLndyYXBJRCxkLnN0eWxlLndpZHRoPWUud2lkdGgsZC5zdHlsZS56SW5kZXg9ZS56aW5kZXgsZC5zdHlsZS5vcGFjaXR5PWUub3BhY2l0eSxcImNlbnRlci1jZW50ZXJcIj09PWUucG9zaXRpb24/KGQuc3R5bGUubGVmdD1lLmRpc3RhbmNlLGQuc3R5bGUudG9wPWUuZGlzdGFuY2UsZC5zdHlsZS5yaWdodD1lLmRpc3RhbmNlLGQuc3R5bGUuYm90dG9tPWUuZGlzdGFuY2UsZC5zdHlsZS5tYXJnaW49XCJhdXRvXCIsZC5jbGFzc0xpc3QuYWRkKFwibngtZmxleC1jZW50ZXItY2VudGVyXCIpLGQuc3R5bGUubWF4SGVpZ2h0PVwiY2FsYygoMTAwdmggLSBcIitlLmRpc3RhbmNlK1wiKSAtIFwiK2UuZGlzdGFuY2UrXCIpXCIsZC5zdHlsZS5kaXNwbGF5PVwiZmxleFwiLGQuc3R5bGUuZmxleFdyYXA9XCJ3cmFwXCIsZC5zdHlsZS5mbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIsZC5zdHlsZS5qdXN0aWZ5Q29udGVudD1cImNlbnRlclwiLGQuc3R5bGUuYWxpZ25JdGVtcz1cImNlbnRlclwiLGQuc3R5bGUucG9pbnRlckV2ZW50cz1cIm5vbmVcIik6XCJjZW50ZXItdG9wXCI9PT1lLnBvc2l0aW9uPyhkLnN0eWxlLmxlZnQ9ZS5kaXN0YW5jZSxkLnN0eWxlLnJpZ2h0PWUuZGlzdGFuY2UsZC5zdHlsZS50b3A9ZS5kaXN0YW5jZSxkLnN0eWxlLmJvdHRvbT1cImF1dG9cIixkLnN0eWxlLm1hcmdpbj1cImF1dG9cIik6XCJjZW50ZXItYm90dG9tXCI9PT1lLnBvc2l0aW9uPyhkLnN0eWxlLmxlZnQ9ZS5kaXN0YW5jZSxkLnN0eWxlLnJpZ2h0PWUuZGlzdGFuY2UsZC5zdHlsZS5ib3R0b209ZS5kaXN0YW5jZSxkLnN0eWxlLnRvcD1cImF1dG9cIixkLnN0eWxlLm1hcmdpbj1cImF1dG9cIik6XCJyaWdodC1ib3R0b21cIj09PWUucG9zaXRpb24/KGQuc3R5bGUucmlnaHQ9ZS5kaXN0YW5jZSxkLnN0eWxlLmJvdHRvbT1lLmRpc3RhbmNlLGQuc3R5bGUudG9wPVwiYXV0b1wiLGQuc3R5bGUubGVmdD1cImF1dG9cIik6XCJsZWZ0LXRvcFwiPT09ZS5wb3NpdGlvbj8oZC5zdHlsZS5sZWZ0PWUuZGlzdGFuY2UsZC5zdHlsZS50b3A9ZS5kaXN0YW5jZSxkLnN0eWxlLnJpZ2h0PVwiYXV0b1wiLGQuc3R5bGUuYm90dG9tPVwiYXV0b1wiKTpcImxlZnQtYm90dG9tXCI9PT1lLnBvc2l0aW9uPyhkLnN0eWxlLmxlZnQ9ZS5kaXN0YW5jZSxkLnN0eWxlLmJvdHRvbT1lLmRpc3RhbmNlLGQuc3R5bGUudG9wPVwiYXV0b1wiLGQuc3R5bGUucmlnaHQ9XCJhdXRvXCIpOihkLnN0eWxlLnJpZ2h0PWUuZGlzdGFuY2UsZC5zdHlsZS50b3A9ZS5kaXN0YW5jZSxkLnN0eWxlLmxlZnQ9XCJhdXRvXCIsZC5zdHlsZS5ib3R0b209XCJhdXRvXCIpLGUuYmFja092ZXJsYXkpe3ZhciB4PXQuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobS5vdmVybGF5SUQpfHx0LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7eC5pZD1tLm92ZXJsYXlJRCx4LnN0eWxlLndpZHRoPVwiMTAwJVwiLHguc3R5bGUuaGVpZ2h0PVwiMTAwJVwiLHguc3R5bGUucG9zaXRpb249XCJmaXhlZFwiLHguc3R5bGUuekluZGV4PWUuemluZGV4LTEseC5zdHlsZS5sZWZ0PTAseC5zdHlsZS50b3A9MCx4LnN0eWxlLnJpZ2h0PTAseC5zdHlsZS5ib3R0b209MCx4LnN0eWxlLmJhY2tncm91bmQ9Zi5iYWNrT3ZlcmxheUNvbG9yfHxlLmJhY2tPdmVybGF5Q29sb3IseC5jbGFzc05hbWU9ZS5jc3NBbmltYXRpb24/XCJueC13aXRoLWFuaW1hdGlvblwiOlwiXCIseC5zdHlsZS5hbmltYXRpb25EdXJhdGlvbj1lLmNzc0FuaW1hdGlvbj9lLmNzc0FuaW1hdGlvbkR1cmF0aW9uK1wibXNcIjpcIlwiLHQuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobS5vdmVybGF5SUQpfHx0LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoeCl9dC5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChtLndyYXBJRCl8fHQuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkKTt2YXIgZz10LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Zy5pZD1lLklEK1wiLVwiK1QsZy5jbGFzc05hbWU9ZS5jbGFzc05hbWUrXCIgXCIrZi5jaGlsZENsYXNzTmFtZStcIiBcIisoZS5jc3NBbmltYXRpb24/XCJueC13aXRoLWFuaW1hdGlvblwiOlwiXCIpK1wiIFwiKyhlLnVzZUljb24/XCJueC13aXRoLWljb25cIjpcIlwiKStcIiBueC1cIitlLmNzc0FuaW1hdGlvblN0eWxlK1wiIFwiKyhlLmNsb3NlQnV0dG9uJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBvP1wibngtd2l0aC1jbG9zZS1idXR0b25cIjpcIlwiKStcIiBcIisoXCJmdW5jdGlvblwiPT10eXBlb2Ygbz9cIm54LXdpdGgtY2FsbGJhY2tcIjpcIlwiKStcIiBcIisoZS5jbGlja1RvQ2xvc2U/XCJueC1ub3RpZnktY2xpY2stdG8tY2xvc2VcIjpcIlwiKSxnLnN0eWxlLmZvbnRTaXplPWUuZm9udFNpemUsZy5zdHlsZS5jb2xvcj1mLnRleHRDb2xvcixnLnN0eWxlLmJhY2tncm91bmQ9Zi5iYWNrZ3JvdW5kLGcuc3R5bGUuYm9yZGVyUmFkaXVzPWUuYm9yZGVyUmFkaXVzLGcuc3R5bGUucG9pbnRlckV2ZW50cz1cImFsbFwiLGUucnRsJiYoZy5zZXRBdHRyaWJ1dGUoXCJkaXJcIixcInJ0bFwiKSxnLmNsYXNzTGlzdC5hZGQoXCJueC1ydGwtb25cIikpLGcuc3R5bGUuZm9udEZhbWlseT1cIlxcXCJcIitlLmZvbnRGYW1pbHkrXCJcXFwiLCBcIitzLGUuY3NzQW5pbWF0aW9uJiYoZy5zdHlsZS5hbmltYXRpb25EdXJhdGlvbj1lLmNzc0FuaW1hdGlvbkR1cmF0aW9uK1wibXNcIik7dmFyIGI9XCJcIjtpZihlLmNsb3NlQnV0dG9uJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBvJiYoYj1cIjxzcGFuIGNsYXNzPVxcXCJueC1jbG9zZS1idXR0b25cXFwiPjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiMjBcXFwiIGhlaWdodD1cXFwiMjBcXFwiIHZpZXdCb3g9XFxcIjAgMCAyMCAyMFxcXCI+PGc+PHBhdGggZmlsbD1cXFwiXCIrZi5ub3RpZmxpeEljb25Db2xvcitcIlxcXCIgZD1cXFwiTTAuMzggMi4xOWw3LjggNy44MSAtNy44IDcuODFjLTAuNTEsMC41IC0wLjUxLDEuMzEgLTAuMDEsMS44MSAwLjI1LDAuMjUgMC41NywwLjM4IDAuOTEsMC4zOCAwLjM0LDAgMC42NywtMC4xNCAwLjkxLC0wLjM4bDcuODEgLTcuODEgNy44MSA3LjgxYzAuMjQsMC4yNCAwLjU3LDAuMzggMC45MSwwLjM4IDAuMzQsMCAwLjY2LC0wLjE0IDAuOSwtMC4zOCAwLjUxLC0wLjUgMC41MSwtMS4zMSAwLC0xLjgxbC03LjgxIC03LjgxIDcuODEgLTcuODFjMC41MSwtMC41IDAuNTEsLTEuMzEgMCwtMS44MiAtMC41LC0wLjUgLTEuMzEsLTAuNSAtMS44MSwwbC03LjgxIDcuODEgLTcuODEgLTcuODFjLTAuNSwtMC41IC0xLjMxLC0wLjUgLTEuODEsMCAtMC41MSwwLjUxIC0wLjUxLDEuMzIgMCwxLjgyelxcXCIvPjwvZz48L3N2Zz48L3NwYW4+XCIpLCFlLnVzZUljb24pZy5pbm5lckhUTUw9XCI8c3BhbiBjbGFzcz1cXFwibngtbWVzc2FnZVxcXCI+XCIrbitcIjwvc3Bhbj5cIisoZS5jbG9zZUJ1dHRvbj9iOlwiXCIpO2Vsc2UgaWYoZS51c2VGb250QXdlc29tZSlnLmlubmVySFRNTD1cIjxpIHN0eWxlPVxcXCJjb2xvcjpcIitmLmZvbnRBd2Vzb21lSWNvbkNvbG9yK1wiOyBmb250LXNpemU6XCIrZS5mb250QXdlc29tZUljb25TaXplK1wiO1xcXCIgY2xhc3M9XFxcIm54LW1lc3NhZ2UtaWNvbiBueC1tZXNzYWdlLWljb24tZmEgXCIrZi5mb250QXdlc29tZUNsYXNzTmFtZStcIiBcIisoXCJzaGFkb3dcIj09PWUuZm9udEF3ZXNvbWVJY29uU3R5bGU/XCJueC1tZXNzYWdlLWljb24tZmEtc2hhZG93XCI6XCJueC1tZXNzYWdlLWljb24tZmEtYmFzaWNcIikrXCJcXFwiPjwvaT48c3BhbiBjbGFzcz1cXFwibngtbWVzc2FnZSBueC13aXRoLWljb25cXFwiPlwiK24rXCI8L3NwYW4+XCIrKGUuY2xvc2VCdXR0b24/YjpcIlwiKTtlbHNle3ZhciB1PVwiXCI7YT09PWwuU3VjY2Vzcz91PVwiPHN2ZyBjbGFzcz1cXFwibngtbWVzc2FnZS1pY29uXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCI0MFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgdmlld0JveD1cXFwiMCAwIDQwIDQwXFxcIj48Zz48cGF0aCBmaWxsPVxcXCJcIitmLm5vdGlmbGl4SWNvbkNvbG9yK1wiXFxcIiBkPVxcXCJNMjAgMGMxMS4wMywwIDIwLDguOTcgMjAsMjAgMCwxMS4wMyAtOC45NywyMCAtMjAsMjAgLTExLjAzLDAgLTIwLC04Ljk3IC0yMCwtMjAgMCwtMTEuMDMgOC45NywtMjAgMjAsLTIwem0wIDM3Ljk4YzkuOTIsMCAxNy45OCwtOC4wNiAxNy45OCwtMTcuOTggMCwtOS45MiAtOC4wNiwtMTcuOTggLTE3Ljk4LC0xNy45OCAtOS45MiwwIC0xNy45OCw4LjA2IC0xNy45OCwxNy45OCAwLDkuOTIgOC4wNiwxNy45OCAxNy45OCwxNy45OHptLTIuNCAtMTMuMjlsMTEuNTIgLTEyLjk2YzAuMzcsLTAuNDEgMS4wMSwtMC40NSAxLjQyLC0wLjA4IDAuNDIsMC4zNyAwLjQ2LDEgMC4wOSwxLjQybC0xMi4xNiAxMy42N2MtMC4xOSwwLjIyIC0wLjQ2LDAuMzQgLTAuNzUsMC4zNCAtMC4yMywwIC0wLjQ1LC0wLjA3IC0wLjYzLC0wLjIybC03LjYgLTYuMDdjLTAuNDMsLTAuMzUgLTAuNSwtMC45OSAtMC4xNiwtMS40MiAwLjM1LC0wLjQzIDAuOTksLTAuNSAxLjQyLC0wLjE2bDYuODUgNS40OHpcXFwiLz48L2c+PC9zdmc+XCI6YT09PWwuRmFpbHVyZT91PVwiPHN2ZyBjbGFzcz1cXFwibngtbWVzc2FnZS1pY29uXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCI0MFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgdmlld0JveD1cXFwiMCAwIDQwIDQwXFxcIj48Zz48cGF0aCBmaWxsPVxcXCJcIitmLm5vdGlmbGl4SWNvbkNvbG9yK1wiXFxcIiBkPVxcXCJNMjAgMGMxMS4wMywwIDIwLDguOTcgMjAsMjAgMCwxMS4wMyAtOC45NywyMCAtMjAsMjAgLTExLjAzLDAgLTIwLC04Ljk3IC0yMCwtMjAgMCwtMTEuMDMgOC45NywtMjAgMjAsLTIwem0wIDM3Ljk4YzkuOTIsMCAxNy45OCwtOC4wNiAxNy45OCwtMTcuOTggMCwtOS45MiAtOC4wNiwtMTcuOTggLTE3Ljk4LC0xNy45OCAtOS45MiwwIC0xNy45OCw4LjA2IC0xNy45OCwxNy45OCAwLDkuOTIgOC4wNiwxNy45OCAxNy45OCwxNy45OHptMS40MiAtMTcuOThsNi4xMyA2LjEyYzAuMzksMC40IDAuMzksMS4wNCAwLDEuNDMgLTAuMTksMC4xOSAtMC40NSwwLjI5IC0wLjcxLDAuMjkgLTAuMjcsMCAtMC41MywtMC4xIC0wLjcyLC0wLjI5bC02LjEyIC02LjEzIC02LjEzIDYuMTNjLTAuMTksMC4xOSAtMC40NCwwLjI5IC0wLjcxLDAuMjkgLTAuMjcsMCAtMC41MiwtMC4xIC0wLjcxLC0wLjI5IC0wLjM5LC0wLjM5IC0wLjM5LC0xLjAzIDAsLTEuNDNsNi4xMyAtNi4xMiAtNi4xMyAtNi4xM2MtMC4zOSwtMC4zOSAtMC4zOSwtMS4wMyAwLC0xLjQyIDAuMzksLTAuMzkgMS4wMywtMC4zOSAxLjQyLDBsNi4xMyA2LjEyIDYuMTIgLTYuMTJjMC40LC0wLjM5IDEuMDQsLTAuMzkgMS40MywwIDAuMzksMC4zOSAwLjM5LDEuMDMgMCwxLjQybC02LjEzIDYuMTN6XFxcIi8+PC9nPjwvc3ZnPlwiOmE9PT1sLldhcm5pbmc/dT1cIjxzdmcgY2xhc3M9XFxcIm54LW1lc3NhZ2UtaWNvblxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDBcXFwiIHZpZXdCb3g9XFxcIjAgMCA0MCA0MFxcXCI+PGc+PHBhdGggZmlsbD1cXFwiXCIrZi5ub3RpZmxpeEljb25Db2xvcitcIlxcXCIgZD1cXFwiTTIxLjkxIDMuNDhsMTcuOCAzMC44OWMwLjg0LDEuNDYgLTAuMjMsMy4yNSAtMS45MSwzLjI1bC0zNS42IDBjLTEuNjgsMCAtMi43NSwtMS43OSAtMS45MSwtMy4yNWwxNy44IC0zMC44OWMwLjg1LC0xLjQ3IDIuOTcsLTEuNDcgMy44Miwwem0xNi4xNSAzMS44NGwtMTcuOCAtMzAuODljLTAuMTEsLTAuMiAtMC40MSwtMC4yIC0wLjUyLDBsLTE3LjggMzAuODljLTAuMTIsMC4yIDAuMDUsMC40IDAuMjYsMC40bDM1LjYgMGMwLjIxLDAgMC4zOCwtMC4yIDAuMjYsLTAuNHptLTE5LjAxIC00LjEybDAgLTEuMDVjMCwtMC41MyAwLjQyLC0wLjk1IDAuOTUsLTAuOTUgMC41MywwIDAuOTUsMC40MiAwLjk1LDAuOTVsMCAxLjA1YzAsMC41MyAtMC40MiwwLjk1IC0wLjk1LDAuOTUgLTAuNTMsMCAtMC45NSwtMC40MiAtMC45NSwtMC45NXptMCAtNC42NmwwIC0xMy4zOWMwLC0wLjUyIDAuNDIsLTAuOTUgMC45NSwtMC45NSAwLjUzLDAgMC45NSwwLjQzIDAuOTUsMC45NWwwIDEzLjM5YzAsMC41MyAtMC40MiwwLjk2IC0wLjk1LDAuOTYgLTAuNTMsMCAtMC45NSwtMC40MyAtMC45NSwtMC45NnpcXFwiLz48L2c+PC9zdmc+XCI6YT09PWwuSW5mbyYmKHU9XCI8c3ZnIGNsYXNzPVxcXCJueC1tZXNzYWdlLWljb25cXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIjQwXFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiB2aWV3Qm94PVxcXCIwIDAgNDAgNDBcXFwiPjxnPjxwYXRoIGZpbGw9XFxcIlwiK2Yubm90aWZsaXhJY29uQ29sb3IrXCJcXFwiIGQ9XFxcIk0yMCAwYzExLjAzLDAgMjAsOC45NyAyMCwyMCAwLDExLjAzIC04Ljk3LDIwIC0yMCwyMCAtMTEuMDMsMCAtMjAsLTguOTcgLTIwLC0yMCAwLC0xMS4wMyA4Ljk3LC0yMCAyMCwtMjB6bTAgMzcuOThjOS45MiwwIDE3Ljk4LC04LjA2IDE3Ljk4LC0xNy45OCAwLC05LjkyIC04LjA2LC0xNy45OCAtMTcuOTgsLTE3Ljk4IC05LjkyLDAgLTE3Ljk4LDguMDYgLTE3Ljk4LDE3Ljk4IDAsOS45MiA4LjA2LDE3Ljk4IDE3Ljk4LDE3Ljk4em0tMC45OSAtMjMuM2MwLC0wLjU0IDAuNDQsLTAuOTggMC45OSwtMC45OCAwLjU1LDAgMC45OSwwLjQ0IDAuOTksMC45OGwwIDE1Ljg2YzAsMC41NSAtMC40NCwwLjk5IC0wLjk5LDAuOTkgLTAuNTUsMCAtMC45OSwtMC40NCAtMC45OSwtMC45OWwwIC0xNS44NnptMCAtNS4yMmMwLC0wLjU1IDAuNDQsLTAuOTkgMC45OSwtMC45OSAwLjU1LDAgMC45OSwwLjQ0IDAuOTksMC45OWwwIDEuMDljMCwwLjU0IC0wLjQ0LDAuOTkgLTAuOTksMC45OSAtMC41NSwwIC0wLjk5LC0wLjQ1IC0wLjk5LC0wLjk5bDAgLTEuMDl6XFxcIi8+PC9nPjwvc3ZnPlwiKSxnLmlubmVySFRNTD11K1wiPHNwYW4gY2xhc3M9XFxcIm54LW1lc3NhZ2Ugbngtd2l0aC1pY29uXFxcIj5cIituK1wiPC9zcGFuPlwiKyhlLmNsb3NlQnV0dG9uP2I6XCJcIil9aWYoXCJsZWZ0LWJvdHRvbVwiPT09ZS5wb3NpdGlvbnx8XCJyaWdodC1ib3R0b21cIj09PWUucG9zaXRpb24pe3ZhciB5PXQuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobS53cmFwSUQpO3kuaW5zZXJ0QmVmb3JlKGcseS5maXJzdENoaWxkKX1lbHNlIHQuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobS53cmFwSUQpLmFwcGVuZENoaWxkKGcpO3ZhciBrPXQuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZy5pZCk7aWYoayl7dmFyIGgsQyx6PWZ1bmN0aW9uKCl7ay5jbGFzc0xpc3QuYWRkKFwibngtcmVtb3ZlXCIpO3ZhciBlPXQuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobS5vdmVybGF5SUQpO2UmJjA+PWQuY2hpbGRFbGVtZW50Q291bnQmJmUuY2xhc3NMaXN0LmFkZChcIm54LXJlbW92ZVwiKSxjbGVhclRpbWVvdXQoaCl9LFM9ZnVuY3Rpb24oKXtpZihrJiZudWxsIT09ay5wYXJlbnROb2RlJiZrLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoayksMD49ZC5jaGlsZEVsZW1lbnRDb3VudCYmbnVsbCE9PWQucGFyZW50Tm9kZSl7ZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGQpO3ZhciBlPXQuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobS5vdmVybGF5SUQpO2UmJm51bGwhPT1lLnBhcmVudE5vZGUmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX1jbGVhclRpbWVvdXQoQyl9O2lmKGUuY2xvc2VCdXR0b24mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIG8pe3ZhciBMPXQuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZy5pZCkucXVlcnlTZWxlY3RvcihcInNwYW4ubngtY2xvc2UtYnV0dG9uXCIpO0wuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXt6KCk7dmFyIHQ9c2V0VGltZW91dChmdW5jdGlvbigpe1MoKSxjbGVhclRpbWVvdXQodCl9LGUuY3NzQW5pbWF0aW9uRHVyYXRpb24pfSl9aWYoKFwiZnVuY3Rpb25cIj09dHlwZW9mIG98fGUuY2xpY2tUb0Nsb3NlKSYmay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIG8mJm8oKSx6KCk7dmFyIHQ9c2V0VGltZW91dChmdW5jdGlvbigpe1MoKSxjbGVhclRpbWVvdXQodCl9LGUuY3NzQW5pbWF0aW9uRHVyYXRpb24pfSksIWUuY2xvc2VCdXR0b24mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIG8pe3ZhciBXPWZ1bmN0aW9uKCl7aD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7eigpfSxlLnRpbWVvdXQpLEM9c2V0VGltZW91dChmdW5jdGlvbigpe1MoKX0sZS50aW1lb3V0K2UuY3NzQW5pbWF0aW9uRHVyYXRpb24pfTtXKCksZS5wYXVzZU9uSG92ZXImJihrLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsZnVuY3Rpb24oKXtrLmNsYXNzTGlzdC5hZGQoXCJueC1wYXVzZWRcIiksY2xlYXJUaW1lb3V0KGgpLGNsZWFyVGltZW91dChDKX0pLGsuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIixmdW5jdGlvbigpe2suY2xhc3NMaXN0LnJlbW92ZShcIm54LXBhdXNlZFwiKSxXKCl9KSl9fWlmKGUuc2hvd09ubHlUaGVMYXN0T25lJiYwPFQpZm9yKHZhciBJLFI9dC5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkXj1cIitlLklEK1wiLV06bm90KFtpZD1cIitlLklEK1wiLVwiK1QrXCJdKVwiKSxBPTA7QTxSLmxlbmd0aDtBKyspST1SW0FdLG51bGwhPT1JLnBhcmVudE5vZGUmJkkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChJKTtlPXYoITAsZSxjKX0sRT1mdW5jdGlvbigpe3JldHVyblwiW2lkXj1Ob3RpZmxpeFJlcG9ydFdyYXBde3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6NDAwMjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtmb250LWZhbWlseTpcXFwiUXVpY2tzYW5kXFxcIiwtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcXFwiU2Vnb2UgVUlcXFwiLFJvYm90byxcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLEFyaWFsLHNhbnMtc2VyaWY7bGVmdDowO3RvcDowO3BhZGRpbmc6MTBweDtjb2xvcjojMWUxZTFlO2JvcmRlci1yYWRpdXM6MjVweDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1mbGV4LXdyYXA6d3JhcDstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXA7LXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsOy13ZWJraXQtYm94LWRpcmVjdGlvbjpub3JtYWw7LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy13ZWJraXQtYWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9W2lkXj1Ob3RpZmxpeFJlcG9ydFdyYXBdICp7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fVtpZF49Tm90aWZsaXhSZXBvcnRXcmFwXT5kaXZbY2xhc3MqPVxcXCItb3ZlcmxheVxcXCJde3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bGVmdDowO3RvcDowO2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuNSk7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDowfVtpZF49Tm90aWZsaXhSZXBvcnRXcmFwXT5kaXYubngtcmVwb3J0LWNsaWNrLXRvLWNsb3Nle2N1cnNvcjpwb2ludGVyfVtpZF49Tm90aWZsaXhSZXBvcnRXcmFwXT5kaXZbY2xhc3MqPVxcXCItY29udGVudFxcXCJde3dpZHRoOjMyMHB4O21heC13aWR0aDoxMDAlO21heC1oZWlnaHQ6OTZ2aDtvdmVyZmxvdy14OmhpZGRlbjtvdmVyZmxvdy15OmF1dG87Ym9yZGVyLXJhZGl1czppbmhlcml0O3BhZGRpbmc6MTBweDstd2Via2l0LWZpbHRlcjpkcm9wLXNoYWRvdygwIDAgNXB4IHJnYmEoMCwwLDAsMC4wNSkpO2ZpbHRlcjpkcm9wLXNoYWRvdygwIDAgNXB4IHJnYmEoMCwgMCwgMCwgLjA1KSk7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4wMyk7YmFja2dyb3VuZDojZjhmOGY4O3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MX1baWRePU5vdGlmbGl4UmVwb3J0V3JhcF0+ZGl2W2NsYXNzKj1cXFwiLWNvbnRlbnRcXFwiXTo6LXdlYmtpdC1zY3JvbGxiYXJ7d2lkdGg6MDtoZWlnaHQ6MH1baWRePU5vdGlmbGl4UmVwb3J0V3JhcF0+ZGl2W2NsYXNzKj1cXFwiLWNvbnRlbnRcXFwiXTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7YmFja2dyb3VuZDp0cmFuc3BhcmVudH1baWRePU5vdGlmbGl4UmVwb3J0V3JhcF0+ZGl2W2NsYXNzKj1cXFwiLWNvbnRlbnRcXFwiXTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2t7YmFja2dyb3VuZDp0cmFuc3BhcmVudH1baWRePU5vdGlmbGl4UmVwb3J0V3JhcF0+ZGl2W2NsYXNzKj1cXFwiLWNvbnRlbnRcXFwiXT5kaXZbY2xhc3MkPVxcXCItaWNvblxcXCJdey13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt3aWR0aDoxMTBweDtoZWlnaHQ6MTEwcHg7ZGlzcGxheTpibG9jazttYXJnaW46NnB4IGF1dG8gMTJweH1baWRePU5vdGlmbGl4UmVwb3J0V3JhcF0+ZGl2W2NsYXNzKj1cXFwiLWNvbnRlbnRcXFwiXT5kaXZbY2xhc3MkPVxcXCItaWNvblxcXCJdIHN2Z3ttaW4td2lkdGg6MTAwJTttYXgtd2lkdGg6MTAwJTtoZWlnaHQ6YXV0b31baWRePU5vdGlmbGl4UmVwb3J0V3JhcF0+Kj5oNXt3b3JkLWJyZWFrOmJyZWFrLWFsbDt3b3JkLWJyZWFrOmJyZWFrLXdvcmQ7Zm9udC1mYW1pbHk6aW5oZXJpdCFpbXBvcnRhbnQ7Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6NTAwO2xpbmUtaGVpZ2h0OjEuNDttYXJnaW46MCAwIDEwcHg7cGFkZGluZzowIDAgMTBweDtib3JkZXItYm90dG9tOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4xKTtmbG9hdDpsZWZ0O3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpjZW50ZXJ9W2lkXj1Ob3RpZmxpeFJlcG9ydFdyYXBdPio+cHt3b3JkLWJyZWFrOmJyZWFrLWFsbDt3b3JkLWJyZWFrOmJyZWFrLXdvcmQ7Zm9udC1mYW1pbHk6aW5oZXJpdCFpbXBvcnRhbnQ7Zm9udC1zaXplOjEzcHg7bGluZS1oZWlnaHQ6MS40O2ZvbnQtd2VpZ2h0Om5vcm1hbDtmbG9hdDpsZWZ0O3dpZHRoOjEwMCU7cGFkZGluZzowIDEwcHg7bWFyZ2luOjAgMCAxMHB4fVtpZF49Tm90aWZsaXhSZXBvcnRXcmFwXSBhI05YUmVwb3J0QnV0dG9ue3dvcmQtYnJlYWs6YnJlYWstYWxsO3dvcmQtYnJlYWs6YnJlYWstd29yZDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7Zm9udC1mYW1pbHk6aW5oZXJpdCFpbXBvcnRhbnQ7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuMjVzIGVhc2UtaW4tb3V0Oy1vLXRyYW5zaXRpb246YWxsIC4yNXMgZWFzZS1pbi1vdXQ7dHJhbnNpdGlvbjphbGwgLjI1cyBlYXNlLWluLW91dDtjdXJzb3I6cG9pbnRlcjtmbG9hdDpyaWdodDtwYWRkaW5nOjdweCAxN3B4O2JhY2tncm91bmQ6IzMyYzY4Mjtmb250LXNpemU6MTRweDtsaW5lLWhlaWdodDoxLjQ7Zm9udC13ZWlnaHQ6NTAwO2JvcmRlci1yYWRpdXM6aW5oZXJpdCFpbXBvcnRhbnQ7Y29sb3I6I2ZmZn1baWRePU5vdGlmbGl4UmVwb3J0V3JhcF0gYSNOWFJlcG9ydEJ1dHRvbjpob3Zlcnstd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAtNjBweCA1cHggLTVweCByZ2JhKDAsMCwwLC4yNSk7Ym94LXNoYWRvdzppbnNldCAwIC02MHB4IDVweCAtNXB4IHJnYmEoMCwwLDAsLjI1KX1baWRePU5vdGlmbGl4UmVwb3J0V3JhcF0ubngtcnRsLW9uIGEjTlhSZXBvcnRCdXR0b257ZmxvYXQ6bGVmdH1baWRePU5vdGlmbGl4UmVwb3J0V3JhcF0+ZGl2W2NsYXNzKj1cXFwiLW92ZXJsYXlcXFwiXS5ueC13aXRoLWFuaW1hdGlvbnstd2Via2l0LWFuaW1hdGlvbjpyZXBvcnQtb3ZlcmxheS1hbmltYXRpb24gLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbDthbmltYXRpb246cmVwb3J0LW92ZXJsYXktYW5pbWF0aW9uIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWx9QC13ZWJraXQta2V5ZnJhbWVzIHJlcG9ydC1vdmVybGF5LWFuaW1hdGlvbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgcmVwb3J0LW92ZXJsYXktYW5pbWF0aW9uezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19W2lkXj1Ob3RpZmxpeFJlcG9ydFdyYXBdPmRpdltjbGFzcyo9XFxcIi1jb250ZW50XFxcIl0ubngtd2l0aC1hbmltYXRpb24ubngtZmFkZXstd2Via2l0LWFuaW1hdGlvbjpyZXBvcnQtYW5pbWF0aW9uLWZhZGUgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbDthbmltYXRpb246cmVwb3J0LWFuaW1hdGlvbi1mYWRlIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWx9QC13ZWJraXQta2V5ZnJhbWVzIHJlcG9ydC1hbmltYXRpb24tZmFkZXswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgcmVwb3J0LWFuaW1hdGlvbi1mYWRlezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19W2lkXj1Ob3RpZmxpeFJlcG9ydFdyYXBdPmRpdltjbGFzcyo9XFxcIi1jb250ZW50XFxcIl0ubngtd2l0aC1hbmltYXRpb24ubngtem9vbXstd2Via2l0LWFuaW1hdGlvbjpyZXBvcnQtYW5pbWF0aW9uLXpvb20gLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbDthbmltYXRpb246cmVwb3J0LWFuaW1hdGlvbi16b29tIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWx9QC13ZWJraXQta2V5ZnJhbWVzIHJlcG9ydC1hbmltYXRpb24tem9vbXswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUpO3RyYW5zZm9ybTpzY2FsZSguNSl9NTAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjA1KTt0cmFuc2Zvcm06c2NhbGUoMS4wNSl9MTAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1Aa2V5ZnJhbWVzIHJlcG9ydC1hbmltYXRpb24tem9vbXswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUpO3RyYW5zZm9ybTpzY2FsZSguNSl9NTAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjA1KTt0cmFuc2Zvcm06c2NhbGUoMS4wNSl9MTAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1baWRePU5vdGlmbGl4UmVwb3J0V3JhcF0ubngtcmVtb3ZlPmRpdltjbGFzcyo9XFxcIi1vdmVybGF5XFxcIl0ubngtd2l0aC1hbmltYXRpb257b3BhY2l0eTowOy13ZWJraXQtYW5pbWF0aW9uOnJlcG9ydC1vdmVybGF5LWFuaW1hdGlvbi1yZW1vdmUgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbDthbmltYXRpb246cmVwb3J0LW92ZXJsYXktYW5pbWF0aW9uLXJlbW92ZSAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsfUAtd2Via2l0LWtleWZyYW1lcyByZXBvcnQtb3ZlcmxheS1hbmltYXRpb24tcmVtb3ZlezAle29wYWNpdHk6MX0xMDAle29wYWNpdHk6MH19QGtleWZyYW1lcyByZXBvcnQtb3ZlcmxheS1hbmltYXRpb24tcmVtb3ZlezAle29wYWNpdHk6MX0xMDAle29wYWNpdHk6MH19W2lkXj1Ob3RpZmxpeFJlcG9ydFdyYXBdLm54LXJlbW92ZT5kaXZbY2xhc3MqPVxcXCItY29udGVudFxcXCJdLm54LXdpdGgtYW5pbWF0aW9uLm54LWZhZGV7b3BhY2l0eTowOy13ZWJraXQtYW5pbWF0aW9uOnJlcG9ydC1hbmltYXRpb24tZmFkZS1yZW1vdmUgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbDthbmltYXRpb246cmVwb3J0LWFuaW1hdGlvbi1mYWRlLXJlbW92ZSAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsfUAtd2Via2l0LWtleWZyYW1lcyByZXBvcnQtYW5pbWF0aW9uLWZhZGUtcmVtb3ZlezAle29wYWNpdHk6MX0xMDAle29wYWNpdHk6MH19QGtleWZyYW1lcyByZXBvcnQtYW5pbWF0aW9uLWZhZGUtcmVtb3ZlezAle29wYWNpdHk6MX0xMDAle29wYWNpdHk6MH19W2lkXj1Ob3RpZmxpeFJlcG9ydFdyYXBdLm54LXJlbW92ZT5kaXZbY2xhc3MqPVxcXCItY29udGVudFxcXCJdLm54LXdpdGgtYW5pbWF0aW9uLm54LXpvb217b3BhY2l0eTowOy13ZWJraXQtYW5pbWF0aW9uOnJlcG9ydC1hbmltYXRpb24tem9vbS1yZW1vdmUgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbDthbmltYXRpb246cmVwb3J0LWFuaW1hdGlvbi16b29tLXJlbW92ZSAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsfUAtd2Via2l0LWtleWZyYW1lcyByZXBvcnQtYW5pbWF0aW9uLXpvb20tcmVtb3ZlezAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9NTAle29wYWNpdHk6LjU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4wNSk7dHJhbnNmb3JtOnNjYWxlKDEuMDUpfTEwMCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKX19QGtleWZyYW1lcyByZXBvcnQtYW5pbWF0aW9uLXpvb20tcmVtb3ZlezAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9NTAle29wYWNpdHk6LjU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4wNSk7dHJhbnNmb3JtOnNjYWxlKDEuMDUpfTEwMCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKX19XCJ9LGo9ZnVuY3Rpb24oZSxhLG4sbyxyLGwpe2lmKCF3KFwiYm9keVwiKSlyZXR1cm4hMTtpfHxHLlJlcG9ydC5pbml0KHt9KTt2YXIgbT17fTtpZihcIm9iamVjdFwiPT10eXBlb2YgciYmIUFycmF5LmlzQXJyYXkocil8fFwib2JqZWN0XCI9PXR5cGVvZiBsJiYhQXJyYXkuaXNBcnJheShsKSl7dmFyIGY9e307XCJvYmplY3RcIj09dHlwZW9mIHI/Zj1yOlwib2JqZWN0XCI9PXR5cGVvZiBsJiYoZj1sKSxtPXYoITAsaSx7fSksaT12KCEwLGksZil9dmFyIGQ9aVtlLnRvTG9jYWxlTG93ZXJDYXNlKFwiZW5cIildO1wic3RyaW5nXCIhPXR5cGVvZiBhJiYoYT1cIk5vdGlmbGl4IFwiK2UpLFwic3RyaW5nXCIhPXR5cGVvZiBuJiYoZT09PWMuU3VjY2Vzcz9uPVwiXFxcIkRvIG5vdCB0cnkgdG8gYmVjb21lIGEgcGVyc29uIG9mIHN1Y2Nlc3MgYnV0IHRyeSB0byBiZWNvbWUgYSBwZXJzb24gb2YgdmFsdWUuXFxcIiA8YnI+PGJyPi0gQWxiZXJ0IEVpbnN0ZWluXCI6ZT09PWMuRmFpbHVyZT9uPVwiXFxcIkZhaWx1cmUgaXMgc2ltcGx5IHRoZSBvcHBvcnR1bml0eSB0byBiZWdpbiBhZ2FpbiwgdGhpcyB0aW1lIG1vcmUgaW50ZWxsaWdlbnRseS5cXFwiIDxicj48YnI+LSBIZW5yeSBGb3JkXCI6ZT09PWMuV2FybmluZz9uPVwiXFxcIlRoZSBwZW9wbGVzIHdobyB3YW50IHRvIGxpdmUgY29tZm9ydGFibHkgd2l0aG91dCBwcm9kdWNpbmcgYW5kIGZhdGlndWU7IHRoZXkgYXJlIGRvb21lZCB0byBsb3NlIHRoZWlyIGRpZ25pdHksIHRoZW4gbGliZXJ0eSwgYW5kIHRoZW4gaW5kZXBlbmRlbmNlIGFuZCBkZXN0aW55LlxcXCIgPGJyPjxicj4tIE11c3RhZmEgS2VtYWwgQXRhdHVya1wiOmU9PT1jLkluZm8mJihuPVwiXFxcIktub3dsZWRnZSByZXN0cyBub3QgdXBvbiB0cnV0aCBhbG9uZSwgYnV0IHVwb24gZXJyb3IgYWxzby5cXFwiIDxicj48YnI+LSBDYXJsIEd1c3RhdiBKdW5nXCIpKSxcInN0cmluZ1wiIT10eXBlb2YgbyYmKG89XCJPa2F5XCIpLGkucGxhaW5UZXh0JiYoYT1OKGEpLG49TihuKSxvPU4obykpLGkucGxhaW5UZXh0fHwoYS5sZW5ndGg+aS50aXRsZU1heExlbmd0aCYmKGE9XCJQb3NzaWJsZSBIVE1MIFRhZ3MgRXJyb3JcIixuPVwiVGhlIFxcXCJwbGFpblRleHRcXFwiIG9wdGlvbiBpcyBcXFwiZmFsc2VcXFwiIGFuZCB0aGUgdGl0bGUgY29udGVudCBsZW5ndGggaXMgbW9yZSB0aGFuIHRoZSBcXFwidGl0bGVNYXhMZW5ndGhcXFwiIG9wdGlvbi5cIixvPVwiT2theVwiKSxuLmxlbmd0aD5pLm1lc3NhZ2VNYXhMZW5ndGgmJihhPVwiUG9zc2libGUgSFRNTCBUYWdzIEVycm9yXCIsbj1cIlRoZSBcXFwicGxhaW5UZXh0XFxcIiBvcHRpb24gaXMgXFxcImZhbHNlXFxcIiBhbmQgdGhlIG1lc3NhZ2UgY29udGVudCBsZW5ndGggaXMgbW9yZSB0aGFuIHRoZSBcXFwibWVzc2FnZU1heExlbmd0aFxcXCIgb3B0aW9uLlwiLG89XCJPa2F5XCIpLG8ubGVuZ3RoPmkuYnV0dG9uTWF4TGVuZ3RoJiYoYT1cIlBvc3NpYmxlIEhUTUwgVGFncyBFcnJvclwiLG49XCJUaGUgXFxcInBsYWluVGV4dFxcXCIgb3B0aW9uIGlzIFxcXCJmYWxzZVxcXCIgYW5kIHRoZSBidXR0b24gY29udGVudCBsZW5ndGggaXMgbW9yZSB0aGFuIHRoZSBcXFwiYnV0dG9uTWF4TGVuZ3RoXFxcIiBvcHRpb24uXCIsbz1cIk9rYXlcIikpLGEubGVuZ3RoPmkudGl0bGVNYXhMZW5ndGgmJihhPWEuc3Vic3RyaW5nKDAsaS50aXRsZU1heExlbmd0aCkrXCIuLi5cIiksbi5sZW5ndGg+aS5tZXNzYWdlTWF4TGVuZ3RoJiYobj1uLnN1YnN0cmluZygwLGkubWVzc2FnZU1heExlbmd0aCkrXCIuLi5cIiksby5sZW5ndGg+aS5idXR0b25NYXhMZW5ndGgmJihvPW8uc3Vic3RyaW5nKDAsaS5idXR0b25NYXhMZW5ndGgpK1wiLi4uXCIpLGkuY3NzQW5pbWF0aW9ufHwoaS5jc3NBbmltYXRpb25EdXJhdGlvbj0wKTt2YXIgeD10LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7eC5pZD1wLklELHguY2xhc3NOYW1lPWkuY2xhc3NOYW1lLHguc3R5bGUuekluZGV4PWkuemluZGV4LHguc3R5bGUuYm9yZGVyUmFkaXVzPWkuYm9yZGVyUmFkaXVzLHguc3R5bGUuZm9udEZhbWlseT1cIlxcXCJcIitpLmZvbnRGYW1pbHkrXCJcXFwiLCBcIitzLGkucnRsJiYoeC5zZXRBdHRyaWJ1dGUoXCJkaXJcIixcInJ0bFwiKSx4LmNsYXNzTGlzdC5hZGQoXCJueC1ydGwtb25cIikpLHguc3R5bGUuZGlzcGxheT1cImZsZXhcIix4LnN0eWxlLmZsZXhXcmFwPVwid3JhcFwiLHguc3R5bGUuZmxleERpcmVjdGlvbj1cImNvbHVtblwiLHguc3R5bGUuYWxpZ25JdGVtcz1cImNlbnRlclwiLHguc3R5bGUuanVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIjt2YXIgZz1cIlwiLGI9ITA9PT1pLmJhY2tPdmVybGF5Q2xpY2tUb0Nsb3NlO2kuYmFja092ZXJsYXkmJihnPVwiPGRpdiBjbGFzcz1cXFwiXCIraS5jbGFzc05hbWUrXCItb3ZlcmxheVwiKyhpLmNzc0FuaW1hdGlvbj9cIiBueC13aXRoLWFuaW1hdGlvblwiOlwiXCIpKyhiP1wiIG54LXJlcG9ydC1jbGljay10by1jbG9zZVwiOlwiXCIpK1wiXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZDpcIisoZC5iYWNrT3ZlcmxheUNvbG9yfHxpLmJhY2tPdmVybGF5Q29sb3IpK1wiO2FuaW1hdGlvbi1kdXJhdGlvbjpcIitpLmNzc0FuaW1hdGlvbkR1cmF0aW9uK1wibXM7XFxcIj48L2Rpdj5cIik7dmFyIHU9XCJcIjtpZihlPT09Yy5TdWNjZXNzP3U9QyhpLnN2Z1NpemUsZC5zdmdDb2xvcik6ZT09PWMuRmFpbHVyZT91PXooaS5zdmdTaXplLGQuc3ZnQ29sb3IpOmU9PT1jLldhcm5pbmc/dT1TKGkuc3ZnU2l6ZSxkLnN2Z0NvbG9yKTplPT09Yy5JbmZvJiYodT1MKGkuc3ZnU2l6ZSxkLnN2Z0NvbG9yKSkseC5pbm5lckhUTUw9ZytcIjxkaXYgY2xhc3M9XFxcIlwiK2kuY2xhc3NOYW1lK1wiLWNvbnRlbnRcIisoaS5jc3NBbmltYXRpb24/XCIgbngtd2l0aC1hbmltYXRpb24gXCI6XCJcIikrXCIgbngtXCIraS5jc3NBbmltYXRpb25TdHlsZStcIlxcXCIgc3R5bGU9XFxcIndpZHRoOlwiK2kud2lkdGgrXCI7IGJhY2tncm91bmQ6XCIraS5iYWNrZ3JvdW5kQ29sb3IrXCI7IGFuaW1hdGlvbi1kdXJhdGlvbjpcIitpLmNzc0FuaW1hdGlvbkR1cmF0aW9uK1wibXM7XFxcIj48ZGl2IHN0eWxlPVxcXCJ3aWR0aDpcIitpLnN2Z1NpemUrXCI7IGhlaWdodDpcIitpLnN2Z1NpemUrXCI7XFxcIiBjbGFzcz1cXFwiXCIraS5jbGFzc05hbWUrXCItaWNvblxcXCI+XCIrdStcIjwvZGl2PjxoNSBjbGFzcz1cXFwiXCIraS5jbGFzc05hbWUrXCItdGl0bGVcXFwiIHN0eWxlPVxcXCJmb250LXdlaWdodDo1MDA7IGZvbnQtc2l6ZTpcIitpLnRpdGxlRm9udFNpemUrXCI7IGNvbG9yOlwiK2QudGl0bGVDb2xvcitcIjtcXFwiPlwiK2ErXCI8L2g1PjxwIGNsYXNzPVxcXCJcIitpLmNsYXNzTmFtZStcIi1tZXNzYWdlXFxcIiBzdHlsZT1cXFwiZm9udC1zaXplOlwiK2kubWVzc2FnZUZvbnRTaXplK1wiOyBjb2xvcjpcIitkLm1lc3NhZ2VDb2xvcitcIjtcXFwiPlwiK24rXCI8L3A+PGEgaWQ9XFxcIk5YUmVwb3J0QnV0dG9uXFxcIiBjbGFzcz1cXFwiXCIraS5jbGFzc05hbWUrXCItYnV0dG9uXFxcIiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6NTAwOyBmb250LXNpemU6XCIraS5idXR0b25Gb250U2l6ZStcIjsgYmFja2dyb3VuZDpcIitkLmJ1dHRvbkJhY2tncm91bmQrXCI7IGNvbG9yOlwiK2QuYnV0dG9uQ29sb3IrXCI7XFxcIj5cIitvK1wiPC9hPjwvZGl2PlwiLCF0LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHguaWQpKXt0LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoeCk7dmFyIHk9ZnVuY3Rpb24oKXt2YXIgZT10LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHguaWQpO2UuY2xhc3NMaXN0LmFkZChcIm54LXJlbW92ZVwiKTt2YXIgYT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bnVsbCE9PWUucGFyZW50Tm9kZSYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpLGNsZWFyVGltZW91dChhKX0saS5jc3NBbmltYXRpb25EdXJhdGlvbil9LGs9dC5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk5YUmVwb3J0QnV0dG9uXCIpO2lmKGsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiZyKCkseSgpfSksZyYmYil7dmFyIGg9dC5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm54LXJlcG9ydC1jbGljay10by1jbG9zZVwiKTtoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7eSgpfSl9fWk9dighMCxpLG0pfSxPPWZ1bmN0aW9uKCl7cmV0dXJuXCJbaWRePU5vdGlmbGl4Q29uZmlybVdyYXBde3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6NDAwMzt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2xlZnQ6MDt0b3A6MDtwYWRkaW5nOjEwcHg7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Zm9udC1mYW1pbHk6XFxcIlF1aWNrc2FuZFxcXCIsLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXFxcIlNlZ29lIFVJXFxcIixSb2JvdG8sXFxcIkhlbHZldGljYSBOZXVlXFxcIixBcmlhbCxzYW5zLXNlcmlmO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1mbGV4LXdyYXA6d3JhcDstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXA7LXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsOy13ZWJraXQtYm94LWRpcmVjdGlvbjpub3JtYWw7LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy13ZWJraXQtYWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9W2lkXj1Ob3RpZmxpeENvbmZpcm1XcmFwXS5ueC1wb3NpdGlvbi1jZW50ZXItdG9wey13ZWJraXQtYm94LXBhY2s6c3RhcnQ7LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fVtpZF49Tm90aWZsaXhDb25maXJtV3JhcF0ubngtcG9zaXRpb24tY2VudGVyLWJvdHRvbXstd2Via2l0LWJveC1wYWNrOmVuZDstd2Via2l0LWp1c3RpZnktY29udGVudDpmbGV4LWVuZDstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9W2lkXj1Ob3RpZmxpeENvbmZpcm1XcmFwXS5ueC1wb3NpdGlvbi1sZWZ0LXRvcHstd2Via2l0LWJveC1hbGlnbjpzdGFydDstd2Via2l0LWFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7LW1zLWZsZXgtYWxpZ246c3RhcnQ7YWxpZ24taXRlbXM6ZmxleC1zdGFydDstd2Via2l0LWJveC1wYWNrOnN0YXJ0Oy13ZWJraXQtanVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH1baWRePU5vdGlmbGl4Q29uZmlybVdyYXBdLm54LXBvc2l0aW9uLWxlZnQtY2VudGVyey13ZWJraXQtYm94LWFsaWduOnN0YXJ0Oy13ZWJraXQtYWxpZ24taXRlbXM6ZmxleC1zdGFydDstbXMtZmxleC1hbGlnbjpzdGFydDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0fVtpZF49Tm90aWZsaXhDb25maXJtV3JhcF0ubngtcG9zaXRpb24tbGVmdC1ib3R0b217LXdlYmtpdC1ib3gtYWxpZ246c3RhcnQ7LXdlYmtpdC1hbGlnbi1pdGVtczpmbGV4LXN0YXJ0Oy1tcy1mbGV4LWFsaWduOnN0YXJ0O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7LXdlYmtpdC1ib3gtcGFjazplbmQ7LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfVtpZF49Tm90aWZsaXhDb25maXJtV3JhcF0ubngtcG9zaXRpb24tcmlnaHQtdG9wey13ZWJraXQtYm94LWFsaWduOmVuZDstd2Via2l0LWFsaWduLWl0ZW1zOmZsZXgtZW5kOy1tcy1mbGV4LWFsaWduOmVuZDthbGlnbi1pdGVtczpmbGV4LWVuZDstd2Via2l0LWJveC1wYWNrOnN0YXJ0Oy13ZWJraXQtanVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH1baWRePU5vdGlmbGl4Q29uZmlybVdyYXBdLm54LXBvc2l0aW9uLXJpZ2h0LWNlbnRlcnstd2Via2l0LWJveC1hbGlnbjplbmQ7LXdlYmtpdC1hbGlnbi1pdGVtczpmbGV4LWVuZDstbXMtZmxleC1hbGlnbjplbmQ7YWxpZ24taXRlbXM6ZmxleC1lbmR9W2lkXj1Ob3RpZmxpeENvbmZpcm1XcmFwXS5ueC1wb3NpdGlvbi1yaWdodC1ib3R0b217LXdlYmtpdC1ib3gtYWxpZ246ZW5kOy13ZWJraXQtYWxpZ24taXRlbXM6ZmxleC1lbmQ7LW1zLWZsZXgtYWxpZ246ZW5kO2FsaWduLWl0ZW1zOmZsZXgtZW5kOy13ZWJraXQtYm94LXBhY2s6ZW5kOy13ZWJraXQtanVzdGlmeS1jb250ZW50OmZsZXgtZW5kOy1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH1baWRePU5vdGlmbGl4Q29uZmlybVdyYXBdICp7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fVtpZF49Tm90aWZsaXhDb25maXJtV3JhcF0+ZGl2W2NsYXNzKj1cXFwiLW92ZXJsYXlcXFwiXXt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2xlZnQ6MDt0b3A6MDtiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsLjUpO3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6MH1baWRePU5vdGlmbGl4Q29uZmlybVdyYXBdPmRpdltjbGFzcyo9XFxcIi1vdmVybGF5XFxcIl0ubngtd2l0aC1hbmltYXRpb257LXdlYmtpdC1hbmltYXRpb246Y29uZmlybS1vdmVybGF5LWFuaW1hdGlvbiAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsO2FuaW1hdGlvbjpjb25maXJtLW92ZXJsYXktYW5pbWF0aW9uIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWx9QC13ZWJraXQta2V5ZnJhbWVzIGNvbmZpcm0tb3ZlcmxheS1hbmltYXRpb257MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGNvbmZpcm0tb3ZlcmxheS1hbmltYXRpb257MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1baWRePU5vdGlmbGl4Q29uZmlybVdyYXBdLm54LXJlbW92ZT5kaXZbY2xhc3MqPVxcXCItb3ZlcmxheVxcXCJdLm54LXdpdGgtYW5pbWF0aW9ue29wYWNpdHk6MDstd2Via2l0LWFuaW1hdGlvbjpjb25maXJtLW92ZXJsYXktYW5pbWF0aW9uLXJlbW92ZSAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsO2FuaW1hdGlvbjpjb25maXJtLW92ZXJsYXktYW5pbWF0aW9uLXJlbW92ZSAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsfUAtd2Via2l0LWtleWZyYW1lcyBjb25maXJtLW92ZXJsYXktYW5pbWF0aW9uLXJlbW92ZXswJXtvcGFjaXR5OjF9MTAwJXtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgY29uZmlybS1vdmVybGF5LWFuaW1hdGlvbi1yZW1vdmV7MCV7b3BhY2l0eToxfTEwMCV7b3BhY2l0eTowfX1baWRePU5vdGlmbGl4Q29uZmlybVdyYXBdPmRpdltjbGFzcyo9XFxcIi1jb250ZW50XFxcIl17d2lkdGg6MzAwcHg7bWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDo5NnZoO292ZXJmbG93LXg6aGlkZGVuO292ZXJmbG93LXk6YXV0bztib3JkZXItcmFkaXVzOjI1cHg7cGFkZGluZzoxMHB4O21hcmdpbjowOy13ZWJraXQtZmlsdGVyOmRyb3Atc2hhZG93KDAgMCA1cHggcmdiYSgwLDAsMCwwLjA1KSk7ZmlsdGVyOmRyb3Atc2hhZG93KDAgMCA1cHggcmdiYSgwLCAwLCAwLCAuMDUpKTtiYWNrZ3JvdW5kOiNmOGY4Zjg7Y29sb3I6IzFlMWUxZTtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjE7dGV4dC1hbGlnbjpjZW50ZXJ9W2lkXj1Ob3RpZmxpeENvbmZpcm1XcmFwXT5kaXZbY2xhc3MqPVxcXCItY29udGVudFxcXCJdOjotd2Via2l0LXNjcm9sbGJhcnt3aWR0aDowO2hlaWdodDowfVtpZF49Tm90aWZsaXhDb25maXJtV3JhcF0+ZGl2W2NsYXNzKj1cXFwiLWNvbnRlbnRcXFwiXTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7YmFja2dyb3VuZDp0cmFuc3BhcmVudH1baWRePU5vdGlmbGl4Q29uZmlybVdyYXBdPmRpdltjbGFzcyo9XFxcIi1jb250ZW50XFxcIl06Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNre2JhY2tncm91bmQ6dHJhbnNwYXJlbnR9W2lkXj1Ob3RpZmxpeENvbmZpcm1XcmFwXT5kaXZbY2xhc3MqPVxcXCItY29udGVudFxcXCJdPmRpdltjbGFzcyo9XFxcIi1oZWFkXFxcIl17ZmxvYXQ6bGVmdDt3aWR0aDoxMDAlO3RleHQtYWxpZ246aW5oZXJpdH1baWRePU5vdGlmbGl4Q29uZmlybVdyYXBdPmRpdltjbGFzcyo9XFxcIi1jb250ZW50XFxcIl0+ZGl2W2NsYXNzKj1cXFwiLWhlYWRcXFwiXT5oNXtmbG9hdDpsZWZ0O3dpZHRoOjEwMCU7bWFyZ2luOjA7cGFkZGluZzowIDAgMTBweDtib3JkZXItYm90dG9tOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4xKTtjb2xvcjojMzJjNjgyO2ZvbnQtZmFtaWx5OmluaGVyaXQhaW1wb3J0YW50O2ZvbnQtc2l6ZToxNnB4O2xpbmUtaGVpZ2h0OjEuNDtmb250LXdlaWdodDo1MDA7dGV4dC1hbGlnbjppbmhlcml0fVtpZF49Tm90aWZsaXhDb25maXJtV3JhcF0+ZGl2W2NsYXNzKj1cXFwiLWNvbnRlbnRcXFwiXT5kaXZbY2xhc3MqPVxcXCItaGVhZFxcXCJdPmRpdntmb250LWZhbWlseTppbmhlcml0IWltcG9ydGFudDttYXJnaW46MTVweCAwIDIwcHg7cGFkZGluZzowIDEwcHg7ZmxvYXQ6bGVmdDt3aWR0aDoxMDAlO2ZvbnQtc2l6ZToxNHB4O2xpbmUtaGVpZ2h0OjEuNDtmb250LXdlaWdodDpub3JtYWw7Y29sb3I6aW5oZXJpdDt0ZXh0LWFsaWduOmluaGVyaXR9W2lkXj1Ob3RpZmxpeENvbmZpcm1XcmFwXT5kaXZbY2xhc3MqPVxcXCItY29udGVudFxcXCJdPmRpdltjbGFzcyo9XFxcIi1oZWFkXFxcIl0+ZGl2PmRpdntmb250LWZhbWlseTppbmhlcml0IWltcG9ydGFudDtmbG9hdDpsZWZ0O3dpZHRoOjEwMCU7bWFyZ2luOjE1cHggMCAwO3BhZGRpbmc6MH1baWRePU5vdGlmbGl4Q29uZmlybVdyYXBdPmRpdltjbGFzcyo9XFxcIi1jb250ZW50XFxcIl0+ZGl2W2NsYXNzKj1cXFwiLWhlYWRcXFwiXT5kaXY+ZGl2PmlucHV0e2ZvbnQtZmFtaWx5OmluaGVyaXQhaW1wb3J0YW50O2Zsb2F0OmxlZnQ7d2lkdGg6MTAwJTtoZWlnaHQ6NDBweDttYXJnaW46MDtwYWRkaW5nOjAgMTVweDtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEpO2JvcmRlci1yYWRpdXM6MjVweDtmb250LXNpemU6MTRweDtmb250LXdlaWdodDpub3JtYWw7bGluZS1oZWlnaHQ6MTstd2Via2l0LXRyYW5zaXRpb246YWxsIC4yNXMgZWFzZS1pbi1vdXQ7LW8tdHJhbnNpdGlvbjphbGwgLjI1cyBlYXNlLWluLW91dDt0cmFuc2l0aW9uOmFsbCAuMjVzIGVhc2UtaW4tb3V0O3RleHQtYWxpZ246bGVmdH1baWRePU5vdGlmbGl4Q29uZmlybVdyYXBdLm54LXJ0bC1vbj5kaXZbY2xhc3MqPVxcXCItY29udGVudFxcXCJdPmRpdltjbGFzcyo9XFxcIi1oZWFkXFxcIl0+ZGl2PmRpdj5pbnB1dHt0ZXh0LWFsaWduOnJpZ2h0fVtpZF49Tm90aWZsaXhDb25maXJtV3JhcF0+ZGl2W2NsYXNzKj1cXFwiLWNvbnRlbnRcXFwiXT5kaXZbY2xhc3MqPVxcXCItaGVhZFxcXCJdPmRpdj5kaXY+aW5wdXQ6aG92ZXJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjEpfVtpZF49Tm90aWZsaXhDb25maXJtV3JhcF0+ZGl2W2NsYXNzKj1cXFwiLWNvbnRlbnRcXFwiXT5kaXZbY2xhc3MqPVxcXCItaGVhZFxcXCJdPmRpdj5kaXY+aW5wdXQ6Zm9jdXN7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjMpfVtpZF49Tm90aWZsaXhDb25maXJtV3JhcF0+ZGl2W2NsYXNzKj1cXFwiLWNvbnRlbnRcXFwiXT5kaXZbY2xhc3MqPVxcXCItaGVhZFxcXCJdPmRpdj5kaXY+aW5wdXQubngtdmFsaWRhdGlvbi1mYWlsdXJle2JvcmRlci1jb2xvcjojZmY1NTQ5fVtpZF49Tm90aWZsaXhDb25maXJtV3JhcF0+ZGl2W2NsYXNzKj1cXFwiLWNvbnRlbnRcXFwiXT5kaXZbY2xhc3MqPVxcXCItaGVhZFxcXCJdPmRpdj5kaXY+aW5wdXQubngtdmFsaWRhdGlvbi1zdWNjZXNze2JvcmRlci1jb2xvcjojMzJjNjgyfVtpZF49Tm90aWZsaXhDb25maXJtV3JhcF0+ZGl2W2NsYXNzKj1cXFwiLWNvbnRlbnRcXFwiXT5kaXZbY2xhc3MqPVxcXCItYnV0dG9uc1xcXCJdey13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtib3JkZXItcmFkaXVzOmluaGVyaXQ7ZmxvYXQ6bGVmdDt3aWR0aDoxMDAlO3RleHQtYWxpZ246aW5oZXJpdH1baWRePU5vdGlmbGl4Q29uZmlybVdyYXBdPmRpdltjbGFzcyo9XFxcIi1jb250ZW50XFxcIl0+ZGl2W2NsYXNzKj1cXFwiLWJ1dHRvbnNcXFwiXT5he2N1cnNvcjpwb2ludGVyO2ZvbnQtZmFtaWx5OmluaGVyaXQhaW1wb3J0YW50Oy13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjI1cyBlYXNlLWluLW91dDstby10cmFuc2l0aW9uOmFsbCAuMjVzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246YWxsIC4yNXMgZWFzZS1pbi1vdXQ7ZmxvYXQ6bGVmdDt3aWR0aDo0OCU7cGFkZGluZzo5cHggNXB4O2JvcmRlci1yYWRpdXM6aW5oZXJpdCFpbXBvcnRhbnQ7Zm9udC13ZWlnaHQ6NTAwO2ZvbnQtc2l6ZToxNXB4O2xpbmUtaGVpZ2h0OjEuNDtjb2xvcjojZjhmOGY4O3RleHQtYWxpZ246aW5oZXJpdH1baWRePU5vdGlmbGl4Q29uZmlybVdyYXBdPmRpdltjbGFzcyo9XFxcIi1jb250ZW50XFxcIl0+ZGl2W2NsYXNzKj1cXFwiLWJ1dHRvbnNcXFwiXT5hLm54LWNvbmZpcm0tYnV0dG9uLW9re21hcmdpbjowIDIlIDAgMDtiYWNrZ3JvdW5kOiMzMmM2ODJ9W2lkXj1Ob3RpZmxpeENvbmZpcm1XcmFwXT5kaXZbY2xhc3MqPVxcXCItY29udGVudFxcXCJdPmRpdltjbGFzcyo9XFxcIi1idXR0b25zXFxcIl0+YS5ueC1jb25maXJtLWJ1dHRvbi1jYW5jZWx7bWFyZ2luOjAgMCAwIDIlO2JhY2tncm91bmQ6I2E5YTlhOX1baWRePU5vdGlmbGl4Q29uZmlybVdyYXBdPmRpdltjbGFzcyo9XFxcIi1jb250ZW50XFxcIl0+ZGl2W2NsYXNzKj1cXFwiLWJ1dHRvbnNcXFwiXT5hLm54LWZ1bGx7bWFyZ2luOjA7d2lkdGg6MTAwJX1baWRePU5vdGlmbGl4Q29uZmlybVdyYXBdPmRpdltjbGFzcyo9XFxcIi1jb250ZW50XFxcIl0+ZGl2W2NsYXNzKj1cXFwiLWJ1dHRvbnNcXFwiXT5hOmhvdmVyey13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIC02MHB4IDVweCAtNXB4IHJnYmEoMCwwLDAsLjI1KTtib3gtc2hhZG93Omluc2V0IDAgLTYwcHggNXB4IC01cHggcmdiYSgwLDAsMCwuMjUpfVtpZF49Tm90aWZsaXhDb25maXJtV3JhcF0ubngtcnRsLW9uPmRpdltjbGFzcyo9XFxcIi1jb250ZW50XFxcIl0+ZGl2W2NsYXNzKj1cXFwiLWJ1dHRvbnNcXFwiXSxbaWRePU5vdGlmbGl4Q29uZmlybVdyYXBdLm54LXJ0bC1vbj5kaXZbY2xhc3MqPVxcXCItY29udGVudFxcXCJdPmRpdltjbGFzcyo9XFxcIi1idXR0b25zXFxcIl0+YXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGVZKDE4MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZVkoMTgwZGVnKX1baWRePU5vdGlmbGl4Q29uZmlybVdyYXBdLm54LXdpdGgtYW5pbWF0aW9uLm54LWZhZGU+ZGl2W2NsYXNzKj1cXFwiLWNvbnRlbnRcXFwiXXstd2Via2l0LWFuaW1hdGlvbjpjb25maXJtLWFuaW1hdGlvbi1mYWRlIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWw7YW5pbWF0aW9uOmNvbmZpcm0tYW5pbWF0aW9uLWZhZGUgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbH1ALXdlYmtpdC1rZXlmcmFtZXMgY29uZmlybS1hbmltYXRpb24tZmFkZXswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgY29uZmlybS1hbmltYXRpb24tZmFkZXswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fVtpZF49Tm90aWZsaXhDb25maXJtV3JhcF0ubngtd2l0aC1hbmltYXRpb24ubngtem9vbT5kaXZbY2xhc3MqPVxcXCItY29udGVudFxcXCJdey13ZWJraXQtYW5pbWF0aW9uOmNvbmZpcm0tYW5pbWF0aW9uLXpvb20gLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbDthbmltYXRpb246Y29uZmlybS1hbmltYXRpb24tem9vbSAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsfUAtd2Via2l0LWtleWZyYW1lcyBjb25maXJtLWFuaW1hdGlvbi16b29tezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNSk7dHJhbnNmb3JtOnNjYWxlKC41KX01MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMDUpO3RyYW5zZm9ybTpzY2FsZSgxLjA1KX0xMDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fUBrZXlmcmFtZXMgY29uZmlybS1hbmltYXRpb24tem9vbXswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUpO3RyYW5zZm9ybTpzY2FsZSguNSl9NTAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjA1KTt0cmFuc2Zvcm06c2NhbGUoMS4wNSl9MTAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1baWRePU5vdGlmbGl4Q29uZmlybVdyYXBdLm54LXdpdGgtYW5pbWF0aW9uLm54LWZhZGUubngtcmVtb3ZlPmRpdltjbGFzcyo9XFxcIi1jb250ZW50XFxcIl17b3BhY2l0eTowOy13ZWJraXQtYW5pbWF0aW9uOmNvbmZpcm0tYW5pbWF0aW9uLWZhZGUtcmVtb3ZlIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWw7YW5pbWF0aW9uOmNvbmZpcm0tYW5pbWF0aW9uLWZhZGUtcmVtb3ZlIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWx9QC13ZWJraXQta2V5ZnJhbWVzIGNvbmZpcm0tYW5pbWF0aW9uLWZhZGUtcmVtb3ZlezAle29wYWNpdHk6MX0xMDAle29wYWNpdHk6MH19QGtleWZyYW1lcyBjb25maXJtLWFuaW1hdGlvbi1mYWRlLXJlbW92ZXswJXtvcGFjaXR5OjF9MTAwJXtvcGFjaXR5OjB9fVtpZF49Tm90aWZsaXhDb25maXJtV3JhcF0ubngtd2l0aC1hbmltYXRpb24ubngtem9vbS5ueC1yZW1vdmU+ZGl2W2NsYXNzKj1cXFwiLWNvbnRlbnRcXFwiXXtvcGFjaXR5OjA7LXdlYmtpdC1hbmltYXRpb246Y29uZmlybS1hbmltYXRpb24tem9vbS1yZW1vdmUgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbDthbmltYXRpb246Y29uZmlybS1hbmltYXRpb24tem9vbS1yZW1vdmUgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbH1ALXdlYmtpdC1rZXlmcmFtZXMgY29uZmlybS1hbmltYXRpb24tem9vbS1yZW1vdmV7MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX01MCV7b3BhY2l0eTouNTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjA1KTt0cmFuc2Zvcm06c2NhbGUoMS4wNSl9MTAwJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfX1Aa2V5ZnJhbWVzIGNvbmZpcm0tYW5pbWF0aW9uLXpvb20tcmVtb3ZlezAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9NTAle29wYWNpdHk6LjU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4wNSk7dHJhbnNmb3JtOnNjYWxlKDEuMDUpfTEwMCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKX19XCJ9LEg9ZnVuY3Rpb24oZSxpLG4sbyxyLGwsbSxjLHApe2lmKCF3KFwiYm9keVwiKSlyZXR1cm4hMTthfHxHLkNvbmZpcm0uaW5pdCh7fSk7dmFyIHg9dighMCxhLHt9KTtcIm9iamVjdFwiIT10eXBlb2YgcHx8QXJyYXkuaXNBcnJheShwKXx8KGE9dighMCxhLHApKSxcInN0cmluZ1wiIT10eXBlb2YgaSYmKGk9XCJOb3RpZmxpeCBDb25maXJtXCIpLFwic3RyaW5nXCIhPXR5cGVvZiBuJiYobj1cIkRvIHlvdSBhZ3JlZSB3aXRoIG1lP1wiKSxcInN0cmluZ1wiIT10eXBlb2YgciYmKHI9XCJZZXNcIiksXCJzdHJpbmdcIiE9dHlwZW9mIGwmJihsPVwiTm9cIiksXCJmdW5jdGlvblwiIT10eXBlb2YgbSYmKG09dm9pZCAwKSxcImZ1bmN0aW9uXCIhPXR5cGVvZiBjJiYoYz12b2lkIDApLGEucGxhaW5UZXh0JiYoaT1OKGkpLG49TihuKSxyPU4ociksbD1OKGwpKSxhLnBsYWluVGV4dHx8KGkubGVuZ3RoPmEudGl0bGVNYXhMZW5ndGgmJihpPVwiUG9zc2libGUgSFRNTCBUYWdzIEVycm9yXCIsbj1cIlRoZSBcXFwicGxhaW5UZXh0XFxcIiBvcHRpb24gaXMgXFxcImZhbHNlXFxcIiBhbmQgdGhlIHRpdGxlIGNvbnRlbnQgbGVuZ3RoIGlzIG1vcmUgdGhhbiBcXFwidGl0bGVNYXhMZW5ndGhcXFwiIG9wdGlvbi5cIixyPVwiT2theVwiLGw9XCIuLi5cIiksbi5sZW5ndGg+YS5tZXNzYWdlTWF4TGVuZ3RoJiYoaT1cIlBvc3NpYmxlIEhUTUwgVGFncyBFcnJvclwiLG49XCJUaGUgXFxcInBsYWluVGV4dFxcXCIgb3B0aW9uIGlzIFxcXCJmYWxzZVxcXCIgYW5kIHRoZSBtZXNzYWdlIGNvbnRlbnQgbGVuZ3RoIGlzIG1vcmUgdGhhbiBcXFwibWVzc2FnZU1heExlbmd0aFxcXCIgb3B0aW9uLlwiLHI9XCJPa2F5XCIsbD1cIi4uLlwiKSwoci5sZW5ndGh8fGwubGVuZ3RoKT5hLmJ1dHRvbnNNYXhMZW5ndGgmJihpPVwiUG9zc2libGUgSFRNTCBUYWdzIEVycm9yXCIsbj1cIlRoZSBcXFwicGxhaW5UZXh0XFxcIiBvcHRpb24gaXMgXFxcImZhbHNlXFxcIiBhbmQgdGhlIGJ1dHRvbnMgY29udGVudCBsZW5ndGggaXMgbW9yZSB0aGFuIFxcXCJidXR0b25zTWF4TGVuZ3RoXFxcIiBvcHRpb24uXCIscj1cIk9rYXlcIixsPVwiLi4uXCIpKSxpLmxlbmd0aD5hLnRpdGxlTWF4TGVuZ3RoJiYoaT1pLnN1YnN0cmluZygwLGEudGl0bGVNYXhMZW5ndGgpK1wiLi4uXCIpLG4ubGVuZ3RoPmEubWVzc2FnZU1heExlbmd0aCYmKG49bi5zdWJzdHJpbmcoMCxhLm1lc3NhZ2VNYXhMZW5ndGgpK1wiLi4uXCIpLHIubGVuZ3RoPmEuYnV0dG9uc01heExlbmd0aCYmKHI9ci5zdWJzdHJpbmcoMCxhLmJ1dHRvbnNNYXhMZW5ndGgpK1wiLi4uXCIpLGwubGVuZ3RoPmEuYnV0dG9uc01heExlbmd0aCYmKGw9bC5zdWJzdHJpbmcoMCxhLmJ1dHRvbnNNYXhMZW5ndGgpK1wiLi4uXCIpLGEuY3NzQW5pbWF0aW9ufHwoYS5jc3NBbmltYXRpb25EdXJhdGlvbj0wKTt2YXIgZz10LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Zy5pZD1kLklELGcuY2xhc3NOYW1lPWEuY2xhc3NOYW1lKyhhLmNzc0FuaW1hdGlvbj9cIiBueC13aXRoLWFuaW1hdGlvbiBueC1cIithLmNzc0FuaW1hdGlvblN0eWxlOlwiXCIpLGcuc3R5bGUuekluZGV4PWEuemluZGV4LGcuc3R5bGUucGFkZGluZz1hLmRpc3RhbmNlLGEucnRsJiYoZy5zZXRBdHRyaWJ1dGUoXCJkaXJcIixcInJ0bFwiKSxnLmNsYXNzTGlzdC5hZGQoXCJueC1ydGwtb25cIikpO3ZhciBiPVwic3RyaW5nXCI9PXR5cGVvZiBhLnBvc2l0aW9uP2EucG9zaXRpb24udHJpbSgpOlwiY2VudGVyXCI7Zy5jbGFzc0xpc3QuYWRkKFwibngtcG9zaXRpb24tXCIrYiksZy5zdHlsZS5mb250RmFtaWx5PVwiXFxcIlwiK2EuZm9udEZhbWlseStcIlxcXCIsIFwiK3M7dmFyIHU9XCJcIjthLmJhY2tPdmVybGF5JiYodT1cIjxkaXYgY2xhc3M9XFxcIlwiK2EuY2xhc3NOYW1lK1wiLW92ZXJsYXlcIisoYS5jc3NBbmltYXRpb24/XCIgbngtd2l0aC1hbmltYXRpb25cIjpcIlwiKStcIlxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQ6XCIrYS5iYWNrT3ZlcmxheUNvbG9yK1wiO2FuaW1hdGlvbi1kdXJhdGlvbjpcIithLmNzc0FuaW1hdGlvbkR1cmF0aW9uK1wibXM7XFxcIj48L2Rpdj5cIik7dmFyIHk9XCJcIjtcImZ1bmN0aW9uXCI9PXR5cGVvZiBtJiYoeT1cIjxhIGlkPVxcXCJOWENvbmZpcm1CdXR0b25DYW5jZWxcXFwiIGNsYXNzPVxcXCJueC1jb25maXJtLWJ1dHRvbi1jYW5jZWxcXFwiIHN0eWxlPVxcXCJjb2xvcjpcIithLmNhbmNlbEJ1dHRvbkNvbG9yK1wiO2JhY2tncm91bmQ6XCIrYS5jYW5jZWxCdXR0b25CYWNrZ3JvdW5kK1wiO2ZvbnQtc2l6ZTpcIithLmJ1dHRvbnNGb250U2l6ZStcIjtcXFwiPlwiK2wrXCI8L2E+XCIpO3ZhciBrPVwiXCIsaD1udWxsLEM9dm9pZCAwO2lmKGU9PT1mLkFza3x8ZT09PWYuUHJvbXB0KXtoPW98fFwiXCI7dmFyIHo9ZT09PWYuQXNrP01hdGguY2VpbCgxLjUqaC5sZW5ndGgpOjIwMDxoLmxlbmd0aD9NYXRoLmNlaWwoMS41KmgubGVuZ3RoKToyNTAsUz1lPT09Zi5Qcm9tcHQ/XCJ2YWx1ZT1cXFwiXCIraCtcIlxcXCJcIjpcIlwiO2s9XCI8ZGl2PjxpbnB1dCBpZD1cXFwiTlhDb25maXJtVmFsaWRhdGlvbklucHV0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBcIitTK1wiIG1heGxlbmd0aD1cXFwiXCIreitcIlxcXCIgc3R5bGU9XFxcImZvbnQtc2l6ZTpcIithLm1lc3NhZ2VGb250U2l6ZStcIjtib3JkZXItcmFkaXVzOiBcIithLmJvcmRlclJhZGl1cytcIjtcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBzcGVsbGNoZWNrPVxcXCJmYWxzZVxcXCIgYXV0b2NhcGl0YWxpemU9XFxcIm5vbmVcXFwiIC8+PC9kaXY+XCJ9aWYoZy5pbm5lckhUTUw9dStcIjxkaXYgY2xhc3M9XFxcIlwiK2EuY2xhc3NOYW1lK1wiLWNvbnRlbnRcXFwiIHN0eWxlPVxcXCJ3aWR0aDpcIithLndpZHRoK1wiOyBiYWNrZ3JvdW5kOlwiK2EuYmFja2dyb3VuZENvbG9yK1wiOyBhbmltYXRpb24tZHVyYXRpb246XCIrYS5jc3NBbmltYXRpb25EdXJhdGlvbitcIm1zOyBib3JkZXItcmFkaXVzOiBcIithLmJvcmRlclJhZGl1cytcIjtcXFwiPjxkaXYgY2xhc3M9XFxcIlwiK2EuY2xhc3NOYW1lK1wiLWhlYWRcXFwiPjxoNSBzdHlsZT1cXFwiY29sb3I6XCIrYS50aXRsZUNvbG9yK1wiO2ZvbnQtc2l6ZTpcIithLnRpdGxlRm9udFNpemUrXCI7XFxcIj5cIitpK1wiPC9oNT48ZGl2IHN0eWxlPVxcXCJjb2xvcjpcIithLm1lc3NhZ2VDb2xvcitcIjtmb250LXNpemU6XCIrYS5tZXNzYWdlRm9udFNpemUrXCI7XFxcIj5cIituK2srXCI8L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJcIithLmNsYXNzTmFtZStcIi1idXR0b25zXFxcIj48YSBpZD1cXFwiTlhDb25maXJtQnV0dG9uT2tcXFwiIGNsYXNzPVxcXCJueC1jb25maXJtLWJ1dHRvbi1va1wiKyhcImZ1bmN0aW9uXCI9PXR5cGVvZiBtP1wiXCI6XCIgbngtZnVsbFwiKStcIlxcXCIgc3R5bGU9XFxcImNvbG9yOlwiK2Eub2tCdXR0b25Db2xvcitcIjtiYWNrZ3JvdW5kOlwiK2Eub2tCdXR0b25CYWNrZ3JvdW5kK1wiO2ZvbnQtc2l6ZTpcIithLmJ1dHRvbnNGb250U2l6ZStcIjtcXFwiPlwiK3IrXCI8L2E+XCIreStcIjwvZGl2PjwvZGl2PlwiLCF0LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGcuaWQpKXt0LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZyk7dmFyIEw9dC5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChnLmlkKSxXPXQuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJOWENvbmZpcm1CdXR0b25Pa1wiKSxJPXQuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJOWENvbmZpcm1WYWxpZGF0aW9uSW5wdXRcIik7aWYoSSYmKEkuZm9jdXMoKSxJLnNldFNlbGVjdGlvblJhbmdlKDAsKEkudmFsdWV8fFwiXCIpLmxlbmd0aCksSS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIixmdW5jdGlvbih0KXt2YXIgaT10LnRhcmdldC52YWx1ZTtpZihlPT09Zi5Bc2smJmkhPT1oKXQucHJldmVudERlZmF1bHQoKSxJLmNsYXNzTGlzdC5hZGQoXCJueC12YWxpZGF0aW9uLWZhaWx1cmVcIiksSS5jbGFzc0xpc3QucmVtb3ZlKFwibngtdmFsaWRhdGlvbi1zdWNjZXNzXCIpO2Vsc2V7ZT09PWYuQXNrJiYoSS5jbGFzc0xpc3QucmVtb3ZlKFwibngtdmFsaWRhdGlvbi1mYWlsdXJlXCIpLEkuY2xhc3NMaXN0LmFkZChcIm54LXZhbGlkYXRpb24tc3VjY2Vzc1wiKSk7dmFyIGE9XCJlbnRlclwiPT09KHQua2V5fHxcIlwiKS50b0xvY2FsZUxvd2VyQ2FzZShcImVuXCIpfHwxMz09PXQua2V5Q29kZTthJiZXLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2xpY2tcIikpfX0pKSxXLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKHQpe2lmKGU9PT1mLkFzayYmaCYmSSl7dmFyIGk9KEkudmFsdWV8fFwiXCIpLnRvU3RyaW5nKCk7aWYoaSE9PWgpcmV0dXJuIEkuZm9jdXMoKSxJLmNsYXNzTGlzdC5hZGQoXCJueC12YWxpZGF0aW9uLWZhaWx1cmVcIiksdC5zdG9wUHJvcGFnYXRpb24oKSx0LnByZXZlbnREZWZhdWx0KCksdC5yZXR1cm5WYWx1ZT0hMSx0LmNhbmNlbEJ1YmJsZT0hMCwhMTtJLmNsYXNzTGlzdC5yZW1vdmUoXCJueC12YWxpZGF0aW9uLWZhaWx1cmVcIil9XCJmdW5jdGlvblwiPT10eXBlb2YgbSYmKGU9PT1mLlByb21wdCYmSSYmKEM9SS52YWx1ZXx8XCJcIiksbShDKSksTC5jbGFzc0xpc3QuYWRkKFwibngtcmVtb3ZlXCIpO3ZhciBuPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtudWxsIT09TC5wYXJlbnROb2RlJiYoTC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKEwpLGNsZWFyVGltZW91dChuKSl9LGEuY3NzQW5pbWF0aW9uRHVyYXRpb24pfSksXCJmdW5jdGlvblwiPT10eXBlb2YgbSl7dmFyIFI9dC5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk5YQ29uZmlybUJ1dHRvbkNhbmNlbFwiKTtSLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7XCJmdW5jdGlvblwiPT10eXBlb2YgYyYmKGU9PT1mLlByb21wdCYmSSYmKEM9SS52YWx1ZXx8XCJcIiksYyhDKSksTC5jbGFzc0xpc3QuYWRkKFwibngtcmVtb3ZlXCIpO3ZhciB0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtudWxsIT09TC5wYXJlbnROb2RlJiYoTC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKEwpLGNsZWFyVGltZW91dCh0KSl9LGEuY3NzQW5pbWF0aW9uRHVyYXRpb24pfSl9fWE9dighMCxhLHgpfSxQPWZ1bmN0aW9uKCl7cmV0dXJuXCJbaWRePU5vdGlmbGl4TG9hZGluZ1dyYXBdey13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtwb3NpdGlvbjpmaXhlZDt6LWluZGV4OjQwMDA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtsZWZ0OjA7dG9wOjA7cmlnaHQ6MDtib3R0b206MDttYXJnaW46YXV0bztkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LXdlYmtpdC1mbGV4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtZmxleC13cmFwOndyYXA7LW1zLWZsZXgtd3JhcDp3cmFwO2ZsZXgtd3JhcDp3cmFwOy13ZWJraXQtYm94LW9yaWVudDp2ZXJ0aWNhbDstd2Via2l0LWJveC1kaXJlY3Rpb246bm9ybWFsOy13ZWJraXQtZmxleC1kaXJlY3Rpb246Y29sdW1uOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uOy13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstd2Via2l0LWFsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy13ZWJraXQtYm94LXBhY2s6Y2VudGVyOy13ZWJraXQtanVzdGlmeS1jb250ZW50OmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3RleHQtYWxpZ246Y2VudGVyOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjgpO2ZvbnQtZmFtaWx5OlxcXCJRdWlja3NhbmRcXFwiLC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFxcXCJTZWdvZSBVSVxcXCIsUm9ib3RvLFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsQXJpYWwsc2Fucy1zZXJpZn1baWRePU5vdGlmbGl4TG9hZGluZ1dyYXBdICp7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fVtpZF49Tm90aWZsaXhMb2FkaW5nV3JhcF0ubngtbG9hZGluZy1jbGljay10by1jbG9zZXtjdXJzb3I6cG9pbnRlcn1baWRePU5vdGlmbGl4TG9hZGluZ1dyYXBdPmRpdltjbGFzcyo9XFxcIi1pY29uXFxcIl17d2lkdGg6NjBweDtoZWlnaHQ6NjBweDtwb3NpdGlvbjpyZWxhdGl2ZTstd2Via2l0LXRyYW5zaXRpb246dG9wIC4ycyBlYXNlLWluLW91dDstby10cmFuc2l0aW9uOnRvcCAuMnMgZWFzZS1pbi1vdXQ7dHJhbnNpdGlvbjp0b3AgLjJzIGVhc2UtaW4tb3V0O21hcmdpbjowIGF1dG99W2lkXj1Ob3RpZmxpeExvYWRpbmdXcmFwXT5kaXZbY2xhc3MqPVxcXCItaWNvblxcXCJdIGltZyxbaWRePU5vdGlmbGl4TG9hZGluZ1dyYXBdPmRpdltjbGFzcyo9XFxcIi1pY29uXFxcIl0gc3Zne21heC13aWR0aDp1bnNldDttYXgtaGVpZ2h0OnVuc2V0O3dpZHRoOjEwMCU7aGVpZ2h0OmF1dG87cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowfVtpZF49Tm90aWZsaXhMb2FkaW5nV3JhcF0+cHtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW46MTBweCBhdXRvIDA7Zm9udC1mYW1pbHk6aW5oZXJpdCFpbXBvcnRhbnQ7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZToxNXB4O2xpbmUtaGVpZ2h0OjEuNDtwYWRkaW5nOjAgMTBweDt3aWR0aDoxMDAlO3RleHQtYWxpZ246Y2VudGVyfVtpZF49Tm90aWZsaXhMb2FkaW5nV3JhcF0ubngtd2l0aC1hbmltYXRpb257LXdlYmtpdC1hbmltYXRpb246bG9hZGluZy1hbmltYXRpb24tZmFkZSAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsO2FuaW1hdGlvbjpsb2FkaW5nLWFuaW1hdGlvbi1mYWRlIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWx9QC13ZWJraXQta2V5ZnJhbWVzIGxvYWRpbmctYW5pbWF0aW9uLWZhZGV7MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGxvYWRpbmctYW5pbWF0aW9uLWZhZGV7MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1baWRePU5vdGlmbGl4TG9hZGluZ1dyYXBdLm54LXdpdGgtYW5pbWF0aW9uLm54LXJlbW92ZXtvcGFjaXR5OjA7LXdlYmtpdC1hbmltYXRpb246bG9hZGluZy1hbmltYXRpb24tZmFkZS1yZW1vdmUgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbDthbmltYXRpb246bG9hZGluZy1hbmltYXRpb24tZmFkZS1yZW1vdmUgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbH1ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZGluZy1hbmltYXRpb24tZmFkZS1yZW1vdmV7MCV7b3BhY2l0eToxfTEwMCV7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGxvYWRpbmctYW5pbWF0aW9uLWZhZGUtcmVtb3ZlezAle29wYWNpdHk6MX0xMDAle29wYWNpdHk6MH19W2lkXj1Ob3RpZmxpeExvYWRpbmdXcmFwXT5wLm54LWxvYWRpbmctbWVzc2FnZS1uZXd7LXdlYmtpdC1hbmltYXRpb246bG9hZGluZy1uZXctbWVzc2FnZS1mYWRlIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWw7YW5pbWF0aW9uOmxvYWRpbmctbmV3LW1lc3NhZ2UtZmFkZSAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsfUAtd2Via2l0LWtleWZyYW1lcyBsb2FkaW5nLW5ldy1tZXNzYWdlLWZhZGV7MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGxvYWRpbmctbmV3LW1lc3NhZ2UtZmFkZXswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fVwifSxVPWZ1bmN0aW9uKGUsaSxhLG8scil7aWYoIXcoXCJib2R5XCIpKXJldHVybiExO258fEcuTG9hZGluZy5pbml0KHt9KTt2YXIgbD12KCEwLG4se30pO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBpJiYhQXJyYXkuaXNBcnJheShpKXx8XCJvYmplY3RcIj09dHlwZW9mIGEmJiFBcnJheS5pc0FycmF5KGEpKXt2YXIgbT17fTtcIm9iamVjdFwiPT10eXBlb2YgaT9tPWk6XCJvYmplY3RcIj09dHlwZW9mIGEmJihtPWEpLG49dighMCxuLG0pfXZhciBjPVwiXCI7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGkmJjA8aS5sZW5ndGgmJihjPWkpLG8pe2M9Yy5sZW5ndGg+bi5tZXNzYWdlTWF4TGVuZ3RoP04oYykudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCxuLm1lc3NhZ2VNYXhMZW5ndGgpK1wiLi4uXCI6TihjKS50b1N0cmluZygpO3ZhciBwPVwiXCI7MDxjLmxlbmd0aCYmKHA9XCI8cCBpZD1cXFwiXCIrbi5tZXNzYWdlSUQrXCJcXFwiIGNsYXNzPVxcXCJueC1sb2FkaW5nLW1lc3NhZ2VcXFwiIHN0eWxlPVxcXCJjb2xvcjpcIituLm1lc3NhZ2VDb2xvcitcIjtmb250LXNpemU6XCIrbi5tZXNzYWdlRm9udFNpemUrXCI7XFxcIj5cIitjK1wiPC9wPlwiKSxuLmNzc0FuaW1hdGlvbnx8KG4uY3NzQW5pbWF0aW9uRHVyYXRpb249MCk7dmFyIGY9XCJcIjtpZihlPT09eC5TdGFuZGFyZClmPVcobi5zdmdTaXplLG4uc3ZnQ29sb3IpO2Vsc2UgaWYoZT09PXguSG91cmdsYXNzKWY9SShuLnN2Z1NpemUsbi5zdmdDb2xvcik7ZWxzZSBpZihlPT09eC5DaXJjbGUpZj1SKG4uc3ZnU2l6ZSxuLnN2Z0NvbG9yKTtlbHNlIGlmKGU9PT14LkFycm93cylmPUEobi5zdmdTaXplLG4uc3ZnQ29sb3IpO2Vsc2UgaWYoZT09PXguRG90cylmPU0obi5zdmdTaXplLG4uc3ZnQ29sb3IpO2Vsc2UgaWYoZT09PXguUHVsc2UpZj1CKG4uc3ZnU2l6ZSxuLnN2Z0NvbG9yKTtlbHNlIGlmKGU9PT14LkN1c3RvbSYmbnVsbCE9PW4uY3VzdG9tU3ZnQ29kZSYmbnVsbD09PW4uY3VzdG9tU3ZnVXJsKWY9bi5jdXN0b21TdmdDb2RlfHxcIlwiO2Vsc2UgaWYoZT09PXguQ3VzdG9tJiZudWxsIT09bi5jdXN0b21TdmdVcmwmJm51bGw9PT1uLmN1c3RvbVN2Z0NvZGUpZj1cIjxpbWcgY2xhc3M9XFxcIm54LWN1c3RvbS1sb2FkaW5nLWljb25cXFwiIHdpZHRoPVxcXCJcIituLnN2Z1NpemUrXCJcXFwiIGhlaWdodD1cXFwiXCIrbi5zdmdTaXplK1wiXFxcIiBzcmM9XFxcIlwiK24uY3VzdG9tU3ZnVXJsK1wiXFxcIiBhbHQ9XFxcIk5vdGlmbGl4XFxcIj5cIjtlbHNle2lmKGU9PT14LkN1c3RvbSYmKG51bGw9PT1uLmN1c3RvbVN2Z1VybHx8bnVsbD09PW4uY3VzdG9tU3ZnQ29kZSkpcmV0dXJuIHkoXCJZb3UgaGF2ZSB0byBzZXQgYSBzdGF0aWMgU1ZHIHVybCB0byBcXFwiY3VzdG9tU3ZnVXJsXFxcIiBvcHRpb24gdG8gdXNlIExvYWRpbmcgQ3VzdG9tLlwiKSwhMTtmPVgobi5zdmdTaXplLFwiI2Y4ZjhmOFwiLFwiIzMyYzY4MlwiKX12YXIgZD1wYXJzZUludCgobi5zdmdTaXplfHxcIlwiKS5yZXBsYWNlKC9bXjAtOV0vZyxcIlwiKSksYj10LmlubmVyV2lkdGgsdT1kPj1iP2ItNDArXCJweFwiOmQrXCJweFwiLGs9XCI8ZGl2IHN0eWxlPVxcXCJ3aWR0aDpcIit1K1wiOyBoZWlnaHQ6XCIrdStcIjtcXFwiIGNsYXNzPVxcXCJcIituLmNsYXNzTmFtZStcIi1pY29uXCIrKDA8Yy5sZW5ndGg/XCIgbngtd2l0aC1tZXNzYWdlXCI6XCJcIikrXCJcXFwiPlwiK2YrXCI8L2Rpdj5cIixoPXQuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpZihoLmlkPWcuSUQsaC5jbGFzc05hbWU9bi5jbGFzc05hbWUrKG4uY3NzQW5pbWF0aW9uP1wiIG54LXdpdGgtYW5pbWF0aW9uXCI6XCJcIikrKG4uY2xpY2tUb0Nsb3NlP1wiIG54LWxvYWRpbmctY2xpY2stdG8tY2xvc2VcIjpcIlwiKSxoLnN0eWxlLnpJbmRleD1uLnppbmRleCxoLnN0eWxlLmJhY2tncm91bmQ9bi5iYWNrZ3JvdW5kQ29sb3IsaC5zdHlsZS5hbmltYXRpb25EdXJhdGlvbj1uLmNzc0FuaW1hdGlvbkR1cmF0aW9uK1wibXNcIixoLnN0eWxlLmZvbnRGYW1pbHk9XCJcXFwiXCIrbi5mb250RmFtaWx5K1wiXFxcIiwgXCIrcyxoLnN0eWxlLmRpc3BsYXk9XCJmbGV4XCIsaC5zdHlsZS5mbGV4V3JhcD1cIndyYXBcIixoLnN0eWxlLmZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIixoLnN0eWxlLmFsaWduSXRlbXM9XCJjZW50ZXJcIixoLnN0eWxlLmp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIsbi5ydGwmJihoLnNldEF0dHJpYnV0ZShcImRpclwiLFwicnRsXCIpLGguY2xhc3NMaXN0LmFkZChcIm54LXJ0bC1vblwiKSksaC5pbm5lckhUTUw9aytwLCF0LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGguaWQpJiYodC5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGgpLG4uY2xpY2tUb0Nsb3NlKSl7dmFyIEM9dC5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChoLmlkKTtDLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7aC5jbGFzc0xpc3QuYWRkKFwibngtcmVtb3ZlXCIpO3ZhciB0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtudWxsIT09aC5wYXJlbnROb2RlJiYoaC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGgpLGNsZWFyVGltZW91dCh0KSl9LG4uY3NzQW5pbWF0aW9uRHVyYXRpb24pfSl9fWVsc2UgaWYodC5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChnLklEKSl2YXIgej10LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGcuSUQpLFM9c2V0VGltZW91dChmdW5jdGlvbigpe3ouY2xhc3NMaXN0LmFkZChcIm54LXJlbW92ZVwiKTt2YXIgdD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bnVsbCE9PXoucGFyZW50Tm9kZSYmKHoucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh6KSxjbGVhclRpbWVvdXQodCkpfSxuLmNzc0FuaW1hdGlvbkR1cmF0aW9uKTtjbGVhclRpbWVvdXQoUyl9LHIpO249dighMCxuLGwpfSxWPWZ1bmN0aW9uKGUpe1wic3RyaW5nXCIhPXR5cGVvZiBlJiYoZT1cIlwiKTt2YXIgaT10LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGcuSUQpO2lmKGkpaWYoMDxlLmxlbmd0aCl7ZT1lLmxlbmd0aD5uLm1lc3NhZ2VNYXhMZW5ndGg/TihlKS5zdWJzdHJpbmcoMCxuLm1lc3NhZ2VNYXhMZW5ndGgpK1wiLi4uXCI6TihlKTt2YXIgYT1pLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicFwiKVswXTtpZihhKWEuaW5uZXJIVE1MPWU7ZWxzZXt2YXIgbz10LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO28uaWQ9bi5tZXNzYWdlSUQsby5jbGFzc05hbWU9XCJueC1sb2FkaW5nLW1lc3NhZ2UgbngtbG9hZGluZy1tZXNzYWdlLW5ld1wiLG8uc3R5bGUuY29sb3I9bi5tZXNzYWdlQ29sb3Isby5zdHlsZS5mb250U2l6ZT1uLm1lc3NhZ2VGb250U2l6ZSxvLmlubmVySFRNTD1lLGkuYXBwZW5kQ2hpbGQobyl9fWVsc2UgeShcIldoZXJlIGlzIHRoZSBuZXcgbWVzc2FnZT9cIil9LHE9ZnVuY3Rpb24oKXtyZXR1cm5cIltpZF49Tm90aWZsaXhCbG9ja1dyYXBdey13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwO2ZvbnQtZmFtaWx5OlxcXCJRdWlja3NhbmRcXFwiLC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFxcXCJTZWdvZSBVSVxcXCIsUm9ib3RvLFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsQXJpYWwsc2Fucy1zZXJpZjtiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsLjkpO3RleHQtYWxpZ246Y2VudGVyO2FuaW1hdGlvbi1kdXJhdGlvbjouNHM7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtsZWZ0OjA7dG9wOjA7Ym9yZGVyLXJhZGl1czppbmhlcml0O2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1mbGV4LXdyYXA6d3JhcDstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXA7LXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsOy13ZWJraXQtYm94LWRpcmVjdGlvbjpub3JtYWw7LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy13ZWJraXQtYWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9W2lkXj1Ob3RpZmxpeEJsb2NrV3JhcF0gKnstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9W2lkXj1Ob3RpZmxpeEJsb2NrV3JhcF0+c3BhbltjbGFzcyo9XFxcIi1pY29uXFxcIl17ZGlzcGxheTpibG9jazt3aWR0aDo0NXB4O2hlaWdodDo0NXB4O3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbjowIGF1dG99W2lkXj1Ob3RpZmxpeEJsb2NrV3JhcF0+c3BhbltjbGFzcyo9XFxcIi1pY29uXFxcIl0gc3Zne3dpZHRoOmluaGVyaXQ7aGVpZ2h0OmluaGVyaXR9W2lkXj1Ob3RpZmxpeEJsb2NrV3JhcF0+c3BhbltjbGFzcyo9XFxcIi1tZXNzYWdlXFxcIl17cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO21hcmdpbjoxMHB4IGF1dG8gMDtwYWRkaW5nOjAgMTBweDtmb250LWZhbWlseTppbmhlcml0IWltcG9ydGFudDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MS40fVtpZF49Tm90aWZsaXhCbG9ja1dyYXBdLm54LXdpdGgtYW5pbWF0aW9uey13ZWJraXQtYW5pbWF0aW9uOmJsb2NrLWFuaW1hdGlvbi1mYWRlIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWw7YW5pbWF0aW9uOmJsb2NrLWFuaW1hdGlvbi1mYWRlIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWx9QC13ZWJraXQta2V5ZnJhbWVzIGJsb2NrLWFuaW1hdGlvbi1mYWRlezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBibG9jay1hbmltYXRpb24tZmFkZXswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fVtpZF49Tm90aWZsaXhCbG9ja1dyYXBdLm54LXdpdGgtYW5pbWF0aW9uLm54LXJlbW92ZXtvcGFjaXR5OjA7LXdlYmtpdC1hbmltYXRpb246YmxvY2stYW5pbWF0aW9uLWZhZGUtcmVtb3ZlIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWw7YW5pbWF0aW9uOmJsb2NrLWFuaW1hdGlvbi1mYWRlLXJlbW92ZSAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsfUAtd2Via2l0LWtleWZyYW1lcyBibG9jay1hbmltYXRpb24tZmFkZS1yZW1vdmV7MCV7b3BhY2l0eToxfTEwMCV7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGJsb2NrLWFuaW1hdGlvbi1mYWRlLXJlbW92ZXswJXtvcGFjaXR5OjF9MTAwJXtvcGFjaXR5OjB9fVwifSxRPTAsWT1mdW5jdGlvbihlLGksYSxuLHIsbCl7dmFyIG07aWYoQXJyYXkuaXNBcnJheShhKSl7aWYoMT5hLmxlbmd0aClyZXR1cm4geShcIkFycmF5IG9mIEhUTUxFbGVtZW50cyBzaG91bGQgY29udGFpbnMgYXQgbGVhc3Qgb25lIEhUTUxFbGVtZW50LlwiKSwhMTttPWF9ZWxzZSBpZihPYmplY3QucHJvdG90eXBlLmlzUHJvdG90eXBlT2YuY2FsbChOb2RlTGlzdC5wcm90b3R5cGUsYSkpe2lmKDE+YS5sZW5ndGgpcmV0dXJuIHkoXCJOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiBzaG91bGQgY29udGFpbnMgYXQgbGVhc3Qgb25lIEhUTUxFbGVtZW50LlwiKSwhMTttPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGEpfWVsc2V7dmFyIGM9XCJzdHJpbmdcIiE9dHlwZW9mIGF8fDE+KGF8fFwiXCIpLmxlbmd0aHx8MT09PShhfHxcIlwiKS5sZW5ndGgmJihcIiNcIj09PShhfHxcIlwiKVswXXx8XCIuXCI9PT0oYXx8XCJcIilbMF0pO2lmKGMpcmV0dXJuIHkoXCJUaGUgc2VsZWN0b3IgcGFyYW1ldGVyIG11c3QgYmUgYSBzdHJpbmcgYW5kIG1hdGNoZXMgYSBzcGVjaWZpZWQgQ1NTIHNlbGVjdG9yKHMpLlwiKSwhMTt2YXIgcD10LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYSk7aWYoMT5wLmxlbmd0aClyZXR1cm4geShcIllvdSBjYWxsZWQgdGhlIFxcXCJOb3RpZmxpeC5CbG9jay4uLlxcXCIgZnVuY3Rpb24gd2l0aCBcXFwiXCIrYStcIlxcXCIgc2VsZWN0b3IsIGJ1dCB0aGVyZSBpcyBubyBzdWNoIGVsZW1lbnQocykgaW4gdGhlIGRvY3VtZW50LlwiKSwhMTttPXB9b3x8Ry5CbG9jay5pbml0KHt9KTt2YXIgZj12KCEwLG8se30pO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBuJiYhQXJyYXkuaXNBcnJheShuKXx8XCJvYmplY3RcIj09dHlwZW9mIHImJiFBcnJheS5pc0FycmF5KHIpKXt2YXIgZD17fTtcIm9iamVjdFwiPT10eXBlb2Ygbj9kPW46XCJvYmplY3RcIj09dHlwZW9mIHImJihkPXIpLG89dighMCxvLGQpfXZhciB4PVwiXCI7XCJzdHJpbmdcIj09dHlwZW9mIG4mJjA8bi5sZW5ndGgmJih4PW4pLG8uY3NzQW5pbWF0aW9ufHwoby5jc3NBbmltYXRpb25EdXJhdGlvbj0wKTt2YXIgZz11LmNsYXNzTmFtZTtcInN0cmluZ1wiPT10eXBlb2Ygby5jbGFzc05hbWUmJihnPW8uY2xhc3NOYW1lLnRyaW0oKSk7dmFyIGg9XCJudW1iZXJcIj09dHlwZW9mIG8ucXVlcnlTZWxlY3RvckxpbWl0P28ucXVlcnlTZWxlY3RvckxpbWl0OjIwMCxDPShtfHxbXSkubGVuZ3RoPj1oP2g6bS5sZW5ndGgsej1cIm54LWJsb2NrLXRlbXBvcmFyeS1wb3NpdGlvblwiO2lmKGUpe2Zvcih2YXIgUyxMPVtcImFyZWFcIixcImJhc2VcIixcImJyXCIsXCJjb2xcIixcImNvbW1hbmRcIixcImVtYmVkXCIsXCJoclwiLFwiaW1nXCIsXCJpbnB1dFwiLFwia2V5Z2VuXCIsXCJsaW5rXCIsXCJtZXRhXCIsXCJwYXJhbVwiLFwic291cmNlXCIsXCJ0cmFja1wiLFwid2JyXCIsXCJodG1sXCIsXCJoZWFkXCIsXCJ0aXRsZVwiLFwic2NyaXB0XCIsXCJzdHlsZVwiLFwiaWZyYW1lXCJdLFg9MDtYPEM7WCsrKWlmKFM9bVtYXSxTKXtpZigtMTxMLmluZGV4T2YoUy50YWdOYW1lLnRvTG9jYWxlTG93ZXJDYXNlKFwiZW5cIikpKWJyZWFrO3ZhciBEPVMucXVlcnlTZWxlY3RvckFsbChcIltpZF49XCIrdS5JRCtcIl1cIik7aWYoMT5ELmxlbmd0aCl7dmFyIFQ9XCJcIjtpJiYoaT09PWIuSG91cmdsYXNzP1Q9SShvLnN2Z1NpemUsby5zdmdDb2xvcik6aT09PWIuQ2lyY2xlP1Q9UihvLnN2Z1NpemUsby5zdmdDb2xvcik6aT09PWIuQXJyb3dzP1Q9QShvLnN2Z1NpemUsby5zdmdDb2xvcik6aT09PWIuRG90cz9UPU0oby5zdmdTaXplLG8uc3ZnQ29sb3IpOmk9PT1iLlB1bHNlP1Q9QihvLnN2Z1NpemUsby5zdmdDb2xvcik6VD1XKG8uc3ZnU2l6ZSxvLnN2Z0NvbG9yKSk7dmFyIEY9XCI8c3BhbiBjbGFzcz1cXFwiXCIrZytcIi1pY29uXFxcIiBzdHlsZT1cXFwid2lkdGg6XCIrby5zdmdTaXplK1wiO2hlaWdodDpcIitvLnN2Z1NpemUrXCI7XFxcIj5cIitUK1wiPC9zcGFuPlwiLEU9XCJcIjswPHgubGVuZ3RoJiYoeD14Lmxlbmd0aD5vLm1lc3NhZ2VNYXhMZW5ndGg/Tih4KS5zdWJzdHJpbmcoMCxvLm1lc3NhZ2VNYXhMZW5ndGgpK1wiLi4uXCI6Tih4KSxFPVwiPHNwYW4gc3R5bGU9XFxcImZvbnQtc2l6ZTpcIitvLm1lc3NhZ2VGb250U2l6ZStcIjtjb2xvcjpcIitvLm1lc3NhZ2VDb2xvcitcIjtcXFwiIGNsYXNzPVxcXCJcIitnK1wiLW1lc3NhZ2VcXFwiPlwiK3grXCI8L3NwYW4+XCIpLFErKzt2YXIgaj10LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ai5pZD11LklEK1wiLVwiK1Esai5jbGFzc05hbWU9Zysoby5jc3NBbmltYXRpb24/XCIgbngtd2l0aC1hbmltYXRpb25cIjpcIlwiKSxqLnN0eWxlLnBvc2l0aW9uPW8ucG9zaXRpb24sai5zdHlsZS56SW5kZXg9by56aW5kZXgsai5zdHlsZS5iYWNrZ3JvdW5kPW8uYmFja2dyb3VuZENvbG9yLGouc3R5bGUuYW5pbWF0aW9uRHVyYXRpb249by5jc3NBbmltYXRpb25EdXJhdGlvbitcIm1zXCIsai5zdHlsZS5mb250RmFtaWx5PVwiXFxcIlwiK28uZm9udEZhbWlseStcIlxcXCIsIFwiK3Msai5zdHlsZS5kaXNwbGF5PVwiZmxleFwiLGouc3R5bGUuZmxleFdyYXA9XCJ3cmFwXCIsai5zdHlsZS5mbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIsai5zdHlsZS5hbGlnbkl0ZW1zPVwiY2VudGVyXCIsai5zdHlsZS5qdXN0aWZ5Q29udGVudD1cImNlbnRlclwiLG8ucnRsJiYoai5zZXRBdHRyaWJ1dGUoXCJkaXJcIixcInJ0bFwiKSxqLmNsYXNzTGlzdC5hZGQoXCJueC1ydGwtb25cIikpLGouaW5uZXJIVE1MPUYrRTt2YXIgTz10LmdldENvbXB1dGVkU3R5bGUoUykuZ2V0UHJvcGVydHlWYWx1ZShcInBvc2l0aW9uXCIpLEg9XCJzdHJpbmdcIj09dHlwZW9mIE8/Ty50b0xvY2FsZUxvd2VyQ2FzZShcImVuXCIpOlwicmVsYXRpdmVcIixQPU1hdGgucm91bmQoMS4yNSpwYXJzZUludChvLnN2Z1NpemUpKSs0MCxVPVMub2Zmc2V0SGVpZ2h0fHwwLFY9XCJcIjtQPlUmJihWPVwibWluLWhlaWdodDpcIitQK1wicHg7XCIpO3ZhciBxPVwiXCI7cT1TLmdldEF0dHJpYnV0ZShcImlkXCIpP1wiI1wiK1MuZ2V0QXR0cmlidXRlKFwiaWRcIik6Uy5jbGFzc0xpc3RbMF0/XCIuXCIrUy5jbGFzc0xpc3RbMF06KFMudGFnTmFtZXx8XCJcIikudG9Mb2NhbGVMb3dlckNhc2UoXCJlblwiKTt2YXIgWT1cIlwiLEs9LTE+PVtcImFic29sdXRlXCIsXCJyZWxhdGl2ZVwiLFwiZml4ZWRcIixcInN0aWNreVwiXS5pbmRleE9mKEgpO2lmKEt8fDA8Vi5sZW5ndGgpe2lmKCF3KFwiaGVhZFwiKSlyZXR1cm4hMTtLJiYoWT1cInBvc2l0aW9uOnJlbGF0aXZlIWltcG9ydGFudDtcIik7dmFyICQ9XCI8c3R5bGUgaWQ9XFxcIlN0eWxlLVwiK3UuSUQrXCItXCIrUStcIlxcXCI+XCIrcStcIi5cIit6K1wie1wiK1krVitcIn08L3N0eWxlPlwiLEo9dC5kb2N1bWVudC5jcmVhdGVSYW5nZSgpO0ouc2VsZWN0Tm9kZSh0LmRvY3VtZW50LmhlYWQpO3ZhciBaPUouY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KCQpO3QuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChaKSxTLmNsYXNzTGlzdC5hZGQoeil9Uy5hcHBlbmRDaGlsZChqKX19fWVsc2UgdmFyIF89ZnVuY3Rpb24oZSl7dmFyIGk9c2V0VGltZW91dChmdW5jdGlvbigpe251bGwhPT1lLnBhcmVudE5vZGUmJmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKTt2YXIgYT1lLmdldEF0dHJpYnV0ZShcImlkXCIpLG49dC5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlN0eWxlLVwiK2EpO24mJm51bGwhPT1uLnBhcmVudE5vZGUmJm4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuKSxjbGVhclRpbWVvdXQoaSl9LG8uY3NzQW5pbWF0aW9uRHVyYXRpb24pfSx0dD1mdW5jdGlvbih0KXtpZih0JiYwPHQubGVuZ3RoKWZvcih2YXIgZSxuPTA7bjx0Lmxlbmd0aDtuKyspZT10W25dLGUmJihlLmNsYXNzTGlzdC5hZGQoXCJueC1yZW1vdmVcIiksXyhlKSk7ZWxzZVwic3RyaW5nXCI9PXR5cGVvZiBhP2soXCJcXFwiTm90aWZsaXguQmxvY2sucmVtb3ZlKCk7XFxcIiBmdW5jdGlvbiBjYWxsZWQgd2l0aCBcXFwiXCIrYStcIlxcXCIgc2VsZWN0b3IsIGJ1dCB0aGlzIHNlbGVjdG9yIGRvZXMgbm90IGhhdmUgYSBcXFwiQmxvY2tcXFwiIGVsZW1lbnQgdG8gcmVtb3ZlLlwiKTprKFwiXFxcIk5vdGlmbGl4LkJsb2NrLnJlbW92ZSgpO1xcXCIgZnVuY3Rpb24gY2FsbGVkIHdpdGggXFxcIlwiK2ErXCJcXFwiLCBidXQgdGhpcyBcXFwiQXJyYXk8SFRNTEVsZW1lbnQ+XFxcIiBvciBcXFwiTm9kZUxpc3RPZjxIVE1MRWxlbWVudD5cXFwiIGRvZXMgbm90IGhhdmUgYSBcXFwiQmxvY2tcXFwiIGVsZW1lbnQgdG8gcmVtb3ZlLlwiKX0sZXQ9ZnVuY3Rpb24odCl7dmFyIGU9c2V0VGltZW91dChmdW5jdGlvbigpe3QuY2xhc3NMaXN0LnJlbW92ZSh6KSxjbGVhclRpbWVvdXQoZSl9LG8uY3NzQW5pbWF0aW9uRHVyYXRpb24rMzAwKX0saXQ9c2V0VGltZW91dChmdW5jdGlvbigpe2Zvcih2YXIgdCxlPTA7ZTxDO2UrKyl0PW1bZV0sdCYmKGV0KHQpLEQ9dC5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkXj1cIit1LklEK1wiXVwiKSx0dChEKSk7Y2xlYXJUaW1lb3V0KGl0KX0sbCk7bz12KCEwLG8sZil9LEc9e05vdGlmeTp7aW5pdDpmdW5jdGlvbih0KXtlPXYoITAsbSx0KSxoKEQsXCJOb3RpZmxpeE5vdGlmeUludGVybmFsQ1NTXCIpfSxtZXJnZTpmdW5jdGlvbih0KXtyZXR1cm4gZT92b2lkKGU9dighMCxlLHQpKTooeShcIllvdSBoYXZlIHRvIGluaXRpYWxpemUgdGhlIE5vdGlmeSBtb2R1bGUgYmVmb3JlIGNhbGwgTWVyZ2UgZnVuY3Rpb24uXCIpLCExKX0sc3VjY2VzczpmdW5jdGlvbih0LGUsaSl7RihsLlN1Y2Nlc3MsdCxlLGkpfSxmYWlsdXJlOmZ1bmN0aW9uKHQsZSxpKXtGKGwuRmFpbHVyZSx0LGUsaSl9LHdhcm5pbmc6ZnVuY3Rpb24odCxlLGkpe0YobC5XYXJuaW5nLHQsZSxpKX0saW5mbzpmdW5jdGlvbih0LGUsaSl7RihsLkluZm8sdCxlLGkpfX0sUmVwb3J0Ontpbml0OmZ1bmN0aW9uKHQpe2k9dighMCxwLHQpLGgoRSxcIk5vdGlmbGl4UmVwb3J0SW50ZXJuYWxDU1NcIil9LG1lcmdlOmZ1bmN0aW9uKHQpe3JldHVybiBpP3ZvaWQoaT12KCEwLGksdCkpOih5KFwiWW91IGhhdmUgdG8gaW5pdGlhbGl6ZSB0aGUgUmVwb3J0IG1vZHVsZSBiZWZvcmUgY2FsbCBNZXJnZSBmdW5jdGlvbi5cIiksITEpfSxzdWNjZXNzOmZ1bmN0aW9uKHQsZSxpLGEsbil7aihjLlN1Y2Nlc3MsdCxlLGksYSxuKX0sZmFpbHVyZTpmdW5jdGlvbih0LGUsaSxhLG4pe2ooYy5GYWlsdXJlLHQsZSxpLGEsbil9LHdhcm5pbmc6ZnVuY3Rpb24odCxlLGksYSxuKXtqKGMuV2FybmluZyx0LGUsaSxhLG4pfSxpbmZvOmZ1bmN0aW9uKHQsZSxpLGEsbil7aihjLkluZm8sdCxlLGksYSxuKX19LENvbmZpcm06e2luaXQ6ZnVuY3Rpb24odCl7YT12KCEwLGQsdCksaChPLFwiTm90aWZsaXhDb25maXJtSW50ZXJuYWxDU1NcIil9LG1lcmdlOmZ1bmN0aW9uKHQpe3JldHVybiBhP3ZvaWQoYT12KCEwLGEsdCkpOih5KFwiWW91IGhhdmUgdG8gaW5pdGlhbGl6ZSB0aGUgQ29uZmlybSBtb2R1bGUgYmVmb3JlIGNhbGwgTWVyZ2UgZnVuY3Rpb24uXCIpLCExKX0sc2hvdzpmdW5jdGlvbih0LGUsaSxhLG4sbyxyKXtIKGYuU2hvdyx0LGUsbnVsbCxpLGEsbixvLHIpfSxhc2s6ZnVuY3Rpb24odCxlLGksYSxuLG8scixzKXtIKGYuQXNrLHQsZSxpLGEsbixvLHIscyl9LHByb21wdDpmdW5jdGlvbih0LGUsaSxhLG4sbyxyLHMpe0goZi5Qcm9tcHQsdCxlLGksYSxuLG8scixzKX19LExvYWRpbmc6e2luaXQ6ZnVuY3Rpb24odCl7bj12KCEwLGcsdCksaChQLFwiTm90aWZsaXhMb2FkaW5nSW50ZXJuYWxDU1NcIil9LG1lcmdlOmZ1bmN0aW9uKHQpe3JldHVybiBuP3ZvaWQobj12KCEwLG4sdCkpOih5KFwiWW91IGhhdmUgdG8gaW5pdGlhbGl6ZSB0aGUgTG9hZGluZyBtb2R1bGUgYmVmb3JlIGNhbGwgTWVyZ2UgZnVuY3Rpb24uXCIpLCExKX0sc3RhbmRhcmQ6ZnVuY3Rpb24odCxlKXtVKHguU3RhbmRhcmQsdCxlLCEwLDApfSxob3VyZ2xhc3M6ZnVuY3Rpb24odCxlKXtVKHguSG91cmdsYXNzLHQsZSwhMCwwKX0sY2lyY2xlOmZ1bmN0aW9uKHQsZSl7VSh4LkNpcmNsZSx0LGUsITAsMCl9LGFycm93czpmdW5jdGlvbih0LGUpe1UoeC5BcnJvd3MsdCxlLCEwLDApfSxkb3RzOmZ1bmN0aW9uKHQsZSl7VSh4LkRvdHMsdCxlLCEwLDApfSxwdWxzZTpmdW5jdGlvbih0LGUpe1UoeC5QdWxzZSx0LGUsITAsMCl9LGN1c3RvbTpmdW5jdGlvbih0LGUpe1UoeC5DdXN0b20sdCxlLCEwLDApfSxub3RpZmxpeDpmdW5jdGlvbih0LGUpe1UoeC5Ob3RpZmxpeCx0LGUsITAsMCl9LHJlbW92ZTpmdW5jdGlvbih0KXtcIm51bWJlclwiIT10eXBlb2YgdCYmKHQ9MCksVShudWxsLG51bGwsbnVsbCwhMSx0KX0sY2hhbmdlOmZ1bmN0aW9uKHQpe1YodCl9fSxCbG9jazp7aW5pdDpmdW5jdGlvbih0KXtvPXYoITAsdSx0KSxoKHEsXCJOb3RpZmxpeEJsb2NrSW50ZXJuYWxDU1NcIil9LG1lcmdlOmZ1bmN0aW9uKHQpe3JldHVybiBvP3ZvaWQobz12KCEwLG8sdCkpOih5KFwiWW91IGhhdmUgdG8gaW5pdGlhbGl6ZSB0aGUgXFxcIk5vdGlmbGl4LkJsb2NrXFxcIiBtb2R1bGUgYmVmb3JlIGNhbGwgTWVyZ2UgZnVuY3Rpb24uXCIpLCExKX0sc3RhbmRhcmQ6ZnVuY3Rpb24odCxlLGkpe1koITAsYi5TdGFuZGFyZCx0LGUsaSl9LGhvdXJnbGFzczpmdW5jdGlvbih0LGUsaSl7WSghMCxiLkhvdXJnbGFzcyx0LGUsaSl9LGNpcmNsZTpmdW5jdGlvbih0LGUsaSl7WSghMCxiLkNpcmNsZSx0LGUsaSl9LGFycm93czpmdW5jdGlvbih0LGUsaSl7WSghMCxiLkFycm93cyx0LGUsaSl9LGRvdHM6ZnVuY3Rpb24odCxlLGkpe1koITAsYi5Eb3RzLHQsZSxpKX0scHVsc2U6ZnVuY3Rpb24odCxlLGkpe1koITAsYi5QdWxzZSx0LGUsaSl9LHJlbW92ZTpmdW5jdGlvbih0LGUpe1wibnVtYmVyXCIhPXR5cGVvZiBlJiYoZT0wKSxZKCExLG51bGwsdCxudWxsLG51bGwsZSl9fX07cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIHQuTm90aWZsaXg/dighMCx0Lk5vdGlmbGl4LHtOb3RpZnk6Ry5Ob3RpZnksUmVwb3J0OkcuUmVwb3J0LENvbmZpcm06Ry5Db25maXJtLExvYWRpbmc6Ry5Mb2FkaW5nLEJsb2NrOkcuQmxvY2t9KTp7Tm90aWZ5OkcuTm90aWZ5LFJlcG9ydDpHLlJlcG9ydCxDb25maXJtOkcuQ29uZmlybSxMb2FkaW5nOkcuTG9hZGluZyxCbG9jazpHLkJsb2NrfX0pOyIsImltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgaHR0cEFkYXB0ZXIgZnJvbSAnLi9odHRwLmpzJztcbmltcG9ydCB4aHJBZGFwdGVyIGZyb20gJy4veGhyLmpzJztcbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gXCIuLi9jb3JlL0F4aW9zRXJyb3IuanNcIjtcblxuY29uc3Qga25vd25BZGFwdGVycyA9IHtcbiAgaHR0cDogaHR0cEFkYXB0ZXIsXG4gIHhocjogeGhyQWRhcHRlclxufVxuXG51dGlscy5mb3JFYWNoKGtub3duQWRhcHRlcnMsIChmbiwgdmFsdWUpID0+IHtcbiAgaWYgKGZuKSB7XG4gICAgdHJ5IHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgJ25hbWUnLCB7dmFsdWV9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCAnYWRhcHRlck5hbWUnLCB7dmFsdWV9KTtcbiAgfVxufSk7XG5cbmNvbnN0IHJlbmRlclJlYXNvbiA9IChyZWFzb24pID0+IGAtICR7cmVhc29ufWA7XG5cbmNvbnN0IGlzUmVzb2x2ZWRIYW5kbGUgPSAoYWRhcHRlcikgPT4gdXRpbHMuaXNGdW5jdGlvbihhZGFwdGVyKSB8fCBhZGFwdGVyID09PSBudWxsIHx8IGFkYXB0ZXIgPT09IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldEFkYXB0ZXI6IChhZGFwdGVycykgPT4ge1xuICAgIGFkYXB0ZXJzID0gdXRpbHMuaXNBcnJheShhZGFwdGVycykgPyBhZGFwdGVycyA6IFthZGFwdGVyc107XG5cbiAgICBjb25zdCB7bGVuZ3RofSA9IGFkYXB0ZXJzO1xuICAgIGxldCBuYW1lT3JBZGFwdGVyO1xuICAgIGxldCBhZGFwdGVyO1xuXG4gICAgY29uc3QgcmVqZWN0ZWRSZWFzb25zID0ge307XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBuYW1lT3JBZGFwdGVyID0gYWRhcHRlcnNbaV07XG4gICAgICBsZXQgaWQ7XG5cbiAgICAgIGFkYXB0ZXIgPSBuYW1lT3JBZGFwdGVyO1xuXG4gICAgICBpZiAoIWlzUmVzb2x2ZWRIYW5kbGUobmFtZU9yQWRhcHRlcikpIHtcbiAgICAgICAgYWRhcHRlciA9IGtub3duQWRhcHRlcnNbKGlkID0gU3RyaW5nKG5hbWVPckFkYXB0ZXIpKS50b0xvd2VyQ2FzZSgpXTtcblxuICAgICAgICBpZiAoYWRhcHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoYFVua25vd24gYWRhcHRlciAnJHtpZH0nYCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGFkYXB0ZXIpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJlamVjdGVkUmVhc29uc1tpZCB8fCAnIycgKyBpXSA9IGFkYXB0ZXI7XG4gICAgfVxuXG4gICAgaWYgKCFhZGFwdGVyKSB7XG5cbiAgICAgIGNvbnN0IHJlYXNvbnMgPSBPYmplY3QuZW50cmllcyhyZWplY3RlZFJlYXNvbnMpXG4gICAgICAgIC5tYXAoKFtpZCwgc3RhdGVdKSA9PiBgYWRhcHRlciAke2lkfSBgICtcbiAgICAgICAgICAoc3RhdGUgPT09IGZhbHNlID8gJ2lzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGVudmlyb25tZW50JyA6ICdpcyBub3QgYXZhaWxhYmxlIGluIHRoZSBidWlsZCcpXG4gICAgICAgICk7XG5cbiAgICAgIGxldCBzID0gbGVuZ3RoID9cbiAgICAgICAgKHJlYXNvbnMubGVuZ3RoID4gMSA/ICdzaW5jZSA6XFxuJyArIHJlYXNvbnMubWFwKHJlbmRlclJlYXNvbikuam9pbignXFxuJykgOiAnICcgKyByZW5kZXJSZWFzb24ocmVhc29uc1swXSkpIDpcbiAgICAgICAgJ2FzIG5vIGFkYXB0ZXIgc3BlY2lmaWVkJztcblxuICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoXG4gICAgICAgIGBUaGVyZSBpcyBubyBzdWl0YWJsZSBhZGFwdGVyIHRvIGRpc3BhdGNoIHRoZSByZXF1ZXN0IGAgKyBzLFxuICAgICAgICAnRVJSX05PVF9TVVBQT1JUJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRhcHRlcjtcbiAgfSxcbiAgYWRhcHRlcnM6IGtub3duQWRhcHRlcnNcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuaW1wb3J0IHNldHRsZSBmcm9tICcuLy4uL2NvcmUvc2V0dGxlLmpzJztcbmltcG9ydCBjb29raWVzIGZyb20gJy4vLi4vaGVscGVycy9jb29raWVzLmpzJztcbmltcG9ydCBidWlsZFVSTCBmcm9tICcuLy4uL2hlbHBlcnMvYnVpbGRVUkwuanMnO1xuaW1wb3J0IGJ1aWxkRnVsbFBhdGggZnJvbSAnLi4vY29yZS9idWlsZEZ1bGxQYXRoLmpzJztcbmltcG9ydCBpc1VSTFNhbWVPcmlnaW4gZnJvbSAnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyc7XG5pbXBvcnQgdHJhbnNpdGlvbmFsRGVmYXVsdHMgZnJvbSAnLi4vZGVmYXVsdHMvdHJhbnNpdGlvbmFsLmpzJztcbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4uL2NvcmUvQXhpb3NFcnJvci5qcyc7XG5pbXBvcnQgQ2FuY2VsZWRFcnJvciBmcm9tICcuLi9jYW5jZWwvQ2FuY2VsZWRFcnJvci5qcyc7XG5pbXBvcnQgcGFyc2VQcm90b2NvbCBmcm9tICcuLi9oZWxwZXJzL3BhcnNlUHJvdG9jb2wuanMnO1xuaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4uL3BsYXRmb3JtL2luZGV4LmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSAnLi4vY29yZS9BeGlvc0hlYWRlcnMuanMnO1xuaW1wb3J0IHNwZWVkb21ldGVyIGZyb20gJy4uL2hlbHBlcnMvc3BlZWRvbWV0ZXIuanMnO1xuXG5mdW5jdGlvbiBwcm9ncmVzc0V2ZW50UmVkdWNlcihsaXN0ZW5lciwgaXNEb3dubG9hZFN0cmVhbSkge1xuICBsZXQgYnl0ZXNOb3RpZmllZCA9IDA7XG4gIGNvbnN0IF9zcGVlZG9tZXRlciA9IHNwZWVkb21ldGVyKDUwLCAyNTApO1xuXG4gIHJldHVybiBlID0+IHtcbiAgICBjb25zdCBsb2FkZWQgPSBlLmxvYWRlZDtcbiAgICBjb25zdCB0b3RhbCA9IGUubGVuZ3RoQ29tcHV0YWJsZSA/IGUudG90YWwgOiB1bmRlZmluZWQ7XG4gICAgY29uc3QgcHJvZ3Jlc3NCeXRlcyA9IGxvYWRlZCAtIGJ5dGVzTm90aWZpZWQ7XG4gICAgY29uc3QgcmF0ZSA9IF9zcGVlZG9tZXRlcihwcm9ncmVzc0J5dGVzKTtcbiAgICBjb25zdCBpblJhbmdlID0gbG9hZGVkIDw9IHRvdGFsO1xuXG4gICAgYnl0ZXNOb3RpZmllZCA9IGxvYWRlZDtcblxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBsb2FkZWQsXG4gICAgICB0b3RhbCxcbiAgICAgIHByb2dyZXNzOiB0b3RhbCA/IChsb2FkZWQgLyB0b3RhbCkgOiB1bmRlZmluZWQsXG4gICAgICBieXRlczogcHJvZ3Jlc3NCeXRlcyxcbiAgICAgIHJhdGU6IHJhdGUgPyByYXRlIDogdW5kZWZpbmVkLFxuICAgICAgZXN0aW1hdGVkOiByYXRlICYmIHRvdGFsICYmIGluUmFuZ2UgPyAodG90YWwgLSBsb2FkZWQpIC8gcmF0ZSA6IHVuZGVmaW5lZCxcbiAgICAgIGV2ZW50OiBlXG4gICAgfTtcblxuICAgIGRhdGFbaXNEb3dubG9hZFN0cmVhbSA/ICdkb3dubG9hZCcgOiAndXBsb2FkJ10gPSB0cnVlO1xuXG4gICAgbGlzdGVuZXIoZGF0YSk7XG4gIH07XG59XG5cbmNvbnN0IGlzWEhSQWRhcHRlclN1cHBvcnRlZCA9IHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGlzWEhSQWRhcHRlclN1cHBvcnRlZCAmJiBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgbGV0IHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgY29uc3QgcmVxdWVzdEhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuZnJvbShjb25maWcuaGVhZGVycykubm9ybWFsaXplKCk7XG4gICAgbGV0IHtyZXNwb25zZVR5cGUsIHdpdGhYU1JGVG9rZW59ID0gY29uZmlnO1xuICAgIGxldCBvbkNhbmNlbGVkO1xuICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi51bnN1YnNjcmliZShvbkNhbmNlbGVkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5zaWduYWwpIHtcbiAgICAgICAgY29uZmlnLnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uQ2FuY2VsZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBjb250ZW50VHlwZTtcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgaWYgKHBsYXRmb3JtLmhhc1N0YW5kYXJkQnJvd3NlckVudiB8fCBwbGF0Zm9ybS5oYXNTdGFuZGFyZEJyb3dzZXJXZWJXb3JrZXJFbnYpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnMuc2V0Q29udGVudFR5cGUoZmFsc2UpOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgICB9IGVsc2UgaWYgKChjb250ZW50VHlwZSA9IHJlcXVlc3RIZWFkZXJzLmdldENvbnRlbnRUeXBlKCkpICE9PSBmYWxzZSkge1xuICAgICAgICAvLyBmaXggc2VtaWNvbG9uIGR1cGxpY2F0aW9uIGlzc3VlIGZvciBSZWFjdE5hdGl2ZSBGb3JtRGF0YSBpbXBsZW1lbnRhdGlvblxuICAgICAgICBjb25zdCBbdHlwZSwgLi4udG9rZW5zXSA9IGNvbnRlbnRUeXBlID8gY29udGVudFR5cGUuc3BsaXQoJzsnKS5tYXAodG9rZW4gPT4gdG9rZW4udHJpbSgpKS5maWx0ZXIoQm9vbGVhbikgOiBbXTtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnMuc2V0Q29udGVudFR5cGUoW3R5cGUgfHwgJ211bHRpcGFydC9mb3JtLWRhdGEnLCAuLi50b2tlbnNdLmpvaW4oJzsgJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICBjb25zdCB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgY29uc3QgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCA/IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChjb25maWcuYXV0aC5wYXNzd29yZCkpIDogJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCkpO1xuICAgIH1cblxuICAgIGNvbnN0IGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChmdWxsUGF0aCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICBmdW5jdGlvbiBvbmxvYWRlbmQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIGNvbnN0IHJlc3BvbnNlSGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKFxuICAgICAgICAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ICYmIHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKClcbiAgICAgICk7XG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSAhcmVzcG9uc2VUeXBlIHx8IHJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnIHx8IHJlc3BvbnNlVHlwZSA9PT0gJ2pzb24nID9cbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKGZ1bmN0aW9uIF9yZXNvbHZlKHZhbHVlKSB7XG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICBkb25lKCk7XG4gICAgICB9LCBmdW5jdGlvbiBfcmVqZWN0KGVycikge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfSwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoJ29ubG9hZGVuZCcgaW4gcmVxdWVzdCkge1xuICAgICAgLy8gVXNlIG9ubG9hZGVuZCBpZiBhdmFpbGFibGVcbiAgICAgIHJlcXVlc3Qub25sb2FkZW5kID0gb25sb2FkZW5kO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlIHRvIGVtdWxhdGUgb25sb2FkZW5kXG4gICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVhZHlzdGF0ZSBoYW5kbGVyIGlzIGNhbGxpbmcgYmVmb3JlIG9uZXJyb3Igb3Igb250aW1lb3V0IGhhbmRsZXJzLFxuICAgICAgICAvLyBzbyB3ZSBzaG91bGQgY2FsbCBvbmxvYWRlbmQgb24gdGhlIG5leHQgJ3RpY2snXG4gICAgICAgIHNldFRpbWVvdXQob25sb2FkZW5kKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGJyb3dzZXIgcmVxdWVzdCBjYW5jZWxsYXRpb24gKGFzIG9wcG9zZWQgdG8gYSBtYW51YWwgY2FuY2VsbGF0aW9uKVxuICAgIHJlcXVlc3Qub25hYm9ydCA9IGZ1bmN0aW9uIGhhbmRsZUFib3J0KCkge1xuICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVqZWN0KG5ldyBBeGlvc0Vycm9yKCdSZXF1ZXN0IGFib3J0ZWQnLCBBeGlvc0Vycm9yLkVDT05OQUJPUlRFRCwgY29uZmlnLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KG5ldyBBeGlvc0Vycm9yKCdOZXR3b3JrIEVycm9yJywgQXhpb3NFcnJvci5FUlJfTkVUV09SSywgY29uZmlnLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIGxldCB0aW1lb3V0RXJyb3JNZXNzYWdlID0gY29uZmlnLnRpbWVvdXQgPyAndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnIDogJ3RpbWVvdXQgZXhjZWVkZWQnO1xuICAgICAgY29uc3QgdHJhbnNpdGlvbmFsID0gY29uZmlnLnRyYW5zaXRpb25hbCB8fCB0cmFuc2l0aW9uYWxEZWZhdWx0cztcbiAgICAgIGlmIChjb25maWcudGltZW91dEVycm9yTWVzc2FnZSkge1xuICAgICAgICB0aW1lb3V0RXJyb3JNZXNzYWdlID0gY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2U7XG4gICAgICB9XG4gICAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoXG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIHRyYW5zaXRpb25hbC5jbGFyaWZ5VGltZW91dEVycm9yID8gQXhpb3NFcnJvci5FVElNRURPVVQgOiBBeGlvc0Vycm9yLkVDT05OQUJPUlRFRCxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmKHBsYXRmb3JtLmhhc1N0YW5kYXJkQnJvd3NlckVudikge1xuICAgICAgd2l0aFhTUkZUb2tlbiAmJiB1dGlscy5pc0Z1bmN0aW9uKHdpdGhYU1JGVG9rZW4pICYmICh3aXRoWFNSRlRva2VuID0gd2l0aFhTUkZUb2tlbihjb25maWcpKTtcblxuICAgICAgaWYgKHdpdGhYU1JGVG9rZW4gfHwgKHdpdGhYU1JGVG9rZW4gIT09IGZhbHNlICYmIGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpKSB7XG4gICAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgICBjb25zdCB4c3JmVmFsdWUgPSBjb25maWcueHNyZkhlYWRlck5hbWUgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lICYmIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpO1xuXG4gICAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgICByZXF1ZXN0SGVhZGVycy5zZXQoY29uZmlnLnhzcmZIZWFkZXJOYW1lLCB4c3JmVmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgIHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQgJiYgcmVxdWVzdEhlYWRlcnMuc2V0Q29udGVudFR5cGUobnVsbCk7XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycy50b0pTT04oKSwgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnLndpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gISFjb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAocmVzcG9uc2VUeXBlICYmIHJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIHByb2dyZXNzRXZlbnRSZWR1Y2VyKGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MsIHRydWUpKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgcHJvZ3Jlc3NFdmVudFJlZHVjZXIoY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuIHx8IGNvbmZpZy5zaWduYWwpIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgICBvbkNhbmNlbGVkID0gY2FuY2VsID0+IHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlamVjdCghY2FuY2VsIHx8IGNhbmNlbC50eXBlID8gbmV3IENhbmNlbGVkRXJyb3IobnVsbCwgY29uZmlnLCByZXF1ZXN0KSA6IGNhbmNlbCk7XG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9O1xuXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4gJiYgY29uZmlnLmNhbmNlbFRva2VuLnN1YnNjcmliZShvbkNhbmNlbGVkKTtcbiAgICAgIGlmIChjb25maWcuc2lnbmFsKSB7XG4gICAgICAgIGNvbmZpZy5zaWduYWwuYWJvcnRlZCA/IG9uQ2FuY2VsZWQoKSA6IGNvbmZpZy5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBvbkNhbmNlbGVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwcm90b2NvbCA9IHBhcnNlUHJvdG9jb2woZnVsbFBhdGgpO1xuXG4gICAgaWYgKHByb3RvY29sICYmIHBsYXRmb3JtLnByb3RvY29scy5pbmRleE9mKHByb3RvY29sKSA9PT0gLTEpIHtcbiAgICAgIHJlamVjdChuZXcgQXhpb3NFcnJvcignVW5zdXBwb3J0ZWQgcHJvdG9jb2wgJyArIHByb3RvY29sICsgJzonLCBBeGlvc0Vycm9yLkVSUl9CQURfUkVRVUVTVCwgY29uZmlnKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhIHx8IG51bGwpO1xuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IGJpbmQgZnJvbSAnLi9oZWxwZXJzL2JpbmQuanMnO1xuaW1wb3J0IEF4aW9zIGZyb20gJy4vY29yZS9BeGlvcy5qcyc7XG5pbXBvcnQgbWVyZ2VDb25maWcgZnJvbSAnLi9jb3JlL21lcmdlQ29uZmlnLmpzJztcbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuL2RlZmF1bHRzL2luZGV4LmpzJztcbmltcG9ydCBmb3JtRGF0YVRvSlNPTiBmcm9tICcuL2hlbHBlcnMvZm9ybURhdGFUb0pTT04uanMnO1xuaW1wb3J0IENhbmNlbGVkRXJyb3IgZnJvbSAnLi9jYW5jZWwvQ2FuY2VsZWRFcnJvci5qcyc7XG5pbXBvcnQgQ2FuY2VsVG9rZW4gZnJvbSAnLi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMnO1xuaW1wb3J0IGlzQ2FuY2VsIGZyb20gJy4vY2FuY2VsL2lzQ2FuY2VsLmpzJztcbmltcG9ydCB7VkVSU0lPTn0gZnJvbSAnLi9lbnYvZGF0YS5qcyc7XG5pbXBvcnQgdG9Gb3JtRGF0YSBmcm9tICcuL2hlbHBlcnMvdG9Gb3JtRGF0YS5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuL2NvcmUvQXhpb3NFcnJvci5qcyc7XG5pbXBvcnQgc3ByZWFkIGZyb20gJy4vaGVscGVycy9zcHJlYWQuanMnO1xuaW1wb3J0IGlzQXhpb3NFcnJvciBmcm9tICcuL2hlbHBlcnMvaXNBeGlvc0Vycm9yLmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSBcIi4vY29yZS9BeGlvc0hlYWRlcnMuanNcIjtcbmltcG9ydCBhZGFwdGVycyBmcm9tICcuL2FkYXB0ZXJzL2FkYXB0ZXJzLmpzJztcbmltcG9ydCBIdHRwU3RhdHVzQ29kZSBmcm9tICcuL2hlbHBlcnMvSHR0cFN0YXR1c0NvZGUuanMnO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKlxuICogQHJldHVybnMge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIGNvbnN0IGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIGNvbnN0IGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQsIHthbGxPd25LZXlzOiB0cnVlfSk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCwgbnVsbCwge2FsbE93bktleXM6IHRydWV9KTtcblxuICAvLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG4gIGluc3RhbmNlLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICAgIHJldHVybiBjcmVhdGVJbnN0YW5jZShtZXJnZUNvbmZpZyhkZWZhdWx0Q29uZmlnLCBpbnN0YW5jZUNvbmZpZykpO1xuICB9O1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG5jb25zdCBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbGVkRXJyb3IgPSBDYW5jZWxlZEVycm9yO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSBDYW5jZWxUb2tlbjtcbmF4aW9zLmlzQ2FuY2VsID0gaXNDYW5jZWw7XG5heGlvcy5WRVJTSU9OID0gVkVSU0lPTjtcbmF4aW9zLnRvRm9ybURhdGEgPSB0b0Zvcm1EYXRhO1xuXG4vLyBFeHBvc2UgQXhpb3NFcnJvciBjbGFzc1xuYXhpb3MuQXhpb3NFcnJvciA9IEF4aW9zRXJyb3I7XG5cbi8vIGFsaWFzIGZvciBDYW5jZWxlZEVycm9yIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG5heGlvcy5DYW5jZWwgPSBheGlvcy5DYW5jZWxlZEVycm9yO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuXG5heGlvcy5zcHJlYWQgPSBzcHJlYWQ7XG5cbi8vIEV4cG9zZSBpc0F4aW9zRXJyb3JcbmF4aW9zLmlzQXhpb3NFcnJvciA9IGlzQXhpb3NFcnJvcjtcblxuLy8gRXhwb3NlIG1lcmdlQ29uZmlnXG5heGlvcy5tZXJnZUNvbmZpZyA9IG1lcmdlQ29uZmlnO1xuXG5heGlvcy5BeGlvc0hlYWRlcnMgPSBBeGlvc0hlYWRlcnM7XG5cbmF4aW9zLmZvcm1Ub0pTT04gPSB0aGluZyA9PiBmb3JtRGF0YVRvSlNPTih1dGlscy5pc0hUTUxGb3JtKHRoaW5nKSA/IG5ldyBGb3JtRGF0YSh0aGluZykgOiB0aGluZyk7XG5cbmF4aW9zLmdldEFkYXB0ZXIgPSBhZGFwdGVycy5nZXRBZGFwdGVyO1xuXG5heGlvcy5IdHRwU3RhdHVzQ29kZSA9IEh0dHBTdGF0dXNDb2RlO1xuXG5heGlvcy5kZWZhdWx0ID0gYXhpb3M7XG5cbi8vIHRoaXMgbW9kdWxlIHNob3VsZCBvbmx5IGhhdmUgYSBkZWZhdWx0IGV4cG9ydFxuZXhwb3J0IGRlZmF1bHQgYXhpb3NcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IENhbmNlbGVkRXJyb3IgZnJvbSAnLi9DYW5jZWxlZEVycm9yLmpzJztcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqXG4gKiBAcmV0dXJucyB7Q2FuY2VsVG9rZW59XG4gKi9cbmNsYXNzIENhbmNlbFRva2VuIHtcbiAgY29uc3RydWN0b3IoZXhlY3V0b3IpIHtcbiAgICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgbGV0IHJlc29sdmVQcm9taXNlO1xuXG4gICAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRva2VuID0gdGhpcztcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgdGhpcy5wcm9taXNlLnRoZW4oY2FuY2VsID0+IHtcbiAgICAgIGlmICghdG9rZW4uX2xpc3RlbmVycykgcmV0dXJuO1xuXG4gICAgICBsZXQgaSA9IHRva2VuLl9saXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAoaS0tID4gMCkge1xuICAgICAgICB0b2tlbi5fbGlzdGVuZXJzW2ldKGNhbmNlbCk7XG4gICAgICB9XG4gICAgICB0b2tlbi5fbGlzdGVuZXJzID0gbnVsbDtcbiAgICB9KTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgdGhpcy5wcm9taXNlLnRoZW4gPSBvbmZ1bGZpbGxlZCA9PiB7XG4gICAgICBsZXQgX3Jlc29sdmU7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICB0b2tlbi5zdWJzY3JpYmUocmVzb2x2ZSk7XG4gICAgICAgIF9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIH0pLnRoZW4ob25mdWxmaWxsZWQpO1xuXG4gICAgICBwcm9taXNlLmNhbmNlbCA9IGZ1bmN0aW9uIHJlamVjdCgpIHtcbiAgICAgICAgdG9rZW4udW5zdWJzY3JpYmUoX3Jlc29sdmUpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlLCBjb25maWcsIHJlcXVlc3QpIHtcbiAgICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbGVkRXJyb3IobWVzc2FnZSwgY29uZmlnLCByZXF1ZXN0KTtcbiAgICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVGhyb3dzIGEgYENhbmNlbGVkRXJyb3JgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gICAqL1xuICB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICAgIGlmICh0aGlzLnJlYXNvbikge1xuICAgICAgdGhyb3cgdGhpcy5yZWFzb247XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byB0aGUgY2FuY2VsIHNpZ25hbFxuICAgKi9cblxuICBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICAgIGxpc3RlbmVyKHRoaXMucmVhc29uKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVycyA9IFtsaXN0ZW5lcl07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVuc3Vic2NyaWJlIGZyb20gdGhlIGNhbmNlbCBzaWduYWxcbiAgICovXG5cbiAgdW5zdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICBpZiAoIXRoaXMuX2xpc3RlbmVycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuX2xpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICAgKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICAgKi9cbiAgc3RhdGljIHNvdXJjZSgpIHtcbiAgICBsZXQgY2FuY2VsO1xuICAgIGNvbnN0IHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICAgIGNhbmNlbCA9IGM7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRva2VuLFxuICAgICAgY2FuY2VsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW5jZWxUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbi8qKlxuICogQSBgQ2FuY2VsZWRFcnJvcmAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0PX0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge09iamVjdD19IHJlcXVlc3QgVGhlIHJlcXVlc3QuXG4gKlxuICogQHJldHVybnMge0NhbmNlbGVkRXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5mdW5jdGlvbiBDYW5jZWxlZEVycm9yKG1lc3NhZ2UsIGNvbmZpZywgcmVxdWVzdCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXEtbnVsbCxlcWVxZXFcbiAgQXhpb3NFcnJvci5jYWxsKHRoaXMsIG1lc3NhZ2UgPT0gbnVsbCA/ICdjYW5jZWxlZCcgOiBtZXNzYWdlLCBBeGlvc0Vycm9yLkVSUl9DQU5DRUxFRCwgY29uZmlnLCByZXF1ZXN0KTtcbiAgdGhpcy5uYW1lID0gJ0NhbmNlbGVkRXJyb3InO1xufVxuXG51dGlscy5pbmhlcml0cyhDYW5jZWxlZEVycm9yLCBBeGlvc0Vycm9yLCB7XG4gIF9fQ0FOQ0VMX186IHRydWVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDYW5jZWxlZEVycm9yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcbmltcG9ydCBidWlsZFVSTCBmcm9tICcuLi9oZWxwZXJzL2J1aWxkVVJMLmpzJztcbmltcG9ydCBJbnRlcmNlcHRvck1hbmFnZXIgZnJvbSAnLi9JbnRlcmNlcHRvck1hbmFnZXIuanMnO1xuaW1wb3J0IGRpc3BhdGNoUmVxdWVzdCBmcm9tICcuL2Rpc3BhdGNoUmVxdWVzdC5qcyc7XG5pbXBvcnQgbWVyZ2VDb25maWcgZnJvbSAnLi9tZXJnZUNvbmZpZy5qcyc7XG5pbXBvcnQgYnVpbGRGdWxsUGF0aCBmcm9tICcuL2J1aWxkRnVsbFBhdGguanMnO1xuaW1wb3J0IHZhbGlkYXRvciBmcm9tICcuLi9oZWxwZXJzL3ZhbGlkYXRvci5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gJy4vQXhpb3NIZWFkZXJzLmpzJztcblxuY29uc3QgdmFsaWRhdG9ycyA9IHZhbGlkYXRvci52YWxpZGF0b3JzO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICpcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5jbGFzcyBBeGlvcyB7XG4gIGNvbnN0cnVjdG9yKGluc3RhbmNlQ29uZmlnKSB7XG4gICAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICAgIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gY29uZmlnT3JVcmwgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICAgKiBAcGFyYW0gez9PYmplY3R9IGNvbmZpZ1xuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gICAqL1xuICByZXF1ZXN0KGNvbmZpZ09yVXJsLCBjb25maWcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gICAgaWYgKHR5cGVvZiBjb25maWdPclVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICAgIGNvbmZpZy51cmwgPSBjb25maWdPclVybDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnID0gY29uZmlnT3JVcmwgfHwge307XG4gICAgfVxuXG4gICAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcblxuICAgIGNvbnN0IHt0cmFuc2l0aW9uYWwsIHBhcmFtc1NlcmlhbGl6ZXIsIGhlYWRlcnN9ID0gY29uZmlnO1xuXG4gICAgaWYgKHRyYW5zaXRpb25hbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YWxpZGF0b3IuYXNzZXJ0T3B0aW9ucyh0cmFuc2l0aW9uYWwsIHtcbiAgICAgICAgc2lsZW50SlNPTlBhcnNpbmc6IHZhbGlkYXRvcnMudHJhbnNpdGlvbmFsKHZhbGlkYXRvcnMuYm9vbGVhbiksXG4gICAgICAgIGZvcmNlZEpTT05QYXJzaW5nOiB2YWxpZGF0b3JzLnRyYW5zaXRpb25hbCh2YWxpZGF0b3JzLmJvb2xlYW4pLFxuICAgICAgICBjbGFyaWZ5VGltZW91dEVycm9yOiB2YWxpZGF0b3JzLnRyYW5zaXRpb25hbCh2YWxpZGF0b3JzLmJvb2xlYW4pXG4gICAgICB9LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIgIT0gbnVsbCkge1xuICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24ocGFyYW1zU2VyaWFsaXplcikpIHtcbiAgICAgICAgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIgPSB7XG4gICAgICAgICAgc2VyaWFsaXplOiBwYXJhbXNTZXJpYWxpemVyXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbGlkYXRvci5hc3NlcnRPcHRpb25zKHBhcmFtc1NlcmlhbGl6ZXIsIHtcbiAgICAgICAgICBlbmNvZGU6IHZhbGlkYXRvcnMuZnVuY3Rpb24sXG4gICAgICAgICAgc2VyaWFsaXplOiB2YWxpZGF0b3JzLmZ1bmN0aW9uXG4gICAgICAgIH0sIHRydWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNldCBjb25maWcubWV0aG9kXG4gICAgY29uZmlnLm1ldGhvZCA9IChjb25maWcubWV0aG9kIHx8IHRoaXMuZGVmYXVsdHMubWV0aG9kIHx8ICdnZXQnKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gICAgbGV0IGNvbnRleHRIZWFkZXJzID0gaGVhZGVycyAmJiB1dGlscy5tZXJnZShcbiAgICAgIGhlYWRlcnMuY29tbW9uLFxuICAgICAgaGVhZGVyc1tjb25maWcubWV0aG9kXVxuICAgICk7XG5cbiAgICBoZWFkZXJzICYmIHV0aWxzLmZvckVhY2goXG4gICAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICAgIChtZXRob2QpID0+IHtcbiAgICAgICAgZGVsZXRlIGhlYWRlcnNbbWV0aG9kXTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgY29uZmlnLmhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuY29uY2F0KGNvbnRleHRIZWFkZXJzLCBoZWFkZXJzKTtcblxuICAgIC8vIGZpbHRlciBvdXQgc2tpcHBlZCBpbnRlcmNlcHRvcnNcbiAgICBjb25zdCByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbiA9IFtdO1xuICAgIGxldCBzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMgPSB0cnVlO1xuICAgIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgICAgaWYgKHR5cGVvZiBpbnRlcmNlcHRvci5ydW5XaGVuID09PSAnZnVuY3Rpb24nICYmIGludGVyY2VwdG9yLnJ1bldoZW4oY29uZmlnKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMgPSBzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMgJiYgaW50ZXJjZXB0b3Iuc3luY2hyb25vdXM7XG5cbiAgICAgIHJlcXVlc3RJbnRlcmNlcHRvckNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4gPSBbXTtcbiAgICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgICAgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gICAgfSk7XG5cbiAgICBsZXQgcHJvbWlzZTtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGxlbjtcblxuICAgIGlmICghc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzKSB7XG4gICAgICBjb25zdCBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QuYmluZCh0aGlzKSwgdW5kZWZpbmVkXTtcbiAgICAgIGNoYWluLnVuc2hpZnQuYXBwbHkoY2hhaW4sIHJlcXVlc3RJbnRlcmNlcHRvckNoYWluKTtcbiAgICAgIGNoYWluLnB1c2guYXBwbHkoY2hhaW4sIHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbik7XG4gICAgICBsZW4gPSBjaGFpbi5sZW5ndGg7XG5cbiAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICAgICAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbltpKytdLCBjaGFpbltpKytdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuXG4gICAgbGVuID0gcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4ubGVuZ3RoO1xuXG4gICAgbGV0IG5ld0NvbmZpZyA9IGNvbmZpZztcblxuICAgIGkgPSAwO1xuXG4gICAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICAgIGNvbnN0IG9uRnVsZmlsbGVkID0gcmVxdWVzdEludGVyY2VwdG9yQ2hhaW5baSsrXTtcbiAgICAgIGNvbnN0IG9uUmVqZWN0ZWQgPSByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbltpKytdO1xuICAgICAgdHJ5IHtcbiAgICAgICAgbmV3Q29uZmlnID0gb25GdWxmaWxsZWQobmV3Q29uZmlnKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIG9uUmVqZWN0ZWQuY2FsbCh0aGlzLCBlcnJvcik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBwcm9taXNlID0gZGlzcGF0Y2hSZXF1ZXN0LmNhbGwodGhpcywgbmV3Q29uZmlnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG5cbiAgICBpID0gMDtcbiAgICBsZW4gPSByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4ubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4ocmVzcG9uc2VJbnRlcmNlcHRvckNoYWluW2krK10sIHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbltpKytdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIGdldFVyaShjb25maWcpIHtcbiAgICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICAgIGNvbnN0IGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gICAgcmV0dXJuIGJ1aWxkVVJMKGZ1bGxQYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcik7XG4gIH1cbn1cblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QobWVyZ2VDb25maWcoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2QsXG4gICAgICB1cmwsXG4gICAgICBkYXRhOiAoY29uZmlnIHx8IHt9KS5kYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVIVFRQTWV0aG9kKGlzRm9ybSkge1xuICAgIHJldHVybiBmdW5jdGlvbiBodHRwTWV0aG9kKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgICBtZXRob2QsXG4gICAgICAgIGhlYWRlcnM6IGlzRm9ybSA/IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXG4gICAgICAgIH0gOiB7fSxcbiAgICAgICAgdXJsLFxuICAgICAgICBkYXRhXG4gICAgICB9KSk7XG4gICAgfTtcbiAgfVxuXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZ2VuZXJhdGVIVFRQTWV0aG9kKCk7XG5cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZCArICdGb3JtJ10gPSBnZW5lcmF0ZUhUVFBNZXRob2QodHJ1ZSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbY29uZmlnXSBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5mdW5jdGlvbiBBeGlvc0Vycm9yKG1lc3NhZ2UsIGNvZGUsIGNvbmZpZywgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgRXJyb3IuY2FsbCh0aGlzKTtcblxuICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnN0YWNrID0gKG5ldyBFcnJvcigpKS5zdGFjaztcbiAgfVxuXG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gIHRoaXMubmFtZSA9ICdBeGlvc0Vycm9yJztcbiAgY29kZSAmJiAodGhpcy5jb2RlID0gY29kZSk7XG4gIGNvbmZpZyAmJiAodGhpcy5jb25maWcgPSBjb25maWcpO1xuICByZXF1ZXN0ICYmICh0aGlzLnJlcXVlc3QgPSByZXF1ZXN0KTtcbiAgcmVzcG9uc2UgJiYgKHRoaXMucmVzcG9uc2UgPSByZXNwb25zZSk7XG59XG5cbnV0aWxzLmluaGVyaXRzKEF4aW9zRXJyb3IsIEVycm9yLCB7XG4gIHRvSlNPTjogZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHV0aWxzLnRvSlNPTk9iamVjdCh0aGlzLmNvbmZpZyksXG4gICAgICBjb2RlOiB0aGlzLmNvZGUsXG4gICAgICBzdGF0dXM6IHRoaXMucmVzcG9uc2UgJiYgdGhpcy5yZXNwb25zZS5zdGF0dXMgPyB0aGlzLnJlc3BvbnNlLnN0YXR1cyA6IG51bGxcbiAgICB9O1xuICB9XG59KTtcblxuY29uc3QgcHJvdG90eXBlID0gQXhpb3NFcnJvci5wcm90b3R5cGU7XG5jb25zdCBkZXNjcmlwdG9ycyA9IHt9O1xuXG5bXG4gICdFUlJfQkFEX09QVElPTl9WQUxVRScsXG4gICdFUlJfQkFEX09QVElPTicsXG4gICdFQ09OTkFCT1JURUQnLFxuICAnRVRJTUVET1VUJyxcbiAgJ0VSUl9ORVRXT1JLJyxcbiAgJ0VSUl9GUl9UT09fTUFOWV9SRURJUkVDVFMnLFxuICAnRVJSX0RFUFJFQ0FURUQnLFxuICAnRVJSX0JBRF9SRVNQT05TRScsXG4gICdFUlJfQkFEX1JFUVVFU1QnLFxuICAnRVJSX0NBTkNFTEVEJyxcbiAgJ0VSUl9OT1RfU1VQUE9SVCcsXG4gICdFUlJfSU5WQUxJRF9VUkwnXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXS5mb3JFYWNoKGNvZGUgPT4ge1xuICBkZXNjcmlwdG9yc1tjb2RlXSA9IHt2YWx1ZTogY29kZX07XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQXhpb3NFcnJvciwgZGVzY3JpcHRvcnMpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvdHlwZSwgJ2lzQXhpb3NFcnJvcicsIHt2YWx1ZTogdHJ1ZX0pO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuQXhpb3NFcnJvci5mcm9tID0gKGVycm9yLCBjb2RlLCBjb25maWcsIHJlcXVlc3QsIHJlc3BvbnNlLCBjdXN0b21Qcm9wcykgPT4ge1xuICBjb25zdCBheGlvc0Vycm9yID0gT2JqZWN0LmNyZWF0ZShwcm90b3R5cGUpO1xuXG4gIHV0aWxzLnRvRmxhdE9iamVjdChlcnJvciwgYXhpb3NFcnJvciwgZnVuY3Rpb24gZmlsdGVyKG9iaikge1xuICAgIHJldHVybiBvYmogIT09IEVycm9yLnByb3RvdHlwZTtcbiAgfSwgcHJvcCA9PiB7XG4gICAgcmV0dXJuIHByb3AgIT09ICdpc0F4aW9zRXJyb3InO1xuICB9KTtcblxuICBBeGlvc0Vycm9yLmNhbGwoYXhpb3NFcnJvciwgZXJyb3IubWVzc2FnZSwgY29kZSwgY29uZmlnLCByZXF1ZXN0LCByZXNwb25zZSk7XG5cbiAgYXhpb3NFcnJvci5jYXVzZSA9IGVycm9yO1xuXG4gIGF4aW9zRXJyb3IubmFtZSA9IGVycm9yLm5hbWU7XG5cbiAgY3VzdG9tUHJvcHMgJiYgT2JqZWN0LmFzc2lnbihheGlvc0Vycm9yLCBjdXN0b21Qcm9wcyk7XG5cbiAgcmV0dXJuIGF4aW9zRXJyb3I7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBeGlvc0Vycm9yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHBhcnNlSGVhZGVycyBmcm9tICcuLi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyc7XG5cbmNvbnN0ICRpbnRlcm5hbHMgPSBTeW1ib2woJ2ludGVybmFscycpO1xuXG5mdW5jdGlvbiBub3JtYWxpemVIZWFkZXIoaGVhZGVyKSB7XG4gIHJldHVybiBoZWFkZXIgJiYgU3RyaW5nKGhlYWRlcikudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gZmFsc2UgfHwgdmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB1dGlscy5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLm1hcChub3JtYWxpemVWYWx1ZSkgOiBTdHJpbmcodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRva2VucyhzdHIpIHtcbiAgY29uc3QgdG9rZW5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgY29uc3QgdG9rZW5zUkUgPSAvKFteXFxzLDs9XSspXFxzKig/Oj1cXHMqKFteLDtdKykpPy9nO1xuICBsZXQgbWF0Y2g7XG5cbiAgd2hpbGUgKChtYXRjaCA9IHRva2Vuc1JFLmV4ZWMoc3RyKSkpIHtcbiAgICB0b2tlbnNbbWF0Y2hbMV1dID0gbWF0Y2hbMl07XG4gIH1cblxuICByZXR1cm4gdG9rZW5zO1xufVxuXG5jb25zdCBpc1ZhbGlkSGVhZGVyTmFtZSA9IChzdHIpID0+IC9eWy1fYS16QS1aMC05XmB8fiwhIyQlJicqKy5dKyQvLnRlc3Qoc3RyLnRyaW0oKSk7XG5cbmZ1bmN0aW9uIG1hdGNoSGVhZGVyVmFsdWUoY29udGV4dCwgdmFsdWUsIGhlYWRlciwgZmlsdGVyLCBpc0hlYWRlck5hbWVGaWx0ZXIpIHtcbiAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZmlsdGVyKSkge1xuICAgIHJldHVybiBmaWx0ZXIuY2FsbCh0aGlzLCB2YWx1ZSwgaGVhZGVyKTtcbiAgfVxuXG4gIGlmIChpc0hlYWRlck5hbWVGaWx0ZXIpIHtcbiAgICB2YWx1ZSA9IGhlYWRlcjtcbiAgfVxuXG4gIGlmICghdXRpbHMuaXNTdHJpbmcodmFsdWUpKSByZXR1cm47XG5cbiAgaWYgKHV0aWxzLmlzU3RyaW5nKGZpbHRlcikpIHtcbiAgICByZXR1cm4gdmFsdWUuaW5kZXhPZihmaWx0ZXIpICE9PSAtMTtcbiAgfVxuXG4gIGlmICh1dGlscy5pc1JlZ0V4cChmaWx0ZXIpKSB7XG4gICAgcmV0dXJuIGZpbHRlci50ZXN0KHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRIZWFkZXIoaGVhZGVyKSB7XG4gIHJldHVybiBoZWFkZXIudHJpbSgpXG4gICAgLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvKFthLXpcXGRdKShcXHcqKS9nLCAodywgY2hhciwgc3RyKSA9PiB7XG4gICAgICByZXR1cm4gY2hhci50b1VwcGVyQ2FzZSgpICsgc3RyO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBidWlsZEFjY2Vzc29ycyhvYmosIGhlYWRlcikge1xuICBjb25zdCBhY2Nlc3Nvck5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZSgnICcgKyBoZWFkZXIpO1xuXG4gIFsnZ2V0JywgJ3NldCcsICdoYXMnXS5mb3JFYWNoKG1ldGhvZE5hbWUgPT4ge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIG1ldGhvZE5hbWUgKyBhY2Nlc3Nvck5hbWUsIHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbihhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgICAgIHJldHVybiB0aGlzW21ldGhvZE5hbWVdLmNhbGwodGhpcywgaGVhZGVyLCBhcmcxLCBhcmcyLCBhcmczKTtcbiAgICAgIH0sXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfSk7XG59XG5cbmNsYXNzIEF4aW9zSGVhZGVycyB7XG4gIGNvbnN0cnVjdG9yKGhlYWRlcnMpIHtcbiAgICBoZWFkZXJzICYmIHRoaXMuc2V0KGhlYWRlcnMpO1xuICB9XG5cbiAgc2V0KGhlYWRlciwgdmFsdWVPclJld3JpdGUsIHJld3JpdGUpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIHNldEhlYWRlcihfdmFsdWUsIF9oZWFkZXIsIF9yZXdyaXRlKSB7XG4gICAgICBjb25zdCBsSGVhZGVyID0gbm9ybWFsaXplSGVhZGVyKF9oZWFkZXIpO1xuXG4gICAgICBpZiAoIWxIZWFkZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdoZWFkZXIgbmFtZSBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZycpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBrZXkgPSB1dGlscy5maW5kS2V5KHNlbGYsIGxIZWFkZXIpO1xuXG4gICAgICBpZigha2V5IHx8IHNlbGZba2V5XSA9PT0gdW5kZWZpbmVkIHx8IF9yZXdyaXRlID09PSB0cnVlIHx8IChfcmV3cml0ZSA9PT0gdW5kZWZpbmVkICYmIHNlbGZba2V5XSAhPT0gZmFsc2UpKSB7XG4gICAgICAgIHNlbGZba2V5IHx8IF9oZWFkZXJdID0gbm9ybWFsaXplVmFsdWUoX3ZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXRIZWFkZXJzID0gKGhlYWRlcnMsIF9yZXdyaXRlKSA9PlxuICAgICAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCAoX3ZhbHVlLCBfaGVhZGVyKSA9PiBzZXRIZWFkZXIoX3ZhbHVlLCBfaGVhZGVyLCBfcmV3cml0ZSkpO1xuXG4gICAgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3QoaGVhZGVyKSB8fCBoZWFkZXIgaW5zdGFuY2VvZiB0aGlzLmNvbnN0cnVjdG9yKSB7XG4gICAgICBzZXRIZWFkZXJzKGhlYWRlciwgdmFsdWVPclJld3JpdGUpXG4gICAgfSBlbHNlIGlmKHV0aWxzLmlzU3RyaW5nKGhlYWRlcikgJiYgKGhlYWRlciA9IGhlYWRlci50cmltKCkpICYmICFpc1ZhbGlkSGVhZGVyTmFtZShoZWFkZXIpKSB7XG4gICAgICBzZXRIZWFkZXJzKHBhcnNlSGVhZGVycyhoZWFkZXIpLCB2YWx1ZU9yUmV3cml0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRlciAhPSBudWxsICYmIHNldEhlYWRlcih2YWx1ZU9yUmV3cml0ZSwgaGVhZGVyLCByZXdyaXRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldChoZWFkZXIsIHBhcnNlcikge1xuICAgIGhlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihoZWFkZXIpO1xuXG4gICAgaWYgKGhlYWRlcikge1xuICAgICAgY29uc3Qga2V5ID0gdXRpbHMuZmluZEtleSh0aGlzLCBoZWFkZXIpO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpc1trZXldO1xuXG4gICAgICAgIGlmICghcGFyc2VyKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnNlciA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVybiBwYXJzZVRva2Vucyh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihwYXJzZXIpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlci5jYWxsKHRoaXMsIHZhbHVlLCBrZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzUmVnRXhwKHBhcnNlcikpIHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VyLmV4ZWModmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncGFyc2VyIG11c3QgYmUgYm9vbGVhbnxyZWdleHB8ZnVuY3Rpb24nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYXMoaGVhZGVyLCBtYXRjaGVyKSB7XG4gICAgaGVhZGVyID0gbm9ybWFsaXplSGVhZGVyKGhlYWRlcik7XG5cbiAgICBpZiAoaGVhZGVyKSB7XG4gICAgICBjb25zdCBrZXkgPSB1dGlscy5maW5kS2V5KHRoaXMsIGhlYWRlcik7XG5cbiAgICAgIHJldHVybiAhIShrZXkgJiYgdGhpc1trZXldICE9PSB1bmRlZmluZWQgJiYgKCFtYXRjaGVyIHx8IG1hdGNoSGVhZGVyVmFsdWUodGhpcywgdGhpc1trZXldLCBrZXksIG1hdGNoZXIpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZGVsZXRlKGhlYWRlciwgbWF0Y2hlcikge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBkZWxldGVkID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBkZWxldGVIZWFkZXIoX2hlYWRlcikge1xuICAgICAgX2hlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihfaGVhZGVyKTtcblxuICAgICAgaWYgKF9oZWFkZXIpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gdXRpbHMuZmluZEtleShzZWxmLCBfaGVhZGVyKTtcblxuICAgICAgICBpZiAoa2V5ICYmICghbWF0Y2hlciB8fCBtYXRjaEhlYWRlclZhbHVlKHNlbGYsIHNlbGZba2V5XSwga2V5LCBtYXRjaGVyKSkpIHtcbiAgICAgICAgICBkZWxldGUgc2VsZltrZXldO1xuXG4gICAgICAgICAgZGVsZXRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodXRpbHMuaXNBcnJheShoZWFkZXIpKSB7XG4gICAgICBoZWFkZXIuZm9yRWFjaChkZWxldGVIZWFkZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGVIZWFkZXIoaGVhZGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVsZXRlZDtcbiAgfVxuXG4gIGNsZWFyKG1hdGNoZXIpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcyk7XG4gICAgbGV0IGkgPSBrZXlzLmxlbmd0aDtcbiAgICBsZXQgZGVsZXRlZCA9IGZhbHNlO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmKCFtYXRjaGVyIHx8IG1hdGNoSGVhZGVyVmFsdWUodGhpcywgdGhpc1trZXldLCBrZXksIG1hdGNoZXIsIHRydWUpKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzW2tleV07XG4gICAgICAgIGRlbGV0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkZWxldGVkO1xuICB9XG5cbiAgbm9ybWFsaXplKGZvcm1hdCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGNvbnN0IGhlYWRlcnMgPSB7fTtcblxuICAgIHV0aWxzLmZvckVhY2godGhpcywgKHZhbHVlLCBoZWFkZXIpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHV0aWxzLmZpbmRLZXkoaGVhZGVycywgaGVhZGVyKTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBzZWxmW2tleV0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIGRlbGV0ZSBzZWxmW2hlYWRlcl07XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IGZvcm1hdCA/IGZvcm1hdEhlYWRlcihoZWFkZXIpIDogU3RyaW5nKGhlYWRlcikudHJpbSgpO1xuXG4gICAgICBpZiAobm9ybWFsaXplZCAhPT0gaGVhZGVyKSB7XG4gICAgICAgIGRlbGV0ZSBzZWxmW2hlYWRlcl07XG4gICAgICB9XG5cbiAgICAgIHNlbGZbbm9ybWFsaXplZF0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG5cbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZF0gPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb25jYXQoLi4udGFyZ2V0cykge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmNvbmNhdCh0aGlzLCAuLi50YXJnZXRzKTtcbiAgfVxuXG4gIHRvSlNPTihhc1N0cmluZ3MpIHtcbiAgICBjb25zdCBvYmogPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgdXRpbHMuZm9yRWFjaCh0aGlzLCAodmFsdWUsIGhlYWRlcikgPT4ge1xuICAgICAgdmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPT0gZmFsc2UgJiYgKG9ialtoZWFkZXJdID0gYXNTdHJpbmdzICYmIHV0aWxzLmlzQXJyYXkodmFsdWUpID8gdmFsdWUuam9pbignLCAnKSA6IHZhbHVlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy50b0pTT04oKSlbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMudG9KU09OKCkpLm1hcCgoW2hlYWRlciwgdmFsdWVdKSA9PiBoZWFkZXIgKyAnOiAnICsgdmFsdWUpLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgZ2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgIHJldHVybiAnQXhpb3NIZWFkZXJzJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tKHRoaW5nKSB7XG4gICAgcmV0dXJuIHRoaW5nIGluc3RhbmNlb2YgdGhpcyA/IHRoaW5nIDogbmV3IHRoaXModGhpbmcpO1xuICB9XG5cbiAgc3RhdGljIGNvbmNhdChmaXJzdCwgLi4udGFyZ2V0cykge1xuICAgIGNvbnN0IGNvbXB1dGVkID0gbmV3IHRoaXMoZmlyc3QpO1xuXG4gICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IGNvbXB1dGVkLnNldCh0YXJnZXQpKTtcblxuICAgIHJldHVybiBjb21wdXRlZDtcbiAgfVxuXG4gIHN0YXRpYyBhY2Nlc3NvcihoZWFkZXIpIHtcbiAgICBjb25zdCBpbnRlcm5hbHMgPSB0aGlzWyRpbnRlcm5hbHNdID0gKHRoaXNbJGludGVybmFsc10gPSB7XG4gICAgICBhY2Nlc3NvcnM6IHt9XG4gICAgfSk7XG5cbiAgICBjb25zdCBhY2Nlc3NvcnMgPSBpbnRlcm5hbHMuYWNjZXNzb3JzO1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IHRoaXMucHJvdG90eXBlO1xuXG4gICAgZnVuY3Rpb24gZGVmaW5lQWNjZXNzb3IoX2hlYWRlcikge1xuICAgICAgY29uc3QgbEhlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihfaGVhZGVyKTtcblxuICAgICAgaWYgKCFhY2Nlc3NvcnNbbEhlYWRlcl0pIHtcbiAgICAgICAgYnVpbGRBY2Nlc3NvcnMocHJvdG90eXBlLCBfaGVhZGVyKTtcbiAgICAgICAgYWNjZXNzb3JzW2xIZWFkZXJdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1dGlscy5pc0FycmF5KGhlYWRlcikgPyBoZWFkZXIuZm9yRWFjaChkZWZpbmVBY2Nlc3NvcikgOiBkZWZpbmVBY2Nlc3NvcihoZWFkZXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuQXhpb3NIZWFkZXJzLmFjY2Vzc29yKFsnQ29udGVudC1UeXBlJywgJ0NvbnRlbnQtTGVuZ3RoJywgJ0FjY2VwdCcsICdBY2NlcHQtRW5jb2RpbmcnLCAnVXNlci1BZ2VudCcsICdBdXRob3JpemF0aW9uJ10pO1xuXG4vLyByZXNlcnZlZCBuYW1lcyBob3RmaXhcbnV0aWxzLnJlZHVjZURlc2NyaXB0b3JzKEF4aW9zSGVhZGVycy5wcm90b3R5cGUsICh7dmFsdWV9LCBrZXkpID0+IHtcbiAgbGV0IG1hcHBlZCA9IGtleVswXS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpOyAvLyBtYXAgYHNldGAgPT4gYFNldGBcbiAgcmV0dXJuIHtcbiAgICBnZXQ6ICgpID0+IHZhbHVlLFxuICAgIHNldChoZWFkZXJWYWx1ZSkge1xuICAgICAgdGhpc1ttYXBwZWRdID0gaGVhZGVyVmFsdWU7XG4gICAgfVxuICB9XG59KTtcblxudXRpbHMuZnJlZXplTWV0aG9kcyhBeGlvc0hlYWRlcnMpO1xuXG5leHBvcnQgZGVmYXVsdCBBeGlvc0hlYWRlcnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcblxuY2xhc3MgSW50ZXJjZXB0b3JNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICAgKlxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gICAqL1xuICB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCwgb3B0aW9ucykge1xuICAgIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgICBmdWxmaWxsZWQsXG4gICAgICByZWplY3RlZCxcbiAgICAgIHN5bmNocm9ub3VzOiBvcHRpb25zID8gb3B0aW9ucy5zeW5jaHJvbm91cyA6IGZhbHNlLFxuICAgICAgcnVuV2hlbjogb3B0aW9ucyA/IG9wdGlvbnMucnVuV2hlbiA6IG51bGxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gICAqXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIGludGVyY2VwdG9yIHdhcyByZW1vdmVkLCBgZmFsc2VgIG90aGVyd2lzZVxuICAgKi9cbiAgZWplY3QoaWQpIHtcbiAgICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIGludGVyY2VwdG9ycyBmcm9tIHRoZSBzdGFja1xuICAgKlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGNsZWFyKCkge1xuICAgIGlmICh0aGlzLmhhbmRsZXJzKSB7XG4gICAgICB0aGlzLmhhbmRsZXJzID0gW107XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gICAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICAgKlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGZvckVhY2goZm4pIHtcbiAgICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICAgIGZuKGgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGlzQWJzb2x1dGVVUkwgZnJvbSAnLi4vaGVscGVycy9pc0Fic29sdXRlVVJMLmpzJztcbmltcG9ydCBjb21iaW5lVVJMcyBmcm9tICcuLi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIGJhc2VVUkwgd2l0aCB0aGUgcmVxdWVzdGVkVVJMLFxuICogb25seSB3aGVuIHRoZSByZXF1ZXN0ZWRVUkwgaXMgbm90IGFscmVhZHkgYW4gYWJzb2x1dGUgVVJMLlxuICogSWYgdGhlIHJlcXVlc3RVUkwgaXMgYWJzb2x1dGUsIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgcmVxdWVzdGVkVVJMIHVudG91Y2hlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0ZWRVUkwgQWJzb2x1dGUgb3IgcmVsYXRpdmUgVVJMIHRvIGNvbWJpbmVcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgZnVsbCBwYXRoXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRnVsbFBhdGgoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKSB7XG4gIGlmIChiYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKHJlcXVlc3RlZFVSTCkpIHtcbiAgICByZXR1cm4gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKTtcbiAgfVxuICByZXR1cm4gcmVxdWVzdGVkVVJMO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdHJhbnNmb3JtRGF0YSBmcm9tICcuL3RyYW5zZm9ybURhdGEuanMnO1xuaW1wb3J0IGlzQ2FuY2VsIGZyb20gJy4uL2NhbmNlbC9pc0NhbmNlbC5qcyc7XG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi4vZGVmYXVsdHMvaW5kZXguanMnO1xuaW1wb3J0IENhbmNlbGVkRXJyb3IgZnJvbSAnLi4vY2FuY2VsL0NhbmNlbGVkRXJyb3IuanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tICcuLi9jb3JlL0F4aW9zSGVhZGVycy5qcyc7XG5pbXBvcnQgYWRhcHRlcnMgZnJvbSBcIi4uL2FkYXB0ZXJzL2FkYXB0ZXJzLmpzXCI7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGVkRXJyb3JgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cblxuICBpZiAoY29uZmlnLnNpZ25hbCAmJiBjb25maWcuc2lnbmFsLmFib3J0ZWQpIHtcbiAgICB0aHJvdyBuZXcgQ2FuY2VsZWRFcnJvcihudWxsLCBjb25maWcpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICpcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgY29uZmlnLmhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuZnJvbShjb25maWcuaGVhZGVycyk7XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEuY2FsbChcbiAgICBjb25maWcsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICBpZiAoWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLmluZGV4T2YoY29uZmlnLm1ldGhvZCkgIT09IC0xKSB7XG4gICAgY29uZmlnLmhlYWRlcnMuc2V0Q29udGVudFR5cGUoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsIGZhbHNlKTtcbiAgfVxuXG4gIGNvbnN0IGFkYXB0ZXIgPSBhZGFwdGVycy5nZXRBZGFwdGVyKGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXIpO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YS5jYWxsKFxuICAgICAgY29uZmlnLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlLFxuICAgICAgcmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmVzcG9uc2UuaGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKHJlc3BvbnNlLmhlYWRlcnMpO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEuY2FsbChcbiAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZVxuICAgICAgICApO1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gXCIuL0F4aW9zSGVhZGVycy5qc1wiO1xuXG5jb25zdCBoZWFkZXJzVG9PYmplY3QgPSAodGhpbmcpID0+IHRoaW5nIGluc3RhbmNlb2YgQXhpb3NIZWFkZXJzID8gdGhpbmcudG9KU09OKCkgOiB0aGluZztcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKlxuICogQHJldHVybnMge09iamVjdH0gTmV3IG9iamVjdCByZXN1bHRpbmcgZnJvbSBtZXJnaW5nIGNvbmZpZzIgdG8gY29uZmlnMVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZUNvbmZpZyhjb25maWcxLCBjb25maWcyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBjb25maWcyID0gY29uZmlnMiB8fCB7fTtcbiAgY29uc3QgY29uZmlnID0ge307XG5cbiAgZnVuY3Rpb24gZ2V0TWVyZ2VkVmFsdWUodGFyZ2V0LCBzb3VyY2UsIGNhc2VsZXNzKSB7XG4gICAgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3QodGFyZ2V0KSAmJiB1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZS5jYWxsKHtjYXNlbGVzc30sIHRhcmdldCwgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHt9LCBzb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gc291cmNlLnNsaWNlKCk7XG4gICAgfVxuICAgIHJldHVybiBzb3VyY2U7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhhLCBiLCBjYXNlbGVzcykge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoYikpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZShhLCBiLCBjYXNlbGVzcyk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoYSkpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGEsIGNhc2VsZXNzKTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihhLCBiKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChiKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgYik7XG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIGZ1bmN0aW9uIGRlZmF1bHRUb0NvbmZpZzIoYSwgYikge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoYikpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGIpO1xuICAgIH0gZWxzZSBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGEpKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBhKTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgZnVuY3Rpb24gbWVyZ2VEaXJlY3RLZXlzKGEsIGIsIHByb3ApIHtcbiAgICBpZiAocHJvcCBpbiBjb25maWcyKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUoYSwgYik7XG4gICAgfSBlbHNlIGlmIChwcm9wIGluIGNvbmZpZzEpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGEpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1lcmdlTWFwID0ge1xuICAgIHVybDogdmFsdWVGcm9tQ29uZmlnMixcbiAgICBtZXRob2Q6IHZhbHVlRnJvbUNvbmZpZzIsXG4gICAgZGF0YTogdmFsdWVGcm9tQ29uZmlnMixcbiAgICBiYXNlVVJMOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHRyYW5zZm9ybVJlcXVlc3Q6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdHJhbnNmb3JtUmVzcG9uc2U6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgcGFyYW1zU2VyaWFsaXplcjogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB0aW1lb3V0OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHRpbWVvdXRNZXNzYWdlOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHdpdGhDcmVkZW50aWFsczogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB3aXRoWFNSRlRva2VuOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGFkYXB0ZXI6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgcmVzcG9uc2VUeXBlOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHhzcmZDb29raWVOYW1lOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHhzcmZIZWFkZXJOYW1lOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIG9uVXBsb2FkUHJvZ3Jlc3M6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgb25Eb3dubG9hZFByb2dyZXNzOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGRlY29tcHJlc3M6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgbWF4Q29udGVudExlbmd0aDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBtYXhCb2R5TGVuZ3RoOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGJlZm9yZVJlZGlyZWN0OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHRyYW5zcG9ydDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBodHRwQWdlbnQ6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgaHR0cHNBZ2VudDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBjYW5jZWxUb2tlbjogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBzb2NrZXRQYXRoOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHJlc3BvbnNlRW5jb2Rpbmc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdmFsaWRhdGVTdGF0dXM6IG1lcmdlRGlyZWN0S2V5cyxcbiAgICBoZWFkZXJzOiAoYSwgYikgPT4gbWVyZ2VEZWVwUHJvcGVydGllcyhoZWFkZXJzVG9PYmplY3QoYSksIGhlYWRlcnNUb09iamVjdChiKSwgdHJ1ZSlcbiAgfTtcblxuICB1dGlscy5mb3JFYWNoKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZzEsIGNvbmZpZzIpKSwgZnVuY3Rpb24gY29tcHV0ZUNvbmZpZ1ZhbHVlKHByb3ApIHtcbiAgICBjb25zdCBtZXJnZSA9IG1lcmdlTWFwW3Byb3BdIHx8IG1lcmdlRGVlcFByb3BlcnRpZXM7XG4gICAgY29uc3QgY29uZmlnVmFsdWUgPSBtZXJnZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdLCBwcm9wKTtcbiAgICAodXRpbHMuaXNVbmRlZmluZWQoY29uZmlnVmFsdWUpICYmIG1lcmdlICE9PSBtZXJnZURpcmVjdEtleXMpIHx8IChjb25maWdbcHJvcF0gPSBjb25maWdWYWx1ZSk7XG4gIH0pO1xuXG4gIHJldHVybiBjb25maWc7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4vQXhpb3NFcnJvci5qcyc7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKlxuICogQHJldHVybnMge29iamVjdH0gVGhlIHJlc3BvbnNlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICBjb25zdCB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgW0F4aW9zRXJyb3IuRVJSX0JBRF9SRVFVRVNULCBBeGlvc0Vycm9yLkVSUl9CQURfUkVTUE9OU0VdW01hdGguZmxvb3IocmVzcG9uc2Uuc3RhdHVzIC8gMTAwKSAtIDRdLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4uL2RlZmF1bHRzL2luZGV4LmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSAnLi4vY29yZS9BeGlvc0hlYWRlcnMuanMnO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcGFyYW0gez9PYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZSBvYmplY3RcbiAqXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZm5zLCByZXNwb25zZSkge1xuICBjb25zdCBjb25maWcgPSB0aGlzIHx8IGRlZmF1bHRzO1xuICBjb25zdCBjb250ZXh0ID0gcmVzcG9uc2UgfHwgY29uZmlnO1xuICBjb25zdCBoZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20oY29udGV4dC5oZWFkZXJzKTtcbiAgbGV0IGRhdGEgPSBjb250ZXh0LmRhdGE7XG5cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbi5jYWxsKGNvbmZpZywgZGF0YSwgaGVhZGVycy5ub3JtYWxpemUoKSwgcmVzcG9uc2UgPyByZXNwb25zZS5zdGF0dXMgOiB1bmRlZmluZWQpO1xuICB9KTtcblxuICBoZWFkZXJzLm5vcm1hbGl6ZSgpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcbmltcG9ydCB0cmFuc2l0aW9uYWxEZWZhdWx0cyBmcm9tICcuL3RyYW5zaXRpb25hbC5qcyc7XG5pbXBvcnQgdG9Gb3JtRGF0YSBmcm9tICcuLi9oZWxwZXJzL3RvRm9ybURhdGEuanMnO1xuaW1wb3J0IHRvVVJMRW5jb2RlZEZvcm0gZnJvbSAnLi4vaGVscGVycy90b1VSTEVuY29kZWRGb3JtLmpzJztcbmltcG9ydCBwbGF0Zm9ybSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleC5qcyc7XG5pbXBvcnQgZm9ybURhdGFUb0pTT04gZnJvbSAnLi4vaGVscGVycy9mb3JtRGF0YVRvSlNPTi5qcyc7XG5cbi8qKlxuICogSXQgdGFrZXMgYSBzdHJpbmcsIHRyaWVzIHRvIHBhcnNlIGl0LCBhbmQgaWYgaXQgZmFpbHMsIGl0IHJldHVybnMgdGhlIHN0cmluZ2lmaWVkIHZlcnNpb25cbiAqIG9mIHRoZSBpbnB1dFxuICpcbiAqIEBwYXJhbSB7YW55fSByYXdWYWx1ZSAtIFRoZSB2YWx1ZSB0byBiZSBzdHJpbmdpZmllZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHBhcnNlciAtIEEgZnVuY3Rpb24gdGhhdCBwYXJzZXMgYSBzdHJpbmcgaW50byBhIEphdmFTY3JpcHQgb2JqZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZW5jb2RlciAtIEEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHZhbHVlIGFuZCByZXR1cm5zIGEgc3RyaW5nLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgc3RyaW5naWZpZWQgdmVyc2lvbiBvZiB0aGUgcmF3VmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ2lmeVNhZmVseShyYXdWYWx1ZSwgcGFyc2VyLCBlbmNvZGVyKSB7XG4gIGlmICh1dGlscy5pc1N0cmluZyhyYXdWYWx1ZSkpIHtcbiAgICB0cnkge1xuICAgICAgKHBhcnNlciB8fCBKU09OLnBhcnNlKShyYXdWYWx1ZSk7XG4gICAgICByZXR1cm4gdXRpbHMudHJpbShyYXdWYWx1ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUubmFtZSAhPT0gJ1N5bnRheEVycm9yJykge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoZW5jb2RlciB8fCBKU09OLnN0cmluZ2lmeSkocmF3VmFsdWUpO1xufVxuXG5jb25zdCBkZWZhdWx0cyA9IHtcblxuICB0cmFuc2l0aW9uYWw6IHRyYW5zaXRpb25hbERlZmF1bHRzLFxuXG4gIGFkYXB0ZXI6IFsneGhyJywgJ2h0dHAnXSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgY29uc3QgY29udGVudFR5cGUgPSBoZWFkZXJzLmdldENvbnRlbnRUeXBlKCkgfHwgJyc7XG4gICAgY29uc3QgaGFzSlNPTkNvbnRlbnRUeXBlID0gY29udGVudFR5cGUuaW5kZXhPZignYXBwbGljYXRpb24vanNvbicpID4gLTE7XG4gICAgY29uc3QgaXNPYmplY3RQYXlsb2FkID0gdXRpbHMuaXNPYmplY3QoZGF0YSk7XG5cbiAgICBpZiAoaXNPYmplY3RQYXlsb2FkICYmIHV0aWxzLmlzSFRNTEZvcm0oZGF0YSkpIHtcbiAgICAgIGRhdGEgPSBuZXcgRm9ybURhdGEoZGF0YSk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNGb3JtRGF0YSA9IHV0aWxzLmlzRm9ybURhdGEoZGF0YSk7XG5cbiAgICBpZiAoaXNGb3JtRGF0YSkge1xuICAgICAgaWYgKCFoYXNKU09OQ29udGVudFR5cGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGFzSlNPTkNvbnRlbnRUeXBlID8gSlNPTi5zdHJpbmdpZnkoZm9ybURhdGFUb0pTT04oZGF0YSkpIDogZGF0YTtcbiAgICB9XG5cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIGhlYWRlcnMuc2V0Q29udGVudFR5cGUoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04JywgZmFsc2UpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBsZXQgaXNGaWxlTGlzdDtcblxuICAgIGlmIChpc09iamVjdFBheWxvYWQpIHtcbiAgICAgIGlmIChjb250ZW50VHlwZS5pbmRleE9mKCdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKSA+IC0xKSB7XG4gICAgICAgIHJldHVybiB0b1VSTEVuY29kZWRGb3JtKGRhdGEsIHRoaXMuZm9ybVNlcmlhbGl6ZXIpLnRvU3RyaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICgoaXNGaWxlTGlzdCA9IHV0aWxzLmlzRmlsZUxpc3QoZGF0YSkpIHx8IGNvbnRlbnRUeXBlLmluZGV4T2YoJ211bHRpcGFydC9mb3JtLWRhdGEnKSA+IC0xKSB7XG4gICAgICAgIGNvbnN0IF9Gb3JtRGF0YSA9IHRoaXMuZW52ICYmIHRoaXMuZW52LkZvcm1EYXRhO1xuXG4gICAgICAgIHJldHVybiB0b0Zvcm1EYXRhKFxuICAgICAgICAgIGlzRmlsZUxpc3QgPyB7J2ZpbGVzW10nOiBkYXRhfSA6IGRhdGEsXG4gICAgICAgICAgX0Zvcm1EYXRhICYmIG5ldyBfRm9ybURhdGEoKSxcbiAgICAgICAgICB0aGlzLmZvcm1TZXJpYWxpemVyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0UGF5bG9hZCB8fCBoYXNKU09OQ29udGVudFR5cGUgKSB7XG4gICAgICBoZWFkZXJzLnNldENvbnRlbnRUeXBlKCdhcHBsaWNhdGlvbi9qc29uJywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHN0cmluZ2lmeVNhZmVseShkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgY29uc3QgdHJhbnNpdGlvbmFsID0gdGhpcy50cmFuc2l0aW9uYWwgfHwgZGVmYXVsdHMudHJhbnNpdGlvbmFsO1xuICAgIGNvbnN0IGZvcmNlZEpTT05QYXJzaW5nID0gdHJhbnNpdGlvbmFsICYmIHRyYW5zaXRpb25hbC5mb3JjZWRKU09OUGFyc2luZztcbiAgICBjb25zdCBKU09OUmVxdWVzdGVkID0gdGhpcy5yZXNwb25zZVR5cGUgPT09ICdqc29uJztcblxuICAgIGlmIChkYXRhICYmIHV0aWxzLmlzU3RyaW5nKGRhdGEpICYmICgoZm9yY2VkSlNPTlBhcnNpbmcgJiYgIXRoaXMucmVzcG9uc2VUeXBlKSB8fCBKU09OUmVxdWVzdGVkKSkge1xuICAgICAgY29uc3Qgc2lsZW50SlNPTlBhcnNpbmcgPSB0cmFuc2l0aW9uYWwgJiYgdHJhbnNpdGlvbmFsLnNpbGVudEpTT05QYXJzaW5nO1xuICAgICAgY29uc3Qgc3RyaWN0SlNPTlBhcnNpbmcgPSAhc2lsZW50SlNPTlBhcnNpbmcgJiYgSlNPTlJlcXVlc3RlZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChzdHJpY3RKU09OUGFyc2luZykge1xuICAgICAgICAgIGlmIChlLm5hbWUgPT09ICdTeW50YXhFcnJvcicpIHtcbiAgICAgICAgICAgIHRocm93IEF4aW9zRXJyb3IuZnJvbShlLCBBeGlvc0Vycm9yLkVSUl9CQURfUkVTUE9OU0UsIHRoaXMsIG51bGwsIHRoaXMucmVzcG9uc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuICBtYXhCb2R5TGVuZ3RoOiAtMSxcblxuICBlbnY6IHtcbiAgICBGb3JtRGF0YTogcGxhdGZvcm0uY2xhc3Nlcy5Gb3JtRGF0YSxcbiAgICBCbG9iOiBwbGF0Zm9ybS5jbGFzc2VzLkJsb2JcbiAgfSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9LFxuXG4gIGhlYWRlcnM6IHtcbiAgICBjb21tb246IHtcbiAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJyxcbiAgICAgICdDb250ZW50LVR5cGUnOiB1bmRlZmluZWRcbiAgICB9XG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgKG1ldGhvZCkgPT4ge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0cztcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzaWxlbnRKU09OUGFyc2luZzogdHJ1ZSxcbiAgZm9yY2VkSlNPTlBhcnNpbmc6IHRydWUsXG4gIGNsYXJpZnlUaW1lb3V0RXJyb3I6IGZhbHNlXG59O1xuIiwiZXhwb3J0IGNvbnN0IFZFUlNJT04gPSBcIjEuNi41XCI7IiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdG9Gb3JtRGF0YSBmcm9tICcuL3RvRm9ybURhdGEuanMnO1xuXG4vKipcbiAqIEl0IGVuY29kZXMgYSBzdHJpbmcgYnkgcmVwbGFjaW5nIGFsbCBjaGFyYWN0ZXJzIHRoYXQgYXJlIG5vdCBpbiB0aGUgdW5yZXNlcnZlZCBzZXQgd2l0aFxuICogdGhlaXIgcGVyY2VudC1lbmNvZGVkIGVxdWl2YWxlbnRzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmcgdG8gZW5jb2RlLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBlbmNvZGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZW5jb2RlKHN0cikge1xuICBjb25zdCBjaGFyTWFwID0ge1xuICAgICchJzogJyUyMScsXG4gICAgXCInXCI6ICclMjcnLFxuICAgICcoJzogJyUyOCcsXG4gICAgJyknOiAnJTI5JyxcbiAgICAnfic6ICclN0UnLFxuICAgICclMjAnOiAnKycsXG4gICAgJyUwMCc6ICdcXHgwMCdcbiAgfTtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoL1shJygpfl18JTIwfCUwMC9nLCBmdW5jdGlvbiByZXBsYWNlcihtYXRjaCkge1xuICAgIHJldHVybiBjaGFyTWFwW21hdGNoXTtcbiAgfSk7XG59XG5cbi8qKlxuICogSXQgdGFrZXMgYSBwYXJhbXMgb2JqZWN0IGFuZCBjb252ZXJ0cyBpdCB0byBhIEZvcm1EYXRhIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgYW55Pn0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgdG8gYmUgY29udmVydGVkIHRvIGEgRm9ybURhdGEgb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBhbnk+fSBvcHRpb25zIC0gVGhlIG9wdGlvbnMgb2JqZWN0IHBhc3NlZCB0byB0aGUgQXhpb3MgY29uc3RydWN0b3IuXG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIEF4aW9zVVJMU2VhcmNoUGFyYW1zKHBhcmFtcywgb3B0aW9ucykge1xuICB0aGlzLl9wYWlycyA9IFtdO1xuXG4gIHBhcmFtcyAmJiB0b0Zvcm1EYXRhKHBhcmFtcywgdGhpcywgb3B0aW9ucyk7XG59XG5cbmNvbnN0IHByb3RvdHlwZSA9IEF4aW9zVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZTtcblxucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uIGFwcGVuZChuYW1lLCB2YWx1ZSkge1xuICB0aGlzLl9wYWlycy5wdXNoKFtuYW1lLCB2YWx1ZV0pO1xufTtcblxucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoZW5jb2Rlcikge1xuICBjb25zdCBfZW5jb2RlID0gZW5jb2RlciA/IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGVuY29kZXIuY2FsbCh0aGlzLCB2YWx1ZSwgZW5jb2RlKTtcbiAgfSA6IGVuY29kZTtcblxuICByZXR1cm4gdGhpcy5fcGFpcnMubWFwKGZ1bmN0aW9uIGVhY2gocGFpcikge1xuICAgIHJldHVybiBfZW5jb2RlKHBhaXJbMF0pICsgJz0nICsgX2VuY29kZShwYWlyWzFdKTtcbiAgfSwgJycpLmpvaW4oJyYnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF4aW9zVVJMU2VhcmNoUGFyYW1zO1xuIiwiY29uc3QgSHR0cFN0YXR1c0NvZGUgPSB7XG4gIENvbnRpbnVlOiAxMDAsXG4gIFN3aXRjaGluZ1Byb3RvY29sczogMTAxLFxuICBQcm9jZXNzaW5nOiAxMDIsXG4gIEVhcmx5SGludHM6IDEwMyxcbiAgT2s6IDIwMCxcbiAgQ3JlYXRlZDogMjAxLFxuICBBY2NlcHRlZDogMjAyLFxuICBOb25BdXRob3JpdGF0aXZlSW5mb3JtYXRpb246IDIwMyxcbiAgTm9Db250ZW50OiAyMDQsXG4gIFJlc2V0Q29udGVudDogMjA1LFxuICBQYXJ0aWFsQ29udGVudDogMjA2LFxuICBNdWx0aVN0YXR1czogMjA3LFxuICBBbHJlYWR5UmVwb3J0ZWQ6IDIwOCxcbiAgSW1Vc2VkOiAyMjYsXG4gIE11bHRpcGxlQ2hvaWNlczogMzAwLFxuICBNb3ZlZFBlcm1hbmVudGx5OiAzMDEsXG4gIEZvdW5kOiAzMDIsXG4gIFNlZU90aGVyOiAzMDMsXG4gIE5vdE1vZGlmaWVkOiAzMDQsXG4gIFVzZVByb3h5OiAzMDUsXG4gIFVudXNlZDogMzA2LFxuICBUZW1wb3JhcnlSZWRpcmVjdDogMzA3LFxuICBQZXJtYW5lbnRSZWRpcmVjdDogMzA4LFxuICBCYWRSZXF1ZXN0OiA0MDAsXG4gIFVuYXV0aG9yaXplZDogNDAxLFxuICBQYXltZW50UmVxdWlyZWQ6IDQwMixcbiAgRm9yYmlkZGVuOiA0MDMsXG4gIE5vdEZvdW5kOiA0MDQsXG4gIE1ldGhvZE5vdEFsbG93ZWQ6IDQwNSxcbiAgTm90QWNjZXB0YWJsZTogNDA2LFxuICBQcm94eUF1dGhlbnRpY2F0aW9uUmVxdWlyZWQ6IDQwNyxcbiAgUmVxdWVzdFRpbWVvdXQ6IDQwOCxcbiAgQ29uZmxpY3Q6IDQwOSxcbiAgR29uZTogNDEwLFxuICBMZW5ndGhSZXF1aXJlZDogNDExLFxuICBQcmVjb25kaXRpb25GYWlsZWQ6IDQxMixcbiAgUGF5bG9hZFRvb0xhcmdlOiA0MTMsXG4gIFVyaVRvb0xvbmc6IDQxNCxcbiAgVW5zdXBwb3J0ZWRNZWRpYVR5cGU6IDQxNSxcbiAgUmFuZ2VOb3RTYXRpc2ZpYWJsZTogNDE2LFxuICBFeHBlY3RhdGlvbkZhaWxlZDogNDE3LFxuICBJbUFUZWFwb3Q6IDQxOCxcbiAgTWlzZGlyZWN0ZWRSZXF1ZXN0OiA0MjEsXG4gIFVucHJvY2Vzc2FibGVFbnRpdHk6IDQyMixcbiAgTG9ja2VkOiA0MjMsXG4gIEZhaWxlZERlcGVuZGVuY3k6IDQyNCxcbiAgVG9vRWFybHk6IDQyNSxcbiAgVXBncmFkZVJlcXVpcmVkOiA0MjYsXG4gIFByZWNvbmRpdGlvblJlcXVpcmVkOiA0MjgsXG4gIFRvb01hbnlSZXF1ZXN0czogNDI5LFxuICBSZXF1ZXN0SGVhZGVyRmllbGRzVG9vTGFyZ2U6IDQzMSxcbiAgVW5hdmFpbGFibGVGb3JMZWdhbFJlYXNvbnM6IDQ1MSxcbiAgSW50ZXJuYWxTZXJ2ZXJFcnJvcjogNTAwLFxuICBOb3RJbXBsZW1lbnRlZDogNTAxLFxuICBCYWRHYXRld2F5OiA1MDIsXG4gIFNlcnZpY2VVbmF2YWlsYWJsZTogNTAzLFxuICBHYXRld2F5VGltZW91dDogNTA0LFxuICBIdHRwVmVyc2lvbk5vdFN1cHBvcnRlZDogNTA1LFxuICBWYXJpYW50QWxzb05lZ290aWF0ZXM6IDUwNixcbiAgSW5zdWZmaWNpZW50U3RvcmFnZTogNTA3LFxuICBMb29wRGV0ZWN0ZWQ6IDUwOCxcbiAgTm90RXh0ZW5kZWQ6IDUxMCxcbiAgTmV0d29ya0F1dGhlbnRpY2F0aW9uUmVxdWlyZWQ6IDUxMSxcbn07XG5cbk9iamVjdC5lbnRyaWVzKEh0dHBTdGF0dXNDb2RlKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgSHR0cFN0YXR1c0NvZGVbdmFsdWVdID0ga2V5O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEh0dHBTdGF0dXNDb2RlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmd1bWVudHMpO1xuICB9O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEF4aW9zVVJMU2VhcmNoUGFyYW1zIGZyb20gJy4uL2hlbHBlcnMvQXhpb3NVUkxTZWFyY2hQYXJhbXMuanMnO1xuXG4vKipcbiAqIEl0IHJlcGxhY2VzIGFsbCBpbnN0YW5jZXMgb2YgdGhlIGNoYXJhY3RlcnMgYDpgLCBgJGAsIGAsYCwgYCtgLCBgW2AsIGFuZCBgXWAgd2l0aCB0aGVpclxuICogVVJJIGVuY29kZWQgY291bnRlcnBhcnRzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbCBUaGUgdmFsdWUgdG8gYmUgZW5jb2RlZC5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZW5jb2RlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEBwYXJhbSB7P29iamVjdH0gb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBvcHRpb25zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgXG4gIGNvbnN0IF9lbmNvZGUgPSBvcHRpb25zICYmIG9wdGlvbnMuZW5jb2RlIHx8IGVuY29kZTtcblxuICBjb25zdCBzZXJpYWxpemVGbiA9IG9wdGlvbnMgJiYgb3B0aW9ucy5zZXJpYWxpemU7XG5cbiAgbGV0IHNlcmlhbGl6ZWRQYXJhbXM7XG5cbiAgaWYgKHNlcmlhbGl6ZUZuKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHNlcmlhbGl6ZUZuKHBhcmFtcywgb3B0aW9ucyk7XG4gIH0gZWxzZSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykgP1xuICAgICAgcGFyYW1zLnRvU3RyaW5nKCkgOlxuICAgICAgbmV3IEF4aW9zVVJMU2VhcmNoUGFyYW1zKHBhcmFtcywgb3B0aW9ucykudG9TdHJpbmcoX2VuY29kZSk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIGNvbnN0IGhhc2htYXJrSW5kZXggPSB1cmwuaW5kZXhPZihcIiNcIik7XG5cbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLz9cXC8kLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5pbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBwbGF0Zm9ybS5oYXNTdGFuZGFyZEJyb3dzZXJFbnYgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICB7XG4gICAgd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICBjb25zdCBjb29raWUgPSBbbmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSldO1xuXG4gICAgICB1dGlscy5pc051bWJlcihleHBpcmVzKSAmJiBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG5cbiAgICAgIHV0aWxzLmlzU3RyaW5nKHBhdGgpICYmIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcblxuICAgICAgdXRpbHMuaXNTdHJpbmcoZG9tYWluKSAmJiBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuXG4gICAgICBzZWN1cmUgPT09IHRydWUgJiYgY29va2llLnB1c2goJ3NlY3VyZScpO1xuXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICB9LFxuXG4gICAgcmVhZChuYW1lKSB7XG4gICAgICBjb25zdCBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgIH0sXG5cbiAgICByZW1vdmUobmFtZSkge1xuICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICB9XG4gIH1cblxuICA6XG5cbiAgLy8gTm9uLXN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICB7XG4gICAgd3JpdGUoKSB7fSxcbiAgICByZWFkKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICByZW1vdmUoKSB7fVxuICB9O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbi8qKlxuICogSXQgdGFrZXMgYSBzdHJpbmcgbGlrZSBgZm9vW3hdW3ldW3pdYCBhbmQgcmV0dXJucyBhbiBhcnJheSBsaWtlIGBbJ2ZvbycsICd4JywgJ3knLCAneiddXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICpcbiAqIEByZXR1cm5zIEFuIGFycmF5IG9mIHN0cmluZ3MuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlUHJvcFBhdGgobmFtZSkge1xuICAvLyBmb29beF1beV1bel1cbiAgLy8gZm9vLngueS56XG4gIC8vIGZvby14LXktelxuICAvLyBmb28geCB5IHpcbiAgcmV0dXJuIHV0aWxzLm1hdGNoQWxsKC9cXHcrfFxcWyhcXHcqKV0vZywgbmFtZSkubWFwKG1hdGNoID0+IHtcbiAgICByZXR1cm4gbWF0Y2hbMF0gPT09ICdbXScgPyAnJyA6IG1hdGNoWzFdIHx8IG1hdGNoWzBdO1xuICB9KTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGFuIGFycmF5IHRvIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PGFueT59IGFyciAtIFRoZSBhcnJheSB0byBjb252ZXJ0IHRvIGFuIG9iamVjdC5cbiAqXG4gKiBAcmV0dXJucyBBbiBvYmplY3Qgd2l0aCB0aGUgc2FtZSBrZXlzIGFuZCB2YWx1ZXMgYXMgdGhlIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheVRvT2JqZWN0KGFycikge1xuICBjb25zdCBvYmogPSB7fTtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGFycik7XG4gIGxldCBpO1xuICBjb25zdCBsZW4gPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGtleTtcbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAga2V5ID0ga2V5c1tpXTtcbiAgICBvYmpba2V5XSA9IGFycltrZXldO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogSXQgdGFrZXMgYSBGb3JtRGF0YSBvYmplY3QgYW5kIHJldHVybnMgYSBKYXZhU2NyaXB0IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtRGF0YSBUaGUgRm9ybURhdGEgb2JqZWN0IHRvIGNvbnZlcnQgdG8gSlNPTi5cbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0PHN0cmluZywgYW55PiB8IG51bGx9IFRoZSBjb252ZXJ0ZWQgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBmb3JtRGF0YVRvSlNPTihmb3JtRGF0YSkge1xuICBmdW5jdGlvbiBidWlsZFBhdGgocGF0aCwgdmFsdWUsIHRhcmdldCwgaW5kZXgpIHtcbiAgICBsZXQgbmFtZSA9IHBhdGhbaW5kZXgrK107XG5cbiAgICBpZiAobmFtZSA9PT0gJ19fcHJvdG9fXycpIHJldHVybiB0cnVlO1xuXG4gICAgY29uc3QgaXNOdW1lcmljS2V5ID0gTnVtYmVyLmlzRmluaXRlKCtuYW1lKTtcbiAgICBjb25zdCBpc0xhc3QgPSBpbmRleCA+PSBwYXRoLmxlbmd0aDtcbiAgICBuYW1lID0gIW5hbWUgJiYgdXRpbHMuaXNBcnJheSh0YXJnZXQpID8gdGFyZ2V0Lmxlbmd0aCA6IG5hbWU7XG5cbiAgICBpZiAoaXNMYXN0KSB7XG4gICAgICBpZiAodXRpbHMuaGFzT3duUHJvcCh0YXJnZXQsIG5hbWUpKSB7XG4gICAgICAgIHRhcmdldFtuYW1lXSA9IFt0YXJnZXRbbmFtZV0sIHZhbHVlXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldFtuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gIWlzTnVtZXJpY0tleTtcbiAgICB9XG5cbiAgICBpZiAoIXRhcmdldFtuYW1lXSB8fCAhdXRpbHMuaXNPYmplY3QodGFyZ2V0W25hbWVdKSkge1xuICAgICAgdGFyZ2V0W25hbWVdID0gW107XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYnVpbGRQYXRoKHBhdGgsIHZhbHVlLCB0YXJnZXRbbmFtZV0sIGluZGV4KTtcblxuICAgIGlmIChyZXN1bHQgJiYgdXRpbHMuaXNBcnJheSh0YXJnZXRbbmFtZV0pKSB7XG4gICAgICB0YXJnZXRbbmFtZV0gPSBhcnJheVRvT2JqZWN0KHRhcmdldFtuYW1lXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICFpc051bWVyaWNLZXk7XG4gIH1cblxuICBpZiAodXRpbHMuaXNGb3JtRGF0YShmb3JtRGF0YSkgJiYgdXRpbHMuaXNGdW5jdGlvbihmb3JtRGF0YS5lbnRyaWVzKSkge1xuICAgIGNvbnN0IG9iaiA9IHt9O1xuXG4gICAgdXRpbHMuZm9yRWFjaEVudHJ5KGZvcm1EYXRhLCAobmFtZSwgdmFsdWUpID0+IHtcbiAgICAgIGJ1aWxkUGF0aChwYXJzZVByb3BQYXRoKG5hbWUpLCB2YWx1ZSwgb2JqLCAwKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybURhdGFUb0pTT047XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkK1xcLS5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhbiBlcnJvciB0aHJvd24gYnkgQXhpb3NcbiAqXG4gKiBAcGFyYW0geyp9IHBheWxvYWQgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgcGF5bG9hZCBpcyBhbiBlcnJvciB0aHJvd24gYnkgQXhpb3MsIG90aGVyd2lzZSBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0F4aW9zRXJyb3IocGF5bG9hZCkge1xuICByZXR1cm4gdXRpbHMuaXNPYmplY3QocGF5bG9hZCkgJiYgKHBheWxvYWQuaXNBeGlvc0Vycm9yID09PSB0cnVlKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4uL3BsYXRmb3JtL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgcGxhdGZvcm0uaGFzU3RhbmRhcmRCcm93c2VyRW52ID9cblxuLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4vLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICBjb25zdCBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICBjb25zdCB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsZXQgb3JpZ2luVVJMO1xuXG4gICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdHMgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgbGV0IGhyZWYgPSB1cmw7XG5cbiAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgfVxuXG4gICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH0pKCk7XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc3RyaWN0XG5leHBvcnQgZGVmYXVsdCBudWxsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5cbi8vIFJhd0F4aW9zSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbmNvbnN0IGlnbm9yZUR1cGxpY2F0ZU9mID0gdXRpbHMudG9PYmplY3RTZXQoW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl0pO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcmF3SGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKlxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgcmF3SGVhZGVycyA9PiB7XG4gIGNvbnN0IHBhcnNlZCA9IHt9O1xuICBsZXQga2V5O1xuICBsZXQgdmFsO1xuICBsZXQgaTtcblxuICByYXdIZWFkZXJzICYmIHJhd0hlYWRlcnMuc3BsaXQoJ1xcbicpLmZvckVhY2goZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gbGluZS5zdWJzdHJpbmcoMCwgaSkudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gbGluZS5zdWJzdHJpbmcoaSArIDEpLnRyaW0oKTtcblxuICAgIGlmICgha2V5IHx8IChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZltrZXldKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgaWYgKHBhcnNlZFtrZXldKSB7XG4gICAgICAgIHBhcnNlZFtrZXldLnB1c2godmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gW3ZhbF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VQcm90b2NvbCh1cmwpIHtcbiAgY29uc3QgbWF0Y2ggPSAvXihbLStcXHddezEsMjV9KSg6P1xcL1xcL3w6KS8uZXhlYyh1cmwpO1xuICByZXR1cm4gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2FsY3VsYXRlIGRhdGEgbWF4UmF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IFtzYW1wbGVzQ291bnQ9IDEwXVxuICogQHBhcmFtIHtOdW1iZXJ9IFttaW49IDEwMDBdXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIHNwZWVkb21ldGVyKHNhbXBsZXNDb3VudCwgbWluKSB7XG4gIHNhbXBsZXNDb3VudCA9IHNhbXBsZXNDb3VudCB8fCAxMDtcbiAgY29uc3QgYnl0ZXMgPSBuZXcgQXJyYXkoc2FtcGxlc0NvdW50KTtcbiAgY29uc3QgdGltZXN0YW1wcyA9IG5ldyBBcnJheShzYW1wbGVzQ291bnQpO1xuICBsZXQgaGVhZCA9IDA7XG4gIGxldCB0YWlsID0gMDtcbiAgbGV0IGZpcnN0U2FtcGxlVFM7XG5cbiAgbWluID0gbWluICE9PSB1bmRlZmluZWQgPyBtaW4gOiAxMDAwO1xuXG4gIHJldHVybiBmdW5jdGlvbiBwdXNoKGNodW5rTGVuZ3RoKSB7XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcblxuICAgIGNvbnN0IHN0YXJ0ZWRBdCA9IHRpbWVzdGFtcHNbdGFpbF07XG5cbiAgICBpZiAoIWZpcnN0U2FtcGxlVFMpIHtcbiAgICAgIGZpcnN0U2FtcGxlVFMgPSBub3c7XG4gICAgfVxuXG4gICAgYnl0ZXNbaGVhZF0gPSBjaHVua0xlbmd0aDtcbiAgICB0aW1lc3RhbXBzW2hlYWRdID0gbm93O1xuXG4gICAgbGV0IGkgPSB0YWlsO1xuICAgIGxldCBieXRlc0NvdW50ID0gMDtcblxuICAgIHdoaWxlIChpICE9PSBoZWFkKSB7XG4gICAgICBieXRlc0NvdW50ICs9IGJ5dGVzW2krK107XG4gICAgICBpID0gaSAlIHNhbXBsZXNDb3VudDtcbiAgICB9XG5cbiAgICBoZWFkID0gKGhlYWQgKyAxKSAlIHNhbXBsZXNDb3VudDtcblxuICAgIGlmIChoZWFkID09PSB0YWlsKSB7XG4gICAgICB0YWlsID0gKHRhaWwgKyAxKSAlIHNhbXBsZXNDb3VudDtcbiAgICB9XG5cbiAgICBpZiAobm93IC0gZmlyc3RTYW1wbGVUUyA8IG1pbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhc3NlZCA9IHN0YXJ0ZWRBdCAmJiBub3cgLSBzdGFydGVkQXQ7XG5cbiAgICByZXR1cm4gcGFzc2VkID8gTWF0aC5yb3VuZChieXRlc0NvdW50ICogMTAwMCAvIHBhc3NlZCkgOiB1bmRlZmluZWQ7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNwZWVkb21ldGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4uL2NvcmUvQXhpb3NFcnJvci5qcyc7XG4vLyB0ZW1wb3JhcnkgaG90Zml4IHRvIGF2b2lkIGNpcmN1bGFyIHJlZmVyZW5jZXMgdW50aWwgQXhpb3NVUkxTZWFyY2hQYXJhbXMgaXMgcmVmYWN0b3JlZFxuaW1wb3J0IFBsYXRmb3JtRm9ybURhdGEgZnJvbSAnLi4vcGxhdGZvcm0vbm9kZS9jbGFzc2VzL0Zvcm1EYXRhLmpzJztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBnaXZlbiB0aGluZyBpcyBhIGFycmF5IG9yIGpzIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGhpbmcgLSBUaGUgb2JqZWN0IG9yIGFycmF5IHRvIGJlIHZpc2l0ZWQuXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzVmlzaXRhYmxlKHRoaW5nKSB7XG4gIHJldHVybiB1dGlscy5pc1BsYWluT2JqZWN0KHRoaW5nKSB8fCB1dGlscy5pc0FycmF5KHRoaW5nKTtcbn1cblxuLyoqXG4gKiBJdCByZW1vdmVzIHRoZSBicmFja2V0cyBmcm9tIHRoZSBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIGtleSBvZiB0aGUgcGFyYW1ldGVyLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBrZXkgd2l0aG91dCB0aGUgYnJhY2tldHMuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUJyYWNrZXRzKGtleSkge1xuICByZXR1cm4gdXRpbHMuZW5kc1dpdGgoa2V5LCAnW10nKSA/IGtleS5zbGljZSgwLCAtMikgOiBrZXk7XG59XG5cbi8qKlxuICogSXQgdGFrZXMgYSBwYXRoLCBhIGtleSwgYW5kIGEgYm9vbGVhbiwgYW5kIHJldHVybnMgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIFRoZSBwYXRoIHRvIHRoZSBjdXJyZW50IGtleS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUga2V5IG9mIHRoZSBjdXJyZW50IG9iamVjdCBiZWluZyBpdGVyYXRlZCBvdmVyLlxuICogQHBhcmFtIHtzdHJpbmd9IGRvdHMgLSBJZiB0cnVlLCB0aGUga2V5IHdpbGwgYmUgcmVuZGVyZWQgd2l0aCBkb3RzIGluc3RlYWQgb2YgYnJhY2tldHMuXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHBhdGggdG8gdGhlIGN1cnJlbnQga2V5LlxuICovXG5mdW5jdGlvbiByZW5kZXJLZXkocGF0aCwga2V5LCBkb3RzKSB7XG4gIGlmICghcGF0aCkgcmV0dXJuIGtleTtcbiAgcmV0dXJuIHBhdGguY29uY2F0KGtleSkubWFwKGZ1bmN0aW9uIGVhY2godG9rZW4sIGkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB0b2tlbiA9IHJlbW92ZUJyYWNrZXRzKHRva2VuKTtcbiAgICByZXR1cm4gIWRvdHMgJiYgaSA/ICdbJyArIHRva2VuICsgJ10nIDogdG9rZW47XG4gIH0pLmpvaW4oZG90cyA/ICcuJyA6ICcnKTtcbn1cblxuLyoqXG4gKiBJZiB0aGUgYXJyYXkgaXMgYW4gYXJyYXkgYW5kIG5vbmUgb2YgaXRzIGVsZW1lbnRzIGFyZSB2aXNpdGFibGUsIHRoZW4gaXQncyBhIGZsYXQgYXJyYXkuXG4gKlxuICogQHBhcmFtIHtBcnJheTxhbnk+fSBhcnIgLSBUaGUgYXJyYXkgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNGbGF0QXJyYXkoYXJyKSB7XG4gIHJldHVybiB1dGlscy5pc0FycmF5KGFycikgJiYgIWFyci5zb21lKGlzVmlzaXRhYmxlKTtcbn1cblxuY29uc3QgcHJlZGljYXRlcyA9IHV0aWxzLnRvRmxhdE9iamVjdCh1dGlscywge30sIG51bGwsIGZ1bmN0aW9uIGZpbHRlcihwcm9wKSB7XG4gIHJldHVybiAvXmlzW0EtWl0vLnRlc3QocHJvcCk7XG59KTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgZGF0YSBvYmplY3QgdG8gRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0gez9PYmplY3R9IFtmb3JtRGF0YV1cbiAqIEBwYXJhbSB7P09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy52aXNpdG9yXVxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5tZXRhVG9rZW5zID0gdHJ1ZV1cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZG90cyA9IGZhbHNlXVxuICogQHBhcmFtIHs/Qm9vbGVhbn0gW29wdGlvbnMuaW5kZXhlcyA9IGZhbHNlXVxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKiovXG5cbi8qKlxuICogSXQgY29udmVydHMgYW4gb2JqZWN0IGludG8gYSBGb3JtRGF0YSBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdDxhbnksIGFueT59IG9iaiAtIFRoZSBvYmplY3QgdG8gY29udmVydCB0byBmb3JtIGRhdGEuXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybURhdGEgLSBUaGUgRm9ybURhdGEgb2JqZWN0IHRvIGFwcGVuZCB0by5cbiAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgYW55Pn0gb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIHRvRm9ybURhdGEob2JqLCBmb3JtRGF0YSwgb3B0aW9ucykge1xuICBpZiAoIXV0aWxzLmlzT2JqZWN0KG9iaikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd0YXJnZXQgbXVzdCBiZSBhbiBvYmplY3QnKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBmb3JtRGF0YSA9IGZvcm1EYXRhIHx8IG5ldyAoUGxhdGZvcm1Gb3JtRGF0YSB8fCBGb3JtRGF0YSkoKTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgb3B0aW9ucyA9IHV0aWxzLnRvRmxhdE9iamVjdChvcHRpb25zLCB7XG4gICAgbWV0YVRva2VuczogdHJ1ZSxcbiAgICBkb3RzOiBmYWxzZSxcbiAgICBpbmRleGVzOiBmYWxzZVxuICB9LCBmYWxzZSwgZnVuY3Rpb24gZGVmaW5lZChvcHRpb24sIHNvdXJjZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lcS1udWxsLGVxZXFlcVxuICAgIHJldHVybiAhdXRpbHMuaXNVbmRlZmluZWQoc291cmNlW29wdGlvbl0pO1xuICB9KTtcblxuICBjb25zdCBtZXRhVG9rZW5zID0gb3B0aW9ucy5tZXRhVG9rZW5zO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgY29uc3QgdmlzaXRvciA9IG9wdGlvbnMudmlzaXRvciB8fCBkZWZhdWx0VmlzaXRvcjtcbiAgY29uc3QgZG90cyA9IG9wdGlvbnMuZG90cztcbiAgY29uc3QgaW5kZXhlcyA9IG9wdGlvbnMuaW5kZXhlcztcbiAgY29uc3QgX0Jsb2IgPSBvcHRpb25zLkJsb2IgfHwgdHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnICYmIEJsb2I7XG4gIGNvbnN0IHVzZUJsb2IgPSBfQmxvYiAmJiB1dGlscy5pc1NwZWNDb21wbGlhbnRGb3JtKGZvcm1EYXRhKTtcblxuICBpZiAoIXV0aWxzLmlzRnVuY3Rpb24odmlzaXRvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2aXNpdG9yIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29udmVydFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSByZXR1cm4gJyc7XG5cbiAgICBpZiAodXRpbHMuaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlLnRvSVNPU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgaWYgKCF1c2VCbG9iICYmIHV0aWxzLmlzQmxvYih2YWx1ZSkpIHtcbiAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKCdCbG9iIGlzIG5vdCBzdXBwb3J0ZWQuIFVzZSBhIEJ1ZmZlciBpbnN0ZWFkLicpO1xuICAgIH1cblxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyKHZhbHVlKSB8fCB1dGlscy5pc1R5cGVkQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdXNlQmxvYiAmJiB0eXBlb2YgQmxvYiA9PT0gJ2Z1bmN0aW9uJyA/IG5ldyBCbG9iKFt2YWx1ZV0pIDogQnVmZmVyLmZyb20odmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IHZpc2l0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSBrZXlcbiAgICogQHBhcmFtIHtBcnJheTxTdHJpbmd8TnVtYmVyPn0gcGF0aFxuICAgKiBAdGhpcyB7Rm9ybURhdGF9XG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufSByZXR1cm4gdHJ1ZSB0byB2aXNpdCB0aGUgZWFjaCBwcm9wIG9mIHRoZSB2YWx1ZSByZWN1cnNpdmVseVxuICAgKi9cbiAgZnVuY3Rpb24gZGVmYXVsdFZpc2l0b3IodmFsdWUsIGtleSwgcGF0aCkge1xuICAgIGxldCBhcnIgPSB2YWx1ZTtcblxuICAgIGlmICh2YWx1ZSAmJiAhcGF0aCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAodXRpbHMuZW5kc1dpdGgoa2V5LCAne30nKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAga2V5ID0gbWV0YVRva2VucyA/IGtleSA6IGtleS5zbGljZSgwLCAtMik7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICh1dGlscy5pc0FycmF5KHZhbHVlKSAmJiBpc0ZsYXRBcnJheSh2YWx1ZSkpIHx8XG4gICAgICAgICgodXRpbHMuaXNGaWxlTGlzdCh2YWx1ZSkgfHwgdXRpbHMuZW5kc1dpdGgoa2V5LCAnW10nKSkgJiYgKGFyciA9IHV0aWxzLnRvQXJyYXkodmFsdWUpKVxuICAgICAgICApKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBrZXkgPSByZW1vdmVCcmFja2V0cyhrZXkpO1xuXG4gICAgICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uIGVhY2goZWwsIGluZGV4KSB7XG4gICAgICAgICAgISh1dGlscy5pc1VuZGVmaW5lZChlbCkgfHwgZWwgPT09IG51bGwpICYmIGZvcm1EYXRhLmFwcGVuZChcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXN0ZWQtdGVybmFyeVxuICAgICAgICAgICAgaW5kZXhlcyA9PT0gdHJ1ZSA/IHJlbmRlcktleShba2V5XSwgaW5kZXgsIGRvdHMpIDogKGluZGV4ZXMgPT09IG51bGwgPyBrZXkgOiBrZXkgKyAnW10nKSxcbiAgICAgICAgICAgIGNvbnZlcnRWYWx1ZShlbClcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1Zpc2l0YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZvcm1EYXRhLmFwcGVuZChyZW5kZXJLZXkocGF0aCwga2V5LCBkb3RzKSwgY29udmVydFZhbHVlKHZhbHVlKSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBzdGFjayA9IFtdO1xuXG4gIGNvbnN0IGV4cG9zZWRIZWxwZXJzID0gT2JqZWN0LmFzc2lnbihwcmVkaWNhdGVzLCB7XG4gICAgZGVmYXVsdFZpc2l0b3IsXG4gICAgY29udmVydFZhbHVlLFxuICAgIGlzVmlzaXRhYmxlXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGJ1aWxkKHZhbHVlLCBwYXRoKSB7XG4gICAgaWYgKHV0aWxzLmlzVW5kZWZpbmVkKHZhbHVlKSkgcmV0dXJuO1xuXG4gICAgaWYgKHN0YWNrLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ0NpcmN1bGFyIHJlZmVyZW5jZSBkZXRlY3RlZCBpbiAnICsgcGF0aC5qb2luKCcuJykpO1xuICAgIH1cblxuICAgIHN0YWNrLnB1c2godmFsdWUpO1xuXG4gICAgdXRpbHMuZm9yRWFjaCh2YWx1ZSwgZnVuY3Rpb24gZWFjaChlbCwga2V5KSB7XG4gICAgICBjb25zdCByZXN1bHQgPSAhKHV0aWxzLmlzVW5kZWZpbmVkKGVsKSB8fCBlbCA9PT0gbnVsbCkgJiYgdmlzaXRvci5jYWxsKFxuICAgICAgICBmb3JtRGF0YSwgZWwsIHV0aWxzLmlzU3RyaW5nKGtleSkgPyBrZXkudHJpbSgpIDoga2V5LCBwYXRoLCBleHBvc2VkSGVscGVyc1xuICAgICAgKTtcblxuICAgICAgaWYgKHJlc3VsdCA9PT0gdHJ1ZSkge1xuICAgICAgICBidWlsZChlbCwgcGF0aCA/IHBhdGguY29uY2F0KGtleSkgOiBba2V5XSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzdGFjay5wb3AoKTtcbiAgfVxuXG4gIGlmICghdXRpbHMuaXNPYmplY3Qob2JqKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2RhdGEgbXVzdCBiZSBhbiBvYmplY3QnKTtcbiAgfVxuXG4gIGJ1aWxkKG9iaik7XG5cbiAgcmV0dXJuIGZvcm1EYXRhO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b0Zvcm1EYXRhO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHRvRm9ybURhdGEgZnJvbSAnLi90b0Zvcm1EYXRhLmpzJztcbmltcG9ydCBwbGF0Zm9ybSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvVVJMRW5jb2RlZEZvcm0oZGF0YSwgb3B0aW9ucykge1xuICByZXR1cm4gdG9Gb3JtRGF0YShkYXRhLCBuZXcgcGxhdGZvcm0uY2xhc3Nlcy5VUkxTZWFyY2hQYXJhbXMoKSwgT2JqZWN0LmFzc2lnbih7XG4gICAgdmlzaXRvcjogZnVuY3Rpb24odmFsdWUsIGtleSwgcGF0aCwgaGVscGVycykge1xuICAgICAgaWYgKHBsYXRmb3JtLmlzTm9kZSAmJiB1dGlscy5pc0J1ZmZlcih2YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQoa2V5LCB2YWx1ZS50b1N0cmluZygnYmFzZTY0JykpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoZWxwZXJzLmRlZmF1bHRWaXNpdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9LCBvcHRpb25zKSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7VkVSU0lPTn0gZnJvbSAnLi4vZW52L2RhdGEuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcblxuY29uc3QgdmFsaWRhdG9ycyA9IHt9O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuWydvYmplY3QnLCAnYm9vbGVhbicsICdudW1iZXInLCAnZnVuY3Rpb24nLCAnc3RyaW5nJywgJ3N5bWJvbCddLmZvckVhY2goKHR5cGUsIGkpID0+IHtcbiAgdmFsaWRhdG9yc1t0eXBlXSA9IGZ1bmN0aW9uIHZhbGlkYXRvcih0aGluZykge1xuICAgIHJldHVybiB0eXBlb2YgdGhpbmcgPT09IHR5cGUgfHwgJ2EnICsgKGkgPCAxID8gJ24gJyA6ICcgJykgKyB0eXBlO1xuICB9O1xufSk7XG5cbmNvbnN0IGRlcHJlY2F0ZWRXYXJuaW5ncyA9IHt9O1xuXG4vKipcbiAqIFRyYW5zaXRpb25hbCBvcHRpb24gdmFsaWRhdG9yXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbnxib29sZWFuP30gdmFsaWRhdG9yIC0gc2V0IHRvIGZhbHNlIGlmIHRoZSB0cmFuc2l0aW9uYWwgb3B0aW9uIGhhcyBiZWVuIHJlbW92ZWRcbiAqIEBwYXJhbSB7c3RyaW5nP30gdmVyc2lvbiAtIGRlcHJlY2F0ZWQgdmVyc2lvbiAvIHJlbW92ZWQgc2luY2UgdmVyc2lvblxuICogQHBhcmFtIHtzdHJpbmc/fSBtZXNzYWdlIC0gc29tZSBtZXNzYWdlIHdpdGggYWRkaXRpb25hbCBpbmZvXG4gKlxuICogQHJldHVybnMge2Z1bmN0aW9ufVxuICovXG52YWxpZGF0b3JzLnRyYW5zaXRpb25hbCA9IGZ1bmN0aW9uIHRyYW5zaXRpb25hbCh2YWxpZGF0b3IsIHZlcnNpb24sIG1lc3NhZ2UpIHtcbiAgZnVuY3Rpb24gZm9ybWF0TWVzc2FnZShvcHQsIGRlc2MpIHtcbiAgICByZXR1cm4gJ1tBeGlvcyB2JyArIFZFUlNJT04gKyAnXSBUcmFuc2l0aW9uYWwgb3B0aW9uIFxcJycgKyBvcHQgKyAnXFwnJyArIGRlc2MgKyAobWVzc2FnZSA/ICcuICcgKyBtZXNzYWdlIDogJycpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgcmV0dXJuICh2YWx1ZSwgb3B0LCBvcHRzKSA9PiB7XG4gICAgaWYgKHZhbGlkYXRvciA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKFxuICAgICAgICBmb3JtYXRNZXNzYWdlKG9wdCwgJyBoYXMgYmVlbiByZW1vdmVkJyArICh2ZXJzaW9uID8gJyBpbiAnICsgdmVyc2lvbiA6ICcnKSksXG4gICAgICAgIEF4aW9zRXJyb3IuRVJSX0RFUFJFQ0FURURcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHZlcnNpb24gJiYgIWRlcHJlY2F0ZWRXYXJuaW5nc1tvcHRdKSB7XG4gICAgICBkZXByZWNhdGVkV2FybmluZ3Nbb3B0XSA9IHRydWU7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBmb3JtYXRNZXNzYWdlKFxuICAgICAgICAgIG9wdCxcbiAgICAgICAgICAnIGhhcyBiZWVuIGRlcHJlY2F0ZWQgc2luY2UgdicgKyB2ZXJzaW9uICsgJyBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZWFyIGZ1dHVyZSdcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdG9yID8gdmFsaWRhdG9yKHZhbHVlLCBvcHQsIG9wdHMpIDogdHJ1ZTtcbiAgfTtcbn07XG5cbi8qKlxuICogQXNzZXJ0IG9iamVjdCdzIHByb3BlcnRpZXMgdHlwZVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge29iamVjdH0gc2NoZW1hXG4gKiBAcGFyYW0ge2Jvb2xlYW4/fSBhbGxvd1Vua25vd25cbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5cbmZ1bmN0aW9uIGFzc2VydE9wdGlvbnMob3B0aW9ucywgc2NoZW1hLCBhbGxvd1Vua25vd24pIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKCdvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0JywgQXhpb3NFcnJvci5FUlJfQkFEX09QVElPTl9WQUxVRSk7XG4gIH1cbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpO1xuICBsZXQgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tID4gMCkge1xuICAgIGNvbnN0IG9wdCA9IGtleXNbaV07XG4gICAgY29uc3QgdmFsaWRhdG9yID0gc2NoZW1hW29wdF07XG4gICAgaWYgKHZhbGlkYXRvcikge1xuICAgICAgY29uc3QgdmFsdWUgPSBvcHRpb25zW29wdF07XG4gICAgICBjb25zdCByZXN1bHQgPSB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbGlkYXRvcih2YWx1ZSwgb3B0LCBvcHRpb25zKTtcbiAgICAgIGlmIChyZXN1bHQgIT09IHRydWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoJ29wdGlvbiAnICsgb3B0ICsgJyBtdXN0IGJlICcgKyByZXN1bHQsIEF4aW9zRXJyb3IuRVJSX0JBRF9PUFRJT05fVkFMVUUpO1xuICAgICAgfVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhbGxvd1Vua25vd24gIT09IHRydWUpIHtcbiAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKCdVbmtub3duIG9wdGlvbiAnICsgb3B0LCBBeGlvc0Vycm9yLkVSUl9CQURfT1BUSU9OKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBhc3NlcnRPcHRpb25zLFxuICB2YWxpZGF0b3JzXG59O1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyA/IEJsb2IgOiBudWxsXG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcgPyBGb3JtRGF0YSA6IG51bGw7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBBeGlvc1VSTFNlYXJjaFBhcmFtcyBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL0F4aW9zVVJMU2VhcmNoUGFyYW1zLmpzJztcbmV4cG9ydCBkZWZhdWx0IHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnID8gVVJMU2VhcmNoUGFyYW1zIDogQXhpb3NVUkxTZWFyY2hQYXJhbXM7XG4iLCJpbXBvcnQgVVJMU2VhcmNoUGFyYW1zIGZyb20gJy4vY2xhc3Nlcy9VUkxTZWFyY2hQYXJhbXMuanMnXG5pbXBvcnQgRm9ybURhdGEgZnJvbSAnLi9jbGFzc2VzL0Zvcm1EYXRhLmpzJ1xuaW1wb3J0IEJsb2IgZnJvbSAnLi9jbGFzc2VzL0Jsb2IuanMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNCcm93c2VyOiB0cnVlLFxuICBjbGFzc2VzOiB7XG4gICAgVVJMU2VhcmNoUGFyYW1zLFxuICAgIEZvcm1EYXRhLFxuICAgIEJsb2JcbiAgfSxcbiAgcHJvdG9jb2xzOiBbJ2h0dHAnLCAnaHR0cHMnLCAnZmlsZScsICdibG9iJywgJ3VybCcsICdkYXRhJ11cbn07XG4iLCJjb25zdCBoYXNCcm93c2VyRW52ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmNvbnN0IGhhc1N0YW5kYXJkQnJvd3NlckVudiA9IChcbiAgKHByb2R1Y3QpID0+IHtcbiAgICByZXR1cm4gaGFzQnJvd3NlckVudiAmJiBbJ1JlYWN0TmF0aXZlJywgJ05hdGl2ZVNjcmlwdCcsICdOUyddLmluZGV4T2YocHJvZHVjdCkgPCAwXG4gIH0pKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5wcm9kdWN0KTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgd2ViV29ya2VyIGVudmlyb25tZW50XG4gKlxuICogQWx0aG91Z2ggdGhlIGBpc1N0YW5kYXJkQnJvd3NlckVudmAgbWV0aG9kIGluZGljYXRlcyB0aGF0XG4gKiBgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXJgLCB0aGUgV2ViV29ya2VyIHdpbGwgc3RpbGwgYmVcbiAqIGZpbHRlcmVkIG91dCBkdWUgdG8gaXRzIGp1ZGdtZW50IHN0YW5kYXJkXG4gKiBgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ2AuXG4gKiBUaGlzIGxlYWRzIHRvIGEgcHJvYmxlbSB3aGVuIGF4aW9zIHBvc3QgYEZvcm1EYXRhYCBpbiB3ZWJXb3JrZXJcbiAqL1xuY29uc3QgaGFzU3RhbmRhcmRCcm93c2VyV2ViV29ya2VyRW52ID0gKCgpID0+IHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgc2VsZiBpbnN0YW5jZW9mIFdvcmtlckdsb2JhbFNjb3BlICYmXG4gICAgdHlwZW9mIHNlbGYuaW1wb3J0U2NyaXB0cyA9PT0gJ2Z1bmN0aW9uJ1xuICApO1xufSkoKTtcblxuZXhwb3J0IHtcbiAgaGFzQnJvd3NlckVudixcbiAgaGFzU3RhbmRhcmRCcm93c2VyV2ViV29ya2VyRW52LFxuICBoYXNTdGFuZGFyZEJyb3dzZXJFbnZcbn1cbiIsImltcG9ydCBwbGF0Zm9ybSBmcm9tICcuL25vZGUvaW5kZXguanMnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi9jb21tb24vdXRpbHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC4uLnV0aWxzLFxuICAuLi5wbGF0Zm9ybVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgYmluZCBmcm9tICcuL2hlbHBlcnMvYmluZC5qcyc7XG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbmNvbnN0IHt0b1N0cmluZ30gPSBPYmplY3QucHJvdG90eXBlO1xuY29uc3Qge2dldFByb3RvdHlwZU9mfSA9IE9iamVjdDtcblxuY29uc3Qga2luZE9mID0gKGNhY2hlID0+IHRoaW5nID0+IHtcbiAgICBjb25zdCBzdHIgPSB0b1N0cmluZy5jYWxsKHRoaW5nKTtcbiAgICByZXR1cm4gY2FjaGVbc3RyXSB8fCAoY2FjaGVbc3RyXSA9IHN0ci5zbGljZSg4LCAtMSkudG9Mb3dlckNhc2UoKSk7XG59KShPYmplY3QuY3JlYXRlKG51bGwpKTtcblxuY29uc3Qga2luZE9mVGVzdCA9ICh0eXBlKSA9PiB7XG4gIHR5cGUgPSB0eXBlLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiAodGhpbmcpID0+IGtpbmRPZih0aGluZykgPT09IHR5cGVcbn1cblxuY29uc3QgdHlwZU9mVGVzdCA9IHR5cGUgPT4gdGhpbmcgPT4gdHlwZW9mIHRoaW5nID09PSB0eXBlO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3Qge2lzQXJyYXl9ID0gQXJyYXk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNVbmRlZmluZWQgPSB0eXBlT2ZUZXN0KCd1bmRlZmluZWQnKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0J1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsKSAmJiB2YWwuY29uc3RydWN0b3IgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbC5jb25zdHJ1Y3RvcilcbiAgICAmJiBpc0Z1bmN0aW9uKHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcikgJiYgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKHZhbCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNBcnJheUJ1ZmZlciA9IGtpbmRPZlRlc3QoJ0FycmF5QnVmZmVyJyk7XG5cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICBsZXQgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmIChpc0FycmF5QnVmZmVyKHZhbC5idWZmZXIpKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzU3RyaW5nID0gdHlwZU9mVGVzdCgnc3RyaW5nJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNGdW5jdGlvbiA9IHR5cGVPZlRlc3QoJ2Z1bmN0aW9uJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNOdW1iZXIgPSB0eXBlT2ZUZXN0KCdudW1iZXInKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHRoaW5nIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNPYmplY3QgPSAodGhpbmcpID0+IHRoaW5nICE9PSBudWxsICYmIHR5cGVvZiB0aGluZyA9PT0gJ29iamVjdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCb29sZWFuXG4gKlxuICogQHBhcmFtIHsqfSB0aGluZyBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCb29sZWFuLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNCb29sZWFuID0gdGhpbmcgPT4gdGhpbmcgPT09IHRydWUgfHwgdGhpbmcgPT09IGZhbHNlO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgcGxhaW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzUGxhaW5PYmplY3QgPSAodmFsKSA9PiB7XG4gIGlmIChraW5kT2YodmFsKSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBwcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZih2YWwpO1xuICByZXR1cm4gKHByb3RvdHlwZSA9PT0gbnVsbCB8fCBwcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGUgfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvdHlwZSkgPT09IG51bGwpICYmICEoU3ltYm9sLnRvU3RyaW5nVGFnIGluIHZhbCkgJiYgIShTeW1ib2wuaXRlcmF0b3IgaW4gdmFsKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzRGF0ZSA9IGtpbmRPZlRlc3QoJ0RhdGUnKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzRmlsZSA9IGtpbmRPZlRlc3QoJ0ZpbGUnKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzQmxvYiA9IGtpbmRPZlRlc3QoJ0Jsb2InKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVMaXN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0ZpbGVMaXN0ID0ga2luZE9mVGVzdCgnRmlsZUxpc3QnKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1N0cmVhbSA9ICh2YWwpID0+IGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7Kn0gdGhpbmcgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzRm9ybURhdGEgPSAodGhpbmcpID0+IHtcbiAgbGV0IGtpbmQ7XG4gIHJldHVybiB0aGluZyAmJiAoXG4gICAgKHR5cGVvZiBGb3JtRGF0YSA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGluZyBpbnN0YW5jZW9mIEZvcm1EYXRhKSB8fCAoXG4gICAgICBpc0Z1bmN0aW9uKHRoaW5nLmFwcGVuZCkgJiYgKFxuICAgICAgICAoa2luZCA9IGtpbmRPZih0aGluZykpID09PSAnZm9ybWRhdGEnIHx8XG4gICAgICAgIC8vIGRldGVjdCBmb3JtLWRhdGEgaW5zdGFuY2VcbiAgICAgICAgKGtpbmQgPT09ICdvYmplY3QnICYmIGlzRnVuY3Rpb24odGhpbmcudG9TdHJpbmcpICYmIHRoaW5nLnRvU3RyaW5nKCkgPT09ICdbb2JqZWN0IEZvcm1EYXRhXScpXG4gICAgICApXG4gICAgKVxuICApXG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1VSTFNlYXJjaFBhcmFtcyA9IGtpbmRPZlRlc3QoJ1VSTFNlYXJjaFBhcmFtcycpO1xuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5jb25zdCB0cmltID0gKHN0cikgPT4gc3RyLnRyaW0gP1xuICBzdHIudHJpbSgpIDogc3RyLnJlcGxhY2UoL15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLCAnJyk7XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFthbGxPd25LZXlzID0gZmFsc2VdXG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4sIHthbGxPd25LZXlzID0gZmFsc2V9ID0ge30pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgaTtcbiAgbGV0IGw7XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGNvbnN0IGtleXMgPSBhbGxPd25LZXlzID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKSA6IE9iamVjdC5rZXlzKG9iaik7XG4gICAgY29uc3QgbGVuID0ga2V5cy5sZW5ndGg7XG4gICAgbGV0IGtleTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmosIGtleSkge1xuICBrZXkgPSBrZXkudG9Mb3dlckNhc2UoKTtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gIGxldCBpID0ga2V5cy5sZW5ndGg7XG4gIGxldCBfa2V5O1xuICB3aGlsZSAoaS0tID4gMCkge1xuICAgIF9rZXkgPSBrZXlzW2ldO1xuICAgIGlmIChrZXkgPT09IF9rZXkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgcmV0dXJuIF9rZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5jb25zdCBfZ2xvYmFsID0gKCgpID0+IHtcbiAgLyplc2xpbnQgbm8tdW5kZWY6MCovXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGdsb2JhbFRoaXM7XG4gIHJldHVybiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwpXG59KSgpO1xuXG5jb25zdCBpc0NvbnRleHREZWZpbmVkID0gKGNvbnRleHQpID0+ICFpc1VuZGVmaW5lZChjb250ZXh0KSAmJiBjb250ZXh0ICE9PSBfZ2xvYmFsO1xuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIGNvbnN0IHtjYXNlbGVzc30gPSBpc0NvbnRleHREZWZpbmVkKHRoaXMpICYmIHRoaXMgfHwge307XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuICBjb25zdCBhc3NpZ25WYWx1ZSA9ICh2YWwsIGtleSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldEtleSA9IGNhc2VsZXNzICYmIGZpbmRLZXkocmVzdWx0LCBrZXkpIHx8IGtleTtcbiAgICBpZiAoaXNQbGFpbk9iamVjdChyZXN1bHRbdGFyZ2V0S2V5XSkgJiYgaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRbdGFyZ2V0S2V5XSA9IG1lcmdlKHJlc3VsdFt0YXJnZXRLZXldLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRbdGFyZ2V0S2V5XSA9IG1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWwpKSB7XG4gICAgICByZXN1bHRbdGFyZ2V0S2V5XSA9IHZhbC5zbGljZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRbdGFyZ2V0S2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBhcmd1bWVudHNbaV0gJiYgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKlxuICogQHBhcmFtIHtCb29sZWFufSBbYWxsT3duS2V5c11cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuY29uc3QgZXh0ZW5kID0gKGEsIGIsIHRoaXNBcmcsIHthbGxPd25LZXlzfT0ge30pID0+IHtcbiAgZm9yRWFjaChiLCAodmFsLCBrZXkpID0+IHtcbiAgICBpZiAodGhpc0FyZyAmJiBpc0Z1bmN0aW9uKHZhbCkpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSwge2FsbE93bktleXN9KTtcbiAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogUmVtb3ZlIGJ5dGUgb3JkZXIgbWFya2VyLiBUaGlzIGNhdGNoZXMgRUYgQkIgQkYgKHRoZSBVVEYtOCBCT00pXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgd2l0aCBCT01cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjb250ZW50IHZhbHVlIHdpdGhvdXQgQk9NXG4gKi9cbmNvbnN0IHN0cmlwQk9NID0gKGNvbnRlbnQpID0+IHtcbiAgaWYgKGNvbnRlbnQuY2hhckNvZGVBdCgwKSA9PT0gMHhGRUZGKSB7XG4gICAgY29udGVudCA9IGNvbnRlbnQuc2xpY2UoMSk7XG4gIH1cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbi8qKlxuICogSW5oZXJpdCB0aGUgcHJvdG90eXBlIG1ldGhvZHMgZnJvbSBvbmUgY29uc3RydWN0b3IgaW50byBhbm90aGVyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VwZXJDb25zdHJ1Y3RvclxuICogQHBhcmFtIHtvYmplY3R9IFtwcm9wc11cbiAqIEBwYXJhbSB7b2JqZWN0fSBbZGVzY3JpcHRvcnNdXG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmNvbnN0IGluaGVyaXRzID0gKGNvbnN0cnVjdG9yLCBzdXBlckNvbnN0cnVjdG9yLCBwcm9wcywgZGVzY3JpcHRvcnMpID0+IHtcbiAgY29uc3RydWN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNvbnN0cnVjdG9yLnByb3RvdHlwZSwgZGVzY3JpcHRvcnMpO1xuICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvcjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnN0cnVjdG9yLCAnc3VwZXInLCB7XG4gICAgdmFsdWU6IHN1cGVyQ29uc3RydWN0b3IucHJvdG90eXBlXG4gIH0pO1xuICBwcm9wcyAmJiBPYmplY3QuYXNzaWduKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvcHMpO1xufVxuXG4vKipcbiAqIFJlc29sdmUgb2JqZWN0IHdpdGggZGVlcCBwcm90b3R5cGUgY2hhaW4gdG8gYSBmbGF0IG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZU9iaiBzb3VyY2Ugb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gW2Rlc3RPYmpdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufEJvb2xlYW59IFtmaWx0ZXJdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcHJvcEZpbHRlcl1cbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5jb25zdCB0b0ZsYXRPYmplY3QgPSAoc291cmNlT2JqLCBkZXN0T2JqLCBmaWx0ZXIsIHByb3BGaWx0ZXIpID0+IHtcbiAgbGV0IHByb3BzO1xuICBsZXQgaTtcbiAgbGV0IHByb3A7XG4gIGNvbnN0IG1lcmdlZCA9IHt9O1xuXG4gIGRlc3RPYmogPSBkZXN0T2JqIHx8IHt9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXEtbnVsbCxlcWVxZXFcbiAgaWYgKHNvdXJjZU9iaiA9PSBudWxsKSByZXR1cm4gZGVzdE9iajtcblxuICBkbyB7XG4gICAgcHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VPYmopO1xuICAgIGkgPSBwcm9wcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSA+IDApIHtcbiAgICAgIHByb3AgPSBwcm9wc1tpXTtcbiAgICAgIGlmICgoIXByb3BGaWx0ZXIgfHwgcHJvcEZpbHRlcihwcm9wLCBzb3VyY2VPYmosIGRlc3RPYmopKSAmJiAhbWVyZ2VkW3Byb3BdKSB7XG4gICAgICAgIGRlc3RPYmpbcHJvcF0gPSBzb3VyY2VPYmpbcHJvcF07XG4gICAgICAgIG1lcmdlZFtwcm9wXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHNvdXJjZU9iaiA9IGZpbHRlciAhPT0gZmFsc2UgJiYgZ2V0UHJvdG90eXBlT2Yoc291cmNlT2JqKTtcbiAgfSB3aGlsZSAoc291cmNlT2JqICYmICghZmlsdGVyIHx8IGZpbHRlcihzb3VyY2VPYmosIGRlc3RPYmopKSAmJiBzb3VyY2VPYmogIT09IE9iamVjdC5wcm90b3R5cGUpO1xuXG4gIHJldHVybiBkZXN0T2JqO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHN0cmluZyBlbmRzIHdpdGggdGhlIGNoYXJhY3RlcnMgb2YgYSBzcGVjaWZpZWQgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHBhcmFtIHtTdHJpbmd9IHNlYXJjaFN0cmluZ1xuICogQHBhcmFtIHtOdW1iZXJ9IFtwb3NpdGlvbj0gMF1cbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuY29uc3QgZW5kc1dpdGggPSAoc3RyLCBzZWFyY2hTdHJpbmcsIHBvc2l0aW9uKSA9PiB7XG4gIHN0ciA9IFN0cmluZyhzdHIpO1xuICBpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCB8fCBwb3NpdGlvbiA+IHN0ci5sZW5ndGgpIHtcbiAgICBwb3NpdGlvbiA9IHN0ci5sZW5ndGg7XG4gIH1cbiAgcG9zaXRpb24gLT0gc2VhcmNoU3RyaW5nLmxlbmd0aDtcbiAgY29uc3QgbGFzdEluZGV4ID0gc3RyLmluZGV4T2Yoc2VhcmNoU3RyaW5nLCBwb3NpdGlvbik7XG4gIHJldHVybiBsYXN0SW5kZXggIT09IC0xICYmIGxhc3RJbmRleCA9PT0gcG9zaXRpb247XG59XG5cblxuLyoqXG4gKiBSZXR1cm5zIG5ldyBhcnJheSBmcm9tIGFycmF5IGxpa2Ugb2JqZWN0IG9yIG51bGwgaWYgZmFpbGVkXG4gKlxuICogQHBhcmFtIHsqfSBbdGhpbmddXG4gKlxuICogQHJldHVybnMgez9BcnJheX1cbiAqL1xuY29uc3QgdG9BcnJheSA9ICh0aGluZykgPT4ge1xuICBpZiAoIXRoaW5nKSByZXR1cm4gbnVsbDtcbiAgaWYgKGlzQXJyYXkodGhpbmcpKSByZXR1cm4gdGhpbmc7XG4gIGxldCBpID0gdGhpbmcubGVuZ3RoO1xuICBpZiAoIWlzTnVtYmVyKGkpKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgYXJyID0gbmV3IEFycmF5KGkpO1xuICB3aGlsZSAoaS0tID4gMCkge1xuICAgIGFycltpXSA9IHRoaW5nW2ldO1xuICB9XG4gIHJldHVybiBhcnI7XG59XG5cbi8qKlxuICogQ2hlY2tpbmcgaWYgdGhlIFVpbnQ4QXJyYXkgZXhpc3RzIGFuZCBpZiBpdCBkb2VzLCBpdCByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBjaGVja3MgaWYgdGhlXG4gKiB0aGluZyBwYXNzZWQgaW4gaXMgYW4gaW5zdGFuY2Ugb2YgVWludDhBcnJheVxuICpcbiAqIEBwYXJhbSB7VHlwZWRBcnJheX1cbiAqXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5jb25zdCBpc1R5cGVkQXJyYXkgPSAoVHlwZWRBcnJheSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gIHJldHVybiB0aGluZyA9PiB7XG4gICAgcmV0dXJuIFR5cGVkQXJyYXkgJiYgdGhpbmcgaW5zdGFuY2VvZiBUeXBlZEFycmF5O1xuICB9O1xufSkodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnICYmIGdldFByb3RvdHlwZU9mKFVpbnQ4QXJyYXkpKTtcblxuLyoqXG4gKiBGb3IgZWFjaCBlbnRyeSBpbiB0aGUgb2JqZWN0LCBjYWxsIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBrZXkgYW5kIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0PGFueSwgYW55Pn0gb2JqIC0gVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiAtIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGVudHJ5LlxuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5jb25zdCBmb3JFYWNoRW50cnkgPSAob2JqLCBmbikgPT4ge1xuICBjb25zdCBnZW5lcmF0b3IgPSBvYmogJiYgb2JqW1N5bWJvbC5pdGVyYXRvcl07XG5cbiAgY29uc3QgaXRlcmF0b3IgPSBnZW5lcmF0b3IuY2FsbChvYmopO1xuXG4gIGxldCByZXN1bHQ7XG5cbiAgd2hpbGUgKChyZXN1bHQgPSBpdGVyYXRvci5uZXh0KCkpICYmICFyZXN1bHQuZG9uZSkge1xuICAgIGNvbnN0IHBhaXIgPSByZXN1bHQudmFsdWU7XG4gICAgZm4uY2FsbChvYmosIHBhaXJbMF0sIHBhaXJbMV0pO1xuICB9XG59XG5cbi8qKlxuICogSXQgdGFrZXMgYSByZWd1bGFyIGV4cHJlc3Npb24gYW5kIGEgc3RyaW5nLCBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiBhbGwgdGhlIG1hdGNoZXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVnRXhwIC0gVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byBtYXRjaCBhZ2FpbnN0LlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmcgdG8gc2VhcmNoLlxuICpcbiAqIEByZXR1cm5zIHtBcnJheTxib29sZWFuPn1cbiAqL1xuY29uc3QgbWF0Y2hBbGwgPSAocmVnRXhwLCBzdHIpID0+IHtcbiAgbGV0IG1hdGNoZXM7XG4gIGNvbnN0IGFyciA9IFtdO1xuXG4gIHdoaWxlICgobWF0Y2hlcyA9IHJlZ0V4cC5leGVjKHN0cikpICE9PSBudWxsKSB7XG4gICAgYXJyLnB1c2gobWF0Y2hlcyk7XG4gIH1cblxuICByZXR1cm4gYXJyO1xufVxuXG4vKiBDaGVja2luZyBpZiB0aGUga2luZE9mVGVzdCBmdW5jdGlvbiByZXR1cm5zIHRydWUgd2hlbiBwYXNzZWQgYW4gSFRNTEZvcm1FbGVtZW50LiAqL1xuY29uc3QgaXNIVE1MRm9ybSA9IGtpbmRPZlRlc3QoJ0hUTUxGb3JtRWxlbWVudCcpO1xuXG5jb25zdCB0b0NhbWVsQ2FzZSA9IHN0ciA9PiB7XG4gIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bLV9cXHNdKFthLXpcXGRdKShcXHcqKS9nLFxuICAgIGZ1bmN0aW9uIHJlcGxhY2VyKG0sIHAxLCBwMikge1xuICAgICAgcmV0dXJuIHAxLnRvVXBwZXJDYXNlKCkgKyBwMjtcbiAgICB9XG4gICk7XG59O1xuXG4vKiBDcmVhdGluZyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjaGVjayBpZiBhbiBvYmplY3QgaGFzIGEgcHJvcGVydHkuICovXG5jb25zdCBoYXNPd25Qcm9wZXJ0eSA9ICgoe2hhc093blByb3BlcnR5fSkgPT4gKG9iaiwgcHJvcCkgPT4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKShPYmplY3QucHJvdG90eXBlKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFJlZ0V4cCBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgUmVnRXhwIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzUmVnRXhwID0ga2luZE9mVGVzdCgnUmVnRXhwJyk7XG5cbmNvbnN0IHJlZHVjZURlc2NyaXB0b3JzID0gKG9iaiwgcmVkdWNlcikgPT4ge1xuICBjb25zdCBkZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iaik7XG4gIGNvbnN0IHJlZHVjZWREZXNjcmlwdG9ycyA9IHt9O1xuXG4gIGZvckVhY2goZGVzY3JpcHRvcnMsIChkZXNjcmlwdG9yLCBuYW1lKSA9PiB7XG4gICAgbGV0IHJldDtcbiAgICBpZiAoKHJldCA9IHJlZHVjZXIoZGVzY3JpcHRvciwgbmFtZSwgb2JqKSkgIT09IGZhbHNlKSB7XG4gICAgICByZWR1Y2VkRGVzY3JpcHRvcnNbbmFtZV0gPSByZXQgfHwgZGVzY3JpcHRvcjtcbiAgICB9XG4gIH0pO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG9iaiwgcmVkdWNlZERlc2NyaXB0b3JzKTtcbn1cblxuLyoqXG4gKiBNYWtlcyBhbGwgbWV0aG9kcyByZWFkLW9ubHlcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqL1xuXG5jb25zdCBmcmVlemVNZXRob2RzID0gKG9iaikgPT4ge1xuICByZWR1Y2VEZXNjcmlwdG9ycyhvYmosIChkZXNjcmlwdG9yLCBuYW1lKSA9PiB7XG4gICAgLy8gc2tpcCByZXN0cmljdGVkIHByb3BzIGluIHN0cmljdCBtb2RlXG4gICAgaWYgKGlzRnVuY3Rpb24ob2JqKSAmJiBbJ2FyZ3VtZW50cycsICdjYWxsZXInLCAnY2FsbGVlJ10uaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IG9ialtuYW1lXTtcblxuICAgIGlmICghaXNGdW5jdGlvbih2YWx1ZSkpIHJldHVybjtcblxuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGZhbHNlO1xuXG4gICAgaWYgKCd3cml0YWJsZScgaW4gZGVzY3JpcHRvcikge1xuICAgICAgZGVzY3JpcHRvci53cml0YWJsZSA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghZGVzY3JpcHRvci5zZXQpIHtcbiAgICAgIGRlc2NyaXB0b3Iuc2V0ID0gKCkgPT4ge1xuICAgICAgICB0aHJvdyBFcnJvcignQ2FuIG5vdCByZXdyaXRlIHJlYWQtb25seSBtZXRob2QgXFwnJyArIG5hbWUgKyAnXFwnJyk7XG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG59XG5cbmNvbnN0IHRvT2JqZWN0U2V0ID0gKGFycmF5T3JTdHJpbmcsIGRlbGltaXRlcikgPT4ge1xuICBjb25zdCBvYmogPSB7fTtcblxuICBjb25zdCBkZWZpbmUgPSAoYXJyKSA9PiB7XG4gICAgYXJyLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgb2JqW3ZhbHVlXSA9IHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBpc0FycmF5KGFycmF5T3JTdHJpbmcpID8gZGVmaW5lKGFycmF5T3JTdHJpbmcpIDogZGVmaW5lKFN0cmluZyhhcnJheU9yU3RyaW5nKS5zcGxpdChkZWxpbWl0ZXIpKTtcblxuICByZXR1cm4gb2JqO1xufVxuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuY29uc3QgdG9GaW5pdGVOdW1iZXIgPSAodmFsdWUsIGRlZmF1bHRWYWx1ZSkgPT4ge1xuICB2YWx1ZSA9ICt2YWx1ZTtcbiAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkgPyB2YWx1ZSA6IGRlZmF1bHRWYWx1ZTtcbn1cblxuY29uc3QgQUxQSEEgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonXG5cbmNvbnN0IERJR0lUID0gJzAxMjM0NTY3ODknO1xuXG5jb25zdCBBTFBIQUJFVCA9IHtcbiAgRElHSVQsXG4gIEFMUEhBLFxuICBBTFBIQV9ESUdJVDogQUxQSEEgKyBBTFBIQS50b1VwcGVyQ2FzZSgpICsgRElHSVRcbn1cblxuY29uc3QgZ2VuZXJhdGVTdHJpbmcgPSAoc2l6ZSA9IDE2LCBhbHBoYWJldCA9IEFMUEhBQkVULkFMUEhBX0RJR0lUKSA9PiB7XG4gIGxldCBzdHIgPSAnJztcbiAgY29uc3Qge2xlbmd0aH0gPSBhbHBoYWJldDtcbiAgd2hpbGUgKHNpemUtLSkge1xuICAgIHN0ciArPSBhbHBoYWJldFtNYXRoLnJhbmRvbSgpICogbGVuZ3RofDBdXG4gIH1cblxuICByZXR1cm4gc3RyO1xufVxuXG4vKipcbiAqIElmIHRoZSB0aGluZyBpcyBhIEZvcm1EYXRhIG9iamVjdCwgcmV0dXJuIHRydWUsIG90aGVyd2lzZSByZXR1cm4gZmFsc2UuXG4gKlxuICogQHBhcmFtIHt1bmtub3dufSB0aGluZyAtIFRoZSB0aGluZyB0byBjaGVjay5cbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNTcGVjQ29tcGxpYW50Rm9ybSh0aGluZykge1xuICByZXR1cm4gISEodGhpbmcgJiYgaXNGdW5jdGlvbih0aGluZy5hcHBlbmQpICYmIHRoaW5nW1N5bWJvbC50b1N0cmluZ1RhZ10gPT09ICdGb3JtRGF0YScgJiYgdGhpbmdbU3ltYm9sLml0ZXJhdG9yXSk7XG59XG5cbmNvbnN0IHRvSlNPTk9iamVjdCA9IChvYmopID0+IHtcbiAgY29uc3Qgc3RhY2sgPSBuZXcgQXJyYXkoMTApO1xuXG4gIGNvbnN0IHZpc2l0ID0gKHNvdXJjZSwgaSkgPT4ge1xuXG4gICAgaWYgKGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIGlmIChzdGFjay5pbmRleE9mKHNvdXJjZSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmKCEoJ3RvSlNPTicgaW4gc291cmNlKSkge1xuICAgICAgICBzdGFja1tpXSA9IHNvdXJjZTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gaXNBcnJheShzb3VyY2UpID8gW10gOiB7fTtcblxuICAgICAgICBmb3JFYWNoKHNvdXJjZSwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICBjb25zdCByZWR1Y2VkVmFsdWUgPSB2aXNpdCh2YWx1ZSwgaSArIDEpO1xuICAgICAgICAgICFpc1VuZGVmaW5lZChyZWR1Y2VkVmFsdWUpICYmICh0YXJnZXRba2V5XSA9IHJlZHVjZWRWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN0YWNrW2ldID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxuXG4gIHJldHVybiB2aXNpdChvYmosIDApO1xufVxuXG5jb25zdCBpc0FzeW5jRm4gPSBraW5kT2ZUZXN0KCdBc3luY0Z1bmN0aW9uJyk7XG5cbmNvbnN0IGlzVGhlbmFibGUgPSAodGhpbmcpID0+XG4gIHRoaW5nICYmIChpc09iamVjdCh0aGluZykgfHwgaXNGdW5jdGlvbih0aGluZykpICYmIGlzRnVuY3Rpb24odGhpbmcudGhlbikgJiYgaXNGdW5jdGlvbih0aGluZy5jYXRjaCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXIsXG4gIGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZyxcbiAgaXNOdW1iZXIsXG4gIGlzQm9vbGVhbixcbiAgaXNPYmplY3QsXG4gIGlzUGxhaW5PYmplY3QsXG4gIGlzVW5kZWZpbmVkLFxuICBpc0RhdGUsXG4gIGlzRmlsZSxcbiAgaXNCbG9iLFxuICBpc1JlZ0V4cCxcbiAgaXNGdW5jdGlvbixcbiAgaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1R5cGVkQXJyYXksXG4gIGlzRmlsZUxpc3QsXG4gIGZvckVhY2gsXG4gIG1lcmdlLFxuICBleHRlbmQsXG4gIHRyaW0sXG4gIHN0cmlwQk9NLFxuICBpbmhlcml0cyxcbiAgdG9GbGF0T2JqZWN0LFxuICBraW5kT2YsXG4gIGtpbmRPZlRlc3QsXG4gIGVuZHNXaXRoLFxuICB0b0FycmF5LFxuICBmb3JFYWNoRW50cnksXG4gIG1hdGNoQWxsLFxuICBpc0hUTUxGb3JtLFxuICBoYXNPd25Qcm9wZXJ0eSxcbiAgaGFzT3duUHJvcDogaGFzT3duUHJvcGVydHksIC8vIGFuIGFsaWFzIHRvIGF2b2lkIEVTTGludCBuby1wcm90b3R5cGUtYnVpbHRpbnMgZGV0ZWN0aW9uXG4gIHJlZHVjZURlc2NyaXB0b3JzLFxuICBmcmVlemVNZXRob2RzLFxuICB0b09iamVjdFNldCxcbiAgdG9DYW1lbENhc2UsXG4gIG5vb3AsXG4gIHRvRmluaXRlTnVtYmVyLFxuICBmaW5kS2V5LFxuICBnbG9iYWw6IF9nbG9iYWwsXG4gIGlzQ29udGV4dERlZmluZWQsXG4gIEFMUEhBQkVULFxuICBnZW5lcmF0ZVN0cmluZyxcbiAgaXNTcGVjQ29tcGxpYW50Rm9ybSxcbiAgdG9KU09OT2JqZWN0LFxuICBpc0FzeW5jRm4sXG4gIGlzVGhlbmFibGVcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBiYXNlIHN0eWxlc1xyXG5pbXBvcnQgXCIuLi8uLi9zY3NzL2luZGV4XCI7XHJcblxyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4XCI7XHJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvbWFpbi9pbmRleFwiXHJcbmltcG9ydCAnLi4vLi4vY29tcG9uZW50cy9jYXJkcy1saXN0L2luZGV4J1xyXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2Zvb3Rlci9pbmRleFwiO1xyXG5cclxuLy8gcGFnZS1jb21wb25lbnRzXHJcbmltcG9ydCBcIi4uLy4uL3BhZ2UtY29tcG9uZW50cy9ob21lL2luZGV4XCI7XHJcbiJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJheGlvcyIsImJhc2VVUkwiLCJnZXRNZW51IiwiX3JlZiIsIl9jYWxsZWUiLCJyZXNwb25zZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJnZXQiLCJkYXRhIiwidDAiLCJjb25zb2xlIiwiTm90aWZsaXgiLCJnZXREYXRhQW5kU2F2ZVRvTG9jYWxTdG9yYWdlIiwiX2dldERhdGFBbmRTYXZlVG9Mb2NhbFN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIk5vdGlmeSIsImZhaWx1cmUiLCJyZW5kZXJNZW51IiwiX3JlbmRlck1lbnUiLCJfY2FsbGVlMiIsImxpc3RDb250YWluZXIiLCJtZW51RGF0YSIsIm1lbnVMaXN0IiwiYWRkVG9DYXJ0QnV0dG9ucyIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1hcCIsIml0ZW0iLCJpbWciLCJpbWFnZVVybCIsImRlc2NyaXB0aW9uIiwiZGlzY291bnQiLCJjb25jYXQiLCJoYXNEaXNjb3VudFByaWNlIiwiZGlzY291bnRQcmljZSIsImZvcm1hdHRlZFByaWNlIiwiTnVtYmVyIiwicHJpY2UiLCJ0b0ZpeGVkIiwiZm9ybWF0dGVkRGlzY291bnRQcmljZSIsImlkIiwidGl0bGUiLCJ3ZWlnaHQiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJqb2luIiwicXVlcnlTZWxlY3RvckFsbCIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJpdGVtSWQiLCJjbG9zZXN0IiwiYWRkVG9DYXJ0IiwiY2FydE1lbnUiLCJwYXJzZSIsImdldEl0ZW0iLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9