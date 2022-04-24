import createSectionOurPets from "./section-our-pets.js";
import createBurgerMenu from "./burger-menu.js";
import createNavMenu from "./nav-menu.js";

function createMainPage() {

    const mainPage = document.body;
    const sectionStartScreen = mainPage.querySelector( ".start-screen" );
    const sectionAbout = mainPage.querySelector( "#about" );
    const sectionOurPets = mainPage.querySelector( "#pets" );
    const sectionHelp = mainPage.querySelector( "#help" );
    const footer = mainPage.querySelector( "footer" );
    
    createSectionOurPets( sectionOurPets );
    createBurgerMenu( sectionStartScreen );
    createNavMenu( { sectionStartScreen, sectionHelp, sectionAbout, footer } );
}

export default createMainPage;