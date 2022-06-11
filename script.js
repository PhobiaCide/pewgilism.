 /* Credit and Thanks:
Matrix - Particles.js;
SliderJS - Ettrics;
Fonts - Google Fonts
*/

var Splash = {
    play: function() {
        document.getElementById("splash").src = "/splash.webm";
        document.getElementById("splash-text").style.display = "block";
    },
    stop: function() {
        document.getElementById("splash").src = "null:";
        document.getElementById("splash-text").style.display = "none";
    },
};

window.onload = function() {
    Particles.init({
        selector: ".background",
    });
};
let particles = Particles.init({
    selector: ".background",
    color: ["#3D00B8", "#00CC5F", "#000000"],
    connectParticles: true,
    responsive: [{
        breakpoint: 768,
        options: {
            color: ["#FDD235", "#3D00B8", "#00CC5F"],
            maxParticles: 1024,
            sizeVariation: 3,
            connectParticles: false,
        },
    }, ],
});

class NavigationPage {
    constructor() {
        this.currentId = null;
        this.currentTab = null;
        this.tabContainerHeight = 70;
        this.lastScroll = 0;
        let self = this;
        $(".nav-tab").click(function() {
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
        let scrollTop =
            $(element.attr("href")).offset().top - this.tabContainerHeight + 1;
        $("html, body").animate({ scrollTop: scrollTop }, 600);
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

        let offset =
            $(".nav").offset().top +
            $(".nav").height() -
            this.tabContainerHeight -
            headerHeight;
        if (
            $(window).scrollTop() > offset
        ) {
            $(".nav-container").addClass("nav-container--top");
        } else {
            $(".nav-container").removeClass("nav-container--top");
        }
    }

    findCurrentTabSelector(element) {
        let newCurrentId;
        let newCurrentTab;
        let self = this;
        $(".nav-tab").each(function() {
            let id = $(this).attr("href");
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
            width = this.currentTab.css("width");
            left = this.currentTab.offset().left;
        }
        $(".nav-tab-slider").css("width", width);
        $(".nav-tab-slider").css("left", left);
    }
}

new NavigationPage();

/* Credit and Thanks:
Matrix - Particles.js;
SliderJS - Ettrics;
Fonts - Google Fonts
*/
