// Generated from IonText.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by IonTextParser.
function IonTextListener() {
	this.symbols = {};
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

IonTextListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
IonTextListener.prototype.constructor = IonTextListener;

// Enter a parse tree produced by IonTextParser#top_level.
IonTextListener.prototype.enterTop_level = function(ctx) {
};

// Exit a parse tree produced by IonTextParser#top_level.
IonTextListener.prototype.exitTop_level = function(ctx) {
};


// Enter a parse tree produced by IonTextParser#top_level_value.
IonTextListener.prototype.enterTop_level_value = function(ctx) {
};

// Exit a parse tree produced by IonTextParser#top_level_value.
IonTextListener.prototype.exitTop_level_value = function(ctx) {
};


// Enter a parse tree produced by IonTextParser#value.
IonTextListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by IonTextParser#value.
IonTextListener.prototype.exitValue = function(ctx) {
};


// Enter a parse tree produced by IonTextParser#entity.
IonTextListener.prototype.enterEntity = function(ctx) {
};

// Exit a parse tree produced by IonTextParser#entity.
IonTextListener.prototype.exitEntity = function(ctx) {
};


// Enter a parse tree produced by IonTextParser#delimiting_entity.
IonTextListener.prototype.enterDelimiting_entity = function(ctx) {
};

// Exit a parse tree produced by IonTextParser#delimiting_entity.
IonTextListener.prototype.exitDelimiting_entity = function(ctx) {
};


// Enter a parse tree produced by IonTextParser#keyword_delimiting_entity.
IonTextListener.prototype.enterKeyword_delimiting_entity = function(ctx) {
};

// Exit a parse tree produced by IonTextParser#keyword_delimiting_entity.
IonTextListener.prototype.exitKeyword_delimiting_entity = function(ctx) {
};


// Enter a parse tree produced by IonTextParser#keyword_entity.
IonTextListener.prototype.enterKeyword_entity = function(ctx) {
};

// Exit a parse tree produced by IonTextParser#keyword_entity.
IonTextListener.prototype.exitKeyword_entity = function(ctx) {
	this.symbols[ctx.getText()] = 1;
};


// Enter a parse tree produced by IonTextParser#numeric_entity.
IonTextListener.prototype.enterNumeric_entity = function(ctx) {
};

// Exit a parse tree produced by IonTextParser#numeric_entity.
IonTextListener.prototype.exitNumeric_entity = function(ctx) {
};


// Enter a parse tree produced by IonTextParser#annotation.
IonTextListener.prototype.enterAnnotation = function(ctx) {
};

// Exit a parse tree produced by IonTextParser#annotation.
IonTextListener.prototype.exitAnnotation = function(ctx) {
};


// Enter a parse tree produced by IonTextParser#quoted_annotation.
IonTextListener.prototype.enterQuoted_annotation = function(ctx) {
};

// Exit a parse tree produced by IonTextParser#quoted_annotation.
IonTextListener.prototype.exitQuoted_annotation = function(ctx) {
};


// Enter a parse tree produced by IonTextParser#list.
IonTextListener.prototype.enterList = function(ctx) {
};

// Exit a parse tree produced by IonTextParser#list.
IonTextListener.prototype.exitList = function(ctx) {
};


// Enter a parse tree produced by IonTextParser#sexp.
IonTextListener.prototype.enterSexp = function(ctx) {
};

// Exit a parse tree produced by IonTextParser#sexp.
IonTextListener.prototype.exitSexp = function(ctx) {
};


// Enter a parse tree produced by IonTextParser#sexp_value.
IonTextListener.prototype.enterSexp_value = function(ctx) {
};

// Exit a parse tree produced by IonTextParser#sexp_value.
IonTextListener.prototype.exitSexp_value = function(ctx) {
};


// Enter a parse tree produced by IonTextParser#sexp_delimiting_entity.
IonTextListener.prototype.enterSexp_delimiting_entity = function(ctx) {
};

// Exit a parse tree produced by IonTextParser#sexp_delimiting_entity.
IonTextListener.prototype.exitSexp_delimiting_entity = function(ctx) {
};


// Enter a parse tree produced by IonTextParser#sexp_keyword_delimiting_entity.
IonTextListener.prototype.enterSexp_keyword_delimiting_entity = function(ctx) {
};

// Exit a parse tree produced by IonTextParser#sexp_keyword_delimiting_entity.
IonTextListener.prototype.exitSexp_keyword_delimiting_entity = function(ctx) {
};


// Enter a parse tree produced by IonTextParser#sexp_null_delimiting_entity.
IonTextListener.prototype.enterSexp_null_delimiting_entity = function(ctx) {
};

// Exit a parse tree produced by IonTextParser#sexp_null_delimiting_entity.
IonTextListener.prototype.exitSexp_null_delimiting_entity = function(ctx) {
};


// Enter a parse tree produced by IonTextParser#sexp_keyword_entity.
IonTextListener.prototype.enterSexp_keyword_entity = function(ctx) {
};

// Exit a parse tree produced by IonTextParser#sexp_keyword_entity.
IonTextListener.prototype.exitSexp_keyword_entity = function(ctx) {
};


// Enter a parse tree produced by IonTextParser#operator.
IonTextListener.prototype.enterOperator = function(ctx) {
};

// Exit a parse tree produced by IonTextParser#operator.
IonTextListener.prototype.exitOperator = function(ctx) {
};


// Enter a parse tree produced by IonTextParser#struct.
IonTextListener.prototype.enterStruct = function(ctx) {
};

// Exit a parse tree produced by IonTextParser#struct.
IonTextListener.prototype.exitStruct = function(ctx) {
};


// Enter a parse tree produced by IonTextParser#field.
IonTextListener.prototype.enterField = function(ctx) {
};

// Exit a parse tree produced by IonTextParser#field.
IonTextListener.prototype.exitField = function(ctx) {
};


// Enter a parse tree produced by IonTextParser#any_null.
IonTextListener.prototype.enterAny_null = function(ctx) {
};

// Exit a parse tree produced by IonTextParser#any_null.
IonTextListener.prototype.exitAny_null = function(ctx) {
};


// Enter a parse tree produced by IonTextParser#typed_null.
IonTextListener.prototype.enterTyped_null = function(ctx) {
};

// Exit a parse tree produced by IonTextParser#typed_null.
IonTextListener.prototype.exitTyped_null = function(ctx) {
};


// Enter a parse tree produced by IonTextParser#field_name.
IonTextListener.prototype.enterField_name = function(ctx) {
};

// Exit a parse tree produced by IonTextParser#field_name.
IonTextListener.prototype.exitField_name = function(ctx) {
};


// Enter a parse tree produced by IonTextParser#quoted_text.
IonTextListener.prototype.enterQuoted_text = function(ctx) {
};

// Exit a parse tree produced by IonTextParser#quoted_text.
IonTextListener.prototype.exitQuoted_text = function(ctx) {
};

// Enter a parse tree produced by IonTextParser#symbol.
IonTextListener.prototype.enterSymbol = function(ctx) {
};

// Exit a parse tree produced by IonTextParser#symbol.
IonTextListener.prototype.exitSymbol = function(ctx) {
	this.symbols[ctx.getText()] = 1;
};


// Enter a parse tree produced by IonTextParser#ws.
IonTextListener.prototype.enterWs = function(ctx) {
};

// Exit a parse tree produced by IonTextParser#ws.
IonTextListener.prototype.exitWs = function(ctx) {
};



exports.IonTextListener = IonTextListener;