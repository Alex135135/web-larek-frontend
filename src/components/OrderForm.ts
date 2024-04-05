import { IPaymentFormUI } from '../types';
import { IEvents } from './base/Events';
import { Form } from './common/Form';

export class OrderForm extends Form<IPaymentFormUI> {
	protected _card: HTMLButtonElement;
	protected _cash: HTMLButtonElement;
	protected _address: HTMLInputElement;

	constructor(
		protected blockName: string,
		container: HTMLFormElement,
		protected events: IEvents
	) {
		super(container, events);

		this._card = container.elements.namedItem('card') as HTMLButtonElement;
		this._cash = container.elements.namedItem('cash') as HTMLButtonElement;
		this._address = container.elements.namedItem('address') as HTMLInputElement;

		if (this._cash) {
			this._cash.addEventListener('click', () => {
				this.toggleClass(this._cash, 'button_alt-active', true);
				this.toggleClass(this._card, 'button_alt-active', false);
				this.onInputChange('payment', 'cash');
			});
		}
		if (this._card) {
			this._card.addEventListener('click', () => {
				this.toggleClass(this._cash, 'button_alt-active', false);
				this.toggleClass(this._card, 'button_alt-active', true);
				this.onInputChange('payment', 'card');
			});
		}
	}

	clear() {
		this.toggleClass(this._cash, 'button_alt-active', false);
		this.toggleClass(this._card, 'button_alt-active', false);
		this._address.value = '';
	}
}
