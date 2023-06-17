import { Dispatcher } from "@makechtec/event_engine/dist/dispatcher/Dispatcher";

export type CreateProjectFormCreator = ({dispatcher, formId}:{dispatcher: Dispatcher, formId: number}) => React.JSX.Element;