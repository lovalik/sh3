function formArray() {

    function createArrayOfSixPages(){
        let arrayOfSixPages = [];

        for ( let i = 0; i < 6; i++ ) {
            arrayOfSixPages.push( formArrayForSinglePage() );
        }

        function formArrayForSinglePage() {
            let arrayForSinglePage = [];

            function checkIsMatches( number, arrayForSinglePage ) {
                for ( let i = 0; i < arrayForSinglePage.length; i++ ) {
                    if ( number === arrayForSinglePage[i] ) {
                        return true; 
                    } else if ( number !== arrayForSinglePage[i] ) {
                        continue;
                    }
                }
                return false;
            }

            for ( let i = 0; i < 100; i++ ) {
                let number = Math.floor( Math.random( 0, 1 ) * 10 );

                if ( arrayForSinglePage.length > 8 ) {
                    return arrayForSinglePage;
                } else if ( checkIsMatches( number, arrayForSinglePage ) || number >= 8 ) {
                    continue;
                } else {
                    arrayForSinglePage.push( number );
                }
            }
            return arrayForSinglePage;
        }
        return arrayOfSixPages;
    }

    function createSplittedArray( arrayToSplitted ) {

        let array = [];

        function splitSubArray( arrayToPush, arrayToSplitted ){
            for ( let i = 0; i < arrayToSplitted.length; i++ ) {
                arrayToPush.push( arrayToSplitted[i] )
            }
        }

        for ( let i = 0; i < arrayToSplitted.length; i++ ) {
            splitSubArray( array, arrayToSplitted[i] );
        }
        return array;
    }

    function createArrayOfEightPages( splittedArray ) {

        let arrayOfEightPages = [];
        let copyOfInitialArray = splittedArray.slice();

        for ( let i = 0; i < 8; i++ ) {
            arrayOfEightPages.push( copyOfInitialArray.splice( 0, 6 ) );
        }
        return arrayOfEightPages;
    }

    function createArrayOfSixteenPages( splittedArray ) {

        let arrayOf16Pages = [];
        let copyOfInitialArray = splittedArray.slice();

        for ( let i = 0; i < 16; i++ ) {
            arrayOf16Pages.push( copyOfInitialArray.splice( 0, 3 ) );
        }
        return arrayOf16Pages;
    }

    function checkUpArrayOnMatches( array ){
        for ( let i = 0; i < array.length; i++ ) {
            let subArray = array[i];

            if ( checkIsSubArrayISMatches( subArray ) ) {
                return true;
            } else {
                continue;
            }
        }

        function checkIsSubArrayISMatches( array ) {

            for ( let i = 0; i < array.length; i++ ) {
    
                if ( checkIsMatches( array[i], i, array ) ) {
                    return true;
                } else {
                    continue;
                }
            }

            function checkIsMatches( number, index, array ) {
                for ( let i = 0; i < array.length; i++ ) {
                    if ( index === i ) {
                        continue;
                    } else if ( number === array[i] ) {
                        return true;
                    }
                }
                return false;
            }
            return false
        }
        return false
    }

    return {
        createArrayOf_6_Pages: () => {
            return createArrayOfSixPages();
        },
        createArrayOf_8_Pages: () => {
            for ( let i = 0; i < 1000000; i++ ) {
                const splittedArray = createSplittedArray( createArrayOfSixPages() );
                const array = createArrayOfEightPages( splittedArray );

                if ( checkUpArrayOnMatches( array ) ) {
                    continue;
                } else {
                    return array;
                }
            }
        },
        createArrayOf_16_Pages: () => {
            for ( let i = 0; i < 1000000; i++ ) {
                const splittedArray = createSplittedArray( createArrayOfSixPages() );
                const array = createArrayOfSixteenPages( splittedArray );

                if ( checkUpArrayOnMatches( array ) ) {
                    continue;
                } else {
                    return array;
                }
            }
        }
    }
}

export default formArray;