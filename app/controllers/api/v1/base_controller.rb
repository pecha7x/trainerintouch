module Api
  module V1
    class BaseController < ActionController::API
      before_action :authenticate!
      rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

      protected

      def success_response(payload = {}, code = :ok)
        render json: { success: true, payload: payload }, status: code
      end

      def fail_response(errors = [], code = :unprocessable_entity)
        errors = [errors] if errors.is_a?(String)
        render json: { success: false, errors: errors }, status: code
      end

      private

      def authenticate!
        # TODO: to implement the authentication logic
      end

      def record_not_found(exception)
        fail_response(exception.message)
      end
    end
  end
end
