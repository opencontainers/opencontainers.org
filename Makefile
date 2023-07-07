npm-install:
	npm install

serve: npm-install 
	npm run serve

production-build:
	hugo \
		--minify

preview-build:
	hugo \
		--baseURL $(DEPLOY_PRIME_URL) \
		--buildDrafts \
		--buildFuture \
		--minify

open:
	open https://opencontainers.netlify.app
