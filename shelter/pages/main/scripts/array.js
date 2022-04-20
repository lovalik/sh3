function createArray() {

    function formArray() {
        let array = [[],[]];

        for ( let i = 0; i < 1000; i++ ) {
            const number = Math.trunc( Math.random(0,1) * 10 );

            if( array[0].length === 0 && number === 9 || number === 8 ) {
                continue;
            } else if( checkIsMatch( number, i, array ) ) {
                continue;
            } else if ( array[0].length === 3 ) {
                return array;
            } else {
                array[0].push( number )
            }
        }

        function checkIsMatch( number, index, array ) {
            if( array[0].length === 0 ){
                return false
            }

            for ( let i = 0; i < array[0].length; i++ ) {
                if ( index === i || number === array[0][i] || number === 8 || number === 9 ) {
                    return true;
                } else {
                    continue;
                }
            }
            return false;
        }
    }

    function addItemToArray( array ){
        for ( let i = 0; i < 1000; i++ ) {
            const number = Math.trunc( Math.random(0,1) * 10 );

            if( number === 9 || number === 8 ) {
                continue;
            } else if ( checkIsMatchForSingleNumber( number, array[0] ) ){
                continue;
            } else {
                return array[0].push( number )
            }
        }
    }

    function checkIsMatchForSingleNumber( number, array ){

        if( array.length === 0 ){
            return false;
        }

        for( let item of array ){
            if( item === number ){
                return true;
            } else {
                continue;
            }
        }
        return false;
    }

    function changeArrayWhileChangeWidthViewport( array, quantityOfCards ){

        if( array[0].length === quantityOfCards ){
            return;
        }
        
        if( array[0].length < quantityOfCards && array[1].length !== 0 ){
            let delta = quantityOfCards - array[0].length;
            for( let i = 0; i < delta; i++ ){
                array[0].push( array[1].pop() );
            }
        } else if ( array[0].length < quantityOfCards && array[1].length === 0 ){
            let delta = quantityOfCards - array[0].length;
            for( let i = 0; i < delta; i++ ){
                addItemToArray( array );
            }
        }
        
        if ( array[0].length > quantityOfCards && array[1].length !== 0 ){
            let delta = array[0].length - quantityOfCards;
            for( let i = 0; i < delta; i++ ){
                array[1].push( array[0].pop() );
            }
        } else if ( array[0].length > quantityOfCards && array[1].length === 0 && array[0].length === 3 ){
            let delta = array[0].length - quantityOfCards;
            for( let i = 0; i < delta; i++ ){
                array[1].push( array[0].pop() );
            }
        } else if ( array[0].length > quantityOfCards && array[1].length === 0 ){
            let delta =  array[0].length - quantityOfCards;
            for( let i = 0; i < delta; i++ ){
                array[0].pop();
            }
        } 
    }

    function changeArrayWhenClickButtonPaginator( array, quantityOfCards ){
        array[1].splice(0, array[1].length );

        for ( let i = 0; i < quantityOfCards; i++ ) {
            addItemToArray( array );
        }

        for ( let i = 0; i < quantityOfCards; i++ ) {
            array[0].pop();
        }
    }

    function addItemToArray( array ){
        for ( let i = 0; i < 1000; i++ ) {
            const number = Math.trunc( Math.random(0,1) * 10 );

            if( number === 9 || number === 8 ) {
                continue;
            } else if( checkIsMatchForSingleNumber( number, array[0] ) ) {
                continue;
            } else {
                array[0].unshift( number );
                break;
            }
        }
    }

    return {
        formArray,
        changeArrayWhileChangeWidthViewport,
        changeArrayWhenClickButtonPaginator
    }
}

export default createArray;
