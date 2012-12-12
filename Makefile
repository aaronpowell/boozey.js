REPORTER=spec

RUNNER=$(BASE)node_modules/mocha/bin/mocha

tests:
	@echo "Running tests"
	node $(RUNNER) ./spec --reporter $(REPORTER)

