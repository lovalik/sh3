function createNavMenu( { header, sectionOurPets, footer } ){

    const navMenu = header.querySelector(".header-nav");
    const linkLogo = header.querySelector(".logo-link-to-main-page");
    const linkAbouShelter = navMenu.querySelector(".link-about-the-shelter");
    const linkOurPets = navMenu.querySelector(".link-active");
    const linkHelp = navMenu.querySelector( ".link-help-the-shelter");
    const linkContacts = navMenu.querySelector(".link-contacts");


    linkLogo.addEventListener( "click", () => {
        document.location.href = "../main/index.html";
    } );

    linkAbouShelter.addEventListener( "click", () => {
        document.location.href = "../main/index.html#about";
    } );

    linkOurPets.addEventListener( "click", () => {
        sectionOurPets.scrollIntoView( { block: "start", behavior: "smooth" } );
    })

    linkHelp.addEventListener( "click", () => {
        document.location.href = "../main/index.html#help";
    })

    linkContacts.addEventListener( "click", () => {
        footer.scrollIntoView( { block: "end", behavior: "smooth" } );
    })


}
export default createNavMenu;