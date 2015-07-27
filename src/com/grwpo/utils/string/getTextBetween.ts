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
     * @param	start
     * @param	end
     * @return	get the text between start and end text from str
     */
    export function getTextBetween(str:string, start:string, end:string):string
    {
        var re = new RegExp('.*' + start + '\\s+(.*)\\s+' + end + '.*', '');
        var newstr = str.replace(re, "$1");
        return newstr;
    };
}