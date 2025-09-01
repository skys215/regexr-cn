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

let home = {};
export default home;

home.id = "home";
home.label = "菜单";
home.desc = "[from HTML]";
home.kids = [


	{
	label: "正则表达式设置",
	id: "share",
	el: "#share_main",
	list: false,
	kids: [
		{
		label: "保存到我的收藏夹",
		id: "share_favorites",
		el:"#share_favorites"
		},
		{
		label: "社区分享",
		id: "share_community",
		el:"#share_community"
		}
	]
	},

	{
	label: "我的正则表达式",
	id:"favorites",
	desc: "上面的列表将显示您创建或收藏的所有正则表达式。"+
		"<p>要编辑您创建的正则表达式，请单击其URL或在列表中双击它以加载它，然后打开“保存/共享”进行编辑和保存。</p>",
	search: true,
	kids: []
	},

	{
	label: "备忘单",
	id:"cheatsheet",
	el: "#cheatsheet"
	},

	{ // injected from Reference
	id:"reference"
	},

	{
	label: "正则表达式社区",
	id: "community",
	desc: "欢迎使用正则表达式社区，这是一个由您这样的用户提交的可搜索的正则表达式数据库。"+
		"<p>选择正则表达式后，单击其URL或在列表中双击它以加载完整正则表达式。或使用右箭头图标仅加载表达式或文本。</p>"+
		"<p>通过为正则表达式打分，并通过菜单中的<b>搜索&分享</b>提交您自己的正则表达式来帮助社区变得更好。</p>",
	search: true,
	kids: []
	},

	{
	label: "帮助",
	id: "help",
	desc: "RegExr的帮助。有关正则表达式的用法，请阅读<b>RegEx参考</b>。",
	kids: [

		{
		label:"关于",
		desc:"RegExr v<%= build_version %> (<%= build_date %>)."+
			"<p>由 <a href='http://twitter.com/gskinner/' target='_blank'>Grant Skinner</a> 和 <a href='http://gskinner.com/' target='_blank'>gskinner</a> 团队创建, 并使用了 <a href='http://createjs.com/' target='_blank'>CreateJS</a> & <a href='http://codemirror.net/' target='_blank'>CodeMirror</a> 库.</p>"+
			"<p>由 <a href='https://github.com/skys215' target='_blank'>skys215</a> 和 <a href='https://github.com/yaoyuan4102' target='_blank'>yaoyuan4102</a> 翻译成中文。</p>"+
			"<p>您可以在 <a href='http://github.com/gskinner/regexr/' target='_blank'>GitHub</a> 上提供反馈和记录bugs.</p>" +
			"<p>您可以在 <a href='http://github.com/skys215/regexr/' target='_blank'>此GitHub</a> 上提供翻译纠正或建议。</p>" +
			"<p>您可以在 <a href='https://afdian.net/@skys215' target='_blank'>爱发电</a> 上捐助本项目。</p>"
		},
		{
		label:"开始",
		desc:"RegExr提供了实时可视化结果，语法突出显示，工具提示和撤消/重做（{{getCtrlKey（）}}  -  Z / Y），因此探索正则表达式非常的简单有趣。"+
			"<p>浏览 <b>RegEx参考</b>，测试不同正则表达式的匹配结果，并从<b>正则表达式社区</b>中查询示例。</p>"+
			"<p>您还可以<b>保存</b>您的正则表达式以供日后参考, 或与他人分享。<b>登陆</b>以确保您不会丢失您的正则表达式。</p>"+
			"<p>通过<b>正则表达式设置</b>修改您的正则表达式的详细信息, 分享到<b>社区</b>, 将其设置为私有或者删除。</p>",
		kids: [
			{
			label:"表达式面板",
			desc:"您可以在此处输入要测试的正则表达式。您的输入结果会在<b>文字</b>和<b>工具</b>面板中自动更新。"+
				"滚动表达式以获取有关每个元字符的信息。"+
				"<p>右侧的按钮允许您切换RegEx引擎，或修改模式修饰符。</p>"
			},
			{
			label:"文本面板",
			desc:"这是您输入文本以测试表达式的位置。 拖放文本文件以加载其内容。"+
				"<p>输入时将突出显示匹配项。滚动匹配以获取有关匹配及其捕获组的信息。匹配计数和执行时间显示在标题栏中。</p>"+
				"<p>在行的开头或结尾处的较浅色盖子表示行之间继续匹配。</p>"
			},
			{
			label:"测试面板",
			desc:"在这里你可以创建一套测试，用于实时验证你的<b>正则表达式</b>。"+
				"<p>一个测试可以检查表达式在测试文本中匹配到了任意内容、所有内容还是没有匹配到内容。</p>"+
				"<p>通过点击<b>文本</b>面板上方的开关来使用此功能。当你点击保存时，文本和测试都将保存。</p>"
			},
			{
			label:"工具面板",
			desc:"点击在标题栏<b>文本</b>下方的<b>工具</b>面板来显示或隐藏工具面板。"+
				"<p>工具提供了数种方法浏览或处理匹配结果。</p>",
			kids: [
				{
				label:"替换",
				id: "replace",
				desc:"<b>替换</b>工具用指定的字符串或者正则表达式来替换匹配项。"+
					"<p>当您输入时，<b>文本</b>面板中的匹配项将被替换字符串所替换。</p>"+
					"<p>支持替换元字符和转义字符, 例如 <code>\\n</code>, <code>\\t</code> & <code>\\u0009</code>.</p>"+
					"<p>滚动元字符以获取信息, 并查看 <b>RegEx 参考</b> 获取更多信息。</p>"
				},
				{
				label:"列表",
				id: "list",
				desc:"<b>列表</b>工具陈列了所有的匹配项。"+
					"<p>您可以指定一个简单的分隔符 (ex. <code>,</code> 或 <code>\\n</code>), 或使用替代元字符生成更高级的报告。例如, <code>$1\\n</code> 将会列出所有的组1的结果(JavaScript引擎).</p>"+
					"<p>支持转义字符, 如<code>\\n</code>, <code>\\t</code> & <code>\\u0009</code>.</p>"+
					"<p>滚动元字符以获取信息。</p>"
				},
				{
				label:"详细信息",
				id: "details",
				desc:"<b>详细信息</b>工具显示匹配项及其捕获组的全文。"+
					"<p>单击<b>文本</b>面板中突出显示的匹配项以显示该匹配项的详细信息。"+
					"<p>滚动一个组行以在<b>表达式</b>中突出显示该组。</p>"
				},
				{
				label:"说明",
				id: "explain",
				desc:"<b>说明</b>工具显示<b>表达式</b>的详细分类。"+
					"<p>将鼠标悬停在解释上以突出显示<b>表达式</b>面板中的相关元字符，反之亦然。</p>"+
					"<p>单击说明中的项目以在<b>RegEx 参考</b>中显示更多信息。</p>"
				}
			]
			},
			{
			label:"菜单",
			desc:"<b>菜单</b>包括<b>帮助</b>, <b>RegEx 参考</b>, <b>备忘表</b>, 和<b>正则表达式设置</b>等功能."+
				"<p>双击<b>RegEx 参考</b>中的选定项，将其插入<b>表达式</b>。单击示例旁边的箭头以加载。</p>"+
				"<p>菜单同时包含可搜索的<b>正则表达式社区</b>, 以及您在<b>我的正则表达式</b>中创建或收藏的正则表达式。</p>"
			}
		]
		},
		{
		label:"登陆",
		id: "signin",
		desc:"登陆之前, RegExr创建一个依赖于浏览器cookie的临时帐户。这意味着您无法在其他计算机上访问您的正则表达式，并且您可能会丢失正则表达式如果您的cookie被删除或者过期。"+
			"<p>登录会创建一个永久帐户，因此您可以随时随地访问您的正则表达式。</p>"+
			"<p>收藏夹将自动分配您已有的正则表达式到新账户中。</p>"+
			"<p>除了将您登录到您的RegExr帐户之外，我们不会将您的信息用于任何其他用途。</p>"
		},
		{
		id: "engine",
		label:"RegEx 引擎",
		desc:"虽然正则表达式的核心功能集相当一致，但不同的实现（例如Perl与Java）可能具有不同的功能或行为。"+
			 "<p>RegExr当前支持在浏览器中执行JavaScript RegExp和通过PHP运行PCRE。</p>"+
			 "<p>您可以使用表达式面板上的下拉列表切换引擎。</p>",
		kids: [
			{
			label:"JavaScript",
			desc:"您的浏览器的JavaScript引擎用于在异步工程中通过<code>RegExp.exec()</code>执行RegEx。"+
				"<p>请注意，虽然实现大多是一致的，但浏览器之间存在微小差异。以下是已知的差异:<ul>"+
				"<li>老的浏览器不支持u 或者 y 元字符</li>"+
				"<li>在处理模棱两可的转义中的区别: \\8 \\9</li>"+
				"<li>Chrome在处理 \\x & \\u 转义时，和其他浏览器有细微差别</li>"+
				"<li>Chrome支持后行断言, 但是它还没有在JS规范中</li>"+
				"<li>Safari忽略了八进制转义中的前导零 (ex. \\00020)</li>"+
				"</ul></p>"
			},
			{
			label:"PCRE (PHP)",
			desc:"PHP {{getPHPVersion()}} 和 PCRE {{getPCREVersion()}} 在我们的服务器端被用于执行您的正则表达式。"
			}
		]
		},
		{
		label:"支持字符串查询",
		desc:"除了内置的<b>保存</b>机制，RegExr还可以创建可共享的链接。RegExr还支持通过查询字符串进行正则表达式预填充。"+
			"<p>字符串查询参数:<ul>"+
			"<li><code>engine</code> - RegEx引擎(<code>js</code> 或 <code>pcre</code>)</li>"+
			"<li><code>expression</code> - 填充表达式区域. 建议使用元字符传递完整表达式(<code>/.*/ig</code>)，而不仅仅是正则表达式(<code>.*</code>)</li>"+
			"<li><code>text</code> - 填充文本区域</li>"+
			"<li><code>tool</code> - 设置工具 (replace, list, details, 或 explain)。</li>"+
			"<li><code>input</code> - 填充工具输入字段。当tool=replace时，input的值代表替换的值。目前只对replace或list有效。填多个时只对最后填写的生效。</li>"+
			"</ul></p>"+
			"Ex. <a href='http://regexr-cn.com/?expression=/./g&text=test'>regexr.com/?expression=/./g&text=test</a>"
		}
	]
	}
];
