import { PureEvent } from "@makechtec/event_engine/dist/event/PureEvent";

export type ClearFormEvent = PureEvent & {
    formId: number;
    projectName: string;
    exampleCode: string;
};