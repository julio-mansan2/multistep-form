const heading = document.querySelectorAll('.heading')
const submit = document.querySelectorAll('.submit')
const previous = document.querySelectorAll('.previous')
const step = document.querySelectorAll('.step')

//Step 1

const inputPersonal = document.querySelectorAll('.input-personal')
const inputName = document.getElementById('name-input')
const inputEmail = document.getElementById('email-input')
const inputCell = document.getElementById('telefone')
const messageError = document.querySelectorAll('.message-error')

submit[0].addEventListener('click', function () {
    event.preventDefault()
    for (let i = 0; i < messageError.length; i++) {
        if (inputPersonal[i].validity.valid) {
            messageError[i].classList.remove('aparecer')
            inputPersonal[i].classList.remove('invalid-border')
        } else {
            messageError[i].classList.add('aparecer')
            inputPersonal[i].classList.add('invalid-border')
        }
    }
    if (inputCell.validity.valid && inputEmail.validity.valid && inputName.validity.valid) {
        step[1].classList.add('selecionado')
        step[0].classList.remove('selecionado')
        heading[0].classList.remove('secao-atual')
        heading[1].classList.add('secao-atual')
    }
})

//Step 2 

const inputToggle = document.getElementById('switch')
const arcadeInput = document.getElementById('arcade')
const advancedInput = document.getElementById('advanced')
const proInput = document.getElementById('pro')
const monthlyPrice = document.querySelectorAll('.monthly')
const yearlyPrice = document.querySelectorAll('.yearly')
const freeMessage = document.querySelectorAll('.free')
const spanToggle = document.querySelectorAll('.span-toggle')

inputToggle.addEventListener('click', function () {
    for (let i = 0; i < monthlyPrice.length; i++) {
        if (inputToggle.checked === true) {
            yearlyPrice[i].classList.add('selecionado')
            freeMessage[i].classList.add('selecionado')
            monthlyPrice[i].classList.remove('selecionado')
            spanToggle[0].classList.remove('color-checked')            
            spanToggle[1].classList.add('color-checked')
        } else if (inputToggle.checked === false) {
            yearlyPrice[i].classList.remove('selecionado')
            freeMessage[i].classList.remove('selecionado')
            monthlyPrice[i].classList.add('selecionado')
            spanToggle[0].classList.add('color-checked')            
            spanToggle[1].classList.remove('color-checked')
        }
    }
})

submit[1].addEventListener('click', function () {
    if (arcadeInput.checked | advancedInput.checked | proInput.checked) {
        step[2].classList.add('selecionado')
        step[1].classList.remove('selecionado')
        heading[1].classList.remove('secao-atual')
        heading[2].classList.add('secao-atual')
    }
    
})

previous[0].addEventListener('click', function () {
    step[1].classList.remove('selecionado')
    step[0].classList.add('selecionado')
    heading[0].classList.add('secao-atual')
    heading[1].classList.remove('secao-atual')
})

const planLabel = document.querySelectorAll('.plan')

arcadeInput.addEventListener('click', function() {
    if (arcadeInput.checked) {
        planLabel[0].classList.add('border-checked')
        planLabel[1].classList.remove('border-checked')
        planLabel[2].classList.remove('border-checked')
    }
})

advancedInput.addEventListener('click', function() {
    if (advancedInput.checked) {
        planLabel[0].classList.remove('border-checked')
        planLabel[1].classList.add('border-checked')
        planLabel[2].classList.remove('border-checked')
    }
})

proInput.addEventListener('click', function() {
    if (proInput.checked) {
        planLabel[0].classList.remove('border-checked')
        planLabel[1].classList.remove('border-checked')
        planLabel[2].classList.add('border-checked')
    }
})

//Step 3 

const onlineInput = document.getElementById('online-service')
const storageInput = document.getElementById('larger-storage')
const profileInput = document.getElementById('customizable-profile')
const monthAddOn = document.querySelectorAll('.month')
const yearAddOn = document.querySelectorAll('.year')
const divAddOn = document.querySelectorAll('.add-on')

onlineInput.addEventListener('click', function() {
    if(onlineInput.checked) {
        divAddOn[0].classList.add('border-checked')
    } else {
        divAddOn[0].classList.remove('border-checked')
    }
})

storageInput.addEventListener('click', function() {
    if(storageInput.checked) {
        divAddOn[1].classList.add('border-checked')
    } else {
        divAddOn[1].classList.remove('border-checked')
    }
})

profileInput.addEventListener('click', function() {
    if(profileInput.checked) {
        divAddOn[2].classList.add('border-checked')
    } else {
        divAddOn[2].classList.remove('border-checked')
    }
})


