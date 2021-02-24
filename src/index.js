module.exports = function check(str, bracketsConfig) {

	let bracketsConfigAll = [];
	let bracketsConfigAllList = [];
	let strArr = Array.from(str);

	if (str.length % 2 == 0) {
		for (let i = 0; i < bracketsConfig.length; i++) {
			bracketsConfigAll[i] = bracketsConfig[i];
			bracketsConfigAllList = bracketsConfigAll.toString().split(",");
		}
		/* console.log(strArr);
		console.log(bracketsConfigAllList); */

		for (let j = 0; j < strArr.length; j++) {

			for (let i = 0; i < strArr.length - 1; i++) {
				let index = bracketsConfigAllList.indexOf(strArr[i]);

				if (strArr[i + 1] == bracketsConfigAllList[index + 1] ) {
					strArr.splice(i, 2);
				}

				if (strArr.length !== 0) {
					for (let i = 0; i < strArr.length - 1; i++) {
						let index = bracketsConfigAllList.indexOf(strArr[i]);

						if (strArr[i + 1] == bracketsConfigAllList[index + 1]) {
							strArr.splice(i, 2);
						}
					}
				}
			}
		}
		}
	return strArr.length == 0;
}
