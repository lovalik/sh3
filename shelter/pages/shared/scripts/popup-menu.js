function createPopupMenu( card ) {
    const petData = card;

    // <img class="popup-menu__button-close_image" src="../../assets/images/symbol-for-close-button.png" alt="&#215;">

    const template = `  <div class="popup-menu__content">
                            <button class="popup-menu__button-close" type="button">&#215;
                            
                            </button>
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

    resizeObserver.observe( document.body )

    const content = popup.querySelector( ".popup-menu__content")
    const buttonClose = popup.querySelector( ".popup-menu__button-close");

    document.body.style.overflow = "hidden";

    popup.addEventListener( "click", () => {
        popup.remove();
        document.body.style.overflow = "auto";
    } );

    popup.addEventListener( "mouseover", () => {
        if ( event.target.className === "popup-menu" || event.target.className === "popup-menu__button-close" || event.target.className === "popup-menu__button-close_image") {
            buttonClose.style.backgroundColor = "#FDDCC4";
            buttonClose.style.borderColor = "#FDDCC4";
            buttonClose.style.cursor = "pointer";
            popup.style.cursor = "pointer";
        } else {
            return event.stopPropagation();
        }
    } );

    buttonClose.addEventListener( "click", () => {
        popup.remove();
        document.body.style.overflow = "auto";
    } );

    content.addEventListener( "mouseover", () => {
        content.style.cursor = "default";
        buttonClose.style.borderColor = "F1CDB3";
        buttonClose.style.backgroundColor = "transparent";
    } );

    content.addEventListener( "click", () => {
        event.stopPropagation()
    } );
}

export default createPopupMenu;