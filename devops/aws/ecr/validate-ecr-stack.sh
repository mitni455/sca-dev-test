#!/bin/bash
#
# @desc Validate the ECR Stack before doing shiz 
# @param {string} STACKYAML - Cloud Formation Yaml 
# 
STACKYAML=ecr.yaml

echo "Validating ECR CloudFormation Stack... "
echo "STACKYAML=$STACKYAML"

aws cloudformation validate-template --template-body file://$STACKYAML 