Rails.application.routes.draw do
  resources :tweets
  namespace :api, defaults: {format: :json} do
    resources :authors, only: [:show]
    get 'authors/compare/:user_1/:user_2', :to => 'authors#compare'
  end
end
