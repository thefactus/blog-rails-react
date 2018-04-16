Rails.application.routes.draw do
  root 'home#index'

  namespace :admin do
    get '', to: 'dashboard#index', as: '/'
    resources :posts

    devise_for :users, controllers: {
      sessions: 'users/sessions',
      registrations: 'users/registrations'
    }
  end
end
