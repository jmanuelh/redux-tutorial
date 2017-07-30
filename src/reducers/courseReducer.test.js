import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course Reducer', () => {
    it('should add course when passed CREATE_COURSE_SUCCESS', () => {
        // arrange
        const initialState = [
            {title: 'A'},
            {title: 'B'}
        ];

        const newCourse = {title: 'C'};
        const action = actions.createCourseSuccess(newCourse);

        // act
        const newState = courseReducer(initialState, action);

        expect(newState.length).toEqual(3);
        expect(newState[0].title).toEqual('A');
        expect(newState[1].title).toEqual('B');
        expect(newState[2].title).toEqual('C');
    });

    it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
        // arrange
        const initialState = [
            {id: 'A', title: 'A'},
            {id: 'B', title: 'B'},
            {id: 'C', title: 'C'}
        ];

        const newCourse = {id: 'A', title: 'NewTitle'};
        const action = actions.updateCourseSuccess(newCourse);

        // act
        const newState = courseReducer(initialState, action);
        const updatedCourse = newState.find(course => course.id === 'A');
        const untouchedCourse = newState.find(course => course.id === 'B');

        // assert
        expect(updatedCourse.title).toBe('NewTitle');
        expect(untouchedCourse.title).toBe('B');
        expect(newState.length).toBe(3);
    });
});
