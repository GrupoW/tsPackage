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
     * @param	str
     * @return	check if the passes string is a valid alpha (a-zA-Z)
     */
    export function isAlpha(str:string):boolean
    {
        var re = /^[a-zA-Z]+$/;
        return re.test(str);
    };

    /**
     *
     * @param	str
     * @return	check if the passes string is a valid latin alpha (a-zA-ZñÑáéíóúÁÉÍÓÚ)
     */
    export function isLatinAlpha(str:string):boolean
    {
        var re = /^[a-zA-Z\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00f1\u00d1\u00FC\u00DC]+$/;
        return re.test(str);
    };
}