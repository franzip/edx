class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :movie_id, :null => false
      t.integer :moviegoer_id, :null => false
      t.integer :score
      t.text :comment
      t.timestamps

    end
  end
end
