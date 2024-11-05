#!/bin/bash
zip source.zip JSON static .env app.js appspec.yml db.js FiEx.js install_dependencies.sh install_node.sh \
package-lock.json package.json processor.js start_app.sh
aws s3 cp source.zip s3://webos-534424/source.zip