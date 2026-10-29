import { LightningElement,track,api } from 'lwc';

export default class Test extends LightningElement {

    @track boolean;
    @api test;
}