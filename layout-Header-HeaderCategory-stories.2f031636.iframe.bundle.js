"use strict";(self.webpackChunkmarshemllongz=self.webpackChunkmarshemllongz||[]).push([[357],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./components/layout/Header/HeaderCategory.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ABOUT:()=>ABOUT,COMMUNITY:()=>COMMUNITY,SHOP:()=>SHOP,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _SHOP$parameters,_SHOP$parameters2,_COMMUNITY$parameters,_COMMUNITY$parameters2,_ABOUT$parameters,_ABOUT$parameters2,_home_runner_work_marshemllongz_marshemllongz_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_marshemllongz_marshemllongz_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./components/layout/Header/HeaderCategory.tsx").Z};var SHOP={args:{title:"SHOP",categories:["노트북/태블릿 파우치","토이/인형","키링","스티커","슬리퍼","여행, 패키지","패브릭/생활","ALL"]}},COMMUNITY={args:{title:"COMMUNITY",categories:["공지사항","언론보도","Q&A","배경화면","베스트리뷰어"]}},ABOUT={args:{title:"ABOUT",categories:["브랜드","캐릭터","콜라보레이션","Contact"]}};SHOP.parameters=_objectSpread(_objectSpread({},SHOP.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SHOP$parameters=SHOP.parameters)||void 0===_SHOP$parameters?void 0:_SHOP$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    title: 'SHOP',\n    categories: ['노트북/태블릿 파우치', '토이/인형', '키링', '스티커', '슬리퍼', '여행, 패키지', '패브릭/생활', 'ALL']\n  }\n}"},null===(_SHOP$parameters2=SHOP.parameters)||void 0===_SHOP$parameters2||null===(_SHOP$parameters2=_SHOP$parameters2.docs)||void 0===_SHOP$parameters2?void 0:_SHOP$parameters2.source)})}),COMMUNITY.parameters=_objectSpread(_objectSpread({},COMMUNITY.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_COMMUNITY$parameters=COMMUNITY.parameters)||void 0===_COMMUNITY$parameters?void 0:_COMMUNITY$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    title: 'COMMUNITY',\n    categories: ['공지사항', '언론보도', 'Q&A', '배경화면', '베스트리뷰어']\n  }\n}"},null===(_COMMUNITY$parameters2=COMMUNITY.parameters)||void 0===_COMMUNITY$parameters2||null===(_COMMUNITY$parameters2=_COMMUNITY$parameters2.docs)||void 0===_COMMUNITY$parameters2?void 0:_COMMUNITY$parameters2.source)})}),ABOUT.parameters=_objectSpread(_objectSpread({},ABOUT.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ABOUT$parameters=ABOUT.parameters)||void 0===_ABOUT$parameters?void 0:_ABOUT$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    title: 'ABOUT',\n    categories: ['브랜드', '캐릭터', '콜라보레이션', 'Contact']\n  }\n}"},null===(_ABOUT$parameters2=ABOUT.parameters)||void 0===_ABOUT$parameters2||null===(_ABOUT$parameters2=_ABOUT$parameters2.docs)||void 0===_ABOUT$parameters2?void 0:_ABOUT$parameters2.source)})});const __namedExportsOrder=["SHOP","COMMUNITY","ABOUT"]},"./components/layout/Header/HeaderCategory.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>HeaderCategory});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_utils_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./utils/common.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function HeaderCategory(_ref){var title=_ref.title,categories=_ref.categories,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isHover=_useState[0],setIsHover=_useState[1];return __jsx("div",{className:"relative text-primaryBlack",onMouseEnter:function onMouseEnter(){setIsHover(!0)},onMouseLeave:function onMouseLeave(){setIsHover(!1)}},__jsx("div",{className:"text-xs font-medium cursor-pointer hover:text-darkGray"},title),__jsx("div",{className:(0,_utils_common__WEBPACK_IMPORTED_MODULE_1__.f6)(isHover?"opacity-100":"opacity-0","flex flex-col items-start absolute bg-white border p-2 text-xs gap-2 transition-opacity font-medium top-6 -left-2  w-max")},categories.map((function(category){return __jsx("span",{key:category,className:"hover:text-darkGray cursor-pointer"},category)}))))}HeaderCategory.displayName="HeaderCategory";try{HeaderCategory.displayName="HeaderCategory",HeaderCategory.__docgenInfo={description:"",displayName:"HeaderCategory",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},categories:{defaultValue:null,description:"",name:"categories",required:!0,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/layout/Header/HeaderCategory.tsx#HeaderCategory"]={docgenInfo:HeaderCategory.__docgenInfo,name:"HeaderCategory",path:"components/layout/Header/HeaderCategory.tsx#HeaderCategory"})}catch(__react_docgen_typescript_loader_error){}},"./utils/common.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_B:()=>getFormattedPrice,et:()=>getPercentageNumber,f6:()=>getClassNames});var console=__webpack_require__("./node_modules/console-browserify/index.js"),getClassNames=function getClassNames(){for(var _len=arguments.length,classNamesArray=new Array(_len),_key=0;_key<_len;_key++)classNamesArray[_key]=arguments[_key];return classNamesArray.join(" ")},getFormattedPrice=function getFormattedPrice(price){return price.toLocaleString("ko-KR")},getPercentageNumber=function getPercentageNumber(_ref){var total=_ref.total,percent=_ref.percent;return total<0?(console.error("총 가격이 음수일땐 안됩니다."),null):percent<0?(console.error("퍼센트가 음수일땐 안됩니다."),null):percent>100?(console.error("퍼센트가 100 초과일땐 안됩니다."),null):total*(percent/100)}}}]);