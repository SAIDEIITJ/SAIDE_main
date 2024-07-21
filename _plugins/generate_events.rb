require 'yaml'

module Jekyll
  class EventPageGenerator < Generator
    safe true

    def generate(site)
      # Load the events data from the YAML file
      events = YAML.load_file(File.join(site.source, '_data', 'events.yaml'))

      # Loop through each event and generate a new page
      events.each do |event|
        next if event['hidden'] == 1

        # Define the path for the event page
        event_path = File.join(site.source, '_events', "#{event['id']}.md")

        # Define the content of the event page
        event_content = <<~HEREDOC
          ---
          layout: event
          title: #{event['name']}
          event: 
            id: #{event['id']}
            name: #{event['name']}
            start: #{event['start']}
            end: #{event['end']}
            description: #{event['description']}
            type: #{event['type']}
            banner: #{event['banner']}
            preset: #{event['preset']}
            tileBackground: #{event['tileBackground']}
            registration: #{event['registration']}
            schedule: #{event['schedule']}
            location: #{event['location']}
            people: #{event['people']}
            sponsors: #{event['sponsors']}
            contact: #{event['contact']}
          ---
        HEREDOC

        # Check if the file already exists and if its content is different
        if File.exist?(event_path)
          existing_content = File.read(event_path)
          next if existing_content == event_content
        end

        # Write the event page to the file system
        File.write(event_path, event_content)
      end
    end
  end
end
