const allRatings = document.querySelectorAll('.rating');
const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const btn = document.querySelector('.btnSubmit');
const finalRaiting = document.querySelector('.result-raiting');

const hideShowCard = () => {
	card1.classList.toggle('show');
	card2.classList.toggle('show');
};

const checkRating = () => {
	if (allRatings.classList.contains('orange')) {
		console.log('ok');
	} else {
		console.error('wybierz ocene');
	}
};

allRatings.forEach((rating) => {
	rating.addEventListener('click', () => {
		rating.classList.toggle('orange');
		finalRaiting.textContent = rating.textContent;
	});
});

btn.addEventListener('click', hideShowCard);
