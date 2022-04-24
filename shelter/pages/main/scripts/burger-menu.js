function createBurgerMenu( parentElement ) {

    let isLogoWasPressed = false;
    let isLinkAboutTheShelterWasPressed = false;
    let isLinkOurPetsWasPressed = false;
    let isLinkHelpTheShelterWasPressed = false;
    let isLinkContactsWasPressed = false;

    const resizeHeader = new ResizeObserver( ( entries ) => {
        for( let entry of entries ){
            if( entry.contentBoxSize ){
                hideBurgerMenuWhenResizeViewport( entry.contentBoxSize[0].inlineSize );
            }
        }
    } );

    const burgerMenuPopup = parentElement.querySelector( ".burger-menu__popup" );
    const burgerMenuWrapper = parentElement.querySelector( ".burger-menu_wrapper" );
    const burgerMenu = parentElement.querySelector( ".burger-menu" );
    const burgerMenuHorizontalLine = parentElement.querySelector( ".burger-menu__middle-line" );

    const burgerMenuPopupMenu = document.createElement( "div" );
    burgerMenuPopup.prepend( burgerMenuPopupMenu );
    burgerMenuPopupMenu.className = "burger-menu__popup-menu";

    burgerMenuPopupMenu.innerHTML = `<a class="burger-menu__popup-menu_logo" href="##">
                                        <h1 class="burger-menu__logo">Cozy House</h1>
                                        <p class="burger-menu__logo-subtitle">
                                            Shelter for pets in Boston
                                        </p>
                                    </a>
                                    <nav class="burger-menu__popup-menu_nav">
                                        <a class="burger-menu__popup-menu_link-about-shelter" href="##">
                                            <p class="burger-menu__popup-menu_nav_text">About the shelter</p>
                                        </a>
                                        <a class="burger-menu__popup-menu_link-our-pets" href='##'>
                                            <p class="burger-menu__popup-menu_nav_text">Our pets</p>
                                        </a>
                                        <a class="burger-menu__popup-menu_link-help-the-shelter" href="##">
                                            <p class="burger-menu__popup-menu_nav_text">Help the shelter</p>
                                        </a>
                                        <a class="burger-menu__popup-menu_link-contacts" href="##">
                                            <p class="burger-menu__popup-menu_nav_text">Contacts</p>
                                        </a>
                                    </nav>`

    const burgerMenuPopupNavText = parentElement.querySelectorAll( ".burger-menu__popup-menu_nav_text" );
    const linkLogo = parentElement.querySelector(".burger-menu__popup-menu_logo");
    const burgerMenuPopupLogo = parentElement.querySelector(".burger-menu__logo");
    const burgerMenuPopupLogoSubtitle = parentElement.querySelector(".burger-menu__logo-subtitle");
    const linkContacts = parentElement.querySelector(".burger-menu__popup-menu_link-contacts");
    const linkHelpShelter = parentElement.querySelector(".burger-menu__popup-menu_link-help-the-shelter");
    const linkOurPets = parentElement.querySelector(".burger-menu__popup-menu_link-our-pets");
    const linkAboutTheShelter = parentElement.querySelector(".burger-menu__popup-menu_link-about-shelter");

    function hideBurgerMenuWhenResizeViewport( width ) {
        if ( width >= 768 ) {
            document.body.style.overflow = "auto";
            burgerMenuPopup.style.display = "none";
            burgerMenu.classList.remove( "animation__burger-menu-rotation_open" );
            burgerMenu.classList.remove( "animation__burger-menu-rotation_closed" );
            burgerMenu.style.borderColor = "#F1CDB3";
            burgerMenuHorizontalLine.style.borderColor = "#F1CDB3";
            burgerMenuHorizontalLine.style.backgroundColor = "#F1CDB3";
        }
    }

    resizeHeader.observe( parentElement );
    
    burgerMenuPopup.addEventListener( "mouseover", () => {
        burgerMenuPopup.style.cursor = "pointer";
        burgerMenuPopupMenu.style.cursor = "default";
    } );

    burgerMenuPopup.addEventListener( "click", () => {
        hideBurgerPopup( true );
    } );

    burgerMenuPopupMenu.addEventListener( "click", () => {
        return event.stopPropagation();
    } );

    burgerMenuWrapper.addEventListener( "click", () => {

        if ( burgerMenuPopup.style.display === "none" || Boolean(burgerMenuPopup.style.display) === false ) {
            
            document.body.style.overflow = "hidden";
            
            burgerMenuPopup.style.display = "block";
            burgerMenu.classList.remove( "animation__burger-menu-rotation_closed" );
            burgerMenu.classList.add( "animation__burger-menu-rotation_open" );
            burgerMenuPopup.classList.remove( "animation__burger-menu_popup-menu_shadow-area_closed" );
            burgerMenuPopup.classList.add( "animation__burger-menu_popup-menu_shadow-area_open" );
            burgerMenuPopupMenu.classList.remove( "animation__burger-menu_popup-menu_closed" )
            burgerMenuPopupMenu.classList.add( "animation__burger-menu_popup-menu_open" )
            burgerMenuPopupLogo.classList.remove("animation__burger-menu__logo_hide");
            burgerMenuPopupLogo.classList.add("animation__burger-menu__logo_unhide");
            burgerMenuPopupLogoSubtitle.classList.remove("animation__burger-menu__logo-subtitle_hide");
            burgerMenuPopupLogoSubtitle.classList.add("animation__burger-menu__logo-subtitle_unhide");

            for( let item of  burgerMenuPopupNavText ) {
                item.classList.remove( "animation__burger-menu__popup-menu_nav_hide-text")
                item.classList.add( "animation__burger-menu__popup-menu_nav_unhide-text")
            }

            burgerMenu.style.borderColor = "#F1CDB3";
            burgerMenuHorizontalLine.style.borderColor = "#F1CDB3";
            burgerMenuHorizontalLine.style.backgroundColor = "#F1CDB3";

        } else if ( burgerMenuPopup.style.display !== "none" || Boolean(burgerMenuPopup.style.display) !== false ) {
            hideBurgerPopup();
        }
    });

    function hideBurgerPopup() {

        document.body.style.overflow = "auto";

        burgerMenu.classList.remove( "animation__burger-menu-rotation_open" );
        burgerMenu.classList.add( "animation__burger-menu-rotation_closed" );
        burgerMenuPopup.classList.remove( "animation__burger-menu_popup-menu_shadow-area_open" );
        burgerMenuPopup.classList.add( "animation__burger-menu_popup-menu_shadow-area_closed" );
        burgerMenuPopupMenu.classList.remove( "animation__burger-menu_popup-menu_open" )
        burgerMenuPopupMenu.classList.add( "animation__burger-menu_popup-menu_closed" )
        burgerMenuPopupLogo.classList.remove("animation__burger-menu__logo_unhide");
        burgerMenuPopupLogo.classList.add("animation__burger-menu__logo_hide");
        burgerMenuPopupLogoSubtitle.classList.remove("animation__burger-menu__logo-subtitle_unhide");
        burgerMenuPopupLogoSubtitle.classList.add("animation__burger-menu__logo-subtitle_hide");

        for( let item of burgerMenuPopupNavText ) {
            item.classList.remove("animation__burger-menu__popup-menu_nav_unhide-text")
            item.classList.add("animation__burger-menu__popup-menu_nav_hide-text")
        }
    }

    burgerMenu.addEventListener( "animationend", () => {
        if ( burgerMenuPopupLogoSubtitle.classList.contains("animation__burger-menu__logo-subtitle_hide") ) {
            burgerMenu.style.borderColor = "#F1CDB3";
            burgerMenuHorizontalLine.style.borderColor = "#F1CDB3";
            burgerMenuHorizontalLine.style.backgroundColor = "#F1CDB3";
            burgerMenuPopup.style.display = "none";
        }

        if( isLogoWasPressed === true ) {
            document.body.scrollIntoView( { block: "start", behavior: "smooth" } );
            isLogoWasPressed = false;
        }

        if( isLinkAboutTheShelterWasPressed === true ) {
            document.querySelector("#about").scrollIntoView( { block: "start", behavior: "smooth" } );
            isLinkAboutTheShelterWasPressed = false;
        }

        if( isLinkOurPetsWasPressed === true ) {
            document.location.href = "../pets/index.html";
            isButtonMainPageWasPressed = false;
        }

        if( isLinkHelpTheShelterWasPressed === true ) {
            document.querySelector("#help").scrollIntoView( { block: "start", behavior: "smooth" } );
            isLinkHelpTheShelterWasPressed = false;
        }

        if( isLinkContactsWasPressed === true ) {
            document.querySelector(".footer__content").scrollIntoView( { block: "start", behavior: "smooth" } );
            isLinkContactsWasPressed = false;
        }
    } );

    linkLogo.addEventListener( "click", () => {
        isLogoWasPressed = true;
        hideBurgerPopup();
    } )

    linkAboutTheShelter.addEventListener( "click",  () => {
        isLinkAboutTheShelterWasPressed = true;
        hideBurgerPopup();
    } )

    linkOurPets.addEventListener( "click", () => {
        isLinkOurPetsWasPressed = true;
        hideBurgerPopup();
    } )

    linkHelpShelter.addEventListener( "click",  () => {
        isLinkHelpTheShelterWasPressed = true;
        hideBurgerPopup();
    } )

    linkContacts.addEventListener( "click",  () => {
        isLinkContactsWasPressed = true;
        hideBurgerPopup();
    } )
}

export default createBurgerMenu;
