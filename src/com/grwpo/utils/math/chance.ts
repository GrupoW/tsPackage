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
	 * @param	p specified the probability (0 to 1) that the random "event" occurs.
	 * @return	true if a random "event" occurs
	 */
	
	export function chance(p:Number):Boolean
	{
		return (Math.random() <= p);
	}
}