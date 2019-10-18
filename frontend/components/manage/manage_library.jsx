import React from 'react';
import ManageLibraryDetail from './manage_library_detail';

class ManageLibrary extends React.Component{
    constructor(props){
        // // ;
        super(props)
        this.state = { selected: false };
        this.toggleSelect = this.toggleSelect.bind(this);
        this.updateActivePhotoId = this.updateActivePhotoId.bind(this);
    }

    toggleSelect(e) {
        // const currentSelect = this.state.selected;
        // this.setState({ selected: !currentSelect });
        // if (!this.state.selected){
        //     e.target.classList.toggle("selected")
        //     let selectedStatus = this.state.selected;
        //     this.setState({selected: !selectedStatus })
        // } else {

        // }
    }

    updateActivePhotoId(e) {
        // // ;
        this.props.receiveActivePhotoId(e.currentTarget.value);
        this.setState({ selected: true });
        //logic to get rid of selected everywhere else 
        e.currentTarget.classList.toggle("selected")
        // this.setState({selected: false});

    }

    ///dispatch action to store that active photo reducer responds to 
        //select photo 
        //update active photo to id of clicked 
        



    componentDidMount() {
        // // ;
        this.props.fetchPhotos();
    }

    render() {
        if (this.props.photos.length === 0){
            return (
                <div className="library-grid">
                    {/* <button className="upload-button" onClick={this.props.modalSelect}>
                        Upload a Photo
                    </button>{this.props.modalSelect} */}
                </div>
            );
        }

        if (!this.props.photos[0]){
            return <div>Loading</div>
        }

        let photosList = this.props.photos.map(photo => {
            return <li key={photo.id} onClick={this.updateActivePhotoId} 
                className={
                    photo.id === this.props.activePhotoId ? "thumbnail selected" : "thumbnail"
                } 
                value={photo.id}>
                <ManageLibraryDetail photo={photo} key={photo.id}/>
            </li>
        })
        return(
            <div className="library-grid">
                {photosList}
            </div>
        )
    }
}

export default ManageLibrary;