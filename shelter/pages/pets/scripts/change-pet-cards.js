import createPopupMenu from "./../../shared/scripts/popup-menu.js";
import createPetCard from "./pet-card.js";
import petsDataBase from "../../shared/scripts/database.js";

function changePetCardsInSlider( {
    arrayOfSixPages,
    arrayOfEightPages,
    arrayOfSixteenPages,
    sectionOurPets,
    currentWidth,
    currentPage,
    onChangeCurrentPage,
    buttonSliderClick,
    onDisableButton,
    onUnHighlightLeftPaginators,
    onHighlightRightPaginators,
    onChangePageNumberInButton
} ){
    const allPetsCards = sectionOurPets.querySelectorAll( ".pet-card" );
    const petsCardsContainer = sectionOurPets.querySelector( ".cards-of-pets__wrapper" );

    if ( currentWidth >= 1280 && allPetsCards.length === 0 ) {
        addCardsToDOMPage( arrayOfSixPages, 8, 0 );
    } else if ( currentWidth >= 1280 && allPetsCards.length !== 8 ){
        removeEventListenerFromButtonsLearnMore();
        for ( let item of allPetsCards ) {
            item.remove();
        }
        onChangeCurrentPage( 0 );
        onChangePageNumberInButton( 0 );
        onDisableButton();
        onUnHighlightLeftPaginators();
        onHighlightRightPaginators();
        addCardsToDOMPage( arrayOfSixPages, 8, 0  );
    } else if ( currentWidth >= 1280 && allPetsCards.length === 8 && buttonSliderClick ) {
        removeEventListenerFromButtonsLearnMore();
        for ( let item of allPetsCards ) {
            item.remove();
        }
        addCardsToDOMPage( arrayOfSixPages, 8, currentPage );
    } else if ( currentWidth >= 1280 && allPetsCards.length === 8 ){
        return;
    }

    if ( currentWidth >= 768 && currentWidth < 1280 && allPetsCards.length === 0 ) {
        addCardsToDOMPage( arrayOfEightPages, 6, 0  )
    } else if ( currentWidth >= 768 && currentWidth < 1280 && allPetsCards.length !== 6 ){
        removeEventListenerFromButtonsLearnMore();
        for ( let item of allPetsCards ) {
            item.remove();
        }
        onChangeCurrentPage( 0 );
        onChangePageNumberInButton( 0 );
        onDisableButton();
        onUnHighlightLeftPaginators();
        onHighlightRightPaginators();
        addCardsToDOMPage( arrayOfEightPages, 6, 0  )
    } else if ( currentWidth >= 768 && currentWidth < 1280 && allPetsCards.length === 6 && buttonSliderClick ) {
        removeEventListenerFromButtonsLearnMore();
        for ( let item of allPetsCards ) {
            item.remove();
        }
        addCardsToDOMPage( arrayOfEightPages, 6, currentPage );
    } else if ( currentWidth >= 768 && currentWidth < 1280 && allPetsCards.length === 6 ){
        return;
    }
    
    if( currentWidth < 768 && allPetsCards.length === 0 ) {
        addCardsToDOMPage( arrayOfSixteenPages, 3, 0  )
    } else if ( currentWidth < 768 && allPetsCards.length !== 3 ) {
        removeEventListenerFromButtonsLearnMore();
        for ( let item of allPetsCards ) {
            item.remove();
        }
        onChangeCurrentPage( 0 );
        onChangePageNumberInButton( 0 );
        onDisableButton();
        onUnHighlightLeftPaginators();
        onHighlightRightPaginators();
        addCardsToDOMPage( arrayOfSixteenPages, 3, 0  )
    } else if( currentWidth < 768 && allPetsCards.length === 3 && buttonSliderClick  ) {
        removeEventListenerFromButtonsLearnMore();
        for ( let item of allPetsCards ) {
            item.remove();
        }
        addCardsToDOMPage( arrayOfSixteenPages, 3, currentPage )
    } else if( currentWidth < 768 && allPetsCards.length === 3 ) {
        return;
    }

    function addCardsToDOMPage( array, cardsOnPages, pageNumber ){

        console.log( `____смена кадра_____${JSON.stringify( array )}`)
        console.log( `____номер страницы_____${pageNumber}` )
    
        for( let i = 0; i < cardsOnPages; i++ ){
            let card = createPetCard( array[pageNumber][i] );
            petsCardsContainer.append( card );
        }
        addEventListenerOnButtonsLearnMore();
    }

    function addEventListenerOnButtonsLearnMore() {
        const collectionButtonsLearnMore = sectionOurPets.querySelectorAll( ".button-secondary" );

        for( let buttonLearnMore of collectionButtonsLearnMore ) {
            buttonLearnMore.addEventListener( "click", showPetCard );
        }
    }

    function removeEventListenerFromButtonsLearnMore() {
        const collectionButtonsLearnMore = sectionOurPets.querySelectorAll( ".button-secondary" );
        console.log(`удаление обработчиков событий с кнопок Learn more____${collectionButtonsLearnMore.length}`)
        for( let buttonLearnMore of collectionButtonsLearnMore ) {
            
            buttonLearnMore.removeEventListener( "click", showPetCard );
        }
    }

    function showPetCard() {
        let eventTarget = event.target.parentElement.className;
        let petName;

        if( eventTarget === "button-secondary"){
            petName = event.target.parentElement.previousElementSibling.innerHTML;
        } else if( eventTarget === "pet-card" ){
            petName = event.target.previousElementSibling.innerHTML;
        }

        for ( let i = 0; i < petsDataBase.length; i++ ) {
            if( String( petsDataBase[i].name ) === String(petName) ) {
                return createPopupMenu( petsDataBase[i] );
            }
        }
    }
}
export default changePetCardsInSlider;