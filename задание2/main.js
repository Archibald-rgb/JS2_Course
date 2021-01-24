
const formObj = document.querySelector('form');

function main() {
	formObj.addEventListener('submit', sendFormData);

	function sendFormData(e) {
		e.preventDefault();

		let nameInput = document.getElementById('name');
		nameInput.classList.remove('_error');
		if (!isValid(nameInput.value, /^[a-z]+$/ig)) {
			nameInput.classList.add('_error');
			nameInput.value = '';
			nameInput.placeholder = 'Имя должно содержать только буквы';
		}

		let telInput = document.getElementById('tel');
		telInput.classList.remove('_error');
		if (!isValid(telInput.value, /^\+\d\(\d{3}\)\d{3}-\d{4}$/ig)) {
			telInput.classList.add('_error');
			telInput.value = '';
			telInput.placeholder = 'Номер должен быть вида +x(xxx)xxx-xxxx';
		}

		let emailInput = document.getElementById('email');
		emailInput.classList.remove('_error');
		if (!isValid(emailInput.value, /^[a-z]+([\.-]?[a-z]+)*@[a-z]+\.[a-z]+$/ig)) {
			emailInput.classList.add('_error');
			emailInput.value = '';
			emailInput.placeholder = 'Вы ввели неверный емайл';
		}
	}

	function isValid(value, regexp) {
		return regexp.test(value);
	}
}

main();