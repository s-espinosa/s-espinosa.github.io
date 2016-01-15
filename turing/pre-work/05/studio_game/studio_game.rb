name1 = "larry"

def time()
  new_time = Time.new()
  new_time.strftime("%T")
end

def say_hello(name, health=100) 
  "I'm #{name.capitalize} with a health of #{health} as of #{time()}."
end

puts(say_hello(name1, 60))
puts(say_hello("curly", 125))
puts(say_hello("moe"))
puts(say_hello("shemp", 90))
