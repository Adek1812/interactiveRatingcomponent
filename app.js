const allRatings = document.querySelectorAll('.rating');
const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const btn = document.querySelector('.btnSubmit');
const finalRaiting = document.querySelector('.result-raiting');

const hideShowCard = () => {
	card1.classList.toggle('show');
	card2.classList.toggle('show');
};

allRatings.forEach((rating) => {
	rating.addEventListener('click', () => {
		finalRaiting.textContent = rating.textContent;
	});
});

btn.addEventListener('click', hideShowCard);
