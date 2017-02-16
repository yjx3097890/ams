/**
 * Created by apple on 16/5/14.
 */
// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import * as core from '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/forms';

// RxJS
import './rxjs-extensions';
// Other vendors for example jQuery, Lodash or Bootstrap
// You can import js, ts, css, sass, ...
import "../public/css/styles.css";


if (process.env.ENV === 'production') {
    // Production
    core.enableProdMode();

}