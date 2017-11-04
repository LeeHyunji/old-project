class CafeController < ApplicationController
    
    def detail 
        @cafe = Cafe.find(params[:id])
    end
    def list
       @place = Place.find(params[:id])
       @cafe_list = Cafe.where("place_id Like?", params[:id])
    end
       
      
   
end
