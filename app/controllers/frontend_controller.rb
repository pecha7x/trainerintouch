class FrontendController < ApplicationController
  before_action :authenticate_user!

  layout 'frontend'

  def index; end
end
