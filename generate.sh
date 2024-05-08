npx @openapitools/openapi-generator-cli generate --skip-validate-spec -i ./swagger/swagger.yaml \
    -g typescript-fetch -o ./ \
    --additional-properties=npmName=blockscout-typescript-fetch \
    --additional-properties=npmVersion=1.0.0 \
    --additional-properties=supportsES6=true \
    --additional-properties=withInterfaces=true \
    --additional-properties=useSingleRequestParameter=true \
    --additional-properties=prefixParameterInterfaces=true \