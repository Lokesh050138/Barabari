document.addEventListener('DOMContentLoaded', function() {
    function checkScreenSize() {

        setTimeout(()=>{
            const element = document.getElementsByClassName('forcefullwidth_wrapper_tp_banner');
            const section = document.getElementsByClassName('for-small-size');
           
            if (window.innerWidth <= 999) {
                console.log("done done")
                section[0].style.display = 'block';
                element[0].style.display = 'none';
            } else {
                element[0].style.display = 'block';
                section[0].style.display = 'none';

            }
        },50);
        
    }
    
    // Check screen size on load
    checkScreenSize();
    
    // Add event listener for resize
    window.addEventListener('resize', checkScreenSize);
});
