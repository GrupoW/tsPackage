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
	
	export function shuffle<T>(data:Array<T>):Array<T> {
		var return_array:Array<T> = []
		var original_length:number = data.length;
		for (var i:number = 0;i < original_length;i++) {
			var random_number:number = Math.floor(Math.random() * (data.length));
			return_array[i] = data.splice(random_number, 1)[0];
		}
		return return_array;
	}
}