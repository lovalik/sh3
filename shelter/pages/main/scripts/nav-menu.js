function createNavMenu( {
                    sectionStartScreen,
                    sectionHelp,
                    sectionAbout,
                    footer
                } ){

    const linkLogo = sectionStartScreen.querySelector(".logo");
    const linkAboutShelter = sectionStartScreen.querySelector(".link-about-the-shelter");
    const linkPageOurPets = sectionStartScreen.querySelector(".link-our-pets");
    const linkHelp = sectionStartScreen.querySelector(".link-help-the-shelter");
    const linkContacts = sectionStartScreen.querySelector(".link-contacts");

    linkLogo.addEventListener( "click", () => {
        sectionStartScreen.scrollIntoView( { block: "start", behavior: "smooth" } );
    } );
    
    linkAboutShelter.addEventListener( "click", () => {
        sectionAbout.scrollIntoView( { block: "start", behavior: "smooth" } );
    } );

    linkPageOurPets.addEventListener( "click", () => {
        document.location.href = "../pets/index.html"
    } );

    linkHelp.addEventListener( "click", () => {
        sectionHelp.scrollIntoView( { block: "start", behavior: "smooth" } );
    } );

    linkContacts.addEventListener( "click", () => {
        footer.scrollIntoView( { block: "start", behavior: "smooth" } );
    } );
}
export default createNavMenu;