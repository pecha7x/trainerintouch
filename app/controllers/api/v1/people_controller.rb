module Api
  module V1
    class PeopleController < Api::V1::BaseController
      def index
        @people = Person.all
        render json: @people
      end
    end
  end
end
