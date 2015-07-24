/**
 * 
 * Math Utils by GrupoW
 * GrupoW
 *  
 * Released under MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 * 
 **/

module com.grwpo.utils.math {
	/**
	 * 
	 * @param	max
	 * @return	a random integer from 0 to max
	 */
	export function random(max:number):number {
		return Math.round(Math.random() * max);
	}
}