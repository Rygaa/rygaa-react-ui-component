/* eslint-disable */
import React from 'react';
import classNames from 'classnames';
import { HexColorPicker } from 'react-colorful';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "@import url(\"https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");.Button-module_container__24BJV{display:flex;justify-content:center;align-items:center;background-color:#00f;cursor:pointer;border-radius:5px;transition:.2s}.Button-module_container__24BJV>i{--ggs:1;font-size:.1}.Button-module_container__24BJV button{background-color:transparent;border:none;cursor:pointer;transition:.2s}.Button-module_container__24BJV>svg path{fill:#fff}.Button-module_container__24BJV:hover>svg path{fill:#000}.Button-module_size1__zjn3k{width:11.5625rem;height:3.125rem}.Button-module_size1__zjn3k>button{font-size:17.5px;display:flex;align-items:center;text-align:center;color:#fff;font-family:Raleway;font-style:normal;font-weight:700}.Button-module_size2__2c2b8{width:9.8856rem;height:2.6719rem}.Button-module_size2__2c2b8>button{font-size:15px;display:flex;align-items:center;text-align:center;color:#fff;font-family:Raleway;font-style:normal;font-weight:700}.Button-module_size3__2blMh{width:8.235rem;height:2.2256rem}.Button-module_size3__2blMh>button{font-size:12.5px;display:flex;align-items:center;text-align:center;color:#fff;font-family:Raleway;font-style:normal;font-weight:700}.Button-module_size4__3QCiz{width:6.5881rem;height:2.2256rem}.Button-module_size4__3QCiz>button{font-size:10px;display:flex;align-items:center;text-align:center;color:#fff;font-family:Raleway;font-style:normal;font-weight:700}.Button-module_size5__Ur2OI{width:4.9413rem;height:1.3356rem}.Button-module_size5__Ur2OI>button{font-size:7.5px}.Button-module_font-size1__38c-F>button,.Button-module_size5__Ur2OI>button{display:flex;align-items:center;text-align:center;color:#fff;font-family:Raleway;font-style:normal;font-weight:700}.Button-module_font-size1__38c-F>button{font-size:17.5px}.Button-module_font-size2__34RRx>button{font-size:15px}.Button-module_font-size2__34RRx>button,.Button-module_font-size3__2yarg>button{display:flex;align-items:center;text-align:center;color:#fff;font-family:Raleway;font-style:normal;font-weight:700}.Button-module_font-size3__2yarg>button{font-size:12.5px}.Button-module_font-size4__1t64F>button{font-size:10px}.Button-module_font-size4__1t64F>button,.Button-module_font-size5__2VcNq>button{display:flex;align-items:center;text-align:center;color:#fff;font-family:Raleway;font-style:normal;font-weight:700}.Button-module_font-size5__2VcNq>button{font-size:7.5px}.Button-module_primary__1eaan{background-color:#3ebe8e}.Button-module_primary__1eaan>button{color:#fff}.Button-module_primary__1eaan:hover{background-color:#45d49f}.Button-module_secondary__2Nuvd{background-color:#525252}.Button-module_secondary__2Nuvd>button{color:#fff}.Button-module_secondary__2Nuvd:hover{background-color:#525252}.Button-module_danger__kunT1{background-color:#ef1d1d}.Button-module_danger__kunT1>button{color:#fff}.Button-module_danger__kunT1:hover{background-color:#ff2b2b}.Button-module_warning__1GDa6{background-color:#efc11d}.Button-module_warning__1GDa6>button{color:#fff}.Button-module_warning__1GDa6:hover{background-color:#efc11d}.Button-module_none__2VZaQ{background-color:transparent}.Button-module_none__2VZaQ>button{color:#000}.Button-module_none__2VZaQ:hover>button{color:#585858}.Button-module_none__2VZaQ:hover{background-color:transparent}";
var classes = {"container":"Button-module_container__24BJV","size1":"Button-module_size1__zjn3k","size2":"Button-module_size2__2c2b8","size3":"Button-module_size3__2blMh","size4":"Button-module_size4__3QCiz","size5":"Button-module_size5__Ur2OI","font-size1":"Button-module_font-size1__38c-F","font-size2":"Button-module_font-size2__34RRx","font-size3":"Button-module_font-size3__2yarg","font-size4":"Button-module_font-size4__1t64F","font-size5":"Button-module_font-size5__2VcNq","primary":"Button-module_primary__1eaan","secondary":"Button-module_secondary__2Nuvd","danger":"Button-module_danger__kunT1","warning":"Button-module_warning__1GDa6","none":"Button-module_none__2VZaQ"};
styleInject(css_248z);

var Button = function (_a) {
    var ryShowIcon = _a.ryShowIcon, ryShowOnlyIcon = _a.ryShowOnlyIcon, ryFontSize = _a.ryFontSize, rySize = _a.rySize, ryType = _a.ryType, ryContainerStyle = _a.ryContainerStyle, ryAlign = _a.ryAlign, ryIcon = _a.ryIcon, ryText = _a.ryText, props = __rest(_a, ["ryShowIcon", "ryShowOnlyIcon", "ryFontSize", "rySize", "ryType", "ryContainerStyle", "ryAlign", "ryIcon", "ryText"]);
    var stylee = ryAlign ? { alignSelf: 'flex-end' } : {};
    var containerOnClick = function (e) {
        console.log('rinn');
        if (e.target === e.currentTarget) {
            props.onClick && props.onClick(e);
        }
    };
    var ButtonWithIcon = (React.createElement("div", { style: __assign(__assign({}, ryContainerStyle), stylee), className: classNameGenerator(ryType, rySize, ryFontSize), onClick: containerOnClick },
        ryIcon,
        !ryShowOnlyIcon && React.createElement("button", __assign({}, props), ryText)));
    var ButtonWithoutIcon = (React.createElement("div", { style: __assign(__assign({}, ryContainerStyle), stylee), className: classNameGenerator(ryType, rySize, ryFontSize), onClick: containerOnClick },
        React.createElement("button", __assign({}, props), ryText)));
    return ryShowIcon ? ButtonWithIcon : ButtonWithoutIcon;
};
var classNameGenerator = function (ryType, rySize, ryFontSize) {
    var x = [classes['container']];
    switch (ryType) {
        case 'Primary':
            x.push(classes['primary']);
            break;
        case 'Secondary':
            x.push(classes['secondary']);
            break;
        case 'Danger':
            x.push(classes['danger']);
            break;
        case 'Warning':
            x.push(classes['warning']);
            break;
        default:
            x.push(classes['none']);
            break;
    }
    switch (rySize) {
        case 'size1':
            x.push(classes['size1']);
            break;
        case 'size2':
            x.push(classes['size2']);
            break;
        case 'size3':
            x.push(classes['size3']);
            break;
        case 'size4':
            x.push(classes['size4']);
            break;
        case 'size5':
            x.push(classes['size5']);
            break;
    }
    switch (ryFontSize) {
        case 'font-size1':
            x.push(classes['font-size1']);
            break;
        case 'font-size2':
            x.push(classes['font-size2']);
            break;
        case 'font-size3':
            x.push(classes['font-size3']);
            break;
        case 'font-size4':
            x.push(classes['font-size4']);
            break;
        case 'font-size5':
            x.push(classes['font-size5']);
            break;
    }
    return classNames(x);
};

var css_248z$1 = "@import url(\"https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");.Input-module_big-container__3KOQx{display:flex;flex-direction:column;flex:1}.Input-module_big-container__3KOQx>p{padding:0;font-size:12.5px;display:flex;align-items:center;text-align:center;color:#fff;font-family:Roboto;font-style:normal;font-weight:500;color:#000;margin:0 0 .25rem}.Input-module_container__13V8N{display:flex;flex:1;background-color:#b5b3b6;max-height:40px;box-sizing:border-box;background:#fff;border:1px solid #dedede;border-radius:5px}.Input-module_container__13V8N>svg path{fill:#000}.Input-module_container__13V8N>svg{background-color:#eee;padding:.75rem 1.25rem;border-right:1px solid #eee;width:.75rem;height:auto}.Input-module_inputt__2Mw5y{background-color:transparent;border:none;font-size:12.5px;display:flex;align-items:center;text-align:center;color:#fff;font-family:Roboto;font-style:normal;font-weight:400;text-align:start;flex:1;color:#000;padding:0 0 0 10px;height:40px}.Input-module_inputt__2Mw5y:focus-within{outline:none}.Input-module_inputt__2Mw5y:focus-within>input{outline:none}";
var classes$1 = {"big-container":"Input-module_big-container__3KOQx","container":"Input-module_container__13V8N","inputt":"Input-module_inputt__2Mw5y"};
styleInject(css_248z$1);

var Input = function (_a) {
    var ryShowIcon = _a.ryShowIcon, ryLabel = _a.ryLabel, ryIcon = _a.ryIcon, ryImage = _a.ryImage, props = __rest(_a, ["ryShowIcon", "ryLabel", "ryIcon", "ryImage"]);
    var c1 = (React.createElement("div", { className: classes$1['container'] },
        ryImage,
        React.createElement("input", __assign({ className: classes$1['inputt'] }, props))));
    var c2 = (React.createElement("div", { className: classes$1['container'] },
        React.createElement("input", __assign({ className: classes$1['inputt'] }, props))));
    return (React.createElement("div", { className: classes$1['big-container'] },
        ryLabel && (React.createElement("p", null, ryLabel)),
        React.createElement("div", { className: classes$1['container'] },
            ryImage,
            React.createElement("input", __assign({ className: classes$1['inputt'] }, props)))));
};

var css_248z$2 = "@import url(\"https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");.Page-module_container__Lvach{display:grid;grid-template-rows:7.5vh 92.5vh;row-gap:1rem;margin-left:1.5rem;height:100%;column-gap:1rem;margin-bottom:1rem;margin-right:2rem;flex:1}.Page-module_container__Lvach>p:first-child{font-size:32.5px;display:flex;align-items:center;text-align:center;color:#fff;font-family:Raleway;font-style:normal;font-weight:700;color:#464646;grid-row:1/2;border-bottom:1px solid #464646;margin:0;padding:0}.Page-module_main1__1Hw0m{display:flex;margin-bottom:2rem;column-gap:2rem;width:100%}.Page-module_main1__1Hw0m>aside{display:flex;flex-direction:column;background:#fff;box-shadow:0 0 4px rgba(0,0,0,.25);padding:1.25rem 2rem;width:20%}.Page-module_main1__1Hw0m>main{display:flex;flex-direction:column;flex:1;width:100%}";
var classes$2 = {"container":"Page-module_container__Lvach","main1":"Page-module_main1__1Hw0m"};
styleInject(css_248z$2);

var Page = function (_a) {
    var ryTitle = _a.ryTitle, ryAside = _a.ryAside, ryPrincipal = _a.ryPrincipal, props = __rest(_a, ["ryTitle", "ryAside", "ryPrincipal"]);
    return (React.createElement("div", { className: classes$2['container'] },
        React.createElement("p", null, ryTitle),
        React.createElement("div", { className: classes$2['main1'] }, props.children)));
};

var css_248z$3 = "@import url(\"https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");.CheckboxInput-module_Checkbox__BPvqk{display:flex;justify-content:center;align-self:center;align-items:center;width:1.5625rem!important;height:1.5625rem!important;border:1px solid #dedede;box-sizing:border-box;border-radius:5px;margin-right:.5rem;cursor:pointer}.CheckboxInput-module_Checkbox__BPvqk>img{width:.938rem;height:.938rem}.CheckboxInput-module_container__2Bzgv{display:flex}.CheckboxInput-module_container__2Bzgv p{font-size:12.5px;display:flex;align-items:center;text-align:center;color:#fff;font-family:Roboto;font-style:normal;font-weight:400;align-self:center;color:#646464;margin:0;padding:0}";
var classes$3 = {"Checkbox":"CheckboxInput-module_Checkbox__BPvqk","container":"CheckboxInput-module_container__2Bzgv"};
styleInject(css_248z$3);

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAFPmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpDb2xvclNwYWNlPSIxIgogICBleGlmOlBpeGVsWERpbWVuc2lvbj0iNTEyIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iNTEyIgogICBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIgogICBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiCiAgIHRpZmY6SW1hZ2VMZW5ndGg9IjUxMiIKICAgdGlmZjpJbWFnZVdpZHRoPSI1MTIiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLjAiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLjAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIw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";

var CheckboxInput = function (_a) {
    var ryShowIcon = _a.ryShowIcon, ryIcon = _a.ryIcon, ryImage = _a.ryImage, props = __rest(_a, ["ryShowIcon", "ryIcon", "ryImage"]);
    return (React.createElement("div", __assign({ className: classes$3["container"] }, props),
        React.createElement("div", { className: classes$3["Checkbox"] }, props.value ? React.createElement("img", { src: img }) : null),
        props.children));
};

var ColorInput = function (_a) {
    var ryColor = _a.ryColor, ryShowIcon = _a.ryShowIcon, ryLabel = _a.ryLabel, ryIcon = _a.ryIcon, ryImage = _a.ryImage, props = __rest(_a, ["ryColor", "ryShowIcon", "ryLabel", "ryIcon", "ryImage"]);
    var x = function (e) {
        if (props.onChange) {
            props.onChange(e);
        }
    };
    var _b = React.useState(false), colorPickerOpen = _b[0], setColorPickerOpen = _b[1];
    var color = props.color ? props.color : "#FFFFFF";
    return (React.createElement("div", { className: classes$1["custom-component"], style: props.style },
        ryLabel && (React.createElement("p", { className: classes$1["label-custom-component"] }, ryLabel)),
        React.createElement("div", null,
            React.createElement("input", { style: {
                    backgroundColor: "" + props.color,
                    width: "100%",
                    height: "50px",
                    border: "none",
                    borderRadius: "5px",
                }, type: "button", onClick: function () {
                    setColorPickerOpen(!colorPickerOpen);
                } }),
            colorPickerOpen && React.createElement(HexColorPicker, { color: color, onChange: x }),
            colorPickerOpen && (React.createElement("button", { onClick: function () { return setColorPickerOpen(false); } }, "Close")))));
};

var FileInput = function (_a) {
    var ryColor = _a.ryColor, ryShowIcon = _a.ryShowIcon, ryLabel = _a.ryLabel, ryIcon = _a.ryIcon, ryImage = _a.ryImage, props = __rest(_a, ["ryColor", "ryShowIcon", "ryLabel", "ryIcon", "ryImage"]);
    //  const inputRef: React.Ref = React.useRef(null) ;
    var inputRef = React.useRef(null);
    return (React.createElement("div", { className: classes$1["file-input-component"], style: props.style },
        ryLabel && (React.createElement("p", { className: classes$1["label-file-input"] }, ryLabel)),
        React.createElement("div", { className: classes$1["container-file-input"] },
            React.createElement("img", { onClick: function () {
                    if (inputRef && inputRef.current) {
                        inputRef.current.click();
                    }
                }, src: ryImage }),
            React.createElement("input", { ref: inputRef, style: { display: "none" }, onChange: function (e) {
                    // props.onChange(inputRef.current.files[0])
                    if (props.onChange) {
                        props.onChange(e);
                    }
                }, type: "file" }))));
};

var css_248z$4 = "@import url(\"https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");.Select-module_big-container__2OPTp{display:flex;flex-direction:column}.Select-module_big-container__2OPTp>p{padding:0;font-weight:500;margin:0 0 .25rem}.Select-module_big-container__2OPTp>p,.Select-module_select__OLjiA{font-size:12.5px;display:flex;align-items:center;text-align:center;color:#fff;font-family:Roboto;font-style:normal;color:#000}.Select-module_select__OLjiA{border-radius:5px;border:1px solid #d7d7d7;padding:0 1rem;font-weight:400;text-align:left;height:100%}.Select-module_select__OLjiA:focus-within{outline:none}";
var classes$4 = {"big-container":"Select-module_big-container__2OPTp","select":"Select-module_select__OLjiA"};
styleInject(css_248z$4);

var Select = function (_a) {
    var ryShowIcon = _a.ryShowIcon, ryLabel = _a.ryLabel, ryStyle = _a.ryStyle, ryAlign = _a.ryAlign, ryIcon = _a.ryIcon, ryText = _a.ryText, props = __rest(_a, ["ryShowIcon", "ryLabel", "ryStyle", "ryAlign", "ryIcon", "ryText"]);
    return (React.createElement("div", { className: classes$4['big-container'] },
        ryLabel && React.createElement("p", null, ryLabel),
        React.createElement("select", { onChange: function (e) {
                if (props.onChange) {
                    props.onChange(e);
                }
            }, className: classes$4['select'] }, props.children)));
};

var css_248z$5 = ".Dropdown-module_divv__2x-n2{display:flex;flex-direction:column;position:relative;cursor:pointer}.Dropdown-module_divv__2x-n2>div:first-child{display:flex}.Dropdown-module_x__2L_Bp{height:100%;width:100%;align-items:center;display:flex;justify-content:center}.Dropdown-module_after__2ueL8{right:0;overflow:visible;display:block;flex-direction:column;position:sticky;top:30px;right:20px;background-color:hsla(0,0%,100%,.952);box-shadow:0 0 4px 1px rgba(0,0,0,.35);padding:1rem;z-index:2}";
var classes$5 = {"divv":"Dropdown-module_divv__2x-n2","x":"Dropdown-module_x__2L_Bp","after":"Dropdown-module_after__2ueL8"};
styleInject(css_248z$5);

var Dropdown = function (_a) {
    var ryShowIcon = _a.ryShowIcon, ryStyle = _a.ryStyle, ryAlign = _a.ryAlign, ryIcon = _a.ryIcon, ryText = _a.ryText, props = __rest(_a, ["ryShowIcon", "ryStyle", "ryAlign", "ryIcon", "ryText"]);
    // const [open, setOpen] = React.useState(false);
    var _b = React.useState(true), open = _b[0], setOpen = _b[1];
    return (React.createElement("div", { className: classes$5['divv'], onBlur: function () {
            console.log('blur');
            setOpen(false);
        }, tabIndex: 0 },
        React.createElement("div", { onClick: function (e) {
                setOpen(true);
            }, className: classes$5['x'] }, props.before),
        open === true && (React.createElement("div", { className: classes$5['after'], onMouseDown: function (e) { return e.preventDefault(); } }, props.children))));
};

var Modal = function (_a) {
    var ryShowIcon = _a.ryShowIcon, ryLabel = _a.ryLabel, ryIcon = _a.ryIcon, ryOpen = _a.ryOpen, ryClass = _a.ryClass, props = __rest(_a, ["ryShowIcon", "ryLabel", "ryIcon", "ryOpen", "ryClass"]);
    return ryOpen ? (React.createElement("div", { className: ryClass },
        React.createElement("div", null, props.children),
        React.createElement("div", { onClick: function (e) {
                if (props.onClick) {
                    props.onClick(e);
                }
            } }))) : null;
};

export { Button, CheckboxInput, ColorInput, Dropdown, FileInput, Input, Modal, Page, Select };
