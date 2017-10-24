import React, { Component } from 'react';

   const API_KEY = 'AIzaSyAa-POXT2CG7qG-IsFtzM4iev7Vz9XREus'
   const baseUrl = 'https://www.googleapis.com/youtube/v3/channels?part=snippet&forUsername='
   const channel_Name = 'thenewboston'
   let ChannelID = ''
   const count = 3
   let finalURL = `${baseUrl}${channel_Name}&key=${API_KEY}`
   //  const search = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${ChannelID}&part=snippet,id&order=date&maxResults=${Results}`
   const search = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}`

   class Youtube extends Component {

    componentDidMount(){
      console.log('FINAL URL:', finalURL);
      console.log('Base Search URL:', search);
      fetch(finalURL)
      .then(results => {
        console.log('RESPONSE:', results);
        return results.json();
      }).then(data =>{
        console.log('.then data:',data);
        let id = data.items[0].id
        console.log('ID:',id);
        if(id){
          this.findVideos(id, count)
        }
      })
    }

    findVideos(id, maxCount){
      ChannelID = id
      let searchURL = search+'&channelId='+ChannelID+'&part=snippet,id&order=date&maxResults='+maxCount
      console.log('In Find Video Function:',id);
      console.log('SEARCH URL:',searchURL);
      fetch(searchURL)
      .then(res=>{ return res.json()})
      .then(data=>{
        console.log('final response:', data);
      })
    }

  render(){
    return(
      <div className="mainComponent">
      <div>
        <button>Get Youtube Video List</button>
      </div>
       <iframe width="360" height="150"
       src="https://www.youtube.com/embed/-AbaV3nrw6E"
       frameBorder="0"
       allowFullScreen>
       </iframe>
      </div>
    )
  }
}

export default Youtube;
