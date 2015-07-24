/// <reference path="../lib/jasmine.d.ts"/>
/// <reference path="../src/com/grwpo/utils/math/toDeg.ts"/>

import MathUtils = com.grwpo.utils.math;

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