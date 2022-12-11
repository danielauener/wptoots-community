exports.id = "component---src-pages-account-types-js";
exports.ids = ["component---src-pages-account-types-js"];
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

/***/ "./src/pages/account-types.js?export=default":
/*!***************************************************!*\
  !*** ./src/pages/account-types.js?export=default ***!
  \***************************************************/
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




const sections = [{
  id: "back",
  name: "Back",
  icon: "fa-arrow-left"
}, {
  id: "general",
  name: "General Accounts",
  icon: "fa-user"
}, {
  id: "open-source",
  name: "Open Source Accounts",
  icon: "fa-code"
}, {
  id: "influencer",
  name: "Influencer Accounts",
  icon: "fa-star"
}, {
  id: "corporate",
  name: "Corporate Accounts",
  icon: "fa-building"
}, {
  id: "bots",
  name: "Bot Accounts",
  icon: "fa-qrcode"
}];
const IndexPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SideBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
  sections: sections
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  id: "main"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
  id: "general",
  className: "two"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "container"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Account Types on wptoots.social")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "We distinguish between 4 main types of accounts that we use to measure and moderate here on wptoots.social. Based on the type of account, we have various policies and best practices."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Accounts in General")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "If you are unsure what type of account you are, start with the general account FAQ."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Frequently Asked Questions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "Can I post about my company?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Yes. Posting about your company is different from a corporate account. Feel free to say whatever you want about your company."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "Can I post about my project?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Yes. Posting about your project is different from an open source account. Feel free to say whatever you want about your project."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "Can I create a bot account?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Not without working directly with the moderators."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "Can I create an anonymous account?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Yes. However, we do not want a single person to operate a high number of accounts. We understand the importance of being anonymous from a security, gender, safety, and mental health perspective."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "Can I create multiple accounts?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Yes. Within reason. We expect you to use your best judgement in not flooding our servers. We understand you might need more than one account. However, it is not a free for all. We understand security, gender, safety, and mental health, and safe space from work are all reasons to create multiple and anonymous accounts."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "Can I create accounts for pets, characters, or imaginary friends?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "We prefer if you didn't. We are trying to build a curated network of professionals on wptoots.social and would encourage you to move these accounts to another instance."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
  id: "open-source",
  className: "three"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "container"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Open Source Project Accounts")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "This section is for anyone who is interested in creating an account specifically for an open source project. If you are a maintainer of a project, or are representing yourself this page does not apply to you."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "For example, our @wpbot is an Open Source project and our admin is the maintainer. This documentation only applies to a maintainer if they were attempting to create a 2nd account in addition to a primary personal account that would be specifically for \"@wpbot\". This documentation does not apply to the personal account where they would be free to talk about the @wpbot as they wish."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "We welcome open source and collaborate projects to create accounts on wptoots.social. We have a few exceptions for projects that operate in a financially biased market or projects that are extensions of, or resemble corporations."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Understanding Open Source Projects")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "The following are the types of projects that are welcome to come and go from wptoots.social as they please."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
  class: "icon fa-check"
}, " ", "Influencer AccountsOpen source software projects with MIT, Apache 2.0, GPL, Creative Commons or similar licenses."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
  class: "icon fa-check"
}, " ", "Open collaborative projects such as", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://www.gutenberg.org/",
  target: "_blank"
}, "The Gutenberg Project"), " ", "or collaborative wiki style projects like", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://wikipedia.org/",
  target: "_blank"
}, "Wikipedia"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
  class: "icon fa-check"
}, " ", "Community driven events, open organizations, and volunteer driven events like", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://fosdem.org/",
  target: "_blank"
}, "FOSDEM"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
  class: "icon fa-check"
}, " ", "Open source organizations such as", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://matrix.org",
  target: "_blank"
}, "Matrix"), ".")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Unfortunately we are unable to support projects that are active participants in financially biased markets, or products that are extension of a single corporation."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "We will treat all corporation-specific projects as the parent corporation itself which is bound to the", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "#corporate"
}, "corporate accounts"), " documentation."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
  class: "icon fa-remove"
}, " ", "Financially biased trade organizations and governing bodies such as the", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://www.cncf.io/about/join/",
  target: "_blank"
}, "CNCF"), " ", "or", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://www.cloudfoundry.org/membership/",
  target: "_blank"
}, "Cloud Foundry"), " ", "or their subsequent projects such as", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://www.cncf.io/projects/istio/",
  target: "_blank"
}, "Istio"), " ", "or", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://www.cncf.io/projects/helm/",
  target: "_blank"
}, "Helm"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
  class: "icon fa-remove"
}, " ", "Open source projects with a single corporate sponsor/owners such as Google's", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://go.dev/",
  target: "_blank"
}, "Go Programming language"), " ", "and HashiCorp's", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://www.terraform.io/",
  target: "_blank"
}, "Terraform"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
  class: "icon fa-remove"
}, " ", "Open source projects with structured sponsorship models that resemble paid services. For example features that are unlocked via donation such as", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://letsencrypt.org/sponsors/",
  target: "_blank"
}, "LetsEncrypt"), "'s quota limit which can only be raised via donation."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
  class: "icon fa-remove"
}, " ", "\"up-sell\" or \"upgrade to pro\" or \"free trial\" model projects that resemble a paid service such as", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://www.pfsense.org/download/",
  target: "_blank"
}, "pfSense Community Edition"), " ", "or", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://www.wolfram.com/open-materials/",
  target: "_blank"
}, "Wolfram Alpha"), ".")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "What Is Financial Bias?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Financial bias is defined as \"the ability for a specific vendor, project, or organization to pay for a competitive advantage\" or sometimes referred to as \"pay-to-play\" vendor spaces. Many vendor markets exist today which allow for wealthier vendors to pay for higher and more attractive sponsorship models that other vendors cannot afford."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "We believe that expensive sponsorship models that promise a higher return of investment with regard to product marketing create an unfair disadvantage for small businesses. We believe a level playing field for small businesses is critical for the sustainability of future generations in tech. We cannot condone a financially biased governance model in our community."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Frequently Asked Questions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "Can I create an account for my event? Like Devopsdays?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Yes. As long as your event is not a profit focused event you are welcome to create an account. If your event is profit seeking, you must follow our", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "#corporate"
}, "corporate account policy"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "What about Devopsdays for my specific city?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Yes. As long as your subsidiary account isn't repeating the same content as the parent account. We expect each account to have relatively independent content."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "Can I create a support/help/fan/parody account?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "No. Accounts like \"Linux Tips\" or \"Kubernetes Memes\" are not in alignment with our mission to create a curated group of professionals. We aim to have accounts that represent real people."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "Can I create an account if a similar one already exists?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "No. We want to have one account for each project. We do not want to have \"Wikipedia tips\" and \"Wikipedia facts\" as separate accounts. We think that collaboration of the same account should be shared at the project level. You should join the project and ask for access to the Mastodon account."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "Can I create a bot account for our open source project?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "No. We know its fun to automate pull requests, build status, and more. However we try to keep our content based around real words written by real people."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
  id: "influencer",
  className: "two"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "container"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Influencer Accounts")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "In short, we welcome all influencers and have an open door policy to any large influencer account who would like to make wptoots.social a home."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Large Following Accounts")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "In case accounts with a large following join our instance, that could cause an unexpected rise in traffic and slowing our service down temporarily. While we do our best not to let an abrupt traffic spike influence our site, we also want to provide a speedy and non-laggy experience for our users."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "As a rule if you have more than 25k followers on an existing platform we ask that you reach out to us", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://wptoots.social/about/more",
  target: "_blank"
}, "directly"), ", shortly before announcing your transition."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Self Promotion")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "We believe that all influencers should be free to promote their brand and their content on our site, however we have a high bar with regard to product marketing. We draw the line between \"personal brand\" and \"corporate account\". In short if you are representing yourself you should be fine to self promote on wptoots.social."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
  id: "corporate",
  className: "four"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "container"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Corporate Accounts")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "The simplest way to determine if an account is a corporate account or not is to ask yourself if the entity that the account represents is trying to make a profit or not. Chances are, if the entity is seeking profit, we are dealing with a corporate account. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "In other words if you intend to create an account for a business, you should read this document because this document is exclusively for people like you."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "The WordPress Community is a diverse community and has always included individuals and corporations of all sizes, both valuably contributing. That's why we generally permit corporation accounts. However, it must be clear, that we expect you as coorporation to set the bar for what it means to be a wp-tooter, and the rules apply extra to you. By creating a corporation account, you agree to the following covenant."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Coorporate Covenant")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, "Self-identification")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "I aggree to self-identify my corporate account by placing the full legal corporation name as the display name."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, "Strict following of the Rules")), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "I agree to be a steward and role model in the wptoots.social community. I understand that my presence as a corporation implies the rules will be more strictly applied to me than normal accounts."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, "Being the Corporation You Want To Work With")), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "I agree to build a market that I would want to shop at. I agree to set the bar for having world-class corporate engagement on wptoots.social. That might include telling the community about my product, but not to use the community for structured product marketing."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, "Say It Once policy")), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "I agree to share new content and do my best to prevent repetitive content. I understand that words can be changed but messaging can remain consistent. I agree to only share my message once."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, "Use your own words policy")), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "The best practice is to research the most reliable sources on the topic and summarize what they say in your own words."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, "Community first policy")), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "I understand that policies are difficult to enforce. If it is made obvious to me that wptoots.social is no longer benefiting from my presence I will politely step down as a corporate account and move to another server."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, "Mods are no Product Marketing Police")), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "I understand that it is my job to self-moderate. If moderation from wptoots.social is involved we have failed twice. First in self-moderation, and 2nd in violating a specific policy.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
  id: "bots",
  className: "two"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "container"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Bot Accounts")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Bots come in a wide variety of frequencies and topic spaces. To limit which bot accounts are posting on our server, bot accounts must be approved to join. Although bot accounts are not necessarily corporate accounts, and those that are would fall under the rules described in the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "#corporate"
}, "corporate account policy"), ", there are a few common threads between them copied in below:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Bots, like corporate accounts, are held to a higher standard."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Don't post content either by type or frequency that", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, "you"), " wouldn't want on your timeline if you weren't running the bot."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "We will moderate bot accounts as they are reported and apply our best judgement."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "We will be moderating the bot accounts in a way that does not create undue burnden on our volunteer mod team.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Bot Account Posting Rules")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "All bots must select the bot checkbox in their profile settings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Bot accounts are limited to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, "5 posts per day"), " if there isn't agreed something else with mods and community."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Reactionary bots are not permitted - e.g. bots that respond to user posts based on keywords and similar."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Bots that violate rules about spam, fundraising, 18+, corporate, etc. account types will be suspended."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PageFooter__WEBPACK_IMPORTED_MODULE_2__["default"], null));
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
//# sourceMappingURL=component---src-pages-account-types-js.js.map