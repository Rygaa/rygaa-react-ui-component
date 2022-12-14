/* eslint-disable */
import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { HexColorPicker } from 'react-colorful';
import Selectt from 'react-select';

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

var css_248z = "@import url(\"https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");.Button-module_container-without-icon__3mAzv{display:flex;justify-content:center;align-items:center;cursor:pointer;border-radius:.1563rem;width:100%;height:100%}.Button-module_container-without-icon__3mAzv button{background-color:transparent;border:none;cursor:pointer}.Button-module_container-with-only-icon__84_qF{display:flex;justify-content:center;align-self:center;cursor:pointer}.Button-module_container-with-icon__1OdGD{display:grid;grid-template-columns:25% 65%;justify-content:center;align-items:center;cursor:pointer;border-radius:.1563rem;transition:.2s;border-top-left-radius:.1563rem;border-bottom-left-radius:.1563rem;column-gap:1rem}.Button-module_container-with-icon__1OdGD button{background-color:transparent;border:none;cursor:pointer;padding:0}.Button-module_container-with-icon__1OdGD:hover>div:first-child{background-color:#3fc493;border-top-right-radius:50%;border-bottom-right-radius:50%}.Button-module_container-with-icon__1OdGD>svg{width:1.0938rem;height:1.0938rem}.Button-module_container-with-icon__1OdGD>svg path{fill:#fff}.Button-module_size1__gQqBB{width:11.5625rem;height:3.125rem}.Button-module_size1__gQqBB>button{font-size:1.0938rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:700;margin:0;padding:0;color:var(--custom-color2)}.Button-module_size2__3GA0v{width:9.8856rem;height:2.5rem}.Button-module_size2__3GA0v>button{font-size:.9375rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:700;margin:0;padding:0;color:var(--custom-color2)}.Button-module_size3__P2g7P{width:8.235rem;height:2.2256rem}.Button-module_size3__P2g7P>button{font-size:.7813rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:700;margin:0;padding:0;color:var(--custom-color2)}.Button-module_size4__1NTnr{width:6.5881rem;height:2.2256rem}.Button-module_size4__1NTnr>button{font-size:.625rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:700;margin:0;padding:0;color:var(--custom-color2)}.Button-module_size5__ZH0st{width:100%!important;height:3.125rem!important}.Button-module_size5__ZH0st>button{font-size:1.0938rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:700;margin:0;padding:0;color:var(--custom-color2)}.Button-module_primary__2BIer{background-color:var(--background-color-primarybutton-normal)}.Button-module_primary__2BIer>button{color:var(--color-primarybutton-normal)}.Button-module_secondary__3rdQe{background-color:var(--background-color-secondarybutton-normal)}.Button-module_secondary__3rdQe>button{color:var(--color-secondarybutton-normal)}.Button-module_danger__2TiH5{background-color:var(--background-color-dangerbutton-normal)}.Button-module_danger__2TiH5>button{color:var(--color-dangerbutton-normal)}.Button-module_warning__3_k9f{background-color:var(--background-color-warningbutton-normal)}.Button-module_warning__3_k9f>button{color:var(--color-warningbutton-normal)}.Button-module_none__3cPkJ{background-color:transparent}.Button-module_none__3cPkJ>button{color:#525252}.Button-module_none__3cPkJ:hover{background-color:transparent}";
var classes = {"container-without-icon":"Button-module_container-without-icon__3mAzv","container-with-only-icon":"Button-module_container-with-only-icon__84_qF","container-with-icon":"Button-module_container-with-icon__1OdGD","size1":"Button-module_size1__gQqBB","size2":"Button-module_size2__3GA0v","size3":"Button-module_size3__P2g7P","size4":"Button-module_size4__1NTnr","size5":"Button-module_size5__ZH0st","primary":"Button-module_primary__2BIer","secondary":"Button-module_secondary__3rdQe","danger":"Button-module_danger__2TiH5","warning":"Button-module_warning__3_k9f","none":"Button-module_none__3cPkJ"};
styleInject(css_248z);

var Button = function (_a) {
    var ryButtonText = _a.ryButtonText, ryButtonType = _a.ryButtonType, ryButtonSize = _a.ryButtonSize, ryIcon = _a.ryIcon, ryContainerStyle = _a.ryContainerStyle, ryContainerClassname = _a.ryContainerClassname, ryShowOnlyIcon = _a.ryShowOnlyIcon, ryIconSize = _a.ryIconSize, _b = _a.ryContainerAlignSelf, ryContainerAlignSelf = _b === void 0 ? 'center' : _b, props = __rest(_a, ["ryButtonText", "ryButtonType", "ryButtonSize", "ryIcon", "ryContainerStyle", "ryContainerClassname", "ryShowOnlyIcon", "ryIconSize", "ryContainerAlignSelf"]);
    var containerOnClick = function (event) {
        // if (event.target === event.currentTarget) {
        props.onClick && props.onClick(event);
        // }
    };
    var containerOnClick1 = function (event) {
        if (event.target === event.currentTarget) {
            props.onClick && props.onClick(event);
        }
    };
    ryContainerStyle = ryContainerStyle ? ryContainerStyle : {};
    var ButtonWithIcon = (React.createElement("div", { style: Object.assign(ryContainerStyle, {
            alignSelf: ryContainerAlignSelf,
        }), className: classNames([
            classes['container-with-icon'],
            props.className,
            classes[ryButtonType],
            classes[ryButtonSize],
        ]), onClick: containerOnClick1 },
        ryIcon,
        React.createElement("button", __assign({}, props), ryButtonText)));
    var ButtonWithoutIcon = (React.createElement("div", { style: Object.assign(ryContainerStyle, {
            alignSelf: ryContainerAlignSelf,
        }), className: classNames([
            classes['container-without-icon'],
            props.className,
            classes[ryButtonType],
            classes[ryButtonSize],
        ]), onClick: containerOnClick1 },
        React.createElement("button", __assign({}, props), ryButtonText)));
    var ButtonWithOnlyIcon = (React.createElement("div", { style: Object.assign(ryContainerStyle, {
            alignSelf: ryContainerAlignSelf,
        }), className: classNames([
            classes['container-with-only-icon'],
            props.className,
            classes[ryButtonType],
            classes[ryButtonSize],
        ]), onClick: containerOnClick }, ryIcon));
    var render = function () {
        if (ryShowOnlyIcon) {
            return ButtonWithOnlyIcon;
        }
        else {
            return React.createElement("div", null, "FDFDGRGERFGR");
        }
    };
    return render();
};

var css_248z$1 = "@import url(\"https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");.InputTypeAWithoutIcon-module_ry-root-input__3xx3r{display:flex;flex-direction:column;transition:.3s}.InputTypeAWithoutIcon-module_ry-label-input__2poB_{font-size:.9375rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:700;padding:0;color:var(--input-type-a-without-icon-color-1);margin:0 0 .25rem}.InputTypeAWithoutIcon-module_ry-input-without-image__3p4iu{font-size:.9375rem;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:400;margin:0;display:flex;min-height:3.125rem;border:none;border-bottom:1px solid var(--input-type-a-without-icon-color-2);color:var(--input-type-a-without-icon-color-3);background-color:transparent;border-radius:2.5px;box-sizing:border-box;padding:0 0 0 10px}.InputTypeAWithoutIcon-module_ry-input-without-image__3p4iu::placeholder{font-size:.9375rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:400;margin:0;padding:0;color:var(--input-type-a-without-icon-color-4);transition:.1s}.InputTypeAWithoutIcon-module_ry-input-without-image__3p4iu:focus-within{outline:none;color:var(--input-type-a-without-icon-color-5);border-bottom:1px solid var(--input-type-a-without-icon-color-6)}.InputTypeAWithoutIcon-module_ry-input-without-image__3p4iu:focus-within::placeholder{color:var(--input-type-a-without-icon-color-7)}.InputTypeAWithoutIcon-module_edit-image-small-button__p3IxT{width:100%;height:100%;background-color:red;position:absolute}";
var classes$1 = {"ry-root-input":"InputTypeAWithoutIcon-module_ry-root-input__3xx3r","ry-label-input":"InputTypeAWithoutIcon-module_ry-label-input__2poB_","ry-input-without-image":"InputTypeAWithoutIcon-module_ry-input-without-image__3p4iu","edit-image-small-button":"InputTypeAWithoutIcon-module_edit-image-small-button__p3IxT"};
styleInject(css_248z$1);

