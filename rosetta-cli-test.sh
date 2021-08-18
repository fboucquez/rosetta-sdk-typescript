#!/bin/bash
set -e

rosetta-cli check:data --configuration-file example/symbol/rosetta-cli-conf/testnet/config.json
rosetta-cli check:construction --configuration-file example/symbol/rosetta-cli-conf/testnet/config.json
