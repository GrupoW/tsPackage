/**
 *
 * Array Utils by GrupoW
 * GrupoW
 *
 * Released under MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 **/
var com;
(function (com) {
    var grwpo;
    (function (grwpo) {
        var utils;
        (function (utils) {
            var array;
            (function (array) {
                function copy(data) {
                    return data.slice();
                }
                array.copy = copy;
            })(array = utils.array || (utils.array = {}));
        })(utils = grwpo.utils || (grwpo.utils = {}));
    })(grwpo = com.grwpo || (com.grwpo = {}));
})(com || (com = {}));

/**
 *
 * Array Utils by GrupoW
 * GrupoW
 *
 * Released under MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 **/
var com;
(function (com) {
    var grwpo;
    (function (grwpo) {
        var utils;
        (function (utils) {
            var array;
            (function (array) {
                function getIndex(arra, value) {
                    var checktmp = 1;
                    for (var i = 0; i <= arra.length; i++) {
                        if (arra[i] == value)
                            break;
                        checktmp++;
                    }
                    return checktmp - 1;
                }
                array.getIndex = getIndex;
            })(array = utils.array || (utils.array = {}));
        })(utils = grwpo.utils || (grwpo.utils = {}));
    })(grwpo = com.grwpo || (com.grwpo = {}));
})(com || (com = {}));

/**
 *
 * Array Utils by GrupoW
 * GrupoW
 *
 * Released under MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 **/
var com;
(function (com) {
    var grwpo;
    (function (grwpo) {
        var utils;
        (function (utils) {
            var array;
            (function (array) {
                function getRandomElement(value) {
                    return value[Math.floor(Math.random() * value.length)];
                }
                array.getRandomElement = getRandomElement;
            })(array = utils.array || (utils.array = {}));
        })(utils = grwpo.utils || (grwpo.utils = {}));
    })(grwpo = com.grwpo || (com.grwpo = {}));
})(com || (com = {}));

/**
 *
 * Array Utils by GrupoW
 * GrupoW
 *
 * Released under MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 **/
var com;
(function (com) {
    var grwpo;
    (function (grwpo) {
        var utils;
        (function (utils) {
            var array;
            (function (array) {
                function isAdded(arra, value) {
                    for (var i = 0; i <= arra.length; i++) {
                        if (arra[i] === value) {
                            return true;
                        }
                    }
                    return false;
                }
                array.isAdded = isAdded;
            })(array = utils.array || (utils.array = {}));
        })(utils = grwpo.utils || (grwpo.utils = {}));
    })(grwpo = com.grwpo || (com.grwpo = {}));
})(com || (com = {}));

/**
 *
 * Array Utils by GrupoW
 * GrupoW
 *
 * Released under MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 **/
var com;
(function (com) {
    var grwpo;
    (function (grwpo) {
        var utils;
        (function (utils) {
            var array;
            (function (array) {
                /**
                 *
                 * @param	data
                 * @param	ref
                 * @return	new array with the element removed
                 */
                function remove(data, ref) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i] === ref) {
                            data.splice(i, 1);
                        }
                    }
                    return data;
                }
                array.remove = remove;
            })(array = utils.array || (utils.array = {}));
        })(utils = grwpo.utils || (grwpo.utils = {}));
    })(grwpo = com.grwpo || (com.grwpo = {}));
})(com || (com = {}));

/**
 *
 * Array Utils by GrupoW
 * GrupoW
 *
 * Released under MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 **/
var com;
(function (com) {
    var grwpo;
    (function (grwpo) {
        var utils;
        (function (utils) {
            var array;
            (function (array) {
                function removeDuplicates(arra) {
                    var i;
                    var j;
                    var temp;
                    temp = arra.slice();
                    for (i = 0; i < temp.length; i++) {
                        for (j = 0; j < temp.length; j++) {
                            if (temp[j] == temp[i] && i != j) {
                                temp.splice(j, 1);
                                j--;
                            }
                        }
                    }
                    return temp;
                }
                array.removeDuplicates = removeDuplicates;
                ;
            })(array = utils.array || (utils.array = {}));
        })(utils = grwpo.utils || (grwpo.utils = {}));
    })(grwpo = com.grwpo || (com.grwpo = {}));
})(com || (com = {}));

