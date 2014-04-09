import ast = require('AST');

export interface Options {
  ecmaVersion: number;
  strictSemicolons: boolean;
  allowTrailingCommas: boolean;
  forbidReserved: boolean;
  allowReturnOutsideFunction: boolean;
  locations: boolean;
  onComment?: (block: boolean, text: string, start: number, end: number, startLoc?: ast.Location, endLoc?: ast.Location)=>void;
  ranges: boolean;
}

export var defaults: Options = {
  ecmaVersion : 5,
  strictSemicolons : false,
  allowTrailingCommas : true,
  forbidReserved : false,
  allowReturnOutsideFunction : false,
  locations : false,
  ranges : false,
}