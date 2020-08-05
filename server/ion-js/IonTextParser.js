// Generated from IonText.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var IonTextListener = require('./IonTextListener').IonTextListener;
var grammarFileName = "IonText.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003 \u01b7\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0003\u0002\u0007\u00028\n\u0002\f\u0002\u000e\u0002;\u000b\u0002",
    "\u0003\u0002\u0007\u0002>\n\u0002\f\u0002\u000e\u0002A\u000b\u0002\u0003",
    "\u0002\u0007\u0002D\n\u0002\f\u0002\u000e\u0002G\u000b\u0002\u0003\u0002",
    "\u0005\u0002J\n\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0006\u0003",
    "O\n\u0003\r\u0003\u000e\u0003P\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003j\n\u0003\u0003\u0004\u0007\u0004m\n\u0004",
    "\f\u0004\u000e\u0004p\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0005\u0005w\n\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006",
    "\u0080\n\u0006\u0003\u0007\u0003\u0007\u0005\u0007\u0084\n\u0007\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u008b\n\b\u0003\t\u0003\t",
    "\u0003\n\u0003\n\u0007\n\u0091\n\n\f\n\u000e\n\u0094\u000b\n\u0003\n",
    "\u0003\n\u0003\n\u0007\n\u0099\n\n\f\n\u000e\n\u009c\u000b\n\u0003\u000b",
    "\u0003\u000b\u0007\u000b\u00a0\n\u000b\f\u000b\u000e\u000b\u00a3\u000b",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u00a8\n\u000b",
    "\f\u000b\u000e\u000b\u00ab\u000b\u000b\u0003\f\u0003\f\u0007\f\u00af",
    "\n\f\f\f\u000e\f\u00b2\u000b\f\u0003\f\u0003\f\u0007\f\u00b6\n\f\f\f",
    "\u000e\f\u00b9\u000b\f\u0003\f\u0003\f\u0007\f\u00bd\n\f\f\f\u000e\f",
    "\u00c0\u000b\f\u0003\f\u0007\f\u00c3\n\f\f\f\u000e\f\u00c6\u000b\f\u0003",
    "\f\u0007\f\u00c9\n\f\f\f\u000e\f\u00cc\u000b\f\u0003\f\u0003\f\u0007",
    "\f\u00d0\n\f\f\f\u000e\f\u00d3\u000b\f\u0005\f\u00d5\n\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0007\f\u00db\n\f\f\f\u000e\f\u00de\u000b\f\u0003",
    "\f\u0005\f\u00e1\n\f\u0003\r\u0003\r\u0007\r\u00e5\n\r\f\r\u000e\r\u00e8",
    "\u000b\r\u0003\r\u0007\r\u00eb\n\r\f\r\u000e\r\u00ee\u000b\r\u0003\r",
    "\u0007\r\u00f1\n\r\f\r\u000e\r\u00f4\u000b\r\u0003\r\u0005\r\u00f7\n",
    "\r\u0003\r\u0003\r\u0003\u000e\u0006\u000e\u00fc\n\u000e\r\u000e\u000e",
    "\u000e\u00fd\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u0120\n\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u0127",
    "\n\u0010\u0003\u0011\u0003\u0011\u0006\u0011\u012b\n\u0011\r\u0011\u000e",
    "\u0011\u012c\u0005\u0011\u012f\n\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u0136\n\u0012\u0003\u0013",
    "\u0006\u0013\u0139\n\u0013\r\u0013\u000e\u0013\u013a\u0003\u0014\u0003",
    "\u0014\u0007\u0014\u013f\n\u0014\f\u0014\u000e\u0014\u0142\u000b\u0014",
    "\u0003\u0014\u0003\u0014\u0007\u0014\u0146\n\u0014\f\u0014\u000e\u0014",
    "\u0149\u000b\u0014\u0003\u0014\u0003\u0014\u0007\u0014\u014d\n\u0014",
    "\f\u0014\u000e\u0014\u0150\u000b\u0014\u0003\u0014\u0007\u0014\u0153",
    "\n\u0014\f\u0014\u000e\u0014\u0156\u000b\u0014\u0003\u0014\u0007\u0014",
    "\u0159\n\u0014\f\u0014\u000e\u0014\u015c\u000b\u0014\u0003\u0014\u0003",
    "\u0014\u0007\u0014\u0160\n\u0014\f\u0014\u000e\u0014\u0163\u000b\u0014",
    "\u0005\u0014\u0165\n\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0007\u0014\u016b\n\u0014\f\u0014\u000e\u0014\u016e\u000b\u0014",
    "\u0003\u0014\u0005\u0014\u0171\n\u0014\u0003\u0015\u0003\u0015\u0007",
    "\u0015\u0175\n\u0015\f\u0015\u000e\u0015\u0178\u000b\u0015\u0003\u0015",
    "\u0003\u0015\u0007\u0015\u017c\n\u0015\f\u0015\u000e\u0015\u017f\u000b",
    "\u0015\u0003\u0015\u0007\u0015\u0182\n\u0015\f\u0015\u000e\u0015\u0185",
    "\u000b\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0005\u0016",
    "\u018b\n\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0005\u0017\u0193\n\u0017\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0007\u0018\u0198\n\u0018\f\u0018\u000e\u0018\u019b\u000b",
    "\u0018\u0003\u0018\u0006\u0018\u019e\n\u0018\r\u0018\u000e\u0018\u019f",
    "\u0005\u0018\u01a2\n\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0007",
    "\u0019\u01a7\n\u0019\f\u0019\u000e\u0019\u01aa\u000b\u0019\u0003\u0019",
    "\u0006\u0019\u01ad\n\u0019\r\u0019\u000e\u0019\u01ae\u0005\u0019\u01b1",
    "\n\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0002\u0002\u001c\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u001c\u001e \"$&(*,.024\u0002\u0006\u0004\u0002\u0013\u0016",
    "\u0018\u0019\u0003\u0002\u000b\f\u0004\u0002\u0011\u0011\u001a\u001b",
    "\u0003\u0002\r\u000f\u0002\u01f2\u0002?\u0003\u0002\u0002\u0002\u0004",
    "i\u0003\u0002\u0002\u0002\u0006n\u0003\u0002\u0002\u0002\bv\u0003\u0002",
    "\u0002\u0002\n\u007f\u0003\u0002\u0002\u0002\f\u0083\u0003\u0002\u0002",
    "\u0002\u000e\u008a\u0003\u0002\u0002\u0002\u0010\u008c\u0003\u0002\u0002",
    "\u0002\u0012\u008e\u0003\u0002\u0002\u0002\u0014\u009d\u0003\u0002\u0002",
    "\u0002\u0016\u00e0\u0003\u0002\u0002\u0002\u0018\u00e2\u0003\u0002\u0002",
    "\u0002\u001a\u011f\u0003\u0002\u0002\u0002\u001c\u0121\u0003\u0002\u0002",
    "\u0002\u001e\u0126\u0003\u0002\u0002\u0002 \u012e\u0003\u0002\u0002",
    "\u0002\"\u0135\u0003\u0002\u0002\u0002$\u0138\u0003\u0002\u0002\u0002",
    "&\u0170\u0003\u0002\u0002\u0002(\u0172\u0003\u0002\u0002\u0002*\u018a",
    "\u0003\u0002\u0002\u0002,\u0192\u0003\u0002\u0002\u0002.\u01a1\u0003",
    "\u0002\u0002\u00020\u01b0\u0003\u0002\u0002\u00022\u01b2\u0003\u0002",
    "\u0002\u00024\u01b4\u0003\u0002\u0002\u000268\u00054\u001b\u000276\u0003",
    "\u0002\u0002\u00028;\u0003\u0002\u0002\u000297\u0003\u0002\u0002\u0002",
    "9:\u0003\u0002\u0002\u0002:<\u0003\u0002\u0002\u0002;9\u0003\u0002\u0002",
    "\u0002<>\u0005\u0004\u0003\u0002=9\u0003\u0002\u0002\u0002>A\u0003\u0002",
    "\u0002\u0002?=\u0003\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002@E\u0003",
    "\u0002\u0002\u0002A?\u0003\u0002\u0002\u0002BD\u00054\u001b\u0002CB",
    "\u0003\u0002\u0002\u0002DG\u0003\u0002\u0002\u0002EC\u0003\u0002\u0002",
    "\u0002EF\u0003\u0002\u0002\u0002FI\u0003\u0002\u0002\u0002GE\u0003\u0002",
    "\u0002\u0002HJ\u0005\u0006\u0004\u0002IH\u0003\u0002\u0002\u0002IJ\u0003",
    "\u0002\u0002\u0002JK\u0003\u0002\u0002\u0002KL\u0007\u0002\u0002\u0003",
    "L\u0003\u0003\u0002\u0002\u0002MO\u0005\u0012\n\u0002NM\u0003\u0002",
    "\u0002\u0002OP\u0003\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002PQ\u0003",
    "\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002RS\u0005\u0004\u0003\u0002",
    "Sj\u0003\u0002\u0002\u0002Tj\u0005\n\u0006\u0002UV\u0005\u0010\t\u0002",
    "VW\u00054\u001b\u0002Wj\u0003\u0002\u0002\u0002XY\u0005\u0010\t\u0002",
    "YZ\u0005\u0014\u000b\u0002Z[\u0005\u0006\u0004\u0002[j\u0003\u0002\u0002",
    "\u0002\\]\u0005\u0010\t\u0002]^\u0005\n\u0006\u0002^j\u0003\u0002\u0002",
    "\u0002_`\u0005\u000e\b\u0002`a\u00054\u001b\u0002aj\u0003\u0002\u0002",
    "\u0002bc\u0005\u000e\b\u0002cd\u0005\u0014\u000b\u0002de\u0005\u0006",
    "\u0004\u0002ej\u0003\u0002\u0002\u0002fg\u0005\u000e\b\u0002gh\u0005",
    "\f\u0007\u0002hj\u0003\u0002\u0002\u0002iN\u0003\u0002\u0002\u0002i",
    "T\u0003\u0002\u0002\u0002iU\u0003\u0002\u0002\u0002iX\u0003\u0002\u0002",
    "\u0002i\\\u0003\u0002\u0002\u0002i_\u0003\u0002\u0002\u0002ib\u0003",
    "\u0002\u0002\u0002if\u0003\u0002\u0002\u0002j\u0005\u0003\u0002\u0002",
    "\u0002km\u0005\u0012\n\u0002lk\u0003\u0002\u0002\u0002mp\u0003\u0002",
    "\u0002\u0002nl\u0003\u0002\u0002\u0002no\u0003\u0002\u0002\u0002oq\u0003",
    "\u0002\u0002\u0002pn\u0003\u0002\u0002\u0002qr\u0005\b\u0005\u0002r",
    "\u0007\u0003\u0002\u0002\u0002sw\u0005\u0010\t\u0002tw\u0005\n\u0006",
    "\u0002uw\u0005\u000e\b\u0002vs\u0003\u0002\u0002\u0002vt\u0003\u0002",
    "\u0002\u0002vu\u0003\u0002\u0002\u0002w\t\u0003\u0002\u0002\u0002x\u0080",
    "\u00050\u0019\u0002y\u0080\u0007\u001e\u0002\u0002z\u0080\u0007\u001f",
    "\u0002\u0002{\u0080\u0007 \u0002\u0002|\u0080\u0005\u0016\f\u0002}\u0080",
    "\u0005\u0018\r\u0002~\u0080\u0005&\u0014\u0002\u007fx\u0003\u0002\u0002",
    "\u0002\u007fy\u0003\u0002\u0002\u0002\u007fz\u0003\u0002\u0002\u0002",
    "\u007f{\u0003\u0002\u0002\u0002\u007f|\u0003\u0002\u0002\u0002\u007f",
    "}\u0003\u0002\u0002\u0002\u007f~\u0003\u0002\u0002\u0002\u0080\u000b",
    "\u0003\u0002\u0002\u0002\u0081\u0084\u0005\n\u0006\u0002\u0082\u0084",
    "\u0005\u0010\t\u0002\u0083\u0081\u0003\u0002\u0002\u0002\u0083\u0082",
    "\u0003\u0002\u0002\u0002\u0084\r\u0003\u0002\u0002\u0002\u0085\u008b",
    "\u0005*\u0016\u0002\u0086\u008b\u0007\u0012\u0002\u0002\u0087\u008b",
    "\u0007\u0017\u0002\u0002\u0088\u008b\u0007\u001b\u0002\u0002\u0089\u008b",
    "\u0007\u0011\u0002\u0002\u008a\u0085\u0003\u0002\u0002\u0002\u008a\u0086",
    "\u0003\u0002\u0002\u0002\u008a\u0087\u0003\u0002\u0002\u0002\u008a\u0088",
    "\u0003\u0002\u0002\u0002\u008a\u0089\u0003\u0002\u0002\u0002\u008b\u000f",
    "\u0003\u0002\u0002\u0002\u008c\u008d\t\u0002\u0002\u0002\u008d\u0011",
    "\u0003\u0002\u0002\u0002\u008e\u0092\u00052\u001a\u0002\u008f\u0091",
    "\u00054\u001b\u0002\u0090\u008f\u0003\u0002\u0002\u0002\u0091\u0094",
    "\u0003\u0002\u0002\u0002\u0092\u0090\u0003\u0002\u0002\u0002\u0092\u0093",
    "\u0003\u0002\u0002\u0002\u0093\u0095\u0003\u0002\u0002\u0002\u0094\u0092",
    "\u0003\u0002\u0002\u0002\u0095\u0096\u0007\n\u0002\u0002\u0096\u009a",
    "\u0007\n\u0002\u0002\u0097\u0099\u00054\u001b\u0002\u0098\u0097\u0003",
    "\u0002\u0002\u0002\u0099\u009c\u0003\u0002\u0002\u0002\u009a\u0098\u0003",
    "\u0002\u0002\u0002\u009a\u009b\u0003\u0002\u0002\u0002\u009b\u0013\u0003",
    "\u0002\u0002\u0002\u009c\u009a\u0003\u0002\u0002\u0002\u009d\u00a1\u0007",
    "\u001a\u0002\u0002\u009e\u00a0\u00054\u001b\u0002\u009f\u009e\u0003",
    "\u0002\u0002\u0002\u00a0\u00a3\u0003\u0002\u0002\u0002\u00a1\u009f\u0003",
    "\u0002\u0002\u0002\u00a1\u00a2\u0003\u0002\u0002\u0002\u00a2\u00a4\u0003",
    "\u0002\u0002\u0002\u00a3\u00a1\u0003\u0002\u0002\u0002\u00a4\u00a5\u0007",
    "\n\u0002\u0002\u00a5\u00a9\u0007\n\u0002\u0002\u00a6\u00a8\u00054\u001b",
    "\u0002\u00a7\u00a6\u0003\u0002\u0002\u0002\u00a8\u00ab\u0003\u0002\u0002",
    "\u0002\u00a9\u00a7\u0003\u0002\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002",
    "\u0002\u00aa\u0015\u0003\u0002\u0002\u0002\u00ab\u00a9\u0003\u0002\u0002",
    "\u0002\u00ac\u00b0\u0007\u0003\u0002\u0002\u00ad\u00af\u00054\u001b",
    "\u0002\u00ae\u00ad\u0003\u0002\u0002\u0002\u00af\u00b2\u0003\u0002\u0002",
    "\u0002\u00b0\u00ae\u0003\u0002\u0002\u0002\u00b0\u00b1\u0003\u0002\u0002",
    "\u0002\u00b1\u00b3\u0003\u0002\u0002\u0002\u00b2\u00b0\u0003\u0002\u0002",
    "\u0002\u00b3\u00b7\u0005\u0006\u0004\u0002\u00b4\u00b6\u00054\u001b",
    "\u0002\u00b5\u00b4\u0003\u0002\u0002\u0002\u00b6\u00b9\u0003\u0002\u0002",
    "\u0002\u00b7\u00b5\u0003\u0002\u0002\u0002\u00b7\u00b8\u0003\u0002\u0002",
    "\u0002\u00b8\u00c4\u0003\u0002\u0002\u0002\u00b9\u00b7\u0003\u0002\u0002",
    "\u0002\u00ba\u00be\u0007\t\u0002\u0002\u00bb\u00bd\u00054\u001b\u0002",
    "\u00bc\u00bb\u0003\u0002\u0002\u0002\u00bd\u00c0\u0003\u0002\u0002\u0002",
    "\u00be\u00bc\u0003\u0002\u0002\u0002\u00be\u00bf\u0003\u0002\u0002\u0002",
    "\u00bf\u00c1\u0003\u0002\u0002\u0002\u00c0\u00be\u0003\u0002\u0002\u0002",
    "\u00c1\u00c3\u0005\u0006\u0004\u0002\u00c2\u00ba\u0003\u0002\u0002\u0002",
    "\u00c3\u00c6\u0003\u0002\u0002\u0002\u00c4\u00c2\u0003\u0002\u0002\u0002",
    "\u00c4\u00c5\u0003\u0002\u0002\u0002\u00c5\u00ca\u0003\u0002\u0002\u0002",
    "\u00c6\u00c4\u0003\u0002\u0002\u0002\u00c7\u00c9\u00054\u001b\u0002",
    "\u00c8\u00c7\u0003\u0002\u0002\u0002\u00c9\u00cc\u0003\u0002\u0002\u0002",
    "\u00ca\u00c8\u0003\u0002\u0002\u0002\u00ca\u00cb\u0003\u0002\u0002\u0002",
    "\u00cb\u00d4\u0003\u0002\u0002\u0002\u00cc\u00ca\u0003\u0002\u0002\u0002",
    "\u00cd\u00d1\u0007\t\u0002\u0002\u00ce\u00d0\u00054\u001b\u0002\u00cf",
    "\u00ce\u0003\u0002\u0002\u0002\u00d0\u00d3\u0003\u0002\u0002\u0002\u00d1",
    "\u00cf\u0003\u0002\u0002\u0002\u00d1\u00d2\u0003\u0002\u0002\u0002\u00d2",
    "\u00d5\u0003\u0002\u0002\u0002\u00d3\u00d1\u0003\u0002\u0002\u0002\u00d4",
    "\u00cd\u0003\u0002\u0002\u0002\u00d4\u00d5\u0003\u0002\u0002\u0002\u00d5",
    "\u00d6\u0003\u0002\u0002\u0002\u00d6\u00d7\u0007\u0004\u0002\u0002\u00d7",
    "\u00e1\u0003\u0002\u0002\u0002\u00d8\u00dc\u0007\u0003\u0002\u0002\u00d9",
    "\u00db\u00054\u001b\u0002\u00da\u00d9\u0003\u0002\u0002\u0002\u00db",
    "\u00de\u0003\u0002\u0002\u0002\u00dc\u00da\u0003\u0002\u0002\u0002\u00dc",
    "\u00dd\u0003\u0002\u0002\u0002\u00dd\u00df\u0003\u0002\u0002\u0002\u00de",
    "\u00dc\u0003\u0002\u0002\u0002\u00df\u00e1\u0007\u0004\u0002\u0002\u00e0",
    "\u00ac\u0003\u0002\u0002\u0002\u00e0\u00d8\u0003\u0002\u0002\u0002\u00e1",
    "\u0017\u0003\u0002\u0002\u0002\u00e2\u00ec\u0007\u0005\u0002\u0002\u00e3",
    "\u00e5\u00054\u001b\u0002\u00e4\u00e3\u0003\u0002\u0002\u0002\u00e5",
    "\u00e8\u0003\u0002\u0002\u0002\u00e6\u00e4\u0003\u0002\u0002\u0002\u00e6",
    "\u00e7\u0003\u0002\u0002\u0002\u00e7\u00e9\u0003\u0002\u0002\u0002\u00e8",
    "\u00e6\u0003\u0002\u0002\u0002\u00e9\u00eb\u0005\u001a\u000e\u0002\u00ea",
    "\u00e6\u0003\u0002\u0002\u0002\u00eb\u00ee\u0003\u0002\u0002\u0002\u00ec",
    "\u00ea\u0003\u0002\u0002\u0002\u00ec\u00ed\u0003\u0002\u0002\u0002\u00ed",
    "\u00f2\u0003\u0002\u0002\u0002\u00ee\u00ec\u0003\u0002\u0002\u0002\u00ef",
    "\u00f1\u00054\u001b\u0002\u00f0\u00ef\u0003\u0002\u0002\u0002\u00f1",
    "\u00f4\u0003\u0002\u0002\u0002\u00f2\u00f0\u0003\u0002\u0002\u0002\u00f2",
    "\u00f3\u0003\u0002\u0002\u0002\u00f3\u00f6\u0003\u0002\u0002\u0002\u00f4",
    "\u00f2\u0003\u0002\u0002\u0002\u00f5\u00f7\u0005\u0006\u0004\u0002\u00f6",
    "\u00f5\u0003\u0002\u0002\u0002\u00f6\u00f7\u0003\u0002\u0002\u0002\u00f7",
    "\u00f8\u0003\u0002\u0002\u0002\u00f8\u00f9\u0007\u0006\u0002\u0002\u00f9",
    "\u0019\u0003\u0002\u0002\u0002\u00fa\u00fc\u0005\u0012\n\u0002\u00fb",
    "\u00fa\u0003\u0002\u0002\u0002\u00fc\u00fd\u0003\u0002\u0002\u0002\u00fd",
    "\u00fb\u0003\u0002\u0002\u0002\u00fd\u00fe\u0003\u0002\u0002\u0002\u00fe",
    "\u00ff\u0003\u0002\u0002\u0002\u00ff\u0100\u0005\u001a\u000e\u0002\u0100",
    "\u0120\u0003\u0002\u0002\u0002\u0101\u0120\u0005\u001c\u000f\u0002\u0102",
    "\u0120\u0005$\u0013\u0002\u0103\u0104\u0005\u0010\t\u0002\u0104\u0105",
    "\u00054\u001b\u0002\u0105\u0120\u0003\u0002\u0002\u0002\u0106\u0107",
    "\u0005\u0010\t\u0002\u0107\u0108\u0005\u0014\u000b\u0002\u0108\u0109",
    "\u0005\u0006\u0004\u0002\u0109\u0120\u0003\u0002\u0002\u0002\u010a\u010b",
    "\u0005\u0010\t\u0002\u010b\u010c\u0005\u001c\u000f\u0002\u010c\u0120",
    "\u0003\u0002\u0002\u0002\u010d\u010e\u0005\"\u0012\u0002\u010e\u010f",
    "\u00054\u001b\u0002\u010f\u0120\u0003\u0002\u0002\u0002\u0110\u0111",
    "\u0005\"\u0012\u0002\u0111\u0112\u0005\u0014\u000b\u0002\u0112\u0113",
    "\u0005\u0006\u0004\u0002\u0113\u0120\u0003\u0002\u0002\u0002\u0114\u0115",
    "\u0005\"\u0012\u0002\u0115\u0116\u0005\u001e\u0010\u0002\u0116\u0120",
    "\u0003\u0002\u0002\u0002\u0117\u0118\u0007\u0010\u0002\u0002\u0118\u0120",
    "\u00054\u001b\u0002\u0119\u011a\u0007\u0010\u0002\u0002\u011a\u011b",
    "\u0005\u0014\u000b\u0002\u011b\u011c\u0005\u0006\u0004\u0002\u011c\u0120",
    "\u0003\u0002\u0002\u0002\u011d\u011e\u0007\u0010\u0002\u0002\u011e\u0120",
    "\u0005 \u0011\u0002\u011f\u00fb\u0003\u0002\u0002\u0002\u011f\u0101",
    "\u0003\u0002\u0002\u0002\u011f\u0102\u0003\u0002\u0002\u0002\u011f\u0103",
    "\u0003\u0002\u0002\u0002\u011f\u0106\u0003\u0002\u0002\u0002\u011f\u010a",
    "\u0003\u0002\u0002\u0002\u011f\u010d\u0003\u0002\u0002\u0002\u011f\u0110",
    "\u0003\u0002\u0002\u0002\u011f\u0114\u0003\u0002\u0002\u0002\u011f\u0117",
    "\u0003\u0002\u0002\u0002\u011f\u0119\u0003\u0002\u0002\u0002\u011f\u011d",
    "\u0003\u0002\u0002\u0002\u0120\u001b\u0003\u0002\u0002\u0002\u0121\u0122",
    "\u0005\n\u0006\u0002\u0122\u001d\u0003\u0002\u0002\u0002\u0123\u0127",
    "\u0005\u001c\u000f\u0002\u0124\u0127\u0005\u0010\t\u0002\u0125\u0127",
    "\u0005$\u0013\u0002\u0126\u0123\u0003\u0002\u0002\u0002\u0126\u0124",
    "\u0003\u0002\u0002\u0002\u0126\u0125\u0003\u0002\u0002\u0002\u0127\u001f",
    "\u0003\u0002\u0002\u0002\u0128\u012f\u0005\n\u0006\u0002\u0129\u012b",
    "\u0007\f\u0002\u0002\u012a\u0129\u0003\u0002\u0002\u0002\u012b\u012c",
    "\u0003\u0002\u0002\u0002\u012c\u012a\u0003\u0002\u0002\u0002\u012c\u012d",
    "\u0003\u0002\u0002\u0002\u012d\u012f\u0003\u0002\u0002\u0002\u012e\u0128",
    "\u0003\u0002\u0002\u0002\u012e\u012a\u0003\u0002\u0002\u0002\u012f!",
    "\u0003\u0002\u0002\u0002\u0130\u0136\u0005,\u0017\u0002\u0131\u0136",
    "\u0007\u0012\u0002\u0002\u0132\u0136\u0007\u0017\u0002\u0002\u0133\u0136",
    "\u0007\u001b\u0002\u0002\u0134\u0136\u0007\u0011\u0002\u0002\u0135\u0130",
    "\u0003\u0002\u0002\u0002\u0135\u0131\u0003\u0002\u0002\u0002\u0135\u0132",
    "\u0003\u0002\u0002\u0002\u0135\u0133\u0003\u0002\u0002\u0002\u0135\u0134",
    "\u0003\u0002\u0002\u0002\u0136#\u0003\u0002\u0002\u0002\u0137\u0139",
    "\t\u0003\u0002\u0002\u0138\u0137\u0003\u0002\u0002\u0002\u0139\u013a",
    "\u0003\u0002\u0002\u0002\u013a\u0138\u0003\u0002\u0002\u0002\u013a\u013b",
    "\u0003\u0002\u0002\u0002\u013b%\u0003\u0002\u0002\u0002\u013c\u0140",
    "\u0007\u0007\u0002\u0002\u013d\u013f\u00054\u001b\u0002\u013e\u013d",
    "\u0003\u0002\u0002\u0002\u013f\u0142\u0003\u0002\u0002\u0002\u0140\u013e",
    "\u0003\u0002\u0002\u0002\u0140\u0141\u0003\u0002\u0002\u0002\u0141\u0143",
    "\u0003\u0002\u0002\u0002\u0142\u0140\u0003\u0002\u0002\u0002\u0143\u0154",
    "\u0005(\u0015\u0002\u0144\u0146\u00054\u001b\u0002\u0145\u0144\u0003",
    "\u0002\u0002\u0002\u0146\u0149\u0003\u0002\u0002\u0002\u0147\u0145\u0003",
    "\u0002\u0002\u0002\u0147\u0148\u0003\u0002\u0002\u0002\u0148\u014a\u0003",
    "\u0002\u0002\u0002\u0149\u0147\u0003\u0002\u0002\u0002\u014a\u014e\u0007",
    "\t\u0002\u0002\u014b\u014d\u00054\u001b\u0002\u014c\u014b\u0003\u0002",
    "\u0002\u0002\u014d\u0150\u0003\u0002\u0002\u0002\u014e\u014c\u0003\u0002",
    "\u0002\u0002\u014e\u014f\u0003\u0002\u0002\u0002\u014f\u0151\u0003\u0002",
    "\u0002\u0002\u0150\u014e\u0003\u0002\u0002\u0002\u0151\u0153\u0005(",
    "\u0015\u0002\u0152\u0147\u0003\u0002\u0002\u0002\u0153\u0156\u0003\u0002",
    "\u0002\u0002\u0154\u0152\u0003\u0002\u0002\u0002\u0154\u0155\u0003\u0002",
    "\u0002\u0002\u0155\u015a\u0003\u0002\u0002\u0002\u0156\u0154\u0003\u0002",
    "\u0002\u0002\u0157\u0159\u00054\u001b\u0002\u0158\u0157\u0003\u0002",
    "\u0002\u0002\u0159\u015c\u0003\u0002\u0002\u0002\u015a\u0158\u0003\u0002",
    "\u0002\u0002\u015a\u015b\u0003\u0002\u0002\u0002\u015b\u0164\u0003\u0002",
    "\u0002\u0002\u015c\u015a\u0003\u0002\u0002\u0002\u015d\u0161\u0007\t",
    "\u0002\u0002\u015e\u0160\u00054\u001b\u0002\u015f\u015e\u0003\u0002",
    "\u0002\u0002\u0160\u0163\u0003\u0002\u0002\u0002\u0161\u015f\u0003\u0002",
    "\u0002\u0002\u0161\u0162\u0003\u0002\u0002\u0002\u0162\u0165\u0003\u0002",
    "\u0002\u0002\u0163\u0161\u0003\u0002\u0002\u0002\u0164\u015d\u0003\u0002",
    "\u0002\u0002\u0164\u0165\u0003\u0002\u0002\u0002\u0165\u0166\u0003\u0002",
    "\u0002\u0002\u0166\u0167\u0007\b\u0002\u0002\u0167\u0171\u0003\u0002",
    "\u0002\u0002\u0168\u016c\u0007\u0007\u0002\u0002\u0169\u016b\u00054",
    "\u001b\u0002\u016a\u0169\u0003\u0002\u0002\u0002\u016b\u016e\u0003\u0002",
    "\u0002\u0002\u016c\u016a\u0003\u0002\u0002\u0002\u016c\u016d\u0003\u0002",
    "\u0002\u0002\u016d\u016f\u0003\u0002\u0002\u0002\u016e\u016c\u0003\u0002",
    "\u0002\u0002\u016f\u0171\u0007\b\u0002\u0002\u0170\u013c\u0003\u0002",
    "\u0002\u0002\u0170\u0168\u0003\u0002\u0002\u0002\u0171\'\u0003\u0002",
    "\u0002\u0002\u0172\u0176\u0005.\u0018\u0002\u0173\u0175\u00054\u001b",
    "\u0002\u0174\u0173\u0003\u0002\u0002\u0002\u0175\u0178\u0003\u0002\u0002",
    "\u0002\u0176\u0174\u0003\u0002\u0002\u0002\u0176\u0177\u0003\u0002\u0002",
    "\u0002\u0177\u0179\u0003\u0002\u0002\u0002\u0178\u0176\u0003\u0002\u0002",
    "\u0002\u0179\u017d\u0007\n\u0002\u0002\u017a\u017c\u00054\u001b\u0002",
    "\u017b\u017a\u0003\u0002\u0002\u0002\u017c\u017f\u0003\u0002\u0002\u0002",
    "\u017d\u017b\u0003\u0002\u0002\u0002\u017d\u017e\u0003\u0002\u0002\u0002",
    "\u017e\u0183\u0003\u0002\u0002\u0002\u017f\u017d\u0003\u0002\u0002\u0002",
    "\u0180\u0182\u0005\u0012\n\u0002\u0181\u0180\u0003\u0002\u0002\u0002",
    "\u0182\u0185\u0003\u0002\u0002\u0002\u0183\u0181\u0003\u0002\u0002\u0002",
    "\u0183\u0184\u0003\u0002\u0002\u0002\u0184\u0186\u0003\u0002\u0002\u0002",
    "\u0185\u0183\u0003\u0002\u0002\u0002\u0186\u0187\u0005\b\u0005\u0002",
    "\u0187)\u0003\u0002\u0002\u0002\u0188\u018b\u0007\u0010\u0002\u0002",
    "\u0189\u018b\u0005,\u0017\u0002\u018a\u0188\u0003\u0002\u0002\u0002",
    "\u018a\u0189\u0003\u0002\u0002\u0002\u018b+\u0003\u0002\u0002\u0002",
    "\u018c\u018d\u0007\u0010\u0002\u0002\u018d\u018e\u0007\u000b\u0002\u0002",
    "\u018e\u0193\u0007\u0010\u0002\u0002\u018f\u0190\u0007\u0010\u0002\u0002",
    "\u0190\u0191\u0007\u000b\u0002\u0002\u0191\u0193\u0007\u0011\u0002\u0002",
    "\u0192\u018c\u0003\u0002\u0002\u0002\u0192\u018f\u0003\u0002\u0002\u0002",
    "\u0193-\u0003\u0002\u0002\u0002\u0194\u01a2\u00052\u001a\u0002\u0195",
    "\u01a2\u0007\u001c\u0002\u0002\u0196\u0198\u00054\u001b\u0002\u0197",
    "\u0196\u0003\u0002\u0002\u0002\u0198\u019b\u0003\u0002\u0002\u0002\u0199",
    "\u0197\u0003\u0002\u0002\u0002\u0199\u019a\u0003\u0002\u0002\u0002\u019a",
    "\u019c\u0003\u0002\u0002\u0002\u019b\u0199\u0003\u0002\u0002\u0002\u019c",
    "\u019e\u0007\u001d\u0002\u0002\u019d\u0199\u0003\u0002\u0002\u0002\u019e",
    "\u019f\u0003\u0002\u0002\u0002\u019f\u019d\u0003\u0002\u0002\u0002\u019f",
    "\u01a0\u0003\u0002\u0002\u0002\u01a0\u01a2\u0003\u0002\u0002\u0002\u01a1",
    "\u0194\u0003\u0002\u0002\u0002\u01a1\u0195\u0003\u0002\u0002\u0002\u01a1",
    "\u019d\u0003\u0002\u0002\u0002\u01a2/\u0003\u0002\u0002\u0002\u01a3",
    "\u01b1\u0007\u001a\u0002\u0002\u01a4\u01b1\u0007\u001c\u0002\u0002\u01a5",
    "\u01a7\u00054\u001b\u0002\u01a6\u01a5\u0003\u0002\u0002\u0002\u01a7",
    "\u01aa\u0003\u0002\u0002\u0002\u01a8\u01a6\u0003\u0002\u0002\u0002\u01a8",
    "\u01a9\u0003\u0002\u0002\u0002\u01a9\u01ab\u0003\u0002\u0002\u0002\u01aa",
    "\u01a8\u0003\u0002\u0002\u0002\u01ab\u01ad\u0007\u001d\u0002\u0002\u01ac",
    "\u01a8\u0003\u0002\u0002\u0002\u01ad\u01ae\u0003\u0002\u0002\u0002\u01ae",
    "\u01ac\u0003\u0002\u0002\u0002\u01ae\u01af\u0003\u0002\u0002\u0002\u01af",
    "\u01b1\u0003\u0002\u0002\u0002\u01b0\u01a3\u0003\u0002\u0002\u0002\u01b0",
    "\u01a4\u0003\u0002\u0002\u0002\u01b0\u01ac\u0003\u0002\u0002\u0002\u01b1",
    "1\u0003\u0002\u0002\u0002\u01b2\u01b3\t\u0004\u0002\u0002\u01b33\u0003",
    "\u0002\u0002\u0002\u01b4\u01b5\t\u0005\u0002\u0002\u01b55\u0003\u0002",
    "\u0002\u000299?EIPinv\u007f\u0083\u008a\u0092\u009a\u00a1\u00a9\u00b0",
    "\u00b7\u00be\u00c4\u00ca\u00d1\u00d4\u00dc\u00e0\u00e6\u00ec\u00f2\u00f6",
    "\u00fd\u011f\u0126\u012c\u012e\u0135\u013a\u0140\u0147\u014e\u0154\u015a",
    "\u0161\u0164\u016c\u0170\u0176\u017d\u0183\u018a\u0192\u0199\u019f\u01a1",
    "\u01a8\u01ae\u01b0"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'['", "']'", "'('", "')'", "'{'", "'}'", "','", 
                     "':'", "'.'", null, null, null, null, "'null'" ];

