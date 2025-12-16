$('#btn').click(() => {
    $('#btn-div').addClass('animate__animated')
    $('#btn-div').addClass('animate__backOutUp')
    const audio = new Audio("audio.mp3");
    $('#btn-div').fadeOut(1000)
    setTimeout(() => {
        audio.play()
        $('.center').append(`
        <div class="imgholder animate__animated animate__fadeInUpBig">
            <img src="uwu.jpg" alt="" srcset="" >
        </div>
        `)
        setTimeout(()=>{
            $('.center').prepend(`
                <h1 class="animate__animated animate__lightSpeedInRight" id="top-text">Happy Birthday</h1>
            `)
            $('.center').append(`
                    <h1 class="animate__animated animate__lightSpeedInLeft" id="bottom-text">Luv u Hane <3</h1>
                `)
            setTimeout(()=>{
                $('#top-text').removeClass('animate__lightSpeedInRight').addClass('animate__pulse animate__infinite')
                $('#bottom-text').removeClass('animate__lightSpeedInLeft').addClass('animate__pulse animate__infinite')
            }, 1000)
        },2000)
    }, 2000)

})
particlesJS("particles-js", { "particles": { "number": { "value": 160, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 1, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 4, "size_min": 0.3, "sync": false } }, "line_linked": { "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 600 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": true, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3 }, "repulse": { "distance": 400, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }); var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function () { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
