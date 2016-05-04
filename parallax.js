Element.prototype.parallaxify = function() {
    var self = this;
    var dataset = self.dataset;
    var factor = dataset.factor || -1;
    var updating;
    if (dataset.background) {
        self.style.backgroundAttachment = "fixed";
        var xPos = window.getComputedStyle(self).getPropertyValue("background-position").split(" ")[0];
        var update = function() {
            self.style.backgroundPosition = xPos + " " + (window.scrollY * factor) + "px";
            updating = false;
        };
    }
    else {
        var update = function() {
            self.style.transform = "translateY(" + (window.scrollY * factor) + "px)";
            updating = false;
        };
    }
    updating = true;
    update();
    window.addEventListener("scroll", function() {
        if (!updating) {
            updating = true;
            requestAnimationFrame(update);
        }
    });
};
