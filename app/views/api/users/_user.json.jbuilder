json.extract! user, 
    :id, 
    :username, 
    :email, 
    :photo_ids, 
    :authored_like_ids, 
    :authored_comment_ids, 
    :liked_photo_ids, 
    :commented_photo_ids,
    :bio, 
    :gender, 
    :city, 
    :state, 
    :country, 
    :cameras, 
    :lenses, 
    :first_name, 
    :last_name, 
    :birthday, 
json.profilePictureUrl url_for(user.profilePicture)
