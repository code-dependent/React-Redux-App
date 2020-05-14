import axios from "axios";

export const FETCH_HERO_START = "FETCH_HERO_START";
export const FETCH_HERO_SUCCESS = "FETCH_HERO_SUCCESS";
export const FETCH_HERO_FAILURE='FETCH_HERO_FAILURE'
export const FETCH_COMIC_START = "FETCH_COMIC_START";
export const FETCH_COMIC_SUCCESS = "FETCH_COMIC_SUCCESS";
export const FETCH_COMIC_FAILURE = "FETCH_COMIC_FAILURE";
export const GET_INPUT = 'GET_INPUT'

export const fetchComics =(url)=>{
    return dispatch => {
        dispatch({type:FETCH_COMIC_START})
        axios.get(`${url}?ts=3&apikey=a4cf24f4091f3d68077cc337baa21967&hash=db590c6aed645dfe5946366c7f73d53f`)
            .then(res=>{
                console.log(res.data.data.results)
                dispatch({type:FETCH_COMIC_SUCCESS, payload:res.data.data.results})

            })
            
            .catch(err=>{dispatch({type:FETCH_COMIC_FAILURE})})
    }

}

export const fetchHero = (HeroInput)=>{
    
    return dispatch => {
        dispatch({type:FETCH_HERO_START})
        console.log('hero fetch started')
        axios.get(`http://gateway.marvel.com/v1/public/characters?name=${HeroInput.toLowerCase().replace(' ', '-')}&ts=3&apikey=a4cf24f4091f3d68077cc337baa21967&hash=db590c6aed645dfe5946366c7f73d53f`)
        .then(res=>{
        console.log('hero fetch ')
            console.log(` this ${res.data.data.results[0]}`)
            dispatch({type:FETCH_HERO_SUCCESS, payload:res.data.data.results})
        })
        .catch(err=>{
            dispatch({type:FETCH_HERO_FAILURE})
        })
    }
}



