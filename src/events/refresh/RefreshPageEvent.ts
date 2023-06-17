import { PureEvent } from "@makechtec/event_engine/dist/event/PureEvent";

export type RefreshPageEvent = PureEvent & {
    buttonId: string;
};