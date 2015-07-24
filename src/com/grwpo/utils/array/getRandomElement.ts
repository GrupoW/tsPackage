/**
 * 
 * Array Utils by GrupoW
 * GrupoW
 *  
 * Released under MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 * 
 **/

module com.grwpo.utils.array {
	
	export function getRandomElement<T>(value:Array<T>):T {
		return value[Math.floor(Math.random() * value.length)];
	}
}