# @photos.each do |photo|
#     json.set! photo.id do 
#         json.partial! "api/photos/photo", photo: photo
#         json.photoUrl url_for(photo.photoConnect)
#     end
# end


#alt 
# json.photos do 
    @photos.each do |photo|
        json.set! photo.id do 
            json.extract! photo, 
                :id, 
                :name, 
                :author_id, 
                :comment_ids, 
                :like_ids,
                :commenter_ids, 
                :liker_ids
            json.photoUrl url_for(photo.photoConnect)
        end
    # end
end

# note weirdness here, photos gets nested under photos somewhere. 
