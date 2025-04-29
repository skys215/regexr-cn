'use strict';

window._native = function (options) {
	var aff_list = [
		{
			url: "https://m.do.co/c/6d7ae05841de",
			text: "<a href=\"{#url}\">DigitalOcean</a>简单可靠的云服务器，SSD存储，全球数据中心，开发者首选。",
		},
		{
			url: "https://www.vultr.com/?ref=6882447",
			text: "<a href=\"{#url}\">Vultr</a>全球云服务器，SSD高性能，按小时计费，灵活部署。服务器推荐使用！",
		},
		{
			url: "https://prf.hn/click/camref:1100l565aW/[p_id:1110l163]",
			text: "Mac 装 Windows 就靠 <a href=\"{#url}\">Parallels</a>！丝滑不卡顿，一键切换超省心",
		},
		{
			url: "https://hostinger.com?REFERRALCODE=WF1SKYS21UZU",
			text: "<a href=\"{#url}\">Hostinger</a> 限时优惠，首年$1.99起，免费SSL+域名，建站无忧！",
		},
		{
			url: "http://click.dreamhost.com/aff_c?offer_id=8&aff_id=21694",
			text: "<a href=\"{#url}\">DreamHost</a>！高性价比虚拟主机，全球数据中心。",
		},
		{
			url: "https://go.getproton.me/aff_c?offer_id=26&aff_id=11894&url_id=277",
			text: "<a href=\"{#url}\">Proton</a> 加密全家桶：隐私至上，瑞士级防护！",
		},
		{
			url: "https://dashi.aliyun.com/activity/aigc?userCode=vnstin4m",
			text: "<a href=\"{#url}\">阿里云函数计算</a>：Serverless架构，按需付费，免运维，轻松部署应用。",
		},
		{
			url: "https://www.aliyun.com/daily-act/ecs/ecs_trial_benefits?userCode=vnstin4m",
			text: "<a href=\"{#url}\">阿里云轻量服务器</a>68元/年，200M带宽，新人0.19元/天，建站优选。",
		},
		{
			url: "https://get.affiliatescn.net/aff_c?offer_id=153&aff_id=122175&url_id=613",
			text: "<a href=\"{#url}\">NordVPN</a>限时特惠，高速稳定连接，解锁全球内容，隐私防护无忧。",
		},
		{
			url: "https://www.namesilo.com/domain/search-domains?rid=ca1ec36dp",
			text: "<a href=\"{#url}\">Namesilo</a>一站式域名管理，免费DNS/SSL证书，安全可靠。",
		},
		{
			url: "https://my.laoxuehost.com/aff.php?aff=12427",
			text: "<a href=\"{#url}\">老薛主机</a>：稳定高速香港主机，免费SSL证书，7x24小时技术支持。",
		},
	];
	var selectedClass = document.querySelectorAll('.' + options['targetClass']);

	selectedClass.forEach(function (className, index) {
		var selectedTarget = document.getElementsByClassName(options['targetClass'])[index];
		var adElement = selectedTarget.innerHTML||"";
		var prefix = options['prefix'];
		var ad = aff_list[Math.floor(Math.random()*aff_list.length)];

		if (ad && className) {
			var adInnerHtml = ad['text'].replace(new RegExp('\{#url\}','g'), ad['url']);
			// adElement.replace(new RegExp('#' + prefix + '_bg_color#', 'g'), ad['backgroundColor'])
			// .replace(new RegExp('#' + prefix + '_bg_color_hover#', 'g'), ad['backgroundHoverColor'])
			// .replace(new RegExp('#' + prefix + '_company#', 'g'), ad['company'])
			// .replace(new RegExp('#' + prefix + '_cta#', 'g'), ad['callToAction'])
			// .replace(new RegExp('#' + prefix + '_cta_bg_color#', 'g'), ad['ctaBackgroundColor'])
			// .replace(new RegExp('#' + prefix + '_cta_bg_color_hover#', 'g'), ad['ctaBackgroundHoverColor'])
			// .replace(new RegExp('#' + prefix + '_cta_color#', 'g'), ad['ctaTextColor'])
			// .replace(new RegExp('#' + prefix + '_cta_color_hover#', 'g'), ad['ctaTextColorHover'])
			// .replace(new RegExp('#' + prefix + '_desc#', 'g'), ad['description'])
			// .replace(new RegExp('#' + prefix + '_index#', 'g'), prefix + '-' + ad['i'])
			// .replace(new RegExp('#' + prefix + '_img#', 'g'), ad['image'])
			// .replace(new RegExp('#' + prefix + '_small_img#', 'g'), ad['smallImage'])
			// .replace(new RegExp('#' + prefix + '_link#', 'g'), ad['url'])
			// .replace(new RegExp('#' + prefix + '_logo#', 'g'), ad['logo'])
			// .replace(new RegExp('#' + prefix + '_color#', 'g'), ad['textColor'])
			// .replace(new RegExp('#' + prefix + '_color_hover#', 'g'), ad['textColorHover'])
			// .replace(new RegExp('#' + prefix + '_title#', 'g'), ad['title']);

			selectedTarget.innerHTML = adInnerHtml;
			selectedTarget.setAttribute('data-state', 'visible');
		} else {
			selectedTarget.innerHTML = "";
		}
	});
};
