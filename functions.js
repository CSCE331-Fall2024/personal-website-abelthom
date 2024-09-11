function toggleStyleSheet(){
    const styleElement = document.getElementById('mainStyleSheet');
    const currStyle = styleElement.getAttribute("href");
    const newStyle = (currStyle === "styles.css") ? "old-style.css" : "styles.css"; // checks if it is default

    console.log(newStyle);
    // Switch the stylesheet and store the preference in localStorage
    styleElement.setAttribute("href", newStyle);
    localStorage.setItem("stylesheet", newStyle);
}

window.onload = function(){
    // Get saved style from localStorage, or default to "styles.css"
    var savedstyle = localStorage.getItem("stylesheet");
    
    // Reference the <link> element correctly
    var styleElement = document.getElementById("mainStyleSheet");
    if(savedstyle){
        styleElement.setAttribute("href", savedstyle);
    }
    // styleElement.setAttribute("href", savedstyle);
    // document.getElementById('switchStyle').addEventListener('click', toggleStyleSheet);

    // // Add event listener for the button to switch styles
    // document.getElementById('switchStyle').addEventListener('click', toggleStyleSheet);
};