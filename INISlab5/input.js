const targets = document.querySelectorAll(".target");
let tempLeft;
let tempTop;
let currentItem;
let isMoving = false;
let touchStartTime = 0;
let touchTimeout;
function onMouseDown(event) {
    currentItem = this;
    isMoving = true;
    tempLeft = currentItem.style.left;
    tempTop = currentItem.style.top;
    function moveAt(event){
        if (!isMoving) {
            return; 
        }
        currentItem.style.left = event.pageX - currentItem.offsetWidth / 2 + 'px';
        currentItem.style.top = event.pageY - currentItem.offsetHeight / 2 + 'px';
        return;
    }
    function mouseUp() {
        document.removeEventListener('mousemove',moveAt);
        isMoving = false;
        return;
    }
    function escDown() {
        currentItem.style.left = tempLeft;
        currentItem.style.top = tempTop;
    }
    document.addEventListener('keydown',evt =>{
        if (evt.key === 'Escape' ) {
            escDown();
            isMoving = false;
            return;
        }
    });
    document.addEventListener('mousemove', moveAt);
    document.addEventListener('click', mouseUp);
}
function onDoubleClick(event) {
    console.log('qwe');
    currentItem = this;
    isMoving = true;
    tempLeft = currentItem.style.left;
    tempTop = currentItem.style.top;
    function moveAt(event){
        if (!isMoving) {
            return; 
        }
        currentItem.style.left = event.pageX - currentItem.offsetWidth / 2 + 'px';
        currentItem.style.top = event.pageY - currentItem.offsetHeight / 2 + 'px';
    }
    function mouseUp() {
        document.removeEventListener('mousemove',moveAt);
    }
    function escDown() {
        currentItem.style.left = tempLeft;
        currentItem.style.top = tempTop;
    }
    document.addEventListener('mousemove', moveAt);
    document.addEventListener('mouseup', mouseUp);
    document.addEventListener('keydown',evt =>{
        if (evt.key === 'Escape' ) {
            escDown();
            isMoving = false;
            return;
        }   
    });
    return;
}

function touchBut(event) {
    currentItem = this;
    
    tempLeft = currentItem.style.left;
    tempTop = currentItem.style.top;

    const doubleTapThreshold = 200; // Миллисекунды
    const now = Date.now();
    if (now - touchStartTime < doubleTapThreshold) {
        console.log("doubletouch");
        isMoving = true;
        console.log(isMoving);
        document.addEventListener('touchmove', moveAt);
        
        document.addEventListener('touchend', end);


        
        clearTimeout(touchTimeout);
        touchStartTime = 0;

    }
    else {
        touchStartTime = now;
        touchTimeout = setTimeout(function() {
            isMoving = true;
            document.removeEventListener('touchmove', moveAt);
            currentItem.addEventListener('touchmove', moveAt);
            
            currentItem.addEventListener('touchend', function endClick(){ isMoving = false;});
            console.log("touch");
          }, doubleTapThreshold);
        
    }
    function moveAt(event){
        if (event.changedTouches.length === 2) {
            currentItem.style.left = tempLeft;
            currentItem.style.top = tempTop;
            isMoving = false;
            document.removeEventListener('touchmove', moveAt);
            document.removeEventListener('touchstart', moveAt);
        }
        if (!isMoving) {
            return; 
        }
        currentItem.style.left = event.touches[0].clientX - currentItem.offsetWidth / 2 + 'px';
        currentItem.style.top = event.touches[0].clientY - currentItem.offsetHeight / 2 + 'px';
    }

    function end(event) {
        if (event.changedTouches.length === 2) {
            currentItem.style.left = tempLeft;
            currentItem.style.top = tempTop;
            isMoving = false;
            document.removeEventListener('touchmove', moveAt);
            document.removeEventListener('touchstart', moveAt);
        }
        else {
            isMoving = true;
            // document.addEventListener('touchmove', moveAt);
            // document.addEventListener('touchstart', moveAt);
        }
        
    }

 
}


targets.forEach(target => {
    target.addEventListener('mousedown', onMouseDown);
    target.addEventListener('dblclick', onDoubleClick);
    target.addEventListener('touchstart',touchBut);
});
