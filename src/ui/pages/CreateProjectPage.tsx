import React, { useEffect } from 'react'
import { Dispatcher } from '@makechtec/event_engine/dist/dispatcher/Dispatcher';
import { packagePrefix } from '../../events/packagePrefix';
import { ClearFormEvent } from '../../events/createProject/ClearFormEvent';
import { RefreshPageEvent } from '../../events/refresh/RefreshPageEvent';
import { SubmitCreateEvent } from '../../events/createProject/SubmitCreateEvent';
import { CreateProjectFormCreator } from '../../creators/CreateProjectFormCreator';


const CreateProjectPage = ({dispatcher, createProjectFormCreator}: {dispatcher: Dispatcher, createProjectFormCreator: CreateProjectFormCreator}) => {

    const internalDispatcher: Dispatcher = new Dispatcher();

    const submitCreateProjectFormEventId: string = packagePrefix + "submitCreateProjectFormEvent";

    const createProjectFormId: number = 100;
    const createProjectFormId2: number = 200;

    const form1 = createProjectFormCreator({dispatcher: internalDispatcher, formId: createProjectFormId});
    const form2 = createProjectFormCreator({dispatcher: internalDispatcher, formId: createProjectFormId2});

    internalDispatcher.addListener({
        eventId: packagePrefix + "submitEvent", 
        listener: (event: SubmitCreateEvent) => dispatcher.dispatch({...event, id: submitCreateProjectFormEventId}) 
    });

    useEffect(() => {

        const event: ClearFormEvent = {
            id: packagePrefix + "updateFormInputValues",
            formId: createProjectFormId,
            projectName: "",
            exampleCode: ""
        };

        internalDispatcher.dispatch(event);

        const event2: ClearFormEvent = {
            id: packagePrefix + "updateFormInputValues",
            formId: createProjectFormId2,
            projectName: "",
            exampleCode: ""
        };

        internalDispatcher.dispatch(event2);

    },[]);

    dispatcher.addListener({
        eventId: packagePrefix + "refreshPageEvent",
        listener: (event: RefreshPageEvent) => {
            const updateFormValuesEvent: ClearFormEvent = {
                id: packagePrefix + "updateFormInputValues",
                formId: createProjectFormId,
                projectName: "clean up!",
                exampleCode: "clean up!"
            };
    
            internalDispatcher.dispatch(updateFormValuesEvent);
        }
    });

    return (
        <div>
            {form1}
            {form2}
        </div>
    )
}

export default CreateProjectPage;