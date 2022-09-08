class CreateCaves < ActiveRecord::Migration
  def change
    create_table :caves do |t|
      
      t.string :name
      t.string :region
      t.string :open_time
      t.string :phone
      t.string :price
      t.string :address
      t.integer :outlet_count
      t.integer :wifi_count
      t.boolean :outlet, :default => false
      t.boolean :wifi, :default => false
      t.boolean :quiet, :default => false
      t.boolean :etc, :default => false
      t.boolean :dessert, :default => false
      t.string :comment
      t.integer :scrap_count
      t.float :lat
      t.float :lng
      t.integer :place_id
    
      t.timestamps null: false
    end
  end
end
