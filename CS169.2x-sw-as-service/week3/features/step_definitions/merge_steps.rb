Given /^the following (.*) exist:$/ do |type, tab|
  tab.hashes.each do |ele|
  	if    type == 'users'    then User.create(ele)
  	elsif type == 'articles' then Article.create(ele)
  	elsif type == 'comments' then Comment.create(ele)
  	end
  end
end

Given /^I am logged in as (.*) admin$/ do |mod|
  if mod == "non"
    visit '/accounts/login'
    fill_in 'user_login', :with => 'contrib'
    fill_in 'user_password', :with => '1111111'
    click_button 'Login'
  elsif mod == "an"
  	visit '/accounts/login'
    fill_in 'user_login', :with => 'admin'
    fill_in 'user_password', :with => 'aaaaaaaa'
    click_button 'Login'
  end
end

Given /^that the articles "(.*)" and "(.*)" have been merged$/ do |title1, title2|
  article = Article.find_by_title(title1)
  article.merge_with(Article.find_by_title(title2).id)
end