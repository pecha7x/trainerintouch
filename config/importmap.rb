# Pin npm packages by running ./bin/importmap
#
# FROM DEV:
# it's fucking crude version does not work out of the box
# Some of npm packages have a direct dependicies for Node ("react-router-dom" for example)
# some of them like "axios" doesn't work properly(multi-files dependencies)
# so for an each pin need to be ready to resolve through monkey-patching(see app/views/layouts/dashboard.html.erb as window.process for "r-r-d")
#
# or to manually download esm file for the package and past this to javascript/vendor directory(see "axios")
# (https://www.npmjs.com/package/axios?activeTab=explore /axios/dist/esm/axios.min.js)
#

pin "application", preload: true

pin "react", to: "https://ga.jspm.io/npm:react@18.2.0/index.js"
pin "react-dom", to: "https://ga.jspm.io/npm:react-dom@18.2.0/index.js"
pin "react-dom/client", to: "https://ga.jspm.io/npm:react-dom@18.2.0/client.js"
pin "process", to: "https://ga.jspm.io/npm:@jspm/core@2.0.0-beta.27/nodelibs/browser/process-production.js"
pin "scheduler", to: "https://ga.jspm.io/npm:scheduler@0.23.0/index.js"
pin "htm/react", to: "https://ga.jspm.io/npm:htm@3.1.1/react/index.module.js"
pin "htm", to: "https://ga.jspm.io/npm:htm@3.1.1/dist/htm.module.js"
pin "react-router-dom", to: "https://ga.jspm.io/npm:react-router-dom@6.4.4/dist/index.js"
pin "@remix-run/router", to: "https://ga.jspm.io/npm:@remix-run/router@1.0.4/dist/router.js"
pin "react-router", to: "https://ga.jspm.io/npm:react-router@6.4.4/dist/index.js"
# reduxjs/toolkit and dependencies
pin "@reduxjs/toolkit", to: "https://ga.jspm.io/npm:@reduxjs/toolkit@1.9.1/dist/redux-toolkit.esm.js"
pin "@reduxjs/toolkit/query", to: "https://ga.jspm.io/npm:@reduxjs/toolkit@1.9.1/dist/query/rtk-query.esm.js"
pin "@reduxjs/toolkit/query/react", to: "https://ga.jspm.io/npm:@reduxjs/toolkit@1.9.1/dist/query/react/rtk-query-react.esm.js"
pin "@babel/runtime/helpers/esm/objectSpread2", to: "https://ga.jspm.io/npm:@babel/runtime@7.20.6/helpers/esm/objectSpread2.js"
pin "immer", to: "https://ga.jspm.io/npm:immer@9.0.16/dist/immer.esm.mjs"
pin "redux", to: "https://ga.jspm.io/npm:redux@4.2.0/es/redux.js"
pin "redux-thunk", to: "https://ga.jspm.io/npm:redux-thunk@2.4.2/es/index.js"
pin "reselect", to: "https://ga.jspm.io/npm:reselect@4.1.7/es/index.js"
# react-redux and dependencies
pin "react-redux", to: "https://ga.jspm.io/npm:react-redux@8.0.5/es/index.js"
pin "@babel/runtime/helpers/esm/extends", to: "https://ga.jspm.io/npm:@babel/runtime@7.20.6/helpers/esm/extends.js"
pin "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose", to: "https://ga.jspm.io/npm:@babel/runtime@7.20.6/helpers/esm/objectWithoutPropertiesLoose.js"
pin "hoist-non-react-statics", to: "https://ga.jspm.io/npm:hoist-non-react-statics@3.3.2/dist/hoist-non-react-statics.cjs.js"
pin "react-is", to: "https://ga.jspm.io/npm:react-is@18.2.0/index.js"
pin "use-sync-external-store/shim", to: "https://ga.jspm.io/npm:use-sync-external-store@1.2.0/shim/index.js"
pin "use-sync-external-store/shim/with-selector", to: "https://ga.jspm.io/npm:use-sync-external-store@1.2.0/shim/with-selector.js"
# axios
pin "axios" # @1.2.1
# forms
pin "react-final-form", to: "https://ga.jspm.io/npm:react-final-form@6.5.9/dist/react-final-form.es.js"
pin "final-form", to: "https://ga.jspm.io/npm:final-form@4.20.7/dist/final-form.es.js"
