Rails.application.routes.draw do
  devise_scope :user do
    # Redirests signing out users back to sign-in
    get 'users', to: 'devise/sessions#new'
  end
  devise_for :users

  root 'application#index'
  get 'dashboard' => 'dashboard#index'

  get 'dashboard/*path', to: 'dashboard#index', constraints: lambda { |request|
    !request.xhr? && request.format.html?
  }

  namespace :api do
    namespace :v1 do
      resources :people
    end
  end
end