/**
 *
 * Array Utils by GrupoW
 * GrupoW
 *
 * Released under MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 **/
var com;
(function (com) {
    var grwpo;
    (function (grwpo) {
        var utils;
        (function (utils) {
            var array;
            (function (array) {
                function shuffle(data) {
                    var return_array = [];
                    var original_length = data.length;
                    for (var i = 0; i < original_length; i++) {
                        var random_number = Math.floor(Math.random() * (data.length));
                        return_array[i] = data.splice(random_number, 1)[0];
                    }
                    return return_array;
                }
                array.shuffle = shuffle;
            })(array = utils.array || (utils.array = {}));
        })(utils = grwpo.utils || (grwpo.utils = {}));
    })(grwpo = com.grwpo || (com.grwpo = {}));
})(com || (com = {}));

/**
 *
 * Math Utils by GrupoW
 * GrupoW
 *
 * Released under MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 **/
var com;
(function (com) {
    var grwpo;
    (function (grwpo) {
        var utils;
        (function (utils) {
            var math;
            (function (math) {
                /**
                 *
                 * @param	p specified the probability (0 to 1) that the random "event" occurs.
                 * @return	true if a random "event" occurs
                 */
                function chance(p) {
                    return (Math.random() <= p);
                }
                math.chance = chance;
            })(math = utils.math || (utils.math = {}));
        })(utils = grwpo.utils || (grwpo.utils = {}));
    })(grwpo = com.grwpo || (com.grwpo = {}));
})(com || (com = {}));

/**
 *
 * Math Utils by GrupoW
 * GrupoW
 *
 * Released under MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 **/
var com;
(function (com) {
    var grwpo;
    (function (grwpo) {
        var utils;
        (function (utils) {
            var math;
            (function (math) {
                /**
                 *
                 * @param	max
                 * @return	a random integer from 0 to max
                 */
                function random(max) {
                    return Math.round(Math.random() * max);
                }
                math.random = random;
            })(math = utils.math || (utils.math = {}));
        })(utils = grwpo.utils || (grwpo.utils = {}));
    })(grwpo = com.grwpo || (com.grwpo = {}));
})(com || (com = {}));

/**
 *
 * Math Utils by GrupoW
 * GrupoW
 *
 * Released under MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 **/
/// <reference path="./random.ts" />
var com;
(function (com) {
    var grwpo;
    (function (grwpo) {
        var utils;
        (function (utils) {
            var math;
            (function (math) {
                /**
                 *
                 * @param	min
                 * @param	max
                 * @return	a random integer from min to max
                 */
                function randomRange(min, max) {
                    return min + math.random(max - min);
                }
                math.randomRange = randomRange;
            })(math = utils.math || (utils.math = {}));
        })(utils = grwpo.utils || (grwpo.utils = {}));
    })(grwpo = com.grwpo || (com.grwpo = {}));
})(com || (com = {}));

/**
 *
 * Math Utils by GrupoW
 * GrupoW
 *
 * Released under MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 **/
var com;
(function (com) {
    var grwpo;
    (function (grwpo) {
        var utils;
        (function (utils) {
            var math;
            (function (math) {
                /**
                 *
                 * @param	rads
                 * @return	degrees value
                 */
                function toDeg(rads) {
                    return rads * 180 / Math.PI;
                }
                math.toDeg = toDeg;
            })(math = utils.math || (utils.math = {}));
        })(utils = grwpo.utils || (grwpo.utils = {}));
    })(grwpo = com.grwpo || (com.grwpo = {}));
})(com || (com = {}));

/**
 *
 * Math Utils by GrupoW
 * GrupoW
 *
 * Released under MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 **/
var com;
(function (com) {
    var grwpo;
    (function (grwpo) {
        var utils;
        (function (utils) {
            var math;
            (function (math) {
                /**
                 *
                 * @param	degs
                 * @return	radian value
                 */
                function toRad(degs) {
                    return degs * Math.PI / 180;
                }
                math.toRad = toRad;
            })(math = utils.math || (utils.math = {}));
        })(utils = grwpo.utils || (grwpo.utils = {}));
    })(grwpo = com.grwpo || (com.grwpo = {}));
})(com || (com = {}));

