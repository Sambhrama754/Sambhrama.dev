import * as sapper from '@sapper/app';
import jQuery from 'jquery';
import * as popper from 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

window.popper = popper;
sapper.start({
	target: document.querySelector('#sapper')
});
