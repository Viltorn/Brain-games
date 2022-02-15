#!/usr/bin/env node
import { playCalcGame, calcDescription } from '../games/calc.js';
import gameChain from '../src/index.js';

gameChain(playCalcGame, calcDescription);
