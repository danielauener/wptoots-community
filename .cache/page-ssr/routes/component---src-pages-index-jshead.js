exports.id = "component---src-pages-index-jshead";
exports.ids = ["component---src-pages-index-jshead"];
exports.modules = {

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((module) => {

module.exports = {
  siteTitle: "@wpbot@wptoots.social",
  // <title>
  manifestName: "wptoots.social",
  manifestShortName: "wptoots",
  // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: "#663399",
  manifestThemeColor: "#663399",
  manifestDisplay: "standalone",
  manifestIcon: "src/assets/images/avatar.png",
  //pathPrefix: `/`, // This path is subpath of your hosting https://domain/portfolio
  authorName: "wptoots.social",
  heading: "Mastodon Community Docs",
  // social
  socialLinks: [{
    icon: "fa-github",
    name: "Github",
    url: "https://github.com/danielauener/wpbot.wptoots.social"
  }]
};

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_3649515864_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/3649515864.json */ "./public/page-data/sq/d/3649515864.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _assets_sass_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/sass/main.scss */ "./src/assets/sass/main.scss");
/* harmony import */ var _assets_sass_main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_main_scss__WEBPACK_IMPORTED_MODULE_4__);






class Layout extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true
    };
  }
  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({
        isPreloaded: false
      });
    }, 100);
  }
  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
  render() {
    const {
      children
    } = this.props;
    const {
      isPreloaded
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.StaticQuery, {
      query: "3649515864",
      render: data => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: data.site.siteMetadata.title,
        meta: [{
          name: 'description',
          content: 'Eventually'
        }, {
          name: 'keywords',
          content: 'site, web'
        }]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("html", {
        lang: "en"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: isPreloaded ? 'main-body is-preload' : 'main-body'
      }, children)),
      data: _public_page_data_sq_d_3649515864_json__WEBPACK_IMPORTED_MODULE_0__
    });
  }
}
Layout.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().node.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/PageFooter.js":
/*!**************************************!*\
  !*** ./src/components/PageFooter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageFooter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function PageFooter() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "copyright"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\xA9 Untitled. All rights reserved."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Theme:", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://github.com/anubhavsrivastava/gatsby-starter-prologue"
  }, "Gatsby Starter Prologue"))));
}

/***/ }),

/***/ "./src/components/Scroll.js":
/*!**********************************!*\
  !*** ./src/components/Scroll.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



const Element = props => {
  return props.children;
};
class Scroll extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default().polyfill();
  }
  handleClick(e) {
    e.preventDefault();
    let elem = 0;
    let scroll = true;
    const {
      type,
      element,
      offset,
      timeout
    } = this.props;
    if (type && element) {
      switch (type) {
        case 'class':
          elem = document.getElementsByClassName(element)[0];
          scroll = elem ? true : false;
          break;
        case 'id':
          elem = document.getElementById(element);
          scroll = elem ? true : false;
          break;
        default:
      }
    }
    scroll ? this.scrollTo(elem, offset, timeout) : console.log(`Element not found: ${element}`); // eslint-disable-line
  }

  scrollTo(element, offSet = 0, timeout = null) {
    const elemPos = element ? element.getBoundingClientRect().top + window.pageYOffset : 0;
    if (timeout) {
      setTimeout(() => {
        window.scroll({
          top: elemPos + offSet,
          left: 0,
          behavior: 'smooth'
        });
      }, timeout);
    } else {
      window.scroll({
        top: elemPos + offSet,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Element, null, typeof this.props.children === 'object' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(this.props.children, {
      onClick: this.handleClick
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      onClick: this.handleClick
    }, this.props.children));
  }
}
Scroll.propTypes = {
  type: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  element: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  offset: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  timeout: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scroll);

/***/ }),