var InputTypeAWithoutIcon = function (props) {
    return (React.createElement("div", { className: classes$1['ry-root-input'] },
        props.rylabel && (React.createElement("p", { className: classes$1['ry-label-input'] }, props.rylabel)),
        React.createElement("input", __assign({ className: classes$1['ry-input-without-image'] }, props))));
};

var css_248z$2 = "@import url(\"https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");.InputTypeAWithIcon-module_ry-root-input__1iR83{display:flex;flex-direction:column}.InputTypeAWithIcon-module_ry-root-input__1iR83 .InputTypeAWithIcon-module_ry-label-input__Qf3OZ{font-size:.9375rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:700;padding:0;margin:0 0 .25rem;color:var(--input-type-a-with-icon-color-1)}.InputTypeAWithIcon-module_ry-root-input__1iR83 .InputTypeAWithIcon-module_ry-container-input__1SiLe{display:flex;min-height:3.125rem;border-bottom:1px solid var(--input-type-a-with-icon-color-2);background-color:var(--input-type-a-with-icon-color-3);border-radius:2.5px;box-sizing:border-box;transition:.3s}.InputTypeAWithIcon-module_ry-root-input__1iR83 .InputTypeAWithIcon-module_ry-container-input__1SiLe>svg{padding:.75rem 1.25rem;width:.75rem;height:unset!important}.InputTypeAWithIcon-module_ry-root-input__1iR83 .InputTypeAWithIcon-module_ry-container-input__1SiLe>svg path{transition:.3s;fill:var(--input-type-a-with-icon-color-4)}.InputTypeAWithIcon-module_ry-root-input__1iR83 .InputTypeAWithIcon-module_ry-container-input__1SiLe:focus-within{border-bottom:1px solid var(--input-type-a-with-icon-color-5);background-color:var(--input-type-a-with-icon-color-6)}.InputTypeAWithIcon-module_ry-root-input__1iR83 .InputTypeAWithIcon-module_ry-container-input__1SiLe:focus-within>svg path{fill:var(--input-type-a-with-icon-color-7)}.InputTypeAWithIcon-module_ry-root-input__1iR83 .InputTypeAWithIcon-module_ry-container-input__1SiLe>input{font-size:.9375rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:400;margin:0;flex:1;padding:0 0 0 10px;border:none;background-color:transparent;color:var(--input-type-a-with-icon-color-8)}.InputTypeAWithIcon-module_ry-root-input__1iR83 .InputTypeAWithIcon-module_ry-container-input__1SiLe>input::placeholder{font-size:.9375rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:400;margin:0;padding:0;color:var(--input-type-a-with-icon-color-9);opacity:.65;text-align:left;transition:.1s}.InputTypeAWithIcon-module_ry-root-input__1iR83 .InputTypeAWithIcon-module_ry-container-input__1SiLe>input:focus-within{outline:none;color:var(--input-type-a-with-icon-color-10)}.InputTypeAWithIcon-module_ry-root-input__1iR83 .InputTypeAWithIcon-module_ry-container-input__1SiLe>input:focus-within::placeholder{color:var(--input-type-a-with-icon-color-11)}.InputTypeAWithIcon-module_ry-root-input__1iR83 .InputTypeAWithIcon-module_ry-container-input__1SiLe>input:focus-within>input{outline:none}";
var classes$2 = {"ry-root-input":"InputTypeAWithIcon-module_ry-root-input__1iR83","ry-label-input":"InputTypeAWithIcon-module_ry-label-input__Qf3OZ","ry-container-input":"InputTypeAWithIcon-module_ry-container-input__1SiLe"};
styleInject(css_248z$2);

var InputTypeAWithIcon = function (props) {
    return (React.createElement(motion.div, { animate: props.ryframermotionAnimate, initial: props.ryframermotionInitial, transition: props.ryframermotionTransition, className: classes$2['ry-root-input'] },
        props.rylabel && (React.createElement("p", { className: classes$2['ry-label-input'] }, props.rylabel)),
        React.createElement("div", { className: classes$2['ry-container-input'] },
            props.ryimage,
            React.createElement("input", __assign({}, props)))));
};

var css_248z$3 = "@import url(\"https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");.Page-module_container__2wfjR{display:grid;grid-template-rows:6% 94%;height:100%;flex:1}.Page-module_container__2wfjR>p:first-child{font-size:1.25rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:700;margin:0;grid-row:1/2;border-bottom:1.25px solid var(--page-color-1);box-shadow:0 4px 10px 0 var(--page-color-2);color:var(--page-color-3);background-color:var(--page-color-4);padding:1rem 2rem}.Page-module_main-1__2zCXc{display:flex;width:100%}.Page-module_main-1__2zCXc>aside{display:flex;flex-direction:column;border-radius:5px;cursor:unset;padding:1.25rem 2rem;width:20%;background-color:var(--aside-color-1);border:1px solid var(--aside-color-2);box-shadow:0 4px 10px 0 var(--aside-color-3)}.Page-module_main-1__2zCXc>main{display:flex;flex-direction:column;flex:1;width:100%}.Page-module_container-without-title__3Y5YZ{display:grid;height:100%;flex:1;margin-top:0}";
var classes$3 = {"container":"Page-module_container__2wfjR","main-1":"Page-module_main-1__2zCXc","container-without-title":"Page-module_container-without-title__3Y5YZ"};
styleInject(css_248z$3);

var Page = function (_a) {
    var ryTitle = _a.ryTitle, ryAside = _a.ryAside, ryPrincipal = _a.ryPrincipal, props = __rest(_a, ["ryTitle", "ryAside", "ryPrincipal"]);
    return (React.createElement("div", { className: ryTitle == ''
            ? classes$3['container-without-title']
            : classes$3['container'] },
        ryTitle !== '' && React.createElement("p", null, ryTitle),
        React.createElement("div", { className: classes$3['main-1'] }, props.children)));
};

var css_248z$4 = "@import url(\"https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");.CheckboxInput-module_ry-root-checkboxinputt__YigVJ{display:flex;cursor:pointer;width:fit-content;column-gap:.5rem}.CheckboxInput-module_ry-root-checkboxinputt__YigVJ p{font-size:.7813rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:400;align-self:center;color:var(--checkbox-input-color-3);margin:0;padding:0}.CheckboxInput-module_ry-box-checkboxinputt__hEXmc{display:flex;justify-content:center;align-self:center;align-items:center;width:1.25rem!important;height:1.25rem!important;border:1px solid var(--checkbox-input-color-1);background-color:var(--checkbox-input-color-2);border-radius:.1563rem}.CheckboxInput-module_ry-box-checkboxinputt__hEXmc>img{width:.938rem;height:.938rem}";
var classes$4 = {"ry-root-checkboxinputt":"CheckboxInput-module_ry-root-checkboxinputt__YigVJ","ry-box-checkboxinputt":"CheckboxInput-module_ry-box-checkboxinputt__hEXmc"};
styleInject(css_248z$4);

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAFPmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpDb2xvclNwYWNlPSIxIgogICBleGlmOlBpeGVsWERpbWVuc2lvbj0iNTEyIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iNTEyIgogICBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIgogICBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiCiAgIHRpZmY6SW1hZ2VMZW5ndGg9IjUxMiIKICAgdGlmZjpJbWFnZVdpZHRoPSI1MTIiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLjAiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLjAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIw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";

var CheckboxInput = function (props) {
    return (React.createElement("div", __assign({ className: classes$4['ry-root-checkboxinputt'] }, props),
        React.createElement("div", { className: classes$4['ry-box-checkboxinputt'] }, props.value ? React.createElement("img", { src: img }) : null),
        React.createElement("p", { className: classes$4['ry-text-checkboxinputt'] }, props.rytext)));
};

