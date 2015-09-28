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

no_of_words = words_array.length

words_array.each_with_index do |word, index|
	new_index = rand(no_of_words)
	old = words_array[new_index]
	new = word
	words_array[index] = old
	words_array[new_index] = new
end

puts words_array


