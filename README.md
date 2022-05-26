# javascript-learn

## 表达式

### instanceof

为了对表达式 o instanceof f 求值，javascript会求值f.prototype
，然后在o的原型链上查找这个值。如果找到了，则o是f（或f的子类）的实例，
instanceof返回true，否则返回false