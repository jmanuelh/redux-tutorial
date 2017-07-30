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
        const actual = store.getState().corses[0];
        expect(actual.length).toBe(1);
        expect(actual).toBe(course);
    });
});