var symbolicNames = [ null, "L_BRACKET", "R_BRACKET", "L_PAREN", "R_PAREN", 
                      "L_CURLY", "R_CURLY", "COMMA", "COLON", "DOT", "NON_DOT_OPERATOR", 
                      "WHITESPACE", "INLINE_COMMENT", "BLOCK_COMMENT", "NULL", 
                      "TYPE", "BOOL", "TIMESTAMP", "BIN_INTEGER", "DEC_INTEGER", 
                      "HEX_INTEGER", "SPECIAL_FLOAT", "FLOAT", "DECIMAL", 
                      "QUOTED_SYMBOL", "IDENTIFIER_SYMBOL", "SHORT_QUOTED_STRING", 
                      "LONG_QUOTED_STRING", "SHORT_QUOTED_CLOB", "LONG_QUOTED_CLOB", 
                      "BLOB" ];

var ruleNames =  [ "top_level", "top_level_value", "value", "entity", "delimiting_entity", 
                   "keyword_delimiting_entity", "keyword_entity", "numeric_entity", 
                   "annotation", "quoted_annotation", "list", "sexp", "sexp_value", 
                   "sexp_delimiting_entity", "sexp_keyword_delimiting_entity", 
                   "sexp_null_delimiting_entity", "sexp_keyword_entity", 
                   "operator", "struct", "field", "any_null", "typed_null", 
                   "field_name", "quoted_text", "symbol", "ws" ];

function IonTextParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

IonTextParser.prototype = Object.create(antlr4.Parser.prototype);
IonTextParser.prototype.constructor = IonTextParser;

Object.defineProperty(IonTextParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

IonTextParser.EOF = antlr4.Token.EOF;
IonTextParser.L_BRACKET = 1;
IonTextParser.R_BRACKET = 2;
IonTextParser.L_PAREN = 3;
IonTextParser.R_PAREN = 4;
IonTextParser.L_CURLY = 5;
IonTextParser.R_CURLY = 6;
IonTextParser.COMMA = 7;
IonTextParser.COLON = 8;
IonTextParser.DOT = 9;
IonTextParser.NON_DOT_OPERATOR = 10;
IonTextParser.WHITESPACE = 11;
IonTextParser.INLINE_COMMENT = 12;
IonTextParser.BLOCK_COMMENT = 13;
IonTextParser.NULL = 14;
IonTextParser.TYPE = 15;
IonTextParser.BOOL = 16;
IonTextParser.TIMESTAMP = 17;
IonTextParser.BIN_INTEGER = 18;
IonTextParser.DEC_INTEGER = 19;
IonTextParser.HEX_INTEGER = 20;
IonTextParser.SPECIAL_FLOAT = 21;
IonTextParser.FLOAT = 22;
IonTextParser.DECIMAL = 23;
IonTextParser.QUOTED_SYMBOL = 24;
IonTextParser.IDENTIFIER_SYMBOL = 25;
IonTextParser.SHORT_QUOTED_STRING = 26;
IonTextParser.LONG_QUOTED_STRING = 27;
IonTextParser.SHORT_QUOTED_CLOB = 28;
IonTextParser.LONG_QUOTED_CLOB = 29;
IonTextParser.BLOB = 30;

IonTextParser.RULE_top_level = 0;
IonTextParser.RULE_top_level_value = 1;
IonTextParser.RULE_value = 2;
IonTextParser.RULE_entity = 3;
IonTextParser.RULE_delimiting_entity = 4;
IonTextParser.RULE_keyword_delimiting_entity = 5;
IonTextParser.RULE_keyword_entity = 6;
IonTextParser.RULE_numeric_entity = 7;
IonTextParser.RULE_annotation = 8;
IonTextParser.RULE_quoted_annotation = 9;
IonTextParser.RULE_list = 10;
IonTextParser.RULE_sexp = 11;
IonTextParser.RULE_sexp_value = 12;
IonTextParser.RULE_sexp_delimiting_entity = 13;
IonTextParser.RULE_sexp_keyword_delimiting_entity = 14;
IonTextParser.RULE_sexp_null_delimiting_entity = 15;
IonTextParser.RULE_sexp_keyword_entity = 16;
IonTextParser.RULE_operator = 17;
IonTextParser.RULE_struct = 18;
IonTextParser.RULE_field = 19;
IonTextParser.RULE_any_null = 20;
IonTextParser.RULE_typed_null = 21;
IonTextParser.RULE_field_name = 22;
IonTextParser.RULE_quoted_text = 23;
IonTextParser.RULE_symbol = 24;
IonTextParser.RULE_ws = 25;

function Top_levelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IonTextParser.RULE_top_level;
    return this;
}

