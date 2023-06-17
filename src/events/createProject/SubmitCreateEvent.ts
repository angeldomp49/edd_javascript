import { PureEvent } from "@makechtec/event_engine/dist/event/PureEvent";

export type SubmitCreateEvent = PureEvent & {
    projectName: string;
    exampleCode: string;
};