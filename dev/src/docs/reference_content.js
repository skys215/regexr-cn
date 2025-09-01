/*
RegExr: Learn, Build, & Test RegEx
Copyright (C) 2017  gskinner.com, inc.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

// this is just raw content for the Reference.
// right now all examples are executed in-browser, so they need to be compatible. Maybe swap to XRegExp at some point.
// TODO: rewrite to use multiline template literals?

let reference_content = {}, o = reference_content;
export default reference_content;

o.label = "正则表达式 参考手册";
o.id = "reference";
o.search = true,
    o.desc = `用于创建正则表达式的元字符列表。
	<p>在列表中 双击 添加到你的正则表达式中。</p>
	<p>点击旁边的箭头来载入示例。</p>`;

o.kids = [
	{
	label: "字符类",
	id: "charclasses",
	desc: "字符类匹配特定集合中的字符。 有许多预定义的字符类，您也可以定义自己的字符集。",
	kids: [

		{
		id:"set",
		label: "字符集",
		desc:"匹配集合中的任何字符。",
		example:["[aeiou]","glib jocks vex dwarves!"],
		token:"[ABC]"
		},
		{
		id:"setnot",
		label: "非集",
		desc:"匹配不在集合中的任何字符。",
		example:["[^aeiou]","glib jocks vex dwarves!"],
		token:"[^ABC]"
		},
		{
		id:"range",
		label: "范围",
		tip:"匹配ASCII码从{{getChar(prev)}}到{{getChar(next)}}的字符 (ASCII码从 {{prev.code}} 到 {{next.code}})。 {{getInsensitive()}}",
		example:["[g-s]","abcdefghijklmnopqrstuvwxyz"],
		desc: "匹配ASCII码在指定范围区间的字符。",
		token:"[A-Z]"
		},
		{
		id:"posixcharclass",
		tip:"匹配在'{{value}}' POSIX类中的任何字符.",
		label:"POSIX类",
		desc:"匹配指定POSIX类中的任何字符。必须存在于字符集中。例如, <code>[[:alnum:]$]</code>将匹配字母数字字符和<code>$</code>.",
		ext:"<p>POSIX类列表，请见<a href='http://www.pcre.org/original/doc/html/pcrepattern.html'>PCRE规范</a>.</p>",
		token:"[:alnum:]"
		},
		{
		id:"dot",
		label: "点",
		tip:"匹配任何字符{{getDotAll()}}.",
		desc:"匹配除换行符之外的任何字符。",
		ext:" 等价于 <code>[^\\n\\r]</code>.",
		example:[".", "glib jocks vex dwarves!"],
		token:"."
		},
		{
		id: "matchanyset",
		label:"完全通配",
		desc:"可以用来匹配所有字符，包括换行符，但是除了dotall标符(<code>s</code>)."+
			"<p>另外一种形式是<code>[^]</code>, 但是它不被所有浏览器支持</p>",
		example:["[\\s\\S]", "glib jocks vex dwarves!"],
		token:"[\\s\\S]"
		},
		{
		id:"unicodegrapheme",
		label:"unicode字素",
		desc:"匹配任意单个Unicode字素（例如，字符）。",
		ext:"这包括换行符（在dotall标识启用下）和被编码成多码点的字素。",
		token:"\\X"
		},
		{
		id:"word",
		label: "单词",
		desc:"匹配字母、数字、下划线。",
		ext:" 只匹配小ASCII码的字符（无声调字母或非罗马英文字符）。 等价于 <code>[A-Za-z0-9_]</code>",
		example:["\\w","bonjour, mon fr\u00E8re"],
		token:"\\w"
		},
		{
		id:"notword",
		label: "非词匹配",
		desc:"匹配非字母、数字、下划线。",
		ext:" 等价于 <code>[^A-Za-z0-9_]</code>",
		example:["\\W","bonjour, mon fr\u00E8re"],
		token:"\\W"
		},
		{
		id:"digit",
		label: "数字",
		desc:"匹配任意数字 (0-9).",
		ext:" 等价于 <code>[0-9]</code>.",
		example:["\\d","+1-(444)-555-1234"],
		token:"\\d"
		},
		{
		id:"notdigit",
		label: "非数字",
		desc:"匹配任意非数字字符 (0-9).",
		ext:" 等价于 <code>[^0-9]</code>.",
		example:["\\D","+1-(444)-555-1234"],
		token:"\\D"
		},
		{
		id:"whitespace",
		label: "空白字符",
		desc:"匹配任何空白字符。(空格, 制表符, 换行符)",
		example:["\\s", "glib jocks vex dwarves!"],
		token:"\\s"
		},
		{
		id:"notwhitespace",
		label: "非空白字符",
		desc:"匹配任何非空白字符。(空格, 制表符, 换行符)",
		example:["\\S", "glib jocks vex dwarves!"],
		token:"\\S"
		},
		{
		id:"hwhitespace",
		label:"横向空白字符",
		desc:"匹配任意横向空白字符（空格、制表符）。",
		token:"\\h"
		},
		{
		id:"nothwhitespace",
		label: "非横向空白字符",
		desc:"匹配任意非横向的空白字符（空格、制表符）。",
		token:"\\H"
		},
		{
		id:"vwhitespace",
		label:"纵向空白字符",
		desc:"匹配任意纵向的空白字符（换行符）。",
		token:"\\v"
		},
		{
		id:"notvwhitespace",
		label: "非纵向空白字符",
		desc:"匹配任意非纵向空白字符（换行符）。",
		token:"\\V"
		},
		{
		id:"linebreak",
		label:"换行符",
		desc:"匹配任意换行符, 包括CRLF对, 和单个CR / LF。",
		token:"\\R"
		},
		{
		id:"notlinebreak",
		label:"非换行符",
		desc:"匹配任意非换行符。",
		ext:" 于点相似（<code>.</code>）但是不会受dotall标识(<code>s</code>)的影响。",
		token:"\\N"
		},
		{
		id:"unicodecat",
		tip:"匹配在 '{{getUniCat()}}' unicode分类的任意字符。",
		label:"unicode分类",
		desc:"匹配在指定Unicode分类里的任意字符。例如，<code>\\p{Ll}</code> 会匹配任意小写字符。",
		ext:"<p>Unicode分类的列表见<a href='http://www.pcre.org/original/doc/html/pcrepattern.html'>PCRE 规范</a>。</p>"+
			"<p>可以用不同语法使用这个特性：</p><p><code>\\p{L}</code> <code>\\pL</code></p>",
		token:"\\p{L}"
		},
		{
		id:"notunicodecat",
		tip:"匹配任意不在 '{{getUniCat()}}' unicode分类里的字符。",
		label:"非uicode分类",
		desc:"匹配任意不在指定Unicode分类里的字符。",
		ext:"<p>Unicode分类的列表见<a href='http://www.pcre.org/original/doc/html/pcrepattern.html'>PCRE 规范</a>。</p>"+
			"<p>可以用不同语法使用这个特性：</p><p><code>\\P{L}</code> <code>\\p{^L}</code> <code>\\PL</code></p>",
		token:"\\P{L}"
		},
		{
		id:"unicodescript",
		tip:"匹配任意在 '{{value}}' 里的Unicode脚本。",
		label:"unicode脚本",
		desc:"匹配任意在指定Unicode脚本里的字符。例如，<code>\\p{Arabic}</code> 会匹配任意阿拉伯脚本。",
		ext:"<p>Unicode脚本的列表见<a href='http://www.pcre.org/original/doc/html/pcrepattern.html'>PCRE 规范</a>。</p>",
		token:"\\p{Han}"
		},
		{
		id:"notunicodescript",
		tip:"匹配任意不在 '{{value}}' 里的Unicode脚本。",
		label:"非unicode脚本",
		desc:"匹配任意不在指定Unicode脚本里的字符。",
		ext:"<p>Unicode脚本的列表见<a href='http://www.pcre.org/original/doc/html/pcrepattern.html'>PCRE 规范</a>。</p>"+
			"<p>可以用不同语法使用这个特性：</p><p><code>\\P{Han}</code> <code>\\p{^Han}</code>",
		token:"\\P{Han}"
		}
	]
	},

	{
	label:"锚定",
	id:"anchors",
	desc:"锚定类比较特殊，它匹配位置，而不是字符。",
	kids:[
		{
		id:"bos",
		label:"字符串起始",
		desc:"匹配字符串的开头",
		ext:" 不像 <code>^</code>，这个不会受多行标识 (<code>m</code>)的影响。这个会匹配到位置，而不是字符。",
		token:"\\A"
		},
		{
		id:"eos",
		label:"字符串结尾",
		desc:"匹配字符串的结尾",
		ext:" 不像 <code>$</code>，这个不会受多行标识 (<code>m</code>)的影响。这个会匹配到位置，而不是字符。",
		token:"\\Z"
		},
		{
		id:"abseos",
		label:"严格的字符串结尾",
		desc:"匹配字符串结尾. 不像 <code>$</code> 或 <code>\\Z</code>, 它不允许尾随换行符。",
		ext:" 这个不会受多行标识 (<code>m</code>)的影响。这个会匹配到位置，而不是字符。",
		token:"\\z"
		},
		{
		id:"bof",
		label:"开头",
		desc:"匹配字符串开头，或者当使用多行标志(<code>m</code>)时，匹配一行的开头。",
		ext:" 这个会匹配到位置，而不是字符。",
		example:["^\\w+","she sells seashells"],
		token:"^"
		},
		{
		id:"eof",
		label:"结尾",
		desc:"匹配字符串结尾，或者当使用多行标志(<code>m</code>)时，匹配一行的结尾。",
		ext:" 这个会匹配到位置，而不是字符。",
		example:["\\w+$","she sells seashells"],
		token:"$"
		},
		{
		id:"wordboundary",
		label:"词边界",
		desc:"匹配一个单词边界，也就是指单词和空格间的位置。",
		ext:" 详情见单词字符类（<code>\w</code>）。",
		example:["s\\b","she sells seashells"],
		token:"\\b"
		},
		{
		id:"notwordboundary",
		label: "非词边界",
		desc:"匹配非单词边界。",
		ext:" 这个会匹配到位置，而不是字符。",
		example:["s\\B","she sells seashells"],
		token:"\\B"
		},
		{
		id:"prevmatchend",
		label: "前匹配项结尾",
		desc:"匹配前一个匹配的结束位置。",
		ext:" 这个会匹配到位置，而不是字符。",
		token:"\\G"
		}
	]
	},

	{
	label: "转义字符",
	id:"escchars",
	desc: "转义序列可用于插入保留字符，特殊字符和Unicode字符。所有转义字符以<code>\\</code>为起始.",
	kids: [
		{
		id:"reservedchar",
		label:"保留字符",
		desc:"以下字符含有特殊含义, 应该以<code>\\</code>(反斜杠)为开头，以表示文字字符："+
			"<p><code>{{getEscChars()}}</code></p>"+
			"<p>在一个字符集中, 只有 <code>\\</code>, <code>-</code>, 和 <code>]</code> 需要被转义。</p>",
		example:["\\+","1 + 1 = 2"],
		token:"\\+",
		show:true
		},
		{
		id:"escoctal",
		label:"八进制转义",
		desc:"八进制转义的形式为<code>\\000</code>。",
		ext:"数字值必须小于255(<code>\\377</code>)。", // PCRE profile adds to ext.
		example:["\\251","RegExr is \u00A92014"],
		token:"\\000"
		},
		{
		id:"eschexadecimal",
		label:"十六进制转义",
		desc:"十六进制转义的形式为<code>\\xFF</code>。",
		example:["\\xA9","RegExr is \u00A92014"],
		token:"\\xFF"
		},
		{
		id:"escunicodeu",
		label:"unicode转义",
		desc:"Unicode转义的形式为<code>\\uFFFF</code>。",
		example:["\\u00A9","RegExr is \u00A92014"],
		token:"\\uFFFF"
		},
		{
		id:"escunicodeub",
		label:"扩展的unicode转义",
		desc:"Unicode转义的形式为<code>\\u{FFFF}</code>。",
		ext:"支持用任意长度十六进制转义的全范围Unicode码点。<p>需要启用Unicode标识（<code>u</code>）。</p>",
		token:"\\u{FFFF}"
		},
		{
		id:"escunicodexb",
		label:"Unicode转义",
		desc:"以<code>\\x{FF}</code>格式转义的Unicode字符。",
		token:"\\x{FF}"
		},
		{
		id:"esccontrolchar",
		label:"转义控制字符",
		desc:"以<code>\\cZ</code>格式转义的Unicode控制字符。",
		ext:"范围从<code>\\cA</code> (SOH, 字符码 1) 至 <code>\\cZ</code> (SUB, 字符码 26)。 <h1>例如：</h1><code>\\cI</code> 匹配（字符码 9）。",
		token:"\\cI"
		},
		{
		id:"escsequence",
		label:"转义序列",
		tip: "匹配文字字符串 '{{value}}'.",
		desc:"所有在<code>\\Q</code>和<code>\\E</code>之间的字符为文字字符串。如果<code>\\E</code>被省略, 它将继续到表达式结尾。",
		ext:" 例如，表达式 <code>/\\Q(?.)\\E/</code> 会匹配到字符 <code>(?.)</code>。",
		token:"\\Q...\\E"
		}
	]
	},

	{
	label: "分组 & 引用",
	id:"groups",
	desc: "分组允许你把一系列的标记一起处理。捕获分组可以用反向引用单独地在结果中使用。",
	kids: [
		{
		id:"group",
		label: "捕获分组",
		desc: "把多个标记分在同一组并创建一个捕获分组，用来创建子串或引用。",
		example:["(ha)+","hahaha haa hah!"],
		token:"(ABC)"
		},
		{
		id:"namedgroup",
		label: "命名捕获分组",
		tip:"创建一个名为'{{name}}'的捕获分组。",
		desc:"创建一个可以通过指定名称引用的捕获分组。",
		ext:"<p>可以用不同语法使用这个特性：</p><p><code>(?'name'ABC)</code> <code>(?P&lt;name>ABC)</code> <code>(?&lt;name>ABC)</code></p>",
		token:"(?<name>ABC)"
		},
		{
		id:"namedref",
		label:"命名引用",
		tip:"匹配名为'{{group.name}}'的捕获分组的结果。",
		desc:"匹配命名捕获分组的结果。",
		ext:"<p>可以用不同语法使用这个特性：</p><p><code>\\k'name'</code> <code>\\k&lt;name></code> <code>\\k{name}</code> <code>\\g{name}</code> <code>(?P=name)</code></p>",
		token:"\\k'name'"
		},
		{
		id:"numref",
		label:"数字引用",
		tip:"匹配#{{group.num}}号捕获分组的结果。",
		desc:"匹配捕获分组的结果。例如，<code>\\1</code> 匹配第一个捕获分组的结果，<code>\\3</code> 则匹配第三个结果。",
		// PCRE adds relative and alternate syntaxes in ext
		example:["(\\w)a\\1","hah dad bad dab gag gab"],
		token:"\\1"
		},
		{
		id:"branchreset",
		label: "分支重置分组",
		desc:"定义一个拥有相同序号的分组。",
		ext: "<p>例如，在 <code>(?|(a)|(b))</code> 中，两个分组（a 和 b）会被算作分组#1。",
		token:"(?|(a)|(b))"
		},
		{
		id:"noncapgroup",
		label: "非捕获分组",
		desc:"在不创建捕获分组的情况下，把数个标记组在一起。",
		example:["(?:ha)+","hahaha haa hah!"],
		token:"(?:ABC)"
		},
		{
		id:"atomic",
		label:"原子组",
		desc:"原子组是一个在匹配时，会抛弃反向引用位置的非捕获分组。",
		ext:"<p>例如，<code>/(?>ab|a)b/</code> 会匹配 <code>abb</code> 但不会匹配 <code>ab</code> 。因为一旦匹配到 <code>ab</code> 时，原子组会阻止反向引用去重试 <code>a</code>选项。</p>",
		token:"(?>ABC)"
		},
		{
		id:"define",
		label: "定义",
		desc:"用来在不被匹配的情况下定义一个命名分组用作子过程。",
		ext:"<p>例如，<code>/A(?(DEFINE)(?'foo'Z))B\\g'foo'/</code> 会匹配到 <code>ABZ</code>，因为定义组在匹配中被忽略了，除非在子过程定义<code>foo</code>子过程，即例子中后方的<code>\\g'foo'</code>。 ",
		token:"(?(DEFINE)(?'foo'ABC))"
		},
		{
		id:"numsubroutine",
		label:"数字子过程",
		tip:"匹配捕获组#{{group.num}}中的表达式。",
		desc:"匹配捕获分组中的表达式。不同于匹配结果的“引用”。"+
			" 例如，<code>/(a|b)\\g'1'/</code> 可以匹配 <code>ab</code>，因为 <code>a|b</code> 表达式再一次被匹配了。",
		ext:"<p>可以用不同语法使用这个特性： <code>\\g&lt;1></code> <code>\\g'1'</code> <code>(?1)</code>。</p>"+
			"<p>同时支持以<code>+</code>或<code>-</code>开头的相对值。例如， <code>\\g<-1></code> 会匹配相对引用的分组。</p>",
		token:"\\g'1'"
		},
		{
		id:"namedsubroutine",
		label:"命名子过程",
		tip:"匹配捕获分组中名为'{{group.name}}'的表达式。",
		desc:"匹配捕获分组中的表达式。不同于匹配结果的”引用“。",
		ext:"<p>可以用不同语法使用这个特性： <code>\\g&lt;name></code> <code>\\g'name'</code> <code>(?&name)</code> <code>(?P>name)</code>.</p>",
		token:"\\g'name'"
		}
	]
	},

	{
	label: "前后查找",
	id:"lookaround",
	desc: "前后查找允许主表达式前或之后的组，而不将其包含在结果中。"+
		"<p>负向查找指定一个表达式之前或之后无法匹配的组。 </p>",
	kids: [
		{
		id:"poslookahead",
		label: "正向先行断言",
		desc:"匹配主表达式后面的组而不将其包含在结果中。",
		example:["\\d(?=px)","1pt 2px 3em 4px"],
		token:"(?=ABC)"
		},
		{
		id:"neglookahead",
		label: "负向先行断言",
		desc:"指定主表达式后无法匹配的组（如果匹配，则结果将被丢弃）。",
		example:["\\d(?!px)","1pt 2px 3em 4px"],
		token:"(?!ABC)"
		},
		{
		id:"poslookbehind",
		label: "正向后行断言",
		desc:"匹配主表达式之前的组，而不将其包含在结果中。",
		token:"(?<=ABC)"
		},
		{
		id:"neglookbehind",
		label: "负向后行断言",
		desc:"指定在主表达式之前无法匹配的组（如果匹配，则结果将被丢弃）。",
		token:"(?<!ABC)"
		},
		{
		id:"keepout",
		label:"避开",
		desc:"保持文本匹配到目前为止返回的匹配，丢弃到此点之前的匹配。",
		ext:"For example <code>/o\\Kbar/</code> will match <code>bar</code> within the string <code>foobar</code>",
		token:"\\K"
		}
	]
	},

	{
	label: "量词 & 多选",
	id:"quants",
	desc: "量词指定了前面的标记需要出现的次数。默认情况下，量词是贪婪的，会尽可能多地匹配字符。"+
		"<hr/>多选表现起来像 逻辑或，匹配这个或那个序列。",
	kids: [
		{
		id:"plus",
		label: "+",
		desc:"匹配1个或更多前面的标记。",
		example:["b\\w+","b be bee beer beers"],
		token:"+"
		},
		{
		id:"star",
		label: "*",
		desc:"匹配0个或更多前面的标记。",
		example:["b\\w*","b be bee beer beers"],
		token:"*"
		},
		{
		id:"quant",
		label:"量词",
		tip:"匹配 {{getQuant()}} 个前面的标记。",
		desc:"匹配指定数量个前面的标记。"+
			"<code>{1,3}</code> 会匹配1个到3个。"+
			"<code>{3}</code> 会匹配正好3个。"+
			"<code>{3,}</code> 会匹配3个或更多。",
		example:["b\\w{2,3}","b be bee beer beers"],
		token:"{1,3}"
		},
		{
		id:"opt",
		label:"可选项",
		desc:"匹配0个或1个前面的标记，用于标为可选项。",
		example: ["colou?r", "color colour"],
		token:"?"
		},
		{
		id:"lazy",
		label: "慵懒",
		tip:"令前面的标记 {{getLazy()}}, 让其尽可能 {{getLazyFew()}} 地匹配字符。",
		desc:"令前面的标记变慵懒，让其尽可能少地匹配字符。",
		ext:"默认情况下，量词是贪婪的会尽可能多地匹配字符。",
		example:["b\\w+?","b be bee beer beers"],
		token:"?"
		},
		{
		id:"possessive",
		label: "贪婪",
		desc:"令前面的量词贪婪，但不回溯。它会尽可能多地匹配字符，但不会为了匹配后面的标记而释放它。",
		ext:"<p>例如 <code>/.*a/</code> 会匹配到 <code>aaa</code>, 但 <code>/.*+a/</code> 则不会。因为重复的<code>.</code>会匹配、但不会为了匹配最后一个字符<code>a</code>而释放。</p>",
		token:"+"
		},
		{
		id:"alt",
		label:"多选",
		desc:"多选表现起来像 逻辑或。匹配<code>|</code>前面的或后面的表达式。",
		ext:"<p>它可以用在分组里面，或在整个表达式中使用。会按顺序尝试匹配。</p>",
		example:["b(a|e|i)d","bad bud bod bed bid"],
		token:"|"
		}
	]
	},

	{
	label: "特殊",
	id:"other",
	desc: "其他未分类标记（tokens）。",
	kids: [
		{
		id:"comment",
		label: "注释",
		desc:"允许你在正则表达式中插入注释，匹配时候会被忽略。",
		token:"(?#foo)"
		},
		{
		id:"conditional",
		label: "条件语句",
		desc:"当满足前瞻条件后，从两个选项中选择一个匹配。",
		ext:"<p>例如, <code>/(?(?=a)ab|..)/</code> 会匹配 <code>ab</code> 和 <code>zx</code> 但不会匹配到 <code>ax</code>, 因为如果第一个字符满足条件 <code>a</code> 那么它就尝试匹配表达式 <code>ab</code>。</p>"+
			"<p>任何前瞻都可以用在这个条件上。前瞻会在条件开始的位置启动子序列的匹配过程。后顾则会在结束的位置启动。</p>",
		token:"(?(?=A)B|C)"
		},
		{
		id:"conditionalgroup",
		label:"分组条件",
		desc:"当匹配到'{{name}}'分组后，从两个选项中选择一个匹配。",
		ext:"<p>例如，<code>/(z)?(?(1)a|b)/</code> 会匹配到 <code>za</code>。因为第一个分组能成功匹配到 <code>z</code>， 这会让条件分支去选择第一个选项 <code>a</code>。</p>"+
			"<p>相同的表达式会同时匹配到 <code>b</code>。因为第1个分组没有匹配到，所以他会尝试匹配第二个选项 <code>b</code>。</p>"+
			"<p>你可以用分组名称引用分组、数字或相对位置 (ex. <code>-1</code>)。</p>",
		token:"(?(1)B|C)"
		},
		{
		id:"recursion",
		label: "回溯",
		desc:"在相同位置尝试匹配整个表达式。",
		ext:"<p>例如， <code>/a(?R)?z/</code> 会匹配到任意数量的 <code>a</code> 紧跟相同数量的 <code>z</code>: 匹配 <code>az</code> 单词或 <code>aaaazzzz</code>, 但不会匹配<code>azzz</code>。</p>"+
			"<p>可以用不同语法使用这个特性：</p><p><code>(?R)</code> <code>(?0)</code> <code>\\g<0></code> <code>\\g'0'</code></p>",
		token:"(?R)"
		},
		{
		id:"mode",
		label:"模式修改符",
		tip:"{{~getDesc()}}{{~getModes()}}",
		desc:"对正则的余下部分启用或禁用模式。",
		ext:"模式对应于正则表达式的标识。 例如 <code>(?i)</code> 会对余下的正则启用大小写不敏感（即禁用大小写敏感）。"+
			"<p>可以定义多个修饰符，修饰符后面跟<code>-</code>会禁用该修饰符。例如，<code>(?im-s)</code> 会启用 大小写不敏感 和 多行模式，禁用dotall标识。</p>"+
			"<p>支持的修饰符有： <code>i</code> - 大小写不敏感、<code>s</code> - dotall、<code>m</code> - 多行、<code>x</code> - 无间隔、 <code>J</code> - 允许重复分组子正则、<code>U</code> - 非贪婪。</p>",
		token:"(?i)"
		}
	]
	},

	{
	label: "替换",
	desc: "这些标记（tokens）用来替换字符串，插入到匹配结果的其他部分。",
	target: "subst",
	id:"subst",
	kids: [
		{
		id:"subst_$&match",
		label: "匹配",
		desc:"插入匹配到的文本。",
		token:"$&"
		},
		{
		id:"subst_0match",
		label: "匹配",
		desc:"插入匹配到的文本。",
		ext:"<p>可以用不同语法使用这个特性：</p><p><code>$0</code> <code>\\0</code> <code>\\{0}</code></p>",
		token:"$0"
		},
		{
		id:"subst_group",
		label: "捕获分组",
		tip:"插入匹配到的分组 #{{group.num}}。",
		desc:"插入匹配到的指定分组。例如，<code>$3</code> 会插入匹配到第3个分组。",
		// NOTE: javascript profile overrides this:
		ext:"<p>可以用不同的语法使用这个特性：</p><p><code>$1</code> <code>\\1</code> <code>\\{1}</code></p>",
		token:"$1"
		},
		{
		id:"subst_$before",
		label: "匹配之前",
		desc:"插入匹配到的文本之前的字符串。",
		token:"$`"
		},
		{
		id:"subst_$after",
		label: "之后匹配",
		desc:"插入匹配到的文本之后的字符串。",
		token:"$'"
		},
		{
		id:"subst_$esc",
		label: "转义$",
		desc:"插入美元符号（$）",
		token:"$$"
		},
		{
		id: "subst_esc",
		label: "转义字符",
		token: "\\n",
		desc: "方便起见，RegExr支持替换以下转义字符： <code>\\n</code>, <code>\\r</code>, <code>\\t</code>, <code>\\\\</code>, 以及 unicode转义字符 <code>\\uFFFF</code>。这会因你的部署环境而异。"
		}
	]
	},

	{
	id:"flags",
	label:"标识",
	tooltip:"标识可以改变表达式的解析方式。点击以编辑。",
	desc:"标识可以改变表达式的解析方式。标识会在表达式末尾斜杠后(例如. <code>/.+/igm</code> )。",
	target:"flags",
	kids: [
		{
		id:"caseinsensitive",
		label: "忽略大小写",
		desc:"让整个表达式对大小写不敏感。",
		ext:" 例如，<code>/aBc/i</code> 会匹配到 <code>AbC</code>。",
		token:"i"
		},
		{
		id:"global",
		label: "全局搜索",
		tip: "保留上次匹配结果的位置，允许递归搜索。",
		desc:"保留上次匹配结果的位置，允许子序列从上次匹配的结果继续搜索。"+
			"<p>如果没有全局(<code>g</code>)标识, 后面的查询会返回相同的结果。</p><hr/>"+
			"在禁用全局标识的时候，RegExr会为了避免无穷个匹配结果而只返回第一个结果。",
		token:"g"
		},
		{
		id:"multiline",
		label: "多行",
		tip:"使用起始/结尾锚（<b>^</b>/<b>$</b>）会匹配到行首和行尾。",
		desc:"当启用 multiline标识时，使用起始和结尾锚（<b>^</b> 和 <b>$</b>）会匹配到行首和行尾, 而不是整个字符串的头部和尾部。"+
			"<p>需要注意的是类似<code>/^[\\s\\S]+$/m</code>的正则可能会匹配到含有换行符的字符串。因为锚会匹配到<b>任意</b>行的起始/结束位置。</p>",
		token:"m"
		},
		{
		id:"unicode",
		label: "Unicode",
		tip:"启用<code>\\x{FFFFF}</code>Unicode转义。",
		desc:"当启用Unicode标识时，你可以按<code>\\x{FFFFF}</code>格式转义Unicode字符。"+
			"<p>这会使转义更严格，会对不能识别的转义字符 (例如 <code>\\j</code>) 报错。</p>",
		token:"u"
		},
		{
		id:"sticky",
		label: "粘连",
		desc:"只会从lastIndex位置开始匹配，且如果设置了全局标识(<code>g</code>）的话会被忽略。",
		ext:" 因为在RegExr的每次解析是独立的，该标识对已显示的内容没有任何影响。",
		token:"y"
		},
		{
		id:"dotall",
		desc:"点（<code>.</code>）会匹配任何字符，包括换行符。",
		token:"s"
		},
		{
		id:"extended",
		desc:"除了在字符集中定义的空白字符外，Literal 的空白字符会被忽略。",
		token:"x"
		},
		{
		id:"ungreedy",
		tip:"默认非贪婪（慵懒）匹配。",
		desc:"默认非贪婪（慵懒）匹配。会贪婪匹配带有<code>?</code>的量词。",
		token:"U"
		}
	]
	}
];

// content that isn't included in the Reference menu item:
o.misc = {
	kids:[
		{
		id:"ignorews",
		label:"忽略空白字符",
		tip:"因已启用<b>x</b>扩展 模式，空白字符已被忽略。"
		},
		{
		id:"extnumref", // alternative syntaxes.
		proxy:"numref"
		},
		{
		id:"char",
		label:"字符",
		tip:"匹配 {{getChar()}} 字母 (字符编码 {{code}})。 {{getInsensitive()}}"
		},
		{
		id:"escchar",
		label:"escaped character",
		tip:"匹配 {{getChar()}} (字符编码 {{code}})。"
		},
		{
		id:"open",
		label: "表达式头",
		tip:"标记正则表达式起始位置。"
		},
		{
		id:"close",
		label: "表达式尾",
		tip:"标记正则表达式的结束位置和标识的起始位置。"
		},
		{
		id:"condition",
		label: "条件",
		tip:"The lookaround to match in resolving the enclosing conditional statement. 详情见参考手册中”条件“部分。"
		},
		{
		id:"conditionalelse",
		label:"else条件",
		tip:"区分条件中的else部分"
		},
		{
		id:"ERROR",
		tip:"错误已在正则表达式中用红线标出。滚动滚轮以查看详情。"
		},
		{
		id:"PREG_INTERNAL_ERROR",
		tip:"PCRE内部错误"
		},
		{
		id:"PREG_BACKTRACK_LIMIT_ERROR",
		tip:"反向引用个数超出限制。"
		},
		{
		id:"PREG_RECURSION_LIMIT_ERROR",
		tip:"递归层数超出限制。"
		},
		{
		id:"PREG_BAD_UTF8_ERROR",
		tip:"不合法的UTF-8数据。"
		},
		{
		id:"PREG_BAD_UTF8_OFFSET_ERROR",
		tip:"不合法的UTF-8数据。"
		}
	]
};

o.errors = {
	groupopen:"缺少右括号。",
	groupclose:"缺少左括号。",
	setopen:"缺少右中括号。",
	rangerev:"起始值和结束值相反。起始值大于结束值。",
	quanttarg:"无效的量词。",
	quantrev:"量词的起始值大于结束值。",
	esccharopen:"缺少待转义字符。",
	esccharbad:"不存在的转义字符或转义格式错误。",
	unicodebad:"未能识别的UNICODE类别或脚本。",
	posixcharclassbad:"未能识别的POSIX字符类。",
	posixcharclassnoset:"POSIX字符类必须在字符集中。",
	notsupported:"不支持\"{{~getLabel()}}\" 特性。",
	fwdslash:"未转义的斜杠。直接把本正则表达式粘贴到代码可能会导致问题。",
	esccharbad:"无效的转义序列。",
	servercomm:"通信错误。",
	extraelse:"条件组中含有额外的else分支。",
	unmatchedref:"引用了一个不存在的分组 \"{{name}}\"。",
	modebad:"未能识别的标识 \"<code>{{errmode}}</code>\".",
	badname:"分组名称不能以数字开头。",
	dupname:"分组名称不能重复。",
	branchreseterr:"<b>分支重置。</b> 结果是正确的，但是RegExr解析器还不能正确地给新分组编号。敬请期待！",
	timeout:"解析超时！", // TODO: can we couple this to the help content somehow?

	// warnings:
	jsfuture:"\"{{~getLabel()}}\" 功能可能不支持所有浏览器。",
	infinite:"该正则可能会返回空结果，且在个别测试用例上可能会返回无穷个结果。", // TODO: can we couple this to the help content somehow?
};

/*
classes:
quant
set
special
ref
esc
anchor
charclass
group
comment
 */