/**
 *
 * String Utils by GrupoW
 * GrupoW
 *
 * Released under MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 **/
var com;
(function (com) {
    var grwpo;
    (function (grwpo) {
        var utils;
        (function (utils) {
            var string;
            (function (string) {
                /**
                 *
                 * @param	str
                 * @param	text
                 * @return	check if str contains the text
                 */
                function containsText(str, text) {
                    return str.indexOf(text) !== -1;
                }
                string.containsText = containsText;
                ;
            })(string = utils.string || (utils.string = {}));
        })(utils = grwpo.utils || (grwpo.utils = {}));
    })(grwpo = com.grwpo || (com.grwpo = {}));
})(com || (com = {}));

/**
 *
 * String Utils by GrupoW
 * GrupoW
 *
 * Released under MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 **/
var com;
(function (com) {
    var grwpo;
    (function (grwpo) {
        var utils;
        (function (utils) {
            var string;
            (function (string) {
                /**
                 *
                 * @param	str
                 * @param	start
                 * @param	end
                 * @return	get the text between start and end text from str
                 */
                function getTextBetween(str, start, end) {
                    var re = new RegExp('.*' + start + '\\s+(.*)\\s+' + end + '.*', '');
                    var newstr = str.replace(re, "$1");
                    return newstr;
                }
                string.getTextBetween = getTextBetween;
                ;
            })(string = utils.string || (utils.string = {}));
        })(utils = grwpo.utils || (grwpo.utils = {}));
    })(grwpo = com.grwpo || (com.grwpo = {}));
})(com || (com = {}));

/**
 *
 * String Utils by GrupoW
 * GrupoW
 *
 * Released under MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 **/
var com;
(function (com) {
    var grwpo;
    (function (grwpo) {
        var utils;
        (function (utils) {
            var string;
            (function (string) {
                /**
                 *
                 * @param	str
                 * @return	check if the passes string is a valid alpha (a-zA-Z)
                 */
                function isAlpha(str) {
                    var re = /^[a-zA-Z]+$/;
                    return re.test(str);
                }
                string.isAlpha = isAlpha;
                ;
                /**
                 *
                 * @param	str
                 * @return	check if the passes string is a valid latin alpha (a-zA-ZñÑáéíóúÁÉÍÓÚ)
                 */
                function isLatinAlpha(str) {
                    var re = /^[a-zA-Z\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00f1\u00d1\u00FC\u00DC]+$/;
                    return re.test(str);
                }
                string.isLatinAlpha = isLatinAlpha;
                ;
            })(string = utils.string || (utils.string = {}));
        })(utils = grwpo.utils || (grwpo.utils = {}));
    })(grwpo = com.grwpo || (com.grwpo = {}));
})(com || (com = {}));

/**
 *
 * String Utils by GrupoW
 * GrupoW
 *
 * Released under MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 **/
var com;
(function (com) {
    var grwpo;
    (function (grwpo) {
        var utils;
        (function (utils) {
            var string;
            (function (string) {
                /**
                 *
                 * @param	str
                 * @return	check if the passes string is a valid alpha numeric (a-zA-Z0-9)
                 */
                function isAlphaNumeric(str) {
                    var re = /^[a-zA-Z0-9]+$/;
                    return re.test(str);
                }
                string.isAlphaNumeric = isAlphaNumeric;
                ;
                /**
                 *
                 * @param	str
                 * @return	check if the passes string is a valid latin alpha numeric (0-9a-zA-ZñÑáéíóúÁÉÍÓÚ)
                 */
                function isLatinAlphaNumeric(str) {
                    var re = /^[a-zA-Z0-9\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00f1\u00d1\u00FC\u00DC]+$/;
                    return re.test(str);
                }
                string.isLatinAlphaNumeric = isLatinAlphaNumeric;
                ;
            })(string = utils.string || (utils.string = {}));
        })(utils = grwpo.utils || (grwpo.utils = {}));
    })(grwpo = com.grwpo || (com.grwpo = {}));
})(com || (com = {}));

/**
 *
 * String Utils by GrupoW
 * GrupoW
 *
 * Released under MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 **/
