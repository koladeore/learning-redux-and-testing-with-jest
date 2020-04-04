import personReducer from './personReducer';
import {UPDATE_PERSON} from '../actions/personActions';

describe('reducer', ()=>{
    const initialState = {name:'Sarthak',email:'sarthak@bitfumes.com'}
    it('should update a person name only',()=>{
        expect(
            personReducer(initialState,{
                type: UPDATE_PERSON,
                payload: 'bitfumes'
            })
        )
        .toEqual({name:'bitfumes',email:'sarthak@bitfumes.com'})
    })
})