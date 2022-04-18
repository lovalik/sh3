function createBurgerMenu( header ) {

    let isButtonMainPageWasPressed = false;
    let isButtonCurrentPageWasPressed = false;
    let isButtonHelpShelterWasPressed = false;
    let isButtonContactsWasPressed = false;

    const resizeHeader = new ResizeObserver( ( entries ) => {
        for( let entry of entries ){
            if( entry.contentBoxSize ){
                hideBurgerMenuWhenResizeViewport( entry.contentBoxSize[0].inlineSize );
            }
        }
    } );

    const burgerMenuPopup = header.querySelector( ".burger-menu__popup" );
    const burgerMenuWrapper = header.querySelector( ".burger-menu_wrapper" );
    const burgerMenu = header.querySelector( ".burger-menu" );
    const burgerMenuHorizontalLine = header.querySelector( ".burger-menu__middle-line" );

    const burgerMenuPopupMenu = document.createElement( "div" );
    burgerMenuPopup.prepend( burgerMenuPopupMenu );
    burgerMenuPopupMenu.className = "burger-menu__popup-menu";

    burgerMenuPopupMenu.innerHTML = `<a class="burger-menu__popup-menu_logo" href="../main/index.html">
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

    const burgerMenuPopupNavText = header.querySelectorAll( ".burger-menu__popup-menu_nav_text" );
    const burgerMenuPopupLogo = header.querySelector(".burger-menu__logo")
    const burgerMenuPopupLogoSubtitle = header.querySelector(".burger-menu__logo-subtitle");
    const linkContacts = header.querySelector(".burger-menu__popup-menu_link-contacts");
    const linkHelpShelter = header.querySelector(".burger-menu__popup-menu_link-help-the-shelter");
    const linkCurrentPage = header.querySelector(".burger-menu__popup-menu_link-our-pets");
    const linkMainPage = header.querySelector(".burger-menu__popup-menu_link-about-shelter");

    function hideBurgerMenuWhenResizeViewport( width ) {
        if ( width >= 768 ) {

            burgerMenuPopup.style.display = "none";
            burgerMenu.classList.remove( "animation__burger-menu-rotation_open" );
            burgerMenu.classList.remove( "animation__burger-menu-rotation_closed" );
            burgerMenu.style.borderColor = "#000000";
            burgerMenuHorizontalLine.style.borderColor = "#000000";
            burgerMenuHorizontalLine.style.backgroundColor = "#000000";
        }
    }

    resizeHeader.observe( header );
    
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
            burgerMenu.style.borderColor = "#000000";
            burgerMenuHorizontalLine.style.borderColor = "#000000";
            burgerMenuHorizontalLine.style.backgroundColor = "#000000";
            burgerMenuPopup.style.display = "none";
        }

        if( isButtonMainPageWasPressed === true ) {
            document.location.href = "/pages/main/index.html";
            isButtonMainPageWasPressed = false;
        }

        if( isButtonCurrentPageWasPressed === true ) {
            document.body.scrollIntoView( { block: "start", behavior: "smooth" } );
            isButtonCurrentPageWasPressed = false;
        }

        if( isButtonHelpShelterWasPressed === true ) {
            document.location.href = "/pages/main/index.html#help";
            isButtonHelpShelterWasPressed = false;
        }

        if( isButtonContactsWasPressed === true ) {
            document.querySelector(".footer__content").scrollIntoView( { block: "start", behavior: "smooth" } );
            isButtonContactsWasPressed = false;
        }
    } );

    linkMainPage.addEventListener( "click", () => {
        isButtonMainPageWasPressed = true;
        hideBurgerPopup();
    } )

    linkCurrentPage.addEventListener( "click",  () => {
        isButtonCurrentPageWasPressed = true;
        hideBurgerPopup();
    } )

    linkHelpShelter.addEventListener( "click",  () => {
        isButtonHelpShelterWasPressed = true;
        hideBurgerPopup();
    } )

    linkContacts.addEventListener( "click",  () => {
        isButtonContactsWasPressed = true;
        hideBurgerPopup();
    } )
}

export default createBurgerMenu;