var css_248z$5 = "@import url(\"https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");.ColorInput-module_ry-root-colorinputt__1V0zf{display:flex;flex-direction:column}.ColorInput-module_ry-root-colorinputt__1V0zf>div:nth-child(2){position:relative;display:flex}.ColorInput-module_ry-label-colorinputt__2AwjR{font-size:.9375rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:700;padding:0;margin:0 0 .25rem}.ColorInput-module_color-input-container__pLq1i{width:100%;height:3.125rem;border:none;border-radius:2.5px;display:flex;align-items:center;justify-content:center}.ColorInput-module_color-input-container__pLq1i>p{background-color:hsla(0,0%,100%,.9);font-size:.7813rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:700;margin:0;padding:.5rem;border-radius:2.5px;box-shadow:0 0 10px 0 rgba(0,0,0,.5)}.ColorInput-module_color-picker-container__3MdHH{display:flex;flex-direction:column;width:20rem!important;box-shadow:0 4px 40px rgba(0,0,0,.1);padding:1rem;row-gap:1rem}.ColorInput-module_color-picker-container__3MdHH>div:first-child{display:grid;justify-content:space-between;grid-template-columns:repeat(auto-fit,1.5rem);row-gap:.5rem;column-gap:.5rem}.ColorInput-module_color-picker-container__3MdHH>div:first-child>div{box-shadow:0 0 4px 0 rgba(0,0,0,.25)}.ColorInput-module_modal__3XhRX{display:flex;position:fixed;width:100%;top:0;left:0;height:100%;justify-content:center;align-items:center;z-index:2000!important;font-family:Roboto}.ColorInput-module_modal__3XhRX>div:first-child{display:flex;flex-direction:column;background-color:#fff;z-index:2001!important;border-radius:5px}.ColorInput-module_modal__3XhRX>div:nth-child(2){background-color:rgba(17,24,39,.9);backdrop-filter:blur(5px);position:fixed;width:100%;height:100%;top:0;left:0}.ColorInput-module_modal-header__2w2Az{display:flex;justify-content:space-between;border-bottom:1px solid #000;padding:1rem}.ColorInput-module_modal-header__2w2Az>p{font-size:.9375rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:700;margin:0;padding:0;color:#201f1e}.ColorInput-module_modal-header__2w2Az>div:nth-child(2){border:none;background-color:transparent;font-weight:bolder;color:#575350;cursor:pointer;width:min-content}.ColorInput-module_modal-main__2fzSP{display:flex;flex-direction:column;padding-left:5%;margin-top:1.75rem;column-gap:1rem;row-gap:2rem}.ColorInput-module_modal-footer__2_RQV{display:flex;justify-content:right;margin-top:3rem;margin-right:5%;column-gap:1.5rem;margin-bottom:1rem}.ColorInput-module_modal-footer__2_RQV>button:first-child{background-color:transparent;font-weight:700;font-size:14px;border:none;color:#605e5c;cursor:pointer}.ColorInput-module_modal-footer__2_RQV>button:nth-child(2){background-color:transparent;font-weight:700;font-size:14px;border:none;background-color:#3ebe8e;border-radius:5px;color:#fff;width:100px;height:35px;cursor:pointer}.ColorInput-module_color-box__2C6nW{cursor:pointer;transition:.3s}.ColorInput-module_color-box__2C6nW:hover{transform:scale(1.2)}.ColorInput-module_color-boxx-selected__3A5Me{transition:.3s;border-radius:20px}";
var classes$5 = {"ry-root-colorinputt":"ColorInput-module_ry-root-colorinputt__1V0zf","ry-label-colorinputt":"ColorInput-module_ry-label-colorinputt__2AwjR","color-input-container":"ColorInput-module_color-input-container__pLq1i","color-picker-container":"ColorInput-module_color-picker-container__3MdHH","modal":"ColorInput-module_modal__3XhRX","modal-header":"ColorInput-module_modal-header__2w2Az","modal-main":"ColorInput-module_modal-main__2fzSP","modal-footer":"ColorInput-module_modal-footer__2_RQV","color-box":"ColorInput-module_color-box__2C6nW","color-boxx-selected":"ColorInput-module_color-boxx-selected__3A5Me"};
styleInject(css_248z$5);

var css_248z$6 = "@import url(\"https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");.ButtonTypeAWithoutIcon-module_container-without-icon__39ABc{display:flex;justify-content:center;align-items:center;cursor:pointer;border-radius:.1563rem;width:100%;height:100%}.ButtonTypeAWithoutIcon-module_container-without-icon__39ABc button{background-color:transparent;border:none;cursor:pointer}.ButtonTypeAWithoutIcon-module_size1__3qpdH{width:11.5625rem;height:3.125rem}.ButtonTypeAWithoutIcon-module_size1__3qpdH>button{font-size:1.0938rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:700;margin:0;padding:0;color:var(--custom-color2)}.ButtonTypeAWithoutIcon-module_size2__lMnBD{width:9.8856rem;height:2.5rem}.ButtonTypeAWithoutIcon-module_size2__lMnBD>button{font-size:.9375rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:700;margin:0;padding:0;color:var(--custom-color2)}.ButtonTypeAWithoutIcon-module_size3__1aN1S{width:8.235rem;height:2.2256rem}.ButtonTypeAWithoutIcon-module_size3__1aN1S>button{font-size:.7813rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:700;margin:0;padding:0;color:var(--custom-color2)}.ButtonTypeAWithoutIcon-module_size4__13XYb{width:6.5881rem;height:2.2256rem}.ButtonTypeAWithoutIcon-module_size4__13XYb>button{font-size:.625rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:700;margin:0;padding:0;color:var(--custom-color2)}.ButtonTypeAWithoutIcon-module_size5__3BlpE{width:100%!important;height:3.125rem!important}.ButtonTypeAWithoutIcon-module_size5__3BlpE>button{font-size:1.0938rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:700;margin:0;padding:0;color:var(--custom-color2)}.ButtonTypeAWithoutIcon-module_primary__2fyl3{background-color:var(--button-type-a-without-icon-color-1);transition:.3s}.ButtonTypeAWithoutIcon-module_primary__2fyl3:hover{background-color:var(--button-type-a-without-icon-color-12)}.ButtonTypeAWithoutIcon-module_primary__2fyl3>button{color:var(--button-type-a-without-icon-color-2)}.ButtonTypeAWithoutIcon-module_secondary__3ro5B{background-color:var(--button-type-a-without-icon-color-3)}.ButtonTypeAWithoutIcon-module_secondary__3ro5B:hover{background-color:var(--button-type-a-without-icon-color-13)}.ButtonTypeAWithoutIcon-module_secondary__3ro5B>button{color:var(--button-type-a-without-icon-color-4)}.ButtonTypeAWithoutIcon-module_danger__1qTV4{background-color:var(--button-type-a-without-icon-color-5)}.ButtonTypeAWithoutIcon-module_danger__1qTV4:hover{background-color:var(--button-type-a-without-icon-color-14)}.ButtonTypeAWithoutIcon-module_danger__1qTV4>button{color:var(--button-type-a-without-icon-color-6)}.ButtonTypeAWithoutIcon-module_warning__3a1rN{background-color:var(--button-type-a-without-icon-color-7)}.ButtonTypeAWithoutIcon-module_warning__3a1rN>button{color:var(--button-type-a-without-icon-color-8)}.ButtonTypeAWithoutIcon-module_none__12mm6{background-color:var(--button-type-a-without-icon-color-9)}.ButtonTypeAWithoutIcon-module_none__12mm6>button{color:var(--button-type-a-without-icon-color-10)}";
var classes$6 = {"container-without-icon":"ButtonTypeAWithoutIcon-module_container-without-icon__39ABc","size1":"ButtonTypeAWithoutIcon-module_size1__3qpdH","size2":"ButtonTypeAWithoutIcon-module_size2__lMnBD","size3":"ButtonTypeAWithoutIcon-module_size3__1aN1S","size4":"ButtonTypeAWithoutIcon-module_size4__13XYb","size5":"ButtonTypeAWithoutIcon-module_size5__3BlpE","primary":"ButtonTypeAWithoutIcon-module_primary__2fyl3","secondary":"ButtonTypeAWithoutIcon-module_secondary__3ro5B","danger":"ButtonTypeAWithoutIcon-module_danger__1qTV4","warning":"ButtonTypeAWithoutIcon-module_warning__3a1rN","none":"ButtonTypeAWithoutIcon-module_none__12mm6"};
styleInject(css_248z$6);

