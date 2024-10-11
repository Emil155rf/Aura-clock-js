const time1 = document.querySelector('.clock')
const time2 = document.querySelector('.clock2')
const select = document.querySelector('.select')
const selector = document.querySelector('.dateBtn')
const sea = document.querySelector('.sea')
const night = document.querySelector('.night')
const aura = document.querySelector('.aura')
let currentTime = document.querySelector('.btn-1')



function updateTime() {
    const now = new Date()
    const hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')
    const seconds = now.getSeconds().toString().padStart(2, '0')
    const timeString = `${hours}:${minutes}:${seconds}`
    time1.innerText = timeString
}

updateTime()
setInterval(updateTime, 1000)




function amTime() {
    let date = new Date()
    let hours2 = date.getHours().toString().padStart(2, '0') % 12 || 12
    let minutes2 = date.getMinutes().toString().padStart(2, '0')
    let seconds2 = date.getSeconds().toString().padStart(2, '0')
    let ampm = date.getHours() >= 12 ? 'PM' : 'AM'
    let timeString2 = `${hours2}:${minutes2}:${seconds2} ${ampm}`
    time2.innerText = timeString2

}

amTime()
setInterval(amTime, 1000)



currentTime.addEventListener('click', () => {
    if (currentTime.innerHTML === '12h') {
        time1.style.display = 'none'
        time2.style.display = 'block'
        currentTime.innerHTML = '24h'
    } else {
        time1.style.display = 'block'
        time2.style.display = 'none'
        currentTime.innerHTML = '12h'
    }


})


window.addEventListener('load', function () {
    document.body.classList.add('loaded')
})


const button = document.querySelector('.bi-border-all')

button.addEventListener('click', () => {
    if (document.fullscreenElement) {
        document.exitFullscreen()
        select.style.display = 'block'
        currentTime.style.display = 'block'
    } else {
        document.documentElement.requestFullscreen()
        select.style.display = 'none'
        currentTime.style.display = 'none'

    }
})


let urlSea = "url(../images/yevhenii-aihubov--Ol1vAQMXmw-unsplash.jpg)"
let urlNight = "url(../images/jeshoots-com-DpLibjAV2R8-unsplash.jpg)"
let urlAura = "url(../images/aura.jpg)"
const body = document.body


function changeTheme(val1, val2, val3) {
    val1.addEventListener('click', () => {
        val2.style.backgroundImage = val3
    })


}

changeTheme(sea, body, urlSea)
changeTheme(night, body, urlNight)
changeTheme(aura, body, urlAura)

selector.addEventListener('change', () => {
    const selectedOption = selector.value
    if (selectedOption === '1') {
        body.style.backgroundImage = 'url(../images/aura.jpg)'
        body.style.fontFamily = 'Mattone'
    } else if (selectedOption === '2') {
        body.style.backgroundImage = 'url(../images/yevhenii-aihubov--Ol1vAQMXmw-unsplash.jpg)'
        body.style.fontFamily = 'Harmond'

    } else if (selectedOption === '3') {
        body.style.backgroundImage = 'url(../images/jeshoots-com-DpLibjAV2R8-unsplash.jpg)'
        body.style.fontFamily = 'dubai'
    } else if (selectedOption === '4') {
        body.style.backgroundImage = 'url(../images/nick-night-Zxn1x3Y7oPs-unsplash.jpg)'
        body.style.fontFamily = 'Porsche'
    }
})


