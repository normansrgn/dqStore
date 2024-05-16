!(function () {
  var t = {
      220: function () {
        !(function () {
          const t = document.querySelector("#burger__btn"),
            e = document.querySelector(".burger__container"),
            n = document.querySelector("#burgerSpan");
          t.addEventListener("click", (t) => {
            e.classList.toggle("open"),
              n.classList.toggle("btn-open-animation");
          }),
            e.addEventListener("click", (t) => {
              t.target.classList.contains("burger__content") ||
                (e.classList.remove("open"),
                n.classList.remove("btn-open-animation"));
            });
        })();
      },
      441: function () {
        document.addEventListener("DOMContentLoaded", function () {
          const t = document.getElementById("catalogInput"),
            e = document.querySelectorAll(".col-xxl-3");
          t.addEventListener("input", function () {
            const n = t.value.trim().toLowerCase();
            e.forEach(function (t) {
              t
                .querySelector(".catalog__name")
                .textContent.trim()
                .toLowerCase()
                .includes(n)
                ? ((t.style.display = "block"),
                  t.hasAttribute("data-aos") && t.removeAttribute("data-aos"))
                : (t.style.display = "none");
            });
          });
        });
      },
    },
    e = {};
  function n(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var c = (e[o] = { exports: {} });
    return t[o](c, c.exports, n), c.exports;
  }
  (n.n = function (t) {
    var e =
      t && t.__esModule
        ? function () {
            return t.default;
          }
        : function () {
            return t;
          };
    return n.d(e, { a: e }), e;
  }),
    (n.d = function (t, e) {
      for (var o in e)
        n.o(e, o) &&
          !n.o(t, o) &&
          Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (function () {
      "use strict";
      var t = n(220),
        e = n.n(t),
        o = n(441),
        r = n.n(o);
      (function () {
        const t = document.querySelector(".mobile-nav-btn"),
          e = document.querySelector(".mobile-nav"),
          n = document.querySelector(".nav-icon");
        t.onclick = function () {
          e.classList.toggle("mobile-nav--open"),
            n.classList.toggle("nav-icon--active"),
            document.body.classList.toggle("no-scroll");
        };
      })(),
        e()(),
        r()();
    })();
})();
