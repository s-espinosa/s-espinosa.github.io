def conversation
  puts "Hello"
  yield
  puts "Goodbye"
end

conversation {puts "Good to meet you!"}

def n_times(n)
  1.upto(n) { |current_count| yield(current_count) }
#  yield(7)
end

n_times(2) do |n|
  puts "#{n} situps"
  puts "#{n} pushups"
  puts "#{n} chinups"
end

1.upto(10) {|i| puts i}

def my_method
  value = yield
  puts "value is: #{value}"
  value * 2
end

new_var = my_method {2}

puts new_var 
