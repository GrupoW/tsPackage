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
	 * @param	rads
	 * @return	degrees value
	 */
	export function toDeg(rads:number):number {
		return rads*180/Math.PI;
	}
}