/***/ "./src/components/SideBar/Footer.js":
/*!******************************************!*\
  !*** ./src/components/SideBar/Footer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Footer({
  socialLinks = []
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "icons"
  }, socialLinks.map(social => {
    const {
      icon,
      name,
      url
    } = social;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: url
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: url,
      className: `icon ${icon}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "label"
    }, name)));
  })));
}

/***/ }),

/***/ "./src/components/SideBar/Header.js":
/*!******************************************!*\
  !*** ./src/components/SideBar/Header.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");


function Footer({
  title,
  heading,
  avatar
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "image avatar48"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    height: "128px",
    src: avatar,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    id: "title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, heading)));
}

/***/ }),

/***/ "./src/components/SideBar/Nav.js":
/*!***************************************!*\
  !*** ./src/components/SideBar/Nav.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Nav)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scrollspy */ "./node_modules/react-scrollspy/lib/scrollspy.js");
/* harmony import */ var _Scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Scroll */ "./src/components/Scroll.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");




function Nav({
  sections = []
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    id: "nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_scrollspy__WEBPACK_IMPORTED_MODULE_1__["default"], {
    items: sections.map(s => s.id),
    currentClassName: "active",
    offset: -300
  }, sections.map(s => {
    return s.id === "back" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: s.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "/",
      id: "top-link"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: `icon ${s.icon}`
    }, s.name))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: s.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Scroll__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: "id",
      element: s.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: `#${s.id}`,
      id: "top-link"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: `icon ${s.icon}`
    }, s.name))));
  }))));
}

/***/ }),

/***/ "./src/components/SideBar/TopNav.js":
/*!******************************************!*\
  !*** ./src/components/SideBar/TopNav.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TopNav)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function TopNav({
  title,
  onMenuClick = () => {}
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "headerToggle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/#",
    className: "toggle",
    onClick: e => {
      e.preventDefault();
      onMenuClick();
    }
  }, ' '));
}

/***/ }),

/***/ "./src/components/SideBar/index.js":
/*!*****************************************!*\
  !*** ./src/components/SideBar/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SideBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ "./src/components/SideBar/Footer.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/components/SideBar/Header.js");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nav */ "./src/components/SideBar/Nav.js");
/* harmony import */ var _TopNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TopNav */ "./src/components/SideBar/TopNav.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_avatar_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/avatar.png */ "./src/assets/images/avatar.png");







