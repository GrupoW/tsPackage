/// <reference path="../lib/jasmine.d.ts"/>
/// <reference path="../src/com/grwpo/utils/math/toDeg.ts"/>
/// <reference path="../src/com/grwpo/utils/string/isEmail.ts"/>

import MathUtils = com.grwpo.utils.math;
import StringUtils = com.grwpo.utils.string;

describe('Math Utils test', function() {
    describe("should works!", function() {
        it("toDeg", function() {
            expect(MathUtils.toDeg(Math.PI/2)).toEqual(90);
        });

        it("toRad", function() {
            expect(MathUtils.toRad(90)).toEqual(Math.PI/2);
        });
    });
});

describe('String Utils test', function() {
    describe("should works!", function() {
        it("'ff@google.com' should be a valid email", function() {
            expect(StringUtils.isEmail("ff@google.com")).toBe(true);
        });

        it("'ff.com' should be invalid email", function() {
            expect(StringUtils.isEmail("ff.com")).toBe(false);
        });
    });
});