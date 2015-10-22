puts("What's the name of the file you'd like to check? (don't include .txt)")

file_to_check = gets.chomp
file_to_write = file_to_check + "FHACase" + ".txt"
file_to_check = file_to_check + ".txt"
output_text = ""
count_of_lines = 0

File.open(file_to_check, "rt").each_line do |line|
    count_of_lines += 1
    if /.*\d{3}-\d{7}.*/ =~ line
        temp_case = line.match(/\d{3}-\d{7}/).to_s
        temp_case = temp_case + "\n"
        output_text = output_text + temp_case
    	puts count_of_lines
    else
        # puts("this failed")
    end
end

File.open(file_to_write, "w") do |file|
    file.puts(output_text)
    # file.puts(count_of_lines)
end
