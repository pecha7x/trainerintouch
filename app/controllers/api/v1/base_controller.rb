module Api
  module V1
    class BaseController < ApplicationController
      before_action :authenticate!

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
    end
  end
end
