import React from 'react';
import ReactDOM from 'react-dom';


const titleComponent = () => {
    return (
        <div>
            <h2>Webcam continuous classification</h2>
            <p>Hold some objects up close to your webcam to get a real-time classification!</p>
        </div>
    );
};
ReactDOM.render(titleComponent, document.getElementById("title")); 

// const webcamComponent = () => {
//     return (
//         <div id="liveView" class="videoView">
//             <script src="src/objectRecognition.js"></script>              
//             <button id="webcamButton">Enable Webcam</button>
//             <video id="webcam" autoplay></video>
//         </div>
//     );
// };
// ReactDOM.render(webcamComponent, document.getElementById("root"));