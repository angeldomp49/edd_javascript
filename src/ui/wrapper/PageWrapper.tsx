import { Dispatcher } from '@makechtec/event_engine/dist/dispatcher/Dispatcher';
import React from 'react'
import { SubmitCreateEvent } from '../../events/createProject/SubmitCreateEvent';
import { packagePrefix } from '../../events/packagePrefix';
import RefreshButton from '../refresh/RefreshButton';
import CreateProjectPage from '../pages/CreateProjectPage';


const PageWrapper = ({}: {}) => {

    const globalDispatcher: Dispatcher = new Dispatcher();

    globalDispatcher.addListener({
        eventId: packagePrefix + "submitCreateProjectFormEvent",
        listener: (event: SubmitCreateEvent) => {
            console.log(event.projectName);
        }
    });

    return (
        <div>
            <RefreshButton dispatcher={globalDispatcher} />
            <CreateProjectPage dispatcher={globalDispatcher} />
        </div>
    )
}

export default PageWrapper;