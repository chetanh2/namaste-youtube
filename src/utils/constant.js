// we should keep our api key in our env file
const GOOGLE_API_KEY = "AIzaSyACLbJXxDB0IZTgvghLR8H1uwgn8EYdyAk"
export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;


// export const YOUTUBE_SEARCH_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;

export const YOUTUBE_SEARCH_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&key=${GOOGLE_API_KEY}&q=`;