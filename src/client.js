import * as sapper from '@sapper/app';
import jQuery from 'jquery';
import * as popper from 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="js/cloudTag.js"></script> 
window.popper = popper;
sapper.start({
	target: document.querySelector('#sapper')
});