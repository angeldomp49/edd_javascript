import React, { useEffect, useState } from 'react'
import CreateProjectForm from '../CreateProjectForm';
import { Dispatcher } from '@makechtec/event_engine/dist/dispatcher/Dispatcher';
import { packagePrefix } from '../../events/packagePrefix';
import { ClearFormEvent } from '../../events/createProject/ClearFormEvent';
import { RefreshPageEvent } from '../../events/refresh/RefreshPageEvent';
import { SubmitCreateEvent } from '../../events/createProject/SubmitCreateEvent';


const CreateProjectPage = ({dispatcher}: {dispatcher: Dispatcher}) => {

    const internalDispatcher: Dispatcher = new Dispatcher();

    const submitCreateProjectFormEventId: string = packagePrefix + "submitCreateProjectFormEvent";

    internalDispatcher.addListener({
        eventId: packagePrefix + "submitEvent", 
        listener: (event: SubmitCreateEvent) => dispatcher.dispatch({...event, id: submitCreateProjectFormEventId}) 
    });

    useEffect(() => {

        const event: ClearFormEvent = {
            id: packagePrefix + "updateFormInputValues",
            projectName: "",
            exampleCode: ""
        };

        internalDispatcher.dispatch(event);

    },[]);

    dispatcher.addListener({
        eventId: packagePrefix + "refreshPageEvent",
        listener: (event: RefreshPageEvent) => {
            const updateFormValuesEvent: ClearFormEvent = {
                id: packagePrefix + "updateFormInputValues",
                projectName: "clean up!",
                exampleCode: "clean up!"
            };
    
            internalDispatcher.dispatch(updateFormValuesEvent);
        }
    });

    return (
        <div>
            <CreateProjectForm dispatcher={internalDispatcher} />
        </div>
    )
}

export default CreateProjectPage;