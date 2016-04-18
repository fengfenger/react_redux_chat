import {fromJS,Map,List} from "immutable"

export default function rootReducer(state=Map(),action){
    switch (action.type) {
        case "SET_STATE": return state.merge(Map( action.state ))
    }
}
