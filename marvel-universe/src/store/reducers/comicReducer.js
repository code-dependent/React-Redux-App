import {
    FETCH_COMIC_START,
    FETCH_COMIC_SUCCESS,
    FETCH_COMIC_FAILURE} from '../actions'


export const initState = {
    fetchingComics:false,
    comicFailMsg:null,
    comics:null


}

export const comicReducer = (state = initState, action) =>{
    switch(action.type){
        case FETCH_COMIC_START:
            return{
                ...state,
                fetchingComics:true
            }
        case FETCH_COMIC_SUCCESS:
            return{
                ...state,
                fetchingComics:false,
                comics:action.payload,
                comicFailMsg:null


            }
        case FETCH_COMIC_FAILURE:
            return{
                ...state,
                fetchingComics:false,
                comicFailMsg:'Oops... Request faild 😢 Try Again..'
            }
        default:
            return state;
    }
};