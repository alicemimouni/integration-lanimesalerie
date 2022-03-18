// change navbar on scroll
// ########################

window.onscroll = function() {

    if (window.innerWidth > 990) {

<<<<<<< HEAD
        if(document.documentElement.scrollTop > 80) {
=======
        if(document.documentElement.scrollTop > 80) {
>>>>>>> d305fc597eedbf1d96a735e411f97784ae0f0ffd

            document.querySelector('#bloc-menu').style.display = "none";
            document.querySelector('header').style.position = "sticky";

        }
        else {
           
            document.querySelector('#bloc-menu').style.display = "flex";
            document.querySelector('header').style.position = "initial";
        }
    }

  }
