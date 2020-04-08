import React, {Component} from 'react';
import cookie from 'react-cookies';
import axios from 'axios';
import {connect} from 'react-redux';
import {Button,Pagination} from 'react-bootstrap';
import PlaylistCard from './PlaylistCard/PlaylistCard';
import TrackListModal from './TrackListModal/TrackListModal';
import PlaylistsModal from './PlaylistsModal/PlaylistsModal';
import {SET_PLAYLIST, SORT_PLAYLIST_ALL, SORT_PLAYLIST_OWNED} from  '../../redux/actions/playlistActions';
import './playlists.css';

class Playlists extends Component  {
    constructor(props){
        super(props);
        this.state = {
            headers: {headers: {'Authorization': 'Bearer ' + cookie.load("access_token") }},
            playlistName: "",
            trackUrl: [],
            tracks: [],
            totalTracks: 0,
            trackUri: [],
            show: false,
            showPlaylistModal: false,
            paginationItems:[],
            active: 1,
            showConfirm: false,
            idList:[]
        }
        
    }
    clearIdList = () =>{
      this.setState({idList:[]});
    }
     addToIdList = (id) =>{
        let tempArr = [...this.state.idList,id];
        this.setState({idList:tempArr});  
    }
    removeFromIdList =(id)=>{
      let index = this.state.idList.indexOf(id);
      let tempList = this.state.idList;
      tempList.splice(index, 1);
      this.setState({idList: tempList})
    }
    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});

    handleShowConfirm = () =>{this.setState({showConfirm:true})};
    handleCloseConfirm = () => {this.setState({showConfirm:false})};

    handlePlaylistsModalClose = () => this.setState({showPlaylistModal: false});
    handlePlaylistsModalShow = () => this.setState({showPlaylistModal: true});

    // loadNextPage = (number) => {
    //   console.log(number);
    //   let temp = (number * 100) - 100;
    //   this.getPlaylistTracks(this.state.trackUrl, this.state.playlistName, temp);
    //   this.setState({
    //       active:number
    //   });
    // }
    // handlePagination = () =>{

    //   this.setState({
    //     paginationItems: []
    //   });
    //   if(this.state.totalTracks > 100){
    //       let temp = this.state.totalTracks / 100;
          
    //       if(temp > 1){
    //         for (let number = 1; number <= Math.ceil(temp); number++) {
    //          this.setState({
    //             paginationItems: [...this.state.paginationItems, 
    //             <Pagination.Item key={number} active={number === this.state.active} onClick={()=>{this.loadNextPage(number)}}>
    //               {number}
    //             </Pagination.Item>]
    //          });
    //         }
    //       }
    //       temp = 0;
    //   }
    // }
   
    // getPlaylistTracks = (url, playlistName, offset) =>{
    //         this.setState({
    //           playlistName: playlistName
    //         });
            
    //         axios.get(url +"/?offset=" + offset, this.state.headers).then(res=>{
    //             this.setState({
    //               tracks: res.data.items,
    //               trackUrl: url
    //             }); 
    //             this.getTotalTracks(url);  
    //             this.handleShow();
    //         }).catch(err=>{
    //             console.log(err);
    //         });
    // }
    getTotalTracks = async(url)=>{
      await axios.get(url + "?fields=total", this.state.headers).then(res=>{
          this.setState({
            totalTracks: res.data.total
          })
          
         // this.handlePagination();
      }).catch(err=>{
          console.log(err);
      });
    }
    getPlaylistTracks = async(url, playlistName, test) =>{
        this.setState({
          playlistName: playlistName
        });

        await this.getTotalTracks(url);  
        let subAmount = this.state.totalTracks;
        let loopTimes = Math.ceil(this.state.totalTracks / 100);
        let offset = this.state.totalTracks - (subAmount);
        for (let i = 0; i < loopTimes; i++) {
            console.log(`offset: ${offset}`);
            console.log(`subamount: ${subAmount}`)
           
            await axios.get(url +"/?offset=" + offset, this.state.headers).then(res=>{
              this.setState({
                tracks: this.state.tracks.length <= 0 ? res.data.items : this.state.tracks.concat(res.data.items),
                trackUrl: url
              }); 
              
             
          }).catch(err=>{
              console.log(err);
          });
          
            subAmount = subAmount - 100;
            offset = this.state.totalTracks - subAmount;
        }
       
        this.handleShow();

    }
    updateTrackUri = (uri) =>{
      this.setState({
        trackUri:uri
      });
     
    }
    componentDidMount(){
        const url = 'https://api.spotify.com/v1/me/playlists';
          
            axios.get(url, this.state.headers).then(res=>{
                
                this.setState({playlist: res.data.items, displayPlaylist: res.data.items});
                this.props.setPlaylist(res.data.items);
            }).catch(err=>{
                console.log(err);
            });
    }

    render(){
        return(
          <div>
              <Button onClick={this.props.sortPlaylistOwned}>Show Only OWNED Playlists</Button>
              <Button className="btn-secondary" onClick={this.props.sortPlaylistAll}>Show Only ALL Playlists</Button>
                <div className="myContainer">
                    {this.props.playlist.value.map((value,index)=>{
                        return <PlaylistCard 
                                  images={value.images}
                                  name={value.name} 
                                  tracksHref={value.tracks.href} 
                                  getPlaylistTracks={this.getPlaylistTracks}/>                                     
                    })}         
                    <TrackListModal
                      show = {this.state.show}
                      handleClose = {this.handleClose}
                      playlistName = {this.state.playlistName}
                      paginationItems = {this.state.paginationItems}
                      tracks = {this.state.tracks}
                      handlePlaylistsModalShow = {this.handlePlaylistsModalShow}
                      handleTrackListModalClose = {this.handleClose}
                      updateTrackUri = {this.updateTrackUri}
                    />
                    <PlaylistsModal
                      handlePlaylistsModalClose = {this.handlePlaylistsModalClose}
                      showPlaylistModal = {this.state.showPlaylistModal}
                      handleTrackListModalShow = {this.handleShow}
                      trackUri = {this.state.trackUri}
                      headers = {this.state.headers}
                      handleShowConfirm={this.handleShowConfirm}
                      showConfirm={this.state.showConfirm}
                      handleCloseConfirm={this.handleCloseConfirm}
                      addToIdList={this.addToIdList}
                      removeFromIdList={this.removeFromIdList}
                      idList = {this.state.idList}
                      clearIdList = {this.clearIdList}
                    />
                    
                </div>
            </div>
        )}
}
const mapStateToProps = (state) => {
  return {
    playlist: state.playlist
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    setPlaylist: (playlist) => { dispatch({type: SET_PLAYLIST, playlist: playlist})},
    sortPlaylistOwned: () => { dispatch({type: SORT_PLAYLIST_OWNED})},
    sortPlaylistAll: () => {dispatch({type: SORT_PLAYLIST_ALL})}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Playlists);