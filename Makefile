SPEC_DISTRIBUTION_REPO ?= https://github.com/opencontainers/distribution-spec.git
SPEC_DISTRIBUTION_BRANCH ?= v1.0.0
SPEC_DISTRIBUTION_FILEPATH ?= spec.md

get-specs:
	mkdir -p clones/
	rm -rf clones/distribution-spec/
	git clone --depth=1 --branch $(SPEC_DISTRIBUTION_BRANCH) $(SPEC_DISTRIBUTION_REPO) clones/distribution-spec/
	cp clones/distribution-spec/$(SPEC_DISTRIBUTION_FILEPATH) content/specs/distribution-spec.md

yarn:
	yarn

serve: yarn
	hugo server \
		--buildDrafts \
		--buildFuture \
		--disableFastRender

production-build: get-specs
	hugo \
		--minify

preview-build: get-specs
	hugo \
		--baseURL $(DEPLOY_PRIME_URL) \
		--buildDrafts \
		--buildFuture \
		--minify

open:
	open https://opencontainers.netlify.app
