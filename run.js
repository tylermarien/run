#!/usr/bin/env node

/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

var process = require('child_process');

var result = process.spawnSync('git', ['--version']);
console.log(result);
console.log(result.stdout.toString());
