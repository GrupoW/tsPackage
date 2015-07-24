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
	/**
	 * 
	 * @param	data
	 * @param	ref
	 * @return	new array with the element removed
	 */
	export function remove<T>(data:Array<T>,ref:T):Array<T> {
		for(var i:number = 0;i < data.length;i++) {
			if(data[i] === ref) {
				data.splice(i, 1);
			}
		}
		return data;
	}
}