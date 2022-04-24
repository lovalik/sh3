function createPopupMenu( card ) {
    const petData = card;

    const template = `  <div class="popup-menu__content">
                            <button class="popup-menu__button-close" type="button">&#215;</button>
                            <img class="popup-menu__image" src=${ petData.img } alt=${ petData.name }>
                            <div class="popup-menu__content_text">
                                <h3 class="popup-menu__content_text-pet-name">${ petData.name }</h3>
                                <h4 class="popup-menu__content_text-type-breed">${ petData.type } - ${ petData.breed }</h4>
                                <h5 class="popup-menu__content_text-description">${ petData.description }</h5>
                                <nav class="popup-menu__nav">
                                    <ul>
                                        <li><b>Age:</b> ${ petData.age }</li>
                                        <li><b>Inoculations:</b> ${ petData.inoculations }</li>
                                        <li><b>Diseases:</b> ${ petData.diseases }</li>
                                        <li><b>Parasites:</b> ${ petData.parasites }</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>`

    const popup = document.createElement( 'div' );
    popup.className = "popup-menu";
    document.body.prepend( popup ); 
    popup.innerHTML = template;

    const resizeObserver = new ResizeObserver( ( entries ) => {
        for( let entry of entries ){
            if( entry.contentBoxSize ){
                setTop();

                let popup = document.querySelector(".popup-menu")
                
                if( Boolean( popup ) == true ){
                    console.log("popup существует на странице__скролл заблокирован")
                    document.body.style.overflow = "hidden";
                } else if( Boolean( popup ) != true ) {
                    console.log("popup удален__скролл разблокирован")
                    document.body.style.overflow = "auto";
                }
            }
        }
    } );

    resizeObserver.observe( document.body );

    // Если Top не переназначать через ресайзер,
    // то при ZOOME начинается сползание
    // области затенения и появляется полоса сверху
    function setTop(){
        popup.style.top = `${window.pageYOffset}px`;
    }

    const content = popup.querySelector( ".popup-menu__content")
    const buttonClose = popup.querySelector( ".popup-menu__button-close");

    console.log("popup-menu.js ____блокируем скролл")
    document.body.style.overflow = "hidden";

    popup.addEventListener( "click", removePopupFromPage );
    popup.addEventListener( "mouseover", highlightButtonClose );
    buttonClose.addEventListener( "click", removePopupFromPage );
    content.addEventListener( "mouseover", unhighlightButtonClose );
    content.addEventListener( "click", stopPropagation );
    
    function highlightButtonClose(){
        if ( event.target.className === "popup-menu" || event.target.className === "popup-menu__button-close" || event.target.className === "popup-menu__button-close_image") {
            buttonClose.style.backgroundColor = "#FDDCC4";
            buttonClose.style.borderColor = "#FDDCC4";
            buttonClose.style.cursor = "pointer";
            popup.style.cursor = "pointer";
        } else {
            return event.stopPropagation();
        }
    }

    function removePopupFromPage(){
        popup.removeEventListener( "mouseover", highlightButtonClose );        
        popup.removeEventListener( "click", removePopupFromPage );
        buttonClose.removeEventListener( "click", removePopupFromPage );
        content.removeEventListener( "mouseover", unhighlightButtonClose );
        content.removeEventListener( "click", stopPropagation );
        popup.remove();
        console.log("popup-menu.js ____разблокируем скролл")
        document.body.style.overflow = "auto";
    }

    function unhighlightButtonClose(){
        content.style.cursor = "default";
        buttonClose.style.borderColor = "F1CDB3";
        buttonClose.style.backgroundColor = "transparent";
    }

    function stopPropagation(){
        event.stopPropagation();
    }
}

export default createPopupMenu;