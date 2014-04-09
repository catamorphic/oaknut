import lex = require('Lexer');
import opt = require('Options');

export class Parser {

  version: string = "0.5.1";
  options: opt.Options = opt.defaults;
  sourceFile: string;
  directSourceFile: string;

  constructor(options: opt.Options) {
    this.options = options;
  }
}