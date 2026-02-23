//your code here

let currenctUser = null;
let userImage = document.getElementById("userImage")
let userName = document.getElementById("userName")
let addintionalInfo = document.getElementById("additionalInfo")
let getUser = document.getElementById("getUser")
let infoButtons = document.querySelectorAll("button[data-attr]")

async function fetchUser(){
	let res = await fetch("http://randomuser.me/api")
	let data = await res.json()
	currenctUser = data.results[0]

	displayUser()
}

function displayUser(){
	const {first,last} = currenctUser.name;
	userName.textContent = `${first} ${last}`
	userImage.src = currenctUser.picture.large;

	addintionalInfo.textContent = ""
}

infoButtons.forEach((button) => {
	button.addEventListener("click", () => {
		if(!currenctUser)return;

		const attr = button.dataset.attr;
		let value = ""

		switch(attr){
			case "age":
				value = `Age: ${currenctUser.dob.age}`;
				break;
			case "email":
				value = `Email: ${currenctUser.email}`;
				break;
			case "phone":
				value = `Phone: ${currenctUser.phone}`;
				break;
		}

		addintionalInfo.textContent = value;
		
	})
})

getUser.addEventListener("click",fetchUser);

fetchUser();


