#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const cdk = require("@aws-cdk/core");
const nightynight_stack_1 = require("../lib/nightynight-stack");
const app = new cdk.App();
new nightynight_stack_1.NightynightStack(app, 'NightynightStack', {});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmlnaHR5bmlnaHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuaWdodHluaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx1Q0FBcUM7QUFDckMscUNBQXFDO0FBQ3JDLGdFQUE0RDtBQUU1RCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMxQixJQUFJLG9DQUFnQixDQUFDLEdBQUcsRUFBRSxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcbmltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbmltcG9ydCB7IE5pZ2h0eW5pZ2h0U3RhY2sgfSBmcm9tICcuLi9saWIvbmlnaHR5bmlnaHQtc3RhY2snO1xuXG5jb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xubmV3IE5pZ2h0eW5pZ2h0U3RhY2soYXBwLCAnTmlnaHR5bmlnaHRTdGFjaycsIHt9KTtcbiJdfQ==