/**
 *
 * String Utils by GrupoW
 * GrupoW
 *
 * Released under MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 **/

module com.grwpo.utils.string {
    /**
     *
     * @param	value
     * @return	check if is valid syntax phone like (55) 1234-5678
     */
    export function isPhoneWithSpecialChars(str:string):boolean
    {
        var re = /^[0-9()\- ]+$/;
        if(re.test(str)) {
            var n = str.replace(/[^\d]/g,''); // remove all non-digits
            if(n && n.length == 10) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    };

    /**
     *
     * @param	value
     * @return	check if is valid phone like 5512345678
     */

    export function isPhone(str:string):boolean
    {
        var re = /^([0-9]{10})/;
        return re.test(str);
    };
}