submit[1].addEventListener('click', function () {
    for (let i = 0; i < monthlyPrice.length; i++) {
        if (inputToggle.checked) {
            yearAddOn[i].classList.add('selecionado')
            monthAddOn[i].classList.remove('selecionado')
        } else {
            yearAddOn[i].classList.remove('selecionado')
            monthAddOn[i].classList.add('selecionado')
        }
    }
})

submit[2].addEventListener('click', function () {
    step[3].classList.add('selecionado')
    step[2].classList.remove('selecionado')
    heading[3].classList.add('secao-atual')
    heading[2].classList.remove('secao-atual')
})

previous[1].addEventListener('click', function () {
    step[2].classList.remove('selecionado')
    step[1].classList.add('selecionado')
    heading[1].classList.add('secao-atual')
    heading[2].classList.remove('secao-atual')
})

// Step 4

const planoEscolhido = document.querySelector('.plano-escolhido')
const planPrice = document.querySelector('.plan-price')
const inputPlan = document.querySelectorAll('.input-plan')

submit[2].addEventListener('click', function () {
    if (arcadeInput.checked  && inputToggle.checked === false) {
        planoEscolhido.innerHTML = 'Arcade (Monthly)'
    } else if (arcadeInput.checked && inputToggle.checked) {
        planoEscolhido.innerHTML = 'Arcade (Yearly)'
    }

    if (advancedInput.checked  && inputToggle.checked === false) {
        planoEscolhido.innerHTML = 'Advanced (Monthly)'
    } else if (advancedInput.checked && inputToggle.checked) {
        planoEscolhido.innerHTML = 'Advanced (Yearly)'
    }

    if (proInput.checked  && inputToggle.checked === false) {
        planoEscolhido.innerHTML = 'PRO (Monthly)'
    } else if (proInput.checked && inputToggle.checked) {
        planoEscolhido.innerHTML = 'PRO (Yearly)'
    }

    for (let i = 0; i < inputPlan.length; i++) {
        if (inputPlan[i].checked && inputToggle.checked === false) {
            planPrice.innerHTML = '$' + inputPlan[i].value + '/mo'
        } else if (inputPlan[i].checked && inputToggle.checked === true) {
            planPrice.innerHTML = '$' + inputPlan[i].value*10 + '/yr'
        }
    }

})

const onlineSummary = document.querySelector('.online-summary')
const largerSummary = document.querySelector('.larger-summary')
const profileSummary = document.querySelector('.profile-summary')
const monthlySummary = document.querySelectorAll('.monthly-summary')
const yearlySummary = document.querySelectorAll('.yearly-summary')
const inputAddOn = document.querySelectorAll('.input-add-on')
const totalMonth = document.querySelector('.total-month')
const totalYear = document.querySelector('.total-year')

submit[2].addEventListener('click', function () {
    if (onlineInput.checked) {
        onlineSummary.classList.add('add-on-selecionado')
    }

    if (storageInput.checked) {
        largerSummary.classList.add('add-on-selecionado')
    }

    if (profileInput.checked) {
        profileSummary.classList.add('add-on-selecionado')
    }
})

inputToggle.addEventListener('click', function() {
    for (let i = 0; i < monthlySummary.length; i++) {
        if (inputToggle.checked) {
            monthlySummary[i].classList.remove('selecionado')
            yearlySummary[i].classList.add('selecionado')
            totalMonth.classList.remove('selecionado')
            totalYear.classList.add('selecionado')
        } else if (inputToggle.checked === false) {
            monthlySummary[i].classList.add('selecionado')
            yearlySummary[i].classList.remove('selecionado')
            totalMonth.classList.add('selecionado')
            totalYear.classList.remove('selecionado')
        }
    }
})

const total = document.querySelector('.total')

