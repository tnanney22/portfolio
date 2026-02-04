const revealItems = document.querySelectorAll('.reveal');

if (revealItems.length) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    revealItems.forEach((item) => observer.observe(item));
}

const header = document.querySelector('.site-header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (!header) return;

    if (currentScroll > lastScroll && currentScroll > 120) {
        header.style.transform = 'translateY(-10px)';
        header.style.opacity = '0.85';
    } else {
        header.style.transform = 'translateY(0)';
        header.style.opacity = '1';
    }

    lastScroll = currentScroll;
});
