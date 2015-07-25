/**
 * 
 * String Utils by GrupoW
 * GrupoW
 *  
 * Released under MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 * 
 **/

module com.grwpo.utils.string {
	/**
	 * 
	 * @param	str
	 * @return	check if the passes string is a valid e-mail
	 */
	export function isEmail(str:string):boolean
	{
		if (str.length < 5) { 
			return false; 
		}

		var iChars:string = "*|,\":<>[]{}`';()&$#%";
		var eLength:number = str.length;

		for (var i:number = 0;i < eLength;i++) {
			if (iChars.indexOf(str.charAt(i)) != -1) {
				return false;
			}
		}

		var atIndex:number = str.lastIndexOf("@");

		if (atIndex < 1 || (atIndex == eLength - 1)) {
			return false;
		}
		
		var pIndex:number = str.lastIndexOf(".");

		if (pIndex < 4 || (pIndex == eLength - 1)) {
			return false;
		}
		
		if (atIndex > pIndex) {
			return false;
		}
		
		return true;
	};
}