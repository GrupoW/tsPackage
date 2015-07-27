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
     * @return	check if the passes string is a valid alpha numeric (a-zA-Z0-9)
     */
    export function isAlphaNumeric(str:string):boolean;

    /**
     *
     * @param	str
     * @return	check if the passes string is a valid latin alpha numeric (0-9a-zA-ZñÑáéíóúÁÉÍÓÚ)
     */
    export function isLatinAlphaNumeric(str:string):boolean;
}