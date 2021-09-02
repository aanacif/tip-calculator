//Calc container
const calc = document.querySelector('.calc-container')
//Bill
const calcBill = document.querySelector('.calc-bill')
//Number of people
const calcPeople = document.querySelector('.calc-people')
//reset button
const calcReset = document.querySelector('.reset')

const tipAmountPerson = document.querySelector('.calc-tip-amount h1').textContent
const tipAmountTotal = document.querySelector('.calc-total h1').textContent

const percentageSelectEvent = document.querySelector('.calc-percs')
percentageSelectEvent.addEventListener('change', (event) => {
	let temp = document.querySelector('.calc-percs label')
	temp.classList.remove('active')
	console.log(event.target?.parentNode?.classList.toggle('active'))

	checkOut()
})


//zero-people-alert
let zeroAlert = document.querySelector('.zero-people')
calcPeople.addEventListener('keyup', () => {
	if (calcPeople.value < 1) {
		zeroAlert.style.opacity = 1
	} else {
		zeroAlert.style.opacity = 0
	}
})

function round(num) {
	let m = Number((Math.abs(num) * 100).toPrecision(15));
	return Math.round(m) / 100 * Math.sign(num);
}

calcReset.addEventListener('click', () => {
	document.querySelector('.calc-tip-amount h1').textContent = '$0.00'
	document.querySelector('.calc-total h1').textContent = '$0.00'
})

function calcPercentage(bill, percentage) {
	if (bill && percentage) {
		let result = bill * (percentage / 100)
		return round(result)
	}
}
function calcTotalPerPerson(bill, people) {
	if (bill && people) {
		let result = bill / people
		if (Number.isFinite(result) && !isNaN(result)) {
			return round(result)
		}
	}
	return
}

calc.addEventListener('keyup', () => {
	checkOut()
})

const checkOut = () => {
	const totalPerPerson = calcTotalPerPerson(calcBill.value, calcPeople.value)
	let totalPercentage = calcPercentage(calcBill.value, selectedPercentage())
	if (totalPerPerson > 0) {
		document.querySelector('.calc-total h1').textContent = `$${totalPerPerson + (totalPercentage / calcPeople.value)}`
	}
	if (totalPercentage > 0 && calcPeople.value) {
		totalPercentage = totalPercentage / calcPeople.value
		document.querySelector('.calc-tip-amount h1').textContent = `$${totalPercentage}`

	}
}

const selectedPercentage = () => {
	let isPercentageSelected = document.querySelectorAll('.calc-percs input[name="options"]:checked');
	if (isPercentageSelected) {
		return round(isPercentageSelected[0]?.value)
	}
	return 1
}
