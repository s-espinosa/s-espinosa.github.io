require 'prime'

i = 1
j = 1

while i < 100 do
  new_j = i + j
  prime_check = Prime.prime?(i).to_s
  puts (i.to_s + " " + prime_check)
  i = j
  j = new_j
end
