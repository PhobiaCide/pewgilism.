/**
 * /* Credit and Thanks:
 * Matrix - Particles.js;
 * SliderJS - Ettrics;
 * Fonts - Google Fonts
 *
 * @format
 */

var Splash = {
	play: function () {
		document.getElementById('splash').src = '/splash.webm';
		document.getElementById('splash-text').style.display = 'block';
	},
	stop: function () {
		document.getElementById('splash').src = 'null:';
		document.getElementById('splash-text').style.display = 'none';
	},
};

window.onload = function () {
	Particles.init({
		selector: '.background'
	});
};
let particles = Particles.init({
	selector: '.background',
	color: ['#731046', '#BF9A2A', '#8C6A2B', '#670e3e'],
	maxParticles: 100,
	sizeVariation: 0,
	connectParticles: true,
	responsive: [
		{
			breakpoint: 799,
			options: {
				color: ['#731046', '#BF9A2A', '#8C6A2B', '#670e3e'],
				maxParticles: 50,
				sizeVariation: 0,
				connectParticles: true,
			},
		},
		{
			breakpoint: 359,
			options: {
				color: ['#731046', '#BF9A2A', '#8C6A2B', '#670e3e'],
				maxParticles: 25,
				sizeVariation: 0,
				connectParticles: true,
			},
		},
	],




    
});

class NavigationPage {
	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 75;
		this.lastScroll = 0;
		let self = this;
		$('.nav-tab').click(function () {
			self.onTabClick(event, $(this));
		});
		$(window).scroll(() => {
			this.onScroll();
		});
		$(window).resize(() => {
			this.onResize();
		});
	}

	onTabClick(event, element) {
		event.preventDefault();
		const scrollTop =
			$(element.attr('href')).offset().top - this.tabContainerHeight + 1;
		$('html, body').animate({ scrollTop: scrollTop }, 600);
	}

	onScroll() {
		this.checkHeaderPosition();
		this.findCurrentTabSelector();
		this.lastScroll = $(window).scrollTop();
	}

	onResize() {
		if (this.currentId) {
			this.setSliderCss();
		}
	}

	checkHeaderPosition() {
		const headerHeight = 75;
		const offset =
				$('.nav').offset().top +
				$('.nav').height() -
				this.tabContainerHeight -
				headerHeight;

		if ($(window).scrollTop() > offset) {
			$('.nav-container').addClass('nav-container--top');
		} else {
			$('.nav-container').removeClass('nav-container--top');
		}
	}

	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$('.nav-tab').each(function () {
			let id = $(this).attr('href');
			let offsetTop = $(id).offset().top - self.tabContainerHeight;
			let offsetBottom =
				$(id).offset().top + $(id).height() - self.tabContainerHeight;
			if (
				$(window).scrollTop() > offsetTop &&
				$(window).scrollTop() < offsetBottom
			) {
				newCurrentId = id;
				newCurrentTab = $(this);
			}
		});
		if (this.currentId != newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setSliderCss();
		}
	}

	setSliderCss() {
		let width = 0;
		let left = 0;
		if (this.currentTab) {
			width = this.currentTab.css('width');
			left = this.currentTab.offset().left;
		}
		$('.nav-tab-slider').css('width', width);
		$('.nav-tab-slider').css('left', left);
	}
}

new NavigationPage();

/* Credit and Thanks:
Matrix - Particles.js;
SliderJS - Ettrics;
Fonts - Google Fonts
*/
