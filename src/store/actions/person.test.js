import update_person,{UPDATE_PERSON} from './personActions';

describe('action', ()=> { 
 it('Should return the action for person', ()=>{
    const expectedAction = {
        type: UPDATE_PERSON,
        payload: 'bitfumes'
    }
    expect(update_person).toEqual(expectedAction)
    })
})