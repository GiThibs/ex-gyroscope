const $sections = document.querySelectorAll('.section')

let switcherf = false
let anglef = 40

let switcherb = false
let angleb = 130

let activeSection = 0


let z = null
let y = null
let x = null



const handleOrientation = (e => {
    z = e.alpha;
    x = e.beta;
    y = e.gamma;
    
   if(x > anglef && !switcherf) {
    switcherf = true
    document.querySelector('.active').classList.remove('active')
    activeSection = (activeSection == $sections.length - 1 ) ? 0 : activeSection + 1
    $sections[activeSection].classList.add('active')
   } else if(x > -anglef && x < anglef)  {
    switcherf = false
   }
   if(x > angleb && !switcherb) {
    switcherb = true
    document.querySelector('.active').classList.remove('active')
    activeSection = (activeSection == 0 ) ? $sections.length - 1 : activeSection - 1
    $sections[activeSection].classList.add('active')
   } else if(x > -angleb && x < angleb)  {
    switcherb = false
   }


/* if(x > 120 & $section1.classList.contains('active')) {
    $section1.classList.remove('active')
    $section2.classList.add('active')
} else if (x > 120 & $section2.classList.contains('active')) {
    $section2.classList.remove('active')
    $section3.classList.add('active')
} else if (x > 120 & $section3.classList.contains('active')) {
    $section3.classList.remove('active')
    $section1.classList.add('active')
}

if(x < 60 & $section1.classList.contains('active')) {
    $section1.classList.remove('active')
    $section3.classList.add('active')
} else if (x < 60 & $section2.classList.contains('active')) {
    $section2.classList.remove('active')
    $section1.classList.add('active')
} else if (x < 60 & $section3.classList.contains('active')) {
    $section3.classList.remove('active')
    $section2.classList.add('active')
} */
})

window.addEventListener("deviceorientation", handleOrientation, true);