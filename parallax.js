Element.prototype.parallaxify = function() {
    var self = this;
    var factor = self.dataset.factor || -1;
    var xPos = window.getComputedStyle(self).getPropertyValue("background-position").split(" ")[0];
    var updating;
    var update = function() {
        self.style.backgroundPosition = xPos + " " + (window.scrollY * factor) + "px";
        updating = false;
    };
    self.style.backgroundAttachment = "fixed";
    updating = true;
    update();
    window.addEventListener("scroll", function() {
        if (!updating) {
            updating = true;
            requestAnimationFrame(update);
        }
    });
};
