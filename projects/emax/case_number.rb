puts("What's the name of the file you'd like to check? (don't include .txt)")

file_to_check = gets.chomp
file_to_write = file_to_check + "FHACase" + ".txt"
file_to_check = file_to_check + ".txt"
output_text = ""

File.open(file_to_check, "r").each_line do |line|
    if /.*\d{3}-\d{7}.*/ =~ line
        temp_case = line.match(/\d{3}-\d{6}/).to_s
        temp_case = temp_case + "\n"
        output_text = output_text + temp_case
    else
        # puts("this failed")
    end
end

File.open(file_to_write, "w") do |file|
    file.puts(output_text)
end
