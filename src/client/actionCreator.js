import {fromJS,Map} from "immutable"

export function setState(state){
    return {
        type:"SET_STATE",
        state:Map.isMap(state) ? state : fromJS(state)
    }
}
