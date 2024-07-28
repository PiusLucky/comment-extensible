"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/app/index.ts
var app_exports = {};
__export(app_exports, {
    CommentSection: function() {
        return CommentSection_default;
    },
    MongoCommentRepository: function() {
        return MongoCommentRepository;
    }
});
module.exports = __toCommonJS(app_exports);
// src/components/sections/CommentSection.tsx
var import_react4 = __toESM(require("react"));
// src/components/cards/CommentCard.tsx
var import_react3 = require("react");
var import_react_timeago2 = __toESM(require("react-timeago"));
// src/components/icons/HeartIcon.tsx
function HeartIcon(props) {
    return /* @__PURE__ */ React.createElement("svg", _object_spread_props(_object_spread({}, props), {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), /* @__PURE__ */ React.createElement("path", {
        d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
    }));
}
var HeartIcon_default = HeartIcon;
// src/components/icons/MessageCircleIcon.tsx
function MessageCircleIcon(props) {
    return /* @__PURE__ */ React.createElement("svg", _object_spread_props(_object_spread({}, props), {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), /* @__PURE__ */ React.createElement("path", {
        d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
    }));
}
var MessageCircleIcon_default = MessageCircleIcon;
// src/components/sections/AddCommentSection.tsx
var import_react2 = require("react");
// src/components/common/MainButton.tsx
var import_lucide_react = require("lucide-react");
var import_react = require("react");
// src/components/ui/button.tsx
var React2 = __toESM(require("react"));
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}
// src/components/ui/button.tsx
var buttonVariants = (0, import_class_variance_authority.cva)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300", {
    variants: {
        variant: {
            default: "bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
            destructive: "bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
            outline: "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
            secondary: "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
            ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
            link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
var Button = React2.forwardRef(function(_param, ref) {
    var className = _param.className, variant = _param.variant, size = _param.size, _param_asChild = _param.asChild, asChild = _param_asChild === void 0 ? false : _param_asChild, props = _object_without_properties(_param, [
        "className",
        "variant",
        "size",
        "asChild"
    ]);
    var Comp = asChild ? import_react_slot.Slot : "button";
    return /* @__PURE__ */ React2.createElement(Comp, _object_spread({
        className: cn(buttonVariants({
            variant: variant,
            size: size,
            className: className
        })),
        ref: ref
    }, props));
});
Button.displayName = "Button";
// src/components/common/MainButton.tsx
var MainButton = (0, import_react.forwardRef)(function(param, ref) {
    var text = param.text, _param_isLoading = param.isLoading, isLoading = _param_isLoading === void 0 ? false : _param_isLoading, form = param.form, action = param.action, _param_disabled = param.disabled, disabled = _param_disabled === void 0 ? false : _param_disabled, isSubmitable = param.isSubmitable, width = param.width, _param_dataLoadingText = param.dataLoadingText, dataLoadingText = _param_dataLoadingText === void 0 ? "Wait.." : _param_dataLoadingText, _param_variant = param.variant, variant = _param_variant === void 0 ? "primary" : _param_variant, classes = param.classes, iconRoute = param.iconRoute, rightIconRoute = param.rightIconRoute, _param_rightIconClass = param.rightIconClass, rightIconClass = _param_rightIconClass === void 0 ? "w-[24px] h-[24px]" : _param_rightIconClass, iconComponent = param.iconComponent, _param_size = param.size, size = _param_size === void 0 ? "normal" : _param_size;
    var propWidth = width === "full_width" ? "w-full" : width ? width : "w-[90px]";
    var isSecondaryVariant = variant !== "primary";
    var size_height = size === "normal" ? "h-[2.1215rem]" : size === "large" ? "h-[2.75rem]" : "h-[2.625rem]";
    var variant_hover = variant === "primary" ? "hover:bg-primary" : "hover:bg-secondary";
    return !isLoading ? /* @__PURE__ */ React.createElement(Button, {
        form: form,
        className: "".concat(isSecondaryVariant ? " text-white  bg-secondary" : "bg-primary", " text-white shadow-none ").concat(propWidth, " md:").concat(propWidth, "  select-none rounded-[0.625rem] hover:opacity-90 ").concat(variant_hover, " ").concat(size_height, " ").concat(classes),
        onClick: !disabled ? action : function() {
            return void 0;
        },
        type: isSubmitable ? "submit" : "button",
        ref: ref,
        disabled: disabled
    }, iconRoute && /* @__PURE__ */ React.createElement("img", {
        src: iconRoute,
        alt: "left button icon",
        className: "w-[24px] h-[24px]"
    }), iconRoute && /* @__PURE__ */ React.createElement("span", null, "\xA0"), iconComponent, iconComponent && /* @__PURE__ */ React.createElement("span", null, "\xA0"), text, rightIconRoute && /* @__PURE__ */ React.createElement("span", null, "\xA0"), rightIconRoute && /* @__PURE__ */ React.createElement("img", {
        src: rightIconRoute,
        alt: "right button icon",
        className: rightIconClass
    })) : /* @__PURE__ */ React.createElement(Button, {
        className: "bg-primary text-white ".concat(propWidth, " md:").concat(propWidth, " select-none rounded-[0.625rem] cursor-not-allowed ").concat(size_height, " ").concat(classes ? classes : ""),
        ref: ref,
        disabled: true
    }, /* @__PURE__ */ React.createElement(import_lucide_react.Loader2, {
        className: "mr-2 h-4 w-4 animate-spin"
    }), dataLoadingText);
});
MainButton.displayName = "MainButton";
var MainButton_default = MainButton;
// src/components/ui/avatar.tsx
var React3 = __toESM(require("react"));
var AvatarPrimitive = __toESM(require("@radix-ui/react-avatar"));
var Avatar = React3.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React3.createElement(AvatarPrimitive.Root, _object_spread({
        ref: ref,
        className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)
    }, props));
});
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarImage = React3.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React3.createElement(AvatarPrimitive.Image, _object_spread({
        ref: ref,
        className: cn("aspect-square h-full w-full", className)
    }, props));
});
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
var AvatarFallback = React3.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React3.createElement(AvatarPrimitive.Fallback, _object_spread({
        ref: ref,
        className: cn("flex h-full w-full items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800", className)
    }, props));
});
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
// src/components/ui/textarea.tsx
var React4 = __toESM(require("react"));
var Textarea = React4.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React4.createElement("textarea", _object_spread({
        className: cn("flex min-h-[80px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300", className),
        ref: ref
    }, props));
});
Textarea.displayName = "Textarea";
// src/components/sections/AddCommentSection.tsx
function AddCommentSection(param) {
    var commentRepository = param.commentRepository, setRefreshKey = param.setRefreshKey, setShowComponent = param.setShowComponent, refreshParent = param.refreshParent, parentId = param.parentId;
    var _ref = _sliced_to_array((0, import_react2.useState)(""), 2), comment = _ref[0], setComment = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react2.useState)(false), 2), addCommentLoading = _ref1[0], setAddCommentLoading = _ref1[1];
    var handleAddComment = function() {
        var _ref = _async_to_generator(function(comment2) {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        setAddCommentLoading(true);
                        return [
                            4,
                            commentRepository.addComment(_object_spread_props(_object_spread({}, comment2), {
                                parentId: parentId ? parentId : void 0
                            })).then(/*#__PURE__*/ _async_to_generator(function() {
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            setComment("");
                                            if (typeof setRefreshKey === "function") {
                                                setRefreshKey(Math.random());
                                            }
                                            if (!(typeof refreshParent === "function")) return [
                                                3,
                                                2
                                            ];
                                            return [
                                                4,
                                                refreshParent()
                                            ];
                                        case 1:
                                            _state.sent();
                                            _state.label = 2;
                                        case 2:
                                            setAddCommentLoading(false);
                                            return [
                                                2
                                            ];
                                    }
                                });
                            })).catch(function() {
                                return setAddCommentLoading(false);
                            })
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        });
        return function handleAddComment(comment2) {
            return _ref.apply(this, arguments);
        };
    }();
    return /* @__PURE__ */ React.createElement("div", {
        className: "flex items-start gap-4"
    }, /* @__PURE__ */ React.createElement(Avatar, {
        className: "h-10 w-10 border"
    }, /* @__PURE__ */ React.createElement(AvatarImage, {
        src: "/placeholder-user.jpg"
    }), /* @__PURE__ */ React.createElement(AvatarFallback, null, "YO")), /* @__PURE__ */ React.createElement("div", {
        className: "grid gap-2 flex-1"
    }, /* @__PURE__ */ React.createElement(Textarea, {
        placeholder: "Write a comment...",
        className: "min-h-[100px] resize-none",
        value: comment,
        onChange: function(e) {
            var _e_target;
            return setComment(e === null || e === void 0 ? void 0 : (_e_target = e.target) === null || _e_target === void 0 ? void 0 : _e_target.value);
        }
    }), /* @__PURE__ */ React.createElement("div", {
        className: "flex justify-end gap-2 items-center"
    }, parentId && /* @__PURE__ */ React.createElement(Button, {
        variant: "ghost",
        onClick: function() {
            if (typeof setShowComponent === "function") {
                setShowComponent(false);
            }
        }
    }, "Cancel"), /* @__PURE__ */ React.createElement(MainButton_default, {
        text: "Post",
        disabled: (comment === null || comment === void 0 ? void 0 : comment.length) < 2,
        action: function() {
            return handleAddComment({
                content: comment
            });
        },
        isLoading: addCommentLoading
    }))));
}
var AddCommentSection_default = AddCommentSection;
// src/components/ui/skeleton.tsx
function Skeleton(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React.createElement("div", _object_spread({
        className: cn("animate-pulse rounded-md bg-slate-100 dark:bg-slate-800", className)
    }, props));
}
// src/components/skeletons/CommentSkeleton.tsx
function CommentSkeleton(param) {
    var count = param.count;
    var items = Array.from({
        length: count
    }, function(_, index) {
        return "Item ".concat(index + 1);
    });
    return /* @__PURE__ */ React.createElement("div", {
        className: "flex flex-col gap-4"
    }, items.map(function(_, index) {
        return /* @__PURE__ */ React.createElement("div", {
            className: "flex items-center space-x-4",
            key: index
        }, /* @__PURE__ */ React.createElement(Skeleton, {
            className: "h-12 w-12 rounded-full"
        }), /* @__PURE__ */ React.createElement("div", {
            className: "space-y-2"
        }, /* @__PURE__ */ React.createElement(Skeleton, {
            className: "h-4 w-[250px]"
        }), /* @__PURE__ */ React.createElement(Skeleton, {
            className: "h-4 w-[200px]"
        })));
    }));
}
var CommentSkeleton_default = CommentSkeleton;
// src/components/cards/CommentReplyCard.tsx
var import_react_timeago = __toESM(require("react-timeago"));
function CommentReplyCard(param) {
    var comment = param.comment, commentRepository = param.commentRepository;
    return /* @__PURE__ */ React.createElement("div", {
        className: "flex items-start gap-4 pl-12"
    }, /* @__PURE__ */ React.createElement(Avatar, {
        className: "h-10 w-10 border"
    }, /* @__PURE__ */ React.createElement(AvatarImage, {
        src: "/placeholder-user.jpg"
    }), /* @__PURE__ */ React.createElement(AvatarFallback, null, "JD")), /* @__PURE__ */ React.createElement("div", {
        className: "grid gap-2"
    }, /* @__PURE__ */ React.createElement("div", {
        className: "flex items-center gap-2"
    }, /* @__PURE__ */ React.createElement("div", {
        className: "font-medium"
    }, "John Doe"), /* @__PURE__ */ React.createElement("div", {
        className: "text-xs text-muted-foreground"
    }, /* @__PURE__ */ React.createElement(import_react_timeago.default, {
        date: comment.createdAt
    }))), /* @__PURE__ */ React.createElement("p", null, comment.content), /* @__PURE__ */ React.createElement("div", {
        className: "flex items-center gap-2"
    }, /* @__PURE__ */ React.createElement(Button, {
        variant: "ghost",
        size: "icon"
    }, /* @__PURE__ */ React.createElement(HeartIcon_default, {
        className: "h-4 w-4"
    }), /* @__PURE__ */ React.createElement("span", {
        className: "sr-only"
    }, "Like")))));
}
var CommentReplyCard_default = CommentReplyCard;
// src/components/cards/CommentCard.tsx
function CommentCard(param) {
    var comment = param.comment, commentRepository = param.commentRepository, setRefreshKey = param.setRefreshKey;
    var _comment_replies, _comment_replies1, _comment_id;
    var _ref = _sliced_to_array((0, import_react3.useState)(false), 2), replyComment = _ref[0], setReplyComment = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react3.useState)(false), 2), showReply = _ref1[0], setShowReply = _ref1[1];
    var _ref2 = _sliced_to_array((0, import_react3.useState)([]), 2), replies = _ref2[0], setReplies = _ref2[1];
    var _ref3 = _sliced_to_array((0, import_react3.useState)(false), 2), repliesLoading = _ref3[0], setRepliesLoading = _ref3[1];
    var toggleReplyComment = function() {
        setReplyComment(!replyComment);
    };
    var toggleSeeReplies = function() {
        var _ref = _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                setShowReply(!showReply);
                getCommentReplies();
                return [
                    2
                ];
            });
        });
        return function toggleSeeReplies() {
            return _ref.apply(this, arguments);
        };
    }();
    var getCommentReplies = function() {
        var _ref = _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        setRepliesLoading(true);
                        return [
                            4,
                            commentRepository.getCommentReplies(comment.id).then(function(replies2) {
                                setReplies(replies2);
                                setRepliesLoading(false);
                            }).catch(function() {
                                setRepliesLoading(false);
                            })
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        });
        return function getCommentReplies() {
            return _ref.apply(this, arguments);
        };
    }();
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
        className: "flex items-start gap-4"
    }, /* @__PURE__ */ React.createElement(Avatar, {
        className: "h-10 w-10 border"
    }, /* @__PURE__ */ React.createElement(AvatarImage, {
        src: "/placeholder-user.jpg"
    }), /* @__PURE__ */ React.createElement(AvatarFallback, null, "CN")), /* @__PURE__ */ React.createElement("div", {
        className: "grid gap-2"
    }, /* @__PURE__ */ React.createElement("div", {
        className: "flex items-center gap-2"
    }, /* @__PURE__ */ React.createElement("div", {
        className: "font-medium"
    }, "Cody Nolte"), /* @__PURE__ */ React.createElement("div", {
        className: "text-xs text-muted-foreground"
    }, /* @__PURE__ */ React.createElement(import_react_timeago2.default, {
        date: comment.createdAt
    }))), /* @__PURE__ */ React.createElement("p", null, comment.content), /* @__PURE__ */ React.createElement("div", {
        className: "flex items-center gap-2"
    }, /* @__PURE__ */ React.createElement(Button, {
        variant: "ghost",
        size: "icon"
    }, /* @__PURE__ */ React.createElement(HeartIcon_default, {
        className: "h-4 w-4"
    }), /* @__PURE__ */ React.createElement("span", {
        className: "sr-only"
    }, "Like")), /* @__PURE__ */ React.createElement(Button, {
        variant: "ghost",
        size: "icon",
        onClick: toggleReplyComment
    }, /* @__PURE__ */ React.createElement(MessageCircleIcon_default, {
        className: "h-4 w-4"
    }), /* @__PURE__ */ React.createElement("span", {
        className: "sr-only"
    }, "Reply")), (comment === null || comment === void 0 ? void 0 : (_comment_replies = comment.replies) === null || _comment_replies === void 0 ? void 0 : _comment_replies.length) > 0 && /* @__PURE__ */ React.createElement(Button, {
        variant: "ghost",
        size: "lg",
        onClick: !showReply ? function() {
            setReplyComment(false);
            toggleSeeReplies();
        } : function() {
            return setShowReply(!showReply);
        }
    }, /* @__PURE__ */ React.createElement("div", {
        className: "text-sm text-muted-foreground cursor-pointer text-blue-400 font-semibold select-none"
    }, !showReply ? "See" : "Hide", " Replies (", (_comment_replies1 = comment.replies) === null || _comment_replies1 === void 0 ? void 0 : _comment_replies1.length, ")"))), replyComment && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(AddCommentSection_default, {
        commentRepository: commentRepository,
        refreshParent: function() {
            getCommentReplies();
            setReplyComment(false);
            setShowReply(true);
            if (typeof setRefreshKey === "function") {
                setRefreshKey(Math.random());
            }
        },
        parentId: (_comment_id = comment.id) === null || _comment_id === void 0 ? void 0 : _comment_id.toString(),
        setShowComponent: setReplyComment
    })))), repliesLoading && /* @__PURE__ */ React.createElement(CommentSkeleton_default, {
        count: 1
    }), showReply && (replies === null || replies === void 0 ? void 0 : replies.length) > 0 && replies.map(function(reply) {
        var _reply_id;
        return /* @__PURE__ */ React.createElement("div", {
            className: "grid gap-6",
            key: reply === null || reply === void 0 ? void 0 : (_reply_id = reply.id) === null || _reply_id === void 0 ? void 0 : _reply_id.toString()
        }, /* @__PURE__ */ React.createElement(CommentReplyCard_default, {
            comment: reply,
            commentRepository: commentRepository
        }));
    }));
}
var CommentCard_default = CommentCard;
// src/components/sections/CommentSection.tsx
var CommentSection = function(param) {
    var commentRepository = param.commentRepository;
    var _ref = _sliced_to_array((0, import_react4.useState)(false), 2), isMounted = _ref[0], setIsMounted = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react4.useState)([]), 2), comments = _ref1[0], setComments = _ref1[1];
    var _ref2 = _sliced_to_array((0, import_react4.useState)(0), 2), refreshKey = _ref2[0], setRefreshKey = _ref2[1];
    var _ref3 = _sliced_to_array((0, import_react4.useState)(false), 2), commentsLoading = _ref3[0], setCommentLoading = _ref3[1];
    (0, import_react4.useEffect)(function() {
        var fetchComments = function() {
            var _ref = _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                commentRepository.getComments().then(function(dbComments) {
                                    setComments(dbComments);
                                }).catch(function() {})
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            });
            return function fetchComments() {
                return _ref.apply(this, arguments);
            };
        }();
        fetchComments();
    }, [
        refreshKey,
        commentRepository
    ]);
    (0, import_react4.useEffect)(function() {
        setTimeout(function() {
            setIsMounted(true);
        }, 2e3);
    }, []);
    return /* @__PURE__ */ import_react4.default.createElement("div", {
        className: "mx-auto max-w-2xl space-y-6 py-4"
    }, /* @__PURE__ */ import_react4.default.createElement(AddCommentSection_default, {
        commentRepository: commentRepository,
        setRefreshKey: setRefreshKey
    }), !isMounted && /* @__PURE__ */ import_react4.default.createElement("div", null, /* @__PURE__ */ import_react4.default.createElement(CommentSkeleton_default, {
        count: 6
    })), isMounted && comments.map(function(comment) {
        var _comment_id;
        return /* @__PURE__ */ import_react4.default.createElement("div", {
            className: "grid gap-6",
            key: comment === null || comment === void 0 ? void 0 : (_comment_id = comment.id) === null || _comment_id === void 0 ? void 0 : _comment_id.toString()
        }, /* @__PURE__ */ import_react4.default.createElement(CommentCard_default, {
            comment: comment,
            commentRepository: commentRepository,
            setRefreshKey: setRefreshKey
        }));
    }));
};
var CommentSection_default = CommentSection;
// src/lib/constant.ts
var ONE_REPLY_LEVEL_ALLOWED = "Cannot add a reply to a reply. Only one level of replies is allowed.";
// src/server/actions/MongoCommentRepositoryServerActions.ts
var import_mongodb2 = require("mongodb");
// src/server/connections/mongo-db-connection.ts
var import_mongodb = require("mongodb");
var cached = global.mongo;
if (!cached) {
    cached = global.mongo = {
        conn: null,
        promise: null
    };
}
var connectToMongoDatabase = function() {
    var _ref = _async_to_generator(function(mongoDBUrl, dbName) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (cached.conn) return [
                        2,
                        cached.conn
                    ];
                    if (!mongoDBUrl) throw new Error("Missing mongoDBUrl");
                    cached.promise = cached.promise || import_mongodb.MongoClient.connect(mongoDBUrl, {}).then(function(client) {
                        return client.db(dbName);
                    });
                    return [
                        4,
                        cached.promise
                    ];
                case 1:
                    cached.conn = _state.sent();
                    return [
                        2,
                        cached.conn
                    ];
            }
        });
    });
    return function connectToMongoDatabase(mongoDBUrl, dbName) {
        return _ref.apply(this, arguments);
    };
}();
function addCommentAction(comment, config) {
    return _addCommentAction.apply(this, arguments);
}
function _addCommentAction() {
    _addCommentAction = // src/server/actions/MongoCommentRepositoryServerActions.ts
    _async_to_generator(function(comment, config) {
        var mongoDBUrl, dbName, collectionName, db, parentComment, result, newCommentId;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    mongoDBUrl = config.mongoDBUrl, dbName = config.dbName, collectionName = config.collectionName;
                    return [
                        4,
                        connectToMongoDatabase(mongoDBUrl, dbName)
                    ];
                case 1:
                    db = _state.sent();
                    if (!comment.parentId) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        db.collection(collectionName).findOne({
                            _id: new import_mongodb2.ObjectId(comment.parentId)
                        })
                    ];
                case 2:
                    parentComment = _state.sent();
                    if (parentComment && parentComment.parentId) {
                        throw new Error(ONE_REPLY_LEVEL_ALLOWED);
                    }
                    _state.label = 3;
                case 3:
                    return [
                        4,
                        db.collection(collectionName).insertOne(_object_spread(_object_spread_props(_object_spread({}, comment), {
                            externalIdentifierId: null,
                            createdAt: /* @__PURE__ */ new Date(),
                            updatedAt: /* @__PURE__ */ new Date()
                        }), comment.parentId && {
                            parentId: comment.parentId
                        }))
                    ];
                case 4:
                    result = _state.sent();
                    newCommentId = result.insertedId.toString();
                    if (!comment.parentId) return [
                        3,
                        6
                    ];
                    return [
                        4,
                        db.collection(collectionName).updateOne({
                            _id: new import_mongodb2.ObjectId(comment.parentId)
                        }, //@ts-ignore
                        {
                            $push: {
                                replies: newCommentId
                            }
                        })
                    ];
                case 5:
                    _state.sent();
                    _state.label = 6;
                case 6:
                    return [
                        2,
                        _object_spread_props(_object_spread({}, comment), {
                            id: result.insertedId.toString()
                        })
                    ];
            }
        });
    });
    return _addCommentAction.apply(this, arguments);
}
function getCommentsAction(config, parentId) {
    return _getCommentsAction.apply(this, arguments);
}
function _getCommentsAction() {
    _getCommentsAction = _async_to_generator(function(config, parentId) {
        var mongoDBUrl, dbName, collectionName, db, query, comments, formattedComments;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    mongoDBUrl = config.mongoDBUrl, dbName = config.dbName, collectionName = config.collectionName;
                    return [
                        4,
                        connectToMongoDatabase(mongoDBUrl, dbName)
                    ];
                case 1:
                    db = _state.sent();
                    query = parentId ? {
                        parentId: parentId
                    } : {
                        parentId: {
                            $exists: false
                        }
                    };
                    return [
                        4,
                        db.collection(collectionName).find(query).sort({
                            createdAt: -1
                        }).toArray()
                    ];
                case 2:
                    comments = _state.sent();
                    formattedComments = comments.map(function(comment) {
                        return _object_spread_props(_object_spread({}, comment), {
                            id: comment._id.toString()
                        });
                    });
                    return [
                        2,
                        JSON.parse(JSON.stringify(formattedComments))
                    ];
            }
        });
    });
    return _getCommentsAction.apply(this, arguments);
}
function getCommentRepliesAction(config, commentId) {
    return _getCommentRepliesAction.apply(this, arguments);
}
function _getCommentRepliesAction() {
    _getCommentRepliesAction = _async_to_generator(function(config, commentId) {
        var mongoDBUrl, dbName, collectionName, db, replies, updatedReplies;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    mongoDBUrl = config.mongoDBUrl, dbName = config.dbName, collectionName = config.collectionName;
                    return [
                        4,
                        connectToMongoDatabase(mongoDBUrl, dbName)
                    ];
                case 1:
                    db = _state.sent();
                    return [
                        4,
                        db.collection(collectionName).find({
                            parentId: commentId
                        }).sort({
                            createdAt: -1
                        }).toArray()
                    ];
                case 2:
                    replies = _state.sent();
                    updatedReplies = replies.map(function(reply) {
                        return _object_spread_props(_object_spread({}, reply), {
                            id: reply._id.toString()
                        });
                    });
                    return [
                        2,
                        JSON.parse(JSON.stringify(updatedReplies))
                    ];
            }
        });
    });
    return _getCommentRepliesAction.apply(this, arguments);
}
function getCommentRepliesCountAction(config, commentId) {
    return _getCommentRepliesCountAction.apply(this, arguments);
}
function _getCommentRepliesCountAction() {
    _getCommentRepliesCountAction = _async_to_generator(function(config, commentId) {
        var mongoDBUrl, dbName, collectionName, db, replyCount;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    mongoDBUrl = config.mongoDBUrl, dbName = config.dbName, collectionName = config.collectionName;
                    return [
                        4,
                        connectToMongoDatabase(mongoDBUrl, dbName)
                    ];
                case 1:
                    db = _state.sent();
                    return [
                        4,
                        db.collection(collectionName).find({
                            parentId: commentId
                        }).count()
                    ];
                case 2:
                    replyCount = _state.sent();
                    return [
                        2,
                        replyCount || 0
                    ];
            }
        });
    });
    return _getCommentRepliesCountAction.apply(this, arguments);
}
function updateCommentAction(id, content, config) {
    return _updateCommentAction.apply(this, arguments);
}
function _updateCommentAction() {
    _updateCommentAction = _async_to_generator(function(id, content, config) {
        var _comment_parentId, mongoDBUrl, dbName, collectionName, db, comment, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    mongoDBUrl = config.mongoDBUrl, dbName = config.dbName, collectionName = config.collectionName;
                    return [
                        4,
                        connectToMongoDatabase(mongoDBUrl, dbName)
                    ];
                case 1:
                    db = _state.sent();
                    return [
                        4,
                        db.collection(collectionName).updateOne({
                            _id: new import_mongodb2.ObjectId(id)
                        }, {
                            $set: {
                                content: content,
                                updatedAt: /* @__PURE__ */ new Date()
                            }
                        })
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        db.collection(collectionName).findOne({
                            _id: new import_mongodb2.ObjectId(id)
                        })
                    ];
                case 3:
                    comment = _state.sent();
                    result = !comment ? null : {
                        id: comment._id.toString(),
                        parentId: (_comment_parentId = comment.parentId) === null || _comment_parentId === void 0 ? void 0 : _comment_parentId.toString(),
                        content: comment.content,
                        author: comment.author
                    };
                    return [
                        2,
                        result
                    ];
            }
        });
    });
    return _updateCommentAction.apply(this, arguments);
}
function deleteCommentAction(id, config) {
    return _deleteCommentAction.apply(this, arguments);
}
function _deleteCommentAction() {
    _deleteCommentAction = _async_to_generator(function(id, config) {
        var mongoDBUrl, dbName, collectionName, db;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    mongoDBUrl = config.mongoDBUrl, dbName = config.dbName, collectionName = config.collectionName;
                    return [
                        4,
                        connectToMongoDatabase(mongoDBUrl, dbName)
                    ];
                case 1:
                    db = _state.sent();
                    return [
                        4,
                        db.collection(collectionName).deleteOne({
                            _id: new import_mongodb2.ObjectId(id)
                        })
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _deleteCommentAction.apply(this, arguments);
}
// src/data/MongoCommentRepository.ts
var MongoCommentRepository = /*#__PURE__*/ function() {
    function MongoCommentRepository(mongoDBUrl, dbName, collectionName) {
        _class_call_check(this, MongoCommentRepository);
        this.mongoDBUrl = mongoDBUrl;
        this.dbName = dbName;
        this.collectionName = collectionName;
    }
    _create_class(MongoCommentRepository, [
        {
            key: "addComment",
            value: function addComment(comment) {
                var _this = this;
                return _async_to_generator(function() {
                    var config;
                    return _ts_generator(this, function(_state) {
                        config = {
                            mongoDBUrl: _this.mongoDBUrl,
                            dbName: _this.dbName,
                            collectionName: _this.collectionName
                        };
                        return [
                            2,
                            addCommentAction(comment, config)
                        ];
                    });
                })();
            }
        },
        {
            key: "getComments",
            value: function getComments(parentId) {
                var _this = this;
                return _async_to_generator(function() {
                    var config;
                    return _ts_generator(this, function(_state) {
                        config = {
                            mongoDBUrl: _this.mongoDBUrl,
                            dbName: _this.dbName,
                            collectionName: _this.collectionName
                        };
                        return [
                            2,
                            getCommentsAction(config, parentId)
                        ];
                    });
                })();
            }
        },
        {
            key: "getCommentReplies",
            value: function getCommentReplies(parentId) {
                var _this = this;
                return _async_to_generator(function() {
                    var config;
                    return _ts_generator(this, function(_state) {
                        config = {
                            mongoDBUrl: _this.mongoDBUrl,
                            dbName: _this.dbName,
                            collectionName: _this.collectionName
                        };
                        return [
                            2,
                            getCommentRepliesAction(config, parentId)
                        ];
                    });
                })();
            }
        },
        {
            key: "getCommentRepliesCount",
            value: function getCommentRepliesCount(parentId) {
                var _this = this;
                return _async_to_generator(function() {
                    var config;
                    return _ts_generator(this, function(_state) {
                        config = {
                            mongoDBUrl: _this.mongoDBUrl,
                            dbName: _this.dbName,
                            collectionName: _this.collectionName
                        };
                        return [
                            2,
                            getCommentRepliesCountAction(config, parentId)
                        ];
                    });
                })();
            }
        },
        {
            key: "updateComment",
            value: function updateComment(id, content) {
                var _this = this;
                return _async_to_generator(function() {
                    var config;
                    return _ts_generator(this, function(_state) {
                        config = {
                            mongoDBUrl: _this.mongoDBUrl,
                            dbName: _this.dbName,
                            collectionName: _this.collectionName
                        };
                        return [
                            2,
                            updateCommentAction(id, content, config)
                        ];
                    });
                })();
            }
        },
        {
            key: "deleteComment",
            value: function deleteComment(id) {
                var _this = this;
                return _async_to_generator(function() {
                    var config;
                    return _ts_generator(this, function(_state) {
                        config = {
                            mongoDBUrl: _this.mongoDBUrl,
                            dbName: _this.dbName,
                            collectionName: _this.collectionName
                        };
                        return [
                            2,
                            deleteCommentAction(id, config)
                        ];
                    });
                })();
            }
        }
    ]);
    return MongoCommentRepository;
}();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    CommentSection: CommentSection,
    MongoCommentRepository: MongoCommentRepository
});
