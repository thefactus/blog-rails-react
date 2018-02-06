Rails.application.routes.draw do
  root 'home#index'

  namespace :admin do
    get '', to: 'dashboard#index', as: '/'
    resources :posts
  end
end
