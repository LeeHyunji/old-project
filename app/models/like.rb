class Like < ActiveRecord::Base
    belongs_to :users
    belongs_to :cafes
end
