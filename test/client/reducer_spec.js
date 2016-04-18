import {fromJS} from "immutable"
import {expect} from "chai"
import rootReducer from "../../src/client/reducer"

import {
    newMessage, setState, switchRoom, setUsername
} from "../../src/client/actionCreator"

const fakeState = fromJS({
    rooms:[
        {id:"0", name:"room",owner:"eisneim"},
        {id:"1", name:"room2",owner:"terry"}
    ],
    currentRoom:"1",
    username:"eisneim",
    message:fromJS({
        "1":[
            {user:"eisneim",content:"react is cool",time:"23:33"},
            {user:"terry",content:"so is Redux",time:"12:22"}
        ]
    }),
})

describe("client Root reducer",()=>{
    it("set state",()=>{
        const nextState = rootReducer(fakeState,
            setState(fromJS({username:"Joan",currentRoom:"0"}))
        )
        expect(nextState.get("username")).to.equal("Joan")
        expect(nextState.get("rooms").size).to.equal(2)
    })
})
