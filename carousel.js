document.querySelectorAll(".carousel").forEach(carousel => {
                const slides = carousel.querySelector(".slides");
                const radios = carousel.querySelectorAll("input[type='radio']");
                let i = 0;

                setInterval(() => {
                    i = (i + 1) % radios.length;
                    slides.style.transform = `translateX(-${i * 100}%)`;
                    radios[i].checked = true;
                }, 3000);
            });