import createPopupMenu from "./../../shared/scripts/popup-menu.js";
import petsDataBase from "../../shared/scripts/database.js";

function changePetCards( {
    sectionOurPets,
    sectionOurPetsCurrentWidth,
    onChangeArrayWhileChangeWidthViewport,
    onChangePetCardsInContainer
} ) {

    let quantityOfCards;
    const containerForPetCards = sectionOurPets.querySelector( ".slider");
    const petCardsCollection = containerForPetCards.querySelectorAll( ".pet-card" );

    if( sectionOurPetsCurrentWidth >= 1280 && petCardsCollection.length === 0 ) {
        console.log("массив был пуст добавляем карточки");
        removeEventListenerFromButtonsLearnMore();
        onChangePetCardsInContainer();
        addEventListenerOnButtonsLearnMore()
    } else if ( sectionOurPetsCurrentWidth >= 1280 && petCardsCollection.length !== 3  ) {
        quantityOfCards = 3;
        onChangeArrayWhileChangeWidthViewport( quantityOfCards );
        console.log(`переход через ключевую точку, добавлена-удалена карточка`)
        removeEventListenerFromButtonsLearnMore();
        onChangePetCardsInContainer();
        addEventListenerOnButtonsLearnMore()
    } else if ( sectionOurPetsCurrentWidth >= 1280 && petCardsCollection.length === 3 ) {
        console.log(">= 1280 массив не изменялся")
        return;
    }

    if ( sectionOurPetsCurrentWidth >= 768 && sectionOurPetsCurrentWidth < 1280 && petCardsCollection.length === 0 ){
        quantityOfCards = 2;
        onChangeArrayWhileChangeWidthViewport( quantityOfCards );
        console.log(`_________768-1280__массив был пуст добавляем карточки`);
        removeEventListenerFromButtonsLearnMore();
        onChangePetCardsInContainer();
        addEventListenerOnButtonsLearnMore()
    } else if ( sectionOurPetsCurrentWidth >= 768 && sectionOurPetsCurrentWidth < 1280 && petCardsCollection.length !== 2 ) {
        quantityOfCards = 2;
        onChangeArrayWhileChangeWidthViewport( quantityOfCards );
        console.log(`_________768-1280__переход через ключевую точку, добавлена-удалена карточка`)
        removeEventListenerFromButtonsLearnMore();
        onChangePetCardsInContainer();
        addEventListenerOnButtonsLearnMore()
    } else if ( sectionOurPetsCurrentWidth >= 768 && sectionOurPetsCurrentWidth < 1280 && petCardsCollection.length === 2 ) {
        console.log("__________768-1280__массив не изменялся")
        return;
    }

    if( sectionOurPetsCurrentWidth < 768 && petCardsCollection.length === 0 ) {
        quantityOfCards = 1;
        onChangeArrayWhileChangeWidthViewport( quantityOfCards );
        console.log(`_________менее768__массив был пуст добавляем`);
        removeEventListenerFromButtonsLearnMore();
        onChangePetCardsInContainer();
        addEventListenerOnButtonsLearnMore()
    } else if ( sectionOurPetsCurrentWidth < 768 && petCardsCollection.length !== 1  ) {
        console.log(`___________менее768__переход через ключевую точку, добавлена-удалена карточка`)
        quantityOfCards = 1;
        onChangeArrayWhileChangeWidthViewport( quantityOfCards );
        removeEventListenerFromButtonsLearnMore();
        onChangePetCardsInContainer();
        addEventListenerOnButtonsLearnMore()
    } else if ( sectionOurPetsCurrentWidth < 768 && petCardsCollection.length === 1 ) {
        console.log("__________менее768__массив не изменялся")
        return;
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

export default changePetCards;