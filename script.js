// change navbar on scroll
// ########################

window.onscroll = function() {

    if (window.innerWidth > 990) {

        if(document.documentElement.scrollTop > 80) {

            document.querySelector('#bloc-menu').style.display = "none";
        }
        else {
           
            document.querySelector('#bloc-menu').style.display = "flex";
        }
    }

  }