module Api
  module V1
    class PeopleController < Api::V1::BaseController
      def index
        resource_collection = resource_class.order(id: :desc)
        success_response(PersonSerializer.render_as_hash(resource_collection, view: :list))
      end

      def create
        resource = resource_class.new(permitted_params)
        if resource.save
          success_response(PersonSerializer.render_as_hash(resource, view: :show))
        else
          fail_response(resource.errors.full_messages)
        end
      end

      def update
        resource = resource_class.find(params[:id])
        if resource.update(permitted_params)
          success_response(PersonSerializer.render_as_hash(resource, view: :show))
        else
          fail_response(resource.errors.full_messages)
        end
      end

      def destroy
        resource = resource_class.find(params[:id])
        if resource.destroy
          success_response
        else
          fail_response('person does not removed')
        end
      end

      private

      def resource_class
        Person
      end

      def permitted_params
        params.require(:person).permit(:name, :phone, :email, :gender, :dob)
      end
    end
  end
end
