line_length = 75
puts("Table of Contents".center(line_length))


chapters = [["Getting Started", 1], ["Numbers", 9], ["Letters", 13]]

chapters.each_with_index do |chapt, index|
	chapt_number = index+1
	puts (("Chapter " + chapt_number.to_s + "\: " + chapt[0]).ljust(line_length/2) + ("page " + chapt[1].to_s).rjust(line_length/2))
end
