name1 = "larry"
name2 = "curly"
name3 = "moe"

names = [name1, name2, name3]

health1 = 60

puts "#{name1}'s health is #{health1/9.to_i}"

puts "Players:\n"

names.each do |name|
  puts "\t" + name + "\n"
end

puts "Players:\n\tlarry\n\tcurly\n\tmoe"
