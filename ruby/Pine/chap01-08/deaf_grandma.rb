puts "WHAT?"
while true
  sonny_says = gets.chomp
  if sonny_says == "BYE"
    break
  elsif sonny_says.upcase == sonny_says
    additional_year = rand(21)
    year_since = 1930 + additional_year
    puts "NO, NOT SINCE " + year_since.to_s + "!"
  else
    puts "HUH?! SPEAK UP, SONNY!"
  end
end
