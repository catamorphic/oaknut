import options = require('Options');

export class Lexer {

  tokCurLine: number = 1;
  tokPos: number = 0;
  tokLineStart: number = 0;
  tokRegexpAllowed: boolean = true;

  private static    _num = {type: "num"};
  private static _regexp = {type: "regexp"};
  private static _string = {type: "string"};
  private static   _name = {type: "name"};
  private static    _eof = {type: "eof"};

  private static _break = {keyword: "break"};
  private static _case = {keyword: "case", beforeExpr: true};
  private static _catch = {keyword: "catch"};
  private static _continue = {keyword: "continue"};
  private static _debugger = {keyword: "debugger"};
  private static _default = {keyword: "default"};
  private static _do = {keyword: "do", isLoop: true};
  private static _else = {keyword: "else", beforeExpr: true};
  private static _finally = {keyword: "finally"};
  private static _for = {keyword: "for", isLoop: true};
  private static _function = {keyword: "function"};
  private static _if = {keyword: "if"};
  private static _return = {keyword: "return", beforeExpr: true};
  private static _switch = {keyword: "switch"};
  private static _throw = {keyword: "throw", beforeExpr: true};
  private static _try = {keyword: "try"};
  private static _var = {keyword: "var"};
  private static _while = {keyword: "while", isLoop: true};
  private static _with = {keyword: "with"};
  private static _new = {keyword: "new", beforeExpr: true};
  private static _this = {keyword: "this"};

  private static _null = {keyword: "null", atomValue: null};
  private static _true = {keyword: "true", atomValue: true};
  private static _false = {keyword: "false", atomValue: false};

  private static _in = {keyword: "in", binop: 7, beforeExpr: true};

  private static keywordTypes = {"break": Lexer._break
                               , "case": Lexer._case
                               , "catch": Lexer._catch
                               , "continue": Lexer._continue
                               , "debugger": Lexer._debugger
                               , "default": Lexer._default
                               , "do": Lexer._do
                               , "else": Lexer._else
                               , "finally": Lexer._finally
                               , "for": Lexer._for
                               , "function": Lexer._function
                               , "if": Lexer._if
                               , "return": Lexer._return
                               , "switch": Lexer._switch
                               , "throw": Lexer._throw
                               , "try": Lexer._try
                               , "var": Lexer._var
                               , "while": Lexer._while
                               , "with": Lexer._with
                               , "null": Lexer._null
                               , "true": Lexer._true
                               , "false": Lexer._false
                               , "new": Lexer._new
                               , "in": Lexer._in
                               , "instanceof": {keyword: "instanceof", binop: 7, beforeExpr: true}
                               , "this": Lexer._this
                               , "typeof": {keyword: "typeof", prefix: true, beforeExpr: true}
                               , "void": {keyword: "void", prefix: true, beforeExpr: true}
                               , "delete": {keyword: "delete", prefix: true, beforeExpr: true}};

  private static _bracketL = {type: "[", beforeExpr: true};
  private static _bracketR = {type: "]"};
  private static _braceL = {type: "{", beforeExpr: true};
  private static _braceR = {type: "}"};
  private static _parenL = {type: "(", beforeExpr: true};
  private static _parenR = {type: ")"};
  private static _comma = {type: ",", beforeExpr: true};
  private static _semi = {type: ";", beforeExpr: true};
  private static _colon = {type: ":", beforeExpr: true};
  private static _dot = {type: "."};
  private static _question = {type: "?", beforeExpr: true};

  private static _slash = {binop: 10, beforeExpr: true};
  private static _eq = {isAssign: true, beforeExpr: true};
  private static _assign = {isAssign: true, beforeExpr: true};
  private static _incDec = {postfix: true, prefix: true, isUpdate: true};
  private static _prefix = {prefix: true, beforeExpr: true};
  private static _logicalOR = {binop: 1, beforeExpr: true};
  private static _logicalAND = {binop: 2, beforeExpr: true};
  private static _bitwiseOR = {binop: 3, beforeExpr: true};
  private static _bitwiseXOR = {binop: 4, beforeExpr: true};
  private static _bitwiseAND = {binop: 5, beforeExpr: true};
  private static _equality = {binop: 6, beforeExpr: true};
  private static _relational = {binop: 7, beforeExpr: true};
  private static _bitShift = {binop: 8, beforeExpr: true};
  private static _plusMin = {binop: 9, prefix: true, beforeExpr: true};
  private static _multiplyModulo = {binop: 10, beforeExpr: true};

  tokTypes = {bracketL: Lexer._bracketL
            , bracketR: Lexer._bracketR
            , braceL: Lexer._braceL
            , braceR: Lexer._braceR
            , parenL: Lexer._parenL
            , parenR: Lexer._parenR
            , comma: Lexer._comma
            , semi: Lexer._semi
            , colon: Lexer._colon
            , dot: Lexer._dot
            , question: Lexer._question
            , slash: Lexer._slash
            , eq: Lexer._eq
            , name: Lexer._name
            , eof: Lexer._eof
            , num: Lexer._num
            , regexp: Lexer._regexp
            , string: Lexer._string};
}
