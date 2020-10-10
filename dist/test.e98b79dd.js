// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"test.js":[function(require,module,exports) {
var string = "\n/* \u5927\u5BB6\u597D\uFF0C\u4ECA\u5929\u6211\u6765\u753B\u4E00\u4E2A\u84DD\u80D6\u5B50 */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n*::before {\n  box-sizing: border-box;\n}\n*::after {\n  box-sizing: border-box;\n}\n/* \u9996\u5148\u753B\u4E00\u4E2A\u84DD\u8272\u7684\u8111\u888B */\n.head {\n  position: relative;\n  border: 2px solid rgb(85, 85, 85);\n  width: 400px;\n  height: 380px;\n  left: 50%;\n  margin-left: -200px;\n  background: rgb(9, 180, 227);\n  border-radius: 50%;\n  top: 0;\n}\n/* \u7EE7\u7EED\u4E24\u9897\u5706\u5706\u7684\u773C\u775B */\n.head .eye {\n  position: absolute;\n  border: 2px solid rgb(0, 0, 0);\n  width: 76px;\n  height: 86px;\n  left: 50%;\n  margin-left: -38px;\n  border-radius: 35px;\n  top: 50px;\n  background: white;\n  z-index: 10;\n}\n/* \u628A\u773C\u775B\u653E\u597D */\n.head .eye.left {\n  transform: translateX(38px);\n}\n.head .eye.right {\n  transform: translateX(-38px);\n}\n/* \u518D\u6765\u753B\u4E24\u9897\u9ED1\u8272\u7684\u773C\u73E0 */\n.eye.left::before {\n  content: \"\";\n  display: block;\n  background: black;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  position: absolute;\n  left: 10px;\n  top: 40px;\n}\n.eye.right::before {\n  content: \"\";\n  display: block;\n  background: black;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  position: absolute;\n  left: 50px;\n  top: 40px;\n}\n/* \u63A5\u4E0B\u6765\u8F6E\u5230\u4E00\u5F20\u5927\u767D\u8138 */\n.head .face {\n  position: relative;\n  position: absolute;\n  border: 2px solid black;\n  width: 340px;\n  height: 260px;\n  left: 50%;\n  margin-left: -170px;\n  top: 80px;\n  border-radius: 150px;\n  background: white;\n}\n/* \u767D\u8272\u7684\u8138\u4E0A\u5E94\u8BE5\u6709\u4E00\u9897\u7EA2\u91CC\u900F\u767D\u7684\u9F3B\u5B50 */\n.head .face .nose {\n  position: absolute;\n  border: 2px solid black;\n  width: 34px;\n  height: 34px;\n  left: 50%;\n  margin-left: -17px;\n  top: 40px;\n  border-radius: 50%;\n  background: #c93300;\n  z-index: 5;\n}\n.head .face .nose .nosewing {\n  border-radius: 5px;\n  box-shadow: 19px 8px 5px #fff;\n  height: 10px;\n  width: 10px;\n}\n/* \u63A5\u4E0B\u6765\u662F\u80E1\u987B*/\n\n.head .face .whisker .zuo {\n  position: absolute;\n  width: 80px;\n  height: 2px;\n  border: 1px solid black;\n  left: 50%;\n  margin-left: -116px;\n  top: 110px;\n}\n.head .face .whisker .ul {\n  position: absolute;\n  width: 80px;\n  height: 2px;\n  border: 1px solid black;\n  left: 50%;\n  margin-left: -113px;\n  top: 80px;\n  -webkit-transform: rotate(25deg);\n}\n.head .face .whisker .ld {\n  position: absolute;\n  width: 80px;\n  height: 2px;\n  border: 1px solid black;\n  left: 50%;\n  margin-left: -113px;\n  top: 140px;\n  -webkit-transform: rotate(-25deg);\n}\n.head .face .whisker .right {\n  position: absolute;\n  width: 80px;\n  height: 2px;\n  border: 1px solid black;\n  left: 50%;\n  margin-left: 39px;\n  top: 110px;\n}\n.head .face .whisker .ru {\n  position: absolute;\n  width: 80px;\n  height: 2px;\n  border: 1px solid black;\n  left: 50%;\n  margin-left: 37px;\n  top: 80px;\n  -webkit-transform: rotate(-25deg);\n}\n.head .face .whisker .rd {\n  position: absolute;\n  width: 80px;\n  height: 2px;\n  border: 1px solid black;\n  left: 50%;\n  margin-left: 37px;\n  top: 140px;\n  -webkit-transform: rotate(25deg);\n}\n.noseLine {\n  position: absolute;\n  width: 2px;\n  height: 150px;\n  left: 50%;\n  margin-left: -1px;\n  border: 2px solid black;\n  top: 62px;\n  background: black;\n}\n/* \u7136\u8981\u8981\u6709\u4E00\u5F20\u7B11\u8D77\u6765\u7684\u5634\u5DF4*/\n.mouth {\n  position: absolute;\n  width: 220px;\n  height: 300px;\n  border: 1px solid red;\n  left: 50%;\n  margin-left: -110px;\n  border-radius: 100px;\n  border-bottom: 3px solid #333;\n  border-color: transparent transparent black transparent;\n  top: -88px;\n}\n/* \u52A0\u4E0A\u7EA2\u8272\u7684\u9886\u5B50 */\n.collar {\n  position: relative;\n  border: 2px solid black;\n  width: 270px;\n  height: 40px;\n  left: 50%;\n  margin-left: -135px;\n  bottom: 40px;\n  background: rgb(170, 39, 0);\n  border-radius: 50px/100px;\n}\n/* \u62DB\u724C\u7684\u94C3\u94DB */\n.collar .bell {\n  position: absolute;\n  border: 2px solid black;\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  left: 50%;\n  margin-left: -21px;\n  top: 5px;\n  background: rgb(243, 235, 38);\n}\n.collar .bell .heng {\n  border: 2px solid black;\n  width: 38px;\n  height: 5px;\n  transform: translateY(10px);\n}\n.collar .bell .yuan {\n  position: absolute;\n  background: black;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  left: 50%;\n  margin-left: -5px;\n  top: 20px;\n}\n.collar .bell .shu {\n  position: absolute;\n  background: black;\n  width: 2px;\n  height: 15px;\n  left: 50%;\n  margin-left: -1px;\n  top: 25px;\n}\n/* \u4E00\u4E2A\u54C6\u5566A\u68A6\u9001\u7ED9\u5927\u5BB6 */\n";
var n = 1;
demo.innerText = string.substring(0, n);
demo2.innerHTML = string.substring(0, n);
var time = 100;
var player = {
  run: function run() {
    n = n + 1;

    if (n > string.length) {
      window.clearInterval(id);
      return;
    }

    demo.innerText = string.substring(0, n);
    demo2.innerHTML = string.substring(0, n);
    demo.scrollTop = demo.scrollHeight;
  },
  play: function play() {
    return setInterval(player.run, time);
  },
  pause: function pause() {
    window.clearInterval(id);
  },
  man: function man() {
    player.pause();
    time = 100;
    id = player.play();
  },
  zhong: function zhong() {
    player.pause();
    time = 50;
    id = player.play();
  },
  kuai: function kuai() {
    player.pause();
    time = 0;
    id = player.play();
  }
};
var id = player.play();
btnPause.onclick = player.pause;

btnPlay.onclick = function () {
  id = player.play();
};

btnMan.onclick = player.man;
btnZhong.onclick = player.zhong;
btnKuai.onclick = player.kuai;
},{}],"C:/Users/world990/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50524" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/world990/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map