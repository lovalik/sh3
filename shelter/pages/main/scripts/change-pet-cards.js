function changePetCards( {
    array,
    containerForPetCards,
    sectionOurPetsCurrentWidth,
    onChangeArrayWhileChangeWidthViewport,
    onChangePetCardsInContainer
} ) {

    let quantityOfCards;

    const petCardsCollection = containerForPetCards.querySelectorAll( ".pet-card" );

    if( sectionOurPetsCurrentWidth >= 1280 && petCardsCollection.length === 0 ) {
        console.log("массив был пуст добавляем");
        onChangePetCardsInContainer( array );
    } else if ( sectionOurPetsCurrentWidth >= 1280 && petCardsCollection.length !== 3  ) {
        quantityOfCards = 3;
        onChangeArrayWhileChangeWidthViewport( quantityOfCards );
        console.log(`переход через ключевую точку, добавлена-удалена карточка${ JSON.stringify(array) }`)
        onChangePetCardsInContainer( array );
    } else if ( sectionOurPetsCurrentWidth >= 1280 && petCardsCollection.length === 3 ) {
        console.log(">= 1280 массив не изменялся")
        return;
    }

    if ( sectionOurPetsCurrentWidth >= 768 && sectionOurPetsCurrentWidth < 1280 && petCardsCollection.length === 0 ){
        quantityOfCards = 2;
        onChangeArrayWhileChangeWidthViewport( quantityOfCards );
        console.log(`_________768-1280__массив был пуст добавляем${JSON.stringify(array)}`);
        onChangePetCardsInContainer( array );
    } else if ( sectionOurPetsCurrentWidth >= 768 && sectionOurPetsCurrentWidth < 1280 && petCardsCollection.length !== 2 ) {
        quantityOfCards = 2;
        onChangeArrayWhileChangeWidthViewport( quantityOfCards );
        console.log(`_________768-1280__переход через ключевую точку, добавлена-удалена карточка массив стал ${ JSON.stringify(array) }`)
        onChangePetCardsInContainer( array );
    } else if ( sectionOurPetsCurrentWidth >= 768 && sectionOurPetsCurrentWidth < 1280 && petCardsCollection.length === 2 ) {
        console.log("__________768-1280__массив не изменялся")
        return;
    }

    if( sectionOurPetsCurrentWidth < 768 && petCardsCollection.length === 0 ) {
        quantityOfCards = 1;
        onChangeArrayWhileChangeWidthViewport( quantityOfCards );
        console.log(`_________менее768__массив был пуст добавляем${JSON.stringify(array)}`);
        onChangePetCardsInContainer( array );
    } else if ( sectionOurPetsCurrentWidth < 768 && petCardsCollection.length !== 1  ) {
        console.log(`___________менее768__переход через ключевую точку, добавлена-удалена карточка${JSON.stringify(array)}`)
        quantityOfCards = 1;
        onChangeArrayWhileChangeWidthViewport( quantityOfCards );
        onChangePetCardsInContainer( array );
    } else if ( sectionOurPetsCurrentWidth < 768 && petCardsCollection.length === 1 ) {
        console.log("__________менее768__массив не изменялся")
        return;
    }
}

export default changePetCards;