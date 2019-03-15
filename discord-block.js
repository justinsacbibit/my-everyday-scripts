javascript:(function(){
	if (window.location.host !== 'discordapp.com') return alert('this script is used on "discordapp.com"');
	/* injected css */
	var style = document.createElement("style");
	style.id = "discord_block_hider";
	/* the container for the guild channels */
	var css = document.createTextNode(`
		/* hides blocked messages */
			div[class^=messageGroupBlocked], div[class^=divider] > span{
				display: none; padding: 0;
			}
			.message-group{
				border: 0;
			}
			hr[class^=divider],
			div[class^=divider] > div{
				display: none !important;
				background: none !important;
			}
		`); style.appendChild(css);
	document.getElementsByTagName("head")[0].appendChild(style);
})()
