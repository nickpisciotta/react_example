10.times do |i|
  Event.create(name: "Event #{i}",
               description: "It's a simple event with number #{i}",
               event_date: Date.today + rand(3).months,
               place: "Random place number #{i}"
               )
end
