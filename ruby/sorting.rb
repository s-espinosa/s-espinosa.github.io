puts "Give me some words: "
input = "blank"
words_array = []

while true
	input = gets.chomp
	if input == ""
		break
	else
		words_array.push input
	end
end

words_array.sort!
puts words_array
