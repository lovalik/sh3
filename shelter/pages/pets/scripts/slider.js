import petsDataBase from "./../../shared/scripts/database.js";
import createPopupMenu from "./../../shared/scripts/popup-menu.js";
import formArray from "./array.js";

function createSlider( sectionOurPets ) {

    let page = 0;
    let currentWidth;
    const petsData = petsDataBase;

    const petsCardsContainer = sectionOurPets.querySelector( ".cards-of-pets__wrapper" );
    const buttonDoubleArrowRightSide = sectionOurPets.querySelector( ".paginator-right-double-arrow" );
    const buttonArrowRightSide = sectionOurPets.querySelector( ".paginator-right-arrow" );
    const buttonDoubleArrowLeftSide = sectionOurPets.querySelector( ".paginator-left-double-arrow" );
    const buttonArrowLeftSide = sectionOurPets.querySelector( ".paginator-left-arrow" );
    const buttonWithPageNumber = sectionOurPets.querySelector( ".page-number");


    const resizeObserver = new ResizeObserver( ( entries ) => {
        for( let entry of entries ){
            if( entry.contentBoxSize ){
                currentWidth = Math.round( entry.contentBoxSize[0].inlineSize );
                addCardsToSlider( currentWidth );
                console.log(`slider.js__width-section__${currentWidth}`)
            }
        }
    } );

    buttonWithPageNumber.innerHTML = page + 1;
    buttonWithPageNumber.style.fontFamily = 'Arial';

    const array = formArray();
    const totalNumberCards = array.totalNumberCards();
    const arrayOfSixPages = array.createArrayOf_6_Pages();
    const arrayOfEightPages = array.createArrayOf_8_Pages();
    const arrayOfSixteenPages = array.createArrayOf_16_Pages();
    resizeObserver.observe( sectionOurPets );

    function determineQuantityOfPagesInSlider() {

        let quantityOfPages;

        if ( currentWidth >= 1280 ) {
            quantityOfPages = 6;
        } else if ( currentWidth >= 768 && currentWidth < 1280 ) {
            quantityOfPages = 8;
        } else {
            quantityOfPages = 16;
        }
        return quantityOfPages;
    }

    function addCardsToSlider( width, buttonSliderClick ){
        const allPetsCards = sectionOurPets.querySelectorAll( ".pet-card" );

        if ( width >= 1280 && allPetsCards.length === 0 ) {
            addCardsToDOMPage( arrayOfSixPages, totalNumberCards, 6, 0 );
        } else if ( width >= 1280 && allPetsCards.length !== 8 ){
            for ( let item of allPetsCards ) {
                item.remove();
            }
            page = 0;
            buttonWithPageNumber.innerHTML = page + 1;
            disableButton();
            unHighlightLeftPaginators();
            addCardsToDOMPage( arrayOfSixPages, totalNumberCards, 6, 0  );
        } else if ( width >= 1280 && allPetsCards.length === 8 && buttonSliderClick ) {
            for ( let item of allPetsCards ) {
                item.remove();
            }
            addCardsToDOMPage( arrayOfSixPages, totalNumberCards, 6, page );
        } else if ( width >= 1280 && allPetsCards.length === 8 ){
            return;
        }

        if ( width >= 768 && width < 1280 && allPetsCards.length === 0 ) {
            addCardsToDOMPage( arrayOfEightPages, totalNumberCards, 8, 0  )
        } else if ( width >= 768 && width < 1280 && allPetsCards.length !== 6 ){
            for ( let item of allPetsCards ) {
                item.remove();
            }
            page = 0;
            buttonWithPageNumber.innerHTML = page + 1;
            disableButton();
            unHighlightLeftPaginators();
            addCardsToDOMPage( arrayOfEightPages, totalNumberCards, 8, 0  )
        } else if ( width >= 768 && width < 1280 && allPetsCards.length === 6 && buttonSliderClick ) {
            for ( let item of allPetsCards ) {
                item.remove();
            }
            addCardsToDOMPage( arrayOfEightPages, totalNumberCards, 8, page );
        } else if ( width >= 768 && width < 1280 && allPetsCards.length === 6 ){
            return;
        }
        
        if( width < 768 && allPetsCards.length === 0 ) {
            addCardsToDOMPage( arrayOfSixteenPages, totalNumberCards, 16, 0  )
        } else if ( width < 768 && allPetsCards.length !== 3 ) {
            for ( let item of allPetsCards ) {
                item.remove();
            }
            page = 0;
            disableButton();
            unHighlightLeftPaginators();
            buttonWithPageNumber.innerHTML = page + 1;
            addCardsToDOMPage( arrayOfSixteenPages, totalNumberCards, 16, 0  )
        } else if( width < 768 && allPetsCards.length === 3 && buttonSliderClick  ) {
            for ( let item of allPetsCards ) {
                item.remove();
            }
            addCardsToDOMPage( arrayOfSixteenPages, totalNumberCards, 16, page )
        } else if( width < 768 && allPetsCards.length === 3 ) {
            return;
        }
    }
    
    function addCardsToDOMPage( array, totalCards, quantityOfPages, pageNumber ){

        const quantityOfPets = totalCards / quantityOfPages;
    
        for( let i = 0; i < quantityOfPets; i++ ){
            let card = createPetCard( array[pageNumber][i] );
            petsCardsContainer.append( card );
        }

        function createPetCard( index ) {

            let card = document.createElement('div');
            card.className = "pet-card";
            card.innerHTML = ` <div class="pet-card__image_wrapper">
                                <img src=${petsDataBase[index].img} alt=${petsDataBase[index].name}>
                                </div>
                                <p>${petsDataBase[index].name}</p>
                                <button class="button-secondary" type="button">
                                    <span>Learn more</span>
                                </button>`;
            return card;
        }

        const petsCards = sectionOurPets.querySelectorAll( ".pet-card" );
        hangEventOnButtonLearnMore( petsCards );
    }

    function hangEventOnButtonLearnMore( array ) {

        for( let i = 0; i < array.length; i++ ) {
            array[i].querySelector( ".button-secondary" ).addEventListener( "click", () => {
                let petName = array[i].querySelector( ".button-secondary" ).previousElementSibling.innerHTML;
                showPetCard( petName );
            } )
        }

        function showPetCard( petName ) {
            for ( let i = 0; i < petsData.length; i++ ) {
                if( String( petsData[i].name ) === String(petName) ) {
                    return createPopupMenu( petsData[i] );
                }
            }
        }
    }
    function disableButton(){
        if ( page !== 0) {
            buttonDoubleArrowLeftSide.style.cursor = "pointer";
            buttonArrowLeftSide.style.cursor = "pointer";
        } else {
            buttonDoubleArrowLeftSide.style.cursor = "default";
            buttonArrowLeftSide.style.cursor = "default";
        }
    }

    function highlightLeftPaginators() {
        buttonDoubleArrowLeftSide.style.borderColor = "#F1CDB3";
        buttonArrowLeftSide.style.borderColor = "#F1CDB3";
        buttonDoubleArrowLeftSide.firstElementChild.style.color = "#292929";
        buttonArrowLeftSide.firstElementChild.style.color = "#292929";
    }

    function unHighlightLeftPaginators() {
        buttonDoubleArrowLeftSide.style.borderColor = "#CDCDCD";
        buttonArrowLeftSide.style.borderColor = "#CDCDCD";
        buttonDoubleArrowLeftSide.firstElementChild.style.color = "#CDCDCD";
        buttonArrowLeftSide.firstElementChild.style.color = "#CDCDCD";
    }

    buttonDoubleArrowLeftSide.addEventListener( "mouseover", () => {
        disableButton();
    } )

    buttonArrowLeftSide.addEventListener( "mouseover", () => {
        disableButton();
    } )

    buttonDoubleArrowRightSide.addEventListener( "click", () => {

        const quantityOfPages = determineQuantityOfPagesInSlider();

        if ( page === ( quantityOfPages - 1 ) ) {
            return;
        }

        page = quantityOfPages - 1;
        buttonWithPageNumber.innerHTML = page + 1;
        buttonDoubleArrowLeftSide.disabled = false;
        buttonArrowLeftSide.disabled = false;

        highlightLeftPaginators();

        return addCardsToSlider( currentWidth, true );
    } );

    buttonDoubleArrowLeftSide.addEventListener( "click", () => {

        if ( page === 0 ) {
            return;
        }

        page = 0;
        unHighlightLeftPaginators();
        buttonWithPageNumber.innerHTML = 1;

        return addCardsToSlider( currentWidth, true );
    } );
 
    buttonArrowRightSide.addEventListener( "click", () => {

        const quantityOfPages = determineQuantityOfPagesInSlider();

        if ( page === ( quantityOfPages - 1) ) {
            return;
        }

        page = ++page;
        
        buttonWithPageNumber.innerHTML = page + 1;

        buttonDoubleArrowLeftSide.disabled = false;
        buttonArrowLeftSide.disabled = false;

        highlightLeftPaginators();

        return addCardsToSlider( currentWidth, true );
    } );
 
    buttonArrowLeftSide.addEventListener( "click", () => {
        if ( page === 0) {
            return;
        }

        page = --page;

        if ( page === 0 ){
            unHighlightLeftPaginators();
        }
            
        buttonWithPageNumber.innerHTML = page + 1;
        return addCardsToSlider( currentWidth, true );
    } );
}
export default createSlider;

