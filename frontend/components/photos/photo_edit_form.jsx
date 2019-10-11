import PhotosForm from './photos_form';
import React from 'react';

class PhotoEditForm extends React.Component {
    constructor(props){
      super(props)
      this.state = this.props.photo
      // debugger;
      this.handleSubmit = this.handleSubmit.bind(this);
      this.confirmDelete = this.confirmDelete.bind(this);
    }

    componentWillUnmount(){
      this.props.clearErrors();
    }

    handleSubmit(e) {
      e.preventDefault();
      // debugger;
      this.props.action(this.state)
        .then(this.props.history.push('/'));
    }
    
    update(field) {
      return e => {
          this.setState({[field]: e.currentTarget.value})
      }
    }

    confirmDelete(e){
      e.preventDefault();
      let result = confirm("Are you furr real?");
      if (result){
        this.props.deletePhoto(this.props.photo.id).then(this.props.history.push("/"))
      }
    }

    componentDidMount() {
      // debugger;
      this.props.fetchPhoto(this.props.match.params.photoId);
    }
  
    componentDidUpdate(prevProps) {
      // debugger;
      if (prevProps.photo.id != this.props.match.params.photoId) {
        this.props.fetchphoto(this.props.match.params.photoId);
      }
    }
  
    render() {

      const errorsList = (this.props.errors) ? ( 
        this.props.errors.map((error, index) => (
        <li key={index}>{error}</li>
      ))) : (
        <div></div>
      );
      
      // debugger;
      return (
        <form className="edit_form" onSubmit={this.handleSubmit}>
          {errorsList}
          {/* <label htmlFor="file">Choose File:</label>
          <input id="file" type="file" onChange={this.handleFile} />
          <h3>Image Preview</h3>
          {preview} */}
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" onChange={this.update("name")} value={this.state.name}/>

          <label htmlFor="category">Category:</label>
          <select id="category" name="category" type="text" onChange={this.update("category")} value={this.state.category}>
                    <option value="uncategorized">Uncategorized</option>
                    <option value="abstract">Abstract</option>
                    <option value="aerial">Aerial</option>
                    <option value="animals">Animals</option>
                    <option value="black and white">Black and White</option>
                    <option value="celebrities">Celebrities</option>
                    <option value="city and architecture">City & Architecture</option>
                    <option value="commercial">Commercial</option>
                    <option value="concert">Concert</option>
                    <option value="family">Family</option>
                    <option value="fashion">Fashion</option>
                    <option value="film">Film</option>
                    <option value="fine art">Fine Art</option>
                    <option value="food">Food</option>
                    <option value="journalism">Journalism</option>
                    <option value="landscapes">Landscapes</option>
                    <option value="macro">Macro</option>
                    <option value="nature">Nature</option>
                    <option value="night">Night</option>
                    <option value="nude">Nude</option>
                    <option value="people">People</option>
                    <option value="performing arts">Performing Arts</option>
                    <option value="sport">Sport</option>
                    <option value="still life">Still Life</option>
                    <option value="street">Street</option>
                    <option value="transportation">Transportation</option>
                    <option value="travel">Travel</option>
                    <option value="underwater">Underwater</option>
                    <option value="urban exploration">Urban Exploration</option>
                    <option value="wedding">Wedding</option>
                </select>

          <label htmlFor="location">Location:</label>
          <input id="location" type="text" onChange={this.update("location")} value={this.state.location}/>
          <label htmlFor="lat">Latitude:</label>
          <input id="lat" type="text" onChange={this.update("lat")} value={this.state.lat}/>
          <label htmlFor="long">Longitude:</label>
          <input id="long" type="text" onChange={this.update("long")} value={this.state.long}/>
          <label htmlFor="date_taken">Date Taken:</label>
          <input id="date_taken" type="text" onChange={this.update("date_taken")} value={this.state.date_taken}/>
          <label htmlFor="camera">Camera:</label>
          <input id="camera" type="text" onChange={this.update("camera")} value={this.state.camera}/>
          <label htmlFor="lens">Lens:</label>
          <input id="lens" type="text" onChange={this.update("lens")} value={this.state.lens}/>
          <label htmlFor="focal_length">Focal Length:</label>
          <input id="focal_length" type="text" onChange={this.update("focal_length")} value={this.state.focal_length}/>
          <label htmlFor="aperture">Aperture:</label>
          <input id="aperture" type="text" onChange={this.update("aperture")} value={this.state.aperture}/>
          <label htmlFor="shutter_speed">Shutter Speed:</label>
          <input id="shutter_speed" type="text" onChange={this.update("shutter_speed")} value={this.state.shutter_speed}/>
          <label htmlFor="iso">ISO:</label>
          <input id="iso" type="text" onChange={this.update("iso")} value={this.state.iso}/>
          <label htmlFor="description">Description</label>
          <input id="description" type="text" onChange={this.update("description")} value={this.state.description}/>
          <button className="edit-button">Change that Cat!</button>
          <button className="delete-button" onClick={this.confirmDelete}>Delete this Cat :(</button>
        </form>
      );
    }
}
  
export default PhotoEditForm;