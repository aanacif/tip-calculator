//Calc container
let calc = document.querySelector('.calc-container')

let tipAmountPerson = document.querySelector('.calc-tip-amount h1').textContent
let tipAmountTotal = document.querySelector('.calc-total h1').textContent
//Bill
let calcBill = document.querySelector('.calc-bill')
//Number of people
let calcPeople = document.querySelector('.calc-people')
//reset button
let calcReset = document.querySelector('.reset')



//zero-people-alert
let zeroAlert = document.querySelector('.zero-people')
calcPeople.addEventListener('keyup', () => {
	if (calcPeople.value < 1) {
		zeroAlert.style.opacity = 1
	} else {
		zeroAlert.style.opacity = 0
	}
})



calc.addEventListener('keyup', () => {
	let totalPerPerson = calcTotalPerPerson(calcBill.value, calcPeople.value)
	let totalPercentage = calcPercentage(calcBill.value, calcCut.value)
	if (totalPerPerson) {
		document.querySelector('.calc-total h1').textContent = `$${totalPerPerson}`
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
	let result = bill * percentage
	console.log(result)
}
function calcTotalPerPerson(bill, people) {
	let result = bill / people
	if (Number.isFinite(result) && !isNaN(result)) {
		return round(result)
	}
}