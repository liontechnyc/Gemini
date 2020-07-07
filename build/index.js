'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
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

function mapDirectionToFlex(direction, reverse) {
    var orientation = 'column';
    if (direction === 'horizontal') {
        orientation = 'row';
    }
    return {
        flexDirection: reverse ? orientation + '-reverse' : orientation,
    };
}
function mapAlignToFlex(align, direction) {
    return align
        ? {
            // ? flip align axes based on direction
            justifyContent: (direction === 'horizontal'
                ? align.horizontal
                : align.vertical) || 'start',
            alignItems: (direction === 'horizontal'
                ? align.vertical
                : align.horizontal) || 'start',
            alignContent: align.content || undefined,
        }
        : {
            justifyContent: 'start',
            alignItems: 'start',
            alignContent: 'start',
        };
}
/** Responsive 1-dimensional flex container */
var Collection = function (_a) {
    var renderAs = _a.renderAs, fluid = _a.fluid, direction = _a.direction, align = _a.align, reverse = _a.reverse, items = _a.items, containerStyle = _a.containerStyle, containerClass = _a.containerClass, itemStyle = _a.itemStyle, itemClass = _a.itemClass, emptyState = _a.emptyState;
    var wrapperStyle = __assign(__assign(__assign({ display: 'flex', flex: Number(fluid) || undefined }, mapDirectionToFlex(direction, !!reverse)), mapAlignToFlex(align, direction)), containerStyle);
    if (items instanceof Array) {
        if (items.length > 0) {
            return React.createElement(renderAs || 'div', { style: wrapperStyle, className: containerClass }, items.map(function (item, id) { return (React__default.createElement("div", { style: itemStyle, className: itemClass, key: id }, item)); }));
        }
    }
    return emptyState || React__default.createElement(React__default.Fragment, null);
};

exports.Collection = Collection;
//# sourceMappingURL=index.js.map
