
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/daniel/workspace/projects/community.wptoots.social/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/daniel/workspace/projects/community.wptoots.social/src/pages/404.js")),
  "component---src-pages-account-types-js": preferDefault(require("/home/daniel/workspace/projects/community.wptoots.social/src/pages/account-types.js")),
  "component---src-pages-index-js": preferDefault(require("/home/daniel/workspace/projects/community.wptoots.social/src/pages/index.js"))
}

