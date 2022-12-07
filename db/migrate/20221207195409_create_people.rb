class CreatePeople < ActiveRecord::Migration[7.0]
  def change
    create_table :people do |t|
      t.string :name, null: false, default: ''
      t.string :phone
      t.string :email
      t.integer :gender, default: 0
      t.date :dob
      # to add this later since this table will be modified in 1st dev state
      # t.timestamps
      # t.datetime :discarded_at
      # add_index :people, :discarded_at
    end
  end
end
