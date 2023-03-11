// Form Function
let confirmVisit = () => {
	let nameInput = document.querySelector("#name").value;
	let visitorNumber = document.querySelector("#guests").value;
	let availableDate = document.querySelector("#date").value;
	let availableDateMobile = document.querySelector("#mobile-date").value;
	let submissionMsg = document.querySelector("#submission-complete");
	let form = document.querySelector(".tour-form");
	let incompleteForm = document.querySelector("#submission-incomplete");

	if (
		nameInput == false ||
		visitorNumber == false ||
		(availableDate == false && availableDateMobile == false)
	) {
		incompleteForm.textContent = `Sorry, we need more information to continue.`;
	} else {
		form.remove();
		submissionMsg.textContent = `Great news, ${nameInput}! We can absolutely accomodate you and your ${visitorNumber} guest(s). Expect a call by ${availableDate}${availableDateMobile}!`;
	}
};

let scheduleVisit = document.querySelector("#visit-btn");
scheduleVisit.addEventListener("click", confirmVisit);

// Hover Function for Mobile
document.addEventListener("touchstart", function () {}, true);
