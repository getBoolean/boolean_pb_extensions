(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Sources = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
/**
 * Request objects hold information for a particular source (see sources for example)
 * This allows us to to use a generic api to make the calls against any source
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlEncodeObject = exports.convertTime = exports.Source = void 0;
class Source {
    constructor(cheerio) {
        this.cheerio = cheerio;
    }
    /**
     * @deprecated use {@link Source.getSearchResults getSearchResults} instead
     */
    searchRequest(query, metadata) {
        return this.getSearchResults(query, metadata);
    }
    /**
     * @deprecated use {@link Source.getSearchTags} instead
     */
    async getTags() {
        // @ts-ignore
        return this.getSearchTags?.();
    }
}
exports.Source = Source;
// Many sites use '[x] time ago' - Figured it would be good to handle these cases in general
function convertTime(timeAgo) {
    let time;
    let trimmed = Number((/\d*/.exec(timeAgo) ?? [])[0]);
    trimmed = (trimmed == 0 && timeAgo.includes('a')) ? 1 : trimmed;
    if (timeAgo.includes('minutes')) {
        time = new Date(Date.now() - trimmed * 60000);
    }
    else if (timeAgo.includes('hours')) {
        time = new Date(Date.now() - trimmed * 3600000);
    }
    else if (timeAgo.includes('days')) {
        time = new Date(Date.now() - trimmed * 86400000);
    }
    else if (timeAgo.includes('year') || timeAgo.includes('years')) {
        time = new Date(Date.now() - trimmed * 31556952000);
    }
    else {
        time = new Date(Date.now());
    }
    return time;
}
exports.convertTime = convertTime;
/**
 * When a function requires a POST body, it always should be defined as a JsonObject
 * and then passed through this function to ensure that it's encoded properly.
 * @param obj
 */
function urlEncodeObject(obj) {
    let ret = {};
    for (const entry of Object.entries(obj)) {
        ret[encodeURIComponent(entry[0])] = encodeURIComponent(entry[1]);
    }
    return ret;
}
exports.urlEncodeObject = urlEncodeObject;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tracker = void 0;
class Tracker {
    constructor(cheerio) {
        this.cheerio = cheerio;
    }
}
exports.Tracker = Tracker;

},{}],3:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Source"), exports);
__exportStar(require("./Tracker"), exports);

},{"./Source":1,"./Tracker":2}],4:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./base"), exports);
__exportStar(require("./models"), exports);

},{"./base":3,"./models":47}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],6:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],7:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],8:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],9:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],10:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],11:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],12:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],13:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],14:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],15:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],16:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],17:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],18:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],19:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],20:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],21:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],22:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],23:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Button"), exports);
__exportStar(require("./Form"), exports);
__exportStar(require("./Header"), exports);
__exportStar(require("./InputField"), exports);
__exportStar(require("./Label"), exports);
__exportStar(require("./Link"), exports);
__exportStar(require("./MultilineLabel"), exports);
__exportStar(require("./NavigationButton"), exports);
__exportStar(require("./OAuthButton"), exports);
__exportStar(require("./Section"), exports);
__exportStar(require("./Select"), exports);
__exportStar(require("./Switch"), exports);
__exportStar(require("./WebViewButton"), exports);
__exportStar(require("./FormRow"), exports);
__exportStar(require("./Stepper"), exports);

},{"./Button":8,"./Form":9,"./FormRow":10,"./Header":11,"./InputField":12,"./Label":13,"./Link":14,"./MultilineLabel":15,"./NavigationButton":16,"./OAuthButton":17,"./Section":18,"./Select":19,"./Stepper":20,"./Switch":21,"./WebViewButton":22}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeSectionType = void 0;
var HomeSectionType;
(function (HomeSectionType) {
    HomeSectionType["singleRowNormal"] = "singleRowNormal";
    HomeSectionType["singleRowLarge"] = "singleRowLarge";
    HomeSectionType["doubleRow"] = "doubleRow";
    HomeSectionType["featured"] = "featured";
})(HomeSectionType = exports.HomeSectionType || (exports.HomeSectionType = {}));

},{}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageCode = void 0;
var LanguageCode;
(function (LanguageCode) {
    LanguageCode["UNKNOWN"] = "_unknown";
    LanguageCode["BENGALI"] = "bd";
    LanguageCode["BULGARIAN"] = "bg";
    LanguageCode["BRAZILIAN"] = "br";
    LanguageCode["CHINEESE"] = "cn";
    LanguageCode["CZECH"] = "cz";
    LanguageCode["GERMAN"] = "de";
    LanguageCode["DANISH"] = "dk";
    LanguageCode["ENGLISH"] = "gb";
    LanguageCode["SPANISH"] = "es";
    LanguageCode["FINNISH"] = "fi";
    LanguageCode["FRENCH"] = "fr";
    LanguageCode["WELSH"] = "gb";
    LanguageCode["GREEK"] = "gr";
    LanguageCode["CHINEESE_HONGKONG"] = "hk";
    LanguageCode["HUNGARIAN"] = "hu";
    LanguageCode["INDONESIAN"] = "id";
    LanguageCode["ISRELI"] = "il";
    LanguageCode["INDIAN"] = "in";
    LanguageCode["IRAN"] = "ir";
    LanguageCode["ITALIAN"] = "it";
    LanguageCode["JAPANESE"] = "jp";
    LanguageCode["KOREAN"] = "kr";
    LanguageCode["LITHUANIAN"] = "lt";
    LanguageCode["MONGOLIAN"] = "mn";
    LanguageCode["MEXIAN"] = "mx";
    LanguageCode["MALAY"] = "my";
    LanguageCode["DUTCH"] = "nl";
    LanguageCode["NORWEGIAN"] = "no";
    LanguageCode["PHILIPPINE"] = "ph";
    LanguageCode["POLISH"] = "pl";
    LanguageCode["PORTUGUESE"] = "pt";
    LanguageCode["ROMANIAN"] = "ro";
    LanguageCode["RUSSIAN"] = "ru";
    LanguageCode["SANSKRIT"] = "sa";
    LanguageCode["SAMI"] = "si";
    LanguageCode["THAI"] = "th";
    LanguageCode["TURKISH"] = "tr";
    LanguageCode["UKRAINIAN"] = "ua";
    LanguageCode["VIETNAMESE"] = "vn";
})(LanguageCode = exports.LanguageCode || (exports.LanguageCode = {}));

},{}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MangaStatus = void 0;
var MangaStatus;
(function (MangaStatus) {
    MangaStatus[MangaStatus["ONGOING"] = 1] = "ONGOING";
    MangaStatus[MangaStatus["COMPLETED"] = 0] = "COMPLETED";
    MangaStatus[MangaStatus["UNKNOWN"] = 2] = "UNKNOWN";
    MangaStatus[MangaStatus["ABANDONED"] = 3] = "ABANDONED";
    MangaStatus[MangaStatus["HIATUS"] = 4] = "HIATUS";
})(MangaStatus = exports.MangaStatus || (exports.MangaStatus = {}));

},{}],27:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],28:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],29:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],30:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],31:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],32:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],33:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],34:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],35:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],36:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],37:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchOperator = void 0;
var SearchOperator;
(function (SearchOperator) {
    SearchOperator["AND"] = "AND";
    SearchOperator["OR"] = "OR";
})(SearchOperator = exports.SearchOperator || (exports.SearchOperator = {}));

},{}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentRating = void 0;
/**
 * A content rating to be attributed to each source.
 */
var ContentRating;
(function (ContentRating) {
    ContentRating["EVERYONE"] = "EVERYONE";
    ContentRating["MATURE"] = "MATURE";
    ContentRating["ADULT"] = "ADULT";
})(ContentRating = exports.ContentRating || (exports.ContentRating = {}));

},{}],40:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],41:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagType = void 0;
/**
 * An enumerator which {@link SourceTags} uses to define the color of the tag rendered on the website.
 * Five types are available: blue, green, grey, yellow and red, the default one is blue.
 * Common colors are red for (Broken), yellow for (+18), grey for (Country-Proof)
 */
var TagType;
(function (TagType) {
    TagType["BLUE"] = "default";
    TagType["GREEN"] = "success";
    TagType["GREY"] = "info";
    TagType["YELLOW"] = "warning";
    TagType["RED"] = "danger";
})(TagType = exports.TagType || (exports.TagType = {}));

},{}],43:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],44:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],45:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],46:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],47:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Chapter"), exports);
__exportStar(require("./HomeSection"), exports);
__exportStar(require("./DynamicUI"), exports);
__exportStar(require("./ChapterDetails"), exports);
__exportStar(require("./Manga"), exports);
__exportStar(require("./MangaTile"), exports);
__exportStar(require("./RequestObject"), exports);
__exportStar(require("./SearchRequest"), exports);
__exportStar(require("./TagSection"), exports);
__exportStar(require("./SourceTag"), exports);
__exportStar(require("./Languages"), exports);
__exportStar(require("./Constants"), exports);
__exportStar(require("./MangaUpdate"), exports);
__exportStar(require("./PagedResults"), exports);
__exportStar(require("./ResponseObject"), exports);
__exportStar(require("./RequestManager"), exports);
__exportStar(require("./RequestHeaders"), exports);
__exportStar(require("./SourceInfo"), exports);
__exportStar(require("./SourceStateManager"), exports);
__exportStar(require("./RequestInterceptor"), exports);
__exportStar(require("./TrackedManga"), exports);
__exportStar(require("./SourceManga"), exports);
__exportStar(require("./TrackedMangaChapterReadAction"), exports);
__exportStar(require("./TrackerActionQueue"), exports);
__exportStar(require("./SearchField"), exports);
__exportStar(require("./RawData"), exports);
__exportStar(require("./SearchFilter"), exports);

},{"./Chapter":5,"./ChapterDetails":6,"./Constants":7,"./DynamicUI":23,"./HomeSection":24,"./Languages":25,"./Manga":26,"./MangaTile":27,"./MangaUpdate":28,"./PagedResults":29,"./RawData":30,"./RequestHeaders":31,"./RequestInterceptor":32,"./RequestManager":33,"./RequestObject":34,"./ResponseObject":35,"./SearchField":36,"./SearchFilter":37,"./SearchRequest":38,"./SourceInfo":39,"./SourceManga":40,"./SourceStateManager":41,"./SourceTag":42,"./TagSection":43,"./TrackedManga":44,"./TrackedMangaChapterReadAction":45,"./TrackerActionQueue":46}],"es6":[function(require,module,exports){
// -*- coding: utf-8; indent-tabs-mode: nil; tab-width: 4; c-basic-offset: 4; -*-

/**
 * Implementation of ECMAScript 6 (Draft)
 * @requires: ECMAScript 5
 * @author:   Alexander Guinness <monolithed@gmail.com>
 * @version:  0.0.7
 * @license:  MIT
 * @date:     Thu Nov 1 00:08:00 2011
 **/

void function(__object__, __array__, __global__)
{
	'use strict';

	var define = function(name)
	{
		var __own__ = __object__.hasOwnProperty;

		if (__own__.call(this, name))
			return 0;

		var set = function(name, value, descriptor)
		{
			Object.defineProperty(this, name, descriptor || {
				value: value,
				configurable: true,
				enumerable:   false,
				writable:     true
			});
		};

		if (__object__.toString.call(name) === '[object Object]')
		{
			for (var key in name) {
				if (__own__.call(name, key))
					set.call(this, key, name[key]);
			}
		}
		else
			set.apply(this, arguments);
	};


	/**
	 * ------------------------------------------------------------
	 *  String
	 * ------------------------------------------------------------
	**/


	/**
	 * String.fromCodePoint
	 * @edition ECMA-262 6th Edition, 15.5.3.3
	 *
	 * @param {Number | String} [...codePoint] -  code points
	 * @return {String} Return the string value whose elements are, in order, the elements
	 * in the List elements. If length is 0, the empty string is returned.	 *
	 * @throws {RangeError}
	 *
	 * @example:
	 *
	 * String.fromCodePoint(0x30, 107); // Ok
	**/
	define.call(String, 'fromCodePoint', function()
	{
		var i = arguments.length,
			points = [], offset;

		while (i--)
		{
			offset = arguments[i];

			if (offset < 0 || offset > 0x10FFFF)
				throw new RangeError();

			if (offset < 0x10000)
				points.unshift(offset);

			else {
				offset -= 0x10000;
				points.unshift(0xD800 | (offset >> 10), 0xDC00 | (offset & 0x3FF));
			}
		}

		return String.fromCharCode.apply(String, points);
	});


	/**
	 * String.prototype.codePointAt
	 * @edition ECMA-262 6th Edition, 15.5.4.5
	 *
	 * @param {Number | String} index - position
	 * @return {Number} Number (a nonnegative integer less than 1114112)
	 * that is the UTF-16 encode code point value starting at the string element at position (index)
	 * in the String resulting from converting this object to a String.
	 * If there is no element at that position, the result is NaN.
	 * If a valid UTF-16 sudsarrogate pair does not begin at position,
	 * the result is the code unit at position (including code points above 0xFFFF).
	 *
	 * @example:
	 *
	 * 'A'.codePointAt(0) // 65
	**/
	define.call(String.prototype, 'codePointAt', function(index)
	{
		var value = this.toString(),
			size = value.length;

		if ((index |= 0) < 0 || index >= size)
			return NaN;

		var first = value.charCodeAt(index);

		if (first < 0xD800 || first > 0xDBFF || index + 1 == size)
			return first;

		var second = value.charCodeAt(index + 1);

		if (second < 0xDC00 || first > 0xDFFF)
			return first;

		return ((first - 0xD800) << 1024) + (second - 0xDC00) + 0x10000;
	});


	/**
	 * String.prototype.repeat
	 * @edition ECMA-262 6th Edition, 15.5.4.21
	 *
	 * Creates a String consisting of the string elements of this object (converted to String) repeated <count> time
	 * @param {Number} index - position
	 * @throws {RangeError}
	 * @return {String}
	 *
	 * @example:
	 *
	 * 'A'.repeat(2) // AA
	**/
	define.call(String.prototype, 'repeat', function(count)
	{
		if ((count |= 0 ) <= 0)
			throw new RangeError();

		var result = '',
			self = this;

		while (count)
		{
			if (count & 1)
				result += self;

			if (count >>= 1)
				self += self;
		}

		return result;
	});


	/**
	 * String.prototype.startsWith
	 * @edition ECMA-262 6th Edition, 15.5.4.22
	 *
	 * Determines whether the beginning of the string instance matches a specified string.
	 * @param {*} value
	 * @param {Number | String} [ index ]
	 * @return {Boolean}
	 *
	 * @example:
	 *
	 * 'Foo'.startsWith('F')     // true
	 * 'Foo'.startsWith('o', 1); // true
	**/
	define.call(String.prototype, 'startsWith', function(value, position) {
		return this.indexOf(value, position |= 0) === position;
	});


	/**
	 * String.prototype.endsWith
	 * @edition ECMA-262 6th Edition, 15.5.4.23
	 *
	 * Determines whether the end of the string instance matches a specified string
	 * @param {Number | String} value
	 * @param {Number} [ index ]
	 * @return {Boolean}
	 *
	 * @example:
	 *
	 * Hello'.endsWith('lo') // true
	**/
	define.call(String.prototype, 'endsWith', function(value, position) {
		return this.lastIndexOf(value, position) === (position >= 0 ? position | 0 : this.length - 1);
	});


	/**
	 * String.prototype.contains
	 * @edition ECMA-262 6th Edition, 15.5.4.24
	 *
	 * Returns a value indicating whether the specified String object occurs within this string.
	 * @param {Number | String} value
	 * @param {Number} [ index ]
	 * @return {Boolean}
	 *
	 * @example:
	 *
	 * Hello'.contains('ll') // true
	**/
	define.call(String.prototype, 'contains', function(value, index) {
		return this.indexOf(value, index | 0) !== -1;
	});


	/**
	 * String.prototype.toArray
	 * @edition ECMA-262 6th Edition, 15.5.4.25
	 *
	 * Creates an array from the specified String object
	 * @return {Array} Returns an Array object with elements corresponding to
	 * the characters of this object (converted to a String).
	 *
	 * @example:
	 *
	 * Hello'.toArray() // ['H', 'e', 'l', 'l', 'o'];
	**/
	define.call(String.prototype, 'toArray', function() {
		return this.split('');
	});


	/**
	 * ------------------------------------------------------------
	 *  Array
	 * ------------------------------------------------------------
	**/

	/**
	 * Array.of
	 * @edition ECMA-262 6th Edition, 15.4.3.3
	 *
	 * @param {*} object - Variable number of arguments
	 * @return {Array}
	 *
	 * @example:
	 *
	 * Array.of('a', 'b', 'c'); // ['a', 'b', 'c'];
	**/
	define.call(Array, 'of', function() {
		return __array__.slice.call(arguments);
	});

	/**
	 * Array.from
	 * @edition ECMA-262 6th Edition, 15.4.3.4
	 *
	 * @param {Object} object - array-like object.
	 * Generic Array-like objects has indexed access and a valid length property,
	 * but none of the array methods.
	 * @return {Array}
	 *
	 * @example:
	 *
	 * 1.
	 * function array () {
	 *   return Array.from(arguments);
	 * }
	 *
	 * array(1,2,3); // [1, 2, 3];
	 *
	 * 2.
	 * Array.from(document.body).forEach(function(item) {
	 *    return item;
	 * });
	 *
	 * 3.
	 * Array.from('foo'); // ['f', 'o', 'o'];
	 *
	 * Array.from('foo', funtion(value, index, object) {
	 *     console.log(value) // ['f', 'o', 'o'];
	 * });
	**/
	define.call(Array, 'from', function(object, callback, context)
	{
		if (!Object(object).length)
			return [];

		return __array__.map.call(object, typeof callback == 'function' ? callback : function(item) {
			return item;
		}, context);
	});


	/*
	 * ------------------------------------------------------------
	 *  Object
	 * ------------------------------------------------------------
	 */


	/**
	 * Object.isObject
	 * @param {Object}
	 * @return {Boolean}
	 * @edition ECMA-262 6th Edition, 15.2.3.15
	 *
	 * @example:
	 *
	 * Object.isObject({}); // true
	**/
	define.call(Object, 'isObject', function(object) {
		return __object__.toString.call(object) === '[object Object]';
	});


	/**
	 * Object.getOwnPropertyKeys
	 * @edition ECMA-262 6th Edition, 15.2.3.15
	 *
	 * @param {Object} - object
	 * @return {Array}
	 *
	**/
	define.call(Object, 'getOwnPropertyKeys', function(object)
	{
		return Object.keys(object);
	});

	/**
	 * Object.is
	 * The internal comparison abstract operation SameValue(x, y),
	 * where x and y are ECMAScript language values, produces true or false (ECMAScript 5 9.12).
	 * @edition ECMA-262 6th Edition, 15.2.3.16
	 *
	 * @param {*} - first generic value for egal comparison
	 * @param {*} - second generic value for egal comparison
	 * @return {Boolean}
	 *
	 * @example:
	 *
	 * Object.is(0,-0)     // false
	 * Object.is('0', 0)   // false
	 * Object.is(0, 0)     // true
	 * Object.is(NaN, NaN) // true
	**/
	define.call(Object, 'is', function(x, y)
	{
		// 0 === -0, NaN !== NaN, 0 = false, etc.
		if (x === y)
			return x !== 0 || 1 / x === 1 / y;

		// object !== object ([] !== [], {} !== {}, etc.)
		return x !== x && y !== y;
	});

	/**
	 * Object.assign
	 * @edition ECMA-262 6th Edition, 15.2.3.17
	 *
	 * @param {Object} - target, source
	 * @return {Object}
	 *
	**/
	define.call(Object, 'assign', function(target, source)
	{
		var keys = Object.keys(source);

		keys.forEach(function(key) {
			target[key] = source[key];
		}, target);

		return target;
	});

	/**
	 * Object.mixin
	 * @edition ECMA-262 6th Edition, 15.2.3.18
	 *
	 * @param {Object} - target, source
	 * @return {Object}
	 *
	**/
	define.call(Object, 'mixin', function(target, source)
	{
		var properties = Object.getOwnPropertyNames(source);

		properties.forEach(function(property) {
			Object.defineProperty(target, property,
				Object.getOwnPropertyDescriptor(source, property));
		}, target);

		return target;
	});


	/**
	 * ------------------------------------------------------------
	 *  Number
	 * ------------------------------------------------------------
	**/


	/**
	 * Number.EPSILON
	 * The value of Number.EPSILON is the difference between 1 and the smallest value
	 * greater than 1 that is representable as a Number value, which
	 * is approximately 2.2204460492503130808472633361816 x10-16
	 * @edition ECMA-262 6th Edition, 15.7.3.7
	 *
	 * @example:
	 *
	 * Number.EPSILON // 2.220446049250313e-16
	**/
	define.call(Number, 'EPSILON', null, {
		value: 2.220446049250313e-16,
		configurable: false,
		enumerable:   false,
		writable:     false
	});


	/**
	 * Number.MAX_INTEGER
	 * The value of Number.MAX_INTEGER is the largest integer value that
	 * can be represented as a Number value without losing precision, which is 9007199254740991
	 * @edition ECMA-262 6th Edition, 15.7.3.7
	 *
	 * @example:
	 *
	 * Number.MAX_INTEGER // 9007199254740991
	**/
	define.call(Number, 'MAX_INTEGER', null, {
		value: 9007199254740991,
		configurable: false,
		enumerable:   false,
		writable:     false
	});


	/**
	 * Number.parseInt
	 * Produces an integer value dictated by interpretation of the contents of the string
	 * argument according to the specified radix. Leading white space in string is ignored.
	 * If radix is undefined or 0,
	 * it is assumed to be 10 except when the number begins with the character pairs 0x or 0X,
	 * in which case a radix of 16 is assumed. If radix is 16, the number may also optionally
	 * begin with the character pairs 0x or 0X.
	 * @edition ECMA-262 6th Edition, 15.7.3.8
	 *
	 * @param {String} - value
	 * @param {Number} - radix
	 * The radix parameter is used to specify which numeral system to be used,
	 * for example, a radix of 16 (hexadecimal) indicates that the number in the string
	 * should be parsed from a hexadecimal number to a decimal number.
	 * @return {Number} Parses a string or integer and returns an integer.
	 *
	 * @example:
	 *
	 * Number.parseInt(0xF, 16) // 21
	**/
	define.call(Number, 'parseInt', function(value, radix) {
		return __global__.parseInt.call(null, value, radix | 0 || 10);
	});


	/**
	 * Number.parseFloat
	 * @edition ECMA-262 6th Edition, 15.7.3.9
	 *
	 * @param {String} - value
	 * @return {Number} Parses a string or integer and returns a floating point number.
	 *
	 * @example:
	 *
	 * Number.parseFloat('1px') // 1
	**/
	define.call(Number, 'parseFloat', function(value) {
		return __global__.parseFloat(value);
	});

	/**
	 * Number.isNaN
	 * @edition ECMA-262 6th Edition, 15.7.3.10
	 *
	 * @param {Number} - value
	 * @return {Boolean} Returns true if the supplied number is NaN, false otherwise;
	 *
	 * @example:
	 *
	 * Number.isNaN(NaN) // true
	 * Number.isNaN(1)   // false
	**/
	define.call(Number, 'isNaN', function(value) {
		return typeof value === 'number' && __global__.isNaN(value);
	});


	/**
	 * Number.isFinite
	 * @edition ECMA-262 6th Edition, 15.7.3.11
	 *
	 * @param {Number} - value
	 * @return {Boolean} Returns false if the supplied number is NaN, Infinity or -Infinity;
	 *
	 * @example:
	 *
	 * Number.isFinite(NaN) // false
	 * Number.isFinite(0)   // true
	**/
	define.call(Number, 'isFinite', function(value) {
		return typeof value === 'number' && __global__.isFinite(value);
	});


	/**
	 * Number.isInteger
	 * Add a toInteger property be to the Number constructor, for converting values to IEEE-754
	 * double precision integers, exactly as ECMA-262’s ToInteger internal method.
	 * @edition ECMA-262 6th Edition, 15.7.3.12
	 *
	 * @param {Number} - value
	 * @requires Number.MAX_INTEGER
	 * @return {Boolean}
	 *
	 * @example:
	 *
	 * Number.isInteger(NaN) // false
	 * Number.isFinite(1)    // true
	 * Number.isFinite('1')  // false

	**/
	define.call(Number, 'isInteger', function(value)
	{
		return typeof value === 'number' && __global__.isFinite(value) &&
		value > -Number.MAX_INTEGER && value < Number.MAX_INTEGER && Math.floor(value) === value;
	});


	/**
	 * Number.toInteger
	 * @edition ECMA-262 6th Edition, 15.7.3.13
	 *
	 * @param {String} - value
	 * @return {Number}
	 *
	 * @example:
	 *
	 * Number.toInteger(undefined) // 0
	 * Number.toInteger(null) // 0
	 * Number.toInteger(NaN)  // 0
	 * Number.toInteger(0.1)  // 0
	 * Number.toInteger('0')  // 0
	 * Number.toInteger(0)    // 0
	**/
	define.call(Number, 'toInteger', function(value)
	{
		if (Object.is(value, +Infinity) || Object.is(value, -Infinity) || value === 0)
			return value;

		return value | 0;
	});


	/**
	 * Number.prototype.clz
	 * @edition ECMA-262 6th Edition, 15.7.3.14
	 *
	 * @description
	 * The count leading zeros (clz) operation can be used to efficiently implement normalization,
	 * which encodes an integer as m × 2e, where m has its most significant bit
	 * in a known position (such as the highest position).
	 * This can in turn be used to implement Newton-Raphson division, perform integer
	 * to floating point conversion in software, and other applications.
	 * Count leading zeros (clz) can be used to compute the 32-bit predicate "x=y" (zero if true, one if false)
	 * via the identity (x-y).clz() >> 5, where ">>" is unsigned right shift.
	 * It can be used to perform more sophisticated bit operations like finding the first string of n 1 bits.
	 * The expression 16 − (x − 1).clz() / 2 is an effective initial guess for computing
	 * the square root of a 32-bit integer using Newton's method.
	 * It can also efficiently generate exponentially distributed integers by taking
	 * the clz of uniformly random integers.
	 *
	 * @return {Number} Count leading zeroes operation;
	 * @requires Number.isFinite
	 *
	 * @example:
	 *
	 * 00000000000000001000000000001000.clz(); // 22
	**/
	define.call(Number.prototype, 'clz', function()
	{
		var value = Number(this),
			bits = 32;

		if (!value || !Number.isFinite(value))
			return bits;

		var offset = [0xFFFF0000, 0xFF000000, 0xF0000000, 0xC0000000, 0x80000000],
			count = 0, i = 0;

		while (bits >>= 1) {
			if ((value & offset[i++]) == 0) {
				count += bits;
				value <<= bits;
			}
		}

		return count;
	});


	/**
	 * ------------------------------------------------------------
	 *  Math
	 * ------------------------------------------------------------
	**/


	/**
	 * Math.log10
	 * Returns an implementation-dependent approximation to the base 10 logarithm of <value>
	 *
	 * @edition ECMA-262 6th Edition, 15.8.2.19
	 * @param {Number} - value
	 * @return {Number}
	 *
	 * @example:
	 *
	 * Number.log10(10) // 0.9999999999999999
	**/
	define.call(Math, 'log10', function(value) {
		return Math.log(value) * (1 / Math.LN10);
	});


	/**
	 * Math.log2
	 * Returns an implementation-dependent approximation to the base 2 logarithm of <value>
	 * @edition ECMA-262 6th Edition, 15.8.2.20
	 *
	 * @param {Number} - value
	 * @return {Number}
	 *
	 * @example:
	 *
	 * Number.log2(10) // 3.3219280948873626
	**/
	define.call(Math, 'log2', function(value) {
		return Math.log(value) * (1 / Math.LN2);
	});


	/**
	 * Math.log1p
	 * Returns an implementation-dependent approximation to the natural logarithm of 1 + <value>.
	 * The result is computed in a way that is accurate even when the value of <value> is close to zero.
	 *
	 * @edition ECMA-262 6th Edition, 15.8.2.21
	 * @param {Number} - value
	 * @return {Number}
	 *
	 * @example:
	 *
	 * Number.log1p(10) // 2.3978952727983707
	**/
	define.call(Math, 'log1p', function(value) {
		return (value > -1.0e-8 && value < 1.0e-8) ? (value - value * value / 2) : Math.log(1 + value);
	});


	/**
	 * Math. expm1
	 * Returns an implementation-dependent approximation to subtracting 1
	 * from the exponential function of <value> The result is computed in a way
	 * that is accurate even when the <value> of value is close 0.
	 * @edition ECMA-262 6th Edition, 15.8.2.22
	 *
	 * @param {Number} - value
	 * @requires Object.is
	 * @return {Number}
	 *
	 * @example:
	 *
	 * Number.expm1(10) // 22025.465794806718
	**/
	define.call(Math, 'expm1', function(value)
	{
		if (Object.is(value, -0))
			return -0;

		return value > -1.0e-6 && value < 1.0e-6 ? value + value * value / 2 : Math.exp(value) - 1;
	});


	/**
	 * Math.cosh
	 * Returns an implementation-dependent approximation to the hyperbolic cosine of <value>
	 *
	 * @edition ECMA-262 6th Edition, 15.8.2.23
	 * @param {Number} - value
	 * @requires Object.is
	 * @return {Number}
	 *
	 * @example:
	 *
	 * Number.cosh(10) // 11013.232920103324
	**/
	define.call(Math, 'cosh', function(value)
	{
		if (Object.is(value, -Infinity) || value === 0)
			return value;

		return (Math.exp(value) + Math.exp(-value)) / 2;
	});


	/**
	 * Math.sinh
	 * @edition ECMA-262 6th Edition, 15.8.2.24
	 *
	 * Returns an implementation-dependent approximation to the hyperbolic sine of <value>
	 * @param {Number} - value
	 * @return {Number}
	 *
	 * @example:
	 *
	 * Number.sinh(10) // 11013.232874703393
	**/
	define.call(Math, 'sinh', function(value)
	{
		if (Object.is(value, -Infinity) || value === 0)
			return value;

		return (Math.exp(value) - Math.exp(-value)) / 2;
	});


	/**
	 * Math.tanh
	 * Returns an implementation-dependent approximation to the hyperbolic tangent of <value>
	 *
	 * @edition ECMA-262 6th Edition, 15.8.2.25
	 * @param {Number} - value
	 * @return {Number}
	 *
	 * @example:
	 *
	 * Number.tanh(10) // 0.9999999958776926
	**/
	define.call(Math, 'tanh', function(value)
	{
		if (Object.is(value, +Infinity))
			return +1;

		else if (Object.is(value, -Infinity))
			return -1;

		return value === 0 ? value : (Math.exp(value) - Math.exp(-value)) / (Math.exp(value) + Math.exp(-value));
	});


	/**
	 * Math.acosh
	 * Returns an implementation-dependent approximation to the inverse hyperbolic cosine of <value>
	 * @edition ECMA-262 6th Edition, 15.8.2.26
	 *
	 * @param {Number} - value
	 * @return {Number}
	 *
	 * @example:
	 *
	 * Number.acosh(10) // 2.993222846126381
	**/
	define.call(Math, 'acosh', function(value) {
		return Math.log(value + Math.sqrt(value * value - 1));
	});


	/**
	 * Math.asinh
	 * Returns an implementation-dependent approximation to the inverse hyperbolic sine of <value>
	 * @edition ECMA-262 6th Edition, 15.8.2.27

	 * @param {Number} - value
	 * @return {Number}
	 *
	 * @example:
	 *
	 * Number.asinh(10) // 2.99822295029797
	**/
	define.call(Math, 'asinh', function(value)
	{
		if (!Number.isFinite(value) || value === 0)
			return value;

		return Math.log(value + Math.sqrt(value * value + 1));
	});


	/**
	 * Math.atanh
	 * Returns an implementation-dependent approximation to the inverse hyperbolic tangent of <value>
	 * @edition ECMA-262 6th Edition, 15.8.2.28
	 *
	 * @param {Number} - value
	 * @return {Number}
	 *
	 * @example:
	 *
	 * Math.atanh(-1) // -Infinity
	**/
	define.call(Math, 'atanh', function(value) {
		return value === 0 ? value : 0.5 * Math.log((1 + value) / (1 - value));
	});


	/**
	 * Math.hypot
	 * Given two or three arguments, hypot returns an implementation-dependent approximation
	 * of the square root of the sum of squares of its arguments.
	 * @edition ECMA-262 6th Edition, 15.8.2.29
	 *
	 * @param {Number} - value
	 * @return {Number}
	 *
	 * @example:
	 *
	 * Math.hypot(1, 1) // 1.4142135623730951
	**/
	define.call(Math, 'hypot', function(x, y) {

		if (!Number.isFinite(x))
			return x;

		if (!Number.isFinite(y))
			return y;

		return Math.sqrt(x * x + y * y);
	});


	/**
	 * Math.trunc
	 * Returns the integral part of the number <value>, removing any fractional digits.
	 * If <value> is already an integer, the result is <value>
	 * @edition ECMA-262 6th Edition, 15.8.2.30
	 *
	 * @param {Number} - value
	 * @requires Number.isFinite
	 * @return {Number}
	 *
	 * @example:
	 *
	 * Math.trunc(1.1) // 1
	**/
	define.call(Math, 'trunc', function(value) {
		return value === 0 ? value : !Number.isFinite(value) ? value : value | 0;
	});


	/**
	 * Math.sign
	 * Returns the sign of the <value>, indicating whether <value> is positive, negative or zero
	 * @edition ECMA-262 6th Edition, 15.8.2.31
	 *
	 * @param {Number} value
	 * @return {Number}
	 *
	 * @example:
	 *
	 * Math.sign(-10); // 1
	**/
	define.call(Math, 'sign', function(value) {
		if (value === 0 /* +0, -0 */ || __global__.isNaN(value))
			return value;

		return value < 0 ? -1 : 1;
	});


	/**
	 * Math.cbrt
	 * Returns an implementation-dependent approximation to the cube root of <value>
	 * @edition ECMA-262 6th Edition, 15.8.2.32
	 *
	 * @param {Number} - value
	 * @return {Number}
	 *
	 * @example:
	 *
	 * Math.cbrt(10); // 2.154434690031884
	**/
	define.call(Math, 'cbrt', function(value)
	{
		if (value === 0)
			return value;

		return value > 0 ? Math.exp(Math.log(value) / 3) : -Math.exp(Math.log(-value) / 3);
	});


	/**
	 * ------------------------------------------------------------
	 *  Collections (data structures)
	 * ------------------------------------------------------------
	**/

	/**
	 * @private
	 * @param {Array} array
	 * @param {*} value
	 * @requires Object.is
	 * @return {Number}
	 **/
	var __find__ =  function(array, value) {
		var i = array.length >>> 0;

		while (i--)
			if (i in array && Object.is(array[i], value))
				return i;
		return -1;
	};

	/**
	 * Map
	 * @edition ECMA-262 6th Edition, 5.14
	 *
	 * NOTE: Need more compatible with Rev 14!
	 *
	 * @class
	 * @memberOf global
	 *
	 * @description
	 * Map objects are simple key/value maps. Any value (both objects and primitive values)
	 * may be used as either a key or a value. Key equality is based on the "same-value"
	 * algorithm: NaN is considered the same as NaN (even though NaN !== NaN), -0 and +0
	 * are considered distinct (even though -0 === +0), and all other values are considered
	 * equal according to the semantics of the === operator.
	 *
	 * @example:
	 *
	 * var map = new Map();
	 *
	 * // Setting the values
	 * map.set(-0,  0);
	 * map.set(+0,  1);
	 * map.set('b', 2);
	 * map.set('a', 3);
	 * map.set('a', 4);
	 * map.set(Array, 5);
	 * map.set([], 6);
	 * map.set(NaN, 7);
	 * map.set(function() {}, 8);
	 *
	 * // Getting the values
	 * map.get(-0);  // 0
	 * map.get(+0);  // 1
	 * map.get('b'); // 2
	 * map.get('a'); // 4
	 * map.get(Array); // 5
	 * map.get([]);  // undefined
	 * map.get(NaN); // 7
	 * map.get(function() {}); // undefined
	 *
	 * // Removes any value associated to the key
	 * map.delete('a'); // true
	 *
	 * // Check the keys
	 * map.has(-0); // true
	 *
	 * // Getting the number of pairs in Map
	 * map.size(); // 7
	 *
	 * // Iterating over values stored in Set
	 * map.__iterator__(function(key, value) {
	 *    console.log(key, value);
	 * });
	**/
	define.call(__global__, 'Map', function()
	{
		if (!(this instanceof Map))
			return new Map;

		var index = 0;

		/** @static */
		define.call(this, {
			keys:   [],
			values: []
		});

		/**
		 * @lends Map.prototype
		 * @constructs
		**/
		define.call(Map.prototype, {
			/**
			 * Map.get
			 * Returns the value associated to the key, or undefined if there is none.
			 * @param {*}
			 * @return {*}
			 */
			get: function(key)
			{
				if ((index = __find__(this.keys, key)) !== -1)
					return this.values[index];
			},

			/**
			 * Map.set
			 * Sets the value for the key in Map. Returns undefined.
			 * @param {*} key
			 * @param {*} value
			 * @return {void}
			 */
			set: function(key, value)
			{
				if ((index = __find__(this.keys, key)) === -1) {
					this.keys.push(key);
					this.values.push(value);
				}
				else
					this.values[index] = value;
			},

			/**
			 * Map.has
			 * Returns a boolean asserting whether a value has been associated to the key in Map or not
			 * @param {*} key
			 * @return {Boolean}
			 */
			has: function(key) {
				return __find__(this.keys, key) !== -1;
			},

			/**
			 * Map.clear
			 * @return {void}
			 */
			clear: function() {
				this.values.length = 0;
				this.keys.length = 0;
			},

			/**
			 * Map.delete
			 * Removes any value associated to the key. After such a call, myMap.has(key) will return false.
			 * @param {*} key
			 * @return {Boolean}
			 */
			'delete': function(key)
			{
				if ((index = __find__(this.keys, key)) === -1)
					return false;

				this.keys.splice(index, 1);
				this.values.splice(index, 1);

				return true;
			},

			/**
			 * Map.size
			 * Returns the number of key/value pairs in Map.
			 * @return {Number}
			 */
			size: function() {
				return this.keys.length >>> 0;
			},

			/**
			 * Map.__iterator__ ( Undocumented feature )
			 * Allow for iterating over Maps and enumerating their keys
			 * @param {Function} callback - is invoked with two arguments (the element key and value)
			 * @param {Object} [ context ] - Object to use as <this> when executing callback
			 * @return {void}
			 */
			__iterator__: function(callback, context)
			{
				for (var i = 0, length = this.size(); i < length; i++) {
					if (i in this.keys && i in this.values)
						if (callback.call(context, this.keys[i], this.values[i]) === false)
							break;
				}
			}
		});
	});


	/**
	 * Set
	 * @edition ECMA-262 6th Edition, 5.16
	 * NOTE: Need more compatible with Rev 14!
	 *
	 * @class
	 * @memberOf global
	 *
	 * @description
	 * Set objects let you store unique values of any type, whether primitive values or object references.
	 * Values equality is not based on the same algorithm as the one used in the === operator.
	 * Specifically, for Sets, +0 (which is strictly equal to -0) and -0 are different values.
	 * NaN can also be stored in a Set.
	 *
	 * @example:
	 *
	 * var set = new Set();
	 *
	 * // Setting the values
	 *
	 * set.add(-0);
	 * set.add(+0);
	 * set.add('b');
	 * set.add('a');
	 * set.add('a');
	 * set.add(Array);
	 * set.add([]);
	 * set.add(function() {});
	 * set.add(NaN);
	 *
	 * // Check the values
	 * set.has(-0);  // true
	 * set.has(+0);  // true
	 * set.has('b'); // true
	 * set.has('a'); // true
	 * set.has(Array); // true
	 * set.has([]);  // false
	 * set.has(NaN); // true
	 * set.has(function() {}); // false
	 *
	 * // Removes the value
	 * map.delete(-0); // true
	 *
	 * // Getting the number of values in Set
	 * set.size(); // 7
	 *
	 * // Iterating over values stored in Set
	 * set.__iterator__(function(value) {
	 *    console.log(value);
	 * });
	**/
	define.call(__global__, 'Set', function()
	{
		if (!(this instanceof Set))
			return new Set;

		var index = 0;

		/** @static */
		define.call(this, {
			values: []
		});

		/**
		 * @lends Set.prototype
		 * @constructs
		**/
		define.call(Set.prototype, {
			/**
			 * Set.add
			 * Adds the value to mySet. Returns undefined.
			 * @param {*} value
			 * @return {void}
			 */
			add: function(value) {
				if ((index = __find__(this.values, value)) === -1)
					this.values.push(value);
				else
					this.values[index] = value;
			},

			/**
			 * Set.has
			 * Returns a boolean asserting whether the value has been added to Set or not
			 * @param {*} value
			 * @return {Boolean}
			 */
			has: function(value) {
				return __find__(this.values, value) !== -1;
			},

			/**
			 * Set.clear
			 * @return {void}
			 */
			clear: function() {
				this.values.length = 0;
			},

			/**
			 * Set.delete
			 * Sets the value for the key in mySet. Returns undefined.
			 * @param {*} key
			 * @return {void}
			 */
			'delete': function(value) {
				if ((index = __find__(this.values, value)) === -1)
					return false;

				this.values.splice(index, 1);

				return true;
			},

			/**
			 * Set.size()
			 * Returns the number of values in Set.
			 * @return {Number}
			 */
			size: function() {
				return this.values.length >>> 0;
			},

			/**
			 * Set.__iterator__ ( Undocumented feature )
			 * Allow for iterating over values stored in Set
			 * @param {Function} callback - is invoked with one argument (the element value)
			 * @param {Object} [ context ] - Object to use as <this> when executing callback
			 * @return {void}
			 */
			__iterator__: function(callback, context) {
				for (var i = 0, length = this.size(); i < length; i++) {
					if (i in this.values)
						callback.call(context, this.values[i]);
				}
			}
		});
	});
}
(Object.prototype, Array.prototype, function() {
	return this;
}());

},{}]},{},[4])("es6")
});

const self = globalThis;
// Generated by dart2js (NullSafetyMode.sound, csp, deferred-serialization, intern-composite-values), the Dart to JavaScript compiler version: 2.19.0.
// The code supports the following hooks:
// dartPrint(message):
//    if this function is defined it is called instead of the Dart [print]
//    method.
//
// dartMainRunner(main, args):
//    if this function is defined, the Dart [main] method will not be invoked
//    directly. Instead, a closure that will invoke [main], and its arguments
//    [args] is passed to [dartMainRunner].
//
// dartDeferredLibraryLoader(uri, successCallback, errorCallback, loadId):
//    if this function is defined, it will be called when a deferred library
//    is loaded. It should load and eval the javascript of `uri`, and call
//    successCallback. If it fails to do so, it should call errorCallback with
//    an error. The loadId argument is the deferred import that resulted in
//    this uri being loaded.
//
// dartCallInstrumentation(id, qualifiedName):
//    if this function is defined, it will be called at each entry of a
//    method or constructor. Used only when compiling programs with
//    --experiment-call-instrumentation.
(function dartProgram() {
  function copyProperties(from, to) {
    var keys = Object.keys(from);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      to[key] = from[key];
    }
  }
  function mixinPropertiesHard(from, to) {
    var keys = Object.keys(from);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!to.hasOwnProperty(key))
        to[key] = from[key];
    }
  }
  function mixinPropertiesEasy(from, to) {
    Object.assign(to, from);
  }
  var supportsDirectProtoAccess = function() {
    var cls = function() {
    };
    cls.prototype = {p: {}};
    var object = new cls();
    if (!(object.__proto__ && object.__proto__.p === cls.prototype.p))
      return false;
    try {
      if (typeof navigator != "undefined" && typeof navigator.userAgent == "string" && navigator.userAgent.indexOf("Chrome/") >= 0)
        return true;
      if (typeof version == "function" && version.length == 0) {
        var v = version();
        if (/^\d+\.\d+\.\d+\.\d+$/.test(v))
          return true;
      }
    } catch (_) {
    }
    return false;
  }();
  function inherit(cls, sup) {
    cls.prototype.constructor = cls;
    cls.prototype["$is" + cls.name] = cls;
    if (sup != null) {
      if (supportsDirectProtoAccess) {
        cls.prototype.__proto__ = sup.prototype;
        return;
      }
      var clsPrototype = Object.create(sup.prototype);
      copyProperties(cls.prototype, clsPrototype);
      cls.prototype = clsPrototype;
    }
  }
  function inheritMany(sup, classes) {
    for (var i = 0; i < classes.length; i++)
      inherit(classes[i], sup);
  }
  function mixinEasy(cls, mixin) {
    mixinPropertiesEasy(mixin.prototype, cls.prototype);
    cls.prototype.constructor = cls;
  }
  function mixinHard(cls, mixin) {
    mixinPropertiesHard(mixin.prototype, cls.prototype);
    cls.prototype.constructor = cls;
  }
  function lazyOld(holder, name, getterName, initializer) {
    var uninitializedSentinel = holder;
    holder[name] = uninitializedSentinel;
    holder[getterName] = function() {
      holder[getterName] = function() {
        A.throwCyclicInit(name);
      };
      var result;
      var sentinelInProgress = initializer;
      try {
        if (holder[name] === uninitializedSentinel) {
          result = holder[name] = sentinelInProgress;
          result = holder[name] = initializer();
        } else
          result = holder[name];
      } finally {
        if (result === sentinelInProgress)
          holder[name] = null;
        holder[getterName] = function() {
          return this[name];
        };
      }
      return result;
    };
  }
  function lazy(holder, name, getterName, initializer) {
    var uninitializedSentinel = holder;
    holder[name] = uninitializedSentinel;
    holder[getterName] = function() {
      if (holder[name] === uninitializedSentinel)
        holder[name] = initializer();
      holder[getterName] = function() {
        return this[name];
      };
      return holder[name];
    };
  }
  function lazyFinal(holder, name, getterName, initializer) {
    var uninitializedSentinel = holder;
    holder[name] = uninitializedSentinel;
    holder[getterName] = function() {
      if (holder[name] === uninitializedSentinel) {
        var value = initializer();
        if (holder[name] !== uninitializedSentinel)
          A.throwLateFieldADI(name);
        holder[name] = value;
      }
      var finalValue = holder[name];
      holder[getterName] = function() {
        return finalValue;
      };
      return finalValue;
    };
  }
  function makeConstList(list) {
    list.immutable$list = Array;
    list.fixed$length = Array;
    return list;
  }
  function convertToFastObject(properties) {
    function t() {
    }
    t.prototype = properties;
    new t();
    return properties;
  }
  function convertAllToFastObject(arrayOfObjects) {
    for (var i = 0; i < arrayOfObjects.length; ++i)
      convertToFastObject(arrayOfObjects[i]);
  }
  var functionCounter = 0;
  function instanceTearOffGetter(isIntercepted, parameters) {
    var cache = null;
    return isIntercepted ? function(receiver) {
      if (cache === null)
        cache = A.closureFromTearOff(parameters);
      return new cache(receiver, this);
    } : function() {
      if (cache === null)
        cache = A.closureFromTearOff(parameters);
      return new cache(this, null);
    };
  }
  function staticTearOffGetter(parameters) {
    var cache = null;
    return function() {
      if (cache === null)
        cache = A.closureFromTearOff(parameters).prototype;
      return cache;
    };
  }
  var typesOffset = 0;
  function tearOffParameters(container, isStatic, isIntercepted, requiredParameterCount, optionalParameterDefaultValues, callNames, funsOrNames, funType, applyIndex, needsDirectAccess) {
    if (typeof funType == "number")
      funType += typesOffset;
    return {co: container, iS: isStatic, iI: isIntercepted, rC: requiredParameterCount, dV: optionalParameterDefaultValues, cs: callNames, fs: funsOrNames, fT: funType, aI: applyIndex || 0, nDA: needsDirectAccess};
  }
  function installStaticTearOff(holder, getterName, requiredParameterCount, optionalParameterDefaultValues, callNames, funsOrNames, funType, applyIndex) {
    var parameters = tearOffParameters(holder, true, false, requiredParameterCount, optionalParameterDefaultValues, callNames, funsOrNames, funType, applyIndex, false);
    var getterFunction = staticTearOffGetter(parameters);
    holder[getterName] = getterFunction;
  }
  function installInstanceTearOff(prototype, getterName, isIntercepted, requiredParameterCount, optionalParameterDefaultValues, callNames, funsOrNames, funType, applyIndex, needsDirectAccess) {
    isIntercepted = !!isIntercepted;
    var parameters = tearOffParameters(prototype, false, isIntercepted, requiredParameterCount, optionalParameterDefaultValues, callNames, funsOrNames, funType, applyIndex, !!needsDirectAccess);
    var getterFunction = instanceTearOffGetter(isIntercepted, parameters);
    prototype[getterName] = getterFunction;
  }
  function setOrUpdateInterceptorsByTag(newTags) {
    var tags = init.interceptorsByTag;
    if (!tags) {
      init.interceptorsByTag = newTags;
      return;
    }
    copyProperties(newTags, tags);
  }
  function setOrUpdateLeafTags(newTags) {
    var tags = init.leafTags;
    if (!tags) {
      init.leafTags = newTags;
      return;
    }
    copyProperties(newTags, tags);
  }
  function updateTypes(newTypes) {
    var types = init.types;
    var length = types.length;
    types.push.apply(types, newTypes);
    return length;
  }
  function updateHolder(holder, newHolder) {
    copyProperties(newHolder, holder);
    return holder;
  }
  var hunkHelpers = function() {
    var mkInstance = function(isIntercepted, requiredParameterCount, optionalParameterDefaultValues, callNames, applyIndex) {
        return function(container, getterName, name, funType) {
          return installInstanceTearOff(container, getterName, isIntercepted, requiredParameterCount, optionalParameterDefaultValues, callNames, [name], funType, applyIndex, false);
        };
      },
      mkStatic = function(requiredParameterCount, optionalParameterDefaultValues, callNames, applyIndex) {
        return function(container, getterName, name, funType) {
          return installStaticTearOff(container, getterName, requiredParameterCount, optionalParameterDefaultValues, callNames, [name], funType, applyIndex);
        };
      };
    return {inherit: inherit, inheritMany: inheritMany, mixin: mixinEasy, mixinHard: mixinHard, installStaticTearOff: installStaticTearOff, installInstanceTearOff: installInstanceTearOff, _instance_0u: mkInstance(0, 0, null, ["call$0"], 0), _instance_1u: mkInstance(0, 1, null, ["call$1"], 0), _instance_2u: mkInstance(0, 2, null, ["call$2"], 0), _instance_0i: mkInstance(1, 0, null, ["call$0"], 0), _instance_1i: mkInstance(1, 1, null, ["call$1"], 0), _instance_2i: mkInstance(1, 2, null, ["call$2"], 0), _static_0: mkStatic(0, null, ["call$0"], 0), _static_1: mkStatic(1, null, ["call$1"], 0), _static_2: mkStatic(2, null, ["call$2"], 0), makeConstList: makeConstList, lazy: lazy, lazyFinal: lazyFinal, lazyOld: lazyOld, updateHolder: updateHolder, convertToFastObject: convertToFastObject, updateTypes: updateTypes, setOrUpdateInterceptorsByTag: setOrUpdateInterceptorsByTag, setOrUpdateLeafTags: setOrUpdateLeafTags};
  }();
  function initializeDeferredHunk(hunk) {
    typesOffset = init.types.length;
    hunk(hunkHelpers, init, holders, $);
  }
  var A = {JS_CONST: function JS_CONST() {
    },
    createSentinel() {
      return $;
    },
    LateError$fieldNI(fieldName) {
      return new A.LateError("Field '" + fieldName + "' has not been initialized.");
    },
    checkNotNullable(value, $name, $T) {
      return value;
    },
    MappedIterable_MappedIterable(iterable, $function, $S, $T) {
      if (type$.EfficientLengthIterable_dynamic._is(iterable))
        return new A.EfficientLengthMappedIterable(iterable, $function, $S._eval$1("@<0>")._bind$1($T)._eval$1("EfficientLengthMappedIterable<1,2>"));
      return new A.MappedIterable(iterable, $function, $S._eval$1("@<0>")._bind$1($T)._eval$1("MappedIterable<1,2>"));
    },
    LateError: function LateError(t0) {
      this._message = t0;
    },
    EfficientLengthIterable: function EfficientLengthIterable() {
    },
    ListIterable: function ListIterable() {
    },
    ListIterator: function ListIterator(t0, t1, t2) {
      var _ = this;
      _.__internal$_iterable = t0;
      _.__internal$_length = t1;
      _.__internal$_index = 0;
      _.__internal$_current = null;
      _.$ti = t2;
    },
    MappedIterable: function MappedIterable(t0, t1, t2) {
      this.__internal$_iterable = t0;
      this._f = t1;
      this.$ti = t2;
    },
    EfficientLengthMappedIterable: function EfficientLengthMappedIterable(t0, t1, t2) {
      this.__internal$_iterable = t0;
      this._f = t1;
      this.$ti = t2;
    },
    MappedIterator: function MappedIterator(t0, t1, t2) {
      var _ = this;
      _.__internal$_current = null;
      _._iterator = t0;
      _._f = t1;
      _.$ti = t2;
    },
    MappedListIterable: function MappedListIterable(t0, t1, t2) {
      this._source = t0;
      this._f = t1;
      this.$ti = t2;
    },
    FixedLengthListMixin: function FixedLengthListMixin() {
    },
    Symbol: function Symbol(t0) {
      this._name = t0;
    },
    unminifyOrTag(rawClassName) {
      var preserved = init.mangledGlobalNames[rawClassName];
      if (preserved != null)
        return preserved;
      return rawClassName;
    },
    isJsIndexable(object, record) {
      var result;
      if (record != null) {
        result = record.x;
        if (result != null)
          return result;
      }
      return type$.JavaScriptIndexingBehavior_dynamic._is(object);
    },
    S(value) {
      var result;
      if (typeof value == "string")
        return value;
      if (typeof value == "number") {
        if (value !== 0)
          return "" + value;
      } else if (true === value)
        return "true";
      else if (false === value)
        return "false";
      else if (value == null)
        return "null";
      result = J.toString$0$(value);
      return result;
    },
    Primitives_objectHashCode(object) {
      var hash,
        property = $.Primitives__identityHashCodeProperty;
      if (property == null)
        property = $.Primitives__identityHashCodeProperty = Symbol("identityHashCode");
      hash = object[property];
      if (hash == null) {
        hash = Math.random() * 0x3fffffff | 0;
        object[property] = hash;
      }
      return hash;
    },
    Primitives_objectTypeName(object) {
      return A.Primitives__objectTypeNameNewRti(object);
    },
    Primitives__objectTypeNameNewRti(object) {
      var interceptor, dispatchName, $constructor, constructorName;
      if (object instanceof A.Object)
        return A._rtiToString(A.instanceType(object), null);
      interceptor = J.getInterceptor$(object);
      if (interceptor === B.Interceptor_methods || interceptor === B.JavaScriptObject_methods || type$.UnknownJavaScriptObject._is(object)) {
        dispatchName = B.C_JS_CONST(object);
        if (dispatchName !== "Object" && dispatchName !== "")
          return dispatchName;
        $constructor = object.constructor;
        if (typeof $constructor == "function") {
          constructorName = $constructor.name;
          if (typeof constructorName == "string" && constructorName !== "Object" && constructorName !== "")
            return constructorName;
        }
      }
      return A._rtiToString(A.instanceType(object), null);
    },
    Primitives_lazyAsJsDate(receiver) {
      if (receiver.date === void 0)
        receiver.date = new Date(receiver._value);
      return receiver.date;
    },
    Primitives_getYear(receiver) {
      var t1 = A.Primitives_lazyAsJsDate(receiver).getFullYear() + 0;
      return t1;
    },
    Primitives_getMonth(receiver) {
      var t1 = A.Primitives_lazyAsJsDate(receiver).getMonth() + 1;
      return t1;
    },
    Primitives_getDay(receiver) {
      var t1 = A.Primitives_lazyAsJsDate(receiver).getDate() + 0;
      return t1;
    },
    Primitives_getHours(receiver) {
      var t1 = A.Primitives_lazyAsJsDate(receiver).getHours() + 0;
      return t1;
    },
    Primitives_getMinutes(receiver) {
      var t1 = A.Primitives_lazyAsJsDate(receiver).getMinutes() + 0;
      return t1;
    },
    Primitives_getSeconds(receiver) {
      var t1 = A.Primitives_lazyAsJsDate(receiver).getSeconds() + 0;
      return t1;
    },
    Primitives_getMilliseconds(receiver) {
      var t1 = A.Primitives_lazyAsJsDate(receiver).getMilliseconds() + 0;
      return t1;
    },
    Primitives_functionNoSuchMethod($function, positionalArguments, namedArguments) {
      var $arguments, namedArgumentList, t1 = {};
      t1.argumentCount = 0;
      $arguments = [];
      namedArgumentList = [];
      t1.argumentCount = positionalArguments.length;
      B.JSArray_methods.addAll$1($arguments, positionalArguments);
      t1.names = "";
      if (namedArguments != null && namedArguments.__js_helper$_length !== 0)
        namedArguments.forEach$1(0, new A.Primitives_functionNoSuchMethod_closure(t1, namedArgumentList, $arguments));
      return J.noSuchMethod$1$($function, new A.JSInvocationMirror(B.Symbol_call, 0, $arguments, namedArgumentList, 0));
    },
    Primitives_applyFunction($function, positionalArguments, namedArguments) {
      var t1, argumentCount, jsStub;
      if (Array.isArray(positionalArguments))
        t1 = namedArguments == null || namedArguments.__js_helper$_length === 0;
      else
        t1 = false;
      if (t1) {
        argumentCount = positionalArguments.length;
        if (argumentCount === 0) {
          if (!!$function.call$0)
            return $function.call$0();
        } else if (argumentCount === 1) {
          if (!!$function.call$1)
            return $function.call$1(positionalArguments[0]);
        } else if (argumentCount === 2) {
          if (!!$function.call$2)
            return $function.call$2(positionalArguments[0], positionalArguments[1]);
        } else if (argumentCount === 3) {
          if (!!$function.call$3)
            return $function.call$3(positionalArguments[0], positionalArguments[1], positionalArguments[2]);
        } else if (argumentCount === 4) {
          if (!!$function.call$4)
            return $function.call$4(positionalArguments[0], positionalArguments[1], positionalArguments[2], positionalArguments[3]);
        } else if (argumentCount === 5)
          if (!!$function.call$5)
            return $function.call$5(positionalArguments[0], positionalArguments[1], positionalArguments[2], positionalArguments[3], positionalArguments[4]);
        jsStub = $function["call" + "$" + argumentCount];
        if (jsStub != null)
          return jsStub.apply($function, positionalArguments);
      }
      return A.Primitives__generalApplyFunction($function, positionalArguments, namedArguments);
    },
    Primitives__generalApplyFunction($function, positionalArguments, namedArguments) {
      var defaultValuesClosure, t1, defaultValues, interceptor, jsFunction, maxArguments, missingDefaults, keys, _i, defaultValue, used, key,
        $arguments = Array.isArray(positionalArguments) ? positionalArguments : A.List_List$of(positionalArguments, true, type$.dynamic),
        argumentCount = $arguments.length,
        requiredParameterCount = $function.$requiredArgCount;
      if (argumentCount < requiredParameterCount)
        return A.Primitives_functionNoSuchMethod($function, $arguments, namedArguments);
      defaultValuesClosure = $function.$defaultValues;
      t1 = defaultValuesClosure == null;
      defaultValues = !t1 ? defaultValuesClosure() : null;
      interceptor = J.getInterceptor$($function);
      jsFunction = interceptor["call*"];
      if (typeof jsFunction == "string")
        jsFunction = interceptor[jsFunction];
      if (t1) {
        if (namedArguments != null && namedArguments.__js_helper$_length !== 0)
          return A.Primitives_functionNoSuchMethod($function, $arguments, namedArguments);
        if (argumentCount === requiredParameterCount)
          return jsFunction.apply($function, $arguments);
        return A.Primitives_functionNoSuchMethod($function, $arguments, namedArguments);
      }
      if (Array.isArray(defaultValues)) {
        if (namedArguments != null && namedArguments.__js_helper$_length !== 0)
          return A.Primitives_functionNoSuchMethod($function, $arguments, namedArguments);
        maxArguments = requiredParameterCount + defaultValues.length;
        if (argumentCount > maxArguments)
          return A.Primitives_functionNoSuchMethod($function, $arguments, null);
        if (argumentCount < maxArguments) {
          missingDefaults = defaultValues.slice(argumentCount - requiredParameterCount);
          if ($arguments === positionalArguments)
            $arguments = A.List_List$of($arguments, true, type$.dynamic);
          B.JSArray_methods.addAll$1($arguments, missingDefaults);
        }
        return jsFunction.apply($function, $arguments);
      } else {
        if (argumentCount > requiredParameterCount)
          return A.Primitives_functionNoSuchMethod($function, $arguments, namedArguments);
        if ($arguments === positionalArguments)
          $arguments = A.List_List$of($arguments, true, type$.dynamic);
        keys = Object.keys(defaultValues);
        if (namedArguments == null)
          for (t1 = keys.length, _i = 0; _i < keys.length; keys.length === t1 || (0, A.throwConcurrentModificationError)(keys), ++_i) {
            defaultValue = defaultValues[A._asString(keys[_i])];
            if (B.C__Required === defaultValue)
              return A.Primitives_functionNoSuchMethod($function, $arguments, namedArguments);
            B.JSArray_methods.add$1($arguments, defaultValue);
          }
        else {
          for (t1 = keys.length, used = 0, _i = 0; _i < keys.length; keys.length === t1 || (0, A.throwConcurrentModificationError)(keys), ++_i) {
            key = A._asString(keys[_i]);
            if (namedArguments.containsKey$1(key)) {
              ++used;
              B.JSArray_methods.add$1($arguments, namedArguments.$index(0, key));
            } else {
              defaultValue = defaultValues[key];
              if (B.C__Required === defaultValue)
                return A.Primitives_functionNoSuchMethod($function, $arguments, namedArguments);
              B.JSArray_methods.add$1($arguments, defaultValue);
            }
          }
          if (used !== namedArguments.__js_helper$_length)
            return A.Primitives_functionNoSuchMethod($function, $arguments, namedArguments);
        }
        return jsFunction.apply($function, $arguments);
      }
    },
    ioore(receiver, index) {
      if (receiver == null)
        J.get$length$asx(receiver);
      throw A.wrapException(A.diagnoseIndexError(receiver, index));
    },
    diagnoseIndexError(indexable, index) {
      var $length, _s5_ = "index";
      if (!A._isInt(index))
        return new A.ArgumentError(true, index, _s5_, null);
      $length = A._asInt(J.get$length$asx(indexable));
      if (index < 0 || index >= $length)
        return A.IndexError$withLength(index, $length, indexable, _s5_);
      return new A.RangeError(null, null, true, index, _s5_, "Value not in range");
    },
    wrapException(ex) {
      var wrapper, t1;
      if (ex == null)
        ex = new A.NullThrownError();
      wrapper = new Error();
      wrapper.dartException = ex;
      t1 = A.toStringWrapper;
      if ("defineProperty" in Object) {
        Object.defineProperty(wrapper, "message", {get: t1});
        wrapper.name = "";
      } else
        wrapper.toString = t1;
      return wrapper;
    },
    toStringWrapper() {
      return J.toString$0$(this.dartException);
    },
    throwExpression(ex) {
      throw A.wrapException(ex);
    },
    throwConcurrentModificationError(collection) {
      throw A.wrapException(A.ConcurrentModificationError$(collection));
    },
    TypeErrorDecoder_extractPattern(message) {
      var match, $arguments, argumentsExpr, expr, method, receiver;
      message = A.quoteStringForRegExp(message.replace(String({}), "$receiver$"));
      match = message.match(/\\\$[a-zA-Z]+\\\$/g);
      if (match == null)
        match = A._setArrayType([], type$.JSArray_String);
      $arguments = match.indexOf("\\$arguments\\$");
      argumentsExpr = match.indexOf("\\$argumentsExpr\\$");
      expr = match.indexOf("\\$expr\\$");
      method = match.indexOf("\\$method\\$");
      receiver = match.indexOf("\\$receiver\\$");
      return new A.TypeErrorDecoder(message.replace(new RegExp("\\\\\\$arguments\\\\\\$", "g"), "((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$", "g"), "((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$", "g"), "((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$", "g"), "((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$", "g"), "((?:x|[^x])*)"), $arguments, argumentsExpr, expr, method, receiver);
    },
    TypeErrorDecoder_provokeCallErrorOn(expression) {
      return function($expr$) {
        var $argumentsExpr$ = "$arguments$";
        try {
          $expr$.$method$($argumentsExpr$);
        } catch (e) {
          return e.message;
        }
      }(expression);
    },
    TypeErrorDecoder_provokePropertyErrorOn(expression) {
      return function($expr$) {
        try {
          $expr$.$method$;
        } catch (e) {
          return e.message;
        }
      }(expression);
    },
    JsNoSuchMethodError$(_message, match) {
      var t1 = match == null,
        t2 = t1 ? null : match.method;
      return new A.JsNoSuchMethodError(_message, t2, t1 ? null : match.receiver);
    },
    unwrapException(ex) {
      var t1;
      if (ex == null)
        return new A.NullThrownFromJavaScriptException(ex);
      if (ex instanceof A.ExceptionAndStackTrace) {
        t1 = ex.dartException;
        return A.saveStackTrace(ex, t1 == null ? type$.Object._as(t1) : t1);
      }
      if (typeof ex !== "object")
        return ex;
      if ("dartException" in ex)
        return A.saveStackTrace(ex, ex.dartException);
      return A._unwrapNonDartException(ex);
    },
    saveStackTrace(ex, error) {
      if (type$.Error._is(error))
        if (error.$thrownJsError == null)
          error.$thrownJsError = ex;
      return error;
    },
    _unwrapNonDartException(ex) {
      var message, number, ieErrorCode, t1, nsme, notClosure, nullCall, nullLiteralCall, undefCall, undefLiteralCall, nullProperty, undefProperty, undefLiteralProperty, match, _null = null;
      if (!("message" in ex))
        return ex;
      message = ex.message;
      if ("number" in ex && typeof ex.number == "number") {
        number = ex.number;
        ieErrorCode = number & 65535;
        if ((B.JSInt_methods._shrOtherPositive$1(number, 16) & 8191) === 10)
          switch (ieErrorCode) {
            case 438:
              return A.saveStackTrace(ex, A.JsNoSuchMethodError$(A.S(message) + " (Error " + ieErrorCode + ")", _null));
            case 445:
            case 5007:
              t1 = A.S(message);
              return A.saveStackTrace(ex, new A.NullError(t1 + " (Error " + ieErrorCode + ")", _null));
          }
      }
      if (ex instanceof TypeError) {
        nsme = $.$get$TypeErrorDecoder_noSuchMethodPattern();
        notClosure = $.$get$TypeErrorDecoder_notClosurePattern();
        nullCall = $.$get$TypeErrorDecoder_nullCallPattern();
        nullLiteralCall = $.$get$TypeErrorDecoder_nullLiteralCallPattern();
        undefCall = $.$get$TypeErrorDecoder_undefinedCallPattern();
        undefLiteralCall = $.$get$TypeErrorDecoder_undefinedLiteralCallPattern();
        nullProperty = $.$get$TypeErrorDecoder_nullPropertyPattern();
        $.$get$TypeErrorDecoder_nullLiteralPropertyPattern();
        undefProperty = $.$get$TypeErrorDecoder_undefinedPropertyPattern();
        undefLiteralProperty = $.$get$TypeErrorDecoder_undefinedLiteralPropertyPattern();
        match = nsme.matchTypeError$1(message);
        if (match != null)
          return A.saveStackTrace(ex, A.JsNoSuchMethodError$(A._asString(message), match));
        else {
          match = notClosure.matchTypeError$1(message);
          if (match != null) {
            match.method = "call";
            return A.saveStackTrace(ex, A.JsNoSuchMethodError$(A._asString(message), match));
          } else {
            match = nullCall.matchTypeError$1(message);
            if (match == null) {
              match = nullLiteralCall.matchTypeError$1(message);
              if (match == null) {
                match = undefCall.matchTypeError$1(message);
                if (match == null) {
                  match = undefLiteralCall.matchTypeError$1(message);
                  if (match == null) {
                    match = nullProperty.matchTypeError$1(message);
                    if (match == null) {
                      match = nullLiteralCall.matchTypeError$1(message);
                      if (match == null) {
                        match = undefProperty.matchTypeError$1(message);
                        if (match == null) {
                          match = undefLiteralProperty.matchTypeError$1(message);
                          t1 = match != null;
                        } else
                          t1 = true;
                      } else
                        t1 = true;
                    } else
                      t1 = true;
                  } else
                    t1 = true;
                } else
                  t1 = true;
              } else
                t1 = true;
            } else
              t1 = true;
            if (t1) {
              A._asString(message);
              return A.saveStackTrace(ex, new A.NullError(message, match == null ? _null : match.method));
            }
          }
        }
        return A.saveStackTrace(ex, new A.UnknownJsTypeError(typeof message == "string" ? message : ""));
      }
      if (ex instanceof RangeError) {
        if (typeof message == "string" && message.indexOf("call stack") !== -1)
          return new A.StackOverflowError();
        message = function(ex) {
          try {
            return String(ex);
          } catch (e) {
          }
          return null;
        }(ex);
        return A.saveStackTrace(ex, new A.ArgumentError(false, _null, _null, typeof message == "string" ? message.replace(/^RangeError:\s*/, "") : message));
      }
      if (typeof InternalError == "function" && ex instanceof InternalError)
        if (typeof message == "string" && message === "too much recursion")
          return new A.StackOverflowError();
      return ex;
    },
    getTraceFromException(exception) {
      var trace;
      if (exception instanceof A.ExceptionAndStackTrace)
        return exception.stackTrace;
      if (exception == null)
        return new A._StackTrace(exception);
      trace = exception.$cachedTrace;
      if (trace != null)
        return trace;
      return exception.$cachedTrace = new A._StackTrace(exception);
    },
    objectHashCode(object) {
      if (object == null || typeof object != "object")
        return J.get$hashCode$(object);
      else
        return A.Primitives_objectHashCode(object);
    },
    fillLiteralMap(keyValuePairs, result) {
      var index, index0, index1,
        $length = keyValuePairs.length;
      for (index = 0; index < $length; index = index1) {
        index0 = index + 1;
        index1 = index0 + 1;
        result.$indexSet(0, keyValuePairs[index], keyValuePairs[index0]);
      }
      return result;
    },
    invokeClosure(closure, numberOfArguments, arg1, arg2, arg3, arg4) {
      type$.Function._as(closure);
      switch (A._asInt(numberOfArguments)) {
        case 0:
          return closure.call$0();
        case 1:
          return closure.call$1(arg1);
        case 2:
          return closure.call$2(arg1, arg2);
        case 3:
          return closure.call$3(arg1, arg2, arg3);
        case 4:
          return closure.call$4(arg1, arg2, arg3, arg4);
      }
      throw A.wrapException(new A._Exception("Unsupported number of arguments for wrapped closure"));
    },
    convertDartClosureToJS(closure, arity) {
      var $function = closure.$identity;
      if (!!$function)
        return $function;
      $function = function(closure, arity, invoke) {
        return function(a1, a2, a3, a4) {
          return invoke(closure, arity, a1, a2, a3, a4);
        };
      }(closure, arity, A.invokeClosure);
      closure.$identity = $function;
      return $function;
    },
    Closure_fromTearOff(parameters) {
      var $prototype, $constructor, t2, trampoline, applyTrampoline, i, stub, stub0, stubName, stubCallName,
        container = parameters.co,
        isStatic = parameters.iS,
        isIntercepted = parameters.iI,
        needsDirectAccess = parameters.nDA,
        applyTrampolineIndex = parameters.aI,
        funsOrNames = parameters.fs,
        callNames = parameters.cs,
        $name = funsOrNames[0],
        callName = callNames[0],
        $function = container[$name],
        t1 = parameters.fT;
      t1.toString;
      $prototype = isStatic ? Object.create(new A.StaticClosure().constructor.prototype) : Object.create(new A.BoundClosure(null, null).constructor.prototype);
      $prototype.$initialize = $prototype.constructor;
      if (isStatic)
        $constructor = function static_tear_off() {
          this.$initialize();
        };
      else
        $constructor = function tear_off(a, b) {
          this.$initialize(a, b);
        };
      $prototype.constructor = $constructor;
      $constructor.prototype = $prototype;
      $prototype.$_name = $name;
      $prototype.$_target = $function;
      t2 = !isStatic;
      if (t2)
        trampoline = A.Closure_forwardCallTo($name, $function, isIntercepted, needsDirectAccess);
      else {
        $prototype.$static_name = $name;
        trampoline = $function;
      }
      $prototype.$signature = A.Closure__computeSignatureFunctionNewRti(t1, isStatic, isIntercepted);
      $prototype[callName] = trampoline;
      for (applyTrampoline = trampoline, i = 1; i < funsOrNames.length; ++i) {
        stub = funsOrNames[i];
        if (typeof stub == "string") {
          stub0 = container[stub];
          stubName = stub;
          stub = stub0;
        } else
          stubName = "";
        stubCallName = callNames[i];
        if (stubCallName != null) {
          if (t2)
            stub = A.Closure_forwardCallTo(stubName, stub, isIntercepted, needsDirectAccess);
          $prototype[stubCallName] = stub;
        }
        if (i === applyTrampolineIndex)
          applyTrampoline = stub;
      }
      $prototype["call*"] = applyTrampoline;
      $prototype.$requiredArgCount = parameters.rC;
      $prototype.$defaultValues = parameters.dV;
      return $constructor;
    },
    Closure__computeSignatureFunctionNewRti(functionType, isStatic, isIntercepted) {
      if (typeof functionType == "number")
        return functionType;
      if (typeof functionType == "string") {
        if (isStatic)
          throw A.wrapException("Cannot compute signature for static tearoff.");
        return function(recipe, evalOnReceiver) {
          return function() {
            return evalOnReceiver(this, recipe);
          };
        }(functionType, A.BoundClosure_evalRecipe);
      }
      throw A.wrapException("Error in functionType of tearoff");
    },
    Closure_cspForwardCall(arity, needsDirectAccess, stubName, $function) {
      var getReceiver = A.BoundClosure_receiverOf;
      switch (needsDirectAccess ? -1 : arity) {
        case 0:
          return function(entry, receiverOf) {
            return function() {
              return receiverOf(this)[entry]();
            };
          }(stubName, getReceiver);
        case 1:
          return function(entry, receiverOf) {
            return function(a) {
              return receiverOf(this)[entry](a);
            };
          }(stubName, getReceiver);
        case 2:
          return function(entry, receiverOf) {
            return function(a, b) {
              return receiverOf(this)[entry](a, b);
            };
          }(stubName, getReceiver);
        case 3:
          return function(entry, receiverOf) {
            return function(a, b, c) {
              return receiverOf(this)[entry](a, b, c);
            };
          }(stubName, getReceiver);
        case 4:
          return function(entry, receiverOf) {
            return function(a, b, c, d) {
              return receiverOf(this)[entry](a, b, c, d);
            };
          }(stubName, getReceiver);
        case 5:
          return function(entry, receiverOf) {
            return function(a, b, c, d, e) {
              return receiverOf(this)[entry](a, b, c, d, e);
            };
          }(stubName, getReceiver);
        default:
          return function(f, receiverOf) {
            return function() {
              return f.apply(receiverOf(this), arguments);
            };
          }($function, getReceiver);
      }
    },
    Closure_forwardCallTo(stubName, $function, isIntercepted, needsDirectAccess) {
      var arity, t1;
      if (isIntercepted)
        return A.Closure_forwardInterceptedCallTo(stubName, $function, needsDirectAccess);
      arity = $function.length;
      t1 = A.Closure_cspForwardCall(arity, needsDirectAccess, stubName, $function);
      return t1;
    },
    Closure_cspForwardInterceptedCall(arity, needsDirectAccess, stubName, $function) {
      var getReceiver = A.BoundClosure_receiverOf,
        getInterceptor = A.BoundClosure_interceptorOf;
      switch (needsDirectAccess ? -1 : arity) {
        case 0:
          throw A.wrapException(new A.RuntimeError("Intercepted function with no arguments."));
        case 1:
          return function(entry, interceptorOf, receiverOf) {
            return function() {
              return interceptorOf(this)[entry](receiverOf(this));
            };
          }(stubName, getInterceptor, getReceiver);
        case 2:
          return function(entry, interceptorOf, receiverOf) {
            return function(a) {
              return interceptorOf(this)[entry](receiverOf(this), a);
            };
          }(stubName, getInterceptor, getReceiver);
        case 3:
          return function(entry, interceptorOf, receiverOf) {
            return function(a, b) {
              return interceptorOf(this)[entry](receiverOf(this), a, b);
            };
          }(stubName, getInterceptor, getReceiver);
        case 4:
          return function(entry, interceptorOf, receiverOf) {
            return function(a, b, c) {
              return interceptorOf(this)[entry](receiverOf(this), a, b, c);
            };
          }(stubName, getInterceptor, getReceiver);
        case 5:
          return function(entry, interceptorOf, receiverOf) {
            return function(a, b, c, d) {
              return interceptorOf(this)[entry](receiverOf(this), a, b, c, d);
            };
          }(stubName, getInterceptor, getReceiver);
        case 6:
          return function(entry, interceptorOf, receiverOf) {
            return function(a, b, c, d, e) {
              return interceptorOf(this)[entry](receiverOf(this), a, b, c, d, e);
            };
          }(stubName, getInterceptor, getReceiver);
        default:
          return function(f, interceptorOf, receiverOf) {
            return function() {
              var a = [receiverOf(this)];
              Array.prototype.push.apply(a, arguments);
              return f.apply(interceptorOf(this), a);
            };
          }($function, getInterceptor, getReceiver);
      }
    },
    Closure_forwardInterceptedCallTo(stubName, $function, needsDirectAccess) {
      var arity, t1;
      if ($.BoundClosure__interceptorFieldNameCache == null)
        $.BoundClosure__interceptorFieldNameCache = A.BoundClosure__computeFieldNamed("interceptor");
      if ($.BoundClosure__receiverFieldNameCache == null)
        $.BoundClosure__receiverFieldNameCache = A.BoundClosure__computeFieldNamed("receiver");
      arity = $function.length;
      t1 = A.Closure_cspForwardInterceptedCall(arity, needsDirectAccess, stubName, $function);
      return t1;
    },
    closureFromTearOff(parameters) {
      return A.Closure_fromTearOff(parameters);
    },
    BoundClosure_evalRecipe(closure, recipe) {
      return A._Universe_evalInEnvironment(init.typeUniverse, A.instanceType(closure._receiver), recipe);
    },
    BoundClosure_receiverOf(closure) {
      return closure._receiver;
    },
    BoundClosure_interceptorOf(closure) {
      return closure._interceptor;
    },
    BoundClosure__computeFieldNamed(fieldName) {
      var t1, i, $name,
        template = new A.BoundClosure("receiver", "interceptor"),
        names = J.JSArray_markFixedList(Object.getOwnPropertyNames(template), type$.nullable_Object);
      for (t1 = names.length, i = 0; i < t1; ++i) {
        $name = names[i];
        if (template[$name] === fieldName)
          return $name;
      }
      throw A.wrapException(A.ArgumentError$("Field name " + fieldName + " not found.", null));
    },
    throwCyclicInit(staticName) {
      throw A.wrapException(new A.CyclicInitializationError(staticName));
    },
    getIsolateAffinityTag($name) {
      return init.getIsolateTag($name);
    },
    defineProperty(obj, property, value) {
      Object.defineProperty(obj, property, {value: value, enumerable: false, writable: true, configurable: true});
    },
    lookupAndCacheInterceptor(obj) {
      var interceptor, interceptorClass, altTag, mark, t1,
        tag = A._asString($.getTagFunction.call$1(obj)),
        record = $.dispatchRecordsForInstanceTags[tag];
      if (record != null) {
        Object.defineProperty(obj, init.dispatchPropertyName, {value: record, enumerable: false, writable: true, configurable: true});
        return record.i;
      }
      interceptor = $.interceptorsForUncacheableTags[tag];
      if (interceptor != null)
        return interceptor;
      interceptorClass = init.interceptorsByTag[tag];
      if (interceptorClass == null) {
        altTag = A._asStringQ($.alternateTagFunction.call$2(obj, tag));
        if (altTag != null) {
          record = $.dispatchRecordsForInstanceTags[altTag];
          if (record != null) {
            Object.defineProperty(obj, init.dispatchPropertyName, {value: record, enumerable: false, writable: true, configurable: true});
            return record.i;
          }
          interceptor = $.interceptorsForUncacheableTags[altTag];
          if (interceptor != null)
            return interceptor;
          interceptorClass = init.interceptorsByTag[altTag];
          tag = altTag;
        }
      }
      if (interceptorClass == null)
        return null;
      interceptor = interceptorClass.prototype;
      mark = tag[0];
      if (mark === "!") {
        record = A.makeLeafDispatchRecord(interceptor);
        $.dispatchRecordsForInstanceTags[tag] = record;
        Object.defineProperty(obj, init.dispatchPropertyName, {value: record, enumerable: false, writable: true, configurable: true});
        return record.i;
      }
      if (mark === "~") {
        $.interceptorsForUncacheableTags[tag] = interceptor;
        return interceptor;
      }
      if (mark === "-") {
        t1 = A.makeLeafDispatchRecord(interceptor);
        Object.defineProperty(Object.getPrototypeOf(obj), init.dispatchPropertyName, {value: t1, enumerable: false, writable: true, configurable: true});
        return t1.i;
      }
      if (mark === "+")
        return A.patchInteriorProto(obj, interceptor);
      if (mark === "*")
        throw A.wrapException(A.UnimplementedError$(tag));
      if (init.leafTags[tag] === true) {
        t1 = A.makeLeafDispatchRecord(interceptor);
        Object.defineProperty(Object.getPrototypeOf(obj), init.dispatchPropertyName, {value: t1, enumerable: false, writable: true, configurable: true});
        return t1.i;
      } else
        return A.patchInteriorProto(obj, interceptor);
    },
    patchInteriorProto(obj, interceptor) {
      var proto = Object.getPrototypeOf(obj);
      Object.defineProperty(proto, init.dispatchPropertyName, {value: J.makeDispatchRecord(interceptor, proto, null, null), enumerable: false, writable: true, configurable: true});
      return interceptor;
    },
    makeLeafDispatchRecord(interceptor) {
      return J.makeDispatchRecord(interceptor, false, null, !!interceptor.$isJavaScriptIndexingBehavior);
    },
    makeDefaultDispatchRecord(tag, interceptorClass, proto) {
      var interceptor = interceptorClass.prototype;
      if (init.leafTags[tag] === true)
        return A.makeLeafDispatchRecord(interceptor);
      else
        return J.makeDispatchRecord(interceptor, proto, null, null);
    },
    initNativeDispatch() {
      if (true === $.initNativeDispatchFlag)
        return;
      $.initNativeDispatchFlag = true;
      A.initNativeDispatchContinue();
    },
    initNativeDispatchContinue() {
      var map, tags, fun, i, tag, proto, record, interceptorClass;
      $.dispatchRecordsForInstanceTags = Object.create(null);
      $.interceptorsForUncacheableTags = Object.create(null);
      A.initHooks();
      map = init.interceptorsByTag;
      tags = Object.getOwnPropertyNames(map);
      if (typeof window != "undefined") {
        window;
        fun = function() {
        };
        for (i = 0; i < tags.length; ++i) {
          tag = tags[i];
          proto = $.prototypeForTagFunction.call$1(tag);
          if (proto != null) {
            record = A.makeDefaultDispatchRecord(tag, map[tag], proto);
            if (record != null) {
              Object.defineProperty(proto, init.dispatchPropertyName, {value: record, enumerable: false, writable: true, configurable: true});
              fun.prototype = proto;
            }
          }
        }
      }
      for (i = 0; i < tags.length; ++i) {
        tag = tags[i];
        if (/^[A-Za-z_]/.test(tag)) {
          interceptorClass = map[tag];
          map["!" + tag] = interceptorClass;
          map["~" + tag] = interceptorClass;
          map["-" + tag] = interceptorClass;
          map["+" + tag] = interceptorClass;
          map["*" + tag] = interceptorClass;
        }
      }
    },
    initHooks() {
      var transformers, i, transformer, getTag, getUnknownTag, prototypeForTag,
        hooks = B.C_JS_CONST0();
      hooks = A.applyHooksTransformer(B.C_JS_CONST1, A.applyHooksTransformer(B.C_JS_CONST2, A.applyHooksTransformer(B.C_JS_CONST3, A.applyHooksTransformer(B.C_JS_CONST3, A.applyHooksTransformer(B.C_JS_CONST4, A.applyHooksTransformer(B.C_JS_CONST5, A.applyHooksTransformer(B.C_JS_CONST6(B.C_JS_CONST), hooks)))))));
      if (typeof dartNativeDispatchHooksTransformer != "undefined") {
        transformers = dartNativeDispatchHooksTransformer;
        if (typeof transformers == "function")
          transformers = [transformers];
        if (transformers.constructor == Array)
          for (i = 0; i < transformers.length; ++i) {
            transformer = transformers[i];
            if (typeof transformer == "function")
              hooks = transformer(hooks) || hooks;
          }
      }
      getTag = hooks.getTag;
      getUnknownTag = hooks.getUnknownTag;
      prototypeForTag = hooks.prototypeForTag;
      $.getTagFunction = new A.initHooks_closure(getTag);
      $.alternateTagFunction = new A.initHooks_closure0(getUnknownTag);
      $.prototypeForTagFunction = new A.initHooks_closure1(prototypeForTag);
    },
    applyHooksTransformer(transformer, hooks) {
      return transformer(hooks) || hooks;
    },
    quoteStringForRegExp(string) {
      if (/[[\]{}()*+?.\\^$|]/.test(string))
        return string.replace(/[[\]{}()*+?.\\^$|]/g, "\\$&");
      return string;
    },
    ConstantMapView: function ConstantMapView(t0, t1) {
      this._collection$_map = t0;
      this.$ti = t1;
    },
    ConstantMap: function ConstantMap() {
    },
    ConstantStringMap: function ConstantStringMap(t0, t1, t2, t3) {
      var _ = this;
      _.__js_helper$_length = t0;
      _.__js_helper$_jsObject = t1;
      _._keys = t2;
      _.$ti = t3;
    },
    _ConstantMapKeyIterable: function _ConstantMapKeyIterable(t0, t1) {
      this._map = t0;
      this.$ti = t1;
    },
    JSInvocationMirror: function JSInvocationMirror(t0, t1, t2, t3, t4) {
      var _ = this;
      _._memberName = t0;
      _.__js_helper$_kind = t1;
      _._arguments = t2;
      _._namedArgumentNames = t3;
      _._typeArgumentCount = t4;
    },
    Primitives_functionNoSuchMethod_closure: function Primitives_functionNoSuchMethod_closure(t0, t1, t2) {
      this._box_0 = t0;
      this.namedArgumentList = t1;
      this.$arguments = t2;
    },
    TypeErrorDecoder: function TypeErrorDecoder(t0, t1, t2, t3, t4, t5) {
      var _ = this;
      _._pattern = t0;
      _._arguments = t1;
      _._argumentsExpr = t2;
      _._expr = t3;
      _._method = t4;
      _._receiver = t5;
    },
    NullError: function NullError(t0, t1) {
      this.__js_helper$_message = t0;
      this._method = t1;
    },
    JsNoSuchMethodError: function JsNoSuchMethodError(t0, t1, t2) {
      this.__js_helper$_message = t0;
      this._method = t1;
      this._receiver = t2;
    },
    UnknownJsTypeError: function UnknownJsTypeError(t0) {
      this.__js_helper$_message = t0;
    },
    NullThrownFromJavaScriptException: function NullThrownFromJavaScriptException(t0) {
      this._irritant = t0;
    },
    ExceptionAndStackTrace: function ExceptionAndStackTrace(t0, t1) {
      this.dartException = t0;
      this.stackTrace = t1;
    },
    _StackTrace: function _StackTrace(t0) {
      this._exception = t0;
      this._trace = null;
    },
    Closure: function Closure() {
    },
    Closure0Args: function Closure0Args() {
    },
    Closure2Args: function Closure2Args() {
    },
    TearOffClosure: function TearOffClosure() {
    },
    StaticClosure: function StaticClosure() {
    },
    BoundClosure: function BoundClosure(t0, t1) {
      this._receiver = t0;
      this._interceptor = t1;
    },
    RuntimeError: function RuntimeError(t0) {
      this.message = t0;
    },
    _Required: function _Required() {
    },
    JsLinkedHashMap: function JsLinkedHashMap(t0) {
      var _ = this;
      _.__js_helper$_length = 0;
      _._last = _._first = _.__js_helper$_rest = _._nums = _._strings = null;
      _._modifications = 0;
      _.$ti = t0;
    },
    LinkedHashMapCell: function LinkedHashMapCell(t0, t1) {
      this.hashMapCellKey = t0;
      this.hashMapCellValue = t1;
      this._next = null;
    },
    LinkedHashMapKeyIterable: function LinkedHashMapKeyIterable(t0, t1) {
      this._map = t0;
      this.$ti = t1;
    },
    LinkedHashMapKeyIterator: function LinkedHashMapKeyIterator(t0, t1, t2) {
      var _ = this;
      _._map = t0;
      _._modifications = t1;
      _.__js_helper$_current = _._cell = null;
      _.$ti = t2;
    },
    initHooks_closure: function initHooks_closure(t0) {
      this.getTag = t0;
    },
    initHooks_closure0: function initHooks_closure0(t0) {
      this.getUnknownTag = t0;
    },
    initHooks_closure1: function initHooks_closure1(t0) {
      this.prototypeForTag = t0;
    },
    _checkValidIndex(index, list, $length) {
      if (index >>> 0 !== index || index >= $length)
        throw A.wrapException(A.diagnoseIndexError(list, index));
    },
    NativeTypedData: function NativeTypedData() {
    },
    NativeTypedArray: function NativeTypedArray() {
    },
    NativeTypedArrayOfDouble: function NativeTypedArrayOfDouble() {
    },
    NativeTypedArrayOfInt: function NativeTypedArrayOfInt() {
    },
    NativeInt16List: function NativeInt16List() {
    },
    NativeInt32List: function NativeInt32List() {
    },
    NativeInt8List: function NativeInt8List() {
    },
    NativeUint16List: function NativeUint16List() {
    },
    NativeUint32List: function NativeUint32List() {
    },
    NativeUint8ClampedList: function NativeUint8ClampedList() {
    },
    NativeUint8List: function NativeUint8List() {
    },
    _NativeTypedArrayOfDouble_NativeTypedArray_ListMixin: function _NativeTypedArrayOfDouble_NativeTypedArray_ListMixin() {
    },
    _NativeTypedArrayOfDouble_NativeTypedArray_ListMixin_FixedLengthListMixin: function _NativeTypedArrayOfDouble_NativeTypedArray_ListMixin_FixedLengthListMixin() {
    },
    _NativeTypedArrayOfInt_NativeTypedArray_ListMixin: function _NativeTypedArrayOfInt_NativeTypedArray_ListMixin() {
    },
    _NativeTypedArrayOfInt_NativeTypedArray_ListMixin_FixedLengthListMixin: function _NativeTypedArrayOfInt_NativeTypedArray_ListMixin_FixedLengthListMixin() {
    },
    Rti__getQuestionFromStar(universe, rti) {
      var question = rti._precomputed1;
      return question == null ? rti._precomputed1 = A._Universe__lookupQuestionRti(universe, rti._primary, true) : question;
    },
    Rti__getFutureFromFutureOr(universe, rti) {
      var future = rti._precomputed1;
      return future == null ? rti._precomputed1 = A._Universe__lookupInterfaceRti(universe, "Future", [rti._primary]) : future;
    },
    Rti__isUnionOfFunctionType(rti) {
      var kind = rti._kind;
      if (kind === 6 || kind === 7 || kind === 8)
        return A.Rti__isUnionOfFunctionType(rti._primary);
      return kind === 12 || kind === 13;
    },
    Rti__getCanonicalRecipe(rti) {
      return rti._canonicalRecipe;
    },
    findType(recipe) {
      return A._Universe_eval(init.typeUniverse, recipe, false);
    },
    _substitute(universe, rti, typeArguments, depth) {
      var baseType, substitutedBaseType, interfaceTypeArguments, substitutedInterfaceTypeArguments, base, substitutedBase, $arguments, substitutedArguments, returnType, substitutedReturnType, functionParameters, substitutedFunctionParameters, bounds, substitutedBounds, index, argument,
        kind = rti._kind;
      switch (kind) {
        case 5:
        case 1:
        case 2:
        case 3:
        case 4:
          return rti;
        case 6:
          baseType = rti._primary;
          substitutedBaseType = A._substitute(universe, baseType, typeArguments, depth);
          if (substitutedBaseType === baseType)
            return rti;
          return A._Universe__lookupStarRti(universe, substitutedBaseType, true);
        case 7:
          baseType = rti._primary;
          substitutedBaseType = A._substitute(universe, baseType, typeArguments, depth);
          if (substitutedBaseType === baseType)
            return rti;
          return A._Universe__lookupQuestionRti(universe, substitutedBaseType, true);
        case 8:
          baseType = rti._primary;
          substitutedBaseType = A._substitute(universe, baseType, typeArguments, depth);
          if (substitutedBaseType === baseType)
            return rti;
          return A._Universe__lookupFutureOrRti(universe, substitutedBaseType, true);
        case 9:
          interfaceTypeArguments = rti._rest;
          substitutedInterfaceTypeArguments = A._substituteArray(universe, interfaceTypeArguments, typeArguments, depth);
          if (substitutedInterfaceTypeArguments === interfaceTypeArguments)
            return rti;
          return A._Universe__lookupInterfaceRti(universe, rti._primary, substitutedInterfaceTypeArguments);
        case 10:
          base = rti._primary;
          substitutedBase = A._substitute(universe, base, typeArguments, depth);
          $arguments = rti._rest;
          substitutedArguments = A._substituteArray(universe, $arguments, typeArguments, depth);
          if (substitutedBase === base && substitutedArguments === $arguments)
            return rti;
          return A._Universe__lookupBindingRti(universe, substitutedBase, substitutedArguments);
        case 12:
          returnType = rti._primary;
          substitutedReturnType = A._substitute(universe, returnType, typeArguments, depth);
          functionParameters = rti._rest;
          substitutedFunctionParameters = A._substituteFunctionParameters(universe, functionParameters, typeArguments, depth);
          if (substitutedReturnType === returnType && substitutedFunctionParameters === functionParameters)
            return rti;
          return A._Universe__lookupFunctionRti(universe, substitutedReturnType, substitutedFunctionParameters);
        case 13:
          bounds = rti._rest;
          depth += bounds.length;
          substitutedBounds = A._substituteArray(universe, bounds, typeArguments, depth);
          base = rti._primary;
          substitutedBase = A._substitute(universe, base, typeArguments, depth);
          if (substitutedBounds === bounds && substitutedBase === base)
            return rti;
          return A._Universe__lookupGenericFunctionRti(universe, substitutedBase, substitutedBounds, true);
        case 14:
          index = rti._primary;
          if (index < depth)
            return rti;
          argument = typeArguments[index - depth];
          if (argument == null)
            return rti;
          return argument;
        default:
          throw A.wrapException(A.AssertionError$("Attempted to substitute unexpected RTI kind " + kind));
      }
    },
    _substituteArray(universe, rtiArray, typeArguments, depth) {
      var changed, i, rti, substitutedRti,
        $length = rtiArray.length,
        result = A._Utils_newArrayOrEmpty($length);
      for (changed = false, i = 0; i < $length; ++i) {
        rti = rtiArray[i];
        substitutedRti = A._substitute(universe, rti, typeArguments, depth);
        if (substitutedRti !== rti)
          changed = true;
        result[i] = substitutedRti;
      }
      return changed ? result : rtiArray;
    },
    _substituteNamed(universe, namedArray, typeArguments, depth) {
      var changed, i, t1, t2, rti, substitutedRti,
        $length = namedArray.length,
        result = A._Utils_newArrayOrEmpty($length);
      for (changed = false, i = 0; i < $length; i += 3) {
        t1 = namedArray[i];
        t2 = namedArray[i + 1];
        rti = namedArray[i + 2];
        substitutedRti = A._substitute(universe, rti, typeArguments, depth);
        if (substitutedRti !== rti)
          changed = true;
        result.splice(i, 3, t1, t2, substitutedRti);
      }
      return changed ? result : namedArray;
    },
    _substituteFunctionParameters(universe, functionParameters, typeArguments, depth) {
      var result,
        requiredPositional = functionParameters._requiredPositional,
        substitutedRequiredPositional = A._substituteArray(universe, requiredPositional, typeArguments, depth),
        optionalPositional = functionParameters._optionalPositional,
        substitutedOptionalPositional = A._substituteArray(universe, optionalPositional, typeArguments, depth),
        named = functionParameters._named,
        substitutedNamed = A._substituteNamed(universe, named, typeArguments, depth);
      if (substitutedRequiredPositional === requiredPositional && substitutedOptionalPositional === optionalPositional && substitutedNamed === named)
        return functionParameters;
      result = new A._FunctionParameters();
      result._requiredPositional = substitutedRequiredPositional;
      result._optionalPositional = substitutedOptionalPositional;
      result._named = substitutedNamed;
      return result;
    },
    _setArrayType(target, rti) {
      target[init.arrayRti] = rti;
      return target;
    },
    closureFunctionType(closure) {
      var t1,
        signature = closure.$signature;
      if (signature != null) {
        if (typeof signature == "number")
          return A.getTypeFromTypesTable(signature);
        t1 = closure.$signature();
        return t1;
      }
      return null;
    },
    instanceOrFunctionType(object, testRti) {
      var rti;
      if (A.Rti__isUnionOfFunctionType(testRti))
        if (object instanceof A.Closure) {
          rti = A.closureFunctionType(object);
          if (rti != null)
            return rti;
        }
      return A.instanceType(object);
    },
    instanceType(object) {
      var rti;
      if (object instanceof A.Object) {
        rti = object.$ti;
        return rti != null ? rti : A._instanceTypeFromConstructor(object);
      }
      if (Array.isArray(object))
        return A._arrayInstanceType(object);
      return A._instanceTypeFromConstructor(J.getInterceptor$(object));
    },
    _arrayInstanceType(object) {
      var rti = object[init.arrayRti],
        defaultRti = type$.JSArray_dynamic;
      if (rti == null)
        return defaultRti;
      if (rti.constructor !== defaultRti.constructor)
        return defaultRti;
      return rti;
    },
    _instanceType(object) {
      var rti = object.$ti;
      return rti != null ? rti : A._instanceTypeFromConstructor(object);
    },
    _instanceTypeFromConstructor(instance) {
      var $constructor = instance.constructor,
        probe = $constructor.$ccache;
      if (probe != null)
        return probe;
      return A._instanceTypeFromConstructorMiss(instance, $constructor);
    },
    _instanceTypeFromConstructorMiss(instance, $constructor) {
      var effectiveConstructor = instance instanceof A.Closure ? instance.__proto__.__proto__.constructor : $constructor,
        rti = A._Universe_findErasedType(init.typeUniverse, effectiveConstructor.name);
      $constructor.$ccache = rti;
      return rti;
    },
    getTypeFromTypesTable(index) {
      var rti,
        table = init.types,
        type = table[index];
      if (typeof type == "string") {
        rti = A._Universe_eval(init.typeUniverse, type, false);
        table[index] = rti;
        return rti;
      }
      return type;
    },
    _installSpecializedIsTest(object) {
      var t1, unstarred, isFn, $name, testRti = this;
      if (testRti === type$.Object)
        return A._finishIsFn(testRti, object, A._isObject);
      if (!A.isStrongTopType(testRti))
        if (!(testRti === type$.legacy_Object))
          t1 = false;
        else
          t1 = true;
      else
        t1 = true;
      if (t1)
        return A._finishIsFn(testRti, object, A._isTop);
      t1 = testRti._kind;
      unstarred = t1 === 6 ? testRti._primary : testRti;
      if (unstarred === type$.int)
        isFn = A._isInt;
      else if (unstarred === type$.double || unstarred === type$.num)
        isFn = A._isNum;
      else if (unstarred === type$.String)
        isFn = A._isString;
      else
        isFn = unstarred === type$.bool ? A._isBool : null;
      if (isFn != null)
        return A._finishIsFn(testRti, object, isFn);
      if (unstarred._kind === 9) {
        $name = unstarred._primary;
        if (unstarred._rest.every(A.isTopType)) {
          testRti._specializedTestResource = "$is" + $name;
          if ($name === "List")
            return A._finishIsFn(testRti, object, A._isListTestViaProperty);
          return A._finishIsFn(testRti, object, A._isTestViaProperty);
        }
      } else if (t1 === 7)
        return A._finishIsFn(testRti, object, A._generalNullableIsTestImplementation);
      return A._finishIsFn(testRti, object, A._generalIsTestImplementation);
    },
    _finishIsFn(testRti, object, isFn) {
      testRti._is = isFn;
      return testRti._is(object);
    },
    _installSpecializedAsCheck(object) {
      var t1, testRti = this,
        asFn = A._generalAsCheckImplementation;
      if (!A.isStrongTopType(testRti))
        if (!(testRti === type$.legacy_Object))
          t1 = false;
        else
          t1 = true;
      else
        t1 = true;
      if (t1)
        asFn = A._asTop;
      else if (testRti === type$.Object)
        asFn = A._asObject;
      else {
        t1 = A.isNullable(testRti);
        if (t1)
          asFn = A._generalNullableAsCheckImplementation;
      }
      testRti._as = asFn;
      return testRti._as(object);
    },
    _nullIs(testRti) {
      var t1,
        kind = testRti._kind;
      if (!A.isStrongTopType(testRti))
        if (!(testRti === type$.legacy_Object))
          if (!(testRti === type$.legacy_Never))
            if (kind !== 7)
              if (!(kind === 6 && A._nullIs(testRti._primary)))
                t1 = kind === 8 && A._nullIs(testRti._primary) || testRti === type$.Null || testRti === type$.JSNull;
              else
                t1 = true;
            else
              t1 = true;
          else
            t1 = true;
        else
          t1 = true;
      else
        t1 = true;
      return t1;
    },
    _generalIsTestImplementation(object) {
      var testRti = this;
      if (object == null)
        return A._nullIs(testRti);
      return A._isSubtype(init.typeUniverse, A.instanceOrFunctionType(object, testRti), null, testRti, null);
    },
    _generalNullableIsTestImplementation(object) {
      if (object == null)
        return true;
      return this._primary._is(object);
    },
    _isTestViaProperty(object) {
      var tag, testRti = this;
      if (object == null)
        return A._nullIs(testRti);
      tag = testRti._specializedTestResource;
      if (object instanceof A.Object)
        return !!object[tag];
      return !!J.getInterceptor$(object)[tag];
    },
    _isListTestViaProperty(object) {
      var tag, testRti = this;
      if (object == null)
        return A._nullIs(testRti);
      if (typeof object != "object")
        return false;
      if (Array.isArray(object))
        return true;
      tag = testRti._specializedTestResource;
      if (object instanceof A.Object)
        return !!object[tag];
      return !!J.getInterceptor$(object)[tag];
    },
    _generalAsCheckImplementation(object) {
      var t1, testRti = this;
      if (object == null) {
        t1 = A.isNullable(testRti);
        if (t1)
          return object;
      } else if (testRti._is(object))
        return object;
      A._failedAsCheck(object, testRti);
    },
    _generalNullableAsCheckImplementation(object) {
      var testRti = this;
      if (object == null)
        return object;
      else if (testRti._is(object))
        return object;
      A._failedAsCheck(object, testRti);
    },
    _failedAsCheck(object, testRti) {
      throw A.wrapException(A._TypeError$fromMessage(A._Error_compose(object, A.instanceOrFunctionType(object, testRti), A._rtiToString(testRti, null))));
    },
    _Error_compose(object, objectRti, checkedTypeDescription) {
      var objectDescription = A.Error_safeToString(object);
      return objectDescription + ": type '" + A._rtiToString(objectRti == null ? A.instanceType(object) : objectRti, null) + "' is not a subtype of type '" + checkedTypeDescription + "'";
    },
    _TypeError$fromMessage(message) {
      return new A._TypeError("TypeError: " + message);
    },
    _TypeError__TypeError$forType(object, type) {
      return new A._TypeError("TypeError: " + A._Error_compose(object, null, type));
    },
    _isObject(object) {
      return object != null;
    },
    _asObject(object) {
      if (object != null)
        return object;
      throw A.wrapException(A._TypeError__TypeError$forType(object, "Object"));
    },
    _isTop(object) {
      return true;
    },
    _asTop(object) {
      return object;
    },
    _isBool(object) {
      return true === object || false === object;
    },
    _asBool(object) {
      if (true === object)
        return true;
      if (false === object)
        return false;
      throw A.wrapException(A._TypeError__TypeError$forType(object, "bool"));
    },
    _asBoolS(object) {
      if (true === object)
        return true;
      if (false === object)
        return false;
      if (object == null)
        return object;
      throw A.wrapException(A._TypeError__TypeError$forType(object, "bool"));
    },
    _asBoolQ(object) {
      if (true === object)
        return true;
      if (false === object)
        return false;
      if (object == null)
        return object;
      throw A.wrapException(A._TypeError__TypeError$forType(object, "bool?"));
    },
    _asDouble(object) {
      if (typeof object == "number")
        return object;
      throw A.wrapException(A._TypeError__TypeError$forType(object, "double"));
    },
    _asDoubleS(object) {
      if (typeof object == "number")
        return object;
      if (object == null)
        return object;
      throw A.wrapException(A._TypeError__TypeError$forType(object, "double"));
    },
    _asDoubleQ(object) {
      if (typeof object == "number")
        return object;
      if (object == null)
        return object;
      throw A.wrapException(A._TypeError__TypeError$forType(object, "double?"));
    },
    _isInt(object) {
      return typeof object == "number" && Math.floor(object) === object;
    },
    _asInt(object) {
      if (typeof object == "number" && Math.floor(object) === object)
        return object;
      throw A.wrapException(A._TypeError__TypeError$forType(object, "int"));
    },
    _asIntS(object) {
      if (typeof object == "number" && Math.floor(object) === object)
        return object;
      if (object == null)
        return object;
      throw A.wrapException(A._TypeError__TypeError$forType(object, "int"));
    },
    _asIntQ(object) {
      if (typeof object == "number" && Math.floor(object) === object)
        return object;
      if (object == null)
        return object;
      throw A.wrapException(A._TypeError__TypeError$forType(object, "int?"));
    },
    _isNum(object) {
      return typeof object == "number";
    },
    _asNum(object) {
      if (typeof object == "number")
        return object;
      throw A.wrapException(A._TypeError__TypeError$forType(object, "num"));
    },
    _asNumS(object) {
      if (typeof object == "number")
        return object;
      if (object == null)
        return object;
      throw A.wrapException(A._TypeError__TypeError$forType(object, "num"));
    },
    _asNumQ(object) {
      if (typeof object == "number")
        return object;
      if (object == null)
        return object;
      throw A.wrapException(A._TypeError__TypeError$forType(object, "num?"));
    },
    _isString(object) {
      return typeof object == "string";
    },
    _asString(object) {
      if (typeof object == "string")
        return object;
      throw A.wrapException(A._TypeError__TypeError$forType(object, "String"));
    },
    _asStringS(object) {
      if (typeof object == "string")
        return object;
      if (object == null)
        return object;
      throw A.wrapException(A._TypeError__TypeError$forType(object, "String"));
    },
    _asStringQ(object) {
      if (typeof object == "string")
        return object;
      if (object == null)
        return object;
      throw A.wrapException(A._TypeError__TypeError$forType(object, "String?"));
    },
    _rtiArrayToString(array, genericContext) {
      var s, sep, i;
      for (s = "", sep = "", i = 0; i < array.length; ++i, sep = ", ")
        s += sep + A._rtiToString(array[i], genericContext);
      return s;
    },
    _recordRtiToString(recordType, genericContext) {
      var fieldCount, names, namesIndex, s, comma, i,
        partialShape = recordType._primary,
        fields = recordType._rest;
      if ("" === partialShape)
        return "(" + A._rtiArrayToString(fields, genericContext) + ")";
      fieldCount = fields.length;
      names = partialShape.split(",");
      namesIndex = names.length - fieldCount;
      for (s = "(", comma = "", i = 0; i < fieldCount; ++i, comma = ", ") {
        s += comma;
        if (namesIndex === 0)
          s += "{";
        s += A._rtiToString(fields[i], genericContext);
        if (namesIndex >= 0)
          s += " " + names[namesIndex];
        ++namesIndex;
      }
      return s + "})";
    },
    _functionRtiToString(functionType, genericContext, bounds) {
      var boundsLength, outerContextLength, offset, i, t1, t2, typeParametersText, typeSep, t3, t4, boundRti, kind, parameters, requiredPositional, requiredPositionalLength, optionalPositional, optionalPositionalLength, named, namedLength, returnTypeText, argumentsText, sep, _s2_ = ", ";
      if (bounds != null) {
        boundsLength = bounds.length;
        if (genericContext == null) {
          genericContext = A._setArrayType([], type$.JSArray_String);
          outerContextLength = null;
        } else
          outerContextLength = genericContext.length;
        offset = genericContext.length;
        for (i = boundsLength; i > 0; --i)
          B.JSArray_methods.add$1(genericContext, "T" + (offset + i));
        for (t1 = type$.nullable_Object, t2 = type$.legacy_Object, typeParametersText = "<", typeSep = "", i = 0; i < boundsLength; ++i, typeSep = _s2_) {
          t3 = genericContext.length;
          t4 = t3 - 1 - i;
          if (!(t4 >= 0))
            return A.ioore(genericContext, t4);
          typeParametersText = B.JSString_methods.$add(typeParametersText + typeSep, genericContext[t4]);
          boundRti = bounds[i];
          kind = boundRti._kind;
          if (!(kind === 2 || kind === 3 || kind === 4 || kind === 5 || boundRti === t1))
            if (!(boundRti === t2))
              t3 = false;
            else
              t3 = true;
          else
            t3 = true;
          if (!t3)
            typeParametersText += " extends " + A._rtiToString(boundRti, genericContext);
        }
        typeParametersText += ">";
      } else {
        typeParametersText = "";
        outerContextLength = null;
      }
      t1 = functionType._primary;
      parameters = functionType._rest;
      requiredPositional = parameters._requiredPositional;
      requiredPositionalLength = requiredPositional.length;
      optionalPositional = parameters._optionalPositional;
      optionalPositionalLength = optionalPositional.length;
      named = parameters._named;
      namedLength = named.length;
      returnTypeText = A._rtiToString(t1, genericContext);
      for (argumentsText = "", sep = "", i = 0; i < requiredPositionalLength; ++i, sep = _s2_)
        argumentsText += sep + A._rtiToString(requiredPositional[i], genericContext);
      if (optionalPositionalLength > 0) {
        argumentsText += sep + "[";
        for (sep = "", i = 0; i < optionalPositionalLength; ++i, sep = _s2_)
          argumentsText += sep + A._rtiToString(optionalPositional[i], genericContext);
        argumentsText += "]";
      }
      if (namedLength > 0) {
        argumentsText += sep + "{";
        for (sep = "", i = 0; i < namedLength; i += 3, sep = _s2_) {
          argumentsText += sep;
          if (named[i + 1])
            argumentsText += "required ";
          argumentsText += A._rtiToString(named[i + 2], genericContext) + " " + named[i];
        }
        argumentsText += "}";
      }
      if (outerContextLength != null) {
        genericContext.toString;
        genericContext.length = outerContextLength;
      }
      return typeParametersText + "(" + argumentsText + ") => " + returnTypeText;
    },
    _rtiToString(rti, genericContext) {
      var s, questionArgument, argumentKind, $name, $arguments, t1, t2,
        kind = rti._kind;
      if (kind === 5)
        return "erased";
      if (kind === 2)
        return "dynamic";
      if (kind === 3)
        return "void";
      if (kind === 1)
        return "Never";
      if (kind === 4)
        return "any";
      if (kind === 6) {
        s = A._rtiToString(rti._primary, genericContext);
        return s;
      }
      if (kind === 7) {
        questionArgument = rti._primary;
        s = A._rtiToString(questionArgument, genericContext);
        argumentKind = questionArgument._kind;
        return (argumentKind === 12 || argumentKind === 13 ? "(" + s + ")" : s) + "?";
      }
      if (kind === 8)
        return "FutureOr<" + A._rtiToString(rti._primary, genericContext) + ">";
      if (kind === 9) {
        $name = A._unminifyOrTag(rti._primary);
        $arguments = rti._rest;
        return $arguments.length > 0 ? $name + ("<" + A._rtiArrayToString($arguments, genericContext) + ">") : $name;
      }
      if (kind === 11)
        return A._recordRtiToString(rti, genericContext);
      if (kind === 12)
        return A._functionRtiToString(rti, genericContext, null);
      if (kind === 13)
        return A._functionRtiToString(rti._primary, genericContext, rti._rest);
      if (kind === 14) {
        t1 = rti._primary;
        t2 = genericContext.length;
        t1 = t2 - 1 - t1;
        if (!(t1 >= 0 && t1 < t2))
          return A.ioore(genericContext, t1);
        return genericContext[t1];
      }
      return "?";
    },
    _unminifyOrTag(rawClassName) {
      var preserved = init.mangledGlobalNames[rawClassName];
      if (preserved != null)
        return preserved;
      return rawClassName;
    },
    _Universe_findRule(universe, targetType) {
      var rule = universe.tR[targetType];
      for (; typeof rule == "string";)
        rule = universe.tR[rule];
      return rule;
    },
    _Universe_findErasedType(universe, cls) {
      var $length, erased, $arguments, i, $interface,
        t1 = universe.eT,
        probe = t1[cls];
      if (probe == null)
        return A._Universe_eval(universe, cls, false);
      else if (typeof probe == "number") {
        $length = probe;
        erased = A._Universe__lookupTerminalRti(universe, 5, "#");
        $arguments = A._Utils_newArrayOrEmpty($length);
        for (i = 0; i < $length; ++i)
          $arguments[i] = erased;
        $interface = A._Universe__lookupInterfaceRti(universe, cls, $arguments);
        t1[cls] = $interface;
        return $interface;
      } else
        return probe;
    },
    _Universe_addRules(universe, rules) {
      return A._Utils_objectAssign(universe.tR, rules);
    },
    _Universe_addErasedTypes(universe, types) {
      return A._Utils_objectAssign(universe.eT, types);
    },
    _Universe_eval(universe, recipe, normalize) {
      var rti,
        t1 = universe.eC,
        probe = t1.get(recipe);
      if (probe != null)
        return probe;
      rti = A._Parser_parse(A._Parser_create(universe, null, recipe, normalize));
      t1.set(recipe, rti);
      return rti;
    },
    _Universe_evalInEnvironment(universe, environment, recipe) {
      var probe, rti,
        cache = environment._evalCache;
      if (cache == null)
        cache = environment._evalCache = new Map();
      probe = cache.get(recipe);
      if (probe != null)
        return probe;
      rti = A._Parser_parse(A._Parser_create(universe, environment, recipe, true));
      cache.set(recipe, rti);
      return rti;
    },
    _Universe_bind(universe, environment, argumentsRti) {
      var argumentsRecipe, probe, rti,
        cache = environment._bindCache;
      if (cache == null)
        cache = environment._bindCache = new Map();
      argumentsRecipe = argumentsRti._canonicalRecipe;
      probe = cache.get(argumentsRecipe);
      if (probe != null)
        return probe;
      rti = A._Universe__lookupBindingRti(universe, environment, argumentsRti._kind === 10 ? argumentsRti._rest : [argumentsRti]);
      cache.set(argumentsRecipe, rti);
      return rti;
    },
    _Universe__installTypeTests(universe, rti) {
      rti._as = A._installSpecializedAsCheck;
      rti._is = A._installSpecializedIsTest;
      return rti;
    },
    _Universe__lookupTerminalRti(universe, kind, key) {
      var rti, t1,
        probe = universe.eC.get(key);
      if (probe != null)
        return probe;
      rti = new A.Rti(null, null);
      rti._kind = kind;
      rti._canonicalRecipe = key;
      t1 = A._Universe__installTypeTests(universe, rti);
      universe.eC.set(key, t1);
      return t1;
    },
    _Universe__lookupStarRti(universe, baseType, normalize) {
      var t1,
        key = baseType._canonicalRecipe + "*",
        probe = universe.eC.get(key);
      if (probe != null)
        return probe;
      t1 = A._Universe__createStarRti(universe, baseType, key, normalize);
      universe.eC.set(key, t1);
      return t1;
    },
    _Universe__createStarRti(universe, baseType, key, normalize) {
      var baseKind, t1, rti;
      if (normalize) {
        baseKind = baseType._kind;
        if (!A.isStrongTopType(baseType))
          t1 = baseType === type$.Null || baseType === type$.JSNull || baseKind === 7 || baseKind === 6;
        else
          t1 = true;
        if (t1)
          return baseType;
      }
      rti = new A.Rti(null, null);
      rti._kind = 6;
      rti._primary = baseType;
      rti._canonicalRecipe = key;
      return A._Universe__installTypeTests(universe, rti);
    },
    _Universe__lookupQuestionRti(universe, baseType, normalize) {
      var t1,
        key = baseType._canonicalRecipe + "?",
        probe = universe.eC.get(key);
      if (probe != null)
        return probe;
      t1 = A._Universe__createQuestionRti(universe, baseType, key, normalize);
      universe.eC.set(key, t1);
      return t1;
    },
    _Universe__createQuestionRti(universe, baseType, key, normalize) {
      var baseKind, t1, starArgument, rti;
      if (normalize) {
        baseKind = baseType._kind;
        if (!A.isStrongTopType(baseType))
          if (!(baseType === type$.Null || baseType === type$.JSNull))
            if (baseKind !== 7)
              t1 = baseKind === 8 && A.isNullable(baseType._primary);
            else
              t1 = true;
          else
            t1 = true;
        else
          t1 = true;
        if (t1)
          return baseType;
        else if (baseKind === 1 || baseType === type$.legacy_Never)
          return type$.Null;
        else if (baseKind === 6) {
          starArgument = baseType._primary;
          if (starArgument._kind === 8 && A.isNullable(starArgument._primary))
            return starArgument;
          else
            return A.Rti__getQuestionFromStar(universe, baseType);
        }
      }
      rti = new A.Rti(null, null);
      rti._kind = 7;
      rti._primary = baseType;
      rti._canonicalRecipe = key;
      return A._Universe__installTypeTests(universe, rti);
    },
    _Universe__lookupFutureOrRti(universe, baseType, normalize) {
      var t1,
        key = baseType._canonicalRecipe + "/",
        probe = universe.eC.get(key);
      if (probe != null)
        return probe;
      t1 = A._Universe__createFutureOrRti(universe, baseType, key, normalize);
      universe.eC.set(key, t1);
      return t1;
    },
    _Universe__createFutureOrRti(universe, baseType, key, normalize) {
      var t1, t2, rti;
      if (normalize) {
        t1 = baseType._kind;
        if (!A.isStrongTopType(baseType))
          if (!(baseType === type$.legacy_Object))
            t2 = false;
          else
            t2 = true;
        else
          t2 = true;
        if (t2 || baseType === type$.Object)
          return baseType;
        else if (t1 === 1)
          return A._Universe__lookupInterfaceRti(universe, "Future", [baseType]);
        else if (baseType === type$.Null || baseType === type$.JSNull)
          return type$.nullable_Future_Null;
      }
      rti = new A.Rti(null, null);
      rti._kind = 8;
      rti._primary = baseType;
      rti._canonicalRecipe = key;
      return A._Universe__installTypeTests(universe, rti);
    },
    _Universe__lookupGenericFunctionParameterRti(universe, index) {
      var rti, t1,
        key = "" + index + "^",
        probe = universe.eC.get(key);
      if (probe != null)
        return probe;
      rti = new A.Rti(null, null);
      rti._kind = 14;
      rti._primary = index;
      rti._canonicalRecipe = key;
      t1 = A._Universe__installTypeTests(universe, rti);
      universe.eC.set(key, t1);
      return t1;
    },
    _Universe__canonicalRecipeJoin($arguments) {
      var s, sep, i,
        $length = $arguments.length;
      for (s = "", sep = "", i = 0; i < $length; ++i, sep = ",")
        s += sep + $arguments[i]._canonicalRecipe;
      return s;
    },
    _Universe__canonicalRecipeJoinNamed($arguments) {
      var s, sep, i, t1, nameSep,
        $length = $arguments.length;
      for (s = "", sep = "", i = 0; i < $length; i += 3, sep = ",") {
        t1 = $arguments[i];
        nameSep = $arguments[i + 1] ? "!" : ":";
        s += sep + t1 + nameSep + $arguments[i + 2]._canonicalRecipe;
      }
      return s;
    },
    _Universe__lookupInterfaceRti(universe, $name, $arguments) {
      var probe, rti, t1,
        s = $name;
      if ($arguments.length > 0)
        s += "<" + A._Universe__canonicalRecipeJoin($arguments) + ">";
      probe = universe.eC.get(s);
      if (probe != null)
        return probe;
      rti = new A.Rti(null, null);
      rti._kind = 9;
      rti._primary = $name;
      rti._rest = $arguments;
      if ($arguments.length > 0)
        rti._precomputed1 = $arguments[0];
      rti._canonicalRecipe = s;
      t1 = A._Universe__installTypeTests(universe, rti);
      universe.eC.set(s, t1);
      return t1;
    },
    _Universe__lookupBindingRti(universe, base, $arguments) {
      var newBase, newArguments, key, probe, rti, t1;
      if (base._kind === 10) {
        newBase = base._primary;
        newArguments = base._rest.concat($arguments);
      } else {
        newArguments = $arguments;
        newBase = base;
      }
      key = newBase._canonicalRecipe + (";<" + A._Universe__canonicalRecipeJoin(newArguments) + ">");
      probe = universe.eC.get(key);
      if (probe != null)
        return probe;
      rti = new A.Rti(null, null);
      rti._kind = 10;
      rti._primary = newBase;
      rti._rest = newArguments;
      rti._canonicalRecipe = key;
      t1 = A._Universe__installTypeTests(universe, rti);
      universe.eC.set(key, t1);
      return t1;
    },
    _Universe__lookupRecordRti(universe, partialShapeTag, fields) {
      var rti, t1,
        key = "+" + (partialShapeTag + "(" + A._Universe__canonicalRecipeJoin(fields) + ")"),
        probe = universe.eC.get(key);
      if (probe != null)
        return probe;
      rti = new A.Rti(null, null);
      rti._kind = 11;
      rti._primary = partialShapeTag;
      rti._rest = fields;
      rti._canonicalRecipe = key;
      t1 = A._Universe__installTypeTests(universe, rti);
      universe.eC.set(key, t1);
      return t1;
    },
    _Universe__lookupFunctionRti(universe, returnType, parameters) {
      var sep, key, probe, rti, t1,
        s = returnType._canonicalRecipe,
        requiredPositional = parameters._requiredPositional,
        requiredPositionalLength = requiredPositional.length,
        optionalPositional = parameters._optionalPositional,
        optionalPositionalLength = optionalPositional.length,
        named = parameters._named,
        namedLength = named.length,
        recipe = "(" + A._Universe__canonicalRecipeJoin(requiredPositional);
      if (optionalPositionalLength > 0) {
        sep = requiredPositionalLength > 0 ? "," : "";
        recipe += sep + "[" + A._Universe__canonicalRecipeJoin(optionalPositional) + "]";
      }
      if (namedLength > 0) {
        sep = requiredPositionalLength > 0 ? "," : "";
        recipe += sep + "{" + A._Universe__canonicalRecipeJoinNamed(named) + "}";
      }
      key = s + (recipe + ")");
      probe = universe.eC.get(key);
      if (probe != null)
        return probe;
      rti = new A.Rti(null, null);
      rti._kind = 12;
      rti._primary = returnType;
      rti._rest = parameters;
      rti._canonicalRecipe = key;
      t1 = A._Universe__installTypeTests(universe, rti);
      universe.eC.set(key, t1);
      return t1;
    },
    _Universe__lookupGenericFunctionRti(universe, baseFunctionType, bounds, normalize) {
      var t1,
        key = baseFunctionType._canonicalRecipe + ("<" + A._Universe__canonicalRecipeJoin(bounds) + ">"),
        probe = universe.eC.get(key);
      if (probe != null)
        return probe;
      t1 = A._Universe__createGenericFunctionRti(universe, baseFunctionType, bounds, key, normalize);
      universe.eC.set(key, t1);
      return t1;
    },
    _Universe__createGenericFunctionRti(universe, baseFunctionType, bounds, key, normalize) {
      var $length, typeArguments, count, i, bound, substitutedBase, substitutedBounds, rti;
      if (normalize) {
        $length = bounds.length;
        typeArguments = A._Utils_newArrayOrEmpty($length);
        for (count = 0, i = 0; i < $length; ++i) {
          bound = bounds[i];
          if (bound._kind === 1) {
            typeArguments[i] = bound;
            ++count;
          }
        }
        if (count > 0) {
          substitutedBase = A._substitute(universe, baseFunctionType, typeArguments, 0);
          substitutedBounds = A._substituteArray(universe, bounds, typeArguments, 0);
          return A._Universe__lookupGenericFunctionRti(universe, substitutedBase, substitutedBounds, bounds !== substitutedBounds);
        }
      }
      rti = new A.Rti(null, null);
      rti._kind = 13;
      rti._primary = baseFunctionType;
      rti._rest = bounds;
      rti._canonicalRecipe = key;
      return A._Universe__installTypeTests(universe, rti);
    },
    _Parser_create(universe, environment, recipe, normalize) {
      return {u: universe, e: environment, r: recipe, s: [], p: 0, n: normalize};
    },
    _Parser_parse(parser) {
      var t2, i, ch, t3, array, head, base, end, item,
        source = parser.r,
        t1 = parser.s;
      for (t2 = source.length, i = 0; i < t2;) {
        ch = source.charCodeAt(i);
        if (ch >= 48 && ch <= 57)
          i = A._Parser_handleDigit(i + 1, ch, source, t1);
        else if ((((ch | 32) >>> 0) - 97 & 65535) < 26 || ch === 95 || ch === 36 || ch === 124)
          i = A._Parser_handleIdentifier(parser, i, source, t1, false);
        else if (ch === 46)
          i = A._Parser_handleIdentifier(parser, i, source, t1, true);
        else {
          ++i;
          switch (ch) {
            case 44:
              break;
            case 58:
              t1.push(false);
              break;
            case 33:
              t1.push(true);
              break;
            case 59:
              t1.push(A._Parser_toType(parser.u, parser.e, t1.pop()));
              break;
            case 94:
              t1.push(A._Universe__lookupGenericFunctionParameterRti(parser.u, t1.pop()));
              break;
            case 35:
              t1.push(A._Universe__lookupTerminalRti(parser.u, 5, "#"));
              break;
            case 64:
              t1.push(A._Universe__lookupTerminalRti(parser.u, 2, "@"));
              break;
            case 126:
              t1.push(A._Universe__lookupTerminalRti(parser.u, 3, "~"));
              break;
            case 60:
              t1.push(parser.p);
              parser.p = t1.length;
              break;
            case 62:
              t3 = parser.u;
              array = t1.splice(parser.p);
              A._Parser_toTypes(parser.u, parser.e, array);
              parser.p = t1.pop();
              head = t1.pop();
              if (typeof head == "string")
                t1.push(A._Universe__lookupInterfaceRti(t3, head, array));
              else {
                base = A._Parser_toType(t3, parser.e, head);
                switch (base._kind) {
                  case 12:
                    t1.push(A._Universe__lookupGenericFunctionRti(t3, base, array, parser.n));
                    break;
                  default:
                    t1.push(A._Universe__lookupBindingRti(t3, base, array));
                    break;
                }
              }
              break;
            case 38:
              A._Parser_handleExtendedOperations(parser, t1);
              break;
            case 42:
              t3 = parser.u;
              t1.push(A._Universe__lookupStarRti(t3, A._Parser_toType(t3, parser.e, t1.pop()), parser.n));
              break;
            case 63:
              t3 = parser.u;
              t1.push(A._Universe__lookupQuestionRti(t3, A._Parser_toType(t3, parser.e, t1.pop()), parser.n));
              break;
            case 47:
              t3 = parser.u;
              t1.push(A._Universe__lookupFutureOrRti(t3, A._Parser_toType(t3, parser.e, t1.pop()), parser.n));
              break;
            case 40:
              t1.push(-3);
              t1.push(parser.p);
              parser.p = t1.length;
              break;
            case 41:
              A._Parser_handleArguments(parser, t1);
              break;
            case 91:
              t1.push(parser.p);
              parser.p = t1.length;
              break;
            case 93:
              array = t1.splice(parser.p);
              A._Parser_toTypes(parser.u, parser.e, array);
              parser.p = t1.pop();
              t1.push(array);
              t1.push(-1);
              break;
            case 123:
              t1.push(parser.p);
              parser.p = t1.length;
              break;
            case 125:
              array = t1.splice(parser.p);
              A._Parser_toTypesNamed(parser.u, parser.e, array);
              parser.p = t1.pop();
              t1.push(array);
              t1.push(-2);
              break;
            case 43:
              end = source.indexOf("(", i);
              t1.push(source.substring(i, end));
              t1.push(-4);
              t1.push(parser.p);
              parser.p = t1.length;
              i = end + 1;
              break;
            default:
              throw "Bad character " + ch;
          }
        }
      }
      item = t1.pop();
      return A._Parser_toType(parser.u, parser.e, item);
    },
    _Parser_handleDigit(i, digit, source, stack) {
      var t1, ch,
        value = digit - 48;
      for (t1 = source.length; i < t1; ++i) {
        ch = source.charCodeAt(i);
        if (!(ch >= 48 && ch <= 57))
          break;
        value = value * 10 + (ch - 48);
      }
      stack.push(value);
      return i;
    },
    _Parser_handleIdentifier(parser, start, source, stack, hasPeriod) {
      var t1, ch, t2, string, environment, recipe,
        i = start + 1;
      for (t1 = source.length; i < t1; ++i) {
        ch = source.charCodeAt(i);
        if (ch === 46) {
          if (hasPeriod)
            break;
          hasPeriod = true;
        } else {
          if (!((((ch | 32) >>> 0) - 97 & 65535) < 26 || ch === 95 || ch === 36 || ch === 124))
            t2 = ch >= 48 && ch <= 57;
          else
            t2 = true;
          if (!t2)
            break;
        }
      }
      string = source.substring(start, i);
      if (hasPeriod) {
        t1 = parser.u;
        environment = parser.e;
        if (environment._kind === 10)
          environment = environment._primary;
        recipe = A._Universe_findRule(t1, environment._primary)[string];
        if (recipe == null)
          A.throwExpression('No "' + string + '" in "' + A.Rti__getCanonicalRecipe(environment) + '"');
        stack.push(A._Universe_evalInEnvironment(t1, environment, recipe));
      } else
        stack.push(string);
      return i;
    },
    _Parser_handleArguments(parser, stack) {
      var optionalPositional, named, requiredPositional, returnType, parameters, _null = null,
        t1 = parser.u,
        head = stack.pop();
      if (typeof head == "number")
        switch (head) {
          case -1:
            optionalPositional = stack.pop();
            named = _null;
            break;
          case -2:
            named = stack.pop();
            optionalPositional = _null;
            break;
          default:
            stack.push(head);
            named = _null;
            optionalPositional = named;
            break;
        }
      else {
        stack.push(head);
        named = _null;
        optionalPositional = named;
      }
      requiredPositional = A._Parser_collectArray(parser, stack);
      head = stack.pop();
      switch (head) {
        case -3:
          head = stack.pop();
          if (optionalPositional == null)
            optionalPositional = t1.sEA;
          if (named == null)
            named = t1.sEA;
          returnType = A._Parser_toType(t1, parser.e, head);
          parameters = new A._FunctionParameters();
          parameters._requiredPositional = requiredPositional;
          parameters._optionalPositional = optionalPositional;
          parameters._named = named;
          stack.push(A._Universe__lookupFunctionRti(t1, returnType, parameters));
          return;
        case -4:
          stack.push(A._Universe__lookupRecordRti(t1, stack.pop(), requiredPositional));
          return;
        default:
          throw A.wrapException(A.AssertionError$("Unexpected state under `()`: " + A.S(head)));
      }
    },
    _Parser_handleExtendedOperations(parser, stack) {
      var $top = stack.pop();
      if (0 === $top) {
        stack.push(A._Universe__lookupTerminalRti(parser.u, 1, "0&"));
        return;
      }
      if (1 === $top) {
        stack.push(A._Universe__lookupTerminalRti(parser.u, 4, "1&"));
        return;
      }
      throw A.wrapException(A.AssertionError$("Unexpected extended operation " + A.S($top)));
    },
    _Parser_collectArray(parser, stack) {
      var array = stack.splice(parser.p);
      A._Parser_toTypes(parser.u, parser.e, array);
      parser.p = stack.pop();
      return array;
    },
    _Parser_toType(universe, environment, item) {
      if (typeof item == "string")
        return A._Universe__lookupInterfaceRti(universe, item, universe.sEA);
      else if (typeof item == "number") {
        environment.toString;
        return A._Parser_indexToType(universe, environment, item);
      } else
        return item;
    },
    _Parser_toTypes(universe, environment, items) {
      var i,
        $length = items.length;
      for (i = 0; i < $length; ++i)
        items[i] = A._Parser_toType(universe, environment, items[i]);
    },
    _Parser_toTypesNamed(universe, environment, items) {
      var i,
        $length = items.length;
      for (i = 2; i < $length; i += 3)
        items[i] = A._Parser_toType(universe, environment, items[i]);
    },
    _Parser_indexToType(universe, environment, index) {
      var typeArguments, len,
        kind = environment._kind;
      if (kind === 10) {
        if (index === 0)
          return environment._primary;
        typeArguments = environment._rest;
        len = typeArguments.length;
        if (index <= len)
          return typeArguments[index - 1];
        index -= len;
        environment = environment._primary;
        kind = environment._kind;
      } else if (index === 0)
        return environment;
      if (kind !== 9)
        throw A.wrapException(A.AssertionError$("Indexed base must be an interface type"));
      typeArguments = environment._rest;
      if (index <= typeArguments.length)
        return typeArguments[index - 1];
      throw A.wrapException(A.AssertionError$("Bad index " + index + " for " + environment.toString$0(0)));
    },
    _isSubtype(universe, s, sEnv, t, tEnv) {
      var t1, sKind, leftTypeVariable, tKind, sBounds, tBounds, sLength, i, sBound, tBound;
      if (s === t)
        return true;
      if (!A.isStrongTopType(t))
        if (!(t === type$.legacy_Object))
          t1 = false;
        else
          t1 = true;
      else
        t1 = true;
      if (t1)
        return true;
      sKind = s._kind;
      if (sKind === 4)
        return true;
      if (A.isStrongTopType(s))
        return false;
      if (s._kind !== 1)
        t1 = false;
      else
        t1 = true;
      if (t1)
        return true;
      leftTypeVariable = sKind === 14;
      if (leftTypeVariable)
        if (A._isSubtype(universe, sEnv[s._primary], sEnv, t, tEnv))
          return true;
      tKind = t._kind;
      t1 = s === type$.Null || s === type$.JSNull;
      if (t1) {
        if (tKind === 8)
          return A._isSubtype(universe, s, sEnv, t._primary, tEnv);
        return t === type$.Null || t === type$.JSNull || tKind === 7 || tKind === 6;
      }
      if (t === type$.Object) {
        if (sKind === 8)
          return A._isSubtype(universe, s._primary, sEnv, t, tEnv);
        if (sKind === 6)
          return A._isSubtype(universe, s._primary, sEnv, t, tEnv);
        return sKind !== 7;
      }
      if (sKind === 6)
        return A._isSubtype(universe, s._primary, sEnv, t, tEnv);
      if (tKind === 6) {
        t1 = A.Rti__getQuestionFromStar(universe, t);
        return A._isSubtype(universe, s, sEnv, t1, tEnv);
      }
      if (sKind === 8) {
        if (!A._isSubtype(universe, s._primary, sEnv, t, tEnv))
          return false;
        return A._isSubtype(universe, A.Rti__getFutureFromFutureOr(universe, s), sEnv, t, tEnv);
      }
      if (sKind === 7) {
        t1 = A._isSubtype(universe, type$.Null, sEnv, t, tEnv);
        return t1 && A._isSubtype(universe, s._primary, sEnv, t, tEnv);
      }
      if (tKind === 8) {
        if (A._isSubtype(universe, s, sEnv, t._primary, tEnv))
          return true;
        return A._isSubtype(universe, s, sEnv, A.Rti__getFutureFromFutureOr(universe, t), tEnv);
      }
      if (tKind === 7) {
        t1 = A._isSubtype(universe, s, sEnv, type$.Null, tEnv);
        return t1 || A._isSubtype(universe, s, sEnv, t._primary, tEnv);
      }
      if (leftTypeVariable)
        return false;
      t1 = sKind !== 12;
      if ((!t1 || sKind === 13) && t === type$.Function)
        return true;
      if (tKind === 13) {
        if (s === type$.JavaScriptFunction)
          return true;
        if (sKind !== 13)
          return false;
        sBounds = s._rest;
        tBounds = t._rest;
        sLength = sBounds.length;
        if (sLength !== tBounds.length)
          return false;
        sEnv = sEnv == null ? sBounds : sBounds.concat(sEnv);
        tEnv = tEnv == null ? tBounds : tBounds.concat(tEnv);
        for (i = 0; i < sLength; ++i) {
          sBound = sBounds[i];
          tBound = tBounds[i];
          if (!A._isSubtype(universe, sBound, sEnv, tBound, tEnv) || !A._isSubtype(universe, tBound, tEnv, sBound, sEnv))
            return false;
        }
        return A._isFunctionSubtype(universe, s._primary, sEnv, t._primary, tEnv);
      }
      if (tKind === 12) {
        if (s === type$.JavaScriptFunction)
          return true;
        if (t1)
          return false;
        return A._isFunctionSubtype(universe, s, sEnv, t, tEnv);
      }
      if (sKind === 9) {
        if (tKind !== 9)
          return false;
        return A._isInterfaceSubtype(universe, s, sEnv, t, tEnv);
      }
      t1 = sKind === 11;
      if (t1 && t === type$.Record)
        return true;
      if (t1 && tKind === 11)
        return A._isRecordSubtype(universe, s, sEnv, t, tEnv);
      return false;
    },
    _isFunctionSubtype(universe, s, sEnv, t, tEnv) {
      var sParameters, tParameters, sRequiredPositional, tRequiredPositional, sRequiredPositionalLength, tRequiredPositionalLength, requiredPositionalDelta, sOptionalPositional, tOptionalPositional, sOptionalPositionalLength, tOptionalPositionalLength, i, t1, sNamed, tNamed, sNamedLength, tNamedLength, sIndex, tIndex, tName, sName, sIsRequired;
      if (!A._isSubtype(universe, s._primary, sEnv, t._primary, tEnv))
        return false;
      sParameters = s._rest;
      tParameters = t._rest;
      sRequiredPositional = sParameters._requiredPositional;
      tRequiredPositional = tParameters._requiredPositional;
      sRequiredPositionalLength = sRequiredPositional.length;
      tRequiredPositionalLength = tRequiredPositional.length;
      if (sRequiredPositionalLength > tRequiredPositionalLength)
        return false;
      requiredPositionalDelta = tRequiredPositionalLength - sRequiredPositionalLength;
      sOptionalPositional = sParameters._optionalPositional;
      tOptionalPositional = tParameters._optionalPositional;
      sOptionalPositionalLength = sOptionalPositional.length;
      tOptionalPositionalLength = tOptionalPositional.length;
      if (sRequiredPositionalLength + sOptionalPositionalLength < tRequiredPositionalLength + tOptionalPositionalLength)
        return false;
      for (i = 0; i < sRequiredPositionalLength; ++i) {
        t1 = sRequiredPositional[i];
        if (!A._isSubtype(universe, tRequiredPositional[i], tEnv, t1, sEnv))
          return false;
      }
      for (i = 0; i < requiredPositionalDelta; ++i) {
        t1 = sOptionalPositional[i];
        if (!A._isSubtype(universe, tRequiredPositional[sRequiredPositionalLength + i], tEnv, t1, sEnv))
          return false;
      }
      for (i = 0; i < tOptionalPositionalLength; ++i) {
        t1 = sOptionalPositional[requiredPositionalDelta + i];
        if (!A._isSubtype(universe, tOptionalPositional[i], tEnv, t1, sEnv))
          return false;
      }
      sNamed = sParameters._named;
      tNamed = tParameters._named;
      sNamedLength = sNamed.length;
      tNamedLength = tNamed.length;
      for (sIndex = 0, tIndex = 0; tIndex < tNamedLength; tIndex += 3) {
        tName = tNamed[tIndex];
        for (; true;) {
          if (sIndex >= sNamedLength)
            return false;
          sName = sNamed[sIndex];
          sIndex += 3;
          if (tName < sName)
            return false;
          sIsRequired = sNamed[sIndex - 2];
          if (sName < tName) {
            if (sIsRequired)
              return false;
            continue;
          }
          t1 = tNamed[tIndex + 1];
          if (sIsRequired && !t1)
            return false;
          t1 = sNamed[sIndex - 1];
          if (!A._isSubtype(universe, tNamed[tIndex + 2], tEnv, t1, sEnv))
            return false;
          break;
        }
      }
      for (; sIndex < sNamedLength;) {
        if (sNamed[sIndex + 1])
          return false;
        sIndex += 3;
      }
      return true;
    },
    _isInterfaceSubtype(universe, s, sEnv, t, tEnv) {
      var rule, recipes, $length, supertypeArgs, i, t1, t2,
        sName = s._primary,
        tName = t._primary;
      for (; sName !== tName;) {
        rule = universe.tR[sName];
        if (rule == null)
          return false;
        if (typeof rule == "string") {
          sName = rule;
          continue;
        }
        recipes = rule[tName];
        if (recipes == null)
          return false;
        $length = recipes.length;
        supertypeArgs = $length > 0 ? new Array($length) : init.typeUniverse.sEA;
        for (i = 0; i < $length; ++i)
          supertypeArgs[i] = A._Universe_evalInEnvironment(universe, s, recipes[i]);
        return A._areArgumentsSubtypes(universe, supertypeArgs, null, sEnv, t._rest, tEnv);
      }
      t1 = s._rest;
      t2 = t._rest;
      return A._areArgumentsSubtypes(universe, t1, null, sEnv, t2, tEnv);
    },
    _areArgumentsSubtypes(universe, sArgs, sVariances, sEnv, tArgs, tEnv) {
      var i, t1, t2,
        $length = sArgs.length;
      for (i = 0; i < $length; ++i) {
        t1 = sArgs[i];
        t2 = tArgs[i];
        if (!A._isSubtype(universe, t1, sEnv, t2, tEnv))
          return false;
      }
      return true;
    },
    _isRecordSubtype(universe, s, sEnv, t, tEnv) {
      var i,
        sFields = s._rest,
        tFields = t._rest,
        sCount = sFields.length;
      if (sCount !== tFields.length)
        return false;
      if (s._primary !== t._primary)
        return false;
      for (i = 0; i < sCount; ++i)
        if (!A._isSubtype(universe, sFields[i], sEnv, tFields[i], tEnv))
          return false;
      return true;
    },
    isNullable(t) {
      var t1,
        kind = t._kind;
      if (!(t === type$.Null || t === type$.JSNull))
        if (!A.isStrongTopType(t))
          if (kind !== 7)
            if (!(kind === 6 && A.isNullable(t._primary)))
              t1 = kind === 8 && A.isNullable(t._primary);
            else
              t1 = true;
          else
            t1 = true;
        else
          t1 = true;
      else
        t1 = true;
      return t1;
    },
    isTopType(t) {
      var t1;
      if (!A.isStrongTopType(t))
        if (!(t === type$.legacy_Object))
          t1 = false;
        else
          t1 = true;
      else
        t1 = true;
      return t1;
    },
    isStrongTopType(t) {
      var kind = t._kind;
      return kind === 2 || kind === 3 || kind === 4 || kind === 5 || t === type$.nullable_Object;
    },
    _Utils_objectAssign(o, other) {
      var i, key,
        keys = Object.keys(other),
        $length = keys.length;
      for (i = 0; i < $length; ++i) {
        key = keys[i];
        o[key] = other[key];
      }
    },
    _Utils_newArrayOrEmpty($length) {
      return $length > 0 ? new Array($length) : init.typeUniverse.sEA;
    },
    Rti: function Rti(t0, t1) {
      var _ = this;
      _._as = t0;
      _._is = t1;
      _._cachedRuntimeType = _._specializedTestResource = _._precomputed1 = null;
      _._kind = 0;
      _._canonicalRecipe = _._bindCache = _._evalCache = _._rest = _._primary = null;
    },
    _FunctionParameters: function _FunctionParameters() {
      this._named = this._optionalPositional = this._requiredPositional = null;
    },
    _Error: function _Error() {
    },
    _TypeError: function _TypeError(t0) {
      this.__rti$_message = t0;
    },
    _AsyncRun__initializeScheduleImmediate() {
      var div, span, t1 = {};
      if (self.scheduleImmediate != null)
        return A.async__AsyncRun__scheduleImmediateJsOverride$closure();
      if (self.MutationObserver != null && self.document != null) {
        div = self.document.createElement("div");
        span = self.document.createElement("span");
        t1.storedCallback = null;
        new self.MutationObserver(A.convertDartClosureToJS(new A._AsyncRun__initializeScheduleImmediate_internalCallback(t1), 1)).observe(div, {childList: true});
        return new A._AsyncRun__initializeScheduleImmediate_closure(t1, div, span);
      } else if (self.setImmediate != null)
        return A.async__AsyncRun__scheduleImmediateWithSetImmediate$closure();
      return A.async__AsyncRun__scheduleImmediateWithTimer$closure();
    },
    _AsyncRun__scheduleImmediateJsOverride(callback) {
      self.scheduleImmediate(A.convertDartClosureToJS(new A._AsyncRun__scheduleImmediateJsOverride_internalCallback(type$.void_Function._as(callback)), 0));
    },
    _AsyncRun__scheduleImmediateWithSetImmediate(callback) {
      self.setImmediate(A.convertDartClosureToJS(new A._AsyncRun__scheduleImmediateWithSetImmediate_internalCallback(type$.void_Function._as(callback)), 0));
    },
    _AsyncRun__scheduleImmediateWithTimer(callback) {
      type$.void_Function._as(callback);
      A._TimerImpl$(0, callback);
    },
    _TimerImpl$(milliseconds, callback) {
      var t1 = new A._TimerImpl();
      t1._TimerImpl$2(milliseconds, callback);
      return t1;
    },
    _makeAsyncAwaitCompleter($T) {
      return new A._AsyncAwaitCompleter(new A._Future($.Zone__current, $T._eval$1("_Future<0>")), $T._eval$1("_AsyncAwaitCompleter<0>"));
    },
    _asyncStartSync(bodyFunction, completer) {
      bodyFunction.call$2(0, null);
      completer.isSync = true;
      return completer._future;
    },
    _asyncAwait(object, bodyFunction) {
      A._awaitOnObject(object, bodyFunction);
    },
    _asyncReturn(object, completer) {
      var value, t2,
        t1 = completer.$ti;
      t1._eval$1("1/?")._as(object);
      if (object == null) {
        t1._precomputed1._as(object);
        value = object;
      } else
        value = object;
      if (!completer.isSync)
        completer._future._asyncComplete$1(value);
      else {
        t2 = completer._future;
        if (t1._eval$1("Future<1>")._is(value))
          t2._chainFuture$1(value);
        else
          t2._completeWithValue$1(t1._precomputed1._as(value));
      }
    },
    _asyncRethrow(object, completer) {
      var t1 = A.unwrapException(object),
        st = A.getTraceFromException(object),
        t2 = completer.isSync,
        t3 = completer._future;
      if (t2)
        t3._completeError$2(t1, st);
      else
        t3._asyncCompleteError$2(t1, st);
    },
    _awaitOnObject(object, bodyFunction) {
      var t1, future,
        thenCallback = new A._awaitOnObject_closure(bodyFunction),
        errorCallback = new A._awaitOnObject_closure0(bodyFunction);
      if (object instanceof A._Future)
        object._thenAwait$1$2(thenCallback, errorCallback, type$.dynamic);
      else {
        t1 = type$.dynamic;
        if (type$.Future_dynamic._is(object))
          object.then$1$2$onError(0, thenCallback, errorCallback, t1);
        else {
          future = new A._Future($.Zone__current, type$._Future_dynamic);
          future._state = 8;
          future._resultOrListeners = object;
          future._thenAwait$1$2(thenCallback, errorCallback, t1);
        }
      }
    },
    _wrapJsFunctionForAsync($function) {
      var $protected = function(fn, ERROR) {
        return function(errorCode, result) {
          while (true)
            try {
              fn(errorCode, result);
              break;
            } catch (error) {
              result = error;
              errorCode = ERROR;
            }
        };
      }($function, 1);
      return $.Zone__current.registerBinaryCallback$3$1(new A._wrapJsFunctionForAsync_closure($protected), type$.void, type$.int, type$.dynamic);
    },
    AsyncError$(error, stackTrace) {
      var t1 = A.checkNotNullable(error, "error", type$.Object);
      return new A.AsyncError(t1, stackTrace == null ? A.AsyncError_defaultStackTrace(error) : stackTrace);
    },
    AsyncError_defaultStackTrace(error) {
      var stackTrace;
      if (type$.Error._is(error)) {
        stackTrace = error.get$stackTrace();
        if (stackTrace != null)
          return stackTrace;
      }
      return B.C__StringStackTrace;
    },
    Future_Future$value($T) {
      var t1, t2;
      $T._as(null);
      t1 = null;
      t2 = new A._Future($.Zone__current, $T._eval$1("_Future<0>"));
      t2._asyncComplete$1(t1);
      return t2;
    },
    _Future__chainCoreFuture(source, target) {
      var t1, t2, listeners;
      for (t1 = type$._Future_dynamic; t2 = source._state, (t2 & 4) !== 0;)
        source = t1._as(source._resultOrListeners);
      if ((t2 & 24) !== 0) {
        listeners = target._removeListeners$0();
        target._cloneResult$1(source);
        A._Future__propagateToListeners(target, listeners);
      } else {
        listeners = type$.nullable__FutureListener_dynamic_dynamic._as(target._resultOrListeners);
        target._state = target._state & 1 | 4;
        target._resultOrListeners = source;
        source._prependListeners$1(listeners);
      }
    },
    _Future__propagateToListeners(source, listeners) {
      var t2, t3, t4, _box_0, t5, t6, hasError, asyncError, nextListener, nextListener0, sourceResult, t7, zone, oldZone, result, current, _box_1 = {},
        t1 = _box_1.source = source;
      for (t2 = type$.AsyncError, t3 = type$.nullable__FutureListener_dynamic_dynamic, t4 = type$.Future_dynamic; true;) {
        _box_0 = {};
        t5 = t1._state;
        t6 = (t5 & 16) === 0;
        hasError = !t6;
        if (listeners == null) {
          if (hasError && (t5 & 1) === 0) {
            asyncError = t2._as(t1._resultOrListeners);
            A._rootHandleError(asyncError.error, asyncError.stackTrace);
          }
          return;
        }
        _box_0.listener = listeners;
        nextListener = listeners._nextListener;
        for (t1 = listeners; nextListener != null; t1 = nextListener, nextListener = nextListener0) {
          t1._nextListener = null;
          A._Future__propagateToListeners(_box_1.source, t1);
          _box_0.listener = nextListener;
          nextListener0 = nextListener._nextListener;
        }
        t5 = _box_1.source;
        sourceResult = t5._resultOrListeners;
        _box_0.listenerHasError = hasError;
        _box_0.listenerValueOrError = sourceResult;
        if (t6) {
          t7 = t1.state;
          t7 = (t7 & 1) !== 0 || (t7 & 15) === 8;
        } else
          t7 = true;
        if (t7) {
          zone = t1.result._zone;
          if (hasError) {
            t5 = t5._zone === zone;
            t5 = !(t5 || t5);
          } else
            t5 = false;
          if (t5) {
            t2._as(sourceResult);
            A._rootHandleError(sourceResult.error, sourceResult.stackTrace);
            return;
          }
          oldZone = $.Zone__current;
          if (oldZone !== zone)
            $.Zone__current = zone;
          else
            oldZone = null;
          t1 = t1.state;
          if ((t1 & 15) === 8)
            new A._Future__propagateToListeners_handleWhenCompleteCallback(_box_0, _box_1, hasError).call$0();
          else if (t6) {
            if ((t1 & 1) !== 0)
              new A._Future__propagateToListeners_handleValueCallback(_box_0, sourceResult).call$0();
          } else if ((t1 & 2) !== 0)
            new A._Future__propagateToListeners_handleError(_box_1, _box_0).call$0();
          if (oldZone != null)
            $.Zone__current = oldZone;
          t1 = _box_0.listenerValueOrError;
          if (t4._is(t1)) {
            t5 = _box_0.listener.$ti;
            t5 = t5._eval$1("Future<2>")._is(t1) || !t5._rest[1]._is(t1);
          } else
            t5 = false;
          if (t5) {
            t4._as(t1);
            result = _box_0.listener.result;
            if ((t1._state & 24) !== 0) {
              current = t3._as(result._resultOrListeners);
              result._resultOrListeners = null;
              listeners = result._reverseListeners$1(current);
              result._state = t1._state & 30 | result._state & 1;
              result._resultOrListeners = t1._resultOrListeners;
              _box_1.source = t1;
              continue;
            } else
              A._Future__chainCoreFuture(t1, result);
            return;
          }
        }
        result = _box_0.listener.result;
        current = t3._as(result._resultOrListeners);
        result._resultOrListeners = null;
        listeners = result._reverseListeners$1(current);
        t1 = _box_0.listenerHasError;
        t5 = _box_0.listenerValueOrError;
        if (!t1) {
          result.$ti._precomputed1._as(t5);
          result._state = 8;
          result._resultOrListeners = t5;
        } else {
          t2._as(t5);
          result._state = result._state & 1 | 16;
          result._resultOrListeners = t5;
        }
        _box_1.source = result;
        t1 = result;
      }
    },
    _registerErrorHandler(errorHandler, zone) {
      var t1;
      if (type$.dynamic_Function_Object_StackTrace._is(errorHandler))
        return zone.registerBinaryCallback$3$1(errorHandler, type$.dynamic, type$.Object, type$.StackTrace);
      t1 = type$.dynamic_Function_Object;
      if (t1._is(errorHandler))
        return t1._as(errorHandler);
      throw A.wrapException(A.ArgumentError$value(errorHandler, "onError", string$.Error_));
    },
    _microtaskLoop() {
      var entry, next;
      for (entry = $._nextCallback; entry != null; entry = $._nextCallback) {
        $._lastPriorityCallback = null;
        next = entry.next;
        $._nextCallback = next;
        if (next == null)
          $._lastCallback = null;
        entry.callback.call$0();
      }
    },
    _startMicrotaskLoop() {
      $._isInCallbackLoop = true;
      try {
        A._microtaskLoop();
      } finally {
        $._lastPriorityCallback = null;
        $._isInCallbackLoop = false;
        if ($._nextCallback != null)
          $.$get$_AsyncRun__scheduleImmediateClosure().call$1(A.async___startMicrotaskLoop$closure());
      }
    },
    _scheduleAsyncCallback(callback) {
      var newEntry = new A._AsyncCallbackEntry(callback),
        lastCallback = $._lastCallback;
      if (lastCallback == null) {
        $._nextCallback = $._lastCallback = newEntry;
        if (!$._isInCallbackLoop)
          $.$get$_AsyncRun__scheduleImmediateClosure().call$1(A.async___startMicrotaskLoop$closure());
      } else
        $._lastCallback = lastCallback.next = newEntry;
    },
    _schedulePriorityAsyncCallback(callback) {
      var entry, lastPriorityCallback, next,
        t1 = $._nextCallback;
      if (t1 == null) {
        A._scheduleAsyncCallback(callback);
        $._lastPriorityCallback = $._lastCallback;
        return;
      }
      entry = new A._AsyncCallbackEntry(callback);
      lastPriorityCallback = $._lastPriorityCallback;
      if (lastPriorityCallback == null) {
        entry.next = t1;
        $._nextCallback = $._lastPriorityCallback = entry;
      } else {
        next = lastPriorityCallback.next;
        entry.next = next;
        $._lastPriorityCallback = lastPriorityCallback.next = entry;
        if (next == null)
          $._lastCallback = entry;
      }
    },
    scheduleMicrotask(callback) {
      var t1, _null = null,
        currentZone = $.Zone__current;
      if (B.C__RootZone === currentZone) {
        A._rootScheduleMicrotask(_null, _null, B.C__RootZone, callback);
        return;
      }
      t1 = false;
      if (t1) {
        A._rootScheduleMicrotask(_null, _null, currentZone, type$.void_Function._as(callback));
        return;
      }
      A._rootScheduleMicrotask(_null, _null, currentZone, type$.void_Function._as(currentZone.bindCallbackGuarded$1(callback)));
    },
    StreamIterator_StreamIterator(stream, $T) {
      A.checkNotNullable(stream, "stream", type$.Object);
      return new A._StreamIterator($T._eval$1("_StreamIterator<0>"));
    },
    _rootHandleError(error, stackTrace) {
      A._schedulePriorityAsyncCallback(new A._rootHandleError_closure(error, stackTrace));
    },
    _rootRun($self, $parent, zone, f, $R) {
      var old,
        t1 = $.Zone__current;
      if (t1 === zone)
        return f.call$0();
      $.Zone__current = zone;
      old = t1;
      try {
        t1 = f.call$0();
        return t1;
      } finally {
        $.Zone__current = old;
      }
    },
    _rootRunUnary($self, $parent, zone, f, arg, $R, $T) {
      var old,
        t1 = $.Zone__current;
      if (t1 === zone)
        return f.call$1(arg);
      $.Zone__current = zone;
      old = t1;
      try {
        t1 = f.call$1(arg);
        return t1;
      } finally {
        $.Zone__current = old;
      }
    },
    _rootRunBinary($self, $parent, zone, f, arg1, arg2, $R, T1, T2) {
      var old,
        t1 = $.Zone__current;
      if (t1 === zone)
        return f.call$2(arg1, arg2);
      $.Zone__current = zone;
      old = t1;
      try {
        t1 = f.call$2(arg1, arg2);
        return t1;
      } finally {
        $.Zone__current = old;
      }
    },
    _rootScheduleMicrotask($self, $parent, zone, f) {
      type$.void_Function._as(f);
      if (B.C__RootZone !== zone)
        f = zone.bindCallbackGuarded$1(f);
      A._scheduleAsyncCallback(f);
    },
    _AsyncRun__initializeScheduleImmediate_internalCallback: function _AsyncRun__initializeScheduleImmediate_internalCallback(t0) {
      this._box_0 = t0;
    },
    _AsyncRun__initializeScheduleImmediate_closure: function _AsyncRun__initializeScheduleImmediate_closure(t0, t1, t2) {
      this._box_0 = t0;
      this.div = t1;
      this.span = t2;
    },
    _AsyncRun__scheduleImmediateJsOverride_internalCallback: function _AsyncRun__scheduleImmediateJsOverride_internalCallback(t0) {
      this.callback = t0;
    },
    _AsyncRun__scheduleImmediateWithSetImmediate_internalCallback: function _AsyncRun__scheduleImmediateWithSetImmediate_internalCallback(t0) {
      this.callback = t0;
    },
    _TimerImpl: function _TimerImpl() {
    },
    _TimerImpl_internalCallback: function _TimerImpl_internalCallback(t0, t1) {
      this.$this = t0;
      this.callback = t1;
    },
    _AsyncAwaitCompleter: function _AsyncAwaitCompleter(t0, t1) {
      this._future = t0;
      this.isSync = false;
      this.$ti = t1;
    },
    _awaitOnObject_closure: function _awaitOnObject_closure(t0) {
      this.bodyFunction = t0;
    },
    _awaitOnObject_closure0: function _awaitOnObject_closure0(t0) {
      this.bodyFunction = t0;
    },
    _wrapJsFunctionForAsync_closure: function _wrapJsFunctionForAsync_closure(t0) {
      this.$protected = t0;
    },
    AsyncError: function AsyncError(t0, t1) {
      this.error = t0;
      this.stackTrace = t1;
    },
    _FutureListener: function _FutureListener(t0, t1, t2, t3, t4) {
      var _ = this;
      _._nextListener = null;
      _.result = t0;
      _.state = t1;
      _.callback = t2;
      _.errorCallback = t3;
      _.$ti = t4;
    },
    _Future: function _Future(t0, t1) {
      var _ = this;
      _._state = 0;
      _._zone = t0;
      _._resultOrListeners = null;
      _.$ti = t1;
    },
    _Future__addListener_closure: function _Future__addListener_closure(t0, t1) {
      this.$this = t0;
      this.listener = t1;
    },
    _Future__prependListeners_closure: function _Future__prependListeners_closure(t0, t1) {
      this._box_0 = t0;
      this.$this = t1;
    },
    _Future__chainForeignFuture_closure: function _Future__chainForeignFuture_closure(t0) {
      this.$this = t0;
    },
    _Future__chainForeignFuture_closure0: function _Future__chainForeignFuture_closure0(t0) {
      this.$this = t0;
    },
    _Future__chainForeignFuture_closure1: function _Future__chainForeignFuture_closure1(t0, t1, t2) {
      this.$this = t0;
      this.e = t1;
      this.s = t2;
    },
    _Future__asyncCompleteWithValue_closure: function _Future__asyncCompleteWithValue_closure(t0, t1) {
      this.$this = t0;
      this.value = t1;
    },
    _Future__chainFuture_closure: function _Future__chainFuture_closure(t0, t1) {
      this.$this = t0;
      this.value = t1;
    },
    _Future__asyncCompleteError_closure: function _Future__asyncCompleteError_closure(t0, t1, t2) {
      this.$this = t0;
      this.error = t1;
      this.stackTrace = t2;
    },
    _Future__propagateToListeners_handleWhenCompleteCallback: function _Future__propagateToListeners_handleWhenCompleteCallback(t0, t1, t2) {
      this._box_0 = t0;
      this._box_1 = t1;
      this.hasError = t2;
    },
    _Future__propagateToListeners_handleWhenCompleteCallback_closure: function _Future__propagateToListeners_handleWhenCompleteCallback_closure(t0) {
      this.originalSource = t0;
    },
    _Future__propagateToListeners_handleValueCallback: function _Future__propagateToListeners_handleValueCallback(t0, t1) {
      this._box_0 = t0;
      this.sourceResult = t1;
    },
    _Future__propagateToListeners_handleError: function _Future__propagateToListeners_handleError(t0, t1) {
      this._box_1 = t0;
      this._box_0 = t1;
    },
    _AsyncCallbackEntry: function _AsyncCallbackEntry(t0) {
      this.callback = t0;
      this.next = null;
    },
    _StreamIterator: function _StreamIterator(t0) {
      this.$ti = t0;
    },
    _Zone: function _Zone() {
    },
    _rootHandleError_closure: function _rootHandleError_closure(t0, t1) {
      this.error = t0;
      this.stackTrace = t1;
    },
    _RootZone: function _RootZone() {
    },
    _RootZone_bindCallbackGuarded_closure: function _RootZone_bindCallbackGuarded_closure(t0, t1) {
      this.$this = t0;
      this.f = t1;
    },
    _HashMap__getTableEntry(table, key) {
      var entry = table[key];
      return entry === table ? null : entry;
    },
    _HashMap__setTableEntry(table, key, value) {
      if (value == null)
        table[key] = table;
      else
        table[key] = value;
    },
    _HashMap__newHashTable() {
      var table = Object.create(null);
      A._HashMap__setTableEntry(table, "<non-identifier-key>", table);
      delete table["<non-identifier-key>"];
      return table;
    },
    LinkedHashMap_LinkedHashMap$_literal(keyValuePairs, $K, $V) {
      return $K._eval$1("@<0>")._bind$1($V)._eval$1("LinkedHashMap<1,2>")._as(A.fillLiteralMap(keyValuePairs, new A.JsLinkedHashMap($K._eval$1("@<0>")._bind$1($V)._eval$1("JsLinkedHashMap<1,2>"))));
    },
    IterableBase_iterableToShortString(iterable, leftDelimiter, rightDelimiter) {
      var parts, t1;
      if (A._isToStringVisiting(iterable)) {
        if (leftDelimiter === "(" && rightDelimiter === ")")
          return "(...)";
        return leftDelimiter + "..." + rightDelimiter;
      }
      parts = A._setArrayType([], type$.JSArray_String);
      B.JSArray_methods.add$1($._toStringVisiting, iterable);
      try {
        A._iterablePartsToStrings(iterable, parts);
      } finally {
        if (0 >= $._toStringVisiting.length)
          return A.ioore($._toStringVisiting, -1);
        $._toStringVisiting.pop();
      }
      t1 = A.StringBuffer__writeAll(leftDelimiter, type$.Iterable_dynamic._as(parts), ", ") + rightDelimiter;
      return t1.charCodeAt(0) == 0 ? t1 : t1;
    },
    IterableBase_iterableToFullString(iterable, leftDelimiter, rightDelimiter) {
      var buffer, t1;
      if (A._isToStringVisiting(iterable))
        return leftDelimiter + "..." + rightDelimiter;
      buffer = new A.StringBuffer(leftDelimiter);
      B.JSArray_methods.add$1($._toStringVisiting, iterable);
      try {
        t1 = buffer;
        t1._contents = A.StringBuffer__writeAll(t1._contents, iterable, ", ");
      } finally {
        if (0 >= $._toStringVisiting.length)
          return A.ioore($._toStringVisiting, -1);
        $._toStringVisiting.pop();
      }
      buffer._contents += rightDelimiter;
      t1 = buffer._contents;
      return t1.charCodeAt(0) == 0 ? t1 : t1;
    },
    _isToStringVisiting(o) {
      var t1, i;
      for (t1 = $._toStringVisiting.length, i = 0; i < t1; ++i)
        if (o === $._toStringVisiting[i])
          return true;
      return false;
    },
    _iterablePartsToStrings(iterable, parts) {
      var next, ultimateString, penultimateString, penultimate, ultimate, ultimate0, elision,
        it = iterable.get$iterator(iterable),
        $length = 0, count = 0;
      while (true) {
        if (!($length < 80 || count < 3))
          break;
        if (!it.moveNext$0())
          return;
        next = A.S(it.get$current());
        B.JSArray_methods.add$1(parts, next);
        $length += next.length + 2;
        ++count;
      }
      if (!it.moveNext$0()) {
        if (count <= 5)
          return;
        if (0 >= parts.length)
          return A.ioore(parts, -1);
        ultimateString = parts.pop();
        if (0 >= parts.length)
          return A.ioore(parts, -1);
        penultimateString = parts.pop();
      } else {
        penultimate = it.get$current();
        ++count;
        if (!it.moveNext$0()) {
          if (count <= 4) {
            B.JSArray_methods.add$1(parts, A.S(penultimate));
            return;
          }
          ultimateString = A.S(penultimate);
          if (0 >= parts.length)
            return A.ioore(parts, -1);
          penultimateString = parts.pop();
          $length += ultimateString.length + 2;
        } else {
          ultimate = it.get$current();
          ++count;
          for (; it.moveNext$0(); penultimate = ultimate, ultimate = ultimate0) {
            ultimate0 = it.get$current();
            ++count;
            if (count > 100) {
              while (true) {
                if (!($length > 75 && count > 3))
                  break;
                if (0 >= parts.length)
                  return A.ioore(parts, -1);
                $length -= parts.pop().length + 2;
                --count;
              }
              B.JSArray_methods.add$1(parts, "...");
              return;
            }
          }
          penultimateString = A.S(penultimate);
          ultimateString = A.S(ultimate);
          $length += ultimateString.length + penultimateString.length + 4;
        }
      }
      if (count > parts.length + 2) {
        $length += 5;
        elision = "...";
      } else
        elision = null;
      while (true) {
        if (!($length > 80 && parts.length > 3))
          break;
        if (0 >= parts.length)
          return A.ioore(parts, -1);
        $length -= parts.pop().length + 2;
        if (elision == null) {
          $length += 5;
          elision = "...";
        }
      }
      if (elision != null)
        B.JSArray_methods.add$1(parts, elision);
      B.JSArray_methods.add$1(parts, penultimateString);
      B.JSArray_methods.add$1(parts, ultimateString);
    },
    MapBase_mapToString(m) {
      var result, t1 = {};
      if (A._isToStringVisiting(m))
        return "{...}";
      result = new A.StringBuffer("");
      try {
        B.JSArray_methods.add$1($._toStringVisiting, m);
        result._contents += "{";
        t1.first = true;
        m.forEach$1(0, new A.MapBase_mapToString_closure(t1, result));
        result._contents += "}";
      } finally {
        if (0 >= $._toStringVisiting.length)
          return A.ioore($._toStringVisiting, -1);
        $._toStringVisiting.pop();
      }
      t1 = result._contents;
      return t1.charCodeAt(0) == 0 ? t1 : t1;
    },
    _HashMap: function _HashMap() {
    },
    _IdentityHashMap: function _IdentityHashMap(t0) {
      var _ = this;
      _._collection$_length = 0;
      _._collection$_keys = _._collection$_rest = _._collection$_nums = _._collection$_strings = null;
      _.$ti = t0;
    },
    _HashMapKeyIterable: function _HashMapKeyIterable(t0, t1) {
      this._collection$_map = t0;
      this.$ti = t1;
    },
    _HashMapKeyIterator: function _HashMapKeyIterator(t0, t1, t2) {
      var _ = this;
      _._collection$_map = t0;
      _._collection$_keys = t1;
      _._offset = 0;
      _._collection$_current = null;
      _.$ti = t2;
    },
    ListMixin: function ListMixin() {
    },
    MapBase: function MapBase() {
    },
    MapBase_mapToString_closure: function MapBase_mapToString_closure(t0, t1) {
      this._box_0 = t0;
      this.result = t1;
    },
    MapMixin: function MapMixin() {
    },
    _UnmodifiableMapMixin: function _UnmodifiableMapMixin() {
    },
    MapView: function MapView() {
    },
    UnmodifiableMapView: function UnmodifiableMapView() {
    },
    _UnmodifiableMapView_MapView__UnmodifiableMapMixin: function _UnmodifiableMapView_MapView__UnmodifiableMapMixin() {
    },
    Function_apply($function, positionalArguments) {
      return A.Primitives_applyFunction($function, positionalArguments, null);
    },
    Error__objectToString(object) {
      if (object instanceof A.Closure)
        return object.toString$0(0);
      return "Instance of '" + A.Primitives_objectTypeName(object) + "'";
    },
    Error__throw(error, stackTrace) {
      error = A.wrapException(error);
      if (error == null)
        error = type$.Object._as(error);
      error.stack = stackTrace.toString$0(0);
      throw error;
      throw A.wrapException("unreachable");
    },
    List_List$filled($length, fill, growable, $E) {
      var i,
        result = J.JSArray_JSArray$fixed($length, $E);
      if ($length !== 0 && fill != null)
        for (i = 0; i < $length; ++i)
          result[i] = fill;
      return result;
    },
    List_List$from(elements, $E) {
      var t1, t2, t3,
        list = A._setArrayType([], $E._eval$1("JSArray<0>"));
      for (t1 = elements.$ti, t2 = new A.ListIterator(elements, elements.get$length(elements), t1._eval$1("ListIterator<ListIterable.E>")), t1 = t1._eval$1("ListIterable.E"); t2.moveNext$0();) {
        t3 = t2.__internal$_current;
        B.JSArray_methods.add$1(list, $E._as(t3 == null ? t1._as(t3) : t3));
      }
      return list;
    },
    List_List$of(elements, growable, $E) {
      var t1 = A.List_List$_of(elements, $E);
      return t1;
    },
    List_List$_of(elements, $E) {
      var list, t1;
      if (Array.isArray(elements))
        return A._setArrayType(elements.slice(0), $E._eval$1("JSArray<0>"));
      list = A._setArrayType([], $E._eval$1("JSArray<0>"));
      for (t1 = J.get$iterator$ax(elements); t1.moveNext$0();)
        B.JSArray_methods.add$1(list, t1.get$current());
      return list;
    },
    StringBuffer__writeAll(string, objects, separator) {
      var iterator = J.get$iterator$ax(objects);
      if (!iterator.moveNext$0())
        return string;
      if (separator.length === 0) {
        do
          string += A.S(iterator.get$current());
        while (iterator.moveNext$0());
      } else {
        string += A.S(iterator.get$current());
        for (; iterator.moveNext$0();)
          string = string + separator + A.S(iterator.get$current());
      }
      return string;
    },
    NoSuchMethodError$_(receiver, memberName, positionalArguments, namedArguments, existingArgumentNames) {
      return new A.NoSuchMethodError(receiver, memberName, positionalArguments, namedArguments, existingArgumentNames);
    },
    DateTime__fourDigits(n) {
      var absN = Math.abs(n),
        sign = n < 0 ? "-" : "";
      if (absN >= 1000)
        return "" + n;
      if (absN >= 100)
        return sign + "0" + absN;
      if (absN >= 10)
        return sign + "00" + absN;
      return sign + "000" + absN;
    },
    DateTime__sixDigits(n) {
      var absN = Math.abs(n),
        sign = n < 0 ? "-" : "+";
      if (absN >= 100000)
        return sign + absN;
      return sign + "0" + absN;
    },
    DateTime__threeDigits(n) {
      if (n >= 100)
        return "" + n;
      if (n >= 10)
        return "0" + n;
      return "00" + n;
    },
    DateTime__twoDigits(n) {
      if (n >= 10)
        return "" + n;
      return "0" + n;
    },
    Error_safeToString(object) {
      if (typeof object == "number" || A._isBool(object) || object == null)
        return J.toString$0$(object);
      if (typeof object == "string")
        return JSON.stringify(object);
      return A.Error__objectToString(object);
    },
    AssertionError$(message) {
      return new A.AssertionError(message);
    },
    ArgumentError$(message, $name) {
      return new A.ArgumentError(false, null, $name, message);
    },
    ArgumentError$value(value, $name, message) {
      return new A.ArgumentError(true, value, $name, message);
    },
    RangeError$range(invalidValue, minValue, maxValue, $name, message) {
      return new A.RangeError(minValue, maxValue, true, invalidValue, $name, "Invalid value");
    },
    IndexError$withLength(invalidValue, $length, indexable, $name) {
      return new A.IndexError($length, true, invalidValue, $name, "Index out of range");
    },
    UnsupportedError$(message) {
      return new A.UnsupportedError(message);
    },
    UnimplementedError$(message) {
      return new A.UnimplementedError(message);
    },
    StateError$(message) {
      return new A.StateError(message);
    },
    ConcurrentModificationError$(modifiedObject) {
      return new A.ConcurrentModificationError(modifiedObject);
    },
    NoSuchMethodError_toString_closure: function NoSuchMethodError_toString_closure(t0, t1) {
      this._box_0 = t0;
      this.sb = t1;
    },
    DateTime: function DateTime(t0, t1) {
      this._value = t0;
      this.isUtc = t1;
    },
    _Enum: function _Enum() {
    },
    Error: function Error() {
    },
    AssertionError: function AssertionError(t0) {
      this.message = t0;
    },
    TypeError: function TypeError() {
    },
    NullThrownError: function NullThrownError() {
    },
    ArgumentError: function ArgumentError(t0, t1, t2, t3) {
      var _ = this;
      _._hasValue = t0;
      _.invalidValue = t1;
      _.name = t2;
      _.message = t3;
    },
    RangeError: function RangeError(t0, t1, t2, t3, t4, t5) {
      var _ = this;
      _.start = t0;
      _.end = t1;
      _._hasValue = t2;
      _.invalidValue = t3;
      _.name = t4;
      _.message = t5;
    },
    IndexError: function IndexError(t0, t1, t2, t3, t4) {
      var _ = this;
      _.length = t0;
      _._hasValue = t1;
      _.invalidValue = t2;
      _.name = t3;
      _.message = t4;
    },
    NoSuchMethodError: function NoSuchMethodError(t0, t1, t2, t3, t4) {
      var _ = this;
      _._core$_receiver = t0;
      _._core$_memberName = t1;
      _._core$_arguments = t2;
      _._namedArguments = t3;
      _._existingArgumentNames = t4;
    },
    UnsupportedError: function UnsupportedError(t0) {
      this.message = t0;
    },
    UnimplementedError: function UnimplementedError(t0) {
      this.message = t0;
    },
    StateError: function StateError(t0) {
      this.message = t0;
    },
    ConcurrentModificationError: function ConcurrentModificationError(t0) {
      this.modifiedObject = t0;
    },
    StackOverflowError: function StackOverflowError() {
    },
    CyclicInitializationError: function CyclicInitializationError(t0) {
      this.variableName = t0;
    },
    _Exception: function _Exception(t0) {
      this.message = t0;
    },
    Iterable: function Iterable() {
    },
    Iterator: function Iterator() {
    },
    Null: function Null() {
    },
    Object: function Object() {
    },
    _StringStackTrace: function _StringStackTrace() {
    },
    StringBuffer: function StringBuffer(t0) {
      this._contents = t0;
    },
    HtmlElement: function HtmlElement() {
    },
    AnchorElement: function AnchorElement() {
    },
    AreaElement: function AreaElement() {
    },
    Blob: function Blob() {
    },
    CharacterData: function CharacterData() {
    },
    DomException: function DomException() {
    },
    Element: function Element() {
    },
    Event: function Event() {
    },
    EventTarget: function EventTarget() {
    },
    FormElement: function FormElement() {
    },
    ImageData: function ImageData() {
    },
    Node: function Node() {
    },
    SelectElement: function SelectElement() {
    },
    Window: function Window() {
    },
    WorkerGlobalScope: function WorkerGlobalScope() {
    },
    KeyRange: function KeyRange() {
    },
    _callDartFunction(callback, captureThis, $self, $arguments) {
      var arguments0, t1, dartArgs;
      A._asBool(captureThis);
      type$.List_dynamic._as($arguments);
      if (captureThis) {
        arguments0 = [$self];
        B.JSArray_methods.addAll$1(arguments0, $arguments);
        $arguments = arguments0;
      }
      t1 = type$.dynamic;
      dartArgs = A.List_List$from(J.map$1$1$ax($arguments, A.js___convertToDart$closure(), t1), t1);
      return A._convertToJS(A.Function_apply(type$.Function._as(callback), dartArgs));
    },
    JsObject_JsObject$jsify(object) {
      return A._wrapToDart(A.JsObject__convertDataTree(object));
    },
    JsObject__convertDataTree(data) {
      return new A.JsObject__convertDataTree__convert(new A._IdentityHashMap(type$._IdentityHashMap_dynamic_dynamic)).call$1(data);
    },
    _castToJsObject(o) {
      return o;
    },
    _defineProperty(o, $name, value) {
      var exception;
      try {
        if (Object.isExtensible(o) && !Object.prototype.hasOwnProperty.call(o, $name)) {
          Object.defineProperty(o, $name, {value: value});
          return true;
        }
      } catch (exception) {
      }
      return false;
    },
    _getOwnProperty(o, $name) {
      if (Object.prototype.hasOwnProperty.call(o, $name))
        return o[$name];
      return null;
    },
    _convertToJS(o) {
      if (o == null || typeof o == "string" || typeof o == "number" || A._isBool(o))
        return o;
      if (o instanceof A.JsObject)
        return o._jsObject;
      if (A.isBrowserObject(o))
        return o;
      if (type$.TypedData._is(o))
        return o;
      if (o instanceof A.DateTime)
        return A.Primitives_lazyAsJsDate(o);
      if (type$.Function._is(o))
        return A._getJsProxy(o, "$dart_jsFunction", new A._convertToJS_closure());
      return A._getJsProxy(o, "_$dart_jsObject", new A._convertToJS_closure0($.$get$_dartProxyCtor()));
    },
    _getJsProxy(o, propertyName, createProxy) {
      var jsProxy = A._getOwnProperty(o, propertyName);
      if (jsProxy == null) {
        jsProxy = createProxy.call$1(o);
        A._defineProperty(o, propertyName, jsProxy);
      }
      return jsProxy;
    },
    _convertToDart(o) {
      var t1, t2;
      if (o == null || typeof o == "string" || typeof o == "number" || typeof o == "boolean")
        return o;
      else if (o instanceof Object && A.isBrowserObject(o))
        return o;
      else if (o instanceof Object && type$.TypedData._is(o))
        return o;
      else if (o instanceof Date) {
        t1 = A._asInt(o.getTime());
        if (Math.abs(t1) <= 864e13)
          t2 = false;
        else
          t2 = true;
        if (t2)
          A.throwExpression(A.ArgumentError$("DateTime is outside valid range: " + t1, null));
        A.checkNotNullable(false, "isUtc", type$.bool);
        return new A.DateTime(t1, false);
      } else if (o.constructor === $.$get$_dartProxyCtor())
        return o.o;
      else
        return A._wrapToDart(o);
    },
    _wrapToDart(o) {
      if (typeof o == "function")
        return A._getDartProxy(o, $.$get$DART_CLOSURE_PROPERTY_NAME(), new A._wrapToDart_closure());
      if (o instanceof Array)
        return A._getDartProxy(o, $.$get$_DART_OBJECT_PROPERTY_NAME(), new A._wrapToDart_closure0());
      return A._getDartProxy(o, $.$get$_DART_OBJECT_PROPERTY_NAME(), new A._wrapToDart_closure1());
    },
    _getDartProxy(o, propertyName, createProxy) {
      var dartProxy = A._getOwnProperty(o, propertyName);
      if (dartProxy == null || !(o instanceof Object)) {
        dartProxy = createProxy.call$1(o);
        A._defineProperty(o, propertyName, dartProxy);
      }
      return dartProxy;
    },
    _convertDartFunctionFast(f) {
      var ret,
        existing = f.$dart_jsFunction;
      if (existing != null)
        return existing;
      ret = function(_call, f) {
        return function() {
          return _call(f, Array.prototype.slice.apply(arguments));
        };
      }(A._callDartFunctionFast, f);
      ret[$.$get$DART_CLOSURE_PROPERTY_NAME()] = f;
      f.$dart_jsFunction = ret;
      return ret;
    },
    _callDartFunctionFast(callback, $arguments) {
      type$.List_dynamic._as($arguments);
      return A.Function_apply(type$.Function._as(callback), $arguments);
    },
    allowInterop(f, $F) {
      if (typeof f == "function")
        return f;
      else
        return $F._as(A._convertDartFunctionFast(f));
    },
    JsObject__convertDataTree__convert: function JsObject__convertDataTree__convert(t0) {
      this._convertedObjects = t0;
    },
    _convertToJS_closure: function _convertToJS_closure() {
    },
    _convertToJS_closure0: function _convertToJS_closure0(t0) {
      this.ctor = t0;
    },
    _wrapToDart_closure: function _wrapToDart_closure() {
    },
    _wrapToDart_closure0: function _wrapToDart_closure0() {
    },
    _wrapToDart_closure1: function _wrapToDart_closure1() {
    },
    JsObject: function JsObject(t0) {
      this._jsObject = t0;
    },
    JsFunction: function JsFunction(t0) {
      this._jsObject = t0;
    },
    JsArray: function JsArray(t0, t1) {
      this._jsObject = t0;
      this.$ti = t1;
    },
    _JsArray_JsObject_ListMixin: function _JsArray_JsObject_ListMixin() {
    },
    main() {
      A.register(A.guya_Guya___new_tearOff$closure(), "Guya2", $.$get$guyaInfo(), type$.Registerable);
    },
    Guya___new_tearOff() {
      return new A.Guya(new A.Parser());
    },
    Guya: function Guya(t0) {
      this.parser = t0;
    },
    Parser: function Parser() {
    },
    Date: function Date() {
    },
    Record: function Record() {
    },
    JsError: function JsError() {
    },
    Atomics: function Atomics() {
    },
    TypedArray: function TypedArray() {
    },
    futureToPromise(future, $T) {
      return new self.Promise(A.allowInterop(new A.futureToPromise_closure(future, $T), type$.void_Function_2_dynamic_Function_dynamic_and_dynamic_Function_dynamic));
    },
    futureToPromise_closure: function futureToPromise_closure(t0, t1) {
      this.future = t0;
      this.T = t1;
    },
    futureToPromise__closure: function futureToPromise__closure(t0, t1) {
      this.resolve = t0;
      this.T = t1;
    },
    Promise: function Promise() {
    },
    _PropertyDescriptor: function _PropertyDescriptor() {
    },
    APIWrapper: function APIWrapper() {
    },
    Registerable: function Registerable() {
    },
    Requestable: function Requestable() {
    },
    Searchable: function Searchable() {
    },
    Source: function Source() {
    },
    SourceFutureToPromiseAdatper: function SourceFutureToPromiseAdatper(t0) {
      this.source = t0;
    },
    JsSource: function JsSource() {
    },
    JsTracker: function JsTracker() {
    },
    Chapter: function Chapter() {
    },
    _CreateChapterOptions: function _CreateChapterOptions() {
    },
    ChapterDetails: function ChapterDetails() {
    },
    _CreateChapterDetailsOptions: function _CreateChapterDetailsOptions() {
    },
    Button: function Button() {
    },
    _CreateButtonOptions: function _CreateButtonOptions() {
    },
    Form: function Form() {
    },
    _CreateFormOptions: function _CreateFormOptions() {
    },
    FormRow: function FormRow() {
    },
    FormRowTyped: function FormRowTyped() {
    },
    Header: function Header() {
    },
    _CreateHeaderOptions: function _CreateHeaderOptions() {
    },
    InputField: function InputField() {
    },
    _CreateInputFieldOptions: function _CreateInputFieldOptions() {
    },
    Label: function Label() {
    },
    _CreateLabelOptions: function _CreateLabelOptions() {
    },
    Link: function Link() {
    },
    _CreateLinkOptions: function _CreateLinkOptions() {
    },
    MultilineLabel: function MultilineLabel() {
    },
    _CreateMultilineLabelOptions: function _CreateMultilineLabelOptions() {
    },
    NavigationButton: function NavigationButton() {
    },
    _CreateNavigationButtonOptions: function _CreateNavigationButtonOptions() {
    },
    OAuthButton: function OAuthButton() {
    },
    OAuthResponseType: function OAuthResponseType() {
    },
    _CreateOAuthButtonOptions: function _CreateOAuthButtonOptions() {
    },
    Section: function Section() {
    },
    _CreateSectionOptions: function _CreateSectionOptions() {
    },
    Select: function Select() {
    },
    _CreateSelectOptions: function _CreateSelectOptions() {
    },
    Stepper: function Stepper() {
    },
    _CreateStepperOptions: function _CreateStepperOptions() {
    },
    Switch: function Switch() {
    },
    _CreateSwitchOptions: function _CreateSwitchOptions() {
    },
    WebViewButton: function WebViewButton() {
    },
    HomeSection: function HomeSection() {
    },
    _CreateHomeSectionOptions: function _CreateHomeSectionOptions() {
    },
    MangaInfo: function MangaInfo() {
    },
    _CreateMangaInfoOptions: function _CreateMangaInfoOptions() {
    },
    MangaTile: function MangaTile() {
    },
    IconText: function IconText() {
    },
    _CreateMangaTileOptions: function _CreateMangaTileOptions() {
    },
    _CreateIconTextOptions: function _CreateIconTextOptions() {
    },
    MangaUpdates: function MangaUpdates() {
    },
    _CreateMangaUpdatesOptions: function _CreateMangaUpdatesOptions() {
    },
    PagedResults: function PagedResults() {
    },
    _CreatePagedResultsOptions: function _CreatePagedResultsOptions() {
    },
    RawData: function RawData() {
    },
    _CreateRawDataOptions: function _CreateRawDataOptions() {
    },
    Request: function Request() {
    },
    Cookie: function Cookie() {
    },
    _CreateCookieOptions: function _CreateCookieOptions() {
    },
    _CreateRequestObjectOptions: function _CreateRequestObjectOptions() {
    },
    JsRequestInterceptor: function JsRequestInterceptor() {
    },
    RequestManagerInfo: function RequestManagerInfo() {
    },
    JsRequestManager: function JsRequestManager() {
    },
    _CreateRequestManagerInfoOptions: function _CreateRequestManagerInfoOptions() {
    },
    Response: function Response() {
    },
    SearchField: function SearchField() {
    },
    _CreateSearchFieldOptions: function _CreateSearchFieldOptions() {
    },
    SearchRequest: function SearchRequest() {
    },
    SourceInfo$(author, authorWebsite, contentRating, description, icon, language, $name, sourceTags, version, websiteBaseURL) {
      var t1 = A._arrayInstanceType(sourceTags),
        t2 = t1._eval$1("MappedListIterable<1,Map<String,@>>");
      t2 = A.List_List$of(new A.MappedListIterable(sourceTags, t1._eval$1("Map<String,@>(1)")._as(new A.SourceInfo_closure()), t2), true, t2._eval$1("ListIterable.E"));
      return new A.SourceInfo({version: version, name: $name, icon: icon, author: author, description: description, contentRating: "EVERYONE", websiteBaseURL: websiteBaseURL, authorWebsite: authorWebsite, language: language, sourceTags: t2});
    },
    SourceInfo: function SourceInfo(t0) {
      this.__SourceInfo_jsSourceInfo_F = t0;
    },
    SourceInfo_closure: function SourceInfo_closure() {
    },
    JsSourceInfo: function JsSourceInfo() {
    },
    ContentRating: function ContentRating(t0) {
      this._core$_name = t0;
    },
    SourceManga: function SourceManga() {
    },
    _CreateSourceMangaOptions: function _CreateSourceMangaOptions() {
    },
    SourceStateManagerInfo: function SourceStateManagerInfo() {
    },
    JsSourceStateManager: function JsSourceStateManager() {
    },
    JsSourceKeychain: function JsSourceKeychain() {
    },
    _CreateSourceStateManagerInfo: function _CreateSourceStateManagerInfo() {
    },
    SourceTag: function SourceTag(t0) {
      this.__SourceTag_jsSourceTag_F = t0;
    },
    JsSourceTag: function JsSourceTag() {
    },
    Tag: function Tag() {
    },
    TagSection: function TagSection() {
    },
    CreateTagOptions: function CreateTagOptions() {
    },
    CreateTagSectionOptions: function CreateTagSectionOptions() {
    },
    TrackedManga: function TrackedManga() {
    },
    _CreateTrackedMangaOptions: function _CreateTrackedMangaOptions() {
    },
    TrackedMangaChapterReadAction: function TrackedMangaChapterReadAction() {
    },
    JsTrackerActionQueue: function JsTrackerActionQueue() {
    },
    register(creator, id, info, $T) {
      var t2, t3, t4,
        sourceExtensionJsClass = A.allowInterop(new A.register_closure(creator), type$.JsObject_Function),
        t1 = $.$get$_context();
      t1.$indexSet(0, "Sources.$SourceId$", id);
      t2 = "Sources." + id;
      t3 = info.__SourceInfo_jsSourceInfo_F;
      t3 === $ && A.throwLateFieldNI("jsSourceInfo");
      t4 = J.getInterceptor$x(t3);
      t1.$indexSet(0, t2 + "Info", A.JsObject_JsObject$jsify(A.LinkedHashMap_LinkedHashMap$_literal(["version", t4.get$version(t3), "name", t4.get$name(t3), "icon", t4.get$icon(t3), "author", t4.get$author(t3), "desc", t4.get$description(t3), "contentRating", t4.get$contentRating(t3), "websiteBaseURL", t4.get$websiteBaseURL(t3), "website", t4.get$authorWebsite(t3), "language", t4.get$language(t3), "tags", t4.get$sourceTags(t3)], type$.String, type$.dynamic)));
      t1.$indexSet(0, t2, sourceExtensionJsClass);
    },
    register_closure: function register_closure(t0) {
      this.creator = t0;
    },
    isBrowserObject(o) {
      return type$.Blob._is(o) || type$.Event._is(o) || type$.KeyRange._is(o) || type$.ImageData._is(o) || type$.Node._is(o) || type$.Window._is(o) || type$.WorkerGlobalScope._is(o);
    },
    throwLateFieldNI(fieldName) {
      return A.throwExpression(A.LateError$fieldNI(fieldName));
    },
    throwLateFieldADI(fieldName) {
      return A.throwExpression(new A.LateError("Field '" + fieldName + "' has been assigned during initialization."));
    }
  },
  J = {
    makeDispatchRecord(interceptor, proto, extension, indexability) {
      return {i: interceptor, p: proto, e: extension, x: indexability};
    },
    getNativeInterceptor(object) {
      var proto, objectProto, $constructor, interceptor, t1,
        record = object[init.dispatchPropertyName];
      if (record == null)
        if ($.initNativeDispatchFlag == null) {
          A.initNativeDispatch();
          record = object[init.dispatchPropertyName];
        }
      if (record != null) {
        proto = record.p;
        if (false === proto)
          return record.i;
        if (true === proto)
          return object;
        objectProto = Object.getPrototypeOf(object);
        if (proto === objectProto)
          return record.i;
        if (record.e === objectProto)
          throw A.wrapException(A.UnimplementedError$("Return interceptor for " + A.S(proto(object, record))));
      }
      $constructor = object.constructor;
      if ($constructor == null)
        interceptor = null;
      else {
        t1 = $._JS_INTEROP_INTERCEPTOR_TAG;
        if (t1 == null)
          t1 = $._JS_INTEROP_INTERCEPTOR_TAG = init.getIsolateTag("_$dart_js");
        interceptor = $constructor[t1];
      }
      if (interceptor != null)
        return interceptor;
      interceptor = A.lookupAndCacheInterceptor(object);
      if (interceptor != null)
        return interceptor;
      if (typeof object == "function")
        return B.JavaScriptFunction_methods;
      proto = Object.getPrototypeOf(object);
      if (proto == null)
        return B.PlainJavaScriptObject_methods;
      if (proto === Object.prototype)
        return B.PlainJavaScriptObject_methods;
      if (typeof $constructor == "function") {
        t1 = $._JS_INTEROP_INTERCEPTOR_TAG;
        if (t1 == null)
          t1 = $._JS_INTEROP_INTERCEPTOR_TAG = init.getIsolateTag("_$dart_js");
        Object.defineProperty($constructor, t1, {value: B.UnknownJavaScriptObject_methods, enumerable: false, writable: true, configurable: true});
        return B.UnknownJavaScriptObject_methods;
      }
      return B.UnknownJavaScriptObject_methods;
    },
    JSArray_JSArray$fixed($length, $E) {
      if ($length < 0 || $length > 4294967295)
        throw A.wrapException(A.RangeError$range($length, 0, 4294967295, "length", null));
      return J.JSArray_JSArray$markFixed(new Array($length), $E);
    },
    JSArray_JSArray$markFixed(allocation, $E) {
      return J.JSArray_markFixedList(A._setArrayType(allocation, $E._eval$1("JSArray<0>")), $E);
    },
    JSArray_markFixedList(list, $T) {
      list.fixed$length = Array;
      return list;
    },
    getInterceptor$(receiver) {
      if (typeof receiver == "number") {
        if (Math.floor(receiver) == receiver)
          return J.JSInt.prototype;
        return J.JSNumNotInt.prototype;
      }
      if (typeof receiver == "string")
        return J.JSString.prototype;
      if (receiver == null)
        return J.JSNull.prototype;
      if (typeof receiver == "boolean")
        return J.JSBool.prototype;
      if (receiver.constructor == Array)
        return J.JSArray.prototype;
      if (typeof receiver != "object") {
        if (typeof receiver == "function")
          return J.JavaScriptFunction.prototype;
        return receiver;
      }
      if (receiver instanceof A.Object)
        return receiver;
      return J.getNativeInterceptor(receiver);
    },
    getInterceptor$asx(receiver) {
      if (typeof receiver == "string")
        return J.JSString.prototype;
      if (receiver == null)
        return receiver;
      if (receiver.constructor == Array)
        return J.JSArray.prototype;
      if (typeof receiver != "object") {
        if (typeof receiver == "function")
          return J.JavaScriptFunction.prototype;
        return receiver;
      }
      if (receiver instanceof A.Object)
        return receiver;
      return J.getNativeInterceptor(receiver);
    },
    getInterceptor$ax(receiver) {
      if (receiver == null)
        return receiver;
      if (receiver.constructor == Array)
        return J.JSArray.prototype;
      if (typeof receiver != "object") {
        if (typeof receiver == "function")
          return J.JavaScriptFunction.prototype;
        return receiver;
      }
      if (receiver instanceof A.Object)
        return receiver;
      return J.getNativeInterceptor(receiver);
    },
    getInterceptor$x(receiver) {
      if (receiver == null)
        return receiver;
      if (typeof receiver != "object") {
        if (typeof receiver == "function")
          return J.JavaScriptFunction.prototype;
        return receiver;
      }
      if (receiver instanceof A.Object)
        return receiver;
      return J.getNativeInterceptor(receiver);
    },
    getInterceptor$z(receiver) {
      if (receiver == null)
        return receiver;
      if (!(receiver instanceof A.Object))
        return J.UnknownJavaScriptObject.prototype;
      return receiver;
    },
    get$hashCode$(receiver) {
      return J.getInterceptor$(receiver).get$hashCode(receiver);
    },
    get$iterator$ax(receiver) {
      return J.getInterceptor$ax(receiver).get$iterator(receiver);
    },
    get$length$asx(receiver) {
      return J.getInterceptor$asx(receiver).get$length(receiver);
    },
    $eq$(receiver, a0) {
      if (receiver == null)
        return a0 == null;
      if (typeof receiver != "object")
        return a0 != null && receiver === a0;
      return J.getInterceptor$(receiver).$eq(receiver, a0);
    },
    elementAt$1$ax(receiver, a0) {
      return J.getInterceptor$ax(receiver).elementAt$1(receiver, a0);
    },
    map$1$1$ax(receiver, a0, $T1) {
      return J.getInterceptor$ax(receiver).map$1$1(receiver, a0, $T1);
    },
    noSuchMethod$1$(receiver, a0) {
      return J.getInterceptor$(receiver).noSuchMethod$1(receiver, a0);
    },
    then$1$1$z(receiver, a0, $T1) {
      return J.getInterceptor$z(receiver).then$1$1(receiver, a0, $T1);
    },
    toString$0$(receiver) {
      return J.getInterceptor$(receiver).toString$0(receiver);
    },
    Interceptor: function Interceptor() {
    },
    JSBool: function JSBool() {
    },
    JSNull: function JSNull() {
    },
    JavaScriptObject: function JavaScriptObject() {
    },
    LegacyJavaScriptObject: function LegacyJavaScriptObject() {
    },
    PlainJavaScriptObject: function PlainJavaScriptObject() {
    },
    UnknownJavaScriptObject: function UnknownJavaScriptObject() {
    },
    JavaScriptFunction: function JavaScriptFunction() {
    },
    JSArray: function JSArray(t0) {
      this.$ti = t0;
    },
    JSUnmodifiableArray: function JSUnmodifiableArray(t0) {
      this.$ti = t0;
    },
    ArrayIterator: function ArrayIterator(t0, t1, t2) {
      var _ = this;
      _._iterable = t0;
      _._length = t1;
      _._index = 0;
      _._current = null;
      _.$ti = t2;
    },
    JSNumber: function JSNumber() {
    },
    JSInt: function JSInt() {
    },
    JSNumNotInt: function JSNumNotInt() {
    },
    JSString: function JSString() {
    }
  },
  B = {};
  var holders = [A, J, B];
  var $ = {};
  A.JS_CONST.prototype = {};
  J.Interceptor.prototype = {
    $eq(receiver, other) {
      return receiver === other;
    },
    get$hashCode(receiver) {
      return A.Primitives_objectHashCode(receiver);
    },
    toString$0(receiver) {
      return "Instance of '" + A.Primitives_objectTypeName(receiver) + "'";
    },
    noSuchMethod$1(receiver, invocation) {
      type$.Invocation._as(invocation);
      throw A.wrapException(new A.NoSuchMethodError(receiver, invocation.get$memberName(), invocation.get$positionalArguments(), invocation.get$namedArguments(), null));
    }
  };
  J.JSBool.prototype = {
    toString$0(receiver) {
      return String(receiver);
    },
    get$hashCode(receiver) {
      return receiver ? 519018 : 218159;
    },
    $isbool: 1
  };
  J.JSNull.prototype = {
    $eq(receiver, other) {
      return null == other;
    },
    toString$0(receiver) {
      return "null";
    },
    get$hashCode(receiver) {
      return 0;
    },
    $isNull: 1
  };
  J.JavaScriptObject.prototype = {};
  J.LegacyJavaScriptObject.prototype = {
    get$hashCode(receiver) {
      return 0;
    },
    toString$0(receiver) {
      return String(receiver);
    },
    $isDate: 1,
    $isPromise: 1,
    $isChapter: 1,
    $isChapterDetails: 1,
    $isSection: 1,
    $isHomeSection: 1,
    $isMangaInfo: 1,
    $isMangaTile: 1,
    $isMangaUpdates: 1,
    $isPagedResults: 1,
    $isRequest: 1,
    $isSearchField: 1,
    $isSearchRequest: 1,
    $isJsSourceInfo: 1,
    $isJsSourceTag: 1,
    $isTagSection: 1,
    get$length(obj) {
      return obj.length;
    },
    get$name(obj) {
      return obj.name;
    },
    get$type(obj) {
      return obj.type;
    },
    get$author(obj) {
      return obj.author;
    },
    get$text(obj) {
      return obj.text;
    },
    get$icon(obj) {
      return obj.icon;
    },
    get$version(obj) {
      return obj.version;
    },
    get$description(obj) {
      return obj.description;
    },
    get$contentRating(obj) {
      return obj.contentRating;
    },
    get$websiteBaseURL(obj) {
      return obj.websiteBaseURL;
    },
    get$authorWebsite(obj) {
      return obj.authorWebsite;
    },
    get$language(obj) {
      return obj.language;
    },
    get$sourceTags(obj) {
      return obj.sourceTags;
    }
  };
  J.PlainJavaScriptObject.prototype = {};
  J.UnknownJavaScriptObject.prototype = {};
  J.JavaScriptFunction.prototype = {
    toString$0(receiver) {
      var dartClosure = receiver[$.$get$DART_CLOSURE_PROPERTY_NAME()];
      if (dartClosure == null)
        return this.super$LegacyJavaScriptObject$toString(receiver);
      return "JavaScript function for " + A.S(J.toString$0$(dartClosure));
    },
    $isFunction: 1
  };
  J.JSArray.prototype = {
    add$1(receiver, value) {
      A._arrayInstanceType(receiver)._precomputed1._as(value);
      if (!!receiver.fixed$length)
        A.throwExpression(A.UnsupportedError$("add"));
      receiver.push(value);
    },
    addAll$1(receiver, collection) {
      var t1;
      A._arrayInstanceType(receiver)._eval$1("Iterable<1>")._as(collection);
      if (!!receiver.fixed$length)
        A.throwExpression(A.UnsupportedError$("addAll"));
      if (Array.isArray(collection)) {
        this._addAllFromArray$1(receiver, collection);
        return;
      }
      for (t1 = J.get$iterator$ax(collection); t1.moveNext$0();)
        receiver.push(t1.get$current());
    },
    _addAllFromArray$1(receiver, array) {
      var len, i;
      type$.JSArray_dynamic._as(array);
      len = array.length;
      if (len === 0)
        return;
      if (receiver === array)
        throw A.wrapException(A.ConcurrentModificationError$(receiver));
      for (i = 0; i < len; ++i)
        receiver.push(array[i]);
    },
    map$1$1(receiver, f, $T) {
      var t1 = A._arrayInstanceType(receiver);
      return new A.MappedListIterable(receiver, t1._bind$1($T)._eval$1("1(2)")._as(f), t1._eval$1("@<1>")._bind$1($T)._eval$1("MappedListIterable<1,2>"));
    },
    elementAt$1(receiver, index) {
      if (!(index < receiver.length))
        return A.ioore(receiver, index);
      return receiver[index];
    },
    toString$0(receiver) {
      return A.IterableBase_iterableToFullString(receiver, "[", "]");
    },
    get$iterator(receiver) {
      return new J.ArrayIterator(receiver, receiver.length, A._arrayInstanceType(receiver)._eval$1("ArrayIterator<1>"));
    },
    get$hashCode(receiver) {
      return A.Primitives_objectHashCode(receiver);
    },
    get$length(receiver) {
      return receiver.length;
    },
    $isEfficientLengthIterable: 1,
    $isIterable: 1,
    $isList: 1
  };
  J.JSUnmodifiableArray.prototype = {};
  J.ArrayIterator.prototype = {
    get$current() {
      var t1 = this._current;
      return t1 == null ? this.$ti._precomputed1._as(t1) : t1;
    },
    moveNext$0() {
      var t2, _this = this,
        t1 = _this._iterable,
        $length = t1.length;
      if (_this._length !== $length)
        throw A.wrapException(A.throwConcurrentModificationError(t1));
      t2 = _this._index;
      if (t2 >= $length) {
        _this.set$_current(null);
        return false;
      }
      _this.set$_current(t1[t2]);
      ++_this._index;
      return true;
    },
    set$_current(_current) {
      this._current = this.$ti._eval$1("1?")._as(_current);
    },
    $isIterator: 1
  };
  J.JSNumber.prototype = {
    toString$0(receiver) {
      if (receiver === 0 && 1 / receiver < 0)
        return "-0.0";
      else
        return "" + receiver;
    },
    get$hashCode(receiver) {
      var absolute, floorLog2, factor, scaled,
        intValue = receiver | 0;
      if (receiver === intValue)
        return intValue & 536870911;
      absolute = Math.abs(receiver);
      floorLog2 = Math.log(absolute) / 0.6931471805599453 | 0;
      factor = Math.pow(2, floorLog2);
      scaled = absolute < 1 ? absolute / factor : factor / absolute;
      return ((scaled * 9007199254740992 | 0) + (scaled * 3542243181176521 | 0)) * 599197 + floorLog2 * 1259 & 536870911;
    },
    _shrOtherPositive$1(receiver, other) {
      var t1;
      if (receiver > 0)
        t1 = this._shrBothPositive$1(receiver, other);
      else {
        t1 = other > 31 ? 31 : other;
        t1 = receiver >> t1 >>> 0;
      }
      return t1;
    },
    _shrBothPositive$1(receiver, other) {
      return other > 31 ? 0 : receiver >>> other;
    },
    $isdouble: 1,
    $isnum: 1
  };
  J.JSInt.prototype = {$isint: 1};
  J.JSNumNotInt.prototype = {};
  J.JSString.prototype = {
    $add(receiver, other) {
      return receiver + other;
    },
    toString$0(receiver) {
      return receiver;
    },
    get$hashCode(receiver) {
      var t1, hash, i;
      for (t1 = receiver.length, hash = 0, i = 0; i < t1; ++i) {
        hash = hash + receiver.charCodeAt(i) & 536870911;
        hash = hash + ((hash & 524287) << 10) & 536870911;
        hash ^= hash >> 6;
      }
      hash = hash + ((hash & 67108863) << 3) & 536870911;
      hash ^= hash >> 11;
      return hash + ((hash & 16383) << 15) & 536870911;
    },
    get$length(receiver) {
      return receiver.length;
    },
    $isString: 1
  };
  A.LateError.prototype = {
    toString$0(_) {
      return "LateInitializationError: " + this._message;
    }
  };
  A.EfficientLengthIterable.prototype = {};
  A.ListIterable.prototype = {
    get$iterator(_) {
      var _this = this;
      return new A.ListIterator(_this, _this.get$length(_this), _this.$ti._eval$1("ListIterator<ListIterable.E>"));
    },
    map$1$1(_, toElement, $T) {
      var t1 = this.$ti;
      return new A.MappedListIterable(this, t1._bind$1($T)._eval$1("1(ListIterable.E)")._as(toElement), t1._eval$1("@<ListIterable.E>")._bind$1($T)._eval$1("MappedListIterable<1,2>"));
    }
  };
  A.ListIterator.prototype = {
    get$current() {
      var t1 = this.__internal$_current;
      return t1 == null ? this.$ti._precomputed1._as(t1) : t1;
    },
    moveNext$0() {
      var t3, _this = this,
        t1 = _this.__internal$_iterable,
        t2 = J.getInterceptor$asx(t1),
        $length = t2.get$length(t1);
      if (_this.__internal$_length !== $length)
        throw A.wrapException(A.ConcurrentModificationError$(t1));
      t3 = _this.__internal$_index;
      if (t3 >= $length) {
        _this.set$__internal$_current(null);
        return false;
      }
      _this.set$__internal$_current(t2.elementAt$1(t1, t3));
      ++_this.__internal$_index;
      return true;
    },
    set$__internal$_current(_current) {
      this.__internal$_current = this.$ti._eval$1("1?")._as(_current);
    },
    $isIterator: 1
  };
  A.MappedIterable.prototype = {
    get$iterator(_) {
      var t1 = this.__internal$_iterable,
        t2 = A._instanceType(this);
      return new A.MappedIterator(t1.get$iterator(t1), this._f, t2._eval$1("@<1>")._bind$1(t2._rest[1])._eval$1("MappedIterator<1,2>"));
    },
    get$length(_) {
      var t1 = this.__internal$_iterable;
      return t1.get$length(t1);
    }
  };
  A.EfficientLengthMappedIterable.prototype = {$isEfficientLengthIterable: 1};
  A.MappedIterator.prototype = {
    moveNext$0() {
      var _this = this,
        t1 = _this._iterator;
      if (t1.moveNext$0()) {
        _this.set$__internal$_current(_this._f.call$1(t1.get$current()));
        return true;
      }
      _this.set$__internal$_current(null);
      return false;
    },
    get$current() {
      var t1 = this.__internal$_current;
      return t1 == null ? this.$ti._rest[1]._as(t1) : t1;
    },
    set$__internal$_current(_current) {
      this.__internal$_current = this.$ti._eval$1("2?")._as(_current);
    }
  };
  A.MappedListIterable.prototype = {
    get$length(_) {
      return J.get$length$asx(this._source);
    },
    elementAt$1(_, index) {
      return this._f.call$1(J.elementAt$1$ax(this._source, index));
    }
  };
  A.FixedLengthListMixin.prototype = {};
  A.Symbol.prototype = {
    get$hashCode(_) {
      var hash = this._hashCode;
      if (hash != null)
        return hash;
      hash = 664597 * J.get$hashCode$(this._name) & 536870911;
      this._hashCode = hash;
      return hash;
    },
    toString$0(_) {
      return 'Symbol("' + A.S(this._name) + '")';
    },
    $eq(_, other) {
      if (other == null)
        return false;
      return other instanceof A.Symbol && this._name == other._name;
    },
    $isSymbol0: 1
  };
  A.ConstantMapView.prototype = {};
  A.ConstantMap.prototype = {
    toString$0(_) {
      return A.MapBase_mapToString(this);
    },
    $isMap: 1
  };
  A.ConstantStringMap.prototype = {
    get$length(_) {
      return this.__js_helper$_length;
    },
    containsKey$1(key) {
      if (typeof key != "string")
        return false;
      if ("__proto__" === key)
        return false;
      return this.__js_helper$_jsObject.hasOwnProperty(key);
    },
    $index(_, key) {
      if (!this.containsKey$1(key))
        return null;
      return this.__js_helper$_jsObject[A._asString(key)];
    },
    forEach$1(_, f) {
      var keys, t2, t3, i, t4,
        t1 = this.$ti;
      t1._eval$1("~(1,2)")._as(f);
      keys = this._keys;
      for (t2 = keys.length, t3 = this.__js_helper$_jsObject, t1 = t1._rest[1], i = 0; i < t2; ++i) {
        t4 = A._asString(keys[i]);
        f.call$2(t4, t1._as(t3[t4]));
      }
    },
    get$keys() {
      return new A._ConstantMapKeyIterable(this, this.$ti._eval$1("_ConstantMapKeyIterable<1>"));
    }
  };
  A._ConstantMapKeyIterable.prototype = {
    get$iterator(_) {
      var t1 = this._map._keys;
      return new J.ArrayIterator(t1, t1.length, A._arrayInstanceType(t1)._eval$1("ArrayIterator<1>"));
    },
    get$length(_) {
      return this._map._keys.length;
    }
  };
  A.JSInvocationMirror.prototype = {
    get$memberName() {
      var t1 = this._memberName;
      return t1;
    },
    get$positionalArguments() {
      var t1, argumentCount, list, index, _this = this;
      if (_this.__js_helper$_kind === 1)
        return B.List_empty;
      t1 = _this._arguments;
      argumentCount = t1.length - _this._namedArgumentNames.length - _this._typeArgumentCount;
      if (argumentCount === 0)
        return B.List_empty;
      list = [];
      for (index = 0; index < argumentCount; ++index) {
        if (!(index < t1.length))
          return A.ioore(t1, index);
        list.push(t1[index]);
      }
      list.fixed$length = Array;
      list.immutable$list = Array;
      return list;
    },
    get$namedArguments() {
      var t1, namedArgumentCount, t2, namedArgumentsStartIndex, map, i, t3, t4, _this = this;
      if (_this.__js_helper$_kind !== 0)
        return B.Map_empty;
      t1 = _this._namedArgumentNames;
      namedArgumentCount = t1.length;
      t2 = _this._arguments;
      namedArgumentsStartIndex = t2.length - namedArgumentCount - _this._typeArgumentCount;
      if (namedArgumentCount === 0)
        return B.Map_empty;
      map = new A.JsLinkedHashMap(type$.JsLinkedHashMap_Symbol_dynamic);
      for (i = 0; i < namedArgumentCount; ++i) {
        if (!(i < t1.length))
          return A.ioore(t1, i);
        t3 = t1[i];
        t4 = namedArgumentsStartIndex + i;
        if (!(t4 >= 0 && t4 < t2.length))
          return A.ioore(t2, t4);
        map.$indexSet(0, new A.Symbol(t3), t2[t4]);
      }
      return new A.ConstantMapView(map, type$.ConstantMapView_Symbol_dynamic);
    },
    $isInvocation: 1
  };
  A.Primitives_functionNoSuchMethod_closure.prototype = {
    call$2($name, argument) {
      var t1;
      A._asString($name);
      t1 = this._box_0;
      t1.names = t1.names + "$" + $name;
      B.JSArray_methods.add$1(this.namedArgumentList, $name);
      B.JSArray_methods.add$1(this.$arguments, argument);
      ++t1.argumentCount;
    },
    $signature: 13
  };
  A.TypeErrorDecoder.prototype = {
    matchTypeError$1(message) {
      var result, t1, _this = this,
        match = new RegExp(_this._pattern).exec(message);
      if (match == null)
        return null;
      result = Object.create(null);
      t1 = _this._arguments;
      if (t1 !== -1)
        result.arguments = match[t1 + 1];
      t1 = _this._argumentsExpr;
      if (t1 !== -1)
        result.argumentsExpr = match[t1 + 1];
      t1 = _this._expr;
      if (t1 !== -1)
        result.expr = match[t1 + 1];
      t1 = _this._method;
      if (t1 !== -1)
        result.method = match[t1 + 1];
      t1 = _this._receiver;
      if (t1 !== -1)
        result.receiver = match[t1 + 1];
      return result;
    }
  };
  A.NullError.prototype = {
    toString$0(_) {
      var t1 = this._method;
      if (t1 == null)
        return "NoSuchMethodError: " + this.__js_helper$_message;
      return "NoSuchMethodError: method not found: '" + t1 + "' on null";
    }
  };
  A.JsNoSuchMethodError.prototype = {
    toString$0(_) {
      var t2, _this = this,
        _s38_ = "NoSuchMethodError: method not found: '",
        t1 = _this._method;
      if (t1 == null)
        return "NoSuchMethodError: " + _this.__js_helper$_message;
      t2 = _this._receiver;
      if (t2 == null)
        return _s38_ + t1 + "' (" + _this.__js_helper$_message + ")";
      return _s38_ + t1 + "' on '" + t2 + "' (" + _this.__js_helper$_message + ")";
    }
  };
  A.UnknownJsTypeError.prototype = {
    toString$0(_) {
      var t1 = this.__js_helper$_message;
      return t1.length === 0 ? "Error" : "Error: " + t1;
    }
  };
  A.NullThrownFromJavaScriptException.prototype = {
    toString$0(_) {
      return "Throw of null ('" + (this._irritant === null ? "null" : "undefined") + "' from JavaScript)";
    }
  };
  A.ExceptionAndStackTrace.prototype = {};
  A._StackTrace.prototype = {
    toString$0(_) {
      var trace,
        t1 = this._trace;
      if (t1 != null)
        return t1;
      t1 = this._exception;
      trace = t1 !== null && typeof t1 === "object" ? t1.stack : null;
      return this._trace = trace == null ? "" : trace;
    },
    $isStackTrace: 1
  };
  A.Closure.prototype = {
    toString$0(_) {
      var $constructor = this.constructor,
        $name = $constructor == null ? null : $constructor.name;
      return "Closure '" + A.unminifyOrTag($name == null ? "unknown" : $name) + "'";
    },
    $isFunction: 1,
    get$$call() {
      return this;
    },
    "call*": "call$1",
    $requiredArgCount: 1,
    $defaultValues: null
  };
  A.Closure0Args.prototype = {"call*": "call$0", $requiredArgCount: 0};
  A.Closure2Args.prototype = {"call*": "call$2", $requiredArgCount: 2};
  A.TearOffClosure.prototype = {};
  A.StaticClosure.prototype = {
    toString$0(_) {
      var $name = this.$static_name;
      if ($name == null)
        return "Closure of unknown static method";
      return "Closure '" + A.unminifyOrTag($name) + "'";
    }
  };
  A.BoundClosure.prototype = {
    $eq(_, other) {
      if (other == null)
        return false;
      if (this === other)
        return true;
      if (!(other instanceof A.BoundClosure))
        return false;
      return this.$_target === other.$_target && this._receiver === other._receiver;
    },
    get$hashCode(_) {
      return (A.objectHashCode(this._receiver) ^ A.Primitives_objectHashCode(this.$_target)) >>> 0;
    },
    toString$0(_) {
      return "Closure '" + this.$_name + "' of " + ("Instance of '" + A.Primitives_objectTypeName(this._receiver) + "'");
    }
  };
  A.RuntimeError.prototype = {
    toString$0(_) {
      return "RuntimeError: " + this.message;
    }
  };
  A._Required.prototype = {};
  A.JsLinkedHashMap.prototype = {
    get$length(_) {
      return this.__js_helper$_length;
    },
    get$keys() {
      return new A.LinkedHashMapKeyIterable(this, A._instanceType(this)._eval$1("LinkedHashMapKeyIterable<1>"));
    },
    containsKey$1(key) {
      var strings = this._strings;
      if (strings == null)
        return false;
      return strings[key] != null;
    },
    $index(_, key) {
      var strings, cell, t1, nums, _null = null;
      if (typeof key == "string") {
        strings = this._strings;
        if (strings == null)
          return _null;
        cell = strings[key];
        t1 = cell == null ? _null : cell.hashMapCellValue;
        return t1;
      } else if (typeof key == "number" && (key & 0x3fffffff) === key) {
        nums = this._nums;
        if (nums == null)
          return _null;
        cell = nums[key];
        t1 = cell == null ? _null : cell.hashMapCellValue;
        return t1;
      } else
        return this.internalGet$1(key);
    },
    internalGet$1(key) {
      var bucket, index,
        rest = this.__js_helper$_rest;
      if (rest == null)
        return null;
      bucket = rest[this.internalComputeHashCode$1(key)];
      index = this.internalFindBucketIndex$2(bucket, key);
      if (index < 0)
        return null;
      return bucket[index].hashMapCellValue;
    },
    $indexSet(_, key, value) {
      var strings, nums, _this = this,
        t1 = A._instanceType(_this);
      t1._precomputed1._as(key);
      t1._rest[1]._as(value);
      if (typeof key == "string") {
        strings = _this._strings;
        _this._addHashTableEntry$3(strings == null ? _this._strings = _this._newHashTable$0() : strings, key, value);
      } else if (typeof key == "number" && (key & 0x3fffffff) === key) {
        nums = _this._nums;
        _this._addHashTableEntry$3(nums == null ? _this._nums = _this._newHashTable$0() : nums, key, value);
      } else
        _this.internalSet$2(key, value);
    },
    internalSet$2(key, value) {
      var rest, hash, bucket, index, _this = this,
        t1 = A._instanceType(_this);
      t1._precomputed1._as(key);
      t1._rest[1]._as(value);
      rest = _this.__js_helper$_rest;
      if (rest == null)
        rest = _this.__js_helper$_rest = _this._newHashTable$0();
      hash = _this.internalComputeHashCode$1(key);
      bucket = rest[hash];
      if (bucket == null)
        rest[hash] = [_this._newLinkedCell$2(key, value)];
      else {
        index = _this.internalFindBucketIndex$2(bucket, key);
        if (index >= 0)
          bucket[index].hashMapCellValue = value;
        else
          bucket.push(_this._newLinkedCell$2(key, value));
      }
    },
    forEach$1(_, action) {
      var cell, modifications, _this = this;
      A._instanceType(_this)._eval$1("~(1,2)")._as(action);
      cell = _this._first;
      modifications = _this._modifications;
      for (; cell != null;) {
        action.call$2(cell.hashMapCellKey, cell.hashMapCellValue);
        if (modifications !== _this._modifications)
          throw A.wrapException(A.ConcurrentModificationError$(_this));
        cell = cell._next;
      }
    },
    _addHashTableEntry$3(table, key, value) {
      var cell,
        t1 = A._instanceType(this);
      t1._precomputed1._as(key);
      t1._rest[1]._as(value);
      cell = table[key];
      if (cell == null)
        table[key] = this._newLinkedCell$2(key, value);
      else
        cell.hashMapCellValue = value;
    },
    _newLinkedCell$2(key, value) {
      var _this = this,
        t1 = A._instanceType(_this),
        cell = new A.LinkedHashMapCell(t1._precomputed1._as(key), t1._rest[1]._as(value));
      if (_this._first == null)
        _this._first = _this._last = cell;
      else
        _this._last = _this._last._next = cell;
      ++_this.__js_helper$_length;
      _this._modifications = _this._modifications + 1 & 1073741823;
      return cell;
    },
    internalComputeHashCode$1(key) {
      return J.get$hashCode$(key) & 0x3fffffff;
    },
    internalFindBucketIndex$2(bucket, key) {
      var $length, i;
      if (bucket == null)
        return -1;
      $length = bucket.length;
      for (i = 0; i < $length; ++i)
        if (J.$eq$(bucket[i].hashMapCellKey, key))
          return i;
      return -1;
    },
    toString$0(_) {
      return A.MapBase_mapToString(this);
    },
    _newHashTable$0() {
      var table = Object.create(null);
      table["<non-identifier-key>"] = table;
      delete table["<non-identifier-key>"];
      return table;
    },
    $isLinkedHashMap: 1
  };
  A.LinkedHashMapCell.prototype = {};
  A.LinkedHashMapKeyIterable.prototype = {
    get$length(_) {
      return this._map.__js_helper$_length;
    },
    get$iterator(_) {
      var t1 = this._map,
        t2 = new A.LinkedHashMapKeyIterator(t1, t1._modifications, this.$ti._eval$1("LinkedHashMapKeyIterator<1>"));
      t2._cell = t1._first;
      return t2;
    }
  };
  A.LinkedHashMapKeyIterator.prototype = {
    get$current() {
      return this.__js_helper$_current;
    },
    moveNext$0() {
      var cell, _this = this,
        t1 = _this._map;
      if (_this._modifications !== t1._modifications)
        throw A.wrapException(A.ConcurrentModificationError$(t1));
      cell = _this._cell;
      if (cell == null) {
        _this.set$__js_helper$_current(null);
        return false;
      } else {
        _this.set$__js_helper$_current(cell.hashMapCellKey);
        _this._cell = cell._next;
        return true;
      }
    },
    set$__js_helper$_current(_current) {
      this.__js_helper$_current = this.$ti._eval$1("1?")._as(_current);
    },
    $isIterator: 1
  };
  A.initHooks_closure.prototype = {
    call$1(o) {
      return this.getTag(o);
    },
    $signature: 2
  };
  A.initHooks_closure0.prototype = {
    call$2(o, tag) {
      return this.getUnknownTag(o, tag);
    },
    $signature: 7
  };
  A.initHooks_closure1.prototype = {
    call$1(tag) {
      return this.prototypeForTag(A._asString(tag));
    },
    $signature: 36
  };
  A.NativeTypedData.prototype = {$isTypedData: 1};
  A.NativeTypedArray.prototype = {
    get$length(receiver) {
      return receiver.length;
    },
    $isJavaScriptIndexingBehavior: 1
  };
  A.NativeTypedArrayOfDouble.prototype = {
    $index(receiver, index) {
      A._checkValidIndex(index, receiver, receiver.length);
      return receiver[index];
    },
    $isEfficientLengthIterable: 1,
    $isIterable: 1,
    $isList: 1
  };
  A.NativeTypedArrayOfInt.prototype = {$isEfficientLengthIterable: 1, $isIterable: 1, $isList: 1};
  A.NativeInt16List.prototype = {
    $index(receiver, index) {
      A._checkValidIndex(index, receiver, receiver.length);
      return receiver[index];
    }
  };
  A.NativeInt32List.prototype = {
    $index(receiver, index) {
      A._checkValidIndex(index, receiver, receiver.length);
      return receiver[index];
    }
  };
  A.NativeInt8List.prototype = {
    $index(receiver, index) {
      A._checkValidIndex(index, receiver, receiver.length);
      return receiver[index];
    }
  };
  A.NativeUint16List.prototype = {
    $index(receiver, index) {
      A._checkValidIndex(index, receiver, receiver.length);
      return receiver[index];
    }
  };
  A.NativeUint32List.prototype = {
    $index(receiver, index) {
      A._checkValidIndex(index, receiver, receiver.length);
      return receiver[index];
    }
  };
  A.NativeUint8ClampedList.prototype = {
    get$length(receiver) {
      return receiver.length;
    },
    $index(receiver, index) {
      A._checkValidIndex(index, receiver, receiver.length);
      return receiver[index];
    }
  };
  A.NativeUint8List.prototype = {
    get$length(receiver) {
      return receiver.length;
    },
    $index(receiver, index) {
      A._checkValidIndex(index, receiver, receiver.length);
      return receiver[index];
    }
  };
  A._NativeTypedArrayOfDouble_NativeTypedArray_ListMixin.prototype = {};
  A._NativeTypedArrayOfDouble_NativeTypedArray_ListMixin_FixedLengthListMixin.prototype = {};
  A._NativeTypedArrayOfInt_NativeTypedArray_ListMixin.prototype = {};
  A._NativeTypedArrayOfInt_NativeTypedArray_ListMixin_FixedLengthListMixin.prototype = {};
  A.Rti.prototype = {
    _eval$1(recipe) {
      return A._Universe_evalInEnvironment(init.typeUniverse, this, recipe);
    },
    _bind$1(typeOrTuple) {
      return A._Universe_bind(init.typeUniverse, this, typeOrTuple);
    }
  };
  A._FunctionParameters.prototype = {};
  A._Error.prototype = {
    toString$0(_) {
      return this.__rti$_message;
    }
  };
  A._TypeError.prototype = {$isTypeError: 1};
  A._AsyncRun__initializeScheduleImmediate_internalCallback.prototype = {
    call$1(_) {
      var t1 = this._box_0,
        f = t1.storedCallback;
      t1.storedCallback = null;
      f.call$0();
    },
    $signature: 3
  };
  A._AsyncRun__initializeScheduleImmediate_closure.prototype = {
    call$1(callback) {
      var t1, t2;
      this._box_0.storedCallback = type$.void_Function._as(callback);
      t1 = this.div;
      t2 = this.span;
      t1.firstChild ? t1.removeChild(t2) : t1.appendChild(t2);
    },
    $signature: 33
  };
  A._AsyncRun__scheduleImmediateJsOverride_internalCallback.prototype = {
    call$0() {
      this.callback.call$0();
    },
    $signature: 4
  };
  A._AsyncRun__scheduleImmediateWithSetImmediate_internalCallback.prototype = {
    call$0() {
      this.callback.call$0();
    },
    $signature: 4
  };
  A._TimerImpl.prototype = {
    _TimerImpl$2(milliseconds, callback) {
      if (self.setTimeout != null)
        self.setTimeout(A.convertDartClosureToJS(new A._TimerImpl_internalCallback(this, callback), 0), milliseconds);
      else
        throw A.wrapException(A.UnsupportedError$("`setTimeout()` not found."));
    }
  };
  A._TimerImpl_internalCallback.prototype = {
    call$0() {
      this.callback.call$0();
    },
    $signature: 0
  };
  A._AsyncAwaitCompleter.prototype = {};
  A._awaitOnObject_closure.prototype = {
    call$1(result) {
      return this.bodyFunction.call$2(0, result);
    },
    $signature: 8
  };
  A._awaitOnObject_closure0.prototype = {
    call$2(error, stackTrace) {
      this.bodyFunction.call$2(1, new A.ExceptionAndStackTrace(error, type$.StackTrace._as(stackTrace)));
    },
    $signature: 9
  };
  A._wrapJsFunctionForAsync_closure.prototype = {
    call$2(errorCode, result) {
      this.$protected(A._asInt(errorCode), result);
    },
    $signature: 10
  };
  A.AsyncError.prototype = {
    toString$0(_) {
      return A.S(this.error);
    },
    $isError: 1,
    get$stackTrace() {
      return this.stackTrace;
    }
  };
  A._FutureListener.prototype = {
    matchesErrorTest$1(asyncError) {
      if ((this.state & 15) !== 6)
        return true;
      return this.result._zone.runUnary$2$2(type$.bool_Function_Object._as(this.callback), asyncError.error, type$.bool, type$.Object);
    },
    handleError$1(asyncError) {
      var exception, _this = this,
        errorCallback = _this.errorCallback,
        result = null,
        t1 = type$.dynamic,
        t2 = type$.Object,
        t3 = asyncError.error,
        t4 = _this.result._zone;
      if (type$.dynamic_Function_Object_StackTrace._is(errorCallback))
        result = t4.runBinary$3$3(errorCallback, t3, asyncError.stackTrace, t1, t2, type$.StackTrace);
      else
        result = t4.runUnary$2$2(type$.dynamic_Function_Object._as(errorCallback), t3, t1, t2);
      try {
        t1 = _this.$ti._eval$1("2/")._as(result);
        return t1;
      } catch (exception) {
        if (type$.TypeError._is(A.unwrapException(exception))) {
          if ((_this.state & 1) !== 0)
            throw A.wrapException(A.ArgumentError$("The error handler of Future.then must return a value of the returned future's type", "onError"));
          throw A.wrapException(A.ArgumentError$("The error handler of Future.catchError must return a value of the future's type", "onError"));
        } else
          throw exception;
      }
    }
  };
  A._Future.prototype = {
    then$1$2$onError(_, f, onError, $R) {
      var currentZone, result, t2,
        t1 = this.$ti;
      t1._bind$1($R)._eval$1("1/(2)")._as(f);
      currentZone = $.Zone__current;
      if (currentZone === B.C__RootZone) {
        if (onError != null && !type$.dynamic_Function_Object_StackTrace._is(onError) && !type$.dynamic_Function_Object._is(onError))
          throw A.wrapException(A.ArgumentError$value(onError, "onError", string$.Error_));
      } else {
        $R._eval$1("@<0/>")._bind$1(t1._precomputed1)._eval$1("1(2)")._as(f);
        if (onError != null)
          onError = A._registerErrorHandler(onError, currentZone);
      }
      result = new A._Future(currentZone, $R._eval$1("_Future<0>"));
      t2 = onError == null ? 1 : 3;
      this._addListener$1(new A._FutureListener(result, t2, f, onError, t1._eval$1("@<1>")._bind$1($R)._eval$1("_FutureListener<1,2>")));
      return result;
    },
    then$1$1($receiver, f, $R) {
      return this.then$1$2$onError($receiver, f, null, $R);
    },
    _thenAwait$1$2(f, onError, $E) {
      var result,
        t1 = this.$ti;
      t1._bind$1($E)._eval$1("1/(2)")._as(f);
      result = new A._Future($.Zone__current, $E._eval$1("_Future<0>"));
      this._addListener$1(new A._FutureListener(result, 3, f, onError, t1._eval$1("@<1>")._bind$1($E)._eval$1("_FutureListener<1,2>")));
      return result;
    },
    _setErrorObject$1(error) {
      this._state = this._state & 1 | 16;
      this._resultOrListeners = error;
    },
    _cloneResult$1(source) {
      this._state = source._state & 30 | this._state & 1;
      this._resultOrListeners = source._resultOrListeners;
    },
    _addListener$1(listener) {
      var source, _this = this,
        t1 = _this._state;
      if (t1 <= 3) {
        listener._nextListener = type$.nullable__FutureListener_dynamic_dynamic._as(_this._resultOrListeners);
        _this._resultOrListeners = listener;
      } else {
        if ((t1 & 4) !== 0) {
          source = type$._Future_dynamic._as(_this._resultOrListeners);
          if ((source._state & 24) === 0) {
            source._addListener$1(listener);
            return;
          }
          _this._cloneResult$1(source);
        }
        A._rootScheduleMicrotask(null, null, _this._zone, type$.void_Function._as(new A._Future__addListener_closure(_this, listener)));
      }
    },
    _prependListeners$1(listeners) {
      var t1, existingListeners, next, cursor, next0, source, _this = this, _box_0 = {};
      _box_0.listeners = listeners;
      if (listeners == null)
        return;
      t1 = _this._state;
      if (t1 <= 3) {
        existingListeners = type$.nullable__FutureListener_dynamic_dynamic._as(_this._resultOrListeners);
        _this._resultOrListeners = listeners;
        if (existingListeners != null) {
          next = listeners._nextListener;
          for (cursor = listeners; next != null; cursor = next, next = next0)
            next0 = next._nextListener;
          cursor._nextListener = existingListeners;
        }
      } else {
        if ((t1 & 4) !== 0) {
          source = type$._Future_dynamic._as(_this._resultOrListeners);
          if ((source._state & 24) === 0) {
            source._prependListeners$1(listeners);
            return;
          }
          _this._cloneResult$1(source);
        }
        _box_0.listeners = _this._reverseListeners$1(listeners);
        A._rootScheduleMicrotask(null, null, _this._zone, type$.void_Function._as(new A._Future__prependListeners_closure(_box_0, _this)));
      }
    },
    _removeListeners$0() {
      var current = type$.nullable__FutureListener_dynamic_dynamic._as(this._resultOrListeners);
      this._resultOrListeners = null;
      return this._reverseListeners$1(current);
    },
    _reverseListeners$1(listeners) {
      var current, prev, next;
      for (current = listeners, prev = null; current != null; prev = current, current = next) {
        next = current._nextListener;
        current._nextListener = prev;
      }
      return prev;
    },
    _chainForeignFuture$1(source) {
      var e, s, exception, _this = this;
      _this._state ^= 2;
      try {
        source.then$1$2$onError(0, new A._Future__chainForeignFuture_closure(_this), new A._Future__chainForeignFuture_closure0(_this), type$.Null);
      } catch (exception) {
        e = A.unwrapException(exception);
        s = A.getTraceFromException(exception);
        A.scheduleMicrotask(new A._Future__chainForeignFuture_closure1(_this, e, s));
      }
    },
    _completeWithValue$1(value) {
      var listeners, _this = this;
      _this.$ti._precomputed1._as(value);
      listeners = _this._removeListeners$0();
      _this._state = 8;
      _this._resultOrListeners = value;
      A._Future__propagateToListeners(_this, listeners);
    },
    _completeError$2(error, stackTrace) {
      var listeners;
      type$.StackTrace._as(stackTrace);
      listeners = this._removeListeners$0();
      this._setErrorObject$1(A.AsyncError$(error, stackTrace));
      A._Future__propagateToListeners(this, listeners);
    },
    _asyncComplete$1(value) {
      var t1 = this.$ti;
      t1._eval$1("1/")._as(value);
      if (t1._eval$1("Future<1>")._is(value)) {
        this._chainFuture$1(value);
        return;
      }
      this._asyncCompleteWithValue$1(t1._precomputed1._as(value));
    },
    _asyncCompleteWithValue$1(value) {
      var _this = this;
      _this.$ti._precomputed1._as(value);
      _this._state ^= 2;
      A._rootScheduleMicrotask(null, null, _this._zone, type$.void_Function._as(new A._Future__asyncCompleteWithValue_closure(_this, value)));
    },
    _chainFuture$1(value) {
      var _this = this,
        t1 = _this.$ti;
      t1._eval$1("Future<1>")._as(value);
      if (t1._is(value)) {
        if ((value._state & 16) !== 0) {
          _this._state ^= 2;
          A._rootScheduleMicrotask(null, null, _this._zone, type$.void_Function._as(new A._Future__chainFuture_closure(_this, value)));
        } else
          A._Future__chainCoreFuture(value, _this);
        return;
      }
      _this._chainForeignFuture$1(value);
    },
    _asyncCompleteError$2(error, stackTrace) {
      this._state ^= 2;
      A._rootScheduleMicrotask(null, null, this._zone, type$.void_Function._as(new A._Future__asyncCompleteError_closure(this, error, stackTrace)));
    },
    $isFuture: 1
  };
  A._Future__addListener_closure.prototype = {
    call$0() {
      A._Future__propagateToListeners(this.$this, this.listener);
    },
    $signature: 0
  };
  A._Future__prependListeners_closure.prototype = {
    call$0() {
      A._Future__propagateToListeners(this.$this, this._box_0.listeners);
    },
    $signature: 0
  };
  A._Future__chainForeignFuture_closure.prototype = {
    call$1(value) {
      var error, stackTrace, exception,
        t1 = this.$this;
      t1._state ^= 2;
      try {
        t1._completeWithValue$1(t1.$ti._precomputed1._as(value));
      } catch (exception) {
        error = A.unwrapException(exception);
        stackTrace = A.getTraceFromException(exception);
        t1._completeError$2(error, stackTrace);
      }
    },
    $signature: 3
  };
  A._Future__chainForeignFuture_closure0.prototype = {
    call$2(error, stackTrace) {
      this.$this._completeError$2(type$.Object._as(error), type$.StackTrace._as(stackTrace));
    },
    $signature: 11
  };
  A._Future__chainForeignFuture_closure1.prototype = {
    call$0() {
      this.$this._completeError$2(this.e, this.s);
    },
    $signature: 0
  };
  A._Future__asyncCompleteWithValue_closure.prototype = {
    call$0() {
      this.$this._completeWithValue$1(this.value);
    },
    $signature: 0
  };
  A._Future__chainFuture_closure.prototype = {
    call$0() {
      A._Future__chainCoreFuture(this.value, this.$this);
    },
    $signature: 0
  };
  A._Future__asyncCompleteError_closure.prototype = {
    call$0() {
      this.$this._completeError$2(this.error, this.stackTrace);
    },
    $signature: 0
  };
  A._Future__propagateToListeners_handleWhenCompleteCallback.prototype = {
    call$0() {
      var e, s, t1, exception, t2, originalSource, _this = this, completeResult = null;
      try {
        t1 = _this._box_0.listener;
        completeResult = t1.result._zone.run$1$1(type$.dynamic_Function._as(t1.callback), type$.dynamic);
      } catch (exception) {
        e = A.unwrapException(exception);
        s = A.getTraceFromException(exception);
        t1 = _this.hasError && type$.AsyncError._as(_this._box_1.source._resultOrListeners).error === e;
        t2 = _this._box_0;
        if (t1)
          t2.listenerValueOrError = type$.AsyncError._as(_this._box_1.source._resultOrListeners);
        else
          t2.listenerValueOrError = A.AsyncError$(e, s);
        t2.listenerHasError = true;
        return;
      }
      if (completeResult instanceof A._Future && (completeResult._state & 24) !== 0) {
        if ((completeResult._state & 16) !== 0) {
          t1 = _this._box_0;
          t1.listenerValueOrError = type$.AsyncError._as(completeResult._resultOrListeners);
          t1.listenerHasError = true;
        }
        return;
      }
      if (type$.Future_dynamic._is(completeResult)) {
        originalSource = _this._box_1.source;
        t1 = _this._box_0;
        t1.listenerValueOrError = J.then$1$1$z(completeResult, new A._Future__propagateToListeners_handleWhenCompleteCallback_closure(originalSource), type$.dynamic);
        t1.listenerHasError = false;
      }
    },
    $signature: 0
  };
  A._Future__propagateToListeners_handleWhenCompleteCallback_closure.prototype = {
    call$1(_) {
      return this.originalSource;
    },
    $signature: 12
  };
  A._Future__propagateToListeners_handleValueCallback.prototype = {
    call$0() {
      var e, s, t1, t2, t3, t4, t5, exception;
      try {
        t1 = this._box_0;
        t2 = t1.listener;
        t3 = t2.$ti;
        t4 = t3._precomputed1;
        t5 = t4._as(this.sourceResult);
        t1.listenerValueOrError = t2.result._zone.runUnary$2$2(t3._eval$1("2/(1)")._as(t2.callback), t5, t3._eval$1("2/"), t4);
      } catch (exception) {
        e = A.unwrapException(exception);
        s = A.getTraceFromException(exception);
        t1 = this._box_0;
        t1.listenerValueOrError = A.AsyncError$(e, s);
        t1.listenerHasError = true;
      }
    },
    $signature: 0
  };
  A._Future__propagateToListeners_handleError.prototype = {
    call$0() {
      var asyncError, e, s, t1, exception, t2, _this = this;
      try {
        asyncError = type$.AsyncError._as(_this._box_1.source._resultOrListeners);
        t1 = _this._box_0;
        if (t1.listener.matchesErrorTest$1(asyncError) && t1.listener.errorCallback != null) {
          t1.listenerValueOrError = t1.listener.handleError$1(asyncError);
          t1.listenerHasError = false;
        }
      } catch (exception) {
        e = A.unwrapException(exception);
        s = A.getTraceFromException(exception);
        t1 = type$.AsyncError._as(_this._box_1.source._resultOrListeners);
        t2 = _this._box_0;
        if (t1.error === e)
          t2.listenerValueOrError = t1;
        else
          t2.listenerValueOrError = A.AsyncError$(e, s);
        t2.listenerHasError = true;
      }
    },
    $signature: 0
  };
  A._AsyncCallbackEntry.prototype = {};
  A._StreamIterator.prototype = {};
  A._Zone.prototype = {$isZone: 1};
  A._rootHandleError_closure.prototype = {
    call$0() {
      var t1 = this.error,
        t2 = this.stackTrace;
      A.checkNotNullable(t1, "error", type$.Object);
      A.checkNotNullable(t2, "stackTrace", type$.StackTrace);
      A.Error__throw(t1, t2);
    },
    $signature: 0
  };
  A._RootZone.prototype = {
    runGuarded$1(f) {
      var e, s, exception;
      type$.void_Function._as(f);
      try {
        if (B.C__RootZone === $.Zone__current) {
          f.call$0();
          return;
        }
        A._rootRun(null, null, this, f, type$.void);
      } catch (exception) {
        e = A.unwrapException(exception);
        s = A.getTraceFromException(exception);
        A._rootHandleError(type$.Object._as(e), type$.StackTrace._as(s));
      }
    },
    bindCallbackGuarded$1(f) {
      return new A._RootZone_bindCallbackGuarded_closure(this, type$.void_Function._as(f));
    },
    run$1$1(f, $R) {
      $R._eval$1("0()")._as(f);
      if ($.Zone__current === B.C__RootZone)
        return f.call$0();
      return A._rootRun(null, null, this, f, $R);
    },
    runUnary$2$2(f, arg, $R, $T) {
      $R._eval$1("@<0>")._bind$1($T)._eval$1("1(2)")._as(f);
      $T._as(arg);
      if ($.Zone__current === B.C__RootZone)
        return f.call$1(arg);
      return A._rootRunUnary(null, null, this, f, arg, $R, $T);
    },
    runBinary$3$3(f, arg1, arg2, $R, T1, T2) {
      $R._eval$1("@<0>")._bind$1(T1)._bind$1(T2)._eval$1("1(2,3)")._as(f);
      T1._as(arg1);
      T2._as(arg2);
      if ($.Zone__current === B.C__RootZone)
        return f.call$2(arg1, arg2);
      return A._rootRunBinary(null, null, this, f, arg1, arg2, $R, T1, T2);
    },
    registerBinaryCallback$3$1(f, $R, T1, T2) {
      return $R._eval$1("@<0>")._bind$1(T1)._bind$1(T2)._eval$1("1(2,3)")._as(f);
    }
  };
  A._RootZone_bindCallbackGuarded_closure.prototype = {
    call$0() {
      return this.$this.runGuarded$1(this.f);
    },
    $signature: 0
  };
  A._HashMap.prototype = {
    get$length(_) {
      return this._collection$_length;
    },
    get$keys() {
      return new A._HashMapKeyIterable(this, this.$ti._eval$1("_HashMapKeyIterable<1>"));
    },
    containsKey$1(key) {
      var strings, nums;
      if (typeof key == "string" && key !== "__proto__") {
        strings = this._collection$_strings;
        return strings == null ? false : strings[key] != null;
      } else if (typeof key == "number" && (key & 1073741823) === key) {
        nums = this._collection$_nums;
        return nums == null ? false : nums[key] != null;
      } else
        return this._containsKey$1(key);
    },
    _containsKey$1(key) {
      var rest = this._collection$_rest;
      if (rest == null)
        return false;
      return this._findBucketIndex$2(this._getBucket$2(rest, key), key) >= 0;
    },
    $index(_, key) {
      var strings, t1, nums;
      if (typeof key == "string" && key !== "__proto__") {
        strings = this._collection$_strings;
        t1 = strings == null ? null : A._HashMap__getTableEntry(strings, key);
        return t1;
      } else if (typeof key == "number" && (key & 1073741823) === key) {
        nums = this._collection$_nums;
        t1 = nums == null ? null : A._HashMap__getTableEntry(nums, key);
        return t1;
      } else
        return this._get$1(key);
    },
    _get$1(key) {
      var bucket, index,
        rest = this._collection$_rest;
      if (rest == null)
        return null;
      bucket = this._getBucket$2(rest, key);
      index = this._findBucketIndex$2(bucket, key);
      return index < 0 ? null : bucket[index + 1];
    },
    $indexSet(_, key, value) {
      var rest, hash, bucket, index, _this = this,
        t1 = _this.$ti;
      t1._precomputed1._as(key);
      t1._rest[1]._as(value);
      rest = _this._collection$_rest;
      if (rest == null)
        rest = _this._collection$_rest = A._HashMap__newHashTable();
      hash = A.objectHashCode(key) & 1073741823;
      bucket = rest[hash];
      if (bucket == null) {
        A._HashMap__setTableEntry(rest, hash, [key, value]);
        ++_this._collection$_length;
        _this._collection$_keys = null;
      } else {
        index = _this._findBucketIndex$2(bucket, key);
        if (index >= 0)
          bucket[index + 1] = value;
        else {
          bucket.push(key, value);
          ++_this._collection$_length;
          _this._collection$_keys = null;
        }
      }
    },
    forEach$1(_, action) {
      var keys, $length, t2, i, key, t3, _this = this,
        t1 = _this.$ti;
      t1._eval$1("~(1,2)")._as(action);
      keys = _this._computeKeys$0();
      for ($length = keys.length, t2 = t1._precomputed1, t1 = t1._rest[1], i = 0; i < $length; ++i) {
        key = keys[i];
        t2._as(key);
        t3 = _this.$index(0, key);
        action.call$2(key, t3 == null ? t1._as(t3) : t3);
        if (keys !== _this._collection$_keys)
          throw A.wrapException(A.ConcurrentModificationError$(_this));
      }
    },
    _computeKeys$0() {
      var strings, names, entries, index, i, nums, rest, bucket, $length, i0, _this = this,
        result = _this._collection$_keys;
      if (result != null)
        return result;
      result = A.List_List$filled(_this._collection$_length, null, false, type$.dynamic);
      strings = _this._collection$_strings;
      if (strings != null) {
        names = Object.getOwnPropertyNames(strings);
        entries = names.length;
        for (index = 0, i = 0; i < entries; ++i) {
          result[index] = names[i];
          ++index;
        }
      } else
        index = 0;
      nums = _this._collection$_nums;
      if (nums != null) {
        names = Object.getOwnPropertyNames(nums);
        entries = names.length;
        for (i = 0; i < entries; ++i) {
          result[index] = +names[i];
          ++index;
        }
      }
      rest = _this._collection$_rest;
      if (rest != null) {
        names = Object.getOwnPropertyNames(rest);
        entries = names.length;
        for (i = 0; i < entries; ++i) {
          bucket = rest[names[i]];
          $length = bucket.length;
          for (i0 = 0; i0 < $length; i0 += 2) {
            result[index] = bucket[i0];
            ++index;
          }
        }
      }
      return _this._collection$_keys = result;
    },
    _getBucket$2(table, key) {
      return table[A.objectHashCode(key) & 1073741823];
    }
  };
  A._IdentityHashMap.prototype = {
    _findBucketIndex$2(bucket, key) {
      var $length, i, t1;
      if (bucket == null)
        return -1;
      $length = bucket.length;
      for (i = 0; i < $length; i += 2) {
        t1 = bucket[i];
        if (t1 == null ? key == null : t1 === key)
          return i;
      }
      return -1;
    }
  };
  A._HashMapKeyIterable.prototype = {
    get$length(_) {
      return this._collection$_map._collection$_length;
    },
    get$iterator(_) {
      var t1 = this._collection$_map;
      return new A._HashMapKeyIterator(t1, t1._computeKeys$0(), this.$ti._eval$1("_HashMapKeyIterator<1>"));
    }
  };
  A._HashMapKeyIterator.prototype = {
    get$current() {
      var t1 = this._collection$_current;
      return t1 == null ? this.$ti._precomputed1._as(t1) : t1;
    },
    moveNext$0() {
      var _this = this,
        keys = _this._collection$_keys,
        offset = _this._offset,
        t1 = _this._collection$_map;
      if (keys !== t1._collection$_keys)
        throw A.wrapException(A.ConcurrentModificationError$(t1));
      else if (offset >= keys.length) {
        _this.set$_collection$_current(null);
        return false;
      } else {
        _this.set$_collection$_current(keys[offset]);
        _this._offset = offset + 1;
        return true;
      }
    },
    set$_collection$_current(_current) {
      this._collection$_current = this.$ti._eval$1("1?")._as(_current);
    },
    $isIterator: 1
  };
  A.ListMixin.prototype = {
    get$iterator(receiver) {
      return new A.ListIterator(receiver, this.get$length(receiver), A.instanceType(receiver)._eval$1("ListIterator<ListMixin.E>"));
    },
    elementAt$1(receiver, index) {
      return this.$index(receiver, index);
    },
    map$1$1(receiver, f, $T) {
      var t1 = A.instanceType(receiver);
      return new A.MappedListIterable(receiver, t1._bind$1($T)._eval$1("1(ListMixin.E)")._as(f), t1._eval$1("@<ListMixin.E>")._bind$1($T)._eval$1("MappedListIterable<1,2>"));
    },
    toString$0(receiver) {
      return A.IterableBase_iterableToFullString(receiver, "[", "]");
    }
  };
  A.MapBase.prototype = {};
  A.MapBase_mapToString_closure.prototype = {
    call$2(k, v) {
      var t2,
        t1 = this._box_0;
      if (!t1.first)
        this.result._contents += ", ";
      t1.first = false;
      t1 = this.result;
      t2 = t1._contents += A.S(k);
      t1._contents = t2 + ": ";
      t1._contents += A.S(v);
    },
    $signature: 6
  };
  A.MapMixin.prototype = {
    forEach$1(_, action) {
      var t2, key, t3,
        t1 = A._instanceType(this);
      t1._eval$1("~(1,2)")._as(action);
      for (t2 = this.get$keys(), t2 = t2.get$iterator(t2), t1 = t1._rest[1]; t2.moveNext$0();) {
        key = t2.get$current();
        t3 = this.$index(0, key);
        action.call$2(key, t3 == null ? t1._as(t3) : t3);
      }
    },
    get$length(_) {
      var t1 = this.get$keys();
      return t1.get$length(t1);
    },
    toString$0(_) {
      return A.MapBase_mapToString(this);
    },
    $isMap: 1
  };
  A._UnmodifiableMapMixin.prototype = {};
  A.MapView.prototype = {
    $index(_, key) {
      return this._collection$_map.$index(0, key);
    },
    forEach$1(_, action) {
      this._collection$_map.forEach$1(0, this.$ti._eval$1("~(1,2)")._as(action));
    },
    get$length(_) {
      return this._collection$_map.__js_helper$_length;
    },
    get$keys() {
      var t1 = this._collection$_map;
      return new A.LinkedHashMapKeyIterable(t1, t1.$ti._eval$1("LinkedHashMapKeyIterable<1>"));
    },
    toString$0(_) {
      return A.MapBase_mapToString(this._collection$_map);
    },
    $isMap: 1
  };
  A.UnmodifiableMapView.prototype = {};
  A._UnmodifiableMapView_MapView__UnmodifiableMapMixin.prototype = {};
  A.NoSuchMethodError_toString_closure.prototype = {
    call$2(key, value) {
      var t1, t2, t3;
      type$.Symbol._as(key);
      t1 = this.sb;
      t2 = this._box_0;
      t3 = t1._contents += t2.comma;
      t3 += key._name;
      t1._contents = t3;
      t1._contents = t3 + ": ";
      t1._contents += A.Error_safeToString(value);
      t2.comma = ", ";
    },
    $signature: 14
  };
  A.DateTime.prototype = {
    $eq(_, other) {
      if (other == null)
        return false;
      return other instanceof A.DateTime && this._value === other._value && true;
    },
    get$hashCode(_) {
      var t1 = this._value;
      return (t1 ^ B.JSInt_methods._shrOtherPositive$1(t1, 30)) & 1073741823;
    },
    toString$0(_) {
      var _this = this,
        y = A.DateTime__fourDigits(A.Primitives_getYear(_this)),
        m = A.DateTime__twoDigits(A.Primitives_getMonth(_this)),
        d = A.DateTime__twoDigits(A.Primitives_getDay(_this)),
        h = A.DateTime__twoDigits(A.Primitives_getHours(_this)),
        min = A.DateTime__twoDigits(A.Primitives_getMinutes(_this)),
        sec = A.DateTime__twoDigits(A.Primitives_getSeconds(_this)),
        ms = A.DateTime__threeDigits(A.Primitives_getMilliseconds(_this));
      return y + "-" + m + "-" + d + " " + h + ":" + min + ":" + sec + "." + ms;
    },
    toIso8601String$0() {
      var _this = this,
        y = A.Primitives_getYear(_this) >= -9999 && A.Primitives_getYear(_this) <= 9999 ? A.DateTime__fourDigits(A.Primitives_getYear(_this)) : A.DateTime__sixDigits(A.Primitives_getYear(_this)),
        m = A.DateTime__twoDigits(A.Primitives_getMonth(_this)),
        d = A.DateTime__twoDigits(A.Primitives_getDay(_this)),
        h = A.DateTime__twoDigits(A.Primitives_getHours(_this)),
        min = A.DateTime__twoDigits(A.Primitives_getMinutes(_this)),
        sec = A.DateTime__twoDigits(A.Primitives_getSeconds(_this)),
        ms = A.DateTime__threeDigits(A.Primitives_getMilliseconds(_this));
      return y + "-" + m + "-" + d + "T" + h + ":" + min + ":" + sec + "." + ms;
    }
  };
  A._Enum.prototype = {
    toString$0(_) {
      return this._enumToString$0();
    }
  };
  A.Error.prototype = {
    get$stackTrace() {
      return A.getTraceFromException(this.$thrownJsError);
    }
  };
  A.AssertionError.prototype = {
    toString$0(_) {
      var t1 = this.message;
      if (t1 != null)
        return "Assertion failed: " + A.Error_safeToString(t1);
      return "Assertion failed";
    }
  };
  A.TypeError.prototype = {};
  A.NullThrownError.prototype = {
    toString$0(_) {
      return "Throw of null.";
    },
    $isTypeError: 1
  };
  A.ArgumentError.prototype = {
    get$_errorName() {
      return "Invalid argument" + (!this._hasValue ? "(s)" : "");
    },
    get$_errorExplanation() {
      return "";
    },
    toString$0(_) {
      var _this = this,
        $name = _this.name,
        nameString = $name == null ? "" : " (" + $name + ")",
        message = _this.message,
        messageString = message == null ? "" : ": " + A.S(message),
        prefix = _this.get$_errorName() + nameString + messageString;
      if (!_this._hasValue)
        return prefix;
      return prefix + _this.get$_errorExplanation() + ": " + A.Error_safeToString(_this.get$invalidValue());
    },
    get$invalidValue() {
      return this.invalidValue;
    }
  };
  A.RangeError.prototype = {
    get$invalidValue() {
      return A._asNumQ(this.invalidValue);
    },
    get$_errorName() {
      return "RangeError";
    },
    get$_errorExplanation() {
      var explanation,
        start = this.start,
        end = this.end;
      if (start == null)
        explanation = end != null ? ": Not less than or equal to " + A.S(end) : "";
      else if (end == null)
        explanation = ": Not greater than or equal to " + A.S(start);
      else if (end > start)
        explanation = ": Not in inclusive range " + A.S(start) + ".." + A.S(end);
      else
        explanation = end < start ? ": Valid value range is empty" : ": Only valid value is " + A.S(start);
      return explanation;
    }
  };
  A.IndexError.prototype = {
    get$invalidValue() {
      return A._asInt(this.invalidValue);
    },
    get$_errorName() {
      return "RangeError";
    },
    get$_errorExplanation() {
      if (A._asInt(this.invalidValue) < 0)
        return ": index must not be negative";
      var t1 = this.length;
      if (t1 === 0)
        return ": no indices are valid";
      return ": index should be less than " + t1;
    },
    get$length(receiver) {
      return this.length;
    }
  };
  A.NoSuchMethodError.prototype = {
    toString$0(_) {
      var $arguments, t1, _i, t2, t3, argument, receiverText, actualParameters, _this = this, _box_0 = {},
        sb = new A.StringBuffer("");
      _box_0.comma = "";
      $arguments = _this._core$_arguments;
      for (t1 = $arguments.length, _i = 0, t2 = "", t3 = ""; _i < t1; ++_i, t3 = ", ") {
        argument = $arguments[_i];
        sb._contents = t2 + t3;
        t2 = sb._contents += A.Error_safeToString(argument);
        _box_0.comma = ", ";
      }
      _this._namedArguments.forEach$1(0, new A.NoSuchMethodError_toString_closure(_box_0, sb));
      receiverText = A.Error_safeToString(_this._core$_receiver);
      actualParameters = sb.toString$0(0);
      return "NoSuchMethodError: method not found: '" + _this._core$_memberName._name + "'\nReceiver: " + receiverText + "\nArguments: [" + actualParameters + "]";
    }
  };
  A.UnsupportedError.prototype = {
    toString$0(_) {
      return "Unsupported operation: " + this.message;
    }
  };
  A.UnimplementedError.prototype = {
    toString$0(_) {
      return "UnimplementedError: " + this.message;
    }
  };
  A.StateError.prototype = {
    toString$0(_) {
      return "Bad state: " + this.message;
    }
  };
  A.ConcurrentModificationError.prototype = {
    toString$0(_) {
      var t1 = this.modifiedObject;
      if (t1 == null)
        return "Concurrent modification during iteration.";
      return "Concurrent modification during iteration: " + A.Error_safeToString(t1) + ".";
    }
  };
  A.StackOverflowError.prototype = {
    toString$0(_) {
      return "Stack Overflow";
    },
    get$stackTrace() {
      return null;
    },
    $isError: 1
  };
  A.CyclicInitializationError.prototype = {
    toString$0(_) {
      return "Reading static variable '" + this.variableName + "' during its initialization";
    }
  };
  A._Exception.prototype = {
    toString$0(_) {
      return "Exception: " + this.message;
    }
  };
  A.Iterable.prototype = {
    map$1$1(_, toElement, $T) {
      var t1 = A._instanceType(this);
      return A.MappedIterable_MappedIterable(this, t1._bind$1($T)._eval$1("1(Iterable.E)")._as(toElement), t1._eval$1("Iterable.E"), $T);
    },
    get$length(_) {
      var count,
        it = this.get$iterator(this);
      for (count = 0; it.moveNext$0();)
        ++count;
      return count;
    },
    toString$0(_) {
      return A.IterableBase_iterableToShortString(this, "(", ")");
    }
  };
  A.Iterator.prototype = {};
  A.Null.prototype = {
    get$hashCode(_) {
      return A.Object.prototype.get$hashCode.call(this, this);
    },
    toString$0(_) {
      return "null";
    }
  };
  A.Object.prototype = {$isObject: 1,
    $eq(_, other) {
      return this === other;
    },
    get$hashCode(_) {
      return A.Primitives_objectHashCode(this);
    },
    toString$0(_) {
      return "Instance of '" + A.Primitives_objectTypeName(this) + "'";
    },
    noSuchMethod$1(_, invocation) {
      type$.Invocation._as(invocation);
      throw A.wrapException(A.NoSuchMethodError$_(this, invocation.get$memberName(), invocation.get$positionalArguments(), invocation.get$namedArguments(), null));
    },
    toString() {
      return this.toString$0(this);
    }
  };
  A._StringStackTrace.prototype = {
    toString$0(_) {
      return "";
    },
    $isStackTrace: 1
  };
  A.StringBuffer.prototype = {
    get$length(_) {
      return this._contents.length;
    },
    toString$0(_) {
      var t1 = this._contents;
      return t1.charCodeAt(0) == 0 ? t1 : t1;
    }
  };
  A.HtmlElement.prototype = {};
  A.AnchorElement.prototype = {
    toString$0(receiver) {
      return String(receiver);
    }
  };
  A.AreaElement.prototype = {
    toString$0(receiver) {
      return String(receiver);
    }
  };
  A.Blob.prototype = {$isBlob: 1};
  A.CharacterData.prototype = {
    get$length(receiver) {
      return receiver.length;
    }
  };
  A.DomException.prototype = {
    toString$0(receiver) {
      return String(receiver);
    }
  };
  A.Element.prototype = {
    toString$0(receiver) {
      return receiver.localName;
    }
  };
  A.Event.prototype = {$isEvent: 1};
  A.EventTarget.prototype = {};
  A.FormElement.prototype = {
    get$length(receiver) {
      return receiver.length;
    }
  };
  A.ImageData.prototype = {$isImageData: 1};
  A.Node.prototype = {
    toString$0(receiver) {
      var value = receiver.nodeValue;
      return value == null ? this.super$Interceptor$toString(receiver) : value;
    },
    $isNode: 1
  };
  A.SelectElement.prototype = {
    get$length(receiver) {
      return receiver.length;
    }
  };
  A.Window.prototype = {$isWindow: 1};
  A.WorkerGlobalScope.prototype = {$isWorkerGlobalScope: 1};
  A.KeyRange.prototype = {$isKeyRange: 1};
  A.JsObject__convertDataTree__convert.prototype = {
    call$1(o) {
      var convertedMap, key, convertedList,
        t1 = this._convertedObjects;
      if (t1.containsKey$1(o))
        return t1.$index(0, o);
      if (type$.Map_dynamic_dynamic._is(o)) {
        convertedMap = {};
        t1.$indexSet(0, o, convertedMap);
        for (t1 = o.get$keys(), t1 = t1.get$iterator(t1); t1.moveNext$0();) {
          key = t1.get$current();
          convertedMap[key] = this.call$1(o.$index(0, key));
        }
        return convertedMap;
      } else if (type$.Iterable_dynamic._is(o)) {
        convertedList = [];
        t1.$indexSet(0, o, convertedList);
        B.JSArray_methods.addAll$1(convertedList, J.map$1$1$ax(o, this, type$.dynamic));
        return convertedList;
      } else
        return A._convertToJS(o);
    },
    $signature: 15
  };
  A._convertToJS_closure.prototype = {
    call$1(o) {
      var jsFunction;
      type$.Function._as(o);
      jsFunction = function(_call, f, captureThis) {
        return function() {
          return _call(f, captureThis, this, Array.prototype.slice.apply(arguments));
        };
      }(A._callDartFunction, o, false);
      A._defineProperty(jsFunction, $.$get$DART_CLOSURE_PROPERTY_NAME(), o);
      return jsFunction;
    },
    $signature: 2
  };
  A._convertToJS_closure0.prototype = {
    call$1(o) {
      return new this.ctor(o);
    },
    $signature: 2
  };
  A._wrapToDart_closure.prototype = {
    call$1(o) {
      return new A.JsFunction(o == null ? type$.Object._as(o) : o);
    },
    $signature: 16
  };
  A._wrapToDart_closure0.prototype = {
    call$1(o) {
      var t1 = o == null ? type$.Object._as(o) : o;
      return new A.JsArray(t1, type$.JsArray_dynamic);
    },
    $signature: 17
  };
  A._wrapToDart_closure1.prototype = {
    call$1(o) {
      return new A.JsObject(o == null ? type$.Object._as(o) : o);
    },
    $signature: 18
  };
  A.JsObject.prototype = {
    $index(_, property) {
      return A._convertToDart(this._jsObject[property]);
    },
    $indexSet(_, property, value) {
      if (typeof property != "string" && typeof property != "number")
        throw A.wrapException(A.ArgumentError$("property is not a String or num", null));
      this._jsObject[property] = A._convertToJS(value);
    },
    $eq(_, other) {
      if (other == null)
        return false;
      return other instanceof A.JsObject && this._jsObject === other._jsObject;
    },
    toString$0(_) {
      var t1, exception;
      try {
        t1 = String(this._jsObject);
        return t1;
      } catch (exception) {
        t1 = this.super$Object$toString(0);
        return t1;
      }
    },
    get$hashCode(_) {
      return 0;
    }
  };
  A.JsFunction.prototype = {};
  A.JsArray.prototype = {
    _checkIndex$1(index) {
      var _this = this,
        t1 = index < 0 || index >= _this.get$length(_this);
      if (t1)
        throw A.wrapException(A.RangeError$range(index, 0, _this.get$length(_this), null, null));
    },
    $index(_, index) {
      this._checkIndex$1(index);
      return this.$ti._precomputed1._as(this.super$JsObject$$index(0, index));
    },
    $indexSet(_, index, value) {
      if (A._isInt(index))
        this._checkIndex$1(index);
      this.super$_JsArray_JsObject_ListMixin$$indexSet(0, index, value);
    },
    get$length(_) {
      var len = this._jsObject.length;
      if (typeof len === "number" && len >>> 0 === len)
        return len;
      throw A.wrapException(A.StateError$("Bad JsArray length"));
    },
    $isEfficientLengthIterable: 1,
    $isIterable: 1,
    $isList: 1
  };
  A._JsArray_JsObject_ListMixin.prototype = {
    $indexSet(_, property, value) {
      return this.super$JsObject$$indexSet(0, property, value);
    }
  };
  A.Guya.prototype = {
    getMangaDetails$1(_, mangaId) {
      var $async$goto = 0,
        $async$completer = A._makeAsyncAwaitCompleter(type$.MangaInfo),
        $async$returnValue;
      var $async$getMangaDetails$1 = A._wrapJsFunctionForAsync(function($async$errorCode, $async$result) {
        if ($async$errorCode === 1)
          return A._asyncRethrow($async$result, $async$completer);
        while (true)
          switch ($async$goto) {
            case 0:
              // Function start
              $async$returnValue = self._createMangaInfo({id: "test-manga", titles: A._setArrayType(["Test Manga"], type$.JSArray_String), image: "https://i.imgur.com/GYUxEX8.png", rating: null, status: 1, langFlag: null, artist: "Test Artist", author: "Test Author", covers: null, desc: "Description here", follows: null, tags: null, views: null, hentai: null, relatedIds: null, lastUpdate: null});
              // goto return
              $async$goto = 1;
              break;
            case 1:
              // return
              return A._asyncReturn($async$returnValue, $async$completer);
          }
      });
      return A._asyncStartSync($async$getMangaDetails$1, $async$completer);
    },
    getChapters$1(_, mangaId) {
      var $async$goto = 0,
        $async$completer = A._makeAsyncAwaitCompleter(type$.List_Chapter),
        $async$returnValue;
      var $async$getChapters$1 = A._wrapJsFunctionForAsync(function($async$errorCode, $async$result) {
        if ($async$errorCode === 1)
          return A._asyncRethrow($async$result, $async$completer);
        while (true)
          switch ($async$goto) {
            case 0:
              // Function start
              $async$returnValue = A._setArrayType([self.createChapter({id: "test-chapter", mangaId: mangaId, chapNum: 1, langCode: "gb", name: "Chapter Test", volume: 1, group: "Manga Group", time: new self.Date(new A.DateTime(Date.now(), false).toIso8601String$0())})], type$.JSArray_Chapter);
              // goto return
              $async$goto = 1;
              break;
            case 1:
              // return
              return A._asyncReturn($async$returnValue, $async$completer);
          }
      });
      return A._asyncStartSync($async$getChapters$1, $async$completer);
    },
    getChapterDetails$2(_, mangaId, chapterId) {
      var $async$goto = 0,
        $async$completer = A._makeAsyncAwaitCompleter(type$.ChapterDetails),
        $async$returnValue;
      var $async$getChapterDetails$2 = A._wrapJsFunctionForAsync(function($async$errorCode, $async$result) {
        if ($async$errorCode === 1)
          return A._asyncRethrow($async$result, $async$completer);
        while (true)
          switch ($async$goto) {
            case 0:
              // Function start
              $async$returnValue = self.createChapterDetails({id: chapterId, mangaId: mangaId, pages: A._setArrayType(["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Dart-logo.png/768px-Dart-logo.png"], type$.JSArray_String), longStrip: false});
              // goto return
              $async$goto = 1;
              break;
            case 1:
              // return
              return A._asyncReturn($async$returnValue, $async$completer);
          }
      });
      return A._asyncStartSync($async$getChapterDetails$2, $async$completer);
    },
    filterUpdatedMangas$3(mangaUpdatesFoundCallback, time, ids) {
      return this.filterUpdatedMangas$body$Guya(type$.void_Function_MangaUpdates._as(mangaUpdatesFoundCallback), time, type$.List_String._as(ids));
    },
    filterUpdatedMangas$body$Guya(mangaUpdatesFoundCallback, time, ids) {
      var $async$goto = 0,
        $async$completer = A._makeAsyncAwaitCompleter(type$.void);
      var $async$filterUpdatedMangas$3 = A._wrapJsFunctionForAsync(function($async$errorCode, $async$result) {
        if ($async$errorCode === 1)
          return A._asyncRethrow($async$result, $async$completer);
        while (true)
          switch ($async$goto) {
            case 0:
              // Function start
              mangaUpdatesFoundCallback.call$1(self.createMangaUpdates({ids: A._setArrayType(["test-manga"], type$.JSArray_String)}));
              // implicit return
              return A._asyncReturn(null, $async$completer);
          }
      });
      return A._asyncStartSync($async$filterUpdatedMangas$3, $async$completer);
    },
    getSearchResults$2(_, query, metadata) {
      var $async$goto = 0,
        $async$completer = A._makeAsyncAwaitCompleter(type$.PagedResults),
        $async$returnValue;
      var $async$getSearchResults$2 = A._wrapJsFunctionForAsync(function($async$errorCode, $async$result) {
        if ($async$errorCode === 1)
          return A._asyncRethrow($async$result, $async$completer);
        while (true)
          switch ($async$goto) {
            case 0:
              // Function start
              $async$returnValue = self.createPagedResults({results: A._setArrayType([self.createMangaTile({id: "test-manga", title: self.createIconText({text: "Test Manga", icon: null}), image: "https://i.imgur.com/GYUxEX8.png", subtitleText: null, primaryText: null, secondaryText: null, badge: null})], type$.JSArray_MangaTile), metadata: metadata});
              // goto return
              $async$goto = 1;
              break;
            case 1:
              // return
              return A._asyncReturn($async$returnValue, $async$completer);
          }
      });
      return A._asyncStartSync($async$getSearchResults$2, $async$completer);
    }
  };
  A.Parser.prototype = {};
  A.Date.prototype = {};
  A.Record.prototype = {};
  A.JsError.prototype = {};
  A.Atomics.prototype = {};
  A.TypedArray.prototype = {};
  A.futureToPromise_closure.prototype = {
    call$2(resolve, reject) {
      var t1 = type$.Function;
      this.future.then$1$2$onError(0, new A.futureToPromise__closure(t1._as(resolve), this.T), t1._as(reject), type$.dynamic);
    },
    $signature: 19
  };
  A.futureToPromise__closure.prototype = {
    call$1(result) {
      return this.resolve.call$1(this.T._as(result));
    },
    $signature() {
      return this.T._eval$1("@(0)");
    }
  };
  A.Promise.prototype = {};
  A._PropertyDescriptor.prototype = {};
  A.APIWrapper.prototype = {};
  A.Registerable.prototype = {};
  A.Requestable.prototype = {};
  A.Searchable.prototype = {};
  A.Source.prototype = {};
  A.SourceFutureToPromiseAdatper.prototype = {
    filterUpdatedManga$3(_, mangaUpdatesFoundCallback, time, ids) {
      return A.futureToPromise(this.source.filterUpdatedMangas$3(type$.void_Function_MangaUpdates._as(mangaUpdatesFoundCallback), type$.Date._as(time), type$.List_String._as(ids)), type$.void);
    },
    getChapterDetails$2(_, mangaId, chapterId) {
      return A.futureToPromise(this.source.getChapterDetails$2(0, A._asString(mangaId), A._asString(chapterId)), type$.ChapterDetails);
    },
    getChapters$1(_, mangaId) {
      return A.futureToPromise(this.source.getChapters$1(0, A._asString(mangaId)), type$.List_Chapter);
    },
    getCloudflareBypassRequest$0(_) {
      return null;
    },
    getHomePageSections$1(_, sectionCallback) {
      var t1;
      type$.void_Function_HomeSection._as(sectionCallback);
      t1 = type$.void;
      return A.futureToPromise(A.Future_Future$value(t1), t1);
    },
    getMangaDetails$1(_, mangaId) {
      return A.futureToPromise(this.source.getMangaDetails$1(0, A._asString(mangaId)), type$.MangaInfo);
    },
    getMangaShareUrl$1(_, mangaId) {
      A._asString(mangaId);
      return null;
    },
    getSearchFields$0(_) {
      return null;
    },
    getSearchResults$2(_, query, metadata) {
      return A.futureToPromise(this.source.getSearchResults$2(0, type$.SearchRequest._as(query), metadata), type$.PagedResults);
    },
    getSearchTags$0(_) {
      return null;
    },
    getSourceMenu$0(_) {
      return null;
    },
    getViewMoreItems$2(_, homepageSectionId, metadata) {
      A._asString(homepageSectionId);
      return null;
    },
    getWebsiteMangaDirectory$1(_, metadata) {
      return null;
    },
    supportsSearchOperators$0(_) {
      return null;
    },
    supportsTagExclusion$0(_) {
      return null;
    }
  };
  A.JsSource.prototype = {};
  A.JsTracker.prototype = {};
  A.Chapter.prototype = {};
  A._CreateChapterOptions.prototype = {};
  A.ChapterDetails.prototype = {};
  A._CreateChapterDetailsOptions.prototype = {};
  A.Button.prototype = {};
  A._CreateButtonOptions.prototype = {};
  A.Form.prototype = {};
  A._CreateFormOptions.prototype = {};
  A.FormRow.prototype = {};
  A.FormRowTyped.prototype = {};
  A.Header.prototype = {};
  A._CreateHeaderOptions.prototype = {};
  A.InputField.prototype = {};
  A._CreateInputFieldOptions.prototype = {};
  A.Label.prototype = {};
  A._CreateLabelOptions.prototype = {};
  A.Link.prototype = {};
  A._CreateLinkOptions.prototype = {};
  A.MultilineLabel.prototype = {};
  A._CreateMultilineLabelOptions.prototype = {};
  A.NavigationButton.prototype = {};
  A._CreateNavigationButtonOptions.prototype = {};
  A.OAuthButton.prototype = {};
  A.OAuthResponseType.prototype = {};
  A._CreateOAuthButtonOptions.prototype = {};
  A.Section.prototype = {};
  A._CreateSectionOptions.prototype = {};
  A.Select.prototype = {};
  A._CreateSelectOptions.prototype = {};
  A.Stepper.prototype = {};
  A._CreateStepperOptions.prototype = {};
  A.Switch.prototype = {};
  A._CreateSwitchOptions.prototype = {};
  A.WebViewButton.prototype = {};
  A.HomeSection.prototype = {};
  A._CreateHomeSectionOptions.prototype = {};
  A.MangaInfo.prototype = {};
  A._CreateMangaInfoOptions.prototype = {};
  A.MangaTile.prototype = {};
  A.IconText.prototype = {};
  A._CreateMangaTileOptions.prototype = {};
  A._CreateIconTextOptions.prototype = {};
  A.MangaUpdates.prototype = {};
  A._CreateMangaUpdatesOptions.prototype = {};
  A.PagedResults.prototype = {};
  A._CreatePagedResultsOptions.prototype = {};
  A.RawData.prototype = {};
  A._CreateRawDataOptions.prototype = {};
  A.Request.prototype = {};
  A.Cookie.prototype = {};
  A._CreateCookieOptions.prototype = {};
  A._CreateRequestObjectOptions.prototype = {};
  A.JsRequestInterceptor.prototype = {};
  A.RequestManagerInfo.prototype = {};
  A.JsRequestManager.prototype = {};
  A._CreateRequestManagerInfoOptions.prototype = {};
  A.Response.prototype = {};
  A.SearchField.prototype = {};
  A._CreateSearchFieldOptions.prototype = {};
  A.SearchRequest.prototype = {};
  A.SourceInfo.prototype = {};
  A.SourceInfo_closure.prototype = {
    call$1(tag) {
      var t2,
        t1 = type$.SourceTag._as(tag).__SourceTag_jsSourceTag_F;
      t1 === $ && A.throwLateFieldNI("jsSourceTag");
      t2 = J.getInterceptor$x(t1);
      return A.LinkedHashMap_LinkedHashMap$_literal(["text", t2.get$text(t1), "type", t2.get$type(t1)], type$.String, type$.dynamic);
    },
    $signature: 34
  };
  A.JsSourceInfo.prototype = {};
  A.ContentRating.prototype = {
    _enumToString$0() {
      return "ContentRating." + this._core$_name;
    },
    toString$0(_) {
      return "EVERYONE";
    }
  };
  A.SourceManga.prototype = {};
  A._CreateSourceMangaOptions.prototype = {};
  A.SourceStateManagerInfo.prototype = {};
  A.JsSourceStateManager.prototype = {};
  A.JsSourceKeychain.prototype = {};
  A._CreateSourceStateManagerInfo.prototype = {};
  A.SourceTag.prototype = {};
  A.JsSourceTag.prototype = {};
  A.Tag.prototype = {};
  A.TagSection.prototype = {};
  A.CreateTagOptions.prototype = {};
  A.CreateTagSectionOptions.prototype = {};
  A.TrackedManga.prototype = {};
  A._CreateTrackedMangaOptions.prototype = {};
  A.TrackedMangaChapterReadAction.prototype = {};
  A.JsTrackerActionQueue.prototype = {};
  A.register_closure.prototype = {
    call$0() {
      var source = new A.SourceFutureToPromiseAdatper(this.creator.call$0()),
        t1 = type$.nullable_Promise_bool_Function;
      return A.JsObject_JsObject$jsify(A.LinkedHashMap_LinkedHashMap$_literal(["getChapterDetails", A.allowInterop(source.get$getChapterDetails(source), type$.Promise_ChapterDetails_Function_String_String), "getChapters", A.allowInterop(source.get$getChapters(source), type$.Promise_List_Chapter_Function_String), "getMangaDetails", A.allowInterop(source.get$getMangaDetails(source), type$.Promise_MangaInfo_Function_String), "getSearchResults", A.allowInterop(source.get$getSearchResults(source), type$.Promise_PagedResults_Function_2_SearchRequest_and_nullable_Object), "filterUpdatedManga", A.allowInterop(source.get$filterUpdatedManga(source), type$.nullable_Promise_void_Function_3_void_Function_MangaUpdates_and_Date_and_List_String), "getCloudflareBypassRequest", A.allowInterop(source.get$getCloudflareBypassRequest(source), type$.nullable_Request_Function), "getHomePageSections", A.allowInterop(source.get$getHomePageSections(source), type$.nullable_Promise_void_Function_void_Function_HomeSection), "getMangaShareUrl", A.allowInterop(source.get$getMangaShareUrl(source), type$.nullable_String_Function_String), "getSearchFields", A.allowInterop(source.get$getSearchFields(source), type$.nullable_Promise_List_SearchField_Function), "getSearchTags", A.allowInterop(source.get$getSearchTags(source), type$.nullable_Promise_List_TagSection_Function), "getSourceMenu", A.allowInterop(source.get$getSourceMenu(source), type$.nullable_Promise_Section_Function), "getViewMoreItems", A.allowInterop(source.get$getViewMoreItems(source), type$.nullable_Promise_PagedResults_Function_2_String_and_nullable_Object), "getWebsiteMangaDirectory", A.allowInterop(source.get$getWebsiteMangaDirectory(source), type$.nullable_Promise_PagedResults_Function_nullable_Object), "supportsSearchOperators", A.allowInterop(source.get$supportsSearchOperators(source), t1), "supportsTagExclusion", A.allowInterop(source.get$supportsTagExclusion(source), t1)], type$.String, type$.Function));
    },
    $signature: 35
  };
  (function aliases() {
    var _ = J.Interceptor.prototype;
    _.super$Interceptor$toString = _.toString$0;
    _ = J.LegacyJavaScriptObject.prototype;
    _.super$LegacyJavaScriptObject$toString = _.toString$0;
    _ = A.Object.prototype;
    _.super$Object$toString = _.toString$0;
    _ = A.JsObject.prototype;
    _.super$JsObject$$index = _.$index;
    _.super$JsObject$$indexSet = _.$indexSet;
    _ = A._JsArray_JsObject_ListMixin.prototype;
    _.super$_JsArray_JsObject_ListMixin$$indexSet = _.$indexSet;
  })();
  (function installTearOffs() {
    var _static_1 = hunkHelpers._static_1,
      _static_0 = hunkHelpers._static_0,
      _instance = hunkHelpers.installInstanceTearOff,
      _instance_2_i = hunkHelpers._instance_2i,
      _instance_1_i = hunkHelpers._instance_1i,
      _instance_0_i = hunkHelpers._instance_0i;
    _static_1(A, "async__AsyncRun__scheduleImmediateJsOverride$closure", "_AsyncRun__scheduleImmediateJsOverride", 1);
    _static_1(A, "async__AsyncRun__scheduleImmediateWithSetImmediate$closure", "_AsyncRun__scheduleImmediateWithSetImmediate", 1);
    _static_1(A, "async__AsyncRun__scheduleImmediateWithTimer$closure", "_AsyncRun__scheduleImmediateWithTimer", 1);
    _static_0(A, "async___startMicrotaskLoop$closure", "_startMicrotaskLoop", 0);
    _static_1(A, "js___convertToDart$closure", "_convertToDart", 37);
    _static_0(A, "guya_Guya___new_tearOff$closure", "Guya___new_tearOff", 25);
    var _;
    _instance(_ = A.SourceFutureToPromiseAdatper.prototype, "get$filterUpdatedManga", 1, 3, null, ["call$3"], ["filterUpdatedManga$3"], 20, 0, 0);
    _instance_2_i(_, "get$getChapterDetails", "getChapterDetails$2", 21);
    _instance_1_i(_, "get$getChapters", "getChapters$1", 22);
    _instance_0_i(_, "get$getCloudflareBypassRequest", "getCloudflareBypassRequest$0", 23);
    _instance_1_i(_, "get$getHomePageSections", "getHomePageSections$1", 24);
    _instance_1_i(_, "get$getMangaDetails", "getMangaDetails$1", 38);
    _instance_1_i(_, "get$getMangaShareUrl", "getMangaShareUrl$1", 26);
    _instance_0_i(_, "get$getSearchFields", "getSearchFields$0", 27);
    _instance_2_i(_, "get$getSearchResults", "getSearchResults$2", 28);
    _instance_0_i(_, "get$getSearchTags", "getSearchTags$0", 29);
    _instance_0_i(_, "get$getSourceMenu", "getSourceMenu$0", 30);
    _instance_2_i(_, "get$getViewMoreItems", "getViewMoreItems$2", 31);
    _instance_1_i(_, "get$getWebsiteMangaDirectory", "getWebsiteMangaDirectory$1", 32);
    _instance_0_i(_, "get$supportsSearchOperators", "supportsSearchOperators$0", 5);
    _instance_0_i(_, "get$supportsTagExclusion", "supportsTagExclusion$0", 5);
  })();
  (function inheritance() {
    var _mixin = hunkHelpers.mixin,
      _mixinHard = hunkHelpers.mixinHard,
      _inherit = hunkHelpers.inherit,
      _inheritMany = hunkHelpers.inheritMany;
    _inherit(A.Object, null);
    _inheritMany(A.Object, [A.JS_CONST, J.Interceptor, J.ArrayIterator, A.Error, A.Iterable, A.ListIterator, A.Iterator, A.FixedLengthListMixin, A.Symbol, A.MapView, A.ConstantMap, A.JSInvocationMirror, A.Closure, A.TypeErrorDecoder, A.NullThrownFromJavaScriptException, A.ExceptionAndStackTrace, A._StackTrace, A._Required, A.MapMixin, A.LinkedHashMapCell, A.LinkedHashMapKeyIterator, A.Rti, A._FunctionParameters, A._TimerImpl, A._AsyncAwaitCompleter, A.AsyncError, A._FutureListener, A._Future, A._AsyncCallbackEntry, A._StreamIterator, A._Zone, A._HashMapKeyIterator, A.ListMixin, A._UnmodifiableMapMixin, A.DateTime, A._Enum, A.StackOverflowError, A._Exception, A.Null, A._StringStackTrace, A.StringBuffer, A.JsObject, A.Registerable, A.Parser, A.SourceFutureToPromiseAdatper, A.SourceInfo, A.SourceTag]);
    _inheritMany(J.Interceptor, [J.JSBool, J.JSNull, J.JavaScriptObject, J.JSArray, J.JSNumber, J.JSString, A.NativeTypedData]);
    _inheritMany(J.JavaScriptObject, [J.LegacyJavaScriptObject, A.EventTarget, A.Blob, A.DomException, A.Event, A.ImageData, A.KeyRange]);
    _inheritMany(J.LegacyJavaScriptObject, [J.PlainJavaScriptObject, J.UnknownJavaScriptObject, J.JavaScriptFunction, A.Date, A.Record, A.JsError, A.Atomics, A.TypedArray, A.Promise, A._PropertyDescriptor, A.APIWrapper, A.Requestable, A.JsSource, A.JsTracker, A.Chapter, A._CreateChapterOptions, A.ChapterDetails, A._CreateChapterDetailsOptions, A.FormRow, A._CreateButtonOptions, A.Form, A._CreateFormOptions, A._CreateHeaderOptions, A._CreateInputFieldOptions, A._CreateLabelOptions, A._CreateLinkOptions, A._CreateMultilineLabelOptions, A._CreateNavigationButtonOptions, A.OAuthResponseType, A._CreateOAuthButtonOptions, A.Section, A._CreateSectionOptions, A._CreateSelectOptions, A._CreateStepperOptions, A._CreateSwitchOptions, A.HomeSection, A._CreateHomeSectionOptions, A.MangaInfo, A._CreateMangaInfoOptions, A.MangaTile, A.IconText, A._CreateMangaTileOptions, A._CreateIconTextOptions, A.MangaUpdates, A._CreateMangaUpdatesOptions, A.PagedResults, A._CreatePagedResultsOptions, A.RawData, A._CreateRawDataOptions, A.Request, A.Cookie, A._CreateCookieOptions, A._CreateRequestObjectOptions, A.JsRequestInterceptor, A.RequestManagerInfo, A._CreateRequestManagerInfoOptions, A.Response, A.SearchField, A._CreateSearchFieldOptions, A.SearchRequest, A.JsSourceInfo, A.SourceManga, A._CreateSourceMangaOptions, A.SourceStateManagerInfo, A.JsSourceKeychain, A._CreateSourceStateManagerInfo, A.JsSourceTag, A.Tag, A.TagSection, A.CreateTagOptions, A.CreateTagSectionOptions, A.TrackedManga, A._CreateTrackedMangaOptions, A.TrackedMangaChapterReadAction, A.JsTrackerActionQueue]);
    _inherit(J.JSUnmodifiableArray, J.JSArray);
    _inheritMany(J.JSNumber, [J.JSInt, J.JSNumNotInt]);
    _inheritMany(A.Error, [A.LateError, A.TypeError, A.JsNoSuchMethodError, A.UnknownJsTypeError, A.RuntimeError, A._Error, A.AssertionError, A.NullThrownError, A.ArgumentError, A.NoSuchMethodError, A.UnsupportedError, A.UnimplementedError, A.StateError, A.ConcurrentModificationError, A.CyclicInitializationError]);
    _inheritMany(A.Iterable, [A.EfficientLengthIterable, A.MappedIterable, A._ConstantMapKeyIterable]);
    _inheritMany(A.EfficientLengthIterable, [A.ListIterable, A.LinkedHashMapKeyIterable, A._HashMapKeyIterable]);
    _inherit(A.EfficientLengthMappedIterable, A.MappedIterable);
    _inherit(A.MappedIterator, A.Iterator);
    _inherit(A.MappedListIterable, A.ListIterable);
    _inherit(A._UnmodifiableMapView_MapView__UnmodifiableMapMixin, A.MapView);
    _inherit(A.UnmodifiableMapView, A._UnmodifiableMapView_MapView__UnmodifiableMapMixin);
    _inherit(A.ConstantMapView, A.UnmodifiableMapView);
    _inherit(A.ConstantStringMap, A.ConstantMap);
    _inheritMany(A.Closure, [A.Closure2Args, A.Closure0Args, A.TearOffClosure, A.initHooks_closure, A.initHooks_closure1, A._AsyncRun__initializeScheduleImmediate_internalCallback, A._AsyncRun__initializeScheduleImmediate_closure, A._awaitOnObject_closure, A._Future__chainForeignFuture_closure, A._Future__propagateToListeners_handleWhenCompleteCallback_closure, A.JsObject__convertDataTree__convert, A._convertToJS_closure, A._convertToJS_closure0, A._wrapToDart_closure, A._wrapToDart_closure0, A._wrapToDart_closure1, A.futureToPromise__closure, A.SourceInfo_closure]);
    _inheritMany(A.Closure2Args, [A.Primitives_functionNoSuchMethod_closure, A.initHooks_closure0, A._awaitOnObject_closure0, A._wrapJsFunctionForAsync_closure, A._Future__chainForeignFuture_closure0, A.MapBase_mapToString_closure, A.NoSuchMethodError_toString_closure, A.futureToPromise_closure]);
    _inherit(A.NullError, A.TypeError);
    _inheritMany(A.TearOffClosure, [A.StaticClosure, A.BoundClosure]);
    _inherit(A.MapBase, A.MapMixin);
    _inheritMany(A.MapBase, [A.JsLinkedHashMap, A._HashMap]);
    _inherit(A.NativeTypedArray, A.NativeTypedData);
    _inheritMany(A.NativeTypedArray, [A._NativeTypedArrayOfDouble_NativeTypedArray_ListMixin, A._NativeTypedArrayOfInt_NativeTypedArray_ListMixin]);
    _inherit(A._NativeTypedArrayOfDouble_NativeTypedArray_ListMixin_FixedLengthListMixin, A._NativeTypedArrayOfDouble_NativeTypedArray_ListMixin);
    _inherit(A.NativeTypedArrayOfDouble, A._NativeTypedArrayOfDouble_NativeTypedArray_ListMixin_FixedLengthListMixin);
    _inherit(A._NativeTypedArrayOfInt_NativeTypedArray_ListMixin_FixedLengthListMixin, A._NativeTypedArrayOfInt_NativeTypedArray_ListMixin);
    _inherit(A.NativeTypedArrayOfInt, A._NativeTypedArrayOfInt_NativeTypedArray_ListMixin_FixedLengthListMixin);
    _inheritMany(A.NativeTypedArrayOfInt, [A.NativeInt16List, A.NativeInt32List, A.NativeInt8List, A.NativeUint16List, A.NativeUint32List, A.NativeUint8ClampedList, A.NativeUint8List]);
    _inherit(A._TypeError, A._Error);
    _inheritMany(A.Closure0Args, [A._AsyncRun__scheduleImmediateJsOverride_internalCallback, A._AsyncRun__scheduleImmediateWithSetImmediate_internalCallback, A._TimerImpl_internalCallback, A._Future__addListener_closure, A._Future__prependListeners_closure, A._Future__chainForeignFuture_closure1, A._Future__asyncCompleteWithValue_closure, A._Future__chainFuture_closure, A._Future__asyncCompleteError_closure, A._Future__propagateToListeners_handleWhenCompleteCallback, A._Future__propagateToListeners_handleValueCallback, A._Future__propagateToListeners_handleError, A._rootHandleError_closure, A._RootZone_bindCallbackGuarded_closure, A.register_closure]);
    _inherit(A._RootZone, A._Zone);
    _inherit(A._IdentityHashMap, A._HashMap);
    _inheritMany(A.ArgumentError, [A.RangeError, A.IndexError]);
    _inheritMany(A.EventTarget, [A.Node, A.Window, A.WorkerGlobalScope]);
    _inheritMany(A.Node, [A.Element, A.CharacterData]);
    _inherit(A.HtmlElement, A.Element);
    _inheritMany(A.HtmlElement, [A.AnchorElement, A.AreaElement, A.FormElement, A.SelectElement]);
    _inheritMany(A.JsObject, [A.JsFunction, A._JsArray_JsObject_ListMixin]);
    _inherit(A.JsArray, A._JsArray_JsObject_ListMixin);
    _inherit(A.Source, A.Registerable);
    _inherit(A.Guya, A.Source);
    _inherit(A.Searchable, A.Requestable);
    _inherit(A.FormRowTyped, A.FormRow);
    _inheritMany(A.FormRowTyped, [A.Button, A.Header, A.InputField, A.Label, A.Link, A.MultilineLabel, A.NavigationButton, A.OAuthButton, A.Select, A.Stepper, A.Switch, A.WebViewButton]);
    _inherit(A.JsRequestManager, A.RequestManagerInfo);
    _inherit(A.ContentRating, A._Enum);
    _inherit(A.JsSourceStateManager, A.SourceStateManagerInfo);
    _mixin(A._NativeTypedArrayOfDouble_NativeTypedArray_ListMixin, A.ListMixin);
    _mixin(A._NativeTypedArrayOfDouble_NativeTypedArray_ListMixin_FixedLengthListMixin, A.FixedLengthListMixin);
    _mixin(A._NativeTypedArrayOfInt_NativeTypedArray_ListMixin, A.ListMixin);
    _mixin(A._NativeTypedArrayOfInt_NativeTypedArray_ListMixin_FixedLengthListMixin, A.FixedLengthListMixin);
    _mixin(A._UnmodifiableMapView_MapView__UnmodifiableMapMixin, A._UnmodifiableMapMixin);
    _mixinHard(A._JsArray_JsObject_ListMixin, A.ListMixin);
  })();
  var init = {
    typeUniverse: {eC: new Map(), tR: {}, eT: {}, tPV: {}, sEA: []},
    mangledGlobalNames: {int: "int", double: "double", num: "num", String: "String", bool: "bool", Null: "Null", List: "List"},
    mangledNames: {},
    types: ["~()", "~(~())", "@(@)", "Null(@)", "Null()", "Promise<1&>?()", "~(Object?,Object?)", "@(@,String)", "~(@)", "Null(@,StackTrace)", "~(int,@)", "Null(Object,StackTrace)", "_Future<@>(@)", "~(String,@)", "~(Symbol0,@)", "@(Object?)", "JsFunction(@)", "JsArray<@>(@)", "JsObject(@)", "~(Function,Function)", "Promise<1&>?(~(MangaUpdates),Date,List<String>)", "Promise<1&>(String,String)", "Promise<1&>(String)", "Request?()", "Promise<1&>?(~(HomeSection))", "Guya()", "String?(String)", "Promise<1&>?()", "Promise<1&>(SearchRequest,Object?)", "Promise<1&>?()", "Promise<1&>?()", "Promise<1&>?(String,Object?)", "Promise<1&>?(Object?)", "Null(~())", "Map<String,@>(SourceTag)", "JsObject()", "@(String)", "Object?(@)", "Promise<1&>(String)"],
    interceptorsByTag: null,
    leafTags: null,
    arrayRti: Symbol("$ti")
  };
  A._Universe_addRules(init.typeUniverse, JSON.parse('{"PlainJavaScriptObject":"LegacyJavaScriptObject","UnknownJavaScriptObject":"LegacyJavaScriptObject","JavaScriptFunction":"LegacyJavaScriptObject","Date":"LegacyJavaScriptObject","Record":"LegacyJavaScriptObject","JsError":"LegacyJavaScriptObject","Atomics":"LegacyJavaScriptObject","TypedArray":"LegacyJavaScriptObject","Promise":"LegacyJavaScriptObject","_PropertyDescriptor":"LegacyJavaScriptObject","APIWrapper":"LegacyJavaScriptObject","Requestable":"LegacyJavaScriptObject","Searchable":"LegacyJavaScriptObject","JsSource":"LegacyJavaScriptObject","JsTracker":"LegacyJavaScriptObject","Chapter":"LegacyJavaScriptObject","_CreateChapterOptions":"LegacyJavaScriptObject","ChapterDetails":"LegacyJavaScriptObject","_CreateChapterDetailsOptions":"LegacyJavaScriptObject","Button":"LegacyJavaScriptObject","_CreateButtonOptions":"LegacyJavaScriptObject","Form":"LegacyJavaScriptObject","_CreateFormOptions":"LegacyJavaScriptObject","FormRow":"LegacyJavaScriptObject","FormRowTyped":"LegacyJavaScriptObject","Header":"LegacyJavaScriptObject","_CreateHeaderOptions":"LegacyJavaScriptObject","InputField":"LegacyJavaScriptObject","_CreateInputFieldOptions":"LegacyJavaScriptObject","Label":"LegacyJavaScriptObject","_CreateLabelOptions":"LegacyJavaScriptObject","Link":"LegacyJavaScriptObject","_CreateLinkOptions":"LegacyJavaScriptObject","MultilineLabel":"LegacyJavaScriptObject","_CreateMultilineLabelOptions":"LegacyJavaScriptObject","NavigationButton":"LegacyJavaScriptObject","_CreateNavigationButtonOptions":"LegacyJavaScriptObject","OAuthButton":"LegacyJavaScriptObject","OAuthResponseType":"LegacyJavaScriptObject","_CreateOAuthButtonOptions":"LegacyJavaScriptObject","Section":"LegacyJavaScriptObject","_CreateSectionOptions":"LegacyJavaScriptObject","Select":"LegacyJavaScriptObject","_CreateSelectOptions":"LegacyJavaScriptObject","Stepper":"LegacyJavaScriptObject","_CreateStepperOptions":"LegacyJavaScriptObject","Switch":"LegacyJavaScriptObject","_CreateSwitchOptions":"LegacyJavaScriptObject","WebViewButton":"LegacyJavaScriptObject","HomeSection":"LegacyJavaScriptObject","_CreateHomeSectionOptions":"LegacyJavaScriptObject","MangaInfo":"LegacyJavaScriptObject","_CreateMangaInfoOptions":"LegacyJavaScriptObject","MangaTile":"LegacyJavaScriptObject","IconText":"LegacyJavaScriptObject","_CreateMangaTileOptions":"LegacyJavaScriptObject","_CreateIconTextOptions":"LegacyJavaScriptObject","MangaUpdates":"LegacyJavaScriptObject","_CreateMangaUpdatesOptions":"LegacyJavaScriptObject","PagedResults":"LegacyJavaScriptObject","_CreatePagedResultsOptions":"LegacyJavaScriptObject","RawData":"LegacyJavaScriptObject","_CreateRawDataOptions":"LegacyJavaScriptObject","Request":"LegacyJavaScriptObject","Cookie":"LegacyJavaScriptObject","_CreateCookieOptions":"LegacyJavaScriptObject","_CreateRequestObjectOptions":"LegacyJavaScriptObject","JsRequestInterceptor":"LegacyJavaScriptObject","RequestManagerInfo":"LegacyJavaScriptObject","JsRequestManager":"LegacyJavaScriptObject","_CreateRequestManagerInfoOptions":"LegacyJavaScriptObject","Response":"LegacyJavaScriptObject","SearchField":"LegacyJavaScriptObject","_CreateSearchFieldOptions":"LegacyJavaScriptObject","SearchRequest":"LegacyJavaScriptObject","JsSourceInfo":"LegacyJavaScriptObject","SourceManga":"LegacyJavaScriptObject","_CreateSourceMangaOptions":"LegacyJavaScriptObject","SourceStateManagerInfo":"LegacyJavaScriptObject","JsSourceStateManager":"LegacyJavaScriptObject","JsSourceKeychain":"LegacyJavaScriptObject","_CreateSourceStateManagerInfo":"LegacyJavaScriptObject","JsSourceTag":"LegacyJavaScriptObject","TagSection":"LegacyJavaScriptObject","Tag":"LegacyJavaScriptObject","CreateTagOptions":"LegacyJavaScriptObject","CreateTagSectionOptions":"LegacyJavaScriptObject","TrackedManga":"LegacyJavaScriptObject","_CreateTrackedMangaOptions":"LegacyJavaScriptObject","TrackedMangaChapterReadAction":"LegacyJavaScriptObject","JsTrackerActionQueue":"LegacyJavaScriptObject","AbortPaymentEvent":"Event","ExtendableEvent":"Event","MathMLElement":"Element","AudioElement":"HtmlElement","MediaElement":"HtmlElement","HtmlDocument":"Node","Document":"Node","DedicatedWorkerGlobalScope":"WorkerGlobalScope","CDataSection":"CharacterData","Text":"CharacterData","File":"Blob","NativeFloat32List":"NativeTypedArrayOfDouble","NativeByteData":"NativeTypedData","JSBool":{"bool":[]},"JSNull":{"Null":[]},"LegacyJavaScriptObject":{"Date":[],"Promise":["1&"],"Chapter":[],"ChapterDetails":[],"Section":[],"HomeSection":[],"MangaInfo":[],"MangaTile":[],"MangaUpdates":[],"PagedResults":[],"Request":[],"SearchField":[],"SearchRequest":[],"JsSourceInfo":[],"JsSourceTag":[],"TagSection":[]},"JSArray":{"List":["1"],"EfficientLengthIterable":["1"],"Iterable":["1"]},"JSUnmodifiableArray":{"JSArray":["1"],"List":["1"],"EfficientLengthIterable":["1"],"Iterable":["1"]},"ArrayIterator":{"Iterator":["1"]},"JSNumber":{"double":[],"num":[]},"JSInt":{"double":[],"int":[],"num":[]},"JSNumNotInt":{"double":[],"num":[]},"JSString":{"String":[]},"LateError":{"Error":[]},"EfficientLengthIterable":{"Iterable":["1"]},"ListIterable":{"EfficientLengthIterable":["1"],"Iterable":["1"]},"ListIterator":{"Iterator":["1"]},"MappedIterable":{"Iterable":["2"],"Iterable.E":"2"},"EfficientLengthMappedIterable":{"MappedIterable":["1","2"],"EfficientLengthIterable":["2"],"Iterable":["2"],"Iterable.E":"2"},"MappedIterator":{"Iterator":["2"]},"MappedListIterable":{"ListIterable":["2"],"EfficientLengthIterable":["2"],"Iterable":["2"],"ListIterable.E":"2","Iterable.E":"2"},"Symbol":{"Symbol0":[]},"ConstantMapView":{"UnmodifiableMapView":["1","2"],"_UnmodifiableMapView_MapView__UnmodifiableMapMixin":["1","2"],"MapView":["1","2"],"_UnmodifiableMapMixin":["1","2"],"Map":["1","2"]},"ConstantMap":{"Map":["1","2"]},"ConstantStringMap":{"ConstantMap":["1","2"],"Map":["1","2"]},"_ConstantMapKeyIterable":{"Iterable":["1"],"Iterable.E":"1"},"JSInvocationMirror":{"Invocation":[]},"NullError":{"TypeError":[],"Error":[]},"JsNoSuchMethodError":{"Error":[]},"UnknownJsTypeError":{"Error":[]},"_StackTrace":{"StackTrace":[]},"Closure":{"Function":[]},"Closure0Args":{"Function":[]},"Closure2Args":{"Function":[]},"TearOffClosure":{"Function":[]},"StaticClosure":{"Function":[]},"BoundClosure":{"Function":[]},"RuntimeError":{"Error":[]},"JsLinkedHashMap":{"MapMixin":["1","2"],"LinkedHashMap":["1","2"],"Map":["1","2"]},"LinkedHashMapKeyIterable":{"EfficientLengthIterable":["1"],"Iterable":["1"],"Iterable.E":"1"},"LinkedHashMapKeyIterator":{"Iterator":["1"]},"NativeTypedData":{"TypedData":[]},"NativeTypedArray":{"JavaScriptIndexingBehavior":["1"],"TypedData":[]},"NativeTypedArrayOfDouble":{"ListMixin":["double"],"JavaScriptIndexingBehavior":["double"],"List":["double"],"EfficientLengthIterable":["double"],"TypedData":[],"Iterable":["double"],"FixedLengthListMixin":["double"],"ListMixin.E":"double"},"NativeTypedArrayOfInt":{"ListMixin":["int"],"JavaScriptIndexingBehavior":["int"],"List":["int"],"EfficientLengthIterable":["int"],"TypedData":[],"Iterable":["int"],"FixedLengthListMixin":["int"]},"NativeInt16List":{"ListMixin":["int"],"JavaScriptIndexingBehavior":["int"],"List":["int"],"EfficientLengthIterable":["int"],"TypedData":[],"Iterable":["int"],"FixedLengthListMixin":["int"],"ListMixin.E":"int"},"NativeInt32List":{"ListMixin":["int"],"JavaScriptIndexingBehavior":["int"],"List":["int"],"EfficientLengthIterable":["int"],"TypedData":[],"Iterable":["int"],"FixedLengthListMixin":["int"],"ListMixin.E":"int"},"NativeInt8List":{"ListMixin":["int"],"JavaScriptIndexingBehavior":["int"],"List":["int"],"EfficientLengthIterable":["int"],"TypedData":[],"Iterable":["int"],"FixedLengthListMixin":["int"],"ListMixin.E":"int"},"NativeUint16List":{"ListMixin":["int"],"JavaScriptIndexingBehavior":["int"],"List":["int"],"EfficientLengthIterable":["int"],"TypedData":[],"Iterable":["int"],"FixedLengthListMixin":["int"],"ListMixin.E":"int"},"NativeUint32List":{"ListMixin":["int"],"JavaScriptIndexingBehavior":["int"],"List":["int"],"EfficientLengthIterable":["int"],"TypedData":[],"Iterable":["int"],"FixedLengthListMixin":["int"],"ListMixin.E":"int"},"NativeUint8ClampedList":{"ListMixin":["int"],"JavaScriptIndexingBehavior":["int"],"List":["int"],"EfficientLengthIterable":["int"],"TypedData":[],"Iterable":["int"],"FixedLengthListMixin":["int"],"ListMixin.E":"int"},"NativeUint8List":{"ListMixin":["int"],"JavaScriptIndexingBehavior":["int"],"List":["int"],"EfficientLengthIterable":["int"],"TypedData":[],"Iterable":["int"],"FixedLengthListMixin":["int"],"ListMixin.E":"int"},"_Error":{"Error":[]},"_TypeError":{"TypeError":[],"Error":[]},"_Future":{"Future":["1"]},"AsyncError":{"Error":[]},"_Zone":{"Zone":[]},"_RootZone":{"_Zone":[],"Zone":[]},"_HashMap":{"MapMixin":["1","2"],"Map":["1","2"]},"_IdentityHashMap":{"_HashMap":["1","2"],"MapMixin":["1","2"],"Map":["1","2"]},"_HashMapKeyIterable":{"EfficientLengthIterable":["1"],"Iterable":["1"],"Iterable.E":"1"},"_HashMapKeyIterator":{"Iterator":["1"]},"MapBase":{"MapMixin":["1","2"],"Map":["1","2"]},"MapMixin":{"Map":["1","2"]},"MapView":{"Map":["1","2"]},"UnmodifiableMapView":{"_UnmodifiableMapView_MapView__UnmodifiableMapMixin":["1","2"],"MapView":["1","2"],"_UnmodifiableMapMixin":["1","2"],"Map":["1","2"]},"double":{"num":[]},"int":{"num":[]},"List":{"EfficientLengthIterable":["1"],"Iterable":["1"]},"AssertionError":{"Error":[]},"TypeError":{"Error":[]},"NullThrownError":{"TypeError":[],"Error":[]},"ArgumentError":{"Error":[]},"RangeError":{"Error":[]},"IndexError":{"Error":[]},"NoSuchMethodError":{"Error":[]},"UnsupportedError":{"Error":[]},"UnimplementedError":{"Error":[]},"StateError":{"Error":[]},"ConcurrentModificationError":{"Error":[]},"StackOverflowError":{"Error":[]},"CyclicInitializationError":{"Error":[]},"_StringStackTrace":{"StackTrace":[]},"HtmlElement":{"Node":[]},"AnchorElement":{"Node":[]},"AreaElement":{"Node":[]},"CharacterData":{"Node":[]},"Element":{"Node":[]},"FormElement":{"Node":[]},"SelectElement":{"Node":[]},"JsFunction":{"JsObject":[]},"JsArray":{"ListMixin":["1"],"List":["1"],"EfficientLengthIterable":["1"],"JsObject":[],"Iterable":["1"],"ListMixin.E":"1"},"Guya":{"Source":[],"Registerable":[]},"Source":{"Registerable":[]}}'));
  A._Universe_addErasedTypes(init.typeUniverse, JSON.parse('{"EfficientLengthIterable":1,"NativeTypedArray":1,"MapBase":2,"_JsArray_JsObject_ListMixin":1,"Record":2,"Promise":1,"FormRowTyped":1}'));
  var string$ = {
    Error_: "Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"
  };
  var type$ = (function rtii() {
    var findType = A.findType;
    return {
      AsyncError: findType("AsyncError"),
      Blob: findType("Blob"),
      ChapterDetails: findType("ChapterDetails"),
      ConstantMapView_Symbol_dynamic: findType("ConstantMapView<Symbol0,@>"),
      Date: findType("Date"),
      EfficientLengthIterable_dynamic: findType("EfficientLengthIterable<@>"),
      Error: findType("Error"),
      Event: findType("Event"),
      Function: findType("Function"),
      Future_dynamic: findType("Future<@>"),
      ImageData: findType("ImageData"),
      Invocation: findType("Invocation"),
      Iterable_dynamic: findType("Iterable<@>"),
      JSArray_Chapter: findType("JSArray<Chapter>"),
      JSArray_MangaTile: findType("JSArray<MangaTile>"),
      JSArray_String: findType("JSArray<String>"),
      JSArray_dynamic: findType("JSArray<@>"),
      JSNull: findType("JSNull"),
      JavaScriptFunction: findType("JavaScriptFunction"),
      JavaScriptIndexingBehavior_dynamic: findType("JavaScriptIndexingBehavior<@>"),
      JsArray_dynamic: findType("JsArray<@>"),
      JsLinkedHashMap_Symbol_dynamic: findType("JsLinkedHashMap<Symbol0,@>"),
      JsObject_Function: findType("JsObject()"),
      KeyRange: findType("KeyRange"),
      List_Chapter: findType("List<Chapter>"),
      List_String: findType("List<String>"),
      List_dynamic: findType("List<@>"),
      MangaInfo: findType("MangaInfo"),
      Map_dynamic_dynamic: findType("Map<@,@>"),
      Node: findType("Node"),
      Null: findType("Null"),
      Object: findType("Object"),
      PagedResults: findType("PagedResults"),
      Promise_ChapterDetails_Function_String_String: findType("Promise<1&>(String,String)"),
      Promise_List_Chapter_Function_String: findType("Promise<1&>(String)"),
      Promise_MangaInfo_Function_String: findType("Promise<1&>(String)"),
      Promise_PagedResults_Function_2_SearchRequest_and_nullable_Object: findType("Promise<1&>(SearchRequest,Object?)"),
      Record: findType("Record0"),
      Registerable: findType("Registerable"),
      SearchRequest: findType("SearchRequest"),
      SourceTag: findType("SourceTag"),
      StackTrace: findType("StackTrace"),
      String: findType("String"),
      Symbol: findType("Symbol0"),
      TypeError: findType("TypeError"),
      TypedData: findType("TypedData"),
      UnknownJavaScriptObject: findType("UnknownJavaScriptObject"),
      Window: findType("Window"),
      WorkerGlobalScope: findType("WorkerGlobalScope"),
      _Future_dynamic: findType("_Future<@>"),
      _IdentityHashMap_dynamic_dynamic: findType("_IdentityHashMap<@,@>"),
      bool: findType("bool"),
      bool_Function_Object: findType("bool(Object)"),
      double: findType("double"),
      dynamic: findType("@"),
      dynamic_Function: findType("@()"),
      dynamic_Function_Object: findType("@(Object)"),
      dynamic_Function_Object_StackTrace: findType("@(Object,StackTrace)"),
      int: findType("int"),
      legacy_Never: findType("0&*"),
      legacy_Object: findType("Object*"),
      nullable_Future_Null: findType("Future<Null>?"),
      nullable_Object: findType("Object?"),
      nullable_Promise_List_SearchField_Function: findType("Promise<1&>?()"),
      nullable_Promise_List_TagSection_Function: findType("Promise<1&>?()"),
      nullable_Promise_PagedResults_Function_2_String_and_nullable_Object: findType("Promise<1&>?(String,Object?)"),
      nullable_Promise_PagedResults_Function_nullable_Object: findType("Promise<1&>?(Object?)"),
      nullable_Promise_Section_Function: findType("Promise<1&>?()"),
      nullable_Promise_bool_Function: findType("Promise<1&>?()"),
      nullable_Promise_void_Function_3_void_Function_MangaUpdates_and_Date_and_List_String: findType("Promise<1&>?(~(MangaUpdates),Date,List<String>)"),
      nullable_Promise_void_Function_void_Function_HomeSection: findType("Promise<1&>?(~(HomeSection))"),
      nullable_Request_Function: findType("Request?()"),
      nullable_String_Function_String: findType("String?(String)"),
      nullable__FutureListener_dynamic_dynamic: findType("_FutureListener<@,@>?"),
      num: findType("num"),
      void: findType("~"),
      void_Function: findType("~()"),
      void_Function_2_dynamic_Function_dynamic_and_dynamic_Function_dynamic: findType("~(@(@),@(@))"),
      void_Function_HomeSection: findType("~(HomeSection)"),
      void_Function_MangaUpdates: findType("~(MangaUpdates)")
    };
  })();
  (function constants() {
    var makeConstList = hunkHelpers.makeConstList;
    B.Interceptor_methods = J.Interceptor.prototype;
    B.JSArray_methods = J.JSArray.prototype;
    B.JSInt_methods = J.JSInt.prototype;
    B.JSString_methods = J.JSString.prototype;
    B.JavaScriptFunction_methods = J.JavaScriptFunction.prototype;
    B.JavaScriptObject_methods = J.JavaScriptObject.prototype;
    B.PlainJavaScriptObject_methods = J.PlainJavaScriptObject.prototype;
    B.UnknownJavaScriptObject_methods = J.UnknownJavaScriptObject.prototype;
    B.C_JS_CONST = function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
};
    B.C_JS_CONST0 = function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
};
    B.C_JS_CONST6 = function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
};
    B.C_JS_CONST1 = function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
};
    B.C_JS_CONST2 = function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
};
    B.C_JS_CONST5 = function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
};
    B.C_JS_CONST4 = function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
};
    B.C_JS_CONST3 = function(hooks) { return hooks; }
;
    B.C__Required = new A._Required();
    B.C__RootZone = new A._RootZone();
    B.C__StringStackTrace = new A._StringStackTrace();
    B.ContentRating_everyone = new A.ContentRating("everyone");
    B.List_empty = A._setArrayType(makeConstList([]), type$.JSArray_dynamic);
    B.List_empty0 = A._setArrayType(makeConstList([]), A.findType("JSArray<Symbol0>"));
    B.Map_empty = new A.ConstantStringMap(0, {}, B.List_empty0, A.findType("ConstantStringMap<Symbol0,@>"));
    B.Symbol_call = new A.Symbol("call");
  })();
  (function staticFields() {
    $._JS_INTEROP_INTERCEPTOR_TAG = null;
    $.Primitives__identityHashCodeProperty = null;
    $.BoundClosure__receiverFieldNameCache = null;
    $.BoundClosure__interceptorFieldNameCache = null;
    $.getTagFunction = null;
    $.alternateTagFunction = null;
    $.prototypeForTagFunction = null;
    $.dispatchRecordsForInstanceTags = null;
    $.interceptorsForUncacheableTags = null;
    $.initNativeDispatchFlag = null;
    $._nextCallback = null;
    $._lastCallback = null;
    $._lastPriorityCallback = null;
    $._isInCallbackLoop = false;
    $.Zone__current = B.C__RootZone;
    $._toStringVisiting = A._setArrayType([], A.findType("JSArray<Object>"));
  })();
  (function lazyInitializers() {
    var _lazyFinal = hunkHelpers.lazyFinal,
      _lazy = hunkHelpers.lazy;
    _lazyFinal($, "DART_CLOSURE_PROPERTY_NAME", "$get$DART_CLOSURE_PROPERTY_NAME", () => A.getIsolateAffinityTag("_$dart_dartClosure"));
    _lazyFinal($, "TypeErrorDecoder_noSuchMethodPattern", "$get$TypeErrorDecoder_noSuchMethodPattern", () => A.TypeErrorDecoder_extractPattern(A.TypeErrorDecoder_provokeCallErrorOn({
      toString: function() {
        return "$receiver$";
      }
    })));
    _lazyFinal($, "TypeErrorDecoder_notClosurePattern", "$get$TypeErrorDecoder_notClosurePattern", () => A.TypeErrorDecoder_extractPattern(A.TypeErrorDecoder_provokeCallErrorOn({$method$: null,
      toString: function() {
        return "$receiver$";
      }
    })));
    _lazyFinal($, "TypeErrorDecoder_nullCallPattern", "$get$TypeErrorDecoder_nullCallPattern", () => A.TypeErrorDecoder_extractPattern(A.TypeErrorDecoder_provokeCallErrorOn(null)));
    _lazyFinal($, "TypeErrorDecoder_nullLiteralCallPattern", "$get$TypeErrorDecoder_nullLiteralCallPattern", () => A.TypeErrorDecoder_extractPattern(function() {
      var $argumentsExpr$ = "$arguments$";
      try {
        null.$method$($argumentsExpr$);
      } catch (e) {
        return e.message;
      }
    }()));
    _lazyFinal($, "TypeErrorDecoder_undefinedCallPattern", "$get$TypeErrorDecoder_undefinedCallPattern", () => A.TypeErrorDecoder_extractPattern(A.TypeErrorDecoder_provokeCallErrorOn(void 0)));
    _lazyFinal($, "TypeErrorDecoder_undefinedLiteralCallPattern", "$get$TypeErrorDecoder_undefinedLiteralCallPattern", () => A.TypeErrorDecoder_extractPattern(function() {
      var $argumentsExpr$ = "$arguments$";
      try {
        (void 0).$method$($argumentsExpr$);
      } catch (e) {
        return e.message;
      }
    }()));
    _lazyFinal($, "TypeErrorDecoder_nullPropertyPattern", "$get$TypeErrorDecoder_nullPropertyPattern", () => A.TypeErrorDecoder_extractPattern(A.TypeErrorDecoder_provokePropertyErrorOn(null)));
    _lazyFinal($, "TypeErrorDecoder_nullLiteralPropertyPattern", "$get$TypeErrorDecoder_nullLiteralPropertyPattern", () => A.TypeErrorDecoder_extractPattern(function() {
      try {
        null.$method$;
      } catch (e) {
        return e.message;
      }
    }()));
    _lazyFinal($, "TypeErrorDecoder_undefinedPropertyPattern", "$get$TypeErrorDecoder_undefinedPropertyPattern", () => A.TypeErrorDecoder_extractPattern(A.TypeErrorDecoder_provokePropertyErrorOn(void 0)));
    _lazyFinal($, "TypeErrorDecoder_undefinedLiteralPropertyPattern", "$get$TypeErrorDecoder_undefinedLiteralPropertyPattern", () => A.TypeErrorDecoder_extractPattern(function() {
      try {
        (void 0).$method$;
      } catch (e) {
        return e.message;
      }
    }()));
    _lazyFinal($, "_AsyncRun__scheduleImmediateClosure", "$get$_AsyncRun__scheduleImmediateClosure", () => A._AsyncRun__initializeScheduleImmediate());
    _lazyFinal($, "_context", "$get$_context", () => A._castToJsObject(A._wrapToDart(self)));
    _lazyFinal($, "_DART_OBJECT_PROPERTY_NAME", "$get$_DART_OBJECT_PROPERTY_NAME", () => A.getIsolateAffinityTag("_$dart_dartObject"));
    _lazyFinal($, "_dartProxyCtor", "$get$_dartProxyCtor", () => function DartObject(o) {
      this.o = o;
    });
    _lazy($, "guyaInfo", "$get$guyaInfo", () => {
      A.createSentinel();
      return A.SourceInfo$("getBoolean", "https://github.com/getBoolean", B.ContentRating_everyone, "Extension that pulls manga from Guya.moe.", "icon.png", "gb", "Guya (Dart)", A._setArrayType([new A.SourceTag({text: "Notifications", type: "success"})], A.findType("JSArray<SourceTag>")), "2.0.0-alpha.2", "https://guya.cubari.moe");
    });
  })();
  (function nativeSupport() {
    !function() {
      var intern = function(s) {
        var o = {};
        o[s] = 1;
        return Object.keys(hunkHelpers.convertToFastObject(o))[0];
      };
      init.getIsolateTag = function(name) {
        return intern("___dart_" + name + init.isolateTag);
      };
      var tableProperty = "___dart_isolate_tags_";
      var usedProperties = Object[tableProperty] || (Object[tableProperty] = Object.create(null));
      var rootProperty = "_ZxYxX";
      for (var i = 0;; i++) {
        var property = intern(rootProperty + "_" + i + "_");
        if (!(property in usedProperties)) {
          usedProperties[property] = 1;
          init.isolateTag = property;
          break;
        }
      }
      init.dispatchPropertyName = init.getIsolateTag("dispatch_record");
    }();
    hunkHelpers.setOrUpdateInterceptorsByTag({DOMError: J.JavaScriptObject, MediaError: J.JavaScriptObject, NavigatorUserMediaError: J.JavaScriptObject, OverconstrainedError: J.JavaScriptObject, PositionError: J.JavaScriptObject, GeolocationPositionError: J.JavaScriptObject, DataView: A.NativeTypedData, ArrayBufferView: A.NativeTypedData, Float32Array: A.NativeTypedArrayOfDouble, Float64Array: A.NativeTypedArrayOfDouble, Int16Array: A.NativeInt16List, Int32Array: A.NativeInt32List, Int8Array: A.NativeInt8List, Uint16Array: A.NativeUint16List, Uint32Array: A.NativeUint32List, Uint8ClampedArray: A.NativeUint8ClampedList, CanvasPixelArray: A.NativeUint8ClampedList, Uint8Array: A.NativeUint8List, HTMLAudioElement: A.HtmlElement, HTMLBRElement: A.HtmlElement, HTMLBaseElement: A.HtmlElement, HTMLBodyElement: A.HtmlElement, HTMLButtonElement: A.HtmlElement, HTMLCanvasElement: A.HtmlElement, HTMLContentElement: A.HtmlElement, HTMLDListElement: A.HtmlElement, HTMLDataElement: A.HtmlElement, HTMLDataListElement: A.HtmlElement, HTMLDetailsElement: A.HtmlElement, HTMLDialogElement: A.HtmlElement, HTMLDivElement: A.HtmlElement, HTMLEmbedElement: A.HtmlElement, HTMLFieldSetElement: A.HtmlElement, HTMLHRElement: A.HtmlElement, HTMLHeadElement: A.HtmlElement, HTMLHeadingElement: A.HtmlElement, HTMLHtmlElement: A.HtmlElement, HTMLIFrameElement: A.HtmlElement, HTMLImageElement: A.HtmlElement, HTMLInputElement: A.HtmlElement, HTMLLIElement: A.HtmlElement, HTMLLabelElement: A.HtmlElement, HTMLLegendElement: A.HtmlElement, HTMLLinkElement: A.HtmlElement, HTMLMapElement: A.HtmlElement, HTMLMediaElement: A.HtmlElement, HTMLMenuElement: A.HtmlElement, HTMLMetaElement: A.HtmlElement, HTMLMeterElement: A.HtmlElement, HTMLModElement: A.HtmlElement, HTMLOListElement: A.HtmlElement, HTMLObjectElement: A.HtmlElement, HTMLOptGroupElement: A.HtmlElement, HTMLOptionElement: A.HtmlElement, HTMLOutputElement: A.HtmlElement, HTMLParagraphElement: A.HtmlElement, HTMLParamElement: A.HtmlElement, HTMLPictureElement: A.HtmlElement, HTMLPreElement: A.HtmlElement, HTMLProgressElement: A.HtmlElement, HTMLQuoteElement: A.HtmlElement, HTMLScriptElement: A.HtmlElement, HTMLShadowElement: A.HtmlElement, HTMLSlotElement: A.HtmlElement, HTMLSourceElement: A.HtmlElement, HTMLSpanElement: A.HtmlElement, HTMLStyleElement: A.HtmlElement, HTMLTableCaptionElement: A.HtmlElement, HTMLTableCellElement: A.HtmlElement, HTMLTableDataCellElement: A.HtmlElement, HTMLTableHeaderCellElement: A.HtmlElement, HTMLTableColElement: A.HtmlElement, HTMLTableElement: A.HtmlElement, HTMLTableRowElement: A.HtmlElement, HTMLTableSectionElement: A.HtmlElement, HTMLTemplateElement: A.HtmlElement, HTMLTextAreaElement: A.HtmlElement, HTMLTimeElement: A.HtmlElement, HTMLTitleElement: A.HtmlElement, HTMLTrackElement: A.HtmlElement, HTMLUListElement: A.HtmlElement, HTMLUnknownElement: A.HtmlElement, HTMLVideoElement: A.HtmlElement, HTMLDirectoryElement: A.HtmlElement, HTMLFontElement: A.HtmlElement, HTMLFrameElement: A.HtmlElement, HTMLFrameSetElement: A.HtmlElement, HTMLMarqueeElement: A.HtmlElement, HTMLElement: A.HtmlElement, HTMLAnchorElement: A.AnchorElement, HTMLAreaElement: A.AreaElement, Blob: A.Blob, File: A.Blob, CDATASection: A.CharacterData, CharacterData: A.CharacterData, Comment: A.CharacterData, ProcessingInstruction: A.CharacterData, Text: A.CharacterData, DOMException: A.DomException, MathMLElement: A.Element, SVGAElement: A.Element, SVGAnimateElement: A.Element, SVGAnimateMotionElement: A.Element, SVGAnimateTransformElement: A.Element, SVGAnimationElement: A.Element, SVGCircleElement: A.Element, SVGClipPathElement: A.Element, SVGDefsElement: A.Element, SVGDescElement: A.Element, SVGDiscardElement: A.Element, SVGEllipseElement: A.Element, SVGFEBlendElement: A.Element, SVGFEColorMatrixElement: A.Element, SVGFEComponentTransferElement: A.Element, SVGFECompositeElement: A.Element, SVGFEConvolveMatrixElement: A.Element, SVGFEDiffuseLightingElement: A.Element, SVGFEDisplacementMapElement: A.Element, SVGFEDistantLightElement: A.Element, SVGFEFloodElement: A.Element, SVGFEFuncAElement: A.Element, SVGFEFuncBElement: A.Element, SVGFEFuncGElement: A.Element, SVGFEFuncRElement: A.Element, SVGFEGaussianBlurElement: A.Element, SVGFEImageElement: A.Element, SVGFEMergeElement: A.Element, SVGFEMergeNodeElement: A.Element, SVGFEMorphologyElement: A.Element, SVGFEOffsetElement: A.Element, SVGFEPointLightElement: A.Element, SVGFESpecularLightingElement: A.Element, SVGFESpotLightElement: A.Element, SVGFETileElement: A.Element, SVGFETurbulenceElement: A.Element, SVGFilterElement: A.Element, SVGForeignObjectElement: A.Element, SVGGElement: A.Element, SVGGeometryElement: A.Element, SVGGraphicsElement: A.Element, SVGImageElement: A.Element, SVGLineElement: A.Element, SVGLinearGradientElement: A.Element, SVGMarkerElement: A.Element, SVGMaskElement: A.Element, SVGMetadataElement: A.Element, SVGPathElement: A.Element, SVGPatternElement: A.Element, SVGPolygonElement: A.Element, SVGPolylineElement: A.Element, SVGRadialGradientElement: A.Element, SVGRectElement: A.Element, SVGScriptElement: A.Element, SVGSetElement: A.Element, SVGStopElement: A.Element, SVGStyleElement: A.Element, SVGElement: A.Element, SVGSVGElement: A.Element, SVGSwitchElement: A.Element, SVGSymbolElement: A.Element, SVGTSpanElement: A.Element, SVGTextContentElement: A.Element, SVGTextElement: A.Element, SVGTextPathElement: A.Element, SVGTextPositioningElement: A.Element, SVGTitleElement: A.Element, SVGUseElement: A.Element, SVGViewElement: A.Element, SVGGradientElement: A.Element, SVGComponentTransferFunctionElement: A.Element, SVGFEDropShadowElement: A.Element, SVGMPathElement: A.Element, Element: A.Element, AbortPaymentEvent: A.Event, AnimationEvent: A.Event, AnimationPlaybackEvent: A.Event, ApplicationCacheErrorEvent: A.Event, BackgroundFetchClickEvent: A.Event, BackgroundFetchEvent: A.Event, BackgroundFetchFailEvent: A.Event, BackgroundFetchedEvent: A.Event, BeforeInstallPromptEvent: A.Event, BeforeUnloadEvent: A.Event, BlobEvent: A.Event, CanMakePaymentEvent: A.Event, ClipboardEvent: A.Event, CloseEvent: A.Event, CompositionEvent: A.Event, CustomEvent: A.Event, DeviceMotionEvent: A.Event, DeviceOrientationEvent: A.Event, ErrorEvent: A.Event, Event: A.Event, InputEvent: A.Event, SubmitEvent: A.Event, ExtendableEvent: A.Event, ExtendableMessageEvent: A.Event, FetchEvent: A.Event, FocusEvent: A.Event, FontFaceSetLoadEvent: A.Event, ForeignFetchEvent: A.Event, GamepadEvent: A.Event, HashChangeEvent: A.Event, InstallEvent: A.Event, KeyboardEvent: A.Event, MediaEncryptedEvent: A.Event, MediaKeyMessageEvent: A.Event, MediaQueryListEvent: A.Event, MediaStreamEvent: A.Event, MediaStreamTrackEvent: A.Event, MessageEvent: A.Event, MIDIConnectionEvent: A.Event, MIDIMessageEvent: A.Event, MouseEvent: A.Event, DragEvent: A.Event, MutationEvent: A.Event, NotificationEvent: A.Event, PageTransitionEvent: A.Event, PaymentRequestEvent: A.Event, PaymentRequestUpdateEvent: A.Event, PointerEvent: A.Event, PopStateEvent: A.Event, PresentationConnectionAvailableEvent: A.Event, PresentationConnectionCloseEvent: A.Event, ProgressEvent: A.Event, PromiseRejectionEvent: A.Event, PushEvent: A.Event, RTCDataChannelEvent: A.Event, RTCDTMFToneChangeEvent: A.Event, RTCPeerConnectionIceEvent: A.Event, RTCTrackEvent: A.Event, SecurityPolicyViolationEvent: A.Event, SensorErrorEvent: A.Event, SpeechRecognitionError: A.Event, SpeechRecognitionEvent: A.Event, SpeechSynthesisEvent: A.Event, StorageEvent: A.Event, SyncEvent: A.Event, TextEvent: A.Event, TouchEvent: A.Event, TrackEvent: A.Event, TransitionEvent: A.Event, WebKitTransitionEvent: A.Event, UIEvent: A.Event, VRDeviceEvent: A.Event, VRDisplayEvent: A.Event, VRSessionEvent: A.Event, WheelEvent: A.Event, MojoInterfaceRequestEvent: A.Event, ResourceProgressEvent: A.Event, USBConnectionEvent: A.Event, IDBVersionChangeEvent: A.Event, AudioProcessingEvent: A.Event, OfflineAudioCompletionEvent: A.Event, WebGLContextEvent: A.Event, EventTarget: A.EventTarget, HTMLFormElement: A.FormElement, ImageData: A.ImageData, Document: A.Node, DocumentFragment: A.Node, HTMLDocument: A.Node, ShadowRoot: A.Node, XMLDocument: A.Node, Attr: A.Node, DocumentType: A.Node, Node: A.Node, HTMLSelectElement: A.SelectElement, Window: A.Window, DOMWindow: A.Window, DedicatedWorkerGlobalScope: A.WorkerGlobalScope, ServiceWorkerGlobalScope: A.WorkerGlobalScope, SharedWorkerGlobalScope: A.WorkerGlobalScope, WorkerGlobalScope: A.WorkerGlobalScope, IDBKeyRange: A.KeyRange});
    hunkHelpers.setOrUpdateLeafTags({DOMError: true, MediaError: true, NavigatorUserMediaError: true, OverconstrainedError: true, PositionError: true, GeolocationPositionError: true, DataView: true, ArrayBufferView: false, Float32Array: true, Float64Array: true, Int16Array: true, Int32Array: true, Int8Array: true, Uint16Array: true, Uint32Array: true, Uint8ClampedArray: true, CanvasPixelArray: true, Uint8Array: false, HTMLAudioElement: true, HTMLBRElement: true, HTMLBaseElement: true, HTMLBodyElement: true, HTMLButtonElement: true, HTMLCanvasElement: true, HTMLContentElement: true, HTMLDListElement: true, HTMLDataElement: true, HTMLDataListElement: true, HTMLDetailsElement: true, HTMLDialogElement: true, HTMLDivElement: true, HTMLEmbedElement: true, HTMLFieldSetElement: true, HTMLHRElement: true, HTMLHeadElement: true, HTMLHeadingElement: true, HTMLHtmlElement: true, HTMLIFrameElement: true, HTMLImageElement: true, HTMLInputElement: true, HTMLLIElement: true, HTMLLabelElement: true, HTMLLegendElement: true, HTMLLinkElement: true, HTMLMapElement: true, HTMLMediaElement: true, HTMLMenuElement: true, HTMLMetaElement: true, HTMLMeterElement: true, HTMLModElement: true, HTMLOListElement: true, HTMLObjectElement: true, HTMLOptGroupElement: true, HTMLOptionElement: true, HTMLOutputElement: true, HTMLParagraphElement: true, HTMLParamElement: true, HTMLPictureElement: true, HTMLPreElement: true, HTMLProgressElement: true, HTMLQuoteElement: true, HTMLScriptElement: true, HTMLShadowElement: true, HTMLSlotElement: true, HTMLSourceElement: true, HTMLSpanElement: true, HTMLStyleElement: true, HTMLTableCaptionElement: true, HTMLTableCellElement: true, HTMLTableDataCellElement: true, HTMLTableHeaderCellElement: true, HTMLTableColElement: true, HTMLTableElement: true, HTMLTableRowElement: true, HTMLTableSectionElement: true, HTMLTemplateElement: true, HTMLTextAreaElement: true, HTMLTimeElement: true, HTMLTitleElement: true, HTMLTrackElement: true, HTMLUListElement: true, HTMLUnknownElement: true, HTMLVideoElement: true, HTMLDirectoryElement: true, HTMLFontElement: true, HTMLFrameElement: true, HTMLFrameSetElement: true, HTMLMarqueeElement: true, HTMLElement: false, HTMLAnchorElement: true, HTMLAreaElement: true, Blob: true, File: true, CDATASection: true, CharacterData: true, Comment: true, ProcessingInstruction: true, Text: true, DOMException: true, MathMLElement: true, SVGAElement: true, SVGAnimateElement: true, SVGAnimateMotionElement: true, SVGAnimateTransformElement: true, SVGAnimationElement: true, SVGCircleElement: true, SVGClipPathElement: true, SVGDefsElement: true, SVGDescElement: true, SVGDiscardElement: true, SVGEllipseElement: true, SVGFEBlendElement: true, SVGFEColorMatrixElement: true, SVGFEComponentTransferElement: true, SVGFECompositeElement: true, SVGFEConvolveMatrixElement: true, SVGFEDiffuseLightingElement: true, SVGFEDisplacementMapElement: true, SVGFEDistantLightElement: true, SVGFEFloodElement: true, SVGFEFuncAElement: true, SVGFEFuncBElement: true, SVGFEFuncGElement: true, SVGFEFuncRElement: true, SVGFEGaussianBlurElement: true, SVGFEImageElement: true, SVGFEMergeElement: true, SVGFEMergeNodeElement: true, SVGFEMorphologyElement: true, SVGFEOffsetElement: true, SVGFEPointLightElement: true, SVGFESpecularLightingElement: true, SVGFESpotLightElement: true, SVGFETileElement: true, SVGFETurbulenceElement: true, SVGFilterElement: true, SVGForeignObjectElement: true, SVGGElement: true, SVGGeometryElement: true, SVGGraphicsElement: true, SVGImageElement: true, SVGLineElement: true, SVGLinearGradientElement: true, SVGMarkerElement: true, SVGMaskElement: true, SVGMetadataElement: true, SVGPathElement: true, SVGPatternElement: true, SVGPolygonElement: true, SVGPolylineElement: true, SVGRadialGradientElement: true, SVGRectElement: true, SVGScriptElement: true, SVGSetElement: true, SVGStopElement: true, SVGStyleElement: true, SVGElement: true, SVGSVGElement: true, SVGSwitchElement: true, SVGSymbolElement: true, SVGTSpanElement: true, SVGTextContentElement: true, SVGTextElement: true, SVGTextPathElement: true, SVGTextPositioningElement: true, SVGTitleElement: true, SVGUseElement: true, SVGViewElement: true, SVGGradientElement: true, SVGComponentTransferFunctionElement: true, SVGFEDropShadowElement: true, SVGMPathElement: true, Element: false, AbortPaymentEvent: true, AnimationEvent: true, AnimationPlaybackEvent: true, ApplicationCacheErrorEvent: true, BackgroundFetchClickEvent: true, BackgroundFetchEvent: true, BackgroundFetchFailEvent: true, BackgroundFetchedEvent: true, BeforeInstallPromptEvent: true, BeforeUnloadEvent: true, BlobEvent: true, CanMakePaymentEvent: true, ClipboardEvent: true, CloseEvent: true, CompositionEvent: true, CustomEvent: true, DeviceMotionEvent: true, DeviceOrientationEvent: true, ErrorEvent: true, Event: true, InputEvent: true, SubmitEvent: true, ExtendableEvent: true, ExtendableMessageEvent: true, FetchEvent: true, FocusEvent: true, FontFaceSetLoadEvent: true, ForeignFetchEvent: true, GamepadEvent: true, HashChangeEvent: true, InstallEvent: true, KeyboardEvent: true, MediaEncryptedEvent: true, MediaKeyMessageEvent: true, MediaQueryListEvent: true, MediaStreamEvent: true, MediaStreamTrackEvent: true, MessageEvent: true, MIDIConnectionEvent: true, MIDIMessageEvent: true, MouseEvent: true, DragEvent: true, MutationEvent: true, NotificationEvent: true, PageTransitionEvent: true, PaymentRequestEvent: true, PaymentRequestUpdateEvent: true, PointerEvent: true, PopStateEvent: true, PresentationConnectionAvailableEvent: true, PresentationConnectionCloseEvent: true, ProgressEvent: true, PromiseRejectionEvent: true, PushEvent: true, RTCDataChannelEvent: true, RTCDTMFToneChangeEvent: true, RTCPeerConnectionIceEvent: true, RTCTrackEvent: true, SecurityPolicyViolationEvent: true, SensorErrorEvent: true, SpeechRecognitionError: true, SpeechRecognitionEvent: true, SpeechSynthesisEvent: true, StorageEvent: true, SyncEvent: true, TextEvent: true, TouchEvent: true, TrackEvent: true, TransitionEvent: true, WebKitTransitionEvent: true, UIEvent: true, VRDeviceEvent: true, VRDisplayEvent: true, VRSessionEvent: true, WheelEvent: true, MojoInterfaceRequestEvent: true, ResourceProgressEvent: true, USBConnectionEvent: true, IDBVersionChangeEvent: true, AudioProcessingEvent: true, OfflineAudioCompletionEvent: true, WebGLContextEvent: true, EventTarget: false, HTMLFormElement: true, ImageData: true, Document: true, DocumentFragment: true, HTMLDocument: true, ShadowRoot: true, XMLDocument: true, Attr: true, DocumentType: true, Node: false, HTMLSelectElement: true, Window: true, DOMWindow: true, DedicatedWorkerGlobalScope: true, ServiceWorkerGlobalScope: true, SharedWorkerGlobalScope: true, WorkerGlobalScope: true, IDBKeyRange: true});
    A.NativeTypedArray.$nativeSuperclassTag = "ArrayBufferView";
    A._NativeTypedArrayOfDouble_NativeTypedArray_ListMixin.$nativeSuperclassTag = "ArrayBufferView";
    A._NativeTypedArrayOfDouble_NativeTypedArray_ListMixin_FixedLengthListMixin.$nativeSuperclassTag = "ArrayBufferView";
    A.NativeTypedArrayOfDouble.$nativeSuperclassTag = "ArrayBufferView";
    A._NativeTypedArrayOfInt_NativeTypedArray_ListMixin.$nativeSuperclassTag = "ArrayBufferView";
    A._NativeTypedArrayOfInt_NativeTypedArray_ListMixin_FixedLengthListMixin.$nativeSuperclassTag = "ArrayBufferView";
    A.NativeTypedArrayOfInt.$nativeSuperclassTag = "ArrayBufferView";
  })();
  Function.prototype.call$0 = function() {
    return this();
  };
  Function.prototype.call$1 = function(a) {
    return this(a);
  };
  Function.prototype.call$2 = function(a, b) {
    return this(a, b);
  };
  Function.prototype.call$1$1 = function(a) {
    return this(a);
  };
  Function.prototype.call$3 = function(a, b, c) {
    return this(a, b, c);
  };
  Function.prototype.call$4 = function(a, b, c, d) {
    return this(a, b, c, d);
  };
  convertAllToFastObject(holders);
  convertToFastObject($);
  (function(callback) {
    if (typeof document === "undefined") {
      callback(null);
      return;
    }
    if (typeof document.currentScript != "undefined") {
      callback(document.currentScript);
      return;
    }
    var scripts = document.scripts;
    function onLoad(event) {
      for (var i = 0; i < scripts.length; ++i)
        scripts[i].removeEventListener("load", onLoad, false);
      callback(event.target);
    }
    for (var i = 0; i < scripts.length; ++i)
      scripts[i].addEventListener("load", onLoad, false);
  })(function(currentScript) {
    init.currentScript = currentScript;
    var callMain = A.main;
    if (typeof dartMainRunner === "function")
      dartMainRunner(callMain, []);
    else
      callMain([]);
  });
})();
