import { IContactsFormUI } from '../../types';
import { IEvents } from '../base/events';
import { Form } from './Form';

export class ContactsForm extends Form<IContactsFormUI> {
	protected _phoneNumber: HTMLInputElement;
	protected _email: HTMLInputElement;

	constructor(container: HTMLFormElement, events: IEvents) {
		super(container, events);

		this._phoneNumber = container.elements.namedItem(
			'phone'
		) as HTMLInputElement;
		this._email = container.elements.namedItem('email') as HTMLInputElement;
	}

	clear() {
		this._phoneNumber.value = '';
		this._email.value = '';
	}
}
