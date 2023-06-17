
import React, { useState } from 'react'
import { ClearFormEvent } from '../events/createProject/ClearFormEvent';
import { packagePrefix } from '../events/packagePrefix';
import { Dispatcher } from '@makechtec/event_engine/dist/dispatcher/Dispatcher';
import { SubmitCreateEvent } from '../events/createProject/SubmitCreateEvent';


const CreateProjectForm = ({ dispatcher, formId }: { dispatcher: Dispatcher, formId: number }): React.JSX.Element => {


	const [projectName, setProjectName] = useState("");
	const [exampleCode, setExampleCode] = useState("");

	dispatcher.addListener({
		eventId: packagePrefix + "updateFormInputValues", 
		listener: (event: ClearFormEvent) => {

			if(event.formId === formId) {
				setProjectName(event.projectName);
				setExampleCode(event.exampleCode);
			}

		}
	});

	const handleSubmit = () => {

		const submitEvent: SubmitCreateEvent = {
			id: packagePrefix +"submitEvent",
			projectName: projectName,
			exampleCode: exampleCode
		};

		dispatcher.dispatch(submitEvent);
	};

	return (
		<div>
			<form>
				<input
					type="text"
					placeholder='projectName'
					value={projectName}
					onChange={e => setProjectName(e.target.value)} />
				<textarea
					placeholder='exampleCode'
					value={exampleCode}
					onChange={e => setExampleCode(e.target.value)} />
				<button
					type="button"
					onClick={e => handleSubmit()}
				>Submit</button>
			</form>
		</div>
	)
}

export default CreateProjectForm;