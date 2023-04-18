let test__button = document.querySelector("#test__button");
test__button.addEventListener("click", getCount);


function getCount() {
	let str = "abbgfdgdfgwwewefaoi"
	let count = 0;
	console.log(str.length);
	for (let i = 0; i < str.length; i++) {
		if ("aouei".includes(str[i])){
			count++;
		}
	}
	console.log(count);
	return 0;
 }