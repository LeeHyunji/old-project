class CreateCafeImages < ActiveRecord::Migration
  def change
    create_table :cafe_images do |t|
       t.string :image_url
       t.integer :cafe_id

      t.timestamps null: false
    end
  end
end
