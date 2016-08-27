class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable, :omniauth_providers => [:facebook]
   
  def self.from_omniauth(auth)
    user = where(provider: auth.provider, uid: auth.uid).first
    unless user
      user = where(email: auth.info.email).first_or_initialize
      user.provider = auth.provider
      user.uid = auth.uid
      user.email = auth.info.email
      user.name = auth.info.name
      user.nickname = auth.info.nickname
      user.first_name = auth.info.first_name
      user.last_name = auth.info.last_name
      user.location = auth.info.location
      user.description = auth.info.description
      user.image = auth.info.image
      user.phone = auth.info.phone
      user.urls = auth.info.urls
      user.password = Devise.friendly_token[0,20]
      user.save!
    end
    user # Make sure we return the user we constructed.
  end
    
  has_many :caves, through: :likes
  has_many :likes
  end
