# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative 'config/application'

Rails.application.load_tasks

# disable default tailwindcss tasks
# see overwritten bahavour at lib/tasks/tailwindcss_build.rake
Rake::Task['tailwindcss:build'].clear
Rake::Task['tailwindcss:watch'].clear
