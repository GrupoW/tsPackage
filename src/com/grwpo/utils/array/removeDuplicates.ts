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
	
	export function removeDuplicates<T>(arra:Array<T>):Array<T> {
		var i:number;
		var j:number; 
		var temp:Array<T>;
	
		temp = arra.slice();
		
		for (i = 0;i < temp.length;i++) {
			for (j = 0;j < temp.length;j++) {
				if (temp[j] == temp[i] && i != j) {
					temp.splice(j, 1);
					j--;
				}
			}
		}
		return temp;
	};
}