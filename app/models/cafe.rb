class Cafe < ActiveRecord::Base
    has_many :users, through: :likes
    has_many :likes
    belongs_to :place
    has_many :cafe_images

end
