const numbers = [1, 3, 5, 8, 10]

const consoleLogNumbers = () => {
    numbers.forEach(number =>
        setTimeout(() => {
            console.log(number)
        }, number * 1000
        )
    )
}

consoleLogNumbers()

const numbersSecond = [32, 16, 8, 4, 2, 1]
let circle = document.querySelector('.ring')
const consoleLogRing = () => {
    numbersSecond.forEach(number => {

        const allCircle = document.querySelectorAll('div')
        const lastCircle = allCircle[allCircle.length - 1]

        const newCircle = document.createElement('div')
        newCircle.classList.add('ring')
        lastCircle.appendChild(newCircle)
        newCircle.style.width = `${number}px`
        newCircle.style.height = `${number}px`
        newCircle.style.borderStyle = 'solid'
    })
}

consoleLogRing()

//#3
const allNames = [{name: 'Jacek'}, {name: 'Kamil'}, {name: 'Robert'}, {name: 'Piotr'}, {name: 'Krzysztof'}]

allNames.forEach(object => {
        const names = document.querySelector('.names')
        const oneName = document.createElement('h2')
        oneName.textContent = object.name
        names.appendChild(oneName)
    }
)
//#4
const callback = () => console.log('triggered!')
const timeoutIds = [
    setTimeout(callback, 1000),
    setTimeout(callback, 2000),
    setTimeout(callback, 3000),
    setTimeout(callback, 4000),
    setTimeout(callback, 5000)
]

timeoutIds.forEach(timeout => {
    window.clearTimeout(timeout)
})

//#5
const links = [
    {label: 'Home', url: '/', color: '#oooooo'},
    {label: 'Shop', url: 'https://google.pl/?q=shop', color: '#oooooo'},
    {label: 'Dashboard', url: 'https://google.pl/?q=dashboard', color: '#oooooo'},
    {label: 'Settings', url: 'https://google.pl/?q=settings', color: '#oooooo'},
    {label: 'Sign out', url: 'https://google.pl/?q=sign%20out', color: '#e84118'},
]


links.forEach(link => {

    const menu = document.querySelector('.menu')
    const title = link.label
    const address = link.url
    const color = link.color

    const newBox = document.createElement('a')
    newBox.classList.add('link')
    menu.appendChild(newBox)
    newBox.innerHTML = title
    newBox.style.color = color
    newBox.setAttribute('href', address)
})

//#6

const number = [112, 265, 999, 451, 22, 76, 1996, 100, 2, 55]

const newNumber = number.map(x => {
    if (x % 2 === 0) {
        return 0
    }
    return x % 2
})
console.log(newNumber)

//#7
const name = ['Wojtek Szczęsny',
    'Robert Lewandowski',
    'Kamil Glik',
    'Jan Bednarek',
    'Krzysztof Piątek',
    'Sławomir Peszko',
    'Jakub Błaszczykowski',
    'Mateusz Klich',
    'Piotr Zieliński',
    'Matty Cash']
const newNames = name.map(x => {
    const [firstName] = x.split(' ')
    return console.log(firstName)
})

//#8
const nameAndSurrname = ['Wojtek Szczęsny',
    'Robert Lewandowski',
    'Kamil Glik',
    'Jan Bednarek',
    'Krzysztof Piątek',
    'Sławomir Peszko',
    'Jakub Błaszczykowski',
    'Mateusz Klich',
    'Piotr Zieliński',
    'Matty Cash']

const newLastNames = nameAndSurrname.map(x => {
    const [, lastName] = x.split(' ')
    return console.log(lastName)
})

//#9
const city = ['Rzeszów',
    'Przemyśl',
    'Dubiecko',
    'Jarosław',
    'Dynów',
    'Warszawa',
    'Radom',
    'Kraków',
    'Wrocław',
    'Katowice']
const allCity = city.map(x => {
    return x.split('')
})
console.log(allCity)

//#10
const main = [[12],
    [123, 192, 7],
    [671, 2893, 23, 126],
    [126, 32467, 34567, 234],
    [12, 93, 127, 2346, 15551],
    [218, 12367, 2342, 547, 976, 4, 2234, 45],
    [127, 43, 12, 235, 345, 12, 64, 57, 32823, 32732],
    [1287, 3, 263],
    [1287, 2387, 2378, 27, 2654, 8, 282, 329843, 2723],
    [1289, 3843, 723, 23743, 8743, 327, 327, 472, 3254, 856, 845,]
]
const lenghtOfArray = main.map(x => {
    return x.length
})
console.log(lenghtOfArray)

//#11

const arrayBolean = [
    true,
    false,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
]
const reverseAll = arrayBolean.map(x => !x)
console.log(reverseAll)

//#12

const arrayOf = [
    null,
    undefined,
    null,
    null,
    undefined,
    undefined,
    null,
    undefined,
    null,
    undefined,
]

const newArrayOf = arrayOf.map(x => {
    if (x === null) {
        return 'null'
    }
    return 'nothing'

})
console.log(newArrayOf)

//#13

const arraySpeed = [
    {s: 300, t: 15},
    {s: 30, t: 15},
    {s: 60, t: 15},
    {s: 90, t: 15},
    {s: 300, t: 15},
    {s: 105, t: 15},
    {s: 120, t: 15},
    {s: 135, t: 15},
    {s: 150, t: 15},
    {s: 165, t: 15},
]

const arrayResult = arraySpeed.map(x => {
        return x.s / x.t
    }
)
console.log(arrayResult)

//#14
const allCompanyInfo = [
    {company: 'Tesla', value: {lastYear: '100B', thisYear: '122B'}},
    {company: 'Tesla', value: {lastYear: '105B', thisYear: '120B'}},
    {company: 'Tesla', value: {lastYear: '10B', thisYear: '155B'}},
    {company: 'Tesla', value: {lastYear: '112B', thisYear: '190B'}},
    {company: 'Tesla', value: {lastYear: '90B', thisYear: '200B'}},
    {company: 'Tesla', value: {lastYear: '50B', thisYear: '221B'}},
    {company: 'Tesla', value: {lastYear: '30B', thisYear: '167B'}},
    {company: 'Tesla', value: {lastYear: '150B', thisYear: '144B'}},
    {company: 'Tesla', value: {lastYear: '170B', thisYear: '132B'}},
    {company: 'Tesla', value: {lastYear: '40B', thisYear: '130B'}},
]

const companyValueLastYear = allCompanyInfo.map(object => {
    return  parseInt(object.value.lastYear)

})
console.log(companyValueLastYear)

//#15
const newNumbers = [
    [1, 5],
    [8, 3],
    [112, 414],
    [124, 3443],
    [1233, 23525],
    [12313, 24],
    [234, 345345],
    [124124, 3443],
    [12313, 23234],
    [123124, 3463],
]

const valueArray = newNumbers.map(x => {
    if (x[0] > x[1]) {
        return x[0]
    }
        return x[1]
})
console.log(valueArray)