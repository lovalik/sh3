function changePetCardsWhenResizeViewport( {
    sectionOurPets,
    sectionOurPetsCurrentWidth,
    onChangeArrayWhileChangeWidthViewport,
    onChangePetCardsInContainer,
    onAddEventListenerOnButtonsLearnMore,
    onRemoveEventListenerFromButtonsLearnMore
} ) {

    let quantityOfCards;
    const containerForPetCards = sectionOurPets.querySelector( ".slider");
    const petCardsCollection = containerForPetCards.querySelectorAll( ".pet-card" );

    if( sectionOurPetsCurrentWidth >= 1280 && petCardsCollection.length === 0 ) {
        console.log("ширина__ >= 1280 __контейнер был пуст добавляем карточки");
        onRemoveEventListenerFromButtonsLearnMore();
        onChangePetCardsInContainer();
        onAddEventListenerOnButtonsLearnMore();
    } else if ( sectionOurPetsCurrentWidth >= 1280 && petCardsCollection.length !== 3  ) {
        quantityOfCards = 3;
        onChangeArrayWhileChangeWidthViewport( quantityOfCards );
        console.log(`переход через ключевую точку адаптивной верстки`)
        onRemoveEventListenerFromButtonsLearnMore();
        onChangePetCardsInContainer();
        onAddEventListenerOnButtonsLearnMore()
    } else if ( sectionOurPetsCurrentWidth >= 1280 && petCardsCollection.length === 3 ) {
        // console.log("change-pet-cards.js________________ширина__ >= 1280px")
        return;
    }

    if ( sectionOurPetsCurrentWidth >= 768 && sectionOurPetsCurrentWidth < 1280 && petCardsCollection.length === 0 ){
        quantityOfCards = 2;
        onChangeArrayWhileChangeWidthViewport( quantityOfCards );
        console.log(`ширина__ 768-1280 __контейнер был пуст добавляем карточки`);
        onRemoveEventListenerFromButtonsLearnMore();
        onChangePetCardsInContainer();
        onAddEventListenerOnButtonsLearnMore()
    } else if ( sectionOurPetsCurrentWidth >= 768 && sectionOurPetsCurrentWidth < 1280 && petCardsCollection.length !== 2 ) {
        quantityOfCards = 2;
        onChangeArrayWhileChangeWidthViewport( quantityOfCards );
        console.log(`переход через ключевую точку адаптивной верстки`)
        onRemoveEventListenerFromButtonsLearnMore();
        onChangePetCardsInContainer();
        onAddEventListenerOnButtonsLearnMore()
    } else if ( sectionOurPetsCurrentWidth >= 768 && sectionOurPetsCurrentWidth < 1280 && petCardsCollection.length === 2 ) {
        // console.log("change-pet-cards.js________________768-1280px")
        return;
    }

    if( sectionOurPetsCurrentWidth < 768 && petCardsCollection.length === 0 ) {
        quantityOfCards = 1;
        onChangeArrayWhileChangeWidthViewport( quantityOfCards );
        console.log(`ширина <768__контейнер был пуст добавляем карточки`);
        onRemoveEventListenerFromButtonsLearnMore();
        onChangePetCardsInContainer();
        onAddEventListenerOnButtonsLearnMore()
    } else if ( sectionOurPetsCurrentWidth < 768 && petCardsCollection.length !== 1  ) {
        console.log(`переход через ключевую точку адаптивной верстки`)
        quantityOfCards = 1;
        onChangeArrayWhileChangeWidthViewport( quantityOfCards );
        onRemoveEventListenerFromButtonsLearnMore();
        onChangePetCardsInContainer();
        onAddEventListenerOnButtonsLearnMore()
    } else if ( sectionOurPetsCurrentWidth < 768 && petCardsCollection.length === 1 ) {
        // console.log("change-pet-cards.js________________ширина < 768px")
        return;
    }
}

export default changePetCardsWhenResizeViewport;