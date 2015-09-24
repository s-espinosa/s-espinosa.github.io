puts "Enter an integer less than 3000: "
number = gets.chomp.to_i
roman_num = ''

roman_num = roman_num + ("M" * (number / 1000))
number = number % 1000
roman_num = roman_num + ("D" * (number / 500))
number = number % 500
roman_num = roman_num + ("C" * (number / 100))
number = number % 100
roman_num = roman_num + ("L" * (number / 50))
number = number % 50
roman_num = roman_num + ("X" * (number / 10))
number = number % 10
roman_num = roman_num + ("V" * (number / 5))
number = number % 5
roman_num = roman_num + ("I" * (number / 1))

puts roman_num

