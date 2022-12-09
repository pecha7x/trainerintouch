module Api
  module V1
    class PeopleController < Api::V1::BaseController
      def index
        people = Person.all
        success_response(PersonSerializer.render_as_hash(people, view: :list))
      end
    end
  end
end
