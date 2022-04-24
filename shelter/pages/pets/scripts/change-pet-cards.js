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
        removeEventListenerFromPetCards();
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
        removeEventListenerFromPetCards();
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
        removeEventListenerFromPetCards();
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
        removeEventListenerFromPetCards();
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
        removeEventListenerFromPetCards();
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
        removeEventListenerFromPetCards();
        for ( let item of allPetsCards ) {
            item.remove();
        }
        addCardsToDOMPage( arrayOfSixteenPages, 3, currentPage )
    } else if( currentWidth < 768 && allPetsCards.length === 3 ) {
        return;
    }

    function addCardsToDOMPage( array, cardsOnPages, pageNumber ){

        console.log( `change-pet-card.js_________текущий массив_____${JSON.stringify( array )}`)
        console.log( `change-pet-card.js________________________номер страницы_____${pageNumber + 1}` )
    
        for( let i = 0; i < cardsOnPages; i++ ){
            let card = createPetCard( array[pageNumber][i] );
            petsCardsContainer.append( card );
        }
        addEventListenerOnPetCards();
    }

    function addEventListenerOnPetCards() {
        const collectionCards = sectionOurPets.querySelectorAll( ".pet-card" );

        for( let card of collectionCards ) {
            card.addEventListener( "click", showPetCard );
        }
    }

    function removeEventListenerFromPetCards() {
        const collectionCards = sectionOurPets.querySelectorAll( ".pet-card" );

        for( let card of collectionCards ) {
            card.removeEventListener( "click", showPetCard );
        }
    }

    function showPetCard() {
        let petName;

        if( event.currentTarget.className === "pet-card"){
            petName = event.currentTarget.children[1].innerHTML;
        }

        for ( let i = 0; i < petsDataBase.length; i++ ) {
            if( String( petsDataBase[i].name ) === String(petName) ) {
                return createPopupMenu( petsDataBase[i] );
            }
        }
    }
}
export default changePetCardsInSlider;