const panels = document.querySelectorAll(".panel");

panels.forEach(function(panel){
    panel.addEventListener('click', function(event){
        event.target.classList.toggle("open");
    })
});

panels.forEach(function(panel){
    panel.addEventListener('transitionend', function(event){
        if(event.propertyName.includes('flex-grow')){
            event.target.classList.toggle("open-active");
        }
    })
});