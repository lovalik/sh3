import changePetCardsWhenResizeViewport from "./change-pet-cards.js";
import createArray from "./array.js";
import createPetCard from "./pet-card.js";
import createPopupMenu from "./../../shared/scripts/popup-menu.js";
import petsDataBase from "../../shared/scripts/database.js";

function createSectionOurPets( sectionOurPets ) {

    const containerForPetCards = sectionOurPets.querySelector( ".slider");
    const methodsArray = createArray();
    const array = methodsArray.formArray();

    const buttonLeftArrow = sectionOurPets.querySelector( ".left-arrow" );
    const buttonRightArrow = sectionOurPets.querySelector( ".right-arrow" );
    const buttonGetToKnowTheRest = sectionOurPets.querySelector(".button-get-to-know-the-rest");

    buttonRightArrow.addEventListener( "click", turnThePage );
    buttonLeftArrow.addEventListener( "click", turnThePage );
    buttonGetToKnowTheRest.addEventListener( "click", transitionToPageOurPets );

    function onChangePetCardsInContainer(){
        const petCardsCollection = sectionOurPets.querySelectorAll( ".pet-card" );

        for( let card of petCardsCollection ){
            card.remove();
        }

        for( let item of array[0] ){
            containerForPetCards.append( createPetCard( item ) );
        }
    }

    function onAddEventListenerOnButtonsLearnMore() {
        const collectionButtonsLearnMore = sectionOurPets.querySelectorAll( ".button-secondary" );

        for( let buttonLearnMore of collectionButtonsLearnMore ) {
            buttonLearnMore.addEventListener( "click", showPetCard );
        }
    }

    function onRemoveEventListenerFromButtonsLearnMore() {
        const collectionButtonsLearnMore = sectionOurPets.querySelectorAll( ".button-secondary" );
        // console.log(`удалили с __${collectionButtonsLearnMore.length}__ карточек обработчики событий с кнопок Learn more`)
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

    function turnThePage(){
        const petCardsCollection = sectionOurPets.querySelectorAll( ".pet-card" );
        methodsArray.changeArrayWhenClickButtonPaginator( array, petCardsCollection.length );
        console.log(`section-our-pets.js___________________________текущий массив после перелистывания${JSON.stringify(array)}`);
        onRemoveEventListenerFromButtonsLearnMore();
        onChangePetCardsInContainer();
        onAddEventListenerOnButtonsLearnMore();
    }

    function transitionToPageOurPets(){
        buttonGetToKnowTheRest.removeEventListener( "click", transitionToPageOurPets );
        onRemoveEventListenerFromButtonsLearnMore();
        document.location.href = "../pets/index.html";
    }

    function onChangeArrayWhileChangeWidthViewport( quantityCards ) {
        methodsArray.changeArrayWhileChangeWidthViewport( array, quantityCards );
    }
    
    const slideWidthObserver = new ResizeObserver( entries => {
        let sectionOurPetsCurrentWidth;

        for ( let entry of entries ) {
            if( entry.contentBoxSize ){
                console.log(`section-our-pets.js_______текущий массив после изменения ширины экрана__${JSON.stringify(array)}`)
                sectionOurPetsCurrentWidth = Math.round( entry.contentBoxSize[0].inlineSize );
                console.log(`section-our-pets.js___________________________________________________текущая ширина экрана${sectionOurPetsCurrentWidth}`)
                changePetCardsWhenResizeViewport ( {
                    sectionOurPets,
                    sectionOurPetsCurrentWidth,
                    onChangeArrayWhileChangeWidthViewport,
                    onChangePetCardsInContainer,
                    onAddEventListenerOnButtonsLearnMore,
                    onRemoveEventListenerFromButtonsLearnMore
                } );
            }
        }
    } )

    slideWidthObserver.observe( sectionOurPets );
}

export default createSectionOurPets;