import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
// here we import all but you can choose only plugins that you want
// foundation-sites/js (foundation.core.js is needed and maybe some other tools)
import 'foundation-sites/dist/foundation.js';


Template.accordion.onRendered(function () {
    this.accordion = new Foundation.Accordion($('.accordion'));
});

Template.accordion.onDestroyed(function () {
    if (this.accordion) {
        this.accordion.destroy();
    }
});

Template.offcanvas.onRendered(function () {
    this.offcanvas = new Foundation.OffCanvas($('#offCanvas'));
});

Template.offcanvas.onDestroyed(function () {
    if (this.offcanvas) {
        this.offcanvas.destroy();
    }
});