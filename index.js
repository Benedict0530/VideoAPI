const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define your JSON response
const jsonResponse = {
    categories: [
      {
        name: 'Movies',
        videos: [
          {
            description: "Big Buck Bunny tells the story...",
            sources: ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"],
            subtitle: "By Blender Foundation",
            thumb: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
            title: "Big Buck Bunny"
          },
          {
            description: "The first Blender Open Movie from 2006",
            sources: ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"],
            subtitle: "By Blender Foundation",
            thumb: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
            title: "Elephant Dream"
          },
          {
            description: "HBO GO now works with Chromecast...",
            sources: ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"],
            subtitle: "By Google",
            thumb: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
            title: "For Bigger Blazes"
          },
          {
            description: "Introducing Chromecast. The easiest way to enjoy online video and music on your TV...",
            sources: ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"],
            subtitle: "By Google",
            thumb: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
            title: "For Bigger Escape"
          },
          {
            description: "Introducing Chromecast. The easiest way to enjoy online video and music on your TV...",
            sources: ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"],
            subtitle: "By Google",
            thumb: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
            title: "For Bigger Fun"
          },
          {
            description: "Introducing Chromecast. The easiest way to enjoy online video and music on your TV...",
            sources: ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"],
            subtitle: "By Google",
            thumb: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",
            title: "For Bigger Joyrides"
          },
          {
            description: "Introducing Chromecast. The easiest way to enjoy online video and music on your TV...",
            sources: ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"],
            subtitle: "By Google",
            thumb: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",
            title: "For Bigger Meltdowns"
          },
          {
            description: "Sintel is an independently produced short film...",
            sources: ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"],
            subtitle: "By Blender Foundation",
            thumb: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
            title: "Sintel"
          },
          {
            description: "Smoking Tire takes the all-new Subaru Outback...",
            sources: ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"],
            subtitle: "By Garage419",
            thumb: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg",
            title: "Subaru Outback On Street And Dirt"
          },
          {
            description: "Tears of Steel was realized with crowd-funding...",
            sources: ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"],
            subtitle: "By Blender Foundation",
            thumb: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg",
            title: "Tears of Steel"
          },
          {
            description: "The Smoking Tire heads out to Adams Motorsports Park...",
            sources: ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"],
            subtitle: "By Garage419",
            thumb: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/VolkswagenGTIReview.jpg",
            title: "Volkswagen GTI Review"
          },
          {
            description: "The Smoking Tire is going on the 2010 Bullrun Live Rally...",
            sources: ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"],
            subtitle: "By Garage419",
            thumb: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WeAreGoingOnBullrun.jpg",
            title: "We Are Going On Bullrun"
          },
          {
            description: "The Smoking Tire meets up with Chris and Jorge...",
            sources: ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"],
            subtitle: "By Garage419",
            thumb: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WhatCarCanYouGetForAGrand.jpg",
            title: "What Car Can You Get For A Grand?"
          }
        ]
      }
    ]
  };
  

// Define a route to serve the JSON response
app.get('/', (req, res) => {
  res.json(jsonResponse);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
