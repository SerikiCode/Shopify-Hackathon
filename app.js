// Your javascript goes here
const notificationBell = document.querySelector('.notification-bell-button');
notificationDropdown = document.querySelector('.notification-dropdown');
const storeProfile = document.querySelector('.store-profile');
const dropDownMenu = document.querySelector('.dropdown-menu')
const dismissIcon = document.querySelector('.dismiss-Icon')
const trialCalloutBar = document.querySelector('.trial-callout-bar')
const arrowUp = document.querySelector('.arrow-up');
const arrowFrame = document.querySelector('.arrow-icon-frame')
const arrowDown = document.querySelector('.arrow-down');
const checkboxContainer = document.querySelectorAll('.checkbox-container')
const checkboxLabel = document.querySelectorAll('.checkbox-title')
const checkboxContainers = [...checkboxContainer]
const checkboxIconDash = document.querySelectorAll('.icon-dash');
const checkboxIconIncomplete = document.querySelectorAll('.icon-incomplete')
const checkboxIconComplete = document.querySelectorAll('.icon-complete')
var progressBar = document.querySelector('.progress')
const progressCount = document.querySelector('.progress-count')
const checkboxTitleDescription = document.querySelectorAll('.checkbox-title-description');

const onboardingButton = document.querySelectorAll('.onboarding-button');

const checkboxImage = document.querySelectorAll('.checkbox-image-container');
const checkboxImages = [...checkboxImage]
const lineBreak = document.querySelectorAll('br')
const lineBreaks = [...lineBreak]





storeProfile.addEventListener('click', function(){
    dropDownMenu.classList.toggle('dropdown-menu-display')
})

dismissIcon.addEventListener('click', function () {
    trialCalloutBar.style.visibility = 'hidden'
    
})

notificationBell.addEventListener('click', function(){
    notificationDropdown.classList.toggle('display-notification-dropdown')
})

arrowFrame.addEventListener('click', function(){
  if(arrowUp.style.display != 'none'){
    arrowUp.style.display = 'none'
    arrowDown.style.display = 'block'
    checkboxContainers.map(checkboxContainer => {
        checkboxContainer.style.display = 'none'
    })
   } else{
        arrowDown.style.display = 'none'
        arrowUp.style.display = 'block'
        checkboxContainers.map(checkboxContainer => {
        checkboxContainer.style.display = 'flex'
    })
   }
})

for(let i = 0; i < checkboxLabel.length; i++){
    
    checkboxLabel[i].addEventListener('click', function(){
            

            checkboxImage[i].style.display = 'block';
            checkboxTitleDescription[i]. style.display = 'unset'
            checkboxContainer[i].style.background = '#F3F3F3'
            checkboxContainer[i].style.cursor = 'default'
            onboardingButton[i].style.display = 'flex'
            checkboxLabel[i].style.fontWeight = '600'
            
            for(let j = 0; j < index.length; j++){
                if(checkboxImage[j].style.display != 'none' && checkboxImage[j] != checkboxImage[i]){
                    checkboxImage[j].style.display = 'none';
                    checkboxTitleDescription[j]. style.display = 'none'
                    checkboxContainer[j].style.background = 'none'
                    checkboxContainer[j].style.cursor = 'pointer'
                    onboardingButton[j].style.display = 'none'
                    checkboxLabel[j].style.fontWeight = '500'
                    
                    
                }
            }    
    })
}





var index = [0, 1, 2, 3, 4]
var count = 0;
var progressBarWidth = 0;
for(let i = 0; i < checkboxIconDash.length; i++){
    
    checkboxIconDash[i].addEventListener('click', function(){
        checkboxIconDash[i].classList.add('hidden');
        checkboxIconIncomplete[i].classList.remove('hidden');
        
        if(window.outerWidth <= 550){
            checkboxImages.map(checkboxImage => {
                checkboxImage.remove()
            })
        }
        setTimeout (() => {
            checkboxIconIncomplete[i].classList.add('hidden');
            checkboxIconComplete[i].classList.remove('hidden')
            
            checkboxImage[i].style.display = 'block';
            checkboxTitleDescription[i]. style.display = 'unset'
            checkboxContainer[i].style.background = '#F3F3F3'
            checkboxContainer[i].style.cursor = 'default'
            onboardingButton[i].style.display = 'flex'
            checkboxLabel[i].style.fontWeight = '600'
            
            for(let j = 0; j < index.length; j++){
                if(checkboxImage[j].style.display != 'none' && checkboxImage[j] != checkboxImage[i]){
                    checkboxImage[j].style.display = 'none';
                    checkboxTitleDescription[j]. style.display = 'none'
                    checkboxContainer[j].style.background = 'none'
                    checkboxContainer[j].style.cursor = 'pointer'
                    onboardingButton[j].style.display = 'none'
                    checkboxLabel[j].style.fontWeight = '500'
                    
                    
                }
            }    
            
            count++
            progressCount.innerHTML = count
            
            progressBarWidth +=14.4
            progressBar.style.width = progressBarWidth            
        }, 1000)

    })
}


for(let i = 0; i < checkboxIconComplete.length; i++){
    
    checkboxIconComplete[i].addEventListener('click', function(){
        checkboxIconComplete[i].classList.add('hidden');
        checkboxIconIncomplete[i].classList.remove('hidden');

        setTimeout (() => {
            checkboxIconIncomplete[i].classList.add('hidden');
            checkboxIconDash[i].classList.remove('hidden')

            count--
            progressCount.innerHTML = count
            
            progressBarWidth -=14.4
            progressBar.style.width = progressBarWidth            
        }, 1000)

        
    })
}


window.addEventListener('load', function(){
    if(window.outerWidth <= 550){
        lineBreaks.map(lineBreak => {
            lineBreak.remove()
        })

        checkboxImages.map(checkboxImage => {
            checkboxImage.remove()
        })
    }
})

