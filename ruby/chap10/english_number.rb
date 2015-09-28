puts "Enter an integer: "
entered_integer = gets.chomp.to_i


def english_numbers user_integer

	ones_and_teens = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
	tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", "one hundred"]

	english_tens = ""
	english_ones = ""
	

	if user_integer/10 < 2
		english_ones = ones_and_teens[user_integer - 1]
	elsif user_integer % 10 == 0
		english_tens = tens[(user_integer / 10) -2]
	else
		english_tens = tens[(user_integer / 10) - 2]
		english_ones = ones_and_teens[(user_integer % 10) - 1]
	end

	if english_tens == ""
		number_in_english = english_ones
	else
		number_in_english = english_tens + " " + english_ones
	end

	puts number_in_english
end

english_numbers entered_integer
