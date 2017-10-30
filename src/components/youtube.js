import React, { Component } from 'react';

   const API_KEY = 'AIzaSyAa-POXT2CG7qG-IsFtzM4iev7Vz9XREus'
   const baseUrl = 'https://www.googleapis.com/youtube/v3/channels?part=snippet&forUsername='
   const channel_Name = 'thenewboston'
   let ChannelID = ''
   const count = 7
   let finalURL = `${baseUrl}${channel_Name}&key=${API_KEY}`
   //  const search = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${ChannelID}&part=snippet,id&order=date&maxResults=${Results}`
   const search = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}`

   class Youtube extends Component {
     constructor(props) {
       super(props);
       this.state = {
          videoArray:[]
       };
     }

    componentDidMount(){
      console.log('Component LOADED');
    }

    loadVideos = () =>{
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
        const videoArray = data.items.map(obj => 'https://www.youtube.com/embed/'+obj.id.videoId);
        console.log('VIDEO ARRAY:',videoArray);
        this.setState({videoArray: videoArray})
        console.log('STATE:',this.state.videoArray);
      })
    }

  render(){
    console.log('STATE IN RENDER:',this.state.videoArray);
    return(
      <div className="mainComponent">
      <div>
        <button className="getButton" onClick={this.loadVideos}>Get Youtube Video List</button>
      </div>

        {
          this.state.videoArray.map( (address, i)=>{
            console.log('address',address);
            var frame = <div className="video" key = {i} > <iframe width="400" height="200" src={address} frameBorder="0" allowFullScreen> </iframe></div>
            return frame;
          })
        }
        {this.frame}

      </div>
    )
  }
}

export default Youtube;
