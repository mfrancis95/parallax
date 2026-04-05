Element.prototype.parallaxify = function() {
    const { factor = -1, unit = 'px' } = this.dataset;
    let updating = true;
    const update = () => {
        this.style.setProperty('--scroll-y', (window.scrollY * factor) + unit);
        updating = false;
    };
    update();
    window.addEventListener('scroll', () => {
        if (!updating) {
            updating = true;
            requestAnimationFrame(update);
        }
    }, { passive: true });
};

for (const element of document.getElementsByClassName('parallax')) {
    element.parallaxify();
}