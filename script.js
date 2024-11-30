const imageMap = {
    "v1034_8778": "./images/v1080_1656.png", 
    "v1034_8760": "./images/v1075_18.png",   
    "v1034_8769": "./images/v1075_12.png",  
    "v1034_8775": "./images/v1080_1657.png", 
    "v1034_8763": "./images/v1080_1659.png", 
    "v1034_8781": "./images/v1080_1658.png", 
    "v873_3135": "./images/v1075_15.png",    
    "v1034_8766": "./images/v1075_3.png",    
    "v1034_8751": "./images/v1075_6.png",    
    "v1034_8754": "./images/v1075_21.png",   
    "v1034_8757": "./images/v1075_9.png"     
};

Object.keys(imageMap).forEach(className => {
    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach(element => {
        element.addEventListener("click", () => {
            element.style.backgroundImage = `url('${imageMap[className]}')`;
        });
    });
});



