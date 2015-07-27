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
    export function isAlpha(str:string):boolean;

    /**
     *
     * @param	str
     * @return	check if the passes string is a valid latin alpha (a-zA-ZñÑáéíóúÁÉÍÓÚ)
     */
    export function isLatinAlpha(str:string):boolean;
}