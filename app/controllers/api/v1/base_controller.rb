module Api
  module V1
    class BaseController < ActionController::API
      before_action :dev_env_delay, if: -> { Rails.env.development? }
      before_action :authenticate!

      rescue_from StandardError, with: :error_occured
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

      def dev_env_delay
        # just to see a properly behavior for load the data from server
        sleep 1
      end

      def authenticate!
        # TODO: to implement the authentication logic
      end

      def record_not_found(exception)
        fail_response(exception.message)
      end

      def error_occured(exception)
        fail_response(exception.message, :internal_server_error)
      end
    end
  end
end
