"use strict";(self.webpackChunkmarshemllongz=self.webpackChunkmarshemllongz||[]).push([[2602],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./components/common/Table/Table.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Empty:()=>Empty,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Table_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var _Primary$parameters,_Primary$parameters2,_Empty$parameters,_Empty$parameters2;function Table(_ref){var itemList=_ref.itemList,labelList=_ref.labelList,headerValueList=labelList.map((function(label){return label.value})),fractionalUnitInfo=labelList.reduce((function(acc,cur){return _objectSpread(_objectSpread({},acc),{},(0,defineProperty.Z)({},cur.value,cur.gridFractionalUnit))}),{}),isEmpty=0===itemList.length;return __jsx("table",{className:"bg-white w-full  rounded-md shadow-md overflow-x-auto"},__jsx("thead",{className:""},__jsx("tr",{className:"border-b py-2 bg-purple-100 text-gray-600 font-bold grid grid-flow-col  gap-6 rounded-t-md px-4"},labelList.map((function(label){return __jsx("th",{className:"w-full col-span-".concat(label.gridFractionalUnit),scope:"col",key:label.value,align:"center"},label.value)})))),__jsx("tbody",null,isEmpty&&__jsx("p",{className:"p-6 font-semibold text-lg"},"데이터가 없습니다."),itemList.map((function(item){var _item$headerValueList;return __jsx("tr",{className:"grid grid-flow-col gap-6 bg-white py-3 border-b px-4 ",key:null===(_item$headerValueList=item[headerValueList[0]])||void 0===_item$headerValueList?void 0:_item$headerValueList.toString()},headerValueList.map((function(t,index){return 0===index?__jsx("th",{className:"w-full col-span-".concat(fractionalUnitInfo[t]),scope:"row",align:"center",key:t},item[t]):__jsx("td",{className:"w-full col-span-".concat(fractionalUnitInfo[t]," last:rounded-b-md"),align:"center",key:t},item[t])})))}))))}Table.displayName="Table";try{Table.displayName="Table",Table.__docgenInfo={description:"",displayName:"Table",props:{labelList:{defaultValue:null,description:"",name:"labelList",required:!0,type:{name:"{ label: string; value: T; gridFractionalUnit: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12; }[]"}},itemList:{defaultValue:null,description:"",name:"itemList",required:!0,type:{name:"Record<T, ReactNode>[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/common/Table/index.tsx#Table"]={docgenInfo:Table.__docgenInfo,name:"Table",path:"components/common/Table/index.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}var Table_stories_jsx=react.createElement;function Table_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function Table_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Table_stories_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Table_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const Table_stories={component:Table};var Primary={args:{labelList:[{label:"NAME",value:"name",gridFractionalUnit:1},{label:"USER STATUS",value:"userStatus",gridFractionalUnit:3},{label:"PAYMENT STATUS",value:"paymentStatus",gridFractionalUnit:6},{label:"AMOUNT",value:"amount",gridFractionalUnit:2}],itemList:[{name:"저스틴",userStatus:"액티브",paymentStatus:"결제 완료",amount:"200$"},{name:"밀란",userStatus:"비활성화",paymentStatus:"결제 전",amount:1e3},{name:"제임",userStatus:"비활성화",paymentStatus:Table_stories_jsx("button",null,"안녕"),amount:1e3}]}},Empty={args:{labelList:[{label:"NAME",value:"name",gridFractionalUnit:1},{label:"USER STATUS",value:"userStatus",gridFractionalUnit:3},{label:"PAYMENT STATUS",value:"paymentStatus",gridFractionalUnit:6},{label:"AMOUNT",value:"amount",gridFractionalUnit:2}],itemList:[]}};Primary.parameters=Table_stories_objectSpread(Table_stories_objectSpread({},Primary.parameters),{},{docs:Table_stories_objectSpread(Table_stories_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:Table_stories_objectSpread({originalSource:"{\n  args: {\n    labelList: [{\n      label: 'NAME',\n      value: 'name',\n      gridFractionalUnit: 1\n    }, {\n      label: 'USER STATUS',\n      value: 'userStatus',\n      gridFractionalUnit: 3\n    }, {\n      label: 'PAYMENT STATUS',\n      value: 'paymentStatus',\n      gridFractionalUnit: 6\n    }, {\n      label: 'AMOUNT',\n      value: 'amount',\n      gridFractionalUnit: 2\n    }],\n    itemList: [{\n      name: '저스틴',\n      userStatus: '액티브',\n      paymentStatus: '결제 완료',\n      amount: '200$'\n    }, {\n      name: '밀란',\n      userStatus: '비활성화',\n      paymentStatus: '결제 전',\n      amount: 1000\n    }, {\n      name: '제임',\n      userStatus: '비활성화',\n      paymentStatus: <button>안녕</button>,\n      amount: 1000\n    }]\n  }\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2=_Primary$parameters2.docs)||void 0===_Primary$parameters2?void 0:_Primary$parameters2.source)})}),Empty.parameters=Table_stories_objectSpread(Table_stories_objectSpread({},Empty.parameters),{},{docs:Table_stories_objectSpread(Table_stories_objectSpread({},null===(_Empty$parameters=Empty.parameters)||void 0===_Empty$parameters?void 0:_Empty$parameters.docs),{},{source:Table_stories_objectSpread({originalSource:"{\n  args: {\n    labelList: [{\n      label: 'NAME',\n      value: 'name',\n      gridFractionalUnit: 1\n    }, {\n      label: 'USER STATUS',\n      value: 'userStatus',\n      gridFractionalUnit: 3\n    }, {\n      label: 'PAYMENT STATUS',\n      value: 'paymentStatus',\n      gridFractionalUnit: 6\n    }, {\n      label: 'AMOUNT',\n      value: 'amount',\n      gridFractionalUnit: 2\n    }],\n    itemList: []\n  }\n}"},null===(_Empty$parameters2=Empty.parameters)||void 0===_Empty$parameters2||null===(_Empty$parameters2=_Empty$parameters2.docs)||void 0===_Empty$parameters2?void 0:_Empty$parameters2.source)})});const __namedExportsOrder=["Primary","Empty"]}}]);