player1 = "larry"
health1 = 60

player2 = "curly"
health2 = 125

player3 = "moe"
health3 = 100

player4 = "shemp"
health4 = 90

puts "#{player1.capitalize} has a health of #{health1}"
puts "#{player2.upcase} has a health of #{health2}"

health2 = health1
puts "#{player2.upcase} has a health of #{health2}"

health1 = 30

puts "#{player1.capitalize} has a health of #{health1}"
puts "#{player2.upcase} has a health of #{health2}"

puts "#{player3.capitalize} has a health of #{health3}.".center(40,"*")

player3_string = player3.capitalize + " has a health of " + health3.to_s + "."
puts player3_string.center(40,"*")

puts "#{player4.capitalize}".ljust(40,".") + health4.to_s + " health"
puts "#{player4.capitalize.ljust(40,".")} #{health4} health"

current_time = Time.new
date_formatted = current_time.strftime("%A %m/%d/%Y")
time_formatted = current_time.strftime("%-l:%M%p")
puts "The game started on #{date_formatted} at #{time_formatted}"
