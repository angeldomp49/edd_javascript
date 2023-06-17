import React from 'react'
import { Dispatcher } from '@makechtec/event_engine/dist/dispatcher/Dispatcher';
import { RefreshPageEvent } from '../../events/refresh/RefreshPageEvent';
import { packagePrefix } from '../../events/packagePrefix';

const RefreshButton = ({dispatcher}: {dispatcher: Dispatcher}) => {

    const handleRefresh = (e: any) => {
        const event: RefreshPageEvent = {
            id: packagePrefix + "refreshPageEvent",
            buttonId: "1"
        };
        dispatcher.dispatch(event);
    };

    return (
        <div>
            <button 
                type="button"
                onClick={e => handleRefresh(e)}>refresh</button>
        </div>
    )
}

export default RefreshButton;