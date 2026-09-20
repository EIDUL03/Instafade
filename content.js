(function () {
    function applyGrayscale() {
        document.documentElement.style.setProperty(
            "filter",
            "grayscale(100%)",
            "important"
        );
    }

    applyGrayscale();

    // Instagram changes its page dynamically, so keep checking.
    const observer = new MutationObserver(applyGrayscale);

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();