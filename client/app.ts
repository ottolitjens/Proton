/// <reference path="../typings/angular2-meteor.d.ts" />

import {Component, View} from 'angular2/angular2';
import {bootstrap} from 'angular2-meteor';

@Component({
	selector: 'app'
})
@View({
	templateUrl:'client/mainMenu/mainMenu.html'
})
class app {};
//ss
bootstrap(app)