import { $ } from './utils.js'

function hideMainMenu(e) {
    const inside = (e.target.closest('#mainMenu'));
    if( !inside ) { // CLick fuera, ocultar
        $('mainMenu').classList.remove('visible')
        document.removeEventListener('click', hideMainMenu)
     }
}

const mainBut = $('toggle-mainMenu')
if (!!mainBut) {
    mainBut.onclick = (e)=> {
        e.stopPropagation()
        const mainMenu = $('mainMenu')
        if ( !mainMenu.classList.contains('visible') )  { document.addEventListener('click', hideMainMenu) }
        else                                            { document.removeEventListener('click', hideMainMenu) }
        mainMenu.classList.toggle('visible')
    }
}