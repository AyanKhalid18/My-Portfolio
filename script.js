 // Loading Animation
        $(window).on('load', function() {
            setTimeout(function() {
                $('.loading').addClass('loaded');
            }, 1000);
        });

        // Navbar Scroll Effect
        $(window).scroll(function() {
            if ($(this).scrollTop() > 50) {
                $('.navbar').addClass('nav-scroll');
            } else {
                $('.navbar').removeClass('nav-scroll');
            }
        });

        // Smooth Scroll
        $('a[href^="#"]').on('click', function(e) {
            e.preventDefault();
            var target = $(this.hash);
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 70
                }, 800);
            }
        });

        // Active Nav on Scroll
        $(window).scroll(function() {
            var scrollPos = $(document).scrollTop() + 100;
            $('.navbar-nav a').each(function() {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                if (refElement.length && refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $('.navbar-nav a').removeClass("active");
                    currLink.addClass("active");
                }
            });
        });

        // Mobile Menu Close on Link Click
        $('.navbar-nav a').on('click', function() {
            $('.navbar-collapse').collapse('hide');
        });

        // Animated Headline
        var words = ['Ayan Khalid', 'Web Designer', 'Photography'];
        var currentWord = 0;
        
        function animateHeadline() {
            $('.cd-words-wrapper b').removeClass('is-visible');
            currentWord = (currentWord + 1) % words.length;
            $('.cd-words-wrapper b').eq(currentWord).addClass('is-visible');
        }
        
        setInterval(animateHeadline, 3000);

        // Portfolio Filter
        $('.filtering span').on('click', function() {
            $('.filtering span').removeClass('active');
            $(this).addClass('active');
            
            var filter = $(this).attr('data-filter');
            
            if (filter === '*') {
                $('.gallery .items').fadeIn(300);
            } else {
                $('.gallery .items').fadeOut(300);
                $('.gallery .items' + filter).fadeIn(300);
            }
        });

        // Form Submission
        $('#contact-form').on('submit', function(e) {
            e.preventDefault();
            $('.messages').html('<div style="color: #c9a673; padding: 15px; background: rgba(201, 166, 115, 0.1); border-radius: 5px; margin-bottom: 20px;">Thank you! Your message has been sent successfully.</div>');
            this.reset();
            setTimeout(function() {
                $('.messages').html('');
            }, 5000);
        });