var com;
(function (com) {
    var grwpo;
    (function (grwpo) {
        var utils;
        (function (utils) {
            var string;
            (function (string) {
                /**
                 *
                 * @param	str
                 * @return	check if the passes string is a valid e-mail
                 */
                function isEmail(str) {
                    if (str.length < 5) {
                        return false;
                    }
                    var iChars = "*|,\":<>[]{}`';()&$#%";
                    var eLength = str.length;
                    for (var i = 0; i < eLength; i++) {
                        if (iChars.indexOf(str.charAt(i)) != -1) {
                            return false;
                        }
                    }
                    var atIndex = str.lastIndexOf("@");
                    if (atIndex < 1 || (atIndex == eLength - 1)) {
                        return false;
                    }
                    var pIndex = str.lastIndexOf(".");
                    if (pIndex < 4 || (pIndex == eLength - 1)) {
                        return false;
                    }
                    if (atIndex > pIndex) {
                        return false;
                    }
                    return true;
                }
                string.isEmail = isEmail;
                ;
            })(string = utils.string || (utils.string = {}));
        })(utils = grwpo.utils || (grwpo.utils = {}));
    })(grwpo = com.grwpo || (com.grwpo = {}));
})(com || (com = {}));

/**
 *
 * String Utils by GrupoW
 * GrupoW
 *
 * Released under MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 **/
var com;
(function (com) {
    var grwpo;
    (function (grwpo) {
        var utils;
        (function (utils) {
            var string;
            (function (string) {
                /**
                 *
                 * @param	value
                 * @return	check if the passes string is a valid number (0-9)
                 */
                function isNumeric(value) {
                    return !isNaN(value);
                }
                string.isNumeric = isNumeric;
                ;
            })(string = utils.string || (utils.string = {}));
        })(utils = grwpo.utils || (grwpo.utils = {}));
    })(grwpo = com.grwpo || (com.grwpo = {}));
})(com || (com = {}));

/**
 *
 * String Utils by GrupoW
 * GrupoW
 *
 * Released under MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 **/
var com;
(function (com) {
    var grwpo;
    (function (grwpo) {
        var utils;
        (function (utils) {
            var string;
            (function (string) {
                /**
                 *
                 * @param	value
                 * @return	check if is valid syntax phone like (55) 1234-5678
                 */
                function isPhoneWithSpecialChars(str) {
                    var re = /^[0-9()\- ]+$/;
                    if (re.test(str)) {
                        var n = str.replace(/[^\d]/g, ''); // remove all non-digits
                        if (n && n.length == 10) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    else {
                        return false;
                    }
                }
                string.isPhoneWithSpecialChars = isPhoneWithSpecialChars;
                ;
                /**
                 *
                 * @param	value
                 * @return	check if is valid phone like 5512345678
                 */
                function isPhone(str) {
                    var re = /^([0-9]{10})/;
                    return re.test(str);
                }
                string.isPhone = isPhone;
                ;
            })(string = utils.string || (utils.string = {}));
        })(utils = grwpo.utils || (grwpo.utils = {}));
    })(grwpo = com.grwpo || (com.grwpo = {}));
})(com || (com = {}));

/// <reference path="../lib/jasmine.d.ts"/>
/// <reference path="../src/com/grwpo/utils/math/toDeg.ts"/>
/// <reference path="../src/com/grwpo/utils/string/isEmail.ts"/>
var MathUtils = com.grwpo.utils.math;
var StringUtils = com.grwpo.utils.string;
describe('Math Utils test', function () {
    describe("should works!", function () {
        it("toDeg", function () {
            expect(MathUtils.toDeg(Math.PI / 2)).toEqual(90);
        });
        it("toRad", function () {
            expect(MathUtils.toRad(90)).toEqual(Math.PI / 2);
        });
    });
});
describe('String Utils test', function () {
    describe("should works!", function () {
        it("'ff@google.com' should be a valid email", function () {
            expect(StringUtils.isEmail("ff@google.com")).toBe(true);
        });
        it("'ff.com' should be invalid email", function () {
            expect(StringUtils.isEmail("ff.com")).toBe(false);
        });
    });
});
