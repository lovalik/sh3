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

    function onAddEventListenerOnPetCards() {
        const collectionCards = sectionOurPets.querySelectorAll( ".pet-card" );

        for( let card of collectionCards ) {
            card.addEventListener( "click", showPetCard );
        }
    }

    function onRemoveEventListenerFromPetCards() {
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

    function turnThePage(){
        const petCardsCollection = sectionOurPets.querySelectorAll( ".pet-card" );
        methodsArray.changeArrayWhenClickButtonPaginator( array, petCardsCollection.length );
        console.log(`section-our-pets.js___________________________?????????????? ???????????? ?????????? ????????????????????????????${JSON.stringify(array)}`);
        onRemoveEventListenerFromPetCards();
        onChangePetCardsInContainer();
        onAddEventListenerOnPetCards();
    }

    function transitionToPageOurPets(){
        buttonGetToKnowTheRest.removeEventListener( "click", transitionToPageOurPets );
        onRemoveEventListenerFromPetCards();
        document.location.href = "../pets/index.html";
    }

    function onChangeArrayWhileChangeWidthViewport( quantityCards ) {
        methodsArray.changeArrayWhileChangeWidthViewport( array, quantityCards );
    }
    
    const slideWidthObserver = new ResizeObserver( entries => {
        let sectionOurPetsCurrentWidth;

        for ( let entry of entries ) {
            if( entry.contentBoxSize ){
                console.log(`section-our-pets.js_______?????????????? ???????????? ?????????? ?????????????????? ???????????? ????????????__${JSON.stringify(array)}`)
                sectionOurPetsCurrentWidth = Math.round( entry.contentBoxSize[0].inlineSize );
                console.log(`section-our-pets.js___________________________________________________?????????????? ???????????? ????????????__${sectionOurPetsCurrentWidth}px`)
                changePetCardsWhenResizeViewport ( {
                    sectionOurPets,
                    sectionOurPetsCurrentWidth,
                    onChangeArrayWhileChangeWidthViewport,
                    onChangePetCardsInContainer,
                    onAddEventListenerOnPetCards,
                    onRemoveEventListenerFromPetCards
                } );
            }
        }
    } )

    slideWidthObserver.observe( sectionOurPets );
}

export default createSectionOurPets;