const select = document.querySelector('[name="select"]')
const optionOne = document.querySelector('[value="value1"]')
const optionTwo = document.querySelector('[value="value2"]')
const optionThree = document.querySelector('[value="value3"]')
const p = document.querySelector('p')
select.addEventListener("change", () => {
    if (select.value === optionOne.value) {
        p.textContent = "Ви обрали каву"
    }
    else if (select.value === optionTwo.value) {
        p.textContent = "Ви обрали чай"
    }
    else if (select.value === optionThree.value) {
        p.textContent = "Ви обрали сік"
    }
})

const input = document.querySelector('input')
const buttonOne = document.querySelector('.button')
const pClass = document.querySelector('.p')
buttonOne.addEventListener("click", () => {
    switch (input.value) {
        case "Sunday":
        pClass.textContent = "It's a day off"
        break;
        case "Monday":
        pClass.textContent = "It's a working day"
        break;
        case "Tuesday":
        pClass.textContent = "It's a working day"
        break;
        case "Wednesday":
        pClass.textContent = "It's a working day"
        break;
        case "Thursday":
        pClass.textContent = "It's a working day"
        break;
        case "Friday":
        pClass.textContent = "It's a working day"
        break;
        case "Suturday":
        pClass.textContent = "It's a day off"
        break;
        default:
        pClass.textContent = "It's not a day of the week"
        break;
    }
})

const buttonTwo = document.querySelector('.buttontwo')
const inputTwo = document.querySelector('[name="inputik"]')
const pId = document.querySelector('#p')
buttonTwo.addEventListener("click", () => {
switch (inputTwo.value) {
    case "12":
    case "1":
    case "2":
    pId.textContent = "Цей місяць належить до зими"
    break;
    case "3":
    case "4":
    case "5":
    pId.textContent = "Цей місяць належить до весни"
    break;
    case "6":
    case "7":
    case "8":
    pId.textContent = "Цей місяць належить до літа"
    break;
    case "9":
    case "10":
    case "11":
    pId.textContent = "Цей місяць належить до осіні"
    break;
    default:
    pId.textContent = "Це число не належить до місяця"
    break;
}
})

const buttonMonth = document.querySelector('.button-month')
const inputMonth = document.querySelector('#input-month')
const hFour = document.querySelector('h4')
buttonMonth.addEventListener("click", () => {
switch (inputMonth.value) {
    case "1":
    hFour.textContent = "31"
    break;
    case "2":
    hFour.textContent = "28"
    break;
    case "3":
    hFour.textContent = "31"
    break;
    case "4":
    hFour.textContent = "30"
    break;
    case "5":
    hFour.textContent = "31"
    break;
    case "6":
    hFour.textContent = "30"
    break;
    case "7":
    hFour.textContent = "31"
    break;
    case "8":
    hFour.textContent = "31"
    break;
    case "9":
    hFour.textContent = "30"
    break;
    case "10":
    hFour.textContent = "31"
    break;
    case "11":
    hFour.textContent = "30"
    break;
    case "12":
    hFour.textContent = "31"
    break;

    default:
    hFour.textContent = "Це не місяць"
    break;
}
})

const buttonThree = document.querySelector('.buttonthree')
const inputThree = document.querySelector('.inputthree')
const hTwo = document.querySelector('h2')
buttonThree.addEventListener("click", () => {
switch (inputThree.value) {
    case "червоний":
    hTwo.textContent = "стоп"
    break;
    case "жовтий":
    hTwo.textContent = "чекати"
    break;
    case "зелений":
    hTwo.textContent = "йти"
    break;
    default:
    hTwo.textContent = "це не запропонований колір"
    break;
}})

const buttonFour = document.querySelector('.buttonfour')
const inputAccrualOne = document.querySelector('#input-accrual1')
const inputAccrualTwo = document.querySelector('#input-accrual2')
const hThree = document.querySelector('h3')
const selectTwo = document.querySelector('#select2')
const optionFour = document.querySelector('[value="value4"]')
const optionFive = document.querySelector('[value="value5"]')
const optionSix = document.querySelector('[value="value6"]')
const optionSeven = document.querySelector('[value="value7"]')
buttonFour.addEventListener("click", () => {
    switch (selectTwo.value) {
    case optionFour.value:
    hThree.textContent = Number(inputAccrualOne.value) + Number(inputAccrualTwo.value)
    break;
    case optionFive.value:
    hThree.textContent = Number(inputAccrualOne.value) - Number(inputAccrualTwo.value)
    break;
    case optionSix.value:
    hThree.textContent = Number(inputAccrualOne.value) * Number(inputAccrualTwo.value)
    break;
    case optionSeven.value:
    hThree.textContent = Number(inputAccrualOne.value) / Number(inputAccrualTwo.value)
    break;
    }
})
