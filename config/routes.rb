Rails.application.routes.draw do
  root 'home#index'
  resources :posts, only: %i[show index]

  namespace :admin do
    get '', to: 'dashboard#index', as: '/'
    resources :posts, except: %i[edit update destroy]

    devise_for :users, controllers: {
      sessions: 'users/sessions',
      registrations: 'users/registrations'
    }
  end
end
