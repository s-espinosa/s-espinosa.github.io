puts "WHAT?"
bye_counter = 0
while true
  sonny_says = gets.chomp
  if sonny_says == "BYE"
    bye_counter += 1
    if bye_counter == 3
      break
    end
    puts "WHAT?"
  elsif sonny_says.upcase == sonny_says
    bye_counter = 0
    additional_year = rand(21)
    year_since = 1930 + additional_year
    puts "NO, NOT SINCE " + year_since.to_s + "!"
  else
    bye_counter = 0
    puts "HUH?! SPEAK UP, SONNY!"
  end
end