submit[2].addEventListener('click', function() {
    for (let i = 0; i < inputAddOn.length; i++) {

        if (inputPlan[i].checked && inputAddOn[0].checked && inputAddOn[1].checked === false && inputAddOn[2].checked === false && inputToggle.checked === false) {
            total.innerHTML = '+$' + ((inputPlan[i].value/1 + inputAddOn[0].value/1)) + '/mo'
        } else if (inputPlan[i].checked && inputAddOn[0].checked && inputAddOn[1].checked === false && inputAddOn[2].checked === false && inputToggle.checked === true) {
            total.innerHTML = '+$' + (10 * (inputPlan[i].value/1 + inputAddOn[0].value/1)) + '/yr'
        }

        if (inputPlan[i].checked && inputAddOn[0].checked === false && inputAddOn[1].checked === true && inputAddOn[2].checked === false && inputToggle.checked === false) {
            total.innerHTML = '+$' + ((inputPlan[i].value/1 + inputAddOn[1].value/1)) + '/mo'
        } else if (inputPlan[i].checked && inputAddOn[0].checked === false && inputAddOn[1].checked === true && inputAddOn[2].checked === false && inputToggle.checked === true) {
            total.innerHTML = '+$' + (10 * (inputPlan[i].value/1 + inputAddOn[1].value/1)) + '/yr'
        }

        if (inputPlan[i].checked && inputAddOn[0].checked === false && inputAddOn[1].checked === false && inputAddOn[2].checked === true && inputToggle.checked === false) {
            total.innerHTML = '+$' + ((inputPlan[i].value/1 + inputAddOn[2].value/1)) + '/mo'
        } else if (inputPlan[i].checked && inputAddOn[0].checked === false && inputAddOn[1].checked === false && inputAddOn[2].checked === true && inputToggle.checked === true) {
            total.innerHTML = '+$' + (10 * (inputPlan[i].value/1 + inputAddOn[2].value/1)) + '/yr'
        }

        if (inputPlan[i].checked && inputAddOn[0].checked === true && inputAddOn[1].checked === true && inputAddOn[2].checked === false && inputToggle.checked === false) {
            total.innerHTML = '+$' + ((inputPlan[i].value/1 + inputAddOn[0].value/1 + inputAddOn[1].value/1)) + '/mo'
        } else if (inputPlan[i].checked && inputAddOn[0].checked === true && inputAddOn[1].checked === true && inputAddOn[2].checked === false && inputToggle.checked === true) {
            total.innerHTML = '+$' + (10 * (inputPlan[i].value/1 + inputAddOn[0].value/1 + inputAddOn[1].value/1)) + '/yr'
        }

        if (inputPlan[i].checked && inputAddOn[0].checked === true && inputAddOn[1].checked === false && inputAddOn[2].checked === true && inputToggle.checked === false) {
            total.innerHTML = '+$' + ((inputPlan[i].value/1 + inputAddOn[0].value/1 + inputAddOn[2].value/1)) + '/mo'
        } else if (inputPlan[i].checked && inputAddOn[0].checked === true && inputAddOn[1].checked === false && inputAddOn[2].checked === true && inputToggle.checked === true) {
            total.innerHTML = '+$' + (10 * (inputPlan[i].value/1 + inputAddOn[0].value/1 + inputAddOn[2].value/1)) + '/yr'
        }

        if (inputPlan[i].checked && inputAddOn[0].checked === false && inputAddOn[1].checked === true && inputAddOn[2].checked === true && inputToggle.checked === false) {
            total.innerHTML = '+$' + ((inputPlan[i].value/1 + inputAddOn[1].value/1 + inputAddOn[2].value/1)) + '/mo'
        } else if (inputPlan[i].checked && inputAddOn[0].checked === true && inputAddOn[1].checked === false && inputAddOn[2].checked === true && inputToggle.checked === true) {
            total.innerHTML = '+$' + (10 * (inputPlan[i].value/1 + inputAddOn[1].value/1 + inputAddOn[2].value/1)) + '/yr'
        }

        if (inputPlan[i].checked && inputAddOn[0].checked === true && inputAddOn[1].checked === true && inputAddOn[2].checked === true && inputToggle.checked === false) {
            total.innerHTML = '+$' + ((inputPlan[i].value/1 + inputAddOn[1].value/1 + inputAddOn[2].value/1)) + '/mo'
        } else if (inputPlan[i].checked && inputAddOn[0].checked === true && inputAddOn[1].checked === true && inputAddOn[2].checked === true && inputToggle.checked === true) {
            total.innerHTML = '+$' + (10 * (inputPlan[i].value/1 + inputAddOn[1].value/1 + inputAddOn[2].value/1)) + '/yr'
        }

        if (inputPlan[i].checked && inputAddOn[0].checked === false && inputAddOn[1].checked === false && inputAddOn[2].checked === false && inputToggle.checked === false) {
            total.innerHTML = '+$' + (inputPlan[i].value) + '/mo'
        } else if (inputPlan[i].checked && inputAddOn[0].checked === false && inputAddOn[1].checked === false && inputAddOn[2].checked === false && inputToggle.checked === true) {
            total.innerHTML = '+$' + (inputPlan[i].value * 10) + '/yr'
        }
    }
})

const changeBtn = document.querySelector('.button-change')
const thanksPage = document.querySelector('.thanks-page')

changeBtn.addEventListener('click', function() {
    step[1].classList.add('selecionado')
    step[3].classList.remove('selecionado')
})

previous[2].addEventListener('click', function() {
    step[3].classList.remove('selecionado')    
    step[2].classList.add('selecionado')
})

submit[3].addEventListener('click', function() {
    step[3].classList.remove('selecionado')    
    step[4].classList.add('selecionado')
})

