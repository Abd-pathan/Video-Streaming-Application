import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Button, TextInput } from "flowbite-react";
import VideoUpload from "./components/VideoUpload";
import VideoPlayer from "./components/VideoPlayer";
import axios from "axios";

function App() {
  const [fieldValue, setFieldValue] = useState("");
  const [videoId, setVideoId] = useState("");

  // Hardcoded default video ID
  const defaultVideoId = "629f8364-555a-4eb2-bbcb-a080e2a84224"; // Replace this with your actual default video ID

  // Set the default video on initial page load
  useEffect(() => {
    setVideoId(defaultVideoId);
  }, []);

  const handleSearchByTitle = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/videos/title/${fieldValue}`
      );
      if (response.data) {
        setVideoId(response.data.videoId); // Assuming the response contains videoId
      }
    } catch (error) {
      console.error("Error fetching video by title:", error);
    }
  };

  return (
    <>
      <Toaster />
      <div className="flex flex-col items-center space-y-9 justify-center py-9">
        <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-100">
          Welcome to Abdullah's Video Streaming App, upload your video and
          search it with your title, Play n enjoy!!!
        </h1>

        <div className="flex mt-14 w-full space-x-2 justify-between">
          <div className="w-full">
            <h1 className="text-white text-center mt-2">Playing Video</h1>
            <div>
              {videoId && (
                <VideoPlayer
                  src={`http://localhost:8080/api/v1/videos/stream/${videoId}`}
                />
              )}
            </div>
          </div>

          <div className="w-full">
            <VideoUpload />
          </div>
        </div>

        <div className="my-4 flex space-x-4">
          <TextInput
            onChange={(event) => setFieldValue(event.target.value)}
            placeholder="Enter video title here"
            name="video_title_field"
          />
          <Button onClick={handleSearchByTitle}>Play</Button>
        </div>
      </div>
    </>
  );
}

export default App;
// import React, { useState } from "react";
// import { Toaster } from "react-hot-toast";
// import { Button, TextInput } from "flowbite-react";
// import VideoUpload from "./components/VideoUpload";
// import VideoPlayer from "./components/VideoPlayer";
// import axios from "axios";

// function App() {
//   const [fieldValue, setFieldValue] = useState("");
//   const [videoId, setVideoId] = useState("");

//   const handleSearchByTitle = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:8080/api/v1/videos/title/${fieldValue}`
//       );
//       if (response.data) {
//         setVideoId(response.data.videoId); // Assuming the response contains videoId
//       }
//     } catch (error) {
//       console.error("Error fetching video by title:", error);
//     }
//   };

//   return (
//     <>
//       <Toaster />
//       <div className="flex flex-col items-center space-y-9 justify-center py-9">
//         <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-100">
//           Welcome to Abdullah's Video Streaming App, upload your video and search it with your title, Play n njoy!!!
//         </h1>

//         <div className="flex mt-14 w-full space-x-2 justify-between">
//           <div className="w-full">
//             <h1 className="text-white text-center mt-2">Playing Video</h1>
//             <div>
//               {videoId && (
//                 <VideoPlayer
//                   src={`http://localhost:8080/api/v1/videos/stream/${videoId}`}
//                 />
//               )}
//             </div>
//           </div>

//           <div className="w-full">
//             <VideoUpload />
//           </div>
//         </div>

//         <div className="my-4 flex space-x-4">
//           <TextInput
//             onChange={(event) => setFieldValue(event.target.value)}
//             placeholder="Enter video title here"
//             name="video_title_field"
//           />
//           <Button onClick={handleSearchByTitle}>Play</Button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

