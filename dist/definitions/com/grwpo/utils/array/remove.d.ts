/**
 *
 * Array Utils by GrupoW
 * GrupoW
 *
 * Released under MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 **/
declare module com.grwpo.utils.array {
    /**
     *
     * @param	data
     * @param	ref
     * @return	new array with the element removed
     */
    function remove<T>(data: Array<T>, ref: T): Array<T>;
}
