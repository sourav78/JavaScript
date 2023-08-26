// Replace 'YOUR_API_KEY' with your actual API key
const apiKey = 'AIzaSyCMQ0d5xvOP9HTRq1ySKavrQ6kVafARwPI';
const videoId = '5rLFYtXHo9s'; // Replace with the YouTube video ID

// Make API request to get video captions
fetch(`https://www.googleapis.com/youtube/v3/captions?part=snippet&videoId=${videoId}&key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    if (data.items && data.items.length > 0) {
      // Assuming the first track is the English subtitle track
      const captionTrackId = data.items[0].id;
      
      // Fetch the actual subtitle text using the track ID
      fetch(`https://www.googleapis.com/youtube/v3/captions/${captionTrackId}?key=${apiKey}`)
        .then(response => response.json())
        .then(subtitleData => {
            console.log(subtitleData);
          if (subtitleData.body) {
            // Process and use the subtitle text as needed
            const subtitleText = subtitleData.body;
            console.log(subtitleText);
          } else {
            console.log('Subtitle text not found.');
          }
        })
        .catch(error => console.error('Error fetching subtitle text:', error));
    } else {
      console.log('No captions found for the video.');
    }
  })
  .catch(error => console.error('Error fetching captions:', error));

//   let a = ""
// for(let i = 0; i < 50; i++){
    
//     a += $$("ytd-transcript-segment-renderer:nth-child("+i+") > div > yt-formatted-string").map(a=> a.innerText.trim())
// }
// a