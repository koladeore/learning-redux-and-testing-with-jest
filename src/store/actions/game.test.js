import updated_game,{UPDATE_GAME} from './gameActions';

describe('action', ()=>{
    it('should return the action game', ()=>{
        const expectedAction = {
            type: UPDATE_GAME,
            payload: 'Cricket'
        }
        expect(updated_game).toEqual(expectedAction)
    })   
})