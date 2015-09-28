puts "Please enter some words: "
words_array = []

while true
	new_word = gets.chomp
	if new_word == ""
		break
	else
		words_array.push(new_word)
	end
end

sorted_check = 0

while sorted_check == 0
	sorted_check = 1
	words_array.each_with_index do |word, index|
		if words_array[index + 1] == nil #do nothing.
		elsif word.downcase < words_array[index+1].downcase #do nothing.
		else
			first = words_array[index+1]
			second = word
			words_array[index] = first
			words_array[index + 1] = second
			sorted_check = 0
		end
	end
end

puts words_array