Top_levelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Top_levelContext.prototype.constructor = Top_levelContext;

Top_levelContext.prototype.EOF = function() {
    return this.getToken(IonTextParser.EOF, 0);
};

Top_levelContext.prototype.top_level_value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Top_level_valueContext);
    } else {
        return this.getTypedRuleContext(Top_level_valueContext,i);
    }
};

Top_levelContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

Top_levelContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

Top_levelContext.prototype.enterRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.enterTop_level(this);
	}
};

Top_levelContext.prototype.exitRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.exitTop_level(this);
	}
};




IonTextParser.Top_levelContext = Top_levelContext;

IonTextParser.prototype.top_level = function() {

    var localctx = new Top_levelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, IonTextParser.RULE_top_level);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 61;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 55;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 52;
                        this.ws(); 
                    }
                    this.state = 57;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
                }

                this.state = 58;
                this.top_level_value(); 
            }
            this.state = 63;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
        }

        this.state = 67;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 64;
                this.ws(); 
            }
            this.state = 69;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

        this.state = 71;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IonTextParser.L_BRACKET) | (1 << IonTextParser.L_PAREN) | (1 << IonTextParser.L_CURLY) | (1 << IonTextParser.WHITESPACE) | (1 << IonTextParser.INLINE_COMMENT) | (1 << IonTextParser.BLOCK_COMMENT) | (1 << IonTextParser.NULL) | (1 << IonTextParser.TYPE) | (1 << IonTextParser.BOOL) | (1 << IonTextParser.TIMESTAMP) | (1 << IonTextParser.BIN_INTEGER) | (1 << IonTextParser.DEC_INTEGER) | (1 << IonTextParser.HEX_INTEGER) | (1 << IonTextParser.SPECIAL_FLOAT) | (1 << IonTextParser.FLOAT) | (1 << IonTextParser.DECIMAL) | (1 << IonTextParser.QUOTED_SYMBOL) | (1 << IonTextParser.IDENTIFIER_SYMBOL) | (1 << IonTextParser.SHORT_QUOTED_STRING) | (1 << IonTextParser.LONG_QUOTED_STRING) | (1 << IonTextParser.SHORT_QUOTED_CLOB) | (1 << IonTextParser.LONG_QUOTED_CLOB) | (1 << IonTextParser.BLOB))) !== 0)) {
            this.state = 70;
            this.value();
        }

        this.state = 73;
        this.match(IonTextParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Top_level_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IonTextParser.RULE_top_level_value;
    return this;
}

Top_level_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Top_level_valueContext.prototype.constructor = Top_level_valueContext;

Top_level_valueContext.prototype.top_level_value = function() {
    return this.getTypedRuleContext(Top_level_valueContext,0);
};

Top_level_valueContext.prototype.annotation = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AnnotationContext);
    } else {
        return this.getTypedRuleContext(AnnotationContext,i);
    }
};

Top_level_valueContext.prototype.delimiting_entity = function() {
    return this.getTypedRuleContext(Delimiting_entityContext,0);
};

Top_level_valueContext.prototype.numeric_entity = function() {
    return this.getTypedRuleContext(Numeric_entityContext,0);
};

Top_level_valueContext.prototype.ws = function() {
    return this.getTypedRuleContext(WsContext,0);
};

Top_level_valueContext.prototype.quoted_annotation = function() {
    return this.getTypedRuleContext(Quoted_annotationContext,0);
};

Top_level_valueContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

Top_level_valueContext.prototype.keyword_entity = function() {
    return this.getTypedRuleContext(Keyword_entityContext,0);
};

Top_level_valueContext.prototype.keyword_delimiting_entity = function() {
    return this.getTypedRuleContext(Keyword_delimiting_entityContext,0);
};

Top_level_valueContext.prototype.enterRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.enterTop_level_value(this);
	}
};

Top_level_valueContext.prototype.exitRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.exitTop_level_value(this);
	}
};




IonTextParser.Top_level_valueContext = Top_level_valueContext;

IonTextParser.prototype.top_level_value = function() {

    var localctx = new Top_level_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, IonTextParser.RULE_top_level_value);
    try {
        this.state = 103;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 76; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 75;
            		this.annotation();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 78; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,4, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 80;
            this.top_level_value();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 82;
            this.delimiting_entity();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 83;
            this.numeric_entity();
            this.state = 84;
            this.ws();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 86;
            this.numeric_entity();
            this.state = 87;
            this.quoted_annotation();
            this.state = 88;
            this.value();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 90;
            this.numeric_entity();
            this.state = 91;
            this.delimiting_entity();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 93;
            this.keyword_entity();
            this.state = 94;
            this.ws();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 96;
            this.keyword_entity();
            this.state = 97;
            this.quoted_annotation();
            this.state = 98;
            this.value();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 100;
            this.keyword_entity();
            this.state = 101;
            this.keyword_delimiting_entity();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IonTextParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.entity = function() {
    return this.getTypedRuleContext(EntityContext,0);
};

ValueContext.prototype.annotation = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AnnotationContext);
    } else {
        return this.getTypedRuleContext(AnnotationContext,i);
    }
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.exitValue(this);
	}
};




