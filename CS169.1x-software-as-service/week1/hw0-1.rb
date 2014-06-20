def sum(int_arr)
  if int_arr.empty?
    return 0
  end
  int_arr.reduce(:+)
end

def max_2_sum(int_arr)
  if int_arr.empty?
    return 0
  elsif int_arr.count == 1
    return int_arr[0]
  end
  # make a deep copy
  copy = Array.new(int_arr)
  copy.delete_at(int_arr.index(int_arr.max))
  int_arr.max + copy.max
end

def sum_to_n?(int_arr, n)
  if int_arr.empty? or int_arr.uniq.count == 1
    return false
  end
  int_arr.uniq.combination(2).any? {|x| sum(x) == n}
end
