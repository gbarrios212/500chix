class Photo < ApplicationRecord
    validates :name, :author_id, presence: true 

    belongs_to :author, 
        class_name: :User 
    has_one_attached :photo
    # has_many :likes 
    # has_many :comments 
    # has_many :galleries 
    # has_many :folows, 
    #     through: :author, 
    #     source: :followers
    # has_many :photo_galleries
    #     foreign_key: :photo_id
    #     class_name: :Galleries_photos check this!!!! 
    # has_many :galleries, 
    #     through: :photo_galleries
    #     source: :galleries check this!!!!
end