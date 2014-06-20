class BookInStock
  
  def initialize(isbn, price)
    if isbn.empty? or price <= 0
      raise ArgumentError
    end
    @isbn = isbn
    @price = price
  end

  attr_accessor :isbn
  attr_accessor :price

  def price_as_string
    "$#{format("%.2f", price)}"
  end
end
