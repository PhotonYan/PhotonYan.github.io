# frozen_string_literal: true

source "https://rubygems.org"

#gem "jekyll-theme-chirpy", "~> 7.1.0"

gem "jekyll", "~> 4.2"

group :jekyll_plugins do
  gem "jekyll-timeago", "~> 0.13.1"
end
gemspec

gem "html-proofer", "~> 5.0", group: :test

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
