Element.prototype.parallaxify = function() {
    var self = this;
    var factor = self.dataset.factor || -1;
    var xPos = window.getComputedStyle(element).getPropertyValue("background-position-x");
    var updating;
    var update = function() {
        self.style.backgroundPosition = xPos + " " + (window.scrollY * factor) + "px";
        updating = false;
    };
    updating = true;
    update();
    window.addEventListener("scroll", function() {
        if (!updating) {
            updating = true;
            requestAnimationFrame(update);
        }
    });
};
