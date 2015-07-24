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