var ButtonTypeAWithoutIcon = function (_a) {
    var ryButtonText = _a.ryButtonText, ryButtonType = _a.ryButtonType, ryButtonSize = _a.ryButtonSize, ryIcon = _a.ryIcon, ryContainerStyle = _a.ryContainerStyle, ryContainerClassname = _a.ryContainerClassname, ryShowOnlyIcon = _a.ryShowOnlyIcon, ryIconSize = _a.ryIconSize, _b = _a.ryContainerAlignSelf, ryContainerAlignSelf = _b === void 0 ? 'center' : _b, props = __rest(_a, ["ryButtonText", "ryButtonType", "ryButtonSize", "ryIcon", "ryContainerStyle", "ryContainerClassname", "ryShowOnlyIcon", "ryIconSize", "ryContainerAlignSelf"]);
    var containerOnClick1 = function (event) {
        if (event.target === event.currentTarget) {
            props.onClick && props.onClick(event);
        }
    };
    ryContainerStyle = ryContainerStyle ? ryContainerStyle : {};
    return (React.createElement("div", { style: Object.assign(ryContainerStyle, {
            alignSelf: ryContainerAlignSelf,
        }), className: classNames([
            classes$6['container-without-icon'],
            props.className,
            classes$6[ryButtonType],
            classes$6[ryButtonSize],
        ]), onClick: containerOnClick1 },
        React.createElement("button", __assign({}, props), ryButtonText)));
};

var Modal = function (_a) {
    var ryShowIcon = _a.ryShowIcon, ryLabel = _a.ryLabel, ryIcon = _a.ryIcon, ryOpen = _a.ryOpen, props = __rest(_a, ["ryShowIcon", "ryLabel", "ryIcon", "ryOpen"]);
    return ryOpen ? (React.createElement(motion.div, { className: props.ryClass },
        React.createElement(motion.div, { initial: { y: '-200vh' }, animate: { y: 0 }, transition: { duration: 0.5 } }, props.children),
        React.createElement(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 }, onClick: props.ryClose }))) : null;
};

var ColorInput = function (_a) {
    var ryColor = _a.ryColor, ryShowIcon = _a.ryShowIcon, ryLabel = _a.ryLabel, ryIcon = _a.ryIcon, ryImage = _a.ryImage, props = __rest(_a, ["ryColor", "ryShowIcon", "ryLabel", "ryIcon", "ryImage"]);
    var x = function (e) {
        if (props.onChange) {
            props.onChange(e);
        }
    };
    var _b = React.useState(false), colorPickerOpen = _b[0], setColorPickerOpen = _b[1];
    var _c = React.useState(props.color ? props.color : '#808080'), color = _c[0], setColor = _c[1];
    var _d = React.useState(props.color ? true : false), selectedColor = _d[0], setSelectedColor = _d[1];
    var _e = React.useState('#FFFFFF'), inputedColor = _e[0], setInputedColor = _e[1];
    React.useEffect(function () {
        if (props.color) {
            // setColor(props.color);
            setSelectedColor(true);
        }
    }, [props.color]);
    var colors = [
        '#000000',
        '#FFFFFF',
        '#FF0000',
        '#00FF00',
        '#0000FF',
        '#FFFF00',
        '#00FFFF',
        '#FF00FF',
        '#C0C0C0',
        '#808080',
        '#800000',
        '#008000',
        '#000080',
        '#808000',
        '#800080',
        '#008080',
        '#FFC0CB',
        '#FFA07A',
        '#20B2AA',
        '#87CEEB',
        '#778899',
        '#B0C4DE',
        '#ADD8E6',
        '#F08080',
        '#E0FFFF',
    ];
    return (React.createElement("div", { className: classes$5['ry-root-colorinputt'], style: props.style },
        ryLabel && React.createElement("p", { className: classes$5['ry-label-colorinputt'] }, ryLabel),
        React.createElement("div", null,
            React.createElement("div", { style: {
                    backgroundColor: "" + (props.color || color),
                }, onClick: function () {
                    setColorPickerOpen(!colorPickerOpen);
                }, className: classes$5['color-input-container'] }, !colorPickerOpen && (React.createElement("p", null, selectedColor && color
                ? 'Change color'
                : 'No color is selected please select one'))),
            React.createElement(Modal, { ryOpen: colorPickerOpen, ryClass: classes$5['modal'], ryClose: function () { return setColorPickerOpen(false); } },
                React.createElement("header", null),
                React.createElement("main", null,
                    React.createElement("div", { className: classes$5['color-picker-container'] },
                        React.createElement("div", null, colors.map(function (el) { return (React.createElement("div", { onClick: function () {
                                setInputedColor(el);
                            }, style: {
                                backgroundColor: el,
                                width: '1.5rem',
                                height: '1.5rem',
                            }, className: el == inputedColor
                                ? classes$5['color-boxx-selected']
                                : classes$5['color-box'] })); })),
                        React.createElement(InputTypeAWithoutIcon, { value: inputedColor, onChange: function (e) {
                                setInputedColor(e.target.value);
                            }, placeholder: 'Enter a date' }),
                        React.createElement(ButtonTypeAWithoutIcon, { onClick: function () {
                                var isColorInACorrectFormat = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(inputedColor);
                                if (isColorInACorrectFormat) {
                                    x(inputedColor);
                                    setColorPickerOpen(false);
                                }
                            }, ryButtonText: 'Save', ryButtonType: 'primary', ryButtonSize: 'size5' }),
                        React.createElement(ButtonTypeAWithoutIcon, { onClick: function () { return setColorPickerOpen(false); }, ryButtonText: 'Close', ryButtonType: 'danger', ryButtonSize: 'size5' }))),
                React.createElement("footer", null)))));
};

var ColorInputV2 = function (_a) {
    var ryColor = _a.ryColor, ryShowIcon = _a.ryShowIcon, ryLabel = _a.ryLabel, ryIcon = _a.ryIcon, ryImage = _a.ryImage, props = __rest(_a, ["ryColor", "ryShowIcon", "ryLabel", "ryIcon", "ryImage"]);
    var x = function (e) {
        if (props.onChange) {
            props.onChange(e);
        }
    };
    var _b = React.useState(false), colorPickerOpen = _b[0], setColorPickerOpen = _b[1];
    var _c = React.useState(props.color ? props.color : '#808080'), color = _c[0], setColor = _c[1];
    var _d = React.useState(props.color ? true : false), selectedColor = _d[0], setSelectedColor = _d[1];
    React.useEffect(function () {
        if (props.color) {
            // setColor(props.color);
            setSelectedColor(true);
        }
    }, [props.color]);
    return (React.createElement("div", { className: classes$5['ry-root-colorinputt'], style: props.style },
        ryLabel && React.createElement("p", { className: classes$5['ry-label-colorinputt'] }, ryLabel),
        React.createElement("div", null,
            React.createElement("div", { style: {
                    backgroundColor: "" + (props.color || color),
                }, onClick: function () {
                    setColorPickerOpen(!colorPickerOpen);
                }, className: classes$5['color-input-container'] }, !colorPickerOpen && (React.createElement("p", null, selectedColor && color
                ? 'Change color'
                : 'No color is selected please select one'))),
            colorPickerOpen && (React.createElement("div", { className: classes$5['color-picker-container'] },
                React.createElement(HexColorPicker, { color: color, onChange: x }),
                React.createElement("button", { onClick: function () { return setColorPickerOpen(false); } }, "Close"))))));
};