IonTextParser.ValueContext = ValueContext;

IonTextParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, IonTextParser.RULE_value);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 108;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 105;
                this.annotation(); 
            }
            this.state = 110;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
        }

        this.state = 111;
        this.entity();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EntityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IonTextParser.RULE_entity;
    return this;
}

EntityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EntityContext.prototype.constructor = EntityContext;

EntityContext.prototype.numeric_entity = function() {
    return this.getTypedRuleContext(Numeric_entityContext,0);
};

EntityContext.prototype.delimiting_entity = function() {
    return this.getTypedRuleContext(Delimiting_entityContext,0);
};

EntityContext.prototype.keyword_entity = function() {
    return this.getTypedRuleContext(Keyword_entityContext,0);
};

EntityContext.prototype.enterRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.enterEntity(this);
	}
};

EntityContext.prototype.exitRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.exitEntity(this);
	}
};




IonTextParser.EntityContext = EntityContext;

IonTextParser.prototype.entity = function() {

    var localctx = new EntityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, IonTextParser.RULE_entity);
    try {
        this.state = 116;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case IonTextParser.TIMESTAMP:
        case IonTextParser.BIN_INTEGER:
        case IonTextParser.DEC_INTEGER:
        case IonTextParser.HEX_INTEGER:
        case IonTextParser.FLOAT:
        case IonTextParser.DECIMAL:
            this.enterOuterAlt(localctx, 1);
            this.state = 113;
            this.numeric_entity();
            break;
        case IonTextParser.L_BRACKET:
        case IonTextParser.L_PAREN:
        case IonTextParser.L_CURLY:
        case IonTextParser.WHITESPACE:
        case IonTextParser.INLINE_COMMENT:
        case IonTextParser.BLOCK_COMMENT:
        case IonTextParser.QUOTED_SYMBOL:
        case IonTextParser.SHORT_QUOTED_STRING:
        case IonTextParser.LONG_QUOTED_STRING:
        case IonTextParser.SHORT_QUOTED_CLOB:
        case IonTextParser.LONG_QUOTED_CLOB:
        case IonTextParser.BLOB:
            this.enterOuterAlt(localctx, 2);
            this.state = 114;
            this.delimiting_entity();
            break;
        case IonTextParser.NULL:
        case IonTextParser.TYPE:
        case IonTextParser.BOOL:
        case IonTextParser.SPECIAL_FLOAT:
        case IonTextParser.IDENTIFIER_SYMBOL:
            this.enterOuterAlt(localctx, 3);
            this.state = 115;
            this.keyword_entity();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Delimiting_entityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IonTextParser.RULE_delimiting_entity;
    return this;
}

Delimiting_entityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Delimiting_entityContext.prototype.constructor = Delimiting_entityContext;

Delimiting_entityContext.prototype.quoted_text = function() {
    return this.getTypedRuleContext(Quoted_textContext,0);
};

Delimiting_entityContext.prototype.SHORT_QUOTED_CLOB = function() {
    return this.getToken(IonTextParser.SHORT_QUOTED_CLOB, 0);
};

Delimiting_entityContext.prototype.LONG_QUOTED_CLOB = function() {
    return this.getToken(IonTextParser.LONG_QUOTED_CLOB, 0);
};

Delimiting_entityContext.prototype.BLOB = function() {
    return this.getToken(IonTextParser.BLOB, 0);
};

Delimiting_entityContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};

Delimiting_entityContext.prototype.sexp = function() {
    return this.getTypedRuleContext(SexpContext,0);
};

Delimiting_entityContext.prototype.struct = function() {
    return this.getTypedRuleContext(StructContext,0);
};

Delimiting_entityContext.prototype.enterRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.enterDelimiting_entity(this);
	}
};

Delimiting_entityContext.prototype.exitRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.exitDelimiting_entity(this);
	}
};




IonTextParser.Delimiting_entityContext = Delimiting_entityContext;

IonTextParser.prototype.delimiting_entity = function() {

    var localctx = new Delimiting_entityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, IonTextParser.RULE_delimiting_entity);
    try {
        this.state = 125;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case IonTextParser.WHITESPACE:
        case IonTextParser.INLINE_COMMENT:
        case IonTextParser.BLOCK_COMMENT:
        case IonTextParser.QUOTED_SYMBOL:
        case IonTextParser.SHORT_QUOTED_STRING:
        case IonTextParser.LONG_QUOTED_STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 118;
            this.quoted_text();
            break;
        case IonTextParser.SHORT_QUOTED_CLOB:
            this.enterOuterAlt(localctx, 2);
            this.state = 119;
            this.match(IonTextParser.SHORT_QUOTED_CLOB);
            break;
        case IonTextParser.LONG_QUOTED_CLOB:
            this.enterOuterAlt(localctx, 3);
            this.state = 120;
            this.match(IonTextParser.LONG_QUOTED_CLOB);
            break;
        case IonTextParser.BLOB:
            this.enterOuterAlt(localctx, 4);
            this.state = 121;
            this.match(IonTextParser.BLOB);
            break;
        case IonTextParser.L_BRACKET:
            this.enterOuterAlt(localctx, 5);
            this.state = 122;
            this.list();
            break;
        case IonTextParser.L_PAREN:
            this.enterOuterAlt(localctx, 6);
            this.state = 123;
            this.sexp();
            break;
        case IonTextParser.L_CURLY:
            this.enterOuterAlt(localctx, 7);
            this.state = 124;
            this.struct();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Keyword_delimiting_entityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IonTextParser.RULE_keyword_delimiting_entity;
    return this;
}

Keyword_delimiting_entityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Keyword_delimiting_entityContext.prototype.constructor = Keyword_delimiting_entityContext;

Keyword_delimiting_entityContext.prototype.delimiting_entity = function() {
    return this.getTypedRuleContext(Delimiting_entityContext,0);
};

Keyword_delimiting_entityContext.prototype.numeric_entity = function() {
    return this.getTypedRuleContext(Numeric_entityContext,0);
};

Keyword_delimiting_entityContext.prototype.enterRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.enterKeyword_delimiting_entity(this);
	}
};

Keyword_delimiting_entityContext.prototype.exitRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.exitKeyword_delimiting_entity(this);
	}
};




IonTextParser.Keyword_delimiting_entityContext = Keyword_delimiting_entityContext;

IonTextParser.prototype.keyword_delimiting_entity = function() {

    var localctx = new Keyword_delimiting_entityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, IonTextParser.RULE_keyword_delimiting_entity);
    try {
        this.state = 129;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case IonTextParser.L_BRACKET:
        case IonTextParser.L_PAREN:
        case IonTextParser.L_CURLY:
        case IonTextParser.WHITESPACE:
        case IonTextParser.INLINE_COMMENT:
        case IonTextParser.BLOCK_COMMENT:
        case IonTextParser.QUOTED_SYMBOL:
        case IonTextParser.SHORT_QUOTED_STRING:
        case IonTextParser.LONG_QUOTED_STRING:
        case IonTextParser.SHORT_QUOTED_CLOB:
        case IonTextParser.LONG_QUOTED_CLOB:
        case IonTextParser.BLOB:
            this.enterOuterAlt(localctx, 1);
            this.state = 127;
            this.delimiting_entity();
            break;
        case IonTextParser.TIMESTAMP:
        case IonTextParser.BIN_INTEGER:
        case IonTextParser.DEC_INTEGER:
        case IonTextParser.HEX_INTEGER:
        case IonTextParser.FLOAT:
        case IonTextParser.DECIMAL:
            this.enterOuterAlt(localctx, 2);
            this.state = 128;
            this.numeric_entity();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Keyword_entityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IonTextParser.RULE_keyword_entity;
    return this;
}

Keyword_entityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Keyword_entityContext.prototype.constructor = Keyword_entityContext;

Keyword_entityContext.prototype.any_null = function() {
    return this.getTypedRuleContext(Any_nullContext,0);
};

Keyword_entityContext.prototype.BOOL = function() {
    return this.getToken(IonTextParser.BOOL, 0);
};

Keyword_entityContext.prototype.SPECIAL_FLOAT = function() {
    return this.getToken(IonTextParser.SPECIAL_FLOAT, 0);
};

Keyword_entityContext.prototype.IDENTIFIER_SYMBOL = function() {
    return this.getToken(IonTextParser.IDENTIFIER_SYMBOL, 0);
};

Keyword_entityContext.prototype.TYPE = function() {
    return this.getToken(IonTextParser.TYPE, 0);
};

Keyword_entityContext.prototype.enterRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.enterKeyword_entity(this);
	}
};

Keyword_entityContext.prototype.exitRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.exitKeyword_entity(this);
	}
};




IonTextParser.Keyword_entityContext = Keyword_entityContext;

IonTextParser.prototype.keyword_entity = function() {

    var localctx = new Keyword_entityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, IonTextParser.RULE_keyword_entity);
    try {
        this.state = 136;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case IonTextParser.NULL:
            this.enterOuterAlt(localctx, 1);
            this.state = 131;
            this.any_null();
            break;
        case IonTextParser.BOOL:
            this.enterOuterAlt(localctx, 2);
            this.state = 132;
            this.match(IonTextParser.BOOL);
            break;
        case IonTextParser.SPECIAL_FLOAT:
            this.enterOuterAlt(localctx, 3);
            this.state = 133;
            this.match(IonTextParser.SPECIAL_FLOAT);
            break;
        case IonTextParser.IDENTIFIER_SYMBOL:
            this.enterOuterAlt(localctx, 4);
            this.state = 134;
            this.match(IonTextParser.IDENTIFIER_SYMBOL);
            break;
        case IonTextParser.TYPE:
            this.enterOuterAlt(localctx, 5);
            this.state = 135;
            this.match(IonTextParser.TYPE);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Numeric_entityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IonTextParser.RULE_numeric_entity;
    return this;
}

Numeric_entityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Numeric_entityContext.prototype.constructor = Numeric_entityContext;

Numeric_entityContext.prototype.BIN_INTEGER = function() {
    return this.getToken(IonTextParser.BIN_INTEGER, 0);
};

Numeric_entityContext.prototype.DEC_INTEGER = function() {
    return this.getToken(IonTextParser.DEC_INTEGER, 0);
};

Numeric_entityContext.prototype.HEX_INTEGER = function() {
    return this.getToken(IonTextParser.HEX_INTEGER, 0);
};

Numeric_entityContext.prototype.TIMESTAMP = function() {
    return this.getToken(IonTextParser.TIMESTAMP, 0);
};

Numeric_entityContext.prototype.FLOAT = function() {
    return this.getToken(IonTextParser.FLOAT, 0);
};

Numeric_entityContext.prototype.DECIMAL = function() {
    return this.getToken(IonTextParser.DECIMAL, 0);
};

Numeric_entityContext.prototype.enterRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.enterNumeric_entity(this);
	}
};

Numeric_entityContext.prototype.exitRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.exitNumeric_entity(this);
	}
};




IonTextParser.Numeric_entityContext = Numeric_entityContext;

