import * as ActionType from './ActionType';
import LeadApi from '../api/LeadApi';
import { ApiCallBeginAction, ApiCallErrorAction } from './ApiAction';



export const getCoursesResponse = LeadData => ({
    type: ActionType.GET_LEADS_RESPONSE,
    LeadData
});



export function getLeadAction() {
    return (dispatch) => {

        dispatch(ApiCallBeginAction());

        return LeadApi.getAllLead()
            .then(LeadData => {
                dispatch(getCoursesResponse(LeadData));
            }).catch(error => {
                throw error;
            });
    };
}



export const addNewCourseResponse = () => ({
    type: ActionType.ADD_NEW_COURSE_RESPONSE
});



export const updateExistingLeadResponse = () => ({
    type: ActionType.UPDATE_EXISTING_LEAD_RESPONSE
});



export function saveLeadAction(courseBeingAddedOrEdited) {
    return function (dispatch) {

        dispatch(ApiCallBeginAction());

        //if authorId exists, it means that the course is being edited, therefore update it.
        //if authorId doesn't exist, it must therefore be new course that is being added, therefore add it
        return LeadApi.saveLead(courseBeingAddedOrEdited)
            .then(() => {
            
                    dispatch(updateExistingLeadResponse());
                
            }).then(() => {
                dispatch(getLeadAction());
            }).catch(error => {
                dispatch(ApiCallErrorAction());
                throw (error);
            });
    };
}



export const getCourseResponse = courseFound => ({
    type: ActionType.GET_COURSE_RESPONSE,
    course: courseFound
});



export function getLeadsAction(courseId) {
    return (dispatch) => {

        dispatch(ApiCallBeginAction());

        return LeadApi.getLead(courseId)
            .then(course => {
                dispatch(getCourseResponse(course));
            }).catch(error => {
                throw error;
            });
    };
}



export const deleteCourseResponse = () => ({
    type: ActionType.DELETE_COURSE_RESPONSE
});



export function deleteCourseAction(courseId) {
    return (dispatch) => {

        dispatch(ApiCallBeginAction());

        return LeadApi.deleteCourse(courseId)
            .then(() => {
                dispatch(deleteCourseResponse());
            }).then(() => {
                dispatch(getLeadAction());
            }).catch(error => {
                throw error;
            });
    };
}