var css_248z$7 = "@import url(\"https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");.FileInput-module_container-file-input__f0HVT{display:flex}.FileInput-module_container-file-input__f0HVT img{box-shadow:2px 2px 10px .5px #000;width:15rem;border-radius:4px}.FileInput-module_ry-root-fileinput__1HWrH{display:flex;flex-direction:column;width:100%;justify-content:center}.FileInput-module_ry-label-fileinput__3sU-C{font-size:.9375rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:700;padding:0;margin:0 0 .25rem}.FileInput-module_ry-container-fileinput__18T8s{display:flex;flex-direction:row;column-gap:.5rem}.FileInput-module_ry-container-fileinput__18T8s>button{border:1px solid var(--border-primarybutton-normal);background-color:var(--background-color-primarybutton-normal);border-radius:2.5px;font-size:.9375rem;color:var(--custom-color1);font-weight:500;color:var(--color-primarybutton-normal)}.FileInput-module_ry-container-fileinput__18T8s>a,.FileInput-module_ry-container-fileinput__18T8s>button{min-height:3.125rem;box-sizing:border-box;display:flex;align-items:center;font-family:Roboto;font-style:normal;margin:0;padding:0;justify-content:center;flex:1}.FileInput-module_ry-container-fileinput__18T8s>a{border:1px solid var(--border-secondarybutton-normal);background-color:var(--background-color-secondarybutton-normal);border-radius:2.5px;text-decoration:none;font-size:.7813rem;color:var(--custom-color1);font-weight:400;color:var(--color-secondarybutton-normal)}.FileInput-module_ry-container-fileinput__18T8s>a>span{font-size:.9375rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:500;margin:0;padding:0}";
var classes$7 = {"container-file-input":"FileInput-module_container-file-input__f0HVT","ry-root-fileinput":"FileInput-module_ry-root-fileinput__1HWrH","ry-label-fileinput":"FileInput-module_ry-label-fileinput__3sU-C","ry-container-fileinput":"FileInput-module_ry-container-fileinput__18T8s"};
styleInject(css_248z$7);

var FileInput = function (_a) {
    var ryLink = _a.ryLink, ryExistingFile = _a.ryExistingFile, ryColor = _a.ryColor, ryShowIcon = _a.ryShowIcon, rylabel = _a.rylabel, ryIcon = _a.ryIcon, ryImage = _a.ryImage, ryDefaultValue = _a.ryDefaultValue, props = __rest(_a, ["ryLink", "ryExistingFile", "ryColor", "ryShowIcon", "rylabel", "ryIcon", "ryImage", "ryDefaultValue"]);
    //  const inputRef: React.Ref = React.useRef(null) ;
    var inputRef = React.useRef(null);
    var _b = React.useState(''), updated = _b[0], setUpdated = _b[1];
    return (React.createElement("div", { className: classes$7['ry-root-fileinput'], style: props.style },
        rylabel && React.createElement("p", { className: classes$7['ry-label-fileinput'] }, rylabel),
        React.createElement("div", { className: classes$7['ry-container-fileinput'] },
            React.createElement("button", { style: { cursor: 'pointer' }, onClick: function () {
                    if (inputRef && inputRef.current) {
                        inputRef.current.click();
                    }
                } },
                "Upload File\u00A0",
                React.createElement("span", { style: { color: 'rgba(0,0,0,.5)' } },
                    "\"",
                    updated ? updated : 'No File',
                    "\"")),
            ryExistingFile !== 'No file' && (React.createElement("a", { href: ryLink },
                React.createElement("span", null, "Download\u00A0"),
                ryExistingFile)),
            React.createElement("input", { ref: inputRef, style: { display: 'none' }, onChange: function (e) {
                    // props.onChange(inputRef.current.files[0])
                    setUpdated(e.target.files[0].name);
                    if (props.onChange) {
                        props.onChange(e);
                    }
                }, type: "file" }))));
};

var css_248z$8 = "@import url(\"https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");.Select-module_big-container__2ZKJ9{display:flex;flex-direction:column;align-self:flex-end;border:none;background-color:var(--select-type-a-with-icon-color-1);border-bottom:1px solid var(--select-type-a-with-icon-color-2);color:var(--select-type-a-with-icon-color-3)}.Select-module_big-container__2ZKJ9>p{font-size:.9375rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:700;padding:0;color:#000;margin:0 0 .25rem}.Select-module_select-container__2P_HU{display:flex;flex-direction:column}.Select-module_select-container__2P_HU .Select-module_ry-label-input__h9SOd{font-size:.9375rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:700;padding:0;margin:0 0 .25rem;color:var(--input-type-a-with-icon-color-1)}.Select-module_ry-root-input__Q_8Jm{display:flex;flex-direction:column;transition:.3s}.Select-module_ry-label-input__h9SOd{font-size:.9375rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:700;padding:0;color:var(--input-type-a-without-icon-color-1);margin:0 0 .25rem}.Select-module_select__23ccj:hover [class$=indicatorContainer]{color:var(--select-type-a-with-icon-color-6)}.Select-module_select__23ccj:hover [class$=indicatorSeparator]{background-color:var(--select-type-a-with-icon-color-6)}.Select-module_select__23ccj:focus-within [class$=indicatorContainer]{color:var(--select-type-a-with-icon-color-6)}.Select-module_select__23ccj:focus-within [class$=indicatorSeparator]{background-color:var(--select-type-a-with-icon-color-6)}.Select-module_select__23ccj [class$=-control]{min-height:3.125rem;border:none;background-color:var(--select-type-a-with-icon-color-1);border-bottom:1px solid var(--select-type-a-with-icon-color-2);color:var(--select-type-a-with-icon-color-3);box-sizing:border-box}.Select-module_select__23ccj [class$=-control]:focus-within{outline:none;border:none;box-shadow:unset;border-bottom:1px solid var(--select-type-a-with-icon-color-4);box-sizing:border-box}.Select-module_select__23ccj [class$=-control]:hover{border-color:unset;border-bottom:1px solid var(--select-type-a-with-icon-color-4);box-sizing:border-box}.Select-module_select__23ccj [class$=menu]{margin-left:.5px;cursor:pointer}.Select-module_select__23ccj [class$=MenuList]{padding-top:unset;padding-bottom:unset}.Select-module_select__23ccj [class$=option]{background-color:unset;margin-top:unset;color:#000;cursor:pointer}.Select-module_select__23ccj [class$=option]:hover{background-color:rgba(0,0,0,.045);color:#000}.Select-module_select__23ccj [class$=option]:focus{background-color:red}.Select-module_select__23ccj [class$=option]:focus-within{background-color:red}.Select-module_select__23ccj [class$=option]:focus-visible{background-color:red}.Select-module_select__23ccj [class$=option]:active{background-color:rgba(0,0,0,.125)}.Select-module_select__23ccj [class$=option]:any-link,.Select-module_select__23ccj [class$=option]:visited{background-color:red}.Select-module_select__23ccj [class$=option]::selection{background-color:red}";
var classes$8 = {"big-container":"Select-module_big-container__2ZKJ9","select-container":"Select-module_select-container__2P_HU","ry-label-input":"Select-module_ry-label-input__h9SOd","ry-root-input":"Select-module_ry-root-input__Q_8Jm","select":"Select-module_select__23ccj"};
styleInject(css_248z$8);

var Select = function (_a) {
    var props = __rest(_a, []);
    return (React.createElement("div", { className: classes$8['ry-root-input'] },
        props.rylabel && (React.createElement("p", { className: classes$8['ry-label-input'] }, props.rylabel)),
        React.createElement(Selectt, { value: props.ryoptions.find(function (el) {
                return el.value === props.rydefaultvalue;
            }), className: classes$8['select'], options: props.ryoptions, onChange: props.ryonChange, placeholder: props.ryplaceholder })));
};

var css_248z$9 = "@import url(\"https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");.Dropdown-module_divv__hQ6yi{display:flex;flex-direction:column;position:relative;cursor:pointer}.Dropdown-module_divv__hQ6yi>div:first-child{display:flex}.Dropdown-module_x__2-MTf{height:100%;width:100%;align-items:center;display:flex;justify-content:center}.Dropdown-module_after__1bKXn{right:0;overflow:visible;display:block;flex-direction:column;position:sticky;top:30px;right:20px;background-color:hsla(0,0%,100%,.952);box-shadow:0 0 4px 1px rgba(0,0,0,.35);padding:1rem;z-index:2}";
var classes$9 = {"divv":"Dropdown-module_divv__hQ6yi","x":"Dropdown-module_x__2-MTf","after":"Dropdown-module_after__1bKXn"};
styleInject(css_248z$9);

