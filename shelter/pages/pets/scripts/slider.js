import changePetCardsInSlider from "./change-pet-cards.js"
import formArray from "./array.js";

function createSlider( sectionOurPets ) {

    let currentPage = 0;
    let currentWidth;

    const buttonDoubleArrowRightSide = sectionOurPets.querySelector( ".paginator-right-double-arrow" );
    const buttonArrowRightSide = sectionOurPets.querySelector( ".paginator-right-arrow" );
    const buttonDoubleArrowLeftSide = sectionOurPets.querySelector( ".paginator-left-double-arrow" );
    const buttonArrowLeftSide = sectionOurPets.querySelector( ".paginator-left-arrow" );
    const buttonWithPageNumber = sectionOurPets.querySelector( ".page-number");

    const array = formArray();
    const arrayOfSixPages = array.createArrayOf_6_Pages();
    const arrayOfEightPages = array.createArrayOf_8_Pages();
    const arrayOfSixteenPages = array.createArrayOf_16_Pages();
    console.log( JSON.stringify( arrayOfSixPages ))
    console.log( JSON.stringify( arrayOfEightPages ))
    console.log( JSON.stringify( arrayOfSixteenPages ))

    const resizeObserver = new ResizeObserver( ( entries ) => {
        for( let entry of entries ){
            if( entry.contentBoxSize ){
                currentWidth = Math.round( entry.contentBoxSize[0].inlineSize );
                const buttonSliderClick = false;
                changePetCardsInSlider( {
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
                } );
                console.log(`slider.js__width-section__${currentWidth}`)
            }
        }
    } );

    function onChangePageNumberInButton( currentPage ){
        buttonWithPageNumber.innerHTML = currentPage + 1;
    }

    function onChangeCurrentPage( value ){
        currentPage = value;
    }

    onChangePageNumberInButton( currentPage );
    buttonWithPageNumber.style.fontFamily = 'Arial';

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
    
    function onDisableButton(){
        if ( currentPage !== 0) {
            buttonDoubleArrowLeftSide.style.cursor = "pointer";
            buttonArrowLeftSide.style.cursor = "pointer";
        } else {
            buttonDoubleArrowLeftSide.style.cursor = "default";
            buttonArrowLeftSide.style.cursor = "default";
        }
    }

    function onHighlightLeftPaginators() {
        buttonDoubleArrowLeftSide.style.borderColor = "#F1CDB3";
        buttonArrowLeftSide.style.borderColor = "#F1CDB3";
        buttonDoubleArrowLeftSide.firstElementChild.style.color = "#292929";
        buttonArrowLeftSide.firstElementChild.style.color = "#292929";
    }

    function onUnHighlightLeftPaginators() {
        buttonDoubleArrowLeftSide.style.borderColor = "#CDCDCD";
        buttonArrowLeftSide.style.borderColor = "#CDCDCD";
        buttonDoubleArrowLeftSide.firstElementChild.style.color = "#CDCDCD";
        buttonArrowLeftSide.firstElementChild.style.color = "#CDCDCD";
    }

    function onHighlightRightPaginators() {
        buttonDoubleArrowRightSide.style.borderColor = "#F1CDB3";
        buttonArrowRightSide.style.borderColor = "#F1CDB3";
        buttonDoubleArrowRightSide.firstElementChild.style.color = "#292929";
        buttonArrowRightSide.firstElementChild.style.color = "#292929";
    }

    function onUnHighlightRightPaginators() {
        buttonDoubleArrowRightSide.style.borderColor = "#CDCDCD";
        buttonArrowRightSide.style.borderColor = "#CDCDCD";
        buttonDoubleArrowRightSide.firstElementChild.style.color = "#CDCDCD";
        buttonArrowRightSide.firstElementChild.style.color = "#CDCDCD";
    }

    buttonDoubleArrowLeftSide.addEventListener( "mouseover", onDisableButton );
    buttonArrowLeftSide.addEventListener( "mouseover", onDisableButton );

    buttonDoubleArrowRightSide.addEventListener( "click", () => {

        const quantityOfPages = determineQuantityOfPagesInSlider();

        if ( currentPage === ( quantityOfPages - 1 ) ) {
            return;
        }

        currentPage = quantityOfPages - 1;
        onChangePageNumberInButton( currentPage )

        onHighlightLeftPaginators();
        onUnHighlightRightPaginators();

        const buttonSliderClick = true
        return changePetCardsInSlider( {
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
                                } );
    } );

    buttonDoubleArrowLeftSide.addEventListener( "click", () => {

        if ( currentPage === 0 ) {
            return;
        }

        currentPage = 0;
        onUnHighlightLeftPaginators();
        onHighlightRightPaginators();
        onChangePageNumberInButton( currentPage );
        
        const buttonSliderClick = true;
        return changePetCardsInSlider( {
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
                                } );
    } );
 
    buttonArrowRightSide.addEventListener( "click", () => {

        const quantityOfPages = determineQuantityOfPagesInSlider();

        if ( currentPage === ( quantityOfPages - 1) ) {
            return;
        }

        currentPage = ++currentPage;
        
        onChangePageNumberInButton( currentPage );

        if ( currentPage === ( quantityOfPages - 1) ) {
            onUnHighlightRightPaginators();
        }

        onHighlightLeftPaginators();

        const buttonSliderClick = true
        return changePetCardsInSlider( {
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
                                } );
    } );
 
    buttonArrowLeftSide.addEventListener( "click", () => {
        if ( currentPage === 0) {
            return;
        }

        currentPage = --currentPage;

        if ( currentPage === 0 ){
            onUnHighlightLeftPaginators();
        }

        onChangePageNumberInButton( currentPage );
        onHighlightRightPaginators();

        const buttonSliderClick = true
        return changePetCardsInSlider( {
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
                                } );
    } );
}
export default createSlider;

