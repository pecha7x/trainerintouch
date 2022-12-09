module Api
  module V1
    class BaseController < ApplicationController
      before_action :authenticate!

      private

      def authenticate!
        # TODO: to implement the authentication logic
      end
    end
  end
end
