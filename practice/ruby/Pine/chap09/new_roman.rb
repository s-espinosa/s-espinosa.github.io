puts "Enter an integer less than 3000: "
number = gets.chomp.to_i
roman_num = ''

roman_translations = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]]

roman_translations.each do |translation_pair| 
  roman_num = roman_num + (translation_pair[1] * (number / translation_pair[0]))
  number = number % translation_pair[0]
end

puts roman_num

