class PersonSerializer < Blueprinter::Base
  identifier :id

  view :list do
    fields :name, :email, :phone
  end

  view :show do
    fields :name, :email, :phone, :gender, :dob
  end
end
