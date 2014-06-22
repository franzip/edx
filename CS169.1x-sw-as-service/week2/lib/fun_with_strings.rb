module FunWithStrings
  def palindrome?
    # ignore case, punctiation and nonword chars
    purged = self.gsub(/\W/, "").downcase
    purged == purged.reverse
  end
  
  def count_words
    return {} if self.empty?
    # 0 occurrences for each word at the beginning
    result = Hash.new(0)
    # ignore case and count occurrances for each word
    self.to_s.downcase.scan(/\w+/).each do |word|
      result[word] += 1
    end
    result
  end
  
  def anagram_groups
    result = Array.new
    # sort each word alphabetically and store single copy into array
    sorted = self.split.map { |word| word.chars.sort.join }.uniq
    # string1 and string2 belongs to the same anagram group
    # if string1.sorted == string2.sorted
    sorted.each do |sword|
      # pack words that match sorted word |sword| into an array
      result << self.split.select { |word| word.chars.sort.join == sword }
    end
    result
  end
end

# make all the above functions available as instance methods on Strings:

class String
  include FunWithStrings
end
