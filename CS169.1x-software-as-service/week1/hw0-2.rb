def hello(name)
  "Hello, #{name}" 
end

def starts_with_consonant?(s)
  if s.empty? or not /[a-zA-z]/.match(s[0]) 
    return false
  end
  not ['A', 'E', 'I', 'O', 'U'].include?(s[0].upcase)
end

def binary_multiple_of_4?(s)
  if /^[10]*00$/.match(s) or s == '0'
    return true
  end
  false
end


puts binary_multiple_of_4? "0"
