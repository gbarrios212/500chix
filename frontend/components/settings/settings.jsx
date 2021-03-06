import React from 'react';
import { Link } from 'react-router-dom';
import merge from 'lodash/merge'

class Settings extends React.Component{
    constructor(props){
        super(props)

        // let newUserProps = Object.assign({}, this.props.currentUser, {profilePicture: null, profilePictureUrl: null});
        // now that i have default pic, don't need this to start as null.

        // let newUserProps = Object.assign({}, this.props.currentUser, {profilePicture: this.props.currentUser.profilePicture, profilePictureUrl: this.props.currentUser.profilePictureUrl});
        // this.state = newUserProps;
        // but this is essentially the same as line 13 

        this.state = this.props.currentUser
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.currentUser.id)
        .then(user => {
            this.setState(user.payload)
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        let keys = Object.keys(this.state)
        // ;
        keys.forEach(key => {
            if (this.state[key]){
                formData.append(`user[${key}]`, this.state[key])
            }
        })
        $.ajax({
          url: `api/users/${this.props.currentUser.id}`,
          method: "PATCH",
          data: formData,
          contentType: false,
          processData: false
        })
          .then(
            response => {
                this.props.updateUser(response);
                this.props.fireSuccess("Profile updated successfully");
            },
            response => this.props.receiveUserErrors(response.responseJSON)
          )
          .then(response => this.props.history.push(`/users/${this.props.currentUser.id}`)
          );
    }

    handleFile(e) {
        // ;
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({profilePicture: file, profilePictureUrl: fileReader.result});
        };
        if (file){
            fileReader.readAsDataURL(file);
        }
    }

    update(field) {
        return e => {
            this.setState({[field]: e.currentTarget.value})
        }
    }


    render (){
        const errorsList = (this.props.errors) ? ( 
            this.props.errors.map((error, index) => (
            <li className="errors" key={index}>{error}</li>
        ))) : (
            <div></div>
        );

        const inputStyle = {
            padding: '20px',
          };

        const preview = this.state.profilePictureUrl ? <img className="avatar-preview" src={this.state.profilePictureUrl} /> : null;
        return(
            <div className="settings-container">
                
                <form className="user-update-form"  onSubmit={this.handleSubmit} >
                    {errorsList}
                    
                    <div className="inputs">

                        <div className="profile-info">
                            <div className="profile-title">
                                <span>
                                    Profile
                                </span>
                            </div>
                            <div className="settings-avatar-container">
                                <div className="settings-avatar-preview-container">
                                    {preview}
                                </div>
                                <label className="upload-avatar-button" id="upload-avatar-button" htmlfor="files">Upload</label>
                                <input style={inputStyle}
                                    className="hidden-photo-upload"
                                    type="file" 
                                    onChange={this.handleFile}
                                    name="" 
                                    id="file"
                                    />
                                <h3 className="avatar-preview-header">Image Preview</h3>
                            </div>


                                        
                            <label htmlFor="city">City</label>
                            <input id="city" type="text" onChange={this.update("city")} value={this.state.city}/>
                            <label htmlFor="state">State</label>
                            <input id="state" type="text" onChange={this.update("state")} value={this.state.state}/>
                            <label htmlFor="country">Country</label>
                            <input id="country" type="text" onChange={this.update("country")} value={this.state.country}/>
                            <label htmlFor="cameras">Cameras</label>
                            <input id="cameras" type="text" onChange={this.update("cameras")} value={this.state.cameras}/>
                            <label htmlFor="lenses">Lenses</label>
                            <input id="lenses" type="text" onChange={this.update("lenses")} value={this.state.lenses}/>
                        </div>

                        <div className="personal-info">
                            <div className="personal-title">
                                <span>
                                    Personal
                                </span>
                            </div>
                            <label htmlFor="username">Username</label>
                            <input id="username" type="text" onChange={this.update("username")} value={this.state.username}/>
                            <label htmlFor="email">Email</label>
                            <input id="email" type="text" onChange={this.update("email")} value={this.state.email}/>
                            <label htmlFor="first_name">First Name</label>
                            <input id="first_name" type="text" onChange={this.update("first_name")} value={this.state.first_name}/>
                            <label htmlFor="last_name">Last Name</label>
                            <input id="last_name" type="text" onChange={this.update("last_name")} value={this.state.last_name}/>
                            <label htmlFor="birthday">Birthday</label>
                            <input id="birthday" type="text" onChange={this.update("birthday")} value={this.state.birthday}/>
                            <label htmlFor="gender">Gender</label>
                            <input id="gender" type="text" onChange={this.update("gender")} value={this.state.gender}/>    
                            <label htmlFor="bio">Bio</label>
                            <textarea id="bio" type="text" onChange={this.update("bio")} value={this.state.bio} placeholder="Tell the community about yourself..."/>  
                        </div>

                    </div>
                    <button className="save-user-changes-button">Save Changes</button>
                    <Link to={`/users/${this.props.currentUser.id}`} className="return-button">Return to Profile</Link>
                </form>
            </div>
        )
    }
}

export default Settings;
