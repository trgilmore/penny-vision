import {useReducer} from 'react'
import axios from 'axios'
import ShowsContext from './showsContext'
import ShowsReducer from './showsReducer'
import {
    SEARCH_SHOWS,
    SET_LOADING, 
} from './types'

const ShowState = (props) => {
    const initialSate = {
        shows: [],
        singleShow: {},
        loading: false
    }
    const [state, dispatch] = useReducer(ShowsReducer, initialSate)

const searchShows = async (searchTerm) => {
    dispatch({type: SET_LOADING})

    const { data } = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    console.log(data)
    dispatch({
        type: SEARCH_SHOWS,
        payload: data
    })
}

    return (
        <ShowsContext.Provider
        value={{
            shows: state.shows,
            singleShow: state.singleShow,
            loading: state.loading,
            searchShows,
        }}
        >
            {props.children}
        </ShowsContext.Provider>
    )
}

export default ShowState
