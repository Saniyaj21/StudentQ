

const workSection = document.body.querySelector('.counter');
const workObserver = new IntersectionObserver((entries, observer) => {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) {
        return;
    }


    const number = document.body.querySelector('.counter-numbers');
    // console.log(number);

    incNumber(number);

    function incNumber(number) {
        // console.log(Number(number.innerText));

        let text = Number(number.innerText);
        const value = Number(number.getAttribute('data-target'));
        // console.log(value);
        // console.log(typeof(value));

        const inc = 1;

        if (text < value) {
            number.innerText = inc + text;
            setTimeout(() => {
                incNumber(number)
            }, 100);
        }
        else {
            number.innerText = value;
        }
    }

    observer.unobserve(workSection)
}, {
    root: null,
    threshold: 0,
});

workObserver.observe(workSection);