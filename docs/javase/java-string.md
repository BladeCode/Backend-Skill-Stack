
## String

* String 被 **final** 修饰，是一个终态类，因此不能被继承
* String 是一个常量，创建后就 **不能被修改** 

### StringPool

字符串池，所有字符串在第一次生成时都会放在字符串池中

#### 字面赋值

形如 `String str = "aaa";`方式赋值，就是显示的字面值方式赋值，其内部的过程是，查找 StringPool 中是否存在`"aaa"`这个对象
* 如果存在，则不创建任何对象，直接将 StringPool 中的这个 `"aaa"` 对象返回来，赋给 str 引用
* 如果不存在，则在 StringPool 中创建一个`"aaa"`对象，然后将 StrigPool 中的这个`"aaa"`对象的地址返回来，赋给引用变量 str，这样 str 会指向 StringPool 中的这个`"aaa"`字符串对象

!>[JDK8 String Literals](https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.5)

#### new 赋值

```java
String str = new String("aaa");
```

!> `new` 就会创建新对象，`new` 出来的对象都是存放在 **<font color=#FF0000>堆（heap）</font>** 中，StrigPool 是在 **<font color=#FF0000>栈（Stack）</font>** 中

检查 StringPool 中是否存在`"aaa"`对象，
* 如果存在，就不会在 StringPool 中创建对象，直接在<font color=#FF0000>堆</font>中`"aaa"`创建对象，并将<font color=#FF0000>堆</font>中创建`"aaa"`的对象地址返回来，赋给 引用变量 str
* 如果不存在，首先在 StringPool 中创建一个`"aaa"`对象，然后再在<font color=#FF0000>堆</font>中创建一个`"aaa"`对象，然后将堆中的这个`"aaa"`对象地址返回来，赋给 str 引用，导致 str 指向了堆中所创建的这个`"aaa"`对象

#### 总结

实际开发中，我们通常使用第一中方式（字面赋值）去赋值，new 方式除了在 StringPool 中创建对象外，还会在堆中创建对象，而大部分使用 String 是作为临时的变量，用完就丢掉，因此使用字面方式赋值，更能提高效率

## StringBuffer

* StringBuffer 被 **final** 修饰，是一个终态类，因此不能被继承
* StringBuffer 是一个变量，可被修改


## == 与 equals

### ==

1. 对于原生数据类型，比较的是左右两边的值是否相等，
2. 对于引用类型，比较左右两边的引用是否指向同一个对象，或者说左右两边的应用地址是否相同

### equals

equals()方法定义在 Object 类中，因此 Java 中的每个类都具有该方法
* 对于 Object 类的 equals() 方法来说
  * 它是判断调用 equals()方法的应用与传递进来的引用是否一致，及这两个引用是否指向同一个对象
  * 它等价于 ==
* 对于 String 类的 equals() 方法来说，它是判断当前字符串与传递进来的字符串的内容是否一致