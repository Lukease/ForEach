// const numbers = [1, 3, 5, 8, 10]
//
//
// const consoleLogNumbers = () => {
//     numbers.forEach(number =>
//         setTimeout(() => {
//             console.log(number)
//         }, number * 1000
//         )
//     )
// }
//
// consoleLogNumbers()
//
// const numbersSecond = [32, 16, 8, 4, 2, 1]
//
// let circle = document.querySelector('.ring')
// const consoleLogRing = () => {
//     numbersSecond.forEach(number => {
//
//         const allCircle = document.querySelectorAll('div')
//         const lastCircle = allCircle[allCircle.length-1]
//
//         if (circle.hasChildNodes()) {
//
//             const newCircle = document.createElement('div')
//             newCircle.classList.add('ring')
//             lastCircle.appendChild(newCircle)
//             newCircle.style.width = number + 'px'
//             newCircle.style.height = number + 'px'
//             newCircle.style.borderStyle = 'solid'
//
//         } else if (!circle.hasChildNodes()) {
//             const newCircle = document.createElement('div')
//             newCircle.classList.add('ring')
//             circle.appendChild(newCircle)
//             newCircle.style.width = number + 'px'
//             newCircle.style.height = number + 'px'
//             newCircle.style.borderStyle = 'solid'
//         }
//     })
// }
//
// consoleLogRing()


//#3
// const allNames= [{name:'Jacek'},{name:'Kamil'},{name:'Robert'},{name:'Piotr'},{name:'Krzysztof'}]
//
// allNames.forEach(number =>{
//     const names =document.querySelector('.names')
//     const oneName = document.createElement('h2')
//     const nameText = number.name.toString()
//     oneName.textContent= nameText
//     names.appendChild(oneName)
//     }
// )


//#4

//
// const callback = () => console.log('triggered!')
// const timeoutIds = [
//     setTimeout(callback,1000),
//     setTimeout(callback,2000),
//     setTimeout(callback,3000),
//     setTimeout(callback,4000),
//     setTimeout(callback,5000)
// ]
//
// timeoutIds.forEach(number =>{
//     window.clearTimeout(number)
// })

//#5
const links = [
    {label:'Home', url:'/',color:'#oooooo'},
    {label:'Shop', url:'https://google.pl/?q=shop',color:'#oooooo'},
    {label:'Dashboard', url:'https://google.pl/?q=dashboard',color:'#oooooo'},
    {label:'Settings', url:'https://google.pl/?q=settings',color:'#oooooo'},
    {label:'Sign out', url:'https://google.pl/?q=sign%20out',color:'#e84118'},
]


links.forEach(number =>{

    const menu = document.querySelector('.menu')
    const title = number.label
    const address = number.url
    const color = number.color

    const newBox = document.createElement('div')
    menu.appendChild(newBox)
    newBox.innerHTML=title
    newBox.style.color=color
    newBox.setAttribute('href', address)
})