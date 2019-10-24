#!/bin/bash
#
# @desc Validate the Elastic Container Service Stack before doing shiz 
# @param {string} STACKYAML - Cloud Formation Yaml 
# 
STACKYAML=ecs.yaml

echo "Validating Elastic Container Service CloudFormation Stack... "
echo "STACKYAML=$STACKYAML"

aws cloudformation validate-template --template-body file://$STACKYAML 