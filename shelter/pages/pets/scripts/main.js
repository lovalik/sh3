import createSlider from "./slider.js";
import createBurgerMenu from "./burger-menu.js";
import createNavMenu from "./nav-menu.js";

function createPageOurPets() {

    const page = document.body;
    const header = page.querySelector( "header" );
    const sectionOurPets = page.querySelector( ".our-pets" );
    const footer = page.querySelector( "footer" );

    createBurgerMenu( header );
    createNavMenu( { header, sectionOurPets, footer } );
    createSlider( sectionOurPets );
}
export default createPageOurPets;