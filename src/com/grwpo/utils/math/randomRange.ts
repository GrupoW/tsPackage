/**
 * 
 * Math Utils by GrupoW
 * GrupoW
 *  
 * Released under MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 * 
 **/

/// <reference path="./random.ts" />

module com.grwpo.utils.math {
	/**
	 * 
	 * @param	min
	 * @param	max
	 * @return	a random integer from min to max
	 */
	export function randomRange(min:number,max:number):number
	{
		return min + random(max - min);
	}
}