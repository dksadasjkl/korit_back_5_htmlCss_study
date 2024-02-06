const addBoxButton = document.querySelector(".add-box-button");

addBoxButton.onclick = () => {
    // boxList[0].onclick = () => {
    //     boxList[0].classList.add("blue-box");  

    //     boxList[0].onclick = () => {
    //         let isBlueBox = boxList[0].classList.contains("blue-box");
    //         if(isBlueBox) {
    //             boxList[0].classList.remove("blue-box");
    //             boxList[0].classList.add("red-box");
    //         }
    //     boxList[0].onclick = () => {
    //         let isRedBox = boxList[0].classList.contains("red-box");
    //         if(isRedBox) {
    //             boxList[0].classList.remove("red-box");
    //             boxList[0].classList.add("box");
    //             }
    //         }
    //     }
    // }



    // for (let i = 0; i < boxList.length; i++) {
    //     boxList[i].onclick = () => {
    //         boxList[i].classList.add("blue-box");  
    
    //         boxList[i].onclick = () => {
    //             let isBlueBox = boxList[i].classList.contains("blue-box");
    //             if(isBlueBox) {
    //                 boxList[i].classList.remove("blue-box");
    //                 boxList[i].classList.add("red-box");
    //             }
    //         boxList[i].onclick = () => {
    //             let isRedBox = boxList[i].classList.contains("red-box");
    //             if(isRedBox) {
    //                 boxList[i].classList.remove("red-box");
    //                 }
    //             }
    //         }
    //     }
    // }

    const boxContainer = document.querySelectorAll(".box-container");
    boxContainer[0].innerHTML += `<div class= "box"></div>`;
    const boxList = document.querySelectorAll(".box");

    
    

    for(let box of boxList) {
        box.onclick = () => {
            let isBlueBox = box.classList.contains("blue-box");
            let isRedBox = box.classList.contains("red-box");

            if(!isBlueBox && !isRedBox) {
                box.classList.add("blue-box");
            } else if(isBlueBox && !isRedBox) {
                box.classList.remove("blue-box");
                box.classList.add("red-box");
            } else {
                boxContainer[0].removeChild(box);
                boxContainer[1].appendChild(box);
            }
        }

    }

}





    
       
    
    
    
    
