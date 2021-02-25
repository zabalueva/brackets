module.exports = function check(str, bracketsConfig) {
	let bracketsConfigAll = [];
    let bracketsConfigAllList = [];
    let stack = [];

	for (let i = 0; i < bracketsConfig.length; i++) {
		bracketsConfigAll[i] = bracketsConfig[i];
		bracketsConfigAllList = bracketsConfigAll.toString().split(",");
	}

	/* console.log(str);
	console.log(brackets); */

	for (let item of str) {
		let bracketsIndex = bracketsConfigAllList.indexOf(item);

		if (bracketsIndex % 2 == 0) {
            if (bracketsConfigAllList[bracketsConfigAllList.indexOf(item)]
                == bracketsConfigAllList[bracketsConfigAllList.indexOf(item) + 1]) {


				if ((str.indexOf(item) - str.lastIndexOf(item)) % 2 == 0) {
					return false;
                }
                if (str[str.indexOf(item)] == str[str.indexOf(item) + 1]) {
                    Array.from(str).splice(str.indexOf(item), 2);
                }

				stack.push(bracketsIndex + 1);
				stack.pop();
			} else {
				stack.push(bracketsIndex + 1);
			}
				/* console.log(stack); */
			} else {
				if (stack.pop() !== bracketsIndex) {
					return false;
				}
			}
		}
		return stack.length === 0;
}