IonTextParser.prototype.numeric_entity = function() {

    var localctx = new Numeric_entityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, IonTextParser.RULE_numeric_entity);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 138;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IonTextParser.TIMESTAMP) | (1 << IonTextParser.BIN_INTEGER) | (1 << IonTextParser.DEC_INTEGER) | (1 << IonTextParser.HEX_INTEGER) | (1 << IonTextParser.FLOAT) | (1 << IonTextParser.DECIMAL))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AnnotationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IonTextParser.RULE_annotation;
    return this;
}

AnnotationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AnnotationContext.prototype.constructor = AnnotationContext;

AnnotationContext.prototype.symbol = function() {
    return this.getTypedRuleContext(SymbolContext,0);
};

AnnotationContext.prototype.COLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(IonTextParser.COLON);
    } else {
        return this.getToken(IonTextParser.COLON, i);
    }
};


AnnotationContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

AnnotationContext.prototype.enterRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.enterAnnotation(this);
	}
};

AnnotationContext.prototype.exitRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.exitAnnotation(this);
	}
};




IonTextParser.AnnotationContext = AnnotationContext;

IonTextParser.prototype.annotation = function() {

    var localctx = new AnnotationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, IonTextParser.RULE_annotation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.symbol();
        this.state = 144;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IonTextParser.WHITESPACE) | (1 << IonTextParser.INLINE_COMMENT) | (1 << IonTextParser.BLOCK_COMMENT))) !== 0)) {
            this.state = 141;
            this.ws();
            this.state = 146;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 147;
        this.match(IonTextParser.COLON);
        this.state = 148;
        this.match(IonTextParser.COLON);
        this.state = 152;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 149;
                this.ws(); 
            }
            this.state = 154;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Quoted_annotationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IonTextParser.RULE_quoted_annotation;
    return this;
}

Quoted_annotationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Quoted_annotationContext.prototype.constructor = Quoted_annotationContext;

Quoted_annotationContext.prototype.QUOTED_SYMBOL = function() {
    return this.getToken(IonTextParser.QUOTED_SYMBOL, 0);
};

Quoted_annotationContext.prototype.COLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(IonTextParser.COLON);
    } else {
        return this.getToken(IonTextParser.COLON, i);
    }
};


Quoted_annotationContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

Quoted_annotationContext.prototype.enterRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.enterQuoted_annotation(this);
	}
};

Quoted_annotationContext.prototype.exitRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.exitQuoted_annotation(this);
	}
};




IonTextParser.Quoted_annotationContext = Quoted_annotationContext;

IonTextParser.prototype.quoted_annotation = function() {

    var localctx = new Quoted_annotationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, IonTextParser.RULE_quoted_annotation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 155;
        this.match(IonTextParser.QUOTED_SYMBOL);
        this.state = 159;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IonTextParser.WHITESPACE) | (1 << IonTextParser.INLINE_COMMENT) | (1 << IonTextParser.BLOCK_COMMENT))) !== 0)) {
            this.state = 156;
            this.ws();
            this.state = 161;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 162;
        this.match(IonTextParser.COLON);
        this.state = 163;
        this.match(IonTextParser.COLON);
        this.state = 167;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 164;
                this.ws(); 
            }
            this.state = 169;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IonTextParser.RULE_list;
    return this;
}

ListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListContext.prototype.constructor = ListContext;

ListContext.prototype.L_BRACKET = function() {
    return this.getToken(IonTextParser.L_BRACKET, 0);
};

ListContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

ListContext.prototype.R_BRACKET = function() {
    return this.getToken(IonTextParser.R_BRACKET, 0);
};

ListContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

ListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(IonTextParser.COMMA);
    } else {
        return this.getToken(IonTextParser.COMMA, i);
    }
};


ListContext.prototype.enterRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.enterList(this);
	}
};

ListContext.prototype.exitRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.exitList(this);
	}
};




IonTextParser.ListContext = ListContext;

IonTextParser.prototype.list = function() {

    var localctx = new ListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, IonTextParser.RULE_list);
    var _la = 0; // Token type
    try {
        this.state = 222;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 170;
            this.match(IonTextParser.L_BRACKET);
            this.state = 174;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 171;
                    this.ws(); 
                }
                this.state = 176;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
            }

            this.state = 177;
            this.value();
            this.state = 181;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 178;
                    this.ws(); 
                }
                this.state = 183;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
            }

            this.state = 194;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 184;
                    this.match(IonTextParser.COMMA);
                    this.state = 188;
                    this._errHandler.sync(this);
                    var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
                    while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                        if(_alt===1) {
                            this.state = 185;
                            this.ws(); 
                        }
                        this.state = 190;
                        this._errHandler.sync(this);
                        _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
                    }

                    this.state = 191;
                    this.value(); 
                }
                this.state = 196;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
            }

            this.state = 200;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IonTextParser.WHITESPACE) | (1 << IonTextParser.INLINE_COMMENT) | (1 << IonTextParser.BLOCK_COMMENT))) !== 0)) {
                this.state = 197;
                this.ws();
                this.state = 202;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 210;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===IonTextParser.COMMA) {
                this.state = 203;
                this.match(IonTextParser.COMMA);
                this.state = 207;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IonTextParser.WHITESPACE) | (1 << IonTextParser.INLINE_COMMENT) | (1 << IonTextParser.BLOCK_COMMENT))) !== 0)) {
                    this.state = 204;
                    this.ws();
                    this.state = 209;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }

            this.state = 212;
            this.match(IonTextParser.R_BRACKET);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 214;
            this.match(IonTextParser.L_BRACKET);
            this.state = 218;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IonTextParser.WHITESPACE) | (1 << IonTextParser.INLINE_COMMENT) | (1 << IonTextParser.BLOCK_COMMENT))) !== 0)) {
                this.state = 215;
                this.ws();
                this.state = 220;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 221;
            this.match(IonTextParser.R_BRACKET);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SexpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IonTextParser.RULE_sexp;
    return this;
}

SexpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SexpContext.prototype.constructor = SexpContext;

SexpContext.prototype.L_PAREN = function() {
    return this.getToken(IonTextParser.L_PAREN, 0);
};

SexpContext.prototype.R_PAREN = function() {
    return this.getToken(IonTextParser.R_PAREN, 0);
};

SexpContext.prototype.sexp_value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Sexp_valueContext);
    } else {
        return this.getTypedRuleContext(Sexp_valueContext,i);
    }
};

SexpContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

SexpContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

SexpContext.prototype.enterRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.enterSexp(this);
	}
};

SexpContext.prototype.exitRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.exitSexp(this);
	}
};




IonTextParser.SexpContext = SexpContext;

IonTextParser.prototype.sexp = function() {

    var localctx = new SexpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, IonTextParser.RULE_sexp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 224;
        this.match(IonTextParser.L_PAREN);
        this.state = 234;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,25,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 228;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 225;
                        this.ws(); 
                    }
                    this.state = 230;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
                }

                this.state = 231;
                this.sexp_value(); 
            }
            this.state = 236;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,25,this._ctx);
        }

        this.state = 240;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 237;
                this.ws(); 
            }
            this.state = 242;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
        }

        this.state = 244;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IonTextParser.L_BRACKET) | (1 << IonTextParser.L_PAREN) | (1 << IonTextParser.L_CURLY) | (1 << IonTextParser.WHITESPACE) | (1 << IonTextParser.INLINE_COMMENT) | (1 << IonTextParser.BLOCK_COMMENT) | (1 << IonTextParser.NULL) | (1 << IonTextParser.TYPE) | (1 << IonTextParser.BOOL) | (1 << IonTextParser.TIMESTAMP) | (1 << IonTextParser.BIN_INTEGER) | (1 << IonTextParser.DEC_INTEGER) | (1 << IonTextParser.HEX_INTEGER) | (1 << IonTextParser.SPECIAL_FLOAT) | (1 << IonTextParser.FLOAT) | (1 << IonTextParser.DECIMAL) | (1 << IonTextParser.QUOTED_SYMBOL) | (1 << IonTextParser.IDENTIFIER_SYMBOL) | (1 << IonTextParser.SHORT_QUOTED_STRING) | (1 << IonTextParser.LONG_QUOTED_STRING) | (1 << IonTextParser.SHORT_QUOTED_CLOB) | (1 << IonTextParser.LONG_QUOTED_CLOB) | (1 << IonTextParser.BLOB))) !== 0)) {
            this.state = 243;
            this.value();
        }

        this.state = 246;
        this.match(IonTextParser.R_PAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Sexp_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IonTextParser.RULE_sexp_value;
    return this;
}

Sexp_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Sexp_valueContext.prototype.constructor = Sexp_valueContext;

Sexp_valueContext.prototype.sexp_value = function() {
    return this.getTypedRuleContext(Sexp_valueContext,0);
};

Sexp_valueContext.prototype.annotation = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AnnotationContext);
    } else {
        return this.getTypedRuleContext(AnnotationContext,i);
    }
};

Sexp_valueContext.prototype.sexp_delimiting_entity = function() {
    return this.getTypedRuleContext(Sexp_delimiting_entityContext,0);
};

Sexp_valueContext.prototype.operator = function() {
    return this.getTypedRuleContext(OperatorContext,0);
};

Sexp_valueContext.prototype.numeric_entity = function() {
    return this.getTypedRuleContext(Numeric_entityContext,0);
};

Sexp_valueContext.prototype.ws = function() {
    return this.getTypedRuleContext(WsContext,0);
};

Sexp_valueContext.prototype.quoted_annotation = function() {
    return this.getTypedRuleContext(Quoted_annotationContext,0);
};

Sexp_valueContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

Sexp_valueContext.prototype.sexp_keyword_entity = function() {
    return this.getTypedRuleContext(Sexp_keyword_entityContext,0);
};

Sexp_valueContext.prototype.sexp_keyword_delimiting_entity = function() {
    return this.getTypedRuleContext(Sexp_keyword_delimiting_entityContext,0);
};

Sexp_valueContext.prototype.NULL = function() {
    return this.getToken(IonTextParser.NULL, 0);
};

Sexp_valueContext.prototype.sexp_null_delimiting_entity = function() {
    return this.getTypedRuleContext(Sexp_null_delimiting_entityContext,0);
};

Sexp_valueContext.prototype.enterRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.enterSexp_value(this);
	}
};

Sexp_valueContext.prototype.exitRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.exitSexp_value(this);
	}
};




IonTextParser.Sexp_valueContext = Sexp_valueContext;

IonTextParser.prototype.sexp_value = function() {

    var localctx = new Sexp_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, IonTextParser.RULE_sexp_value);
    try {
        this.state = 285;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 249; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 248;
            		this.annotation();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 251; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,28, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 253;
            this.sexp_value();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 255;
            this.sexp_delimiting_entity();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 256;
            this.operator();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 257;
            this.numeric_entity();
            this.state = 258;
            this.ws();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 260;
            this.numeric_entity();
            this.state = 261;
            this.quoted_annotation();
            this.state = 262;
            this.value();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 264;
            this.numeric_entity();
            this.state = 265;
            this.sexp_delimiting_entity();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 267;
            this.sexp_keyword_entity();
            this.state = 268;
            this.ws();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 270;
            this.sexp_keyword_entity();
            this.state = 271;
            this.quoted_annotation();
            this.state = 272;
            this.value();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 274;
            this.sexp_keyword_entity();
            this.state = 275;
            this.sexp_keyword_delimiting_entity();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 277;
            this.match(IonTextParser.NULL);
            this.state = 278;
            this.ws();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 279;
            this.match(IonTextParser.NULL);
            this.state = 280;
            this.quoted_annotation();
            this.state = 281;
            this.value();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 283;
            this.match(IonTextParser.NULL);
            this.state = 284;
            this.sexp_null_delimiting_entity();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Sexp_delimiting_entityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IonTextParser.RULE_sexp_delimiting_entity;
    return this;
}

