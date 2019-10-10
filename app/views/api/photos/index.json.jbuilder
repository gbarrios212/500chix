@photos.each do |photo|
    json.set! photo.id do 
        json.extract! photo, :id, :name
        json.photoUrl url_for(photo.photoConnect)
    end
end
