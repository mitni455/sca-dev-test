#!/bin/bash
#
# @desc Validate the loadbalancer Stack before doing shiz 
# @param {string} STACKYAML - Cloud Formation Yaml 
# 
STACKYAML=loadbalancer.yaml

echo "Validating loadbalancer CloudFormation Stack... "
echo "STACKYAML=$STACKYAML"

aws cloudformation validate-template --template-body file://$STACKYAML 