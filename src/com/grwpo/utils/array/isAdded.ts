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
	
	export function isAdded<T>(arra:Array<T>,value:T):Boolean {
		for (var i:number = 0;i <= arra.length;i++) {
			if (arra[i] === value) {
				return true;
			}
		}
		return false;
	}
}