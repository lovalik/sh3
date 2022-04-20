import changePetCards from "./change-pet-cards.js";
import createArray from "./array.js";
import createPetCard from "./pet-card.js";

function createSectionOurPets( rootElement ) {

    const sectionOurPets = rootElement.querySelector( "#pets");
    const containerForPetCards = sectionOurPets.querySelector( ".slider");
    const methodsArray = createArray();
    const array = methodsArray.formArray();

    const buttonLeftArrow = sectionOurPets.querySelector( ".left-arrow" );
    const buttonRightArrow = sectionOurPets.querySelector( ".right-arrow" );

    buttonRightArrow.addEventListener( "click", turnThePage );
    buttonLeftArrow.addEventListener( "click", turnThePage );

    function onChangePetCardsInContainer( array ){
        const petCardsCollection = sectionOurPets.querySelectorAll( ".pet-card" );
        
        for( let card of petCardsCollection ){
            card.remove();
        }

        for( let item of array[0] ){
            containerForPetCards.append( createPetCard( item ) );
        }
    }

    function turnThePage(){
        const petCardsCollection = sectionOurPets.querySelectorAll( ".pet-card" );
        // console.log(`нажата кнопка______массив до преобразования${JSON.stringify(array)}`)
        methodsArray.changeArrayWhenClickButtonPaginator( array, petCardsCollection.length );
        console.log(`нажата кнопка______массив после преобразования${JSON.stringify(array)}`);
        onChangePetCardsInContainer( array );
    }

    function onChangeArrayWhileChangeWidthViewport( quantityCards ) {
        methodsArray.changeArrayWhileChangeWidthViewport( array, quantityCards );
    }
    
    const slideWidthObserver = new ResizeObserver( entries => {
        let sectionOurPetsCurrentWidth;

        for ( let entry of entries ) {
            if( entry.contentBoxSize ){
                console.log(`main.js__array__${JSON.stringify(array)}`)
                sectionOurPetsCurrentWidth = Math.round( entry.contentBoxSize[0].inlineSize );
                console.log(`main.js__width-section__${sectionOurPetsCurrentWidth}`)
                changePetCards( {
                    array,
                    containerForPetCards,
                    sectionOurPetsCurrentWidth,
                    onChangeArrayWhileChangeWidthViewport,
                    onChangePetCardsInContainer
                } );
            }
        }
    } )

    slideWidthObserver.observe( sectionOurPets );
}

export default createSectionOurPets;