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
     * @return	check if the passes string is a valid number (0-9)
     */
    export function isNumeric(value:any):boolean
    {
        return !isNaN(value);
    };
}