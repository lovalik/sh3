import createSlider from "./slider.js";
import createBurgerMenu from "./burger-menu.js";

function createPageOurPets() {

    const page = document.body;
    const header = page.querySelector( "header" );
    const sectionOurPets = page.querySelector( ".our-pets" );
    const linkOurPets = page.querySelector( ".link-active" );
    const linkContacts = page.querySelector( ".link-contacts" );

    linkOurPets.addEventListener( "click", () => {
        document.body.scrollIntoView( { block: "start", behavior: "smooth" } );
    })

    linkContacts.addEventListener( "click", () => {
        document.body.scrollIntoView( { block: "end", behavior: "smooth" } );
    })

    createBurgerMenu( header );
    createSlider( sectionOurPets );

}
export default createPageOurPets;