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
          return _context.abrupt("return", _context.t0);
        case 10:
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
/* harmony import */ var notiflix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! notiflix */ "../../node_modules/notiflix/dist/notiflix-aio-3.2.7.min.js");
/* harmony import */ var notiflix__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(notiflix__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/api */ "../api/api.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header */ "../components/header/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




notiflix__WEBPACK_IMPORTED_MODULE_1___default().Notify.init({
  position: "left-top",
  // 'right-top' - 'right-bottom' - 'left-top'
  fontSize: "16px",
  closeButton: false,
  success: {
    background: "#ffc633",
    textColor: "#fff",
    childClassName: "notiflix-notify-success",
    notiflixIconColor: "rgba(100,255,100,1)"
  }
});
function renderProductCards() {
  return _renderProductCards.apply(this, arguments);
}
function _renderProductCards() {
  _renderProductCards = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var listContainer, preLoader, menuItems, menuList;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          listContainer = document.querySelector(".cards-list");
          preLoader = document.querySelector(".preloader");
          _context.next = 4;
          return (0,_api_api__WEBPACK_IMPORTED_MODULE_2__.getMenu)();
        case 4:
          menuItems = _context.sent;
          preLoader.classList.add("is-hidden");

          //Встановлення дефолтних значень за відсутності данних
          menuList = menuItems.map(function (item) {
            var img = item.imageUrl ? item.imageUrl : "/src/assets/images/burger.png";
            var description = item.description ? item.description : "";
            var discount = item !== null && item !== void 0 && item.discount ? "-".concat(item.discount, "$") : "";

            //Створюємо прапорець для перевірки наявності знижки
            var hasDiscountPrice = item === null || item === void 0 ? void 0 : item.discountPrice;

            // Округлення значень price та discountPrice до 1 символу після коми
            var formattedPrice = Number(item.price).toFixed(2);
            var formattedDiscountPrice = hasDiscountPrice ? Number(item.discountPrice).toFixed(2) : "";
            return "<li id=\"".concat(item.id, "\" class=\"cards-list__item\">\n<div class=\"list-item__card-wrapper\">\n        <div class=\"list-item__img-container\">\n          <img class=\"list-item__card-img\" src=\"").concat(img, "\" alt=\"\" />\n        </div>\n        <div class=\"list-item__card-info\">\n          <h4 class=\"list-item__card-name\">").concat(item.title, "</h4>\n          <p class=\"list-item__card-weight\">").concat(item.weight, "g</p>\n          <div class=\"list-item__card-price-wrapper\">\n            <p class=\"list-item__card-price ").concat(hasDiscountPrice ? "is-discount" : "", "\">$ ").concat(formattedPrice, "</p>\n            <p class=\"list-item__card-discountPrice ").concat(hasDiscountPrice ? "" : "is-visible", "\">$").concat(formattedDiscountPrice, "</p>\n          </div>\n          <p class=\"list-item__card-description ").concat(item.description ? "" : "is-visible", "\">").concat(description, "</p>\n        </div>\n        <p class=\"list-item__discount\">").concat(discount, "</p>\n</div>\n      <button class=\"list-item__card-btn\">add to cart</button>\n    </li>");
          });
          listContainer.insertAdjacentHTML("beforeend", menuList.join(""));

          // Cлухач подій для контейнера з усіма кнопками "add to cart"
          listContainer.addEventListener("click", function (event) {
            var targetButton = event.target.closest(".list-item__card-btn");
            if (targetButton) {
              var itemId = targetButton.closest(".cards-list__item").id;
              var item = menuItems.find(function (item) {
                return item.id === itemId;
              });
              addToCart(item);
            }
          });
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _renderProductCards.apply(this, arguments);
}
function addToCart(item) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var cartItems = JSON.parse(localStorage.getItem("cartStorageItems")) || [];
  var existingItem = cartItems.find(function (cartItem) {
    return cartItem.id === item.id;
  });
  if (!existingItem) {
    cartItems.push(_objectSpread(_objectSpread({}, item), {}, {
      quantity: quantity
    }));
    localStorage.setItem("cartStorageItems", JSON.stringify(cartItems));
    (0,_header__WEBPACK_IMPORTED_MODULE_3__.updateCartCounter)();
    notiflix__WEBPACK_IMPORTED_MODULE_1___default().Notify.success("".concat(item.title, " added to cart"));
    console.log("Item added to cart:", item);
  } else {
    existingItem.quantity += 1;
    localStorage.setItem("cartStorageItems", JSON.stringify(cartItems));
    notiflix__WEBPACK_IMPORTED_MODULE_1___default().Notify.info("Number of ".concat(item.title, " in the basket: ").concat(existingItem.quantity));
    (0,_header__WEBPACK_IMPORTED_MODULE_3__.updateCartCounter)();
  }
}
renderProductCards();

/***/ }),

/***/ "../components/cartModal/index.js":
/*!****************************************!*\
  !*** ../components/cartModal/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderCartItems": () => (/* binding */ renderCartItems)
/* harmony export */ });
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/cartModal/index.scss");
/* harmony import */ var notiflix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! notiflix */ "../../node_modules/notiflix/dist/notiflix-aio-3.2.7.min.js");
/* harmony import */ var notiflix__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(notiflix__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header */ "../components/header/index.js");



var submitButton = document.querySelector(".submit-btn");
var cartItems = document.querySelector(".cart-items");
function renderCartItems() {
  var cartStorageItems = JSON.parse(localStorage.getItem("cartStorageItems")) || [];
  if (cartStorageItems.length === 0) {
    var cartIsEmpty = "<p class='cart-is-empty'>Cart is empty</p>";
    cartItems.innerHTML = cartIsEmpty;
    return;
  }
  var cartList = cartStorageItems.map(function (item) {
    var price = item !== null && item !== void 0 && item.discountPrice ? item.discountPrice : item.price;
    return "<div class=\"cart-item\">\n    <div class=\"cart-item__property cart-item__title\">".concat(item.title, "</div>\n    <div class=\"cart-item__property cart-item__price\">$").concat(price.toFixed(2), "</div>\n    <div class=\"cart-item__property cart-item__quantity\">\n        <button class=\"quantity-btn\" data-action=\"decrease\">-</button>\n        <span class=\"quantity\">").concat(item.quantity, "</span>\n        <button class=\"quantity-btn\" data-action=\"increase\">+</button>\n    </div>\n    <div class=\"cart-item__property\">\n        <button class=\"remove-btn\">Remove</button>\n    </div>\n</div>");
  });
  cartItems.innerHTML = "";
  cartItems.insertAdjacentHTML("beforeend", cartList.join(""));
  submitButton.addEventListener("click", handleSubmitButtonClick);
}
cartItems.addEventListener("click", function (event) {
  var button = event.target.closest(".quantity-btn");
  if (button) {
    handleQuantityButtonClick(button);
  }
});

//Відкриття модалки
function openCartModal() {
  var modal = document.querySelector(".cart-overlay");
  updateTotalPrice();
  renderCartItems();
  modal.classList.remove("is-hidden");
  modal.addEventListener("click", closeCartModal);
}
//Закриття модалки
function closeCartModal(event) {
  var modal = document.querySelector(".cart-overlay");
  if (event.target === modal || event.target.classList.contains("close-btn")) {
    modal.classList.add("is-hidden");
    modal.removeEventListener("click", closeCartModal);
  }
}

//Функція для зміни кількості товару
function handleQuantityButtonClick(button) {
  var cartStorageItems = JSON.parse(localStorage.getItem("cartStorageItems")) || [];
  var action = button.dataset.action;
  var row = button.closest(".cart-item");
  var quantityElement = row.querySelector(".quantity");
  var quantity = parseInt(quantityElement.textContent);
  var rowIndex = cartStorageItems.findIndex(function (item) {
    return item.title === row.querySelector(".cart-item__title").textContent;
  });
  if (action === "increase") {
    quantity++;
  } else if (action === "decrease" && quantity > 1) {
    quantity--;
  }
  quantityElement.textContent = quantity;
  cartStorageItems[rowIndex].quantity = quantity;
  localStorage.setItem("cartStorageItems", JSON.stringify(cartStorageItems));
  (0,_header__WEBPACK_IMPORTED_MODULE_2__.updateCartCounter)();
  updateTotalPrice();
}
function getTotalPrice() {
  var cartStorageItems = JSON.parse(localStorage.getItem("cartStorageItems")) || [];
  var total = 0;
  cartStorageItems.forEach(function (item) {
    var price = item.discountPrice ? item.discountPrice : item.price;
    total += price * item.quantity;
  });
  return total.toFixed(2);
}
//Оновлення загальної ціни
function updateTotalPrice() {
  var totalPriceElement = document.querySelector(".total-price");
  var total = getTotalPrice();
  totalPriceElement.textContent = "Total price: $".concat(total);
}

//Видалення товару
function handleRemoveButtonClick(button) {
  var cartStorageItems = JSON.parse(localStorage.getItem("cartStorageItems")) || [];
  var row = button.closest(".cart-item");
  var rowIndex = cartStorageItems.findIndex(function (item) {
    return item.title === row.querySelector(".cart-item__title").textContent;
  });

  // Видалення елементу з масиву та оновлення localStorage
  cartStorageItems.splice(rowIndex, 1);
  localStorage.setItem("cartStorageItems", JSON.stringify(cartStorageItems));
  renderCartItems();
  row.remove();
  (0,_header__WEBPACK_IMPORTED_MODULE_2__.updateCartCounter)();
  updateTotalPrice();
}

//Оформлння замовлення
function handleSubmitButtonClick() {
  var cartStorageItems = JSON.parse(localStorage.getItem("cartStorageItems")) || [];
  var cartData = {
    items: cartStorageItems,
    totalPrice: getTotalPrice()
  };
  if (cartData.items.length === 0) {
    notiflix__WEBPACK_IMPORTED_MODULE_1__.Notify.failure("Cart is empty");
    return;
  }
  console.log("Замовлення: ", cartData);
  localStorage.removeItem("cartStorageItems");
  var modal = document.querySelector(".cart-overlay");
  modal.classList.add("is-hidden");
  modal.removeEventListener("click", closeCartModal);
  notiflix__WEBPACK_IMPORTED_MODULE_1__.Notify.success("The order has been placed");
  (0,_header__WEBPACK_IMPORTED_MODULE_2__.updateCartCounter)();
}
document.addEventListener("DOMContentLoaded", function () {
  var cartButton = document.querySelector(".header__cart-btn");
  cartButton.addEventListener("click", openCartModal);
  renderCartItems();
  updateTotalPrice();
  cartItems.addEventListener("click", function (event) {
    var removeButton = event.target.closest(".remove-btn");
    if (removeButton) {
      handleRemoveButtonClick(removeButton);
    }
  });
  submitButton.addEventListener("click", handleSubmitButtonClick);
});

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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateCartCounter": () => (/* binding */ updateCartCounter)
/* harmony export */ });
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/header/index.scss");

function updateCartCounter() {
  var cartItems = JSON.parse(localStorage.getItem("cartStorageItems")) || [];
  var cartCounterElement = document.querySelector(".header__cart-btn-span");
  var totalItems = cartItems.reduce(function (acc, item) {
    return acc + item.quantity;
  }, 0);
  cartCounterElement.textContent = totalItems.toString();
}
document.addEventListener("DOMContentLoaded", updateCartCounter);

/***/ }),

/***/ "../components/loader/index.js":
/*!*************************************!*\
  !*** ../components/loader/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/loader/index.scss");


/***/ }),

/***/ "../components/main/index.js":
/*!***********************************!*\
  !*** ../components/main/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/main/index.scss");

function filterCards(searchTerm) {
  var cards = document.querySelectorAll(".cards-list__item");
  cards.forEach(function (card) {
    var cardName = card.querySelector(".list-item__card-name").textContent.toLowerCase();
    if (cardName.includes(searchTerm)) {
      card.classList.remove("is-visible");
    } else {
      card.classList.add("is-visible");
    }
  });
}
var searchInput = document.querySelector(".main__search-input");
searchInput.addEventListener("input", function (event) {
  var searchTerm = event.target.value.toLowerCase().trim();
  filterCards(searchTerm);
});

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

/***/ "../components/cartModal/index.scss":
/*!******************************************!*\
  !*** ../components/cartModal/index.scss ***!
  \******************************************/
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

/***/ "../components/loader/index.scss":
/*!***************************************!*\
  !*** ../components/loader/index.scss ***!
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
/* harmony import */ var _components_loader_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/loader/index */ "../components/loader/index.js");
/* harmony import */ var _components_cartModal_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cartModal/index */ "../components/cartModal/index.js");
/* harmony import */ var _components_footer_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/footer/index */ "../components/footer/index.js");
/* harmony import */ var _page_components_home_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../page-components/home/index */ "../page-components/home/index.js");
// base styles


// components







// page-components

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsV0FBVyxVQUFVO0FBQ3JCO0FBQ0EsV0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7O1VDbHRCRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUMwQjs7QUFFMUI7QUFDdUM7QUFDRjtBQUNNO0FBQ0o7QUFDRztBQUNIOztBQUV2QyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9hcGkvYXBpLmpzIiwid2VicGFjazovLy8uLi9jb21wb25lbnRzL2NhcmRzLWxpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL2NvbXBvbmVudHMvY2FydE1vZGFsL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9jb21wb25lbnRzL2hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9tYWluL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9wYWdlLWNvbXBvbmVudHMvaG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc2Nzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9jYXJkcy1saXN0L2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4uL2NvbXBvbmVudHMvY2FydE1vZGFsL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4uL2NvbXBvbmVudHMvZm9vdGVyL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4uL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4uL2NvbXBvbmVudHMvbG9hZGVyL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4uL2NvbXBvbmVudHMvbWFpbi9pbmRleC5zY3NzIiwid2VicGFjazovLy8uLi9wYWdlLWNvbXBvbmVudHMvaG9tZS9pbmRleC5zY3NzIiwid2VicGFjazovLy8uLi9zY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4uL3Njc3Mvbm9ybWFsaXplLnNjc3MiLCJ3ZWJwYWNrOi8vLy4uL3Njc3MvcmVzZXQuc2NzcyIsIndlYnBhY2s6Ly8vLi4vc2Nzcy92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL25vdGlmbGl4L2Rpc3Qvbm90aWZsaXgtYWlvLTMuMi43Lm1pbi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy9hZGFwdGVycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxlZEVycm9yLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3NFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2J1aWxkRnVsbFBhdGguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9tZXJnZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMvdHJhbnNpdGlvbmFsLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2Vudi9kYXRhLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvQXhpb3NVUkxTZWFyY2hQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9IdHRwU3RhdHVzQ29kZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Zvcm1EYXRhVG9KU09OLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQXhpb3NFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL251bGwuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZVByb3RvY29sLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3BlZWRvbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy90b0Zvcm1EYXRhLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvdG9VUkxFbmNvZGVkRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3ZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9icm93c2VyL2NsYXNzZXMvQmxvYi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9icm93c2VyL2NsYXNzZXMvRm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvcGxhdGZvcm0vYnJvd3Nlci9jbGFzc2VzL1VSTFNlYXJjaFBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9icm93c2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3BsYXRmb3JtL2NvbW1vbi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBiYXNlVVJMID0gXCJodHRwczovLzY1OWQzM2RhNjMzZjlhZWU3OTA4ZTI2Ni5tb2NrYXBpLmlvL3Byb2R1Y3RzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TWVudSA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYmFzZVVSTCk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIGVycm9yO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XHJcbmltcG9ydCBOb3RpZmxpeCBmcm9tIFwibm90aWZsaXhcIjtcclxuaW1wb3J0IHsgZ2V0TWVudSB9IGZyb20gXCIuLi8uLi9hcGkvYXBpXCI7XHJcbmltcG9ydCB7IHVwZGF0ZUNhcnRDb3VudGVyIH0gZnJvbSBcIi4uL2hlYWRlclwiO1xyXG5cclxuTm90aWZsaXguTm90aWZ5LmluaXQoe1xyXG4gIHBvc2l0aW9uOiBcImxlZnQtdG9wXCIsIC8vICdyaWdodC10b3AnIC0gJ3JpZ2h0LWJvdHRvbScgLSAnbGVmdC10b3AnXHJcbiAgZm9udFNpemU6IFwiMTZweFwiLFxyXG4gIGNsb3NlQnV0dG9uOiBmYWxzZSxcclxuICBzdWNjZXNzOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIiNmZmM2MzNcIixcclxuICAgIHRleHRDb2xvcjogXCIjZmZmXCIsXHJcbiAgICBjaGlsZENsYXNzTmFtZTogXCJub3RpZmxpeC1ub3RpZnktc3VjY2Vzc1wiLFxyXG4gICAgbm90aWZsaXhJY29uQ29sb3I6IFwicmdiYSgxMDAsMjU1LDEwMCwxKVwiLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyUHJvZHVjdENhcmRzKCkge1xyXG4gIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzLWxpc3RcIik7XHJcbiAgY29uc3QgcHJlTG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVsb2FkZXJcIik7XHJcbiAgY29uc3QgbWVudUl0ZW1zID0gYXdhaXQgZ2V0TWVudSgpO1xyXG4gIHByZUxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaXMtaGlkZGVuXCIpO1xyXG5cclxuICAvL9CS0YHRgtCw0L3QvtCy0LvQtdC90L3RjyDQtNC10YTQvtC70YLQvdC40YUg0LfQvdCw0YfQtdC90Ywg0LfQsCDQstGW0LTRgdGD0YLQvdC+0YHRgtGWINC00LDQvdC90LjRhVxyXG4gIGNvbnN0IG1lbnVMaXN0ID0gbWVudUl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgaW1nID0gaXRlbS5pbWFnZVVybCA/IGl0ZW0uaW1hZ2VVcmwgOiBcIi9zcmMvYXNzZXRzL2ltYWdlcy9idXJnZXIucG5nXCI7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGl0ZW0uZGVzY3JpcHRpb24gPyBpdGVtLmRlc2NyaXB0aW9uIDogXCJcIjtcclxuXHJcbiAgICBjb25zdCBkaXNjb3VudCA9IGl0ZW0/LmRpc2NvdW50ID8gYC0ke2l0ZW0uZGlzY291bnR9JGAgOiBcIlwiO1xyXG5cclxuICAgIC8v0KHRgtCy0L7RgNGO0ZTQvNC+INC/0YDQsNC/0L7RgNC10YbRjCDQtNC70Y8g0L/QtdGA0LXQstGW0YDQutC4INC90LDRj9Cy0L3QvtGB0YLRliDQt9C90LjQttC60LhcclxuICAgIGNvbnN0IGhhc0Rpc2NvdW50UHJpY2UgPSBpdGVtPy5kaXNjb3VudFByaWNlO1xyXG5cclxuICAgIC8vINCe0LrRgNGD0LPQu9C10L3QvdGPINC30L3QsNGH0LXQvdGMIHByaWNlINGC0LAgZGlzY291bnRQcmljZSDQtNC+IDEg0YHQuNC80LLQvtC70YMg0L/RltGB0LvRjyDQutC+0LzQuFxyXG4gICAgY29uc3QgZm9ybWF0dGVkUHJpY2UgPSBOdW1iZXIoaXRlbS5wcmljZSkudG9GaXhlZCgyKTtcclxuICAgIGNvbnN0IGZvcm1hdHRlZERpc2NvdW50UHJpY2UgPSBoYXNEaXNjb3VudFByaWNlXHJcbiAgICAgID8gTnVtYmVyKGl0ZW0uZGlzY291bnRQcmljZSkudG9GaXhlZCgyKVxyXG4gICAgICA6IFwiXCI7XHJcblxyXG4gICAgcmV0dXJuIGA8bGkgaWQ9XCIke2l0ZW0uaWR9XCIgY2xhc3M9XCJjYXJkcy1saXN0X19pdGVtXCI+XHJcbjxkaXYgY2xhc3M9XCJsaXN0LWl0ZW1fX2NhcmQtd3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LWl0ZW1fX2ltZy1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJsaXN0LWl0ZW1fX2NhcmQtaW1nXCIgc3JjPVwiJHtpbWd9XCIgYWx0PVwiXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1pdGVtX19jYXJkLWluZm9cIj5cclxuICAgICAgICAgIDxoNCBjbGFzcz1cImxpc3QtaXRlbV9fY2FyZC1uYW1lXCI+JHtpdGVtLnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImxpc3QtaXRlbV9fY2FyZC13ZWlnaHRcIj4ke2l0ZW0ud2VpZ2h0fWc8L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1pdGVtX19jYXJkLXByaWNlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJsaXN0LWl0ZW1fX2NhcmQtcHJpY2UgJHtcclxuICAgICAgICAgICAgICBoYXNEaXNjb3VudFByaWNlID8gXCJpcy1kaXNjb3VudFwiIDogXCJcIlxyXG4gICAgICAgICAgICB9XCI+JCAke2Zvcm1hdHRlZFByaWNlfTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJsaXN0LWl0ZW1fX2NhcmQtZGlzY291bnRQcmljZSAke1xyXG4gICAgICAgICAgICAgIGhhc0Rpc2NvdW50UHJpY2UgPyBcIlwiIDogXCJpcy12aXNpYmxlXCJcclxuICAgICAgICAgICAgfVwiPiQke2Zvcm1hdHRlZERpc2NvdW50UHJpY2V9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImxpc3QtaXRlbV9fY2FyZC1kZXNjcmlwdGlvbiAke1xyXG4gICAgICAgICAgICBpdGVtLmRlc2NyaXB0aW9uID8gXCJcIiA6IFwiaXMtdmlzaWJsZVwiXHJcbiAgICAgICAgICB9XCI+JHtkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJsaXN0LWl0ZW1fX2Rpc2NvdW50XCI+JHtkaXNjb3VudH08L3A+XHJcbjwvZGl2PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwibGlzdC1pdGVtX19jYXJkLWJ0blwiPmFkZCB0byBjYXJ0PC9idXR0b24+XHJcbiAgICA8L2xpPmA7XHJcbiAgfSk7XHJcblxyXG4gIGxpc3RDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIG1lbnVMaXN0LmpvaW4oXCJcIikpO1xyXG5cclxuICAvLyBD0LvRg9GF0LDRhyDQv9C+0LTRltC5INC00LvRjyDQutC+0L3RgtC10LnQvdC10YDQsCDQtyDRg9GB0ZbQvNCwINC60L3QvtC/0LrQsNC80LggXCJhZGQgdG8gY2FydFwiXHJcbiAgbGlzdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXRCdXR0b24gPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5saXN0LWl0ZW1fX2NhcmQtYnRuXCIpO1xyXG5cclxuICAgIGlmICh0YXJnZXRCdXR0b24pIHtcclxuICAgICAgY29uc3QgaXRlbUlkID0gdGFyZ2V0QnV0dG9uLmNsb3Nlc3QoXCIuY2FyZHMtbGlzdF9faXRlbVwiKS5pZDtcclxuICAgICAgY29uc3QgaXRlbSA9IG1lbnVJdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBpdGVtSWQpO1xyXG4gICAgICBhZGRUb0NhcnQoaXRlbSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRvQ2FydChpdGVtLCBxdWFudGl0eSA9IDEpIHtcclxuICBjb25zdCBjYXJ0SXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydFN0b3JhZ2VJdGVtc1wiKSkgfHwgW107XHJcblxyXG4gIGNvbnN0IGV4aXN0aW5nSXRlbSA9IGNhcnRJdGVtcy5maW5kKChjYXJ0SXRlbSkgPT4gY2FydEl0ZW0uaWQgPT09IGl0ZW0uaWQpO1xyXG4gIGlmICghZXhpc3RpbmdJdGVtKSB7XHJcbiAgICBjYXJ0SXRlbXMucHVzaCh7IC4uLml0ZW0sIHF1YW50aXR5IH0pO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydFN0b3JhZ2VJdGVtc1wiLCBKU09OLnN0cmluZ2lmeShjYXJ0SXRlbXMpKTtcclxuXHJcbiAgICB1cGRhdGVDYXJ0Q291bnRlcigpO1xyXG5cclxuICAgIE5vdGlmbGl4Lk5vdGlmeS5zdWNjZXNzKGAke2l0ZW0udGl0bGV9IGFkZGVkIHRvIGNhcnRgKTtcclxuICAgIGNvbnNvbGUubG9nKFwiSXRlbSBhZGRlZCB0byBjYXJ0OlwiLCBpdGVtKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZXhpc3RpbmdJdGVtLnF1YW50aXR5ICs9IDE7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0U3RvcmFnZUl0ZW1zXCIsIEpTT04uc3RyaW5naWZ5KGNhcnRJdGVtcykpO1xyXG4gICAgTm90aWZsaXguTm90aWZ5LmluZm8oYE51bWJlciBvZiAke2l0ZW0udGl0bGV9IGluIHRoZSBiYXNrZXQ6ICR7ZXhpc3RpbmdJdGVtLnF1YW50aXR5fWApO1xyXG5cclxuICAgIHVwZGF0ZUNhcnRDb3VudGVyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5yZW5kZXJQcm9kdWN0Q2FyZHMoKTtcclxuIiwiaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XHJcbmltcG9ydCB7IE5vdGlmeSB9IGZyb20gXCJub3RpZmxpeFwiO1xyXG5pbXBvcnQgeyB1cGRhdGVDYXJ0Q291bnRlciB9IGZyb20gXCIuLi9oZWFkZXJcIjtcclxuXHJcbmNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LWJ0blwiKTtcclxuY29uc3QgY2FydEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJ0LWl0ZW1zXCIpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNhcnRJdGVtcygpIHtcclxuICBjb25zdCBjYXJ0U3RvcmFnZUl0ZW1zID1cclxuICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0U3RvcmFnZUl0ZW1zXCIpKSB8fCBbXTtcclxuXHJcbiAgaWYgKGNhcnRTdG9yYWdlSXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICBjb25zdCBjYXJ0SXNFbXB0eSA9IGA8cCBjbGFzcz0nY2FydC1pcy1lbXB0eSc+Q2FydCBpcyBlbXB0eTwvcD5gO1xyXG4gICAgY2FydEl0ZW1zLmlubmVySFRNTCA9IGNhcnRJc0VtcHR5O1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2FydExpc3QgPSBjYXJ0U3RvcmFnZUl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgcHJpY2UgPSBpdGVtPy5kaXNjb3VudFByaWNlID8gaXRlbS5kaXNjb3VudFByaWNlIDogaXRlbS5wcmljZTtcclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImNhcnQtaXRlbVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcnQtaXRlbV9fcHJvcGVydHkgY2FydC1pdGVtX190aXRsZVwiPiR7aXRlbS50aXRsZX08L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW1fX3Byb3BlcnR5IGNhcnQtaXRlbV9fcHJpY2VcIj4kJHtwcmljZS50b0ZpeGVkKDIpfTwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcnQtaXRlbV9fcHJvcGVydHkgY2FydC1pdGVtX19xdWFudGl0eVwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJxdWFudGl0eS1idG5cIiBkYXRhLWFjdGlvbj1cImRlY3JlYXNlXCI+LTwvYnV0dG9uPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwicXVhbnRpdHlcIj4ke2l0ZW0ucXVhbnRpdHl9PC9zcGFuPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJxdWFudGl0eS1idG5cIiBkYXRhLWFjdGlvbj1cImluY3JlYXNlXCI+KzwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtX19wcm9wZXJ0eVwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJyZW1vdmUtYnRuXCI+UmVtb3ZlPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YDtcclxuICB9KTtcclxuXHJcbiAgY2FydEl0ZW1zLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgY2FydEl0ZW1zLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBjYXJ0TGlzdC5qb2luKFwiXCIpKTtcclxuXHJcbiAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVTdWJtaXRCdXR0b25DbGljayk7XHJcbn1cclxuXHJcbmNhcnRJdGVtcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgY29uc3QgYnV0dG9uID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIucXVhbnRpdHktYnRuXCIpO1xyXG4gIGlmIChidXR0b24pIHtcclxuICAgIGhhbmRsZVF1YW50aXR5QnV0dG9uQ2xpY2soYnV0dG9uKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy/QktGW0LTQutGA0LjRgtGC0Y8g0LzQvtC00LDQu9C60LhcclxuZnVuY3Rpb24gb3BlbkNhcnRNb2RhbCgpIHtcclxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FydC1vdmVybGF5XCIpO1xyXG5cclxuICB1cGRhdGVUb3RhbFByaWNlKCk7XHJcbiAgcmVuZGVyQ2FydEl0ZW1zKCk7XHJcblxyXG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1oaWRkZW5cIik7XHJcblxyXG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZUNhcnRNb2RhbCk7XHJcbn1cclxuLy/Ql9Cw0LrRgNC40YLRgtGPINC80L7QtNCw0LvQutC4XHJcbmZ1bmN0aW9uIGNsb3NlQ2FydE1vZGFsKGV2ZW50KSB7XHJcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcnQtb3ZlcmxheVwiKTtcclxuXHJcbiAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWwgfHwgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNsb3NlLWJ0blwiKSkge1xyXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcImlzLWhpZGRlblwiKTtcclxuICAgIG1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZUNhcnRNb2RhbCk7XHJcbiAgfVxyXG59XHJcblxyXG4vL9Ck0YPQvdC60YbRltGPINC00LvRjyDQt9C80ZbQvdC4INC60ZbQu9GM0LrQvtGB0YLRliDRgtC+0LLQsNGA0YNcclxuZnVuY3Rpb24gaGFuZGxlUXVhbnRpdHlCdXR0b25DbGljayhidXR0b24pIHtcclxuICBjb25zdCBjYXJ0U3RvcmFnZUl0ZW1zID1cclxuICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0U3RvcmFnZUl0ZW1zXCIpKSB8fCBbXTtcclxuXHJcbiAgY29uc3QgYWN0aW9uID0gYnV0dG9uLmRhdGFzZXQuYWN0aW9uO1xyXG4gIGNvbnN0IHJvdyA9IGJ1dHRvbi5jbG9zZXN0KFwiLmNhcnQtaXRlbVwiKTtcclxuICBjb25zdCBxdWFudGl0eUVsZW1lbnQgPSByb3cucXVlcnlTZWxlY3RvcihcIi5xdWFudGl0eVwiKTtcclxuICBsZXQgcXVhbnRpdHkgPSBwYXJzZUludChxdWFudGl0eUVsZW1lbnQudGV4dENvbnRlbnQpO1xyXG5cclxuICBjb25zdCByb3dJbmRleCA9IGNhcnRTdG9yYWdlSXRlbXMuZmluZEluZGV4KFxyXG4gICAgKGl0ZW0pID0+IGl0ZW0udGl0bGUgPT09IHJvdy5xdWVyeVNlbGVjdG9yKFwiLmNhcnQtaXRlbV9fdGl0bGVcIikudGV4dENvbnRlbnRcclxuICApO1xyXG4gIGlmIChhY3Rpb24gPT09IFwiaW5jcmVhc2VcIikge1xyXG4gICAgcXVhbnRpdHkrKztcclxuICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gXCJkZWNyZWFzZVwiICYmIHF1YW50aXR5ID4gMSkge1xyXG4gICAgcXVhbnRpdHktLTtcclxuICB9XHJcbiAgcXVhbnRpdHlFbGVtZW50LnRleHRDb250ZW50ID0gcXVhbnRpdHk7XHJcblxyXG4gIGNhcnRTdG9yYWdlSXRlbXNbcm93SW5kZXhdLnF1YW50aXR5ID0gcXVhbnRpdHk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0U3RvcmFnZUl0ZW1zXCIsIEpTT04uc3RyaW5naWZ5KGNhcnRTdG9yYWdlSXRlbXMpKTtcclxuXHJcbiAgdXBkYXRlQ2FydENvdW50ZXIoKTtcclxuICB1cGRhdGVUb3RhbFByaWNlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRvdGFsUHJpY2UoKSB7XHJcbiAgY29uc3QgY2FydFN0b3JhZ2VJdGVtcyA9XHJcbiAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydFN0b3JhZ2VJdGVtc1wiKSkgfHwgW107XHJcblxyXG4gIGxldCB0b3RhbCA9IDA7XHJcblxyXG4gIGNhcnRTdG9yYWdlSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgcHJpY2UgPSBpdGVtLmRpc2NvdW50UHJpY2UgPyBpdGVtLmRpc2NvdW50UHJpY2UgOiBpdGVtLnByaWNlO1xyXG4gICAgdG90YWwgKz0gcHJpY2UgKiBpdGVtLnF1YW50aXR5O1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gdG90YWwudG9GaXhlZCgyKTtcclxufVxyXG4vL9Ce0L3QvtCy0LvQtdC90L3RjyDQt9Cw0LPQsNC70YzQvdC+0Zcg0YbRltC90LhcclxuZnVuY3Rpb24gdXBkYXRlVG90YWxQcmljZSgpIHtcclxuICBjb25zdCB0b3RhbFByaWNlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG90YWwtcHJpY2VcIik7XHJcbiAgbGV0IHRvdGFsID0gZ2V0VG90YWxQcmljZSgpO1xyXG5cclxuICB0b3RhbFByaWNlRWxlbWVudC50ZXh0Q29udGVudCA9IGBUb3RhbCBwcmljZTogJCR7dG90YWx9YDtcclxufVxyXG5cclxuLy/QktC40LTQsNC70LXQvdC90Y8g0YLQvtCy0LDRgNGDXHJcbmZ1bmN0aW9uIGhhbmRsZVJlbW92ZUJ1dHRvbkNsaWNrKGJ1dHRvbikge1xyXG4gIGNvbnN0IGNhcnRTdG9yYWdlSXRlbXMgPVxyXG4gICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRTdG9yYWdlSXRlbXNcIikpIHx8IFtdO1xyXG5cclxuICBjb25zdCByb3cgPSBidXR0b24uY2xvc2VzdChcIi5jYXJ0LWl0ZW1cIik7XHJcbiAgY29uc3Qgcm93SW5kZXggPSBjYXJ0U3RvcmFnZUl0ZW1zLmZpbmRJbmRleChcclxuICAgIChpdGVtKSA9PiBpdGVtLnRpdGxlID09PSByb3cucXVlcnlTZWxlY3RvcihcIi5jYXJ0LWl0ZW1fX3RpdGxlXCIpLnRleHRDb250ZW50XHJcbiAgKTtcclxuXHJcbiAgLy8g0JLQuNC00LDQu9C10L3QvdGPINC10LvQtdC80LXQvdGC0YMg0Lcg0LzQsNGB0LjQstGDINGC0LAg0L7QvdC+0LLQu9C10L3QvdGPIGxvY2FsU3RvcmFnZVxyXG4gIGNhcnRTdG9yYWdlSXRlbXMuc3BsaWNlKHJvd0luZGV4LCAxKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRTdG9yYWdlSXRlbXNcIiwgSlNPTi5zdHJpbmdpZnkoY2FydFN0b3JhZ2VJdGVtcykpO1xyXG5cclxuICByZW5kZXJDYXJ0SXRlbXMoKTtcclxuICByb3cucmVtb3ZlKCk7XHJcbiAgdXBkYXRlQ2FydENvdW50ZXIoKTtcclxuICB1cGRhdGVUb3RhbFByaWNlKCk7XHJcbn1cclxuXHJcbi8v0J7RhNC+0YDQvNC70L3QvdGPINC30LDQvNC+0LLQu9C10L3QvdGPXHJcbmZ1bmN0aW9uIGhhbmRsZVN1Ym1pdEJ1dHRvbkNsaWNrKCkge1xyXG4gIGNvbnN0IGNhcnRTdG9yYWdlSXRlbXMgPVxyXG4gICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRTdG9yYWdlSXRlbXNcIikpIHx8IFtdO1xyXG5cclxuICBjb25zdCBjYXJ0RGF0YSA9IHtcclxuICAgIGl0ZW1zOiBjYXJ0U3RvcmFnZUl0ZW1zLFxyXG4gICAgdG90YWxQcmljZTogZ2V0VG90YWxQcmljZSgpLFxyXG4gIH07XHJcblxyXG4gIGlmIChjYXJ0RGF0YS5pdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgIE5vdGlmeS5mYWlsdXJlKFwiQ2FydCBpcyBlbXB0eVwiKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKFwi0JfQsNC80L7QstC70LXQvdC90Y86IFwiLCBjYXJ0RGF0YSk7XHJcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJjYXJ0U3RvcmFnZUl0ZW1zXCIpO1xyXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJ0LW92ZXJsYXlcIik7XHJcblxyXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJpcy1oaWRkZW5cIik7XHJcbiAgbW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlQ2FydE1vZGFsKTtcclxuICBOb3RpZnkuc3VjY2VzcyhcIlRoZSBvcmRlciBoYXMgYmVlbiBwbGFjZWRcIik7XHJcbiAgdXBkYXRlQ2FydENvdW50ZXIoKTtcclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IGNhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fY2FydC1idG5cIik7XHJcbiAgY2FydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkNhcnRNb2RhbCk7XHJcblxyXG4gIHJlbmRlckNhcnRJdGVtcygpO1xyXG4gIHVwZGF0ZVRvdGFsUHJpY2UoKTtcclxuXHJcbiAgY2FydEl0ZW1zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnJlbW92ZS1idG5cIik7XHJcbiAgICBpZiAocmVtb3ZlQnV0dG9uKSB7XHJcbiAgICAgIGhhbmRsZVJlbW92ZUJ1dHRvbkNsaWNrKHJlbW92ZUJ1dHRvbik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVTdWJtaXRCdXR0b25DbGljayk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDYXJ0Q291bnRlcigpIHtcclxuICBjb25zdCBjYXJ0SXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydFN0b3JhZ2VJdGVtc1wiKSkgfHwgW107XHJcbiAgY29uc3QgY2FydENvdW50ZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2NhcnQtYnRuLXNwYW5cIik7XHJcblxyXG4gIGNvbnN0IHRvdGFsSXRlbXMgPSBjYXJ0SXRlbXMucmVkdWNlKChhY2MsIGl0ZW0pID0+IGFjYyArIGl0ZW0ucXVhbnRpdHksIDApO1xyXG5cclxuICBjYXJ0Q291bnRlckVsZW1lbnQudGV4dENvbnRlbnQgPSB0b3RhbEl0ZW1zLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHVwZGF0ZUNhcnRDb3VudGVyKTtcclxuIiwiaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBmaWx0ZXJDYXJkcyhzZWFyY2hUZXJtKSB7XHJcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRzLWxpc3RfX2l0ZW1cIik7XHJcblxyXG4gIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcclxuICAgIGNvbnN0IGNhcmROYW1lID0gY2FyZFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5saXN0LWl0ZW1fX2NhcmQtbmFtZVwiKVxyXG4gICAgICAudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICBpZiAoY2FyZE5hbWUuaW5jbHVkZXMoc2VhcmNoVGVybSkpIHtcclxuICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtdmlzaWJsZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImlzLXZpc2libGVcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX19zZWFyY2gtaW5wdXRcIik7XHJcblxyXG5zZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgY29uc3Qgc2VhcmNoVGVybSA9IGV2ZW50LnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcclxuICBmaWx0ZXJDYXJkcyhzZWFyY2hUZXJtKTtcclxufSk7XHJcbiIsIi8vIGpzXHJcblxyXG4vLyBzY3NzXHJcbmltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcclxuaW1wb3J0IFwiLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5pbXBvcnQgXCIuL25vcm1hbGl6ZS5zY3NzXCI7XHJcbmltcG9ydCBcIi4vcmVzZXQuc2Nzc1wiO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKiBOb3RpZmxpeCBBSU8gKGh0dHBzOi8vbm90aWZsaXguZ2l0aHViLmlvKSAtIFZlcnNpb246IDMuMi43IC0gQXV0aG9yOiBGdXJrYW4gKGh0dHBzOi8vZ2l0aHViLmNvbS9mdXJjYW4pIC0gQ29weXJpZ2h0IDIwMTkgLSAyMDI0IE5vdGlmbGl4LCBNSVQgTGljZW5zZSAoaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQpICovXG5cbihmdW5jdGlvbih0LGUpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sZnVuY3Rpb24oKXtyZXR1cm4gZSh0KX0pOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKHQpOnQuTm90aWZsaXg9ZSh0KX0pKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBnbG9iYWw/XCJ1bmRlZmluZWRcIj09dHlwZW9mIHdpbmRvdz90aGlzOndpbmRvdzpnbG9iYWwsZnVuY3Rpb24odCl7J3VzZSBzdHJpY3QnO2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0JiZcInVuZGVmaW5lZFwiPT10eXBlb2YgdC5kb2N1bWVudClyZXR1cm4hMTt2YXIgZSxpLGEsbixvLHI9XCJcXG5cXG5WaXNpdCBkb2N1bWVudGF0aW9uIHBhZ2UgdG8gbGVhcm4gbW9yZTogaHR0cHM6Ly9ub3RpZmxpeC5naXRodWIuaW8vZG9jdW1lbnRhdGlvblwiLHM9XCItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmXCIsbD17U3VjY2VzczpcIlN1Y2Nlc3NcIixGYWlsdXJlOlwiRmFpbHVyZVwiLFdhcm5pbmc6XCJXYXJuaW5nXCIsSW5mbzpcIkluZm9cIn0sbT17d3JhcElEOlwiTm90aWZsaXhOb3RpZnlXcmFwXCIsb3ZlcmxheUlEOlwiTm90aWZsaXhOb3RpZnlPdmVybGF5XCIsd2lkdGg6XCIyODBweFwiLHBvc2l0aW9uOlwicmlnaHQtdG9wXCIsZGlzdGFuY2U6XCIxMHB4XCIsb3BhY2l0eToxLGJvcmRlclJhZGl1czpcIjVweFwiLHJ0bDohMSx0aW1lb3V0OjNlMyxtZXNzYWdlTWF4TGVuZ3RoOjExMCxiYWNrT3ZlcmxheTohMSxiYWNrT3ZlcmxheUNvbG9yOlwicmdiYSgwLDAsMCwwLjUpXCIscGxhaW5UZXh0OiEwLHNob3dPbmx5VGhlTGFzdE9uZTohMSxjbGlja1RvQ2xvc2U6ITEscGF1c2VPbkhvdmVyOiEwLElEOlwiTm90aWZsaXhOb3RpZnlcIixjbGFzc05hbWU6XCJub3RpZmxpeC1ub3RpZnlcIix6aW5kZXg6NDAwMSxmb250RmFtaWx5OlwiUXVpY2tzYW5kXCIsZm9udFNpemU6XCIxM3B4XCIsY3NzQW5pbWF0aW9uOiEwLGNzc0FuaW1hdGlvbkR1cmF0aW9uOjQwMCxjc3NBbmltYXRpb25TdHlsZTpcImZhZGVcIixjbG9zZUJ1dHRvbjohMSx1c2VJY29uOiEwLHVzZUZvbnRBd2Vzb21lOiExLGZvbnRBd2Vzb21lSWNvblN0eWxlOlwiYmFzaWNcIixmb250QXdlc29tZUljb25TaXplOlwiMzRweFwiLHN1Y2Nlc3M6e2JhY2tncm91bmQ6XCIjMzJjNjgyXCIsdGV4dENvbG9yOlwiI2ZmZlwiLGNoaWxkQ2xhc3NOYW1lOlwibm90aWZsaXgtbm90aWZ5LXN1Y2Nlc3NcIixub3RpZmxpeEljb25Db2xvcjpcInJnYmEoMCwwLDAsMC4yKVwiLGZvbnRBd2Vzb21lQ2xhc3NOYW1lOlwiZmFzIGZhLWNoZWNrLWNpcmNsZVwiLGZvbnRBd2Vzb21lSWNvbkNvbG9yOlwicmdiYSgwLDAsMCwwLjIpXCIsYmFja092ZXJsYXlDb2xvcjpcInJnYmEoNTAsMTk4LDEzMCwwLjIpXCJ9LGZhaWx1cmU6e2JhY2tncm91bmQ6XCIjZmY1NTQ5XCIsdGV4dENvbG9yOlwiI2ZmZlwiLGNoaWxkQ2xhc3NOYW1lOlwibm90aWZsaXgtbm90aWZ5LWZhaWx1cmVcIixub3RpZmxpeEljb25Db2xvcjpcInJnYmEoMCwwLDAsMC4yKVwiLGZvbnRBd2Vzb21lQ2xhc3NOYW1lOlwiZmFzIGZhLXRpbWVzLWNpcmNsZVwiLGZvbnRBd2Vzb21lSWNvbkNvbG9yOlwicmdiYSgwLDAsMCwwLjIpXCIsYmFja092ZXJsYXlDb2xvcjpcInJnYmEoMjU1LDg1LDczLDAuMilcIn0sd2FybmluZzp7YmFja2dyb3VuZDpcIiNlZWJmMzFcIix0ZXh0Q29sb3I6XCIjZmZmXCIsY2hpbGRDbGFzc05hbWU6XCJub3RpZmxpeC1ub3RpZnktd2FybmluZ1wiLG5vdGlmbGl4SWNvbkNvbG9yOlwicmdiYSgwLDAsMCwwLjIpXCIsZm9udEF3ZXNvbWVDbGFzc05hbWU6XCJmYXMgZmEtZXhjbGFtYXRpb24tY2lyY2xlXCIsZm9udEF3ZXNvbWVJY29uQ29sb3I6XCJyZ2JhKDAsMCwwLDAuMilcIixiYWNrT3ZlcmxheUNvbG9yOlwicmdiYSgyMzgsMTkxLDQ5LDAuMilcIn0saW5mbzp7YmFja2dyb3VuZDpcIiMyNmMwZDNcIix0ZXh0Q29sb3I6XCIjZmZmXCIsY2hpbGRDbGFzc05hbWU6XCJub3RpZmxpeC1ub3RpZnktaW5mb1wiLG5vdGlmbGl4SWNvbkNvbG9yOlwicmdiYSgwLDAsMCwwLjIpXCIsZm9udEF3ZXNvbWVDbGFzc05hbWU6XCJmYXMgZmEtaW5mby1jaXJjbGVcIixmb250QXdlc29tZUljb25Db2xvcjpcInJnYmEoMCwwLDAsMC4yKVwiLGJhY2tPdmVybGF5Q29sb3I6XCJyZ2JhKDM4LDE5MiwyMTEsMC4yKVwifX0sYz17U3VjY2VzczpcIlN1Y2Nlc3NcIixGYWlsdXJlOlwiRmFpbHVyZVwiLFdhcm5pbmc6XCJXYXJuaW5nXCIsSW5mbzpcIkluZm9cIn0scD17SUQ6XCJOb3RpZmxpeFJlcG9ydFdyYXBcIixjbGFzc05hbWU6XCJub3RpZmxpeC1yZXBvcnRcIix3aWR0aDpcIjMyMHB4XCIsYmFja2dyb3VuZENvbG9yOlwiI2Y4ZjhmOFwiLGJvcmRlclJhZGl1czpcIjI1cHhcIixydGw6ITEsemluZGV4OjQwMDIsYmFja092ZXJsYXk6ITAsYmFja092ZXJsYXlDb2xvcjpcInJnYmEoMCwwLDAsMC41KVwiLGJhY2tPdmVybGF5Q2xpY2tUb0Nsb3NlOiExLGZvbnRGYW1pbHk6XCJRdWlja3NhbmRcIixzdmdTaXplOlwiMTEwcHhcIixwbGFpblRleHQ6ITAsdGl0bGVGb250U2l6ZTpcIjE2cHhcIix0aXRsZU1heExlbmd0aDozNCxtZXNzYWdlRm9udFNpemU6XCIxM3B4XCIsbWVzc2FnZU1heExlbmd0aDo0MDAsYnV0dG9uRm9udFNpemU6XCIxNHB4XCIsYnV0dG9uTWF4TGVuZ3RoOjM0LGNzc0FuaW1hdGlvbjohMCxjc3NBbmltYXRpb25EdXJhdGlvbjozNjAsY3NzQW5pbWF0aW9uU3R5bGU6XCJmYWRlXCIsc3VjY2Vzczp7c3ZnQ29sb3I6XCIjMzJjNjgyXCIsdGl0bGVDb2xvcjpcIiMxZTFlMWVcIixtZXNzYWdlQ29sb3I6XCIjMjQyNDI0XCIsYnV0dG9uQmFja2dyb3VuZDpcIiMzMmM2ODJcIixidXR0b25Db2xvcjpcIiNmZmZcIixiYWNrT3ZlcmxheUNvbG9yOlwicmdiYSg1MCwxOTgsMTMwLDAuMilcIn0sZmFpbHVyZTp7c3ZnQ29sb3I6XCIjZmY1NTQ5XCIsdGl0bGVDb2xvcjpcIiMxZTFlMWVcIixtZXNzYWdlQ29sb3I6XCIjMjQyNDI0XCIsYnV0dG9uQmFja2dyb3VuZDpcIiNmZjU1NDlcIixidXR0b25Db2xvcjpcIiNmZmZcIixiYWNrT3ZlcmxheUNvbG9yOlwicmdiYSgyNTUsODUsNzMsMC4yKVwifSx3YXJuaW5nOntzdmdDb2xvcjpcIiNlZWJmMzFcIix0aXRsZUNvbG9yOlwiIzFlMWUxZVwiLG1lc3NhZ2VDb2xvcjpcIiMyNDI0MjRcIixidXR0b25CYWNrZ3JvdW5kOlwiI2VlYmYzMVwiLGJ1dHRvbkNvbG9yOlwiI2ZmZlwiLGJhY2tPdmVybGF5Q29sb3I6XCJyZ2JhKDIzOCwxOTEsNDksMC4yKVwifSxpbmZvOntzdmdDb2xvcjpcIiMyNmMwZDNcIix0aXRsZUNvbG9yOlwiIzFlMWUxZVwiLG1lc3NhZ2VDb2xvcjpcIiMyNDI0MjRcIixidXR0b25CYWNrZ3JvdW5kOlwiIzI2YzBkM1wiLGJ1dHRvbkNvbG9yOlwiI2ZmZlwiLGJhY2tPdmVybGF5Q29sb3I6XCJyZ2JhKDM4LDE5MiwyMTEsMC4yKVwifX0sZj17U2hvdzpcIlNob3dcIixBc2s6XCJBc2tcIixQcm9tcHQ6XCJQcm9tcHRcIn0sZD17SUQ6XCJOb3RpZmxpeENvbmZpcm1XcmFwXCIsY2xhc3NOYW1lOlwibm90aWZsaXgtY29uZmlybVwiLHdpZHRoOlwiMzAwcHhcIix6aW5kZXg6NDAwMyxwb3NpdGlvbjpcImNlbnRlclwiLGRpc3RhbmNlOlwiMTBweFwiLGJhY2tncm91bmRDb2xvcjpcIiNmOGY4ZjhcIixib3JkZXJSYWRpdXM6XCIyNXB4XCIsYmFja092ZXJsYXk6ITAsYmFja092ZXJsYXlDb2xvcjpcInJnYmEoMCwwLDAsMC41KVwiLHJ0bDohMSxmb250RmFtaWx5OlwiUXVpY2tzYW5kXCIsY3NzQW5pbWF0aW9uOiEwLGNzc0FuaW1hdGlvbkR1cmF0aW9uOjMwMCxjc3NBbmltYXRpb25TdHlsZTpcImZhZGVcIixwbGFpblRleHQ6ITAsdGl0bGVDb2xvcjpcIiMzMmM2ODJcIix0aXRsZUZvbnRTaXplOlwiMTZweFwiLHRpdGxlTWF4TGVuZ3RoOjM0LG1lc3NhZ2VDb2xvcjpcIiMxZTFlMWVcIixtZXNzYWdlRm9udFNpemU6XCIxNHB4XCIsbWVzc2FnZU1heExlbmd0aDoxMTAsYnV0dG9uc0ZvbnRTaXplOlwiMTVweFwiLGJ1dHRvbnNNYXhMZW5ndGg6MzQsb2tCdXR0b25Db2xvcjpcIiNmOGY4ZjhcIixva0J1dHRvbkJhY2tncm91bmQ6XCIjMzJjNjgyXCIsY2FuY2VsQnV0dG9uQ29sb3I6XCIjZjhmOGY4XCIsY2FuY2VsQnV0dG9uQmFja2dyb3VuZDpcIiNhOWE5YTlcIn0seD17U3RhbmRhcmQ6XCJTdGFuZGFyZFwiLEhvdXJnbGFzczpcIkhvdXJnbGFzc1wiLENpcmNsZTpcIkNpcmNsZVwiLEFycm93czpcIkFycm93c1wiLERvdHM6XCJEb3RzXCIsUHVsc2U6XCJQdWxzZVwiLEN1c3RvbTpcIkN1c3RvbVwiLE5vdGlmbGl4OlwiTm90aWZsaXhcIn0sZz17SUQ6XCJOb3RpZmxpeExvYWRpbmdXcmFwXCIsY2xhc3NOYW1lOlwibm90aWZsaXgtbG9hZGluZ1wiLHppbmRleDo0ZTMsYmFja2dyb3VuZENvbG9yOlwicmdiYSgwLDAsMCwwLjgpXCIscnRsOiExLGZvbnRGYW1pbHk6XCJRdWlja3NhbmRcIixjc3NBbmltYXRpb246ITAsY3NzQW5pbWF0aW9uRHVyYXRpb246NDAwLGNsaWNrVG9DbG9zZTohMSxjdXN0b21TdmdVcmw6bnVsbCxjdXN0b21TdmdDb2RlOm51bGwsc3ZnU2l6ZTpcIjgwcHhcIixzdmdDb2xvcjpcIiMzMmM2ODJcIixtZXNzYWdlSUQ6XCJOb3RpZmxpeExvYWRpbmdNZXNzYWdlXCIsbWVzc2FnZUZvbnRTaXplOlwiMTVweFwiLG1lc3NhZ2VNYXhMZW5ndGg6MzQsbWVzc2FnZUNvbG9yOlwiI2RjZGNkY1wifSxiPXtTdGFuZGFyZDpcIlN0YW5kYXJkXCIsSG91cmdsYXNzOlwiSG91cmdsYXNzXCIsQ2lyY2xlOlwiQ2lyY2xlXCIsQXJyb3dzOlwiQXJyb3dzXCIsRG90czpcIkRvdHNcIixQdWxzZTpcIlB1bHNlXCJ9LHU9e0lEOlwiTm90aWZsaXhCbG9ja1dyYXBcIixxdWVyeVNlbGVjdG9yTGltaXQ6MjAwLGNsYXNzTmFtZTpcIm5vdGlmbGl4LWJsb2NrXCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLHppbmRleDoxZTMsYmFja2dyb3VuZENvbG9yOlwicmdiYSgyNTUsMjU1LDI1NSwwLjkpXCIscnRsOiExLGZvbnRGYW1pbHk6XCJRdWlja3NhbmRcIixjc3NBbmltYXRpb246ITAsY3NzQW5pbWF0aW9uRHVyYXRpb246MzAwLHN2Z1NpemU6XCI0NXB4XCIsc3ZnQ29sb3I6XCIjMzgzODM4XCIsbWVzc2FnZUZvbnRTaXplOlwiMTRweFwiLG1lc3NhZ2VNYXhMZW5ndGg6MzQsbWVzc2FnZUNvbG9yOlwiIzM4MzgzOFwifSx5PWZ1bmN0aW9uKHQpe3JldHVybiBjb25zb2xlLmVycm9yKFwiJWMgTm90aWZsaXggRXJyb3IgXCIsXCJwYWRkaW5nOjJweDtib3JkZXItcmFkaXVzOjIwcHg7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiNmZjU1NDlcIixcIlxcblwiK3Qrcil9LGs9ZnVuY3Rpb24odCl7cmV0dXJuIGNvbnNvbGUubG9nKFwiJWMgTm90aWZsaXggSW5mbyBcIixcInBhZGRpbmc6MnB4O2JvcmRlci1yYWRpdXM6MjBweDtjb2xvcjojZmZmO2JhY2tncm91bmQ6IzI2YzBkM1wiLFwiXFxuXCIrdCtyKX0sdz1mdW5jdGlvbihlKXtyZXR1cm4gZXx8KGU9XCJoZWFkXCIpLG51bGwhPT10LmRvY3VtZW50W2VdfHwoeShcIlxcbk5vdGlmbGl4IG5lZWRzIHRvIGJlIGFwcGVuZGVkIHRvIHRoZSBcXFwiPFwiK2UrXCI+XFxcIiBlbGVtZW50LCBidXQgeW91IGNhbGxlZCBpdCBiZWZvcmUgdGhlIFxcXCI8XCIrZStcIj5cXFwiIGVsZW1lbnQgaGFzIGJlZW4gY3JlYXRlZC5cIiksITEpfSxoPWZ1bmN0aW9uKGUsaSl7aWYoIXcoXCJoZWFkXCIpKXJldHVybiExO2lmKG51bGwhPT1lKCkmJiF0LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGkpKXt2YXIgYT10LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTthLmlkPWksYS5pbm5lckhUTUw9ZSgpLHQuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChhKX19LHY9ZnVuY3Rpb24oKXt2YXIgdD17fSxlPSExLGE9MDtcIltvYmplY3QgQm9vbGVhbl1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudHNbMF0pJiYoZT1hcmd1bWVudHNbMF0sYSsrKTtmb3IodmFyIG49ZnVuY3Rpb24oaSl7Zm9yKHZhciBhIGluIGkpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGksYSkmJih0W2FdPWUmJlwiW29iamVjdCBPYmplY3RdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaVthXSk/dih0W2FdLGlbYV0pOmlbYV0pfTthPGFyZ3VtZW50cy5sZW5ndGg7YSsrKW4oYXJndW1lbnRzW2FdKTtyZXR1cm4gdH0sTj1mdW5jdGlvbihlKXt2YXIgaT10LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGkuaW5uZXJIVE1MPWUsaS50ZXh0Q29udGVudHx8aS5pbm5lclRleHR8fFwiXCJ9LEM9ZnVuY3Rpb24odCxlKXt0fHwodD1cIjExMHB4XCIpLGV8fChlPVwiIzMyYzY4MlwiKTt2YXIgaT1cIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBpZD1cXFwiTlhSZXBvcnRTdWNjZXNzXFxcIiB3aWR0aD1cXFwiXCIrdCtcIlxcXCIgaGVpZ2h0PVxcXCJcIit0K1wiXFxcIiBmaWxsPVxcXCJcIitlK1wiXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTIwIDEyMFxcXCI+PHN0eWxlPkAtd2Via2l0LWtleWZyYW1lcyBOWFJlcG9ydFN1Y2Nlc3MxLWFuaW1hdGlvbnswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw1Ny43cHgpIHNjYWxlKC41LC41KSB0cmFuc2xhdGUoLTYwcHgsLTU3LjdweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDU3LjdweCkgc2NhbGUoLjUsLjUpIHRyYW5zbGF0ZSgtNjBweCwtNTcuN3B4KX01MCUsdG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNTcuN3B4KSBzY2FsZSgxLDEpIHRyYW5zbGF0ZSgtNjBweCwtNTcuN3B4KTt0cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNTcuN3B4KSBzY2FsZSgxLDEpIHRyYW5zbGF0ZSgtNjBweCwtNTcuN3B4KX02MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNTcuN3B4KSBzY2FsZSguOTUsLjk1KSB0cmFuc2xhdGUoLTYwcHgsLTU3LjdweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDU3LjdweCkgc2NhbGUoLjk1LC45NSkgdHJhbnNsYXRlKC02MHB4LC01Ny43cHgpfX1Aa2V5ZnJhbWVzIE5YUmVwb3J0U3VjY2VzczEtYW5pbWF0aW9uezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDU3LjdweCkgc2NhbGUoLjUsLjUpIHRyYW5zbGF0ZSgtNjBweCwtNTcuN3B4KTt0cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNTcuN3B4KSBzY2FsZSguNSwuNSkgdHJhbnNsYXRlKC02MHB4LC01Ny43cHgpfTUwJSx0b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw1Ny43cHgpIHNjYWxlKDEsMSkgdHJhbnNsYXRlKC02MHB4LC01Ny43cHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw1Ny43cHgpIHNjYWxlKDEsMSkgdHJhbnNsYXRlKC02MHB4LC01Ny43cHgpfTYwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw1Ny43cHgpIHNjYWxlKC45NSwuOTUpIHRyYW5zbGF0ZSgtNjBweCwtNTcuN3B4KTt0cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNTcuN3B4KSBzY2FsZSguOTUsLjk1KSB0cmFuc2xhdGUoLTYwcHgsLTU3LjdweCl9fUAtd2Via2l0LWtleWZyYW1lcyBOWFJlcG9ydFN1Y2Nlc3M0LWFuaW1hdGlvbnswJXtvcGFjaXR5OjB9NTAlLHRve29wYWNpdHk6MX19QGtleWZyYW1lcyBOWFJlcG9ydFN1Y2Nlc3M0LWFuaW1hdGlvbnswJXtvcGFjaXR5OjB9NTAlLHRve29wYWNpdHk6MX19QC13ZWJraXQta2V5ZnJhbWVzIE5YUmVwb3J0U3VjY2VzczMtYW5pbWF0aW9uezAle29wYWNpdHk6MH00MCUsdG97b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIE5YUmVwb3J0U3VjY2VzczMtYW5pbWF0aW9uezAle29wYWNpdHk6MH00MCUsdG97b3BhY2l0eToxfX1ALXdlYmtpdC1rZXlmcmFtZXMgTlhSZXBvcnRTdWNjZXNzMi1hbmltYXRpb257MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjUsLjUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC41LC41KSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpfTQwJSx0b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSgxLDEpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKDEsMSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KX02MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjk1LC45NSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjk1LC45NSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KX19QGtleWZyYW1lcyBOWFJlcG9ydFN1Y2Nlc3MyLWFuaW1hdGlvbnswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSguNSwuNSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjUsLjUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCl9NDAlLHRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKDEsMSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoMSwxKSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpfTYwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSguOTUsLjk1KSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSguOTUsLjk1KSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpfX0jTlhSZXBvcnRTdWNjZXNzICp7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MS4yczthbmltYXRpb24tZHVyYXRpb246MS4yczstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAsMCwxLDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAsMCwxLDEpfTwvc3R5bGU+PGcgc3R5bGU9XFxcIi13ZWJraXQtYW5pbWF0aW9uLW5hbWU6TlhSZXBvcnRTdWNjZXNzMi1hbmltYXRpb247YW5pbWF0aW9uLW5hbWU6TlhSZXBvcnRTdWNjZXNzMi1hbmltYXRpb247LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoMSwxKSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjQyLDAsLjU4LDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40MiwwLC41OCwxKVxcXCI+PHBhdGggZD1cXFwiTTYwIDExNS4zOEMyOS40NiAxMTUuMzggNC42MiA5MC41NCA0LjYyIDYwIDQuNjIgMjkuNDYgMjkuNDYgNC42MiA2MCA0LjYyYzMwLjU0IDAgNTUuMzggMjQuODQgNTUuMzggNTUuMzggMCAzMC41NC0yNC44NCA1NS4zOC01NS4zOCA1NS4zOHpNNjAgMEMyNi45MiAwIDAgMjYuOTIgMCA2MHMyNi45MiA2MCA2MCA2MCA2MC0yNi45MiA2MC02MFM5My4wOCAwIDYwIDB6XFxcIiBzdHlsZT1cXFwiLXdlYmtpdC1hbmltYXRpb24tbmFtZTpOWFJlcG9ydFN1Y2Nlc3MzLWFuaW1hdGlvbjthbmltYXRpb24tbmFtZTpOWFJlcG9ydFN1Y2Nlc3MzLWFuaW1hdGlvbjstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40MiwwLC41OCwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNDIsMCwuNTgsMSlcXFwiIGZpbGw9XFxcImluaGVyaXRcXFwiIGRhdGEtYW5pbWF0b3ItZ3JvdXA9XFxcInRydWVcXFwiIGRhdGEtYW5pbWF0b3ItdHlwZT1cXFwiMlxcXCIvPjwvZz48ZyBzdHlsZT1cXFwiLXdlYmtpdC1hbmltYXRpb24tbmFtZTpOWFJlcG9ydFN1Y2Nlc3MxLWFuaW1hdGlvbjthbmltYXRpb24tbmFtZTpOWFJlcG9ydFN1Y2Nlc3MxLWFuaW1hdGlvbjstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw1Ny43cHgpIHNjYWxlKDEsMSkgdHJhbnNsYXRlKC02MHB4LC01Ny43cHgpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjQyLDAsLjU4LDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40MiwwLC41OCwxKVxcXCI+PHBhdGggZD1cXFwiTTg4LjI3IDM1LjM5TDUyLjggNzUuMjkgMzEuNDMgNTguMmMtLjk4LS44MS0yLjQ0LS42My0zLjI0LjM2LS43OS45OS0uNjMgMi40NC4zNiAzLjI0bDIzLjA4IDE4LjQ2Yy40My4zNC45My41MSAxLjQ0LjUxLjY0IDAgMS4yNy0uMjYgMS43NC0uNzhsMzYuOTEtNDEuNTNhMi4zIDIuMyAwIDAgMC0uMTktMy4yNmMtLjk1LS44Ni0yLjQxLS43Ny0zLjI2LjE5elxcXCIgc3R5bGU9XFxcIi13ZWJraXQtYW5pbWF0aW9uLW5hbWU6TlhSZXBvcnRTdWNjZXNzNC1hbmltYXRpb247YW5pbWF0aW9uLW5hbWU6TlhSZXBvcnRTdWNjZXNzNC1hbmltYXRpb247LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNDIsMCwuNTgsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjQyLDAsLjU4LDEpXFxcIiBmaWxsPVxcXCJpbmhlcml0XFxcIiBkYXRhLWFuaW1hdG9yLWdyb3VwPVxcXCJ0cnVlXFxcIiBkYXRhLWFuaW1hdG9yLXR5cGU9XFxcIjJcXFwiLz48L2c+PC9zdmc+XCI7cmV0dXJuIGl9LHo9ZnVuY3Rpb24odCxlKXt0fHwodD1cIjExMHB4XCIpLGV8fChlPVwiI2ZmNTU0OVwiKTt2YXIgaT1cIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBpZD1cXFwiTlhSZXBvcnRGYWlsdXJlXFxcIiB3aWR0aD1cXFwiXCIrdCtcIlxcXCIgaGVpZ2h0PVxcXCJcIit0K1wiXFxcIiBmaWxsPVxcXCJcIitlK1wiXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTIwIDEyMFxcXCI+PHN0eWxlPkAtd2Via2l0LWtleWZyYW1lcyBOWFJlcG9ydEZhaWx1cmUyLWFuaW1hdGlvbnswJXtvcGFjaXR5OjB9NDAlLHRve29wYWNpdHk6MX19QGtleWZyYW1lcyBOWFJlcG9ydEZhaWx1cmUyLWFuaW1hdGlvbnswJXtvcGFjaXR5OjB9NDAlLHRve29wYWNpdHk6MX19QC13ZWJraXQta2V5ZnJhbWVzIE5YUmVwb3J0RmFpbHVyZTEtYW5pbWF0aW9uezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC41LC41KSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSguNSwuNSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KX00MCUsdG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoMSwxKSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSgxLDEpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCl9NjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC45NSwuOTUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC45NSwuOTUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCl9fUBrZXlmcmFtZXMgTlhSZXBvcnRGYWlsdXJlMS1hbmltYXRpb257MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjUsLjUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC41LC41KSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpfTQwJSx0b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSgxLDEpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKDEsMSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KX02MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjk1LC45NSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjk1LC45NSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KX19QC13ZWJraXQta2V5ZnJhbWVzIE5YUmVwb3J0RmFpbHVyZTMtYW5pbWF0aW9uezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC41LC41KSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSguNSwuNSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KX01MCUsdG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoMSwxKSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSgxLDEpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCl9NjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC45NSwuOTUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC45NSwuOTUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCl9fUBrZXlmcmFtZXMgTlhSZXBvcnRGYWlsdXJlMy1hbmltYXRpb257MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjUsLjUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC41LC41KSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpfTUwJSx0b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSgxLDEpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKDEsMSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KX02MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjk1LC45NSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjk1LC45NSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KX19QC13ZWJraXQta2V5ZnJhbWVzIE5YUmVwb3J0RmFpbHVyZTQtYW5pbWF0aW9uezAle29wYWNpdHk6MH01MCUsdG97b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIE5YUmVwb3J0RmFpbHVyZTQtYW5pbWF0aW9uezAle29wYWNpdHk6MH01MCUsdG97b3BhY2l0eToxfX0jTlhSZXBvcnRGYWlsdXJlICp7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MS4yczthbmltYXRpb24tZHVyYXRpb246MS4yczstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAsMCwxLDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAsMCwxLDEpfTwvc3R5bGU+PGcgc3R5bGU9XFxcIi13ZWJraXQtYW5pbWF0aW9uLW5hbWU6TlhSZXBvcnRGYWlsdXJlMS1hbmltYXRpb247YW5pbWF0aW9uLW5hbWU6TlhSZXBvcnRGYWlsdXJlMS1hbmltYXRpb247LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNDIsMCwuNTgsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjQyLDAsLjU4LDEpOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKDEsMSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KVxcXCI+PHBhdGggZD1cXFwiTTQuMzUgMzQuOTVjMC0xNi44MiAxMy43OC0zMC42IDMwLjYtMzAuNmg1MC4xYzE2LjgyIDAgMzAuNiAxMy43OCAzMC42IDMwLjZ2NTAuMWMwIDE2LjgyLTEzLjc4IDMwLjYtMzAuNiAzMC42aC01MC4xYy0xNi44MiAwLTMwLjYtMTMuNzgtMzAuNi0zMC42di01MC4xek0zNC45NSAxMjBoNTAuMWMxOS4yMiAwIDM0Ljk1LTE1LjczIDM0Ljk1LTM0Ljk1di01MC4xQzEyMCAxNS43MyAxMDQuMjcgMCA4NS4wNSAwaC01MC4xQzE1LjczIDAgMCAxNS43MyAwIDM0Ljk1djUwLjFDMCAxMDQuMjcgMTUuNzMgMTIwIDM0Ljk1IDEyMHpcXFwiIHN0eWxlPVxcXCItd2Via2l0LWFuaW1hdGlvbi1uYW1lOk5YUmVwb3J0RmFpbHVyZTItYW5pbWF0aW9uO2FuaW1hdGlvbi1uYW1lOk5YUmVwb3J0RmFpbHVyZTItYW5pbWF0aW9uOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjQyLDAsLjU4LDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40MiwwLC41OCwxKVxcXCIgZmlsbD1cXFwiaW5oZXJpdFxcXCIgZGF0YS1hbmltYXRvci1ncm91cD1cXFwidHJ1ZVxcXCIgZGF0YS1hbmltYXRvci10eXBlPVxcXCIyXFxcIi8+PC9nPjxnIHN0eWxlPVxcXCItd2Via2l0LWFuaW1hdGlvbi1uYW1lOk5YUmVwb3J0RmFpbHVyZTMtYW5pbWF0aW9uO2FuaW1hdGlvbi1uYW1lOk5YUmVwb3J0RmFpbHVyZTMtYW5pbWF0aW9uOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjQyLDAsLjU4LDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40MiwwLC41OCwxKTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSgxLDEpIHRyYW5zbGF0ZSgtNjBweCwtNjBweClcXFwiPjxwYXRoIGQ9XFxcIk04Mi40IDM3LjZjLS45LS45LTIuMzctLjktMy4yNyAwTDYwIDU2LjczIDQwLjg2IDM3LjZhMi4zMDYgMi4zMDYgMCAwIDAtMy4yNiAzLjI2TDU2LjczIDYwIDM3LjYgNzkuMTNjLS45LjktLjkgMi4zNyAwIDMuMjcuNDUuNDUgMS4wNC42OCAxLjYzLjY4LjU5IDAgMS4xOC0uMjMgMS42My0uNjhMNjAgNjMuMjYgNzkuMTMgODIuNGMuNDUuNDUgMS4wNS42OCAxLjY0LjY4LjU4IDAgMS4xOC0uMjMgMS42My0uNjguOS0uOS45LTIuMzcgMC0zLjI3TDYzLjI2IDYwIDgyLjQgNDAuODZjLjktLjkxLjktMi4zNiAwLTMuMjZ6XFxcIiBzdHlsZT1cXFwiLXdlYmtpdC1hbmltYXRpb24tbmFtZTpOWFJlcG9ydEZhaWx1cmU0LWFuaW1hdGlvbjthbmltYXRpb24tbmFtZTpOWFJlcG9ydEZhaWx1cmU0LWFuaW1hdGlvbjstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40MiwwLC41OCwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNDIsMCwuNTgsMSlcXFwiIGZpbGw9XFxcImluaGVyaXRcXFwiIGRhdGEtYW5pbWF0b3ItZ3JvdXA9XFxcInRydWVcXFwiIGRhdGEtYW5pbWF0b3ItdHlwZT1cXFwiMlxcXCIvPjwvZz48L3N2Zz5cIjtyZXR1cm4gaX0sUz1mdW5jdGlvbih0LGUpe3R8fCh0PVwiMTEwcHhcIiksZXx8KGU9XCIjZWViZjMxXCIpO3ZhciBpPVwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGlkPVxcXCJOWFJlcG9ydFdhcm5pbmdcXFwiIHdpZHRoPVxcXCJcIit0K1wiXFxcIiBoZWlnaHQ9XFxcIlwiK3QrXCJcXFwiIGZpbGw9XFxcIlwiK2UrXCJcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMjAgMTIwXFxcIj48c3R5bGU+QC13ZWJraXQta2V5ZnJhbWVzIE5YUmVwb3J0V2FybmluZzItYW5pbWF0aW9uezAle29wYWNpdHk6MH00MCUsdG97b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIE5YUmVwb3J0V2FybmluZzItYW5pbWF0aW9uezAle29wYWNpdHk6MH00MCUsdG97b3BhY2l0eToxfX1ALXdlYmtpdC1rZXlmcmFtZXMgTlhSZXBvcnRXYXJuaW5nMS1hbmltYXRpb257MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjUsLjUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC41LC41KSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpfTQwJSx0b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSgxLDEpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKDEsMSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KX02MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjk1LC45NSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjk1LC45NSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KX19QGtleWZyYW1lcyBOWFJlcG9ydFdhcm5pbmcxLWFuaW1hdGlvbnswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSguNSwuNSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjUsLjUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCl9NDAlLHRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKDEsMSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoMSwxKSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpfTYwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSguOTUsLjk1KSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSguOTUsLjk1KSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpfX1ALXdlYmtpdC1rZXlmcmFtZXMgTlhSZXBvcnRXYXJuaW5nMy1hbmltYXRpb257MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjYuNnB4KSBzY2FsZSguNSwuNSkgdHJhbnNsYXRlKC02MHB4LC02Ni42cHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2Ni42cHgpIHNjYWxlKC41LC41KSB0cmFuc2xhdGUoLTYwcHgsLTY2LjZweCl9NTAlLHRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDY2LjZweCkgc2NhbGUoMSwxKSB0cmFuc2xhdGUoLTYwcHgsLTY2LjZweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDY2LjZweCkgc2NhbGUoMSwxKSB0cmFuc2xhdGUoLTYwcHgsLTY2LjZweCl9NjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDY2LjZweCkgc2NhbGUoLjk1LC45NSkgdHJhbnNsYXRlKC02MHB4LC02Ni42cHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2Ni42cHgpIHNjYWxlKC45NSwuOTUpIHRyYW5zbGF0ZSgtNjBweCwtNjYuNnB4KX19QGtleWZyYW1lcyBOWFJlcG9ydFdhcm5pbmczLWFuaW1hdGlvbnswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2Ni42cHgpIHNjYWxlKC41LC41KSB0cmFuc2xhdGUoLTYwcHgsLTY2LjZweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDY2LjZweCkgc2NhbGUoLjUsLjUpIHRyYW5zbGF0ZSgtNjBweCwtNjYuNnB4KX01MCUsdG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjYuNnB4KSBzY2FsZSgxLDEpIHRyYW5zbGF0ZSgtNjBweCwtNjYuNnB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjYuNnB4KSBzY2FsZSgxLDEpIHRyYW5zbGF0ZSgtNjBweCwtNjYuNnB4KX02MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjYuNnB4KSBzY2FsZSguOTUsLjk1KSB0cmFuc2xhdGUoLTYwcHgsLTY2LjZweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDY2LjZweCkgc2NhbGUoLjk1LC45NSkgdHJhbnNsYXRlKC02MHB4LC02Ni42cHgpfX1ALXdlYmtpdC1rZXlmcmFtZXMgTlhSZXBvcnRXYXJuaW5nNC1hbmltYXRpb257MCV7b3BhY2l0eTowfTUwJSx0b3tvcGFjaXR5OjF9fUBrZXlmcmFtZXMgTlhSZXBvcnRXYXJuaW5nNC1hbmltYXRpb257MCV7b3BhY2l0eTowfTUwJSx0b3tvcGFjaXR5OjF9fSNOWFJlcG9ydFdhcm5pbmcgKnstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxLjJzO2FuaW1hdGlvbi1kdXJhdGlvbjoxLjJzOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMCwwLDEsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMCwwLDEsMSl9PC9zdHlsZT48ZyBzdHlsZT1cXFwiLXdlYmtpdC1hbmltYXRpb24tbmFtZTpOWFJlcG9ydFdhcm5pbmcxLWFuaW1hdGlvbjthbmltYXRpb24tbmFtZTpOWFJlcG9ydFdhcm5pbmcxLWFuaW1hdGlvbjstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40MiwwLC41OCwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNDIsMCwuNTgsMSk7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoMSwxKSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpXFxcIj48cGF0aCBkPVxcXCJNMTE1LjQ2IDEwNi4xNWwtNTQuMDQtOTMuOGMtLjYxLTEuMDYtMi4yMy0xLjA2LTIuODQgMGwtNTQuMDQgOTMuOGMtLjYyIDEuMDcuMjEgMi4yOSAxLjQyIDIuMjloMTA4LjA4YzEuMjEgMCAyLjA0LTEuMjIgMS40Mi0yLjI5ek02NS4xNyAxMC4ybDU0LjA0IDkzLjhjMi4yOCAzLjk2LS42NSA4Ljc4LTUuMTcgOC43OEg1Ljk2Yy00LjUyIDAtNy40NS00LjgyLTUuMTctOC43OGw1NC4wNC05My44YzIuMjgtMy45NSA4LjAzLTQgMTAuMzQgMHpcXFwiIHN0eWxlPVxcXCItd2Via2l0LWFuaW1hdGlvbi1uYW1lOk5YUmVwb3J0V2FybmluZzItYW5pbWF0aW9uO2FuaW1hdGlvbi1uYW1lOk5YUmVwb3J0V2FybmluZzItYW5pbWF0aW9uOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjQyLDAsLjU4LDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40MiwwLC41OCwxKVxcXCIgZmlsbD1cXFwiaW5oZXJpdFxcXCIgZGF0YS1hbmltYXRvci1ncm91cD1cXFwidHJ1ZVxcXCIgZGF0YS1hbmltYXRvci10eXBlPVxcXCIyXFxcIi8+PC9nPjxnIHN0eWxlPVxcXCItd2Via2l0LWFuaW1hdGlvbi1uYW1lOk5YUmVwb3J0V2FybmluZzMtYW5pbWF0aW9uO2FuaW1hdGlvbi1uYW1lOk5YUmVwb3J0V2FybmluZzMtYW5pbWF0aW9uOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjQyLDAsLjU4LDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40MiwwLC41OCwxKTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2Ni42cHgpIHNjYWxlKDEsMSkgdHJhbnNsYXRlKC02MHB4LC02Ni42cHgpXFxcIj48cGF0aCBkPVxcXCJNNTcuODMgOTQuMDFjMCAxLjIuOTcgMi4xNyAyLjE3IDIuMTdzMi4xNy0uOTcgMi4xNy0yLjE3di0zLjJjMC0xLjItLjk3LTIuMTctMi4xNy0yLjE3cy0yLjE3Ljk3LTIuMTcgMi4xN3YzLjJ6bTAtMTQuMTVjMCAxLjIuOTcgMi4xNyAyLjE3IDIuMTdzMi4xNy0uOTcgMi4xNy0yLjE3VjM5LjIxYzAtMS4yLS45Ny0yLjE3LTIuMTctMi4xN3MtMi4xNy45Ny0yLjE3IDIuMTd2NDAuNjV6XFxcIiBzdHlsZT1cXFwiLXdlYmtpdC1hbmltYXRpb24tbmFtZTpOWFJlcG9ydFdhcm5pbmc0LWFuaW1hdGlvbjthbmltYXRpb24tbmFtZTpOWFJlcG9ydFdhcm5pbmc0LWFuaW1hdGlvbjstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40MiwwLC41OCwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNDIsMCwuNTgsMSlcXFwiIGZpbGw9XFxcImluaGVyaXRcXFwiIGRhdGEtYW5pbWF0b3ItZ3JvdXA9XFxcInRydWVcXFwiIGRhdGEtYW5pbWF0b3ItdHlwZT1cXFwiMlxcXCIvPjwvZz48L3N2Zz5cIjtyZXR1cm4gaX0sTD1mdW5jdGlvbih0LGUpe3R8fCh0PVwiMTEwcHhcIiksZXx8KGU9XCIjMjZjMGQzXCIpO3ZhciBpPVwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGlkPVxcXCJOWFJlcG9ydEluZm9cXFwiIHdpZHRoPVxcXCJcIit0K1wiXFxcIiBoZWlnaHQ9XFxcIlwiK3QrXCJcXFwiIGZpbGw9XFxcIlwiK2UrXCJcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMjAgMTIwXFxcIj48c3R5bGU+QC13ZWJraXQta2V5ZnJhbWVzIE5YUmVwb3J0SW5mbzQtYW5pbWF0aW9uezAle29wYWNpdHk6MH01MCUsdG97b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIE5YUmVwb3J0SW5mbzQtYW5pbWF0aW9uezAle29wYWNpdHk6MH01MCUsdG97b3BhY2l0eToxfX1ALXdlYmtpdC1rZXlmcmFtZXMgTlhSZXBvcnRJbmZvMy1hbmltYXRpb257MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjUsLjUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC41LC41KSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpfTUwJSx0b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSgxLDEpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKDEsMSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KX02MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjk1LC45NSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjk1LC45NSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KX19QGtleWZyYW1lcyBOWFJlcG9ydEluZm8zLWFuaW1hdGlvbnswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSguNSwuNSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjUsLjUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCl9NTAlLHRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKDEsMSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoMSwxKSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpfTYwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSguOTUsLjk1KSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSguOTUsLjk1KSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpfX1ALXdlYmtpdC1rZXlmcmFtZXMgTlhSZXBvcnRJbmZvMi1hbmltYXRpb257MCV7b3BhY2l0eTowfTQwJSx0b3tvcGFjaXR5OjF9fUBrZXlmcmFtZXMgTlhSZXBvcnRJbmZvMi1hbmltYXRpb257MCV7b3BhY2l0eTowfTQwJSx0b3tvcGFjaXR5OjF9fUAtd2Via2l0LWtleWZyYW1lcyBOWFJlcG9ydEluZm8xLWFuaW1hdGlvbnswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSguNSwuNSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoLjUsLjUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCl9NDAlLHRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKDEsMSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoMSwxKSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpfTYwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSguOTUsLjk1KSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSguOTUsLjk1KSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpfX1Aa2V5ZnJhbWVzIE5YUmVwb3J0SW5mbzEtYW5pbWF0aW9uezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC41LC41KSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSguNSwuNSkgdHJhbnNsYXRlKC02MHB4LC02MHB4KX00MCUsdG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoMSwxKSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSgxLDEpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCl9NjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC45NSwuOTUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2MHB4LDYwcHgpIHNjYWxlKC45NSwuOTUpIHRyYW5zbGF0ZSgtNjBweCwtNjBweCl9fSNOWFJlcG9ydEluZm8gKnstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxLjJzO2FuaW1hdGlvbi1kdXJhdGlvbjoxLjJzOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMCwwLDEsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMCwwLDEsMSl9PC9zdHlsZT48ZyBzdHlsZT1cXFwiLXdlYmtpdC1hbmltYXRpb24tbmFtZTpOWFJlcG9ydEluZm8xLWFuaW1hdGlvbjthbmltYXRpb24tbmFtZTpOWFJlcG9ydEluZm8xLWFuaW1hdGlvbjstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40MiwwLC41OCwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNDIsMCwuNTgsMSk7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDYwcHgsNjBweCkgc2NhbGUoMSwxKSB0cmFuc2xhdGUoLTYwcHgsLTYwcHgpXFxcIj48cGF0aCBkPVxcXCJNNjAgMTE1LjM4QzI5LjQ2IDExNS4zOCA0LjYyIDkwLjU0IDQuNjIgNjAgNC42MiAyOS40NiAyOS40NiA0LjYyIDYwIDQuNjJjMzAuNTQgMCA1NS4zOCAyNC44NCA1NS4zOCA1NS4zOCAwIDMwLjU0LTI0Ljg0IDU1LjM4LTU1LjM4IDU1LjM4ek02MCAwQzI2LjkyIDAgMCAyNi45MiAwIDYwczI2LjkyIDYwIDYwIDYwIDYwLTI2LjkyIDYwLTYwUzkzLjA4IDAgNjAgMHpcXFwiIHN0eWxlPVxcXCItd2Via2l0LWFuaW1hdGlvbi1uYW1lOk5YUmVwb3J0SW5mbzItYW5pbWF0aW9uO2FuaW1hdGlvbi1uYW1lOk5YUmVwb3J0SW5mbzItYW5pbWF0aW9uOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjQyLDAsLjU4LDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40MiwwLC41OCwxKVxcXCIgZmlsbD1cXFwiaW5oZXJpdFxcXCIgZGF0YS1hbmltYXRvci1ncm91cD1cXFwidHJ1ZVxcXCIgZGF0YS1hbmltYXRvci10eXBlPVxcXCIyXFxcIi8+PC9nPjxnIHN0eWxlPVxcXCItd2Via2l0LWFuaW1hdGlvbi1uYW1lOk5YUmVwb3J0SW5mbzMtYW5pbWF0aW9uO2FuaW1hdGlvbi1uYW1lOk5YUmVwb3J0SW5mbzMtYW5pbWF0aW9uOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjQyLDAsLjU4LDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40MiwwLC41OCwxKTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoNjBweCw2MHB4KSBzY2FsZSgxLDEpIHRyYW5zbGF0ZSgtNjBweCwtNjBweClcXFwiPjxwYXRoIGQ9XFxcIk01Ny43NSA0My44NWMwLTEuMjQgMS4wMS0yLjI1IDIuMjUtMi4yNXMyLjI1IDEuMDEgMi4yNSAyLjI1djQ4LjE4YzAgMS4yNC0xLjAxIDIuMjUtMi4yNSAyLjI1cy0yLjI1LTEuMDEtMi4yNS0yLjI1VjQzLjg1em0wLTE1Ljg4YzAtMS4yNCAxLjAxLTIuMjUgMi4yNS0yLjI1czIuMjUgMS4wMSAyLjI1IDIuMjV2My4zMmMwIDEuMjUtMS4wMSAyLjI1LTIuMjUgMi4yNXMtMi4yNS0xLTIuMjUtMi4yNXYtMy4zMnpcXFwiIHN0eWxlPVxcXCItd2Via2l0LWFuaW1hdGlvbi1uYW1lOk5YUmVwb3J0SW5mbzQtYW5pbWF0aW9uO2FuaW1hdGlvbi1uYW1lOk5YUmVwb3J0SW5mbzQtYW5pbWF0aW9uOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjQyLDAsLjU4LDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40MiwwLC41OCwxKVxcXCIgZmlsbD1cXFwiaW5oZXJpdFxcXCIgZGF0YS1hbmltYXRvci1ncm91cD1cXFwidHJ1ZVxcXCIgZGF0YS1hbmltYXRvci10eXBlPVxcXCIyXFxcIi8+PC9nPjwvc3ZnPlwiO3JldHVybiBpfSxXPWZ1bmN0aW9uKHQsZSl7dHx8KHQ9XCI2MHB4XCIpLGV8fChlPVwiIzMyYzY4MlwiKTt2YXIgaT1cIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBzdHJva2U9XFxcIlwiK2UrXCJcXFwiIHdpZHRoPVxcXCJcIit0K1wiXFxcIiBoZWlnaHQ9XFxcIlwiK3QrXCJcXFwiIHRyYW5zZm9ybT1cXFwic2NhbGUoLjgpXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzggMzhcXFwiPjxnIGZpbGw9XFxcIm5vbmVcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgxIDEpXFxcIj48Y2lyY2xlIGN4PVxcXCIxOFxcXCIgY3k9XFxcIjE4XFxcIiByPVxcXCIxOFxcXCIgc3Ryb2tlLW9wYWNpdHk9XFxcIi4yNVxcXCIvPjxwYXRoIGQ9XFxcIk0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFxcXCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT1cXFwidHJhbnNmb3JtXFxcIiBkdXI9XFxcIjFzXFxcIiBmcm9tPVxcXCIwIDE4IDE4XFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgdG89XFxcIjM2MCAxOCAxOFxcXCIgdHlwZT1cXFwicm90YXRlXFxcIi8+PC9wYXRoPjwvZz48L3N2Zz5cIjtyZXR1cm4gaX0sST1mdW5jdGlvbih0LGUpe3R8fCh0PVwiNjBweFwiKSxlfHwoZT1cIiMzMmM2ODJcIik7dmFyIGk9XCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgaWQ9XFxcIk5YTG9hZGluZ0hvdXJnbGFzc1xcXCIgZmlsbD1cXFwiXCIrZStcIlxcXCIgd2lkdGg9XFxcIlwiK3QrXCJcXFwiIGhlaWdodD1cXFwiXCIrdCtcIlxcXCIgdmlld0JveD1cXFwiMCAwIDIwMCAyMDBcXFwiPjxzdHlsZT5ALXdlYmtpdC1rZXlmcmFtZXMgTlhob3VyZ2xhc3M1LWFuaW1hdGlvbnswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLDEpO3RyYW5zZm9ybTpzY2FsZSgxLDEpfTE2LjY3JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLC44KTt0cmFuc2Zvcm06c2NhbGUoMSwuOCl9MzMuMzMley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC44OCwuNik7dHJhbnNmb3JtOnNjYWxlKC44OCwuNil9MzcuNSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjg1LC41NSk7dHJhbnNmb3JtOnNjYWxlKC44NSwuNTUpfTQxLjY3JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOCwuNSk7dHJhbnNmb3JtOnNjYWxlKC44LC41KX00NS44MyV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjc1LC40NSk7dHJhbnNmb3JtOnNjYWxlKC43NSwuNDUpfTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNywuNCk7dHJhbnNmb3JtOnNjYWxlKC43LC40KX01NC4xNyV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjYsLjM1KTt0cmFuc2Zvcm06c2NhbGUoLjYsLjM1KX01OC4zMyV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUsLjMpO3RyYW5zZm9ybTpzY2FsZSguNSwuMyl9ODMuMzMlLHRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC4yLDApO3RyYW5zZm9ybTpzY2FsZSguMiwwKX19QGtleWZyYW1lcyBOWGhvdXJnbGFzczUtYW5pbWF0aW9uezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEsMSk7dHJhbnNmb3JtOnNjYWxlKDEsMSl9MTYuNjcley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEsLjgpO3RyYW5zZm9ybTpzY2FsZSgxLC44KX0zMy4zMyV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjg4LC42KTt0cmFuc2Zvcm06c2NhbGUoLjg4LC42KX0zNy41JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguODUsLjU1KTt0cmFuc2Zvcm06c2NhbGUoLjg1LC41NSl9NDEuNjcley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC44LC41KTt0cmFuc2Zvcm06c2NhbGUoLjgsLjUpfTQ1LjgzJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNzUsLjQ1KTt0cmFuc2Zvcm06c2NhbGUoLjc1LC40NSl9NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC43LC40KTt0cmFuc2Zvcm06c2NhbGUoLjcsLjQpfTU0LjE3JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNiwuMzUpO3RyYW5zZm9ybTpzY2FsZSguNiwuMzUpfTU4LjMzJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNSwuMyk7dHJhbnNmb3JtOnNjYWxlKC41LC4zKX04My4zMyUsdG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjIsMCk7dHJhbnNmb3JtOnNjYWxlKC4yLDApfX1ALXdlYmtpdC1rZXlmcmFtZXMgTlhob3VyZ2xhc3MzLWFuaW1hdGlvbnswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLC4wMik7dHJhbnNmb3JtOnNjYWxlKDEsLjAyKX03OS4xNyUsdG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSwxKTt0cmFuc2Zvcm06c2NhbGUoMSwxKX19QGtleWZyYW1lcyBOWGhvdXJnbGFzczMtYW5pbWF0aW9uezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEsLjAyKTt0cmFuc2Zvcm06c2NhbGUoMSwuMDIpfTc5LjE3JSx0b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLDEpO3RyYW5zZm9ybTpzY2FsZSgxLDEpfX1ALXdlYmtpdC1rZXlmcmFtZXMgTlhob3VyZ2xhc3MxLWFuaW1hdGlvbnswJSw4My4zMyV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfX1Aa2V5ZnJhbWVzIE5YaG91cmdsYXNzMS1hbmltYXRpb257MCUsODMuMzMley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKX19I05YTG9hZGluZ0hvdXJnbGFzcyAqey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjEuMnM7YW5pbWF0aW9uLWR1cmF0aW9uOjEuMnM7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLDAsMSwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLDAsMSwxKX08L3N0eWxlPjxnIGRhdGEtYW5pbWF0b3ItZ3JvdXA9XFxcInRydWVcXFwiIGRhdGEtYW5pbWF0b3ItdHlwZT1cXFwiMVxcXCIgc3R5bGU9XFxcIi13ZWJraXQtYW5pbWF0aW9uLW5hbWU6Tlhob3VyZ2xhc3MxLWFuaW1hdGlvbjthbmltYXRpb24tbmFtZTpOWGhvdXJnbGFzczEtYW5pbWF0aW9uOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCUgNTAlO3RyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTt0cmFuc2Zvcm0tYm94OmZpbGwtYm94XFxcIj48ZyBpZD1cXFwiTlhob3VyZ2xhc3MyXFxcIiBmaWxsPVxcXCJpbmhlcml0XFxcIj48ZyBkYXRhLWFuaW1hdG9yLWdyb3VwPVxcXCJ0cnVlXFxcIiBkYXRhLWFuaW1hdG9yLXR5cGU9XFxcIjJcXFwiIHN0eWxlPVxcXCItd2Via2l0LWFuaW1hdGlvbi1uYW1lOk5YaG91cmdsYXNzMy1hbmltYXRpb247YW5pbWF0aW9uLW5hbWU6Tlhob3VyZ2xhc3MzLWFuaW1hdGlvbjstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40MiwwLC41OCwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNDIsMCwuNTgsMSk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjUwJSAxMDAlO3RyYW5zZm9ybS1vcmlnaW46NTAlIDEwMCU7dHJhbnNmb3JtLWJveDpmaWxsLWJveFxcXCIgb3BhY2l0eT1cXFwiLjRcXFwiPjxwYXRoIGlkPVxcXCJOWGhvdXJnbGFzczRcXFwiIGQ9XFxcIk0xMDAgMTAwbC0zNC4zOCAzMi4wOHYzMS4xNGg2OC43NnYtMzEuMTR6XFxcIi8+PC9nPjxnIGRhdGEtYW5pbWF0b3ItZ3JvdXA9XFxcInRydWVcXFwiIGRhdGEtYW5pbWF0b3ItdHlwZT1cXFwiMlxcXCIgc3R5bGU9XFxcIi13ZWJraXQtYW5pbWF0aW9uLW5hbWU6Tlhob3VyZ2xhc3M1LWFuaW1hdGlvbjthbmltYXRpb24tbmFtZTpOWGhvdXJnbGFzczUtYW5pbWF0aW9uOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCUgMTAwJTt0cmFuc2Zvcm0tb3JpZ2luOjUwJSAxMDAlO3RyYW5zZm9ybS1ib3g6ZmlsbC1ib3hcXFwiIG9wYWNpdHk9XFxcIi40XFxcIj48cGF0aCBpZD1cXFwiTlhob3VyZ2xhc3M2XFxcIiBkPVxcXCJNMTAwIDEwMEw2NS42MiA2Ny45MlYzNi43OGg2OC43NnYzMS4xNHpcXFwiLz48L2c+PHBhdGggZD1cXFwiTTUxLjE0IDM4Ljg5aDguMzN2MTQuOTNjMCAxNS4xIDguMjkgMjguOTkgMjMuMzQgMzkuMSAxLjg4IDEuMjUgMy4wNCAzLjk3IDMuMDQgNy4wOHMtMS4xNiA1LjgzLTMuMDQgNy4wOWMtMTUuMDUgMTAuMS0yMy4zNCAyMy45OS0yMy4zNCAzOS4wOXYxNC45M2gtOC4zM2E0Ljg1OSA0Ljg1OSAwIDEgMCAwIDkuNzJoOTcuNzJhNC44NTkgNC44NTkgMCAxIDAgMC05LjcyaC04LjMzdi0xNC45M2MwLTE1LjEtOC4yOS0yOC45OS0yMy4zNC0zOS4wOS0xLjg4LTEuMjYtMy4wNC0zLjk4LTMuMDQtNy4wOXMxLjE2LTUuODMgMy4wNC03LjA4YzE1LjA1LTEwLjExIDIzLjM0LTI0IDIzLjM0LTM5LjFWMzguODloOC4zM2E0Ljg1OSA0Ljg1OSAwIDEgMCAwLTkuNzJINTEuMTRhNC44NTkgNC44NTkgMCAxIDAgMCA5Ljcyem03OS42NyAxNC45M2MwIDE1Ljg3LTExLjkzIDI2LjI1LTE5LjA0IDMxLjAzLTQuNiAzLjA4LTcuMzQgOC43NS03LjM0IDE1LjE1IDAgNi40MSAyLjc0IDEyLjA3IDcuMzQgMTUuMTUgNy4xMSA0Ljc4IDE5LjA0IDE1LjE2IDE5LjA0IDMxLjAzdjE0LjkzSDY5LjE5di0xNC45M2MwLTE1Ljg3IDExLjkzLTI2LjI1IDE5LjA0LTMxLjAyIDQuNi0zLjA5IDcuMzQtOC43NSA3LjM0LTE1LjE2IDAtNi40LTIuNzQtMTIuMDctNy4zNC0xNS4xNS03LjExLTQuNzgtMTkuMDQtMTUuMTYtMTkuMDQtMzEuMDNWMzguODloNjEuNjJ2MTQuOTN6XFxcIi8+PC9nPjwvZz48L3N2Zz5cIjtyZXR1cm4gaX0sUj1mdW5jdGlvbih0LGUpe3R8fCh0PVwiNjBweFwiKSxlfHwoZT1cIiMzMmM2ODJcIik7dmFyIGk9XCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIlwiK3QrXCJcXFwiIGhlaWdodD1cXFwiXCIrdCtcIlxcXCIgdmlld0JveD1cXFwiMjUgMjUgNTAgNTBcXFwiIHN0eWxlPVxcXCItd2Via2l0LWFuaW1hdGlvbjpyb3RhdGUgMnMgbGluZWFyIGluZmluaXRlO2FuaW1hdGlvbjpyb3RhdGUgMnMgbGluZWFyIGluZmluaXRlO2hlaWdodDpcIit0K1wiOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyOy1tcy10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyO3dpZHRoOlwiK3QrXCI7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO21hcmdpbjphdXRvXFxcIj48c3R5bGU+QC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZXt0b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgcm90YXRle3Rvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIGRhc2h7MCV7c3Ryb2tlLWRhc2hhcnJheToxLDIwMDtzdHJva2UtZGFzaG9mZnNldDowfTUwJXtzdHJva2UtZGFzaGFycmF5Ojg5LDIwMDtzdHJva2UtZGFzaG9mZnNldDotMzV9dG97c3Ryb2tlLWRhc2hhcnJheTo4OSwyMDA7c3Ryb2tlLWRhc2hvZmZzZXQ6LTEyNH19QGtleWZyYW1lcyBkYXNoezAle3N0cm9rZS1kYXNoYXJyYXk6MSwyMDA7c3Ryb2tlLWRhc2hvZmZzZXQ6MH01MCV7c3Ryb2tlLWRhc2hhcnJheTo4OSwyMDA7c3Ryb2tlLWRhc2hvZmZzZXQ6LTM1fXRve3N0cm9rZS1kYXNoYXJyYXk6ODksMjAwO3N0cm9rZS1kYXNob2Zmc2V0Oi0xMjR9fTwvc3R5bGU+PGNpcmNsZSBjeD1cXFwiNTBcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiMjBcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiXCIrZStcIlxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIyXFxcIiBzdHlsZT1cXFwiLXdlYmtpdC1hbmltYXRpb246ZGFzaCAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlLGNvbG9yIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7YW5pbWF0aW9uOmRhc2ggMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSxjb2xvciAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlXFxcIiBzdHJva2UtZGFzaGFycmF5PVxcXCIxNTAgMjAwXFxcIiBzdHJva2UtZGFzaG9mZnNldD1cXFwiLTEwXFxcIiBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiLz48L3N2Zz5cIjtyZXR1cm4gaX0sQT1mdW5jdGlvbih0LGUpe3R8fCh0PVwiNjBweFwiKSxlfHwoZT1cIiMzMmM2ODJcIik7dmFyIGk9XCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwiXCIrZStcIlxcXCIgd2lkdGg9XFxcIlwiK3QrXCJcXFwiIGhlaWdodD1cXFwiXCIrdCtcIlxcXCIgdmlld0JveD1cXFwiMCAwIDEyOCAxMjhcXFwiPjxnPjxwYXRoIGZpbGw9XFxcImluaGVyaXRcXFwiIGQ9XFxcIk0xMDkuMjUgNTUuNWgtMzZsMTItMTJhMjkuNTQgMjkuNTQgMCAwIDAtNDkuNTMgMTJIMTguNzVBNDYuMDQgNDYuMDQgMCAwIDEgOTYuOSAzMS44NGwxMi4zNS0xMi4zNHYzNnptLTkwLjUgMTdoMzZsLTEyIDEyYTI5LjU0IDI5LjU0IDAgMCAwIDQ5LjUzLTEyaDE2Ljk3QTQ2LjA0IDQ2LjA0IDAgMCAxIDMxLjEgOTYuMTZMMTguNzQgMTA4LjV2LTM2elxcXCIvPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XFxcInRyYW5zZm9ybVxcXCIgZHVyPVxcXCIxLjVzXFxcIiBmcm9tPVxcXCIwIDY0IDY0XFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgdG89XFxcIjM2MCA2NCA2NFxcXCIgdHlwZT1cXFwicm90YXRlXFxcIi8+PC9nPjwvc3ZnPlwiO3JldHVybiBpfSxNPWZ1bmN0aW9uKHQsZSl7dHx8KHQ9XCI2MHB4XCIpLGV8fChlPVwiIzMyYzY4MlwiKTt2YXIgaT1cIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJcIitlK1wiXFxcIiB3aWR0aD1cXFwiXCIrdCtcIlxcXCIgaGVpZ2h0PVxcXCJcIit0K1wiXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAwIDEwMFxcXCI+PGcgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoMjUgNTApXFxcIj48Y2lyY2xlIHI9XFxcIjlcXFwiIGZpbGw9XFxcImluaGVyaXRcXFwiIHRyYW5zZm9ybT1cXFwic2NhbGUoLjIzOSlcXFwiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XFxcInRyYW5zZm9ybVxcXCIgYmVnaW49XFxcIi0wLjI2NnNcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGR1cj1cXFwiMC44c1xcXCIga2V5U3BsaW5lcz1cXFwiMC4zIDAgMC43IDE7MC4zIDAgMC43IDFcXFwiIGtleVRpbWVzPVxcXCIwOzAuNTsxXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgdHlwZT1cXFwic2NhbGVcXFwiIHZhbHVlcz1cXFwiMDsxOzBcXFwiLz48L2NpcmNsZT48L2c+PGcgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoNTAgNTApXFxcIj48Y2lyY2xlIHI9XFxcIjlcXFwiIGZpbGw9XFxcImluaGVyaXRcXFwiIHRyYW5zZm9ybT1cXFwic2NhbGUoLjAwMTUyKVxcXCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT1cXFwidHJhbnNmb3JtXFxcIiBiZWdpbj1cXFwiLTAuMTMzc1xcXCIgY2FsY01vZGU9XFxcInNwbGluZVxcXCIgZHVyPVxcXCIwLjhzXFxcIiBrZXlTcGxpbmVzPVxcXCIwLjMgMCAwLjcgMTswLjMgMCAwLjcgMVxcXCIga2V5VGltZXM9XFxcIjA7MC41OzFcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiB0eXBlPVxcXCJzY2FsZVxcXCIgdmFsdWVzPVxcXCIwOzE7MFxcXCIvPjwvY2lyY2xlPjwvZz48ZyB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSg3NSA1MClcXFwiPjxjaXJjbGUgcj1cXFwiOVxcXCIgZmlsbD1cXFwiaW5oZXJpdFxcXCIgdHJhbnNmb3JtPVxcXCJzY2FsZSguMjk5KVxcXCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT1cXFwidHJhbnNmb3JtXFxcIiBiZWdpbj1cXFwiMHNcXFwiIGNhbGNNb2RlPVxcXCJzcGxpbmVcXFwiIGR1cj1cXFwiMC44c1xcXCIga2V5U3BsaW5lcz1cXFwiMC4zIDAgMC43IDE7MC4zIDAgMC43IDFcXFwiIGtleVRpbWVzPVxcXCIwOzAuNTsxXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgdHlwZT1cXFwic2NhbGVcXFwiIHZhbHVlcz1cXFwiMDsxOzBcXFwiLz48L2NpcmNsZT48L2c+PC9zdmc+XCI7cmV0dXJuIGl9LEI9ZnVuY3Rpb24odCxlKXt0fHwodD1cIjYwcHhcIiksZXx8KGU9XCIjMzJjNjgyXCIpO3ZhciBpPVwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHN0cm9rZT1cXFwiXCIrZStcIlxcXCIgd2lkdGg9XFxcIlwiK3QrXCJcXFwiIGhlaWdodD1cXFwiXCIrdCtcIlxcXCIgdmlld0JveD1cXFwiMCAwIDQ0IDQ0XFxcIj48ZyBmaWxsPVxcXCJub25lXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIHN0cm9rZS13aWR0aD1cXFwiMlxcXCI+PGNpcmNsZSBjeD1cXFwiMjJcXFwiIGN5PVxcXCIyMlxcXCIgcj1cXFwiMVxcXCI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiclxcXCIgYmVnaW49XFxcIjBzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBkdXI9XFxcIjEuOHNcXFwiIGtleVNwbGluZXM9XFxcIjAuMTY1LCAwLjg0LCAwLjQ0LCAxXFxcIiBrZXlUaW1lcz1cXFwiMDsgMVxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIHZhbHVlcz1cXFwiMTsgMjBcXFwiLz48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJzdHJva2Utb3BhY2l0eVxcXCIgYmVnaW49XFxcIjBzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBkdXI9XFxcIjEuOHNcXFwiIGtleVNwbGluZXM9XFxcIjAuMywgMC42MSwgMC4zNTUsIDFcXFwiIGtleVRpbWVzPVxcXCIwOyAxXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgdmFsdWVzPVxcXCIxOyAwXFxcIi8+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMjJcXFwiIGN5PVxcXCIyMlxcXCIgcj1cXFwiMVxcXCI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwiclxcXCIgYmVnaW49XFxcIi0wLjlzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBkdXI9XFxcIjEuOHNcXFwiIGtleVNwbGluZXM9XFxcIjAuMTY1LCAwLjg0LCAwLjQ0LCAxXFxcIiBrZXlUaW1lcz1cXFwiMDsgMVxcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIHZhbHVlcz1cXFwiMTsgMjBcXFwiLz48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJzdHJva2Utb3BhY2l0eVxcXCIgYmVnaW49XFxcIi0wLjlzXFxcIiBjYWxjTW9kZT1cXFwic3BsaW5lXFxcIiBkdXI9XFxcIjEuOHNcXFwiIGtleVNwbGluZXM9XFxcIjAuMywgMC42MSwgMC4zNTUsIDFcXFwiIGtleVRpbWVzPVxcXCIwOyAxXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgdmFsdWVzPVxcXCIxOyAwXFxcIi8+PC9jaXJjbGU+PC9nPjwvc3ZnPlwiO3JldHVybiBpfSxYPWZ1bmN0aW9uKHQsZSxpKXt0fHwodD1cIjYwcHhcIiksZXx8KGU9XCIjZjhmOGY4XCIpLGl8fChpPVwiIzMyYzY4MlwiKTt2YXIgYT1cIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBpZD1cXFwiTlhMb2FkaW5nTm90aWZsaXhMaWJcXFwiIHdpZHRoPVxcXCJcIit0K1wiXFxcIiBoZWlnaHQ9XFxcIlwiK3QrXCJcXFwiIHZpZXdCb3g9XFxcIjAgMCAyMDAgMjAwXFxcIj48ZGVmcz48c3R5bGU+QGtleWZyYW1lcyBub3RpZmxpeC1uezAle3N0cm9rZS1kYXNob2Zmc2V0OjEwMDB9dG97c3Ryb2tlLWRhc2hvZmZzZXQ6MH19QGtleWZyYW1lcyBub3RpZmxpeC14ezAle3N0cm9rZS1kYXNob2Zmc2V0OjEwMDB9dG97c3Ryb2tlLWRhc2hvZmZzZXQ6MH19QGtleWZyYW1lcyBub3RpZmxpeC1kb3R7MCUsdG97c3Ryb2tlLXdpZHRoOjB9NTAle3N0cm9rZS13aWR0aDoxMn19Lm54LWljb24tbGluZXtzdHJva2U6XCIrZStcIjtzdHJva2Utd2lkdGg6MTI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjIyO2ZpbGw6bm9uZX08L3N0eWxlPjwvZGVmcz48cGF0aCBkPVxcXCJNNDcuOTcgMTM1LjA1YTYuNSA2LjUgMCAxIDEgMCAxMyA2LjUgNi41IDAgMCAxIDAtMTN6XFxcIiBzdHlsZT1cXFwiYW5pbWF0aW9uLW5hbWU6bm90aWZsaXgtZG90O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7YW5pbWF0aW9uLWR1cmF0aW9uOjEuMjVzO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7YW5pbWF0aW9uLWRpcmVjdGlvbjpub3JtYWxcXFwiIGZpbGw9XFxcIlwiK2krXCJcXFwiIHN0cm9rZT1cXFwiXCIraStcIlxcXCIgc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMjJcXFwiIHN0cm9rZS13aWR0aD1cXFwiMTJcXFwiLz48cGF0aCBjbGFzcz1cXFwibngtaWNvbi1saW5lXFxcIiBkPVxcXCJNMTAuMTQgMTQ0Ljc2Vjg3LjU1YzAtNS42OC00LjU0LTQxLjM2IDM3LjgzLTQxLjM2IDQyLjM2IDAgMzcuODIgMzUuNjggMzcuODIgNDEuMzZ2NTcuMjFcXFwiIHN0eWxlPVxcXCJhbmltYXRpb24tbmFtZTpub3RpZmxpeC1uO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO2FuaW1hdGlvbi1kdXJhdGlvbjoyLjVzO2FuaW1hdGlvbi1kZWxheTowczthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlO2FuaW1hdGlvbi1kaXJlY3Rpb246bm9ybWFsXFxcIiBzdHJva2UtZGFzaGFycmF5PVxcXCI1MDBcXFwiLz48cGF0aCBjbGFzcz1cXFwibngtaWNvbi1saW5lXFxcIiBkPVxcXCJNMTE1LjA2IDE0NC40OWMyNC45OC0zMi42OCA0OS45Ni02NS4zNSA3NC45NC05OC4wM00xMTQuODkgNDYuNmMyNS4wOSAzMi41OCA1MC4xOSA2NS4xNyA3NS4yOSA5Ny43NVxcXCIgc3R5bGU9XFxcImFuaW1hdGlvbi1uYW1lOm5vdGlmbGl4LXg7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7YW5pbWF0aW9uLWR1cmF0aW9uOjIuNXM7YW5pbWF0aW9uLWRlbGF5Oi4yczthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlO2FuaW1hdGlvbi1kaXJlY3Rpb246bm9ybWFsXFxcIiBzdHJva2UtZGFzaGFycmF5PVxcXCI1MDBcXFwiLz48L3N2Zz5cIjtyZXR1cm4gYX0sRD1mdW5jdGlvbigpe3JldHVyblwiW2lkXj1Ob3RpZmxpeE5vdGlmeVdyYXBde3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDo0MDAxO29wYWNpdHk6MTtyaWdodDoxMHB4O3RvcDoxMHB4O3dpZHRoOjI4MHB4O21heC13aWR0aDo5NiU7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O2JhY2tncm91bmQ6dHJhbnNwYXJlbnR9W2lkXj1Ob3RpZmxpeE5vdGlmeVdyYXBdLm54LWZsZXgtY2VudGVyLWNlbnRlcnttYXgtaGVpZ2h0OmNhbGMoMTAwdmggLSAyMHB4KTtvdmVyZmxvdy14OmhpZGRlbjtvdmVyZmxvdy15OmF1dG87ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LWZsZXgtd3JhcDp3cmFwOy1tcy1mbGV4LXdyYXA6d3JhcDtmbGV4LXdyYXA6d3JhcDstd2Via2l0LWJveC1vcmllbnQ6dmVydGljYWw7LXdlYmtpdC1ib3gtZGlyZWN0aW9uOm5vcm1hbDstd2Via2l0LWZsZXgtZGlyZWN0aW9uOmNvbHVtbjstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstd2Via2l0LWp1c3RpZnktY29udGVudDpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LXdlYmtpdC1hbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW46YXV0b31baWRePU5vdGlmbGl4Tm90aWZ5V3JhcF06Oi13ZWJraXQtc2Nyb2xsYmFye3dpZHRoOjA7aGVpZ2h0OjB9W2lkXj1Ob3RpZmxpeE5vdGlmeVdyYXBdOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntiYWNrZ3JvdW5kOnRyYW5zcGFyZW50fVtpZF49Tm90aWZsaXhOb3RpZnlXcmFwXTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2t7YmFja2dyb3VuZDp0cmFuc3BhcmVudH1baWRePU5vdGlmbGl4Tm90aWZ5V3JhcF0gKnstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9W2lkXj1Ob3RpZmxpeE5vdGlmeU92ZXJsYXldey13ZWJraXQtdHJhbnNpdGlvbjpiYWNrZ3JvdW5kIC4zcyBlYXNlLWluLW91dDstby10cmFuc2l0aW9uOmJhY2tncm91bmQgLjNzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246YmFja2dyb3VuZCAuM3MgZWFzZS1pbi1vdXR9W2lkXj1Ob3RpZmxpeE5vdGlmeVdyYXBdPmRpdntwb2ludGVyLWV2ZW50czphbGw7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2ZvbnQtZmFtaWx5OlxcXCJRdWlja3NhbmRcXFwiLC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFxcXCJTZWdvZSBVSVxcXCIsUm9ib3RvLFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsQXJpYWwsc2Fucy1zZXJpZjt3aWR0aDoxMDAlO2Rpc3BsYXk6LXdlYmtpdC1pbmxpbmUtYm94O2Rpc3BsYXk6LXdlYmtpdC1pbmxpbmUtZmxleDtkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveDtkaXNwbGF5OmlubGluZS1mbGV4Oy13ZWJraXQtZmxleC13cmFwOndyYXA7LW1zLWZsZXgtd3JhcDp3cmFwO2ZsZXgtd3JhcDp3cmFwOy13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstd2Via2l0LWFsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbjowIDAgMTBweDtib3JkZXItcmFkaXVzOjVweDtiYWNrZ3JvdW5kOiMxZTFlMWU7Y29sb3I6I2ZmZjtwYWRkaW5nOjEwcHggMTJweDtmb250LXNpemU6MTRweDtsaW5lLWhlaWdodDoxLjR9W2lkXj1Ob3RpZmxpeE5vdGlmeVdyYXBdPmRpdjpsYXN0LWNoaWxke21hcmdpbjowfVtpZF49Tm90aWZsaXhOb3RpZnlXcmFwXT5kaXYubngtd2l0aC1jYWxsYmFja3tjdXJzb3I6cG9pbnRlcn1baWRePU5vdGlmbGl4Tm90aWZ5V3JhcF0+ZGl2Lm54LXdpdGgtaWNvbntwYWRkaW5nOjhweDttaW4taGVpZ2h0OjU2cHh9W2lkXj1Ob3RpZmxpeE5vdGlmeVdyYXBdPmRpdi5ueC1wYXVzZWR7Y3Vyc29yOmF1dG99W2lkXj1Ob3RpZmxpeE5vdGlmeVdyYXBdPmRpdi5ueC1ub3RpZnktY2xpY2stdG8tY2xvc2V7Y3Vyc29yOnBvaW50ZXJ9W2lkXj1Ob3RpZmxpeE5vdGlmeVdyYXBdPmRpdi5ueC13aXRoLWNsb3NlLWJ1dHRvbntwYWRkaW5nOjEwcHggMzZweCAxMHB4IDEycHh9W2lkXj1Ob3RpZmxpeE5vdGlmeVdyYXBdPmRpdi5ueC13aXRoLWljb24ubngtd2l0aC1jbG9zZS1idXR0b257cGFkZGluZzo2cHggMzZweCA2cHggNnB4fVtpZF49Tm90aWZsaXhOb3RpZnlXcmFwXT5kaXY+c3Bhbi5ueC1tZXNzYWdle2N1cnNvcjppbmhlcml0O2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LWZhbWlseTppbmhlcml0IWltcG9ydGFudDt3b3JkLWJyZWFrOmJyZWFrLWFsbDt3b3JkLWJyZWFrOmJyZWFrLXdvcmR9W2lkXj1Ob3RpZmxpeE5vdGlmeVdyYXBdPmRpdj5zcGFuLm54LWNsb3NlLWJ1dHRvbntjdXJzb3I6cG9pbnRlcjstd2Via2l0LXRyYW5zaXRpb246YWxsIC4ycyBlYXNlLWluLW91dDstby10cmFuc2l0aW9uOmFsbCAuMnMgZWFzZS1pbi1vdXQ7dHJhbnNpdGlvbjphbGwgLjJzIGVhc2UtaW4tb3V0O3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjhweDt0b3A6MDtib3R0b206MDttYXJnaW46YXV0bztjb2xvcjppbmhlcml0O3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHh9W2lkXj1Ob3RpZmxpeE5vdGlmeVdyYXBdPmRpdj5zcGFuLm54LWNsb3NlLWJ1dHRvbjpob3Zlcnstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoOTBkZWcpfVtpZF49Tm90aWZsaXhOb3RpZnlXcmFwXT5kaXY+c3Bhbi5ueC1jbG9zZS1idXR0b24+c3Zne3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7cmlnaHQ6MnB4O3RvcDoycHh9W2lkXj1Ob3RpZmxpeE5vdGlmeVdyYXBdPmRpdj4ubngtbWVzc2FnZS1pY29ue3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjQwcHg7aGVpZ2h0OjQwcHg7Zm9udC1zaXplOjMwcHg7bGluZS1oZWlnaHQ6NDBweDt0ZXh0LWFsaWduOmNlbnRlcjtsZWZ0OjhweDt0b3A6MDtib3R0b206MDttYXJnaW46YXV0bztib3JkZXItcmFkaXVzOmluaGVyaXR9W2lkXj1Ob3RpZmxpeE5vdGlmeVdyYXBdPmRpdj4ubngtbWVzc2FnZS1pY29uLWZhLm54LW1lc3NhZ2UtaWNvbi1mYS1zaGFkb3d7Y29sb3I6aW5oZXJpdDtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjE1KTstd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAwIDM0cHggcmdiYSgwLDAsMCwuMik7Ym94LXNoYWRvdzppbnNldCAwIDAgMzRweCByZ2JhKDAsMCwwLC4yKTt0ZXh0LXNoYWRvdzowIDAgMTBweCByZ2JhKDAsMCwwLC4zKX1baWRePU5vdGlmbGl4Tm90aWZ5V3JhcF0+ZGl2PnNwYW4ubngtd2l0aC1pY29ue3Bvc2l0aW9uOnJlbGF0aXZlO2Zsb2F0OmxlZnQ7d2lkdGg6Y2FsYygxMDAlIC0gNDBweCk7bWFyZ2luOjAgMCAwIDQwcHg7cGFkZGluZzowIDAgMCAxMHB4Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH1baWRePU5vdGlmbGl4Tm90aWZ5V3JhcF0+ZGl2Lm54LXJ0bC1vbj4ubngtbWVzc2FnZS1pY29ue2xlZnQ6YXV0bztyaWdodDo4cHh9W2lkXj1Ob3RpZmxpeE5vdGlmeVdyYXBdPmRpdi5ueC1ydGwtb24+c3Bhbi5ueC13aXRoLWljb257cGFkZGluZzowIDEwcHggMCAwO21hcmdpbjowIDQwcHggMCAwfVtpZF49Tm90aWZsaXhOb3RpZnlXcmFwXT5kaXYubngtcnRsLW9uPnNwYW4ubngtY2xvc2UtYnV0dG9ue3JpZ2h0OmF1dG87bGVmdDo4cHh9W2lkXj1Ob3RpZmxpeE5vdGlmeVdyYXBdPmRpdi5ueC13aXRoLWljb24ubngtd2l0aC1jbG9zZS1idXR0b24ubngtcnRsLW9ue3BhZGRpbmc6NnB4IDZweCA2cHggMzZweH1baWRePU5vdGlmbGl4Tm90aWZ5V3JhcF0+ZGl2Lm54LXdpdGgtY2xvc2UtYnV0dG9uLm54LXJ0bC1vbntwYWRkaW5nOjEwcHggMTJweCAxMHB4IDM2cHh9W2lkXj1Ob3RpZmxpeE5vdGlmeU92ZXJsYXldLm54LXdpdGgtYW5pbWF0aW9uLFtpZF49Tm90aWZsaXhOb3RpZnlXcmFwXT5kaXYubngtd2l0aC1hbmltYXRpb24ubngtZmFkZXstd2Via2l0LWFuaW1hdGlvbjpub3RpZnktYW5pbWF0aW9uLWZhZGUgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbDthbmltYXRpb246bm90aWZ5LWFuaW1hdGlvbi1mYWRlIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWx9QC13ZWJraXQta2V5ZnJhbWVzIG5vdGlmeS1hbmltYXRpb24tZmFkZXswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgbm90aWZ5LWFuaW1hdGlvbi1mYWRlezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19W2lkXj1Ob3RpZmxpeE5vdGlmeVdyYXBdPmRpdi5ueC13aXRoLWFuaW1hdGlvbi5ueC16b29tey13ZWJraXQtYW5pbWF0aW9uOm5vdGlmeS1hbmltYXRpb24tem9vbSAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsO2FuaW1hdGlvbjpub3RpZnktYW5pbWF0aW9uLXpvb20gLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbH1ALXdlYmtpdC1rZXlmcmFtZXMgbm90aWZ5LWFuaW1hdGlvbi16b29tezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4wNSk7dHJhbnNmb3JtOnNjYWxlKDEuMDUpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1Aa2V5ZnJhbWVzIG5vdGlmeS1hbmltYXRpb24tem9vbXswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMDUpO3RyYW5zZm9ybTpzY2FsZSgxLjA1KX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19W2lkXj1Ob3RpZmxpeE5vdGlmeVdyYXBdPmRpdi5ueC13aXRoLWFuaW1hdGlvbi5ueC1mcm9tLXJpZ2h0ey13ZWJraXQtYW5pbWF0aW9uOm5vdGlmeS1hbmltYXRpb24tZnJvbS1yaWdodCAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsO2FuaW1hdGlvbjpub3RpZnktYW5pbWF0aW9uLWZyb20tcmlnaHQgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbH1ALXdlYmtpdC1rZXlmcmFtZXMgbm90aWZ5LWFuaW1hdGlvbi1mcm9tLXJpZ2h0ezAle3JpZ2h0Oi0zMDBweDtvcGFjaXR5OjB9NTAle3JpZ2h0OjhweDtvcGFjaXR5OjF9MTAwJXtyaWdodDowO29wYWNpdHk6MX19QGtleWZyYW1lcyBub3RpZnktYW5pbWF0aW9uLWZyb20tcmlnaHR7MCV7cmlnaHQ6LTMwMHB4O29wYWNpdHk6MH01MCV7cmlnaHQ6OHB4O29wYWNpdHk6MX0xMDAle3JpZ2h0OjA7b3BhY2l0eToxfX1baWRePU5vdGlmbGl4Tm90aWZ5V3JhcF0+ZGl2Lm54LXdpdGgtYW5pbWF0aW9uLm54LWZyb20tbGVmdHstd2Via2l0LWFuaW1hdGlvbjpub3RpZnktYW5pbWF0aW9uLWZyb20tbGVmdCAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsO2FuaW1hdGlvbjpub3RpZnktYW5pbWF0aW9uLWZyb20tbGVmdCAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsfUAtd2Via2l0LWtleWZyYW1lcyBub3RpZnktYW5pbWF0aW9uLWZyb20tbGVmdHswJXtsZWZ0Oi0zMDBweDtvcGFjaXR5OjB9NTAle2xlZnQ6OHB4O29wYWNpdHk6MX0xMDAle2xlZnQ6MDtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgbm90aWZ5LWFuaW1hdGlvbi1mcm9tLWxlZnR7MCV7bGVmdDotMzAwcHg7b3BhY2l0eTowfTUwJXtsZWZ0OjhweDtvcGFjaXR5OjF9MTAwJXtsZWZ0OjA7b3BhY2l0eToxfX1baWRePU5vdGlmbGl4Tm90aWZ5V3JhcF0+ZGl2Lm54LXdpdGgtYW5pbWF0aW9uLm54LWZyb20tdG9wey13ZWJraXQtYW5pbWF0aW9uOm5vdGlmeS1hbmltYXRpb24tZnJvbS10b3AgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbDthbmltYXRpb246bm90aWZ5LWFuaW1hdGlvbi1mcm9tLXRvcCAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsfUAtd2Via2l0LWtleWZyYW1lcyBub3RpZnktYW5pbWF0aW9uLWZyb20tdG9wezAle3RvcDotNTBweDtvcGFjaXR5OjB9NTAle3RvcDo4cHg7b3BhY2l0eToxfTEwMCV7dG9wOjA7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIG5vdGlmeS1hbmltYXRpb24tZnJvbS10b3B7MCV7dG9wOi01MHB4O29wYWNpdHk6MH01MCV7dG9wOjhweDtvcGFjaXR5OjF9MTAwJXt0b3A6MDtvcGFjaXR5OjF9fVtpZF49Tm90aWZsaXhOb3RpZnlXcmFwXT5kaXYubngtd2l0aC1hbmltYXRpb24ubngtZnJvbS1ib3R0b217LXdlYmtpdC1hbmltYXRpb246bm90aWZ5LWFuaW1hdGlvbi1mcm9tLWJvdHRvbSAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsO2FuaW1hdGlvbjpub3RpZnktYW5pbWF0aW9uLWZyb20tYm90dG9tIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWx9QC13ZWJraXQta2V5ZnJhbWVzIG5vdGlmeS1hbmltYXRpb24tZnJvbS1ib3R0b217MCV7Ym90dG9tOi01MHB4O29wYWNpdHk6MH01MCV7Ym90dG9tOjhweDtvcGFjaXR5OjF9MTAwJXtib3R0b206MDtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgbm90aWZ5LWFuaW1hdGlvbi1mcm9tLWJvdHRvbXswJXtib3R0b206LTUwcHg7b3BhY2l0eTowfTUwJXtib3R0b206OHB4O29wYWNpdHk6MX0xMDAle2JvdHRvbTowO29wYWNpdHk6MX19W2lkXj1Ob3RpZmxpeE5vdGlmeU92ZXJsYXldLm54LXdpdGgtYW5pbWF0aW9uLm54LXJlbW92ZSxbaWRePU5vdGlmbGl4Tm90aWZ5V3JhcF0+ZGl2Lm54LXdpdGgtYW5pbWF0aW9uLm54LWZhZGUubngtcmVtb3Zle29wYWNpdHk6MDstd2Via2l0LWFuaW1hdGlvbjpub3RpZnktcmVtb3ZlLWZhZGUgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbDthbmltYXRpb246bm90aWZ5LXJlbW92ZS1mYWRlIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWx9QC13ZWJraXQta2V5ZnJhbWVzIG5vdGlmeS1yZW1vdmUtZmFkZXswJXtvcGFjaXR5OjF9MTAwJXtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgbm90aWZ5LXJlbW92ZS1mYWRlezAle29wYWNpdHk6MX0xMDAle29wYWNpdHk6MH19W2lkXj1Ob3RpZmxpeE5vdGlmeVdyYXBdPmRpdi5ueC13aXRoLWFuaW1hdGlvbi5ueC16b29tLm54LXJlbW92ZXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCk7LXdlYmtpdC1hbmltYXRpb246bm90aWZ5LXJlbW92ZS16b29tIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWw7YW5pbWF0aW9uOm5vdGlmeS1yZW1vdmUtem9vbSAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsfUAtd2Via2l0LWtleWZyYW1lcyBub3RpZnktcmVtb3ZlLXpvb217MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjA1KTt0cmFuc2Zvcm06c2NhbGUoMS4wNSl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9fUBrZXlmcmFtZXMgbm90aWZ5LXJlbW92ZS16b29tezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4wNSk7dHJhbnNmb3JtOnNjYWxlKDEuMDUpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfX1baWRePU5vdGlmbGl4Tm90aWZ5V3JhcF0+ZGl2Lm54LXdpdGgtYW5pbWF0aW9uLm54LWZyb20tdG9wLm54LXJlbW92ZXtvcGFjaXR5OjA7LXdlYmtpdC1hbmltYXRpb246bm90aWZ5LXJlbW92ZS10by10b3AgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbDthbmltYXRpb246bm90aWZ5LXJlbW92ZS10by10b3AgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbH1ALXdlYmtpdC1rZXlmcmFtZXMgbm90aWZ5LXJlbW92ZS10by10b3B7MCV7dG9wOjA7b3BhY2l0eToxfTUwJXt0b3A6OHB4O29wYWNpdHk6MX0xMDAle3RvcDotNTBweDtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgbm90aWZ5LXJlbW92ZS10by10b3B7MCV7dG9wOjA7b3BhY2l0eToxfTUwJXt0b3A6OHB4O29wYWNpdHk6MX0xMDAle3RvcDotNTBweDtvcGFjaXR5OjB9fVtpZF49Tm90aWZsaXhOb3RpZnlXcmFwXT5kaXYubngtd2l0aC1hbmltYXRpb24ubngtZnJvbS1yaWdodC5ueC1yZW1vdmV7b3BhY2l0eTowOy13ZWJraXQtYW5pbWF0aW9uOm5vdGlmeS1yZW1vdmUtdG8tcmlnaHQgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbDthbmltYXRpb246bm90aWZ5LXJlbW92ZS10by1yaWdodCAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsfUAtd2Via2l0LWtleWZyYW1lcyBub3RpZnktcmVtb3ZlLXRvLXJpZ2h0ezAle3JpZ2h0OjA7b3BhY2l0eToxfTUwJXtyaWdodDo4cHg7b3BhY2l0eToxfTEwMCV7cmlnaHQ6LTMwMHB4O29wYWNpdHk6MH19QGtleWZyYW1lcyBub3RpZnktcmVtb3ZlLXRvLXJpZ2h0ezAle3JpZ2h0OjA7b3BhY2l0eToxfTUwJXtyaWdodDo4cHg7b3BhY2l0eToxfTEwMCV7cmlnaHQ6LTMwMHB4O29wYWNpdHk6MH19W2lkXj1Ob3RpZmxpeE5vdGlmeVdyYXBdPmRpdi5ueC13aXRoLWFuaW1hdGlvbi5ueC1mcm9tLWJvdHRvbS5ueC1yZW1vdmV7b3BhY2l0eTowOy13ZWJraXQtYW5pbWF0aW9uOm5vdGlmeS1yZW1vdmUtdG8tYm90dG9tIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWw7YW5pbWF0aW9uOm5vdGlmeS1yZW1vdmUtdG8tYm90dG9tIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWx9QC13ZWJraXQta2V5ZnJhbWVzIG5vdGlmeS1yZW1vdmUtdG8tYm90dG9tezAle2JvdHRvbTowO29wYWNpdHk6MX01MCV7Ym90dG9tOjhweDtvcGFjaXR5OjF9MTAwJXtib3R0b206LTUwcHg7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIG5vdGlmeS1yZW1vdmUtdG8tYm90dG9tezAle2JvdHRvbTowO29wYWNpdHk6MX01MCV7Ym90dG9tOjhweDtvcGFjaXR5OjF9MTAwJXtib3R0b206LTUwcHg7b3BhY2l0eTowfX1baWRePU5vdGlmbGl4Tm90aWZ5V3JhcF0+ZGl2Lm54LXdpdGgtYW5pbWF0aW9uLm54LWZyb20tbGVmdC5ueC1yZW1vdmV7b3BhY2l0eTowOy13ZWJraXQtYW5pbWF0aW9uOm5vdGlmeS1yZW1vdmUtdG8tbGVmdCAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsO2FuaW1hdGlvbjpub3RpZnktcmVtb3ZlLXRvLWxlZnQgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbH1ALXdlYmtpdC1rZXlmcmFtZXMgbm90aWZ5LXJlbW92ZS10by1sZWZ0ezAle2xlZnQ6MDtvcGFjaXR5OjF9NTAle2xlZnQ6OHB4O29wYWNpdHk6MX0xMDAle2xlZnQ6LTMwMHB4O29wYWNpdHk6MH19QGtleWZyYW1lcyBub3RpZnktcmVtb3ZlLXRvLWxlZnR7MCV7bGVmdDowO29wYWNpdHk6MX01MCV7bGVmdDo4cHg7b3BhY2l0eToxfTEwMCV7bGVmdDotMzAwcHg7b3BhY2l0eTowfX1cIn0sVD0wLEY9ZnVuY3Rpb24oYSxuLG8scil7aWYoIXcoXCJib2R5XCIpKXJldHVybiExO2V8fEcuTm90aWZ5LmluaXQoe30pO3ZhciBjPXYoITAsZSx7fSk7aWYoXCJvYmplY3RcIj09dHlwZW9mIG8mJiFBcnJheS5pc0FycmF5KG8pfHxcIm9iamVjdFwiPT10eXBlb2YgciYmIUFycmF5LmlzQXJyYXkocikpe3ZhciBwPXt9O1wib2JqZWN0XCI9PXR5cGVvZiBvP3A9bzpcIm9iamVjdFwiPT10eXBlb2YgciYmKHA9ciksZT12KCEwLGUscCl9dmFyIGY9ZVthLnRvTG9jYWxlTG93ZXJDYXNlKFwiZW5cIildO1QrKyxcInN0cmluZ1wiIT10eXBlb2YgbiYmKG49XCJOb3RpZmxpeCBcIithKSxlLnBsYWluVGV4dCYmKG49TihuKSksIWUucGxhaW5UZXh0JiZuLmxlbmd0aD5lLm1lc3NhZ2VNYXhMZW5ndGgmJihlPXYoITAsZSx7Y2xvc2VCdXR0b246ITAsbWVzc2FnZU1heExlbmd0aDoxNTB9KSxuPVwiUG9zc2libGUgSFRNTCBUYWdzIEVycm9yOiBUaGUgXFxcInBsYWluVGV4dFxcXCIgb3B0aW9uIGlzIFxcXCJmYWxzZVxcXCIgYW5kIHRoZSBub3RpZmljYXRpb24gY29udGVudCBsZW5ndGggaXMgbW9yZSB0aGFuIHRoZSBcXFwibWVzc2FnZU1heExlbmd0aFxcXCIgb3B0aW9uLlwiKSxuLmxlbmd0aD5lLm1lc3NhZ2VNYXhMZW5ndGgmJihuPW4uc3Vic3RyaW5nKDAsZS5tZXNzYWdlTWF4TGVuZ3RoKStcIi4uLlwiKSxcInNoYWRvd1wiPT09ZS5mb250QXdlc29tZUljb25TdHlsZSYmKGYuZm9udEF3ZXNvbWVJY29uQ29sb3I9Zi5iYWNrZ3JvdW5kKSxlLmNzc0FuaW1hdGlvbnx8KGUuY3NzQW5pbWF0aW9uRHVyYXRpb249MCk7dmFyIGQ9dC5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChtLndyYXBJRCl8fHQuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpZihkLmlkPW0ud3JhcElELGQuc3R5bGUud2lkdGg9ZS53aWR0aCxkLnN0eWxlLnpJbmRleD1lLnppbmRleCxkLnN0eWxlLm9wYWNpdHk9ZS5vcGFjaXR5LFwiY2VudGVyLWNlbnRlclwiPT09ZS5wb3NpdGlvbj8oZC5zdHlsZS5sZWZ0PWUuZGlzdGFuY2UsZC5zdHlsZS50b3A9ZS5kaXN0YW5jZSxkLnN0eWxlLnJpZ2h0PWUuZGlzdGFuY2UsZC5zdHlsZS5ib3R0b209ZS5kaXN0YW5jZSxkLnN0eWxlLm1hcmdpbj1cImF1dG9cIixkLmNsYXNzTGlzdC5hZGQoXCJueC1mbGV4LWNlbnRlci1jZW50ZXJcIiksZC5zdHlsZS5tYXhIZWlnaHQ9XCJjYWxjKCgxMDB2aCAtIFwiK2UuZGlzdGFuY2UrXCIpIC0gXCIrZS5kaXN0YW5jZStcIilcIixkLnN0eWxlLmRpc3BsYXk9XCJmbGV4XCIsZC5zdHlsZS5mbGV4V3JhcD1cIndyYXBcIixkLnN0eWxlLmZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIixkLnN0eWxlLmp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIsZC5zdHlsZS5hbGlnbkl0ZW1zPVwiY2VudGVyXCIsZC5zdHlsZS5wb2ludGVyRXZlbnRzPVwibm9uZVwiKTpcImNlbnRlci10b3BcIj09PWUucG9zaXRpb24/KGQuc3R5bGUubGVmdD1lLmRpc3RhbmNlLGQuc3R5bGUucmlnaHQ9ZS5kaXN0YW5jZSxkLnN0eWxlLnRvcD1lLmRpc3RhbmNlLGQuc3R5bGUuYm90dG9tPVwiYXV0b1wiLGQuc3R5bGUubWFyZ2luPVwiYXV0b1wiKTpcImNlbnRlci1ib3R0b21cIj09PWUucG9zaXRpb24/KGQuc3R5bGUubGVmdD1lLmRpc3RhbmNlLGQuc3R5bGUucmlnaHQ9ZS5kaXN0YW5jZSxkLnN0eWxlLmJvdHRvbT1lLmRpc3RhbmNlLGQuc3R5bGUudG9wPVwiYXV0b1wiLGQuc3R5bGUubWFyZ2luPVwiYXV0b1wiKTpcInJpZ2h0LWJvdHRvbVwiPT09ZS5wb3NpdGlvbj8oZC5zdHlsZS5yaWdodD1lLmRpc3RhbmNlLGQuc3R5bGUuYm90dG9tPWUuZGlzdGFuY2UsZC5zdHlsZS50b3A9XCJhdXRvXCIsZC5zdHlsZS5sZWZ0PVwiYXV0b1wiKTpcImxlZnQtdG9wXCI9PT1lLnBvc2l0aW9uPyhkLnN0eWxlLmxlZnQ9ZS5kaXN0YW5jZSxkLnN0eWxlLnRvcD1lLmRpc3RhbmNlLGQuc3R5bGUucmlnaHQ9XCJhdXRvXCIsZC5zdHlsZS5ib3R0b209XCJhdXRvXCIpOlwibGVmdC1ib3R0b21cIj09PWUucG9zaXRpb24/KGQuc3R5bGUubGVmdD1lLmRpc3RhbmNlLGQuc3R5bGUuYm90dG9tPWUuZGlzdGFuY2UsZC5zdHlsZS50b3A9XCJhdXRvXCIsZC5zdHlsZS5yaWdodD1cImF1dG9cIik6KGQuc3R5bGUucmlnaHQ9ZS5kaXN0YW5jZSxkLnN0eWxlLnRvcD1lLmRpc3RhbmNlLGQuc3R5bGUubGVmdD1cImF1dG9cIixkLnN0eWxlLmJvdHRvbT1cImF1dG9cIiksZS5iYWNrT3ZlcmxheSl7dmFyIHg9dC5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChtLm92ZXJsYXlJRCl8fHQuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt4LmlkPW0ub3ZlcmxheUlELHguc3R5bGUud2lkdGg9XCIxMDAlXCIseC5zdHlsZS5oZWlnaHQ9XCIxMDAlXCIseC5zdHlsZS5wb3NpdGlvbj1cImZpeGVkXCIseC5zdHlsZS56SW5kZXg9ZS56aW5kZXgtMSx4LnN0eWxlLmxlZnQ9MCx4LnN0eWxlLnRvcD0wLHguc3R5bGUucmlnaHQ9MCx4LnN0eWxlLmJvdHRvbT0wLHguc3R5bGUuYmFja2dyb3VuZD1mLmJhY2tPdmVybGF5Q29sb3J8fGUuYmFja092ZXJsYXlDb2xvcix4LmNsYXNzTmFtZT1lLmNzc0FuaW1hdGlvbj9cIm54LXdpdGgtYW5pbWF0aW9uXCI6XCJcIix4LnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uPWUuY3NzQW5pbWF0aW9uP2UuY3NzQW5pbWF0aW9uRHVyYXRpb24rXCJtc1wiOlwiXCIsdC5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChtLm92ZXJsYXlJRCl8fHQuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh4KX10LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG0ud3JhcElEKXx8dC5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGQpO3ZhciBnPXQuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtnLmlkPWUuSUQrXCItXCIrVCxnLmNsYXNzTmFtZT1lLmNsYXNzTmFtZStcIiBcIitmLmNoaWxkQ2xhc3NOYW1lK1wiIFwiKyhlLmNzc0FuaW1hdGlvbj9cIm54LXdpdGgtYW5pbWF0aW9uXCI6XCJcIikrXCIgXCIrKGUudXNlSWNvbj9cIm54LXdpdGgtaWNvblwiOlwiXCIpK1wiIG54LVwiK2UuY3NzQW5pbWF0aW9uU3R5bGUrXCIgXCIrKGUuY2xvc2VCdXR0b24mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIG8/XCJueC13aXRoLWNsb3NlLWJ1dHRvblwiOlwiXCIpK1wiIFwiKyhcImZ1bmN0aW9uXCI9PXR5cGVvZiBvP1wibngtd2l0aC1jYWxsYmFja1wiOlwiXCIpK1wiIFwiKyhlLmNsaWNrVG9DbG9zZT9cIm54LW5vdGlmeS1jbGljay10by1jbG9zZVwiOlwiXCIpLGcuc3R5bGUuZm9udFNpemU9ZS5mb250U2l6ZSxnLnN0eWxlLmNvbG9yPWYudGV4dENvbG9yLGcuc3R5bGUuYmFja2dyb3VuZD1mLmJhY2tncm91bmQsZy5zdHlsZS5ib3JkZXJSYWRpdXM9ZS5ib3JkZXJSYWRpdXMsZy5zdHlsZS5wb2ludGVyRXZlbnRzPVwiYWxsXCIsZS5ydGwmJihnLnNldEF0dHJpYnV0ZShcImRpclwiLFwicnRsXCIpLGcuY2xhc3NMaXN0LmFkZChcIm54LXJ0bC1vblwiKSksZy5zdHlsZS5mb250RmFtaWx5PVwiXFxcIlwiK2UuZm9udEZhbWlseStcIlxcXCIsIFwiK3MsZS5jc3NBbmltYXRpb24mJihnLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uPWUuY3NzQW5pbWF0aW9uRHVyYXRpb24rXCJtc1wiKTt2YXIgYj1cIlwiO2lmKGUuY2xvc2VCdXR0b24mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIG8mJihiPVwiPHNwYW4gY2xhc3M9XFxcIm54LWNsb3NlLWJ1dHRvblxcXCI+PHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCIyMFxcXCIgaGVpZ2h0PVxcXCIyMFxcXCIgdmlld0JveD1cXFwiMCAwIDIwIDIwXFxcIj48Zz48cGF0aCBmaWxsPVxcXCJcIitmLm5vdGlmbGl4SWNvbkNvbG9yK1wiXFxcIiBkPVxcXCJNMC4zOCAyLjE5bDcuOCA3LjgxIC03LjggNy44MWMtMC41MSwwLjUgLTAuNTEsMS4zMSAtMC4wMSwxLjgxIDAuMjUsMC4yNSAwLjU3LDAuMzggMC45MSwwLjM4IDAuMzQsMCAwLjY3LC0wLjE0IDAuOTEsLTAuMzhsNy44MSAtNy44MSA3LjgxIDcuODFjMC4yNCwwLjI0IDAuNTcsMC4zOCAwLjkxLDAuMzggMC4zNCwwIDAuNjYsLTAuMTQgMC45LC0wLjM4IDAuNTEsLTAuNSAwLjUxLC0xLjMxIDAsLTEuODFsLTcuODEgLTcuODEgNy44MSAtNy44MWMwLjUxLC0wLjUgMC41MSwtMS4zMSAwLC0xLjgyIC0wLjUsLTAuNSAtMS4zMSwtMC41IC0xLjgxLDBsLTcuODEgNy44MSAtNy44MSAtNy44MWMtMC41LC0wLjUgLTEuMzEsLTAuNSAtMS44MSwwIC0wLjUxLDAuNTEgLTAuNTEsMS4zMiAwLDEuODJ6XFxcIi8+PC9nPjwvc3ZnPjwvc3Bhbj5cIiksIWUudXNlSWNvbilnLmlubmVySFRNTD1cIjxzcGFuIGNsYXNzPVxcXCJueC1tZXNzYWdlXFxcIj5cIituK1wiPC9zcGFuPlwiKyhlLmNsb3NlQnV0dG9uP2I6XCJcIik7ZWxzZSBpZihlLnVzZUZvbnRBd2Vzb21lKWcuaW5uZXJIVE1MPVwiPGkgc3R5bGU9XFxcImNvbG9yOlwiK2YuZm9udEF3ZXNvbWVJY29uQ29sb3IrXCI7IGZvbnQtc2l6ZTpcIitlLmZvbnRBd2Vzb21lSWNvblNpemUrXCI7XFxcIiBjbGFzcz1cXFwibngtbWVzc2FnZS1pY29uIG54LW1lc3NhZ2UtaWNvbi1mYSBcIitmLmZvbnRBd2Vzb21lQ2xhc3NOYW1lK1wiIFwiKyhcInNoYWRvd1wiPT09ZS5mb250QXdlc29tZUljb25TdHlsZT9cIm54LW1lc3NhZ2UtaWNvbi1mYS1zaGFkb3dcIjpcIm54LW1lc3NhZ2UtaWNvbi1mYS1iYXNpY1wiKStcIlxcXCI+PC9pPjxzcGFuIGNsYXNzPVxcXCJueC1tZXNzYWdlIG54LXdpdGgtaWNvblxcXCI+XCIrbitcIjwvc3Bhbj5cIisoZS5jbG9zZUJ1dHRvbj9iOlwiXCIpO2Vsc2V7dmFyIHU9XCJcIjthPT09bC5TdWNjZXNzP3U9XCI8c3ZnIGNsYXNzPVxcXCJueC1tZXNzYWdlLWljb25cXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIjQwXFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiB2aWV3Qm94PVxcXCIwIDAgNDAgNDBcXFwiPjxnPjxwYXRoIGZpbGw9XFxcIlwiK2Yubm90aWZsaXhJY29uQ29sb3IrXCJcXFwiIGQ9XFxcIk0yMCAwYzExLjAzLDAgMjAsOC45NyAyMCwyMCAwLDExLjAzIC04Ljk3LDIwIC0yMCwyMCAtMTEuMDMsMCAtMjAsLTguOTcgLTIwLC0yMCAwLC0xMS4wMyA4Ljk3LC0yMCAyMCwtMjB6bTAgMzcuOThjOS45MiwwIDE3Ljk4LC04LjA2IDE3Ljk4LC0xNy45OCAwLC05LjkyIC04LjA2LC0xNy45OCAtMTcuOTgsLTE3Ljk4IC05LjkyLDAgLTE3Ljk4LDguMDYgLTE3Ljk4LDE3Ljk4IDAsOS45MiA4LjA2LDE3Ljk4IDE3Ljk4LDE3Ljk4em0tMi40IC0xMy4yOWwxMS41MiAtMTIuOTZjMC4zNywtMC40MSAxLjAxLC0wLjQ1IDEuNDIsLTAuMDggMC40MiwwLjM3IDAuNDYsMSAwLjA5LDEuNDJsLTEyLjE2IDEzLjY3Yy0wLjE5LDAuMjIgLTAuNDYsMC4zNCAtMC43NSwwLjM0IC0wLjIzLDAgLTAuNDUsLTAuMDcgLTAuNjMsLTAuMjJsLTcuNiAtNi4wN2MtMC40MywtMC4zNSAtMC41LC0wLjk5IC0wLjE2LC0xLjQyIDAuMzUsLTAuNDMgMC45OSwtMC41IDEuNDIsLTAuMTZsNi44NSA1LjQ4elxcXCIvPjwvZz48L3N2Zz5cIjphPT09bC5GYWlsdXJlP3U9XCI8c3ZnIGNsYXNzPVxcXCJueC1tZXNzYWdlLWljb25cXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIjQwXFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiB2aWV3Qm94PVxcXCIwIDAgNDAgNDBcXFwiPjxnPjxwYXRoIGZpbGw9XFxcIlwiK2Yubm90aWZsaXhJY29uQ29sb3IrXCJcXFwiIGQ9XFxcIk0yMCAwYzExLjAzLDAgMjAsOC45NyAyMCwyMCAwLDExLjAzIC04Ljk3LDIwIC0yMCwyMCAtMTEuMDMsMCAtMjAsLTguOTcgLTIwLC0yMCAwLC0xMS4wMyA4Ljk3LC0yMCAyMCwtMjB6bTAgMzcuOThjOS45MiwwIDE3Ljk4LC04LjA2IDE3Ljk4LC0xNy45OCAwLC05LjkyIC04LjA2LC0xNy45OCAtMTcuOTgsLTE3Ljk4IC05LjkyLDAgLTE3Ljk4LDguMDYgLTE3Ljk4LDE3Ljk4IDAsOS45MiA4LjA2LDE3Ljk4IDE3Ljk4LDE3Ljk4em0xLjQyIC0xNy45OGw2LjEzIDYuMTJjMC4zOSwwLjQgMC4zOSwxLjA0IDAsMS40MyAtMC4xOSwwLjE5IC0wLjQ1LDAuMjkgLTAuNzEsMC4yOSAtMC4yNywwIC0wLjUzLC0wLjEgLTAuNzIsLTAuMjlsLTYuMTIgLTYuMTMgLTYuMTMgNi4xM2MtMC4xOSwwLjE5IC0wLjQ0LDAuMjkgLTAuNzEsMC4yOSAtMC4yNywwIC0wLjUyLC0wLjEgLTAuNzEsLTAuMjkgLTAuMzksLTAuMzkgLTAuMzksLTEuMDMgMCwtMS40M2w2LjEzIC02LjEyIC02LjEzIC02LjEzYy0wLjM5LC0wLjM5IC0wLjM5LC0xLjAzIDAsLTEuNDIgMC4zOSwtMC4zOSAxLjAzLC0wLjM5IDEuNDIsMGw2LjEzIDYuMTIgNi4xMiAtNi4xMmMwLjQsLTAuMzkgMS4wNCwtMC4zOSAxLjQzLDAgMC4zOSwwLjM5IDAuMzksMS4wMyAwLDEuNDJsLTYuMTMgNi4xM3pcXFwiLz48L2c+PC9zdmc+XCI6YT09PWwuV2FybmluZz91PVwiPHN2ZyBjbGFzcz1cXFwibngtbWVzc2FnZS1pY29uXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCI0MFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgdmlld0JveD1cXFwiMCAwIDQwIDQwXFxcIj48Zz48cGF0aCBmaWxsPVxcXCJcIitmLm5vdGlmbGl4SWNvbkNvbG9yK1wiXFxcIiBkPVxcXCJNMjEuOTEgMy40OGwxNy44IDMwLjg5YzAuODQsMS40NiAtMC4yMywzLjI1IC0xLjkxLDMuMjVsLTM1LjYgMGMtMS42OCwwIC0yLjc1LC0xLjc5IC0xLjkxLC0zLjI1bDE3LjggLTMwLjg5YzAuODUsLTEuNDcgMi45NywtMS40NyAzLjgyLDB6bTE2LjE1IDMxLjg0bC0xNy44IC0zMC44OWMtMC4xMSwtMC4yIC0wLjQxLC0wLjIgLTAuNTIsMGwtMTcuOCAzMC44OWMtMC4xMiwwLjIgMC4wNSwwLjQgMC4yNiwwLjRsMzUuNiAwYzAuMjEsMCAwLjM4LC0wLjIgMC4yNiwtMC40em0tMTkuMDEgLTQuMTJsMCAtMS4wNWMwLC0wLjUzIDAuNDIsLTAuOTUgMC45NSwtMC45NSAwLjUzLDAgMC45NSwwLjQyIDAuOTUsMC45NWwwIDEuMDVjMCwwLjUzIC0wLjQyLDAuOTUgLTAuOTUsMC45NSAtMC41MywwIC0wLjk1LC0wLjQyIC0wLjk1LC0wLjk1em0wIC00LjY2bDAgLTEzLjM5YzAsLTAuNTIgMC40MiwtMC45NSAwLjk1LC0wLjk1IDAuNTMsMCAwLjk1LDAuNDMgMC45NSwwLjk1bDAgMTMuMzljMCwwLjUzIC0wLjQyLDAuOTYgLTAuOTUsMC45NiAtMC41MywwIC0wLjk1LC0wLjQzIC0wLjk1LC0wLjk2elxcXCIvPjwvZz48L3N2Zz5cIjphPT09bC5JbmZvJiYodT1cIjxzdmcgY2xhc3M9XFxcIm54LW1lc3NhZ2UtaWNvblxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDBcXFwiIHZpZXdCb3g9XFxcIjAgMCA0MCA0MFxcXCI+PGc+PHBhdGggZmlsbD1cXFwiXCIrZi5ub3RpZmxpeEljb25Db2xvcitcIlxcXCIgZD1cXFwiTTIwIDBjMTEuMDMsMCAyMCw4Ljk3IDIwLDIwIDAsMTEuMDMgLTguOTcsMjAgLTIwLDIwIC0xMS4wMywwIC0yMCwtOC45NyAtMjAsLTIwIDAsLTExLjAzIDguOTcsLTIwIDIwLC0yMHptMCAzNy45OGM5LjkyLDAgMTcuOTgsLTguMDYgMTcuOTgsLTE3Ljk4IDAsLTkuOTIgLTguMDYsLTE3Ljk4IC0xNy45OCwtMTcuOTggLTkuOTIsMCAtMTcuOTgsOC4wNiAtMTcuOTgsMTcuOTggMCw5LjkyIDguMDYsMTcuOTggMTcuOTgsMTcuOTh6bS0wLjk5IC0yMy4zYzAsLTAuNTQgMC40NCwtMC45OCAwLjk5LC0wLjk4IDAuNTUsMCAwLjk5LDAuNDQgMC45OSwwLjk4bDAgMTUuODZjMCwwLjU1IC0wLjQ0LDAuOTkgLTAuOTksMC45OSAtMC41NSwwIC0wLjk5LC0wLjQ0IC0wLjk5LC0wLjk5bDAgLTE1Ljg2em0wIC01LjIyYzAsLTAuNTUgMC40NCwtMC45OSAwLjk5LC0wLjk5IDAuNTUsMCAwLjk5LDAuNDQgMC45OSwwLjk5bDAgMS4wOWMwLDAuNTQgLTAuNDQsMC45OSAtMC45OSwwLjk5IC0wLjU1LDAgLTAuOTksLTAuNDUgLTAuOTksLTAuOTlsMCAtMS4wOXpcXFwiLz48L2c+PC9zdmc+XCIpLGcuaW5uZXJIVE1MPXUrXCI8c3BhbiBjbGFzcz1cXFwibngtbWVzc2FnZSBueC13aXRoLWljb25cXFwiPlwiK24rXCI8L3NwYW4+XCIrKGUuY2xvc2VCdXR0b24/YjpcIlwiKX1pZihcImxlZnQtYm90dG9tXCI9PT1lLnBvc2l0aW9ufHxcInJpZ2h0LWJvdHRvbVwiPT09ZS5wb3NpdGlvbil7dmFyIHk9dC5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChtLndyYXBJRCk7eS5pbnNlcnRCZWZvcmUoZyx5LmZpcnN0Q2hpbGQpfWVsc2UgdC5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChtLndyYXBJRCkuYXBwZW5kQ2hpbGQoZyk7dmFyIGs9dC5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChnLmlkKTtpZihrKXt2YXIgaCxDLHo9ZnVuY3Rpb24oKXtrLmNsYXNzTGlzdC5hZGQoXCJueC1yZW1vdmVcIik7dmFyIGU9dC5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChtLm92ZXJsYXlJRCk7ZSYmMD49ZC5jaGlsZEVsZW1lbnRDb3VudCYmZS5jbGFzc0xpc3QuYWRkKFwibngtcmVtb3ZlXCIpLGNsZWFyVGltZW91dChoKX0sUz1mdW5jdGlvbigpe2lmKGsmJm51bGwhPT1rLnBhcmVudE5vZGUmJmsucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChrKSwwPj1kLmNoaWxkRWxlbWVudENvdW50JiZudWxsIT09ZC5wYXJlbnROb2RlKXtkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCk7dmFyIGU9dC5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChtLm92ZXJsYXlJRCk7ZSYmbnVsbCE9PWUucGFyZW50Tm9kZSYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfWNsZWFyVGltZW91dChDKX07aWYoZS5jbG9zZUJ1dHRvbiYmXCJmdW5jdGlvblwiIT10eXBlb2Ygbyl7dmFyIEw9dC5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChnLmlkKS5xdWVyeVNlbGVjdG9yKFwic3Bhbi5ueC1jbG9zZS1idXR0b25cIik7TC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe3ooKTt2YXIgdD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7UygpLGNsZWFyVGltZW91dCh0KX0sZS5jc3NBbmltYXRpb25EdXJhdGlvbil9KX1pZigoXCJmdW5jdGlvblwiPT10eXBlb2Ygb3x8ZS5jbGlja1RvQ2xvc2UpJiZrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7XCJmdW5jdGlvblwiPT10eXBlb2YgbyYmbygpLHooKTt2YXIgdD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7UygpLGNsZWFyVGltZW91dCh0KX0sZS5jc3NBbmltYXRpb25EdXJhdGlvbil9KSwhZS5jbG9zZUJ1dHRvbiYmXCJmdW5jdGlvblwiIT10eXBlb2Ygbyl7dmFyIFc9ZnVuY3Rpb24oKXtoPXNldFRpbWVvdXQoZnVuY3Rpb24oKXt6KCl9LGUudGltZW91dCksQz1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7UygpfSxlLnRpbWVvdXQrZS5jc3NBbmltYXRpb25EdXJhdGlvbil9O1coKSxlLnBhdXNlT25Ib3ZlciYmKGsuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIixmdW5jdGlvbigpe2suY2xhc3NMaXN0LmFkZChcIm54LXBhdXNlZFwiKSxjbGVhclRpbWVvdXQoaCksY2xlYXJUaW1lb3V0KEMpfSksay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLGZ1bmN0aW9uKCl7ay5jbGFzc0xpc3QucmVtb3ZlKFwibngtcGF1c2VkXCIpLFcoKX0pKX19aWYoZS5zaG93T25seVRoZUxhc3RPbmUmJjA8VClmb3IodmFyIEksUj10LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWRePVwiK2UuSUQrXCItXTpub3QoW2lkPVwiK2UuSUQrXCItXCIrVCtcIl0pXCIpLEE9MDtBPFIubGVuZ3RoO0ErKylJPVJbQV0sbnVsbCE9PUkucGFyZW50Tm9kZSYmSS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKEkpO2U9dighMCxlLGMpfSxFPWZ1bmN0aW9uKCl7cmV0dXJuXCJbaWRePU5vdGlmbGl4UmVwb3J0V3JhcF17cG9zaXRpb246Zml4ZWQ7ei1pbmRleDo0MDAyO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O2ZvbnQtZmFtaWx5OlxcXCJRdWlja3NhbmRcXFwiLC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFxcXCJTZWdvZSBVSVxcXCIsUm9ib3RvLFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsQXJpYWwsc2Fucy1zZXJpZjtsZWZ0OjA7dG9wOjA7cGFkZGluZzoxMHB4O2NvbG9yOiMxZTFlMWU7Ym9yZGVyLXJhZGl1czoyNXB4O2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LWZsZXgtd3JhcDp3cmFwOy1tcy1mbGV4LXdyYXA6d3JhcDtmbGV4LXdyYXA6d3JhcDstd2Via2l0LWJveC1vcmllbnQ6dmVydGljYWw7LXdlYmtpdC1ib3gtZGlyZWN0aW9uOm5vcm1hbDstd2Via2l0LWZsZXgtZGlyZWN0aW9uOmNvbHVtbjstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LXdlYmtpdC1hbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstd2Via2l0LWp1c3RpZnktY29udGVudDpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn1baWRePU5vdGlmbGl4UmVwb3J0V3JhcF0gKnstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9W2lkXj1Ob3RpZmxpeFJlcG9ydFdyYXBdPmRpdltjbGFzcyo9XFxcIi1vdmVybGF5XFxcIl17d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtsZWZ0OjA7dG9wOjA7YmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LC41KTtwb3NpdGlvbjpmaXhlZDt6LWluZGV4OjB9W2lkXj1Ob3RpZmxpeFJlcG9ydFdyYXBdPmRpdi5ueC1yZXBvcnQtY2xpY2stdG8tY2xvc2V7Y3Vyc29yOnBvaW50ZXJ9W2lkXj1Ob3RpZmxpeFJlcG9ydFdyYXBdPmRpdltjbGFzcyo9XFxcIi1jb250ZW50XFxcIl17d2lkdGg6MzIwcHg7bWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDo5NnZoO292ZXJmbG93LXg6aGlkZGVuO292ZXJmbG93LXk6YXV0bztib3JkZXItcmFkaXVzOmluaGVyaXQ7cGFkZGluZzoxMHB4Oy13ZWJraXQtZmlsdGVyOmRyb3Atc2hhZG93KDAgMCA1cHggcmdiYSgwLDAsMCwwLjA1KSk7ZmlsdGVyOmRyb3Atc2hhZG93KDAgMCA1cHggcmdiYSgwLCAwLCAwLCAuMDUpKTtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjAzKTtiYWNrZ3JvdW5kOiNmOGY4Zjg7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoxfVtpZF49Tm90aWZsaXhSZXBvcnRXcmFwXT5kaXZbY2xhc3MqPVxcXCItY29udGVudFxcXCJdOjotd2Via2l0LXNjcm9sbGJhcnt3aWR0aDowO2hlaWdodDowfVtpZF49Tm90aWZsaXhSZXBvcnRXcmFwXT5kaXZbY2xhc3MqPVxcXCItY29udGVudFxcXCJdOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntiYWNrZ3JvdW5kOnRyYW5zcGFyZW50fVtpZF49Tm90aWZsaXhSZXBvcnRXcmFwXT5kaXZbY2xhc3MqPVxcXCItY29udGVudFxcXCJdOjotd2Via2l0LXNjcm9sbGJhci10cmFja3tiYWNrZ3JvdW5kOnRyYW5zcGFyZW50fVtpZF49Tm90aWZsaXhSZXBvcnRXcmFwXT5kaXZbY2xhc3MqPVxcXCItY29udGVudFxcXCJdPmRpdltjbGFzcyQ9XFxcIi1pY29uXFxcIl17LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3dpZHRoOjExMHB4O2hlaWdodDoxMTBweDtkaXNwbGF5OmJsb2NrO21hcmdpbjo2cHggYXV0byAxMnB4fVtpZF49Tm90aWZsaXhSZXBvcnRXcmFwXT5kaXZbY2xhc3MqPVxcXCItY29udGVudFxcXCJdPmRpdltjbGFzcyQ9XFxcIi1pY29uXFxcIl0gc3Zne21pbi13aWR0aDoxMDAlO21heC13aWR0aDoxMDAlO2hlaWdodDphdXRvfVtpZF49Tm90aWZsaXhSZXBvcnRXcmFwXT4qPmg1e3dvcmQtYnJlYWs6YnJlYWstYWxsO3dvcmQtYnJlYWs6YnJlYWstd29yZDtmb250LWZhbWlseTppbmhlcml0IWltcG9ydGFudDtmb250LXNpemU6MTZweDtmb250LXdlaWdodDo1MDA7bGluZS1oZWlnaHQ6MS40O21hcmdpbjowIDAgMTBweDtwYWRkaW5nOjAgMCAxMHB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEpO2Zsb2F0OmxlZnQ7d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcn1baWRePU5vdGlmbGl4UmVwb3J0V3JhcF0+Kj5we3dvcmQtYnJlYWs6YnJlYWstYWxsO3dvcmQtYnJlYWs6YnJlYWstd29yZDtmb250LWZhbWlseTppbmhlcml0IWltcG9ydGFudDtmb250LXNpemU6MTNweDtsaW5lLWhlaWdodDoxLjQ7Zm9udC13ZWlnaHQ6bm9ybWFsO2Zsb2F0OmxlZnQ7d2lkdGg6MTAwJTtwYWRkaW5nOjAgMTBweDttYXJnaW46MCAwIDEwcHh9W2lkXj1Ob3RpZmxpeFJlcG9ydFdyYXBdIGEjTlhSZXBvcnRCdXR0b257d29yZC1icmVhazpicmVhay1hbGw7d29yZC1icmVhazpicmVhay13b3JkOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtmb250LWZhbWlseTppbmhlcml0IWltcG9ydGFudDstd2Via2l0LXRyYW5zaXRpb246YWxsIC4yNXMgZWFzZS1pbi1vdXQ7LW8tdHJhbnNpdGlvbjphbGwgLjI1cyBlYXNlLWluLW91dDt0cmFuc2l0aW9uOmFsbCAuMjVzIGVhc2UtaW4tb3V0O2N1cnNvcjpwb2ludGVyO2Zsb2F0OnJpZ2h0O3BhZGRpbmc6N3B4IDE3cHg7YmFja2dyb3VuZDojMzJjNjgyO2ZvbnQtc2l6ZToxNHB4O2xpbmUtaGVpZ2h0OjEuNDtmb250LXdlaWdodDo1MDA7Ym9yZGVyLXJhZGl1czppbmhlcml0IWltcG9ydGFudDtjb2xvcjojZmZmfVtpZF49Tm90aWZsaXhSZXBvcnRXcmFwXSBhI05YUmVwb3J0QnV0dG9uOmhvdmVyey13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIC02MHB4IDVweCAtNXB4IHJnYmEoMCwwLDAsLjI1KTtib3gtc2hhZG93Omluc2V0IDAgLTYwcHggNXB4IC01cHggcmdiYSgwLDAsMCwuMjUpfVtpZF49Tm90aWZsaXhSZXBvcnRXcmFwXS5ueC1ydGwtb24gYSNOWFJlcG9ydEJ1dHRvbntmbG9hdDpsZWZ0fVtpZF49Tm90aWZsaXhSZXBvcnRXcmFwXT5kaXZbY2xhc3MqPVxcXCItb3ZlcmxheVxcXCJdLm54LXdpdGgtYW5pbWF0aW9uey13ZWJraXQtYW5pbWF0aW9uOnJlcG9ydC1vdmVybGF5LWFuaW1hdGlvbiAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsO2FuaW1hdGlvbjpyZXBvcnQtb3ZlcmxheS1hbmltYXRpb24gLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbH1ALXdlYmtpdC1rZXlmcmFtZXMgcmVwb3J0LW92ZXJsYXktYW5pbWF0aW9uezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyByZXBvcnQtb3ZlcmxheS1hbmltYXRpb257MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1baWRePU5vdGlmbGl4UmVwb3J0V3JhcF0+ZGl2W2NsYXNzKj1cXFwiLWNvbnRlbnRcXFwiXS5ueC13aXRoLWFuaW1hdGlvbi5ueC1mYWRley13ZWJraXQtYW5pbWF0aW9uOnJlcG9ydC1hbmltYXRpb24tZmFkZSAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsO2FuaW1hdGlvbjpyZXBvcnQtYW5pbWF0aW9uLWZhZGUgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbH1ALXdlYmtpdC1rZXlmcmFtZXMgcmVwb3J0LWFuaW1hdGlvbi1mYWRlezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyByZXBvcnQtYW5pbWF0aW9uLWZhZGV7MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1baWRePU5vdGlmbGl4UmVwb3J0V3JhcF0+ZGl2W2NsYXNzKj1cXFwiLWNvbnRlbnRcXFwiXS5ueC13aXRoLWFuaW1hdGlvbi5ueC16b29tey13ZWJraXQtYW5pbWF0aW9uOnJlcG9ydC1hbmltYXRpb24tem9vbSAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsO2FuaW1hdGlvbjpyZXBvcnQtYW5pbWF0aW9uLXpvb20gLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbH1ALXdlYmtpdC1rZXlmcmFtZXMgcmVwb3J0LWFuaW1hdGlvbi16b29tezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNSk7dHJhbnNmb3JtOnNjYWxlKC41KX01MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMDUpO3RyYW5zZm9ybTpzY2FsZSgxLjA1KX0xMDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fUBrZXlmcmFtZXMgcmVwb3J0LWFuaW1hdGlvbi16b29tezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNSk7dHJhbnNmb3JtOnNjYWxlKC41KX01MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMDUpO3RyYW5zZm9ybTpzY2FsZSgxLjA1KX0xMDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fVtpZF49Tm90aWZsaXhSZXBvcnRXcmFwXS5ueC1yZW1vdmU+ZGl2W2NsYXNzKj1cXFwiLW92ZXJsYXlcXFwiXS5ueC13aXRoLWFuaW1hdGlvbntvcGFjaXR5OjA7LXdlYmtpdC1hbmltYXRpb246cmVwb3J0LW92ZXJsYXktYW5pbWF0aW9uLXJlbW92ZSAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsO2FuaW1hdGlvbjpyZXBvcnQtb3ZlcmxheS1hbmltYXRpb24tcmVtb3ZlIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWx9QC13ZWJraXQta2V5ZnJhbWVzIHJlcG9ydC1vdmVybGF5LWFuaW1hdGlvbi1yZW1vdmV7MCV7b3BhY2l0eToxfTEwMCV7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIHJlcG9ydC1vdmVybGF5LWFuaW1hdGlvbi1yZW1vdmV7MCV7b3BhY2l0eToxfTEwMCV7b3BhY2l0eTowfX1baWRePU5vdGlmbGl4UmVwb3J0V3JhcF0ubngtcmVtb3ZlPmRpdltjbGFzcyo9XFxcIi1jb250ZW50XFxcIl0ubngtd2l0aC1hbmltYXRpb24ubngtZmFkZXtvcGFjaXR5OjA7LXdlYmtpdC1hbmltYXRpb246cmVwb3J0LWFuaW1hdGlvbi1mYWRlLXJlbW92ZSAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsO2FuaW1hdGlvbjpyZXBvcnQtYW5pbWF0aW9uLWZhZGUtcmVtb3ZlIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWx9QC13ZWJraXQta2V5ZnJhbWVzIHJlcG9ydC1hbmltYXRpb24tZmFkZS1yZW1vdmV7MCV7b3BhY2l0eToxfTEwMCV7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIHJlcG9ydC1hbmltYXRpb24tZmFkZS1yZW1vdmV7MCV7b3BhY2l0eToxfTEwMCV7b3BhY2l0eTowfX1baWRePU5vdGlmbGl4UmVwb3J0V3JhcF0ubngtcmVtb3ZlPmRpdltjbGFzcyo9XFxcIi1jb250ZW50XFxcIl0ubngtd2l0aC1hbmltYXRpb24ubngtem9vbXtvcGFjaXR5OjA7LXdlYmtpdC1hbmltYXRpb246cmVwb3J0LWFuaW1hdGlvbi16b29tLXJlbW92ZSAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsO2FuaW1hdGlvbjpyZXBvcnQtYW5pbWF0aW9uLXpvb20tcmVtb3ZlIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWx9QC13ZWJraXQta2V5ZnJhbWVzIHJlcG9ydC1hbmltYXRpb24tem9vbS1yZW1vdmV7MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX01MCV7b3BhY2l0eTouNTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjA1KTt0cmFuc2Zvcm06c2NhbGUoMS4wNSl9MTAwJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfX1Aa2V5ZnJhbWVzIHJlcG9ydC1hbmltYXRpb24tem9vbS1yZW1vdmV7MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX01MCV7b3BhY2l0eTouNTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjA1KTt0cmFuc2Zvcm06c2NhbGUoMS4wNSl9MTAwJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfX1cIn0saj1mdW5jdGlvbihlLGEsbixvLHIsbCl7aWYoIXcoXCJib2R5XCIpKXJldHVybiExO2l8fEcuUmVwb3J0LmluaXQoe30pO3ZhciBtPXt9O2lmKFwib2JqZWN0XCI9PXR5cGVvZiByJiYhQXJyYXkuaXNBcnJheShyKXx8XCJvYmplY3RcIj09dHlwZW9mIGwmJiFBcnJheS5pc0FycmF5KGwpKXt2YXIgZj17fTtcIm9iamVjdFwiPT10eXBlb2Ygcj9mPXI6XCJvYmplY3RcIj09dHlwZW9mIGwmJihmPWwpLG09dighMCxpLHt9KSxpPXYoITAsaSxmKX12YXIgZD1pW2UudG9Mb2NhbGVMb3dlckNhc2UoXCJlblwiKV07XCJzdHJpbmdcIiE9dHlwZW9mIGEmJihhPVwiTm90aWZsaXggXCIrZSksXCJzdHJpbmdcIiE9dHlwZW9mIG4mJihlPT09Yy5TdWNjZXNzP249XCJcXFwiRG8gbm90IHRyeSB0byBiZWNvbWUgYSBwZXJzb24gb2Ygc3VjY2VzcyBidXQgdHJ5IHRvIGJlY29tZSBhIHBlcnNvbiBvZiB2YWx1ZS5cXFwiIDxicj48YnI+LSBBbGJlcnQgRWluc3RlaW5cIjplPT09Yy5GYWlsdXJlP249XCJcXFwiRmFpbHVyZSBpcyBzaW1wbHkgdGhlIG9wcG9ydHVuaXR5IHRvIGJlZ2luIGFnYWluLCB0aGlzIHRpbWUgbW9yZSBpbnRlbGxpZ2VudGx5LlxcXCIgPGJyPjxicj4tIEhlbnJ5IEZvcmRcIjplPT09Yy5XYXJuaW5nP249XCJcXFwiVGhlIHBlb3BsZXMgd2hvIHdhbnQgdG8gbGl2ZSBjb21mb3J0YWJseSB3aXRob3V0IHByb2R1Y2luZyBhbmQgZmF0aWd1ZTsgdGhleSBhcmUgZG9vbWVkIHRvIGxvc2UgdGhlaXIgZGlnbml0eSwgdGhlbiBsaWJlcnR5LCBhbmQgdGhlbiBpbmRlcGVuZGVuY2UgYW5kIGRlc3RpbnkuXFxcIiA8YnI+PGJyPi0gTXVzdGFmYSBLZW1hbCBBdGF0dXJrXCI6ZT09PWMuSW5mbyYmKG49XCJcXFwiS25vd2xlZGdlIHJlc3RzIG5vdCB1cG9uIHRydXRoIGFsb25lLCBidXQgdXBvbiBlcnJvciBhbHNvLlxcXCIgPGJyPjxicj4tIENhcmwgR3VzdGF2IEp1bmdcIikpLFwic3RyaW5nXCIhPXR5cGVvZiBvJiYobz1cIk9rYXlcIiksaS5wbGFpblRleHQmJihhPU4oYSksbj1OKG4pLG89TihvKSksaS5wbGFpblRleHR8fChhLmxlbmd0aD5pLnRpdGxlTWF4TGVuZ3RoJiYoYT1cIlBvc3NpYmxlIEhUTUwgVGFncyBFcnJvclwiLG49XCJUaGUgXFxcInBsYWluVGV4dFxcXCIgb3B0aW9uIGlzIFxcXCJmYWxzZVxcXCIgYW5kIHRoZSB0aXRsZSBjb250ZW50IGxlbmd0aCBpcyBtb3JlIHRoYW4gdGhlIFxcXCJ0aXRsZU1heExlbmd0aFxcXCIgb3B0aW9uLlwiLG89XCJPa2F5XCIpLG4ubGVuZ3RoPmkubWVzc2FnZU1heExlbmd0aCYmKGE9XCJQb3NzaWJsZSBIVE1MIFRhZ3MgRXJyb3JcIixuPVwiVGhlIFxcXCJwbGFpblRleHRcXFwiIG9wdGlvbiBpcyBcXFwiZmFsc2VcXFwiIGFuZCB0aGUgbWVzc2FnZSBjb250ZW50IGxlbmd0aCBpcyBtb3JlIHRoYW4gdGhlIFxcXCJtZXNzYWdlTWF4TGVuZ3RoXFxcIiBvcHRpb24uXCIsbz1cIk9rYXlcIiksby5sZW5ndGg+aS5idXR0b25NYXhMZW5ndGgmJihhPVwiUG9zc2libGUgSFRNTCBUYWdzIEVycm9yXCIsbj1cIlRoZSBcXFwicGxhaW5UZXh0XFxcIiBvcHRpb24gaXMgXFxcImZhbHNlXFxcIiBhbmQgdGhlIGJ1dHRvbiBjb250ZW50IGxlbmd0aCBpcyBtb3JlIHRoYW4gdGhlIFxcXCJidXR0b25NYXhMZW5ndGhcXFwiIG9wdGlvbi5cIixvPVwiT2theVwiKSksYS5sZW5ndGg+aS50aXRsZU1heExlbmd0aCYmKGE9YS5zdWJzdHJpbmcoMCxpLnRpdGxlTWF4TGVuZ3RoKStcIi4uLlwiKSxuLmxlbmd0aD5pLm1lc3NhZ2VNYXhMZW5ndGgmJihuPW4uc3Vic3RyaW5nKDAsaS5tZXNzYWdlTWF4TGVuZ3RoKStcIi4uLlwiKSxvLmxlbmd0aD5pLmJ1dHRvbk1heExlbmd0aCYmKG89by5zdWJzdHJpbmcoMCxpLmJ1dHRvbk1heExlbmd0aCkrXCIuLi5cIiksaS5jc3NBbmltYXRpb258fChpLmNzc0FuaW1hdGlvbkR1cmF0aW9uPTApO3ZhciB4PXQuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt4LmlkPXAuSUQseC5jbGFzc05hbWU9aS5jbGFzc05hbWUseC5zdHlsZS56SW5kZXg9aS56aW5kZXgseC5zdHlsZS5ib3JkZXJSYWRpdXM9aS5ib3JkZXJSYWRpdXMseC5zdHlsZS5mb250RmFtaWx5PVwiXFxcIlwiK2kuZm9udEZhbWlseStcIlxcXCIsIFwiK3MsaS5ydGwmJih4LnNldEF0dHJpYnV0ZShcImRpclwiLFwicnRsXCIpLHguY2xhc3NMaXN0LmFkZChcIm54LXJ0bC1vblwiKSkseC5zdHlsZS5kaXNwbGF5PVwiZmxleFwiLHguc3R5bGUuZmxleFdyYXA9XCJ3cmFwXCIseC5zdHlsZS5mbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIseC5zdHlsZS5hbGlnbkl0ZW1zPVwiY2VudGVyXCIseC5zdHlsZS5qdXN0aWZ5Q29udGVudD1cImNlbnRlclwiO3ZhciBnPVwiXCIsYj0hMD09PWkuYmFja092ZXJsYXlDbGlja1RvQ2xvc2U7aS5iYWNrT3ZlcmxheSYmKGc9XCI8ZGl2IGNsYXNzPVxcXCJcIitpLmNsYXNzTmFtZStcIi1vdmVybGF5XCIrKGkuY3NzQW5pbWF0aW9uP1wiIG54LXdpdGgtYW5pbWF0aW9uXCI6XCJcIikrKGI/XCIgbngtcmVwb3J0LWNsaWNrLXRvLWNsb3NlXCI6XCJcIikrXCJcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kOlwiKyhkLmJhY2tPdmVybGF5Q29sb3J8fGkuYmFja092ZXJsYXlDb2xvcikrXCI7YW5pbWF0aW9uLWR1cmF0aW9uOlwiK2kuY3NzQW5pbWF0aW9uRHVyYXRpb24rXCJtcztcXFwiPjwvZGl2PlwiKTt2YXIgdT1cIlwiO2lmKGU9PT1jLlN1Y2Nlc3M/dT1DKGkuc3ZnU2l6ZSxkLnN2Z0NvbG9yKTplPT09Yy5GYWlsdXJlP3U9eihpLnN2Z1NpemUsZC5zdmdDb2xvcik6ZT09PWMuV2FybmluZz91PVMoaS5zdmdTaXplLGQuc3ZnQ29sb3IpOmU9PT1jLkluZm8mJih1PUwoaS5zdmdTaXplLGQuc3ZnQ29sb3IpKSx4LmlubmVySFRNTD1nK1wiPGRpdiBjbGFzcz1cXFwiXCIraS5jbGFzc05hbWUrXCItY29udGVudFwiKyhpLmNzc0FuaW1hdGlvbj9cIiBueC13aXRoLWFuaW1hdGlvbiBcIjpcIlwiKStcIiBueC1cIitpLmNzc0FuaW1hdGlvblN0eWxlK1wiXFxcIiBzdHlsZT1cXFwid2lkdGg6XCIraS53aWR0aCtcIjsgYmFja2dyb3VuZDpcIitpLmJhY2tncm91bmRDb2xvcitcIjsgYW5pbWF0aW9uLWR1cmF0aW9uOlwiK2kuY3NzQW5pbWF0aW9uRHVyYXRpb24rXCJtcztcXFwiPjxkaXYgc3R5bGU9XFxcIndpZHRoOlwiK2kuc3ZnU2l6ZStcIjsgaGVpZ2h0OlwiK2kuc3ZnU2l6ZStcIjtcXFwiIGNsYXNzPVxcXCJcIitpLmNsYXNzTmFtZStcIi1pY29uXFxcIj5cIit1K1wiPC9kaXY+PGg1IGNsYXNzPVxcXCJcIitpLmNsYXNzTmFtZStcIi10aXRsZVxcXCIgc3R5bGU9XFxcImZvbnQtd2VpZ2h0OjUwMDsgZm9udC1zaXplOlwiK2kudGl0bGVGb250U2l6ZStcIjsgY29sb3I6XCIrZC50aXRsZUNvbG9yK1wiO1xcXCI+XCIrYStcIjwvaDU+PHAgY2xhc3M9XFxcIlwiK2kuY2xhc3NOYW1lK1wiLW1lc3NhZ2VcXFwiIHN0eWxlPVxcXCJmb250LXNpemU6XCIraS5tZXNzYWdlRm9udFNpemUrXCI7IGNvbG9yOlwiK2QubWVzc2FnZUNvbG9yK1wiO1xcXCI+XCIrbitcIjwvcD48YSBpZD1cXFwiTlhSZXBvcnRCdXR0b25cXFwiIGNsYXNzPVxcXCJcIitpLmNsYXNzTmFtZStcIi1idXR0b25cXFwiIHN0eWxlPVxcXCJmb250LXdlaWdodDo1MDA7IGZvbnQtc2l6ZTpcIitpLmJ1dHRvbkZvbnRTaXplK1wiOyBiYWNrZ3JvdW5kOlwiK2QuYnV0dG9uQmFja2dyb3VuZCtcIjsgY29sb3I6XCIrZC5idXR0b25Db2xvcitcIjtcXFwiPlwiK28rXCI8L2E+PC9kaXY+XCIsIXQuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoeC5pZCkpe3QuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh4KTt2YXIgeT1mdW5jdGlvbigpe3ZhciBlPXQuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoeC5pZCk7ZS5jbGFzc0xpc3QuYWRkKFwibngtcmVtb3ZlXCIpO3ZhciBhPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtudWxsIT09ZS5wYXJlbnROb2RlJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSksY2xlYXJUaW1lb3V0KGEpfSxpLmNzc0FuaW1hdGlvbkR1cmF0aW9uKX0saz10LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTlhSZXBvcnRCdXR0b25cIik7aWYoay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIHImJnIoKSx5KCl9KSxnJiZiKXt2YXIgaD10LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubngtcmVwb3J0LWNsaWNrLXRvLWNsb3NlXCIpO2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXt5KCl9KX19aT12KCEwLGksbSl9LE89ZnVuY3Rpb24oKXtyZXR1cm5cIltpZF49Tm90aWZsaXhDb25maXJtV3JhcF17cG9zaXRpb246Zml4ZWQ7ei1pbmRleDo0MDAzO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bGVmdDowO3RvcDowO3BhZGRpbmc6MTBweDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtmb250LWZhbWlseTpcXFwiUXVpY2tzYW5kXFxcIiwtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcXFwiU2Vnb2UgVUlcXFwiLFJvYm90byxcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLEFyaWFsLHNhbnMtc2VyaWY7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LWZsZXgtd3JhcDp3cmFwOy1tcy1mbGV4LXdyYXA6d3JhcDtmbGV4LXdyYXA6d3JhcDstd2Via2l0LWJveC1vcmllbnQ6dmVydGljYWw7LXdlYmtpdC1ib3gtZGlyZWN0aW9uOm5vcm1hbDstd2Via2l0LWZsZXgtZGlyZWN0aW9uOmNvbHVtbjstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LXdlYmtpdC1hbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstd2Via2l0LWp1c3RpZnktY29udGVudDpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn1baWRePU5vdGlmbGl4Q29uZmlybVdyYXBdLm54LXBvc2l0aW9uLWNlbnRlci10b3B7LXdlYmtpdC1ib3gtcGFjazpzdGFydDstd2Via2l0LWp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0Oy1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9W2lkXj1Ob3RpZmxpeENvbmZpcm1XcmFwXS5ueC1wb3NpdGlvbi1jZW50ZXItYm90dG9tey13ZWJraXQtYm94LXBhY2s6ZW5kOy13ZWJraXQtanVzdGlmeS1jb250ZW50OmZsZXgtZW5kOy1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH1baWRePU5vdGlmbGl4Q29uZmlybVdyYXBdLm54LXBvc2l0aW9uLWxlZnQtdG9wey13ZWJraXQtYm94LWFsaWduOnN0YXJ0Oy13ZWJraXQtYWxpZ24taXRlbXM6ZmxleC1zdGFydDstbXMtZmxleC1hbGlnbjpzdGFydDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0Oy13ZWJraXQtYm94LXBhY2s6c3RhcnQ7LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fVtpZF49Tm90aWZsaXhDb25maXJtV3JhcF0ubngtcG9zaXRpb24tbGVmdC1jZW50ZXJ7LXdlYmtpdC1ib3gtYWxpZ246c3RhcnQ7LXdlYmtpdC1hbGlnbi1pdGVtczpmbGV4LXN0YXJ0Oy1tcy1mbGV4LWFsaWduOnN0YXJ0O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnR9W2lkXj1Ob3RpZmxpeENvbmZpcm1XcmFwXS5ueC1wb3NpdGlvbi1sZWZ0LWJvdHRvbXstd2Via2l0LWJveC1hbGlnbjpzdGFydDstd2Via2l0LWFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7LW1zLWZsZXgtYWxpZ246c3RhcnQ7YWxpZ24taXRlbXM6ZmxleC1zdGFydDstd2Via2l0LWJveC1wYWNrOmVuZDstd2Via2l0LWp1c3RpZnktY29udGVudDpmbGV4LWVuZDstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9W2lkXj1Ob3RpZmxpeENvbmZpcm1XcmFwXS5ueC1wb3NpdGlvbi1yaWdodC10b3B7LXdlYmtpdC1ib3gtYWxpZ246ZW5kOy13ZWJraXQtYWxpZ24taXRlbXM6ZmxleC1lbmQ7LW1zLWZsZXgtYWxpZ246ZW5kO2FsaWduLWl0ZW1zOmZsZXgtZW5kOy13ZWJraXQtYm94LXBhY2s6c3RhcnQ7LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fVtpZF49Tm90aWZsaXhDb25maXJtV3JhcF0ubngtcG9zaXRpb24tcmlnaHQtY2VudGVyey13ZWJraXQtYm94LWFsaWduOmVuZDstd2Via2l0LWFsaWduLWl0ZW1zOmZsZXgtZW5kOy1tcy1mbGV4LWFsaWduOmVuZDthbGlnbi1pdGVtczpmbGV4LWVuZH1baWRePU5vdGlmbGl4Q29uZmlybVdyYXBdLm54LXBvc2l0aW9uLXJpZ2h0LWJvdHRvbXstd2Via2l0LWJveC1hbGlnbjplbmQ7LXdlYmtpdC1hbGlnbi1pdGVtczpmbGV4LWVuZDstbXMtZmxleC1hbGlnbjplbmQ7YWxpZ24taXRlbXM6ZmxleC1lbmQ7LXdlYmtpdC1ib3gtcGFjazplbmQ7LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfVtpZF49Tm90aWZsaXhDb25maXJtV3JhcF0gKnstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9W2lkXj1Ob3RpZmxpeENvbmZpcm1XcmFwXT5kaXZbY2xhc3MqPVxcXCItb3ZlcmxheVxcXCJde3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bGVmdDowO3RvcDowO2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuNSk7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDowfVtpZF49Tm90aWZsaXhDb25maXJtV3JhcF0+ZGl2W2NsYXNzKj1cXFwiLW92ZXJsYXlcXFwiXS5ueC13aXRoLWFuaW1hdGlvbnstd2Via2l0LWFuaW1hdGlvbjpjb25maXJtLW92ZXJsYXktYW5pbWF0aW9uIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWw7YW5pbWF0aW9uOmNvbmZpcm0tb3ZlcmxheS1hbmltYXRpb24gLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbH1ALXdlYmtpdC1rZXlmcmFtZXMgY29uZmlybS1vdmVybGF5LWFuaW1hdGlvbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgY29uZmlybS1vdmVybGF5LWFuaW1hdGlvbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fVtpZF49Tm90aWZsaXhDb25maXJtV3JhcF0ubngtcmVtb3ZlPmRpdltjbGFzcyo9XFxcIi1vdmVybGF5XFxcIl0ubngtd2l0aC1hbmltYXRpb257b3BhY2l0eTowOy13ZWJraXQtYW5pbWF0aW9uOmNvbmZpcm0tb3ZlcmxheS1hbmltYXRpb24tcmVtb3ZlIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWw7YW5pbWF0aW9uOmNvbmZpcm0tb3ZlcmxheS1hbmltYXRpb24tcmVtb3ZlIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWx9QC13ZWJraXQta2V5ZnJhbWVzIGNvbmZpcm0tb3ZlcmxheS1hbmltYXRpb24tcmVtb3ZlezAle29wYWNpdHk6MX0xMDAle29wYWNpdHk6MH19QGtleWZyYW1lcyBjb25maXJtLW92ZXJsYXktYW5pbWF0aW9uLXJlbW92ZXswJXtvcGFjaXR5OjF9MTAwJXtvcGFjaXR5OjB9fVtpZF49Tm90aWZsaXhDb25maXJtV3JhcF0+ZGl2W2NsYXNzKj1cXFwiLWNvbnRlbnRcXFwiXXt3aWR0aDozMDBweDttYXgtd2lkdGg6MTAwJTttYXgtaGVpZ2h0Ojk2dmg7b3ZlcmZsb3cteDpoaWRkZW47b3ZlcmZsb3cteTphdXRvO2JvcmRlci1yYWRpdXM6MjVweDtwYWRkaW5nOjEwcHg7bWFyZ2luOjA7LXdlYmtpdC1maWx0ZXI6ZHJvcC1zaGFkb3coMCAwIDVweCByZ2JhKDAsMCwwLDAuMDUpKTtmaWx0ZXI6ZHJvcC1zaGFkb3coMCAwIDVweCByZ2JhKDAsIDAsIDAsIC4wNSkpO2JhY2tncm91bmQ6I2Y4ZjhmODtjb2xvcjojMWUxZTFlO3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MTt0ZXh0LWFsaWduOmNlbnRlcn1baWRePU5vdGlmbGl4Q29uZmlybVdyYXBdPmRpdltjbGFzcyo9XFxcIi1jb250ZW50XFxcIl06Oi13ZWJraXQtc2Nyb2xsYmFye3dpZHRoOjA7aGVpZ2h0OjB9W2lkXj1Ob3RpZmxpeENvbmZpcm1XcmFwXT5kaXZbY2xhc3MqPVxcXCItY29udGVudFxcXCJdOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntiYWNrZ3JvdW5kOnRyYW5zcGFyZW50fVtpZF49Tm90aWZsaXhDb25maXJtV3JhcF0+ZGl2W2NsYXNzKj1cXFwiLWNvbnRlbnRcXFwiXTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2t7YmFja2dyb3VuZDp0cmFuc3BhcmVudH1baWRePU5vdGlmbGl4Q29uZmlybVdyYXBdPmRpdltjbGFzcyo9XFxcIi1jb250ZW50XFxcIl0+ZGl2W2NsYXNzKj1cXFwiLWhlYWRcXFwiXXtmbG9hdDpsZWZ0O3dpZHRoOjEwMCU7dGV4dC1hbGlnbjppbmhlcml0fVtpZF49Tm90aWZsaXhDb25maXJtV3JhcF0+ZGl2W2NsYXNzKj1cXFwiLWNvbnRlbnRcXFwiXT5kaXZbY2xhc3MqPVxcXCItaGVhZFxcXCJdPmg1e2Zsb2F0OmxlZnQ7d2lkdGg6MTAwJTttYXJnaW46MDtwYWRkaW5nOjAgMCAxMHB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEpO2NvbG9yOiMzMmM2ODI7Zm9udC1mYW1pbHk6aW5oZXJpdCFpbXBvcnRhbnQ7Zm9udC1zaXplOjE2cHg7bGluZS1oZWlnaHQ6MS40O2ZvbnQtd2VpZ2h0OjUwMDt0ZXh0LWFsaWduOmluaGVyaXR9W2lkXj1Ob3RpZmxpeENvbmZpcm1XcmFwXT5kaXZbY2xhc3MqPVxcXCItY29udGVudFxcXCJdPmRpdltjbGFzcyo9XFxcIi1oZWFkXFxcIl0+ZGl2e2ZvbnQtZmFtaWx5OmluaGVyaXQhaW1wb3J0YW50O21hcmdpbjoxNXB4IDAgMjBweDtwYWRkaW5nOjAgMTBweDtmbG9hdDpsZWZ0O3dpZHRoOjEwMCU7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MS40O2ZvbnQtd2VpZ2h0Om5vcm1hbDtjb2xvcjppbmhlcml0O3RleHQtYWxpZ246aW5oZXJpdH1baWRePU5vdGlmbGl4Q29uZmlybVdyYXBdPmRpdltjbGFzcyo9XFxcIi1jb250ZW50XFxcIl0+ZGl2W2NsYXNzKj1cXFwiLWhlYWRcXFwiXT5kaXY+ZGl2e2ZvbnQtZmFtaWx5OmluaGVyaXQhaW1wb3J0YW50O2Zsb2F0OmxlZnQ7d2lkdGg6MTAwJTttYXJnaW46MTVweCAwIDA7cGFkZGluZzowfVtpZF49Tm90aWZsaXhDb25maXJtV3JhcF0+ZGl2W2NsYXNzKj1cXFwiLWNvbnRlbnRcXFwiXT5kaXZbY2xhc3MqPVxcXCItaGVhZFxcXCJdPmRpdj5kaXY+aW5wdXR7Zm9udC1mYW1pbHk6aW5oZXJpdCFpbXBvcnRhbnQ7ZmxvYXQ6bGVmdDt3aWR0aDoxMDAlO2hlaWdodDo0MHB4O21hcmdpbjowO3BhZGRpbmc6MCAxNXB4O2JvcmRlcjoxcHggc29saWQgcmdiYSgwLDAsMCwuMSk7Ym9yZGVyLXJhZGl1czoyNXB4O2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0Om5vcm1hbDtsaW5lLWhlaWdodDoxOy13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjI1cyBlYXNlLWluLW91dDstby10cmFuc2l0aW9uOmFsbCAuMjVzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246YWxsIC4yNXMgZWFzZS1pbi1vdXQ7dGV4dC1hbGlnbjpsZWZ0fVtpZF49Tm90aWZsaXhDb25maXJtV3JhcF0ubngtcnRsLW9uPmRpdltjbGFzcyo9XFxcIi1jb250ZW50XFxcIl0+ZGl2W2NsYXNzKj1cXFwiLWhlYWRcXFwiXT5kaXY+ZGl2PmlucHV0e3RleHQtYWxpZ246cmlnaHR9W2lkXj1Ob3RpZmxpeENvbmZpcm1XcmFwXT5kaXZbY2xhc3MqPVxcXCItY29udGVudFxcXCJdPmRpdltjbGFzcyo9XFxcIi1oZWFkXFxcIl0+ZGl2PmRpdj5pbnB1dDpob3Zlcntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMSl9W2lkXj1Ob3RpZmxpeENvbmZpcm1XcmFwXT5kaXZbY2xhc3MqPVxcXCItY29udGVudFxcXCJdPmRpdltjbGFzcyo9XFxcIi1oZWFkXFxcIl0+ZGl2PmRpdj5pbnB1dDpmb2N1c3tib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMyl9W2lkXj1Ob3RpZmxpeENvbmZpcm1XcmFwXT5kaXZbY2xhc3MqPVxcXCItY29udGVudFxcXCJdPmRpdltjbGFzcyo9XFxcIi1oZWFkXFxcIl0+ZGl2PmRpdj5pbnB1dC5ueC12YWxpZGF0aW9uLWZhaWx1cmV7Ym9yZGVyLWNvbG9yOiNmZjU1NDl9W2lkXj1Ob3RpZmxpeENvbmZpcm1XcmFwXT5kaXZbY2xhc3MqPVxcXCItY29udGVudFxcXCJdPmRpdltjbGFzcyo9XFxcIi1oZWFkXFxcIl0+ZGl2PmRpdj5pbnB1dC5ueC12YWxpZGF0aW9uLXN1Y2Nlc3N7Ym9yZGVyLWNvbG9yOiMzMmM2ODJ9W2lkXj1Ob3RpZmxpeENvbmZpcm1XcmFwXT5kaXZbY2xhc3MqPVxcXCItY29udGVudFxcXCJdPmRpdltjbGFzcyo9XFxcIi1idXR0b25zXFxcIl17LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2JvcmRlci1yYWRpdXM6aW5oZXJpdDtmbG9hdDpsZWZ0O3dpZHRoOjEwMCU7dGV4dC1hbGlnbjppbmhlcml0fVtpZF49Tm90aWZsaXhDb25maXJtV3JhcF0+ZGl2W2NsYXNzKj1cXFwiLWNvbnRlbnRcXFwiXT5kaXZbY2xhc3MqPVxcXCItYnV0dG9uc1xcXCJdPmF7Y3Vyc29yOnBvaW50ZXI7Zm9udC1mYW1pbHk6aW5oZXJpdCFpbXBvcnRhbnQ7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuMjVzIGVhc2UtaW4tb3V0Oy1vLXRyYW5zaXRpb246YWxsIC4yNXMgZWFzZS1pbi1vdXQ7dHJhbnNpdGlvbjphbGwgLjI1cyBlYXNlLWluLW91dDtmbG9hdDpsZWZ0O3dpZHRoOjQ4JTtwYWRkaW5nOjlweCA1cHg7Ym9yZGVyLXJhZGl1czppbmhlcml0IWltcG9ydGFudDtmb250LXdlaWdodDo1MDA7Zm9udC1zaXplOjE1cHg7bGluZS1oZWlnaHQ6MS40O2NvbG9yOiNmOGY4Zjg7dGV4dC1hbGlnbjppbmhlcml0fVtpZF49Tm90aWZsaXhDb25maXJtV3JhcF0+ZGl2W2NsYXNzKj1cXFwiLWNvbnRlbnRcXFwiXT5kaXZbY2xhc3MqPVxcXCItYnV0dG9uc1xcXCJdPmEubngtY29uZmlybS1idXR0b24tb2t7bWFyZ2luOjAgMiUgMCAwO2JhY2tncm91bmQ6IzMyYzY4Mn1baWRePU5vdGlmbGl4Q29uZmlybVdyYXBdPmRpdltjbGFzcyo9XFxcIi1jb250ZW50XFxcIl0+ZGl2W2NsYXNzKj1cXFwiLWJ1dHRvbnNcXFwiXT5hLm54LWNvbmZpcm0tYnV0dG9uLWNhbmNlbHttYXJnaW46MCAwIDAgMiU7YmFja2dyb3VuZDojYTlhOWE5fVtpZF49Tm90aWZsaXhDb25maXJtV3JhcF0+ZGl2W2NsYXNzKj1cXFwiLWNvbnRlbnRcXFwiXT5kaXZbY2xhc3MqPVxcXCItYnV0dG9uc1xcXCJdPmEubngtZnVsbHttYXJnaW46MDt3aWR0aDoxMDAlfVtpZF49Tm90aWZsaXhDb25maXJtV3JhcF0+ZGl2W2NsYXNzKj1cXFwiLWNvbnRlbnRcXFwiXT5kaXZbY2xhc3MqPVxcXCItYnV0dG9uc1xcXCJdPmE6aG92ZXJ7LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgLTYwcHggNXB4IC01cHggcmdiYSgwLDAsMCwuMjUpO2JveC1zaGFkb3c6aW5zZXQgMCAtNjBweCA1cHggLTVweCByZ2JhKDAsMCwwLC4yNSl9W2lkXj1Ob3RpZmxpeENvbmZpcm1XcmFwXS5ueC1ydGwtb24+ZGl2W2NsYXNzKj1cXFwiLWNvbnRlbnRcXFwiXT5kaXZbY2xhc3MqPVxcXCItYnV0dG9uc1xcXCJdLFtpZF49Tm90aWZsaXhDb25maXJtV3JhcF0ubngtcnRsLW9uPmRpdltjbGFzcyo9XFxcIi1jb250ZW50XFxcIl0+ZGl2W2NsYXNzKj1cXFwiLWJ1dHRvbnNcXFwiXT5hey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVkoMTgwZGVnKTt0cmFuc2Zvcm06cm90YXRlWSgxODBkZWcpfVtpZF49Tm90aWZsaXhDb25maXJtV3JhcF0ubngtd2l0aC1hbmltYXRpb24ubngtZmFkZT5kaXZbY2xhc3MqPVxcXCItY29udGVudFxcXCJdey13ZWJraXQtYW5pbWF0aW9uOmNvbmZpcm0tYW5pbWF0aW9uLWZhZGUgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbDthbmltYXRpb246Y29uZmlybS1hbmltYXRpb24tZmFkZSAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsfUAtd2Via2l0LWtleWZyYW1lcyBjb25maXJtLWFuaW1hdGlvbi1mYWRlezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBjb25maXJtLWFuaW1hdGlvbi1mYWRlezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19W2lkXj1Ob3RpZmxpeENvbmZpcm1XcmFwXS5ueC13aXRoLWFuaW1hdGlvbi5ueC16b29tPmRpdltjbGFzcyo9XFxcIi1jb250ZW50XFxcIl17LXdlYmtpdC1hbmltYXRpb246Y29uZmlybS1hbmltYXRpb24tem9vbSAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsO2FuaW1hdGlvbjpjb25maXJtLWFuaW1hdGlvbi16b29tIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWx9QC13ZWJraXQta2V5ZnJhbWVzIGNvbmZpcm0tYW5pbWF0aW9uLXpvb217MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC41KTt0cmFuc2Zvcm06c2NhbGUoLjUpfTUwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4wNSk7dHJhbnNmb3JtOnNjYWxlKDEuMDUpfTEwMCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBjb25maXJtLWFuaW1hdGlvbi16b29tezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNSk7dHJhbnNmb3JtOnNjYWxlKC41KX01MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMDUpO3RyYW5zZm9ybTpzY2FsZSgxLjA1KX0xMDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fVtpZF49Tm90aWZsaXhDb25maXJtV3JhcF0ubngtd2l0aC1hbmltYXRpb24ubngtZmFkZS5ueC1yZW1vdmU+ZGl2W2NsYXNzKj1cXFwiLWNvbnRlbnRcXFwiXXtvcGFjaXR5OjA7LXdlYmtpdC1hbmltYXRpb246Y29uZmlybS1hbmltYXRpb24tZmFkZS1yZW1vdmUgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbDthbmltYXRpb246Y29uZmlybS1hbmltYXRpb24tZmFkZS1yZW1vdmUgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbH1ALXdlYmtpdC1rZXlmcmFtZXMgY29uZmlybS1hbmltYXRpb24tZmFkZS1yZW1vdmV7MCV7b3BhY2l0eToxfTEwMCV7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGNvbmZpcm0tYW5pbWF0aW9uLWZhZGUtcmVtb3ZlezAle29wYWNpdHk6MX0xMDAle29wYWNpdHk6MH19W2lkXj1Ob3RpZmxpeENvbmZpcm1XcmFwXS5ueC13aXRoLWFuaW1hdGlvbi5ueC16b29tLm54LXJlbW92ZT5kaXZbY2xhc3MqPVxcXCItY29udGVudFxcXCJde29wYWNpdHk6MDstd2Via2l0LWFuaW1hdGlvbjpjb25maXJtLWFuaW1hdGlvbi16b29tLXJlbW92ZSAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsO2FuaW1hdGlvbjpjb25maXJtLWFuaW1hdGlvbi16b29tLXJlbW92ZSAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsfUAtd2Via2l0LWtleWZyYW1lcyBjb25maXJtLWFuaW1hdGlvbi16b29tLXJlbW92ZXswJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTUwJXtvcGFjaXR5Oi41Oy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMDUpO3RyYW5zZm9ybTpzY2FsZSgxLjA1KX0xMDAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9fUBrZXlmcmFtZXMgY29uZmlybS1hbmltYXRpb24tem9vbS1yZW1vdmV7MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX01MCV7b3BhY2l0eTouNTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjA1KTt0cmFuc2Zvcm06c2NhbGUoMS4wNSl9MTAwJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfX1cIn0sSD1mdW5jdGlvbihlLGksbixvLHIsbCxtLGMscCl7aWYoIXcoXCJib2R5XCIpKXJldHVybiExO2F8fEcuQ29uZmlybS5pbml0KHt9KTt2YXIgeD12KCEwLGEse30pO1wib2JqZWN0XCIhPXR5cGVvZiBwfHxBcnJheS5pc0FycmF5KHApfHwoYT12KCEwLGEscCkpLFwic3RyaW5nXCIhPXR5cGVvZiBpJiYoaT1cIk5vdGlmbGl4IENvbmZpcm1cIiksXCJzdHJpbmdcIiE9dHlwZW9mIG4mJihuPVwiRG8geW91IGFncmVlIHdpdGggbWU/XCIpLFwic3RyaW5nXCIhPXR5cGVvZiByJiYocj1cIlllc1wiKSxcInN0cmluZ1wiIT10eXBlb2YgbCYmKGw9XCJOb1wiKSxcImZ1bmN0aW9uXCIhPXR5cGVvZiBtJiYobT12b2lkIDApLFwiZnVuY3Rpb25cIiE9dHlwZW9mIGMmJihjPXZvaWQgMCksYS5wbGFpblRleHQmJihpPU4oaSksbj1OKG4pLHI9TihyKSxsPU4obCkpLGEucGxhaW5UZXh0fHwoaS5sZW5ndGg+YS50aXRsZU1heExlbmd0aCYmKGk9XCJQb3NzaWJsZSBIVE1MIFRhZ3MgRXJyb3JcIixuPVwiVGhlIFxcXCJwbGFpblRleHRcXFwiIG9wdGlvbiBpcyBcXFwiZmFsc2VcXFwiIGFuZCB0aGUgdGl0bGUgY29udGVudCBsZW5ndGggaXMgbW9yZSB0aGFuIFxcXCJ0aXRsZU1heExlbmd0aFxcXCIgb3B0aW9uLlwiLHI9XCJPa2F5XCIsbD1cIi4uLlwiKSxuLmxlbmd0aD5hLm1lc3NhZ2VNYXhMZW5ndGgmJihpPVwiUG9zc2libGUgSFRNTCBUYWdzIEVycm9yXCIsbj1cIlRoZSBcXFwicGxhaW5UZXh0XFxcIiBvcHRpb24gaXMgXFxcImZhbHNlXFxcIiBhbmQgdGhlIG1lc3NhZ2UgY29udGVudCBsZW5ndGggaXMgbW9yZSB0aGFuIFxcXCJtZXNzYWdlTWF4TGVuZ3RoXFxcIiBvcHRpb24uXCIscj1cIk9rYXlcIixsPVwiLi4uXCIpLChyLmxlbmd0aHx8bC5sZW5ndGgpPmEuYnV0dG9uc01heExlbmd0aCYmKGk9XCJQb3NzaWJsZSBIVE1MIFRhZ3MgRXJyb3JcIixuPVwiVGhlIFxcXCJwbGFpblRleHRcXFwiIG9wdGlvbiBpcyBcXFwiZmFsc2VcXFwiIGFuZCB0aGUgYnV0dG9ucyBjb250ZW50IGxlbmd0aCBpcyBtb3JlIHRoYW4gXFxcImJ1dHRvbnNNYXhMZW5ndGhcXFwiIG9wdGlvbi5cIixyPVwiT2theVwiLGw9XCIuLi5cIikpLGkubGVuZ3RoPmEudGl0bGVNYXhMZW5ndGgmJihpPWkuc3Vic3RyaW5nKDAsYS50aXRsZU1heExlbmd0aCkrXCIuLi5cIiksbi5sZW5ndGg+YS5tZXNzYWdlTWF4TGVuZ3RoJiYobj1uLnN1YnN0cmluZygwLGEubWVzc2FnZU1heExlbmd0aCkrXCIuLi5cIiksci5sZW5ndGg+YS5idXR0b25zTWF4TGVuZ3RoJiYocj1yLnN1YnN0cmluZygwLGEuYnV0dG9uc01heExlbmd0aCkrXCIuLi5cIiksbC5sZW5ndGg+YS5idXR0b25zTWF4TGVuZ3RoJiYobD1sLnN1YnN0cmluZygwLGEuYnV0dG9uc01heExlbmd0aCkrXCIuLi5cIiksYS5jc3NBbmltYXRpb258fChhLmNzc0FuaW1hdGlvbkR1cmF0aW9uPTApO3ZhciBnPXQuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtnLmlkPWQuSUQsZy5jbGFzc05hbWU9YS5jbGFzc05hbWUrKGEuY3NzQW5pbWF0aW9uP1wiIG54LXdpdGgtYW5pbWF0aW9uIG54LVwiK2EuY3NzQW5pbWF0aW9uU3R5bGU6XCJcIiksZy5zdHlsZS56SW5kZXg9YS56aW5kZXgsZy5zdHlsZS5wYWRkaW5nPWEuZGlzdGFuY2UsYS5ydGwmJihnLnNldEF0dHJpYnV0ZShcImRpclwiLFwicnRsXCIpLGcuY2xhc3NMaXN0LmFkZChcIm54LXJ0bC1vblwiKSk7dmFyIGI9XCJzdHJpbmdcIj09dHlwZW9mIGEucG9zaXRpb24/YS5wb3NpdGlvbi50cmltKCk6XCJjZW50ZXJcIjtnLmNsYXNzTGlzdC5hZGQoXCJueC1wb3NpdGlvbi1cIitiKSxnLnN0eWxlLmZvbnRGYW1pbHk9XCJcXFwiXCIrYS5mb250RmFtaWx5K1wiXFxcIiwgXCIrczt2YXIgdT1cIlwiO2EuYmFja092ZXJsYXkmJih1PVwiPGRpdiBjbGFzcz1cXFwiXCIrYS5jbGFzc05hbWUrXCItb3ZlcmxheVwiKyhhLmNzc0FuaW1hdGlvbj9cIiBueC13aXRoLWFuaW1hdGlvblwiOlwiXCIpK1wiXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZDpcIithLmJhY2tPdmVybGF5Q29sb3IrXCI7YW5pbWF0aW9uLWR1cmF0aW9uOlwiK2EuY3NzQW5pbWF0aW9uRHVyYXRpb24rXCJtcztcXFwiPjwvZGl2PlwiKTt2YXIgeT1cIlwiO1wiZnVuY3Rpb25cIj09dHlwZW9mIG0mJih5PVwiPGEgaWQ9XFxcIk5YQ29uZmlybUJ1dHRvbkNhbmNlbFxcXCIgY2xhc3M9XFxcIm54LWNvbmZpcm0tYnV0dG9uLWNhbmNlbFxcXCIgc3R5bGU9XFxcImNvbG9yOlwiK2EuY2FuY2VsQnV0dG9uQ29sb3IrXCI7YmFja2dyb3VuZDpcIithLmNhbmNlbEJ1dHRvbkJhY2tncm91bmQrXCI7Zm9udC1zaXplOlwiK2EuYnV0dG9uc0ZvbnRTaXplK1wiO1xcXCI+XCIrbCtcIjwvYT5cIik7dmFyIGs9XCJcIixoPW51bGwsQz12b2lkIDA7aWYoZT09PWYuQXNrfHxlPT09Zi5Qcm9tcHQpe2g9b3x8XCJcIjt2YXIgej1lPT09Zi5Bc2s/TWF0aC5jZWlsKDEuNSpoLmxlbmd0aCk6MjAwPGgubGVuZ3RoP01hdGguY2VpbCgxLjUqaC5sZW5ndGgpOjI1MCxTPWU9PT1mLlByb21wdD9cInZhbHVlPVxcXCJcIitoK1wiXFxcIlwiOlwiXCI7az1cIjxkaXY+PGlucHV0IGlkPVxcXCJOWENvbmZpcm1WYWxpZGF0aW9uSW5wdXRcXFwiIHR5cGU9XFxcInRleHRcXFwiIFwiK1MrXCIgbWF4bGVuZ3RoPVxcXCJcIit6K1wiXFxcIiBzdHlsZT1cXFwiZm9udC1zaXplOlwiK2EubWVzc2FnZUZvbnRTaXplK1wiO2JvcmRlci1yYWRpdXM6IFwiK2EuYm9yZGVyUmFkaXVzK1wiO1xcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiIHNwZWxsY2hlY2s9XFxcImZhbHNlXFxcIiBhdXRvY2FwaXRhbGl6ZT1cXFwibm9uZVxcXCIgLz48L2Rpdj5cIn1pZihnLmlubmVySFRNTD11K1wiPGRpdiBjbGFzcz1cXFwiXCIrYS5jbGFzc05hbWUrXCItY29udGVudFxcXCIgc3R5bGU9XFxcIndpZHRoOlwiK2Eud2lkdGgrXCI7IGJhY2tncm91bmQ6XCIrYS5iYWNrZ3JvdW5kQ29sb3IrXCI7IGFuaW1hdGlvbi1kdXJhdGlvbjpcIithLmNzc0FuaW1hdGlvbkR1cmF0aW9uK1wibXM7IGJvcmRlci1yYWRpdXM6IFwiK2EuYm9yZGVyUmFkaXVzK1wiO1xcXCI+PGRpdiBjbGFzcz1cXFwiXCIrYS5jbGFzc05hbWUrXCItaGVhZFxcXCI+PGg1IHN0eWxlPVxcXCJjb2xvcjpcIithLnRpdGxlQ29sb3IrXCI7Zm9udC1zaXplOlwiK2EudGl0bGVGb250U2l6ZStcIjtcXFwiPlwiK2krXCI8L2g1PjxkaXYgc3R5bGU9XFxcImNvbG9yOlwiK2EubWVzc2FnZUNvbG9yK1wiO2ZvbnQtc2l6ZTpcIithLm1lc3NhZ2VGb250U2l6ZStcIjtcXFwiPlwiK24raytcIjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XFxcIlwiK2EuY2xhc3NOYW1lK1wiLWJ1dHRvbnNcXFwiPjxhIGlkPVxcXCJOWENvbmZpcm1CdXR0b25Pa1xcXCIgY2xhc3M9XFxcIm54LWNvbmZpcm0tYnV0dG9uLW9rXCIrKFwiZnVuY3Rpb25cIj09dHlwZW9mIG0/XCJcIjpcIiBueC1mdWxsXCIpK1wiXFxcIiBzdHlsZT1cXFwiY29sb3I6XCIrYS5va0J1dHRvbkNvbG9yK1wiO2JhY2tncm91bmQ6XCIrYS5va0J1dHRvbkJhY2tncm91bmQrXCI7Zm9udC1zaXplOlwiK2EuYnV0dG9uc0ZvbnRTaXplK1wiO1xcXCI+XCIrcitcIjwvYT5cIit5K1wiPC9kaXY+PC9kaXY+XCIsIXQuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZy5pZCkpe3QuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChnKTt2YXIgTD10LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGcuaWQpLFc9dC5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk5YQ29uZmlybUJ1dHRvbk9rXCIpLEk9dC5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk5YQ29uZmlybVZhbGlkYXRpb25JbnB1dFwiKTtpZihJJiYoSS5mb2N1cygpLEkuc2V0U2VsZWN0aW9uUmFuZ2UoMCwoSS52YWx1ZXx8XCJcIikubGVuZ3RoKSxJLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLGZ1bmN0aW9uKHQpe3ZhciBpPXQudGFyZ2V0LnZhbHVlO2lmKGU9PT1mLkFzayYmaSE9PWgpdC5wcmV2ZW50RGVmYXVsdCgpLEkuY2xhc3NMaXN0LmFkZChcIm54LXZhbGlkYXRpb24tZmFpbHVyZVwiKSxJLmNsYXNzTGlzdC5yZW1vdmUoXCJueC12YWxpZGF0aW9uLXN1Y2Nlc3NcIik7ZWxzZXtlPT09Zi5Bc2smJihJLmNsYXNzTGlzdC5yZW1vdmUoXCJueC12YWxpZGF0aW9uLWZhaWx1cmVcIiksSS5jbGFzc0xpc3QuYWRkKFwibngtdmFsaWRhdGlvbi1zdWNjZXNzXCIpKTt2YXIgYT1cImVudGVyXCI9PT0odC5rZXl8fFwiXCIpLnRvTG9jYWxlTG93ZXJDYXNlKFwiZW5cIil8fDEzPT09dC5rZXlDb2RlO2EmJlcuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjbGlja1wiKSl9fSkpLFcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24odCl7aWYoZT09PWYuQXNrJiZoJiZJKXt2YXIgaT0oSS52YWx1ZXx8XCJcIikudG9TdHJpbmcoKTtpZihpIT09aClyZXR1cm4gSS5mb2N1cygpLEkuY2xhc3NMaXN0LmFkZChcIm54LXZhbGlkYXRpb24tZmFpbHVyZVwiKSx0LnN0b3BQcm9wYWdhdGlvbigpLHQucHJldmVudERlZmF1bHQoKSx0LnJldHVyblZhbHVlPSExLHQuY2FuY2VsQnViYmxlPSEwLCExO0kuY2xhc3NMaXN0LnJlbW92ZShcIm54LXZhbGlkYXRpb24tZmFpbHVyZVwiKX1cImZ1bmN0aW9uXCI9PXR5cGVvZiBtJiYoZT09PWYuUHJvbXB0JiZJJiYoQz1JLnZhbHVlfHxcIlwiKSxtKEMpKSxMLmNsYXNzTGlzdC5hZGQoXCJueC1yZW1vdmVcIik7dmFyIG49c2V0VGltZW91dChmdW5jdGlvbigpe251bGwhPT1MLnBhcmVudE5vZGUmJihMLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoTCksY2xlYXJUaW1lb3V0KG4pKX0sYS5jc3NBbmltYXRpb25EdXJhdGlvbil9KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBtKXt2YXIgUj10LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTlhDb25maXJtQnV0dG9uQ2FuY2VsXCIpO1IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBjJiYoZT09PWYuUHJvbXB0JiZJJiYoQz1JLnZhbHVlfHxcIlwiKSxjKEMpKSxMLmNsYXNzTGlzdC5hZGQoXCJueC1yZW1vdmVcIik7dmFyIHQ9c2V0VGltZW91dChmdW5jdGlvbigpe251bGwhPT1MLnBhcmVudE5vZGUmJihMLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoTCksY2xlYXJUaW1lb3V0KHQpKX0sYS5jc3NBbmltYXRpb25EdXJhdGlvbil9KX19YT12KCEwLGEseCl9LFA9ZnVuY3Rpb24oKXtyZXR1cm5cIltpZF49Tm90aWZsaXhMb2FkaW5nV3JhcF17LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6NDAwMDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2xlZnQ6MDt0b3A6MDtyaWdodDowO2JvdHRvbTowO21hcmdpbjphdXRvO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1mbGV4LXdyYXA6d3JhcDstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXA7LXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsOy13ZWJraXQtYm94LWRpcmVjdGlvbjpub3JtYWw7LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy13ZWJraXQtYWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7dGV4dC1hbGlnbjpjZW50ZXI7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuOCk7Zm9udC1mYW1pbHk6XFxcIlF1aWNrc2FuZFxcXCIsLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXFxcIlNlZ29lIFVJXFxcIixSb2JvdG8sXFxcIkhlbHZldGljYSBOZXVlXFxcIixBcmlhbCxzYW5zLXNlcmlmfVtpZF49Tm90aWZsaXhMb2FkaW5nV3JhcF0gKnstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9W2lkXj1Ob3RpZmxpeExvYWRpbmdXcmFwXS5ueC1sb2FkaW5nLWNsaWNrLXRvLWNsb3Nle2N1cnNvcjpwb2ludGVyfVtpZF49Tm90aWZsaXhMb2FkaW5nV3JhcF0+ZGl2W2NsYXNzKj1cXFwiLWljb25cXFwiXXt3aWR0aDo2MHB4O2hlaWdodDo2MHB4O3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtdHJhbnNpdGlvbjp0b3AgLjJzIGVhc2UtaW4tb3V0Oy1vLXRyYW5zaXRpb246dG9wIC4ycyBlYXNlLWluLW91dDt0cmFuc2l0aW9uOnRvcCAuMnMgZWFzZS1pbi1vdXQ7bWFyZ2luOjAgYXV0b31baWRePU5vdGlmbGl4TG9hZGluZ1dyYXBdPmRpdltjbGFzcyo9XFxcIi1pY29uXFxcIl0gaW1nLFtpZF49Tm90aWZsaXhMb2FkaW5nV3JhcF0+ZGl2W2NsYXNzKj1cXFwiLWljb25cXFwiXSBzdmd7bWF4LXdpZHRoOnVuc2V0O21heC1oZWlnaHQ6dW5zZXQ7d2lkdGg6MTAwJTtoZWlnaHQ6YXV0bztwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjB9W2lkXj1Ob3RpZmxpeExvYWRpbmdXcmFwXT5we3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbjoxMHB4IGF1dG8gMDtmb250LWZhbWlseTppbmhlcml0IWltcG9ydGFudDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjE1cHg7bGluZS1oZWlnaHQ6MS40O3BhZGRpbmc6MCAxMHB4O3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpjZW50ZXJ9W2lkXj1Ob3RpZmxpeExvYWRpbmdXcmFwXS5ueC13aXRoLWFuaW1hdGlvbnstd2Via2l0LWFuaW1hdGlvbjpsb2FkaW5nLWFuaW1hdGlvbi1mYWRlIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWw7YW5pbWF0aW9uOmxvYWRpbmctYW5pbWF0aW9uLWZhZGUgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbH1ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZGluZy1hbmltYXRpb24tZmFkZXswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgbG9hZGluZy1hbmltYXRpb24tZmFkZXswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fVtpZF49Tm90aWZsaXhMb2FkaW5nV3JhcF0ubngtd2l0aC1hbmltYXRpb24ubngtcmVtb3Zle29wYWNpdHk6MDstd2Via2l0LWFuaW1hdGlvbjpsb2FkaW5nLWFuaW1hdGlvbi1mYWRlLXJlbW92ZSAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsO2FuaW1hdGlvbjpsb2FkaW5nLWFuaW1hdGlvbi1mYWRlLXJlbW92ZSAuM3MgZWFzZS1pbi1vdXQgMHMgbm9ybWFsfUAtd2Via2l0LWtleWZyYW1lcyBsb2FkaW5nLWFuaW1hdGlvbi1mYWRlLXJlbW92ZXswJXtvcGFjaXR5OjF9MTAwJXtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgbG9hZGluZy1hbmltYXRpb24tZmFkZS1yZW1vdmV7MCV7b3BhY2l0eToxfTEwMCV7b3BhY2l0eTowfX1baWRePU5vdGlmbGl4TG9hZGluZ1dyYXBdPnAubngtbG9hZGluZy1tZXNzYWdlLW5ld3std2Via2l0LWFuaW1hdGlvbjpsb2FkaW5nLW5ldy1tZXNzYWdlLWZhZGUgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbDthbmltYXRpb246bG9hZGluZy1uZXctbWVzc2FnZS1mYWRlIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWx9QC13ZWJraXQta2V5ZnJhbWVzIGxvYWRpbmctbmV3LW1lc3NhZ2UtZmFkZXswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgbG9hZGluZy1uZXctbWVzc2FnZS1mYWRlezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19XCJ9LFU9ZnVuY3Rpb24oZSxpLGEsbyxyKXtpZighdyhcImJvZHlcIikpcmV0dXJuITE7bnx8Ry5Mb2FkaW5nLmluaXQoe30pO3ZhciBsPXYoITAsbix7fSk7aWYoXCJvYmplY3RcIj09dHlwZW9mIGkmJiFBcnJheS5pc0FycmF5KGkpfHxcIm9iamVjdFwiPT10eXBlb2YgYSYmIUFycmF5LmlzQXJyYXkoYSkpe3ZhciBtPXt9O1wib2JqZWN0XCI9PXR5cGVvZiBpP209aTpcIm9iamVjdFwiPT10eXBlb2YgYSYmKG09YSksbj12KCEwLG4sbSl9dmFyIGM9XCJcIjtpZihcInN0cmluZ1wiPT10eXBlb2YgaSYmMDxpLmxlbmd0aCYmKGM9aSksbyl7Yz1jLmxlbmd0aD5uLm1lc3NhZ2VNYXhMZW5ndGg/TihjKS50b1N0cmluZygpLnN1YnN0cmluZygwLG4ubWVzc2FnZU1heExlbmd0aCkrXCIuLi5cIjpOKGMpLnRvU3RyaW5nKCk7dmFyIHA9XCJcIjswPGMubGVuZ3RoJiYocD1cIjxwIGlkPVxcXCJcIituLm1lc3NhZ2VJRCtcIlxcXCIgY2xhc3M9XFxcIm54LWxvYWRpbmctbWVzc2FnZVxcXCIgc3R5bGU9XFxcImNvbG9yOlwiK24ubWVzc2FnZUNvbG9yK1wiO2ZvbnQtc2l6ZTpcIituLm1lc3NhZ2VGb250U2l6ZStcIjtcXFwiPlwiK2MrXCI8L3A+XCIpLG4uY3NzQW5pbWF0aW9ufHwobi5jc3NBbmltYXRpb25EdXJhdGlvbj0wKTt2YXIgZj1cIlwiO2lmKGU9PT14LlN0YW5kYXJkKWY9VyhuLnN2Z1NpemUsbi5zdmdDb2xvcik7ZWxzZSBpZihlPT09eC5Ib3VyZ2xhc3MpZj1JKG4uc3ZnU2l6ZSxuLnN2Z0NvbG9yKTtlbHNlIGlmKGU9PT14LkNpcmNsZSlmPVIobi5zdmdTaXplLG4uc3ZnQ29sb3IpO2Vsc2UgaWYoZT09PXguQXJyb3dzKWY9QShuLnN2Z1NpemUsbi5zdmdDb2xvcik7ZWxzZSBpZihlPT09eC5Eb3RzKWY9TShuLnN2Z1NpemUsbi5zdmdDb2xvcik7ZWxzZSBpZihlPT09eC5QdWxzZSlmPUIobi5zdmdTaXplLG4uc3ZnQ29sb3IpO2Vsc2UgaWYoZT09PXguQ3VzdG9tJiZudWxsIT09bi5jdXN0b21TdmdDb2RlJiZudWxsPT09bi5jdXN0b21TdmdVcmwpZj1uLmN1c3RvbVN2Z0NvZGV8fFwiXCI7ZWxzZSBpZihlPT09eC5DdXN0b20mJm51bGwhPT1uLmN1c3RvbVN2Z1VybCYmbnVsbD09PW4uY3VzdG9tU3ZnQ29kZSlmPVwiPGltZyBjbGFzcz1cXFwibngtY3VzdG9tLWxvYWRpbmctaWNvblxcXCIgd2lkdGg9XFxcIlwiK24uc3ZnU2l6ZStcIlxcXCIgaGVpZ2h0PVxcXCJcIituLnN2Z1NpemUrXCJcXFwiIHNyYz1cXFwiXCIrbi5jdXN0b21TdmdVcmwrXCJcXFwiIGFsdD1cXFwiTm90aWZsaXhcXFwiPlwiO2Vsc2V7aWYoZT09PXguQ3VzdG9tJiYobnVsbD09PW4uY3VzdG9tU3ZnVXJsfHxudWxsPT09bi5jdXN0b21TdmdDb2RlKSlyZXR1cm4geShcIllvdSBoYXZlIHRvIHNldCBhIHN0YXRpYyBTVkcgdXJsIHRvIFxcXCJjdXN0b21TdmdVcmxcXFwiIG9wdGlvbiB0byB1c2UgTG9hZGluZyBDdXN0b20uXCIpLCExO2Y9WChuLnN2Z1NpemUsXCIjZjhmOGY4XCIsXCIjMzJjNjgyXCIpfXZhciBkPXBhcnNlSW50KChuLnN2Z1NpemV8fFwiXCIpLnJlcGxhY2UoL1teMC05XS9nLFwiXCIpKSxiPXQuaW5uZXJXaWR0aCx1PWQ+PWI/Yi00MCtcInB4XCI6ZCtcInB4XCIsaz1cIjxkaXYgc3R5bGU9XFxcIndpZHRoOlwiK3UrXCI7IGhlaWdodDpcIit1K1wiO1xcXCIgY2xhc3M9XFxcIlwiK24uY2xhc3NOYW1lK1wiLWljb25cIisoMDxjLmxlbmd0aD9cIiBueC13aXRoLW1lc3NhZ2VcIjpcIlwiKStcIlxcXCI+XCIrZitcIjwvZGl2PlwiLGg9dC5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2lmKGguaWQ9Zy5JRCxoLmNsYXNzTmFtZT1uLmNsYXNzTmFtZSsobi5jc3NBbmltYXRpb24/XCIgbngtd2l0aC1hbmltYXRpb25cIjpcIlwiKSsobi5jbGlja1RvQ2xvc2U/XCIgbngtbG9hZGluZy1jbGljay10by1jbG9zZVwiOlwiXCIpLGguc3R5bGUuekluZGV4PW4uemluZGV4LGguc3R5bGUuYmFja2dyb3VuZD1uLmJhY2tncm91bmRDb2xvcixoLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uPW4uY3NzQW5pbWF0aW9uRHVyYXRpb24rXCJtc1wiLGguc3R5bGUuZm9udEZhbWlseT1cIlxcXCJcIituLmZvbnRGYW1pbHkrXCJcXFwiLCBcIitzLGguc3R5bGUuZGlzcGxheT1cImZsZXhcIixoLnN0eWxlLmZsZXhXcmFwPVwid3JhcFwiLGguc3R5bGUuZmxleERpcmVjdGlvbj1cImNvbHVtblwiLGguc3R5bGUuYWxpZ25JdGVtcz1cImNlbnRlclwiLGguc3R5bGUuanVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIixuLnJ0bCYmKGguc2V0QXR0cmlidXRlKFwiZGlyXCIsXCJydGxcIiksaC5jbGFzc0xpc3QuYWRkKFwibngtcnRsLW9uXCIpKSxoLmlubmVySFRNTD1rK3AsIXQuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaC5pZCkmJih0LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaCksbi5jbGlja1RvQ2xvc2UpKXt2YXIgQz10LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGguaWQpO0MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtoLmNsYXNzTGlzdC5hZGQoXCJueC1yZW1vdmVcIik7dmFyIHQ9c2V0VGltZW91dChmdW5jdGlvbigpe251bGwhPT1oLnBhcmVudE5vZGUmJihoLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaCksY2xlYXJUaW1lb3V0KHQpKX0sbi5jc3NBbmltYXRpb25EdXJhdGlvbil9KX19ZWxzZSBpZih0LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGcuSUQpKXZhciB6PXQuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZy5JRCksUz1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ei5jbGFzc0xpc3QuYWRkKFwibngtcmVtb3ZlXCIpO3ZhciB0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtudWxsIT09ei5wYXJlbnROb2RlJiYoei5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHopLGNsZWFyVGltZW91dCh0KSl9LG4uY3NzQW5pbWF0aW9uRHVyYXRpb24pO2NsZWFyVGltZW91dChTKX0scik7bj12KCEwLG4sbCl9LFY9ZnVuY3Rpb24oZSl7XCJzdHJpbmdcIiE9dHlwZW9mIGUmJihlPVwiXCIpO3ZhciBpPXQuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZy5JRCk7aWYoaSlpZigwPGUubGVuZ3RoKXtlPWUubGVuZ3RoPm4ubWVzc2FnZU1heExlbmd0aD9OKGUpLnN1YnN0cmluZygwLG4ubWVzc2FnZU1heExlbmd0aCkrXCIuLi5cIjpOKGUpO3ZhciBhPWkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwXCIpWzBdO2lmKGEpYS5pbm5lckhUTUw9ZTtlbHNle3ZhciBvPXQuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7by5pZD1uLm1lc3NhZ2VJRCxvLmNsYXNzTmFtZT1cIm54LWxvYWRpbmctbWVzc2FnZSBueC1sb2FkaW5nLW1lc3NhZ2UtbmV3XCIsby5zdHlsZS5jb2xvcj1uLm1lc3NhZ2VDb2xvcixvLnN0eWxlLmZvbnRTaXplPW4ubWVzc2FnZUZvbnRTaXplLG8uaW5uZXJIVE1MPWUsaS5hcHBlbmRDaGlsZChvKX19ZWxzZSB5KFwiV2hlcmUgaXMgdGhlIG5ldyBtZXNzYWdlP1wiKX0scT1mdW5jdGlvbigpe3JldHVyblwiW2lkXj1Ob3RpZmxpeEJsb2NrV3JhcF17LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjEwMDA7Zm9udC1mYW1pbHk6XFxcIlF1aWNrc2FuZFxcXCIsLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXFxcIlNlZ29lIFVJXFxcIixSb2JvdG8sXFxcIkhlbHZldGljYSBOZXVlXFxcIixBcmlhbCxzYW5zLXNlcmlmO2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuOSk7dGV4dC1hbGlnbjpjZW50ZXI7YW5pbWF0aW9uLWR1cmF0aW9uOi40czt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2xlZnQ6MDt0b3A6MDtib3JkZXItcmFkaXVzOmluaGVyaXQ7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LWZsZXgtd3JhcDp3cmFwOy1tcy1mbGV4LXdyYXA6d3JhcDtmbGV4LXdyYXA6d3JhcDstd2Via2l0LWJveC1vcmllbnQ6dmVydGljYWw7LXdlYmtpdC1ib3gtZGlyZWN0aW9uOm5vcm1hbDstd2Via2l0LWZsZXgtZGlyZWN0aW9uOmNvbHVtbjstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LXdlYmtpdC1hbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstd2Via2l0LWp1c3RpZnktY29udGVudDpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn1baWRePU5vdGlmbGl4QmxvY2tXcmFwXSAqey13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH1baWRePU5vdGlmbGl4QmxvY2tXcmFwXT5zcGFuW2NsYXNzKj1cXFwiLWljb25cXFwiXXtkaXNwbGF5OmJsb2NrO3dpZHRoOjQ1cHg7aGVpZ2h0OjQ1cHg7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luOjAgYXV0b31baWRePU5vdGlmbGl4QmxvY2tXcmFwXT5zcGFuW2NsYXNzKj1cXFwiLWljb25cXFwiXSBzdmd7d2lkdGg6aW5oZXJpdDtoZWlnaHQ6aW5oZXJpdH1baWRePU5vdGlmbGl4QmxvY2tXcmFwXT5zcGFuW2NsYXNzKj1cXFwiLW1lc3NhZ2VcXFwiXXtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7bWFyZ2luOjEwcHggYXV0byAwO3BhZGRpbmc6MCAxMHB4O2ZvbnQtZmFtaWx5OmluaGVyaXQhaW1wb3J0YW50O2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6MTRweDtsaW5lLWhlaWdodDoxLjR9W2lkXj1Ob3RpZmxpeEJsb2NrV3JhcF0ubngtd2l0aC1hbmltYXRpb257LXdlYmtpdC1hbmltYXRpb246YmxvY2stYW5pbWF0aW9uLWZhZGUgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbDthbmltYXRpb246YmxvY2stYW5pbWF0aW9uLWZhZGUgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbH1ALXdlYmtpdC1rZXlmcmFtZXMgYmxvY2stYW5pbWF0aW9uLWZhZGV7MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGJsb2NrLWFuaW1hdGlvbi1mYWRlezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19W2lkXj1Ob3RpZmxpeEJsb2NrV3JhcF0ubngtd2l0aC1hbmltYXRpb24ubngtcmVtb3Zle29wYWNpdHk6MDstd2Via2l0LWFuaW1hdGlvbjpibG9jay1hbmltYXRpb24tZmFkZS1yZW1vdmUgLjNzIGVhc2UtaW4tb3V0IDBzIG5vcm1hbDthbmltYXRpb246YmxvY2stYW5pbWF0aW9uLWZhZGUtcmVtb3ZlIC4zcyBlYXNlLWluLW91dCAwcyBub3JtYWx9QC13ZWJraXQta2V5ZnJhbWVzIGJsb2NrLWFuaW1hdGlvbi1mYWRlLXJlbW92ZXswJXtvcGFjaXR5OjF9MTAwJXtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgYmxvY2stYW5pbWF0aW9uLWZhZGUtcmVtb3ZlezAle29wYWNpdHk6MX0xMDAle29wYWNpdHk6MH19XCJ9LFE9MCxZPWZ1bmN0aW9uKGUsaSxhLG4scixsKXt2YXIgbTtpZihBcnJheS5pc0FycmF5KGEpKXtpZigxPmEubGVuZ3RoKXJldHVybiB5KFwiQXJyYXkgb2YgSFRNTEVsZW1lbnRzIHNob3VsZCBjb250YWlucyBhdCBsZWFzdCBvbmUgSFRNTEVsZW1lbnQuXCIpLCExO209YX1lbHNlIGlmKE9iamVjdC5wcm90b3R5cGUuaXNQcm90b3R5cGVPZi5jYWxsKE5vZGVMaXN0LnByb3RvdHlwZSxhKSl7aWYoMT5hLmxlbmd0aClyZXR1cm4geShcIk5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+IHNob3VsZCBjb250YWlucyBhdCBsZWFzdCBvbmUgSFRNTEVsZW1lbnQuXCIpLCExO209QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYSl9ZWxzZXt2YXIgYz1cInN0cmluZ1wiIT10eXBlb2YgYXx8MT4oYXx8XCJcIikubGVuZ3RofHwxPT09KGF8fFwiXCIpLmxlbmd0aCYmKFwiI1wiPT09KGF8fFwiXCIpWzBdfHxcIi5cIj09PShhfHxcIlwiKVswXSk7aWYoYylyZXR1cm4geShcIlRoZSBzZWxlY3RvciBwYXJhbWV0ZXIgbXVzdCBiZSBhIHN0cmluZyBhbmQgbWF0Y2hlcyBhIHNwZWNpZmllZCBDU1Mgc2VsZWN0b3IocykuXCIpLCExO3ZhciBwPXQuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChhKTtpZigxPnAubGVuZ3RoKXJldHVybiB5KFwiWW91IGNhbGxlZCB0aGUgXFxcIk5vdGlmbGl4LkJsb2NrLi4uXFxcIiBmdW5jdGlvbiB3aXRoIFxcXCJcIithK1wiXFxcIiBzZWxlY3RvciwgYnV0IHRoZXJlIGlzIG5vIHN1Y2ggZWxlbWVudChzKSBpbiB0aGUgZG9jdW1lbnQuXCIpLCExO209cH1vfHxHLkJsb2NrLmluaXQoe30pO3ZhciBmPXYoITAsbyx7fSk7aWYoXCJvYmplY3RcIj09dHlwZW9mIG4mJiFBcnJheS5pc0FycmF5KG4pfHxcIm9iamVjdFwiPT10eXBlb2YgciYmIUFycmF5LmlzQXJyYXkocikpe3ZhciBkPXt9O1wib2JqZWN0XCI9PXR5cGVvZiBuP2Q9bjpcIm9iamVjdFwiPT10eXBlb2YgciYmKGQ9ciksbz12KCEwLG8sZCl9dmFyIHg9XCJcIjtcInN0cmluZ1wiPT10eXBlb2YgbiYmMDxuLmxlbmd0aCYmKHg9biksby5jc3NBbmltYXRpb258fChvLmNzc0FuaW1hdGlvbkR1cmF0aW9uPTApO3ZhciBnPXUuY2xhc3NOYW1lO1wic3RyaW5nXCI9PXR5cGVvZiBvLmNsYXNzTmFtZSYmKGc9by5jbGFzc05hbWUudHJpbSgpKTt2YXIgaD1cIm51bWJlclwiPT10eXBlb2Ygby5xdWVyeVNlbGVjdG9yTGltaXQ/by5xdWVyeVNlbGVjdG9yTGltaXQ6MjAwLEM9KG18fFtdKS5sZW5ndGg+PWg/aDptLmxlbmd0aCx6PVwibngtYmxvY2stdGVtcG9yYXJ5LXBvc2l0aW9uXCI7aWYoZSl7Zm9yKHZhciBTLEw9W1wiYXJlYVwiLFwiYmFzZVwiLFwiYnJcIixcImNvbFwiLFwiY29tbWFuZFwiLFwiZW1iZWRcIixcImhyXCIsXCJpbWdcIixcImlucHV0XCIsXCJrZXlnZW5cIixcImxpbmtcIixcIm1ldGFcIixcInBhcmFtXCIsXCJzb3VyY2VcIixcInRyYWNrXCIsXCJ3YnJcIixcImh0bWxcIixcImhlYWRcIixcInRpdGxlXCIsXCJzY3JpcHRcIixcInN0eWxlXCIsXCJpZnJhbWVcIl0sWD0wO1g8QztYKyspaWYoUz1tW1hdLFMpe2lmKC0xPEwuaW5kZXhPZihTLnRhZ05hbWUudG9Mb2NhbGVMb3dlckNhc2UoXCJlblwiKSkpYnJlYWs7dmFyIEQ9Uy5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkXj1cIit1LklEK1wiXVwiKTtpZigxPkQubGVuZ3RoKXt2YXIgVD1cIlwiO2kmJihpPT09Yi5Ib3VyZ2xhc3M/VD1JKG8uc3ZnU2l6ZSxvLnN2Z0NvbG9yKTppPT09Yi5DaXJjbGU/VD1SKG8uc3ZnU2l6ZSxvLnN2Z0NvbG9yKTppPT09Yi5BcnJvd3M/VD1BKG8uc3ZnU2l6ZSxvLnN2Z0NvbG9yKTppPT09Yi5Eb3RzP1Q9TShvLnN2Z1NpemUsby5zdmdDb2xvcik6aT09PWIuUHVsc2U/VD1CKG8uc3ZnU2l6ZSxvLnN2Z0NvbG9yKTpUPVcoby5zdmdTaXplLG8uc3ZnQ29sb3IpKTt2YXIgRj1cIjxzcGFuIGNsYXNzPVxcXCJcIitnK1wiLWljb25cXFwiIHN0eWxlPVxcXCJ3aWR0aDpcIitvLnN2Z1NpemUrXCI7aGVpZ2h0OlwiK28uc3ZnU2l6ZStcIjtcXFwiPlwiK1QrXCI8L3NwYW4+XCIsRT1cIlwiOzA8eC5sZW5ndGgmJih4PXgubGVuZ3RoPm8ubWVzc2FnZU1heExlbmd0aD9OKHgpLnN1YnN0cmluZygwLG8ubWVzc2FnZU1heExlbmd0aCkrXCIuLi5cIjpOKHgpLEU9XCI8c3BhbiBzdHlsZT1cXFwiZm9udC1zaXplOlwiK28ubWVzc2FnZUZvbnRTaXplK1wiO2NvbG9yOlwiK28ubWVzc2FnZUNvbG9yK1wiO1xcXCIgY2xhc3M9XFxcIlwiK2crXCItbWVzc2FnZVxcXCI+XCIreCtcIjwvc3Bhbj5cIiksUSsrO3ZhciBqPXQuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtqLmlkPXUuSUQrXCItXCIrUSxqLmNsYXNzTmFtZT1nKyhvLmNzc0FuaW1hdGlvbj9cIiBueC13aXRoLWFuaW1hdGlvblwiOlwiXCIpLGouc3R5bGUucG9zaXRpb249by5wb3NpdGlvbixqLnN0eWxlLnpJbmRleD1vLnppbmRleCxqLnN0eWxlLmJhY2tncm91bmQ9by5iYWNrZ3JvdW5kQ29sb3Isai5zdHlsZS5hbmltYXRpb25EdXJhdGlvbj1vLmNzc0FuaW1hdGlvbkR1cmF0aW9uK1wibXNcIixqLnN0eWxlLmZvbnRGYW1pbHk9XCJcXFwiXCIrby5mb250RmFtaWx5K1wiXFxcIiwgXCIrcyxqLnN0eWxlLmRpc3BsYXk9XCJmbGV4XCIsai5zdHlsZS5mbGV4V3JhcD1cIndyYXBcIixqLnN0eWxlLmZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIixqLnN0eWxlLmFsaWduSXRlbXM9XCJjZW50ZXJcIixqLnN0eWxlLmp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIsby5ydGwmJihqLnNldEF0dHJpYnV0ZShcImRpclwiLFwicnRsXCIpLGouY2xhc3NMaXN0LmFkZChcIm54LXJ0bC1vblwiKSksai5pbm5lckhUTUw9RitFO3ZhciBPPXQuZ2V0Q29tcHV0ZWRTdHlsZShTKS5nZXRQcm9wZXJ0eVZhbHVlKFwicG9zaXRpb25cIiksSD1cInN0cmluZ1wiPT10eXBlb2YgTz9PLnRvTG9jYWxlTG93ZXJDYXNlKFwiZW5cIik6XCJyZWxhdGl2ZVwiLFA9TWF0aC5yb3VuZCgxLjI1KnBhcnNlSW50KG8uc3ZnU2l6ZSkpKzQwLFU9Uy5vZmZzZXRIZWlnaHR8fDAsVj1cIlwiO1A+VSYmKFY9XCJtaW4taGVpZ2h0OlwiK1ArXCJweDtcIik7dmFyIHE9XCJcIjtxPVMuZ2V0QXR0cmlidXRlKFwiaWRcIik/XCIjXCIrUy5nZXRBdHRyaWJ1dGUoXCJpZFwiKTpTLmNsYXNzTGlzdFswXT9cIi5cIitTLmNsYXNzTGlzdFswXTooUy50YWdOYW1lfHxcIlwiKS50b0xvY2FsZUxvd2VyQ2FzZShcImVuXCIpO3ZhciBZPVwiXCIsSz0tMT49W1wiYWJzb2x1dGVcIixcInJlbGF0aXZlXCIsXCJmaXhlZFwiLFwic3RpY2t5XCJdLmluZGV4T2YoSCk7aWYoS3x8MDxWLmxlbmd0aCl7aWYoIXcoXCJoZWFkXCIpKXJldHVybiExO0smJihZPVwicG9zaXRpb246cmVsYXRpdmUhaW1wb3J0YW50O1wiKTt2YXIgJD1cIjxzdHlsZSBpZD1cXFwiU3R5bGUtXCIrdS5JRCtcIi1cIitRK1wiXFxcIj5cIitxK1wiLlwiK3orXCJ7XCIrWStWK1wifTwvc3R5bGU+XCIsSj10LmRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7Si5zZWxlY3ROb2RlKHQuZG9jdW1lbnQuaGVhZCk7dmFyIFo9Si5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoJCk7dC5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKFopLFMuY2xhc3NMaXN0LmFkZCh6KX1TLmFwcGVuZENoaWxkKGopfX19ZWxzZSB2YXIgXz1mdW5jdGlvbihlKXt2YXIgaT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bnVsbCE9PWUucGFyZW50Tm9kZSYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpO3ZhciBhPWUuZ2V0QXR0cmlidXRlKFwiaWRcIiksbj10LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiU3R5bGUtXCIrYSk7biYmbnVsbCE9PW4ucGFyZW50Tm9kZSYmbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG4pLGNsZWFyVGltZW91dChpKX0sby5jc3NBbmltYXRpb25EdXJhdGlvbil9LHR0PWZ1bmN0aW9uKHQpe2lmKHQmJjA8dC5sZW5ndGgpZm9yKHZhciBlLG49MDtuPHQubGVuZ3RoO24rKyllPXRbbl0sZSYmKGUuY2xhc3NMaXN0LmFkZChcIm54LXJlbW92ZVwiKSxfKGUpKTtlbHNlXCJzdHJpbmdcIj09dHlwZW9mIGE/ayhcIlxcXCJOb3RpZmxpeC5CbG9jay5yZW1vdmUoKTtcXFwiIGZ1bmN0aW9uIGNhbGxlZCB3aXRoIFxcXCJcIithK1wiXFxcIiBzZWxlY3RvciwgYnV0IHRoaXMgc2VsZWN0b3IgZG9lcyBub3QgaGF2ZSBhIFxcXCJCbG9ja1xcXCIgZWxlbWVudCB0byByZW1vdmUuXCIpOmsoXCJcXFwiTm90aWZsaXguQmxvY2sucmVtb3ZlKCk7XFxcIiBmdW5jdGlvbiBjYWxsZWQgd2l0aCBcXFwiXCIrYStcIlxcXCIsIGJ1dCB0aGlzIFxcXCJBcnJheTxIVE1MRWxlbWVudD5cXFwiIG9yIFxcXCJOb2RlTGlzdE9mPEhUTUxFbGVtZW50PlxcXCIgZG9lcyBub3QgaGF2ZSBhIFxcXCJCbG9ja1xcXCIgZWxlbWVudCB0byByZW1vdmUuXCIpfSxldD1mdW5jdGlvbih0KXt2YXIgZT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC5jbGFzc0xpc3QucmVtb3ZlKHopLGNsZWFyVGltZW91dChlKX0sby5jc3NBbmltYXRpb25EdXJhdGlvbiszMDApfSxpdD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Zm9yKHZhciB0LGU9MDtlPEM7ZSsrKXQ9bVtlXSx0JiYoZXQodCksRD10LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWRePVwiK3UuSUQrXCJdXCIpLHR0KEQpKTtjbGVhclRpbWVvdXQoaXQpfSxsKTtvPXYoITAsbyxmKX0sRz17Tm90aWZ5Ontpbml0OmZ1bmN0aW9uKHQpe2U9dighMCxtLHQpLGgoRCxcIk5vdGlmbGl4Tm90aWZ5SW50ZXJuYWxDU1NcIil9LG1lcmdlOmZ1bmN0aW9uKHQpe3JldHVybiBlP3ZvaWQoZT12KCEwLGUsdCkpOih5KFwiWW91IGhhdmUgdG8gaW5pdGlhbGl6ZSB0aGUgTm90aWZ5IG1vZHVsZSBiZWZvcmUgY2FsbCBNZXJnZSBmdW5jdGlvbi5cIiksITEpfSxzdWNjZXNzOmZ1bmN0aW9uKHQsZSxpKXtGKGwuU3VjY2Vzcyx0LGUsaSl9LGZhaWx1cmU6ZnVuY3Rpb24odCxlLGkpe0YobC5GYWlsdXJlLHQsZSxpKX0sd2FybmluZzpmdW5jdGlvbih0LGUsaSl7RihsLldhcm5pbmcsdCxlLGkpfSxpbmZvOmZ1bmN0aW9uKHQsZSxpKXtGKGwuSW5mbyx0LGUsaSl9fSxSZXBvcnQ6e2luaXQ6ZnVuY3Rpb24odCl7aT12KCEwLHAsdCksaChFLFwiTm90aWZsaXhSZXBvcnRJbnRlcm5hbENTU1wiKX0sbWVyZ2U6ZnVuY3Rpb24odCl7cmV0dXJuIGk/dm9pZChpPXYoITAsaSx0KSk6KHkoXCJZb3UgaGF2ZSB0byBpbml0aWFsaXplIHRoZSBSZXBvcnQgbW9kdWxlIGJlZm9yZSBjYWxsIE1lcmdlIGZ1bmN0aW9uLlwiKSwhMSl9LHN1Y2Nlc3M6ZnVuY3Rpb24odCxlLGksYSxuKXtqKGMuU3VjY2Vzcyx0LGUsaSxhLG4pfSxmYWlsdXJlOmZ1bmN0aW9uKHQsZSxpLGEsbil7aihjLkZhaWx1cmUsdCxlLGksYSxuKX0sd2FybmluZzpmdW5jdGlvbih0LGUsaSxhLG4pe2ooYy5XYXJuaW5nLHQsZSxpLGEsbil9LGluZm86ZnVuY3Rpb24odCxlLGksYSxuKXtqKGMuSW5mbyx0LGUsaSxhLG4pfX0sQ29uZmlybTp7aW5pdDpmdW5jdGlvbih0KXthPXYoITAsZCx0KSxoKE8sXCJOb3RpZmxpeENvbmZpcm1JbnRlcm5hbENTU1wiKX0sbWVyZ2U6ZnVuY3Rpb24odCl7cmV0dXJuIGE/dm9pZChhPXYoITAsYSx0KSk6KHkoXCJZb3UgaGF2ZSB0byBpbml0aWFsaXplIHRoZSBDb25maXJtIG1vZHVsZSBiZWZvcmUgY2FsbCBNZXJnZSBmdW5jdGlvbi5cIiksITEpfSxzaG93OmZ1bmN0aW9uKHQsZSxpLGEsbixvLHIpe0goZi5TaG93LHQsZSxudWxsLGksYSxuLG8scil9LGFzazpmdW5jdGlvbih0LGUsaSxhLG4sbyxyLHMpe0goZi5Bc2ssdCxlLGksYSxuLG8scixzKX0scHJvbXB0OmZ1bmN0aW9uKHQsZSxpLGEsbixvLHIscyl7SChmLlByb21wdCx0LGUsaSxhLG4sbyxyLHMpfX0sTG9hZGluZzp7aW5pdDpmdW5jdGlvbih0KXtuPXYoITAsZyx0KSxoKFAsXCJOb3RpZmxpeExvYWRpbmdJbnRlcm5hbENTU1wiKX0sbWVyZ2U6ZnVuY3Rpb24odCl7cmV0dXJuIG4/dm9pZChuPXYoITAsbix0KSk6KHkoXCJZb3UgaGF2ZSB0byBpbml0aWFsaXplIHRoZSBMb2FkaW5nIG1vZHVsZSBiZWZvcmUgY2FsbCBNZXJnZSBmdW5jdGlvbi5cIiksITEpfSxzdGFuZGFyZDpmdW5jdGlvbih0LGUpe1UoeC5TdGFuZGFyZCx0LGUsITAsMCl9LGhvdXJnbGFzczpmdW5jdGlvbih0LGUpe1UoeC5Ib3VyZ2xhc3MsdCxlLCEwLDApfSxjaXJjbGU6ZnVuY3Rpb24odCxlKXtVKHguQ2lyY2xlLHQsZSwhMCwwKX0sYXJyb3dzOmZ1bmN0aW9uKHQsZSl7VSh4LkFycm93cyx0LGUsITAsMCl9LGRvdHM6ZnVuY3Rpb24odCxlKXtVKHguRG90cyx0LGUsITAsMCl9LHB1bHNlOmZ1bmN0aW9uKHQsZSl7VSh4LlB1bHNlLHQsZSwhMCwwKX0sY3VzdG9tOmZ1bmN0aW9uKHQsZSl7VSh4LkN1c3RvbSx0LGUsITAsMCl9LG5vdGlmbGl4OmZ1bmN0aW9uKHQsZSl7VSh4Lk5vdGlmbGl4LHQsZSwhMCwwKX0scmVtb3ZlOmZ1bmN0aW9uKHQpe1wibnVtYmVyXCIhPXR5cGVvZiB0JiYodD0wKSxVKG51bGwsbnVsbCxudWxsLCExLHQpfSxjaGFuZ2U6ZnVuY3Rpb24odCl7Vih0KX19LEJsb2NrOntpbml0OmZ1bmN0aW9uKHQpe289dighMCx1LHQpLGgocSxcIk5vdGlmbGl4QmxvY2tJbnRlcm5hbENTU1wiKX0sbWVyZ2U6ZnVuY3Rpb24odCl7cmV0dXJuIG8/dm9pZChvPXYoITAsbyx0KSk6KHkoXCJZb3UgaGF2ZSB0byBpbml0aWFsaXplIHRoZSBcXFwiTm90aWZsaXguQmxvY2tcXFwiIG1vZHVsZSBiZWZvcmUgY2FsbCBNZXJnZSBmdW5jdGlvbi5cIiksITEpfSxzdGFuZGFyZDpmdW5jdGlvbih0LGUsaSl7WSghMCxiLlN0YW5kYXJkLHQsZSxpKX0saG91cmdsYXNzOmZ1bmN0aW9uKHQsZSxpKXtZKCEwLGIuSG91cmdsYXNzLHQsZSxpKX0sY2lyY2xlOmZ1bmN0aW9uKHQsZSxpKXtZKCEwLGIuQ2lyY2xlLHQsZSxpKX0sYXJyb3dzOmZ1bmN0aW9uKHQsZSxpKXtZKCEwLGIuQXJyb3dzLHQsZSxpKX0sZG90czpmdW5jdGlvbih0LGUsaSl7WSghMCxiLkRvdHMsdCxlLGkpfSxwdWxzZTpmdW5jdGlvbih0LGUsaSl7WSghMCxiLlB1bHNlLHQsZSxpKX0scmVtb3ZlOmZ1bmN0aW9uKHQsZSl7XCJudW1iZXJcIiE9dHlwZW9mIGUmJihlPTApLFkoITEsbnVsbCx0LG51bGwsbnVsbCxlKX19fTtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgdC5Ob3RpZmxpeD92KCEwLHQuTm90aWZsaXgse05vdGlmeTpHLk5vdGlmeSxSZXBvcnQ6Ry5SZXBvcnQsQ29uZmlybTpHLkNvbmZpcm0sTG9hZGluZzpHLkxvYWRpbmcsQmxvY2s6Ry5CbG9ja30pOntOb3RpZnk6Ry5Ob3RpZnksUmVwb3J0OkcuUmVwb3J0LENvbmZpcm06Ry5Db25maXJtLExvYWRpbmc6Ry5Mb2FkaW5nLEJsb2NrOkcuQmxvY2t9fSk7IiwiaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBodHRwQWRhcHRlciBmcm9tICcuL2h0dHAuanMnO1xuaW1wb3J0IHhockFkYXB0ZXIgZnJvbSAnLi94aHIuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSBcIi4uL2NvcmUvQXhpb3NFcnJvci5qc1wiO1xuXG5jb25zdCBrbm93bkFkYXB0ZXJzID0ge1xuICBodHRwOiBodHRwQWRhcHRlcixcbiAgeGhyOiB4aHJBZGFwdGVyXG59XG5cbnV0aWxzLmZvckVhY2goa25vd25BZGFwdGVycywgKGZuLCB2YWx1ZSkgPT4ge1xuICBpZiAoZm4pIHtcbiAgICB0cnkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCAnbmFtZScsIHt2YWx1ZX0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sICdhZGFwdGVyTmFtZScsIHt2YWx1ZX0pO1xuICB9XG59KTtcblxuY29uc3QgcmVuZGVyUmVhc29uID0gKHJlYXNvbikgPT4gYC0gJHtyZWFzb259YDtcblxuY29uc3QgaXNSZXNvbHZlZEhhbmRsZSA9IChhZGFwdGVyKSA9PiB1dGlscy5pc0Z1bmN0aW9uKGFkYXB0ZXIpIHx8IGFkYXB0ZXIgPT09IG51bGwgfHwgYWRhcHRlciA9PT0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0QWRhcHRlcjogKGFkYXB0ZXJzKSA9PiB7XG4gICAgYWRhcHRlcnMgPSB1dGlscy5pc0FycmF5KGFkYXB0ZXJzKSA/IGFkYXB0ZXJzIDogW2FkYXB0ZXJzXTtcblxuICAgIGNvbnN0IHtsZW5ndGh9ID0gYWRhcHRlcnM7XG4gICAgbGV0IG5hbWVPckFkYXB0ZXI7XG4gICAgbGV0IGFkYXB0ZXI7XG5cbiAgICBjb25zdCByZWplY3RlZFJlYXNvbnMgPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIG5hbWVPckFkYXB0ZXIgPSBhZGFwdGVyc1tpXTtcbiAgICAgIGxldCBpZDtcblxuICAgICAgYWRhcHRlciA9IG5hbWVPckFkYXB0ZXI7XG5cbiAgICAgIGlmICghaXNSZXNvbHZlZEhhbmRsZShuYW1lT3JBZGFwdGVyKSkge1xuICAgICAgICBhZGFwdGVyID0ga25vd25BZGFwdGVyc1soaWQgPSBTdHJpbmcobmFtZU9yQWRhcHRlcikpLnRvTG93ZXJDYXNlKCldO1xuXG4gICAgICAgIGlmIChhZGFwdGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcihgVW5rbm93biBhZGFwdGVyICcke2lkfSdgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoYWRhcHRlcikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmVqZWN0ZWRSZWFzb25zW2lkIHx8ICcjJyArIGldID0gYWRhcHRlcjtcbiAgICB9XG5cbiAgICBpZiAoIWFkYXB0ZXIpIHtcblxuICAgICAgY29uc3QgcmVhc29ucyA9IE9iamVjdC5lbnRyaWVzKHJlamVjdGVkUmVhc29ucylcbiAgICAgICAgLm1hcCgoW2lkLCBzdGF0ZV0pID0+IGBhZGFwdGVyICR7aWR9IGAgK1xuICAgICAgICAgIChzdGF0ZSA9PT0gZmFsc2UgPyAnaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgZW52aXJvbm1lbnQnIDogJ2lzIG5vdCBhdmFpbGFibGUgaW4gdGhlIGJ1aWxkJylcbiAgICAgICAgKTtcblxuICAgICAgbGV0IHMgPSBsZW5ndGggP1xuICAgICAgICAocmVhc29ucy5sZW5ndGggPiAxID8gJ3NpbmNlIDpcXG4nICsgcmVhc29ucy5tYXAocmVuZGVyUmVhc29uKS5qb2luKCdcXG4nKSA6ICcgJyArIHJlbmRlclJlYXNvbihyZWFzb25zWzBdKSkgOlxuICAgICAgICAnYXMgbm8gYWRhcHRlciBzcGVjaWZpZWQnO1xuXG4gICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcihcbiAgICAgICAgYFRoZXJlIGlzIG5vIHN1aXRhYmxlIGFkYXB0ZXIgdG8gZGlzcGF0Y2ggdGhlIHJlcXVlc3QgYCArIHMsXG4gICAgICAgICdFUlJfTk9UX1NVUFBPUlQnXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBhZGFwdGVyO1xuICB9LFxuICBhZGFwdGVyczoga25vd25BZGFwdGVyc1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5pbXBvcnQgc2V0dGxlIGZyb20gJy4vLi4vY29yZS9zZXR0bGUuanMnO1xuaW1wb3J0IGNvb2tpZXMgZnJvbSAnLi8uLi9oZWxwZXJzL2Nvb2tpZXMuanMnO1xuaW1wb3J0IGJ1aWxkVVJMIGZyb20gJy4vLi4vaGVscGVycy9idWlsZFVSTC5qcyc7XG5pbXBvcnQgYnVpbGRGdWxsUGF0aCBmcm9tICcuLi9jb3JlL2J1aWxkRnVsbFBhdGguanMnO1xuaW1wb3J0IGlzVVJMU2FtZU9yaWdpbiBmcm9tICcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzJztcbmltcG9ydCB0cmFuc2l0aW9uYWxEZWZhdWx0cyBmcm9tICcuLi9kZWZhdWx0cy90cmFuc2l0aW9uYWwuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcbmltcG9ydCBDYW5jZWxlZEVycm9yIGZyb20gJy4uL2NhbmNlbC9DYW5jZWxlZEVycm9yLmpzJztcbmltcG9ydCBwYXJzZVByb3RvY29sIGZyb20gJy4uL2hlbHBlcnMvcGFyc2VQcm90b2NvbC5qcyc7XG5pbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXguanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tICcuLi9jb3JlL0F4aW9zSGVhZGVycy5qcyc7XG5pbXBvcnQgc3BlZWRvbWV0ZXIgZnJvbSAnLi4vaGVscGVycy9zcGVlZG9tZXRlci5qcyc7XG5cbmZ1bmN0aW9uIHByb2dyZXNzRXZlbnRSZWR1Y2VyKGxpc3RlbmVyLCBpc0Rvd25sb2FkU3RyZWFtKSB7XG4gIGxldCBieXRlc05vdGlmaWVkID0gMDtcbiAgY29uc3QgX3NwZWVkb21ldGVyID0gc3BlZWRvbWV0ZXIoNTAsIDI1MCk7XG5cbiAgcmV0dXJuIGUgPT4ge1xuICAgIGNvbnN0IGxvYWRlZCA9IGUubG9hZGVkO1xuICAgIGNvbnN0IHRvdGFsID0gZS5sZW5ndGhDb21wdXRhYmxlID8gZS50b3RhbCA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBwcm9ncmVzc0J5dGVzID0gbG9hZGVkIC0gYnl0ZXNOb3RpZmllZDtcbiAgICBjb25zdCByYXRlID0gX3NwZWVkb21ldGVyKHByb2dyZXNzQnl0ZXMpO1xuICAgIGNvbnN0IGluUmFuZ2UgPSBsb2FkZWQgPD0gdG90YWw7XG5cbiAgICBieXRlc05vdGlmaWVkID0gbG9hZGVkO1xuXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGxvYWRlZCxcbiAgICAgIHRvdGFsLFxuICAgICAgcHJvZ3Jlc3M6IHRvdGFsID8gKGxvYWRlZCAvIHRvdGFsKSA6IHVuZGVmaW5lZCxcbiAgICAgIGJ5dGVzOiBwcm9ncmVzc0J5dGVzLFxuICAgICAgcmF0ZTogcmF0ZSA/IHJhdGUgOiB1bmRlZmluZWQsXG4gICAgICBlc3RpbWF0ZWQ6IHJhdGUgJiYgdG90YWwgJiYgaW5SYW5nZSA/ICh0b3RhbCAtIGxvYWRlZCkgLyByYXRlIDogdW5kZWZpbmVkLFxuICAgICAgZXZlbnQ6IGVcbiAgICB9O1xuXG4gICAgZGF0YVtpc0Rvd25sb2FkU3RyZWFtID8gJ2Rvd25sb2FkJyA6ICd1cGxvYWQnXSA9IHRydWU7XG5cbiAgICBsaXN0ZW5lcihkYXRhKTtcbiAgfTtcbn1cblxuY29uc3QgaXNYSFJBZGFwdGVyU3VwcG9ydGVkID0gdHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJztcblxuZXhwb3J0IGRlZmF1bHQgaXNYSFJBZGFwdGVyU3VwcG9ydGVkICYmIGZ1bmN0aW9uIChjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBsZXQgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICBjb25zdCByZXF1ZXN0SGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKGNvbmZpZy5oZWFkZXJzKS5ub3JtYWxpemUoKTtcbiAgICBsZXQge3Jlc3BvbnNlVHlwZSwgd2l0aFhTUkZUb2tlbn0gPSBjb25maWc7XG4gICAgbGV0IG9uQ2FuY2VsZWQ7XG4gICAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnVuc3Vic2NyaWJlKG9uQ2FuY2VsZWQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLnNpZ25hbCkge1xuICAgICAgICBjb25maWcuc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25DYW5jZWxlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnRUeXBlO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBpZiAocGxhdGZvcm0uaGFzU3RhbmRhcmRCcm93c2VyRW52IHx8IHBsYXRmb3JtLmhhc1N0YW5kYXJkQnJvd3NlcldlYldvcmtlckVudikge1xuICAgICAgICByZXF1ZXN0SGVhZGVycy5zZXRDb250ZW50VHlwZShmYWxzZSk7IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICAgIH0gZWxzZSBpZiAoKGNvbnRlbnRUeXBlID0gcmVxdWVzdEhlYWRlcnMuZ2V0Q29udGVudFR5cGUoKSkgIT09IGZhbHNlKSB7XG4gICAgICAgIC8vIGZpeCBzZW1pY29sb24gZHVwbGljYXRpb24gaXNzdWUgZm9yIFJlYWN0TmF0aXZlIEZvcm1EYXRhIGltcGxlbWVudGF0aW9uXG4gICAgICAgIGNvbnN0IFt0eXBlLCAuLi50b2tlbnNdID0gY29udGVudFR5cGUgPyBjb250ZW50VHlwZS5zcGxpdCgnOycpLm1hcCh0b2tlbiA9PiB0b2tlbi50cmltKCkpLmZpbHRlcihCb29sZWFuKSA6IFtdO1xuICAgICAgICByZXF1ZXN0SGVhZGVycy5zZXRDb250ZW50VHlwZShbdHlwZSB8fCAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsIC4uLnRva2Vuc10uam9pbignOyAnKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIGNvbnN0IHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICBjb25zdCBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkID8gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGNvbmZpZy5hdXRoLnBhc3N3b3JkKSkgOiAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLnNldCgnQXV0aG9yaXphdGlvbicsICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKSk7XG4gICAgfVxuXG4gICAgY29uc3QgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcblxuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGZ1bGxQYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIGZ1bmN0aW9uIG9ubG9hZGVuZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgY29uc3QgcmVzcG9uc2VIZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20oXG4gICAgICAgICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgJiYgcmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9ICFyZXNwb25zZVR5cGUgfHwgcmVzcG9uc2VUeXBlID09PSAndGV4dCcgfHwgcmVzcG9uc2VUeXBlID09PSAnanNvbicgP1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICBjb25zdCByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUoZnVuY3Rpb24gX3Jlc29sdmUodmFsdWUpIHtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0sIGZ1bmN0aW9uIF9yZWplY3QoZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICBkb25lKCk7XG4gICAgICB9LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICgnb25sb2FkZW5kJyBpbiByZXF1ZXN0KSB7XG4gICAgICAvLyBVc2Ugb25sb2FkZW5kIGlmIGF2YWlsYWJsZVxuICAgICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBvbmxvYWRlbmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGUgdG8gZW11bGF0ZSBvbmxvYWRlbmRcbiAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyByZWFkeXN0YXRlIGhhbmRsZXIgaXMgY2FsbGluZyBiZWZvcmUgb25lcnJvciBvciBvbnRpbWVvdXQgaGFuZGxlcnMsXG4gICAgICAgIC8vIHNvIHdlIHNob3VsZCBjYWxsIG9ubG9hZGVuZCBvbiB0aGUgbmV4dCAndGljaydcbiAgICAgICAgc2V0VGltZW91dChvbmxvYWRlbmQpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIEF4aW9zRXJyb3IuRUNPTk5BQk9SVEVELCBjb25maWcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBBeGlvc0Vycm9yLkVSUl9ORVRXT1JLLCBjb25maWcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgbGV0IHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dCA/ICd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcgOiAndGltZW91dCBleGNlZWRlZCc7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uYWwgPSBjb25maWcudHJhbnNpdGlvbmFsIHx8IHRyYW5zaXRpb25hbERlZmF1bHRzO1xuICAgICAgaWYgKGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dEVycm9yTWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIHJlamVjdChuZXcgQXhpb3NFcnJvcihcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSxcbiAgICAgICAgdHJhbnNpdGlvbmFsLmNsYXJpZnlUaW1lb3V0RXJyb3IgPyBBeGlvc0Vycm9yLkVUSU1FRE9VVCA6IEF4aW9zRXJyb3IuRUNPTk5BQk9SVEVELFxuICAgICAgICBjb25maWcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYocGxhdGZvcm0uaGFzU3RhbmRhcmRCcm93c2VyRW52KSB7XG4gICAgICB3aXRoWFNSRlRva2VuICYmIHV0aWxzLmlzRnVuY3Rpb24od2l0aFhTUkZUb2tlbikgJiYgKHdpdGhYU1JGVG9rZW4gPSB3aXRoWFNSRlRva2VuKGNvbmZpZykpO1xuXG4gICAgICBpZiAod2l0aFhTUkZUb2tlbiB8fCAod2l0aFhTUkZUb2tlbiAhPT0gZmFsc2UgJiYgaXNVUkxTYW1lT3JpZ2luKGZ1bGxQYXRoKSkpIHtcbiAgICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICAgIGNvbnN0IHhzcmZWYWx1ZSA9IGNvbmZpZy54c3JmSGVhZGVyTmFtZSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgJiYgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSk7XG5cbiAgICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICAgIHJlcXVlc3RIZWFkZXJzLnNldChjb25maWcueHNyZkhlYWRlck5hbWUsIHhzcmZWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgcmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCAmJiByZXF1ZXN0SGVhZGVycy5zZXRDb250ZW50VHlwZShudWxsKTtcblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLnRvSlNPTigpLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcud2l0aENyZWRlbnRpYWxzKSkge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSAhIWNvbmZpZy53aXRoQ3JlZGVudGlhbHM7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChyZXNwb25zZVR5cGUgJiYgcmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgcHJvZ3Jlc3NFdmVudFJlZHVjZXIoY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcywgdHJ1ZSkpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBwcm9ncmVzc0V2ZW50UmVkdWNlcihjb25maWcub25VcGxvYWRQcm9ncmVzcykpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4gfHwgY29uZmlnLnNpZ25hbCkge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgICAgIG9uQ2FuY2VsZWQgPSBjYW5jZWwgPT4ge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVqZWN0KCFjYW5jZWwgfHwgY2FuY2VsLnR5cGUgPyBuZXcgQ2FuY2VsZWRFcnJvcihudWxsLCBjb25maWcsIHJlcXVlc3QpIDogY2FuY2VsKTtcbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH07XG5cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbiAmJiBjb25maWcuY2FuY2VsVG9rZW4uc3Vic2NyaWJlKG9uQ2FuY2VsZWQpO1xuICAgICAgaWYgKGNvbmZpZy5zaWduYWwpIHtcbiAgICAgICAgY29uZmlnLnNpZ25hbC5hYm9ydGVkID8gb25DYW5jZWxlZCgpIDogY29uZmlnLnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uQ2FuY2VsZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHByb3RvY29sID0gcGFyc2VQcm90b2NvbChmdWxsUGF0aCk7XG5cbiAgICBpZiAocHJvdG9jb2wgJiYgcGxhdGZvcm0ucHJvdG9jb2xzLmluZGV4T2YocHJvdG9jb2wpID09PSAtMSkge1xuICAgICAgcmVqZWN0KG5ldyBBeGlvc0Vycm9yKCdVbnN1cHBvcnRlZCBwcm90b2NvbCAnICsgcHJvdG9jb2wgKyAnOicsIEF4aW9zRXJyb3IuRVJSX0JBRF9SRVFVRVNULCBjb25maWcpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEgfHwgbnVsbCk7XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgYmluZCBmcm9tICcuL2hlbHBlcnMvYmluZC5qcyc7XG5pbXBvcnQgQXhpb3MgZnJvbSAnLi9jb3JlL0F4aW9zLmpzJztcbmltcG9ydCBtZXJnZUNvbmZpZyBmcm9tICcuL2NvcmUvbWVyZ2VDb25maWcuanMnO1xuaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4vZGVmYXVsdHMvaW5kZXguanMnO1xuaW1wb3J0IGZvcm1EYXRhVG9KU09OIGZyb20gJy4vaGVscGVycy9mb3JtRGF0YVRvSlNPTi5qcyc7XG5pbXBvcnQgQ2FuY2VsZWRFcnJvciBmcm9tICcuL2NhbmNlbC9DYW5jZWxlZEVycm9yLmpzJztcbmltcG9ydCBDYW5jZWxUb2tlbiBmcm9tICcuL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyc7XG5pbXBvcnQgaXNDYW5jZWwgZnJvbSAnLi9jYW5jZWwvaXNDYW5jZWwuanMnO1xuaW1wb3J0IHtWRVJTSU9OfSBmcm9tICcuL2Vudi9kYXRhLmpzJztcbmltcG9ydCB0b0Zvcm1EYXRhIGZyb20gJy4vaGVscGVycy90b0Zvcm1EYXRhLmpzJztcbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4vY29yZS9BeGlvc0Vycm9yLmpzJztcbmltcG9ydCBzcHJlYWQgZnJvbSAnLi9oZWxwZXJzL3NwcmVhZC5qcyc7XG5pbXBvcnQgaXNBeGlvc0Vycm9yIGZyb20gJy4vaGVscGVycy9pc0F4aW9zRXJyb3IuanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tIFwiLi9jb3JlL0F4aW9zSGVhZGVycy5qc1wiO1xuaW1wb3J0IGFkYXB0ZXJzIGZyb20gJy4vYWRhcHRlcnMvYWRhcHRlcnMuanMnO1xuaW1wb3J0IEh0dHBTdGF0dXNDb2RlIGZyb20gJy4vaGVscGVycy9IdHRwU3RhdHVzQ29kZS5qcyc7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqXG4gKiBAcmV0dXJucyB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgY29uc3QgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgY29uc3QgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCwge2FsbE93bktleXM6IHRydWV9KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0LCBudWxsLCB7YWxsT3duS2V5czogdHJ1ZX0pO1xuXG4gIC8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbiAgaW5zdGFuY2UuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGRlZmF1bHRDb25maWcsIGluc3RhbmNlQ29uZmlnKSk7XG4gIH07XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbmNvbnN0IGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsZWRFcnJvciA9IENhbmNlbGVkRXJyb3I7XG5heGlvcy5DYW5jZWxUb2tlbiA9IENhbmNlbFRva2VuO1xuYXhpb3MuaXNDYW5jZWwgPSBpc0NhbmNlbDtcbmF4aW9zLlZFUlNJT04gPSBWRVJTSU9OO1xuYXhpb3MudG9Gb3JtRGF0YSA9IHRvRm9ybURhdGE7XG5cbi8vIEV4cG9zZSBBeGlvc0Vycm9yIGNsYXNzXG5heGlvcy5BeGlvc0Vycm9yID0gQXhpb3NFcnJvcjtcblxuLy8gYWxpYXMgZm9yIENhbmNlbGVkRXJyb3IgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbmF4aW9zLkNhbmNlbCA9IGF4aW9zLkNhbmNlbGVkRXJyb3I7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5cbmF4aW9zLnNwcmVhZCA9IHNwcmVhZDtcblxuLy8gRXhwb3NlIGlzQXhpb3NFcnJvclxuYXhpb3MuaXNBeGlvc0Vycm9yID0gaXNBeGlvc0Vycm9yO1xuXG4vLyBFeHBvc2UgbWVyZ2VDb25maWdcbmF4aW9zLm1lcmdlQ29uZmlnID0gbWVyZ2VDb25maWc7XG5cbmF4aW9zLkF4aW9zSGVhZGVycyA9IEF4aW9zSGVhZGVycztcblxuYXhpb3MuZm9ybVRvSlNPTiA9IHRoaW5nID0+IGZvcm1EYXRhVG9KU09OKHV0aWxzLmlzSFRNTEZvcm0odGhpbmcpID8gbmV3IEZvcm1EYXRhKHRoaW5nKSA6IHRoaW5nKTtcblxuYXhpb3MuZ2V0QWRhcHRlciA9IGFkYXB0ZXJzLmdldEFkYXB0ZXI7XG5cbmF4aW9zLkh0dHBTdGF0dXNDb2RlID0gSHR0cFN0YXR1c0NvZGU7XG5cbmF4aW9zLmRlZmF1bHQgPSBheGlvcztcblxuLy8gdGhpcyBtb2R1bGUgc2hvdWxkIG9ubHkgaGF2ZSBhIGRlZmF1bHQgZXhwb3J0XG5leHBvcnQgZGVmYXVsdCBheGlvc1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQ2FuY2VsZWRFcnJvciBmcm9tICcuL0NhbmNlbGVkRXJyb3IuanMnO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICpcbiAqIEByZXR1cm5zIHtDYW5jZWxUb2tlbn1cbiAqL1xuY2xhc3MgQ2FuY2VsVG9rZW4ge1xuICBjb25zdHJ1Y3RvcihleGVjdXRvcikge1xuICAgIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBsZXQgcmVzb2x2ZVByb21pc2U7XG5cbiAgICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdG9rZW4gPSB0aGlzO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgICB0aGlzLnByb21pc2UudGhlbihjYW5jZWwgPT4ge1xuICAgICAgaWYgKCF0b2tlbi5fbGlzdGVuZXJzKSByZXR1cm47XG5cbiAgICAgIGxldCBpID0gdG9rZW4uX2xpc3RlbmVycy5sZW5ndGg7XG5cbiAgICAgIHdoaWxlIChpLS0gPiAwKSB7XG4gICAgICAgIHRva2VuLl9saXN0ZW5lcnNbaV0oY2FuY2VsKTtcbiAgICAgIH1cbiAgICAgIHRva2VuLl9saXN0ZW5lcnMgPSBudWxsO1xuICAgIH0pO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgICB0aGlzLnByb21pc2UudGhlbiA9IG9uZnVsZmlsbGVkID0+IHtcbiAgICAgIGxldCBfcmVzb2x2ZTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIHRva2VuLnN1YnNjcmliZShyZXNvbHZlKTtcbiAgICAgICAgX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgfSkudGhlbihvbmZ1bGZpbGxlZCk7XG5cbiAgICAgIHByb21pc2UuY2FuY2VsID0gZnVuY3Rpb24gcmVqZWN0KCkge1xuICAgICAgICB0b2tlbi51bnN1YnNjcmliZShfcmVzb2x2ZSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UsIGNvbmZpZywgcmVxdWVzdCkge1xuICAgICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsZWRFcnJvcihtZXNzYWdlLCBjb25maWcsIHJlcXVlc3QpO1xuICAgICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaHJvd3MgYSBgQ2FuY2VsZWRFcnJvcmAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAgICovXG4gIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gICAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIHRoZSBjYW5jZWwgc2lnbmFsXG4gICAqL1xuXG4gIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIGlmICh0aGlzLnJlYXNvbikge1xuICAgICAgbGlzdGVuZXIodGhpcy5yZWFzb24pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9saXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzID0gW2xpc3RlbmVyXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVW5zdWJzY3JpYmUgZnJvbSB0aGUgY2FuY2VsIHNpZ25hbFxuICAgKi9cblxuICB1bnN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIGlmICghdGhpcy5fbGlzdGVuZXJzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fbGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gICAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gICAqL1xuICBzdGF0aWMgc291cmNlKCkge1xuICAgIGxldCBjYW5jZWw7XG4gICAgY29uc3QgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgICAgY2FuY2VsID0gYztcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgdG9rZW4sXG4gICAgICBjYW5jZWxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBBIGBDYW5jZWxlZEVycm9yYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3Q9fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7T2JqZWN0PX0gcmVxdWVzdCBUaGUgcmVxdWVzdC5cbiAqXG4gKiBAcmV0dXJucyB7Q2FuY2VsZWRFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbGVkRXJyb3IobWVzc2FnZSwgY29uZmlnLCByZXF1ZXN0KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lcS1udWxsLGVxZXFlcVxuICBBeGlvc0Vycm9yLmNhbGwodGhpcywgbWVzc2FnZSA9PSBudWxsID8gJ2NhbmNlbGVkJyA6IG1lc3NhZ2UsIEF4aW9zRXJyb3IuRVJSX0NBTkNFTEVELCBjb25maWcsIHJlcXVlc3QpO1xuICB0aGlzLm5hbWUgPSAnQ2FuY2VsZWRFcnJvcic7XG59XG5cbnV0aWxzLmluaGVyaXRzKENhbmNlbGVkRXJyb3IsIEF4aW9zRXJyb3IsIHtcbiAgX19DQU5DRUxfXzogdHJ1ZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENhbmNlbGVkRXJyb3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuaW1wb3J0IGJ1aWxkVVJMIGZyb20gJy4uL2hlbHBlcnMvYnVpbGRVUkwuanMnO1xuaW1wb3J0IEludGVyY2VwdG9yTWFuYWdlciBmcm9tICcuL0ludGVyY2VwdG9yTWFuYWdlci5qcyc7XG5pbXBvcnQgZGlzcGF0Y2hSZXF1ZXN0IGZyb20gJy4vZGlzcGF0Y2hSZXF1ZXN0LmpzJztcbmltcG9ydCBtZXJnZUNvbmZpZyBmcm9tICcuL21lcmdlQ29uZmlnLmpzJztcbmltcG9ydCBidWlsZEZ1bGxQYXRoIGZyb20gJy4vYnVpbGRGdWxsUGF0aC5qcyc7XG5pbXBvcnQgdmFsaWRhdG9yIGZyb20gJy4uL2hlbHBlcnMvdmFsaWRhdG9yLmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSAnLi9BeGlvc0hlYWRlcnMuanMnO1xuXG5jb25zdCB2YWxpZGF0b3JzID0gdmFsaWRhdG9yLnZhbGlkYXRvcnM7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKlxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmNsYXNzIEF4aW9zIHtcbiAgY29uc3RydWN0b3IoaW5zdGFuY2VDb25maWcpIHtcbiAgICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gICAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBjb25maWdPclVybCBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gICAqIEBwYXJhbSB7P09iamVjdH0gY29uZmlnXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAgICovXG4gIHJlcXVlc3QoY29uZmlnT3JVcmwsIGNvbmZpZykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgICBpZiAodHlwZW9mIGNvbmZpZ09yVXJsID09PSAnc3RyaW5nJykge1xuICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgICAgY29uZmlnLnVybCA9IGNvbmZpZ09yVXJsO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcgPSBjb25maWdPclVybCB8fCB7fTtcbiAgICB9XG5cbiAgICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuXG4gICAgY29uc3Qge3RyYW5zaXRpb25hbCwgcGFyYW1zU2VyaWFsaXplciwgaGVhZGVyc30gPSBjb25maWc7XG5cbiAgICBpZiAodHJhbnNpdGlvbmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhbGlkYXRvci5hc3NlcnRPcHRpb25zKHRyYW5zaXRpb25hbCwge1xuICAgICAgICBzaWxlbnRKU09OUGFyc2luZzogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKSxcbiAgICAgICAgZm9yY2VkSlNPTlBhcnNpbmc6IHZhbGlkYXRvcnMudHJhbnNpdGlvbmFsKHZhbGlkYXRvcnMuYm9vbGVhbiksXG4gICAgICAgIGNsYXJpZnlUaW1lb3V0RXJyb3I6IHZhbGlkYXRvcnMudHJhbnNpdGlvbmFsKHZhbGlkYXRvcnMuYm9vbGVhbilcbiAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zU2VyaWFsaXplciAhPSBudWxsKSB7XG4gICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihwYXJhbXNTZXJpYWxpemVyKSkge1xuICAgICAgICBjb25maWcucGFyYW1zU2VyaWFsaXplciA9IHtcbiAgICAgICAgICBzZXJpYWxpemU6IHBhcmFtc1NlcmlhbGl6ZXJcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWRhdG9yLmFzc2VydE9wdGlvbnMocGFyYW1zU2VyaWFsaXplciwge1xuICAgICAgICAgIGVuY29kZTogdmFsaWRhdG9ycy5mdW5jdGlvbixcbiAgICAgICAgICBzZXJpYWxpemU6IHZhbGlkYXRvcnMuZnVuY3Rpb25cbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2V0IGNvbmZpZy5tZXRob2RcbiAgICBjb25maWcubWV0aG9kID0gKGNvbmZpZy5tZXRob2QgfHwgdGhpcy5kZWZhdWx0cy5tZXRob2QgfHwgJ2dldCcpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgICBsZXQgY29udGV4dEhlYWRlcnMgPSBoZWFkZXJzICYmIHV0aWxzLm1lcmdlKFxuICAgICAgaGVhZGVycy5jb21tb24sXG4gICAgICBoZWFkZXJzW2NvbmZpZy5tZXRob2RdXG4gICAgKTtcblxuICAgIGhlYWRlcnMgJiYgdXRpbHMuZm9yRWFjaChcbiAgICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgICAgKG1ldGhvZCkgPT4ge1xuICAgICAgICBkZWxldGUgaGVhZGVyc1ttZXRob2RdO1xuICAgICAgfVxuICAgICk7XG5cbiAgICBjb25maWcuaGVhZGVycyA9IEF4aW9zSGVhZGVycy5jb25jYXQoY29udGV4dEhlYWRlcnMsIGhlYWRlcnMpO1xuXG4gICAgLy8gZmlsdGVyIG91dCBza2lwcGVkIGludGVyY2VwdG9yc1xuICAgIGNvbnN0IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluID0gW107XG4gICAgbGV0IHN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycyA9IHRydWU7XG4gICAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgICBpZiAodHlwZW9mIGludGVyY2VwdG9yLnJ1bldoZW4gPT09ICdmdW5jdGlvbicgJiYgaW50ZXJjZXB0b3IucnVuV2hlbihjb25maWcpID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycyA9IHN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycyAmJiBpbnRlcmNlcHRvci5zeW5jaHJvbm91cztcblxuICAgICAgcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbiA9IFtdO1xuICAgIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgICByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgICB9KTtcblxuICAgIGxldCBwcm9taXNlO1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgbGVuO1xuXG4gICAgaWYgKCFzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMpIHtcbiAgICAgIGNvbnN0IGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdC5iaW5kKHRoaXMpLCB1bmRlZmluZWRdO1xuICAgICAgY2hhaW4udW5zaGlmdC5hcHBseShjaGFpbiwgcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4pO1xuICAgICAgY2hhaW4ucHVzaC5hcHBseShjaGFpbiwgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluKTtcbiAgICAgIGxlbiA9IGNoYWluLmxlbmd0aDtcblxuICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gICAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluW2krK10sIGNoYWluW2krK10pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG5cbiAgICBsZW4gPSByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbi5sZW5ndGg7XG5cbiAgICBsZXQgbmV3Q29uZmlnID0gY29uZmlnO1xuXG4gICAgaSA9IDA7XG5cbiAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgY29uc3Qgb25GdWxmaWxsZWQgPSByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbltpKytdO1xuICAgICAgY29uc3Qgb25SZWplY3RlZCA9IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluW2krK107XG4gICAgICB0cnkge1xuICAgICAgICBuZXdDb25maWcgPSBvbkZ1bGZpbGxlZChuZXdDb25maWcpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgb25SZWplY3RlZC5jYWxsKHRoaXMsIGVycm9yKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHByb21pc2UgPSBkaXNwYXRjaFJlcXVlc3QuY2FsbCh0aGlzLCBuZXdDb25maWcpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cblxuICAgIGkgPSAwO1xuICAgIGxlbiA9IHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbi5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihyZXNwb25zZUludGVyY2VwdG9yQ2hhaW5baSsrXSwgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluW2krK10pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgZ2V0VXJpKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gICAgY29uc3QgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgICByZXR1cm4gYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKTtcbiAgfVxufVxuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChtZXJnZUNvbmZpZyhjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZCxcbiAgICAgIHVybCxcbiAgICAgIGRhdGE6IChjb25maWcgfHwge30pLmRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cblxuICBmdW5jdGlvbiBnZW5lcmF0ZUhUVFBNZXRob2QoaXNGb3JtKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGh0dHBNZXRob2QodXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QobWVyZ2VDb25maWcoY29uZmlnIHx8IHt9LCB7XG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgaGVhZGVyczogaXNGb3JtID8ge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcbiAgICAgICAgfSA6IHt9LFxuICAgICAgICB1cmwsXG4gICAgICAgIGRhdGFcbiAgICAgIH0pKTtcbiAgICB9O1xuICB9XG5cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBnZW5lcmF0ZUhUVFBNZXRob2QoKTtcblxuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kICsgJ0Zvcm0nXSA9IGdlbmVyYXRlSFRUUE1ldGhvZCh0cnVlKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBBeGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtjb25maWddIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICpcbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbmZ1bmN0aW9uIEF4aW9zRXJyb3IobWVzc2FnZSwgY29kZSwgY29uZmlnLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBFcnJvci5jYWxsKHRoaXMpO1xuXG4gIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuc3RhY2sgPSAobmV3IEVycm9yKCkpLnN0YWNrO1xuICB9XG5cbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgdGhpcy5uYW1lID0gJ0F4aW9zRXJyb3InO1xuICBjb2RlICYmICh0aGlzLmNvZGUgPSBjb2RlKTtcbiAgY29uZmlnICYmICh0aGlzLmNvbmZpZyA9IGNvbmZpZyk7XG4gIHJlcXVlc3QgJiYgKHRoaXMucmVxdWVzdCA9IHJlcXVlc3QpO1xuICByZXNwb25zZSAmJiAodGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlKTtcbn1cblxudXRpbHMuaW5oZXJpdHMoQXhpb3NFcnJvciwgRXJyb3IsIHtcbiAgdG9KU09OOiBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIFN0YW5kYXJkXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAvLyBNaWNyb3NvZnRcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcixcbiAgICAgIC8vIE1vemlsbGFcbiAgICAgIGZpbGVOYW1lOiB0aGlzLmZpbGVOYW1lLFxuICAgICAgbGluZU51bWJlcjogdGhpcy5saW5lTnVtYmVyLFxuICAgICAgY29sdW1uTnVtYmVyOiB0aGlzLmNvbHVtbk51bWJlcixcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgLy8gQXhpb3NcbiAgICAgIGNvbmZpZzogdXRpbHMudG9KU09OT2JqZWN0KHRoaXMuY29uZmlnKSxcbiAgICAgIGNvZGU6IHRoaXMuY29kZSxcbiAgICAgIHN0YXR1czogdGhpcy5yZXNwb25zZSAmJiB0aGlzLnJlc3BvbnNlLnN0YXR1cyA/IHRoaXMucmVzcG9uc2Uuc3RhdHVzIDogbnVsbFxuICAgIH07XG4gIH1cbn0pO1xuXG5jb25zdCBwcm90b3R5cGUgPSBBeGlvc0Vycm9yLnByb3RvdHlwZTtcbmNvbnN0IGRlc2NyaXB0b3JzID0ge307XG5cbltcbiAgJ0VSUl9CQURfT1BUSU9OX1ZBTFVFJyxcbiAgJ0VSUl9CQURfT1BUSU9OJyxcbiAgJ0VDT05OQUJPUlRFRCcsXG4gICdFVElNRURPVVQnLFxuICAnRVJSX05FVFdPUksnLFxuICAnRVJSX0ZSX1RPT19NQU5ZX1JFRElSRUNUUycsXG4gICdFUlJfREVQUkVDQVRFRCcsXG4gICdFUlJfQkFEX1JFU1BPTlNFJyxcbiAgJ0VSUl9CQURfUkVRVUVTVCcsXG4gICdFUlJfQ0FOQ0VMRUQnLFxuICAnRVJSX05PVF9TVVBQT1JUJyxcbiAgJ0VSUl9JTlZBTElEX1VSTCdcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5dLmZvckVhY2goY29kZSA9PiB7XG4gIGRlc2NyaXB0b3JzW2NvZGVdID0ge3ZhbHVlOiBjb2RlfTtcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhBeGlvc0Vycm9yLCBkZXNjcmlwdG9ycyk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG90eXBlLCAnaXNBeGlvc0Vycm9yJywge3ZhbHVlOiB0cnVlfSk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5BeGlvc0Vycm9yLmZyb20gPSAoZXJyb3IsIGNvZGUsIGNvbmZpZywgcmVxdWVzdCwgcmVzcG9uc2UsIGN1c3RvbVByb3BzKSA9PiB7XG4gIGNvbnN0IGF4aW9zRXJyb3IgPSBPYmplY3QuY3JlYXRlKHByb3RvdHlwZSk7XG5cbiAgdXRpbHMudG9GbGF0T2JqZWN0KGVycm9yLCBheGlvc0Vycm9yLCBmdW5jdGlvbiBmaWx0ZXIob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAhPT0gRXJyb3IucHJvdG90eXBlO1xuICB9LCBwcm9wID0+IHtcbiAgICByZXR1cm4gcHJvcCAhPT0gJ2lzQXhpb3NFcnJvcic7XG4gIH0pO1xuXG4gIEF4aW9zRXJyb3IuY2FsbChheGlvc0Vycm9yLCBlcnJvci5tZXNzYWdlLCBjb2RlLCBjb25maWcsIHJlcXVlc3QsIHJlc3BvbnNlKTtcblxuICBheGlvc0Vycm9yLmNhdXNlID0gZXJyb3I7XG5cbiAgYXhpb3NFcnJvci5uYW1lID0gZXJyb3IubmFtZTtcblxuICBjdXN0b21Qcm9wcyAmJiBPYmplY3QuYXNzaWduKGF4aW9zRXJyb3IsIGN1c3RvbVByb3BzKTtcblxuICByZXR1cm4gYXhpb3NFcnJvcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF4aW9zRXJyb3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgcGFyc2VIZWFkZXJzIGZyb20gJy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzJztcblxuY29uc3QgJGludGVybmFscyA9IFN5bWJvbCgnaW50ZXJuYWxzJyk7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlcihoZWFkZXIpIHtcbiAgcmV0dXJuIGhlYWRlciAmJiBTdHJpbmcoaGVhZGVyKS50cmltKCkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBmYWxzZSB8fCB2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHV0aWxzLmlzQXJyYXkodmFsdWUpID8gdmFsdWUubWFwKG5vcm1hbGl6ZVZhbHVlKSA6IFN0cmluZyh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVG9rZW5zKHN0cikge1xuICBjb25zdCB0b2tlbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBjb25zdCB0b2tlbnNSRSA9IC8oW15cXHMsOz1dKylcXHMqKD86PVxccyooW14sO10rKSk/L2c7XG4gIGxldCBtYXRjaDtcblxuICB3aGlsZSAoKG1hdGNoID0gdG9rZW5zUkUuZXhlYyhzdHIpKSkge1xuICAgIHRva2Vuc1ttYXRjaFsxXV0gPSBtYXRjaFsyXTtcbiAgfVxuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmNvbnN0IGlzVmFsaWRIZWFkZXJOYW1lID0gKHN0cikgPT4gL15bLV9hLXpBLVowLTleYHx+LCEjJCUmJyorLl0rJC8udGVzdChzdHIudHJpbSgpKTtcblxuZnVuY3Rpb24gbWF0Y2hIZWFkZXJWYWx1ZShjb250ZXh0LCB2YWx1ZSwgaGVhZGVyLCBmaWx0ZXIsIGlzSGVhZGVyTmFtZUZpbHRlcikge1xuICBpZiAodXRpbHMuaXNGdW5jdGlvbihmaWx0ZXIpKSB7XG4gICAgcmV0dXJuIGZpbHRlci5jYWxsKHRoaXMsIHZhbHVlLCBoZWFkZXIpO1xuICB9XG5cbiAgaWYgKGlzSGVhZGVyTmFtZUZpbHRlcikge1xuICAgIHZhbHVlID0gaGVhZGVyO1xuICB9XG5cbiAgaWYgKCF1dGlscy5pc1N0cmluZyh2YWx1ZSkpIHJldHVybjtcblxuICBpZiAodXRpbHMuaXNTdHJpbmcoZmlsdGVyKSkge1xuICAgIHJldHVybiB2YWx1ZS5pbmRleE9mKGZpbHRlcikgIT09IC0xO1xuICB9XG5cbiAgaWYgKHV0aWxzLmlzUmVnRXhwKGZpbHRlcikpIHtcbiAgICByZXR1cm4gZmlsdGVyLnRlc3QodmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEhlYWRlcihoZWFkZXIpIHtcbiAgcmV0dXJuIGhlYWRlci50cmltKClcbiAgICAudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8oW2EtelxcZF0pKFxcdyopL2csICh3LCBjaGFyLCBzdHIpID0+IHtcbiAgICAgIHJldHVybiBjaGFyLnRvVXBwZXJDYXNlKCkgKyBzdHI7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkQWNjZXNzb3JzKG9iaiwgaGVhZGVyKSB7XG4gIGNvbnN0IGFjY2Vzc29yTmFtZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKCcgJyArIGhlYWRlcik7XG5cbiAgWydnZXQnLCAnc2V0JywgJ2hhcyddLmZvckVhY2gobWV0aG9kTmFtZSA9PiB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgbWV0aG9kTmFtZSArIGFjY2Vzc29yTmFtZSwge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbbWV0aG9kTmFtZV0uY2FsbCh0aGlzLCBoZWFkZXIsIGFyZzEsIGFyZzIsIGFyZzMpO1xuICAgICAgfSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9KTtcbn1cblxuY2xhc3MgQXhpb3NIZWFkZXJzIHtcbiAgY29uc3RydWN0b3IoaGVhZGVycykge1xuICAgIGhlYWRlcnMgJiYgdGhpcy5zZXQoaGVhZGVycyk7XG4gIH1cblxuICBzZXQoaGVhZGVyLCB2YWx1ZU9yUmV3cml0ZSwgcmV3cml0ZSkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gc2V0SGVhZGVyKF92YWx1ZSwgX2hlYWRlciwgX3Jld3JpdGUpIHtcbiAgICAgIGNvbnN0IGxIZWFkZXIgPSBub3JtYWxpemVIZWFkZXIoX2hlYWRlcik7XG5cbiAgICAgIGlmICghbEhlYWRlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2hlYWRlciBuYW1lIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGtleSA9IHV0aWxzLmZpbmRLZXkoc2VsZiwgbEhlYWRlcik7XG5cbiAgICAgIGlmKCFrZXkgfHwgc2VsZltrZXldID09PSB1bmRlZmluZWQgfHwgX3Jld3JpdGUgPT09IHRydWUgfHwgKF9yZXdyaXRlID09PSB1bmRlZmluZWQgJiYgc2VsZltrZXldICE9PSBmYWxzZSkpIHtcbiAgICAgICAgc2VsZltrZXkgfHwgX2hlYWRlcl0gPSBub3JtYWxpemVWYWx1ZShfdmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldEhlYWRlcnMgPSAoaGVhZGVycywgX3Jld3JpdGUpID0+XG4gICAgICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIChfdmFsdWUsIF9oZWFkZXIpID0+IHNldEhlYWRlcihfdmFsdWUsIF9oZWFkZXIsIF9yZXdyaXRlKSk7XG5cbiAgICBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChoZWFkZXIpIHx8IGhlYWRlciBpbnN0YW5jZW9mIHRoaXMuY29uc3RydWN0b3IpIHtcbiAgICAgIHNldEhlYWRlcnMoaGVhZGVyLCB2YWx1ZU9yUmV3cml0ZSlcbiAgICB9IGVsc2UgaWYodXRpbHMuaXNTdHJpbmcoaGVhZGVyKSAmJiAoaGVhZGVyID0gaGVhZGVyLnRyaW0oKSkgJiYgIWlzVmFsaWRIZWFkZXJOYW1lKGhlYWRlcikpIHtcbiAgICAgIHNldEhlYWRlcnMocGFyc2VIZWFkZXJzKGhlYWRlciksIHZhbHVlT3JSZXdyaXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyICE9IG51bGwgJiYgc2V0SGVhZGVyKHZhbHVlT3JSZXdyaXRlLCBoZWFkZXIsIHJld3JpdGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0KGhlYWRlciwgcGFyc2VyKSB7XG4gICAgaGVhZGVyID0gbm9ybWFsaXplSGVhZGVyKGhlYWRlcik7XG5cbiAgICBpZiAoaGVhZGVyKSB7XG4gICAgICBjb25zdCBrZXkgPSB1dGlscy5maW5kS2V5KHRoaXMsIGhlYWRlcik7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzW2tleV07XG5cbiAgICAgICAgaWYgKCFwYXJzZXIpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VyID09PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlVG9rZW5zKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHBhcnNlcikpIHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VyLmNhbGwodGhpcywgdmFsdWUsIGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNSZWdFeHAocGFyc2VyKSkge1xuICAgICAgICAgIHJldHVybiBwYXJzZXIuZXhlYyh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwYXJzZXIgbXVzdCBiZSBib29sZWFufHJlZ2V4cHxmdW5jdGlvbicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhcyhoZWFkZXIsIG1hdGNoZXIpIHtcbiAgICBoZWFkZXIgPSBub3JtYWxpemVIZWFkZXIoaGVhZGVyKTtcblxuICAgIGlmIChoZWFkZXIpIHtcbiAgICAgIGNvbnN0IGtleSA9IHV0aWxzLmZpbmRLZXkodGhpcywgaGVhZGVyKTtcblxuICAgICAgcmV0dXJuICEhKGtleSAmJiB0aGlzW2tleV0gIT09IHVuZGVmaW5lZCAmJiAoIW1hdGNoZXIgfHwgbWF0Y2hIZWFkZXJWYWx1ZSh0aGlzLCB0aGlzW2tleV0sIGtleSwgbWF0Y2hlcikpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBkZWxldGUoaGVhZGVyLCBtYXRjaGVyKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgbGV0IGRlbGV0ZWQgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUhlYWRlcihfaGVhZGVyKSB7XG4gICAgICBfaGVhZGVyID0gbm9ybWFsaXplSGVhZGVyKF9oZWFkZXIpO1xuXG4gICAgICBpZiAoX2hlYWRlcikge1xuICAgICAgICBjb25zdCBrZXkgPSB1dGlscy5maW5kS2V5KHNlbGYsIF9oZWFkZXIpO1xuXG4gICAgICAgIGlmIChrZXkgJiYgKCFtYXRjaGVyIHx8IG1hdGNoSGVhZGVyVmFsdWUoc2VsZiwgc2VsZltrZXldLCBrZXksIG1hdGNoZXIpKSkge1xuICAgICAgICAgIGRlbGV0ZSBzZWxmW2tleV07XG5cbiAgICAgICAgICBkZWxldGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1dGlscy5pc0FycmF5KGhlYWRlcikpIHtcbiAgICAgIGhlYWRlci5mb3JFYWNoKGRlbGV0ZUhlYWRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZUhlYWRlcihoZWFkZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBkZWxldGVkO1xuICB9XG5cbiAgY2xlYXIobWF0Y2hlcikge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzKTtcbiAgICBsZXQgaSA9IGtleXMubGVuZ3RoO1xuICAgIGxldCBkZWxldGVkID0gZmFsc2U7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYoIW1hdGNoZXIgfHwgbWF0Y2hIZWFkZXJWYWx1ZSh0aGlzLCB0aGlzW2tleV0sIGtleSwgbWF0Y2hlciwgdHJ1ZSkpIHtcbiAgICAgICAgZGVsZXRlIHRoaXNba2V5XTtcbiAgICAgICAgZGVsZXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlbGV0ZWQ7XG4gIH1cblxuICBub3JtYWxpemUoZm9ybWF0KSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY29uc3QgaGVhZGVycyA9IHt9O1xuXG4gICAgdXRpbHMuZm9yRWFjaCh0aGlzLCAodmFsdWUsIGhlYWRlcikgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gdXRpbHMuZmluZEtleShoZWFkZXJzLCBoZWFkZXIpO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHNlbGZba2V5XSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcbiAgICAgICAgZGVsZXRlIHNlbGZbaGVhZGVyXTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBub3JtYWxpemVkID0gZm9ybWF0ID8gZm9ybWF0SGVhZGVyKGhlYWRlcikgOiBTdHJpbmcoaGVhZGVyKS50cmltKCk7XG5cbiAgICAgIGlmIChub3JtYWxpemVkICE9PSBoZWFkZXIpIHtcbiAgICAgICAgZGVsZXRlIHNlbGZbaGVhZGVyXTtcbiAgICAgIH1cblxuICAgICAgc2VsZltub3JtYWxpemVkXSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcblxuICAgICAgaGVhZGVyc1tub3JtYWxpemVkXSA9IHRydWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbmNhdCguLi50YXJnZXRzKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IuY29uY2F0KHRoaXMsIC4uLnRhcmdldHMpO1xuICB9XG5cbiAgdG9KU09OKGFzU3RyaW5ncykge1xuICAgIGNvbnN0IG9iaiA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgICB1dGlscy5mb3JFYWNoKHRoaXMsICh2YWx1ZSwgaGVhZGVyKSA9PiB7XG4gICAgICB2YWx1ZSAhPSBudWxsICYmIHZhbHVlICE9PSBmYWxzZSAmJiAob2JqW2hlYWRlcl0gPSBhc1N0cmluZ3MgJiYgdXRpbHMuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5qb2luKCcsICcpIDogdmFsdWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyh0aGlzLnRvSlNPTigpKVtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy50b0pTT04oKSkubWFwKChbaGVhZGVyLCB2YWx1ZV0pID0+IGhlYWRlciArICc6ICcgKyB2YWx1ZSkuam9pbignXFxuJyk7XG4gIH1cblxuICBnZXQgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgcmV0dXJuICdBeGlvc0hlYWRlcnMnO1xuICB9XG5cbiAgc3RhdGljIGZyb20odGhpbmcpIHtcbiAgICByZXR1cm4gdGhpbmcgaW5zdGFuY2VvZiB0aGlzID8gdGhpbmcgOiBuZXcgdGhpcyh0aGluZyk7XG4gIH1cblxuICBzdGF0aWMgY29uY2F0KGZpcnN0LCAuLi50YXJnZXRzKSB7XG4gICAgY29uc3QgY29tcHV0ZWQgPSBuZXcgdGhpcyhmaXJzdCk7XG5cbiAgICB0YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gY29tcHV0ZWQuc2V0KHRhcmdldCkpO1xuXG4gICAgcmV0dXJuIGNvbXB1dGVkO1xuICB9XG5cbiAgc3RhdGljIGFjY2Vzc29yKGhlYWRlcikge1xuICAgIGNvbnN0IGludGVybmFscyA9IHRoaXNbJGludGVybmFsc10gPSAodGhpc1skaW50ZXJuYWxzXSA9IHtcbiAgICAgIGFjY2Vzc29yczoge31cbiAgICB9KTtcblxuICAgIGNvbnN0IGFjY2Vzc29ycyA9IGludGVybmFscy5hY2Nlc3NvcnM7XG4gICAgY29uc3QgcHJvdG90eXBlID0gdGhpcy5wcm90b3R5cGU7XG5cbiAgICBmdW5jdGlvbiBkZWZpbmVBY2Nlc3NvcihfaGVhZGVyKSB7XG4gICAgICBjb25zdCBsSGVhZGVyID0gbm9ybWFsaXplSGVhZGVyKF9oZWFkZXIpO1xuXG4gICAgICBpZiAoIWFjY2Vzc29yc1tsSGVhZGVyXSkge1xuICAgICAgICBidWlsZEFjY2Vzc29ycyhwcm90b3R5cGUsIF9oZWFkZXIpO1xuICAgICAgICBhY2Nlc3NvcnNbbEhlYWRlcl0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHV0aWxzLmlzQXJyYXkoaGVhZGVyKSA/IGhlYWRlci5mb3JFYWNoKGRlZmluZUFjY2Vzc29yKSA6IGRlZmluZUFjY2Vzc29yKGhlYWRlcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5BeGlvc0hlYWRlcnMuYWNjZXNzb3IoWydDb250ZW50LVR5cGUnLCAnQ29udGVudC1MZW5ndGgnLCAnQWNjZXB0JywgJ0FjY2VwdC1FbmNvZGluZycsICdVc2VyLUFnZW50JywgJ0F1dGhvcml6YXRpb24nXSk7XG5cbi8vIHJlc2VydmVkIG5hbWVzIGhvdGZpeFxudXRpbHMucmVkdWNlRGVzY3JpcHRvcnMoQXhpb3NIZWFkZXJzLnByb3RvdHlwZSwgKHt2YWx1ZX0sIGtleSkgPT4ge1xuICBsZXQgbWFwcGVkID0ga2V5WzBdLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7IC8vIG1hcCBgc2V0YCA9PiBgU2V0YFxuICByZXR1cm4ge1xuICAgIGdldDogKCkgPT4gdmFsdWUsXG4gICAgc2V0KGhlYWRlclZhbHVlKSB7XG4gICAgICB0aGlzW21hcHBlZF0gPSBoZWFkZXJWYWx1ZTtcbiAgICB9XG4gIH1cbn0pO1xuXG51dGlscy5mcmVlemVNZXRob2RzKEF4aW9zSGVhZGVycyk7XG5cbmV4cG9ydCBkZWZhdWx0IEF4aW9zSGVhZGVycztcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuXG5jbGFzcyBJbnRlcmNlcHRvck1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gW107XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gICAqXG4gICAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAgICovXG4gIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkLCBvcHRpb25zKSB7XG4gICAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICAgIGZ1bGZpbGxlZCxcbiAgICAgIHJlamVjdGVkLFxuICAgICAgc3luY2hyb25vdXM6IG9wdGlvbnMgPyBvcHRpb25zLnN5bmNocm9ub3VzIDogZmFsc2UsXG4gICAgICBydW5XaGVuOiBvcHRpb25zID8gb3B0aW9ucy5ydW5XaGVuIDogbnVsbFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAgICpcbiAgICogQHJldHVybnMge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgaW50ZXJjZXB0b3Igd2FzIHJlbW92ZWQsIGBmYWxzZWAgb3RoZXJ3aXNlXG4gICAqL1xuICBlamVjdChpZCkge1xuICAgIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgaW50ZXJjZXB0b3JzIGZyb20gdGhlIHN0YWNrXG4gICAqXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgY2xlYXIoKSB7XG4gICAgaWYgKHRoaXMuaGFuZGxlcnMpIHtcbiAgICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAgICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gICAqXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgZm9yRWFjaChmbikge1xuICAgIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgICAgZm4oaCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgaXNBYnNvbHV0ZVVSTCBmcm9tICcuLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMnO1xuaW1wb3J0IGNvbWJpbmVVUkxzIGZyb20gJy4uL2hlbHBlcnMvY29tYmluZVVSTHMuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgYmFzZVVSTCB3aXRoIHRoZSByZXF1ZXN0ZWRVUkwsXG4gKiBvbmx5IHdoZW4gdGhlIHJlcXVlc3RlZFVSTCBpcyBub3QgYWxyZWFkeSBhbiBhYnNvbHV0ZSBVUkwuXG4gKiBJZiB0aGUgcmVxdWVzdFVSTCBpcyBhYnNvbHV0ZSwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSByZXF1ZXN0ZWRVUkwgdW50b3VjaGVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RlZFVSTCBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgdG8gY29tYmluZVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBmdWxsIHBhdGhcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGdWxsUGF0aChiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpIHtcbiAgaWYgKGJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwocmVxdWVzdGVkVVJMKSkge1xuICAgIHJldHVybiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpO1xuICB9XG4gIHJldHVybiByZXF1ZXN0ZWRVUkw7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB0cmFuc2Zvcm1EYXRhIGZyb20gJy4vdHJhbnNmb3JtRGF0YS5qcyc7XG5pbXBvcnQgaXNDYW5jZWwgZnJvbSAnLi4vY2FuY2VsL2lzQ2FuY2VsLmpzJztcbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuLi9kZWZhdWx0cy9pbmRleC5qcyc7XG5pbXBvcnQgQ2FuY2VsZWRFcnJvciBmcm9tICcuLi9jYW5jZWwvQ2FuY2VsZWRFcnJvci5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gJy4uL2NvcmUvQXhpb3NIZWFkZXJzLmpzJztcbmltcG9ydCBhZGFwdGVycyBmcm9tIFwiLi4vYWRhcHRlcnMvYWRhcHRlcnMuanNcIjtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsZWRFcnJvcmAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxuXG4gIGlmIChjb25maWcuc2lnbmFsICYmIGNvbmZpZy5zaWduYWwuYWJvcnRlZCkge1xuICAgIHRocm93IG5ldyBDYW5jZWxlZEVycm9yKG51bGwsIGNvbmZpZyk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKlxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICBjb25maWcuaGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKGNvbmZpZy5oZWFkZXJzKTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YS5jYWxsKFxuICAgIGNvbmZpZyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIGlmIChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10uaW5kZXhPZihjb25maWcubWV0aG9kKSAhPT0gLTEpIHtcbiAgICBjb25maWcuaGVhZGVycy5zZXRDb250ZW50VHlwZSgnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJywgZmFsc2UpO1xuICB9XG5cbiAgY29uc3QgYWRhcHRlciA9IGFkYXB0ZXJzLmdldEFkYXB0ZXIoY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcik7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhLmNhbGwoXG4gICAgICBjb25maWcsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2UsXG4gICAgICByZXNwb25zZVxuICAgICk7XG5cbiAgICByZXNwb25zZS5oZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20ocmVzcG9uc2UuaGVhZGVycyk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YS5jYWxsKFxuICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2UsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20ocmVhc29uLnJlc3BvbnNlLmhlYWRlcnMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSBcIi4vQXhpb3NIZWFkZXJzLmpzXCI7XG5cbmNvbnN0IGhlYWRlcnNUb09iamVjdCA9ICh0aGluZykgPT4gdGhpbmcgaW5zdGFuY2VvZiBBeGlvc0hlYWRlcnMgPyB0aGluZy50b0pTT04oKSA6IHRoaW5nO1xuXG4vKipcbiAqIENvbmZpZy1zcGVjaWZpYyBtZXJnZS1mdW5jdGlvbiB3aGljaCBjcmVhdGVzIGEgbmV3IGNvbmZpZy1vYmplY3RcbiAqIGJ5IG1lcmdpbmcgdHdvIGNvbmZpZ3VyYXRpb24gb2JqZWN0cyB0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzJcbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlQ29uZmlnKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGNvbmZpZzIgPSBjb25maWcyIHx8IHt9O1xuICBjb25zdCBjb25maWcgPSB7fTtcblxuICBmdW5jdGlvbiBnZXRNZXJnZWRWYWx1ZSh0YXJnZXQsIHNvdXJjZSwgY2FzZWxlc3MpIHtcbiAgICBpZiAodXRpbHMuaXNQbGFpbk9iamVjdCh0YXJnZXQpICYmIHV0aWxzLmlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlLmNhbGwoe2Nhc2VsZXNzfSwgdGFyZ2V0LCBzb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gdXRpbHMubWVyZ2Uoe30sIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiBzb3VyY2Uuc2xpY2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKGEsIGIsIGNhc2VsZXNzKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChiKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKGEsIGIsIGNhc2VsZXNzKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChhKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgYSwgY2FzZWxlc3MpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKGEsIGIpIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGIpKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBiKTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihhLCBiKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChiKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgYik7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoYSkpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGEpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiBtZXJnZURpcmVjdEtleXMoYSwgYiwgcHJvcCkge1xuICAgIGlmIChwcm9wIGluIGNvbmZpZzIpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZShhLCBiKTtcbiAgICB9IGVsc2UgaWYgKHByb3AgaW4gY29uZmlnMSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgYSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWVyZ2VNYXAgPSB7XG4gICAgdXJsOiB2YWx1ZUZyb21Db25maWcyLFxuICAgIG1ldGhvZDogdmFsdWVGcm9tQ29uZmlnMixcbiAgICBkYXRhOiB2YWx1ZUZyb21Db25maWcyLFxuICAgIGJhc2VVUkw6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdHJhbnNmb3JtUmVxdWVzdDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB0cmFuc2Zvcm1SZXNwb25zZTogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBwYXJhbXNTZXJpYWxpemVyOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHRpbWVvdXQ6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdGltZW91dE1lc3NhZ2U6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgd2l0aENyZWRlbnRpYWxzOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHdpdGhYU1JGVG9rZW46IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgYWRhcHRlcjogZGVmYXVsdFRvQ29uZmlnMixcbiAgICByZXNwb25zZVR5cGU6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgeHNyZkNvb2tpZU5hbWU6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgeHNyZkhlYWRlck5hbWU6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgb25VcGxvYWRQcm9ncmVzczogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBvbkRvd25sb2FkUHJvZ3Jlc3M6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgZGVjb21wcmVzczogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBtYXhDb250ZW50TGVuZ3RoOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIG1heEJvZHlMZW5ndGg6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgYmVmb3JlUmVkaXJlY3Q6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdHJhbnNwb3J0OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGh0dHBBZ2VudDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBodHRwc0FnZW50OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGNhbmNlbFRva2VuOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHNvY2tldFBhdGg6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgcmVzcG9uc2VFbmNvZGluZzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB2YWxpZGF0ZVN0YXR1czogbWVyZ2VEaXJlY3RLZXlzLFxuICAgIGhlYWRlcnM6IChhLCBiKSA9PiBtZXJnZURlZXBQcm9wZXJ0aWVzKGhlYWRlcnNUb09iamVjdChhKSwgaGVhZGVyc1RvT2JqZWN0KGIpLCB0cnVlKVxuICB9O1xuXG4gIHV0aWxzLmZvckVhY2goT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnMSwgY29uZmlnMikpLCBmdW5jdGlvbiBjb21wdXRlQ29uZmlnVmFsdWUocHJvcCkge1xuICAgIGNvbnN0IG1lcmdlID0gbWVyZ2VNYXBbcHJvcF0gfHwgbWVyZ2VEZWVwUHJvcGVydGllcztcbiAgICBjb25zdCBjb25maWdWYWx1ZSA9IG1lcmdlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0sIHByb3ApO1xuICAgICh1dGlscy5pc1VuZGVmaW5lZChjb25maWdWYWx1ZSkgJiYgbWVyZ2UgIT09IG1lcmdlRGlyZWN0S2V5cykgfHwgKGNvbmZpZ1twcm9wXSA9IGNvbmZpZ1ZhbHVlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi9BeGlvc0Vycm9yLmpzJztcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBUaGUgcmVzcG9uc2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIGNvbnN0IHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChuZXcgQXhpb3NFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICBbQXhpb3NFcnJvci5FUlJfQkFEX1JFUVVFU1QsIEF4aW9zRXJyb3IuRVJSX0JBRF9SRVNQT05TRV1bTWF0aC5mbG9vcihyZXNwb25zZS5zdGF0dXMgLyAxMDApIC0gNF0sXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi4vZGVmYXVsdHMvaW5kZXguanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tICcuLi9jb3JlL0F4aW9zSGVhZGVycy5qcyc7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEBwYXJhbSB7P09iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlIG9iamVjdFxuICpcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShmbnMsIHJlc3BvbnNlKSB7XG4gIGNvbnN0IGNvbmZpZyA9IHRoaXMgfHwgZGVmYXVsdHM7XG4gIGNvbnN0IGNvbnRleHQgPSByZXNwb25zZSB8fCBjb25maWc7XG4gIGNvbnN0IGhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuZnJvbShjb250ZXh0LmhlYWRlcnMpO1xuICBsZXQgZGF0YSA9IGNvbnRleHQuZGF0YTtcblxuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuLmNhbGwoY29uZmlnLCBkYXRhLCBoZWFkZXJzLm5vcm1hbGl6ZSgpLCByZXNwb25zZSA/IHJlc3BvbnNlLnN0YXR1cyA6IHVuZGVmaW5lZCk7XG4gIH0pO1xuXG4gIGhlYWRlcnMubm9ybWFsaXplKCk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuaW1wb3J0IHRyYW5zaXRpb25hbERlZmF1bHRzIGZyb20gJy4vdHJhbnNpdGlvbmFsLmpzJztcbmltcG9ydCB0b0Zvcm1EYXRhIGZyb20gJy4uL2hlbHBlcnMvdG9Gb3JtRGF0YS5qcyc7XG5pbXBvcnQgdG9VUkxFbmNvZGVkRm9ybSBmcm9tICcuLi9oZWxwZXJzL3RvVVJMRW5jb2RlZEZvcm0uanMnO1xuaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4uL3BsYXRmb3JtL2luZGV4LmpzJztcbmltcG9ydCBmb3JtRGF0YVRvSlNPTiBmcm9tICcuLi9oZWxwZXJzL2Zvcm1EYXRhVG9KU09OLmpzJztcblxuLyoqXG4gKiBJdCB0YWtlcyBhIHN0cmluZywgdHJpZXMgdG8gcGFyc2UgaXQsIGFuZCBpZiBpdCBmYWlscywgaXQgcmV0dXJucyB0aGUgc3RyaW5naWZpZWQgdmVyc2lvblxuICogb2YgdGhlIGlucHV0XG4gKlxuICogQHBhcmFtIHthbnl9IHJhd1ZhbHVlIC0gVGhlIHZhbHVlIHRvIGJlIHN0cmluZ2lmaWVkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcGFyc2VyIC0gQSBmdW5jdGlvbiB0aGF0IHBhcnNlcyBhIHN0cmluZyBpbnRvIGEgSmF2YVNjcmlwdCBvYmplY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlbmNvZGVyIC0gQSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgdmFsdWUgYW5kIHJldHVybnMgYSBzdHJpbmcuXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gQSBzdHJpbmdpZmllZCB2ZXJzaW9uIG9mIHRoZSByYXdWYWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RyaW5naWZ5U2FmZWx5KHJhd1ZhbHVlLCBwYXJzZXIsIGVuY29kZXIpIHtcbiAgaWYgKHV0aWxzLmlzU3RyaW5nKHJhd1ZhbHVlKSkge1xuICAgIHRyeSB7XG4gICAgICAocGFyc2VyIHx8IEpTT04ucGFyc2UpKHJhd1ZhbHVlKTtcbiAgICAgIHJldHVybiB1dGlscy50cmltKHJhd1ZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoZS5uYW1lICE9PSAnU3ludGF4RXJyb3InKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChlbmNvZGVyIHx8IEpTT04uc3RyaW5naWZ5KShyYXdWYWx1ZSk7XG59XG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuXG4gIHRyYW5zaXRpb25hbDogdHJhbnNpdGlvbmFsRGVmYXVsdHMsXG5cbiAgYWRhcHRlcjogWyd4aHInLCAnaHR0cCddLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBjb25zdCBjb250ZW50VHlwZSA9IGhlYWRlcnMuZ2V0Q29udGVudFR5cGUoKSB8fCAnJztcbiAgICBjb25zdCBoYXNKU09OQ29udGVudFR5cGUgPSBjb250ZW50VHlwZS5pbmRleE9mKCdhcHBsaWNhdGlvbi9qc29uJykgPiAtMTtcbiAgICBjb25zdCBpc09iamVjdFBheWxvYWQgPSB1dGlscy5pc09iamVjdChkYXRhKTtcblxuICAgIGlmIChpc09iamVjdFBheWxvYWQgJiYgdXRpbHMuaXNIVE1MRm9ybShkYXRhKSkge1xuICAgICAgZGF0YSA9IG5ldyBGb3JtRGF0YShkYXRhKTtcbiAgICB9XG5cbiAgICBjb25zdCBpc0Zvcm1EYXRhID0gdXRpbHMuaXNGb3JtRGF0YShkYXRhKTtcblxuICAgIGlmIChpc0Zvcm1EYXRhKSB7XG4gICAgICBpZiAoIWhhc0pTT05Db250ZW50VHlwZSkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBoYXNKU09OQ29udGVudFR5cGUgPyBKU09OLnN0cmluZ2lmeShmb3JtRGF0YVRvSlNPTihkYXRhKSkgOiBkYXRhO1xuICAgIH1cblxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgaGVhZGVycy5zZXRDb250ZW50VHlwZSgnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnLCBmYWxzZSk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGxldCBpc0ZpbGVMaXN0O1xuXG4gICAgaWYgKGlzT2JqZWN0UGF5bG9hZCkge1xuICAgICAgaWYgKGNvbnRlbnRUeXBlLmluZGV4T2YoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIHRvVVJMRW5jb2RlZEZvcm0oZGF0YSwgdGhpcy5mb3JtU2VyaWFsaXplcikudG9TdHJpbmcoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKChpc0ZpbGVMaXN0ID0gdXRpbHMuaXNGaWxlTGlzdChkYXRhKSkgfHwgY29udGVudFR5cGUuaW5kZXhPZignbXVsdGlwYXJ0L2Zvcm0tZGF0YScpID4gLTEpIHtcbiAgICAgICAgY29uc3QgX0Zvcm1EYXRhID0gdGhpcy5lbnYgJiYgdGhpcy5lbnYuRm9ybURhdGE7XG5cbiAgICAgICAgcmV0dXJuIHRvRm9ybURhdGEoXG4gICAgICAgICAgaXNGaWxlTGlzdCA/IHsnZmlsZXNbXSc6IGRhdGF9IDogZGF0YSxcbiAgICAgICAgICBfRm9ybURhdGEgJiYgbmV3IF9Gb3JtRGF0YSgpLFxuICAgICAgICAgIHRoaXMuZm9ybVNlcmlhbGl6ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3RQYXlsb2FkIHx8IGhhc0pTT05Db250ZW50VHlwZSApIHtcbiAgICAgIGhlYWRlcnMuc2V0Q29udGVudFR5cGUoJ2FwcGxpY2F0aW9uL2pzb24nLCBmYWxzZSk7XG4gICAgICByZXR1cm4gc3RyaW5naWZ5U2FmZWx5KGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICBjb25zdCB0cmFuc2l0aW9uYWwgPSB0aGlzLnRyYW5zaXRpb25hbCB8fCBkZWZhdWx0cy50cmFuc2l0aW9uYWw7XG4gICAgY29uc3QgZm9yY2VkSlNPTlBhcnNpbmcgPSB0cmFuc2l0aW9uYWwgJiYgdHJhbnNpdGlvbmFsLmZvcmNlZEpTT05QYXJzaW5nO1xuICAgIGNvbnN0IEpTT05SZXF1ZXN0ZWQgPSB0aGlzLnJlc3BvbnNlVHlwZSA9PT0gJ2pzb24nO1xuXG4gICAgaWYgKGRhdGEgJiYgdXRpbHMuaXNTdHJpbmcoZGF0YSkgJiYgKChmb3JjZWRKU09OUGFyc2luZyAmJiAhdGhpcy5yZXNwb25zZVR5cGUpIHx8IEpTT05SZXF1ZXN0ZWQpKSB7XG4gICAgICBjb25zdCBzaWxlbnRKU09OUGFyc2luZyA9IHRyYW5zaXRpb25hbCAmJiB0cmFuc2l0aW9uYWwuc2lsZW50SlNPTlBhcnNpbmc7XG4gICAgICBjb25zdCBzdHJpY3RKU09OUGFyc2luZyA9ICFzaWxlbnRKU09OUGFyc2luZyAmJiBKU09OUmVxdWVzdGVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKHN0cmljdEpTT05QYXJzaW5nKSB7XG4gICAgICAgICAgaWYgKGUubmFtZSA9PT0gJ1N5bnRheEVycm9yJykge1xuICAgICAgICAgICAgdGhyb3cgQXhpb3NFcnJvci5mcm9tKGUsIEF4aW9zRXJyb3IuRVJSX0JBRF9SRVNQT05TRSwgdGhpcywgbnVsbCwgdGhpcy5yZXNwb25zZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG4gIG1heEJvZHlMZW5ndGg6IC0xLFxuXG4gIGVudjoge1xuICAgIEZvcm1EYXRhOiBwbGF0Zm9ybS5jbGFzc2VzLkZvcm1EYXRhLFxuICAgIEJsb2I6IHBsYXRmb3JtLmNsYXNzZXMuQmxvYlxuICB9LFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH0sXG5cbiAgaGVhZGVyczoge1xuICAgIGNvbW1vbjoge1xuICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6IHVuZGVmaW5lZFxuICAgIH1cbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCddLCAobWV0aG9kKSA9PiB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNpbGVudEpTT05QYXJzaW5nOiB0cnVlLFxuICBmb3JjZWRKU09OUGFyc2luZzogdHJ1ZSxcbiAgY2xhcmlmeVRpbWVvdXRFcnJvcjogZmFsc2Vcbn07XG4iLCJleHBvcnQgY29uc3QgVkVSU0lPTiA9IFwiMS42LjVcIjsiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB0b0Zvcm1EYXRhIGZyb20gJy4vdG9Gb3JtRGF0YS5qcyc7XG5cbi8qKlxuICogSXQgZW5jb2RlcyBhIHN0cmluZyBieSByZXBsYWNpbmcgYWxsIGNoYXJhY3RlcnMgdGhhdCBhcmUgbm90IGluIHRoZSB1bnJlc2VydmVkIHNldCB3aXRoXG4gKiB0aGVpciBwZXJjZW50LWVuY29kZWQgZXF1aXZhbGVudHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBlbmNvZGUuXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGVuY29kZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlbmNvZGUoc3RyKSB7XG4gIGNvbnN0IGNoYXJNYXAgPSB7XG4gICAgJyEnOiAnJTIxJyxcbiAgICBcIidcIjogJyUyNycsXG4gICAgJygnOiAnJTI4JyxcbiAgICAnKSc6ICclMjknLFxuICAgICd+JzogJyU3RScsXG4gICAgJyUyMCc6ICcrJyxcbiAgICAnJTAwJzogJ1xceDAwJ1xuICB9O1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvWyEnKCl+XXwlMjB8JTAwL2csIGZ1bmN0aW9uIHJlcGxhY2VyKG1hdGNoKSB7XG4gICAgcmV0dXJuIGNoYXJNYXBbbWF0Y2hdO1xuICB9KTtcbn1cblxuLyoqXG4gKiBJdCB0YWtlcyBhIHBhcmFtcyBvYmplY3QgYW5kIGNvbnZlcnRzIGl0IHRvIGEgRm9ybURhdGEgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBhbnk+fSBwYXJhbXMgLSBUaGUgcGFyYW1ldGVycyB0byBiZSBjb252ZXJ0ZWQgdG8gYSBGb3JtRGF0YSBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGFueT59IG9wdGlvbnMgLSBUaGUgb3B0aW9ucyBvYmplY3QgcGFzc2VkIHRvIHRoZSBBeGlvcyBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gQXhpb3NVUkxTZWFyY2hQYXJhbXMocGFyYW1zLCBvcHRpb25zKSB7XG4gIHRoaXMuX3BhaXJzID0gW107XG5cbiAgcGFyYW1zICYmIHRvRm9ybURhdGEocGFyYW1zLCB0aGlzLCBvcHRpb25zKTtcbn1cblxuY29uc3QgcHJvdG90eXBlID0gQXhpb3NVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlO1xuXG5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gYXBwZW5kKG5hbWUsIHZhbHVlKSB7XG4gIHRoaXMuX3BhaXJzLnB1c2goW25hbWUsIHZhbHVlXSk7XG59O1xuXG5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhlbmNvZGVyKSB7XG4gIGNvbnN0IF9lbmNvZGUgPSBlbmNvZGVyID8gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZW5jb2Rlci5jYWxsKHRoaXMsIHZhbHVlLCBlbmNvZGUpO1xuICB9IDogZW5jb2RlO1xuXG4gIHJldHVybiB0aGlzLl9wYWlycy5tYXAoZnVuY3Rpb24gZWFjaChwYWlyKSB7XG4gICAgcmV0dXJuIF9lbmNvZGUocGFpclswXSkgKyAnPScgKyBfZW5jb2RlKHBhaXJbMV0pO1xuICB9LCAnJykuam9pbignJicpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXhpb3NVUkxTZWFyY2hQYXJhbXM7XG4iLCJjb25zdCBIdHRwU3RhdHVzQ29kZSA9IHtcbiAgQ29udGludWU6IDEwMCxcbiAgU3dpdGNoaW5nUHJvdG9jb2xzOiAxMDEsXG4gIFByb2Nlc3Npbmc6IDEwMixcbiAgRWFybHlIaW50czogMTAzLFxuICBPazogMjAwLFxuICBDcmVhdGVkOiAyMDEsXG4gIEFjY2VwdGVkOiAyMDIsXG4gIE5vbkF1dGhvcml0YXRpdmVJbmZvcm1hdGlvbjogMjAzLFxuICBOb0NvbnRlbnQ6IDIwNCxcbiAgUmVzZXRDb250ZW50OiAyMDUsXG4gIFBhcnRpYWxDb250ZW50OiAyMDYsXG4gIE11bHRpU3RhdHVzOiAyMDcsXG4gIEFscmVhZHlSZXBvcnRlZDogMjA4LFxuICBJbVVzZWQ6IDIyNixcbiAgTXVsdGlwbGVDaG9pY2VzOiAzMDAsXG4gIE1vdmVkUGVybWFuZW50bHk6IDMwMSxcbiAgRm91bmQ6IDMwMixcbiAgU2VlT3RoZXI6IDMwMyxcbiAgTm90TW9kaWZpZWQ6IDMwNCxcbiAgVXNlUHJveHk6IDMwNSxcbiAgVW51c2VkOiAzMDYsXG4gIFRlbXBvcmFyeVJlZGlyZWN0OiAzMDcsXG4gIFBlcm1hbmVudFJlZGlyZWN0OiAzMDgsXG4gIEJhZFJlcXVlc3Q6IDQwMCxcbiAgVW5hdXRob3JpemVkOiA0MDEsXG4gIFBheW1lbnRSZXF1aXJlZDogNDAyLFxuICBGb3JiaWRkZW46IDQwMyxcbiAgTm90Rm91bmQ6IDQwNCxcbiAgTWV0aG9kTm90QWxsb3dlZDogNDA1LFxuICBOb3RBY2NlcHRhYmxlOiA0MDYsXG4gIFByb3h5QXV0aGVudGljYXRpb25SZXF1aXJlZDogNDA3LFxuICBSZXF1ZXN0VGltZW91dDogNDA4LFxuICBDb25mbGljdDogNDA5LFxuICBHb25lOiA0MTAsXG4gIExlbmd0aFJlcXVpcmVkOiA0MTEsXG4gIFByZWNvbmRpdGlvbkZhaWxlZDogNDEyLFxuICBQYXlsb2FkVG9vTGFyZ2U6IDQxMyxcbiAgVXJpVG9vTG9uZzogNDE0LFxuICBVbnN1cHBvcnRlZE1lZGlhVHlwZTogNDE1LFxuICBSYW5nZU5vdFNhdGlzZmlhYmxlOiA0MTYsXG4gIEV4cGVjdGF0aW9uRmFpbGVkOiA0MTcsXG4gIEltQVRlYXBvdDogNDE4LFxuICBNaXNkaXJlY3RlZFJlcXVlc3Q6IDQyMSxcbiAgVW5wcm9jZXNzYWJsZUVudGl0eTogNDIyLFxuICBMb2NrZWQ6IDQyMyxcbiAgRmFpbGVkRGVwZW5kZW5jeTogNDI0LFxuICBUb29FYXJseTogNDI1LFxuICBVcGdyYWRlUmVxdWlyZWQ6IDQyNixcbiAgUHJlY29uZGl0aW9uUmVxdWlyZWQ6IDQyOCxcbiAgVG9vTWFueVJlcXVlc3RzOiA0MjksXG4gIFJlcXVlc3RIZWFkZXJGaWVsZHNUb29MYXJnZTogNDMxLFxuICBVbmF2YWlsYWJsZUZvckxlZ2FsUmVhc29uczogNDUxLFxuICBJbnRlcm5hbFNlcnZlckVycm9yOiA1MDAsXG4gIE5vdEltcGxlbWVudGVkOiA1MDEsXG4gIEJhZEdhdGV3YXk6IDUwMixcbiAgU2VydmljZVVuYXZhaWxhYmxlOiA1MDMsXG4gIEdhdGV3YXlUaW1lb3V0OiA1MDQsXG4gIEh0dHBWZXJzaW9uTm90U3VwcG9ydGVkOiA1MDUsXG4gIFZhcmlhbnRBbHNvTmVnb3RpYXRlczogNTA2LFxuICBJbnN1ZmZpY2llbnRTdG9yYWdlOiA1MDcsXG4gIExvb3BEZXRlY3RlZDogNTA4LFxuICBOb3RFeHRlbmRlZDogNTEwLFxuICBOZXR3b3JrQXV0aGVudGljYXRpb25SZXF1aXJlZDogNTExLFxufTtcblxuT2JqZWN0LmVudHJpZXMoSHR0cFN0YXR1c0NvZGUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICBIdHRwU3RhdHVzQ29kZVt2YWx1ZV0gPSBrZXk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgSHR0cFN0YXR1c0NvZGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG4gIH07XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQXhpb3NVUkxTZWFyY2hQYXJhbXMgZnJvbSAnLi4vaGVscGVycy9BeGlvc1VSTFNlYXJjaFBhcmFtcy5qcyc7XG5cbi8qKlxuICogSXQgcmVwbGFjZXMgYWxsIGluc3RhbmNlcyBvZiB0aGUgY2hhcmFjdGVycyBgOmAsIGAkYCwgYCxgLCBgK2AsIGBbYCwgYW5kIGBdYCB3aXRoIHRoZWlyXG4gKiBVUkkgZW5jb2RlZCBjb3VudGVycGFydHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsIFRoZSB2YWx1ZSB0byBiZSBlbmNvZGVkLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBlbmNvZGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHBhcmFtIHs/b2JqZWN0fSBvcHRpb25zXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIG9wdGlvbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICBcbiAgY29uc3QgX2VuY29kZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5lbmNvZGUgfHwgZW5jb2RlO1xuXG4gIGNvbnN0IHNlcmlhbGl6ZUZuID0gb3B0aW9ucyAmJiBvcHRpb25zLnNlcmlhbGl6ZTtcblxuICBsZXQgc2VyaWFsaXplZFBhcmFtcztcblxuICBpZiAoc2VyaWFsaXplRm4pIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gc2VyaWFsaXplRm4ocGFyYW1zLCBvcHRpb25zKTtcbiAgfSBlbHNlIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gdXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSA/XG4gICAgICBwYXJhbXMudG9TdHJpbmcoKSA6XG4gICAgICBuZXcgQXhpb3NVUkxTZWFyY2hQYXJhbXMocGFyYW1zLCBvcHRpb25zKS50b1N0cmluZyhfZW5jb2RlKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgY29uc3QgaGFzaG1hcmtJbmRleCA9IHVybC5pbmRleE9mKFwiI1wiKTtcblxuICAgIGlmIChoYXNobWFya0luZGV4ICE9PSAtMSkge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIGhhc2htYXJrSW5kZXgpO1xuICAgIH1cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvP1xcLyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcbmltcG9ydCBwbGF0Zm9ybSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXRmb3JtLmhhc1N0YW5kYXJkQnJvd3NlckVudiA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gIHtcbiAgICB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgIGNvbnN0IGNvb2tpZSA9IFtuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKV07XG5cbiAgICAgIHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpICYmIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcblxuICAgICAgdXRpbHMuaXNTdHJpbmcocGF0aCkgJiYgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuXG4gICAgICB1dGlscy5pc1N0cmluZyhkb21haW4pICYmIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG5cbiAgICAgIHNlY3VyZSA9PT0gdHJ1ZSAmJiBjb29raWUucHVzaCgnc2VjdXJlJyk7XG5cbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgIH0sXG5cbiAgICByZWFkKG5hbWUpIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgfSxcblxuICAgIHJlbW92ZShuYW1lKSB7XG4gICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgIH1cbiAgfVxuXG4gIDpcblxuICAvLyBOb24tc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIHtcbiAgICB3cml0ZSgpIHt9LFxuICAgIHJlYWQoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIHJlbW92ZSgpIHt9XG4gIH07XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBJdCB0YWtlcyBhIHN0cmluZyBsaWtlIGBmb29beF1beV1bel1gIGFuZCByZXR1cm5zIGFuIGFycmF5IGxpa2UgYFsnZm9vJywgJ3gnLCAneScsICd6J11cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKlxuICogQHJldHVybnMgQW4gYXJyYXkgb2Ygc3RyaW5ncy5cbiAqL1xuZnVuY3Rpb24gcGFyc2VQcm9wUGF0aChuYW1lKSB7XG4gIC8vIGZvb1t4XVt5XVt6XVxuICAvLyBmb28ueC55LnpcbiAgLy8gZm9vLXgteS16XG4gIC8vIGZvbyB4IHkgelxuICByZXR1cm4gdXRpbHMubWF0Y2hBbGwoL1xcdyt8XFxbKFxcdyopXS9nLCBuYW1lKS5tYXAobWF0Y2ggPT4ge1xuICAgIHJldHVybiBtYXRjaFswXSA9PT0gJ1tdJyA/ICcnIDogbWF0Y2hbMV0gfHwgbWF0Y2hbMF07XG4gIH0pO1xufVxuXG4vKipcbiAqIENvbnZlcnQgYW4gYXJyYXkgdG8gYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8YW55Pn0gYXJyIC0gVGhlIGFycmF5IHRvIGNvbnZlcnQgdG8gYW4gb2JqZWN0LlxuICpcbiAqIEByZXR1cm5zIEFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIGtleXMgYW5kIHZhbHVlcyBhcyB0aGUgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9PYmplY3QoYXJyKSB7XG4gIGNvbnN0IG9iaiA9IHt9O1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYXJyKTtcbiAgbGV0IGk7XG4gIGNvbnN0IGxlbiA9IGtleXMubGVuZ3RoO1xuICBsZXQga2V5O1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBrZXkgPSBrZXlzW2ldO1xuICAgIG9ialtrZXldID0gYXJyW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBJdCB0YWtlcyBhIEZvcm1EYXRhIG9iamVjdCBhbmQgcmV0dXJucyBhIEphdmFTY3JpcHQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1EYXRhIFRoZSBGb3JtRGF0YSBvYmplY3QgdG8gY29udmVydCB0byBKU09OLlxuICpcbiAqIEByZXR1cm5zIHtPYmplY3Q8c3RyaW5nLCBhbnk+IHwgbnVsbH0gVGhlIGNvbnZlcnRlZCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGZvcm1EYXRhVG9KU09OKGZvcm1EYXRhKSB7XG4gIGZ1bmN0aW9uIGJ1aWxkUGF0aChwYXRoLCB2YWx1ZSwgdGFyZ2V0LCBpbmRleCkge1xuICAgIGxldCBuYW1lID0gcGF0aFtpbmRleCsrXTtcblxuICAgIGlmIChuYW1lID09PSAnX19wcm90b19fJykgcmV0dXJuIHRydWU7XG5cbiAgICBjb25zdCBpc051bWVyaWNLZXkgPSBOdW1iZXIuaXNGaW5pdGUoK25hbWUpO1xuICAgIGNvbnN0IGlzTGFzdCA9IGluZGV4ID49IHBhdGgubGVuZ3RoO1xuICAgIG5hbWUgPSAhbmFtZSAmJiB1dGlscy5pc0FycmF5KHRhcmdldCkgPyB0YXJnZXQubGVuZ3RoIDogbmFtZTtcblxuICAgIGlmIChpc0xhc3QpIHtcbiAgICAgIGlmICh1dGlscy5oYXNPd25Qcm9wKHRhcmdldCwgbmFtZSkpIHtcbiAgICAgICAgdGFyZ2V0W25hbWVdID0gW3RhcmdldFtuYW1lXSwgdmFsdWVdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0W25hbWVdID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAhaXNOdW1lcmljS2V5O1xuICAgIH1cblxuICAgIGlmICghdGFyZ2V0W25hbWVdIHx8ICF1dGlscy5pc09iamVjdCh0YXJnZXRbbmFtZV0pKSB7XG4gICAgICB0YXJnZXRbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBidWlsZFBhdGgocGF0aCwgdmFsdWUsIHRhcmdldFtuYW1lXSwgaW5kZXgpO1xuXG4gICAgaWYgKHJlc3VsdCAmJiB1dGlscy5pc0FycmF5KHRhcmdldFtuYW1lXSkpIHtcbiAgICAgIHRhcmdldFtuYW1lXSA9IGFycmF5VG9PYmplY3QodGFyZ2V0W25hbWVdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gIWlzTnVtZXJpY0tleTtcbiAgfVxuXG4gIGlmICh1dGlscy5pc0Zvcm1EYXRhKGZvcm1EYXRhKSAmJiB1dGlscy5pc0Z1bmN0aW9uKGZvcm1EYXRhLmVudHJpZXMpKSB7XG4gICAgY29uc3Qgb2JqID0ge307XG5cbiAgICB1dGlscy5mb3JFYWNoRW50cnkoZm9ybURhdGEsIChuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgYnVpbGRQYXRoKHBhcnNlUHJvcFBhdGgobmFtZSksIHZhbHVlLCBvYmosIDApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JtRGF0YVRvSlNPTjtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGQrXFwtLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGFuIGVycm9yIHRocm93biBieSBBeGlvc1xuICpcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBwYXlsb2FkIGlzIGFuIGVycm9yIHRocm93biBieSBBeGlvcywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQXhpb3NFcnJvcihwYXlsb2FkKSB7XG4gIHJldHVybiB1dGlscy5pc09iamVjdChwYXlsb2FkKSAmJiAocGF5bG9hZC5pc0F4aW9zRXJyb3IgPT09IHRydWUpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5pbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBwbGF0Zm9ybS5oYXNTdGFuZGFyZEJyb3dzZXJFbnYgP1xuXG4vLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3Rcbi8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIGNvbnN0IG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIGNvbnN0IHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxldCBvcmlnaW5VUkw7XG5cbiAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0cyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICBsZXQgaHJlZiA9IHVybDtcblxuICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICB9XG5cbiAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgY29uc3QgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfSkoKTtcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBzdHJpY3RcbmV4cG9ydCBkZWZhdWx0IG51bGw7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcblxuLy8gUmF3QXhpb3NIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xuY29uc3QgaWdub3JlRHVwbGljYXRlT2YgPSB1dGlscy50b09iamVjdFNldChbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXSk7XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSByYXdIZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5leHBvcnQgZGVmYXVsdCByYXdIZWFkZXJzID0+IHtcbiAgY29uc3QgcGFyc2VkID0ge307XG4gIGxldCBrZXk7XG4gIGxldCB2YWw7XG4gIGxldCBpO1xuXG4gIHJhd0hlYWRlcnMgJiYgcmF3SGVhZGVycy5zcGxpdCgnXFxuJykuZm9yRWFjaChmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSBsaW5lLnN1YnN0cmluZygwLCBpKS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSBsaW5lLnN1YnN0cmluZyhpICsgMSkudHJpbSgpO1xuXG4gICAgaWYgKCFrZXkgfHwgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mW2tleV0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0pIHtcbiAgICAgICAgcGFyc2VkW2tleV0ucHVzaCh2YWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBbdmFsXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZVByb3RvY29sKHVybCkge1xuICBjb25zdCBtYXRjaCA9IC9eKFstK1xcd117MSwyNX0pKDo/XFwvXFwvfDopLy5leGVjKHVybCk7XG4gIHJldHVybiBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDYWxjdWxhdGUgZGF0YSBtYXhSYXRlXG4gKiBAcGFyYW0ge051bWJlcn0gW3NhbXBsZXNDb3VudD0gMTBdXG4gKiBAcGFyYW0ge051bWJlcn0gW21pbj0gMTAwMF1cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gc3BlZWRvbWV0ZXIoc2FtcGxlc0NvdW50LCBtaW4pIHtcbiAgc2FtcGxlc0NvdW50ID0gc2FtcGxlc0NvdW50IHx8IDEwO1xuICBjb25zdCBieXRlcyA9IG5ldyBBcnJheShzYW1wbGVzQ291bnQpO1xuICBjb25zdCB0aW1lc3RhbXBzID0gbmV3IEFycmF5KHNhbXBsZXNDb3VudCk7XG4gIGxldCBoZWFkID0gMDtcbiAgbGV0IHRhaWwgPSAwO1xuICBsZXQgZmlyc3RTYW1wbGVUUztcblxuICBtaW4gPSBtaW4gIT09IHVuZGVmaW5lZCA/IG1pbiA6IDEwMDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHB1c2goY2h1bmtMZW5ndGgpIHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuXG4gICAgY29uc3Qgc3RhcnRlZEF0ID0gdGltZXN0YW1wc1t0YWlsXTtcblxuICAgIGlmICghZmlyc3RTYW1wbGVUUykge1xuICAgICAgZmlyc3RTYW1wbGVUUyA9IG5vdztcbiAgICB9XG5cbiAgICBieXRlc1toZWFkXSA9IGNodW5rTGVuZ3RoO1xuICAgIHRpbWVzdGFtcHNbaGVhZF0gPSBub3c7XG5cbiAgICBsZXQgaSA9IHRhaWw7XG4gICAgbGV0IGJ5dGVzQ291bnQgPSAwO1xuXG4gICAgd2hpbGUgKGkgIT09IGhlYWQpIHtcbiAgICAgIGJ5dGVzQ291bnQgKz0gYnl0ZXNbaSsrXTtcbiAgICAgIGkgPSBpICUgc2FtcGxlc0NvdW50O1xuICAgIH1cblxuICAgIGhlYWQgPSAoaGVhZCArIDEpICUgc2FtcGxlc0NvdW50O1xuXG4gICAgaWYgKGhlYWQgPT09IHRhaWwpIHtcbiAgICAgIHRhaWwgPSAodGFpbCArIDEpICUgc2FtcGxlc0NvdW50O1xuICAgIH1cblxuICAgIGlmIChub3cgLSBmaXJzdFNhbXBsZVRTIDwgbWluKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFzc2VkID0gc3RhcnRlZEF0ICYmIG5vdyAtIHN0YXJ0ZWRBdDtcblxuICAgIHJldHVybiBwYXNzZWQgPyBNYXRoLnJvdW5kKGJ5dGVzQ291bnQgKiAxMDAwIC8gcGFzc2VkKSA6IHVuZGVmaW5lZDtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3BlZWRvbWV0ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcbi8vIHRlbXBvcmFyeSBob3RmaXggdG8gYXZvaWQgY2lyY3VsYXIgcmVmZXJlbmNlcyB1bnRpbCBBeGlvc1VSTFNlYXJjaFBhcmFtcyBpcyByZWZhY3RvcmVkXG5pbXBvcnQgUGxhdGZvcm1Gb3JtRGF0YSBmcm9tICcuLi9wbGF0Zm9ybS9ub2RlL2NsYXNzZXMvRm9ybURhdGEuanMnO1xuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlIGdpdmVuIHRoaW5nIGlzIGEgYXJyYXkgb3IganMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0aGluZyAtIFRoZSBvYmplY3Qgb3IgYXJyYXkgdG8gYmUgdmlzaXRlZC5cbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNWaXNpdGFibGUodGhpbmcpIHtcbiAgcmV0dXJuIHV0aWxzLmlzUGxhaW5PYmplY3QodGhpbmcpIHx8IHV0aWxzLmlzQXJyYXkodGhpbmcpO1xufVxuXG4vKipcbiAqIEl0IHJlbW92ZXMgdGhlIGJyYWNrZXRzIGZyb20gdGhlIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUga2V5IG9mIHRoZSBwYXJhbWV0ZXIuXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gdGhlIGtleSB3aXRob3V0IHRoZSBicmFja2V0cy5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlQnJhY2tldHMoa2V5KSB7XG4gIHJldHVybiB1dGlscy5lbmRzV2l0aChrZXksICdbXScpID8ga2V5LnNsaWNlKDAsIC0yKSA6IGtleTtcbn1cblxuLyoqXG4gKiBJdCB0YWtlcyBhIHBhdGgsIGEga2V5LCBhbmQgYSBib29sZWFuLCBhbmQgcmV0dXJucyBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gVGhlIHBhdGggdG8gdGhlIGN1cnJlbnQga2V5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBrZXkgb2YgdGhlIGN1cnJlbnQgb2JqZWN0IGJlaW5nIGl0ZXJhdGVkIG92ZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gZG90cyAtIElmIHRydWUsIHRoZSBrZXkgd2lsbCBiZSByZW5kZXJlZCB3aXRoIGRvdHMgaW5zdGVhZCBvZiBicmFja2V0cy5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcGF0aCB0byB0aGUgY3VycmVudCBrZXkuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlcktleShwYXRoLCBrZXksIGRvdHMpIHtcbiAgaWYgKCFwYXRoKSByZXR1cm4ga2V5O1xuICByZXR1cm4gcGF0aC5jb25jYXQoa2V5KS5tYXAoZnVuY3Rpb24gZWFjaCh0b2tlbiwgaSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHRva2VuID0gcmVtb3ZlQnJhY2tldHModG9rZW4pO1xuICAgIHJldHVybiAhZG90cyAmJiBpID8gJ1snICsgdG9rZW4gKyAnXScgOiB0b2tlbjtcbiAgfSkuam9pbihkb3RzID8gJy4nIDogJycpO1xufVxuXG4vKipcbiAqIElmIHRoZSBhcnJheSBpcyBhbiBhcnJheSBhbmQgbm9uZSBvZiBpdHMgZWxlbWVudHMgYXJlIHZpc2l0YWJsZSwgdGhlbiBpdCdzIGEgZmxhdCBhcnJheS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PGFueT59IGFyciAtIFRoZSBhcnJheSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc0ZsYXRBcnJheShhcnIpIHtcbiAgcmV0dXJuIHV0aWxzLmlzQXJyYXkoYXJyKSAmJiAhYXJyLnNvbWUoaXNWaXNpdGFibGUpO1xufVxuXG5jb25zdCBwcmVkaWNhdGVzID0gdXRpbHMudG9GbGF0T2JqZWN0KHV0aWxzLCB7fSwgbnVsbCwgZnVuY3Rpb24gZmlsdGVyKHByb3ApIHtcbiAgcmV0dXJuIC9eaXNbQS1aXS8udGVzdChwcm9wKTtcbn0pO1xuXG4vKipcbiAqIENvbnZlcnQgYSBkYXRhIG9iamVjdCB0byBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7P09iamVjdH0gW2Zvcm1EYXRhXVxuICogQHBhcmFtIHs/T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLnZpc2l0b3JdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLm1ldGFUb2tlbnMgPSB0cnVlXVxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5kb3RzID0gZmFsc2VdXG4gKiBAcGFyYW0gez9Cb29sZWFufSBbb3B0aW9ucy5pbmRleGVzID0gZmFsc2VdXG4gKlxuICogQHJldHVybnMge09iamVjdH1cbiAqKi9cblxuLyoqXG4gKiBJdCBjb252ZXJ0cyBhbiBvYmplY3QgaW50byBhIEZvcm1EYXRhIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0PGFueSwgYW55Pn0gb2JqIC0gVGhlIG9iamVjdCB0byBjb252ZXJ0IHRvIGZvcm0gZGF0YS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtRGF0YSAtIFRoZSBGb3JtRGF0YSBvYmplY3QgdG8gYXBwZW5kIHRvLlxuICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBhbnk+fSBvcHRpb25zXG4gKlxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gdG9Gb3JtRGF0YShvYmosIGZvcm1EYXRhLCBvcHRpb25zKSB7XG4gIGlmICghdXRpbHMuaXNPYmplY3Qob2JqKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3RhcmdldCBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGZvcm1EYXRhID0gZm9ybURhdGEgfHwgbmV3IChQbGF0Zm9ybUZvcm1EYXRhIHx8IEZvcm1EYXRhKSgpO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBvcHRpb25zID0gdXRpbHMudG9GbGF0T2JqZWN0KG9wdGlvbnMsIHtcbiAgICBtZXRhVG9rZW5zOiB0cnVlLFxuICAgIGRvdHM6IGZhbHNlLFxuICAgIGluZGV4ZXM6IGZhbHNlXG4gIH0sIGZhbHNlLCBmdW5jdGlvbiBkZWZpbmVkKG9wdGlvbiwgc291cmNlKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVxLW51bGwsZXFlcWVxXG4gICAgcmV0dXJuICF1dGlscy5pc1VuZGVmaW5lZChzb3VyY2Vbb3B0aW9uXSk7XG4gIH0pO1xuXG4gIGNvbnN0IG1ldGFUb2tlbnMgPSBvcHRpb25zLm1ldGFUb2tlbnM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICBjb25zdCB2aXNpdG9yID0gb3B0aW9ucy52aXNpdG9yIHx8IGRlZmF1bHRWaXNpdG9yO1xuICBjb25zdCBkb3RzID0gb3B0aW9ucy5kb3RzO1xuICBjb25zdCBpbmRleGVzID0gb3B0aW9ucy5pbmRleGVzO1xuICBjb25zdCBfQmxvYiA9IG9wdGlvbnMuQmxvYiB8fCB0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgJiYgQmxvYjtcbiAgY29uc3QgdXNlQmxvYiA9IF9CbG9iICYmIHV0aWxzLmlzU3BlY0NvbXBsaWFudEZvcm0oZm9ybURhdGEpO1xuXG4gIGlmICghdXRpbHMuaXNGdW5jdGlvbih2aXNpdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3Zpc2l0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICBmdW5jdGlvbiBjb252ZXJ0VmFsdWUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHJldHVybiAnJztcblxuICAgIGlmICh1dGlscy5pc0RhdGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWUudG9JU09TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBpZiAoIXVzZUJsb2IgJiYgdXRpbHMuaXNCbG9iKHZhbHVlKSkge1xuICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoJ0Jsb2IgaXMgbm90IHN1cHBvcnRlZC4gVXNlIGEgQnVmZmVyIGluc3RlYWQuJyk7XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXIodmFsdWUpIHx8IHV0aWxzLmlzVHlwZWRBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB1c2VCbG9iICYmIHR5cGVvZiBCbG9iID09PSAnZnVuY3Rpb24nID8gbmV3IEJsb2IoW3ZhbHVlXSkgOiBCdWZmZXIuZnJvbSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgdmlzaXRvci5cbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IGtleVxuICAgKiBAcGFyYW0ge0FycmF5PFN0cmluZ3xOdW1iZXI+fSBwYXRoXG4gICAqIEB0aGlzIHtGb3JtRGF0YX1cbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59IHJldHVybiB0cnVlIHRvIHZpc2l0IHRoZSBlYWNoIHByb3Agb2YgdGhlIHZhbHVlIHJlY3Vyc2l2ZWx5XG4gICAqL1xuICBmdW5jdGlvbiBkZWZhdWx0VmlzaXRvcih2YWx1ZSwga2V5LCBwYXRoKSB7XG4gICAgbGV0IGFyciA9IHZhbHVlO1xuXG4gICAgaWYgKHZhbHVlICYmICFwYXRoICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICh1dGlscy5lbmRzV2l0aChrZXksICd7fScpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBrZXkgPSBtZXRhVG9rZW5zID8ga2V5IDoga2V5LnNsaWNlKDAsIC0yKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgKHV0aWxzLmlzQXJyYXkodmFsdWUpICYmIGlzRmxhdEFycmF5KHZhbHVlKSkgfHxcbiAgICAgICAgKCh1dGlscy5pc0ZpbGVMaXN0KHZhbHVlKSB8fCB1dGlscy5lbmRzV2l0aChrZXksICdbXScpKSAmJiAoYXJyID0gdXRpbHMudG9BcnJheSh2YWx1ZSkpXG4gICAgICAgICkpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIGtleSA9IHJlbW92ZUJyYWNrZXRzKGtleSk7XG5cbiAgICAgICAgYXJyLmZvckVhY2goZnVuY3Rpb24gZWFjaChlbCwgaW5kZXgpIHtcbiAgICAgICAgICAhKHV0aWxzLmlzVW5kZWZpbmVkKGVsKSB8fCBlbCA9PT0gbnVsbCkgJiYgZm9ybURhdGEuYXBwZW5kKFxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG4gICAgICAgICAgICBpbmRleGVzID09PSB0cnVlID8gcmVuZGVyS2V5KFtrZXldLCBpbmRleCwgZG90cykgOiAoaW5kZXhlcyA9PT0gbnVsbCA/IGtleSA6IGtleSArICdbXScpLFxuICAgICAgICAgICAgY29udmVydFZhbHVlKGVsKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzVmlzaXRhYmxlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9ybURhdGEuYXBwZW5kKHJlbmRlcktleShwYXRoLCBrZXksIGRvdHMpLCBjb252ZXJ0VmFsdWUodmFsdWUpKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHN0YWNrID0gW107XG5cbiAgY29uc3QgZXhwb3NlZEhlbHBlcnMgPSBPYmplY3QuYXNzaWduKHByZWRpY2F0ZXMsIHtcbiAgICBkZWZhdWx0VmlzaXRvcixcbiAgICBjb252ZXJ0VmFsdWUsXG4gICAgaXNWaXNpdGFibGVcbiAgfSk7XG5cbiAgZnVuY3Rpb24gYnVpbGQodmFsdWUsIHBhdGgpIHtcbiAgICBpZiAodXRpbHMuaXNVbmRlZmluZWQodmFsdWUpKSByZXR1cm47XG5cbiAgICBpZiAoc3RhY2suaW5kZXhPZih2YWx1ZSkgIT09IC0xKSB7XG4gICAgICB0aHJvdyBFcnJvcignQ2lyY3VsYXIgcmVmZXJlbmNlIGRldGVjdGVkIGluICcgKyBwYXRoLmpvaW4oJy4nKSk7XG4gICAgfVxuXG4gICAgc3RhY2sucHVzaCh2YWx1ZSk7XG5cbiAgICB1dGlscy5mb3JFYWNoKHZhbHVlLCBmdW5jdGlvbiBlYWNoKGVsLCBrZXkpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9ICEodXRpbHMuaXNVbmRlZmluZWQoZWwpIHx8IGVsID09PSBudWxsKSAmJiB2aXNpdG9yLmNhbGwoXG4gICAgICAgIGZvcm1EYXRhLCBlbCwgdXRpbHMuaXNTdHJpbmcoa2V5KSA/IGtleS50cmltKCkgOiBrZXksIHBhdGgsIGV4cG9zZWRIZWxwZXJzXG4gICAgICApO1xuXG4gICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgIGJ1aWxkKGVsLCBwYXRoID8gcGF0aC5jb25jYXQoa2V5KSA6IFtrZXldKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHN0YWNrLnBvcCgpO1xuICB9XG5cbiAgaWYgKCF1dGlscy5pc09iamVjdChvYmopKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZGF0YSBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICB9XG5cbiAgYnVpbGQob2JqKTtcblxuICByZXR1cm4gZm9ybURhdGE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvRm9ybURhdGE7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgdG9Gb3JtRGF0YSBmcm9tICcuL3RvRm9ybURhdGEuanMnO1xuaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4uL3BsYXRmb3JtL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9VUkxFbmNvZGVkRm9ybShkYXRhLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b0Zvcm1EYXRhKGRhdGEsIG5ldyBwbGF0Zm9ybS5jbGFzc2VzLlVSTFNlYXJjaFBhcmFtcygpLCBPYmplY3QuYXNzaWduKHtcbiAgICB2aXNpdG9yOiBmdW5jdGlvbih2YWx1ZSwga2V5LCBwYXRoLCBoZWxwZXJzKSB7XG4gICAgICBpZiAocGxhdGZvcm0uaXNOb2RlICYmIHV0aWxzLmlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgICB0aGlzLmFwcGVuZChrZXksIHZhbHVlLnRvU3RyaW5nKCdiYXNlNjQnKSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGhlbHBlcnMuZGVmYXVsdFZpc2l0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH0sIG9wdGlvbnMpKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtWRVJTSU9OfSBmcm9tICcuLi9lbnYvZGF0YS5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuXG5jb25zdCB2YWxpZGF0b3JzID0ge307XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5bJ29iamVjdCcsICdib29sZWFuJywgJ251bWJlcicsICdmdW5jdGlvbicsICdzdHJpbmcnLCAnc3ltYm9sJ10uZm9yRWFjaCgodHlwZSwgaSkgPT4ge1xuICB2YWxpZGF0b3JzW3R5cGVdID0gZnVuY3Rpb24gdmFsaWRhdG9yKHRoaW5nKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gdHlwZSB8fCAnYScgKyAoaSA8IDEgPyAnbiAnIDogJyAnKSArIHR5cGU7XG4gIH07XG59KTtcblxuY29uc3QgZGVwcmVjYXRlZFdhcm5pbmdzID0ge307XG5cbi8qKlxuICogVHJhbnNpdGlvbmFsIG9wdGlvbiB2YWxpZGF0b3JcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufGJvb2xlYW4/fSB2YWxpZGF0b3IgLSBzZXQgdG8gZmFsc2UgaWYgdGhlIHRyYW5zaXRpb25hbCBvcHRpb24gaGFzIGJlZW4gcmVtb3ZlZFxuICogQHBhcmFtIHtzdHJpbmc/fSB2ZXJzaW9uIC0gZGVwcmVjYXRlZCB2ZXJzaW9uIC8gcmVtb3ZlZCBzaW5jZSB2ZXJzaW9uXG4gKiBAcGFyYW0ge3N0cmluZz99IG1lc3NhZ2UgLSBzb21lIG1lc3NhZ2Ugd2l0aCBhZGRpdGlvbmFsIGluZm9cbiAqXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbnZhbGlkYXRvcnMudHJhbnNpdGlvbmFsID0gZnVuY3Rpb24gdHJhbnNpdGlvbmFsKHZhbGlkYXRvciwgdmVyc2lvbiwgbWVzc2FnZSkge1xuICBmdW5jdGlvbiBmb3JtYXRNZXNzYWdlKG9wdCwgZGVzYykge1xuICAgIHJldHVybiAnW0F4aW9zIHYnICsgVkVSU0lPTiArICddIFRyYW5zaXRpb25hbCBvcHRpb24gXFwnJyArIG9wdCArICdcXCcnICsgZGVzYyArIChtZXNzYWdlID8gJy4gJyArIG1lc3NhZ2UgOiAnJyk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICByZXR1cm4gKHZhbHVlLCBvcHQsIG9wdHMpID0+IHtcbiAgICBpZiAodmFsaWRhdG9yID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoXG4gICAgICAgIGZvcm1hdE1lc3NhZ2Uob3B0LCAnIGhhcyBiZWVuIHJlbW92ZWQnICsgKHZlcnNpb24gPyAnIGluICcgKyB2ZXJzaW9uIDogJycpKSxcbiAgICAgICAgQXhpb3NFcnJvci5FUlJfREVQUkVDQVRFRFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAodmVyc2lvbiAmJiAhZGVwcmVjYXRlZFdhcm5pbmdzW29wdF0pIHtcbiAgICAgIGRlcHJlY2F0ZWRXYXJuaW5nc1tvcHRdID0gdHJ1ZTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGZvcm1hdE1lc3NhZ2UoXG4gICAgICAgICAgb3B0LFxuICAgICAgICAgICcgaGFzIGJlZW4gZGVwcmVjYXRlZCBzaW5jZSB2JyArIHZlcnNpb24gKyAnIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5lYXIgZnV0dXJlJ1xuICAgICAgICApXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0b3IgPyB2YWxpZGF0b3IodmFsdWUsIG9wdCwgb3B0cykgOiB0cnVlO1xuICB9O1xufTtcblxuLyoqXG4gKiBBc3NlcnQgb2JqZWN0J3MgcHJvcGVydGllcyB0eXBlXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7b2JqZWN0fSBzY2hlbWFcbiAqIEBwYXJhbSB7Ym9vbGVhbj99IGFsbG93VW5rbm93blxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gYXNzZXJ0T3B0aW9ucyhvcHRpb25zLCBzY2hlbWEsIGFsbG93VW5rbm93bikge1xuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoJ29wdGlvbnMgbXVzdCBiZSBhbiBvYmplY3QnLCBBeGlvc0Vycm9yLkVSUl9CQURfT1BUSU9OX1ZBTFVFKTtcbiAgfVxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucyk7XG4gIGxldCBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0gPiAwKSB7XG4gICAgY29uc3Qgb3B0ID0ga2V5c1tpXTtcbiAgICBjb25zdCB2YWxpZGF0b3IgPSBzY2hlbWFbb3B0XTtcbiAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IG9wdGlvbnNbb3B0XTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsaWRhdG9yKHZhbHVlLCBvcHQsIG9wdGlvbnMpO1xuICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignb3B0aW9uICcgKyBvcHQgKyAnIG11c3QgYmUgJyArIHJlc3VsdCwgQXhpb3NFcnJvci5FUlJfQkFEX09QVElPTl9WQUxVRSk7XG4gICAgICB9XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFsbG93VW5rbm93biAhPT0gdHJ1ZSkge1xuICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoJ1Vua25vd24gb3B0aW9uICcgKyBvcHQsIEF4aW9zRXJyb3IuRVJSX0JBRF9PUFRJT04pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFzc2VydE9wdGlvbnMsXG4gIHZhbGlkYXRvcnNcbn07XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0IGRlZmF1bHQgdHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnID8gQmxvYiA6IG51bGxcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgdHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJyA/IEZvcm1EYXRhIDogbnVsbDtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEF4aW9zVVJMU2VhcmNoUGFyYW1zIGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvQXhpb3NVUkxTZWFyY2hQYXJhbXMuanMnO1xuZXhwb3J0IGRlZmF1bHQgdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgPyBVUkxTZWFyY2hQYXJhbXMgOiBBeGlvc1VSTFNlYXJjaFBhcmFtcztcbiIsImltcG9ydCBVUkxTZWFyY2hQYXJhbXMgZnJvbSAnLi9jbGFzc2VzL1VSTFNlYXJjaFBhcmFtcy5qcydcbmltcG9ydCBGb3JtRGF0YSBmcm9tICcuL2NsYXNzZXMvRm9ybURhdGEuanMnXG5pbXBvcnQgQmxvYiBmcm9tICcuL2NsYXNzZXMvQmxvYi5qcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpc0Jyb3dzZXI6IHRydWUsXG4gIGNsYXNzZXM6IHtcbiAgICBVUkxTZWFyY2hQYXJhbXMsXG4gICAgRm9ybURhdGEsXG4gICAgQmxvYlxuICB9LFxuICBwcm90b2NvbHM6IFsnaHR0cCcsICdodHRwcycsICdmaWxlJywgJ2Jsb2InLCAndXJsJywgJ2RhdGEnXVxufTtcbiIsImNvbnN0IGhhc0Jyb3dzZXJFbnYgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuY29uc3QgaGFzU3RhbmRhcmRCcm93c2VyRW52ID0gKFxuICAocHJvZHVjdCkgPT4ge1xuICAgIHJldHVybiBoYXNCcm93c2VyRW52ICYmIFsnUmVhY3ROYXRpdmUnLCAnTmF0aXZlU2NyaXB0JywgJ05TJ10uaW5kZXhPZihwcm9kdWN0KSA8IDBcbiAgfSkodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnByb2R1Y3QpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciB3ZWJXb3JrZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBBbHRob3VnaCB0aGUgYGlzU3RhbmRhcmRCcm93c2VyRW52YCBtZXRob2QgaW5kaWNhdGVzIHRoYXRcbiAqIGBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlcmAsIHRoZSBXZWJXb3JrZXIgd2lsbCBzdGlsbCBiZVxuICogZmlsdGVyZWQgb3V0IGR1ZSB0byBpdHMganVkZ21lbnQgc3RhbmRhcmRcbiAqIGB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnYC5cbiAqIFRoaXMgbGVhZHMgdG8gYSBwcm9ibGVtIHdoZW4gYXhpb3MgcG9zdCBgRm9ybURhdGFgIGluIHdlYldvcmtlclxuICovXG5jb25zdCBoYXNTdGFuZGFyZEJyb3dzZXJXZWJXb3JrZXJFbnYgPSAoKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBzZWxmIGluc3RhbmNlb2YgV29ya2VyR2xvYmFsU2NvcGUgJiZcbiAgICB0eXBlb2Ygc2VsZi5pbXBvcnRTY3JpcHRzID09PSAnZnVuY3Rpb24nXG4gICk7XG59KSgpO1xuXG5leHBvcnQge1xuICBoYXNCcm93c2VyRW52LFxuICBoYXNTdGFuZGFyZEJyb3dzZXJXZWJXb3JrZXJFbnYsXG4gIGhhc1N0YW5kYXJkQnJvd3NlckVudlxufVxuIiwiaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4vbm9kZS9pbmRleC5qcyc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL2NvbW1vbi91dGlscy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLi4udXRpbHMsXG4gIC4uLnBsYXRmb3JtXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBiaW5kIGZyb20gJy4vaGVscGVycy9iaW5kLmpzJztcblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxuY29uc3Qge3RvU3RyaW5nfSA9IE9iamVjdC5wcm90b3R5cGU7XG5jb25zdCB7Z2V0UHJvdG90eXBlT2Z9ID0gT2JqZWN0O1xuXG5jb25zdCBraW5kT2YgPSAoY2FjaGUgPT4gdGhpbmcgPT4ge1xuICAgIGNvbnN0IHN0ciA9IHRvU3RyaW5nLmNhbGwodGhpbmcpO1xuICAgIHJldHVybiBjYWNoZVtzdHJdIHx8IChjYWNoZVtzdHJdID0gc3RyLnNsaWNlKDgsIC0xKS50b0xvd2VyQ2FzZSgpKTtcbn0pKE9iamVjdC5jcmVhdGUobnVsbCkpO1xuXG5jb25zdCBraW5kT2ZUZXN0ID0gKHR5cGUpID0+IHtcbiAgdHlwZSA9IHR5cGUudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuICh0aGluZykgPT4ga2luZE9mKHRoaW5nKSA9PT0gdHlwZVxufVxuXG5jb25zdCB0eXBlT2ZUZXN0ID0gdHlwZSA9PiB0aGluZyA9PiB0eXBlb2YgdGhpbmcgPT09IHR5cGU7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCB7aXNBcnJheX0gPSBBcnJheTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1VuZGVmaW5lZCA9IHR5cGVPZlRlc3QoJ3VuZGVmaW5lZCcpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQnVmZmVyXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQnVmZmVyKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwpICYmIHZhbC5jb25zdHJ1Y3RvciAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsLmNvbnN0cnVjdG9yKVxuICAgICYmIGlzRnVuY3Rpb24odmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKSAmJiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIodmFsKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0FycmF5QnVmZmVyID0ga2luZE9mVGVzdCgnQXJyYXlCdWZmZXInKTtcblxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIGxldCByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKGlzQXJyYXlCdWZmZXIodmFsLmJ1ZmZlcikpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNTdHJpbmcgPSB0eXBlT2ZUZXN0KCdzdHJpbmcnKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0Z1bmN0aW9uID0gdHlwZU9mVGVzdCgnZnVuY3Rpb24nKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc051bWJlciA9IHR5cGVPZlRlc3QoJ251bWJlcicpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdGhpbmcgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc09iamVjdCA9ICh0aGluZykgPT4gdGhpbmcgIT09IG51bGwgJiYgdHlwZW9mIHRoaW5nID09PSAnb2JqZWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJvb2xlYW5cbiAqXG4gKiBAcGFyYW0geyp9IHRoaW5nIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJvb2xlYW4sIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0Jvb2xlYW4gPSB0aGluZyA9PiB0aGluZyA9PT0gdHJ1ZSB8fCB0aGluZyA9PT0gZmFsc2U7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgcGxhaW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNQbGFpbk9iamVjdCA9ICh2YWwpID0+IHtcbiAgaWYgKGtpbmRPZih2YWwpICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKHZhbCk7XG4gIHJldHVybiAocHJvdG90eXBlID09PSBudWxsIHx8IHByb3RvdHlwZSA9PT0gT2JqZWN0LnByb3RvdHlwZSB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG90eXBlKSA9PT0gbnVsbCkgJiYgIShTeW1ib2wudG9TdHJpbmdUYWcgaW4gdmFsKSAmJiAhKFN5bWJvbC5pdGVyYXRvciBpbiB2YWwpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNEYXRlID0ga2luZE9mVGVzdCgnRGF0ZScpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNGaWxlID0ga2luZE9mVGVzdCgnRmlsZScpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNCbG9iID0ga2luZE9mVGVzdCgnQmxvYicpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZUxpc3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzRmlsZUxpc3QgPSBraW5kT2ZUZXN0KCdGaWxlTGlzdCcpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzU3RyZWFtID0gKHZhbCkgPT4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHsqfSB0aGluZyBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNGb3JtRGF0YSA9ICh0aGluZykgPT4ge1xuICBsZXQga2luZDtcbiAgcmV0dXJuIHRoaW5nICYmIChcbiAgICAodHlwZW9mIEZvcm1EYXRhID09PSAnZnVuY3Rpb24nICYmIHRoaW5nIGluc3RhbmNlb2YgRm9ybURhdGEpIHx8IChcbiAgICAgIGlzRnVuY3Rpb24odGhpbmcuYXBwZW5kKSAmJiAoXG4gICAgICAgIChraW5kID0ga2luZE9mKHRoaW5nKSkgPT09ICdmb3JtZGF0YScgfHxcbiAgICAgICAgLy8gZGV0ZWN0IGZvcm0tZGF0YSBpbnN0YW5jZVxuICAgICAgICAoa2luZCA9PT0gJ29iamVjdCcgJiYgaXNGdW5jdGlvbih0aGluZy50b1N0cmluZykgJiYgdGhpbmcudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgRm9ybURhdGFdJylcbiAgICAgIClcbiAgICApXG4gIClcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzVVJMU2VhcmNoUGFyYW1zID0ga2luZE9mVGVzdCgnVVJMU2VhcmNoUGFyYW1zJyk7XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmNvbnN0IHRyaW0gPSAoc3RyKSA9PiBzdHIudHJpbSA/XG4gIHN0ci50cmltKCkgOiBzdHIucmVwbGFjZSgvXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csICcnKTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2FsbE93bktleXMgPSBmYWxzZV1cbiAqIEByZXR1cm5zIHthbnl9XG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbiwge2FsbE93bktleXMgPSBmYWxzZX0gPSB7fSkge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBpO1xuICBsZXQgbDtcblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAoaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgY29uc3Qga2V5cyA9IGFsbE93bktleXMgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopIDogT2JqZWN0LmtleXMob2JqKTtcbiAgICBjb25zdCBsZW4gPSBrZXlzLmxlbmd0aDtcbiAgICBsZXQga2V5O1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iaiwga2V5KSB7XG4gIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgbGV0IGkgPSBrZXlzLmxlbmd0aDtcbiAgbGV0IF9rZXk7XG4gIHdoaWxlIChpLS0gPiAwKSB7XG4gICAgX2tleSA9IGtleXNbaV07XG4gICAgaWYgKGtleSA9PT0gX2tleS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICByZXR1cm4gX2tleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmNvbnN0IF9nbG9iYWwgPSAoKCkgPT4ge1xuICAvKmVzbGludCBuby11bmRlZjowKi9cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gZ2xvYmFsVGhpcztcbiAgcmV0dXJuIHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbClcbn0pKCk7XG5cbmNvbnN0IGlzQ29udGV4dERlZmluZWQgPSAoY29udGV4dCkgPT4gIWlzVW5kZWZpbmVkKGNvbnRleHQpICYmIGNvbnRleHQgIT09IF9nbG9iYWw7XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgY29uc3Qge2Nhc2VsZXNzfSA9IGlzQ29udGV4dERlZmluZWQodGhpcykgJiYgdGhpcyB8fCB7fTtcbiAgY29uc3QgcmVzdWx0ID0ge307XG4gIGNvbnN0IGFzc2lnblZhbHVlID0gKHZhbCwga2V5KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0S2V5ID0gY2FzZWxlc3MgJiYgZmluZEtleShyZXN1bHQsIGtleSkgfHwga2V5O1xuICAgIGlmIChpc1BsYWluT2JqZWN0KHJlc3VsdFt0YXJnZXRLZXldKSAmJiBpc1BsYWluT2JqZWN0KHZhbCkpIHtcbiAgICAgIHJlc3VsdFt0YXJnZXRLZXldID0gbWVyZ2UocmVzdWx0W3RhcmdldEtleV0sIHZhbCk7XG4gICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHZhbCkpIHtcbiAgICAgIHJlc3VsdFt0YXJnZXRLZXldID0gbWVyZ2Uoe30sIHZhbCk7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHZhbCkpIHtcbiAgICAgIHJlc3VsdFt0YXJnZXRLZXldID0gdmFsLnNsaWNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFt0YXJnZXRLZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGFyZ3VtZW50c1tpXSAmJiBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFthbGxPd25LZXlzXVxuICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5jb25zdCBleHRlbmQgPSAoYSwgYiwgdGhpc0FyZywge2FsbE93bktleXN9PSB7fSkgPT4ge1xuICBmb3JFYWNoKGIsICh2YWwsIGtleSkgPT4ge1xuICAgIGlmICh0aGlzQXJnICYmIGlzRnVuY3Rpb24odmFsKSkge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9LCB7YWxsT3duS2V5c30pO1xuICByZXR1cm4gYTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYnl0ZSBvcmRlciBtYXJrZXIuIFRoaXMgY2F0Y2hlcyBFRiBCQiBCRiAodGhlIFVURi04IEJPTSlcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCB3aXRoIEJPTVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGNvbnRlbnQgdmFsdWUgd2l0aG91dCBCT01cbiAqL1xuY29uc3Qgc3RyaXBCT00gPSAoY29udGVudCkgPT4ge1xuICBpZiAoY29udGVudC5jaGFyQ29kZUF0KDApID09PSAweEZFRkYpIHtcbiAgICBjb250ZW50ID0gY29udGVudC5zbGljZSgxKTtcbiAgfVxuICByZXR1cm4gY29udGVudDtcbn1cblxuLyoqXG4gKiBJbmhlcml0IHRoZSBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIG9uZSBjb25zdHJ1Y3RvciBpbnRvIGFub3RoZXJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge29iamVjdH0gW3Byb3BzXVxuICogQHBhcmFtIHtvYmplY3R9IFtkZXNjcmlwdG9yc11cbiAqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuY29uc3QgaW5oZXJpdHMgPSAoY29uc3RydWN0b3IsIHN1cGVyQ29uc3RydWN0b3IsIHByb3BzLCBkZXNjcmlwdG9ycykgPT4ge1xuICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ29uc3RydWN0b3IucHJvdG90eXBlLCBkZXNjcmlwdG9ycyk7XG4gIGNvbnN0cnVjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29uc3RydWN0b3IsICdzdXBlcicsIHtcbiAgICB2YWx1ZTogc3VwZXJDb25zdHJ1Y3Rvci5wcm90b3R5cGVcbiAgfSk7XG4gIHByb3BzICYmIE9iamVjdC5hc3NpZ24oY29uc3RydWN0b3IucHJvdG90eXBlLCBwcm9wcyk7XG59XG5cbi8qKlxuICogUmVzb2x2ZSBvYmplY3Qgd2l0aCBkZWVwIHByb3RvdHlwZSBjaGFpbiB0byBhIGZsYXQgb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlT2JqIHNvdXJjZSBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBbZGVzdE9ial1cbiAqIEBwYXJhbSB7RnVuY3Rpb258Qm9vbGVhbn0gW2ZpbHRlcl1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtwcm9wRmlsdGVyXVxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmNvbnN0IHRvRmxhdE9iamVjdCA9IChzb3VyY2VPYmosIGRlc3RPYmosIGZpbHRlciwgcHJvcEZpbHRlcikgPT4ge1xuICBsZXQgcHJvcHM7XG4gIGxldCBpO1xuICBsZXQgcHJvcDtcbiAgY29uc3QgbWVyZ2VkID0ge307XG5cbiAgZGVzdE9iaiA9IGRlc3RPYmogfHwge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lcS1udWxsLGVxZXFlcVxuICBpZiAoc291cmNlT2JqID09IG51bGwpIHJldHVybiBkZXN0T2JqO1xuXG4gIGRvIHtcbiAgICBwcm9wcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZU9iaik7XG4gICAgaSA9IHByb3BzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tID4gMCkge1xuICAgICAgcHJvcCA9IHByb3BzW2ldO1xuICAgICAgaWYgKCghcHJvcEZpbHRlciB8fCBwcm9wRmlsdGVyKHByb3AsIHNvdXJjZU9iaiwgZGVzdE9iaikpICYmICFtZXJnZWRbcHJvcF0pIHtcbiAgICAgICAgZGVzdE9ialtwcm9wXSA9IHNvdXJjZU9ialtwcm9wXTtcbiAgICAgICAgbWVyZ2VkW3Byb3BdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgc291cmNlT2JqID0gZmlsdGVyICE9PSBmYWxzZSAmJiBnZXRQcm90b3R5cGVPZihzb3VyY2VPYmopO1xuICB9IHdoaWxlIChzb3VyY2VPYmogJiYgKCFmaWx0ZXIgfHwgZmlsdGVyKHNvdXJjZU9iaiwgZGVzdE9iaikpICYmIHNvdXJjZU9iaiAhPT0gT2JqZWN0LnByb3RvdHlwZSk7XG5cbiAgcmV0dXJuIGRlc3RPYmo7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgc3RyaW5nIGVuZHMgd2l0aCB0aGUgY2hhcmFjdGVycyBvZiBhIHNwZWNpZmllZCBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VhcmNoU3RyaW5nXG4gKiBAcGFyYW0ge051bWJlcn0gW3Bvc2l0aW9uPSAwXVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5jb25zdCBlbmRzV2l0aCA9IChzdHIsIHNlYXJjaFN0cmluZywgcG9zaXRpb24pID0+IHtcbiAgc3RyID0gU3RyaW5nKHN0cik7XG4gIGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkIHx8IHBvc2l0aW9uID4gc3RyLmxlbmd0aCkge1xuICAgIHBvc2l0aW9uID0gc3RyLmxlbmd0aDtcbiAgfVxuICBwb3NpdGlvbiAtPSBzZWFyY2hTdHJpbmcubGVuZ3RoO1xuICBjb25zdCBsYXN0SW5kZXggPSBzdHIuaW5kZXhPZihzZWFyY2hTdHJpbmcsIHBvc2l0aW9uKTtcbiAgcmV0dXJuIGxhc3RJbmRleCAhPT0gLTEgJiYgbGFzdEluZGV4ID09PSBwb3NpdGlvbjtcbn1cblxuXG4vKipcbiAqIFJldHVybnMgbmV3IGFycmF5IGZyb20gYXJyYXkgbGlrZSBvYmplY3Qgb3IgbnVsbCBpZiBmYWlsZWRcbiAqXG4gKiBAcGFyYW0geyp9IFt0aGluZ11cbiAqXG4gKiBAcmV0dXJucyB7P0FycmF5fVxuICovXG5jb25zdCB0b0FycmF5ID0gKHRoaW5nKSA9PiB7XG4gIGlmICghdGhpbmcpIHJldHVybiBudWxsO1xuICBpZiAoaXNBcnJheSh0aGluZykpIHJldHVybiB0aGluZztcbiAgbGV0IGkgPSB0aGluZy5sZW5ndGg7XG4gIGlmICghaXNOdW1iZXIoaSkpIHJldHVybiBudWxsO1xuICBjb25zdCBhcnIgPSBuZXcgQXJyYXkoaSk7XG4gIHdoaWxlIChpLS0gPiAwKSB7XG4gICAgYXJyW2ldID0gdGhpbmdbaV07XG4gIH1cbiAgcmV0dXJuIGFycjtcbn1cblxuLyoqXG4gKiBDaGVja2luZyBpZiB0aGUgVWludDhBcnJheSBleGlzdHMgYW5kIGlmIGl0IGRvZXMsIGl0IHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNoZWNrcyBpZiB0aGVcbiAqIHRoaW5nIHBhc3NlZCBpbiBpcyBhbiBpbnN0YW5jZSBvZiBVaW50OEFycmF5XG4gKlxuICogQHBhcmFtIHtUeXBlZEFycmF5fVxuICpcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbmNvbnN0IGlzVHlwZWRBcnJheSA9IChUeXBlZEFycmF5ID0+IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgcmV0dXJuIHRoaW5nID0+IHtcbiAgICByZXR1cm4gVHlwZWRBcnJheSAmJiB0aGluZyBpbnN0YW5jZW9mIFR5cGVkQXJyYXk7XG4gIH07XG59KSh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2V0UHJvdG90eXBlT2YoVWludDhBcnJheSkpO1xuXG4vKipcbiAqIEZvciBlYWNoIGVudHJ5IGluIHRoZSBvYmplY3QsIGNhbGwgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGtleSBhbmQgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtPYmplY3Q8YW55LCBhbnk+fSBvYmogLSBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIC0gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggZW50cnkuXG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmNvbnN0IGZvckVhY2hFbnRyeSA9IChvYmosIGZuKSA9PiB7XG4gIGNvbnN0IGdlbmVyYXRvciA9IG9iaiAmJiBvYmpbU3ltYm9sLml0ZXJhdG9yXTtcblxuICBjb25zdCBpdGVyYXRvciA9IGdlbmVyYXRvci5jYWxsKG9iaik7XG5cbiAgbGV0IHJlc3VsdDtcblxuICB3aGlsZSAoKHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKSkgJiYgIXJlc3VsdC5kb25lKSB7XG4gICAgY29uc3QgcGFpciA9IHJlc3VsdC52YWx1ZTtcbiAgICBmbi5jYWxsKG9iaiwgcGFpclswXSwgcGFpclsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBJdCB0YWtlcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBhbmQgYSBzdHJpbmcsIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIGFsbCB0aGUgbWF0Y2hlc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWdFeHAgLSBUaGUgcmVndWxhciBleHByZXNzaW9uIHRvIG1hdGNoIGFnYWluc3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBzZWFyY2guXG4gKlxuICogQHJldHVybnMge0FycmF5PGJvb2xlYW4+fVxuICovXG5jb25zdCBtYXRjaEFsbCA9IChyZWdFeHAsIHN0cikgPT4ge1xuICBsZXQgbWF0Y2hlcztcbiAgY29uc3QgYXJyID0gW107XG5cbiAgd2hpbGUgKChtYXRjaGVzID0gcmVnRXhwLmV4ZWMoc3RyKSkgIT09IG51bGwpIHtcbiAgICBhcnIucHVzaChtYXRjaGVzKTtcbiAgfVxuXG4gIHJldHVybiBhcnI7XG59XG5cbi8qIENoZWNraW5nIGlmIHRoZSBraW5kT2ZUZXN0IGZ1bmN0aW9uIHJldHVybnMgdHJ1ZSB3aGVuIHBhc3NlZCBhbiBIVE1MRm9ybUVsZW1lbnQuICovXG5jb25zdCBpc0hUTUxGb3JtID0ga2luZE9mVGVzdCgnSFRNTEZvcm1FbGVtZW50Jyk7XG5cbmNvbnN0IHRvQ2FtZWxDYXNlID0gc3RyID0+IHtcbiAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1stX1xcc10oW2EtelxcZF0pKFxcdyopL2csXG4gICAgZnVuY3Rpb24gcmVwbGFjZXIobSwgcDEsIHAyKSB7XG4gICAgICByZXR1cm4gcDEudG9VcHBlckNhc2UoKSArIHAyO1xuICAgIH1cbiAgKTtcbn07XG5cbi8qIENyZWF0aW5nIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGNoZWNrIGlmIGFuIG9iamVjdCBoYXMgYSBwcm9wZXJ0eS4gKi9cbmNvbnN0IGhhc093blByb3BlcnR5ID0gKCh7aGFzT3duUHJvcGVydHl9KSA9PiAob2JqLCBwcm9wKSA9PiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpKE9iamVjdC5wcm90b3R5cGUpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgUmVnRXhwIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBSZWdFeHAgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNSZWdFeHAgPSBraW5kT2ZUZXN0KCdSZWdFeHAnKTtcblxuY29uc3QgcmVkdWNlRGVzY3JpcHRvcnMgPSAob2JqLCByZWR1Y2VyKSA9PiB7XG4gIGNvbnN0IGRlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqKTtcbiAgY29uc3QgcmVkdWNlZERlc2NyaXB0b3JzID0ge307XG5cbiAgZm9yRWFjaChkZXNjcmlwdG9ycywgKGRlc2NyaXB0b3IsIG5hbWUpID0+IHtcbiAgICBsZXQgcmV0O1xuICAgIGlmICgocmV0ID0gcmVkdWNlcihkZXNjcmlwdG9yLCBuYW1lLCBvYmopKSAhPT0gZmFsc2UpIHtcbiAgICAgIHJlZHVjZWREZXNjcmlwdG9yc1tuYW1lXSA9IHJldCB8fCBkZXNjcmlwdG9yO1xuICAgIH1cbiAgfSk7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMob2JqLCByZWR1Y2VkRGVzY3JpcHRvcnMpO1xufVxuXG4vKipcbiAqIE1ha2VzIGFsbCBtZXRob2RzIHJlYWQtb25seVxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICovXG5cbmNvbnN0IGZyZWV6ZU1ldGhvZHMgPSAob2JqKSA9PiB7XG4gIHJlZHVjZURlc2NyaXB0b3JzKG9iaiwgKGRlc2NyaXB0b3IsIG5hbWUpID0+IHtcbiAgICAvLyBza2lwIHJlc3RyaWN0ZWQgcHJvcHMgaW4gc3RyaWN0IG1vZGVcbiAgICBpZiAoaXNGdW5jdGlvbihvYmopICYmIFsnYXJndW1lbnRzJywgJ2NhbGxlcicsICdjYWxsZWUnXS5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlID0gb2JqW25hbWVdO1xuXG4gICAgaWYgKCFpc0Z1bmN0aW9uKHZhbHVlKSkgcmV0dXJuO1xuXG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZmFsc2U7XG5cbiAgICBpZiAoJ3dyaXRhYmxlJyBpbiBkZXNjcmlwdG9yKSB7XG4gICAgICBkZXNjcmlwdG9yLndyaXRhYmxlID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFkZXNjcmlwdG9yLnNldCkge1xuICAgICAgZGVzY3JpcHRvci5zZXQgPSAoKSA9PiB7XG4gICAgICAgIHRocm93IEVycm9yKCdDYW4gbm90IHJld3JpdGUgcmVhZC1vbmx5IG1ldGhvZCBcXCcnICsgbmFtZSArICdcXCcnKTtcbiAgICAgIH07XG4gICAgfVxuICB9KTtcbn1cblxuY29uc3QgdG9PYmplY3RTZXQgPSAoYXJyYXlPclN0cmluZywgZGVsaW1pdGVyKSA9PiB7XG4gIGNvbnN0IG9iaiA9IHt9O1xuXG4gIGNvbnN0IGRlZmluZSA9IChhcnIpID0+IHtcbiAgICBhcnIuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICBvYmpbdmFsdWVdID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGlzQXJyYXkoYXJyYXlPclN0cmluZykgPyBkZWZpbmUoYXJyYXlPclN0cmluZykgOiBkZWZpbmUoU3RyaW5nKGFycmF5T3JTdHJpbmcpLnNwbGl0KGRlbGltaXRlcikpO1xuXG4gIHJldHVybiBvYmo7XG59XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG5jb25zdCB0b0Zpbml0ZU51bWJlciA9ICh2YWx1ZSwgZGVmYXVsdFZhbHVlKSA9PiB7XG4gIHZhbHVlID0gK3ZhbHVlO1xuICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKHZhbHVlKSA/IHZhbHVlIDogZGVmYXVsdFZhbHVlO1xufVxuXG5jb25zdCBBTFBIQSA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eidcblxuY29uc3QgRElHSVQgPSAnMDEyMzQ1Njc4OSc7XG5cbmNvbnN0IEFMUEhBQkVUID0ge1xuICBESUdJVCxcbiAgQUxQSEEsXG4gIEFMUEhBX0RJR0lUOiBBTFBIQSArIEFMUEhBLnRvVXBwZXJDYXNlKCkgKyBESUdJVFxufVxuXG5jb25zdCBnZW5lcmF0ZVN0cmluZyA9IChzaXplID0gMTYsIGFscGhhYmV0ID0gQUxQSEFCRVQuQUxQSEFfRElHSVQpID0+IHtcbiAgbGV0IHN0ciA9ICcnO1xuICBjb25zdCB7bGVuZ3RofSA9IGFscGhhYmV0O1xuICB3aGlsZSAoc2l6ZS0tKSB7XG4gICAgc3RyICs9IGFscGhhYmV0W01hdGgucmFuZG9tKCkgKiBsZW5ndGh8MF1cbiAgfVxuXG4gIHJldHVybiBzdHI7XG59XG5cbi8qKlxuICogSWYgdGhlIHRoaW5nIGlzIGEgRm9ybURhdGEgb2JqZWN0LCByZXR1cm4gdHJ1ZSwgb3RoZXJ3aXNlIHJldHVybiBmYWxzZS5cbiAqXG4gKiBAcGFyYW0ge3Vua25vd259IHRoaW5nIC0gVGhlIHRoaW5nIHRvIGNoZWNrLlxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc1NwZWNDb21wbGlhbnRGb3JtKHRoaW5nKSB7XG4gIHJldHVybiAhISh0aGluZyAmJiBpc0Z1bmN0aW9uKHRoaW5nLmFwcGVuZCkgJiYgdGhpbmdbU3ltYm9sLnRvU3RyaW5nVGFnXSA9PT0gJ0Zvcm1EYXRhJyAmJiB0aGluZ1tTeW1ib2wuaXRlcmF0b3JdKTtcbn1cblxuY29uc3QgdG9KU09OT2JqZWN0ID0gKG9iaikgPT4ge1xuICBjb25zdCBzdGFjayA9IG5ldyBBcnJheSgxMCk7XG5cbiAgY29uc3QgdmlzaXQgPSAoc291cmNlLCBpKSA9PiB7XG5cbiAgICBpZiAoaXNPYmplY3Qoc291cmNlKSkge1xuICAgICAgaWYgKHN0YWNrLmluZGV4T2Yoc291cmNlKSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYoISgndG9KU09OJyBpbiBzb3VyY2UpKSB7XG4gICAgICAgIHN0YWNrW2ldID0gc291cmNlO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBpc0FycmF5KHNvdXJjZSkgPyBbXSA6IHt9O1xuXG4gICAgICAgIGZvckVhY2goc291cmNlLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlZHVjZWRWYWx1ZSA9IHZpc2l0KHZhbHVlLCBpICsgMSk7XG4gICAgICAgICAgIWlzVW5kZWZpbmVkKHJlZHVjZWRWYWx1ZSkgJiYgKHRhcmdldFtrZXldID0gcmVkdWNlZFZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3RhY2tbaV0gPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc291cmNlO1xuICB9XG5cbiAgcmV0dXJuIHZpc2l0KG9iaiwgMCk7XG59XG5cbmNvbnN0IGlzQXN5bmNGbiA9IGtpbmRPZlRlc3QoJ0FzeW5jRnVuY3Rpb24nKTtcblxuY29uc3QgaXNUaGVuYWJsZSA9ICh0aGluZykgPT5cbiAgdGhpbmcgJiYgKGlzT2JqZWN0KHRoaW5nKSB8fCBpc0Z1bmN0aW9uKHRoaW5nKSkgJiYgaXNGdW5jdGlvbih0aGluZy50aGVuKSAmJiBpc0Z1bmN0aW9uKHRoaW5nLmNhdGNoKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nLFxuICBpc051bWJlcixcbiAgaXNCb29sZWFuLFxuICBpc09iamVjdCxcbiAgaXNQbGFpbk9iamVjdCxcbiAgaXNVbmRlZmluZWQsXG4gIGlzRGF0ZSxcbiAgaXNGaWxlLFxuICBpc0Jsb2IsXG4gIGlzUmVnRXhwLFxuICBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzVHlwZWRBcnJheSxcbiAgaXNGaWxlTGlzdCxcbiAgZm9yRWFjaCxcbiAgbWVyZ2UsXG4gIGV4dGVuZCxcbiAgdHJpbSxcbiAgc3RyaXBCT00sXG4gIGluaGVyaXRzLFxuICB0b0ZsYXRPYmplY3QsXG4gIGtpbmRPZixcbiAga2luZE9mVGVzdCxcbiAgZW5kc1dpdGgsXG4gIHRvQXJyYXksXG4gIGZvckVhY2hFbnRyeSxcbiAgbWF0Y2hBbGwsXG4gIGlzSFRNTEZvcm0sXG4gIGhhc093blByb3BlcnR5LFxuICBoYXNPd25Qcm9wOiBoYXNPd25Qcm9wZXJ0eSwgLy8gYW4gYWxpYXMgdG8gYXZvaWQgRVNMaW50IG5vLXByb3RvdHlwZS1idWlsdGlucyBkZXRlY3Rpb25cbiAgcmVkdWNlRGVzY3JpcHRvcnMsXG4gIGZyZWV6ZU1ldGhvZHMsXG4gIHRvT2JqZWN0U2V0LFxuICB0b0NhbWVsQ2FzZSxcbiAgbm9vcCxcbiAgdG9GaW5pdGVOdW1iZXIsXG4gIGZpbmRLZXksXG4gIGdsb2JhbDogX2dsb2JhbCxcbiAgaXNDb250ZXh0RGVmaW5lZCxcbiAgQUxQSEFCRVQsXG4gIGdlbmVyYXRlU3RyaW5nLFxuICBpc1NwZWNDb21wbGlhbnRGb3JtLFxuICB0b0pTT05PYmplY3QsXG4gIGlzQXN5bmNGbixcbiAgaXNUaGVuYWJsZVxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGJhc2Ugc3R5bGVzXHJcbmltcG9ydCBcIi4uLy4uL3Njc3MvaW5kZXhcIjtcclxuXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oZWFkZXIvaW5kZXhcIjtcclxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9tYWluL2luZGV4XCI7XHJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvY2FyZHMtbGlzdC9pbmRleFwiO1xyXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2xvYWRlci9pbmRleFwiO1xyXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2NhcnRNb2RhbC9pbmRleFwiO1xyXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2Zvb3Rlci9pbmRleFwiO1xyXG5cclxuLy8gcGFnZS1jb21wb25lbnRzXHJcbmltcG9ydCBcIi4uLy4uL3BhZ2UtY29tcG9uZW50cy9ob21lL2luZGV4XCI7XHJcbiJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJheGlvcyIsImJhc2VVUkwiLCJnZXRNZW51IiwiX3JlZiIsIl9jYWxsZWUiLCJyZXNwb25zZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJnZXQiLCJkYXRhIiwidDAiLCJvd25LZXlzIiwiZW51bWVyYWJsZU9ubHkiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW1ib2xzIiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX29iamVjdFNwcmVhZCIsInRhcmdldCIsInNvdXJjZSIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJfdG9QcmltaXRpdmUiLCJTdHJpbmciLCJpbnB1dCIsImhpbnQiLCJwcmltIiwidG9QcmltaXRpdmUiLCJyZXMiLCJOdW1iZXIiLCJOb3RpZmxpeCIsInVwZGF0ZUNhcnRDb3VudGVyIiwiTm90aWZ5IiwiaW5pdCIsInBvc2l0aW9uIiwiZm9udFNpemUiLCJjbG9zZUJ1dHRvbiIsInN1Y2Nlc3MiLCJiYWNrZ3JvdW5kIiwidGV4dENvbG9yIiwiY2hpbGRDbGFzc05hbWUiLCJub3RpZmxpeEljb25Db2xvciIsInJlbmRlclByb2R1Y3RDYXJkcyIsIl9yZW5kZXJQcm9kdWN0Q2FyZHMiLCJsaXN0Q29udGFpbmVyIiwicHJlTG9hZGVyIiwibWVudUl0ZW1zIiwibWVudUxpc3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJtYXAiLCJpdGVtIiwiaW1nIiwiaW1hZ2VVcmwiLCJkZXNjcmlwdGlvbiIsImRpc2NvdW50IiwiY29uY2F0IiwiaGFzRGlzY291bnRQcmljZSIsImRpc2NvdW50UHJpY2UiLCJmb3JtYXR0ZWRQcmljZSIsInByaWNlIiwidG9GaXhlZCIsImZvcm1hdHRlZERpc2NvdW50UHJpY2UiLCJpZCIsInRpdGxlIiwid2VpZ2h0IiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiam9pbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldEJ1dHRvbiIsImNsb3Nlc3QiLCJpdGVtSWQiLCJmaW5kIiwiYWRkVG9DYXJ0IiwicXVhbnRpdHkiLCJjYXJ0SXRlbXMiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZXhpc3RpbmdJdGVtIiwiY2FydEl0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsInN1Ym1pdEJ1dHRvbiIsInJlbmRlckNhcnRJdGVtcyIsImNhcnRTdG9yYWdlSXRlbXMiLCJjYXJ0SXNFbXB0eSIsImlubmVySFRNTCIsImNhcnRMaXN0IiwiaGFuZGxlU3VibWl0QnV0dG9uQ2xpY2siLCJidXR0b24iLCJoYW5kbGVRdWFudGl0eUJ1dHRvbkNsaWNrIiwib3BlbkNhcnRNb2RhbCIsIm1vZGFsIiwidXBkYXRlVG90YWxQcmljZSIsInJlbW92ZSIsImNsb3NlQ2FydE1vZGFsIiwiY29udGFpbnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWN0aW9uIiwiZGF0YXNldCIsInJvdyIsInF1YW50aXR5RWxlbWVudCIsInBhcnNlSW50IiwidGV4dENvbnRlbnQiLCJyb3dJbmRleCIsImZpbmRJbmRleCIsImdldFRvdGFsUHJpY2UiLCJ0b3RhbCIsInRvdGFsUHJpY2VFbGVtZW50IiwiaGFuZGxlUmVtb3ZlQnV0dG9uQ2xpY2siLCJzcGxpY2UiLCJjYXJ0RGF0YSIsIml0ZW1zIiwidG90YWxQcmljZSIsImZhaWx1cmUiLCJyZW1vdmVJdGVtIiwiY2FydEJ1dHRvbiIsInJlbW92ZUJ1dHRvbiIsImNhcnRDb3VudGVyRWxlbWVudCIsInRvdGFsSXRlbXMiLCJyZWR1Y2UiLCJhY2MiLCJ0b1N0cmluZyIsImZpbHRlckNhcmRzIiwic2VhcmNoVGVybSIsImNhcmRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNhcmQiLCJjYXJkTmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzZWFyY2hJbnB1dCIsInRyaW0iXSwic291cmNlUm9vdCI6IiJ9