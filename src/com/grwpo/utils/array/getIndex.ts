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
	
	export function getIndex<T>(arra:Array<T>,value:T):number {
		var checktmp:number = 1;
		for (var i:number = 0;i <= arra.length;i++) {
			if (arra[i] == value)
				break;
			checktmp++;
		}
		return checktmp - 1;
	}
}