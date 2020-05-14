import {
    FETCH_COMIC_START,
    FETCH_COMIC_SUCCESS,
    FETCH_COMIC_FAILURE,
    FETCH_HERO_START,
    FETCH_HERO_SUCCESS,
    FETCH_HERO_FAILURE} from '../actions'


export const initState = {
    fetchingComics:false,
    comicFailMsg:null,
    comics:null,
    input:null,
    fetchingHero:false,
    heroFailMsg:null,
    hero:null


}

export const reducer = (state = initState, action) =>{
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
        case FETCH_HERO_START:
            return{
                ...state,
                fetchingHero:true
            }

        case FETCH_HERO_SUCCESS:
            // const name = action.payload.toLowerCase()
            // name.replace(' ', '-')

            return{
                ...state,
                fetchingHero:false,
                hero:action.payload[0],
                heroFailMsg:null
            }
        case FETCH_HERO_FAILURE:
            return{
                ...state,
                fetchingHero:false,
                heroFailMsg:'Oops.. Request faild 😢 Try Again...'
            }
        

        default:
            return state
    }
};