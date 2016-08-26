class CreateCaves < ActiveRecord::Migration
  def change
    create_table :caves do |t|
      
      t.string :name
      t.string :region
      t.string :open_time
      t.string :close_time
      t.boolean :overnight, :default => false
      t.boolean :outlet, :default => false
      t.integer :scrap_count
      t.float :lat
      t.float :lng
    
      t.timestamps null: false
    end
  end
end