function SideBar({
  sections = []
}) {
  const {
    0: headerOpen,
    1: toggleHeader
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `${headerOpen ? "header-visible" : " "}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TopNav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: (_config__WEBPACK_IMPORTED_MODULE_5___default().authorName),
    onMenuClick: () => toggleHeader(!headerOpen)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    avatar: _assets_images_avatar_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    title: (_config__WEBPACK_IMPORTED_MODULE_5___default().authorName),
    heading: (_config__WEBPACK_IMPORTED_MODULE_5___default().heading)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sections: sections
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    socialLinks: (_config__WEBPACK_IMPORTED_MODULE_5___default().socialLinks)
  })));
}

/***/ }),

/***/ "./src/pages/index.js?export=head":
/*!****************************************!*\
  !*** ./src/pages/index.js?export=head ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_PageFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PageFooter */ "./src/components/PageFooter.js");
/* harmony import */ var _components_SideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SideBar */ "./src/components/SideBar/index.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");





const sections = [{
  id: "top",
  name: "Join wptoots.social",
  icon: "fa-home"
}, {
  id: "welcome",
  name: "Mission & Tools",
  icon: "fa-road"
}, {
  id: "rules",
  name: "Rules & Account types",
  icon: "fa-check"
}, {
  id: "contributing",
  name: "Contributing & Issues",
  icon: "fa-star"
}, {
  id: "sponsoring",
  name: "Donations & Sponsoring",
  icon: "fa-heart"
}];
const IndexPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SideBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
  sections: sections
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  id: "main"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
  id: "top",
  className: "one dark cover"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "container"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://wptoots.social",
  className: "button"
}, "Register on wptoots.social"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
  id: "welcome",
  className: "two"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "container"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "The wptoots.social Community")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Welcome to the community of the", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://wptoots.social",
  target: "_blank"
}, "wptoots.social Mastodon instance"), ", a group of decentralized, tooting WordPress enthusiasts. Here you will find information and resources on how we manage things on wptoots.social."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Mission")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, "We are trying to build a curated network of respectful WordPress enthusiasts around the globe. Welcome anyone who follows the rules and needs a safe home or fresh start.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "We are developers, users, professionals, enthusiasts, and are passionate about WordPress in all its facets, digital freedom, educating, respectful discourse and making digital publishing better.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "We believe that our diverse community thrives best in a safe space, where our content and thoughts aren't monitized, not only the loudest voices get heard and free software is the base everything is build on.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://wptoots.social/tags/WordPress",
  target: "_blank"
}, "#WordPress"), " ", "-", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://wptoots.social/tags/FreeSoftware",
  target: "_blank"
}, "#FreeSoftware"), " ", "-", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://wptoots.social/tags/Mastodon",
  target: "_blank"
}, "#Mastodon"), " ", "-", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://wptoots.social/tags/fediverse",
  target: "_blank"
}, "#fediverse")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Tools for wp-tooters")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Make sure to check our status page:", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://status.wptoots.social",
  target: "_blank"
}, "status.wptoots.social"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "If you are just starting out, please see the following", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "/welcome/README.md",
  target: "_blank"
}, "Welcome Guide"), " ", "for Mastodon 101 and getting started. If you're wondering where everyone is, we curate a", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://wp-community-on-mastodon.wptoots.social",
  target: "_blank"
}, "List of the WordPress Community on Mastodon"), " ", "(on all instances)."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "If you want to get some WordPress into your timeline, our", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://wpbot.wptoots.social",
  target: "_blank"
}, "@wpbot"), " ", "might be a good place to start! Every source that it's publish from, has been checked for", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, "credibility, community reputation, relevant content and tollerable posting frequency"), "."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
  id: "rules",
  className: "three"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "container"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Rules & Account Types")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "See our", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://wptoots.social/about/more#rules",
  target: "_blank"
}, "official rules"), ". This is your first and final warning to take our rules seriously."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Changing, modifying and deleting rules")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "In general we try not to change our rules. If we do, we need to give the community time to understand the impact of the change and move away from our server if they chose."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "If you want to creating a new rule follow the folowing process:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Draft the new rule. Write the \"headline\" and then write a few sentences to elaborate on the rule."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Publish the draft (GitHub, HackMD, etc)."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Advertise the draft (This is similar to publishing an obituary or a name change in a newspaper). Our admins, mods, and leadership should all be encouraged to share the new change."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Gain feedback, make adjustments, work with the community, hear concerns, give space for alternative opinions. Pause. Reflect.", " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Make the decision to institute the new rule, and publish a \"goes in effect\" date."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Institute the new rule.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, " ", "Only Daniel (@daniel@wptoots.social) can remove a rule at this time."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Account Types")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "We identify a few types of accounts, each with their specific set of requirements. Dependend on what account type you want to run it might be useful to read up on our", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__.Link, {
  to: "/account-types/"
}, "detailed account descriptions"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Allowed Types")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Following account types are generally allowed if they follow the rules and the specific restriction for each account type."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__.Link, {
  to: "/account-types/#general"
}, "General Accounts")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__.Link, {
  to: "/account-types/#open-source"
}, "Open Source Accounts")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__.Link, {
  to: "/account-types/#influencer"
}, "Influencer Accounts")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__.Link, {
  to: "/account-types/#corporate"
}, "Corporate Accounts")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__.Link, {
  to: "/account-types/#bots"
}, "Bot Accounts"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Disallowed Types")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "The primary purpose of wptoots.social is to provide a place where WordPress (and adjacent) professionals to network. To be clear: this is not a \"LinkedIn\" type of instance. With that in mind we have a few account types that we explicitly do not allow:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Fundraising Accounts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Ad / Marketing Accounts, including promos, discount codes, etc."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "18+ / NSFW Accounts")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Our users may engage with the above types of content if they wish, we just aren't geared for supporting the above account types. An account will be considered one of the above if all / mostly all of their posts and re-posts are in the above categories."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "General policies")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Additional to account type and rules, using our instance, you will have to follow a set of guidlines. They apply in the somewhat fuzzy zone where a post or comment isn't clearly breaking the rules, but not clearly following them, either."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, "Don't be a dick"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "We believe that everyone knows when they are \"being a dick\", and we do not tolerate this level of aggression towards our community. In short, we believe that you know if you are being a dick, and therefore you should be able to stop. If you do not stop, you will no longer be welcome on wptoots.social. Being a dick is measured by \"self control\" and \"intent\". ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Are you able to restrain yourself? What are your intentions?", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "If your intentions are to hurt, brandish, slander, diminish, insult, or offend someone you are likely being a dick. If you are commenting on anyone's \"tone\", whether or not they are \"having a civilized\" discussion, or offering apologetics in response to one or more of the various forms of extremism, you are ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "also"), " ", "likely being a dick. We believe you should be able to restrain yourself in these situations. If you do not restrain yourself, we believe that you are likely being a dick. Being a dick is the opposite of respect. We believe all \"bad takes\" on a topic can be voiced with respect. We hold each member of the community accountable for managing themselves and finding a respectful way of communicating their contrarian views. We expect all members to be respectful and thus, not be a dick.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, "About \"shitposting\""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Oxford dictionary defines shitposting as:", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, "the activity of posting deliberately provocative or off-topic comments on social media, typically in order to upset others or distract from the main conversation."), " ", "In short shitposting is allowed on wptoots.social. However, shitposting can easily violate our \"don't be a dick policy\" if it turns into offensive trolling at the expense of others. The key factor in distinguishing between shitposting and being a dick is \"at the expense of others\". We don't want to be the \"shitpost\" police. We encourage you to shitpost, just not at the expense of others.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Trolls, being targeted, and doxxing")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "We understand there are nasty people on the internet, and we will do everything we can to protect our community from them. We ask that all community members respect our mission to remain peaceful, and deescalate in times of conflict. If ever there clearly is a targeted attack, doxxing attempt, troll, or otherwise aggressive situation on wptoots.social our advice is to report it and deescalate the situation. Do not engage. Do not respond."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, " ", "Our experience dealing with bad-actors, trolls, and aggressive accounts is that engagement is what they are looking for. Our primary weapon against them is a silent block (our mods are very responsive!) and moving on as if nothing happened. In the event this is not possible, we ask that you host your own infrastructure to forge such a counter maneuver against a group. Keep it off wptoots.social. We will remove any account who gains a reputation for \"stirring the pot\" or \"engaging with conflict\" on our site, despite how virtuous or noble the effort may be. wptoots.social is not the place for this."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Moderation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Our moderators are not the fediverse police. Your presence on wptoots.social should not become a burden to our moderators. We expect all community members to make our moderators jobs easier.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "We expect everyone to understand that our moderators are volunteers who work tirelessly around the clock to keep deliberate bad-actors away from our community."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "We don't expect our moderators to also have to chase around our community members who are violating rules or need to be reminded of our policy. As a community member if you get on our moderators radar you are likely doing something very offensive."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "We believe in patience and understanding. There is a good chance that expectations have not been set or a policy has not been made clear. We will work with you to find a happy path, however if it becomes a pattern we will ask you to leave wptoots.social."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
  id: "contributing",
  className: "four"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "container"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Contributing and issues")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "The wptoots.social community documentation is managed via the following git repo, where you are very welcome contribute:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/danielauener/wptoots-community",
  target: "_blank"
}, "https://github.com/danielauener/wptoots-community")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "The most critical thing you can do to help us help you (even more so than a donation) is to", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, "reduce noise")), ". The best way for you to help reduce noise is to leverage our issue tracker instead of independent one-off requests for help. It is a full time job sifting through requests and making sense of them. If you want to help, leverage the issue tracker and", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://github.com/danielauener/wptoots-community/issues/new",
  target: "_blank"
}, "create a new issue"), " ", "or better yet find one that already exists."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Do not")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Please do not DM on Mastodon."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Please do not reach out on Twitter."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Please do not join the Discord just to report an issue, bug, or feature request."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Please do not send us emails (we get too many emails).")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Do")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "File an issue in the repository")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
  id: "sponsoring",
  className: "three"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "container"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Donating & Sponsoring")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Your contribution to the hosting costs is much appreciated and provides economic security to the community. Feel free to contribute on a one-time basis or monthly."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "One-time donations can be easily made here: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  className: "sponsor-link",
  target: "_blank",
  href: "https://www.buymeacoffee.com/wptoots"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: "https://img.buymeacoffee.com/button-api/?text=Buy us a coffee&emoji=&slug=wptoots&button_colour=21759b&font_colour=ffffff&font_family=Cookie&outline_colour=ffffff&coffee_colour=FFDD00"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Monthly sponsoring is possible via Patreon:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  className: "button red",
  target: "_blank",
  href: "https://www.patreon.com/wptoots"
}, "Become a Sponsor")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "What you are sponsoring")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "All donations will be used to cover the costs of running wptoots.social. Mainly that means server costs."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "We follow the", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://joinmastodon.org/covenant",
  target: "_blank"
}, "Mastodon Server Covenant"), " ", ". Do you want to know more about our infrastructure, data and server setup? There will be an Infrastructure Documentation soon, with the most relevant information.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PageFooter__WEBPACK_IMPORTED_MODULE_2__["default"], null));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ }),

/***/ "./src/assets/sass/main.scss":
/*!***********************************!*\
  !*** ./src/assets/sass/main.scss ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-scrollspy/lib/scrollspy.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-scrollspy/lib/scrollspy.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _throttle = _interopRequireDefault(__webpack_require__(/*! ./throttle */ "./node_modules/react-scrollspy/lib/throttle.js"));

function isEqualArray(a, b) {
  return a.length === b.length && a.every(function (item, index) {
    return item === b[index];
  });
}

var Scrollspy =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Scrollspy, _React$Component);
  (0, _createClass2.default)(Scrollspy, null, [{
    key: "propTypes",
    get: function get() {
      return {
        items: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
        currentClassName: _propTypes.default.string.isRequired,
        scrolledPastClassName: _propTypes.default.string,
        style: _propTypes.default.object,
        componentTag: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.elementType]),
        offset: _propTypes.default.number,
        rootEl: _propTypes.default.string,
        onUpdate: _propTypes.default.func
      };
    }
  }, {
    key: "defaultProps",
    get: function get() {
      return {
        items: [],
        currentClassName: '',
        style: {},
        componentTag: 'ul',
        offset: 0,
        onUpdate: function onUpdate() {}
      };
    }
  }]);

  function Scrollspy(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Scrollspy);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Scrollspy).call(this, props));
    _this.state = {
      targetItems: [],
      inViewState: [],
      isScrolledPast: [] // manually bind as ES6 does not apply this
      // auto binding as React.createClass does

    };
    _this._handleSpy = _this._handleSpy.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(Scrollspy, [{
    key: "_initSpyTarget",
    value: function _initSpyTarget(items) {
      var targetItems = items.map(function (item) {
        return document.getElementById(item);
      });
      return targetItems;
    } // https://github.com/makotot/react-scrollspy/pull/45

  }, {
    key: "_fillArray",
    value: function _fillArray(array, val) {
      var newArray = [];

      for (var i = 0, max = array.length; i < max; i++) {
        newArray[i] = val;
      }

      return newArray;
    }
  }, {
    key: "_isScrolled",
    value: function _isScrolled() {
      return this._getScrollDimension().scrollTop > 0;
    }
  }, {
    key: "_getScrollDimension",
    value: function _getScrollDimension() {
      var doc = document;
      var rootEl = this.props.rootEl;
      var scrollTop = rootEl ? doc.querySelector(rootEl).scrollTop : doc.documentElement.scrollTop || doc.body.parentNode.scrollTop || doc.body.scrollTop;
      var scrollHeight = rootEl ? doc.querySelector(rootEl).scrollHeight : doc.documentElement.scrollHeight || doc.body.parentNode.scrollHeight || doc.body.scrollHeight;
      return {
        scrollTop: scrollTop,
        scrollHeight: scrollHeight
      };
    }
  }, {
    key: "_getElemsViewState",
    value: function _getElemsViewState(targets) {
      var elemsInView = [];
      var elemsOutView = [];
      var viewStatusList = [];
      var targetItems = targets ? targets : this.state.targetItems;
      var hasInViewAlready = false;

      for (var i = 0, max = targetItems.length; i < max; i++) {
        var currentContent = targetItems[i];
        var isInView = hasInViewAlready ? false : this._isInView(currentContent);

        if (isInView) {
          hasInViewAlready = true;
          elemsInView.push(currentContent);
        } else {
          elemsOutView.push(currentContent);
        }

        var isLastItem = i === max - 1;

        var isScrolled = this._isScrolled(); // https://github.com/makotot/react-scrollspy/pull/26#issue-167413769


        var isLastShortItemAtBottom = this._isAtBottom() && this._isInView(currentContent) && !isInView && isLastItem && isScrolled;

        if (isLastShortItemAtBottom) {
          elemsOutView.pop();
          elemsOutView.push.apply(elemsOutView, (0, _toConsumableArray2.default)(elemsInView));
          elemsInView = [currentContent];
          viewStatusList = this._fillArray(viewStatusList, false);
          isInView = true;
        }

        viewStatusList.push(isInView);
      }

      return {
        inView: elemsInView,
        outView: elemsOutView,
        viewStatusList: viewStatusList,
        scrolledPast: this.props.scrolledPastClassName && this._getScrolledPast(viewStatusList)
      };
    }
  }, {
    key: "_isInView",
    value: function _isInView(el) {
      if (!el) {
        return false;
      }

      var _this$props = this.props,
          rootEl = _this$props.rootEl,
          offset = _this$props.offset;
      var rootRect;

      if (rootEl) {
        rootRect = document.querySelector(rootEl).getBoundingClientRect();
      }

      var rect = el.getBoundingClientRect();
      var winH = rootEl ? rootRect.height : window.innerHeight;

      var _this$_getScrollDimen = this._getScrollDimension(),
          scrollTop = _this$_getScrollDimen.scrollTop;

      var scrollBottom = scrollTop + winH;
      var elTop = rootEl ? rect.top + scrollTop - rootRect.top + offset : rect.top + scrollTop + offset;
      var elBottom = elTop + el.offsetHeight;
      return elTop < scrollBottom && elBottom > scrollTop;
    }
  }, {
    key: "_isAtBottom",
    value: function _isAtBottom() {
      var rootEl = this.props.rootEl;

      var _this$_getScrollDimen2 = this._getScrollDimension(),
          scrollTop = _this$_getScrollDimen2.scrollTop,
          scrollHeight = _this$_getScrollDimen2.scrollHeight;

      var winH = rootEl ? document.querySelector(rootEl).getBoundingClientRect().height : window.innerHeight;
      var scrolledToBottom = scrollTop + winH >= scrollHeight;
      return scrolledToBottom;
    }
  }, {
    key: "_getScrolledPast",
    value: function _getScrolledPast(viewStatusList) {
      if (!viewStatusList.some(function (item) {
        return item;
      })) {
        return viewStatusList;
      }

      var hasFoundInView = false;
      var scrolledPastItems = viewStatusList.map(function (item) {
        if (item && !hasFoundInView) {
          hasFoundInView = true;
          return false;
        }

        return !hasFoundInView;
      });
      return scrolledPastItems;
    }
  }, {
    key: "_spy",
    value: function _spy(targets) {
      var _this2 = this;

      var elemensViewState = this._getElemsViewState(targets);

      var currentStatuses = this.state.inViewState;
      this.setState({
        inViewState: elemensViewState.viewStatusList,
        isScrolledPast: elemensViewState.scrolledPast
      }, function () {
        _this2._update(currentStatuses);
      });
    }
  }, {
    key: "_update",
    value: function _update(prevStatuses) {
      if (isEqualArray(this.state.inViewState, prevStatuses)) {
        return;
      }

      this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(true)]);
    }
  }, {
    key: "_handleSpy",
    value: function _handleSpy() {
      (0, _throttle.default)(this._spy(), 100);
    }
  }, {
    key: "_initFromProps",
    value: function _initFromProps() {
      var targetItems = this._initSpyTarget(this.props.items);

      this.setState({
        targetItems: targetItems
      });

      this._spy(targetItems);
    }
  }, {
    key: "offEvent",
    value: function offEvent() {
      var el = this.props.rootEl ? document.querySelector(this.props.rootEl) : window;
      el.removeEventListener('scroll', this._handleSpy);
    }
  }, {
    key: "onEvent",
    value: function onEvent() {
      var el = this.props.rootEl ? document.querySelector(this.props.rootEl) : window;
      el.addEventListener('scroll', this._handleSpy);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._initFromProps();

      this.onEvent();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.offEvent();
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps() {
      this._initFromProps();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var Tag = this.props.componentTag;
      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          scrolledPastClassName = _this$props2.scrolledPastClassName,
          style = _this$props2.style;
      var counter = 0;

      var items = _react.default.Children.map(children, function (child, idx) {
        var _classNames;

        if (!child) {
          return null;
        }

        var ChildTag = child.type;
        var isScrolledPast = scrolledPastClassName && _this3.state.isScrolledPast[idx];
        var childClass = (0, _classnames.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(child.props.className), child.props.className), (0, _defineProperty2.default)(_classNames, "".concat(_this3.props.currentClassName), _this3.state.inViewState[idx]), (0, _defineProperty2.default)(_classNames, "".concat(_this3.props.scrolledPastClassName), isScrolledPast), _classNames));
        return _react.default.createElement(ChildTag, (0, _extends2.default)({}, child.props, {
          className: childClass,
          key: counter++
        }), child.props.children);
      });

      var itemClass = (0, _classnames.default)((0, _defineProperty2.default)({}, "".concat(className), className));
      return _react.default.createElement(Tag, {
        className: itemClass,
        style: style
      }, items);
    }
  }]);
  return Scrollspy;
}(_react.default.Component);

exports["default"] = Scrollspy;

/***/ }),

/***/ "./node_modules/react-scrollspy/lib/throttle.js":
/*!******************************************************!*\
  !*** ./node_modules/react-scrollspy/lib/throttle.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var throttle = function throttle(fn) {
  var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var last;
  var timer;
  return function () {
    var now = +new Date();
    var timePassed = !!last && now < last + threshold;

    if (timePassed) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        last = now;
        fn();
      }, threshold);
    } else {
      last = now;
      fn();
    }
  };
};

var _default = throttle;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js":
/*!*****************************************************************!*\
  !*** ./node_modules/smoothscroll-polyfill/dist/smoothscroll.js ***!
  \*****************************************************************/
/***/ ((module) => {

/* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {
  'use strict';

  // polyfill
  function polyfill() {
    // aliases
    var w = window;
    var d = document;

    // return if scroll behavior is supported and polyfill is not forced
    if (
      'scrollBehavior' in d.documentElement.style &&
      w.__forceSmoothScrollPolyfill__ !== true
    ) {
      return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    // object gathering original scroll methods
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };

    // define timing method
    var now =
      w.performance && w.performance.now
        ? w.performance.now.bind(w.performance)
        : Date.now;

    /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */
    function isMicrosoftBrowser(userAgent) {
      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
      if (
        firstArg === null ||
        typeof firstArg !== 'object' ||
        firstArg.behavior === undefined ||
        firstArg.behavior === 'auto' ||
        firstArg.behavior === 'instant'
      ) {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }

      // throw error when behavior is not supported
      throw new TypeError(
        'behavior member of ScrollOptions ' +
          firstArg.behavior +
          ' is not a valid value for enumeration ScrollBehavior.'
      );
    }

    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
      }

      if (axis === 'X') {
        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
      }
    }

    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

      return overflowValue === 'auto' || overflowValue === 'scroll';
    }

    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

      return isScrollableY || isScrollableX;
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
      while (el !== d.body && isScrollable(el) === false) {
        el = el.parentNode || el.host;
      }

      return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;

      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;

      // apply easing to elapsed time
      value = ease(elapsed);

      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;

      context.method.call(context.scrollable, currentX, currentY);

      // scroll more if we have not reached our destination
      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }

    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();

      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      }

      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    }

    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object'
              ? arguments[0]
              : w.scrollX || w.pageXOffset,
          // use top prop, second argument if present or fallback to scrollY
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined
              ? arguments[1]
              : w.scrollY || w.pageYOffset
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        arguments[0].left !== undefined
          ? ~~arguments[0].left
          : w.scrollX || w.pageXOffset,
        arguments[0].top !== undefined
          ? ~~arguments[0].top
          : w.scrollY || w.pageYOffset
      );
    };

    // w.scrollBy
    w.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object' ? arguments[0] : 0,
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined ? arguments[1] : 0
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        ~~arguments[0].left + (w.scrollX || w.pageXOffset),
        ~~arguments[0].top + (w.scrollY || w.pageYOffset)
      );
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }

        original.elementScroll.call(
          this,
          // use left prop, first number argument or fallback to scrollLeft
          arguments[0].left !== undefined
            ? ~~arguments[0].left
            : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
          // use top prop, second argument or fallback to scrollTop
          arguments[0].top !== undefined
            ? ~~arguments[0].top
            : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
        );

        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top;

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        this,
        this,
        typeof left === 'undefined' ? this.scrollLeft : ~~left,
        typeof top === 'undefined' ? this.scrollTop : ~~top
      );
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(
          this,
          arguments[0].left !== undefined
            ? ~~arguments[0].left + this.scrollLeft
            : ~~arguments[0] + this.scrollLeft,
          arguments[0].top !== undefined
            ? ~~arguments[0].top + this.scrollTop
            : ~~arguments[1] + this.scrollTop
        );

        return;
      }

      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function() {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(
          this,
          arguments[0] === undefined ? true : arguments[0]
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(
          this,
          scrollableParent,
          scrollableParent.scrollLeft + clientRects.left - parentRects.left,
          scrollableParent.scrollTop + clientRects.top - parentRects.top
        );

        // reveal parent in viewport unless is fixed
        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }

  if (true) {
    // commonjs
    module.exports = { polyfill: polyfill };
  } else {}

}());


/***/ }),

/***/ "./src/assets/images/avatar.png":
/*!**************************************!*\
  !*** ./src/assets/images/avatar.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/avatar-9e1e14252181af2eb86e2397b8625962.png");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ ((module) => {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ ((module) => {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ ((module) => {

function _extends() {
  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/***/ ((module) => {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/***/ ((module) => {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./public/page-data/sq/d/3649515864.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/3649515864.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"@wpbot@wptoots.social"}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-jshead.js.map