import expect from 'expect';
import { createStore } from 'redux';
import initialState from '../reducers/initialState';
import rootReducer from '../reducers';
import * as courseActions from '../actions/courseActions';

describe('Store', () => {
    it('should handle creating courses', () => {
        // arrange
        const store = createStore(rootReducer, initialState);
        const course = {
            title: 'Clean Code'
        };

        // act
        const action = courseActions.createCourseSuccess(course);
        store.dispatch(action);

        // assert
        const actual = store.getState().courses[0];
        expect(actual).toEqual(course);
    });
});
