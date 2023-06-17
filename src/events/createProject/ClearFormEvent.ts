import { PureEvent } from "@makechtec/event_engine/dist/event/PureEvent";

export type ClearFormEvent = PureEvent & {
    projectName: string;
    exampleCode: string;
};