var Dropdown = function (_a) {
    var ryShowIcon = _a.ryShowIcon, ryStyle = _a.ryStyle, ryAlign = _a.ryAlign, ryIcon = _a.ryIcon, ryText = _a.ryText, props = __rest(_a, ["ryShowIcon", "ryStyle", "ryAlign", "ryIcon", "ryText"]);
    // const [open, setOpen] = React.useState(false);
    var _b = React.useState(true), open = _b[0], setOpen = _b[1];
    return (React.createElement("div", { className: classes$9['divv'], onBlur: function () {
            setOpen(false);
        }, tabIndex: 0 },
        React.createElement("div", { onClick: function (e) {
                setOpen(true);
            }, className: classes$9['x'] }, props.before),
        open === true && (React.createElement("div", { className: classes$9['after'], onMouseDown: function (e) { return e.preventDefault(); } }, props.children))));
};

var css_248z$a = "@import url(\"https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");.CalendarInput-module_ry-root-calendarinput__3WrdY{display:flex;flex-direction:column;width:min-content;flex:1}.CalendarInput-module_ry-root-calendarinput__3WrdY .CalendarInput-module_ry-label-calendarinput__3TsGI{font-size:.9375rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:700;padding:0;color:#000;margin:0 0 .25rem}.CalendarInput-module_ry-container-with-image-calendarinput__2J1Se{display:flex;flex:1;width:100%;border:none;box-sizing:border-box;border-radius:2.5px;border:1px solid var(--border-input-normal);background-color:var(--background-color-input-normal);background-color:transparent;border-top:none;border-right:none;border-left:none;min-height:3.125rem;column-gap:1rem}.CalendarInput-module_ry-container-with-image-calendarinput__2J1Se .CalendarInput-module_select__1HIXU{flex:1}.CalendarInput-module_ry-container-with-image-calendarinput__2J1Se>svg{padding:.75rem 1.25rem;width:.75rem;height:auto;border-bottom-left-radius:2.5px;border-top-left-radius:2.5px;height:unset!important}.CalendarInput-module_ry-container-with-image-calendarinput__2J1Se>svg>path{fill:#000}.CalendarInput-module_ry-day-select-calendarinput__2heiM{flex:1}.CalendarInput-module_ry-day-select-calendarinput__2heiM,.CalendarInput-module_ry-month-select-calendarinput__3FfUG{background-color:transparent;font-size:.7813rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:400;margin:0;text-align:start;color:#000;padding:0 0 0 10px;box-sizing:border-box;border:none}.CalendarInput-module_ry-month-select-calendarinput__3FfUG{flex:1;flex:2}.CalendarInput-module_ry-container-without-image-calendarinput__29a4y{display:flex;flex:1;box-sizing:border-box;background:#fff;border-radius:5px;max-height:2.5rem;height:3.125rem}.CalendarInput-module_ry-container-without-image-calendarinput__29a4y>svg path{fill:#686868}.CalendarInput-module_ry-container-without-image-calendarinput__29a4y>svg{background-color:#eee;padding:.75rem 1.25rem;width:.75rem;height:auto;border:1px solid #dedede;border-right:none}.CalendarInput-module_ry-container-without-image-calendarinput__29a4y:focus-within>input{border:1px solid #ccc}.CalendarInput-module_ry-container-without-image-calendarinput__29a4y:focus-within>svg{border:1px solid #ccc;border-right:none}.CalendarInput-module_select__1HIXU:hover [class$=indicatorContainer]{color:var(--select-type-a-with-icon-color-6)}.CalendarInput-module_select__1HIXU:hover [class$=indicatorSeparator]{background-color:var(--select-type-a-with-icon-color-6)}.CalendarInput-module_select__1HIXU:focus-within [class$=indicatorContainer]{color:var(--select-type-a-with-icon-color-6)}.CalendarInput-module_select__1HIXU:focus-within [class$=indicatorSeparator]{background-color:var(--select-type-a-with-icon-color-6)}.CalendarInput-module_select__1HIXU [class$=-control]{min-height:3.125rem;border:none;background-color:var(--select-type-a-with-icon-color-1);border-bottom:1px solid var(--select-type-a-with-icon-color-2);color:var(--select-type-a-with-icon-color-3);box-sizing:border-box}.CalendarInput-module_select__1HIXU [class$=-control]:focus-within{outline:none;border:none;box-shadow:unset;border-bottom:1px solid var(--select-type-a-with-icon-color-4);box-sizing:border-box}.CalendarInput-module_select__1HIXU [class$=-control]:hover{border-color:unset;border-bottom:1px solid var(--select-type-a-with-icon-color-4);box-sizing:border-box}.CalendarInput-module_select__1HIXU [class$=menu]{margin-left:.5px;cursor:pointer}.CalendarInput-module_select__1HIXU [class$=MenuList]{padding-top:unset;padding-bottom:unset}.CalendarInput-module_select__1HIXU [class$=option]{background-color:unset;margin-top:unset;color:#000;cursor:pointer}.CalendarInput-module_select__1HIXU [class$=option]:hover{background-color:rgba(0,0,0,.045);color:#000}.CalendarInput-module_select__1HIXU [class$=option]:focus{background-color:red}.CalendarInput-module_select__1HIXU [class$=option]:focus-within{background-color:red}.CalendarInput-module_select__1HIXU [class$=option]:focus-visible{background-color:red}.CalendarInput-module_select__1HIXU [class$=option]:active{background-color:rgba(0,0,0,.125)}.CalendarInput-module_select__1HIXU [class$=option]:any-link,.CalendarInput-module_select__1HIXU [class$=option]:visited{background-color:red}.CalendarInput-module_select__1HIXU [class$=option]::selection{background-color:red}";
var classes$a = {"ry-root-calendarinput":"CalendarInput-module_ry-root-calendarinput__3WrdY","ry-label-calendarinput":"CalendarInput-module_ry-label-calendarinput__3TsGI","ry-container-with-image-calendarinput":"CalendarInput-module_ry-container-with-image-calendarinput__2J1Se","select":"CalendarInput-module_select__1HIXU","ry-day-select-calendarinput":"CalendarInput-module_ry-day-select-calendarinput__2heiM","ry-month-select-calendarinput":"CalendarInput-module_ry-month-select-calendarinput__3FfUG","ry-container-without-image-calendarinput":"CalendarInput-module_ry-container-without-image-calendarinput__29a4y"};
styleInject(css_248z$a);

var CalendarInput = function (_a) {
    var ryShowIcon = _a.ryShowIcon, ryDateOnChange = _a.ryDateOnChange, ryDateValue = _a.ryDateValue, ryType = _a.ryType, rylabel = _a.rylabel, ryIcon = _a.ryIcon, ryimage = _a.ryimage, props = __rest(_a, ["ryShowIcon", "ryDateOnChange", "ryDateValue", "ryType", "rylabel", "ryIcon", "ryimage"]);
    var _b = React.useState(ryDateValue ? ryDateValue.split(' ')[0] : 'Select'), selectedDay = _b[0], setSelectedDay = _b[1];
    var _c = React.useState(ryDateValue ? ryDateValue.split(' ')[1] : 'Select'), selectedMonth = _c[0], setSelectedMonth = _c[1];
    React.useEffect(function () {
        console.log("ryDateValue " + ryDateValue);
        console.log("rylabel " + rylabel);
        console.log(ryDateValue && ryDateValue.split(' ')[1]);
        setSelectedMonth(ryDateValue ? ryDateValue.split(' ')[1] : 'Select');
        setSelectedDay(ryDateValue ? ryDateValue.split(' ')[0] : 'Select');
    }, [ryDateValue]);
    var monthsWith = ['4', '6', '9', '11'];
    // index == 1 ||
    // index == 3 ||
    // index == 5 ||
    // index == 7 ||
    // index == 8 ||
    // index == 10 ||
    // index == 12
    var months = [
        { value: 'Select', label: 'Select' },
        { value: '1', label: 'Jan' },
        { value: '2', label: 'Feb' },
        { value: '3', label: 'Mar' },
        { value: '4', label: 'Apr' },
        { value: '5', label: 'May' },
        { value: '6', label: 'Jul' },
        { value: '7', label: 'Jun' },
        { value: '8', label: 'Aug' },
        { value: '9', label: 'Sep' },
        { value: '10', label: 'Oct' },
        { value: '11', label: 'Nov' },
        { value: '12', label: 'Dec' },
    ];
    var _d = React.useState([
        { value: 'Select', label: 'Select', disabled: true },
        { value: '1', label: '1', disabled: true },
        { value: '2', label: '2', disabled: true },
        { value: '3', label: '3', disabled: true },
        { value: '4', label: '4', disabled: true },
        { value: '5', label: '5', disabled: true },
        { value: '6', label: '6', disabled: true },
        { value: '7', label: '7', disabled: true },
        { value: '8', label: '8', disabled: true },
        { value: '9', label: '9', disabled: true },
        { value: '10', label: '10', disabled: true },
        { value: '11', label: '11', disabled: true },
        { value: '12', label: '12', disabled: true },
        { value: '14', label: '14', disabled: true },
        { value: '15', label: '15', disabled: true },
        { value: '16', label: '16', disabled: true },
        { value: '17', label: '17', disabled: true },
        { value: '18', label: '18', disabled: true },
        { value: '19', label: '19', disabled: true },
        { value: '20', label: '20', disabled: true },
        { value: '21', label: '21', disabled: true },
        { value: '22', label: '22', disabled: true },
        { value: '23', label: '23', disabled: true },
        { value: '24', label: '24', disabled: true },
        { value: '25', label: '25', disabled: true },
        { value: '26', label: '26', disabled: true },
        { value: '27', label: '27', disabled: true },
        { value: '28', label: '28', disabled: true },
        { value: '29', label: '29', disabled: true },
        { value: '30', label: '30', disabled: true },
        {
            value: '31',
            label: '31',
            disabled: monthsWith.find(function (el) { return el == selectedMonth; }),
        },
    ]), days = _d[0], setDays = _d[1];
    React.useEffect(function () {
        setDays([
            { value: 'Select', label: 'Select', disabled: false },
            { value: '1', label: '1', disabled: false },
            { value: '2', label: '2', disabled: false },
            { value: '3', label: '3', disabled: false },
            { value: '4', label: '4', disabled: false },
            { value: '5', label: '5', disabled: false },
            { value: '6', label: '6', disabled: false },
            { value: '7', label: '7', disabled: false },
            { value: '8', label: '8', disabled: false },
            { value: '9', label: '9', disabled: false },
            { value: '10', label: '10', disabled: false },
            { value: '11', label: '11', disabled: false },
            { value: '12', label: '12', disabled: false },
            { value: '14', label: '14', disabled: false },
            { value: '15', label: '15', disabled: false },
            { value: '16', label: '16', disabled: false },
            { value: '17', label: '17', disabled: false },
            { value: '18', label: '18', disabled: false },
            { value: '19', label: '19', disabled: false },
            { value: '20', label: '20', disabled: false },
            { value: '21', label: '21', disabled: false },
            { value: '22', label: '22', disabled: false },
            { value: '23', label: '23', disabled: false },
            { value: '24', label: '24', disabled: false },
            { value: '25', label: '25', disabled: false },
            { value: '26', label: '26', disabled: false },
            { value: '27', label: '27', disabled: false },
            { value: '28', label: '28', disabled: false },
            { value: '29', label: '29', disabled: false },
            {
                value: '30',
                label: '30',
                disabled: selectedMonth == '2',
            },
            {
                value: '31',
                label: '31',
                disabled: monthsWith.find(function (el) { return el == selectedMonth; }) || selectedMonth == '2',
            },
        ]);
    }, [selectedMonth]);
    var _e = React.useState(false), changed = _e[0], setChanged = _e[1];
    React.useEffect(function () {
        if (changed == true &&
            selectedMonth !== 'Select' &&
            selectedDay !== 'Select') {
            ryDateOnChange(days[+selectedDay].value + " " + months[+selectedMonth].value);
            setChanged(false);
        }
    }, [selectedDay, selectedMonth]);
    React.useEffect(function () { }, [changed]);
    return (React.createElement("div", { className: classes$a['ry-root-calendarinput'] },
        rylabel && (React.createElement("p", { className: classes$a['ry-label-calendarinput'] }, rylabel)),
        React.createElement("div", { className: ryimage
                ? classes$a['ry-container-with-image-calendarinput']
                : classes$a['ry-container-without-image-calendarinput'] },
            ryimage,
            React.createElement(Selectt, { className: classes$a['select'], options: days, defaultValue: days.find(function (el) { return selectedDay == el.value; }), isOptionDisabled: function (option) { return option.disabled; }, onChange: function (ee) {
                    setSelectedDay(ee.value);
                    setChanged(true);
                } }),
            React.createElement(Selectt, { className: classes$a['select'], options: months, defaultValue: months.find(function (el) { return selectedMonth == el.value; }), onChange: function (ee) {
                    setSelectedMonth(ee.value);
                    setChanged(true);
                } }))));
};

var css_248z$b = "@import url(\"https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");.ImageInput-module_ry-root-input__NMh58{display:flex;flex-direction:column;transition:.3s}.ImageInput-module_ry-label-input__2UG5A{font-size:.9375rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:700;padding:0;color:var(--input-type-a-without-icon-color-1);margin:0 0 .25rem}.ImageInput-module_ry-input-without-image__ucO_R{font-size:.9375rem;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:400;margin:0;display:flex;min-height:3.125rem;border:none;border-bottom:1px solid var(--input-type-a-without-icon-color-2);color:var(--input-type-a-without-icon-color-3);background-color:transparent;border-radius:2.5px;box-sizing:border-box;padding:0 0 0 10px}.ImageInput-module_ry-input-without-image__ucO_R::placeholder{font-size:.9375rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:400;margin:0;padding:0;color:var(--input-type-a-without-icon-color-4);transition:.1s}.ImageInput-module_ry-input-without-image__ucO_R:focus-within{outline:none;color:var(--input-type-a-without-icon-color-5);border-bottom:1px solid var(--input-type-a-without-icon-color-6)}.ImageInput-module_ry-input-without-image__ucO_R:focus-within::placeholder{color:var(--input-type-a-without-icon-color-7)}.ImageInput-module_container-file-input__A4c50{position:relative;border-radius:2.5px}.ImageInput-module_container-file-input__A4c50 .ImageInput-module_edit-image-small-button__2beYu{width:100%;height:100%;background-color:rgba(0,0,0,.2);backdrop-filter:blur(2px);position:absolute;display:flex;align-items:center;justify-content:center}.ImageInput-module_container-file-input__A4c50 .ImageInput-module_edit-image-small-button__2beYu>button{background-color:transparent;border:none;font-size:.9375rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:700;margin:0;color:#fff;background-color:rgba(0,0,0,.4);padding:1rem;border-radius:2.5px}";
var classes$b = {"ry-root-input":"ImageInput-module_ry-root-input__NMh58","ry-label-input":"ImageInput-module_ry-label-input__2UG5A","ry-input-without-image":"ImageInput-module_ry-input-without-image__ucO_R","container-file-input":"ImageInput-module_container-file-input__A4c50","edit-image-small-button":"ImageInput-module_edit-image-small-button__2beYu"};
styleInject(css_248z$b);

var ImageInput = function (_a) {
    var ryLink = _a.ryLink, ryExistingFile = _a.ryExistingFile, ryColor = _a.ryColor, ryShowIcon = _a.ryShowIcon, ryLabel = _a.ryLabel, ryIcon = _a.ryIcon, ryImage = _a.ryImage, props = __rest(_a, ["ryLink", "ryExistingFile", "ryColor", "ryShowIcon", "ryLabel", "ryIcon", "ryImage"]);
    var inputRef = React.useRef(null);
    function onFileSelected(event) {
        var selectedFile = event.target.files[0];
        var reader = new FileReader();
        var imgtag = document.getElementById('myimage');
        imgtag.title = selectedFile.name;
        reader.onload = function (event) {
            imgtag.src = event.target.result;
        };
        reader.readAsDataURL(selectedFile);
    }
    return (React.createElement("div", { className: classes$b['file-input-component'], style: props.style },
        ryLabel && React.createElement("p", { className: classes$b['label-file-input'] }, ryLabel),
        React.createElement("div", { className: classes$b['container-file-input'] },
            React.createElement("img", { id: "myimage", onClick: function () {
                    if (inputRef && inputRef.current) {
                        inputRef.current.click();
                    }
                }, src: ryImage }, ryExistingFile),
            React.createElement("input", { ref: inputRef, style: { display: 'none' }, onChange: function (e) {
                    // props.onChange(inputRef.current.files[0])
                    if (props.onChange) {
                        props.onChange(e);
                    }
                    onFileSelected(e);
                }, type: "file" }),
            React.createElement("div", { onClick: function () {
                    if (inputRef && inputRef.current) {
                        inputRef.current.click();
                    }
                }, className: classes$b['edit-image-small-button'] },
                React.createElement("button", null, "Click on the image to update it")))));
};

var css_248z$c = "@import url(\"https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");.ButtonTypeAWithIcon-module_container-with-icon__2_laN{display:flex;justify-content:center;align-items:center;cursor:pointer;border-radius:.1563rem;transition:.2s;border-top-left-radius:.1563rem;border-bottom-left-radius:.1563rem;column-gap:1rem}.ButtonTypeAWithIcon-module_container-with-icon__2_laN button{background-color:transparent;border:none;cursor:pointer;padding:0}.ButtonTypeAWithIcon-module_container-with-icon__2_laN:hover>div:first-child{border-top-right-radius:50%;border-bottom-right-radius:50%}.ButtonTypeAWithIcon-module_container-with-icon__2_laN>svg{width:1.0938rem;height:1.0938rem}.ButtonTypeAWithIcon-module_container-with-icon__2_laN>svg path{fill:#fff}.ButtonTypeAWithIcon-module_size1__3XkPS{width:11.5625rem;height:3.125rem}.ButtonTypeAWithIcon-module_size1__3XkPS>button{font-size:1.0938rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:700;margin:0;padding:0;color:var(--custom-color2)}.ButtonTypeAWithIcon-module_size2__eOqbY{width:9.8856rem;height:2.5rem}.ButtonTypeAWithIcon-module_size2__eOqbY>button{font-size:.9375rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:700;margin:0;padding:0;color:var(--custom-color2)}.ButtonTypeAWithIcon-module_size3__31PM5{width:8.235rem;height:2.2256rem}.ButtonTypeAWithIcon-module_size3__31PM5>button{font-size:.7813rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:700;margin:0;padding:0;color:var(--custom-color2)}.ButtonTypeAWithIcon-module_size4__XIKyH{width:6.5881rem;height:2.2256rem}.ButtonTypeAWithIcon-module_size4__XIKyH>button{font-size:.625rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:700;margin:0;padding:0;color:var(--custom-color2)}.ButtonTypeAWithIcon-module_size5__2ekQv{width:100%!important;height:3.125rem!important}.ButtonTypeAWithIcon-module_size5__2ekQv>button{font-size:1.0938rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:700;margin:0;padding:0;color:var(--custom-color2)}.ButtonTypeAWithIcon-module_size6__2_MGF{width:100%!important;height:100%!important}.ButtonTypeAWithIcon-module_size6__2_MGF>button{font-size:1.0938rem;display:flex;align-items:center;color:var(--custom-color1);font-family:Roboto;font-style:normal;font-weight:700;margin:0;padding:0;color:var(--custom-color2)}.ButtonTypeAWithIcon-module_primary__3feQa{background-color:var(--button-type-a-with-icon-color-1)}.ButtonTypeAWithIcon-module_primary__3feQa:hover{background-color:var(--button-type-a-with-icon-color-12)}.ButtonTypeAWithIcon-module_primary__3feQa>button{color:var(--button-type-a-with-icon-color-2)}.ButtonTypeAWithIcon-module_secondary__3H3s_{background-color:var(--button-type-a-with-icon-color-3)}.ButtonTypeAWithIcon-module_secondary__3H3s_>button{color:var(--button-type-a-with-icon-color-4)}.ButtonTypeAWithIcon-module_danger__2gsi8{background-color:var(--button-type-a-with-icon-color-5)}.ButtonTypeAWithIcon-module_danger__2gsi8>button{color:var(--button-type-a-with-icon-color-6)}.ButtonTypeAWithIcon-module_warning__2v1qA{background-color:var(--button-type-a-with-icon-color-7)}.ButtonTypeAWithIcon-module_warning__2v1qA>button{color:var(--button-type-a-with-icon-color-8)}.ButtonTypeAWithIcon-module_none__fYzlE{background-color:var(--button-type-a-with-icon-color-9)}.ButtonTypeAWithIcon-module_none__fYzlE>button{color:var(--button-type-a-with-icon-color-10)}";
var classes$c = {"container-with-icon":"ButtonTypeAWithIcon-module_container-with-icon__2_laN","size1":"ButtonTypeAWithIcon-module_size1__3XkPS","size2":"ButtonTypeAWithIcon-module_size2__eOqbY","size3":"ButtonTypeAWithIcon-module_size3__31PM5","size4":"ButtonTypeAWithIcon-module_size4__XIKyH","size5":"ButtonTypeAWithIcon-module_size5__2ekQv","size6":"ButtonTypeAWithIcon-module_size6__2_MGF","primary":"ButtonTypeAWithIcon-module_primary__3feQa","secondary":"ButtonTypeAWithIcon-module_secondary__3H3s_","danger":"ButtonTypeAWithIcon-module_danger__2gsi8","warning":"ButtonTypeAWithIcon-module_warning__2v1qA","none":"ButtonTypeAWithIcon-module_none__fYzlE"};
styleInject(css_248z$c);

var ButtonTypeAWithIcon = function (_a) {
    var ryButtonText = _a.ryButtonText, ryButtonType = _a.ryButtonType, ryButtonSize = _a.ryButtonSize, ryIcon = _a.ryIcon, ryContainerStyle = _a.ryContainerStyle, ryContainerClassname = _a.ryContainerClassname, ryShowOnlyIcon = _a.ryShowOnlyIcon, ryIconSize = _a.ryIconSize, _b = _a.ryContainerAlignSelf, ryContainerAlignSelf = _b === void 0 ? 'center' : _b, props = __rest(_a, ["ryButtonText", "ryButtonType", "ryButtonSize", "ryIcon", "ryContainerStyle", "ryContainerClassname", "ryShowOnlyIcon", "ryIconSize", "ryContainerAlignSelf"]);
    var containerOnClick1 = function (event) {
        if (event.target === event.currentTarget) {
            props.onClick && props.onClick(event);
        }
    };
    ryContainerStyle = ryContainerStyle ? ryContainerStyle : {};
    return (React.createElement("div", { style: Object.assign(ryContainerStyle, {
            alignSelf: ryContainerAlignSelf,
        }), className: classNames([
            classes$c['container-with-icon'],
            props.className,
            classes$c[ryButtonType],
            classes$c[ryButtonSize],
        ]), onClick: containerOnClick1 },
        ryIcon,
        React.createElement("button", __assign({}, props), ryButtonText)));
};

var css_248z$d = ".PaperA-module_container__3QZ9S{border-radius:5px;cursor:unset;background-color:var(--paper-a-color-1);border:1px solid var(--paper-a-color-2);box-shadow:0 4px 10px 0 var(--paper-a-color-3);transition:.175s}.PaperA-module_center__Rhz27{display:flex;justify-content:center;align-items:center}.PaperA-module_flex__1OA_N{display:flex}.PaperA-module_padding__3qSmf{padding:1rem}.PaperA-module_margin__252QU{margin:1rem}.PaperA-module_hover__3VzSt:hover{transform:translateY(-2.5px)}";
var classes$d = {"container":"PaperA-module_container__3QZ9S","center":"PaperA-module_center__Rhz27","flex":"PaperA-module_flex__1OA_N","padding":"PaperA-module_padding__3qSmf","margin":"PaperA-module_margin__252QU","hover":"PaperA-module_hover__3VzSt"};
styleInject(css_248z$d);

var PaperA = function (_a) {
    var containerClassname = _a.containerClassname, props = __rest(_a, ["containerClassname"]);
    return (React.createElement("div", __assign({ className: classNames(classes$d['container'], containerClassname, props.doeshover && classes$d['hover'], props.rymargin && classes$d['margin'], props.rypadding && classes$d['padding']) }, props), props.children));
};

export { Button, ButtonTypeAWithIcon, ButtonTypeAWithoutIcon, CalendarInput, CheckboxInput, ColorInput, ColorInputV2, Dropdown, FileInput, ImageInput, InputTypeAWithIcon, InputTypeAWithoutIcon, Modal, Page, PaperA, Select };
