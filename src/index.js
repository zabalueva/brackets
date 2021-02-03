module.exports = function check(str, bracketsConfig) {
    let result = false;
	let bracketsConfigAll = [];
	let bracketsConfigAllList = [];
	let find;
	let workLength = str.length;

	if (str.length % 2 == 0) {
		for (let i = 0; i < bracketsConfig.length; i++) {
			bracketsConfigAll[i] = bracketsConfig[i];
			bracketsConfigAllList = bracketsConfigAll.toString().split(",");
		}
		if (str.length !== 2) {
			workLength = str.length - 2
		}

		/* console.log(str);
		console.log(bracketsConfigAllList); */

		for (let i = 0; i < workLength; i++) {
			find = bracketsConfigAllList.indexOf(str[i]);
			/* console.log(find) */

			if (bracketsConfigAllList[find + 1]) {

				if (i % 2 == 0) {
					for (let j = i + 1; j < str.length; j += 2) {

						if (bracketsConfigAllList[find + 1] == str[j]) {
							/* console.log(`true on index ${i}${j}`); */
							result = true;
							break;
						} else {
							/* console.log(`false == 0 on index ${i}${j} !`) */
							result = false;
							break;
						}
					}
				}

				if (i % 2 !== 0) {
					for (let j =  i + 1; j < str.length; j += 2) {

						if (str[j] == bracketsConfigAllList[find + 1]) {
							/* console.log(`true on index ${i}${j}`) */
							result = true;
							break;
						} else {
							/* console.log(`false on index ${i}${j}`) */
							result = false;
							break;
						}
					}
				}
			}
		}
	}
	return result;
}