Sexp_delimiting_entityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Sexp_delimiting_entityContext.prototype.constructor = Sexp_delimiting_entityContext;

Sexp_delimiting_entityContext.prototype.delimiting_entity = function() {
    return this.getTypedRuleContext(Delimiting_entityContext,0);
};

Sexp_delimiting_entityContext.prototype.enterRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.enterSexp_delimiting_entity(this);
	}
};

Sexp_delimiting_entityContext.prototype.exitRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.exitSexp_delimiting_entity(this);
	}
};




IonTextParser.Sexp_delimiting_entityContext = Sexp_delimiting_entityContext;

IonTextParser.prototype.sexp_delimiting_entity = function() {

    var localctx = new Sexp_delimiting_entityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, IonTextParser.RULE_sexp_delimiting_entity);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 287;
        this.delimiting_entity();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Sexp_keyword_delimiting_entityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IonTextParser.RULE_sexp_keyword_delimiting_entity;
    return this;
}

Sexp_keyword_delimiting_entityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Sexp_keyword_delimiting_entityContext.prototype.constructor = Sexp_keyword_delimiting_entityContext;

Sexp_keyword_delimiting_entityContext.prototype.sexp_delimiting_entity = function() {
    return this.getTypedRuleContext(Sexp_delimiting_entityContext,0);
};

Sexp_keyword_delimiting_entityContext.prototype.numeric_entity = function() {
    return this.getTypedRuleContext(Numeric_entityContext,0);
};

Sexp_keyword_delimiting_entityContext.prototype.operator = function() {
    return this.getTypedRuleContext(OperatorContext,0);
};

Sexp_keyword_delimiting_entityContext.prototype.enterRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.enterSexp_keyword_delimiting_entity(this);
	}
};

Sexp_keyword_delimiting_entityContext.prototype.exitRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.exitSexp_keyword_delimiting_entity(this);
	}
};




IonTextParser.Sexp_keyword_delimiting_entityContext = Sexp_keyword_delimiting_entityContext;

IonTextParser.prototype.sexp_keyword_delimiting_entity = function() {

    var localctx = new Sexp_keyword_delimiting_entityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, IonTextParser.RULE_sexp_keyword_delimiting_entity);
    try {
        this.state = 292;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case IonTextParser.L_BRACKET:
        case IonTextParser.L_PAREN:
        case IonTextParser.L_CURLY:
        case IonTextParser.WHITESPACE:
        case IonTextParser.INLINE_COMMENT:
        case IonTextParser.BLOCK_COMMENT:
        case IonTextParser.QUOTED_SYMBOL:
        case IonTextParser.SHORT_QUOTED_STRING:
        case IonTextParser.LONG_QUOTED_STRING:
        case IonTextParser.SHORT_QUOTED_CLOB:
        case IonTextParser.LONG_QUOTED_CLOB:
        case IonTextParser.BLOB:
            this.enterOuterAlt(localctx, 1);
            this.state = 289;
            this.sexp_delimiting_entity();
            break;
        case IonTextParser.TIMESTAMP:
        case IonTextParser.BIN_INTEGER:
        case IonTextParser.DEC_INTEGER:
        case IonTextParser.HEX_INTEGER:
        case IonTextParser.FLOAT:
        case IonTextParser.DECIMAL:
            this.enterOuterAlt(localctx, 2);
            this.state = 290;
            this.numeric_entity();
            break;
        case IonTextParser.DOT:
        case IonTextParser.NON_DOT_OPERATOR:
            this.enterOuterAlt(localctx, 3);
            this.state = 291;
            this.operator();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Sexp_null_delimiting_entityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IonTextParser.RULE_sexp_null_delimiting_entity;
    return this;
}

Sexp_null_delimiting_entityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Sexp_null_delimiting_entityContext.prototype.constructor = Sexp_null_delimiting_entityContext;

Sexp_null_delimiting_entityContext.prototype.delimiting_entity = function() {
    return this.getTypedRuleContext(Delimiting_entityContext,0);
};

Sexp_null_delimiting_entityContext.prototype.NON_DOT_OPERATOR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(IonTextParser.NON_DOT_OPERATOR);
    } else {
        return this.getToken(IonTextParser.NON_DOT_OPERATOR, i);
    }
};


Sexp_null_delimiting_entityContext.prototype.enterRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.enterSexp_null_delimiting_entity(this);
	}
};

Sexp_null_delimiting_entityContext.prototype.exitRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.exitSexp_null_delimiting_entity(this);
	}
};




IonTextParser.Sexp_null_delimiting_entityContext = Sexp_null_delimiting_entityContext;

IonTextParser.prototype.sexp_null_delimiting_entity = function() {

    var localctx = new Sexp_null_delimiting_entityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, IonTextParser.RULE_sexp_null_delimiting_entity);
    try {
        this.state = 300;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case IonTextParser.L_BRACKET:
        case IonTextParser.L_PAREN:
        case IonTextParser.L_CURLY:
        case IonTextParser.WHITESPACE:
        case IonTextParser.INLINE_COMMENT:
        case IonTextParser.BLOCK_COMMENT:
        case IonTextParser.QUOTED_SYMBOL:
        case IonTextParser.SHORT_QUOTED_STRING:
        case IonTextParser.LONG_QUOTED_STRING:
        case IonTextParser.SHORT_QUOTED_CLOB:
        case IonTextParser.LONG_QUOTED_CLOB:
        case IonTextParser.BLOB:
            this.enterOuterAlt(localctx, 1);
            this.state = 294;
            this.delimiting_entity();
            break;
        case IonTextParser.NON_DOT_OPERATOR:
            this.enterOuterAlt(localctx, 2);
            this.state = 296; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 295;
            		this.match(IonTextParser.NON_DOT_OPERATOR);
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 298; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,31, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Sexp_keyword_entityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IonTextParser.RULE_sexp_keyword_entity;
    return this;
}

Sexp_keyword_entityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Sexp_keyword_entityContext.prototype.constructor = Sexp_keyword_entityContext;

Sexp_keyword_entityContext.prototype.typed_null = function() {
    return this.getTypedRuleContext(Typed_nullContext,0);
};

Sexp_keyword_entityContext.prototype.BOOL = function() {
    return this.getToken(IonTextParser.BOOL, 0);
};

Sexp_keyword_entityContext.prototype.SPECIAL_FLOAT = function() {
    return this.getToken(IonTextParser.SPECIAL_FLOAT, 0);
};

Sexp_keyword_entityContext.prototype.IDENTIFIER_SYMBOL = function() {
    return this.getToken(IonTextParser.IDENTIFIER_SYMBOL, 0);
};

Sexp_keyword_entityContext.prototype.TYPE = function() {
    return this.getToken(IonTextParser.TYPE, 0);
};

Sexp_keyword_entityContext.prototype.enterRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.enterSexp_keyword_entity(this);
	}
};

Sexp_keyword_entityContext.prototype.exitRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.exitSexp_keyword_entity(this);
	}
};




IonTextParser.Sexp_keyword_entityContext = Sexp_keyword_entityContext;

IonTextParser.prototype.sexp_keyword_entity = function() {

    var localctx = new Sexp_keyword_entityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, IonTextParser.RULE_sexp_keyword_entity);
    try {
        this.state = 307;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case IonTextParser.NULL:
            this.enterOuterAlt(localctx, 1);
            this.state = 302;
            this.typed_null();
            break;
        case IonTextParser.BOOL:
            this.enterOuterAlt(localctx, 2);
            this.state = 303;
            this.match(IonTextParser.BOOL);
            break;
        case IonTextParser.SPECIAL_FLOAT:
            this.enterOuterAlt(localctx, 3);
            this.state = 304;
            this.match(IonTextParser.SPECIAL_FLOAT);
            break;
        case IonTextParser.IDENTIFIER_SYMBOL:
            this.enterOuterAlt(localctx, 4);
            this.state = 305;
            this.match(IonTextParser.IDENTIFIER_SYMBOL);
            break;
        case IonTextParser.TYPE:
            this.enterOuterAlt(localctx, 5);
            this.state = 306;
            this.match(IonTextParser.TYPE);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IonTextParser.RULE_operator;
    return this;
}

OperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorContext.prototype.constructor = OperatorContext;

OperatorContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(IonTextParser.DOT);
    } else {
        return this.getToken(IonTextParser.DOT, i);
    }
};


OperatorContext.prototype.NON_DOT_OPERATOR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(IonTextParser.NON_DOT_OPERATOR);
    } else {
        return this.getToken(IonTextParser.NON_DOT_OPERATOR, i);
    }
};


OperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.enterOperator(this);
	}
};

OperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.exitOperator(this);
	}
};




IonTextParser.OperatorContext = OperatorContext;

IonTextParser.prototype.operator = function() {

    var localctx = new OperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, IonTextParser.RULE_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 310; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 309;
        		_la = this._input.LA(1);
        		if(!(_la===IonTextParser.DOT || _la===IonTextParser.NON_DOT_OPERATOR)) {
        		this._errHandler.recoverInline(this);
        		}
        		else {
        			this._errHandler.reportMatch(this);
        		    this.consume();
        		}
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 312; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,34, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StructContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IonTextParser.RULE_struct;
    return this;
}

StructContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StructContext.prototype.constructor = StructContext;

StructContext.prototype.L_CURLY = function() {
    return this.getToken(IonTextParser.L_CURLY, 0);
};

StructContext.prototype.field = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FieldContext);
    } else {
        return this.getTypedRuleContext(FieldContext,i);
    }
};

StructContext.prototype.R_CURLY = function() {
    return this.getToken(IonTextParser.R_CURLY, 0);
};

StructContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

StructContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(IonTextParser.COMMA);
    } else {
        return this.getToken(IonTextParser.COMMA, i);
    }
};


StructContext.prototype.enterRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.enterStruct(this);
	}
};

StructContext.prototype.exitRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.exitStruct(this);
	}
};




IonTextParser.StructContext = StructContext;

IonTextParser.prototype.struct = function() {

    var localctx = new StructContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, IonTextParser.RULE_struct);
    var _la = 0; // Token type
    try {
        this.state = 366;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 314;
            this.match(IonTextParser.L_CURLY);
            this.state = 318;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,35,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 315;
                    this.ws(); 
                }
                this.state = 320;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,35,this._ctx);
            }

            this.state = 321;
            this.field();
            this.state = 338;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,38,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 325;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IonTextParser.WHITESPACE) | (1 << IonTextParser.INLINE_COMMENT) | (1 << IonTextParser.BLOCK_COMMENT))) !== 0)) {
                        this.state = 322;
                        this.ws();
                        this.state = 327;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 328;
                    this.match(IonTextParser.COMMA);
                    this.state = 332;
                    this._errHandler.sync(this);
                    var _alt = this._interp.adaptivePredict(this._input,37,this._ctx)
                    while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                        if(_alt===1) {
                            this.state = 329;
                            this.ws(); 
                        }
                        this.state = 334;
                        this._errHandler.sync(this);
                        _alt = this._interp.adaptivePredict(this._input,37,this._ctx);
                    }

                    this.state = 335;
                    this.field(); 
                }
                this.state = 340;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,38,this._ctx);
            }

            this.state = 344;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IonTextParser.WHITESPACE) | (1 << IonTextParser.INLINE_COMMENT) | (1 << IonTextParser.BLOCK_COMMENT))) !== 0)) {
                this.state = 341;
                this.ws();
                this.state = 346;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 354;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===IonTextParser.COMMA) {
                this.state = 347;
                this.match(IonTextParser.COMMA);
                this.state = 351;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IonTextParser.WHITESPACE) | (1 << IonTextParser.INLINE_COMMENT) | (1 << IonTextParser.BLOCK_COMMENT))) !== 0)) {
                    this.state = 348;
                    this.ws();
                    this.state = 353;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }

            this.state = 356;
            this.match(IonTextParser.R_CURLY);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 358;
            this.match(IonTextParser.L_CURLY);
            this.state = 362;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IonTextParser.WHITESPACE) | (1 << IonTextParser.INLINE_COMMENT) | (1 << IonTextParser.BLOCK_COMMENT))) !== 0)) {
                this.state = 359;
                this.ws();
                this.state = 364;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 365;
            this.match(IonTextParser.R_CURLY);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IonTextParser.RULE_field;
    return this;
}

FieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldContext.prototype.constructor = FieldContext;

FieldContext.prototype.field_name = function() {
    return this.getTypedRuleContext(Field_nameContext,0);
};

FieldContext.prototype.COLON = function() {
    return this.getToken(IonTextParser.COLON, 0);
};

FieldContext.prototype.entity = function() {
    return this.getTypedRuleContext(EntityContext,0);
};

FieldContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

FieldContext.prototype.annotation = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AnnotationContext);
    } else {
        return this.getTypedRuleContext(AnnotationContext,i);
    }
};

FieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.enterField(this);
	}
};

FieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.exitField(this);
	}
};




IonTextParser.FieldContext = FieldContext;

IonTextParser.prototype.field = function() {

    var localctx = new FieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, IonTextParser.RULE_field);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 368;
        this.field_name();
        this.state = 372;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IonTextParser.WHITESPACE) | (1 << IonTextParser.INLINE_COMMENT) | (1 << IonTextParser.BLOCK_COMMENT))) !== 0)) {
            this.state = 369;
            this.ws();
            this.state = 374;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 375;
        this.match(IonTextParser.COLON);
        this.state = 379;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,45,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 376;
                this.ws(); 
            }
            this.state = 381;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,45,this._ctx);
        }

        this.state = 385;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,46,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 382;
                this.annotation(); 
            }
            this.state = 387;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,46,this._ctx);
        }

        this.state = 388;
        this.entity();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Any_nullContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IonTextParser.RULE_any_null;
    return this;
}

Any_nullContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Any_nullContext.prototype.constructor = Any_nullContext;

Any_nullContext.prototype.NULL = function() {
    return this.getToken(IonTextParser.NULL, 0);
};

Any_nullContext.prototype.typed_null = function() {
    return this.getTypedRuleContext(Typed_nullContext,0);
};

Any_nullContext.prototype.enterRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.enterAny_null(this);
	}
};

Any_nullContext.prototype.exitRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.exitAny_null(this);
	}
};




IonTextParser.Any_nullContext = Any_nullContext;

IonTextParser.prototype.any_null = function() {

    var localctx = new Any_nullContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, IonTextParser.RULE_any_null);
    try {
        this.state = 392;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 390;
            this.match(IonTextParser.NULL);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 391;
            this.typed_null();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Typed_nullContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IonTextParser.RULE_typed_null;
    return this;
}

Typed_nullContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Typed_nullContext.prototype.constructor = Typed_nullContext;

Typed_nullContext.prototype.NULL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(IonTextParser.NULL);
    } else {
        return this.getToken(IonTextParser.NULL, i);
    }
};


Typed_nullContext.prototype.DOT = function() {
    return this.getToken(IonTextParser.DOT, 0);
};

Typed_nullContext.prototype.TYPE = function() {
    return this.getToken(IonTextParser.TYPE, 0);
};

Typed_nullContext.prototype.enterRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.enterTyped_null(this);
	}
};

Typed_nullContext.prototype.exitRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.exitTyped_null(this);
	}
};




IonTextParser.Typed_nullContext = Typed_nullContext;

IonTextParser.prototype.typed_null = function() {

    var localctx = new Typed_nullContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, IonTextParser.RULE_typed_null);
    try {
        this.state = 400;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 394;
            this.match(IonTextParser.NULL);
            this.state = 395;
            this.match(IonTextParser.DOT);
            this.state = 396;
            this.match(IonTextParser.NULL);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 397;
            this.match(IonTextParser.NULL);
            this.state = 398;
            this.match(IonTextParser.DOT);
            this.state = 399;
            this.match(IonTextParser.TYPE);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Field_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IonTextParser.RULE_field_name;
    return this;
}

Field_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Field_nameContext.prototype.constructor = Field_nameContext;

Field_nameContext.prototype.symbol = function() {
    return this.getTypedRuleContext(SymbolContext,0);
};

Field_nameContext.prototype.SHORT_QUOTED_STRING = function() {
    return this.getToken(IonTextParser.SHORT_QUOTED_STRING, 0);
};

Field_nameContext.prototype.LONG_QUOTED_STRING = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(IonTextParser.LONG_QUOTED_STRING);
    } else {
        return this.getToken(IonTextParser.LONG_QUOTED_STRING, i);
    }
};


Field_nameContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

Field_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.enterField_name(this);
	}
};

Field_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.exitField_name(this);
	}
};




IonTextParser.Field_nameContext = Field_nameContext;

IonTextParser.prototype.field_name = function() {

    var localctx = new Field_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, IonTextParser.RULE_field_name);
    var _la = 0; // Token type
    try {
        this.state = 415;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case IonTextParser.TYPE:
        case IonTextParser.QUOTED_SYMBOL:
        case IonTextParser.IDENTIFIER_SYMBOL:
            this.enterOuterAlt(localctx, 1);
            this.state = 402;
            this.symbol();
            break;
        case IonTextParser.SHORT_QUOTED_STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 403;
            this.match(IonTextParser.SHORT_QUOTED_STRING);
            break;
        case IonTextParser.WHITESPACE:
        case IonTextParser.INLINE_COMMENT:
        case IonTextParser.BLOCK_COMMENT:
        case IonTextParser.LONG_QUOTED_STRING:
            this.enterOuterAlt(localctx, 3);
            this.state = 411; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 407;
            		this._errHandler.sync(this);
            		_la = this._input.LA(1);
            		while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IonTextParser.WHITESPACE) | (1 << IonTextParser.INLINE_COMMENT) | (1 << IonTextParser.BLOCK_COMMENT))) !== 0)) {
            		    this.state = 404;
            		    this.ws();
            		    this.state = 409;
            		    this._errHandler.sync(this);
            		    _la = this._input.LA(1);
            		}
            		this.state = 410;
            		this.match(IonTextParser.LONG_QUOTED_STRING);
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 413; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,50, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Quoted_textContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IonTextParser.RULE_quoted_text;
    return this;
}

Quoted_textContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Quoted_textContext.prototype.constructor = Quoted_textContext;

Quoted_textContext.prototype.QUOTED_SYMBOL = function() {
    return this.getToken(IonTextParser.QUOTED_SYMBOL, 0);
};

Quoted_textContext.prototype.SHORT_QUOTED_STRING = function() {
    return this.getToken(IonTextParser.SHORT_QUOTED_STRING, 0);
};

Quoted_textContext.prototype.LONG_QUOTED_STRING = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(IonTextParser.LONG_QUOTED_STRING);
    } else {
        return this.getToken(IonTextParser.LONG_QUOTED_STRING, i);
    }
};


Quoted_textContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

Quoted_textContext.prototype.enterRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.enterQuoted_text(this);
	}
};

Quoted_textContext.prototype.exitRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.exitQuoted_text(this);
	}
};




IonTextParser.Quoted_textContext = Quoted_textContext;

IonTextParser.prototype.quoted_text = function() {

    var localctx = new Quoted_textContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, IonTextParser.RULE_quoted_text);
    var _la = 0; // Token type
    try {
        this.state = 430;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case IonTextParser.QUOTED_SYMBOL:
            this.enterOuterAlt(localctx, 1);
            this.state = 417;
            this.match(IonTextParser.QUOTED_SYMBOL);
            break;
        case IonTextParser.SHORT_QUOTED_STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 418;
            this.match(IonTextParser.SHORT_QUOTED_STRING);
            break;
        case IonTextParser.WHITESPACE:
        case IonTextParser.INLINE_COMMENT:
        case IonTextParser.BLOCK_COMMENT:
        case IonTextParser.LONG_QUOTED_STRING:
            this.enterOuterAlt(localctx, 3);
            this.state = 426; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 422;
            		this._errHandler.sync(this);
            		_la = this._input.LA(1);
            		while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IonTextParser.WHITESPACE) | (1 << IonTextParser.INLINE_COMMENT) | (1 << IonTextParser.BLOCK_COMMENT))) !== 0)) {
            		    this.state = 419;
            		    this.ws();
            		    this.state = 424;
            		    this._errHandler.sync(this);
            		    _la = this._input.LA(1);
            		}
            		this.state = 425;
            		this.match(IonTextParser.LONG_QUOTED_STRING);
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 428; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,53, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SymbolContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IonTextParser.RULE_symbol;
    return this;
}

SymbolContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SymbolContext.prototype.constructor = SymbolContext;

SymbolContext.prototype.IDENTIFIER_SYMBOL = function() {
    return this.getToken(IonTextParser.IDENTIFIER_SYMBOL, 0);
};

SymbolContext.prototype.TYPE = function() {
    return this.getToken(IonTextParser.TYPE, 0);
};

SymbolContext.prototype.QUOTED_SYMBOL = function() {
    return this.getToken(IonTextParser.QUOTED_SYMBOL, 0);
};

SymbolContext.prototype.enterRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.enterSymbol(this);
	}
};

SymbolContext.prototype.exitRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.exitSymbol(this);
	}
};




IonTextParser.SymbolContext = SymbolContext;

IonTextParser.prototype.symbol = function() {

    var localctx = new SymbolContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, IonTextParser.RULE_symbol);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 432;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IonTextParser.TYPE) | (1 << IonTextParser.QUOTED_SYMBOL) | (1 << IonTextParser.IDENTIFIER_SYMBOL))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IonTextParser.RULE_ws;
    return this;
}

WsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WsContext.prototype.constructor = WsContext;

WsContext.prototype.WHITESPACE = function() {
    return this.getToken(IonTextParser.WHITESPACE, 0);
};

WsContext.prototype.INLINE_COMMENT = function() {
    return this.getToken(IonTextParser.INLINE_COMMENT, 0);
};

WsContext.prototype.BLOCK_COMMENT = function() {
    return this.getToken(IonTextParser.BLOCK_COMMENT, 0);
};

WsContext.prototype.enterRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.enterWs(this);
	}
};

WsContext.prototype.exitRule = function(listener) {
    if(listener instanceof IonTextListener ) {
        listener.exitWs(this);
	}
};




IonTextParser.WsContext = WsContext;

IonTextParser.prototype.ws = function() {

    var localctx = new WsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, IonTextParser.RULE_ws);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 434;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IonTextParser.WHITESPACE) | (1 << IonTextParser.INLINE_COMMENT) | (1 << IonTextParser.BLOCK_COMMENT))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.IonTextParser = IonTextParser;
