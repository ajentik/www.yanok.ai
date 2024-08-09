# www.yanok.ai

## Setup

* Build image: `docker build -t www.yanok.ai .`
* Install node deps: `docker run --rm -p "4000:4000" -v "$(pwd):/site" -it www.yanok.ai npm install`
* Install bundler deps: `docker run --rm -p "4000:4000" -p "35729:35729" -v "$(pwd):/site" -v "$(pwd)/.bundle_cache:/usr/local/bundle/" -it www.yanok.ai bundle install`
* Run jekyll: `docker run --rm -p "4000:4000" -p "35729:35729" -v "$(pwd):/site" -v "$(pwd)/.bundle_cache:/usr/local/bundle/" -it www.yanok.ai`

## Generating Integration Pages

`docker run --rm -p "4000:4000" -v "$(pwd):/site" -v "$(pwd)/.bundle_cache:/usr/local/bundle/" -it www.yanok.ai bundle exec ruby generate_integration_pages.rb`


## *For MacBook M1 users using rbenv (ruby virtual environment)

## Pre-checks

* Check your ruby environment in the project directory: `ruby -v`, it should match the version number in .ruby-version
* Otherwise, change it to match the version specified. If using rbenv: `rbenv local {ruby_version}`

## Setup

* Build image: `docker build --platform=linux/amd64 -t www.yanok.ai .`
* Install node deps: `docker run --platform=linux/amd64 --rm -p "4000:4000" -v "$(pwd):/site" -it www.yanok.ai npm install`
* Install bundler deps: `docker run --platform=linux/amd64 --rm -p "4000:4000" -p "35729:35729" -v "$(pwd):/site" -v "$(pwd)/.bundle_cache:/usr/local/bundle/" -it www.yanok.ai bundle install`
* Run jekyll: `docker run --platform=linux/amd64 --rm -p "4000:4000" -p "35729:35729" -v "$(pwd)/_site:/srv/jekyll/_site" -v "$(pwd)":/srv/jekyll -v "$(pwd)/.bundle_cache:/usr/local/bundle/" -w /srv/jekyll -it www.yanok.ai bundle exec jekyll serve --livereload --incremental -H 0.0.0.0 -P 4000`

## Generating Integration Pages

`docker run --platform=linux/amd64 --rm -v "$(pwd):/site" -v "$(pwd)/.bundle_cache:/usr/local/bundle/" -w /site -it www.yanok.ai bundle exec ruby scripts/generate_integration_pages.rb`