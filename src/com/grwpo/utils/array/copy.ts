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
	
	export function copy<T>(data:Array<T>):Array<T> {
		return data.slice();
	}
}