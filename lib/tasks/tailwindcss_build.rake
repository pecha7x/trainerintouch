#
# This is the overwritten behavior to make
# the gem avaiable for multiple input endpoints
#

namespace :otailwindcss do
  desc 'Build your Tailwind CSS'
  task build: :environment do |_, args|
    debug = args.extras.include?('debug')
    commands_list = TailwindcssCommands.compile_command(debug: debug)
    puts commands_list.inspect
    commands_list.each { |command| system(*command, exception: true) }
  end

  desc 'Watch and build your Tailwind CSS on file changes'
  task watch: :environment do |_, args|
    debug = args.extras.include?('debug')
    poll = args.extras.include?('poll')
    commands_list = TailwindcssCommands.watch_command(debug: debug, poll: poll)
    puts commands_list.inspect

    wait_threads = []
    commands_list.each do |command|
      wait_threads.push(Thread.new { system(*command) })
    end

    ThreadsWait.all_waits(*wait_threads)
  end
end

Rake::Task['assets:precompile'].enhance(['otailwindcss:build'])

module TailwindcssCommands
  class << self
    def input_file_paths
      Dir.glob('app/assets/stylesheets/**/*.tailwind.css')
    end

    def compile_command(debug: false, **kwargs)
      input_file_paths.map do |file_path|
        input_name = File.basename(file_path, '.tailwind.css')
        [
          Tailwindcss::Commands.executable(**kwargs),
          '-i', Rails.root.join(file_path).to_s,
          '-o', Rails.root.join("app/assets/builds/#{input_name}-tailwind.css").to_s,
          '-c', Rails.root.join("config/tailwindcss/#{input_name}.config.js").to_s
        ].tap do |command|
          command << '--minify' unless debug
        end
      end
    end

    def watch_command(poll: false, **kwargs)
      compile_command(**kwargs).each do |command_args|
        command_args.tap do |command|
          command << '-w'
          command << '-p' if poll
        end
      end
    end
  end
end
