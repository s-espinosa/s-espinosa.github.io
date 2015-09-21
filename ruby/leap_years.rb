puts "Beginning year: "
beginning_year = gets.chomp.to_i
puts "End year: "
end_year = gets.chomp.to_i

current_year = beginning_year

while current_year < end_year
  if current_year % 4 == 0 && current_year % 400 == 0
    puts current_year.to_s
  elsif current_year % 4 == 0 && current_year % 100 != 0
    puts current_year.to_s
  end
  current_year += 1
end
