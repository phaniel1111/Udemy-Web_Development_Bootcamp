import React from 'react';
function Footer(){
    let day = new Date();
    return(
    <footer>
        <p> Copy right © {day.getFullYear()}</p>
    </footer>);
}

export default Footer;