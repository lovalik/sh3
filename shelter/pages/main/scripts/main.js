import createSectionOurPets from "./section-our-pets.js";
import createBurgerMenu from "./burger-menu.js";

function createMainPage() {

    const mainPage = document.body;
    const startScreen = mainPage.querySelector( ".start-screen" );

    createSectionOurPets( mainPage );
    createBurgerMenu( startScreen );
}

export default createMainPage;