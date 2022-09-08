class HomeController < ApplicationController
  def index
   @cafe = Cafe.all
   @place = Place.all
  end
  def search
    #@search_keyword = params[:search_bar]
    outlet = Cafe.where(overnight: to_boolean(params[:overnight]), outlet: to_boolean(params[:outlet]))
    # outlet = Cafe.all
    # redirect_to '/home/index'
    
    render :json => {
      :cafes => outlet
    }
  end
  
  def map
    
  end
  
  def search_bar
   
  end
  
  def to_boolean(str)
    str == 'true'
  end
  
  def mypage

  end

  # def email
    
    
  #   @title=params[:title]
  #   @address=params[:address]
  #   @content=params[:content]
        
  #     mg_client = Mailgun::Client.new("key-db3c1e54124ed4e823f8a3ecc3fdba29")

  #     message_params = {
  #       from: 'ksm3725@naver.com',
  #       to: @address,
  #       subject: @title,
  #       text: @content
  #     }

  #     result = mg_client.send_message('sandbox787f016c83674e2182979f1a2978b123.mailgun.org', message_params).to_h!
  #     logger.info
  #     message_id = result['id']
  #     message = result['message']
      
  #     new_post = Post.new
  #     new_post.title = @title
  #     new_post.address = @address
  #     new_post.content = @content
  #     new_post.save
        
  #     redirect_to "/mypage"

  # end
  
  def click_count
      user_scrap = Like.where("user_id Like ? AND cafe_id Like ?", params[:cafe_id], params[:user_id]).take
      cafe = Cafe.where("id Like ?", params[:cafe_id]).take
     
      if(user_scrap)
        cafe.scrap_count -= 1;
        user_scrap.destroy;
        #UserScrap.destroy(cafe_id: params[:cafe_id], user_id: params[:user_id])
      else
        cafe.scrap_count += 1;
        Like.create(cafe_id: params[:cafe_id], user_id: params[:user_id])
      end
     
      cafe.save;

    #  cafe = Cafe.where("id Like ?", params[:cafe_id]).take
    #  cafe.scrap_count += 1;
    #  cafe.save;
     render :json => {
      :cafe => cafe
    }
     
   
  end
  
  def mypage_search
      # user_cafe = Like.where("user_id Like ?", params[:user_id])
      user = current_user;
      caves = user.caves;
      
       render :json => {
      :caves => caves
    }
  end
end
