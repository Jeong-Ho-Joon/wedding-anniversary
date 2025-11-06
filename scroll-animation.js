document.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll('.timeline-item, .hero-image, .message, .timeline-item img');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    targets.forEach(target => observer.observe(target));

    // 👇 페이지 로드 시 이미 화면 안에 있는 요소 강제 표시
    targets.forEach(target => {
        const rect = target.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            target.classList.add('animated');
        }
    });
});
