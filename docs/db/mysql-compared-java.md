
MySQL Connector/J 对于 MySQL 数据类型和 Java 数据类型之间的转换是很灵活的。
一般来讲，任何 MySQL 数据类型都可以被转换为一个 `java.lang.String`，任何 MySQL 数字类型都可以被转换为任何一种能 Java 数字类型（当然这也可能出现一些四舍五入，溢出，精度丢失之类的问题）

>注意：

Connector/J 发出警告或引发 JDBC 规范要求的 DataTruncation 异常，除非使用属性 jdbcCompliantTruncation 将连接配置不为这样做，否则将其设置为 false。

下表列出了始终保证可以正常工作的转换。第一列列出了一个或多个 MySQL 数据类型，第二列列出了一个或多个可以将 MySQL 类型转换为 Java 类型

## 转换表

|   MySQL 数据类型	|  可被转换成 Java 类型 	|
|---	|---	|
|  CHAR, VARCHAR, BLOB, TEXT, ENUM, and SET 	|   java.lang.String, java.io.InputStream, java.io.Reader, java.sql.Blob, java.sql.Clob	|
|  FLOAT, REAL, DOUBLE PRECISION, NUMERIC, DECIMAL, TINYINT, SMALLINT, MEDIUMINT, INTEGER, BIGINT 	|   java.lang.String, java.lang.Short, java.lang.Integer, java.lang.Long, java.lang.Double, java.math.BigDecimal	|
|  DATE, TIME, DATETIME, TIMESTAMP 	|  java.lang.String, java.sql.Date, java.sql.Timestamp 	|

>注意

## 

`ResultSet.getObject()`方法使用 MySQL 和 Java 类型之间的类型转换，并在适当时遵循 JDBC 规范。ResultSetMeteData 返回值。下表显示了 `GetColumnTypeName()` 和 `ResultSetMeteData.GetColumnClassName()`。有关 JDBC 类型的更多信息，请参考 java.sql.Types 类上的参考

|   MySQL 类型名	|    GetColumnTypeName返回值 	|  返回的 Java 类 	|
|:-:	|:-:	|---	|
|  BIT(1) 	|   BIT	|   	java.lang.Boolean	|
|  BIT( > 1) 	|   BIT	|   byte[]	|
|  TINYINT 	|   TINYINT	|  如果 tinyInt1isBit 配置设置为 true(默认为 true)，是 java.lang.Boolean，存储空间 为 1；否则是为 java.lang.Integer 	|
|  BOOL, BOOLEAN 	|  TINYINT 	|   参见 TINYINT。这些是 TINYINT(1) 另一种写法而已	|
|  SMALLINT[(M)] [UNSIGNED] 	|   SMALLINT [UNSIGNED]	|   java.lang.Integer(不管是否无符)	|
|  MEDIUMINT[(M)] [UNSIGNED] 	|   MEDIUMINT [UNSIGNED]	|   java.lang.Integer；无符的话是 java.lang.Long(C/J 3.1 或更早)，或者 java.lang.Integer(C/J 5.0 或更晚)	|
|  INT,INTEGER[(M)] [UNSIGNED] 	|   INTEGER [UNSIGNED]	|   java.lang.Integer；无符的话是 java.lang.Long	|
|  BIGINT[(M)] [UNSIGNED] 	|   BIGINT [UNSIGNED]	|   java.lang.Long；无符的话是 java.math.BigInteger	|
|  FLOAT[(M,D)] 	|   FLOAT	|   java.lang.Float	|
|  DOUBLE[(M,B)] 	|   DOUBLE	|   java.lang.Double	|
|  DECIMAL[(M[,D])] 	|  DECIMAL 	|   java.math.BigDecimal	|
|  DATE 	|   DATE	|  java.sql.Date 	|
|  DATETIME 	|   DATETIME	|   java.sql.Timestamp	|
|  TIMESTAMP[(M)] 	|   TIMESTAMP	|   java.sql.Timestamp	|
|  TIME 	|   TIME	|   java.sql.Time	|
|  YEAR[(2|4)] 	|   YEAR	|   如果 yearIsDateType  配置设置为 false，返回的对象类型为 java.sql.Short；如果设置为 true(默认为 true)，返回的对象类型是 java.sql.Date，其具体时间是为一月一日零时零分	|
|  CHAR(M) 	|   CHAR	|   java.lang.String(除非该列字符集设置为 BINARY，那样返回 byte[])	|
|  VARCHAR(M) [BINARY] 	|   VARCHAR	|   java.lang.String(除非该列字符集设置为 BINARY，那样返回 byte[])	|
|  BINARY(M) 	|   BINARY	|   byte[]	|
|  VARBINARY(M)	 	|   VARBINARY	|   byte[]	|
|  TINYBLOB 	|   TINYBLOB	|   byte[]	|
|  TINYTEXT 	|   VARCHAR	|   java.lang.String	|
|  BLOB 	|   BLOB	|   byte[]	|
|  TEXT 	|   VARCHAR	|   java.lang.String	|
|  MEDIUMBLOB 	|   MEDIUMBLOB	|   byte[]	|
|  MEDIUMTEXT 	|   VARCHAR	|   java.lang.String	|
|  LONGBLOB 	|   LONGBLOB	|   byte[]	|
|  LONGTEXT 	|   VARCHAR	|   java.lang.String	|
|  ENUM('value1','value2',...) 	|   CHAR	|   java.lang.String	|
|  ET('value1','value2',...) 	|   CHAR	|   java.lang.String	|

!>[Java, JDBC, and MySQL Types](https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-reference-type-conversions.html)