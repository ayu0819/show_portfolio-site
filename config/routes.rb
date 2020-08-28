Rails.application.routes.draw do

get 'work/message_app'

get 'work/church'
get 'work/work_banner'
get 'work/portfolio'
get 'work/goto_app'
get 'work/coding_school'
get '/' => 'home#top'
get 'about' =>'home#about'
get 'work' =>'home#work'
end
