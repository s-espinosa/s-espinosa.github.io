name1 = "larry"
name2 = "curly"
name3 = "moe"
name4 = "shemp"

health1 = 60
health2 = 125
health3 = 100
health4 = 90

puts "Players:\n"
puts "#{name1.capitalize} has a health of #{health1.to_s}"
puts "#{name2.upcase} has a health of #{health2.to_s}"

health2 = health1

puts "#{name2.upcase} has a health of #{health2.to_s}"

health2 = 30

puts "#{name1.capitalize} has a health of #{health1.to_s}"
puts "#{name2.upcase} has a health of #{health2.to_s}"
puts "#{name3.capitalize} has a health of #{health3.to_s}".center(40,"*")
puts "#{name4.capitalize}" + "#{health4} health".rjust(40, ".")
