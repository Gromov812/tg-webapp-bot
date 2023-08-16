export const SET_FIRST = 'SET_FIRST';
export const INCRIMENT_NUMBER = 'INCRIMENT_NUMBER';

export let initialState = {
    first: '1',
    second: '2',
    third: '3'
}


export const Reducer = (state, action) => {

    switch (action.type) {
        
        case SET_FIRST: {
            let firstCopy = state.first;
            firstCopy = action.payload;
            return {
                ...state,
                first: firstCopy,
            }
        }
        
        case INCRIMENT_NUMBER: {
            let firstCopy = state.first;
            firstCopy++;
            console.log(firstCopy);
            return {
                ...state,
                first: firstCopy,
            }
        }
  
        default:
            return {
                ...state
            }
    }

}

